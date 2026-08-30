import { head, navBar, escapeHtml } from "./render.js";

const POLICY_STYLE = `
  .policy-article{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:2.5rem;margin-top:2rem;}
  .policy-article h2{font-family:var(--font);font-size:1.35rem;font-weight:700;color:var(--accent2);margin:2rem 0 1rem;padding-bottom:.5rem;border-bottom:1px solid var(--border);}
  .policy-article h2:first-child{margin-top:0;}
  .policy-article h3{font-family:var(--font);font-size:1.1rem;font-weight:600;color:var(--text);margin:1.4rem 0 .6rem;}
  .policy-article p,.policy-article li{color:var(--text);font-size:.95rem;line-height:1.75;margin-bottom:.8rem;}
  .policy-article ul,.policy-article ol{padding-left:1.5rem;margin-bottom:1.2rem;}
  .policy-meta-box{background:rgba(255,107,53,.06);border:1px solid rgba(255,107,53,.2);border-radius:12px;padding:1rem 1.4rem;margin-bottom:2rem;font-family:var(--mono);font-size:.82rem;color:var(--accent);}
`;

export function renderTermsPage() {
  const title = "서비스 이용약관 | DAVHAVE";
  const description = "DAVHAVE 플랫폼 및 서비스 이용에 관한 권리, 의무, 책임사항 및 기타 필요한 사항을 규정한 서비스 이용약관입니다.";
  const canonical = "https://davhave.com/terms";

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description, canonical })}<style>${POLICY_STYLE}</style></head>
<body>
  ${navBar("/", "← 메인으로")}
  <div class="wrap">
    <span class="eyebrow">// Legal & Terms</span>
    <h1>서비스 이용약관</h1>
    <p class="desc">${escapeHtml(description)}</p>

    <div class="policy-meta-box">
      📅 시행일자: 2026년 1월 1일 | 📜 공고일자: 2026년 1월 1일
    </div>

    <article class="policy-article">
      <h2>제1조 (목적)</h2>
      <p>본 약관은 DAVHAVE(이하 "회사"라 합니다)가 제공하는 웹사이트(davhave.com), 모바일 앱, 교육 플랫폼 및 관련 제반 서비스(이하 "서비스"라 합니다)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>

      <h2>제2조 (정의)</h2>
      <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
      <ul>
        <li><strong>"서비스"</strong>라 함은 구현되는 단말기(PC, 휴대형 단말기 등의 유무선 장치)와 상관없이 이용자가 이용할 수 있는 DAVHAVE 및 관련 제반 서비스를 의미합니다.</li>
        <li><strong>"이용자"</strong>란 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
        <li><strong>"회원"</strong>이라 함은 회사의 서비스에 접속하여 본 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.</li>
        <li><strong>"콘텐츠"</strong>라 함은 회사가 서비스를 위해 부호, 문자, 도형, 색상, 음성, 음향, 이미지, 영상 등으로 표현한 모든 정보 및 학습 리소스를 의미합니다.</li>
      </ul>

      <h2>제3조 (약관의 게시와 개정)</h2>
      <ul>
        <li>회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면 또는 하단 푸터에 게시합니다.</li>
        <li>회사는 「약관의 규제에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</li>
        <li>약관을 개정할 경우 개정약관의 적용일무터 최소 7일 전부터 적용일자 및 개정사유를 서비스 내에 공지합니다.</li>
      </ul>

      <h2>제4조 (서비스의 제공 및 변경)</h2>
      <p>회사는 다음과 같은 서비스를 제공합니다.</p>
      <ul>
        <li>모바일 앱 및 웹 애플리케이션 개발 서비스 및 솔루션 컨설팅</li>
        <li>AI, 프롬프트 엔지니어링, 프로그래밍 및 디지털 마케팅 교육 리소스 제공</li>
        <li>기타 회사가 추가 개발하거나 다른 회사와의 제휴계약 등을 통해 회원에게 제공하는 일체의 서비스</li>
      </ul>

      <h2>제5조 (서비스의 중단)</h2>
      <p>회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. 이 경우 회사는 서비스 내 공지사항을 통해 이용자에게 통지합니다.</p>

      <h2>제6조 (저작권의 귀속 및 이용제한)</h2>
      <ul>
        <li>회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.</li>
        <li>이용자는 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</li>
      </ul>

      <h2>제7조 (손해배상 및 면책조항)</h2>
      <ul>
        <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
        <li>회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</li>
        <li>회사는 이용자가 서비스를 이용하여 기대하는 수익을 얻지 못하거나 상실한 것에 대하여 책임을 지지 않으며, 무료로 제공되는 서비스와 관련하여 법령에 특별한 규정이 없는 한 책임을 지지 않습니다.</li>
      </ul>

      <h2>제8조 (재판권 및 준거법)</h2>
      <ul>
        <li>회사와 이용자 간에 발생한 분쟁에 관한 소송은 대한민국법을 준거법으로 합니다.</li>
        <li>회사와 이용자 간 발생한 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다.</li>
      </ul>
    </article>
  </div>
  <footer>
    <div style="margin-bottom:.8rem;">
      <a href="/terms" style="color:var(--text); font-weight:600; margin-right:1rem;">서비스 이용약관</a>
      <a href="/privacy" style="color:var(--muted); margin-right:1rem;">개인정보 처리방침</a>
      <a href="mailto:useapp.davhave@gmail.com" style="color:var(--muted);">문의하기</a>
    </div>
    © ${new Date().getFullYear()} DAVHAVE · Oscar Lee
  </footer>
</body>
</html>`;
}

export function renderPrivacyPage() {
  const title = "개인정보 처리방침 | DAVHAVE";
  const description = "DAVHAVE는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 관련한 고충을 신속하고 원활하게 처리할 수 있도록 개인정보 처리방침을 수립·공개합니다.";
  const canonical = "https://davhave.com/privacy";

  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description, canonical })}<style>${POLICY_STYLE}</style></head>
<body>
  ${navBar("/", "← 메인으로")}
  <div class="wrap">
    <span class="eyebrow">// Legal & Privacy</span>
    <h1>개인정보 처리방침</h1>
    <p class="desc">${escapeHtml(description)}</p>

    <div class="policy-meta-box">
      🔒 시행일자: 2026년 1월 1일 | 🛡️ 개인정보보호 책임자: Oscar Lee (useapp.davhave@gmail.com)
    </div>

    <article class="policy-article">
      <h2>1. 개인정보의 처리 목적</h2>
      <p>DAVHAVE(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
      <ul>
        <li><strong>서비스 제공 및 회원 관리</strong>: 본인 식별·인증, 서비스 부정이용 방지, 각종 고지·통지, 고충 처리</li>
        <li><strong>문의 및 컨설팅 응대</strong>: 이메일 문의 접수, 서비스 견적 및 개발 상담 응대</li>
        <li><strong>서비스 개선 및 마케팅 활용</strong>: 신규 서비스 개발 및 맞춤 서비스 제공, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계 분석 (GA4 등)</li>
      </ul>

      <h2>2. 처리하는 개인정보의 항목</h2>
      <p>회사는 서비스 제공을 위해 최소한의 개인정보를 수집하고 있습니다.</p>
      <ul>
        <li><strong>문의하기 제출 시</strong>: 이메일 주소, 문의 내용 (선택: 성명/회사명)</li>
        <li><strong>서비스 이용 과정에서 자동 수집되는 항목</strong>: IP 주소, 쿠키(Cookie), 서비스 이용 기록, 방문 기록, 기기 정보, 브라우저 유형</li>
      </ul>

      <h2>3. 개인정보의 보유 및 이용 기간</h2>
      <ul>
        <li>회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.</li>
        <li><strong>이메일 문의 및 상담 기록</strong>: 문의 처리 완료 후 3년간 보관 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
        <li><strong>웹사이트 방문 및 서비스 이용 기록</strong>: 3개월 (통신비밀보호법)</li>
      </ul>

      <h2>4. 개인정보의 파기절차 및 파기방법</h2>
      <p>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</p>
      <ul>
        <li><strong>파기절차</strong>: 불필요하게 된 개인정보는 안전하게 별도의 DB로 옮겨져 법령에 따른 일정 기간 저장된 후 파기됩니다.</li>
        <li><strong>파기방법</strong>: 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 로우레벨 포맷 등의 방법을 이용하여 파기합니다.</li>
      </ul>

      <h2>5. 정보주체와 법정대리인의 권리·의무 및 그 행사방법</h2>
      <ul>
        <li>정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</li>
        <li>권리 행사는 이메일(useapp.davhave@gmail.com)을 통해 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.</li>
      </ul>

      <h2>6. 개인정보의 안전성 확보 조치</h2>
      <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
      <ul>
        <li><strong>관리적 조치</strong>: 내부관리계획 수립·시행, 직원 최소화 및 교육</li>
        <li><strong>기술적 조치</strong>: 개인정보처리시스템 등의 접근권한 관리, 암호화 통신(HTTPS/SSL) 적용, 보안프로그램 설치</li>
        <li><strong>물리적 조치</strong>: Cloudflare Edge 네트워크 기반 엣지 인프라 데이터 보안 적용</li>
      </ul>

      <h2>7. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</h2>
      <p>회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다. 이용자는 브라우저 옵션 설정을 통해 쿠키 허용, 쿠키 차단 등의 선택권을 행사할 수 있습니다.</p>

      <h2>8. 개인정보 보호책임자 안내</h2>
      <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
      <ul>
        <li><strong>개인정보 보호책임자 및 담당자</strong>: Oscar Lee</li>
        <li><strong>직책 및 소속</strong>: DAVHAVE 대표 / 개발자</li>
        <li><strong>이메일 문의</strong>: <a href="mailto:useapp.davhave@gmail.com">useapp.davhave@gmail.com</a></li>
      </ul>
    </article>
  </div>
  <footer>
    <div style="margin-bottom:.8rem;">
      <a href="/terms" style="color:var(--muted); margin-right:1rem;">서비스 이용약관</a>
      <a href="/privacy" style="color:var(--text); font-weight:600; margin-right:1rem;">개인정보 처리방침</a>
      <a href="mailto:useapp.davhave@gmail.com" style="color:var(--muted);">문의하기</a>
    </div>
    © ${new Date().getFullYear()} DAVHAVE · Oscar Lee
  </footer>
</body>
</html>`;
}
