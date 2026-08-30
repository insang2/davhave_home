export const STACK_DATA = {
  flutter: {
    name: "Flutter",
    slug: "flutter",
    category: "Mobile",
    tagline: "단일 코드베이스로 구축하는 고성능 크로스플랫폼 UI SDK",
    officialUrl: "https://flutter.dev/",
    docsUrl: "https://docs.flutter.dev/",
    summary: "Google이 개발한 오픈소스 단일 코드베이스 크로스플랫폼 UI 소프트웨어 개발 키트(SDK). iOS, Android, Web, Desktop 응용 프로그램을 단일 Dart 코드베이스로 네이티브 성능급으로 렌더링합니다.",
    features: [
      "Skia / Impeller 엔진을 통한 60/120fps 초고속 네이티브 그래픽 렌더링",
      "Hot Reload 기능을 활용한 압도적인 쾌속 UI 개발 생산성",
      "네이티브 파이프라인 연동을 위한 전용 Platform Channel 지원",
      "Google의 모던 객체지향 언어 Dart 기반의 안정적인 상태 관리"
    ],
    useCases: "모바일 앱 개발, iOS/Android 동시 출시 프로덕트, 아름다운 맞춤형 UI 애니메이션 앱"
  },
  "react-native": {
    name: "React Native",
    slug: "react-native",
    category: "Mobile",
    tagline: "React와 JavaScript로 만드는 네이티브 모바일 애플리케이션",
    officialUrl: "https://reactnative.dev/",
    docsUrl: "https://reactnative.dev/docs/getting-started",
    summary: "Meta(Facebook)가 개발한 오픈소스 UI 프레임워크. JavaScript와 React를 활용하여 iOS 및 Android 플랫폼의 네이티브 모바일 애플리케이션을 효율적으로 구축합니다.",
    features: [
      "React의 컴포넌트 아키텍처와 선언적 UI 프로그래밍 패러다임 활용",
      "iOS UIKIt 및 Android View 네이티브 위젯과의 1:1 직접 매핑",
      "방대한 npm 생태계 라이브러리 및 오픈소스 모듈 재사용성",
      "Fast Refresh를 통한 실시간 코드 변경 즉시 반영"
    ],
    useCases: "크로스플랫폼 모바일 앱, 웹 개발자의 모바일 앱 확장, 스타트업 빠른 MVP 제작"
  },
  swift: {
    name: "Swift",
    slug: "swift",
    category: "Mobile",
    tagline: "Apple 생태계를 대표하는 강력하고 안전한 모던 프로그래밍 언어",
    officialUrl: "https://www.apple.com/swift/",
    docsUrl: "https://www.swift.org/documentation/",
    summary: "Apple이 개발한 고성능, 안전성, 현대적 문법을 갖춘 프로그래밍 언어. iOS, macOS, watchOS, tvOS 애플리케이션 개발의 표준 언어로 사용됩니다.",
    features: [
      "타입 안전성(Type Safety)과 옵셔널(Optionals)을 통한 널 포인터 에러 사전 방지",
      "Objective-C 대비 최고 2.6배 빠른 초고속 C++급 실행 성능",
      "SwiftUI 프레임워크와의 완벽한 결합을 통한 현대적 선언적 UI 작성",
      "Apple 디바이스 하드웨어 및 iOS 최신 API 100% 네이티브 액세스"
    ],
    useCases: "iOS 전용 고성능 네이티브 앱, Apple Watch / Mac 앱, 카메라 및 GPU 그래픽 앱"
  },
  kotlin: {
    name: "Kotlin",
    slug: "kotlin",
    category: "Mobile",
    tagline: "Android 공식 퍼스트클래스 언어이자 현대적 JVM 프로그래밍 언어",
    officialUrl: "https://kotlinlang.org/",
    docsUrl: "https://kotlinlang.org/docs/home.html",
    summary: "JetBrains가 개발하고 Google이 Android 개발의 공식 선호 언어(First-class language)로 지정한 간결하고 안전한 크로스플랫폼 프로그래밍 언어입니다.",
    features: [
      "Null Safety(Null 상호작용 통제)를 통한 NullPointerException 예방",
      "Java와의 100% 완벽한 호환성 및 기존 Java 라이브러리 직접 활용",
      "코루틴(Coroutines)을 활용한 간결하고 직관적인 비동기 프로그래밍",
      "Jetpack Compose와 결합된 최신 Android 선언적 UI 구현"
    ],
    useCases: "Android 네이티브 앱 개발, 서버사이드 Kotlin 백엔드, Kotlin Multiplatform"
  },
  react: {
    name: "React",
    slug: "react",
    category: "Web",
    tagline: "사용자 인터페이스 구축을 위한 선언적 컴포넌트 라이브러리",
    officialUrl: "https://react.dev/",
    docsUrl: "https://react.dev/learn",
    summary: "Meta가 개발한 사용자 인터페이스 구축을 위한 오픈소스 JavaScript 라이브러리. 선언적 UI 컴포넌트 기반 아키텍처와 Virtual DOM을 통한 효율적인 웹 애플리케이션 상태 관리를 제공합니다.",
    features: [
      "컴포넌트 기반 아키텍처(Component-Based Architecture)를 통한 높은 재사용성",
      "Virtual DOM(가상 DOM) 기반의 최소한의 DOM 조작 및 높은 렌더링 성능",
      "React Hooks를 활용한 상태(State) 및 사이드 이펙트의 유연한 관리",
      "전 세계에서 가장 거대한 전폭적인 프론트엔드 오픈소스 생태계"
    ],
    useCases: "단일 페이지 애플리케이션(SPA), 대규모 웹 프론트엔드, 인터랙티브 웹 UI"
  },
  nextjs: {
    name: "Next.js",
    slug: "nextjs",
    category: "Web",
    tagline: "웹 제작을 위한 최강의 풀스택 React 웹 프레임워크",
    officialUrl: "https://nextjs.org/",
    docsUrl: "https://nextjs.org/docs",
    summary: "Vercel이 개발한 React 기반의 풀스택 웹 프레임워크. 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), App Router, 자동 코드 스플리팅 및 이미지 최적화 기능을 제공합니다.",
    features: [
      "App Router 및 Server Components 기반의 초고속 서버 렌더링",
      "SEO(검색엔진 최적화)에 최적화된 동적 SSR 및 SSG 하이브리드 지원",
      "자동 이미지, 폰트, 스크립트 최적화(Optimization)",
      "API Routes를 통한 별도 서버 없는 서버리스 백엔드 엔드포인트 구축"
    ],
    useCases: "SEO가 중요한 상용 웹 서비스, 기업 브랜드 웹사이트, 풀스택 React 웹 앱"
  },
  typescript: {
    name: "TypeScript",
    slug: "typescript",
    category: "Web",
    tagline: "자바스크립트에 정적 타입을 더한 상위집합 프로그래밍 언어",
    officialUrl: "https://www.typescriptlang.org/",
    docsUrl: "https://www.typescriptlang.org/docs/",
    summary: "Microsoft가 개발한 JavaScript의 엄격한 문법적 상위집합(Typed Superset) 프로그래밍 언어. 정적 타입 체킹을 통해 컴파일 타임 에러를 방지하고 대규모 코드베이스의 유지보수성을 극대화합니다.",
    features: [
      "정적 타입 체킹(Static Type Checking)으로 실행 전 에러 사전 감지",
      "강력한 IDE 자동완성, 리팩터링 및 IntelliSense 지원",
      "최신 ECMAScript 표준 문법 사전 지원 및 이전 JS 버전 컴파일 지원",
      "대규모 엔터프라이즈 코드베이스의 문서화 및 안정성 보장"
    ],
    useCases: "대규모 웹 애플리케이션, 모던 프론트엔드/백엔드 프로젝트, 라이브러리 개발"
  },
  "claude-api": {
    name: "Claude API",
    slug: "claude-api",
    category: "AI",
    tagline: "Anthropic의 최첨단 차세대 인텔리전트 LLM API 프레임워크",
    officialUrl: "https://www.anthropic.com/claude",
    docsUrl: "https://docs.anthropic.com/",
    summary: "Anthropic이 개발한 최첨단 차세대 AI 모델(Claude 3.5 Sonnet / Haiku / Opus) API. 고급 추론, 복잡한 코드 작성, 대용량 문맥 파싱 및 에이전틱 워크플로우를 제공합니다.",
    features: [
      "최대 200,000 토큰(약 500페이지)의 초대용량 Context Window 지원",
      "코딩, 데이터 분석 및 도구 사용(Tool Use / Function Calling) 성능 최고 수준",
      "Prompt Caching 지원으로 반복 프롬프트 비용 90% 및 지연시간 85% 절감",
      "Computer Use 및 Agentic Workflow 중심의 지능형 작업 자동화"
    ],
    useCases: "AI 코딩 어시스턴트, 자율형 에이전트, 문서 파싱 파이프라인, 기업형 AI 시스템"
  },
  langchain: {
    name: "LangChain",
    slug: "langchain",
    category: "AI",
    tagline: "LLM 기반 에이전트 및 RAG 시스템 구축 프레임워크",
    officialUrl: "https://www.langchain.com/",
    docsUrl: "https://python.langchain.com/docs/introduction/",
    summary: "거대언어모델(LLM)을 기반으로 인텔리전트 애플리케이션 및 에이전트를 구축하기 위한 오픈소스 개발 프레임워크. 프롬프트 체이닝, RAG, 메모리 및 도구 연동 파이프라인을 제공합니다.",
    features: [
      "다양한 LLM API(Anthropic, OpenAI 등)와 사내 DB 및 웹 도구 표준 연동",
      "RAG(검색 증강 생성) 구축을 위한 Document Loaders 및 Vector Stores 연동",
      "LangGraph를 활용한 상태 기반 멀티 에이전트 오케스트레이션",
      "파이썬 및 자바스크립트/타입스크립트 라이브러리 동시 지원"
    ],
    useCases: "사내 데이터 기반 RAG 챗봇, 멀티 에이전트 시스템, LLM 워크플로우 자동화"
  },
  python: {
    name: "Python",
    slug: "python",
    category: "AI",
    tagline: "AI, 데이터 분석 및 자동화를 주도하는 글로벌 표준 언어",
    officialUrl: "https://www.python.org/",
    docsUrl: "https://docs.python.org/3/",
    summary: "세계적으로 가장 널리 쓰이는 고급 프로그래밍 언어. 풍부한 생태계를 바탕으로 인공지능(AI), 머신러닝, 데이터 분석, 웹 백엔드 및 자동화 스크립트 분야의 표준 언어로 자리잡았습니다.",
    features: [
      "사람의 언어와 유사한 간결하고 직관적인 문법 구조로 높은 생산성",
      "NumPy, Pandas, PyTorch, TensorFlow 등 독보적인 AI/데이터 생태계",
      "FastAPI, Django, Flask 등 강력한 백엔드 웹 프레임워크 지원",
      "크롤링, 데이터 가공, 자동화 파이프라인 구축에 최적화"
    ],
    useCases: "AI 모델 훈련 및 엔지니어링, 데이터 분석, 파이프라인 자동화, 백엔드 API"
  },
  "cloudflare-workers": {
    name: "Cloudflare Workers",
    slug: "cloudflare-workers",
    category: "Infra",
    tagline: "글로벌 엣지 네트워크에서 구동되는 초고속 서버리스 컴퓨팅",
    officialUrl: "https://workers.cloudflare.com/",
    docsUrl: "https://developers.cloudflare.com/workers/",
    summary: "Cloudflare의 글로벌 엣지 네트워크에서 0ms 콜드 스타트로 V8 JavaScript 렌더링 엔진을 구동하는 엣지 서버리스 컴퓨팅 플랫폼입니다.",
    features: [
      "전 세계 300개 이상 도시의 Cloudflare 엣지 노드에서 즉시 코드 실행",
      "V8 격리(Isolates) 기술 기반의 0ms에 가까운 콜드 스타트 지연율",
      "D1(SQL), R2(Storage), KV, Vectorize 등 Cloudflare 에코시스템과의 완벽한 통합",
      "서버 관리나 스케일링 설정이 필요 없는 자동 무제한 탄력 확장"
    ],
    useCases: "Edge SSR 웹사이트, 글로벌 API 백엔드, 웹훅 처리, 엣지 캐싱 레이어"
  },
  d1: {
    name: "Cloudflare D1",
    slug: "d1",
    category: "Infra",
    tagline: "Cloudflare 엣지 네트워크 통합 글로벌 분산 SQL 데이터베이스",
    officialUrl: "https://developers.cloudflare.com/d1/",
    docsUrl: "https://developers.cloudflare.com/d1/get-started/",
    summary: "Cloudflare Workers와 네이티브하게 통합된 글로벌 에지 분산 SQL 데이터베이스(SQLite 기반). 서브 밀리초 수준의 초고속 SQL 쿼리와 무중단 마이그레이션을 제공합니다.",
    features: [
      "Workers 코드와 동시 위치(Co-located)하여 초고속 서브 밀리초 쿼리 수행",
      "표준 SQL 문법 지원으로 직관적인 관계형 데이터 모델링 가능",
      "Wrangler CLI를 활용한 시점 복구(Time Travel) 및 스키마 자동 마이그레이션",
      "서버 관리 없는 엣지 서버리스 관계형 데이터베이스"
    ],
    useCases: "웹 CMS 콘텐츠 저장소, 사용자 계정 DB, 교육 레슨 및 포스트 데이터 관리"
  },
  r2: {
    name: "Cloudflare R2",
    slug: "r2",
    category: "Infra",
    tagline: "Egress 수수료가 0원인 글로벌 오브젝트 스토리지",
    officialUrl: "https://www.cloudflare.com/developer-platform/r2/",
    docsUrl: "https://developers.cloudflare.com/r2/",
    summary: "Egress(데이터 전송) 수수료가 0원인 Cloudflare의 AWS S3 호환 글로벌 오브젝트 스토리지. 미디어 파일, 이미지, 정적 아티팩트를 안전하게 저장하고 초고속으로 서빙합니다.",
    features: [
      "Egress(아웃바운드 데이터 전송) 비용 0원 정책으로 획기적인 인프라 비용 절감",
      "AWS S3 API와 100% 호환되는 표준 SDK 및 클라이언트 사용 가능",
      "Workers와 연동하여 엣지에서 직접 이미지 리사이징 및 미디어 가공",
      "글로벌 분산 저장으로 대용량 파일 서빙 시 뛰어난 안정성 제공"
    ],
    useCases: "이미지 및 미디어 파일 저장소, 아티팩트 보관, 정적 핑거프린팅 에셋 서빙"
  }
};
