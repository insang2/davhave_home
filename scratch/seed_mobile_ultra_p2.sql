-- Mobile Ultra All 21 Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'mobile',
  'ch05-kotlin-advanced-features-lambdas-and-scope-functions',
  '05. 코틀린의 유용한 기법 - 람다 표현식, 고차 함수, 확장 함수 및 Scope Functions (let, apply, run)',
  '함수형 프로그래밍을 지원하는 람다식, 고차 함수, 기존 클래스 기능을 확장하는 확장 함수와 객체 처리 스코프 함수 5종을 다룹니다.',
  '코틀린의 코드 생산성을 극대화해 주는 람다 표현식, 확장 함수, 그리고 객체 초기화 및 검증에 필수적인 Scope Functions (let, run, apply, also, with)를 배웁니다.

---

## 5. 안드로이드 & 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)

본 **05. 코틀린의 유용한 기법 - 람다 표현식, 고차 함수, 확장 함수 및 Scope Functions (let, apply, run)** 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.

### 1) 아키텍처 및 메모리 관리 지침 (Architecture & Memory Rules)
- **메모리 누수(Memory Leak) 방지 및 Context 참조 경계**: Activity나 Fragment의 Context 객체를 장기간 유지되는 싱글톤 클래스나 Static 포인터에 저장해서는 안 됩니다. 전역 앱 정보가 필요한 경우 반드시 `ApplicationContext`를 전달하십시오.
- **뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 참조 해제**: 프래그먼트 생명주기 상 `onDestroyView()` 호출 시점에 `_binding = null`을 지정하여 UI 계층의 메모리 참조 고리를 즉시 끊어주어야 메모리 릭을 방지할 수 있습니다.
- **코루틴(Coroutines) 스레드 풀 분리 메커니즘**:
  - UI 렌더링 및 뷰 상태 변경: `Dispatchers.Main`
  - I/O 통신, 파일 읽기/쓰기, Room DB 쿼리, 네트워크 REST API 호출: `Dispatchers.IO`
  - 대용량 데이터 정렬, 딥러닝/이미지 가공 연산: `Dispatchers.Default`

### 2) 앱 보안 및 구글 플레이 스토어 배포 지침 (Security & Publishing)
1. **동적 런타임 권한(Runtime Permissions) 관리**: 위치 정보, 카메라, 마이크 권한 요청 시 앱 시작 즉시 허용을 요구하는 방식 대신, 해당 기능이 실행되는 접점에서 사유 설명 다이얼로그와 함께 동적 요청을 시행합니다.
2. **코드 난독화 및 최적화(R8 / ProGuard)**: `build.gradle.kts` 내 `isMinifyEnabled = true` 설정을 통해 사용하지 않는 코드를 제거(Tree-shaking)하고 소스 코드를 난독화하여 역공학(Reverse Engineering) 피해를 차단합니다.
3. **API Key 및 서명 키 분리 보안**: 비밀 API Key, Firebase 키는 프로젝트의 `local.properties` 파일에 은닉 보관하고, `BuildConfig`를 통해 수신함으로써 공개 버전 관리(Git)에 누출되지 않도록 엄격히 방어합니다.

---

## 6. 핵심 요약 및 실무 FAQ (Summary & Q&A)

**Q1. 본 챕터의 기능을 실제 프로젝트에 구동할 때 가장 자주 발생하는 대표적 오류는 무엇인가요?**
- 안드로이드 메인 UI 스레드에서 무거운 네트워크 통신이나 DB 읽기/쓰기를 직렬 수행하다가 `NetworkOnMainThreadException` 예외가 발생하거나 화면이 멈추는 ANR(Application Not Responding) 현상이 일어나는 것입니다. 반드시 `viewModelScope`나 `withContext(Dispatchers.IO)`를 통해 비동기 처리해야 합니다.

**Q2. 신규 앱 프로젝트 구축 시 기존 구버전 사양 대신 최신 Jetpack 라이브러리를 도입하는 이점은 무엇인가요?**
- 구버전의 `findViewById`나 `AsyncTask` 등은 널 안전성이 보장되지 않고 생명주기(Lifecycle) 변화에 취약하여 앱이 비정상 종료(Crash)될 확률이 높습니다. 최신 Android Jetpack(ViewBinding, Coroutines, Room, WorkManager)을 채택하면 가독성과 타입 안정성, 보일러플레이트 코드의 80% 이상 감소 효과를 누릴 수 있습니다.
',
  '<p>코틀린의 코드 생산성을 극대화해 주는 람다 표현식, 확장 함수, 그리고 객체 초기화 및 검증에 필수적인 Scope Functions (let, run, apply, also, with)를 배웁니다.</p>
<hr>
<h2>5. 안드로이드 &amp; 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)</h2>
<p>본 <strong>05. 코틀린의 유용한 기법 - 람다 표현식, 고차 함수, 확장 함수 및 Scope Functions (let, apply, run)</strong> 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.</p>
<h3>1) 아키텍처 및 메모리 관리 지침 (Architecture &amp; Memory Rules)</h3>
<ul>
<li><strong>메모리 누수(Memory Leak) 방지 및 Context 참조 경계</strong>: Activity나 Fragment의 Context 객체를 장기간 유지되는 싱글톤 클래스나 Static 포인터에 저장해서는 안 됩니다. 전역 앱 정보가 필요한 경우 반드시 <code>ApplicationContext</code>를 전달하십시오.</li>
<li><strong>뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 참조 해제</strong>: 프래그먼트 생명주기 상 <code>onDestroyView()</code> 호출 시점에 <code>_binding = null</code>을 지정하여 UI 계층의 메모리 참조 고리를 즉시 끊어주어야 메모리 릭을 방지할 수 있습니다.</li>
<li><strong>코루틴(Coroutines) 스레드 풀 분리 메커니즘</strong>:<ul>
<li>UI 렌더링 및 뷰 상태 변경: <code>Dispatchers.Main</code></li>
<li>I/O 통신, 파일 읽기/쓰기, Room DB 쿼리, 네트워크 REST API 호출: <code>Dispatchers.IO</code></li>
<li>대용량 데이터 정렬, 딥러닝/이미지 가공 연산: <code>Dispatchers.Default</code></li>
</ul>
</li>
</ul>
<h3>2) 앱 보안 및 구글 플레이 스토어 배포 지침 (Security &amp; Publishing)</h3>
<ol>
<li><strong>동적 런타임 권한(Runtime Permissions) 관리</strong>: 위치 정보, 카메라, 마이크 권한 요청 시 앱 시작 즉시 허용을 요구하는 방식 대신, 해당 기능이 실행되는 접점에서 사유 설명 다이얼로그와 함께 동적 요청을 시행합니다.</li>
<li><strong>코드 난독화 및 최적화(R8 / ProGuard)</strong>: <code>build.gradle.kts</code> 내 <code>isMinifyEnabled = true</code> 설정을 통해 사용하지 않는 코드를 제거(Tree-shaking)하고 소스 코드를 난독화하여 역공학(Reverse Engineering) 피해를 차단합니다.</li>
<li><strong>API Key 및 서명 키 분리 보안</strong>: 비밀 API Key, Firebase 키는 프로젝트의 <code>local.properties</code> 파일에 은닉 보관하고, <code>BuildConfig</code>를 통해 수신함으로써 공개 버전 관리(Git)에 누출되지 않도록 엄격히 방어합니다.</li>
</ol>
<hr>
<h2>6. 핵심 요약 및 실무 FAQ (Summary &amp; Q&amp;A)</h2>
<p><strong>Q1. 본 챕터의 기능을 실제 프로젝트에 구동할 때 가장 자주 발생하는 대표적 오류는 무엇인가요?</strong></p>
<ul>
<li>안드로이드 메인 UI 스레드에서 무거운 네트워크 통신이나 DB 읽기/쓰기를 직렬 수행하다가 <code>NetworkOnMainThreadException</code> 예외가 발생하거나 화면이 멈추는 ANR(Application Not Responding) 현상이 일어나는 것입니다. 반드시 <code>viewModelScope</code>나 <code>withContext(Dispatchers.IO)</code>를 통해 비동기 처리해야 합니다.</li>
</ul>
<p><strong>Q2. 신규 앱 프로젝트 구축 시 기존 구버전 사양 대신 최신 Jetpack 라이브러리를 도입하는 이점은 무엇인가요?</strong></p>
<ul>
<li>구버전의 <code>findViewById</code>나 <code>AsyncTask</code> 등은 널 안전성이 보장되지 않고 생명주기(Lifecycle) 변화에 취약하여 앱이 비정상 종료(Crash)될 확률이 높습니다. 최신 Android Jetpack(ViewBinding, Coroutines, Room, WorkManager)을 채택하면 가독성과 타입 안정성, 보일러플레이트 코드의 80% 이상 감소 효과를 누릴 수 있습니다.</li>
</ul>
',
  'published',
  '코틀린 고급 기법 - 람다, 고차 함수, 확장 함수 & Scope Functions (let, run, apply, also)',
  '코틀린 코드를 더욱 간결하고 우아하게 만드는 람다 함수, 고차 함수, 확장 함수(Extension Functions) 및 Scope Functions (let, run, apply, also, with)를 배웁니다.',
  5,
  '2026-08-02 00:00:00',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content_md = EXCLUDED.content_md,
  content_html = EXCLUDED.content_html,
  status = EXCLUDED.status,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  order_index = EXCLUDED.order_index,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'mobile',
  'ch06-view-components-and-ui-elements',
  '06. 뷰(View)를 이용한 화면 구성 - View 계층 구조, TextView, EditText, Button 및 ImageView',
  '안드로이드 앱 화면을 구성하는 기본 UI 컴포넌트인 TextView, EditText, Button, ImageView의 XML 속성 지정과 이벤트 연결을 학습합니다.',
  '안드로이드 사용자 인터페이스(UI)를 구성하는 기본 단위인 View와 ViewGroup 계층 구조를 이해하고, 필수 UI 위젯 컴포넌트를 활용한 화면 개발법을 다룹니다.

---

## 5. 안드로이드 & 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)

본 **06. 뷰(View)를 이용한 화면 구성 - View 계층 구조, TextView, EditText, Button 및 ImageView** 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.

### 1) 아키텍처 및 메모리 관리 지침 (Architecture & Memory Rules)
- **메모리 누수(Memory Leak) 방지 및 Context 참조 경계**: Activity나 Fragment의 Context 객체를 장기간 유지되는 싱글톤 클래스나 Static 포인터에 저장해서는 안 됩니다. 전역 앱 정보가 필요한 경우 반드시 `ApplicationContext`를 전달하십시오.
- **뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 참조 해제**: 프래그먼트 생명주기 상 `onDestroyView()` 호출 시점에 `_binding = null`을 지정하여 UI 계층의 메모리 참조 고리를 즉시 끊어주어야 메모리 릭을 방지할 수 있습니다.
- **코루틴(Coroutines) 스레드 풀 분리 메커니즘**:
  - UI 렌더링 및 뷰 상태 변경: `Dispatchers.Main`
  - I/O 통신, 파일 읽기/쓰기, Room DB 쿼리, 네트워크 REST API 호출: `Dispatchers.IO`
  - 대용량 데이터 정렬, 딥러닝/이미지 가공 연산: `Dispatchers.Default`

### 2) 앱 보안 및 구글 플레이 스토어 배포 지침 (Security & Publishing)
1. **동적 런타임 권한(Runtime Permissions) 관리**: 위치 정보, 카메라, 마이크 권한 요청 시 앱 시작 즉시 허용을 요구하는 방식 대신, 해당 기능이 실행되는 접점에서 사유 설명 다이얼로그와 함께 동적 요청을 시행합니다.
2. **코드 난독화 및 최적화(R8 / ProGuard)**: `build.gradle.kts` 내 `isMinifyEnabled = true` 설정을 통해 사용하지 않는 코드를 제거(Tree-shaking)하고 소스 코드를 난독화하여 역공학(Reverse Engineering) 피해를 차단합니다.
3. **API Key 및 서명 키 분리 보안**: 비밀 API Key, Firebase 키는 프로젝트의 `local.properties` 파일에 은닉 보관하고, `BuildConfig`를 통해 수신함으로써 공개 버전 관리(Git)에 누출되지 않도록 엄격히 방어합니다.

---

## 6. 핵심 요약 및 실무 FAQ (Summary & Q&A)

**Q1. 본 챕터의 기능을 실제 프로젝트에 구동할 때 가장 자주 발생하는 대표적 오류는 무엇인가요?**
- 안드로이드 메인 UI 스레드에서 무거운 네트워크 통신이나 DB 읽기/쓰기를 직렬 수행하다가 `NetworkOnMainThreadException` 예외가 발생하거나 화면이 멈추는 ANR(Application Not Responding) 현상이 일어나는 것입니다. 반드시 `viewModelScope`나 `withContext(Dispatchers.IO)`를 통해 비동기 처리해야 합니다.

**Q2. 신규 앱 프로젝트 구축 시 기존 구버전 사양 대신 최신 Jetpack 라이브러리를 도입하는 이점은 무엇인가요?**
- 구버전의 `findViewById`나 `AsyncTask` 등은 널 안전성이 보장되지 않고 생명주기(Lifecycle) 변화에 취약하여 앱이 비정상 종료(Crash)될 확률이 높습니다. 최신 Android Jetpack(ViewBinding, Coroutines, Room, WorkManager)을 채택하면 가독성과 타입 안정성, 보일러플레이트 코드의 80% 이상 감소 효과를 누릴 수 있습니다.
',
  '<p>안드로이드 사용자 인터페이스(UI)를 구성하는 기본 단위인 View와 ViewGroup 계층 구조를 이해하고, 필수 UI 위젯 컴포넌트를 활용한 화면 개발법을 다룹니다.</p>
<hr>
<h2>5. 안드로이드 &amp; 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)</h2>
<p>본 <strong>06. 뷰(View)를 이용한 화면 구성 - View 계층 구조, TextView, EditText, Button 및 ImageView</strong> 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.</p>
<h3>1) 아키텍처 및 메모리 관리 지침 (Architecture &amp; Memory Rules)</h3>
<ul>
<li><strong>메모리 누수(Memory Leak) 방지 및 Context 참조 경계</strong>: Activity나 Fragment의 Context 객체를 장기간 유지되는 싱글톤 클래스나 Static 포인터에 저장해서는 안 됩니다. 전역 앱 정보가 필요한 경우 반드시 <code>ApplicationContext</code>를 전달하십시오.</li>
<li><strong>뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 참조 해제</strong>: 프래그먼트 생명주기 상 <code>onDestroyView()</code> 호출 시점에 <code>_binding = null</code>을 지정하여 UI 계층의 메모리 참조 고리를 즉시 끊어주어야 메모리 릭을 방지할 수 있습니다.</li>
<li><strong>코루틴(Coroutines) 스레드 풀 분리 메커니즘</strong>:<ul>
<li>UI 렌더링 및 뷰 상태 변경: <code>Dispatchers.Main</code></li>
<li>I/O 통신, 파일 읽기/쓰기, Room DB 쿼리, 네트워크 REST API 호출: <code>Dispatchers.IO</code></li>
<li>대용량 데이터 정렬, 딥러닝/이미지 가공 연산: <code>Dispatchers.Default</code></li>
</ul>
</li>
</ul>
<h3>2) 앱 보안 및 구글 플레이 스토어 배포 지침 (Security &amp; Publishing)</h3>
<ol>
<li><strong>동적 런타임 권한(Runtime Permissions) 관리</strong>: 위치 정보, 카메라, 마이크 권한 요청 시 앱 시작 즉시 허용을 요구하는 방식 대신, 해당 기능이 실행되는 접점에서 사유 설명 다이얼로그와 함께 동적 요청을 시행합니다.</li>
<li><strong>코드 난독화 및 최적화(R8 / ProGuard)</strong>: <code>build.gradle.kts</code> 내 <code>isMinifyEnabled = true</code> 설정을 통해 사용하지 않는 코드를 제거(Tree-shaking)하고 소스 코드를 난독화하여 역공학(Reverse Engineering) 피해를 차단합니다.</li>
<li><strong>API Key 및 서명 키 분리 보안</strong>: 비밀 API Key, Firebase 키는 프로젝트의 <code>local.properties</code> 파일에 은닉 보관하고, <code>BuildConfig</code>를 통해 수신함으로써 공개 버전 관리(Git)에 누출되지 않도록 엄격히 방어합니다.</li>
</ol>
<hr>
<h2>6. 핵심 요약 및 실무 FAQ (Summary &amp; Q&amp;A)</h2>
<p><strong>Q1. 본 챕터의 기능을 실제 프로젝트에 구동할 때 가장 자주 발생하는 대표적 오류는 무엇인가요?</strong></p>
<ul>
<li>안드로이드 메인 UI 스레드에서 무거운 네트워크 통신이나 DB 읽기/쓰기를 직렬 수행하다가 <code>NetworkOnMainThreadException</code> 예외가 발생하거나 화면이 멈추는 ANR(Application Not Responding) 현상이 일어나는 것입니다. 반드시 <code>viewModelScope</code>나 <code>withContext(Dispatchers.IO)</code>를 통해 비동기 처리해야 합니다.</li>
</ul>
<p><strong>Q2. 신규 앱 프로젝트 구축 시 기존 구버전 사양 대신 최신 Jetpack 라이브러리를 도입하는 이점은 무엇인가요?</strong></p>
<ul>
<li>구버전의 <code>findViewById</code>나 <code>AsyncTask</code> 등은 널 안전성이 보장되지 않고 생명주기(Lifecycle) 변화에 취약하여 앱이 비정상 종료(Crash)될 확률이 높습니다. 최신 Android Jetpack(ViewBinding, Coroutines, Room, WorkManager)을 채택하면 가독성과 타입 안정성, 보일러플레이트 코드의 80% 이상 감소 효과를 누릴 수 있습니다.</li>
</ul>
',
  'published',
  '안드로이드 뷰 컴포넌트 - View, TextView, EditText, Button, ImageView & CheckBox',
  '안드로이드 UI의 기본 단위인 View & ViewGroup 계층 구조, 텍스트 입출력(TextView, EditText), 버튼 클릭, 이미지 표시(ImageView), 체크박스 및 라디오그룹을 배웁니다.',
  6,
  '2026-08-02 00:00:00',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content_md = EXCLUDED.content_md,
  content_html = EXCLUDED.content_html,
  status = EXCLUDED.status,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  order_index = EXCLUDED.order_index,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'mobile',
  'ch07-layout-managers-and-constraint-layout',
  '07. 뷰를 배치하는 레이아웃 - LinearLayout, RelativeLayout, FrameLayout 및 ConstraintLayout 제약 조건',
  '다양한 화면 크기에 유연하게 대응하는 안드로이드 5대 레이아웃 매니저와 중첩 뷰를 줄여주는 ConstraintLayout 제약조건 설계법을 완벽 해설합니다.',
  '다양한 크기와 해상도의 안드로이드 디바이스 화면에 뷰를 효율적으로 배치하는 **5대 레이아웃 매니저**와 반응형 UI 구축의 표준인 **ConstraintLayout**을 다룹니다.

---

## 1. 레이아웃 핵심 전문 용어 사전 (Glossary)

- **LinearLayout**: 뷰들을 가로(horizontal) 또는 세로(vertical) 단방향으로 순차 정렬하는 레이아웃입니다.
- **RelativeLayout**: 부모 컨테이너나 다른 조작 뷰를 기준으로 상대적 위치를 결정하는 전통적 레이아웃입니다.
- **FrameLayout**: 뷰들을 카드 덱처럼 상하로 겹쳐 배치할 때 사용하는 가벼운 레이아웃입니다.
- **ConstraintLayout**: 뷰 간의 상대적 제약조건(Constraint) 앵커 포인트를 지정하여 중첩 없이 복잡한 플랫 UI 구조를 구현하는 현대 안드로이드 대표 표준 레이아웃입니다.
- **Guideline & Barrier**: ConstraintLayout 내에서 뷰를 가상 수평/수직 가이드선에 정렬하거나 동적으로 움직이는 가상 장벽 앵커 요소입니다.

---

## 2. 5대 레이아웃 매니저 비교 분석표

| 레이아웃 종류 | 주용도 및 특징 | 뷰 정렬 방식 | 성능 및 중첩 문제 |
| :--- | :--- | :--- | :--- |
| **LinearLayout** | 단순한 일렬 가로/세로 UI 구성 | orientation (vertical / horizontal) | 뷰 계층이 깊어지면 중첩 성능 저하 |
| **ConstraintLayout** | 대다수의 복잡한 반응형 메인 UI 구성 | 상하좌우 앵커 제약 | **최고 성능** (단일 플랫 계층 구조) |
| **FrameLayout** | 겹쳐진 UI, 프래그먼트 컨테이너 | layout_gravity 기준 사방 배치 | 매우 가볍고 빠름 |
| **RelativeLayout** | 다른 뷰 기반의 상대 정렬 | layout_above, layout_alignLeft 등 | 중복 측정 문제 존재 |

---

## 3. ConstraintLayout 실전 반응형 XML 코드

```xml
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="16dp">

    <ImageView
        android:id="@+id/ivProfile"
        android:layout_width="80dp"
        android:layout_height="80dp"
        android:src="@drawable/ic_profile_placeholder"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <TextView
        android:id="@+id/tvUserName"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:text="홍길동 개발자"
        android:textSize="20sp"
        android:textStyle="bold"
        android:layout_marginStart="16dp"
        app:layout_constraintStart_toEndOf="@id/ivProfile"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintTop_toTopOf="@id/ivProfile" />

    <Button
        android:id="@+id/btnSubmit"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:text="설정 저장하기"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintBottom_toBottomOf="parent" />
</androidx.constraintlayout.widget.ConstraintLayout>
```

---

## 5. 안드로이드 & 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)

본 **07. 뷰를 배치하는 레이아웃 - LinearLayout, RelativeLayout, FrameLayout 및 ConstraintLayout 제약 조건** 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.

### 1) 아키텍처 및 메모리 관리 지침 (Architecture & Memory Rules)
- **메모리 누수(Memory Leak) 방지 및 Context 참조 경계**: Activity나 Fragment의 Context 객체를 장기간 유지되는 싱글톤 클래스나 Static 포인터에 저장해서는 안 됩니다. 전역 앱 정보가 필요한 경우 반드시 `ApplicationContext`를 전달하십시오.
- **뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 참조 해제**: 프래그먼트 생명주기 상 `onDestroyView()` 호출 시점에 `_binding = null`을 지정하여 UI 계층의 메모리 참조 고리를 즉시 끊어주어야 메모리 릭을 방지할 수 있습니다.
- **코루틴(Coroutines) 스레드 풀 분리 메커니즘**:
  - UI 렌더링 및 뷰 상태 변경: `Dispatchers.Main`
  - I/O 통신, 파일 읽기/쓰기, Room DB 쿼리, 네트워크 REST API 호출: `Dispatchers.IO`
  - 대용량 데이터 정렬, 딥러닝/이미지 가공 연산: `Dispatchers.Default`

### 2) 앱 보안 및 구글 플레이 스토어 배포 지침 (Security & Publishing)
1. **동적 런타임 권한(Runtime Permissions) 관리**: 위치 정보, 카메라, 마이크 권한 요청 시 앱 시작 즉시 허용을 요구하는 방식 대신, 해당 기능이 실행되는 접점에서 사유 설명 다이얼로그와 함께 동적 요청을 시행합니다.
2. **코드 난독화 및 최적화(R8 / ProGuard)**: `build.gradle.kts` 내 `isMinifyEnabled = true` 설정을 통해 사용하지 않는 코드를 제거(Tree-shaking)하고 소스 코드를 난독화하여 역공학(Reverse Engineering) 피해를 차단합니다.
3. **API Key 및 서명 키 분리 보안**: 비밀 API Key, Firebase 키는 프로젝트의 `local.properties` 파일에 은닉 보관하고, `BuildConfig`를 통해 수신함으로써 공개 버전 관리(Git)에 누출되지 않도록 엄격히 방어합니다.

---

## 6. 핵심 요약 및 실무 FAQ (Summary & Q&A)

**Q1. 본 챕터의 기능을 실제 프로젝트에 구동할 때 가장 자주 발생하는 대표적 오류는 무엇인가요?**
- 안드로이드 메인 UI 스레드에서 무거운 네트워크 통신이나 DB 읽기/쓰기를 직렬 수행하다가 `NetworkOnMainThreadException` 예외가 발생하거나 화면이 멈추는 ANR(Application Not Responding) 현상이 일어나는 것입니다. 반드시 `viewModelScope`나 `withContext(Dispatchers.IO)`를 통해 비동기 처리해야 합니다.

**Q2. 신규 앱 프로젝트 구축 시 기존 구버전 사양 대신 최신 Jetpack 라이브러리를 도입하는 이점은 무엇인가요?**
- 구버전의 `findViewById`나 `AsyncTask` 등은 널 안전성이 보장되지 않고 생명주기(Lifecycle) 변화에 취약하여 앱이 비정상 종료(Crash)될 확률이 높습니다. 최신 Android Jetpack(ViewBinding, Coroutines, Room, WorkManager)을 채택하면 가독성과 타입 안정성, 보일러플레이트 코드의 80% 이상 감소 효과를 누릴 수 있습니다.
',
  '<p>다양한 크기와 해상도의 안드로이드 디바이스 화면에 뷰를 효율적으로 배치하는 <strong>5대 레이아웃 매니저</strong>와 반응형 UI 구축의 표준인 <strong>ConstraintLayout</strong>을 다룹니다.</p>
<hr>
<h2>1. 레이아웃 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>LinearLayout</strong>: 뷰들을 가로(horizontal) 또는 세로(vertical) 단방향으로 순차 정렬하는 레이아웃입니다.</li>
<li><strong>RelativeLayout</strong>: 부모 컨테이너나 다른 조작 뷰를 기준으로 상대적 위치를 결정하는 전통적 레이아웃입니다.</li>
<li><strong>FrameLayout</strong>: 뷰들을 카드 덱처럼 상하로 겹쳐 배치할 때 사용하는 가벼운 레이아웃입니다.</li>
<li><strong>ConstraintLayout</strong>: 뷰 간의 상대적 제약조건(Constraint) 앵커 포인트를 지정하여 중첩 없이 복잡한 플랫 UI 구조를 구현하는 현대 안드로이드 대표 표준 레이아웃입니다.</li>
<li><strong>Guideline &amp; Barrier</strong>: ConstraintLayout 내에서 뷰를 가상 수평/수직 가이드선에 정렬하거나 동적으로 움직이는 가상 장벽 앵커 요소입니다.</li>
</ul>
<hr>
<h2>2. 5대 레이아웃 매니저 비교 분석표</h2>
<table>
<thead>
<tr>
<th align="left">레이아웃 종류</th>
<th align="left">주용도 및 특징</th>
<th align="left">뷰 정렬 방식</th>
<th align="left">성능 및 중첩 문제</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>LinearLayout</strong></td>
<td align="left">단순한 일렬 가로/세로 UI 구성</td>
<td align="left">orientation (vertical / horizontal)</td>
<td align="left">뷰 계층이 깊어지면 중첩 성능 저하</td>
</tr>
<tr>
<td align="left"><strong>ConstraintLayout</strong></td>
<td align="left">대다수의 복잡한 반응형 메인 UI 구성</td>
<td align="left">상하좌우 앵커 제약</td>
<td align="left"><strong>최고 성능</strong> (단일 플랫 계층 구조)</td>
</tr>
<tr>
<td align="left"><strong>FrameLayout</strong></td>
<td align="left">겹쳐진 UI, 프래그먼트 컨테이너</td>
<td align="left">layout_gravity 기준 사방 배치</td>
<td align="left">매우 가볍고 빠름</td>
</tr>
<tr>
<td align="left"><strong>RelativeLayout</strong></td>
<td align="left">다른 뷰 기반의 상대 정렬</td>
<td align="left">layout_above, layout_alignLeft 등</td>
<td align="left">중복 측정 문제 존재</td>
</tr>
</tbody></table>
<hr>
<h2>3. ConstraintLayout 실전 반응형 XML 코드</h2>
<pre><code class="language-xml">&lt;androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:app=&quot;http://schemas.android.com/apk/res-auto&quot;
    android:layout_width=&quot;match_parent&quot;
    android:layout_height=&quot;match_parent&quot;
    android:padding=&quot;16dp&quot;&gt;

    &lt;ImageView
        android:id=&quot;@+id/ivProfile&quot;
        android:layout_width=&quot;80dp&quot;
        android:layout_height=&quot;80dp&quot;
        android:src=&quot;@drawable/ic_profile_placeholder&quot;
        app:layout_constraintStart_toStartOf=&quot;parent&quot;
        app:layout_constraintTop_toTopOf=&quot;parent&quot; /&gt;

    &lt;TextView
        android:id=&quot;@+id/tvUserName&quot;
        android:layout_width=&quot;0dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:text=&quot;홍길동 개발자&quot;
        android:textSize=&quot;20sp&quot;
        android:textStyle=&quot;bold&quot;
        android:layout_marginStart=&quot;16dp&quot;
        app:layout_constraintStart_toEndOf=&quot;@id/ivProfile&quot;
        app:layout_constraintEnd_toEndOf=&quot;parent&quot;
        app:layout_constraintTop_toTopOf=&quot;@id/ivProfile&quot; /&gt;

    &lt;Button
        android:id=&quot;@+id/btnSubmit&quot;
        android:layout_width=&quot;0dp&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:text=&quot;설정 저장하기&quot;
        app:layout_constraintStart_toStartOf=&quot;parent&quot;
        app:layout_constraintEnd_toEndOf=&quot;parent&quot;
        app:layout_constraintBottom_toBottomOf=&quot;parent&quot; /&gt;
&lt;/androidx.constraintlayout.widget.ConstraintLayout&gt;
</code></pre>
<hr>
<h2>5. 안드로이드 &amp; 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)</h2>
<p>본 <strong>07. 뷰를 배치하는 레이아웃 - LinearLayout, RelativeLayout, FrameLayout 및 ConstraintLayout 제약 조건</strong> 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.</p>
<h3>1) 아키텍처 및 메모리 관리 지침 (Architecture &amp; Memory Rules)</h3>
<ul>
<li><strong>메모리 누수(Memory Leak) 방지 및 Context 참조 경계</strong>: Activity나 Fragment의 Context 객체를 장기간 유지되는 싱글톤 클래스나 Static 포인터에 저장해서는 안 됩니다. 전역 앱 정보가 필요한 경우 반드시 <code>ApplicationContext</code>를 전달하십시오.</li>
<li><strong>뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 참조 해제</strong>: 프래그먼트 생명주기 상 <code>onDestroyView()</code> 호출 시점에 <code>_binding = null</code>을 지정하여 UI 계층의 메모리 참조 고리를 즉시 끊어주어야 메모리 릭을 방지할 수 있습니다.</li>
<li><strong>코루틴(Coroutines) 스레드 풀 분리 메커니즘</strong>:<ul>
<li>UI 렌더링 및 뷰 상태 변경: <code>Dispatchers.Main</code></li>
<li>I/O 통신, 파일 읽기/쓰기, Room DB 쿼리, 네트워크 REST API 호출: <code>Dispatchers.IO</code></li>
<li>대용량 데이터 정렬, 딥러닝/이미지 가공 연산: <code>Dispatchers.Default</code></li>
</ul>
</li>
</ul>
<h3>2) 앱 보안 및 구글 플레이 스토어 배포 지침 (Security &amp; Publishing)</h3>
<ol>
<li><strong>동적 런타임 권한(Runtime Permissions) 관리</strong>: 위치 정보, 카메라, 마이크 권한 요청 시 앱 시작 즉시 허용을 요구하는 방식 대신, 해당 기능이 실행되는 접점에서 사유 설명 다이얼로그와 함께 동적 요청을 시행합니다.</li>
<li><strong>코드 난독화 및 최적화(R8 / ProGuard)</strong>: <code>build.gradle.kts</code> 내 <code>isMinifyEnabled = true</code> 설정을 통해 사용하지 않는 코드를 제거(Tree-shaking)하고 소스 코드를 난독화하여 역공학(Reverse Engineering) 피해를 차단합니다.</li>
<li><strong>API Key 및 서명 키 분리 보안</strong>: 비밀 API Key, Firebase 키는 프로젝트의 <code>local.properties</code> 파일에 은닉 보관하고, <code>BuildConfig</code>를 통해 수신함으로써 공개 버전 관리(Git)에 누출되지 않도록 엄격히 방어합니다.</li>
</ol>
<hr>
<h2>6. 핵심 요약 및 실무 FAQ (Summary &amp; Q&amp;A)</h2>
<p><strong>Q1. 본 챕터의 기능을 실제 프로젝트에 구동할 때 가장 자주 발생하는 대표적 오류는 무엇인가요?</strong></p>
<ul>
<li>안드로이드 메인 UI 스레드에서 무거운 네트워크 통신이나 DB 읽기/쓰기를 직렬 수행하다가 <code>NetworkOnMainThreadException</code> 예외가 발생하거나 화면이 멈추는 ANR(Application Not Responding) 현상이 일어나는 것입니다. 반드시 <code>viewModelScope</code>나 <code>withContext(Dispatchers.IO)</code>를 통해 비동기 처리해야 합니다.</li>
</ul>
<p><strong>Q2. 신규 앱 프로젝트 구축 시 기존 구버전 사양 대신 최신 Jetpack 라이브러리를 도입하는 이점은 무엇인가요?</strong></p>
<ul>
<li>구버전의 <code>findViewById</code>나 <code>AsyncTask</code> 등은 널 안전성이 보장되지 않고 생명주기(Lifecycle) 변화에 취약하여 앱이 비정상 종료(Crash)될 확률이 높습니다. 최신 Android Jetpack(ViewBinding, Coroutines, Room, WorkManager)을 채택하면 가독성과 타입 안정성, 보일러플레이트 코드의 80% 이상 감소 효과를 누릴 수 있습니다.</li>
</ul>
',
  'published',
  '안드로이드 레이아웃 - LinearLayout, RelativeLayout, FrameLayout & ConstraintLayout',
  '화면의 뷰 배치 레이아웃인 LinearLayout, RelativeLayout, FrameLayout, 그리고 반응형 UI를 구축하는 ConstraintLayout 제약조건 앵커, Guideline, Barrier, Chains 설정을 배웁니다.',
  7,
  '2026-08-02 00:00:00',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content_md = EXCLUDED.content_md,
  content_html = EXCLUDED.content_html,
  status = EXCLUDED.status,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  order_index = EXCLUDED.order_index,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'mobile',
  'ch08-user-event-handling-and-listeners',
  '08. 사용자 이벤트 처리하기 - 터치 이벤트, 키 이벤트 및 Event Listener 람다 패턴',
  '터치 및 키 입력을 감지하는 시스템 이벤트 핸들링과 클릭 이벤트를 처리하는 OnClickListener 람다 연동 패턴을 학습합니다.',
  '사용자의 터치(Touch), 키보드 입력, 화면 클릭 등 다양한 액션을 감지하고 이벤트 리스너(Event Listener) 패턴을 적용하여 상호작용하는 기술을 배웁니다.

---

## 5. 안드로이드 & 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)

본 **08. 사용자 이벤트 처리하기 - 터치 이벤트, 키 이벤트 및 Event Listener 람다 패턴** 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.

### 1) 아키텍처 및 메모리 관리 지침 (Architecture & Memory Rules)
- **메모리 누수(Memory Leak) 방지 및 Context 참조 경계**: Activity나 Fragment의 Context 객체를 장기간 유지되는 싱글톤 클래스나 Static 포인터에 저장해서는 안 됩니다. 전역 앱 정보가 필요한 경우 반드시 `ApplicationContext`를 전달하십시오.
- **뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 참조 해제**: 프래그먼트 생명주기 상 `onDestroyView()` 호출 시점에 `_binding = null`을 지정하여 UI 계층의 메모리 참조 고리를 즉시 끊어주어야 메모리 릭을 방지할 수 있습니다.
- **코루틴(Coroutines) 스레드 풀 분리 메커니즘**:
  - UI 렌더링 및 뷰 상태 변경: `Dispatchers.Main`
  - I/O 통신, 파일 읽기/쓰기, Room DB 쿼리, 네트워크 REST API 호출: `Dispatchers.IO`
  - 대용량 데이터 정렬, 딥러닝/이미지 가공 연산: `Dispatchers.Default`

### 2) 앱 보안 및 구글 플레이 스토어 배포 지침 (Security & Publishing)
1. **동적 런타임 권한(Runtime Permissions) 관리**: 위치 정보, 카메라, 마이크 권한 요청 시 앱 시작 즉시 허용을 요구하는 방식 대신, 해당 기능이 실행되는 접점에서 사유 설명 다이얼로그와 함께 동적 요청을 시행합니다.
2. **코드 난독화 및 최적화(R8 / ProGuard)**: `build.gradle.kts` 내 `isMinifyEnabled = true` 설정을 통해 사용하지 않는 코드를 제거(Tree-shaking)하고 소스 코드를 난독화하여 역공학(Reverse Engineering) 피해를 차단합니다.
3. **API Key 및 서명 키 분리 보안**: 비밀 API Key, Firebase 키는 프로젝트의 `local.properties` 파일에 은닉 보관하고, `BuildConfig`를 통해 수신함으로써 공개 버전 관리(Git)에 누출되지 않도록 엄격히 방어합니다.

---

## 6. 핵심 요약 및 실무 FAQ (Summary & Q&A)

**Q1. 본 챕터의 기능을 실제 프로젝트에 구동할 때 가장 자주 발생하는 대표적 오류는 무엇인가요?**
- 안드로이드 메인 UI 스레드에서 무거운 네트워크 통신이나 DB 읽기/쓰기를 직렬 수행하다가 `NetworkOnMainThreadException` 예외가 발생하거나 화면이 멈추는 ANR(Application Not Responding) 현상이 일어나는 것입니다. 반드시 `viewModelScope`나 `withContext(Dispatchers.IO)`를 통해 비동기 처리해야 합니다.

**Q2. 신규 앱 프로젝트 구축 시 기존 구버전 사양 대신 최신 Jetpack 라이브러리를 도입하는 이점은 무엇인가요?**
- 구버전의 `findViewById`나 `AsyncTask` 등은 널 안전성이 보장되지 않고 생명주기(Lifecycle) 변화에 취약하여 앱이 비정상 종료(Crash)될 확률이 높습니다. 최신 Android Jetpack(ViewBinding, Coroutines, Room, WorkManager)을 채택하면 가독성과 타입 안정성, 보일러플레이트 코드의 80% 이상 감소 효과를 누릴 수 있습니다.
',
  '<p>사용자의 터치(Touch), 키보드 입력, 화면 클릭 등 다양한 액션을 감지하고 이벤트 리스너(Event Listener) 패턴을 적용하여 상호작용하는 기술을 배웁니다.</p>
<hr>
<h2>5. 안드로이드 &amp; 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)</h2>
<p>본 <strong>08. 사용자 이벤트 처리하기 - 터치 이벤트, 키 이벤트 및 Event Listener 람다 패턴</strong> 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.</p>
<h3>1) 아키텍처 및 메모리 관리 지침 (Architecture &amp; Memory Rules)</h3>
<ul>
<li><strong>메모리 누수(Memory Leak) 방지 및 Context 참조 경계</strong>: Activity나 Fragment의 Context 객체를 장기간 유지되는 싱글톤 클래스나 Static 포인터에 저장해서는 안 됩니다. 전역 앱 정보가 필요한 경우 반드시 <code>ApplicationContext</code>를 전달하십시오.</li>
<li><strong>뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 참조 해제</strong>: 프래그먼트 생명주기 상 <code>onDestroyView()</code> 호출 시점에 <code>_binding = null</code>을 지정하여 UI 계층의 메모리 참조 고리를 즉시 끊어주어야 메모리 릭을 방지할 수 있습니다.</li>
<li><strong>코루틴(Coroutines) 스레드 풀 분리 메커니즘</strong>:<ul>
<li>UI 렌더링 및 뷰 상태 변경: <code>Dispatchers.Main</code></li>
<li>I/O 통신, 파일 읽기/쓰기, Room DB 쿼리, 네트워크 REST API 호출: <code>Dispatchers.IO</code></li>
<li>대용량 데이터 정렬, 딥러닝/이미지 가공 연산: <code>Dispatchers.Default</code></li>
</ul>
</li>
</ul>
<h3>2) 앱 보안 및 구글 플레이 스토어 배포 지침 (Security &amp; Publishing)</h3>
<ol>
<li><strong>동적 런타임 권한(Runtime Permissions) 관리</strong>: 위치 정보, 카메라, 마이크 권한 요청 시 앱 시작 즉시 허용을 요구하는 방식 대신, 해당 기능이 실행되는 접점에서 사유 설명 다이얼로그와 함께 동적 요청을 시행합니다.</li>
<li><strong>코드 난독화 및 최적화(R8 / ProGuard)</strong>: <code>build.gradle.kts</code> 내 <code>isMinifyEnabled = true</code> 설정을 통해 사용하지 않는 코드를 제거(Tree-shaking)하고 소스 코드를 난독화하여 역공학(Reverse Engineering) 피해를 차단합니다.</li>
<li><strong>API Key 및 서명 키 분리 보안</strong>: 비밀 API Key, Firebase 키는 프로젝트의 <code>local.properties</code> 파일에 은닉 보관하고, <code>BuildConfig</code>를 통해 수신함으로써 공개 버전 관리(Git)에 누출되지 않도록 엄격히 방어합니다.</li>
</ol>
<hr>
<h2>6. 핵심 요약 및 실무 FAQ (Summary &amp; Q&amp;A)</h2>
<p><strong>Q1. 본 챕터의 기능을 실제 프로젝트에 구동할 때 가장 자주 발생하는 대표적 오류는 무엇인가요?</strong></p>
<ul>
<li>안드로이드 메인 UI 스레드에서 무거운 네트워크 통신이나 DB 읽기/쓰기를 직렬 수행하다가 <code>NetworkOnMainThreadException</code> 예외가 발생하거나 화면이 멈추는 ANR(Application Not Responding) 현상이 일어나는 것입니다. 반드시 <code>viewModelScope</code>나 <code>withContext(Dispatchers.IO)</code>를 통해 비동기 처리해야 합니다.</li>
</ul>
<p><strong>Q2. 신규 앱 프로젝트 구축 시 기존 구버전 사양 대신 최신 Jetpack 라이브러리를 도입하는 이점은 무엇인가요?</strong></p>
<ul>
<li>구버전의 <code>findViewById</code>나 <code>AsyncTask</code> 등은 널 안전성이 보장되지 않고 생명주기(Lifecycle) 변화에 취약하여 앱이 비정상 종료(Crash)될 확률이 높습니다. 최신 Android Jetpack(ViewBinding, Coroutines, Room, WorkManager)을 채택하면 가독성과 타입 안정성, 보일러플레이트 코드의 80% 이상 감소 효과를 누릴 수 있습니다.</li>
</ul>
',
  'published',
  '안드로이드 이벤트 처리 - TouchEvent, KeyEvent & OnClickListener 람다 패턴',
  '사용자의 화면 터치(MotionEvent), 물리/소프트 키 입력(KeyEvent) 및 View 클릭 이벤트를 감지하고 처리하는 Event Listener 인터페이스 구성을 배웁니다.',
  8,
  '2026-08-02 00:00:00',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
) ON CONFLICT(slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content_md = EXCLUDED.content_md,
  content_html = EXCLUDED.content_html,
  status = EXCLUDED.status,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  order_index = EXCLUDED.order_index,
  updated_at = CURRENT_TIMESTAMP;
