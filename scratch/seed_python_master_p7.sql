-- Full Python Master Lessons Part 7

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch25-python-unit-testing-pytest-and-mock',
  '파이썬 단위 테스트와 TDD: unittest, pytest 및 mock 객체 활용',
  '프로그램 결함을 예방하는 단위 테스트(Unit Testing) 작성법과 파이썬 대표 테스트 프레임워크 pytest, 가짜 객체를 만드는 mock 기법을 학습합니다.',
  '소프트웨어의 버그를 미리 방지하고 안전한 리팩토링을 보장하는 **단위 테스트(Unit Testing)** 및 **`pytest` 프레임워크**를 학습합니다.',
  '<p>소프트웨어의 버그를 미리 방지하고 안전한 리팩토링을 보장하는 <strong>단위 테스트(Unit Testing)</strong> 및 <strong><code>pytest</code> 프레임워크</strong>를 학습합니다.</p>
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
  '데이터로부터 패턴을 스스로 학습하여 미래 결과를 예측하는 **인공지능 머신러닝(Machine Learning)**과 대표 프레임워크 **Scikit-learn**을 다룹니다.',
  '<p>데이터로부터 패턴을 스스로 학습하여 미래 결과를 예측하는 **인공지능 머신러닝(Machine Learning)**과 대표 프레임워크 <strong>Scikit-learn</strong>을 다룹니다.</p>
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
  '인간 뇌의 신경망 구조를 본뜬 인공신경망(ANN)으로 대용량 복잡 데이터(이미지, 음성, 자연어)를 학습하는 **PyTorch 기반 딥러닝(Deep Learning)**을 배웁니다.',
  '<p>인간 뇌의 신경망 구조를 본뜬 인공신경망(ANN)으로 대용량 복잡 데이터(이미지, 음성, 자연어)를 학습하는 **PyTorch 기반 딥러닝(Deep Learning)**을 배웁니다.</p>
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
  '단일 컴퓨터의 메모리 한계를 넘어서는 수백 GB~수 TB 대용량 빅데이터를 분산 서버 클러스터에서 초고속으로 처리하는 **PySpark 빅데이터 파이프라인**을 다룹니다.',
  '<p>단일 컴퓨터의 메모리 한계를 넘어서는 수백 GB~수 TB 대용량 빅데이터를 분산 서버 클러스터에서 초고속으로 처리하는 <strong>PySpark 빅데이터 파이프라인</strong>을 다룹니다.</p>
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
