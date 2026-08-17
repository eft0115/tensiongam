import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의 — 텐션감",
  description: "텐션감에 오류 제보, 주제 제안, 그 밖의 문의를 남기는 방법을 안내합니다.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <article className="prose">
        <h1>문의</h1>

        <p>읽어주셔서 감사합니다.</p>

        <h2>이런 연락은 환영합니다</h2>
        <ul>
          <li>내용 중 잘못되었거나 보완이 필요한 부분</li>
          <li>다뤄주었으면 하는 주제</li>
          <li>인용한 연구나 통계에 대한 질문</li>
          <li>그 밖의 사이트 운영에 관한 의견</li>
        </ul>
        <p>
          특히 <strong>내용의 오류를 알려주시는 연락</strong>을 가장 감사히 받겠습니다. 확인 후
          수정하고, 필요한 경우 수정 사실을 글에 밝히겠습니다.
        </p>

        <h2>답변드리기 어려운 것</h2>
        <p><strong>개별 증상에 대한 상담은 어렵습니다.</strong></p>
        <p>
          &ldquo;이런 증상이 있는데 무슨 병일까요&rdquo;, &ldquo;저는 어떤 운동을 해야
          하나요&rdquo; 같은 질문에는 답변을 드릴 수 없습니다.
        </p>
        <p>
          직접 뵙고 평가하지 않은 상태에서 드리는 조언은 도움이 되지 않을뿐더러, 오히려 상태를
          나쁘게 만들 수 있기 때문입니다. 같은 증상이라도 원인이 다르면 접근이 완전히
          달라집니다.
        </p>
        <p>
          번거로우시더라도 가까운 의료기관에서 진료를 받아보시길 권합니다. 그때 어떤 이야기를
          전달하시면 좋을지는 각 글에 정리해 두었습니다.
        </p>

        <h2>연락처</h2>
        <p>
          <strong>이메일:</strong>{" "}
          <a href="mailto:contact@tensiongam.com">contact@tensiongam.com</a>
        </p>
        <p>
          가능한 한 확인 후 회신드리려 하나, 개인 운영이라 답변이 늦거나 어려울 수 있는 점 양해
          부탁드립니다.
        </p>

        <h2>광고·제휴 문의</h2>
        <p>본 사이트는 특정 제품이나 의료기관을 홍보하지 않습니다. 관련 제안은 정중히 사양하겠습니다.</p>
      </article>
    </div>
  );
}
