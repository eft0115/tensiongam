import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import type { CategorySlug } from "./categories";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export interface PostReference {
  label: string;
  url: string;
}

export interface PostFrontmatter {
  title: string;
  description: string;
  slug: string;
  category: CategorySlug;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  coverImage: string;
  readingTime: number;
  references?: PostReference[];
}

export interface Heading {
  id: string;
  text: string;
}

export interface Post extends PostFrontmatter {
  // 본문을 중간 광고 슬롯 기준 두 조각으로 나눈 HTML (SPEC.md 6-2장)
  contentParts: [string, string];
  headings: Heading[];
}

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".md"));
}

export function getAllSlugs(): string[] {
  return getMarkdownFiles().map((file) => file.replace(/\.md$/, ""));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getText(node: any): string {
  if (node.type === "text") return node.value ?? "";
  if (node.children) return node.children.map(getText).join("");
  return "";
}

async function processMarkdown(
  markdown: string
): Promise<{ headings: Heading[]; contentParts: [string, string] }> {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug);

  const mdast = processor.parse(markdown);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hast: any = await processor.run(mdast);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const children: any[] = hast.children ?? [];

  const headings: Heading[] = [];
  const h2Indices: number[] = [];

  children.forEach((node, index) => {
    if (node.type === "element" && node.tagName === "h2") {
      h2Indices.push(index);
      headings.push({ id: String(node.properties?.id ?? ""), text: getText(node) });
    }
  });

  // 본문 길이의 절반 지점(h2 기준)에서 나눠 그 사이에 중간 광고 슬롯을 둡니다.
  let splitIndex = children.length;
  if (h2Indices.length >= 2) {
    splitIndex = h2Indices[Math.ceil(h2Indices.length / 2)];
  }

  const stringify = unified().use(rehypeStringify);
  const htmlA = stringify.stringify({
    type: "root",
    children: children.slice(0, splitIndex),
  } as never);
  const htmlB = stringify.stringify({
    type: "root",
    children: children.slice(splitIndex),
  } as never);

  return { headings, contentParts: [String(htmlA), String(htmlB)] };
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const { headings, contentParts } = await processMarkdown(content);

  return {
    ...(data as PostFrontmatter),
    contentParts,
    headings,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getAllSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return posts
    .filter((post): post is Post => post !== null)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export async function getPostsByCategory(category: CategorySlug): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.category === category);
}

export async function getRelatedPosts(post: Post, limit = 3): Promise<Post[]> {
  const categoryPosts = await getPostsByCategory(post.category);
  return categoryPosts.filter((p) => p.slug !== post.slug).slice(0, limit);
}

// 홈 "먼저 읽어보시면 좋은 글": 기둥글이 아직 없는 초기에는 대표성 있는 발행 글로 채웁니다 (SPEC.md 6-1장).
export async function getFeaturedPosts(limit = 5): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}
