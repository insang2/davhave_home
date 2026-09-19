import { head, navBar, escapeHtml, renderFooter } from "./render.js";

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
  ${renderFooter()}
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
  ${renderFooter()}
</body>
</html>`;
}

export function renderRetroBoyPrivacyPage() {
  const title = "RetroBoy 개인정보 처리방침 | Privacy Policy - DAVHAVE";
  const description = "RetroBoy(레트로보이) 모바일 앱의 개인정보 처리방침입니다. 위치 권한(도시명 스탬프 및 사진 GPS EXIF 저장), 카메라, 미디어 저장 권한의 온디바이스 처리 및 구글 플레이 Data Safety 고지 사항을 안내합니다.";
  const canonical = "https://davhave.com/privacy/retroboy";

  const RETROBOY_STYLE = `
    ${POLICY_STYLE}
    .lang-switcher{display:flex;gap:.5rem;margin:1.5rem 0 2rem;}
    .lang-btn{background:rgba(255,107,53,.1);border:1px solid rgba(255,107,53,.3);color:var(--text);font-family:var(--mono);font-size:.85rem;font-weight:700;padding:.5rem 1.1rem;border-radius:100px;cursor:pointer;transition:all .2s;}
    .lang-btn.active{background:var(--accent);color:#17110a;border-color:var(--accent);}
    .data-safety-box{background:rgba(22,19,15,.95);border:2px solid var(--accent);border-radius:16px;padding:1.8rem;margin:2rem 0;box-shadow:0 12px 35px rgba(0,0,0,.4);}
    .data-safety-box h3{font-family:var(--font);font-size:1.25rem;color:var(--accent2);margin-bottom:.8rem;display:flex;align-items:center;gap:.5rem;}
    .data-safety-table{width:100%;border-collapse:collapse;margin-top:1rem;font-size:.88rem;}
    .data-safety-table th,.data-safety-table td{padding:.75rem .9rem;border:1px solid var(--border);text-align:left;}
    .data-safety-table th{background:rgba(255,255,255,.04);color:var(--accent2);font-family:var(--mono);font-size:.82rem;}
    .badge-check{display:inline-block;padding:.2rem .55rem;border-radius:4px;font-size:.75rem;font-weight:700;font-family:var(--mono);}
    .badge-ondevice{background:rgba(34,197,94,.15);color:#4ade80;border:1px solid rgba(34,197,94,.3);}
    .badge-noserver{background:rgba(59,130,246,.15);color:#60a5fa;border:1px solid rgba(59,130,246,.3);}
    .badge-noshare{background:rgba(249,115,22,.15);color:#fb923c;border:1px solid rgba(249,115,22,.3);}
    .badge-opt{background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);}
    .lang-content{display:none;}
    .lang-content.active{display:block;}
    .guide-accordion{margin-top:2rem;background:rgba(242,200,121,.05);border:1px solid rgba(242,200,121,.25);border-radius:12px;padding:1.2rem;}
    .guide-accordion summary{font-weight:700;color:var(--accent2);cursor:pointer;font-family:var(--mono);font-size:.92rem;display:flex;align-items:center;gap:.5rem;}
    .guide-accordion-content{margin-top:1rem;font-size:.88rem;color:var(--text);line-height:1.7;}
  `;

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  ${head({ title, description, canonical })}
  <style>${RETROBOY_STYLE}</style>
</head>
<body>
  ${navBar("/", "← 메인으로")}
  <div class="wrap">
    <span class="eyebrow">// RetroBoy Application Privacy Policy</span>
    <h1>RetroBoy 개인정보 처리방침</h1>
    <p class="desc">${escapeHtml(description)}</p>

    <!-- Language Selector -->
    <div class="lang-switcher">
      <button class="lang-btn active" onclick="switchLanguage('ko')" id="btn-ko">🇰🇷 한국어 (Korean)</button>
      <button class="lang-btn" onclick="switchLanguage('en')" id="btn-en">🇺🇸 English (Global Play Store)</button>
    </div>

    <!-- Meta Card -->
    <div class="policy-meta-box">
      📱 <strong>대상 앱:</strong> RetroBoy (레트로보이) | 🔒 <strong>시행일자:</strong> 2026년 9월 14일 | 🛡️ <strong>개발사:</strong> DAVHAVE (Oscar Lee, useapp.davhave@gmail.com)
    </div>

    <!-- Google Play Data Safety Quick Summary Box -->
    <div class="data-safety-box">
      <h3>🛡️ Google Play Data Safety 핵심 요약 (Data Safety Summary)</h3>
      <p style="font-size:.9rem;color:var(--text);margin-bottom:.8rem;">
        RetroBoy는 사용자의 개인정보 보호를 최우선으로 하며, <strong>모든 데이터 처리는 사용자의 기기 내부(On-Device)에서만 실시간으로 이루어집니다.</strong> 개발사 서버나 제3자에게 위치 정보나 사진이 절대 전송·저장되지 않습니다.
      </p>
      <div style="overflow-x:auto;">
        <table class="data-safety-table">
          <thead>
            <tr>
              <th>데이터 항목</th>
              <th>수집 목적 (Purpose)</th>
              <th>처리 및 저장 방식</th>
              <th>제3자 공유</th>
              <th>필수 여부</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>위치 정보 (Location)</strong><br><span style="font-size:.78rem;color:var(--muted);">대략적인 위치 & 정확한 위치 (GPS)</span></td>
              <td>
                1. 사진 내 <strong>도시명 스탬프(워터마크)</strong> 텍스트 인쇄<br>
                2. 저장되는 사진 파일의 <strong>EXIF GPS 메타데이터</strong> 기록
              </td>
              <td><span class="badge-check badge-ondevice">100% 온디바이스 처리</span><br><span class="badge-check badge-noserver" style="margin-top:.2rem;">외부 서버 전송 없음</span></td>
              <td><span class="badge-check badge-noshare">제3자 공유 없음</span></td>
              <td><span class="badge-check badge-opt">선택 권한 (Optional)</span></td>
            </tr>
            <tr>
              <td><strong>카메라 (Camera)</strong></td>
              <td>레트로 필터 사진 및 비디오 촬영</td>
              <td><span class="badge-check badge-ondevice">기기 로컬 처리</span></td>
              <td><span class="badge-check badge-noshare">공유 없음</span></td>
              <td><strong>필수 (촬영용)</strong></td>
            </tr>
            <tr>
              <td><strong>사진 및 미디어 (Photos/Media)</strong></td>
              <td>촬영된 레트로 사진의 기기 갤러리 저장 및 열람</td>
              <td><span class="badge-check badge-ondevice">기기 로컬 갤러리 보관</span></td>
              <td><span class="badge-check badge-noshare">공유 없음</span></td>
              <td><strong>필수 (저장용)</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- KOREAN CONTENT -->
    <div id="content-ko" class="lang-content active">
      <article class="policy-article">
        <h2>제1조 (목적 및 기본 방침)</h2>
        <p>
          DAVHAVE(이하 "개발사")가 개발 및 서비스하는 모바일 애플리케이션 <strong>RetroBoy(레트로보이)</strong>는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」, 「위치정보의 보호 및 이용 등에 관한 법률」 및 Google Play 개발자 정책을 준수하며, 이용자의 개인정보를 안전하게 관리합니다.
        </p>
        <p>
          RetroBoy는 <strong>'개인정보 최소 수집 원칙'</strong>과 <strong>'온디바이스(On-device) 처리 원칙'</strong>을 적용하여, 서비스 이용에 필요한 위치 정보와 카메라/사진 데이터를 이용자의 단말기 외부 서버로 일절 전송하지 않고 기기 내부에서만 처리합니다.
        </p>

        <h2>제2조 (처리하는 개인정보 및 권한 항목)</h2>
        <p>RetroBoy는 서비스 제공을 위해 다음의 기기 접근 권한 및 정보를 처리합니다.</p>
        <ul>
          <li>
            <strong>위치 정보 (선택 권한 - ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION)</strong>:
            <ul>
              <li><strong>처리 항목</strong>: 기기의 GPS 수신기 또는 네트워크 기반의 위도, 경도 좌표 및 이를 기반으로 역지오코딩(Reverse-geocoding)된 도시명·지역명.</li>
              <li><strong>권한 성격</strong>: 선택적 접근 권한 (이용자가 권한을 허용하지 않아도 기본 사진 촬영 및 레트로 필터 기능은 정상 이용 가능).</li>
            </ul>
          </li>
          <li>
            <strong>카메라 권한 (필수 권한 - CAMERA)</strong>:
            <ul>
              <li><strong>처리 항목</strong>: 실시간 카메라 프리뷰 및 사진 촬영.</li>
              <li><strong>처리 방식</strong>: 단말기 화면 렌더링 및 캡처에만 사용되며 외부에 전송되지 않습니다.</li>
            </ul>
          </li>
          <li>
            <strong>사진 및 미디어 저장소 권한 (필수/선택 권한 - READ_MEDIA_IMAGES, WRITE_EXTERNAL_STORAGE 등)</strong>:
            <ul>
              <li><strong>처리 항목</strong>: RetroBoy 앱으로 촬영 및 합성된 사진을 이용자의 단말기 미디어 갤러리에 저장하거나, 편집을 위해 불러오는 동작.</li>
            </ul>
          </li>
        </ul>

        <h2>제3조 (개인정보 및 위치정보의 이용 목적)</h2>
        <p>RetroBoy에서 처리하는 위치 정보는 오직 다음의 2가지 앱 기능 구현을 위해서만 사용됩니다.</p>
        <ol>
          <li>
            <strong>사진 내 도시명 스탬프(City Name Stamp) 인쇄</strong>:
            이용자가 사진 촬영 시 현재 위치 기반의 도시명(예: Seoul, Tokyo, New York 등)을 레트로 감성의 타임스탬프 워터마크 텍스트로 사진 이미지 위에 직접 인화/합성하기 위해 사용됩니다.
          </li>
          <li>
            <strong>사진 파일 내 GPS EXIF 메타데이터 기록</strong>:
            촬영된 JPEG 사진 파일의 표준 EXIF(Exchangeable Image File Format) 태그에 GPS 위도·경도 좌표를 기록하여, 이용자가 스마트폰 기본 갤러리나 지도 앱에서 촬영 장소를 편리하게 확인하고 앨범을 분류할 수 있도록 지원합니다.
          </li>
        </ol>

        <h2>제4조 (온디바이스 처리 및 외부 서버 전송·제3자 제공 금지)</h2>
        <ul>
          <li><strong>외부 서버 미전송 (No Server Transmission)</strong>: RetroBoy는 개발사 소유의 서버나 클라우드 스토리지로 이용자의 위치 정보, 촬영된 사진, 기기 정보를 전송하거나 보관하지 않습니다. 모든 역지오코딩 및 EXIF 기록은 단말기 OS 자체 API를 통해 로컬에서 실행됩니다.</li>
          <li><strong>제3자 제공 없음 (No Third-Party Sharing)</strong>: 회사는 이용자의 위치 정보나 개인정보를 제3자(광고 네트워크, 마케팅사, 데이터 브로커 등)에게 판매, 대여, 공유 또는 제공하지 않습니다.</li>
          <li><strong>외부 트래커 미사용</strong>: 본 앱은 이용자의 동선을 추적하는 분석 SDK나 개인 맞춤형 광고 트래커를 탑재하지 않습니다.</li>
        </ul>

        <h2>제5조 (개인정보의 보유 및 파기 절차)</h2>
        <ul>
          <li><strong>보유 기간</strong>: 개발사는 서버를 운영하여 데이터를 수집하지 않으므로, 개발사 측에 보관되는 이용자의 개인정보는 존재하지 않습니다.</li>
          <li><strong>파기 방법</strong>: 단말기 내부에 저장된 위치 스탬프 사진 및 EXIF 메타데이터는 이용자가 스마트폰 갤러리나 파일 관리자에서 해당 사진을 삭제하는 즉시 완전히 영구 삭제됩니다. 앱을 삭제(제거)할 경우 앱 전용 샌드박스 데이터도 즉시 소멸합니다.</li>
        </ul>

        <h2>제6조 (이용자의 권리 및 권한 관리/철회 방법)</h2>
        <p>이용자는 언제든지 위치 권한의 수집 및 이용에 대한 동의를 철회할 수 있습니다.</p>
        <ul>
          <li><strong>앱 내 제어</strong>: RetroBoy 설정 화면에서 '위치 스탬프' 또는 'GPS 태그 저장' 기능을 비활성화할 수 있습니다.</li>
          <li><strong>기기 OS 설정을 통한 권한 철회</strong>:
            <ul>
              <li><strong>Android</strong>: [설정] → [애플리케이션(앱)] → [RetroBoy] → [권한] → [위치] → <strong>'허용 안함'</strong> 선택</li>
              <li><strong>iOS</strong>: [설정] → [RetroBoy] → [위치] → <strong>'안 함'</strong> 선택</li>
            </ul>
          </li>
          <li>위치 권한을 거부하더라도 도시명 스탬프와 GPS 태깅을 제외한 모든 카메라 촬영 및 필터 기능은 제약 없이 이용할 수 있습니다.</li>
        </ul>

        <h2>제7조 (개인정보의 안전성 확보 조치)</h2>
        <p>개발사는 이용자의 데이터 안전을 위해 운영체제(Android/iOS)의 표준 보안 아키텍처 및 샌드박스 격리 정책을 준수하며, 임의의 루트 권한 접근이나 비정상적인 데이터 유출을 방지합니다.</p>

        <h2>제8조 (아동의 개인정보 보호)</h2>
        <p>RetroBoy는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 개인정보를 고의로 수집하거나 외부로 전송하지 않습니다.</p>

        <h2>제9조 (개인정보 보호책임자 및 문의처)</h2>
        <p>개인정보 처리 및 위치 권한과 관련하여 문의사항, 의견 또는 불만 제기가 있으신 경우 아래의 연락처로 문의해 주시기 바랍니다.</p>
        <ul>
          <li><strong>개인정보 보호책임자</strong>: Oscar Lee</li>
          <li><strong>직책 및 소속</strong>: DAVHAVE 대표 개발자</li>
          <li><strong>문의 이메일</strong>: <a href="mailto:useapp.davhave@gmail.com">useapp.davhave@gmail.com</a></li>
          <li><strong>대표 웹사이트</strong>: <a href="https://davhave.com" target="_blank" rel="noopener">https://davhave.com</a></li>
        </ul>

        <h2>제10조 (개인정보 처리방침의 변경)</h2>
        <p>본 개인정보 처리방침은 법령 개정, OS 정책 변경, 앱 기능 추가 등에 따라 내용이 수정될 수 있으며, 개정 시 본 웹페이지(https://davhave.com/privacy/retroboy)를 통해 즉시 공지합니다.</p>
      </article>
    </div>

    <!-- ENGLISH CONTENT (FOR GOOGLE PLAY CONSOLE GLOBAL REVIEW) -->
    <div id="content-en" class="lang-content">
      <article class="policy-article">
        <h2>1. Introduction & Privacy by Design</h2>
        <p>
          This Privacy Policy explains how <strong>RetroBoy</strong> (the "App"), developed and distributed by <strong>DAVHAVE</strong> ("we", "us", or "our"), handles your information. We respect your privacy and are committed to protecting it through our <strong>On-Device Processing Policy</strong>.
        </p>
        <p>
          RetroBoy operates under a strict <strong>zero-remote-storage</strong> model. None of your photos, camera streams, or location coordinates are ever transmitted to or stored on our servers or any third-party servers.
        </p>

        <h2>2. Data Handled & Device Permissions</h2>
        <p>To provide its core camera features, RetroBoy requests the following permissions:</p>
        <ul>
          <li>
            <strong>Location Information (Optional - ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION)</strong>:
            <ul>
              <li><strong>Data Types</strong>: Precise and approximate geographic coordinates (GPS latitude and longitude) and localized city/region names resolved via on-device reverse geocoding APIs.</li>
              <li><strong>Nature of Permission</strong>: Optional. You can use the core camera and vintage filters without granting location permission.</li>
            </ul>
          </li>
          <li>
            <strong>Camera (Required - CAMERA)</strong>:
            <ul>
              <li>Required solely to stream the real-time camera viewfinder and capture vintage photos/videos directly on your device.</li>
            </ul>
          </li>
          <li>
            <strong>Storage & Media Access (Required/Optional - READ_MEDIA_IMAGES, WRITE_EXTERNAL_STORAGE)</strong>:
            <ul>
              <li>Required to save captured photos to your device's local photo gallery and allow you to view or edit them within the App.</li>
            </ul>
          </li>
        </ul>

        <h2>3. Purpose of Processing Location Data</h2>
        <p>When enabled by the user, location data is used exclusively for two user-facing features:</p>
        <ol>
          <li>
            <strong>City Name Watermark / Stamp on Photos</strong>:
            The App converts your device's coordinates into a city name (e.g., "Tokyo", "Paris", "New York") and imprints it directly onto the photo as a vintage film camera date/location stamp.
          </li>
          <li>
            <strong>GPS EXIF Metadata Recording in Photo Files</strong>:
            The App embeds standard GPS coordinates into the EXIF header of the saved JPEG image file on your local storage, allowing your phone's native gallery or map app to organize photos by location.
          </li>
        </ol>

        <h2>4. On-Device Only: No Server Collection & No Third-Party Sharing</h2>
        <ul>
          <li><strong>No Server Transmission</strong>: We do NOT operate remote databases or cloud servers for RetroBoy. Your location data and photos never leave your device.</li>
          <li><strong>No Third-Party Sharing or Selling</strong>: We do not share, sell, rent, or monetize your location data or images with advertisers, analytics SDKs, data brokers, or third parties.</li>
          <li><strong>No Tracking SDKs</strong>: The App does not contain third-party behavioral advertising trackers or persistent cross-app tracking libraries.</li>
        </ul>

        <h2>5. Data Retention & Deletion</h2>
        <ul>
          <li><strong>Retention</strong>: Because we do not transmit or store your data on external servers, we hold no user data.</li>
          <li><strong>Deletion</strong>: Location stamps and EXIF data reside strictly within the image files saved on your device's local storage. Deleting a photo from your device's gallery or file manager permanently deletes that data. Uninstalling the app completely removes all app sandbox files.</li>
        </ul>

        <h2>6. How to Manage and Revoke Permissions</h2>
        <p>You have full control over location permissions at any time:</p>
        <ul>
          <li><strong>Inside the App</strong>: You can toggle off the "Location Stamp" or "GPS EXIF Tag" options in the RetroBoy settings menu.</li>
          <li><strong>In Android Settings</strong>: Go to [Settings] → [Apps] → [RetroBoy] → [Permissions] → [Location] → Select <strong>"Don't allow"</strong>.</li>
          <li><strong>In iOS Settings</strong>: Go to [Settings] → [RetroBoy] → [Location] → Select <strong>"Never"</strong>.</li>
          <li>If you revoke location permissions, the App will continue to take photos and apply retro filters normally without stamping city names or embedding GPS tags.</li>
        </ul>

        <h2>7. Security Measures</h2>
        <p>Your data is protected by the operating system's application sandboxing and permission controls. Because no network transmission of your personal media occurs, risk of data interception during transit is eliminated.</p>

        <h2>8. Children's Privacy</h2>
        <p>RetroBoy is not directed to children under the age of 13 (or under 14/16 depending on local jurisdiction). We do not knowingly collect personal data from children.</p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions, suggestions, or concerns regarding this Privacy Policy or your data, please contact our privacy representative:</p>
        <ul>
          <li><strong>Developer / Representative</strong>: Oscar Lee</li>
          <li><strong>Entity</strong>: DAVHAVE</li>
          <li><strong>Email</strong>: <a href="mailto:useapp.davhave@gmail.com">useapp.davhave@gmail.com</a></li>
          <li><strong>Official Website</strong>: <a href="https://davhave.com" target="_blank" rel="noopener">https://davhave.com</a></li>
        </ul>

        <h2>10. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in legal requirements or app features. The latest version will always be published at this permanent URL: <a href="https://davhave.com/privacy/retroboy">https://davhave.com/privacy/retroboy</a>.</p>
      </article>
    </div>

    <!-- Google Play Console Data Safety Form Guide for Developers -->
    <details class="guide-accordion">
      <summary>📋 Google Play Console "데이터 보안(Data Safety)" 설문 폼 작성 체크리스트 (클릭하여 열기)</summary>
      <div class="guide-accordion-content">
        <p>Google Play Console의 <strong>[앱 콘텐츠] → [데이터 보안]</strong> 설문 작성 시 아래와 같이 체크하시면 한 번에 승인받을 수 있습니다:</p>
        <ol style="padding-left:1.3rem;margin-top:.6rem;">
          <li><strong>데이터 수집 및 공유 여부</strong>:
            <ul>
              <li>"앱에서 지원되는 사용자 데이터 유형을 수집하거나 공유합니까?" → <strong>예 (Yes)</strong> (※ 사진 EXIF 파일에 위치 저장)</li>
              <li>"수집된 모든 사용자 데이터가 전송 시 암호화됩니까?" → <strong>해당 없음 (데이터가 외부로 전송되지 않음) 또는 예</strong></li>
              <li>"사용자가 계정을 만들 수 있는 방법이 있습니까?" → <strong>아니요 (계정 없음)</strong></li>
              <li>"사용자가 데이터 삭제를 요청할 수 있는 메커니즘을 제공합니까?" → <strong>예 (기기 내 사진 삭제를 통해 즉시 삭제됨을 개인정보처리방침에 명시)</strong></li>
            </ul>
          </li>
          <li><strong>데이터 유형 선택</strong>:
            <ul>
              <li>[위치] 선택 → <strong>대략적인 위치(Coarse location)</strong> 및 <strong>정확한 위치(Precise location)</strong> 모두 체크</li>
            </ul>
          </li>
          <li><strong>위치 데이터 세부 정보 입력</strong>:
            <ul>
              <li>"이 데이터를 수집합니까, 공유합니까, 아니면 둘 다입니까?" → <strong>수집됨 (Collected)</strong> 체크, 공유됨은 <strong>체크 안 함</strong></li>
              <li>"이 데이터가 일시적으로 처리됩니까?" → <strong>아니요 (No)</strong> (사진 EXIF 메타데이터로 기기에 저장되므로)</li>
              <li>"이 데이터를 수집하는 것이 필수입니까, 아니면 사용자가 선택할 수 있습니까?" → <strong>사용자가 데이터 수집 여부를 선택할 수 있음 (Optional)</strong></li>
              <li>"이 데이터를 수집하는 이유는 무엇입니까?" → <strong>앱 기능(App functionality)</strong> 체크</li>
            </ul>
          </li>
          <li><strong>개인정보처리방침 URL 제출</strong>:
            <ul>
              <li>Play Console의 [앱 콘텐츠] → [개인정보처리방침] URL 입력란에 아래 주소를 입력합니다:</li>
              <li><code>https://davhave.com/privacy/retroboy</code></li>
            </ul>
          </li>
        </ol>
      </div>
    </details>

  </div>

  <script>
    function switchLanguage(lang) {
      document.querySelectorAll('.lang-content').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
      if (lang === 'en') {
        document.getElementById('content-en').classList.add('active');
        document.getElementById('btn-en').classList.add('active');
        window.location.hash = 'en';
      } else {
        document.getElementById('content-ko').classList.add('active');
        document.getElementById('btn-ko').classList.add('active');
        window.location.hash = 'ko';
      }
    }

    // Auto switch based on hash or browser language
    window.addEventListener('DOMContentLoaded', () => {
      if (window.location.hash === '#en') {
        switchLanguage('en');
      } else if (!window.location.hash && navigator.language && !navigator.language.startsWith('ko')) {
        switchLanguage('en');
      }
    });
  </script>

  ${renderFooter()}
</body>
</html>`;
}
