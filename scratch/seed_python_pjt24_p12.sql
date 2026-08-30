-- Full Python pjt24 Lessons Part 12

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch45-python-practical-turtle-graphics-drawing',
  '파이썬 터틀(Turtle) 그래픽스 실전 2D 도형 및 랜덤 기하학 패턴 드로잉',
  '파이썬 표준 그래픽 모듈 turtle을 활용하여 스크린 상에 2D 다각형과 무작위 RGB 기하학 패턴 문양을 그리는 실전 2D 그래픽 프로그래밍을 다룹니다.',
  '파이썬 표준 그래픽스 모듈인 **터틀(Turtle)**을 활용하여 2D 캔버스 상에 정삼각형, 다각형 및 무작위 RGB 컬러 기하학 문양을 그리는 그래픽 연산을 학습합니다.

---

## 1. 터틀 그래픽스 용어 사전 (Glossary)

- **Screen()**: 거북이가 그림을 그리는 캔버스 윈도우 스크린 창을 생성하고 관리하는 객체입니다. (`scr.setup(width, height)`)
- **Turtle("turtle")**: 2D 좌표계 상에서 이동하며 선을 그리는 거북이 커서 객체입니다.
- **`forward(distance)` / `left(angle)`**: 현재 거북이가 바라보는 방향으로 지정 거리만큼 전진하거나, 각도만큼 좌회전하는 이동 메소드입니다.
- **`colormode(255)`**: R, G, B 색상 값을 0~255 범위의 정수로 표현하여 다채로운 컬러를 조합하는 그래픽 모드입니다.

---

## 2. 터틀 2D 다각형 및 RGB 무작위 패턴 드로잉 코드

```python
# 주: 터틀 모듈은 GUI 환경에서 실행해야 창이 띄워집니다.
from turtle import Screen, Turtle
import random

def draw_geometry_art():
    # 1. 스크린 및 거북이 설정
    scr = Screen()
    scr.setup(600, 600)
    scr.colormode(255) # 255 RGB 모드
    
    t = Turtle("turtle")
    t.speed(0) # 가장 빠른 속도
    
    colors = ["brown", "orange", "red", "blue", "pink", "yellow", "purple"]
    
    # 2. 루프를 통한 360도 회전 다각형 아트 드로잉
    for i in range(36):
        # 무작위 RGB 색상 지정
        r = random.randint(0, 255)
        g = random.randint(0, 255)
        b = random.randint(0, 255)
        t.pencolor((r, g, b))
        
        # 사각형 그리기
        for _ in range(4):
            t.forward(100)
            t.left(90)
        
        t.left(10) # 10도 회전
        
    print("터틀 기하학 문양 완성")

# draw_geometry_art()
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. n각형(정n각형)을 그리기 위한 회전 각도 공식은 무엇인가요?**
A. 한 바퀴의 총 회전 각도는 $360^circ$이므로, 정n각형을 그릴 때는 변을 하나 그릴 때마다 **`360 / n` 도만큼 좌회전(`t.left(360/n)`)**하도록 반복문을 구성하면 됩니다.
',
  '<p>파이썬 표준 그래픽스 모듈인 **터틀(Turtle)**을 활용하여 2D 캔버스 상에 정삼각형, 다각형 및 무작위 RGB 컬러 기하학 문양을 그리는 그래픽 연산을 학습합니다.</p>
<hr>
<h2>1. 터틀 그래픽스 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Screen()</strong>: 거북이가 그림을 그리는 캔버스 윈도우 스크린 창을 생성하고 관리하는 객체입니다. (<code>scr.setup(width, height)</code>)</li>
<li><strong>Turtle(&quot;turtle&quot;)</strong>: 2D 좌표계 상에서 이동하며 선을 그리는 거북이 커서 객체입니다.</li>
<li><strong><code>forward(distance)</code> / <code>left(angle)</code></strong>: 현재 거북이가 바라보는 방향으로 지정 거리만큼 전진하거나, 각도만큼 좌회전하는 이동 메소드입니다.</li>
<li><strong><code>colormode(255)</code></strong>: R, G, B 색상 값을 0~255 범위의 정수로 표현하여 다채로운 컬러를 조합하는 그래픽 모드입니다.</li>
</ul>
<hr>
<h2>2. 터틀 2D 다각형 및 RGB 무작위 패턴 드로잉 코드</h2>
<pre><code class="language-python"># 주: 터틀 모듈은 GUI 환경에서 실행해야 창이 띄워집니다.
from turtle import Screen, Turtle
import random

def draw_geometry_art():
    # 1. 스크린 및 거북이 설정
    scr = Screen()
    scr.setup(600, 600)
    scr.colormode(255) # 255 RGB 모드
    
    t = Turtle(&quot;turtle&quot;)
    t.speed(0) # 가장 빠른 속도
    
    colors = [&quot;brown&quot;, &quot;orange&quot;, &quot;red&quot;, &quot;blue&quot;, &quot;pink&quot;, &quot;yellow&quot;, &quot;purple&quot;]
    
    # 2. 루프를 통한 360도 회전 다각형 아트 드로잉
    for i in range(36):
        # 무작위 RGB 색상 지정
        r = random.randint(0, 255)
        g = random.randint(0, 255)
        b = random.randint(0, 255)
        t.pencolor((r, g, b))
        
        # 사각형 그리기
        for _ in range(4):
            t.forward(100)
            t.left(90)
        
        t.left(10) # 10도 회전
        
    print(&quot;터틀 기하학 문양 완성&quot;)

# draw_geometry_art()
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. n각형(정n각형)을 그리기 위한 회전 각도 공식은 무엇인가요?</strong>
A. 한 바퀴의 총 회전 각도는 $360^circ$이므로, 정n각형을 그릴 때는 변을 하나 그릴 때마다 **<code>360 / n</code> 도만큼 좌회전(<code>t.left(360/n)</code>)**하도록 반복문을 구성하면 됩니다.</p>
',
  'published',
  '파이썬 터틀 그래픽스 - Screen, Turtle, forward, left, colormode(255) & 다각형',
  '파이썬 내장 그래픽 모듈 turtle, Screen 객체 생성, Turtle 인스턴스, forward/left 이동, 반복문 기반 정삼각형/다각형 드로잉, colormode(255) RGB 난수 기하학 문양을 배웁니다.',
  45,
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
  'python',
  'ch46-python-practical-3d-matrix-cube-view-algorithm',
  '파이썬 3D 입체 매트릭스 뷰 알고리즘: Top/Front/Right 조망 기반 큐브 카운팅',
  '3차원 입체 공간 상의 큐브 배치를 윗면, 정면, 우측면 2D 투영 뷰로 상호 변환하고, 조건 단언문(assert)을 적용하여 큐브 개수를 도출하는 고급 알고리즘을 다룹니다.',
  '3차원 입체 공간 상의 큐브 배치를 윗면(Top), 정면(Front), 우측면(Right) 2차원 평면 뷰로 투영 변환하고 **큐브 개수를 정확하게 산출하는 3D 매트릭스 알고리즘**을 학습합니다.

---

## 1. 3D 매트릭스 알고리즘 용어 사전 (Glossary)

- **3D Spatial Matrix**: `P[depth][height][width]` 형태의 3차원 공간 배열로, 큐브의 존재 여부(`1` 또는 `0`)를 표현하는 데이터 구조입니다.
- **Top View Projection**: 3차원 입체 공간을 위에서 내려다보았을 때 각 $(j, k)$ 위치에서 관측되는 큐브의 존재 여부를 2D 평면 배열로 추출하는 연산입니다.
- **`assert` (단언문)**: 프로그램 실행 전제 조건(예: `len(P) == len(P[0]) == len(P[0][0])`)이 정방형 3D 구조를 만족하는지 검증하고, 참이 아니면 에러를 일으키는 디버깅 구문입니다.

---

## 2. Top View 추출 및 큐브 카운팅 실전 알고리즘 소스

```python
# 1. 3차원 입체 공간 P로부터 윗면 조망(Top View)을 추출하는 함수
def topView(P):
    # 정방형 3D 매트릭스 차원 검증
    assert len(P) == len(P[0]) == len(P[0][0]), "3차원 정방형 매트릭스여야 합니다."
    n = len(P)
    
    # n x n 크기의 2D 뷰 배열 초기화
    V = [[0] * n for _ in range(n)]
    
    # 공간 순회: 높이(z) 축을 따라 큐브가 하나라도 있으면 Top View에 1 표시
    for j in range(n):
        for k in range(n):
            for i in range(n):
                if P[i][j][k] == 1:
                    V[j][k] = 1
                    break
    return V

# 2. 3D 공간 큐브 샘플 테스트
P_3d = [
    [[1, 0], [0, 1]], # layer 0
    [[0, 0], [1, 0]]  # layer 1
]

v_top = topView(P_3d)
print("=== [3D 매트릭스 Top View 투영 결과] ===")
for row in v_top:
    print(row)
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 파이썬에서 `assert` 단언문은 언제 활용하면 좋은가요?**
A. 알고리즘 함수 진입 시 입력 데이터가 반드시 갖추어야 하는 **사전 조건(Pre-condition)**이나 데이터 차원의 크기가 올바른지 검증하여, 잘못된 데이터 입력으로 발생하는 연쇄 버그를 사전에 방지할 때 사용합니다.
',
  '<p>3차원 입체 공간 상의 큐브 배치를 윗면(Top), 정면(Front), 우측면(Right) 2차원 평면 뷰로 투영 변환하고 <strong>큐브 개수를 정확하게 산출하는 3D 매트릭스 알고리즘</strong>을 학습합니다.</p>
<hr>
<h2>1. 3D 매트릭스 알고리즘 용어 사전 (Glossary)</h2>
<ul>
<li><strong>3D Spatial Matrix</strong>: <code>P[depth][height][width]</code> 형태의 3차원 공간 배열로, 큐브의 존재 여부(<code>1</code> 또는 <code>0</code>)를 표현하는 데이터 구조입니다.</li>
<li><strong>Top View Projection</strong>: 3차원 입체 공간을 위에서 내려다보았을 때 각 $(j, k)$ 위치에서 관측되는 큐브의 존재 여부를 2D 평면 배열로 추출하는 연산입니다.</li>
<li><strong><code>assert</code> (단언문)</strong>: 프로그램 실행 전제 조건(예: <code>len(P) == len(P[0]) == len(P[0][0])</code>)이 정방형 3D 구조를 만족하는지 검증하고, 참이 아니면 에러를 일으키는 디버깅 구문입니다.</li>
</ul>
<hr>
<h2>2. Top View 추출 및 큐브 카운팅 실전 알고리즘 소스</h2>
<pre><code class="language-python"># 1. 3차원 입체 공간 P로부터 윗면 조망(Top View)을 추출하는 함수
def topView(P):
    # 정방형 3D 매트릭스 차원 검증
    assert len(P) == len(P[0]) == len(P[0][0]), &quot;3차원 정방형 매트릭스여야 합니다.&quot;
    n = len(P)
    
    # n x n 크기의 2D 뷰 배열 초기화
    V = [[0] * n for _ in range(n)]
    
    # 공간 순회: 높이(z) 축을 따라 큐브가 하나라도 있으면 Top View에 1 표시
    for j in range(n):
        for k in range(n):
            for i in range(n):
                if P[i][j][k] == 1:
                    V[j][k] = 1
                    break
    return V

# 2. 3D 공간 큐브 샘플 테스트
P_3d = [
    [[1, 0], [0, 1]], # layer 0
    [[0, 0], [1, 0]]  # layer 1
]

v_top = topView(P_3d)
print(&quot;=== [3D 매트릭스 Top View 투영 결과] ===&quot;)
for row in v_top:
    print(row)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파이썬에서 <code>assert</code> 단언문은 언제 활용하면 좋은가요?</strong>
A. 알고리즘 함수 진입 시 입력 데이터가 반드시 갖추어야 하는 **사전 조건(Pre-condition)**이나 데이터 차원의 크기가 올바른지 검증하여, 잘못된 데이터 입력으로 발생하는 연쇄 버그를 사전에 방지할 때 사용합니다.</p>
',
  'published',
  '파이썬 3D 매트릭스 알고리즘 - topView, assert 단언문, 3차원 투영 뷰 & 큐브 카운팅',
  '3차원 공간 그리드 매트릭스 알고리즘, assert 조건 단언문, 윗면(Top), 정면(Front), 우측면(Right) 2D 투영 뷰 조망 함수 및 3D 큐브 개수(countCubes) 카운팅 알고리즘을 배웁니다.',
  46,
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
