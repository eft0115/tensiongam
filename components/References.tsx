import type { PostReference } from "@/lib/posts";

export default function References({ references }: { references: PostReference[] }) {
  if (references.length === 0) return null;

  return (
    <div className="max-w-[680px]">
      <p className="text-sm font-bold text-gray-900">참고문헌</p>
      <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
        {references.map((reference) => (
          <li key={reference.url}>
            <a
              href={reference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-900"
            >
              {reference.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
