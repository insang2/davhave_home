-- Mobile Ultra All 21 Lessons Part 4

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'mobile',
  'ch13-activity-component-and-intent-filters',
  '13. 액티비티 컴포넌트 - Activity 생명주기(Lifecycle), Intent 및 Activity Result API',
  '안드로이드 앱의 기본 화면 단위인 Activity 생명주기 관리, 데이터 전달을 위한 Intent 객체와 최신 화면 결과 수신 API를 다룹니다.',
  '안드로이드 4대 핵심 컴포넌트 중 첫 번째인 **액티비티(Activity)**의 6대 **생명주기(Lifecycle)**와 화면 간 데이터 이동 통로인 **인텐트(Intent)**를 심도 있게 학습합니다.

---

## 1. 액티비티 생명주기 6대 핵심 콜백

- **onCreate()**: 액티비티가 생성될 때 최초 호출되며 뷰 바인딩 및 필수 데이터 초기화를 실행합니다.
- **onStart()**: 화면이 사용자에게 보이기 직전에 호출됩니다.
- **onResume()**: 화면이 사용자 포커스를 완전히 얻어 입력 상호작용이 가능한 상태가 됩니다.
- **onPause()**: 다른 액티비티가 일부를 가리거나 포커스를 잃어 잠시 멈춤 상태가 됩니다.
- **onStop()**: 액티비티가 화면에서 완전히 가려져 보이지 않게 될 때 호출됩니다.
- **onDestroy()**: 액티비티가 완벽히 파괴되어 메모리에서 소멸될 때 호출됩니다.

---

## 2. Activity Result API 최신 구현 코드

```kotlin
class MainActivity : AppCompatActivity() {

    private val launcher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        if (result.resultCode == RESULT_OK) {
            val returnVal = result.data?.getStringExtra("REPLY")
            Log.d("ActivityResult", "받은 응답: " + returnVal)
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btnMove = findViewById<Button>(R.id.btnMove)
        btnMove.setOnClickListener {
            val intent = Intent(this, SecondActivity::class.java)
            launcher.launch(intent)
        }
    }
}
```

---

## 5. 안드로이드 & 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)

본 **13. 액티비티 컴포넌트 - Activity 생명주기(Lifecycle), Intent 및 Activity Result API** 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.

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
  '<p>안드로이드 4대 핵심 컴포넌트 중 첫 번째인 **액티비티(Activity)**의 6대 **생명주기(Lifecycle)**와 화면 간 데이터 이동 통로인 **인텐트(Intent)**를 심도 있게 학습합니다.</p>
<hr>
<h2>1. 액티비티 생명주기 6대 핵심 콜백</h2>
<ul>
<li><strong>onCreate()</strong>: 액티비티가 생성될 때 최초 호출되며 뷰 바인딩 및 필수 데이터 초기화를 실행합니다.</li>
<li><strong>onStart()</strong>: 화면이 사용자에게 보이기 직전에 호출됩니다.</li>
<li><strong>onResume()</strong>: 화면이 사용자 포커스를 완전히 얻어 입력 상호작용이 가능한 상태가 됩니다.</li>
<li><strong>onPause()</strong>: 다른 액티비티가 일부를 가리거나 포커스를 잃어 잠시 멈춤 상태가 됩니다.</li>
<li><strong>onStop()</strong>: 액티비티가 화면에서 완전히 가려져 보이지 않게 될 때 호출됩니다.</li>
<li><strong>onDestroy()</strong>: 액티비티가 완벽히 파괴되어 메모리에서 소멸될 때 호출됩니다.</li>
</ul>
<hr>
<h2>2. Activity Result API 최신 구현 코드</h2>
<pre><code class="language-kotlin">class MainActivity : AppCompatActivity() {

    private val launcher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result -&gt;
        if (result.resultCode == RESULT_OK) {
            val returnVal = result.data?.getStringExtra(&quot;REPLY&quot;)
            Log.d(&quot;ActivityResult&quot;, &quot;받은 응답: &quot; + returnVal)
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btnMove = findViewById&lt;Button&gt;(R.id.btnMove)
        btnMove.setOnClickListener {
            val intent = Intent(this, SecondActivity::class.java)
            launcher.launch(intent)
        }
    }
}
</code></pre>
<hr>
<h2>5. 안드로이드 &amp; 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)</h2>
<p>본 <strong>13. 액티비티 컴포넌트 - Activity 생명주기(Lifecycle), Intent 및 Activity Result API</strong> 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.</p>
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
  '안드로이드 액티비티 - Activity 생명주기, 명시적/암시적 Intent & Activity Result API',
  '4대 컴포넌트인 Activity의 생명주기(onCreate~onDestroy), 화면 전환 명시적/암시적 Intent 및 최신 Activity Result API(registerForActivityResult)를 배웁니다.',
  13,
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
  'ch14-broadcast-receiver-component',
  '14. 브로드캐스트리시버 컴포넌트 - 동적/정적 리시버 등록 및 시스템 브로드캐스트 이벤트',
  '단말기 상태 변화 이벤트를 감지하는 BroadcastReceiver 컴포넌트의 동적(Code)/정적(Manifest) 등록 방식과 시스템 이벤트 수신법을 학습합니다.',
  '안드로이드 OS나 다른 앱이 발송하는 시스템 이벤트 신호를 수신하여 독립적인 처리를 수행하는 **브로드캐스트 리시버(BroadcastReceiver)** 컴포넌트를 배웁니다.

---

## 1. 브로드캐스트리시버 핵심 개념

- **BroadcastReceiver**: 단말기의 상태 변화(배터리 부족, 부팅 완료, 네트워크 변경)나 사용자 정의 알림 이벤트를 감지하는 4대 컴포넌트입니다.
- **정적 등록**: AndroidManifest.xml에 선언하여 앱 미실행 중에도 이벤트를 감지합니다.
- **동적 등록**: 코틀린 코드에서 registerReceiver() 및 unregisterReceiver()로 수신 범위를 제어합니다.

---

## 2. 동적 배터리 감지 리시버 구현

```kotlin
class MainActivity : AppCompatActivity() {
    private val receiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context?, intent: Intent?) {
            if (intent?.action == Intent.ACTION_BATTERY_LOW) {
                Toast.makeText(context, "배터리가 부족합니다!", Toast.LENGTH_SHORT).show()
            }
        }
    }

    override fun onResume() {
        super.onResume()
        registerReceiver(receiver, IntentFilter(Intent.ACTION_BATTERY_LOW))
    }

    override fun onPause() {
        super.onPause()
        unregisterReceiver(receiver)
    }
}
```

---

## 5. 안드로이드 & 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)

본 **14. 브로드캐스트리시버 컴포넌트 - 동적/정적 리시버 등록 및 시스템 브로드캐스트 이벤트** 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.

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
  '<p>안드로이드 OS나 다른 앱이 발송하는 시스템 이벤트 신호를 수신하여 독립적인 처리를 수행하는 <strong>브로드캐스트 리시버(BroadcastReceiver)</strong> 컴포넌트를 배웁니다.</p>
<hr>
<h2>1. 브로드캐스트리시버 핵심 개념</h2>
<ul>
<li><strong>BroadcastReceiver</strong>: 단말기의 상태 변화(배터리 부족, 부팅 완료, 네트워크 변경)나 사용자 정의 알림 이벤트를 감지하는 4대 컴포넌트입니다.</li>
<li><strong>정적 등록</strong>: AndroidManifest.xml에 선언하여 앱 미실행 중에도 이벤트를 감지합니다.</li>
<li><strong>동적 등록</strong>: 코틀린 코드에서 registerReceiver() 및 unregisterReceiver()로 수신 범위를 제어합니다.</li>
</ul>
<hr>
<h2>2. 동적 배터리 감지 리시버 구현</h2>
<pre><code class="language-kotlin">class MainActivity : AppCompatActivity() {
    private val receiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context?, intent: Intent?) {
            if (intent?.action == Intent.ACTION_BATTERY_LOW) {
                Toast.makeText(context, &quot;배터리가 부족합니다!&quot;, Toast.LENGTH_SHORT).show()
            }
        }
    }

    override fun onResume() {
        super.onResume()
        registerReceiver(receiver, IntentFilter(Intent.ACTION_BATTERY_LOW))
    }

    override fun onPause() {
        super.onPause()
        unregisterReceiver(receiver)
    }
}
</code></pre>
<hr>
<h2>5. 안드로이드 &amp; 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)</h2>
<p>본 <strong>14. 브로드캐스트리시버 컴포넌트 - 동적/정적 리시버 등록 및 시스템 브로드캐스트 이벤트</strong> 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.</p>
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
  '브로드캐스트 리시버 - 동적/정적 Receiver, 배터리/부팅/네트워크 시스템 이벤트',
  '안드로이드 시스템 메시지(부팅 완료, 배터리 부족, 네트워크 연결 상태 변경)를 감지하여 실행되는 BroadcastReceiver 컴포넌트 구성을 배웁니다.',
  14,
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
  'ch15-service-component-and-background-processing',
  '15. 서비스 컴포넌트 - Foreground Service, Bound Service 및 WorkManager 비동기 작업',
  '오디오 재생, 위치 추적 등 백그라운드 장기 실행 작업을 담당하는 Service 컴포넌트와 안드로이드 권장 백그라운드 처리 모듈인 WorkManager를 다룹니다.',
  'UI 화면 없이 백그라운드에서 장시간 작업을 수행하는 **서비스(Service)** 컴포넌트와 **Foreground Service**, 그리고 **WorkManager**를 다룹니다.

---

## 1. 서비스 3가지 유형

- **Foreground Service**: 사용자에게 상단 알림을 의무 노출하고 높은 우선순위로 장시간 실행되는 백그라운드 서비스입니다.
- **Background Service**: 사용자에게 직접 보이지 않는 연산을 수행합니다.
- **Bound Service**: 액티비티와 바인딩되어 데이터 주고받기 인터페이스를 제공하는 서비스입니다.

---

## 2. WorkManager 등록 예제

```kotlin
class LogWorker(ctx: Context, params: WorkerParameters) : Worker(ctx, params) {
    override fun doWork(): Result {
        Log.d("WorkManager", "백그라운드 동기화 수행 중...")
        return Result.success()
    }
}

val request = OneTimeWorkRequestBuilder<LogWorker>().build()
WorkManager.getInstance(applicationContext).enqueue(request)
```

---

## 5. 안드로이드 & 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)

본 **15. 서비스 컴포넌트 - Foreground Service, Bound Service 및 WorkManager 비동기 작업** 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.

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
  '<p>UI 화면 없이 백그라운드에서 장시간 작업을 수행하는 <strong>서비스(Service)</strong> 컴포넌트와 <strong>Foreground Service</strong>, 그리고 <strong>WorkManager</strong>를 다룹니다.</p>
<hr>
<h2>1. 서비스 3가지 유형</h2>
<ul>
<li><strong>Foreground Service</strong>: 사용자에게 상단 알림을 의무 노출하고 높은 우선순위로 장시간 실행되는 백그라운드 서비스입니다.</li>
<li><strong>Background Service</strong>: 사용자에게 직접 보이지 않는 연산을 수행합니다.</li>
<li><strong>Bound Service</strong>: 액티비티와 바인딩되어 데이터 주고받기 인터페이스를 제공하는 서비스입니다.</li>
</ul>
<hr>
<h2>2. WorkManager 등록 예제</h2>
<pre><code class="language-kotlin">class LogWorker(ctx: Context, params: WorkerParameters) : Worker(ctx, params) {
    override fun doWork(): Result {
        Log.d(&quot;WorkManager&quot;, &quot;백그라운드 동기화 수행 중...&quot;)
        return Result.success()
    }
}

val request = OneTimeWorkRequestBuilder&lt;LogWorker&gt;().build()
WorkManager.getInstance(applicationContext).enqueue(request)
</code></pre>
<hr>
<h2>5. 안드로이드 &amp; 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)</h2>
<p>본 <strong>15. 서비스 컴포넌트 - Foreground Service, Bound Service 및 WorkManager 비동기 작업</strong> 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.</p>
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
  '안드로이드 서비스 - Foreground Service, Bound Service, Notification & WorkManager',
  '화면 없이 백그라운드 연산을 수행하는 Service 컴포넌트(Foreground, Bound Service) 및 지속적 작업 관리자 Jetpack WorkManager를 배웁니다.',
  15,
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
  'ch16-content-provider-component',
  '16. 콘텐츠 프로바이더 컴포넌트 - Uri, ContentResolver 및 갤러리/주소록 외부 데이터 공유',
  '서로 다른 앱 간에 데이터 저장소를 공유 가능하게 만들어 주는 ContentProvider 컴포넌트와 ContentResolver 쿼리 사용법을 학습합니다.',
  '안드로이드의 샌드박스(Sandbox) 보안 장벽을 넘어 앱 간 데이터를 안전하게 공유해 주는 **콘텐츠 프로바이더(ContentProvider)**를 다룹니다.

---

## 1. ContentProvider 및 Uri 구조

- **ContentProvider**: 다른 앱에게 데이터를 공유하는 표준 CRUD 인터페이스 컴포넌트입니다.
- **ContentResolver**: 앱 내에서 외부 ContentProvider를 쿼리하기 위한 요청 중계자입니다.
- **Uri**: content://com.example.provider/table1 형식으로 공유 자원을 지칭하는 유일 주소입니다.

---

## 2. 주소록 쿼리 수집 예제

```kotlin
val uri = ContactsContract.CommonDataKinds.Phone.CONTENT_URI
val cursor = contentResolver.query(uri, null, null, null, null)

cursor?.use {
    while (it.moveToNext()) {
        val nameIdx = it.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME)
        val name = it.getString(nameIdx)
        Log.d("Contacts", "연락처 이름: " + name)
    }
}
```

---

## 5. 안드로이드 & 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)

본 **16. 콘텐츠 프로바이더 컴포넌트 - Uri, ContentResolver 및 갤러리/주소록 외부 데이터 공유** 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.

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
  '<p>안드로이드의 샌드박스(Sandbox) 보안 장벽을 넘어 앱 간 데이터를 안전하게 공유해 주는 **콘텐츠 프로바이더(ContentProvider)**를 다룹니다.</p>
<hr>
<h2>1. ContentProvider 및 Uri 구조</h2>
<ul>
<li><strong>ContentProvider</strong>: 다른 앱에게 데이터를 공유하는 표준 CRUD 인터페이스 컴포넌트입니다.</li>
<li><strong>ContentResolver</strong>: 앱 내에서 외부 ContentProvider를 쿼리하기 위한 요청 중계자입니다.</li>
<li><strong>Uri</strong>: content://com.example.provider/table1 형식으로 공유 자원을 지칭하는 유일 주소입니다.</li>
</ul>
<hr>
<h2>2. 주소록 쿼리 수집 예제</h2>
<pre><code class="language-kotlin">val uri = ContactsContract.CommonDataKinds.Phone.CONTENT_URI
val cursor = contentResolver.query(uri, null, null, null, null)

cursor?.use {
    while (it.moveToNext()) {
        val nameIdx = it.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME)
        val name = it.getString(nameIdx)
        Log.d(&quot;Contacts&quot;, &quot;연락처 이름: &quot; + name)
    }
}
</code></pre>
<hr>
<h2>5. 안드로이드 &amp; 코틀린 실무 심화 개발 가이드 및 엔터프라이즈 최적화 (Deep Dive)</h2>
<p>본 <strong>16. 콘텐츠 프로바이더 컴포넌트 - Uri, ContentResolver 및 갤러리/주소록 외부 데이터 공유</strong> 레슨에서 다룬 핵심 이론 및 구현 패턴은 대규모 상용 모바일 앱 제작 시 앱의 안정성과 응답 속도(Performance), 메모리 사용량을 결정하는 주요 엔지니어링 팩터입니다.</p>
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
  '콘텐츠 프로바이더 - ContentProvider, Uri, ContentResolver & Scoped Storage',
  '앱 간의 안전한 데이터 공유 인터페이스인 ContentProvider, ContentResolver, Uri 형태의 데이터 쿼리 및 갤러리/주소록 연동 권한을 배웁니다.',
  16,
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
