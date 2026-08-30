-- Full Python Master Lessons Part 12

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

- **Screen()**: 거북이가 그림을 그리는 캔버스 윈도우 스크린 창을 생성하고 관리하는 객체입니다.
- **Turtle("turtle")**: 2D 좌표계 상에서 이동하며 선을 그리는 거북이 커서 객체입니다.
- **`colormode(255)`**: R, G, B 색상 값을 0~255 범위의 정수로 표현하여 다채로운 컬러를 조합하는 그래픽 모드입니다.

---

## 2. 터틀 2D 다각형 및 RGB 무작위 패턴 드로잉 코드

```python
from turtle import Screen, Turtle
import random

def draw_geometry_art():
    scr = Screen()
    scr.setup(600, 600)
    scr.colormode(255)
    
    t = Turtle("turtle")
    t.speed(0)
    
    for i in range(36):
        r = random.randint(0, 255)
        g = random.randint(0, 255)
        b = random.randint(0, 255)
        t.pencolor((r, g, b))
        for _ in range(4):
            t.forward(100)
            t.left(90)
        t.left(10)
        
    print("터틀 기하학 문양 완성")
```
',
  '<p>파이썬 표준 그래픽스 모듈인 **터틀(Turtle)**을 활용하여 2D 캔버스 상에 정삼각형, 다각형 및 무작위 RGB 컬러 기하학 문양을 그리는 그래픽 연산을 학습합니다.</p>
<hr>
<h2>1. 터틀 그래픽스 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Screen()</strong>: 거북이가 그림을 그리는 캔버스 윈도우 스크린 창을 생성하고 관리하는 객체입니다.</li>
<li><strong>Turtle(&quot;turtle&quot;)</strong>: 2D 좌표계 상에서 이동하며 선을 그리는 거북이 커서 객체입니다.</li>
<li><strong><code>colormode(255)</code></strong>: R, G, B 색상 값을 0~255 범위의 정수로 표현하여 다채로운 컬러를 조합하는 그래픽 모드입니다.</li>
</ul>
<hr>
<h2>2. 터틀 2D 다각형 및 RGB 무작위 패턴 드로잉 코드</h2>
<pre><code class="language-python">from turtle import Screen, Turtle
import random

def draw_geometry_art():
    scr = Screen()
    scr.setup(600, 600)
    scr.colormode(255)
    
    t = Turtle(&quot;turtle&quot;)
    t.speed(0)
    
    for i in range(36):
        r = random.randint(0, 255)
        g = random.randint(0, 255)
        b = random.randint(0, 255)
        t.pencolor((r, g, b))
        for _ in range(4):
            t.forward(100)
            t.left(90)
        t.left(10)
        
    print(&quot;터틀 기하학 문양 완성&quot;)
</code></pre>
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

- **3D Spatial Matrix**: `P[depth][height][width]` 형태의 3차원 공간 배열입니다.
- **Top View Projection**: 3차원 입체 공간을 위에서 내려다보았을 때 각 $(j, k)$ 위치에서 관측되는 큐브의 존재 여부를 2D 평면 배열로 추출하는 연산입니다.
- **`assert` (단언문)**: 프로그램 실행 전제 조건이 참인지 검증하고 에러를 사전에 차단하는 디버깅 구문입니다.

---

## 2. Top View 추출 및 큐브 카운팅 실전 알고리즘 소스

```python
def topView(P):
    assert len(P) == len(P[0]) == len(P[0][0]), "3차원 정방형 매트릭스여야 합니다."
    n = len(P)
    V = [[0] * n for _ in range(n)]
    
    for j in range(n):
        for k in range(n):
            for i in range(n):
                if P[i][j][k] == 1:
                    V[j][k] = 1
                    break
    return V

P_3d = [
    [[1, 0], [0, 1]],
    [[0, 0], [1, 0]]
]

v_top = topView(P_3d)
print("=== [3D 매트릭스 Top View 투영 결과] ===")
for row in v_top:
    print(row)
```
',
  '<p>3차원 입체 공간 상의 큐브 배치를 윗면(Top), 정면(Front), 우측면(Right) 2차원 평면 뷰로 투영 변환하고 <strong>큐브 개수를 정확하게 산출하는 3D 매트릭스 알고리즘</strong>을 학습합니다.</p>
<hr>
<h2>1. 3D 매트릭스 알고리즘 용어 사전 (Glossary)</h2>
<ul>
<li><strong>3D Spatial Matrix</strong>: <code>P[depth][height][width]</code> 형태의 3차원 공간 배열입니다.</li>
<li><strong>Top View Projection</strong>: 3차원 입체 공간을 위에서 내려다보았을 때 각 $(j, k)$ 위치에서 관측되는 큐브의 존재 여부를 2D 평면 배열로 추출하는 연산입니다.</li>
<li><strong><code>assert</code> (단언문)</strong>: 프로그램 실행 전제 조건이 참인지 검증하고 에러를 사전에 차단하는 디버깅 구문입니다.</li>
</ul>
<hr>
<h2>2. Top View 추출 및 큐브 카운팅 실전 알고리즘 소스</h2>
<pre><code class="language-python">def topView(P):
    assert len(P) == len(P[0]) == len(P[0][0]), &quot;3차원 정방형 매트릭스여야 합니다.&quot;
    n = len(P)
    V = [[0] * n for _ in range(n)]
    
    for j in range(n):
        for k in range(n):
            for i in range(n):
                if P[i][j][k] == 1:
                    V[j][k] = 1
                    break
    return V

P_3d = [
    [[1, 0], [0, 1]],
    [[0, 0], [1, 0]]
]

v_top = topView(P_3d)
print(&quot;=== [3D 매트릭스 Top View 투영 결과] ===&quot;)
for row in v_top:
    print(row)
</code></pre>
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
