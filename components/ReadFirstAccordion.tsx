"use client";

import { useState } from "react";
import Link from "next/link";
import type { Post } from "@/lib/posts";
import { getCategory } from "@/lib/categories";

export default function ReadFirstAccordion({ posts }: { posts: Post[] }) {
  const [open, setOpen] = useState(false);

  if (posts.length === 0) return null;

  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex min-h-11 w-full items-center justify-between px-5 py-4 text-left font-bold text-gray-900"
      >
        먼저 읽어보시면 좋은 글
        <span aria-hidden className="text-gray-400">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <ul className="divide-y divide-gray-100 border-t border-gray-100">
          {posts.map((post) => {
            const category = getCategory(post.category);
            return (
              <li key={post.slug}>
                <Link
                  href={`/posts/${post.slug}`}
                  className="flex min-h-11 items-center justify-between gap-4 px-5 py-3 hover:bg-gray-50"
                >
                  <span className="text-gray-800">{post.title}</span>
                  {category && (
                    <span className="shrink-0 text-xs text-gray-400">{category.name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
