// Phase 6에서 실제 광고 코드를 넣습니다. 승인 전까지는 시각적으로 드러나지 않게
// 높이만 확보해(CLS 방지) 빈 광고 자리로 보이지 않도록 합니다.
export default function AdSlot() {
  return <div className="min-h-[100px] max-w-[680px]" aria-hidden="true" />;
}
