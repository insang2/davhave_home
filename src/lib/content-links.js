// 사이트별 링크 허브 데이터. 새 사이트를 추가하려면 이 배열에 항목을 하나 더 넣으면 된다.
// projectSlug는 projects.js의 slug와 일치해야 하며, 사이트명·URL·포트폴리오 링크는 거기서 가져온다.
export const contentHub = [
  {
    projectSlug: "tax103",
    intro:
      "일공삼택스는 개인·법인·창업 세무를 전문으로 하는 권지현 세무사의 사무소 사이트로, DAVHAVE가 설계·개발했습니다. " +
      "아래는 실제 방문해 확인한 주요 페이지와 도구입니다.",
    groups: [
      {
        label: "세무 도구",
        links: [
          {
            href: "https://tax103.com/tools/calculator",
            anchor: "세금 계산기로 예상 세액 확인하기",
            description:
              "종합소득세·부가세 등 항목별로 예상 세액을 바로 계산해볼 수 있는 도구. 신고 전 대략적인 부담을 가늠할 때 유용합니다.",
          },
          {
            href: "https://tax103.com/tools/diagnosis",
            anchor: "업종별 세무 진단",
            description: "업종을 입력하면 놓치기 쉬운 절세 포인트와 필요한 신고 항목을 짚어주는 진단 도구.",
          },
          {
            href: "https://tax103.com/tools/expense-check",
            anchor: "경비 인정 여부 검색",
            description: "특정 지출이 세무상 경비로 인정되는지 항목별로 검색해볼 수 있는 페이지.",
          },
          {
            href: "https://tax103.com/tools/freelancer-vs-business",
            anchor: "프리랜서 vs 사업자등록 비교",
            description: "3.3% 프리랜서로 남을지 사업자등록을 할지 고민될 때 세부담을 비교해주는 페이지.",
          },
          {
            href: "https://tax103.com/tools/deadline-calendar",
            anchor: "신고기한 D-Day 캘린더",
            description: "부가세·종소세 등 주요 신고기한을 놓치지 않도록 정리한 캘린더.",
          },
        ],
      },
      {
        label: "고객 유형별 안내",
        links: [
          {
            href: "https://tax103.com/target/startup",
            anchor: "신규·청년 창업자를 위한 절세 설계",
            description: "창업 초기 단계에서 챙겨야 할 세무 신고와 절세 전략을 정리한 안내 페이지.",
          },
          {
            href: "https://tax103.com/target/it-developer",
            anchor: "IT·소프트웨어 개발자 세무 안내",
            description: "연구개발 세액공제, 스톡옵션 과세 등 개발자 특화 세무 이슈를 다룹니다.",
          },
          {
            href: "https://tax103.com/target/solo-business",
            anchor: "1인기업·프리랜서를 위한 종소세 안내",
            description: "3.3% 원천징수 환급과 종합소득세 신고를 함께 정리한 1인사업자용 페이지.",
          },
          {
            href: "https://tax103.com/target/ecommerce",
            anchor: "온라인 쇼핑몰·이커머스 세무",
            description: "플랫폼별(스마트스토어, 쿠팡 등) 정산 구조에 맞춘 세무 처리 안내.",
          },
        ],
      },
      {
        label: "정보 콘텐츠",
        links: [
          {
            href: "https://tax103.com/faq",
            anchor: "자주 묻는 질문(FAQ)",
            description: "기장 대행, 신고 절차, 수수료 등 상담 전 자주 나오는 질문을 모아둔 페이지.",
          },
          {
            href: "https://tax103.com/cases",
            anchor: "실제 절세 상담 사례",
            description: "업종·상황별로 실제 상담을 통해 세액을 줄인 사례를 정리한 페이지.",
          },
          {
            href: "https://tax103.com/tax-law/",
            anchor: "세법 조문 찾아보기",
            description: "관련 세법 핵심 조문을 검색할 수 있는 아카이브. 근거 조문을 직접 확인하고 싶을 때 참고할 만합니다.",
          },
          {
            href: "https://tax103.com/blog",
            anchor: "일공삼택스 세무 블로그",
            description: "개정 세법, 절세 팁 등을 다루는 블로그. 네이버 블로그와 연동되어 운영됩니다.",
          },
        ],
      },
      {
        label: "사무소 정보",
        links: [
          {
            href: "https://tax103.com/about",
            anchor: "권지현 세무사 프로필 및 사무소 소개",
            description: "일공삼택스를 운영하는 권지현 세무사의 이력과 사무소 소개.",
          },
          {
            href: "https://tax103.com/reservation",
            anchor: "상담 예약하기",
            description: "전화나 방문 없이 온라인으로 상담 일정을 잡을 수 있는 예약 페이지.",
          },
        ],
      },
    ],
  },
];
