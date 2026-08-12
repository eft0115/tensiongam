import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 — 텐션감",
  description: "텐션감이 수집하는 정보의 범위와 이용 목적, 이용자의 권리를 안내합니다.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <article className="prose">
        <h1>개인정보처리방침</h1>

        <p>
          텐션감(tensiongam.com, 이하 &ldquo;본 사이트&rdquo;)은 이용자의 개인정보를 중요하게
          생각하며, 관련 법령을 준수합니다.
        </p>

        <h2>1. 수집하는 정보</h2>
        <p>
          본 사이트는 회원가입 절차가 없으며, 이용자의 이름·연락처 등 개인정보를 직접 수집하지
          않습니다.
        </p>
        <p>다만 서비스 이용 과정에서 다음 정보가 자동으로 수집될 수 있습니다.</p>
        <ul>
          <li>접속 IP 주소</li>
          <li>브라우저 종류 및 운영체제</li>
          <li>방문 일시 및 페이지 이용 기록</li>
          <li>유입 경로</li>
        </ul>
        <p>
          문의 페이지를 통해 연락을 주시는 경우, 회신에 필요한 범위에서 이메일 주소와 문의
          내용이 수집됩니다.
        </p>

        <h2>2. 이용 목적</h2>
        <p>수집된 정보는 다음 목적으로만 이용됩니다.</p>
        <ul>
          <li>사이트 이용 통계 분석 및 콘텐츠 개선</li>
          <li>문의에 대한 회신</li>
          <li>광고 게재</li>
        </ul>

        <h2>3. 쿠키 사용</h2>
        <p>
          본 사이트는 서비스 제공을 위해 쿠키를 사용합니다. 쿠키는 이용자의 브라우저에 저장되는
          작은 텍스트 파일입니다.
        </p>
        <p>
          이용자는 브라우저 설정에서 쿠키 저장을 거부하실 수 있습니다. 다만 일부 기능 이용에
          제한이 있을 수 있습니다.
        </p>

        <h2>4. 제3자 서비스</h2>
        <p>본 사이트는 다음 외부 서비스를 이용합니다.</p>

        <p>
          <strong>Google Analytics</strong>
          <br />
          방문자 통계 분석을 위해 사용합니다. 개인을 식별할 수 있는 형태로 수집하지 않습니다.
          <br />
          차단을 원하시는 경우:{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            https://tools.google.com/dlpage/gaoptout
          </a>
        </p>

        <p>
          <strong>Google AdSense</strong>
          <br />
          광고 게재를 위해 사용합니다. Google을 포함한 제3자 공급업체는 쿠키를 사용하여
          이용자의 이전 방문 기록을 바탕으로 광고를 게재할 수 있습니다.
        </p>
        <p>맞춤 광고를 원하지 않으시는 경우 다음에서 설정하실 수 있습니다.</p>
        <ul>
          <li>
            Google 광고 설정:{" "}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
              https://adssettings.google.com
            </a>
          </li>
          <li>
            광고 수신 거부:{" "}
            <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">
              https://www.aboutads.info/choices
            </a>
          </li>
        </ul>
        <p>
          Google의 개인정보처리방침:{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            https://policies.google.com/privacy
          </a>
        </p>

        <p>
          <strong>Cloudflare</strong>
          <br />
          사이트 호스팅 및 보안을 위해 사용합니다.
        </p>

        <h2>5. 보유 및 파기</h2>
        <p>
          자동 수집 정보는 각 서비스 제공자의 정책에 따라 보관되며, 목적 달성 후 파기됩니다.
        </p>
        <p>문의 과정에서 수집된 정보는 회신 완료 후 지체 없이 파기합니다.</p>

        <h2>6. 이용자의 권리</h2>
        <p>
          이용자는 본 사이트가 보유한 자신의 정보에 대해 열람, 정정, 삭제를 요청하실 수
          있습니다. 문의 페이지를 통해 연락 주시면 지체 없이 조치하겠습니다.
        </p>

        <h2>7. 아동의 개인정보</h2>
        <p>
          본 사이트는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 개인정보를 의도적으로
          수집하지 않습니다.
        </p>

        <h2>8. 개인정보 보호책임자</h2>
        <p>
          <strong>성명:</strong> 허물리
          <br />
          <strong>연락처:</strong> contact@tensiongam.com
        </p>

        <h2>9. 변경 고지</h2>
        <p>본 방침이 변경되는 경우 본 페이지를 통해 공지합니다.</p>

        <p className="text-sm text-gray-500">시행일: 2026-08-12</p>
      </article>
    </div>
  );
}
