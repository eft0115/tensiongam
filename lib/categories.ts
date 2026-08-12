export type CategorySlug = "back" | "shoulder" | "knee" | "recovery" | "body";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
}

export const categories: Category[] = [
  { slug: "back", name: "허리·목", description: "요통, 추간판장애, 척추관협착증, 경추" },
  { slug: "shoulder", name: "어깨·팔", description: "오십견, 회전근개, 상과염, 손목, 손가락" },
  { slug: "knee", name: "무릎·발", description: "무릎관절증, 반월판, 족저근막염" },
  { slug: "recovery", name: "수술 후 재활", description: "인공관절, 봉합술, 척추수술 이후" },
  { slug: "body", name: "몸 전체", description: "골다공증, 근감소증, 낙상, 자세, 통계" },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
