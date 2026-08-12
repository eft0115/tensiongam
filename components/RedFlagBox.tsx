const RED_FLAGS = [
  "팔이나 다리에 힘이 빠지거나 감각이 급격히 둔해지는 경우",
  "대소변 조절에 문제가 생긴 경우",
  "외상 이후 통증이 시작된 경우",
  "발열, 원인 모를 체중 감소를 동반한 통증",
  "밤에 누워 있을 때 오히려 심해지는 통증",
  "통증이 갑자기 심해지거나 빠르게 악화되는 경우",
];

export default function RedFlagBox() {
  return (
    <div className="max-w-[680px] rounded-lg border border-amber-300 bg-amber-50 p-5">
      <p className="font-bold text-amber-900">
        이런 증상이 있으시면 지체하지 마시고 병원으로 가세요
      </p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-[1.8] text-amber-900">
        {RED_FLAGS.map((flag) => (
          <li key={flag}>{flag}</li>
        ))}
      </ul>
    </div>
  );
}
