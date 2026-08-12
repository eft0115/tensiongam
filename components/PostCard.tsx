import Link from "next/link";
import type { Post } from "@/lib/posts";
import { getCategory } from "@/lib/categories";

export default function PostCard({ post }: { post: Post }) {
  const category = getCategory(post.category);

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="block rounded-lg border border-gray-200 bg-white p-5 transition-colors hover:border-gray-300"
    >
      {category && (
        <span className="text-xs font-medium text-gray-500">{category.name}</span>
      )}
      <h3 className="mt-1 text-lg font-bold text-gray-900">{post.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{post.description}</p>
      <div className="mt-3 flex gap-3 text-xs text-gray-400">
        <span>{post.publishedAt}</span>
        <span>읽는 시간 {post.readingTime}분</span>
      </div>
    </Link>
  );
}
