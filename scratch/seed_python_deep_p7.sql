-- Full Python Stdlib Deep Lessons Part 7

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch25-python-unit-testing-pytest-and-mock',
  '파이썬 단위 테스트와 TDD: unittest, pytest 및 mock 객체 활용',
  'pytest와 가짜 객체를 만드는 mock 기법을 학습합니다.',
  '단위 테스트(Unit Testing) 및 pytest 프레임워크를 학습합니다.',
  '<p>단위 테스트(Unit Testing) 및 pytest 프레임워크를 학습합니다.</p>
',
  'published',
  '파이썬 테스트 코드 - pytest 사용법, unittest, fixture, mock 가짜 객체',
  '단위 테스트(Unit Test), pytest 프레임워크, mock 객체 활용법을 배웁니다.',
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
  'Scikit-learn을 이용하여 회귀 및 분류 모델링 기법을 배웁니다.',
  '머신러닝(Machine Learning)과 대표 프레임워크 Scikit-learn을 다룹니다.',
  '<p>머신러닝(Machine Learning)과 대표 프레임워크 Scikit-learn을 다룹니다.</p>
',
  'published',
  '파이썬 머신러닝 - Scikit-learn, 선형 회귀, 결정 트리, Dataset 분할 & 평가',
  'Scikit-learn, 지도학습, train_test_split, 회귀 및 결정 트리 분류를 배웁니다.',
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
  'PyTorch 프레임워크, Tensor 및 역전파 메커니즘을 배웁니다.',
  'PyTorch 기반 딥러닝(Deep Learning)을 배웁니다.',
  '<p>PyTorch 기반 딥러닝(Deep Learning)을 배웁니다.</p>
',
  'published',
  '파이썬 딥러닝 - PyTorch 텐서, Autograd 자동 미분, Linear 신경망 & Loss',
  'PyTorch, Tensor 자료구조, Autograd 자동 미분 역전파를 다룹니다.',
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
  'PySpark와 Spark DataFrame을 익힙니다.',
  'PySpark 빅데이터 파이프라인을 다룹니다.',
  '<p>PySpark 빅데이터 파이프라인을 다룹니다.</p>
',
  'published',
  '파이썬 빅데이터 - PySpark, Apache Spark 클러스터, RDD vs Spark DataFrame',
  'PySpark, RDD, Spark DataFrame 분산 연산 및 빅데이터 파이프라인 구축을 다룹니다.',
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
