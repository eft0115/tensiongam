import Link from "next/link";
import { categories } from "@/lib/categories";
import { getAllPosts, getFeaturedPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import ReadFirstAccordion from "@/components/ReadFirstAccordion";

export default async function HomePage() {
  const [posts, featuredPosts] = await Promise.all([getAllPosts(), getFeaturedPosts()]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <section>
        <h1 className="text-2xl font-bold text-gray-900">몸 전체의 균형을 되찾는 감각</h1>
        <p className="mt-3 max-w-[680px] text-base text-gray-700">
          어깨가 아픈 이유가 어깨에만 있는 경우는 오히려 드뭅니다. <strong className="font-semibold text-gray-900">텐션감</strong>은
          부위를 나누지 않고, 40~60대가 많이 겪으시는 근골격계 문제를 쉽고 정확하게 정리하는 곳입니다.
        </p>
        <Link
          href="/about"
          className="mt-3 inline-flex min-h-11 items-center text-sm text-gray-600 underline underline-offset-2 hover:text-gray-900"
        >
          허물리 · 물리치료사 · 경력 10년 · 가정의학과 외래 근무
        </Link>
      </section>

      <section className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/category/${category.slug}`}
                className="inline-flex min-h-11 items-center rounded-full border border-gray-300 bg-white px-4 text-sm text-gray-700 hover:border-gray-400"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-gray-900">최근 글</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <ReadFirstAccordion posts={featuredPosts} />
      </section>
    </div>
  );
}
