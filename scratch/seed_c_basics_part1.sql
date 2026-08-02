-- Seed C-Basics Lessons Part 1

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'c-basics',
  'ch01-c-intro',
  'C 언어 개요와 컴퓨팅 사고의 시작',
  '컴퓨터 프로그래밍의 대명사이자 현대 프로그래밍 언어의 뿌리가 된 C 언어의 탄생 배경, 주요 특징 및 컴퓨팅 사고의 기초를 학습합니다.',
  '**C 언어**는 1972년 벨 연구소의 데니스 리치(Dennis Ritchie)가 유닉스(UNIX) 운영체제를 작성하기 위해 개발한 프로그래밍 언어입니다. 오늘날 사용되는 C++, Java, Python, C#, JavaScript 등 수많은 현대 언어의 직계 조상이자 뿌리가 됩니다.

---

## 1. C 언어를 배워야 하는 3가지 이유

1. **하드웨어와 메모리의 직관적 이해**: C 언어는 컴퓨터의 CPU, RAM 메모리 공간을 직접 제어할 수 있는 기능을 제공하여 컴퓨터가 작동하는 근본 원리를 깨닫게 해줍니다.
2. **높은 실행 속도와 효율성**: 컴파일러를 통해 기계어로 직접 변환되므로, 가상 머신이나 인터프리터를 거치는 다른 언어에 비해 훨씬 빠릅니다.
3. **탄탄한 기본기 구축**: C 언어의 기본 문법(변수, 제어문, 함수 등)을 익혀두면 파이썬이나 자바 등 다른 어떤 언어도 빠르게 배울 수 있습니다.

---

## 2. 하드웨어와 C 프로그래밍의 관계

컴퓨터는 크게 **CPU(중앙처리장치)**, **RAM(주기억장치)**, **보조기억장치(SSD/HDD)**로 구성됩니다.

- **프로그램**: 보조기억장치에 저장된 실행 파일.
- **프로세스**: 프로그램을 실행하면 메모리(RAM)로 로드되어 CPU가 명령을 처리하는 상태.
- C 언어는 RAM 메모리의 번지(주소)를 다루는 포인터(Pointer) 기능을 지원하여 최고 수준의 메모리 제어력을 제공합니다.

---

## 3. 대표적인 C 언어 활용 분야

- **운영체제 (OS)**: Windows, Linux, macOS, Android 커널 개발.
- **임베디드 시스템**: 가전제품, 자동차 ECU, IoT 기기의 펌웨어 제어.
- **게임 엔진 & 3D 그래픽스**: 초고속 데이터 처리가 필요한 게임 엔진 코어.
- **데이터베이스 엔진**: MySQL, SQLite 등 대용량 데이터베이스 엔진.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 요새 파이썬(Python)이 인기인데 왜 초보자가 C 언어를 배워야 하나요?**
A. 파이썬은 내부 메커니즘을 숨겨두어 쉽지만, 컴퓨터의 실제 동작 원리를 이해하긴 어렵습니다. C 언어를 먼저 경험하면 메모리 구조와 실행 과정을 명확히 알 수 있어 훨씬 유능한 개발자로 성장할 수 있습니다.
',
  '<p><strong>C 언어</strong>는 1972년 벨 연구소의 데니스 리치(Dennis Ritchie)가 유닉스(UNIX) 운영체제를 작성하기 위해 개발한 프로그래밍 언어입니다. 오늘날 사용되는 C++, Java, Python, C#, JavaScript 등 수많은 현대 언어의 직계 조상이자 뿌리가 됩니다.</p>
<hr>
<h2>1. C 언어를 배워야 하는 3가지 이유</h2>
<ol>
<li><strong>하드웨어와 메모리의 직관적 이해</strong>: C 언어는 컴퓨터의 CPU, RAM 메모리 공간을 직접 제어할 수 있는 기능을 제공하여 컴퓨터가 작동하는 근본 원리를 깨닫게 해줍니다.</li>
<li><strong>높은 실행 속도와 효율성</strong>: 컴파일러를 통해 기계어로 직접 변환되므로, 가상 머신이나 인터프리터를 거치는 다른 언어에 비해 훨씬 빠릅니다.</li>
<li><strong>탄탄한 기본기 구축</strong>: C 언어의 기본 문법(변수, 제어문, 함수 등)을 익혀두면 파이썬이나 자바 등 다른 어떤 언어도 빠르게 배울 수 있습니다.</li>
</ol>
<hr>
<h2>2. 하드웨어와 C 프로그래밍의 관계</h2>
<p>컴퓨터는 크게 <strong>CPU(중앙처리장치)</strong>, <strong>RAM(주기억장치)</strong>, **보조기억장치(SSD/HDD)**로 구성됩니다.</p>
<ul>
<li><strong>프로그램</strong>: 보조기억장치에 저장된 실행 파일.</li>
<li><strong>프로세스</strong>: 프로그램을 실행하면 메모리(RAM)로 로드되어 CPU가 명령을 처리하는 상태.</li>
<li>C 언어는 RAM 메모리의 번지(주소)를 다루는 포인터(Pointer) 기능을 지원하여 최고 수준의 메모리 제어력을 제공합니다.</li>
</ul>
<hr>
<h2>3. 대표적인 C 언어 활용 분야</h2>
<ul>
<li><strong>운영체제 (OS)</strong>: Windows, Linux, macOS, Android 커널 개발.</li>
<li><strong>임베디드 시스템</strong>: 가전제품, 자동차 ECU, IoT 기기의 펌웨어 제어.</li>
<li><strong>게임 엔진 &amp; 3D 그래픽스</strong>: 초고속 데이터 처리가 필요한 게임 엔진 코어.</li>
<li><strong>데이터베이스 엔진</strong>: MySQL, SQLite 등 대용량 데이터베이스 엔진.</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 요새 파이썬(Python)이 인기인데 왜 초보자가 C 언어를 배워야 하나요?</strong>
A. 파이썬은 내부 메커니즘을 숨겨두어 쉽지만, 컴퓨터의 실제 동작 원리를 이해하긴 어렵습니다. C 언어를 먼저 경험하면 메모리 구조와 실행 과정을 명확히 알 수 있어 훨씬 유능한 개발자로 성장할 수 있습니다.</p>
',
  'published',
  'C 언어 입문 가이드 - C 언어의 역사, 특징 및 하드웨어와의 관계',
  '프로그래밍의 시작인 C 언어의 개발 배경, 왜 50년 넘게 사용되는지, 시스템 하드웨어와 프로그래밍의 연관성을 초보자 눈높이에서 설명합니다.',
  1,
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
  'c-basics',
  'ch02-program-development',
  'C 프로그램 개발 과정과 빌드 메커니즘',
  '소스 코드 작성부터 컴파일, 링크, 실행 파일(.exe) 생성까지 프로그래밍의 전 과정을 초보자도 이해하기 쉽게 단계별로 살펴봅니다.',
  '우리가 인간의 언어로 작성한 **소스 코드(`.c`)**가 컴퓨터(CPU)가 실행할 수 있는 **실행 파일(`.exe`)**로 변환되기까지는 여러 단계의 변환 과정을 거칩니다.

---

## 1. 프로그램 개발 4단계 과정

1. **소스 코드 작성 (Source Code)**: 에디터에서 C 언어 문법에 맞춰 코드 작성 (`main.c`).
2. **컴파일 (Compilation)**: C 소스 코드를 기계어로 번역하여 **목적 파일(`.obj` / `.o`)** 생성.
3. **링크 (Linking)**: 여러 목적 파일과 C 표준 라이브러리를 하나로 연결하여 **실행 파일(`.exe`)** 생성.
4. **디버깅 및 실행 (Execution & Debugging)**: 빌드된 프로그램을 실행하고 오류(Bug)를 수정.

---

## 2. 빌드(Build) 메커니즘 상세 보기

| 단계 (Phase) | 역할 및 결과물 | 관련 도구 |
| :--- | :--- | :--- |
| **전처리기 (Preprocessor)** | `#include`, `#define` 등 주석 제거 및 헤더 삽입 | 전처리기 |
| **컴파일러 (Compiler)** | C 코드를 어셈블리 및 기계어 코드 변환 | GCC, MSVC, Clang |
| **링커 (Linker)** | 목적 파일들과 라이브러리를 묶어 하나로 결합 | 링커 |
| **로더 (Loader)** | 실행 파일을 메모리(RAM)에 로드하여 실행 | 운영체제 (OS) |

---

## 3. 초보자를 위한 통합 개발 환경 (IDE)

프로그래밍을 시작할 때는 코드 작성, 컴파일, 디버깅을 한 번에 해주는 **IDE(Integrated Development Environment)**를 사용하는 것이 편리합니다.

- **Visual Studio 2022**: Windows 환경에서 가장 강력한 표준 C/C++ 개발 환경.
- **VS Code (Visual Studio Code)**: 가볍고 인기 많은 코드 에디터 (C/C++ 확장팩 설치 필요).
- **GCC / Clang**: Linux / macOS 터미널에서 직접 컴파일할 수 있는 기본 도구.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 컴파일 오류(Compile Error)와 런타임 오류(Runtime Error)의 차이는 무엇인가요?**
A. 컴파일 오류는 문법이 틀려 번역 자체가 실패한 것이며, 런타임 오류는 번역은 성공했으나 실행 도중 0으로 나누기, 잘못된 메모리 접근 등으로 프로그램이 튕기는 오류입니다.
',
  '<p>우리가 인간의 언어로 작성한 **소스 코드(<code>.c</code>)**가 컴퓨터(CPU)가 실행할 수 있는 **실행 파일(<code>.exe</code>)**로 변환되기까지는 여러 단계의 변환 과정을 거칩니다.</p>
<hr>
<h2>1. 프로그램 개발 4단계 과정</h2>
<ol>
<li><strong>소스 코드 작성 (Source Code)</strong>: 에디터에서 C 언어 문법에 맞춰 코드 작성 (<code>main.c</code>).</li>
<li><strong>컴파일 (Compilation)</strong>: C 소스 코드를 기계어로 번역하여 <strong>목적 파일(<code>.obj</code> / <code>.o</code>)</strong> 생성.</li>
<li><strong>링크 (Linking)</strong>: 여러 목적 파일과 C 표준 라이브러리를 하나로 연결하여 <strong>실행 파일(<code>.exe</code>)</strong> 생성.</li>
<li><strong>디버깅 및 실행 (Execution &amp; Debugging)</strong>: 빌드된 프로그램을 실행하고 오류(Bug)를 수정.</li>
</ol>
<hr>
<h2>2. 빌드(Build) 메커니즘 상세 보기</h2>
<table>
<thead>
<tr>
<th align="left">단계 (Phase)</th>
<th align="left">역할 및 결과물</th>
<th align="left">관련 도구</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>전처리기 (Preprocessor)</strong></td>
<td align="left"><code>#include</code>, <code>#define</code> 등 주석 제거 및 헤더 삽입</td>
<td align="left">전처리기</td>
</tr>
<tr>
<td align="left"><strong>컴파일러 (Compiler)</strong></td>
<td align="left">C 코드를 어셈블리 및 기계어 코드 변환</td>
<td align="left">GCC, MSVC, Clang</td>
</tr>
<tr>
<td align="left"><strong>링커 (Linker)</strong></td>
<td align="left">목적 파일들과 라이브러리를 묶어 하나로 결합</td>
<td align="left">링커</td>
</tr>
<tr>
<td align="left"><strong>로더 (Loader)</strong></td>
<td align="left">실행 파일을 메모리(RAM)에 로드하여 실행</td>
<td align="left">운영체제 (OS)</td>
</tr>
</tbody></table>
<hr>
<h2>3. 초보자를 위한 통합 개발 환경 (IDE)</h2>
<p>프로그래밍을 시작할 때는 코드 작성, 컴파일, 디버깅을 한 번에 해주는 **IDE(Integrated Development Environment)**를 사용하는 것이 편리합니다.</p>
<ul>
<li><strong>Visual Studio 2022</strong>: Windows 환경에서 가장 강력한 표준 C/C++ 개발 환경.</li>
<li><strong>VS Code (Visual Studio Code)</strong>: 가볍고 인기 많은 코드 에디터 (C/C++ 확장팩 설치 필요).</li>
<li><strong>GCC / Clang</strong>: Linux / macOS 터미널에서 직접 컴파일할 수 있는 기본 도구.</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 컴파일 오류(Compile Error)와 런타임 오류(Runtime Error)의 차이는 무엇인가요?</strong>
A. 컴파일 오류는 문법이 틀려 번역 자체가 실패한 것이며, 런타임 오류는 번역은 성공했으나 실행 도중 0으로 나누기, 잘못된 메모리 접근 등으로 프로그램이 튕기는 오류입니다.</p>
',
  'published',
  'C 프로그램 작성부터 실행까지 - 소스 코드, 컴파일러, 링커의 이해',
  '내가 작성한 텍스트 코드가 컴퓨터가 이해하는 기계어로 변환되는 4단계 빌드 과정(전처리, 컴파일, 어셈블, 링크)과 통합 개발 환경(IDE) 설정을 설명합니다.',
  2,
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
  'c-basics',
  'ch03-c-elements',
  'C 프로그램의 기본 구성 요소와 main() 함수',
  'C 언어 프로그램의 가장 표준적인 뼈대 구조를 분석하고, 화면에 글자를 출력하는 printf() 함수와 줄바꿈 이스케이프 문자의 활용을 다룹니다.',
  '모든 C 프로그램은 일정한 기본 뼈대 구격을 갖추고 있습니다. C 언어 프로그램의 시작점은 **`main()` 함수**입니다.

---

## 1. C 프로그램의 표준 뼈대 코드

```c
#include <stdio.h>  // 표준 입출력 라이브러리 헤더 파일 포함

int main(void) {
    printf("Hello, World!\n");  // 화면에 문자열 출력
    return 0;  // 프로그램이 정상 종료되었음을 운영체제에 알림
}
```

- **`#include <stdio.h>`**: Standard Input/Output(표준 입출력)을 다루는 함수들의 정보가 적힌 헤더 파일을 불러옵니다.
- **`int main(void)`**: 프로그램이 시작될 때 가장 먼저 실행되는 메인 함수입니다.
- **`return 0;`**: 0을 반환하며 프로그램이 에러 없이 무사히 끝났음을 알립니다.

---

## 2. 화면 출력을 담당하는 printf() 함수

`printf`는 **Print Formatted(서식화된 출력)**의 약자로, 화면에 글자나 변수의 값을 출력할 때 사용합니다.

### 자주 사용하는 이스케이프 시퀀스 (Escape Sequence)

| 이스케이프 문자 | 역할 (설명) |
| :--- | :--- |
| **`\n`** | 줄 바꿈 (New Line) |
| **`\t`** | 탭(Tab) 간격 만큼 띄우기 |
| **`\\ `** | 백슬래시(\) 문자를 직접 출력 |
| **`\"`** | 큰따옴표(") 문자를 직접 출력 |

---

## 3. 주석 (Comment) 작성법

주석은 컴퓨터가 해석하지 않고 건너뛰는 설명글로, 코드의 이해를 돕기 위해 작성합니다.

```c
// 한 줄 주석: 이 줄 전체가 설명입니다.

/* 
   여러 줄 주석:
   줄바꿈을 하여 긴 설명글을
   작성할 때 사용합니다.
*/
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 문장 끝에 붙는 세미콜론(`;`)은 왜 써야 하나요?**
A. C 언어에서 세미콜론(`;`)은 하나의 명령(문장, Statement)이 끝났음을 나타내는 구분 기호입니다. 세미콜론을 빠뜨리면 컴파일러가 문장의 끝을 알 수 없어 컴파일 오류가 생깁니다.
',
  '<p>모든 C 프로그램은 일정한 기본 뼈대 구격을 갖추고 있습니다. C 언어 프로그램의 시작점은 <strong><code>main()</code> 함수</strong>입니다.</p>
<hr>
<h2>1. C 프로그램의 표준 뼈대 코드</h2>
<pre><code class="language-c">#include &lt;stdio.h&gt;  // 표준 입출력 라이브러리 헤더 파일 포함

int main(void) {
    printf(&quot;Hello, World!\n&quot;);  // 화면에 문자열 출력
    return 0;  // 프로그램이 정상 종료되었음을 운영체제에 알림
}
</code></pre>
<ul>
<li><strong><code>#include &lt;stdio.h&gt;</code></strong>: Standard Input/Output(표준 입출력)을 다루는 함수들의 정보가 적힌 헤더 파일을 불러옵니다.</li>
<li><strong><code>int main(void)</code></strong>: 프로그램이 시작될 때 가장 먼저 실행되는 메인 함수입니다.</li>
<li><strong><code>return 0;</code></strong>: 0을 반환하며 프로그램이 에러 없이 무사히 끝났음을 알립니다.</li>
</ul>
<hr>
<h2>2. 화면 출력을 담당하는 printf() 함수</h2>
<p><code>printf</code>는 **Print Formatted(서식화된 출력)**의 약자로, 화면에 글자나 변수의 값을 출력할 때 사용합니다.</p>
<h3>자주 사용하는 이스케이프 시퀀스 (Escape Sequence)</h3>
<table>
<thead>
<tr>
<th align="left">이스케이프 문자</th>
<th align="left">역할 (설명)</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong><code>\n</code></strong></td>
<td align="left">줄 바꿈 (New Line)</td>
</tr>
<tr>
<td align="left"><strong><code>\t</code></strong></td>
<td align="left">탭(Tab) 간격 만큼 띄우기</td>
</tr>
<tr>
<td align="left"><strong><code>\\ </code></strong></td>
<td align="left">백슬래시() 문자를 직접 출력</td>
</tr>
<tr>
<td align="left"><strong><code>\&quot;</code></strong></td>
<td align="left">큰따옴표(&quot;) 문자를 직접 출력</td>
</tr>
</tbody></table>
<hr>
<h2>3. 주석 (Comment) 작성법</h2>
<p>주석은 컴퓨터가 해석하지 않고 건너뛰는 설명글로, 코드의 이해를 돕기 위해 작성합니다.</p>
<pre><code class="language-c">// 한 줄 주석: 이 줄 전체가 설명입니다.

/* 
   여러 줄 주석:
   줄바꿈을 하여 긴 설명글을
   작성할 때 사용합니다.
*/
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 문장 끝에 붙는 세미콜론(<code>;</code>)은 왜 써야 하나요?</strong>
A. C 언어에서 세미콜론(<code>;</code>)은 하나의 명령(문장, Statement)이 끝났음을 나타내는 구분 기호입니다. 세미콜론을 빠뜨리면 컴파일러가 문장의 끝을 알 수 없어 컴파일 오류가 생깁니다.</p>
',
  'published',
  'C 프로그램 기본 구조 - main 함수, printf 출력, 이스케이프 문자와 주석',
  'C 프로그램의 시작점인 main() 함수, 헤더 파일 포함(#include), 화면 출력 함수 printf(), 줄바꿈 이스케이프 문자 \n, 코드 주석 작성법을 학습합니다.',
  3,
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
  'c-basics',
  'ch04-variables-and-data-types',
  '변수와 데이터 타입 (정수형, 실수형, 문자형)',
  '값을 저장하기 위해 메모리 공간에 이름을 붙이는 변수(Variable)의 개념과 정수, 실수, 문자를 담는 C 언어의 다양한 자료형(Data Type)을 다룹니다.',
  '**변수(Variable)**는 프로그램이 실행되는 동안 데이터를 보관하기 위해 메모리(RAM)에 이름을 붙여 할당받은 **"데이터 저장 상자"**입니다.

---

## 1. 변수의 선언과 초기화

변수를 사용하려면 먼저 어떤 종류의 데이터를 담을지 **자료형(Data Type)**과 **변수 이름**을 지정해 주어야 합니다.

```c
int age;       // 정수형 변수 age 선언 (상자 만들기)
age = 25;      // 변수 age에 25 대입 (값 넣기)

int score = 100; // 변수의 선언과 동시에 초기화
```

---

## 2. C 언어의 핵심 기본 자료형 (Data Types)

| 자료형 (Type) | 크기 (Bytes) | 서식 지정자 | 값의 범위 / 용도 |
| :--- | :--- | :--- | :--- |
| **`char`** | 1 Byte | `%c` | 단일 문자 (ASCII 코드 정수) |
| **`int`** | 4 Bytes | `%d` | 정수 (약 -21억 ~ +21억) |
| **`float`** | 4 Bytes | `%f` | 소수점 6자리 실수 |
| **`double`** | 8 Bytes | `%lf` | 소수점 15자리 정밀한 실수 |

---

## 3. 출력과 입력을 위한 서식 지정자 및 scanf()

변수의 값을 화면에 출력하거나 키보드로 값을 입력받을 때 **서식 지정자(Format Specifier)**를 사용합니다.

```c
#include <stdio.h>

int main(void) {
    int age = 0;
    printf("나이를 입력하세요: ");
    scanf("%d", &age); // 키보드 입력을 age 변수에 저장 (& 주소 연산자 필수)

    printf("당신의 나이는 %d세 입니다.\n", age);
    return 0;
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 실수형에서 `float`보다 `double`을 주로 쓰는 이유는 무엇인가요?**
A. 컴퓨터는 실수를 이진수로 표현할 때 오차(부동소수점 오차)가 발생합니다. `double`은 8바이트 메모리를 사용해 `float`보다 훨씬 정밀하게 실수를 표현하므로 C 언어 표준 실수형으로 권장됩니다.
',
  '<p>**변수(Variable)**는 프로그램이 실행되는 동안 데이터를 보관하기 위해 메모리(RAM)에 이름을 붙여 할당받은 **&quot;데이터 저장 상자&quot;**입니다.</p>
<hr>
<h2>1. 변수의 선언과 초기화</h2>
<p>변수를 사용하려면 먼저 어떤 종류의 데이터를 담을지 **자료형(Data Type)**과 <strong>변수 이름</strong>을 지정해 주어야 합니다.</p>
<pre><code class="language-c">int age;       // 정수형 변수 age 선언 (상자 만들기)
age = 25;      // 변수 age에 25 대입 (값 넣기)

int score = 100; // 변수의 선언과 동시에 초기화
</code></pre>
<hr>
<h2>2. C 언어의 핵심 기본 자료형 (Data Types)</h2>
<table>
<thead>
<tr>
<th align="left">자료형 (Type)</th>
<th align="left">크기 (Bytes)</th>
<th align="left">서식 지정자</th>
<th align="left">값의 범위 / 용도</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong><code>char</code></strong></td>
<td align="left">1 Byte</td>
<td align="left"><code>%c</code></td>
<td align="left">단일 문자 (ASCII 코드 정수)</td>
</tr>
<tr>
<td align="left"><strong><code>int</code></strong></td>
<td align="left">4 Bytes</td>
<td align="left"><code>%d</code></td>
<td align="left">정수 (약 -21억 ~ +21억)</td>
</tr>
<tr>
<td align="left"><strong><code>float</code></strong></td>
<td align="left">4 Bytes</td>
<td align="left"><code>%f</code></td>
<td align="left">소수점 6자리 실수</td>
</tr>
<tr>
<td align="left"><strong><code>double</code></strong></td>
<td align="left">8 Bytes</td>
<td align="left"><code>%lf</code></td>
<td align="left">소수점 15자리 정밀한 실수</td>
</tr>
</tbody></table>
<hr>
<h2>3. 출력과 입력을 위한 서식 지정자 및 scanf()</h2>
<p>변수의 값을 화면에 출력하거나 키보드로 값을 입력받을 때 **서식 지정자(Format Specifier)**를 사용합니다.</p>
<pre><code class="language-c">#include &lt;stdio.h&gt;

int main(void) {
    int age = 0;
    printf(&quot;나이를 입력하세요: &quot;);
    scanf(&quot;%d&quot;, &amp;age); // 키보드 입력을 age 변수에 저장 (&amp; 주소 연산자 필수)

    printf(&quot;당신의 나이는 %d세 입니다.\n&quot;, age);
    return 0;
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 실수형에서 <code>float</code>보다 <code>double</code>을 주로 쓰는 이유는 무엇인가요?</strong>
A. 컴퓨터는 실수를 이진수로 표현할 때 오차(부동소수점 오차)가 발생합니다. <code>double</code>은 8바이트 메모리를 사용해 <code>float</code>보다 훨씬 정밀하게 실수를 표현하므로 C 언어 표준 실수형으로 권장됩니다.</p>
',
  'published',
  'C 언어 변수와 자료형 총정리 - int, float, double, char 및 sizeof 연산자',
  '데이터를 담는 메모리 상자 변수의 개념, 정수형(int), 실수형(float, double), 문자형(char)의 크기 및 %d, %f, %c 서식 지정자를 초보자용으로 풀어냅니다.',
  4,
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
  'c-basics',
  'ch05-operators-and-expressions',
  '수식과 연산자 (산술, 관계, 논리, 대입, 증감 연산자)',
  '값이나 변수에 대해 연산을 수행하는 산술, 관계, 논리, 증감, 대입 연산자의 종류와 연산자 우선순위의 개념을 쉬운 코드 예제와 함께 배웁니다.',
  '**연산자(Operator)**는 변수나 값에 대해 덧셈, 비교, 논리 판단 등의 계산을 수행하도록 지시하는 기호입니다.

---

## 1. 주요 연산자의 종류

### 1) 산술 연산자
- `+` (덧셈), `-` (뺄셈), `*` (곱셈), `/` (나눗셈 몫), **`%` (나머지 연산자)**

### 2) 증감 연산자 (`++`, `--`)
- **전위 연산 (`++a`)**: 값을 먼저 1 증가시킨 후 문장 실행.
- **후위 연산 (`a++`)**: 문장을 먼저 실행한 후 값을 1 증가.

### 3) 관계(비교) 연산자
- `==` (같다), `!=` (다르다), `>` (크다), `<` (작다), `>=`, `<=`
- 결과값으로 참은 **1**, 거짓은 **0**을 반환합니다.

### 4) 논리 연산자
- **`&&` (AND)**: 두 조건이 모두 참일 때만 참.
- **`||` (OR)**: 두 조건 중 하나라도 참이면 참.
- **`!` (NOT)**: 참을 거짓으로, 거짓을 참으로 뒤집음.

---

## 2. 증감 연산자 전위/후위 차이 예시 코드

```c
#include <stdio.h>

int main(void) {
    int x = 10, y = 10;
    int a = ++x; // x가 11이 된 후 a에 대입 -> a는 11
    int b = y++; // b에 10이 먼저 대입된 후 y가 11이 됨 -> b는 10

    printf("a = %d, b = %d\n", a, b);
    return 0;
}
```

---

## 3. 형 변환 (Type Casting)

서로 다른 자료형 간 계산이 일어날 때 형 변환이 발생합니다.

- **자동 형 변환**: 정수와 실수를 더하면 데이터 손실을 막기 위해 표현 범위가 넓은 실수형으로 자동 변환.
- **명시적 형 변환**: `(int)3.14` 처럼 괄호를 써서 강제로 타입을 변환.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. C 언어에서 `5 / 2`를 계산하면 왜 `2.5`가 아니라 `2`가 나오나요?**
A. 정수와 정수의 나눗셈 결과는 항상 정수(소수점 버림)가 됩니다. `2.5`라는 소수점 결과를 얻으려면 두 수 중 적어도 하나를 실수로 변환(`5.0 / 2` 또는 `(double)5 / 2`)해야 합니다.
',
  '<p>**연산자(Operator)**는 변수나 값에 대해 덧셈, 비교, 논리 판단 등의 계산을 수행하도록 지시하는 기호입니다.</p>
<hr>
<h2>1. 주요 연산자의 종류</h2>
<h3>1) 산술 연산자</h3>
<ul>
<li><code>+</code> (덧셈), <code>-</code> (뺄셈), <code>*</code> (곱셈), <code>/</code> (나눗셈 몫), <strong><code>%</code> (나머지 연산자)</strong></li>
</ul>
<h3>2) 증감 연산자 (<code>++</code>, <code>--</code>)</h3>
<ul>
<li><strong>전위 연산 (<code>++a</code>)</strong>: 값을 먼저 1 증가시킨 후 문장 실행.</li>
<li><strong>후위 연산 (<code>a++</code>)</strong>: 문장을 먼저 실행한 후 값을 1 증가.</li>
</ul>
<h3>3) 관계(비교) 연산자</h3>
<ul>
<li><code>==</code> (같다), <code>!=</code> (다르다), <code>&gt;</code> (크다), <code>&lt;</code> (작다), <code>&gt;=</code>, <code>&lt;=</code></li>
<li>결과값으로 참은 <strong>1</strong>, 거짓은 <strong>0</strong>을 반환합니다.</li>
</ul>
<h3>4) 논리 연산자</h3>
<ul>
<li><strong><code>&amp;&amp;</code> (AND)</strong>: 두 조건이 모두 참일 때만 참.</li>
<li><strong><code>||</code> (OR)</strong>: 두 조건 중 하나라도 참이면 참.</li>
<li><strong><code>!</code> (NOT)</strong>: 참을 거짓으로, 거짓을 참으로 뒤집음.</li>
</ul>
<hr>
<h2>2. 증감 연산자 전위/후위 차이 예시 코드</h2>
<pre><code class="language-c">#include &lt;stdio.h&gt;

int main(void) {
    int x = 10, y = 10;
    int a = ++x; // x가 11이 된 후 a에 대입 -&gt; a는 11
    int b = y++; // b에 10이 먼저 대입된 후 y가 11이 됨 -&gt; b는 10

    printf(&quot;a = %d, b = %d\n&quot;, a, b);
    return 0;
}
</code></pre>
<hr>
<h2>3. 형 변환 (Type Casting)</h2>
<p>서로 다른 자료형 간 계산이 일어날 때 형 변환이 발생합니다.</p>
<ul>
<li><strong>자동 형 변환</strong>: 정수와 실수를 더하면 데이터 손실을 막기 위해 표현 범위가 넓은 실수형으로 자동 변환.</li>
<li><strong>명시적 형 변환</strong>: <code>(int)3.14</code> 처럼 괄호를 써서 강제로 타입을 변환.</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. C 언어에서 <code>5 / 2</code>를 계산하면 왜 <code>2.5</code>가 아니라 <code>2</code>가 나오나요?</strong>
A. 정수와 정수의 나눗셈 결과는 항상 정수(소수점 버림)가 됩니다. <code>2.5</code>라는 소수점 결과를 얻으려면 두 수 중 적어도 하나를 실수로 변환(<code>5.0 / 2</code> 또는 <code>(double)5 / 2</code>)해야 합니다.</p>
',
  'published',
  'C 언어 연산자 완벽 가이드 - 산술, 대입, 증감(++, --), 관계, 논리 연산자',
  '더하기, 뺄셈, 나눗셈 나눗값(%) 산술 연산자부터 크기 비교 관계 연산자, && || ! 논리 연산자, 전위/후위 증감 연산자, 형 변환의 원리를 익힙니다.',
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
  'c-basics',
  'ch06-conditional-statements',
  '조건문 (의사결정 if, if-else, switch-case)',
  '프로그램이 조건에 따라 선택을 내리고 서로 다른 명령을 실행하게 만드는 조건문(if, else, switch-case)의 개념과 실전 활용법을 공부합니다.',
  '**조건문**은 주어진 조건의 참(True)과 거짓(False) 여부에 따라 프로그램의 실행 길을 갈라지게 만드는 제어문입니다.

---

## 1. if ~ else if ~ else 다중 조건문

여러 개의 조건을 순차적으로 검사하여 해당되는 조건 블록만 실행합니다.

```c
#include <stdio.h>

int main(void) {
    int score = 85;

    if (score >= 90) {
        printf("A 학점입니다.\n");
    } else if (score >= 80) {
        printf("B 학점입니다.\n");
    } else if (score >= 70) {
        printf("C 학점입니다.\n");
    } else {
        printf("F 학점입니다.\n");
    }
    return 0;
}
```

---

## 2. switch ~ case 분기문

하나의 정수형 변수 또는 문자 변수의 정밀한 정수 값에 따라 여러 길 중 하나로 바로 빠져나가는 구문입니다.

```c
#include <stdio.h>

int main(void) {
    int ranking = 2;

    switch (ranking) {
        case 1:
            printf("금메달입니다!\n");
            break; // switch문을 탈출
        case 2:
            printf("은메달입니다!\n");
            break;
        case 3:
            printf("동메달입니다!\n");
            break;
        default:
            printf("수고하셨습니다.\n");
            break;
    }
    return 0;
}
```

---

## 3. 조건문 선택 가이드

| 구 분 | `if ~ else` 문 | `switch ~ case` 문 |
| :--- | :--- | :--- |
| **조건식 형태** | 대소 비교(`>`, `<`), 범위 조건, 논리 연산자 사용 가능 | **정수/문자 형태의 일치 여부만 비교** |
| **가독성** | 조건이 많고 복잡하면 복잡해짐 | 일치하는 특정 값에 따른 분기 시 깔끔함 |

---

## 4. 자주 묻는 질문 (Q&A)

**Q. `switch-case` 문에서 `break;`를 빠뜨리면 어떻게 되나요?**
A. `break;`가 없으면 아래 쪽의 다른 `case` 블록까지 조건을 무시하고 계속 실행(Fall-through 현상)되는 심각한 오류가 발생합니다.
',
  '<p><strong>조건문</strong>은 주어진 조건의 참(True)과 거짓(False) 여부에 따라 프로그램의 실행 길을 갈라지게 만드는 제어문입니다.</p>
<hr>
<h2>1. if ~ else if ~ else 다중 조건문</h2>
<p>여러 개의 조건을 순차적으로 검사하여 해당되는 조건 블록만 실행합니다.</p>
<pre><code class="language-c">#include &lt;stdio.h&gt;

int main(void) {
    int score = 85;

    if (score &gt;= 90) {
        printf(&quot;A 학점입니다.\n&quot;);
    } else if (score &gt;= 80) {
        printf(&quot;B 학점입니다.\n&quot;);
    } else if (score &gt;= 70) {
        printf(&quot;C 학점입니다.\n&quot;);
    } else {
        printf(&quot;F 학점입니다.\n&quot;);
    }
    return 0;
}
</code></pre>
<hr>
<h2>2. switch ~ case 분기문</h2>
<p>하나의 정수형 변수 또는 문자 변수의 정밀한 정수 값에 따라 여러 길 중 하나로 바로 빠져나가는 구문입니다.</p>
<pre><code class="language-c">#include &lt;stdio.h&gt;

int main(void) {
    int ranking = 2;

    switch (ranking) {
        case 1:
            printf(&quot;금메달입니다!\n&quot;);
            break; // switch문을 탈출
        case 2:
            printf(&quot;은메달입니다!\n&quot;);
            break;
        case 3:
            printf(&quot;동메달입니다!\n&quot;);
            break;
        default:
            printf(&quot;수고하셨습니다.\n&quot;);
            break;
    }
    return 0;
}
</code></pre>
<hr>
<h2>3. 조건문 선택 가이드</h2>
<table>
<thead>
<tr>
<th align="left">구 분</th>
<th align="left"><code>if ~ else</code> 문</th>
<th align="left"><code>switch ~ case</code> 문</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>조건식 형태</strong></td>
<td align="left">대소 비교(<code>&gt;</code>, <code>&lt;</code>), 범위 조건, 논리 연산자 사용 가능</td>
<td align="left"><strong>정수/문자 형태의 일치 여부만 비교</strong></td>
</tr>
<tr>
<td align="left"><strong>가독성</strong></td>
<td align="left">조건이 많고 복잡하면 복잡해짐</td>
<td align="left">일치하는 특정 값에 따른 분기 시 깔끔함</td>
</tr>
</tbody></table>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>switch-case</code> 문에서 <code>break;</code>를 빠뜨리면 어떻게 되나요?</strong>
A. <code>break;</code>가 없으면 아래 쪽의 다른 <code>case</code> 블록까지 조건을 무시하고 계속 실행(Fall-through 현상)되는 심각한 오류가 발생합니다.</p>
',
  'published',
  'C 언어 조건문 완벽 정리 - if, else if, else 조건 분기와 switch문',
  '조건에 따라 프로그램의 실행 흐름을 다르게 제어하는 if문, if-else문, 다중 조건문 및 switch-case문의 구조와 break의 역할을 쉬운 예제로 익힙니다.',
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
