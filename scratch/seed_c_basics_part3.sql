-- Seed C-Basics Lessons Part 3

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'c-basics',
  'ch13-structures',
  '구조체(Structure)와 사용자 정의 타입',
  '학생 정보(이름, 학번, 성적)처럼 관련 있는 여러 자료형의 데이터를 하나의 커스텀 타입으로 묶어서 다루는 구조체(Structure)의 개념을 다룹니다.',
  '**구조체(Structure)**는 **서로 다른 자료형의 변수들을 하나로 묶어서** 개발자가 새로 만드는 **사용자 정의 자료형**입니다.

---

## 1. 구조체 정의 및 변수 사용법

```c
#include <stdio.h>
#include <string.h>

// 1. 구조체 틀 정의
struct Student {
    char name[20];
    int age;
    double gpa;
};

int main(void) {
    // 2. 구조체 변수 선언
    struct Student s1;

    // 3. 멤버 접근 (점 연산자 . 사용)
    strcpy(s1.name, "홍길동");
    s1.age = 20;
    s1.gpa = 4.2;

    printf("학생 이름: %s, 나이: %d, 평점: %.1f\n", s1.name, s1.age, s1.gpa);
    return 0;
}
```

---

## 2. `typedef` 키워드로 더 간결하게 사용하기

`typedef`를 활용하면 매번 `struct Student`라고 적지 않고 간결한 별칭(Alias)으로 사용 가능합니다.

```c
typedef struct {
    int x;
    int y;
} Point; // 이제 ''Point'' 자체가 타입 이름이 됩니다.

Point p1 = {10, 20};
```

---

## 3. 구조체 포인터와 화살표 연산자 (`->`)

구조체 변수의 주소를 포인터로 가리킬 때는 **화살표 연산자(`->`)**를 사용해 멤버에 간편하게 접근할 수 있습니다.

```c
Point p = {30, 40};
Point *ptr = &p;

printf("X 좌표: %d\n", ptr->x); // (*ptr).x 와 동일한 표현
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 구조체 메모리 크기가 각 멤버 크기의 합보다 더 크게 나오는 이유는 무엇인가요?**
A. CPU가 메모리를 읽을 때 4byte 또는 8byte 단위로 접근하기 용이하도록 컴파일러가 빈 공간(Padding Byte)을 채워 정렬하는 **구조체 패딩(Structure Padding)** 현상 때문입니다.
',
  '<p>**구조체(Structure)**는 <strong>서로 다른 자료형의 변수들을 하나로 묶어서</strong> 개발자가 새로 만드는 <strong>사용자 정의 자료형</strong>입니다.</p>
<hr>
<h2>1. 구조체 정의 및 변수 사용법</h2>
<pre><code class="language-c">#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

// 1. 구조체 틀 정의
struct Student {
    char name[20];
    int age;
    double gpa;
};

int main(void) {
    // 2. 구조체 변수 선언
    struct Student s1;

    // 3. 멤버 접근 (점 연산자 . 사용)
    strcpy(s1.name, &quot;홍길동&quot;);
    s1.age = 20;
    s1.gpa = 4.2;

    printf(&quot;학생 이름: %s, 나이: %d, 평점: %.1f\n&quot;, s1.name, s1.age, s1.gpa);
    return 0;
}
</code></pre>
<hr>
<h2>2. <code>typedef</code> 키워드로 더 간결하게 사용하기</h2>
<p><code>typedef</code>를 활용하면 매번 <code>struct Student</code>라고 적지 않고 간결한 별칭(Alias)으로 사용 가능합니다.</p>
<pre><code class="language-c">typedef struct {
    int x;
    int y;
} Point; // 이제 &#39;Point&#39; 자체가 타입 이름이 됩니다.

Point p1 = {10, 20};
</code></pre>
<hr>
<h2>3. 구조체 포인터와 화살표 연산자 (<code>-&gt;</code>)</h2>
<p>구조체 변수의 주소를 포인터로 가리킬 때는 **화살표 연산자(<code>-&gt;</code>)**를 사용해 멤버에 간편하게 접근할 수 있습니다.</p>
<pre><code class="language-c">Point p = {30, 40};
Point *ptr = &amp;p;

printf(&quot;X 좌표: %d\n&quot;, ptr-&gt;x); // (*ptr).x 와 동일한 표현
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 구조체 메모리 크기가 각 멤버 크기의 합보다 더 크게 나오는 이유는 무엇인가요?</strong>
A. CPU가 메모리를 읽을 때 4byte 또는 8byte 단위로 접근하기 용이하도록 컴파일러가 빈 공간(Padding Byte)을 채워 정렬하는 <strong>구조체 패딩(Structure Padding)</strong> 현상 때문입니다.</p>
',
  'published',
  'C 언어 구조체(struct) 사용법 - 다양한 자료형 묶기, typedef, 구조체 배열',
  '서로 다른 타입의 변수들을 하나로 묶어 사용자 정의 타입을 만드는 구조체(struct)의 선언, 점 연산자(.), typedef 닉네임 지정, 구조체 배열을 알아봅니다.',
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
  'c-basics',
  'ch14-advanced-pointers',
  '포인터 심화와 활용 (이중 포인터, 함수 포인터)',
  '포인터의 주소를 저장하는 이중 포인터(**), 2차원 배열과 배열 포인터의 관계, 함수를 변수처럼 전달하는 함수 포인터의 핵심을 정리합니다.',
  '포인터를 제대로 활용하면 **이중 포인터**, **배열 포인터**, **함수 포인터** 등 메모리를 아주 유연하게 제어하는 심화 기법을 사용할 수 있습니다.

---

## 1. 이중 포인터 (Pointer to Pointer)

이중 포인터(`**`)는 **"포인터 변수의 주소"**를 저장하는 변수입니다.

```c
#include <stdio.h>

int main(void) {
    int num = 100;
    int *p = &num;   // 1차 포인터
    int **pp = &p;   // 2차 이중 포인터

    printf("num = %d\n", num);   // 100
    printf("*p  = %d\n", *p);    // 100
    printf("**pp = %d\n", **pp);  // 100
    return 0;
}
```

---

## 2. 포인터 배열 vs 배열 포인터

- **포인터 배열 (`int *arr[3]`)**: 포인터 3개를 묶은 배열 (포인터들의 모음).
- **배열 포인터 (`int (*arr)[3]`)**: 3개짜리 배열 전체를 가리키는 단일 포인터.

---

## 3. 함수 포인터 (Function Pointer)

함수도 실행 코드가 메모리에 탑재되므로 주소가 존재합니다. **함수의 주소를 저장하여 함수를 변수처럼 호출하거나 매개변수로 전달**할 수 있습니다.

```c
#include <stdio.h>

int add(int a, int b) { return a + b; }

int main(void) {
    // 반환타입 (*함수포인터이름)(매개변수타입)
    int (*func_ptr)(int, int) = add;

    int result = func_ptr(10, 20); // 함수 포인터로 add 호출
    printf("결과: %d\n", result); // 30
    return 0;
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 이중 포인터는 실무에서 주로 언제 쓰이나요?**
A. 함수 내부에서 외부의 포인터 변수 값(가리키는 주소 자체)을 직접 변경하고 싶을 때(예: 동적 메모리 재할당 함수, 연결 리스트 Head 노드 변경) 사용합니다.
',
  '<p>포인터를 제대로 활용하면 <strong>이중 포인터</strong>, <strong>배열 포인터</strong>, <strong>함수 포인터</strong> 등 메모리를 아주 유연하게 제어하는 심화 기법을 사용할 수 있습니다.</p>
<hr>
<h2>1. 이중 포인터 (Pointer to Pointer)</h2>
<p>이중 포인터(<code>**</code>)는 **&quot;포인터 변수의 주소&quot;**를 저장하는 변수입니다.</p>
<pre><code class="language-c">#include &lt;stdio.h&gt;

int main(void) {
    int num = 100;
    int *p = &amp;num;   // 1차 포인터
    int **pp = &amp;p;   // 2차 이중 포인터

    printf(&quot;num = %d\n&quot;, num);   // 100
    printf(&quot;*p  = %d\n&quot;, *p);    // 100
    printf(&quot;**pp = %d\n&quot;, **pp);  // 100
    return 0;
}
</code></pre>
<hr>
<h2>2. 포인터 배열 vs 배열 포인터</h2>
<ul>
<li><strong>포인터 배열 (<code>int *arr[3]</code>)</strong>: 포인터 3개를 묶은 배열 (포인터들의 모음).</li>
<li><strong>배열 포인터 (<code>int (*arr)[3]</code>)</strong>: 3개짜리 배열 전체를 가리키는 단일 포인터.</li>
</ul>
<hr>
<h2>3. 함수 포인터 (Function Pointer)</h2>
<p>함수도 실행 코드가 메모리에 탑재되므로 주소가 존재합니다. <strong>함수의 주소를 저장하여 함수를 변수처럼 호출하거나 매개변수로 전달</strong>할 수 있습니다.</p>
<pre><code class="language-c">#include &lt;stdio.h&gt;

int add(int a, int b) { return a + b; }

int main(void) {
    // 반환타입 (*함수포인터이름)(매개변수타입)
    int (*func_ptr)(int, int) = add;

    int result = func_ptr(10, 20); // 함수 포인터로 add 호출
    printf(&quot;결과: %d\n&quot;, result); // 30
    return 0;
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 이중 포인터는 실무에서 주로 언제 쓰이나요?</strong>
A. 함수 내부에서 외부의 포인터 변수 값(가리키는 주소 자체)을 직접 변경하고 싶을 때(예: 동적 메모리 재할당 함수, 연결 리스트 Head 노드 변경) 사용합니다.</p>
',
  'published',
  'C 언어 심화 포인터 - 이중 포인터(**), 배열 포인터, 함수 포인터(Function Pointer)',
  '포인터의 포인터인 이중 포인터(**), 2차원 배열과 포인터의 관계, 그리고 함수의 메모리 주소를 가리켜 동적 호출을 돕는 함수 포인터를 쉽게 다룹니다.',
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
  'c-basics',
  'ch15-file-io-and-streams',
  '스트림과 파일 입출력 (fopen, fclose, fread, fwrite)',
  '프로그램 실행이 끝나도 데이터를 영구히 보관하기 위한 하드디스크 파일 입출력(File I/O)과 스트림(Stream)의 개념을 학습합니다.',
  '프로그램이 종료되어도 데이터를 영구히 저장하려면 보조기억장치의 **파일(File)**에 기록해야 합니다. C 언어는 **스트림(Stream)**이라는 데이터 통로를 통해 파일 입출력을 처리합니다.

---

## 1. 파일 입출력 3단계 필수 순서

1. **파일 열기 (`fopen`)**: 파일과 프로그램 사이에 통로(스트림) 연결 및 `FILE*` 포인터 반환.
2. **읽기/쓰기 작업**: `fprintf`, `fscanf`, `fputs`, `fgets` 등 수행.
3. **파일 닫기 (`fclose`)**: 사용이 끝난 스트림 자원을 해제.

---

## 2. 파일 텍스트 쓰기 / 읽기 예시

```c
#include <stdio.h>

int main(void) {
    // 1. 파일 열기 (쓰기 모드 ''w'')
    FILE *fp = fopen("data.txt", "w");
    if (fp == NULL) {
        printf("파일 열기 실패!\n");
        return 1;
    }

    // 2. 파일에 기록
    fprintf(fp, "이름: %s, 점수: %d\n", "이인상", 100);

    // 3. 파일 닫기
    fclose(fp);
    printf("data.txt에 데이터가 저장되었습니다.\n");
    return 0;
}
```

---

## 3. 대표적인 파일 오픈 모드 (Mode)

| 모드 | 의미 | 파일이 없을 때 | 파일이 이미 있을 때 |
| :--- | :--- | :--- | :--- |
| **`"r"`** | 읽기 전용 (Read) | 에러 (`NULL` 반환) | 정상 열림 |
| **`"w"`** | 쓰기 전용 (Write) | 새 파일 생성 | **기존 내용을 싹 덮어씀(삭제)** |
| **`"a"`** | 추가 쓰기 (Append) | 새 파일 생성 | 기존 내용 뒤에 덧붙임 |
| **`"rb" / "wb"`** | 바이너리 입출력 모드 | 이진 파일 전용 | 이진 파일 전용 |

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 파일 작업이 끝나고 `fclose()`를 안 부르면 어떻게 되나요?**
A. 버퍼에 남아있는 데이터가 파일에 완전히 반영되지 못해 짤리거나, 시스템 자원(파일 핸들)이 낭비되는 메모리/스트림 누수가 발생할 수 있습니다.
',
  '<p>프로그램이 종료되어도 데이터를 영구히 저장하려면 보조기억장치의 **파일(File)**에 기록해야 합니다. C 언어는 **스트림(Stream)**이라는 데이터 통로를 통해 파일 입출력을 처리합니다.</p>
<hr>
<h2>1. 파일 입출력 3단계 필수 순서</h2>
<ol>
<li><strong>파일 열기 (<code>fopen</code>)</strong>: 파일과 프로그램 사이에 통로(스트림) 연결 및 <code>FILE*</code> 포인터 반환.</li>
<li><strong>읽기/쓰기 작업</strong>: <code>fprintf</code>, <code>fscanf</code>, <code>fputs</code>, <code>fgets</code> 등 수행.</li>
<li><strong>파일 닫기 (<code>fclose</code>)</strong>: 사용이 끝난 스트림 자원을 해제.</li>
</ol>
<hr>
<h2>2. 파일 텍스트 쓰기 / 읽기 예시</h2>
<pre><code class="language-c">#include &lt;stdio.h&gt;

int main(void) {
    // 1. 파일 열기 (쓰기 모드 &#39;w&#39;)
    FILE *fp = fopen(&quot;data.txt&quot;, &quot;w&quot;);
    if (fp == NULL) {
        printf(&quot;파일 열기 실패!\n&quot;);
        return 1;
    }

    // 2. 파일에 기록
    fprintf(fp, &quot;이름: %s, 점수: %d\n&quot;, &quot;이인상&quot;, 100);

    // 3. 파일 닫기
    fclose(fp);
    printf(&quot;data.txt에 데이터가 저장되었습니다.\n&quot;);
    return 0;
}
</code></pre>
<hr>
<h2>3. 대표적인 파일 오픈 모드 (Mode)</h2>
<table>
<thead>
<tr>
<th align="left">모드</th>
<th align="left">의미</th>
<th align="left">파일이 없을 때</th>
<th align="left">파일이 이미 있을 때</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong><code>&quot;r&quot;</code></strong></td>
<td align="left">읽기 전용 (Read)</td>
<td align="left">에러 (<code>NULL</code> 반환)</td>
<td align="left">정상 열림</td>
</tr>
<tr>
<td align="left"><strong><code>&quot;w&quot;</code></strong></td>
<td align="left">쓰기 전용 (Write)</td>
<td align="left">새 파일 생성</td>
<td align="left"><strong>기존 내용을 싹 덮어씀(삭제)</strong></td>
</tr>
<tr>
<td align="left"><strong><code>&quot;a&quot;</code></strong></td>
<td align="left">추가 쓰기 (Append)</td>
<td align="left">새 파일 생성</td>
<td align="left">기존 내용 뒤에 덧붙임</td>
</tr>
<tr>
<td align="left"><strong><code>&quot;rb&quot; / &quot;wb&quot;</code></strong></td>
<td align="left">바이너리 입출력 모드</td>
<td align="left">이진 파일 전용</td>
<td align="left">이진 파일 전용</td>
</tr>
</tbody></table>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파일 작업이 끝나고 <code>fclose()</code>를 안 부르면 어떻게 되나요?</strong>
A. 버퍼에 남아있는 데이터가 파일에 완전히 반영되지 못해 짤리거나, 시스템 자원(파일 핸들)이 낭비되는 메모리/스트림 누수가 발생할 수 있습니다.</p>
',
  'published',
  'C 언어 파일 입출력 총정리 - FILE 포인터, fopen, fclose, fprintf, 바이너리 입출력',
  '프로그램이 꺼져도 데이터를 보존하는 파일 입출력! FILE 포인터, fopen 모드(r, w, a), fprintf, fscanf 및 바이너리 fread, fwrite 사용법을 다룹니다.',
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
  'c-basics',
  'ch16-preprocessor-and-multi-files',
  '전처리기 매크로와 다중 소스 파일',
  '컴파일 전에 소스 코드를 사전 가공하는 전처리 지시자(#include, #define)와 프로젝트 코드를 여러 파일로 모듈화 분할하는 기법을 배웁니다.',
  '**전처리기(Preprocessor)**는 실제 컴파일러가 C 코드를 기계어로 번역하기 직전에, 소스 코드를 미리 재구성하고 정돈하는 사전 처리 도구입니다.

---

## 1. 대표적인 전처리기 지시자

- **`#include <header.h>`**: 표준 라이브러리 헤더 파일을 가져옵니다.
- **`#include "myheader.h"`**: 사용자가 직접 작성한 헤더 파일을 가져옵니다.
- **`#define 상수이름 값`**: 매크로 상수를 정의합니다.
- **`#define SQUARE(x) ((x)*(x))`**: 매크로 함수를 정의합니다.

---

## 2. 매크로 상수의 활용

```c
#include <stdio.h>
#define PI 3.141592
#define MAX_SIZE 100

int main(void) {
    double radius = 5.0;
    double area = PI * radius * radius;
    printf("원 넓이: %.2f\n", area);
    return 0;
}
```

---

## 3. 헤더 파일 중복 포함 방지 (Include Guard)

다중 파일 프로젝트에서 동일한 헤더 파일이 여러 번 선언되어 발생하는 중복 정의 오류를 막기 위해 Include Guard 구문을 사용합니다.

```c
#ifndef MY_HEADER_H
#define MY_HEADER_H

// 구조체 선언 및 함수 원형 선언들
void myFunction(void);

#endif
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 매크로 함수와 일반 함수의 차이는 무엇인가요?**
A. 일반 함수는 호출 시 스택 메모리를 사용해 오버헤드가 발생하지만, 매크로 함수는 컴파일 전에 코드 자체가 그 자리에 그대로 치환(확장)되므로 속도가 매우 빠릅니다. 단, 복잡한 인자 전달 시 괄호 미사용으로 인한 계산 오류가 발생하기 쉽습니다.
',
  '<p>**전처리기(Preprocessor)**는 실제 컴파일러가 C 코드를 기계어로 번역하기 직전에, 소스 코드를 미리 재구성하고 정돈하는 사전 처리 도구입니다.</p>
<hr>
<h2>1. 대표적인 전처리기 지시자</h2>
<ul>
<li><strong><code>#include &lt;header.h&gt;</code></strong>: 표준 라이브러리 헤더 파일을 가져옵니다.</li>
<li><strong><code>#include &quot;myheader.h&quot;</code></strong>: 사용자가 직접 작성한 헤더 파일을 가져옵니다.</li>
<li><strong><code>#define 상수이름 값</code></strong>: 매크로 상수를 정의합니다.</li>
<li><strong><code>#define SQUARE(x) ((x)*(x))</code></strong>: 매크로 함수를 정의합니다.</li>
</ul>
<hr>
<h2>2. 매크로 상수의 활용</h2>
<pre><code class="language-c">#include &lt;stdio.h&gt;
#define PI 3.141592
#define MAX_SIZE 100

int main(void) {
    double radius = 5.0;
    double area = PI * radius * radius;
    printf(&quot;원 넓이: %.2f\n&quot;, area);
    return 0;
}
</code></pre>
<hr>
<h2>3. 헤더 파일 중복 포함 방지 (Include Guard)</h2>
<p>다중 파일 프로젝트에서 동일한 헤더 파일이 여러 번 선언되어 발생하는 중복 정의 오류를 막기 위해 Include Guard 구문을 사용합니다.</p>
<pre><code class="language-c">#ifndef MY_HEADER_H
#define MY_HEADER_H

// 구조체 선언 및 함수 원형 선언들
void myFunction(void);

#endif
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 매크로 함수와 일반 함수의 차이는 무엇인가요?</strong>
A. 일반 함수는 호출 시 스택 메모리를 사용해 오버헤드가 발생하지만, 매크로 함수는 컴파일 전에 코드 자체가 그 자리에 그대로 치환(확장)되므로 속도가 매우 빠릅니다. 단, 복잡한 인자 전달 시 괄호 미사용으로 인한 계산 오류가 발생하기 쉽습니다.</p>
',
  'published',
  'C 언어 전처리기와 다중 파일 분할 - #include, #define 매크로, 조건부 컴파일',
  '컴파일 전 코드를 다듬는 전처리기 지시자(#include, #define, #ifdef), 매크로 함수, 프로젝트 소스 파일 분할과 헤더 중복 방지 지시자를 익힙니다.',
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

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'c-basics',
  'ch17-dynamic-memory-and-linked-list',
  '동적 메모리 할당과 기초 자료구조',
  '프로그램 실행 중에 힙(Heap) 메모리 공간을 원하는 크기만큼 할당받는 malloc()과 free()의 사용법, 메모리 누수 방지 및 기초 연결 리스트 구현을 다룹니다.',
  '정적 배열은 프로그램 실행 전에 크기가 고정되지만, **동적 메모리 할당(Dynamic Memory Allocation)**을 이용하면 프로그램 실행 중에 필요한 만큼 **힙(Heap)** 메모리 공간을 원하는 크기로 할당받을 수 있습니다.

---

## 1. 동적 메모리 할당 4대 함수 (`<stdlib.h>`)

- **`malloc(byte_size)`**: 지정한 바이트 수만큼 힙 메모리를 할당 (초기화 안 됨).
- **`calloc(num, size)`**: 지정한 크기의 메모리를 할당하고 **모든 비트를 0으로 자동 초기화**.
- **`realloc(ptr, new_size)`**: 이미 할당된 메모리의 크기를 확장하거나 축소.
- **`free(ptr)`**: 할당받아 사용이 끝난 메모리를 **힙 공간에 반납해 해제**.

---

## 2. `malloc` 과 `free` 사용 표준 코드

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int size = 5;
    // 1. int 5개 크기(20 Bytes) 동적 할당
    int *arr = (int *)malloc(sizeof(int) * size);

    if (arr == NULL) { // 메모리 할당 실패 검사
        printf("메모리 할당 실패!\n");
        return 1;
    }

    // 2. 메모리 사용
    for (int i = 0; i < size; i++) {
        arr[i] = (i + 1) * 10;
        printf("%d ", arr[i]);
    }
    printf("\n");

    // 3. 반드시 메모리 해제!
    free(arr);
    arr = NULL; // 가리키던 포인터 초기화 (Dangling Pointer 방지)
    return 0;
}
```

---

## 3. 메모리 누수 (Memory Leak) 주의사항

`malloc()`으로 할당받은 주소를 `free()`로 해제하지 않고 프로그램을 계속 돌리면, 사용하지 않는 힙 메모리가 계속 쌓여 컴퓨터 메모리가 부족해지는 **메모리 누수(Memory Leak)** 현상이 발생합니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 허공을 가리키는 포인터(Dangling Pointer)란 무엇인가요?**
A. `free(ptr)`로 메모리를 해제한 후에도 `ptr` 변수에는 이전 메모리 주소가 그대로 남아있습니다. 이 해제된 주소를 다시 참조하려고 접근하면 튕김 사고가 나므로, `free()` 실행 즉시 `ptr = NULL;` 로 비워두는 습관이 매우 중요합니다.
',
  '<p>정적 배열은 프로그램 실행 전에 크기가 고정되지만, **동적 메모리 할당(Dynamic Memory Allocation)**을 이용하면 프로그램 실행 중에 필요한 만큼 <strong>힙(Heap)</strong> 메모리 공간을 원하는 크기로 할당받을 수 있습니다.</p>
<hr>
<h2>1. 동적 메모리 할당 4대 함수 (<code>&lt;stdlib.h&gt;</code>)</h2>
<ul>
<li><strong><code>malloc(byte_size)</code></strong>: 지정한 바이트 수만큼 힙 메모리를 할당 (초기화 안 됨).</li>
<li><strong><code>calloc(num, size)</code></strong>: 지정한 크기의 메모리를 할당하고 <strong>모든 비트를 0으로 자동 초기화</strong>.</li>
<li><strong><code>realloc(ptr, new_size)</code></strong>: 이미 할당된 메모리의 크기를 확장하거나 축소.</li>
<li><strong><code>free(ptr)</code></strong>: 할당받아 사용이 끝난 메모리를 <strong>힙 공간에 반납해 해제</strong>.</li>
</ul>
<hr>
<h2>2. <code>malloc</code> 과 <code>free</code> 사용 표준 코드</h2>
<pre><code class="language-c">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main(void) {
    int size = 5;
    // 1. int 5개 크기(20 Bytes) 동적 할당
    int *arr = (int *)malloc(sizeof(int) * size);

    if (arr == NULL) { // 메모리 할당 실패 검사
        printf(&quot;메모리 할당 실패!\n&quot;);
        return 1;
    }

    // 2. 메모리 사용
    for (int i = 0; i &lt; size; i++) {
        arr[i] = (i + 1) * 10;
        printf(&quot;%d &quot;, arr[i]);
    }
    printf(&quot;\n&quot;);

    // 3. 반드시 메모리 해제!
    free(arr);
    arr = NULL; // 가리키던 포인터 초기화 (Dangling Pointer 방지)
    return 0;
}
</code></pre>
<hr>
<h2>3. 메모리 누수 (Memory Leak) 주의사항</h2>
<p><code>malloc()</code>으로 할당받은 주소를 <code>free()</code>로 해제하지 않고 프로그램을 계속 돌리면, 사용하지 않는 힙 메모리가 계속 쌓여 컴퓨터 메모리가 부족해지는 <strong>메모리 누수(Memory Leak)</strong> 현상이 발생합니다.</p>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 허공을 가리키는 포인터(Dangling Pointer)란 무엇인가요?</strong>
A. <code>free(ptr)</code>로 메모리를 해제한 후에도 <code>ptr</code> 변수에는 이전 메모리 주소가 그대로 남아있습니다. 이 해제된 주소를 다시 참조하려고 접근하면 튕김 사고가 나므로, <code>free()</code> 실행 즉시 <code>ptr = NULL;</code> 로 비워두는 습관이 매우 중요합니다.</p>
',
  'published',
  'C 언어 동적 메모리 할당 - malloc, free, free 누수 방지 및 단일 연결 리스트',
  '실행 중 메모리 크기를 자유롭게 할당받는 malloc, calloc, realloc과 사용 후 해제하는 free의 중요성, 그리고 단일 연결 리스트 구현을 체계적으로 다룹니다.',
  17,
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
