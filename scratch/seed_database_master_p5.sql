-- Full Database Master Lessons Part 5

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'database',
  'ch17-transactions-acid-properties',
  '트랜잭션(Transaction) 기초: ACID 성질(원자성, 일관성, 격리성, 지속성)과 COMMIT/ROLLBACK',
  '데이터베이스의 일관성과 작업 완결성을 보장하는 핵심 단위인 트랜잭션(Transaction)의 ACID 4대 속성과 COMMIT/ROLLBACK의 구동 원리를 다룹니다.',
  '데이터베이스의 상태를 변화시키는 하나의 논리적인 작업 단위인 **트랜잭션(Transaction)**과 **ACID 4대 성질**을 학습합니다.',
  '<p>데이터베이스의 상태를 변화시키는 하나의 논리적인 작업 단위인 **트랜잭션(Transaction)**과 <strong>ACID 4대 성질</strong>을 학습합니다.</p>
',
  'published',
  '트랜잭션(Transaction) - ACID 성질 (Atomicity, Consistency, Isolation, Durability)',
  '트랜잭션(Transaction), ACID 4대 성질(원자성, 일관성, 격리성, 지속성), 성공 확정 COMMIT, 작업 취소 ROLLBACK을 배웁니다.',
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

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'database',
  'ch18-concurrency-control-locking-and-isolation-levels',
  '동시성 제어(Concurrency Control): 로킹(Locking), 교착상태(Deadlock) 및 ANSI 격리 수준(Isolation Levels)',
  '여러 트랜잭션이 동시 접근할 때 데이터 부정합을 방지하는 동시성 제어(Locking, 2PL)와 교착상태, 그리고 4단계 트랜잭션 격리 수준을 학습합니다.',
  '여러 트랜잭션이 동시에 데이터베이스에 접근할 때 상호 간섭으로 인한 문제점을 방지하는 **동시성 제어(Concurrency Control)**와 **트랜잭션 격리 수준**을 배웁니다.',
  '<p>여러 트랜잭션이 동시에 데이터베이스에 접근할 때 상호 간섭으로 인한 문제점을 방지하는 **동시성 제어(Concurrency Control)**와 <strong>트랜잭션 격리 수준</strong>을 배웁니다.</p>
',
  'published',
  '동시성 제어 - 로킹(Locking), Deadlock, 타임스탬프 & ANSI 트랜잭션 격리 수준',
  '동시성 제어, 공유/배타 잠금(Shared/Exclusive Lock), 2단계 로킹(2PL), 교착상태(Deadlock) 및 4가지 트랜잭션 격리 수준을 배웁니다.',
  18,
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
  'database',
  'ch19-database-application-development-and-security',
  'DB 기반 애플리케이션 개발: 파이썬 DB 바인딩(oracledb/sqlite3), PyQt5 GUI 연동 및 SQL Injection 방어',
  '파이썬(oracledb, sqlite3)과 데이터베이스 바인딩, 커서 버퍼 순회, 위치/이름 기반 바인드 변수 적용, PyQt5 GUI 데이터베이스 검색 앱 개발과 SQL Injection 방어법을 학습합니다.',
  '애플리케이션 프로그램과 데이터베이스를 직접 연결하는 **파이썬 DB 바인딩(oracledb, sqlite3)** 기술과 **PyQt5 기반 데스크톱 GUI 연동 앱**, 그리고 **SQL Injection 보안 방어**를 다룹니다.

---

## 1. DB 연동 핵심 전문 용어 사전 (Glossary)

- **DB Driver / Binding**: 파이썬 코드에서 데이터베이스 엔진과 TCP/IP 또는 소켓 통신을 주고받아 SQL을 전달하고 결과를 반환받는 클라이언트 모듈입니다. (`oracledb`, `sqlite3`, `psycopg2` 등)
- **Cursor (커서)**: SQL 실행 결과 생성된 튜플 결과셋(ResultSet)을 가리키는 버퍼 포인터 객체입니다. (`curs.fetchone()`, `curs.fetchall()`)
- **Bind Variables (바인드 변수)**: SQL 쿼리문에 변수값을 동적으로 대입할 때 위치 기반(`:1, :2`) 또는 이름 기반(`:var1, :var2`)으로 지정하여 하드 파싱을 막고 **SQL Injection을 근본 차단**하는 안전한 기법입니다.
- **PyQt5 GUI Integration**: 파이썬 데스크톱 윈도우 애플리케이션 프레임워크인 PyQt5 위젯(`QTableWidgetItem`, `QTextEdit`)과 데이터베이스 커서를 실시간 연동하는 모듈입니다.

---

## 2. pjt/26 실전 파이썬 데이터베이스 연동 소스 코드 (chap13_2.py & chap13_4.py)

```python
import oracledb

# 1. DB 접속 정보 설정
dsn = "localhost/emppdb"
user = "scott"
pw = "tiger"

# 2. 커넥션 및 커서 생성
conn = oracledb.connect(user=user, password=pw, dsn=dsn)
curs = conn.cursor()

# 3. SELECT 쿼리 실행 및 fetchall / fetchone 버퍼 탐색
sql_select = "SELECT empno, ename, job, sal FROM emp WHERE deptno = :1"
curs.execute(sql_select, (20,)) # 위치 기반 바인드 변수 대입

rows = curs.fetchall()
print("=== [부서 20 사원 목록] ===")
for r in rows:
    print(f"사번: {r[0]}, 이름: {r[1]}, 직급: {r[2]}, 급여: {r[3]:,}원")

# 4. INSERT 쿼리 및 이름 기반 바인드 변수 실행
sql_insert = "INSERT INTO dept VALUES (:var1, :var2, :var3)"
curs.execute(sql_insert, var1=50, var2="AI_RESEARCH", var3="SEOUL")
conn.commit() # 트랜잭션 명시적 수동 확정 (Commit)

curs.close()
conn.close()
```

---

## 3. pjt/26 실전 PyQt5 GUI 데이터베이스 검색 워크숍 애플리케이션 (ch13_workshop.py)

```python
import sys
import oracledb
from PyQt5.QtWidgets import *
from PyQt5.QtCore import Qt, QCoreApplication

# DB 커넥션 헬퍼 함수
def connectDB():
    return oracledb.connect(user="scott", password="tiger", dsn="localhost/emppdb")

def disconnectDB(conn):
    conn.close()

# PyQt5 GUI 윈도우 클래스
class CityInfoApp(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        label1 = QLabel(''국가 선택:'')
        self.contry = QComboBox()
        self.contry.addItems([''South Korea'', ''United States'', ''Japan'', ''China''])

        btn_search = QPushButton(''조회'')
        btn_search.clicked.connect(self.btn_search_clicked)
        btn_exit = QPushButton(''종료'')
        btn_exit.clicked.connect(self.close)

        self.city_info = QTableWidget()

        gbox = QGridLayout()
        gbox.addWidget(label1, 0, 0)
        gbox.addWidget(self.contry, 0, 1)
        gbox.addWidget(btn_search, 0, 2)
        gbox.addWidget(btn_exit, 1, 2)
        gbox.addWidget(self.city_info, 1, 0, 1, 2)

        self.setLayout(gbox)
        self.setWindowTitle(''pjt/26 DB 연동 City Info App'')
        self.setGeometry(300, 300, 550, 300)
        self.show()

    def btn_search_clicked(self):
        country_name = self.contry.currentText()
        sql = """
            SELECT city.name, city.population 
            FROM city, country 
            WHERE city.countrycode = country.code 
            AND country.name = :var1
        """
        conn = connectDB()
        curs = conn.cursor()
        curs.execute(sql, var1=country_name)

        self.city_info.setRowCount(0)
        self.city_info.setColumnCount(2)
        self.city_info.setHorizontalHeaderLabels(["도시명", "인구수"])

        row = curs.fetchone()
        i = 0
        while row:
            self.city_info.insertRow(i)
            self.city_info.setItem(i, 0, QTableWidgetItem(str(row[0])))
            pop_item = QTableWidgetItem(f"{row[1]:,}")
            pop_item.setTextAlignment(Qt.AlignRight | Qt.AlignVCenter)
            self.city_info.setItem(i, 1, pop_item)
            row = curs.fetchone()
            i += 1

        curs.close()
        disconnectDB(conn)

if __name__ == ''__main__'':
    app = QApplication(sys.argv)
    ex = CityInfoApp()
    sys.exit(app.exec_())
```

---

## 4. SQL Injection 공격 메커니즘과 Prepared Statement 방어

### SQL Injection 취약 코드 (문자열 단순 결합)

```python
# [위험!] 문자열 포맷팅을 사용한 취약 코드
user_input = "admin'' OR ''1''=''1"
sql = f"SELECT * FROM users WHERE username = ''{user_input}'' AND password = ''{pw_input}''"
# 실행 쿼리: SELECT * FROM users WHERE username = ''admin'' OR ''1''=''1'' AND password = ''...''
# 인증 조작으로 비밀번호 없이 로그인 성공!
```

### 안전한 방어 코드 (Prepared Statement & Bind Variables)

```python
# [안전!] 바인드 변수를 적용한 시큐어 코딩
sql = "SELECT * FROM users WHERE username = :1 AND password = :2"
curs.execute(sql, (user_input, pw_input)) # 입력값이 안전하게 데이터 파라미터로 상쇄됨
```
',
  '<p>애플리케이션 프로그램과 데이터베이스를 직접 연결하는 <strong>파이썬 DB 바인딩(oracledb, sqlite3)</strong> 기술과 <strong>PyQt5 기반 데스크톱 GUI 연동 앱</strong>, 그리고 <strong>SQL Injection 보안 방어</strong>를 다룹니다.</p>
<hr>
<h2>1. DB 연동 핵심 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>DB Driver / Binding</strong>: 파이썬 코드에서 데이터베이스 엔진과 TCP/IP 또는 소켓 통신을 주고받아 SQL을 전달하고 결과를 반환받는 클라이언트 모듈입니다. (<code>oracledb</code>, <code>sqlite3</code>, <code>psycopg2</code> 등)</li>
<li><strong>Cursor (커서)</strong>: SQL 실행 결과 생성된 튜플 결과셋(ResultSet)을 가리키는 버퍼 포인터 객체입니다. (<code>curs.fetchone()</code>, <code>curs.fetchall()</code>)</li>
<li><strong>Bind Variables (바인드 변수)</strong>: SQL 쿼리문에 변수값을 동적으로 대입할 때 위치 기반(<code>:1, :2</code>) 또는 이름 기반(<code>:var1, :var2</code>)으로 지정하여 하드 파싱을 막고 <strong>SQL Injection을 근본 차단</strong>하는 안전한 기법입니다.</li>
<li><strong>PyQt5 GUI Integration</strong>: 파이썬 데스크톱 윈도우 애플리케이션 프레임워크인 PyQt5 위젯(<code>QTableWidgetItem</code>, <code>QTextEdit</code>)과 데이터베이스 커서를 실시간 연동하는 모듈입니다.</li>
</ul>
<hr>
<h2>2. pjt/26 실전 파이썬 데이터베이스 연동 소스 코드 (chap13_2.py &amp; chap13_4.py)</h2>
<pre><code class="language-python">import oracledb

# 1. DB 접속 정보 설정
dsn = &quot;localhost/emppdb&quot;
user = &quot;scott&quot;
pw = &quot;tiger&quot;

# 2. 커넥션 및 커서 생성
conn = oracledb.connect(user=user, password=pw, dsn=dsn)
curs = conn.cursor()

# 3. SELECT 쿼리 실행 및 fetchall / fetchone 버퍼 탐색
sql_select = &quot;SELECT empno, ename, job, sal FROM emp WHERE deptno = :1&quot;
curs.execute(sql_select, (20,)) # 위치 기반 바인드 변수 대입

rows = curs.fetchall()
print(&quot;=== [부서 20 사원 목록] ===&quot;)
for r in rows:
    print(f&quot;사번: {r[0]}, 이름: {r[1]}, 직급: {r[2]}, 급여: {r[3]:,}원&quot;)

# 4. INSERT 쿼리 및 이름 기반 바인드 변수 실행
sql_insert = &quot;INSERT INTO dept VALUES (:var1, :var2, :var3)&quot;
curs.execute(sql_insert, var1=50, var2=&quot;AI_RESEARCH&quot;, var3=&quot;SEOUL&quot;)
conn.commit() # 트랜잭션 명시적 수동 확정 (Commit)

curs.close()
conn.close()
</code></pre>
<hr>
<h2>3. pjt/26 실전 PyQt5 GUI 데이터베이스 검색 워크숍 애플리케이션 (ch13_workshop.py)</h2>
<pre><code class="language-python">import sys
import oracledb
from PyQt5.QtWidgets import *
from PyQt5.QtCore import Qt, QCoreApplication

# DB 커넥션 헬퍼 함수
def connectDB():
    return oracledb.connect(user=&quot;scott&quot;, password=&quot;tiger&quot;, dsn=&quot;localhost/emppdb&quot;)

def disconnectDB(conn):
    conn.close()

# PyQt5 GUI 윈도우 클래스
class CityInfoApp(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        label1 = QLabel(&#39;국가 선택:&#39;)
        self.contry = QComboBox()
        self.contry.addItems([&#39;South Korea&#39;, &#39;United States&#39;, &#39;Japan&#39;, &#39;China&#39;])

        btn_search = QPushButton(&#39;조회&#39;)
        btn_search.clicked.connect(self.btn_search_clicked)
        btn_exit = QPushButton(&#39;종료&#39;)
        btn_exit.clicked.connect(self.close)

        self.city_info = QTableWidget()

        gbox = QGridLayout()
        gbox.addWidget(label1, 0, 0)
        gbox.addWidget(self.contry, 0, 1)
        gbox.addWidget(btn_search, 0, 2)
        gbox.addWidget(btn_exit, 1, 2)
        gbox.addWidget(self.city_info, 1, 0, 1, 2)

        self.setLayout(gbox)
        self.setWindowTitle(&#39;pjt/26 DB 연동 City Info App&#39;)
        self.setGeometry(300, 300, 550, 300)
        self.show()

    def btn_search_clicked(self):
        country_name = self.contry.currentText()
        sql = &quot;&quot;&quot;
            SELECT city.name, city.population 
            FROM city, country 
            WHERE city.countrycode = country.code 
            AND country.name = :var1
        &quot;&quot;&quot;
        conn = connectDB()
        curs = conn.cursor()
        curs.execute(sql, var1=country_name)

        self.city_info.setRowCount(0)
        self.city_info.setColumnCount(2)
        self.city_info.setHorizontalHeaderLabels([&quot;도시명&quot;, &quot;인구수&quot;])

        row = curs.fetchone()
        i = 0
        while row:
            self.city_info.insertRow(i)
            self.city_info.setItem(i, 0, QTableWidgetItem(str(row[0])))
            pop_item = QTableWidgetItem(f&quot;{row[1]:,}&quot;)
            pop_item.setTextAlignment(Qt.AlignRight | Qt.AlignVCenter)
            self.city_info.setItem(i, 1, pop_item)
            row = curs.fetchone()
            i += 1

        curs.close()
        disconnectDB(conn)

if __name__ == &#39;__main__&#39;:
    app = QApplication(sys.argv)
    ex = CityInfoApp()
    sys.exit(app.exec_())
</code></pre>
<hr>
<h2>4. SQL Injection 공격 메커니즘과 Prepared Statement 방어</h2>
<h3>SQL Injection 취약 코드 (문자열 단순 결합)</h3>
<pre><code class="language-python"># [위험!] 문자열 포맷팅을 사용한 취약 코드
user_input = &quot;admin&#39; OR &#39;1&#39;=&#39;1&quot;
sql = f&quot;SELECT * FROM users WHERE username = &#39;{user_input}&#39; AND password = &#39;{pw_input}&#39;&quot;
# 실행 쿼리: SELECT * FROM users WHERE username = &#39;admin&#39; OR &#39;1&#39;=&#39;1&#39; AND password = &#39;...&#39;
# 인증 조작으로 비밀번호 없이 로그인 성공!
</code></pre>
<h3>안전한 방어 코드 (Prepared Statement &amp; Bind Variables)</h3>
<pre><code class="language-python"># [안전!] 바인드 변수를 적용한 시큐어 코딩
sql = &quot;SELECT * FROM users WHERE username = :1 AND password = :2&quot;
curs.execute(sql, (user_input, pw_input)) # 입력값이 안전하게 데이터 파라미터로 상쇄됨
</code></pre>
',
  'published',
  'DB 앱 개발 - 파이썬 oracledb/sqlite3 연동, PyQt5 GUI & SQL Injection 방어',
  'pjt/26 실전 파이썬 DB 드라이버 바인딩(oracledb, sqlite3), fetchone()/fetchall() 버퍼 처리, 바인드 변수(:1, :var1), PyQt5 데스크톱 GUI DB 연동(ch13_workshop.py) 및 SQL Injection 보안 방어법을 배웁니다.',
  19,
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
  'database',
  'ch20-modern-database-trends-nosql-and-newsql',
  '현대 데이터베이스 트렌드: NoSQL(Key-Value, Document MongoDB, Graph) & Cloud NewSQL 분산 데이터베이스',
  '관계형 데이터베이스(RDB)의 한계를 극복하고 대용량 수평 확장(Scale-out)을 제공하는 NoSQL의 종류와 CAP 정리, 그리고 NewSQL 분산 데이터베이스의 최신 트렌드를 학습합니다.',
  '비정형 대용량 빅데이터 처리와 클라우드 수평 확장성(Scale-out)을 보장하는 **NoSQL 데이터베이스(MongoDB, Redis, Neo4j)**와 **NewSQL 분산 DB 트렌드**를 다룹니다.',
  '<p>비정형 대용량 빅데이터 처리와 클라우드 수평 확장성(Scale-out)을 보장하는 **NoSQL 데이터베이스(MongoDB, Redis, Neo4j)**와 <strong>NewSQL 분산 DB 트렌드</strong>를 다룹니다.</p>
',
  'published',
  '현대 DB 트렌드 - NoSQL(MongoDB, Redis, Neo4j), CAP 정리 & NewSQL 분산 DB',
  'NoSQL(Key-Value Redis, Document MongoDB, Columnar Cassandra, Graph Neo4j), CAP 정리(Consistency, Availability, Partition Tolerance) 및 NewSQL 분산 DB 트렌드를 배웁니다.',
  20,
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
