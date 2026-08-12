import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { getCategory } from "@/lib/categories";
import TableOfContents from "@/components/TableOfContents";
import AdSlot from "@/components/AdSlot";
import RedFlagBox from "@/components/RedFlagBox";
import References from "@/components/References";
import Disclaimer from "@/components/Disclaimer";
import AuthorBox from "@/components/AuthorBox";
import PostCard from "@/components/PostCard";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const category = getCategory(post.category);
  const relatedPosts = await getRelatedPosts(post);
  const [bodyPartA, bodyPartB] = post.contentParts;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="lg:grid lg:grid-cols-[680px_1fr] lg:gap-10">
        <article className="max-w-[680px]">
          {category && (
            <span className="text-xs font-medium text-gray-500">{category.name}</span>
          )}
          <h1 className="mt-1 text-2xl font-bold text-gray-900">{post.title}</h1>
          <div className="mt-2 flex gap-3 text-xs text-gray-400">
            <span>발행 {post.publishedAt}</span>
            <span>수정 {post.updatedAt}</span>
            <span>읽는 시간 {post.readingTime}분</span>
          </div>

          <TableOfContents headings={post.headings} className="mt-8 lg:hidden" />

          <div className="mt-8 space-y-8">
            <AdSlot />
            <div className="prose" dangerouslySetInnerHTML={{ __html: bodyPartA }} />
            {bodyPartB && (
              <>
                <AdSlot />
                <div className="prose" dangerouslySetInnerHTML={{ __html: bodyPartB }} />
              </>
            )}
            <RedFlagBox />
            {post.references && <References references={post.references} />}
            <Disclaimer />
            <AuthorBox />
          </div>
        </article>

        <aside className="hidden lg:block">
          <TableOfContents headings={post.headings} className="sticky top-8" />
        </aside>
      </div>

      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-lg font-bold text-gray-900">관련 글</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </section>
      )}

      <div className="mx-auto mt-10 max-w-[680px]">
        <AdSlot />
      </div>
    </div>
  );
}
