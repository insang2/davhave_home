import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

function makeMegaContent(slug, title, bodyMd) {
  let content = bodyMd.trim();
  content += `\n\n---

## 5. 안드로이드 & 코틀린 실무 개발 가이드 및 모범 사례 (Best Practices)

본 **${title}** 레슨에서 학습한 핵심 개념을 바탕으로 실제 상용 안드로이드 애플리케이션을 구동 및 최적화할 때 준수해야 하는 모바일 개발 가이드라인입니다.

### 1) 시스템 아키텍처 및 메모리 관리 지침
- **메모리 누수(Memory Leak) 방지**: \`Context\` 객체를 장기간 유지되는 싱글톤(Singleton)이나 정적 변수에 직접 참조시키지 말고, 필요한 경우 \`ApplicationContext\`를 활용해야 합니다.
- **뷰 바인딩(ViewBinding) 및 리사이클러뷰(RecyclerView) 메모리 해제**: 프래그먼트(Fragment)에서 ViewBinding 사용 시 \`onDestroyView()\` 단계에서 바인딩 참조 포인터를 \`null\`로 초기화하여 뷰 계층 참조 누수를 예방합니다.
- **코루틴(Coroutines) 스코프 스레드 분리**: UI 조작 연산은 \`Dispatchers.Main\`, 네트워크 요청 및 데이터베이스 I/O 연산은 \`Dispatchers.IO\`, 대용량 데이터 연산은 \`Dispatchers.Default\` 스레드 풀로 완벽 분리하여 ANR(Application Not Responding) 현상을 차단합니다.

### 2) Google Play 스토어 보안 및 가이드라인
1. **런타임 권한(Runtime Permissions) 관리**: 카메라, 위치 정보, 저장소 접근 권한은 앱 실행 초기에 모두 요구하지 않고, 해당 기능이 실제 필요한 시점에 동적으로 권한 요청을 수행합니다.
2. **난독화(ProGuard / R8) 설정**: 앱 컴파일 및 AAB 빌드 시 R8 난독화 도구를 활성화하여 역공학(Reverse Engineering)을 통한 소스 코드 유출을 방지합니다.
3. **파이어베이스(Firebase) 보안 규칙 정립**: Firestore 및 Storage 연동 시 모든 사용자가 접근 가능한 무제한 읽기/쓰기 규칙을 배제하고, \`request.auth != null\` 기반의 인증된 사용자만 접근할 수 있는 엄격한 데이터 보안 규칙을 작성합니다.

---

## 6. 핵심 요약 및 실무 FAQ (Summary & Q&A)

**Q1. 본 챕터의 기능을 구동할 때 가장 자주 발생하는 대표적인 실수는 무엇인가요?**
- UI 메인 스레드에서 네트워크 통신이나 DB I/O를 직접 수행하다가 \`NetworkOnMainThreadException\` 예외가 발생하거나 앱이 멈추는 ANR 현상이 발생하는 것입니다. 반드시 Coroutines의 \`withContext(Dispatchers.IO)\` 또는 RxJava, Jetpack WorkManager를 적용해야 합니다.

**Q2. 신규 안드로이드 프로젝트 시작 시 구버전 방식 대신 최신 권장 라이브러리를 적용해야 하는 이유는 무엇인가요?**
- 구버전의 \`findViewById\`나 \`AsyncTask\` 등은 타입 안전성이 떨어지고 메모리 누수 위험이 큽니다. 최신 Google 권장 사양인 Kotlin Coroutines, ViewBinding / Jetpack Compose, Retrofit2, Room DB를 도입하면 코드 가독성 향상과 유지보수 효율을 극대화할 수 있습니다.
`;

  return content;
}

const lessons = [
  // 1
  {
    order_index: 1,
    slug: 'ch01-android-studio-and-development-environment',
    title: '01. 안드로이드 앱 개발 환경 준비 - Android Studio, JDK 17, SDK Manager 및 AVD 설정',
    seo_title: '안드로이드 개발 환경 구축 - Android Studio, SDK, AVD 에뮬레이터 & ADB 설정',
    seo_description: '안드로이드 앱 개발의 첫걸음인 Android Studio 설치, JDK 17, Android SDK Manager, AVD 에뮬레이터 생성 및 ADB 개발 도구 설정을 배웁니다.',
    excerpt: '안드로이드 앱 개발을 위한 공식 IDE인 Android Studio 환경 구축, Android SDK 설정 및 가상 디바이스(AVD) 실행을 학습합니다.',
    body_md: `구글의 공식 안드로이드 통합 개발 환경(IDE)인 **Android Studio** 설치와 개발에 필요한 **JDK 17, SDK Platform**, 그리고 **AVD(Android Virtual Device)** 에뮬레이터 설정을 체계적으로 다룹니다.

---

## 1. 개발 환경 핵심 전문 용어 사전 (Glossary)

- **Android Studio**: 구글과 JetBrains가 공동 개발한 공식 안드로이드 전용 IDE로, IntelliJ IDEA를 기반으로 구축되었습니다.
- **JDK (Java Development Kit)**: 안드로이드 앱 컴파일 및 코틀린/자바 코드 빌드에 필수적인 개발 키트입니다. (Android Studio에 기본 포함)
- **Android SDK (Software Development Kit)**: 안드로이드 버전별 API 라이브러리, 빌드 도구(Build Tools), 에뮬레이터 및 디버깅 툴의 집합체입니다.
- **AVD (Android Virtual Device)**: PC 상에서 안드로이드 스마트폰 디바이스를 소프트웨어적으로 가상 구동하는 에뮬레이터입니다.
- **ADB (Android Debug Bridge)**: PC와 안드로이드 단말기(또는 에뮬레이터) 간의 통신을 제어하고 앱 설치, 로그 확인(\`logcat\`)을 수행하는 명령줄 도구입니다.

---

## 2. 안드로이드 개발 환경 설치 및 설정 단계

\`\`\`
+-----------------------+        +-----------------------+        +-----------------------+
|  Android Studio 설치  |  --->  |   Android SDK 설정    |  --->  |   AVD 에뮬레이터 생성  |
|  (공식 웹사이트 다운)  |        |  (API 34/35 & Build) |        |  (Pixel 8 Pro 이미지) |
+-----------------------+        +-----------------------+        +-----------------------+
\`\`\`

1. **Android Studio 다운로드**: 공식 사이트(developer.android.com)에서 OS(Windows/macOS/Linux)에 맞는 최신 버전(Ladybug / Koala 이상) 다운로드 및 설치.
2. **SDK Component 수록**: \`Android SDK Platform 34 (Android 14)\` 및 \`Android SDK Build-Tools\`, \`Android Emulator\` 선택 설치.
3. **AVD 가상 디바이스 생성**: Device Manager 메뉴에서 Pixel 8 / System Image(x86_64, Google APIs)를 설치하여 디바이스 셋업.

---

## 3. ADB 핵심 명령줄 구문

\`\` $ adb devices \`\` 명령어로 연동된 디바이스 목록을 확인하고 디버깅을 수행합니다.

\`\`\`bash
# 1. 연결된 안드로이드 디바이스 및 에뮬레이터 확인
adb devices

# 2. 실시간 로그캣 출력
adb logcat -v time *:E

# 3. APK 수동 설치
adb install app-debug.apk
\`\`\`
`
  },
  // 2
  {
    order_index: 2,
    slug: 'ch02-android-app-architecture-and-project-structure',
    title: '02. 안드로이드 앱의 기본 구조 - AndroidManifest.xml, Gradle 빌드 스크립트 및 APK/AAB 생성',
    seo_title: '안드로이드 프로젝트 구조 - AndroidManifest.xml, Gradle(build.gradle.kts) & APK/AAB',
    seo_description: '안드로이드 앱의 필수 명세서인 AndroidManifest.xml, 빌드 자동화 도구 Gradle(build.gradle.kts), 프로젝트 구조 및 APK/AAB 패키징 과정을 배웁니다.',
    excerpt: '앱의 구성 요소와 권한을 선언하는 AndroidManifest.xml, 의존성을 관리하는 Gradle 빌드 시스템과 APK/AAB 서명 배포 과정을 학습합니다.',
    body_md: `안드로이드 애플리케이션의 4대 컴포넌트 명세서인 **AndroidManifest.xml**과 프로젝트 빌드·의존성 관리 시스템인 **Gradle(build.gradle.kts)** 구조를 상세 분석합니다.

---

## 1. 프로젝트 구조 핵심 전문 용어 사전 (Glossary)

- **AndroidManifest.xml**: 앱의 패키지명, 4대 컴포넌트(Activity, Service, Receiver, Provider) 등록, 앱 권한(Permissions) 및 테마를 정의하는 핵심 XML 명세서입니다.
- **Gradle**: 안드로이드 앱의 소스 코드 컴파일, 외부 라이브러리 의존성(Dependencies) 관리, 빌드 변형(Build Variants) 및 APK 패키징을 수행하는 빌드 자동화 도구입니다.
- **build.gradle.kts**: Kotlin DSL(Domain Specific Language) 기반의 Gradle 설정 파일로, 프로젝트 수준과 모듈 수준으로 나뉩니다.
- **APK (Android Package Kit)**: 단말기에 앱을 직접 디버깅/설치할 수 있는 안드로이드 바이너리 실행 패키지 파일입니다.
- **AAB (Android App Bundle)**: Google Play 스토어 출시에 사용하는 최신 번들 형식으로, 사용자 기기 사양에 맞춰 필요한 리소스만 맞춤 다운로드해 줍니다.

---

## 2. AndroidManifest.xml 주요 설정 코드 예제

\`\`\`xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.davhave.mobileapp">

    <!-- 인터넷 사용 권한 선언 -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/Theme.DAVHAVE">

        <!-- 런처 메인 액티비티 설정 -->
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
\`\`\`
`
  },
  // 3
  {
    order_index: 3,
    slug: 'ch03-kotlin-fundamentals-syntax-and-control-flow',
    title: '03. 코틀린(Kotlin) 프로그래밍 기초 - 변수 val/var, 데이터 타입, 함수 및 Null Safety',
    seo_title: '코틀린 기초 문법 - val/var, 데이터 타입, when 제어문 & Null Safety(?., ?:, !!)',
    seo_description: '안드로이드 공식 언어인 코틀린(Kotlin)의 불변/가변 변수(val/var), 기본 데이터 타입, 함수 선언, when 조건문 및 널 안전성(Null Safety)을 배웁니다.',
    excerpt: '구글 권장 안드로이드 언어인 코틀린의 변수 선언(val/var), 조건문(if/when), 반복문 및 NPE(NullPointerException)를 근본 차단하는 Null Safety 기법을 다룹니다.',
    body_md: `구글이 선정한 안드로이드 퍼스트 언어인 **코틀린(Kotlin)**의 기본 문법 규칙과 변수 타입, 그리고 NPE(NullPointerException) 발생을 혁신적으로 예방하는 **Null Safety** 메커니즘을 배웁니다.

---

## 1. 코틀린 기초 핵심 전문 용어 사전 (Glossary)

- **\`val\` (Value)**: 한 번 값이 할당되면 변경할 수 없는 불변(Immutable) 읽기 전용 변수를 선언합니다. (Java의 \`final\`에 대응)
- **\`var\` (Variable)**: 생성 후에도 값을 자유롭게 재할당할 수 있는 가변(Mutable) 변수를 선언합니다.
- **Type Inference (타입 추론)**: 변수 선언 시 명시적인 타입을 적지 않아도 초깃값의 형태를 분석하여 코틀린 컴파일러가 타입을 자동 결정하는 기능입니다.
- **Null Safety (널 안전성)**: 기본적으로 모든 변수에 \`null\` 할당을 금지하고, 널 가능 변수(\`Type?\`)를 구분하여 컴파일 타임에 널 관련 Crash를 예방하는 코틀린의 핵심 철학입니다.
- **Safe Call Operator (\`?.\`)**: 객체가 \`null\`이 아닐 때만 멤버 속성에 접근하고, \`null\`이면 에러 대신 \`null\`을 반환하는 연산자입니다.
- **Elvis Operator (\`?:\`)**: 표현식의 왼쪽 결과가 \`null\`일 때 우측의 기본 대체값을 채워주는 연산자입니다.

---

## 2. 코틀린 실전 문법 소스 코드

\`\`\`kotlin
fun main() {
    // 1. 불변 및 가변 변수 선언
    val appName: String = "DAVHAVE Mobile"
    var userCount: Int = 100
    userCount += 1

    // 2. when 표현식 (Java switch 대체)
    val score = 85
    val grade = when (score) {
        in 90..100 -> "A"
        in 80..89 -> "B"
        in 70..79 -> "C"
        else -> "F"
    }
    println("학점: $grade")

    // 3. Null Safety 기법 (?., ?:)
    var nullableName: String? = null
    val length: Int = nullableName?.length ?: 0 // null이면 0 대체
    println("이름 길이: $length")
}
\`\`\`
`
  },
  // 4
  {
    order_index: 4,
    slug: 'ch04-kotlin-object-oriented-programming',
    title: '04. 코틀린 객체지향 프로그래밍(OOP) - 클래스, 생성자, 상속, 인터페이스 및 Data Class',
    seo_title: '코틀린 객체지향 OOP - 클래스, 주/부 생성자, 상속(open), 인터페이스, Data Class',
    seo_description: '코틀린의 클래스, 주 생성자(Primary Constructor), init 블록, 상속(open 키워드), 인터페이스, 데이터 클래스(Data Class) 및 companion object를 배웁니다.',
    excerpt: '코틀린 객체지향 핵심인 클래스와 생성자, 상속 구조, 인터페이스 구현, 그리고 toString/equals가 자동 생성되는 Data Class와 동반 객체를 다룹니다.',
    body_md: `코틀린의 객체지향 프로그래밍(OOP) 패러다임과 클래스 선언, 간결한 **주 생성자(Primary Constructor)**, **상속(open)**, 그리고 보일러플레이트 코드를 줄여주는 **Data Class**를 학습합니다.

---

## 1. 코틀린 OOP 핵심 용어 사전 (Glossary)

- **Primary Constructor (주 생성자)**: 클래스 이름 바로 뒤 헤더에 매개변수를 지정하여 속성을 즉시 선언하는 코틀린 고유의 간결한 생성자입니다.
- **\`init\` 블록**: 주 생성자 호출 직후 객체 초기화 로직을 수행하는 코드 블록입니다.
- **\`open\` 키워드**: 코틀린의 모든 클래스 및 메서드는 기본적으로 \`final\`(상속 불가)이므로, 상속을 허용하기 위해 붙여주는 키워드입니다.
- **Data Class**: 데이터를 보관하는 목적의 클래스로, \`equals()\`, \`hashCode()\`, \`toString()\`, \`copy()\` 함수를 컴파일러가 자동 생성해 줍니다.
- **Companion Object (동반 객체)**: 클래스 내부에 선언되어 자바의 \`static\` 멤버처럼 인스턴스 생성 없이 접근 가능한 정적 객체 공간입니다.

---

## 2. 코틀린 Data Class 및 상속 구조 소스 코드

\`\`\`kotlin
// 1. 데이터 클래스 선언
data class User(val id: Long, val name: String, val email: String)

// 2. 상속을 허용하는 부모 클래스
open class Animal(val name: String) {
    open fun makeSound() {
        println("$name 이(가) 소리를 냅니다.")
    }
}

// 3. 자식 클래스 상속 및 메서드 오버라이딩
class Dog(name: String) : Animal(name) {
    override fun makeSound() {
        println("$name 이(가) 멍멍 짖습니다!")
    }

    companion object {
        const val SPECIES = "Canine"
        fun createDefaultDog(): Dog = Dog("바둑이")
    }
}
\`\`\`
`
  },
  // 5
  {
    order_index: 5,
    slug: 'ch05-kotlin-advanced-features-lambdas-and-scope-functions',
    title: '05. 코틀린의 유용한 기법 - 람다 표현식, 고차 함수, 확장 함수 및 Scope Functions (let, apply, run)',
    seo_title: '코틀린 고급 기법 - 람다, 고차 함수, 확장 함수 & Scope Functions (let, run, apply, also)',
    seo_description: '코틀린 코드를 더욱 간결하고 우아하게 만드는 람다 함수, 고차 함수, 확장 함수(Extension Functions) 및 Scope Functions (let, run, apply, also, with)를 배웁니다.',
    excerpt: '함수형 프로그래밍을 지원하는 람다식, 고차 함수, 기존 클래스 기능을 확장하는 확장 함수와 객체 처리 스코프 함수 5종을 다룹니다.',
    body_md: `코틀린의 코드 생산성을 극대화해 주는 **람다(Lambda)** 표현식, **확장 함수(Extension Function)**, 그리고 객체 초기화 및 검증에 필수적인 **Scope Functions (let, run, apply, also, with)**를 배웁니다.

---

## 1. 고급 코틀린 기법 용어 사전 (Glossary)

- **Lambda Expression (람다식)**: 익명 함수의 일종으로, \`{ x, y -> x + y }\` 형태로 변수에 저장하거나 다른 함수의 파라미터로 전달할 수 있는 함수 객체입니다.
- **High-Order Function (고차 함수)**: 함수를 파라미터로 입력받거나, 반환값으로 함수를 리턴하는 함수입니다.
- **Extension Function (확장 함수)**: 기존 상용 클래스(예: \`String\`, \`View\`)의 소스 코드를 수정하지 않고도 새로운 멤버 메서드를 추가 확장하는 기능입니다.
- **Scope Functions (스코프 함수)**: 객체의 이름을 반복하지 않고 임시 영역(Scope)을 형성하여 속성을 초기화하거나 연산을 수행하는 5가지 헬퍼 함수입니다. (\`let\`, \`run\`, \`apply\`, \`also\`, \`with\`)

---

## 2. 5대 Scope Functions 특징 정리표

| 함수명 | 객체 참조 방식 (\`it\` vs \`this\`) | 반환값 (Return Value) | 주요 추천 활용 사례 |
| :--- | :---: | :--- | :--- |
| **\`apply\`** | \`this\` | **수신 객체 자신 (\`this\`)** | 객체의 속성을 연쇄 초기화할 때 (Intent, View 설정) |
| **\`let\`** | \`it\` | **람다 블록의 마지막 연산 결과** | Null 체크 후 안전하게 실행하거나 변수 변환 시 |
| **\`run\`** | \`this\` | **람다 블록의 마지막 연산 결과** | 객체 초기화와 계산 결과를 동시에 반환할 때 |
| **\`also\`** | \`it\` | **수신 객체 자신 (\`this\`)** | 객체 설정 후 유효성 검사, 디버그 로그 출력할 때 |
| **\`with\`** | \`this\` | **람다 블록의 마지막 연산 결과** | 이미 생성된 객체의 속성을 연달아 참조할 때 |

---

## 3. 확장 함수 및 Scope Function 활용 소스 코드

\`\`\`kotlin
// 1. String 클래스에 확장 함수 추가
fun String.toFormattedPhone(): String {
    if (this.length == 11) {
        return "\${this.substring(0, 3)}-\${this.substring(3, 7)}-\${this.substring(7)}"
    }
    return this
}

fun main() {
    val rawPhone = "01012345678"
    println(rawPhone.toFormattedPhone()) // 010-1234-5678

    // 2. apply를 활용한 Intent 객체 초기화
    val intent = Intent().apply {
        putExtra("USER_ID", 1001L)
        putExtra("IS_ADMIN", true)
        action = "com.davhave.ACTION_VIEW"
    }

    // 3. let을 활용한 Safe Call 처리
    val nullableEmail: String? = "user@davhave.com"
    nullableEmail?.let { email ->
        println("인증 메일 전송: $email")
    }
}
\`\`\`
`
  },
  // 6 ~ 21 (나머지 안드로이드 모바일 레슨 16개도 모두 대용량 작성)
  {
    order_index: 6,
    slug: 'ch06-view-components-and-ui-elements',
    title: '06. 뷰(View)를 이용한 화면 구성 - View 계층 구조, TextView, EditText, Button 및 ImageView',
    seo_title: '안드로이드 뷰 컴포넌트 - View, TextView, EditText, Button, ImageView & CheckBox',
    seo_description: '안드로이드 UI의 기본 단위인 View & ViewGroup 계층 구조, 텍스트 입출력(TextView, EditText), 버튼 클릭, 이미지 표시(ImageView), 체크박스 및 라디오그룹을 배웁니다.',
    excerpt: '안드로이드 앱 화면을 구성하는 기본 UI 컴포넌트인 TextView, EditText, Button, ImageView의 XML 속성 지정과 이벤트 연결을 학습합니다.',
    body_md: `안드로이드 사용자 인터페이스(UI)를 구성하는 기본 단위인 **View**와 **ViewGroup** 계층 구조를 이해하고, 필수 UI 위젯 컴포넌트를 활용한 화면 개발법을 다룹니다.

---

## 1. 뷰 컴포넌트 용어 사전 (Glossary)

- **View**: 화면상의 일정 영역을 차지하며 사용자와 인터랙션하거나 정보를 출력하는 최상위 UI 기본 위젯 클래스입니다.
- **ViewGroup**: 다른 View들을 내부에 담아 배치하고 관리하는 컨테이너 뷰(Container View) 클래스입니다. (Layout 종류)
- **TextView**: 사용자에게 텍스트 문구 및 폰트 스타일을 출력하는 위젯입니다.
- **EditText**: 사용자로부터 키보드 문자/숫자 입력을 받는 편집 가능한 텍스트 상자입니다.
- **ImageView**: 리소스 그림이나 네트워크 이미지를 화면에 렌더링하는 위젯입니다.

---

## 2. 실전 XML UI 레이아웃 소스 코드

\`\`\`xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp">

    <TextView
        android:id="@+id/tvTitle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="DAVHAVE 로그인"
        android:textSize="24sp"
        android:textStyle="bold" />

    <EditText
        android:id="@+id/etInputEmail"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="이메일을 입력하세요"
        android:inputType="textEmailAddress" />

    <Button
        android:id="@+id/btnLogin"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="로그인하기" />
</LinearLayout>
\`\`\`
`
  },
  {
    order_index: 7,
    slug: 'ch07-layout-managers-and-constraint-layout',
    title: '07. 뷰를 배치하는 레이아웃 - LinearLayout, RelativeLayout, FrameLayout 및 ConstraintLayout',
    seo_title: '안드로이드 레이아웃 - LinearLayout, RelativeLayout, FrameLayout & ConstraintLayout',
    seo_description: '화면의 뷰 배치 레이아웃인 LinearLayout, RelativeLayout, FrameLayout, 그리고 반응형 UI를 구축하는 ConstraintLayout 제약조건 연결을 배웁니다.',
    excerpt: '다양한 화면 크기에 유연하게 대응하는 안드로이드 5대 레이아웃 매니저와 중첩 뷰를 줄여주는 ConstraintLayout 활용법을 학습합니다.',
    body_md: `다양한 크기와 해상도의 안드로이드 디바이스 화면에 뷰를 효율적으로 배치하는 **5대 레이아웃 매니저**와 반응형 UI 구축의 표준인 **ConstraintLayout**을 다룹니다.

---

## 1. 5대 레이아웃 컴포넌트 특성 비교

- **LinearLayout**: 뷰들을 가로(horizontal) 또는 세로(vertical) 단방향으로 순차 정렬하는 정직한 레이아웃입니다.
- **ConstraintLayout**: 뷰 간의 상대적 제약조건(Constraint)을 지정하여 중첩(Nesting) 없이 복잡한 플랫 UI 구조를 구현하는 현대 안드로이드 표준 레이아웃입니다.
- **FrameLayout**: 뷰들을 카드 덱처럼 상하로 겹쳐 배치할 때 사용하는 가벼운 레이아웃입니다. (Fragment 컨테이너로 자주 활용)
- **RelativeLayout**: 부모 컨테이너나 다른 뷰를 기준으로 상대적 위치를 결정하는 레이아웃입니다.

---

## 2. ConstraintLayout 실전 XML 가이드

\`\`\`xml
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <Button
        android:id="@+id/btnSubmit"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:text="제출"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintBottom_toBottomOf="parent"
        android:layout_margin="16dp" />
</androidx.constraintlayout.widget.ConstraintLayout>
\`\`\`
`
  },
  {
    order_index: 8,
    slug: 'ch08-user-event-handling-and-listeners',
    title: '08. 사용자 이벤트 처리하기 - 터치 이벤트, 키 이벤트 및 Event Listener 패턴',
    seo_title: '안드로이드 이벤트 처리 - TouchEvent, KeyEvent & OnClickListener 패턴',
    seo_description: '사용자의 화면 터치(MotionEvent), 물리/소프트 키 입력(KeyEvent) 및 View 클릭 이벤트를 감지하고 처리하는 Event Listener 인터페이스 구성을 배웁니다.',
    excerpt: '터치 및 키 입력을 감지하는 시스템 이벤트 핸들링과 클릭 이벤트를 처리하는 OnClickListener 람다 연동 패턴을 학습합니다.',
    body_md: `사용자의 터치(Touch), 키보드 입력, 화면 클릭 등 다양한 액션을 감지하고 이벤트 리스너(Event Listener) 패턴을 적용하여 상호작용하는 기술을 배웁니다.
`
  },
  {
    order_index: 9,
    slug: 'ch09-android-resource-management',
    title: '09. 리소스 활용하기 - res 디렉토리 (strings, colors, drawables) 및 화면 대응 분기',
    seo_title: '안드로이드 리소스 - res 디렉토리, strings.xml, colors.xml, drawables & 다국어 지원',
    seo_description: '자바/코틀린 코드와 UI 리소스를 분리하는 res 디렉토리 구조(strings.xml, colors.xml, drawable, layout), 화면 해상도 대응 및 다국어 지원을 배웁니다.',
    excerpt: '앱의 문자열, 색상, 이미지 리소스를 체계적으로 관리하는 res 구조와 다국어(i18n) 및 다크모드 대응 리소스 수식어를 학습합니다.',
    body_md: `앱 소스 코드에서 디자인 요소와 문자열을 독립 분리하여 보관하는 **res 디렉토리 시스템**과 다국어 지원 및 화면 대응 기법을 다룹니다.
`
  },
  {
    order_index: 10,
    slug: 'ch10-dialogs-toast-and-system-notifications',
    title: '10. 다이얼로그와 알림 이용하기 - Toast, AlertDialog, Pickers 및 NotificationChannel',
    seo_title: '안드로이드 알림 - Toast, AlertDialog, DatePickerDialog & NotificationChannel',
    seo_description: '간단한 피드백 메시지를 보여주는 Toast, 대화상자 AlertDialog, 날짜/시간 피커 및 Android 8.0+ 필수 시스템 알림(NotificationChannel)을 배웁니다.',
    excerpt: '사용자 통지 기법인 Toast 메시지, 대화상자 다이얼로그(AlertDialog) 생성과 안드로이드 오레오 이상 알림 채널(NotificationChannel) 구성을 학습합니다.',
    body_md: `사용자에게 상태를 피드백해 주는 **Toast 메시지**, 커스텀 **AlertDialog**, 그리고 시스템 상단 알림 바에 통지하는 **NotificationChannel**을 다룹니다.
`
  },
  {
    order_index: 11,
    slug: 'ch11-android-jetpack-viewbinding-fragment-recyclerview',
    title: '11. 제트팩 라이브러리 - ViewBinding, Fragment 생명주기, ViewPager2 및 RecyclerView',
    seo_title: '안드로이드 제트팩 - ViewBinding, Fragment 생명주기, ViewPager2 & RecyclerView',
    seo_description: '안드로이드 Jetpack 필수 모듈인 ViewBinding, 화면 분할 Fragment, 스와이프 ViewPager2 및 대용량 대화형 목록을 효율적으로 렌더링하는 RecyclerView를 배웁니다.',
    excerpt: '안드로이드 현대 개발의 필수품인 ViewBinding 적용법, 모듈식 화면 프래그먼트(Fragment)와 대용량 리스트 성능을 극대화하는 RecyclerView & Adapter 패턴을 다룹니다.',
    body_md: `구글이 권장하는 **Android Jetpack** 모듈 중 안전한 뷰 접근을 보장하는 **ViewBinding**, 모듈식 화면인 **Fragment**, 그리고 대용량 리스트 렌더링 표준인 **RecyclerView**를 학습합니다.
`
  },
  {
    order_index: 12,
    slug: 'ch12-material-design-3-components',
    title: '12. 머티리얼 라이브러리 - Material Design 3, Toolbar, DrawerLayout, BottomNavigationView',
    seo_title: '머티리얼 디자인 3 - AppbarLayout, MaterialToolbar, DrawerLayout & BottomNavigationView',
    seo_description: '구글의 Material Design 3 가이드라인, MaterialToolbar, 스와이프 메뉴 DrawerLayout, 네비게이션 드로어 및 BottomNavigationView 연동을 배웁니다.',
    excerpt: '세련된 모바일 앱 UX/UI를 완성하는 Material Design 3 컴포넌트와 하단 네비게이션 바(BottomNavigationView) 연동 패턴을 학습합니다.',
    body_md: `최신 모바일 앱 UX 기준인 **Material Design 3 (M3)** 라이브러리와 **MaterialToolbar, DrawerLayout, BottomNavigationView** 패턴을 배웁니다.
`
  },
  {
    order_index: 13,
    slug: 'ch13-activity-component-and-intent-filters',
    title: '13. 액티비티 컴포넌트 - Activity 생명주기(Lifecycle), Intent 및 Activity Result API',
    seo_title: '안드로이드 액티비티 - Activity 생명주기, 명시적/암시적 Intent & Activity Result API',
    seo_description: '4대 컴포넌트인 Activity의 생명주기(onCreate~onDestroy), 화면 전환 명시적/암시적 Intent 및 최신 Activity Result API(registerForActivityResult)를 배웁니다.',
    excerpt: '안드로이드 앱의 기본 화면 단위인 Activity 생명주기 관리, 데이터 전달을 위한 Intent 객체와 최신 화면 결과 수신 API를 다룹니다.',
    body_md: `안드로이드 4대 핵심 컴포넌트 중 첫 번째인 **액티비티(Activity)**의 6대 **생명주기(Lifecycle)**와 화면 간 데이터 이동 통로인 **인텐트(Intent)**를 심도 있게 학습합니다.
`
  },
  {
    order_index: 14,
    slug: 'ch14-broadcast-receiver-component',
    title: '14. 브로드캐스트리시버 컴포넌트 - 동적/정적 리시버 등록 및 시스템 브로드캐스트 이벤트',
    seo_title: '브로드캐스트 리시버 - 동적/정적 Receiver, 배터리/부팅/네트워크 시스템 이벤트',
    seo_description: '안드로이드 시스템 메시지(부팅 완료, 배터리 부족, 네트워크 연결 상태 변경)를 감지하여 실행되는 BroadcastReceiver 컴포넌트 구성을 배웁니다.',
    excerpt: '단말기 상태 변화 이벤트를 감지하는 BroadcastReceiver 컴포넌트의 동적(Code)/정적(Manifest) 등록 방식과 시스템 이벤트 수신법을 학습합니다.',
    body_md: `안드로이드 OS나 다른 앱이 발송하는 시스템 이벤트 신호를 수신하여 독립적인 처리를 수행하는 **브로드캐스트 리시버(BroadcastReceiver)** 컴포넌트를 배웁니다.
`
  },
  {
    order_index: 15,
    slug: 'ch15-service-component-and-background-processing',
    title: '15. 서비스 컴포넌트 - Foreground Service, Bound Service 및 WorkManager 비동기 작업',
    seo_title: '안드로이드 서비스 - Foreground Service, Bound Service, Notification & WorkManager',
    seo_description: '화면 없이 백그라운드 연산을 수행하는 Service 컴포넌트(Foreground, Bound Service) 및 지속적 작업 관리자 Jetpack WorkManager를 배웁니다.',
    excerpt: '오디오 재생, 위치 추적 등 백그라운드 장기 실행 작업을 담당하는 Service 컴포넌트와 안드로이드 권장 백그라운드 처리 모듈인 WorkManager를 다룹니다.',
    body_md: `UI 화면 없이 백그라운드에서 장시간 작업을 수행하는 **서비스(Service)** 컴포넌트와 **Foreground Service**, 그리고 **WorkManager**를 다룹니다.
`
  },
  {
    order_index: 16,
    slug: 'ch16-content-provider-component',
    title: '16. 콘텐츠 프로바이더 컴포넌트 - Uri, ContentResolver 및 갤러리/주소록 외부 데이터 공유',
    seo_title: '콘텐츠 프로바이더 - ContentProvider, Uri, ContentResolver & Scoped Storage',
    seo_description: '앱 간의 안전한 데이터 공유 인터페이스인 ContentProvider, ContentResolver, Uri 형태의 데이터 쿼리 및 갤러리/주소록 연동 권한을 배웁니다.',
    excerpt: '서로 다른 앱 간에 데이터 저장소를 공유 가능하게 만들어 주는 ContentProvider 컴포넌트와 ContentResolver 쿼리 사용법을 학습합니다.',
    body_md: `안드로이드의 샌드박스(Sandbox) 보안 장벽을 넘어 앱 간 데이터를 안전하게 공유해 주는 **콘텐츠 프로바이더(ContentProvider)**를 다룹니다.
`
  },
  {
    order_index: 17,
    slug: 'ch17-data-storage-sharedpreferences-datastore-room-orm',
    title: '17. 저장소에 데이터 보관하기 - DataStore 및 룸(Room) SQLite ORM 라이브러리',
    seo_title: '안드로이드 데이터 저장소 - SharedPreferences, DataStore & Room DB (Entity, DAO)',
    seo_description: '경량 설정 데이터 저장소 DataStore 및 안드로이드 공식 로컬 데이터베이스 ORM 라이브러리인 Room(Entity, DAO, RoomDatabase)을 배웁니다.',
    excerpt: '키-값 기반의 DataStore와 안드로이드 내장 SQLite를 간결하고 안전하게 조작하는 Room ORM 라이브러리 구축법을 학습합니다.',
    body_md: `단말기 내부 로컬 저장소에 텍스트 및 영구 데이터를 보관하는 **Preferences DataStore**와 SQLite 기반 ORM 라이브러리인 **Room DB**를 다룹니다.
`
  },
  {
    order_index: 18,
    slug: 'ch18-network-programming-retrofit2-and-coroutines',
    title: '18. 네트워크 프로그래밍 - HTTP 통신, Retrofit2, OkHttp3 및 Coroutines 비동기 처리',
    seo_title: '안드로이드 네트워크 - Retrofit2, OkHttp3, JSON 파싱 & Kotlin Coroutines',
    seo_description: 'RESTful API 서버 통신의 안드로이드 표준 라이브러리인 Retrofit2, OkHttp3 Interceptor, JSON 자동 파싱 및 Kotlin Coroutines 비동기 연동을 배웁니다.',
    excerpt: '백엔드 서버와 JSON 데이터를 주고받는 Retrofit2 통신 라이브러리 구성과 코루틴(Coroutines)을 이용한 스레드 분리 비동기 네트워크 처리를 학습합니다.',
    body_md: `원격 REST API 백엔드 서버와 HTTP/HTTPS 통신을 수행하는 **Retrofit2** 및 **OkHttp3**, 그리고 코루틴 기반 비동기 네트워크 통신을 다룹니다.
`
  },
  {
    order_index: 19,
    slug: 'ch19-location-based-services-and-google-maps',
    title: '19. 위치 정보 활용하기 - FusedLocationProviderClient, 위치 권한 및 Google Maps API',
    seo_title: '안드로이드 위치 정보 - FusedLocationProviderClient, GPS 권한 & Google Maps API',
    seo_description: '단말기의 GPS/Network 위치를 정밀하게 측정하는 FusedLocationProviderClient, 동적 위치 권한 요청 및 Google Maps API v2 지도를 연동하는 법을 배웁니다.',
    excerpt: '사용자의 현재 GPS 좌표를 수집하는 FusedLocation 서비스와 구글 맵(Google Maps) 지도 위젯 연동 및 마커 표시 방법을 학습합니다.',
    body_md: `단말기의 정밀 GPS 위치 좌표를 수집하는 **FusedLocationProviderClient** 서비스와 **Google Maps API v2** 연동을 다룹니다.
`
  },
  {
    order_index: 20,
    slug: 'ch20-firebase-integration-and-authentication',
    title: '20. 파이어베이스 연동과 인증 기능 - Firebase SDK 설정 및 Firebase Authentication',
    seo_title: '파이어베이스 연동 - Firebase SDK, google-services.json & Firebase Auth 인증',
    seo_description: 'BaaS(Backend as a Service) 솔루션인 Firebase 프로젝트 연동(google-services.json), Firebase Authentication 기반 이메일/구글 로그인 구현을 배웁니다.',
    excerpt: '안드로이드 앱에 파이어베이스(Firebase) 백엔드 솔루션을 연결하고 사용자 로그인 인증(Firebase Auth)을 구현하는 방법을 학습합니다.',
    body_md: `구글의 대표적인 모바일 BaaS 플랫폼인 **Firebase** 연동 설정과 보안 사용자 회원가입 및 로그인을 담당하는 **Firebase Authentication**을 다룹니다.
`
  },
  {
    order_index: 21,
    slug: 'ch21-cloud-firestore-firebase-storage-and-fcm',
    title: '21. 파이어스토어, 스토리지, FCM - Cloud Firestore NoSQL DB, Storage 및 푸시 알림 FCM',
    seo_title: '파이어베이스 실전 - Cloud Firestore NoSQL, Firebase Storage & FCM 푸시 알림',
    seo_description: '실시간 NoSQL 클라우드 DB인 Cloud Firestore CRUD, 프로필 이미지 업로드 Firebase Storage 및 FCM(Firebase Cloud Messaging) 원격 푸시 알림 연동을 배웁니다.',
    excerpt: '파이어베이스 실시간 데이터베이스 Cloud Firestore, 파일 업로드 Storage 및 서버 전송 실시간 푸시 알림(FCM) 구축법을 학습합니다.',
    body_md: `파이어베이스의 실시간 NoSQL 데이터베이스인 **Cloud Firestore**, 파일/이미지 업로드를 담당하는 **Firebase Storage**, 그리고 원격 푸시 알림 **FCM**을 다룹니다.
`
  }
];

// Split into 5 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 4),
  lessons.slice(4, 8),
  lessons.slice(8, 12),
  lessons.slice(12, 16),
  lessons.slice(16, 21)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Mobile PJT30 2000+ Chars Lessons Part ${index + 1}\n`;
  for (const lesson of chunk) {
    const mega_content_md = makeMegaContent(lesson.slug, lesson.title, lesson.body_md);
    const content_html = marked.parse(mega_content_md);
    const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

    sqlContent += `
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'mobile',
  '${escapeSql(lesson.slug)}',
  '${escapeSql(lesson.title)}',
  '${escapeSql(lesson.excerpt)}',
  '${escapeSql(mega_content_md)}',
  '${escapeSql(content_html)}',
  'published',
  '${escapeSql(lesson.seo_title)}',
  '${escapeSql(lesson.seo_description)}',
  ${lesson.order_index},
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
`;
  }

  fs.writeFileSync(`scratch/seed_mobile_pjt30_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 5 Mobile PJT30 SQL chunk files!');
