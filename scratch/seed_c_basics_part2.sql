-- Seed C-Basics Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'c-basics',
  'ch07-loops-and-iterations',
  '반복문 (for, while, do-while 구문)',
  '반복되는 수많은 작업을 컴퓨터에게 효율적으로 시키는 for, while, do-while 반복문의 기본과 중첩 반복문, 흐름 제어어(break, continue)를 다룹니다.',
  '**반복문(Loop)**은 특정 조건이 만족하는 동안 동일한 코드 블록을 여러 번 반복해서 실행하는 구문입니다.

---

## 1. 반복문 3총사 비교

### 1) for 문: 반복 횟수가 명확할 때
```c
// 1부터 5까지 출력
for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}
```

### 2) while 문: 조건에 따라 반복할 때
```c
int count = 1;
while (count <= 5) {
    printf("%d ", count);
    count++;
}
```

### 3) do-while 문: 조건 검사 전에 무조건 1회는 실행할 때
```c
int num = 0;
do {
    printf("최소 한 번은 실행됩니다.\n");
} while (num > 0);
```

---

## 2. 중첩 반복문 (Nested Loop) 예시: 구구단

반복문 안에 또 다른 반복문을 넣을 수 있습니다.

```c
#include <stdio.h>

int main(void) {
    for (int dan = 2; dan <= 9; dan++) {
        for (int i = 1; i <= 9; i++) {
            printf("%d x %d = %2d  ", dan, i, dan * i);
        }
        printf("\n");
    }
    return 0;
}
```

---

## 3. 루프 흐름 제어: break vs continue

- **`break;`**: 현재 반복문을 즉시 중단하고 완전히 빠져나옵니다.
- **`continue;`**: 아래 남은 코드를 건너뛰고 바로 다음 반복 순서로 넘어갑니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 무한 루프(Infinite Loop)란 무엇이고 어떻게 만드나요?**
A. 종결 조건이 늘 참이거나 탈출 조건이 없어 영원히 끝나지 않는 반복문입니다. `while(1) { ... }` 형태로 작성하며, 보통 내부에 특정 조건 시 `break;` 구문을 함께 배치하여 제어합니다.
',
  '<p>**반복문(Loop)**은 특정 조건이 만족하는 동안 동일한 코드 블록을 여러 번 반복해서 실행하는 구문입니다.</p>
<hr>
<h2>1. 반복문 3총사 비교</h2>
<h3>1) for 문: 반복 횟수가 명확할 때</h3>
<pre><code class="language-c">// 1부터 5까지 출력
for (int i = 1; i &lt;= 5; i++) {
    printf(&quot;%d &quot;, i);
}
</code></pre>
<h3>2) while 문: 조건에 따라 반복할 때</h3>
<pre><code class="language-c">int count = 1;
while (count &lt;= 5) {
    printf(&quot;%d &quot;, count);
    count++;
}
</code></pre>
<h3>3) do-while 문: 조건 검사 전에 무조건 1회는 실행할 때</h3>
<pre><code class="language-c">int num = 0;
do {
    printf(&quot;최소 한 번은 실행됩니다.\n&quot;);
} while (num &gt; 0);
</code></pre>
<hr>
<h2>2. 중첩 반복문 (Nested Loop) 예시: 구구단</h2>
<p>반복문 안에 또 다른 반복문을 넣을 수 있습니다.</p>
<pre><code class="language-c">#include &lt;stdio.h&gt;

int main(void) {
    for (int dan = 2; dan &lt;= 9; dan++) {
        for (int i = 1; i &lt;= 9; i++) {
            printf(&quot;%d x %d = %2d  &quot;, dan, i, dan * i);
        }
        printf(&quot;\n&quot;);
    }
    return 0;
}
</code></pre>
<hr>
<h2>3. 루프 흐름 제어: break vs continue</h2>
<ul>
<li><strong><code>break;</code></strong>: 현재 반복문을 즉시 중단하고 완전히 빠져나옵니다.</li>
<li><strong><code>continue;</code></strong>: 아래 남은 코드를 건너뛰고 바로 다음 반복 순서로 넘어갑니다.</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 무한 루프(Infinite Loop)란 무엇이고 어떻게 만드나요?</strong>
A. 종결 조건이 늘 참이거나 탈출 조건이 없어 영원히 끝나지 않는 반복문입니다. <code>while(1) { ... }</code> 형태로 작성하며, 보통 내부에 특정 조건 시 <code>break;</code> 구문을 함께 배치하여 제어합니다.</p>
',
  'published',
  'C 언어 반복문 총정리 - for문, while문, do-while문 및 break, continue',
  '동일한 작업을 정해진 횟수나 조건 동안 반복하는 for문, while문, do-while문의 차이점과 중첩 반복문(구구단), break와 continue의 제어를 습득합니다.',
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
  'c-basics',
  'ch08-functions-basics',
  '함수 기초와 모듈화 프로그래밍',
  '코드를 단위별로 쪼개어 모듈화하는 함수의 개념, 매개변수 전달과 반환값, 그리고 함수 선언(Prototype)의 필요성을 쉬운 코드 예제로 다룹니다.',
  '**함수(Function)**란 특정 작업이나 계산을 수행하는 독립적인 코드 조각으로, 필요할 때마다 이름을 불러(호출) 재사용할 수 있는 기능 모듈입니다.

---

## 1. 함수의 기본 구조

```c
// 반환타입  함수이름  (매개변수목록)
int add(int a, int b) {
    int result = a + b;
    return result; // 결과값 반환
}
```

- **반환 타입 (Return Type)**: 함수가 모든 계산을 마친 후 돌려줄 결과값의 자료형 (반환할 값이 없다면 `void` 사용).
- **매개변수 (Parameter)**: 함수를 호출할 때 외부에서 전달받는 입력값.
- **`return`**: 계산 결과를 호출한 곳으로 전달하고 함수를 종료.

---

## 2. 함수 선언 (Prototype)과 정의의 분리

C 언어 컴파일러는 위에서 아래로 코드를 읽으므로, `main()` 함수보다 아래에 구현된 함수를 호출하려면 상단에 **함수 원형(Prototype)**을 선언해야 합니다.

```c
#include <stdio.h>

// 1. 함수 원형 선언
int multiply(int x, int y);

int main(void) {
    int res = multiply(4, 5); // 함수 호출
    printf("결과: %d\n", res);
    return 0;
}

// 2. 함수 실제 정의
int multiply(int x, int y) {
    return x * y;
}
```

---

## 3. 함수를 사용할 때의 장점

1. **코드 중복 제거**: 똑같은 코드를 여러 번 반복해서 적을 필요가 없음.
2. **모듈화 및 가독성**: 전체 프로그램을 작은 기능 단위로 나누어 유지보수가 쉬워짐.
3. **디버깅 용이성**: 특정 기능에 오류가 생기면 해당 함수만 수정하면 됨.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 함수 반환형에 쓰이는 `void`의 뜻은 무엇인가요?**
A. "빈 공간", "없음"을 의미합니다. `void print_hello(void)` 처럼 쓰이면 "입력 매개변수도 없고, 반환하는 결과값도 없는 함수"라는 의미입니다.
',
  '<p>**함수(Function)**란 특정 작업이나 계산을 수행하는 독립적인 코드 조각으로, 필요할 때마다 이름을 불러(호출) 재사용할 수 있는 기능 모듈입니다.</p>
<hr>
<h2>1. 함수의 기본 구조</h2>
<pre><code class="language-c">// 반환타입  함수이름  (매개변수목록)
int add(int a, int b) {
    int result = a + b;
    return result; // 결과값 반환
}
</code></pre>
<ul>
<li><strong>반환 타입 (Return Type)</strong>: 함수가 모든 계산을 마친 후 돌려줄 결과값의 자료형 (반환할 값이 없다면 <code>void</code> 사용).</li>
<li><strong>매개변수 (Parameter)</strong>: 함수를 호출할 때 외부에서 전달받는 입력값.</li>
<li><strong><code>return</code></strong>: 계산 결과를 호출한 곳으로 전달하고 함수를 종료.</li>
</ul>
<hr>
<h2>2. 함수 선언 (Prototype)과 정의의 분리</h2>
<p>C 언어 컴파일러는 위에서 아래로 코드를 읽으므로, <code>main()</code> 함수보다 아래에 구현된 함수를 호출하려면 상단에 **함수 원형(Prototype)**을 선언해야 합니다.</p>
<pre><code class="language-c">#include &lt;stdio.h&gt;

// 1. 함수 원형 선언
int multiply(int x, int y);

int main(void) {
    int res = multiply(4, 5); // 함수 호출
    printf(&quot;결과: %d\n&quot;, res);
    return 0;
}

// 2. 함수 실제 정의
int multiply(int x, int y) {
    return x * y;
}
</code></pre>
<hr>
<h2>3. 함수를 사용할 때의 장점</h2>
<ol>
<li><strong>코드 중복 제거</strong>: 똑같은 코드를 여러 번 반복해서 적을 필요가 없음.</li>
<li><strong>모듈화 및 가독성</strong>: 전체 프로그램을 작은 기능 단위로 나누어 유지보수가 쉬워짐.</li>
<li><strong>디버깅 용이성</strong>: 특정 기능에 오류가 생기면 해당 함수만 수정하면 됨.</li>
</ol>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 함수 반환형에 쓰이는 <code>void</code>의 뜻은 무엇인가요?</strong>
A. &quot;빈 공간&quot;, &quot;없음&quot;을 의미합니다. <code>void print_hello(void)</code> 처럼 쓰이면 &quot;입력 매개변수도 없고, 반환하는 결과값도 없는 함수&quot;라는 의미입니다.</p>
',
  'published',
  'C 언어 함수(Function) 작성법 - 정의, 매개변수, 반환값과 함수 원형',
  '반복되는 코드를 하나로 묶어 재사용하는 함수(Function)의 개념, 반환형(Return Type), 매개변수(Parameter), 함수 호출과 함수 선언(Prototype)을 배웁니다.',
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

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'c-basics',
  'ch09-scope-and-storage-classes',
  '변수의 범주와 기억 부류 (지역, 전역, 정적 변수)',
  '변수가 어디서 태어나고 어디서 소멸하는지 결정하는 유효 범위(Scope)와 생난 주기(Lifetime), 지역 변수, 전역 변수, static 변수의 차이를 학습합니다.',
  '변수는 선언되는 위치에 따라 **사용할 수 있는 범위(Scope)**와 **메모리에 살아있는 기간(Lifetime)**이 결정됩니다.

---

## 1. 지역 변수 vs 전역 변수 vs 정적 변수

| 변수 종류 | 선언 위치 | 유효 범위 (Scope) | 생성 및 소멸 시점 (Lifetime) |
| :--- | :--- | :--- | :--- |
| **지역 변수 (Local)** | 함수 또는 `{}` 중괄호 내부 | 선언된 `{}` 블록 내부 | 블록 시작 시 생성, **블록 끝날 때 소멸** |
| **전역 변수 (Global)** | 모든 함수 외부 | 프로그램 코드 전체 | **프로그램 시작 시 생성, 종료 시 소멸** |
| **정적 변수 (`static`)**| 함수 내부 (`static` 키워드) | 선언된 `{}` 블록 내부 | **프로그램 시작 시 생성, 종료 시 소멸 (값 유지)** |

---

## 2. 정적 변수 (static) 의 동작 코드

지역 변수처럼 블록 안에서만 접근 가능하지만, 함수가 끝나도 메모리에서 사라지지 않고 값이 계속 유지됩니다.

```c
#include <stdio.h>

void count_up(void) {
    static int count = 0; // 최초 1회만 초기화됨
    count++;
    printf("방문 횟수: %d\n", count);
}

int main(void) {
    count_up(); // 1
    count_up(); // 2
    count_up(); // 3
    return 0;
}
```

---

## 3. 메모리 영역 구증 (Memory Stack / Heap / Data / Code)

- **코드 영역 (Code/Text)**: 실행할 C 언어 명령어 기계어가 저장되는 영역.
- **데이터 영역 (Data/BSS)**: **전역 변수**와 **static 변수**가 저장되는 영역.
- **스택 영역 (Stack)**: **지역 변수**와 **매개변수**가 함수 호출 시 생성되었다 사라지는 공간.
- **힙 영역 (Heap)**: 동적 메모리 할당으로 사용자가 직접 제어하는 공간.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 편하다고 전역 변수를 막 많이 써도 되나요?**
A. 전역 변수는 어디서나 접근하여 수정할 수 있어 어디서 값이 바뀌었는지 추적하기 힘든 side-effect 오류를 유발합니다. 따라서 꼭 필요한 경우가 아니면 지역 변수를 사용하는 것이 바람직합니다.
',
  '<p>변수는 선언되는 위치에 따라 **사용할 수 있는 범위(Scope)**와 **메모리에 살아있는 기간(Lifetime)**이 결정됩니다.</p>
<hr>
<h2>1. 지역 변수 vs 전역 변수 vs 정적 변수</h2>
<table>
<thead>
<tr>
<th align="left">변수 종류</th>
<th align="left">선언 위치</th>
<th align="left">유효 범위 (Scope)</th>
<th align="left">생성 및 소멸 시점 (Lifetime)</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>지역 변수 (Local)</strong></td>
<td align="left">함수 또는 <code>{}</code> 중괄호 내부</td>
<td align="left">선언된 <code>{}</code> 블록 내부</td>
<td align="left">블록 시작 시 생성, <strong>블록 끝날 때 소멸</strong></td>
</tr>
<tr>
<td align="left"><strong>전역 변수 (Global)</strong></td>
<td align="left">모든 함수 외부</td>
<td align="left">프로그램 코드 전체</td>
<td align="left"><strong>프로그램 시작 시 생성, 종료 시 소멸</strong></td>
</tr>
<tr>
<td align="left"><strong>정적 변수 (<code>static</code>)</strong></td>
<td align="left">함수 내부 (<code>static</code> 키워드)</td>
<td align="left">선언된 <code>{}</code> 블록 내부</td>
<td align="left"><strong>프로그램 시작 시 생성, 종료 시 소멸 (값 유지)</strong></td>
</tr>
</tbody></table>
<hr>
<h2>2. 정적 변수 (static) 의 동작 코드</h2>
<p>지역 변수처럼 블록 안에서만 접근 가능하지만, 함수가 끝나도 메모리에서 사라지지 않고 값이 계속 유지됩니다.</p>
<pre><code class="language-c">#include &lt;stdio.h&gt;

void count_up(void) {
    static int count = 0; // 최초 1회만 초기화됨
    count++;
    printf(&quot;방문 횟수: %d\n&quot;, count);
}

int main(void) {
    count_up(); // 1
    count_up(); // 2
    count_up(); // 3
    return 0;
}
</code></pre>
<hr>
<h2>3. 메모리 영역 구증 (Memory Stack / Heap / Data / Code)</h2>
<ul>
<li><strong>코드 영역 (Code/Text)</strong>: 실행할 C 언어 명령어 기계어가 저장되는 영역.</li>
<li><strong>데이터 영역 (Data/BSS)</strong>: <strong>전역 변수</strong>와 <strong>static 변수</strong>가 저장되는 영역.</li>
<li><strong>스택 영역 (Stack)</strong>: <strong>지역 변수</strong>와 <strong>매개변수</strong>가 함수 호출 시 생성되었다 사라지는 공간.</li>
<li><strong>힙 영역 (Heap)</strong>: 동적 메모리 할당으로 사용자가 직접 제어하는 공간.</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 편하다고 전역 변수를 막 많이 써도 되나요?</strong>
A. 전역 변수는 어디서나 접근하여 수정할 수 있어 어디서 값이 바뀌었는지 추적하기 힘든 side-effect 오류를 유발합니다. 따라서 꼭 필요한 경우가 아니면 지역 변수를 사용하는 것이 바람직합니다.</p>
',
  'published',
  'C 언어 변수의 유효 범위(Scope) - 지역 변수, 전역 변수, static 정적 변수',
  '중괄호 {} 안에서만 살아있는 지역 변수(Local Variable), 프로그램 전체에서 공유하는 전역 변수(Global Variable), 값을 유지하는 static 정적 변수를 구분합니다.',
  9,
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
  'ch10-arrays',
  '1차원 및 다차원 배열 (Array)',
  '동일한 자료형의 변수 여러 개를 연속된 메모리 공간에 묶어서 관리하는 1차원 및 2차원 배열(Array)의 구조와 인덱스 연산을 다룹니다.',
  '**배열(Array)**은 **동일한 자료형의 변수 여러 개를 연속된 메모리 공간에 순서대로 나열**하여 관리하는 집합 자료구조입니다.

---

## 1. 1차원 배열의 선언과 인덱스(Index)

```c
int scores[5] = {90, 85, 100, 95, 80};
```

- 배열의 방 번호(인덱스)는 **0번부터 시작**합니다.
- `scores[0]` 은 90, `scores[4]` 는 80이 됩니다.
- 배열의 크기는 `sizeof(scores) / sizeof(scores[0])` 공식을 통해 구할 수 있습니다.

---

## 2. 배열 순회 예시 코드

```c
#include <stdio.h>

int main(void) {
    int num[5] = {10, 20, 30, 40, 50};
    int sum = 0;

    for (int i = 0; i < 5; i++) {
        sum += num[i];
    }

    printf("총합: %d, 평균: %.1f\n", sum, (double)sum / 5);
    return 0;
}
```

---

## 3. 2차원 배열 (Multidimensional Array)

바둑판이나 표(Table)처럼 행과 열 형태로 데이터를 관리할 때 사용합니다.

```c
// 3행 4열 2차원 배열
int matrix[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 배열의 인덱스 범위를 벗어나 접근하면(`scores[10]`) 어떻게 되나요?**
A. C 언어는 배열의 경계 검사(Boundary Check)를 하지 않습니다. 인덱스 범위를 넘어선 메모리 영역을 건드리면 알 수 없는 쓰레기 값이 나오거나 프로그램이 비정상 종료(Segmentation Fault)될 수 있습니다.
',
  '<p>**배열(Array)**은 <strong>동일한 자료형의 변수 여러 개를 연속된 메모리 공간에 순서대로 나열</strong>하여 관리하는 집합 자료구조입니다.</p>
<hr>
<h2>1. 1차원 배열의 선언과 인덱스(Index)</h2>
<pre><code class="language-c">int scores[5] = {90, 85, 100, 95, 80};
</code></pre>
<ul>
<li>배열의 방 번호(인덱스)는 <strong>0번부터 시작</strong>합니다.</li>
<li><code>scores[0]</code> 은 90, <code>scores[4]</code> 는 80이 됩니다.</li>
<li>배열의 크기는 <code>sizeof(scores) / sizeof(scores[0])</code> 공식을 통해 구할 수 있습니다.</li>
</ul>
<hr>
<h2>2. 배열 순회 예시 코드</h2>
<pre><code class="language-c">#include &lt;stdio.h&gt;

int main(void) {
    int num[5] = {10, 20, 30, 40, 50};
    int sum = 0;

    for (int i = 0; i &lt; 5; i++) {
        sum += num[i];
    }

    printf(&quot;총합: %d, 평균: %.1f\n&quot;, sum, (double)sum / 5);
    return 0;
}
</code></pre>
<hr>
<h2>3. 2차원 배열 (Multidimensional Array)</h2>
<p>바둑판이나 표(Table)처럼 행과 열 형태로 데이터를 관리할 때 사용합니다.</p>
<pre><code class="language-c">// 3행 4열 2차원 배열
int matrix[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 배열의 인덱스 범위를 벗어나 접근하면(<code>scores[10]</code>) 어떻게 되나요?</strong>
A. C 언어는 배열의 경계 검사(Boundary Check)를 하지 않습니다. 인덱스 범위를 넘어선 메모리 영역을 건드리면 알 수 없는 쓰레기 값이 나오거나 프로그램이 비정상 종료(Segmentation Fault)될 수 있습니다.</p>
',
  'published',
  'C 언어 배열(Array) 완전 기초 - 1차원 배열, 인덱스 메모리 구조, 2차원 배열',
  '동일한 타입의 연속된 상자 연속체인 배열의 선언, 인덱스 0 기반 접근, 배열 크기 요소 수 계산, 2차원 배열과 행렬 데이터 다루기를 다룹니다.',
  10,
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
  'ch11-pointers-fundamentals',
  '포인터(Pointer)의 개념과 메모리 주소',
  'C 언어 입문자가 가장 어려워하지만 가장 강력한 도구인 포인터(Pointer)의 정의, 메모리 주소값, 주소 연산자(&)와 역참조 연산자(*)를 확실하게 정리합니다.',
  '**포인터(Pointer)**는 일반적인 값(숫자, 문자)이 아니라, 다른 변수가 위치한 **"메모리의 주소(Memory Address)"를 값으로 저장하는 변수**입니다.

---

## 1. 포인터 관련 핵심 연산자 2가지

1. **주소 연산자 (`&`)**: 변수 이름 앞에 붙여 해당 변수의 메모리 시작 주소를 알아냅니다.
2. **역참조(간접 참조) 연산자 (`*`)**: 포인터 변수 앞에 붙여 그 주소가 가리키는 곳에 직접 찾아가 실제 값을 읽거나 수정합니다.

---

## 2. 포인터 선언과 동작 예시

```c
#include <stdio.h>

int main(void) {
    int num = 10;
    int *p = &num; // p는 num의 메모리 주소를 가리키는 포인터 변수

    printf("num의 값: %d\n", num);      // 10
    printf("num의 주소: %p\n", &num);   // 메모리 주소 (예: 0x7ffd...)
    printf("p가 가진 주소: %p\n", p);   // &num과 동일한 주소
    printf("p가 가리키는 값: %d\n", *p); // 10 (역참조)

    *p = 50; // p가 가리키는 공간(num)의 값을 50으로 직접 변경!
    printf("수정 후 num: %d\n", num);   // 50으로 변경됨
    return 0;
}
```

---

## 3. Call by Value vs Call by Reference (값 전달 vs 주소 전달)

함수에 변수 값을 그냥 넘겨주면 복사본이 전달되지만, **포인터(주소)를 넘겨주면 함수 안에서 원본 변수의 값을 직접 바꿀 수 있습니다.**

```c
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 포인터 변수의 크기는 무조건 4바이트인가요 8바이트인가요?**
A. 포인터 변수의 크기는 가리키는 자료형(`int*`, `char*` 등)과 상관없이 **운영체제 시스템 비트수**에 따라 결정됩니다. 32-bit 시스템에서는 4 Bytes, 64-bit 시스템에서는 8 Bytes가 됩니다.
',
  '<p>**포인터(Pointer)**는 일반적인 값(숫자, 문자)이 아니라, 다른 변수가 위치한 <strong>&quot;메모리의 주소(Memory Address)&quot;를 값으로 저장하는 변수</strong>입니다.</p>
<hr>
<h2>1. 포인터 관련 핵심 연산자 2가지</h2>
<ol>
<li><strong>주소 연산자 (<code>&amp;</code>)</strong>: 변수 이름 앞에 붙여 해당 변수의 메모리 시작 주소를 알아냅니다.</li>
<li><strong>역참조(간접 참조) 연산자 (<code>*</code>)</strong>: 포인터 변수 앞에 붙여 그 주소가 가리키는 곳에 직접 찾아가 실제 값을 읽거나 수정합니다.</li>
</ol>
<hr>
<h2>2. 포인터 선언과 동작 예시</h2>
<pre><code class="language-c">#include &lt;stdio.h&gt;

int main(void) {
    int num = 10;
    int *p = &amp;num; // p는 num의 메모리 주소를 가리키는 포인터 변수

    printf(&quot;num의 값: %d\n&quot;, num);      // 10
    printf(&quot;num의 주소: %p\n&quot;, &amp;num);   // 메모리 주소 (예: 0x7ffd...)
    printf(&quot;p가 가진 주소: %p\n&quot;, p);   // &amp;num과 동일한 주소
    printf(&quot;p가 가리키는 값: %d\n&quot;, *p); // 10 (역참조)

    *p = 50; // p가 가리키는 공간(num)의 값을 50으로 직접 변경!
    printf(&quot;수정 후 num: %d\n&quot;, num);   // 50으로 변경됨
    return 0;
}
</code></pre>
<hr>
<h2>3. Call by Value vs Call by Reference (값 전달 vs 주소 전달)</h2>
<p>함수에 변수 값을 그냥 넘겨주면 복사본이 전달되지만, <strong>포인터(주소)를 넘겨주면 함수 안에서 원본 변수의 값을 직접 바꿀 수 있습니다.</strong></p>
<pre><code class="language-c">void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 포인터 변수의 크기는 무조건 4바이트인가요 8바이트인가요?</strong>
A. 포인터 변수의 크기는 가리키는 자료형(<code>int*</code>, <code>char*</code> 등)과 상관없이 <strong>운영체제 시스템 비트수</strong>에 따라 결정됩니다. 32-bit 시스템에서는 4 Bytes, 64-bit 시스템에서는 8 Bytes가 됩니다.</p>
',
  'published',
  'C 언어 포인터(Pointer) 쉬운 이해 - 주소 연산자(&), 역참조(*), 포인터 변수',
  'C 언어의 꽃 포인터(Pointer)의 핵심! 메모리 주소값을 담는 변수, 주소 추출 연산자 &, 그 주소로 찾아가는 간접 참조 * 연산자의 원리를 그림과 함께 해설합니다.',
  11,
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
  'ch12-strings',
  '문자열 다루기 (문자 배열과 string.h 함수)',
  'C 언어에서 문자열이 구현되는 메커니즘인 Null 문자 포함 char 배열과, string.h 라이브러리의 주요 문자열 조작 함수를 배웁니다.',
  'C 언어에는 독립된 문자열(String) 타입이 존재하지 않습니다. 대신 **문자의 배열(`char[]`)** 마지막에 문자열의 끝을 알려주는 **널 문자(Null Character, \0)**를 넣어 문자열을 표현합니다.

---

## 1. C 문자열과 널 문자 (\0)

```c
char str[6] = "Hello"; // 실제로는 H, e, l, l, o, \0 총 6개 바이트
```

- 문자열의 끝에는 항상 컴파일러가 자동으로 **`\0` (ASCII 값 0)**을 덧붙입니다.
- 따라서 문자열을 담을 배열 크기는 **실제 글자 수 + 1** 이상으로 넉넉히 선언해야 합니다.

---

## 2. 주요 문자열 처리 함수 (`<string.h>`)

| 함수 | 역할 | 사용 예시 |
| :--- | :--- | :--- |
| **`strlen(str)`** | 널 문자를 제외한 순수 문자열 길이를 반환 | `strlen("Hello")` $ightarrow$ 5 |
| **`strcpy(dest, src)`** | 문자열을 복사하여 붙여넣음 | `strcpy(target, "ABC");` |
| **`strcat(dest, src)`** | 원본 뒤에 다른 문자열을 이어 붙임 | `strcat(str, " World");` |
| **`strcmp(s1, s2)`** | 두 문자열을 사전순 비교 (같으면 0 반환) | `if(strcmp(a, b) == 0)` |

---

## 3. 문자열 입출력 시 주의점: `scanf` vs `fgets`

- `scanf("%s", str)`: 띄어쓰기(공백)나 줄바꿈을 만나면 입력을 멈춥니다.
- **`fgets(str, sizeof(str), stdin)`**: 공백을 포함해 한 줄 전체를 안전하게 입력받습니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 왜 `str1 = str2;` 처럼 대입 연산자로 문자열을 한번에 바꿀 수 없나요?**
A. 배열 이름은 그 자체로 메모리의 첫 주소(상수 포인터)이기 때문에 대입 연산자(`=`)로 통째로 변경할 수 없습니다. 반드시 `strcpy()` 함수를 사용하여 내부 문자를 하나씩 복사해야 합니다.
',
  '<p>C 언어에는 독립된 문자열(String) 타입이 존재하지 않습니다. 대신 <strong>문자의 배열(<code>char[]</code>)</strong> 마지막에 문자열의 끝을 알려주는 **널 문자(Null Character, \0)**를 넣어 문자열을 표현합니다.</p>
<hr>
<h2>1. C 문자열과 널 문자 (\0)</h2>
<pre><code class="language-c">char str[6] = &quot;Hello&quot;; // 실제로는 H, e, l, l, o, \0 총 6개 바이트
</code></pre>
<ul>
<li>문자열의 끝에는 항상 컴파일러가 자동으로 **<code>\0</code> (ASCII 값 0)**을 덧붙입니다.</li>
<li>따라서 문자열을 담을 배열 크기는 <strong>실제 글자 수 + 1</strong> 이상으로 넉넉히 선언해야 합니다.</li>
</ul>
<hr>
<h2>2. 주요 문자열 처리 함수 (<code>&lt;string.h&gt;</code>)</h2>
<table>
<thead>
<tr>
<th align="left">함수</th>
<th align="left">역할</th>
<th align="left">사용 예시</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong><code>strlen(str)</code></strong></td>
<td align="left">널 문자를 제외한 순수 문자열 길이를 반환</td>
<td align="left"><code>strlen(&quot;Hello&quot;)</code> $</td>
</tr>
<tr>
<td align="left">ightarrow$ 5</td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><strong><code>strcpy(dest, src)</code></strong></td>
<td align="left">문자열을 복사하여 붙여넣음</td>
<td align="left"><code>strcpy(target, &quot;ABC&quot;);</code></td>
</tr>
<tr>
<td align="left"><strong><code>strcat(dest, src)</code></strong></td>
<td align="left">원본 뒤에 다른 문자열을 이어 붙임</td>
<td align="left"><code>strcat(str, &quot; World&quot;);</code></td>
</tr>
<tr>
<td align="left"><strong><code>strcmp(s1, s2)</code></strong></td>
<td align="left">두 문자열을 사전순 비교 (같으면 0 반환)</td>
<td align="left"><code>if(strcmp(a, b) == 0)</code></td>
</tr>
</tbody></table>
<hr>
<h2>3. 문자열 입출력 시 주의점: <code>scanf</code> vs <code>fgets</code></h2>
<ul>
<li><code>scanf(&quot;%s&quot;, str)</code>: 띄어쓰기(공백)나 줄바꿈을 만나면 입력을 멈춥니다.</li>
<li><strong><code>fgets(str, sizeof(str), stdin)</code></strong>: 공백을 포함해 한 줄 전체를 안전하게 입력받습니다.</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 왜 <code>str1 = str2;</code> 처럼 대입 연산자로 문자열을 한번에 바꿀 수 없나요?</strong>
A. 배열 이름은 그 자체로 메모리의 첫 주소(상수 포인터)이기 때문에 대입 연산자(<code>=</code>)로 통째로 변경할 수 없습니다. 반드시 <code>strcpy()</code> 함수를 사용하여 내부 문자를 하나씩 복사해야 합니다.</p>
',
  'published',
  'C 언어 문자열 완전 가이드 - char 배열, Null 문자, string.h 라이브러리',
  '문자열의 본질인 char 배열과 끝을 알려주는 Null 문자(\0), strlen, strcpy, strcat, strcmp 문자열 처리 라이브러리 함수의 동작을 학습합니다.',
  12,
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
