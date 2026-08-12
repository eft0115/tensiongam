import Link from "next/link";

export default function Disclaimer() {
  return (
    <div className="max-w-[680px] rounded-lg border border-gray-200 bg-gray-50 p-5 text-[15px] leading-[1.8] text-gray-600">
      <p>
        이 글은 일반적인 건강 정보를 제공할 목적으로 작성되었으며, 의학적 진단이나
        치료를 대신하지 않습니다. 같은 증상이라도 원인과 적절한 대처는 사람마다
        다르므로, 건강에 관한 결정은 반드시 의료진과 상의하신 후 내리시기
        바랍니다.
      </p>
      <Link href="/disclaimer" className="mt-2 inline-block min-h-11 py-1 font-medium text-gray-800 underline">
        면책조항 전문 보기
      </Link>
    </div>
  );
}
