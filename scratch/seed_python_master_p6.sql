-- Full Python Master Lessons Part 6

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch21-python-data-analysis-numpy-pandas',
  '파이썬 데이터 분석 입문: NumPy 배열 연산과 Pandas 데이터프레임 처리',
  '파이썬 데이터 과학의 기반이 되는 NumPy의 벡터화 연산과 Pandas DataFrame을 활용한 대용량 데이터 전처리 및 통계 분석 기술을 다룹니다.',
  '파이썬 데이터 과학(Data Science) 및 머신러닝의 핵심 기반이 되는 **NumPy 배열 연산**과 **Pandas 데이터프레임(DataFrame)** 전처리 기술을 다룹니다.

---

## 1. 데이터 분석 핵심 전문 용어 사전 (Glossary)

- **NumPy (Numerical Python)**: C 언어로 구현되어 다차원 배열(`ndarray`)의 고속 수치 벡터 연산을 지원하는 파이썬 핵심 패키지입니다.
- **Pandas**: 행(Row)과 열(Column)을 가진 2차원 표 형태의 `DataFrame` 자료구조를 바탕으로 데이터 정제, 필터링, 결합을 담당하는 데이터 분석 모듈입니다.
- **Vectorization (벡터화 연산)**: 파이썬 파이썬 루프문 없이 C 언어 레벨에서 배열 전체 요소를 한 번에 고속 연산 처리하는 기술입니다.
- **NaN (Not a Number)**: 데이터셋 내에 비어있는 결측치(Missing Value)를 의미합니다. (`pandas.dropna()`, `pandas.fillna()`로 정제)

---

## 2. NumPy & Pandas 실전 데이터 분석 코드

```python
import numpy as np
import pandas as pd

# 1. NumPy N차원 배열 생성 및 벡터화 연산
arr = np.array([10, 20, 30, 40, 50])
print(f"NumPy 배열 평균: {arr.mean()}, 표준편차: {arr.std():.2f}")

# 2. Pandas DataFrame 데이터셋 구축 및 결측치 채우기
data = {
    "name": ["홍길동", "이순신", "강감찬", "유관순"],
    "department": ["IT", "Sales", "IT", "HR"],
    "salary": [5500, 6200, None, 4800] # 결측치 포함
}

df = pd.DataFrame(data)

# 결측치를 평균 급여로 채우기 (fillna)
avg_salary = df["salary"].mean()
df["salary"] = df["salary"].fillna(avg_salary)

# 부서별 평균 급여 그룹화 집계 (groupby)
dept_summary = df.groupby("department")["salary"].mean()
print("=== [부서별 평균 급여] ===")
print(dept_summary)
```
',
  '<p>파이썬 데이터 과학(Data Science) 및 머신러닝의 핵심 기반이 되는 <strong>NumPy 배열 연산</strong>과 <strong>Pandas 데이터프레임(DataFrame)</strong> 전처리 기술을 다룹니다.</p>
<hr>
<h2>1. 데이터 분석 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>NumPy (Numerical Python)</strong>: C 언어로 구현되어 다차원 배열(<code>ndarray</code>)의 고속 수치 벡터 연산을 지원하는 파이썬 핵심 패키지입니다.</li>
<li><strong>Pandas</strong>: 행(Row)과 열(Column)을 가진 2차원 표 형태의 <code>DataFrame</code> 자료구조를 바탕으로 데이터 정제, 필터링, 결합을 담당하는 데이터 분석 모듈입니다.</li>
<li><strong>Vectorization (벡터화 연산)</strong>: 파이썬 파이썬 루프문 없이 C 언어 레벨에서 배열 전체 요소를 한 번에 고속 연산 처리하는 기술입니다.</li>
<li><strong>NaN (Not a Number)</strong>: 데이터셋 내에 비어있는 결측치(Missing Value)를 의미합니다. (<code>pandas.dropna()</code>, <code>pandas.fillna()</code>로 정제)</li>
</ul>
<hr>
<h2>2. NumPy &amp; Pandas 실전 데이터 분석 코드</h2>
<pre><code class="language-python">import numpy as np
import pandas as pd

# 1. NumPy N차원 배열 생성 및 벡터화 연산
arr = np.array([10, 20, 30, 40, 50])
print(f&quot;NumPy 배열 평균: {arr.mean()}, 표준편차: {arr.std():.2f}&quot;)

# 2. Pandas DataFrame 데이터셋 구축 및 결측치 채우기
data = {
    &quot;name&quot;: [&quot;홍길동&quot;, &quot;이순신&quot;, &quot;강감찬&quot;, &quot;유관순&quot;],
    &quot;department&quot;: [&quot;IT&quot;, &quot;Sales&quot;, &quot;IT&quot;, &quot;HR&quot;],
    &quot;salary&quot;: [5500, 6200, None, 4800] # 결측치 포함
}

df = pd.DataFrame(data)

# 결측치를 평균 급여로 채우기 (fillna)
avg_salary = df[&quot;salary&quot;].mean()
df[&quot;salary&quot;] = df[&quot;salary&quot;].fillna(avg_salary)

# 부서별 평균 급여 그룹화 집계 (groupby)
dept_summary = df.groupby(&quot;department&quot;)[&quot;salary&quot;].mean()
print(&quot;=== [부서별 평균 급여] ===&quot;)
print(dept_summary)
</code></pre>
',
  'published',
  '파이썬 데이터 분석 - NumPy N차원 배열, Pandas DataFrame & CSV 전처리',
  '파이썬 데이터 분석 핵심 패키지 NumPy의 N차원 배열(ndarray) 고속 벡터 연산, Pandas DataFrame 결측치 정제, 그룹화(groupby) 및 CSV 파일 읽기/쓰기를 배웁니다.',
  21,
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
  'ch22-python-web-framework-django-fastapi',
  '파이썬 웹 프레임워크 비교: Django 풀스택 vs FastAPI 비동기 REST API',
  '모든 부품이 탑재된 Django 프레임워크와 고성능 비동기 REST API를 구축하는 FastAPI의 아키텍처 비교 및 실전 서버 구축법을 배웁니다.',
  '파이썬 생태계를 대표하는 두 프레임워크인 **Django 풀스택 웹 프레임워크**와 고성능 비동기 **FastAPI**의 아키텍처를 비교하고 서버 구축을 다룹니다.

---

## 1. 파이썬 웹 프레임워크 용어 사전 (Glossary)

- **Django**: ORM, 인증 시스템, 관리자 페이지(Admin), 데이터베이스 마이그레이션이 포함된 "Batteries-Included" 파이썬 대표 풀스택 웹 프레임워크입니다.
- **FastAPI**: 파이썬 3.8+ 타입 힌팅과 `asyncio`를 기반으로 Uvicorn/ASGI 기술을 써서 Node.js/Go 언어 수준의 초고속 속도를 내는 현대적 REST API 프레임워크입니다.

---

## 2. FastAPI 비동기 REST API 서버 연동 예제

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="DAVHAVE FastAPI Server")

class Item(BaseModel):
    name: str
    price: float

@app.post("/items/")
async def create_item(item: Item):
    return {"item_name": item.name, "discounted_price": item.price * 0.9}
```
',
  '<p>파이썬 생태계를 대표하는 두 프레임워크인 <strong>Django 풀스택 웹 프레임워크</strong>와 고성능 비동기 <strong>FastAPI</strong>의 아키텍처를 비교하고 서버 구축을 다룹니다.</p>
<hr>
<h2>1. 파이썬 웹 프레임워크 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Django</strong>: ORM, 인증 시스템, 관리자 페이지(Admin), 데이터베이스 마이그레이션이 포함된 &quot;Batteries-Included&quot; 파이썬 대표 풀스택 웹 프레임워크입니다.</li>
<li><strong>FastAPI</strong>: 파이썬 3.8+ 타입 힌팅과 <code>asyncio</code>를 기반으로 Uvicorn/ASGI 기술을 써서 Node.js/Go 언어 수준의 초고속 속도를 내는 현대적 REST API 프레임워크입니다.</li>
</ul>
<hr>
<h2>2. FastAPI 비동기 REST API 서버 연동 예제</h2>
<pre><code class="language-python">from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title=&quot;DAVHAVE FastAPI Server&quot;)

class Item(BaseModel):
    name: str
    price: float

@app.post(&quot;/items/&quot;)
async def create_item(item: Item):
    return {&quot;item_name&quot;: item.name, &quot;discounted_price&quot;: item.price * 0.9}
</code></pre>
',
  'published',
  '파이썬 웹 프레임워크 - Django MVT 아키텍처 vs FastAPI 비동기 REST API 구축',
  '파이썬 대표 웹 프레임워크 Django(MVT, ORM, Admin)와 현대적 FastAPI(async/await, Pydantic, OpenAPI Swagger)의 구조적 차이와 REST API 구축법을 배웁니다.',
  22,
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
  'ch23-python-orm-sqlalchemy-and-database',
  '파이썬 ORM 데이터베이스 연동: SQLAlchemy와 SQLModel 완전 가이드',
  '파이썬 객체와 관계형 데이터베이스(RDBMS)를 직접 매핑해 주는 SQLAlchemy ORM 및 SQLModel 기반 데이터베이스 트랜잭션 관리 기법을 배웁니다.',
  'SQL 쿼리문 작성 없이 파이썬 객체만으로 데이터베이스 데이터를 다루는 **ORM(Object-Relational Mapping) 기술인 SQLAlchemy**와 **SQLModel**을 다룹니다.',
  '<p>SQL 쿼리문 작성 없이 파이썬 객체만으로 데이터베이스 데이터를 다루는 <strong>ORM(Object-Relational Mapping) 기술인 SQLAlchemy</strong>와 <strong>SQLModel</strong>을 다룹니다.</p>
',
  'published',
  '파이썬 ORM - SQLAlchemy 2.0, SQLModel, PostgreSQL/MySQL 연동 & Alembic',
  '파이썬 ORM(Object-Relational Mapping) 대표 도구 SQLAlchemy 2.0 모델링, Session 데이터베이스 CRUD 및 Alembic 데이터베이스 마이그레이션을 다룹니다.',
  23,
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
  'ch24-python-web-automation-selenium-playwright',
  '파이썬 웹 자동화 및 동적 렌더링 스크래핑: Selenium과 Playwright',
  '자바스크립트로 동작하는 동적 웹 사이트를 실제 브라우저 엔진(Headless Browser)으로 자동화하고 데이터를 크롤링하는 Selenium과 Playwright를 학습합니다.',
  '자바스크립트(React, Vue)로 렌더링되는 동적 웹 페이지를 실제 웹 브라우저 엔진으로 제어하는 **웹 자동화 도구인 Selenium과 Playwright**를 배웁니다.',
  '<p>자바스크립트(React, Vue)로 렌더링되는 동적 웹 페이지를 실제 웹 브라우저 엔진으로 제어하는 <strong>웹 자동화 도구인 Selenium과 Playwright</strong>를 배웁니다.</p>
',
  'published',
  '파이썬 웹 자동화 - Selenium WebDriver vs Playwright 비동기 크롤링',
  '자바스크립트 싱글 페이지 앱(SPA) 동적 크롤링을 위한 Selenium WebDriver와 차세대 고속 비동기 브라우저 자동화 Playwright 활용법을 배웁니다.',
  24,
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
