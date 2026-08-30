-- Mobile Mega PJT30 Lessons Part 2

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

## 5. 안드로이드 & 코틀린 실무 심화 개발 가이드 및 최적화 전략 (Deep Dive)

본 **05. 코틀린의 유용한 기법 - 람다 표현식, 고차 함수, 확장 함수 및 Scope Functions (let, apply, run)** 레슨에서 다룬 핵심 이론 및 구현 기법은 현대 안드로이드 엔터프라이즈 앱 개발 시 안정성과 성능을 결정짓는 핵심 요소입니다.

### 1) 시스템 아키텍처 및 메모리 관리 지침 (Architecture & Performance)
- **메모리 누수(Memory Leak) 방지 및 Context 참조 주의**: Context 객체를 장기간 유지되는 싱글톤이나 정적 컴포넌트에 직접 참조시키면 안 되며, 반드시 필요할 경우 ApplicationContext를 활용해야 합니다.
- **뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 메모리 해제**: 프래그먼트(Fragment)에서 ViewBinding 사용 시 onDestroyView() 단계에서 바인딩 참조 포인터를 null로 초기화하여 뷰 계층 참조 누수를 예방합니다.
- **코루틴(Coroutines) 스코프 스레드 분리**: UI 조작 연산은 Dispatchers.Main, 네트워크 요청 및 데이터베이스 I/O 연산은 Dispatchers.IO, 대용량 데이터 연산은 Dispatchers.Default 스레드 풀로 완벽 분리하여 ANR(Application Not Responding) 현상을 차단합니다.
- **Clean Architecture & MVVM 패턴과의 결합**: 데이터 레이어(Repository, Data Source)와 UI 레이어(ViewModel, View/Compose)를 명확히 분리하여 데이터 상태 관리를 단방향 데이터 흐름(Unidirectional Data Flow)으로 유지합니다.

### 2) 보안, 테스트 및 배포 가이드라인 (Security & Deployment)
1. **런타임 권한(Runtime Permissions) 관리**: 카메라, 위치 정보, 저장소 접근 권한은 앱 실행 초기에 모두 요구하지 않고, 해당 기능이 실제 필요한 시점에 동적으로 권한 요청을 수행합니다.
2. **난독화(ProGuard / R8) 설정**: 앱 컴파일 및 AAB 빌드 시 R8 난독화 도구를 활성화하여 역공학(Reverse Engineering)을 통한 소스 코드 유출을 방지합니다.
3. **파이어베이스(Firebase) 및 API Key 보안**: local.properties 파일과 BuildConfig를 활용하여 비밀 API 키나 인증서 비밀번호가 Git 리포지토리에 소스 코드로 직접 노출되지 않도록 안전하게 분리합니다.

---

## 6. 핵심 요약 및 실무 FAQ (Summary & Q&A)

**Q1. 본 챕터의 기능을 구동할 때 가장 자주 발생하는 대표적인 실수는 무엇인가요?**
- UI 메인 스레드에서 네트워크 통신이나 DB I/O를 직접 수행하다가 NetworkOnMainThreadException 예외가 발생하거나 앱이 멈추는 ANR 현상이 발생하는 것입니다. 반드시 Coroutines의 withContext(Dispatchers.IO) 또는 RxJava, Jetpack WorkManager를 적용해야 합니다.

**Q2. 신규 안드로이드 프로젝트 시작 시 구버전 방식 대신 최신 권장 라이브러리를 적용해야 하는 이유는 무엇인가요?**
- 구버전의 findViewById나 AsyncTask 등은 타입 안전성이 떨어지고 메모리 누수 위험이 큽니다. 최신 Google 권장 사양인 Kotlin Coroutines, ViewBinding / Jetpack Compose, Retrofit2, Room DB를 도입하면 코드 가독성 향상과 유지보수 효율을 극대화할 수 있습니다.
',
  '<p>코틀린의 코드 생산성을 극대화해 주는 람다 표현식, 확장 함수, 그리고 객체 초기화 및 검증에 필수적인 Scope Functions (let, run, apply, also, with)를 배웁니다.</p>
<hr>
<h2>5. 안드로이드 &amp; 코틀린 실무 심화 개발 가이드 및 최적화 전략 (Deep Dive)</h2>
<p>본 <strong>05. 코틀린의 유용한 기법 - 람다 표현식, 고차 함수, 확장 함수 및 Scope Functions (let, apply, run)</strong> 레슨에서 다룬 핵심 이론 및 구현 기법은 현대 안드로이드 엔터프라이즈 앱 개발 시 안정성과 성능을 결정짓는 핵심 요소입니다.</p>
<h3>1) 시스템 아키텍처 및 메모리 관리 지침 (Architecture &amp; Performance)</h3>
<ul>
<li><strong>메모리 누수(Memory Leak) 방지 및 Context 참조 주의</strong>: Context 객체를 장기간 유지되는 싱글톤이나 정적 컴포넌트에 직접 참조시키면 안 되며, 반드시 필요할 경우 ApplicationContext를 활용해야 합니다.</li>
<li><strong>뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 메모리 해제</strong>: 프래그먼트(Fragment)에서 ViewBinding 사용 시 onDestroyView() 단계에서 바인딩 참조 포인터를 null로 초기화하여 뷰 계층 참조 누수를 예방합니다.</li>
<li><strong>코루틴(Coroutines) 스코프 스레드 분리</strong>: UI 조작 연산은 Dispatchers.Main, 네트워크 요청 및 데이터베이스 I/O 연산은 Dispatchers.IO, 대용량 데이터 연산은 Dispatchers.Default 스레드 풀로 완벽 분리하여 ANR(Application Not Responding) 현상을 차단합니다.</li>
<li><strong>Clean Architecture &amp; MVVM 패턴과의 결합</strong>: 데이터 레이어(Repository, Data Source)와 UI 레이어(ViewModel, View/Compose)를 명확히 분리하여 데이터 상태 관리를 단방향 데이터 흐름(Unidirectional Data Flow)으로 유지합니다.</li>
</ul>
<h3>2) 보안, 테스트 및 배포 가이드라인 (Security &amp; Deployment)</h3>
<ol>
<li><strong>런타임 권한(Runtime Permissions) 관리</strong>: 카메라, 위치 정보, 저장소 접근 권한은 앱 실행 초기에 모두 요구하지 않고, 해당 기능이 실제 필요한 시점에 동적으로 권한 요청을 수행합니다.</li>
<li><strong>난독화(ProGuard / R8) 설정</strong>: 앱 컴파일 및 AAB 빌드 시 R8 난독화 도구를 활성화하여 역공학(Reverse Engineering)을 통한 소스 코드 유출을 방지합니다.</li>
<li><strong>파이어베이스(Firebase) 및 API Key 보안</strong>: local.properties 파일과 BuildConfig를 활용하여 비밀 API 키나 인증서 비밀번호가 Git 리포지토리에 소스 코드로 직접 노출되지 않도록 안전하게 분리합니다.</li>
</ol>
<hr>
<h2>6. 핵심 요약 및 실무 FAQ (Summary &amp; Q&amp;A)</h2>
<p><strong>Q1. 본 챕터의 기능을 구동할 때 가장 자주 발생하는 대표적인 실수는 무엇인가요?</strong></p>
<ul>
<li>UI 메인 스레드에서 네트워크 통신이나 DB I/O를 직접 수행하다가 NetworkOnMainThreadException 예외가 발생하거나 앱이 멈추는 ANR 현상이 발생하는 것입니다. 반드시 Coroutines의 withContext(Dispatchers.IO) 또는 RxJava, Jetpack WorkManager를 적용해야 합니다.</li>
</ul>
<p><strong>Q2. 신규 안드로이드 프로젝트 시작 시 구버전 방식 대신 최신 권장 라이브러리를 적용해야 하는 이유는 무엇인가요?</strong></p>
<ul>
<li>구버전의 findViewById나 AsyncTask 등은 타입 안전성이 떨어지고 메모리 누수 위험이 큽니다. 최신 Google 권장 사양인 Kotlin Coroutines, ViewBinding / Jetpack Compose, Retrofit2, Room DB를 도입하면 코드 가독성 향상과 유지보수 효율을 극대화할 수 있습니다.</li>
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

## 5. 안드로이드 & 코틀린 실무 심화 개발 가이드 및 최적화 전략 (Deep Dive)

본 **06. 뷰(View)를 이용한 화면 구성 - View 계층 구조, TextView, EditText, Button 및 ImageView** 레슨에서 다룬 핵심 이론 및 구현 기법은 현대 안드로이드 엔터프라이즈 앱 개발 시 안정성과 성능을 결정짓는 핵심 요소입니다.

### 1) 시스템 아키텍처 및 메모리 관리 지침 (Architecture & Performance)
- **메모리 누수(Memory Leak) 방지 및 Context 참조 주의**: Context 객체를 장기간 유지되는 싱글톤이나 정적 컴포넌트에 직접 참조시키면 안 되며, 반드시 필요할 경우 ApplicationContext를 활용해야 합니다.
- **뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 메모리 해제**: 프래그먼트(Fragment)에서 ViewBinding 사용 시 onDestroyView() 단계에서 바인딩 참조 포인터를 null로 초기화하여 뷰 계층 참조 누수를 예방합니다.
- **코루틴(Coroutines) 스코프 스레드 분리**: UI 조작 연산은 Dispatchers.Main, 네트워크 요청 및 데이터베이스 I/O 연산은 Dispatchers.IO, 대용량 데이터 연산은 Dispatchers.Default 스레드 풀로 완벽 분리하여 ANR(Application Not Responding) 현상을 차단합니다.
- **Clean Architecture & MVVM 패턴과의 결합**: 데이터 레이어(Repository, Data Source)와 UI 레이어(ViewModel, View/Compose)를 명확히 분리하여 데이터 상태 관리를 단방향 데이터 흐름(Unidirectional Data Flow)으로 유지합니다.

### 2) 보안, 테스트 및 배포 가이드라인 (Security & Deployment)
1. **런타임 권한(Runtime Permissions) 관리**: 카메라, 위치 정보, 저장소 접근 권한은 앱 실행 초기에 모두 요구하지 않고, 해당 기능이 실제 필요한 시점에 동적으로 권한 요청을 수행합니다.
2. **난독화(ProGuard / R8) 설정**: 앱 컴파일 및 AAB 빌드 시 R8 난독화 도구를 활성화하여 역공학(Reverse Engineering)을 통한 소스 코드 유출을 방지합니다.
3. **파이어베이스(Firebase) 및 API Key 보안**: local.properties 파일과 BuildConfig를 활용하여 비밀 API 키나 인증서 비밀번호가 Git 리포지토리에 소스 코드로 직접 노출되지 않도록 안전하게 분리합니다.

---

## 6. 핵심 요약 및 실무 FAQ (Summary & Q&A)

**Q1. 본 챕터의 기능을 구동할 때 가장 자주 발생하는 대표적인 실수는 무엇인가요?**
- UI 메인 스레드에서 네트워크 통신이나 DB I/O를 직접 수행하다가 NetworkOnMainThreadException 예외가 발생하거나 앱이 멈추는 ANR 현상이 발생하는 것입니다. 반드시 Coroutines의 withContext(Dispatchers.IO) 또는 RxJava, Jetpack WorkManager를 적용해야 합니다.

**Q2. 신규 안드로이드 프로젝트 시작 시 구버전 방식 대신 최신 권장 라이브러리를 적용해야 하는 이유는 무엇인가요?**
- 구버전의 findViewById나 AsyncTask 등은 타입 안전성이 떨어지고 메모리 누수 위험이 큽니다. 최신 Google 권장 사양인 Kotlin Coroutines, ViewBinding / Jetpack Compose, Retrofit2, Room DB를 도입하면 코드 가독성 향상과 유지보수 효율을 극대화할 수 있습니다.
',
  '<p>안드로이드 사용자 인터페이스(UI)를 구성하는 기본 단위인 View와 ViewGroup 계층 구조를 이해하고, 필수 UI 위젯 컴포넌트를 활용한 화면 개발법을 다룹니다.</p>
<hr>
<h2>5. 안드로이드 &amp; 코틀린 실무 심화 개발 가이드 및 최적화 전략 (Deep Dive)</h2>
<p>본 <strong>06. 뷰(View)를 이용한 화면 구성 - View 계층 구조, TextView, EditText, Button 및 ImageView</strong> 레슨에서 다룬 핵심 이론 및 구현 기법은 현대 안드로이드 엔터프라이즈 앱 개발 시 안정성과 성능을 결정짓는 핵심 요소입니다.</p>
<h3>1) 시스템 아키텍처 및 메모리 관리 지침 (Architecture &amp; Performance)</h3>
<ul>
<li><strong>메모리 누수(Memory Leak) 방지 및 Context 참조 주의</strong>: Context 객체를 장기간 유지되는 싱글톤이나 정적 컴포넌트에 직접 참조시키면 안 되며, 반드시 필요할 경우 ApplicationContext를 활용해야 합니다.</li>
<li><strong>뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 메모리 해제</strong>: 프래그먼트(Fragment)에서 ViewBinding 사용 시 onDestroyView() 단계에서 바인딩 참조 포인터를 null로 초기화하여 뷰 계층 참조 누수를 예방합니다.</li>
<li><strong>코루틴(Coroutines) 스코프 스레드 분리</strong>: UI 조작 연산은 Dispatchers.Main, 네트워크 요청 및 데이터베이스 I/O 연산은 Dispatchers.IO, 대용량 데이터 연산은 Dispatchers.Default 스레드 풀로 완벽 분리하여 ANR(Application Not Responding) 현상을 차단합니다.</li>
<li><strong>Clean Architecture &amp; MVVM 패턴과의 결합</strong>: 데이터 레이어(Repository, Data Source)와 UI 레이어(ViewModel, View/Compose)를 명확히 분리하여 데이터 상태 관리를 단방향 데이터 흐름(Unidirectional Data Flow)으로 유지합니다.</li>
</ul>
<h3>2) 보안, 테스트 및 배포 가이드라인 (Security &amp; Deployment)</h3>
<ol>
<li><strong>런타임 권한(Runtime Permissions) 관리</strong>: 카메라, 위치 정보, 저장소 접근 권한은 앱 실행 초기에 모두 요구하지 않고, 해당 기능이 실제 필요한 시점에 동적으로 권한 요청을 수행합니다.</li>
<li><strong>난독화(ProGuard / R8) 설정</strong>: 앱 컴파일 및 AAB 빌드 시 R8 난독화 도구를 활성화하여 역공학(Reverse Engineering)을 통한 소스 코드 유출을 방지합니다.</li>
<li><strong>파이어베이스(Firebase) 및 API Key 보안</strong>: local.properties 파일과 BuildConfig를 활용하여 비밀 API 키나 인증서 비밀번호가 Git 리포지토리에 소스 코드로 직접 노출되지 않도록 안전하게 분리합니다.</li>
</ol>
<hr>
<h2>6. 핵심 요약 및 실무 FAQ (Summary &amp; Q&amp;A)</h2>
<p><strong>Q1. 본 챕터의 기능을 구동할 때 가장 자주 발생하는 대표적인 실수는 무엇인가요?</strong></p>
<ul>
<li>UI 메인 스레드에서 네트워크 통신이나 DB I/O를 직접 수행하다가 NetworkOnMainThreadException 예외가 발생하거나 앱이 멈추는 ANR 현상이 발생하는 것입니다. 반드시 Coroutines의 withContext(Dispatchers.IO) 또는 RxJava, Jetpack WorkManager를 적용해야 합니다.</li>
</ul>
<p><strong>Q2. 신규 안드로이드 프로젝트 시작 시 구버전 방식 대신 최신 권장 라이브러리를 적용해야 하는 이유는 무엇인가요?</strong></p>
<ul>
<li>구버전의 findViewById나 AsyncTask 등은 타입 안전성이 떨어지고 메모리 누수 위험이 큽니다. 최신 Google 권장 사양인 Kotlin Coroutines, ViewBinding / Jetpack Compose, Retrofit2, Room DB를 도입하면 코드 가독성 향상과 유지보수 효율을 극대화할 수 있습니다.</li>
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

## 5. 안드로이드 & 코틀린 실무 심화 개발 가이드 및 최적화 전략 (Deep Dive)

본 **07. 뷰를 배치하는 레이아웃 - LinearLayout, RelativeLayout, FrameLayout 및 ConstraintLayout 제약 조건** 레슨에서 다룬 핵심 이론 및 구현 기법은 현대 안드로이드 엔터프라이즈 앱 개발 시 안정성과 성능을 결정짓는 핵심 요소입니다.

### 1) 시스템 아키텍처 및 메모리 관리 지침 (Architecture & Performance)
- **메모리 누수(Memory Leak) 방지 및 Context 참조 주의**: Context 객체를 장기간 유지되는 싱글톤이나 정적 컴포넌트에 직접 참조시키면 안 되며, 반드시 필요할 경우 ApplicationContext를 활용해야 합니다.
- **뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 메모리 해제**: 프래그먼트(Fragment)에서 ViewBinding 사용 시 onDestroyView() 단계에서 바인딩 참조 포인터를 null로 초기화하여 뷰 계층 참조 누수를 예방합니다.
- **코루틴(Coroutines) 스코프 스레드 분리**: UI 조작 연산은 Dispatchers.Main, 네트워크 요청 및 데이터베이스 I/O 연산은 Dispatchers.IO, 대용량 데이터 연산은 Dispatchers.Default 스레드 풀로 완벽 분리하여 ANR(Application Not Responding) 현상을 차단합니다.
- **Clean Architecture & MVVM 패턴과의 결합**: 데이터 레이어(Repository, Data Source)와 UI 레이어(ViewModel, View/Compose)를 명확히 분리하여 데이터 상태 관리를 단방향 데이터 흐름(Unidirectional Data Flow)으로 유지합니다.

### 2) 보안, 테스트 및 배포 가이드라인 (Security & Deployment)
1. **런타임 권한(Runtime Permissions) 관리**: 카메라, 위치 정보, 저장소 접근 권한은 앱 실행 초기에 모두 요구하지 않고, 해당 기능이 실제 필요한 시점에 동적으로 권한 요청을 수행합니다.
2. **난독화(ProGuard / R8) 설정**: 앱 컴파일 및 AAB 빌드 시 R8 난독화 도구를 활성화하여 역공학(Reverse Engineering)을 통한 소스 코드 유출을 방지합니다.
3. **파이어베이스(Firebase) 및 API Key 보안**: local.properties 파일과 BuildConfig를 활용하여 비밀 API 키나 인증서 비밀번호가 Git 리포지토리에 소스 코드로 직접 노출되지 않도록 안전하게 분리합니다.

---

## 6. 핵심 요약 및 실무 FAQ (Summary & Q&A)

**Q1. 본 챕터의 기능을 구동할 때 가장 자주 발생하는 대표적인 실수는 무엇인가요?**
- UI 메인 스레드에서 네트워크 통신이나 DB I/O를 직접 수행하다가 NetworkOnMainThreadException 예외가 발생하거나 앱이 멈추는 ANR 현상이 발생하는 것입니다. 반드시 Coroutines의 withContext(Dispatchers.IO) 또는 RxJava, Jetpack WorkManager를 적용해야 합니다.

**Q2. 신규 안드로이드 프로젝트 시작 시 구버전 방식 대신 최신 권장 라이브러리를 적용해야 하는 이유는 무엇인가요?**
- 구버전의 findViewById나 AsyncTask 등은 타입 안전성이 떨어지고 메모리 누수 위험이 큽니다. 최신 Google 권장 사양인 Kotlin Coroutines, ViewBinding / Jetpack Compose, Retrofit2, Room DB를 도입하면 코드 가독성 향상과 유지보수 효율을 극대화할 수 있습니다.
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
<h2>5. 안드로이드 &amp; 코틀린 실무 심화 개발 가이드 및 최적화 전략 (Deep Dive)</h2>
<p>본 <strong>07. 뷰를 배치하는 레이아웃 - LinearLayout, RelativeLayout, FrameLayout 및 ConstraintLayout 제약 조건</strong> 레슨에서 다룬 핵심 이론 및 구현 기법은 현대 안드로이드 엔터프라이즈 앱 개발 시 안정성과 성능을 결정짓는 핵심 요소입니다.</p>
<h3>1) 시스템 아키텍처 및 메모리 관리 지침 (Architecture &amp; Performance)</h3>
<ul>
<li><strong>메모리 누수(Memory Leak) 방지 및 Context 참조 주의</strong>: Context 객체를 장기간 유지되는 싱글톤이나 정적 컴포넌트에 직접 참조시키면 안 되며, 반드시 필요할 경우 ApplicationContext를 활용해야 합니다.</li>
<li><strong>뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 메모리 해제</strong>: 프래그먼트(Fragment)에서 ViewBinding 사용 시 onDestroyView() 단계에서 바인딩 참조 포인터를 null로 초기화하여 뷰 계층 참조 누수를 예방합니다.</li>
<li><strong>코루틴(Coroutines) 스코프 스레드 분리</strong>: UI 조작 연산은 Dispatchers.Main, 네트워크 요청 및 데이터베이스 I/O 연산은 Dispatchers.IO, 대용량 데이터 연산은 Dispatchers.Default 스레드 풀로 완벽 분리하여 ANR(Application Not Responding) 현상을 차단합니다.</li>
<li><strong>Clean Architecture &amp; MVVM 패턴과의 결합</strong>: 데이터 레이어(Repository, Data Source)와 UI 레이어(ViewModel, View/Compose)를 명확히 분리하여 데이터 상태 관리를 단방향 데이터 흐름(Unidirectional Data Flow)으로 유지합니다.</li>
</ul>
<h3>2) 보안, 테스트 및 배포 가이드라인 (Security &amp; Deployment)</h3>
<ol>
<li><strong>런타임 권한(Runtime Permissions) 관리</strong>: 카메라, 위치 정보, 저장소 접근 권한은 앱 실행 초기에 모두 요구하지 않고, 해당 기능이 실제 필요한 시점에 동적으로 권한 요청을 수행합니다.</li>
<li><strong>난독화(ProGuard / R8) 설정</strong>: 앱 컴파일 및 AAB 빌드 시 R8 난독화 도구를 활성화하여 역공학(Reverse Engineering)을 통한 소스 코드 유출을 방지합니다.</li>
<li><strong>파이어베이스(Firebase) 및 API Key 보안</strong>: local.properties 파일과 BuildConfig를 활용하여 비밀 API 키나 인증서 비밀번호가 Git 리포지토리에 소스 코드로 직접 노출되지 않도록 안전하게 분리합니다.</li>
</ol>
<hr>
<h2>6. 핵심 요약 및 실무 FAQ (Summary &amp; Q&amp;A)</h2>
<p><strong>Q1. 본 챕터의 기능을 구동할 때 가장 자주 발생하는 대표적인 실수는 무엇인가요?</strong></p>
<ul>
<li>UI 메인 스레드에서 네트워크 통신이나 DB I/O를 직접 수행하다가 NetworkOnMainThreadException 예외가 발생하거나 앱이 멈추는 ANR 현상이 발생하는 것입니다. 반드시 Coroutines의 withContext(Dispatchers.IO) 또는 RxJava, Jetpack WorkManager를 적용해야 합니다.</li>
</ul>
<p><strong>Q2. 신규 안드로이드 프로젝트 시작 시 구버전 방식 대신 최신 권장 라이브러리를 적용해야 하는 이유는 무엇인가요?</strong></p>
<ul>
<li>구버전의 findViewById나 AsyncTask 등은 타입 안전성이 떨어지고 메모리 누수 위험이 큽니다. 최신 Google 권장 사양인 Kotlin Coroutines, ViewBinding / Jetpack Compose, Retrofit2, Room DB를 도입하면 코드 가독성 향상과 유지보수 효율을 극대화할 수 있습니다.</li>
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

## 1. 이벤트 처리 핵심 전문 용어 사전 (Glossary)

- **MotionEvent**: 사용자가 터치스크린에 손가락을 대었을 때 발생하는 터치 이벤트 데이터 객체입니다.
- **KeyEvent**: 사용자가 단말기의 키보드나 물리 버튼을 누르거나 떼었을 때 발생하는 이벤트입니다.
- **OnClickListener**: 뷰를 가볍게 터치 클릭했을 때 동작하는 이벤트 리스너 인터페이스입니다.
- **OnLongClickListener**: 뷰를 1초 이상 길게 누르고 있을 때 발생하는 이벤트 리스너입니다.

---

## 2. 코틀린 기반 이벤트 리스너 실전 구현 코드

```kotlin
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btnConfirm = findViewById<Button>(R.id.btnConfirm)
        val tvStatus = findViewById<TextView>(R.id.tvStatus)

        // 클릭 이벤트
        btnConfirm.setOnClickListener {
            tvStatus.text = "확인 버튼이 클릭되었습니다."
            Toast.makeText(this, "클릭 완료!", Toast.LENGTH_SHORT).show()
        }
    }
}
```

---

## 5. 안드로이드 & 코틀린 실무 심화 개발 가이드 및 최적화 전략 (Deep Dive)

본 **08. 사용자 이벤트 처리하기 - 터치 이벤트, 키 이벤트 및 Event Listener 람다 패턴** 레슨에서 다룬 핵심 이론 및 구현 기법은 현대 안드로이드 엔터프라이즈 앱 개발 시 안정성과 성능을 결정짓는 핵심 요소입니다.

### 1) 시스템 아키텍처 및 메모리 관리 지침 (Architecture & Performance)
- **메모리 누수(Memory Leak) 방지 및 Context 참조 주의**: Context 객체를 장기간 유지되는 싱글톤이나 정적 컴포넌트에 직접 참조시키면 안 되며, 반드시 필요할 경우 ApplicationContext를 활용해야 합니다.
- **뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 메모리 해제**: 프래그먼트(Fragment)에서 ViewBinding 사용 시 onDestroyView() 단계에서 바인딩 참조 포인터를 null로 초기화하여 뷰 계층 참조 누수를 예방합니다.
- **코루틴(Coroutines) 스코프 스레드 분리**: UI 조작 연산은 Dispatchers.Main, 네트워크 요청 및 데이터베이스 I/O 연산은 Dispatchers.IO, 대용량 데이터 연산은 Dispatchers.Default 스레드 풀로 완벽 분리하여 ANR(Application Not Responding) 현상을 차단합니다.
- **Clean Architecture & MVVM 패턴과의 결합**: 데이터 레이어(Repository, Data Source)와 UI 레이어(ViewModel, View/Compose)를 명확히 분리하여 데이터 상태 관리를 단방향 데이터 흐름(Unidirectional Data Flow)으로 유지합니다.

### 2) 보안, 테스트 및 배포 가이드라인 (Security & Deployment)
1. **런타임 권한(Runtime Permissions) 관리**: 카메라, 위치 정보, 저장소 접근 권한은 앱 실행 초기에 모두 요구하지 않고, 해당 기능이 실제 필요한 시점에 동적으로 권한 요청을 수행합니다.
2. **난독화(ProGuard / R8) 설정**: 앱 컴파일 및 AAB 빌드 시 R8 난독화 도구를 활성화하여 역공학(Reverse Engineering)을 통한 소스 코드 유출을 방지합니다.
3. **파이어베이스(Firebase) 및 API Key 보안**: local.properties 파일과 BuildConfig를 활용하여 비밀 API 키나 인증서 비밀번호가 Git 리포지토리에 소스 코드로 직접 노출되지 않도록 안전하게 분리합니다.

---

## 6. 핵심 요약 및 실무 FAQ (Summary & Q&A)

**Q1. 본 챕터의 기능을 구동할 때 가장 자주 발생하는 대표적인 실수는 무엇인가요?**
- UI 메인 스레드에서 네트워크 통신이나 DB I/O를 직접 수행하다가 NetworkOnMainThreadException 예외가 발생하거나 앱이 멈추는 ANR 현상이 발생하는 것입니다. 반드시 Coroutines의 withContext(Dispatchers.IO) 또는 RxJava, Jetpack WorkManager를 적용해야 합니다.

**Q2. 신규 안드로이드 프로젝트 시작 시 구버전 방식 대신 최신 권장 라이브러리를 적용해야 하는 이유는 무엇인가요?**
- 구버전의 findViewById나 AsyncTask 등은 타입 안전성이 떨어지고 메모리 누수 위험이 큽니다. 최신 Google 권장 사양인 Kotlin Coroutines, ViewBinding / Jetpack Compose, Retrofit2, Room DB를 도입하면 코드 가독성 향상과 유지보수 효율을 극대화할 수 있습니다.
',
  '<p>사용자의 터치(Touch), 키보드 입력, 화면 클릭 등 다양한 액션을 감지하고 이벤트 리스너(Event Listener) 패턴을 적용하여 상호작용하는 기술을 배웁니다.</p>
<hr>
<h2>1. 이벤트 처리 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>MotionEvent</strong>: 사용자가 터치스크린에 손가락을 대었을 때 발생하는 터치 이벤트 데이터 객체입니다.</li>
<li><strong>KeyEvent</strong>: 사용자가 단말기의 키보드나 물리 버튼을 누르거나 떼었을 때 발생하는 이벤트입니다.</li>
<li><strong>OnClickListener</strong>: 뷰를 가볍게 터치 클릭했을 때 동작하는 이벤트 리스너 인터페이스입니다.</li>
<li><strong>OnLongClickListener</strong>: 뷰를 1초 이상 길게 누르고 있을 때 발생하는 이벤트 리스너입니다.</li>
</ul>
<hr>
<h2>2. 코틀린 기반 이벤트 리스너 실전 구현 코드</h2>
<pre><code class="language-kotlin">class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btnConfirm = findViewById&lt;Button&gt;(R.id.btnConfirm)
        val tvStatus = findViewById&lt;TextView&gt;(R.id.tvStatus)

        // 클릭 이벤트
        btnConfirm.setOnClickListener {
            tvStatus.text = &quot;확인 버튼이 클릭되었습니다.&quot;
            Toast.makeText(this, &quot;클릭 완료!&quot;, Toast.LENGTH_SHORT).show()
        }
    }
}
</code></pre>
<hr>
<h2>5. 안드로이드 &amp; 코틀린 실무 심화 개발 가이드 및 최적화 전략 (Deep Dive)</h2>
<p>본 <strong>08. 사용자 이벤트 처리하기 - 터치 이벤트, 키 이벤트 및 Event Listener 람다 패턴</strong> 레슨에서 다룬 핵심 이론 및 구현 기법은 현대 안드로이드 엔터프라이즈 앱 개발 시 안정성과 성능을 결정짓는 핵심 요소입니다.</p>
<h3>1) 시스템 아키텍처 및 메모리 관리 지침 (Architecture &amp; Performance)</h3>
<ul>
<li><strong>메모리 누수(Memory Leak) 방지 및 Context 참조 주의</strong>: Context 객체를 장기간 유지되는 싱글톤이나 정적 컴포넌트에 직접 참조시키면 안 되며, 반드시 필요할 경우 ApplicationContext를 활용해야 합니다.</li>
<li><strong>뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 메모리 해제</strong>: 프래그먼트(Fragment)에서 ViewBinding 사용 시 onDestroyView() 단계에서 바인딩 참조 포인터를 null로 초기화하여 뷰 계층 참조 누수를 예방합니다.</li>
<li><strong>코루틴(Coroutines) 스코프 스레드 분리</strong>: UI 조작 연산은 Dispatchers.Main, 네트워크 요청 및 데이터베이스 I/O 연산은 Dispatchers.IO, 대용량 데이터 연산은 Dispatchers.Default 스레드 풀로 완벽 분리하여 ANR(Application Not Responding) 현상을 차단합니다.</li>
<li><strong>Clean Architecture &amp; MVVM 패턴과의 결합</strong>: 데이터 레이어(Repository, Data Source)와 UI 레이어(ViewModel, View/Compose)를 명확히 분리하여 데이터 상태 관리를 단방향 데이터 흐름(Unidirectional Data Flow)으로 유지합니다.</li>
</ul>
<h3>2) 보안, 테스트 및 배포 가이드라인 (Security &amp; Deployment)</h3>
<ol>
<li><strong>런타임 권한(Runtime Permissions) 관리</strong>: 카메라, 위치 정보, 저장소 접근 권한은 앱 실행 초기에 모두 요구하지 않고, 해당 기능이 실제 필요한 시점에 동적으로 권한 요청을 수행합니다.</li>
<li><strong>난독화(ProGuard / R8) 설정</strong>: 앱 컴파일 및 AAB 빌드 시 R8 난독화 도구를 활성화하여 역공학(Reverse Engineering)을 통한 소스 코드 유출을 방지합니다.</li>
<li><strong>파이어베이스(Firebase) 및 API Key 보안</strong>: local.properties 파일과 BuildConfig를 활용하여 비밀 API 키나 인증서 비밀번호가 Git 리포지토리에 소스 코드로 직접 노출되지 않도록 안전하게 분리합니다.</li>
</ol>
<hr>
<h2>6. 핵심 요약 및 실무 FAQ (Summary &amp; Q&amp;A)</h2>
<p><strong>Q1. 본 챕터의 기능을 구동할 때 가장 자주 발생하는 대표적인 실수는 무엇인가요?</strong></p>
<ul>
<li>UI 메인 스레드에서 네트워크 통신이나 DB I/O를 직접 수행하다가 NetworkOnMainThreadException 예외가 발생하거나 앱이 멈추는 ANR 현상이 발생하는 것입니다. 반드시 Coroutines의 withContext(Dispatchers.IO) 또는 RxJava, Jetpack WorkManager를 적용해야 합니다.</li>
</ul>
<p><strong>Q2. 신규 안드로이드 프로젝트 시작 시 구버전 방식 대신 최신 권장 라이브러리를 적용해야 하는 이유는 무엇인가요?</strong></p>
<ul>
<li>구버전의 findViewById나 AsyncTask 등은 타입 안전성이 떨어지고 메모리 누수 위험이 큽니다. 최신 Google 권장 사양인 Kotlin Coroutines, ViewBinding / Jetpack Compose, Retrofit2, Room DB를 도입하면 코드 가독성 향상과 유지보수 효율을 극대화할 수 있습니다.</li>
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
