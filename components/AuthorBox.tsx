import Link from "next/link";

export default function AuthorBox() {
  return (
    <div className="flex max-w-[680px] items-start gap-4 rounded-lg border border-gray-200 bg-white p-5">
      <div>
        <p className="font-bold text-gray-900">허물리</p>
        <p className="mt-1 text-sm text-gray-600">
          물리치료사 · 경력 10년 · 가정의학과 의원 근무 경력
        </p>
        <Link
          href="/about"
          className="mt-2 inline-block min-h-11 py-1 text-sm font-medium text-gray-800 underline"
        >
          저자 소개 더 보기
        </Link>
      </div>
    </div>
  );
}
