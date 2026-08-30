-- Full Python SEO Extended Lessons Part 7

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch25-python-unit-testing-pytest-and-mock',
  '파이썬 단위 테스트와 TDD: unittest, pytest 및 mock 객체 활용',
  '프로그램 결함을 예방하는 단위 테스트(Unit Testing) 작성법과 파이썬 대표 테스트 프레임워크 pytest, 가짜 객체를 만드는 mock 기법을 학습합니다.',
  '소프트웨어의 버그를 미리 방지하고 안전한 리팩토링을 보장하는 **단위 테스트(Unit Testing)** 및 **`pytest` 프레임워크**를 학습합니다.

---

## 1. 테스트 핵심 용어 사전 (Glossary)

- **Unit Test (단위 테스트)**: 애플리케이션의 최소 단위(함수, 메소드)가 의도한 대로 정확히 동작하는지 검증하는 테스트 코드입니다.
- **pytest**: 파이썬에서 가장 간결한 `assert` 구문과 강력한 `fixture` 기능을 제공하는 대표적 테스트 프레임워크입니다.
- **Test Fixture**: 테스트를 실행하기 전 필요한 데이터베이스 세션이나 객체 상태를 미리 준비해 주는 세팅 도구입니다. (`@pytest.fixture`)
- **Mocking (가짜 객체)**: 외부 API 호출이나 DB 접속처럼 실제 테스트 실행이 어려운 외부 자원을 가짜 반응(Mock Object)으로 대체하는 기법입니다.

---

## 2. pytest 및 Mocking 실전 테스트 코드

```python
import pytest
from unittest.mock import Mock

# 검증 대상 함수
def calculate_discount(price: float, rate: float) -> float:
    if price < 0 or rate < 0:
        raise ValueError("가격과 할인율은 음수가 될 수 없습니다.")
    return price * (1 - rate)

# 1. pytest 기본 테스트 케이스
def test_calculate_discount_success():
    assert calculate_discount(10000, 0.2) == 8000.0

def test_calculate_discount_invalid_value():
    with pytest.raises(ValueError):
        calculate_discount(-5000, 0.1)

# 2. Mock 객체를 이용한 외부 API 호출 테스트
def test_external_api_with_mock():
    mock_api = Mock()
    mock_api.get_user_name.return_value = "홍길동"

    # 가짜 객체 동작 검증
    assert mock_api.get_user_name(101) == "홍길동"
    mock_api.get_user_name.assert_called_once_with(101)
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. TDD(Test-Driven Development) 개발 방법론이란?**
A. 실제 구현 코드를 작성하기 전에 **실패하는 테스트 코드를 먼저 작성**하고, 이를 통과시키는 최소한의 코드를 구현한 뒤 리팩토링을 진행하는 고품질 소프트웨어 개발 절차입니다.
',
  '<p>소프트웨어의 버그를 미리 방지하고 안전한 리팩토링을 보장하는 <strong>단위 테스트(Unit Testing)</strong> 및 <strong><code>pytest</code> 프레임워크</strong>를 학습합니다.</p>
<hr>
<h2>1. 테스트 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Unit Test (단위 테스트)</strong>: 애플리케이션의 최소 단위(함수, 메소드)가 의도한 대로 정확히 동작하는지 검증하는 테스트 코드입니다.</li>
<li><strong>pytest</strong>: 파이썬에서 가장 간결한 <code>assert</code> 구문과 강력한 <code>fixture</code> 기능을 제공하는 대표적 테스트 프레임워크입니다.</li>
<li><strong>Test Fixture</strong>: 테스트를 실행하기 전 필요한 데이터베이스 세션이나 객체 상태를 미리 준비해 주는 세팅 도구입니다. (<code>@pytest.fixture</code>)</li>
<li><strong>Mocking (가짜 객체)</strong>: 외부 API 호출이나 DB 접속처럼 실제 테스트 실행이 어려운 외부 자원을 가짜 반응(Mock Object)으로 대체하는 기법입니다.</li>
</ul>
<hr>
<h2>2. pytest 및 Mocking 실전 테스트 코드</h2>
<pre><code class="language-python">import pytest
from unittest.mock import Mock

# 검증 대상 함수
def calculate_discount(price: float, rate: float) -&gt; float:
    if price &lt; 0 or rate &lt; 0:
        raise ValueError(&quot;가격과 할인율은 음수가 될 수 없습니다.&quot;)
    return price * (1 - rate)

# 1. pytest 기본 테스트 케이스
def test_calculate_discount_success():
    assert calculate_discount(10000, 0.2) == 8000.0

def test_calculate_discount_invalid_value():
    with pytest.raises(ValueError):
        calculate_discount(-5000, 0.1)

# 2. Mock 객체를 이용한 외부 API 호출 테스트
def test_external_api_with_mock():
    mock_api = Mock()
    mock_api.get_user_name.return_value = &quot;홍길동&quot;

    # 가짜 객체 동작 검증
    assert mock_api.get_user_name(101) == &quot;홍길동&quot;
    mock_api.get_user_name.assert_called_once_with(101)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. TDD(Test-Driven Development) 개발 방법론이란?</strong>
A. 실제 구현 코드를 작성하기 전에 <strong>실패하는 테스트 코드를 먼저 작성</strong>하고, 이를 통과시키는 최소한의 코드를 구현한 뒤 리팩토링을 진행하는 고품질 소프트웨어 개발 절차입니다.</p>
',
  'published',
  '파이썬 테스트 코드 - pytest 사용법, unittest, fixture, mock 가짜 객체',
  '소프트웨어 품질을 보장하는 단위 테스트(Unit Test), pytest 프레임워크, test fixture 생성, mock 객체(unittest.mock)를 활용한 외부 연동 테스트를 배웁니다.',
  25,
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
  'ch26-python-ai-machine-learning-scikit-learn',
  '파이썬 머신러닝 기초: Scikit-learn 지도학습과 분류/회귀 모델',
  '파이썬 인공지능 머신러닝의 표준 프레임워크인 Scikit-learn을 이용하여 데이터를 학습시키고 예측하는 회귀 및 분류 모델링 기법을 배웁니다.',
  '데이터로부터 패턴을 스스로 학습하여 미래 결과를 예측하는 **인공지능 머신러닝(Machine Learning)**과 대표 프레임워크 **Scikit-learn**을 다룹니다.

---

## 1. 머신러닝 핵심 용어 사전 (Glossary)

- **Supervised Learning (지도학습)**: 정답(Label)이 포함된 데이터셋을 통해 입력값과 정답 간의 관계를 학습하는 알고리즘입니다. (회귀 Regression, 분류 Classification)
- **Scikit-learn**: 파이썬의 대표적인 머신러닝 오픈소스 라이브러리로, 분류, 회귀, 클러스터링, 데이터 전처리 알고리즘을 체계적으로 제공합니다.
- **train_test_split**: 모델의 성능을 공정하게 평가하기 위해 전체 데이터를 학습용(Train Set)과 평가용(Test Set)으로 분할하는 함수입니다.
- **Overfitting (과적합)**: 모델이 학습 데이터에만 너무 과하게 적응되어, 새로운 실제 데이터가 들어왔을 때 예측 성능이 떨어지는 현상입니다.

---

## 2. Scikit-learn 머신러닝 분류 모델 구축 코드

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# 1. 붓꽃(Iris) 데이터셋 로드
iris = load_iris()
X, y = iris.data, iris.target

# 2. 학습용/테스트용 데이터 분할 (8:2)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. 결정 트리(Decision Tree) 머신러닝 모델 생성 및 학습
model = DecisionTreeClassifier(max_depth=3)
model.fit(X_train, y_train)

# 4. 테스트 데이터 예측 및 정확도 평가
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print(f"=== [Scikit-learn 머신러닝 모델 평가] ===")
print(f"붓꽃 품종 예측 정확도(Accuracy): {accuracy * 100:.2f}%")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 회귀(Regression)와 분류(Classification)의 차이는?**
A. **회귀**는 집값, 주가, 온도처럼 연속적인 숫자 수치를 예측하는 것이고, **분류**는 이메일 스팸 여부(Yes/No), 품종 종류(A/B/C)처럼 명확히 구분되는 범주형 클래스를 예측하는 것입니다.
',
  '<p>데이터로부터 패턴을 스스로 학습하여 미래 결과를 예측하는 **인공지능 머신러닝(Machine Learning)**과 대표 프레임워크 <strong>Scikit-learn</strong>을 다룹니다.</p>
<hr>
<h2>1. 머신러닝 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Supervised Learning (지도학습)</strong>: 정답(Label)이 포함된 데이터셋을 통해 입력값과 정답 간의 관계를 학습하는 알고리즘입니다. (회귀 Regression, 분류 Classification)</li>
<li><strong>Scikit-learn</strong>: 파이썬의 대표적인 머신러닝 오픈소스 라이브러리로, 분류, 회귀, 클러스터링, 데이터 전처리 알고리즘을 체계적으로 제공합니다.</li>
<li><strong>train_test_split</strong>: 모델의 성능을 공정하게 평가하기 위해 전체 데이터를 학습용(Train Set)과 평가용(Test Set)으로 분할하는 함수입니다.</li>
<li><strong>Overfitting (과적합)</strong>: 모델이 학습 데이터에만 너무 과하게 적응되어, 새로운 실제 데이터가 들어왔을 때 예측 성능이 떨어지는 현상입니다.</li>
</ul>
<hr>
<h2>2. Scikit-learn 머신러닝 분류 모델 구축 코드</h2>
<pre><code class="language-python">from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# 1. 붓꽃(Iris) 데이터셋 로드
iris = load_iris()
X, y = iris.data, iris.target

# 2. 학습용/테스트용 데이터 분할 (8:2)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. 결정 트리(Decision Tree) 머신러닝 모델 생성 및 학습
model = DecisionTreeClassifier(max_depth=3)
model.fit(X_train, y_train)

# 4. 테스트 데이터 예측 및 정확도 평가
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print(f&quot;=== [Scikit-learn 머신러닝 모델 평가] ===&quot;)
print(f&quot;붓꽃 품종 예측 정확도(Accuracy): {accuracy * 100:.2f}%&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 회귀(Regression)와 분류(Classification)의 차이는?</strong>
A. <strong>회귀</strong>는 집값, 주가, 온도처럼 연속적인 숫자 수치를 예측하는 것이고, <strong>분류</strong>는 이메일 스팸 여부(Yes/No), 품종 종류(A/B/C)처럼 명확히 구분되는 범주형 클래스를 예측하는 것입니다.</p>
',
  'published',
  '파이썬 머신러닝 - Scikit-learn, 선형 회귀, 결정 트리, Dataset 분할 & 평가',
  '파이썬 머신러닝 핵심 패키지 Scikit-learn, 지도학습(Supervised Learning), train_test_split 데이터 분할, 선형 회귀(Linear Regression) 및 결정 트리 분류를 배웁니다.',
  26,
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
  'ch27-python-deep-learning-pytorch-basics',
  '파이썬 딥러닝 입문: PyTorch 텐서(Tensor)와 신경망(Neural Network) 구현',
  '현대 인공지능 AI의 핵심인 인공신경망 딥러닝을 구축하는 PyTorch 프레임워크, Tensor 자료구조 및 역전파(Backpropagation) 메커니즘을 배웁니다.',
  '인간 뇌의 신경망 구조를 본뜬 인공신경망(ANN)으로 대용량 복잡 데이터(이미지, 음성, 자연어)를 학습하는 **PyTorch 기반 딥러닝(Deep Learning)**을 배웁니다.

---

## 1. 딥러닝 핵심 용어 사전 (Glossary)

- **PyTorch (파이토치)**: Facebook(Meta) AI 연구소가 개발한 동적 계산 그래프(Dynamic Computational Graph) 기반의 전 세계 1위 파이썬 딥러닝 프레임워크입니다.
- **Tensor (텐서)**: 딥러닝 연산의 기본 단위로, GPU 메모리에 올려 초고속 매트릭스 연산이 가능한 다차원 배열 객체입니다.
- **Autograd**: 신경망 학습 과정에서 오차 역전파(Backpropagation)에 필요한 그래디언트(Gradient, 경사도)를 자동으로 미분 계산해 주는 엔진입니다.
- **Loss Function (손실 함수)**: 신경망의 예측값과 실제 정답 간의 오차 크기를 측정하는 함수입니다. (예: MSE, CrossEntropyLoss)

---

## 2. PyTorch 신경망(Neural Network) 모델 구현

```python
import torch
import torch.nn as nn
import torch.optim as optim

# 1. PyTorch 딥러닝 신경망 모델 클래스 정의
class SimpleNN(nn.Module):
    def __init__(self):
        super(SimpleNN, self).__init__()
        self.fc1 = nn.Linear(10, 5) # 입력 10개 -> 은닉층 5개
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(5, 1)  # 은닉층 5개 -> 출력 1개

    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out

# 2. 모델 및 옵티마이저 생성
model = SimpleNN()
criterion = nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=0.01)

# 3. 임의 입력 텐서 및 역전파 단계를 통한 1회 학습
dummy_input = torch.randn(2, 10) # 배치 크기 2
target = torch.randn(2, 1)

optimizer.zero_grad() # 그래디언트 초기화
output = model(dummy_input)
loss = criterion(output, target)
loss.backward() # 역전파 경사도 계산
optimizer.step() # 가중치 갱신

print(f"PyTorch 1회 학습 손실값(Loss): {loss.item():.4f}")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. PyTorch 텐서를 CPU에서 NVIDIA GPU(CUDA)로 옮기는 방법은?**
A. `device = torch.device("cuda" if torch.cuda.is_available() else "cpu")` 로 디바이스를 설정한 후, `tensor = tensor.to(device)` 및 `model = model.to(device)` 형태로 전달하면 GPU 파워를 활용할 수 있습니다.
',
  '<p>인간 뇌의 신경망 구조를 본뜬 인공신경망(ANN)으로 대용량 복잡 데이터(이미지, 음성, 자연어)를 학습하는 **PyTorch 기반 딥러닝(Deep Learning)**을 배웁니다.</p>
<hr>
<h2>1. 딥러닝 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>PyTorch (파이토치)</strong>: Facebook(Meta) AI 연구소가 개발한 동적 계산 그래프(Dynamic Computational Graph) 기반의 전 세계 1위 파이썬 딥러닝 프레임워크입니다.</li>
<li><strong>Tensor (텐서)</strong>: 딥러닝 연산의 기본 단위로, GPU 메모리에 올려 초고속 매트릭스 연산이 가능한 다차원 배열 객체입니다.</li>
<li><strong>Autograd</strong>: 신경망 학습 과정에서 오차 역전파(Backpropagation)에 필요한 그래디언트(Gradient, 경사도)를 자동으로 미분 계산해 주는 엔진입니다.</li>
<li><strong>Loss Function (손실 함수)</strong>: 신경망의 예측값과 실제 정답 간의 오차 크기를 측정하는 함수입니다. (예: MSE, CrossEntropyLoss)</li>
</ul>
<hr>
<h2>2. PyTorch 신경망(Neural Network) 모델 구현</h2>
<pre><code class="language-python">import torch
import torch.nn as nn
import torch.optim as optim

# 1. PyTorch 딥러닝 신경망 모델 클래스 정의
class SimpleNN(nn.Module):
    def __init__(self):
        super(SimpleNN, self).__init__()
        self.fc1 = nn.Linear(10, 5) # 입력 10개 -&gt; 은닉층 5개
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(5, 1)  # 은닉층 5개 -&gt; 출력 1개

    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out

# 2. 모델 및 옵티마이저 생성
model = SimpleNN()
criterion = nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=0.01)

# 3. 임의 입력 텐서 및 역전파 단계를 통한 1회 학습
dummy_input = torch.randn(2, 10) # 배치 크기 2
target = torch.randn(2, 1)

optimizer.zero_grad() # 그래디언트 초기화
output = model(dummy_input)
loss = criterion(output, target)
loss.backward() # 역전파 경사도 계산
optimizer.step() # 가중치 갱신

print(f&quot;PyTorch 1회 학습 손실값(Loss): {loss.item():.4f}&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. PyTorch 텐서를 CPU에서 NVIDIA GPU(CUDA)로 옮기는 방법은?</strong>
A. <code>device = torch.device(&quot;cuda&quot; if torch.cuda.is_available() else &quot;cpu&quot;)</code> 로 디바이스를 설정한 후, <code>tensor = tensor.to(device)</code> 및 <code>model = model.to(device)</code> 형태로 전달하면 GPU 파워를 활용할 수 있습니다.</p>
',
  'published',
  '파이썬 딥러닝 - PyTorch 텐서, Autograd 자동 미분, Linear 신경망 & Loss',
  '글로벌 1위 딥러닝 프레임워크 PyTorch(파이토치), Tensor 자료구조, Autograd 자동 미분 역전파(Backpropagation), nn.Module 신경망 구축 및 GPU 가속을 다웁니다.',
  27,
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
  'ch28-python-big-data-pyspark-and-parallel',
  '파이썬 분산 빅데이터 처리: PySpark와 RDD/DataFrame 대용량 분산 연산',
  '수백 GB~수 TB 단위의 대용량 빅데이터를 클러스터 상에서 병렬 분할 처리하는 Apache Spark의 파이썬 엔진 PySpark와 Spark DataFrame을 익힙니다.',
  '단일 컴퓨터의 메모리 한계를 넘어서는 수백 GB~수 TB 대용량 빅데이터를 분산 서버 클러스터에서 초고속으로 처리하는 **PySpark 빅데이터 파이프라인**을 다룹니다.

---

## 1. 빅데이터 처리 용어 사전 (Glossary)

- **Apache Spark**: 인메모리(In-Memory) 기반 분산 데이터 처리 엔진으로, 기존 MapReduce 대비 100배 이상 빠른 빅데이터 표준 시스템입니다.
- **PySpark**: Apache Spark를 파이썬 언어로 제어할 수 있도록 제공되는 공식 파이썬 API 모듈입니다.
- **RDD (Resilient Distributed Dataset)**: 클러스터의 여러 노드에 분산되어 병렬로 처리되는 장애 복구 가능한 불변 컬렉션 자료구조입니다.
- **Spark DataFrame**: RDD 상위에 구축된 최적화 구조로, SQL 쿼리 및 Pandas와 유사한 데이터프레임 파이프라인 연산을 지원합니다.

---

## 2. PySpark 세션 가동 및 분산 쿼리 실습

```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, avg

# 1. PySpark SparkSession 생성
spark = SparkSession.builder     .appName("DAVHAVE BigData Processing")     .getOrCreate()

# 2. 대용량 분산 DataFrame 데이터 생성
data = [
    ("HR", 4500), ("IT", 6000), ("IT", 7500),
    ("Sales", 5000), ("HR", 4800), ("Sales", 5200)
]
columns = ["Department", "Salary"]

df = spark.createDataFrame(data, schema=columns)

# 3. 분산 쿼리 및 그룹화 연산 (IT 부서 필터링 및 평균 급여)
result_df = df.filter(col("Department") != "HR")               .groupBy("Department")               .agg(avg("Salary").alias("Avg_Salary"))

print("=== [PySpark 분산 빅데이터 결과] ===")
result_df.show()

spark.stop() # SparkSession 종료
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. Pandas DataFrame과 PySpark DataFrame의 결정적 차이는?**
A. Pandas는 단일 컴퓨터의 RAM 메모리에 전체 데이터를 모두 올려서 단일 스레드로 연산하는 반면, PySpark는 수십~수백 대의 서버 클러스터 노드들에 **데이터를 조각내어 분산 병렬 연산**하므로 테라바이트급 빅데이터 처리가 가능합니다.
',
  '<p>단일 컴퓨터의 메모리 한계를 넘어서는 수백 GB~수 TB 대용량 빅데이터를 분산 서버 클러스터에서 초고속으로 처리하는 <strong>PySpark 빅데이터 파이프라인</strong>을 다룹니다.</p>
<hr>
<h2>1. 빅데이터 처리 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Apache Spark</strong>: 인메모리(In-Memory) 기반 분산 데이터 처리 엔진으로, 기존 MapReduce 대비 100배 이상 빠른 빅데이터 표준 시스템입니다.</li>
<li><strong>PySpark</strong>: Apache Spark를 파이썬 언어로 제어할 수 있도록 제공되는 공식 파이썬 API 모듈입니다.</li>
<li><strong>RDD (Resilient Distributed Dataset)</strong>: 클러스터의 여러 노드에 분산되어 병렬로 처리되는 장애 복구 가능한 불변 컬렉션 자료구조입니다.</li>
<li><strong>Spark DataFrame</strong>: RDD 상위에 구축된 최적화 구조로, SQL 쿼리 및 Pandas와 유사한 데이터프레임 파이프라인 연산을 지원합니다.</li>
</ul>
<hr>
<h2>2. PySpark 세션 가동 및 분산 쿼리 실습</h2>
<pre><code class="language-python">from pyspark.sql import SparkSession
from pyspark.sql.functions import col, avg

# 1. PySpark SparkSession 생성
spark = SparkSession.builder     .appName(&quot;DAVHAVE BigData Processing&quot;)     .getOrCreate()

# 2. 대용량 분산 DataFrame 데이터 생성
data = [
    (&quot;HR&quot;, 4500), (&quot;IT&quot;, 6000), (&quot;IT&quot;, 7500),
    (&quot;Sales&quot;, 5000), (&quot;HR&quot;, 4800), (&quot;Sales&quot;, 5200)
]
columns = [&quot;Department&quot;, &quot;Salary&quot;]

df = spark.createDataFrame(data, schema=columns)

# 3. 분산 쿼리 및 그룹화 연산 (IT 부서 필터링 및 평균 급여)
result_df = df.filter(col(&quot;Department&quot;) != &quot;HR&quot;)               .groupBy(&quot;Department&quot;)               .agg(avg(&quot;Salary&quot;).alias(&quot;Avg_Salary&quot;))

print(&quot;=== [PySpark 분산 빅데이터 결과] ===&quot;)
result_df.show()

spark.stop() # SparkSession 종료
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. Pandas DataFrame과 PySpark DataFrame의 결정적 차이는?</strong>
A. Pandas는 단일 컴퓨터의 RAM 메모리에 전체 데이터를 모두 올려서 단일 스레드로 연산하는 반면, PySpark는 수십~수백 대의 서버 클러스터 노드들에 <strong>데이터를 조각내어 분산 병렬 연산</strong>하므로 테라바이트급 빅데이터 처리가 가능합니다.</p>
',
  'published',
  '파이썬 빅데이터 - PySpark, Apache Spark 클러스터, RDD vs Spark DataFrame',
  '대용량 빅데이터 분산 처리 엔진 Apache Spark의 파이썬 API인 PySpark, RDD, Spark DataFrame 메모리 인메모리 연산 및 빅데이터 ETL 파이프라인 구축을 다룹니다.',
  28,
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
