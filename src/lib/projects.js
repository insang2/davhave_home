export const projects = [
  {
    slug: "tax103",
    clientName: "일공삼택스 — 권지현 세무사",
    siteUrl: "https://tax103.com",
    coverImage: "/media/blog/1785066092622-tax103-cover.jpg",
    tagline: "개발자가 직접 설계한 세무 전문 사이트",
    summary:
      "개인·법인·창업 세무를 전문으로 하는 권지현 세무사의 세무사무소 홈페이지. " +
      "자영업자·창업자를 위한 절세 정보와 실시간 상담 채널을 한 곳에 모았습니다.",
    intro:
      "일공삼택스는 개인사업자·법인·창업 세무를 전문으로 하는 권지현 세무사의 사무소입니다. " +
      "\"연락 안 되는 세무사\" 때문에 답답했던 경험을 해결하기 위해, 실시간 소통 채널과 " +
      "업종별 절세 정보를 한 화면에서 확인할 수 있는 구조로 설계했습니다.",
    stack: ["반응형 웹", "카카오톡 API 연동", "네이버 블로그 연동", "예약 시스템"],
    features: [
      "카카오톡 실시간 상담 연동",
      "상담 예약 시스템",
      "전화 연결 원터치 버튼",
      "네이버 블로그 연동",
      "세금계산기 · 업종 진단 도구",
      "고객유형별(개인·법인·창업) 안내 페이지",
      "세무정보 아티클 · FAQ · 공지사항",
    ],
    verifiedNote:
      "위 내용은 tax103.com을 직접 방문해 확인한 실제 기능입니다.",
  },
  {
    slug: "kconstrade",
    clientName: "한국건설트레이딩 (KCT)",
    siteUrl: "https://kconstrade.com",
    coverImage: "/media/blog/1785066094285-kconstrade-cover.jpg",
    tagline: "Dow Chemical 건축용 실리콘 수출·유통 파트너",
    summary:
      "DOWSIL 790·791·795·977·991·995 건축·구조용 실리콘 실란트의 수출·유통을 담당하는 " +
      "한국건설트레이딩(KCT)의 B2B 비즈니스 사이트.",
    intro:
      "한국건설트레이딩은 Dow Chemical의 DOWSIL 건축용·구조용 실리콘 실란트를 " +
      "국내외 현장에 공급하는 B2B 유통사입니다. 국내 소장님부터 해외 바이어까지 " +
      "언어와 채널이 다른 고객군을 하나의 사이트에서 응대할 수 있도록 설계했습니다.",
    stack: ["다국어(i18n)", "회원 로그인", "WhatsApp API 연동", "B2B 리드 폼"],
    features: [
      "B2B 무료 견적 요청 폼 (리드 수집)",
      "WhatsApp 문의 연동 (해외 바이어 대응)",
      "다국어 지원 (한국어 외 언어 전환)",
      "회원 로그인 시스템",
      "DOWSIL 제품 라인업 카탈로그 (790·791·795·977·991·995)",
    ],
    verifiedNote:
      "위 내용은 kconstrade.com을 직접 방문해 확인한 실제 기능입니다. " +
      "로그인 이후 영역의 견적서·문서 생성 기능은 추가 확인 후 반영 예정입니다.",
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) || null;
}
