-- Full Python Stdlib Deep Lessons Part 9

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch33-python-stdlib-hashlib-secrets-ssl',
  '파이썬 암호화 및 보안 표준 라이브러리: hashlib, secrets 및 ssl 통신',
  '단방향 암호화 해시(SHA-256)를 생성하는 hashlib, 보안 토큰 생성 secrets, 통신 구간 암호화를 담당하는 ssl 표준 라이브러리를 배웁니다.',
  '비밀번호 해시화 및 데이터 무결성 검증의 **`hashlib`**, 보안 난수 생성의 **`secrets`**, 통신 구간 암호화의 **`ssl`** 모듈을 다룹니다.

---

## 1. 암호화 보안 용어 사전 (Glossary)

- **hashlib**: SHA-256, SHA-512, MD5 등 단방향 암호화 해시(Cryptographic Hash) 알고리즘을 구현하여 데이터 복제나 변조 여부를 검증하는 모듈입니다.
- **secrets**: 암호학적으로 안전한 난수(CSPRNG)를 생성하여 보안 패스워드, 리셋 토큰, 세션 Key를 발행하는 모듈입니다. (기존 `random` 모듈은 보안 용도 사용 금지!)
- **ssl**: 네트워크 소켓 데이터를 TLS/SSL 프로토콜로 암호화하여 HTTPS 및 통신 도청을 방지하는 보안 소켓 래퍼 모듈입니다.

---

## 2. hashlib 비밀번호 해시화 및 secrets 토큰 발급 예제

```python
import hashlib
import secrets

# 1. secrets 모듈을 이용한 보안 솔트(Salt) 및 토큰 발급
salt = secrets.token_hex(16) # 32자리 16진수 랜덤 솔트
reset_token = secrets.token_urlsafe(32)

print(f"보안 랜덤 솔트: {salt}")
print(f"URL-Safe 인증 토큰: {reset_token}")

# 2. hashlib을 이용한 SHA-256 비밀번호 솔팅 해시화
raw_password = "my_secure_password_123!"
salted_input = (raw_password + salt).encode("utf-8")

# SHA-256 해시 생성
hashed_password = hashlib.sha256(salted_input).hexdigest()
print(f"SHA-256 암호화 결과: {hashed_password}")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 난수 생성 시 왜 `random` 대신 `secrets` 모듈을 써야 하나요?**
A. `random` 모듈은 Mersenne Twister 의사 난수 생성기를 써서 출력 패턴이 추적될 수 있지만, `secrets`는 운영체제엔트로피(OS Entropy) 기반의 **암호학적 난수**를 생성하므로 보안적으로 안전합니다.
',
  '<p>비밀번호 해시화 및 데이터 무결성 검증의 <strong><code>hashlib</code></strong>, 보안 난수 생성의 <strong><code>secrets</code></strong>, 통신 구간 암호화의 <strong><code>ssl</code></strong> 모듈을 다룹니다.</p>
<hr>
<h2>1. 암호화 보안 용어 사전 (Glossary)</h2>
<ul>
<li><strong>hashlib</strong>: SHA-256, SHA-512, MD5 등 단방향 암호화 해시(Cryptographic Hash) 알고리즘을 구현하여 데이터 복제나 변조 여부를 검증하는 모듈입니다.</li>
<li><strong>secrets</strong>: 암호학적으로 안전한 난수(CSPRNG)를 생성하여 보안 패스워드, 리셋 토큰, 세션 Key를 발행하는 모듈입니다. (기존 <code>random</code> 모듈은 보안 용도 사용 금지!)</li>
<li><strong>ssl</strong>: 네트워크 소켓 데이터를 TLS/SSL 프로토콜로 암호화하여 HTTPS 및 통신 도청을 방지하는 보안 소켓 래퍼 모듈입니다.</li>
</ul>
<hr>
<h2>2. hashlib 비밀번호 해시화 및 secrets 토큰 발급 예제</h2>
<pre><code class="language-python">import hashlib
import secrets

# 1. secrets 모듈을 이용한 보안 솔트(Salt) 및 토큰 발급
salt = secrets.token_hex(16) # 32자리 16진수 랜덤 솔트
reset_token = secrets.token_urlsafe(32)

print(f&quot;보안 랜덤 솔트: {salt}&quot;)
print(f&quot;URL-Safe 인증 토큰: {reset_token}&quot;)

# 2. hashlib을 이용한 SHA-256 비밀번호 솔팅 해시화
raw_password = &quot;my_secure_password_123!&quot;
salted_input = (raw_password + salt).encode(&quot;utf-8&quot;)

# SHA-256 해시 생성
hashed_password = hashlib.sha256(salted_input).hexdigest()
print(f&quot;SHA-256 암호화 결과: {hashed_password}&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 난수 생성 시 왜 <code>random</code> 대신 <code>secrets</code> 모듈을 써야 하나요?</strong>
A. <code>random</code> 모듈은 Mersenne Twister 의사 난수 생성기를 써서 출력 패턴이 추적될 수 있지만, <code>secrets</code>는 운영체제엔트로피(OS Entropy) 기반의 <strong>암호학적 난수</strong>를 생성하므로 보안적으로 안전합니다.</p>
',
  'published',
  '파이썬 보안 라이브러리 - hashlib(SHA256), secrets(안전한 난수) & ssl 암호화 소켓',
  '파이썬 표준 보안 모듈 hashlib(SHA-256, MD5 해시), secrets(암호학적으로 안전한 난수/토큰 생성) 및 ssl(TLS/SSL 보안 소켓 연동)을 학습합니다.',
  33,
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
  'ch34-python-stdlib-urllib-and-http-server',
  '파이썬 표준 네트워킹 및 임베디드 웹 서버: urllib와 http.server',
  '외부 패키지 설치 없이 파이썬 내장 기능만으로 웹 URL 데이터를 가져오는 urllib 모듈과 1초 만에 로컬 HTTP 웹 서버를 띄우는 http.server를 학습합니다.',
  '외부 설치 라이브러리 없이 파이썬 내장 표준만으로 웹 HTTP 요청을 보낼 수 있는 **`urllib`**과 초간단 웹 서버를 구동하는 **`http.server`**를 다룹니다.

---

## 1. 표준 웹 라이브러리 용어 사전 (Glossary)

- **urllib.request**: URL 주소에 접근하여 웹 데이터나 응답 텍스트를 읽어오는 웹 클라이언트 모듈입니다.
- **urllib.parse**: URL의 쿼리 스트림 매개변수를 인코딩(`quote()`)하거나 파싱(`urlparse()`)하는 URL 변환 모듈입니다.
- **http.server**: 터미널 명령 한 줄(`python -m http.server 8000`)로 현재 디렉토리의 파일들을 웹 브라우저로 서빙하는 임베디드 HTTP 서버 모듈입니다.

---

## 2. urllib.request 웹 데이터 수집 및 URL 인코딩 코드

```python
from urllib.request import urlopen, Request
from urllib.parse import urlencode, parse_qs, urlparse

# 1. URL 쿼리 파라미터 인코딩 (urllib.parse)
params = {"q": "파이썬 프로그래밍", "hl": "ko"}
query_string = urlencode(params)
target_url = f"https://httpbin.org/get?{query_string}"

print(f"인코딩 완료된 URL: {target_url}")

# 2. HTTP 요청 보내기 (urllib.request)
req = Request(target_url, headers={"User-Agent": "Mozilla/5.0"})

try:
    with urlopen(req) as response:
        html_data = response.read().decode("utf-8")
        print("=== [HTTP 응답 수신 데이터 상위 150자] ===")
        print(html_data[:150])
except Exception as e:
    print(f"웹 요청 실패: {e}")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 터파일 공유 시 `http.server`를 어떻게 활용하나요?**
A. 공유하고자 하는 폴더로 이동한 뒤 터미널에서 `python -m http.server 8000`을 입력하면, 같은 Wi-Fi/네트워크 상의 다른 기기에서 `http://내IP주소:8000`으로 접속하여 파일을 바로 다운로드할 수 있습니다.
',
  '<p>외부 설치 라이브러리 없이 파이썬 내장 표준만으로 웹 HTTP 요청을 보낼 수 있는 **<code>urllib</code>**과 초간단 웹 서버를 구동하는 **<code>http.server</code>**를 다룹니다.</p>
<hr>
<h2>1. 표준 웹 라이브러리 용어 사전 (Glossary)</h2>
<ul>
<li><strong>urllib.request</strong>: URL 주소에 접근하여 웹 데이터나 응답 텍스트를 읽어오는 웹 클라이언트 모듈입니다.</li>
<li><strong>urllib.parse</strong>: URL의 쿼리 스트림 매개변수를 인코딩(<code>quote()</code>)하거나 파싱(<code>urlparse()</code>)하는 URL 변환 모듈입니다.</li>
<li><strong>http.server</strong>: 터미널 명령 한 줄(<code>python -m http.server 8000</code>)로 현재 디렉토리의 파일들을 웹 브라우저로 서빙하는 임베디드 HTTP 서버 모듈입니다.</li>
</ul>
<hr>
<h2>2. urllib.request 웹 데이터 수집 및 URL 인코딩 코드</h2>
<pre><code class="language-python">from urllib.request import urlopen, Request
from urllib.parse import urlencode, parse_qs, urlparse

# 1. URL 쿼리 파라미터 인코딩 (urllib.parse)
params = {&quot;q&quot;: &quot;파이썬 프로그래밍&quot;, &quot;hl&quot;: &quot;ko&quot;}
query_string = urlencode(params)
target_url = f&quot;https://httpbin.org/get?{query_string}&quot;

print(f&quot;인코딩 완료된 URL: {target_url}&quot;)

# 2. HTTP 요청 보내기 (urllib.request)
req = Request(target_url, headers={&quot;User-Agent&quot;: &quot;Mozilla/5.0&quot;})

try:
    with urlopen(req) as response:
        html_data = response.read().decode(&quot;utf-8&quot;)
        print(&quot;=== [HTTP 응답 수신 데이터 상위 150자] ===&quot;)
        print(html_data[:150])
except Exception as e:
    print(f&quot;웹 요청 실패: {e}&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 터파일 공유 시 <code>http.server</code>를 어떻게 활용하나요?</strong>
A. 공유하고자 하는 폴더로 이동한 뒤 터미널에서 <code>python -m http.server 8000</code>을 입력하면, 같은 Wi-Fi/네트워크 상의 다른 기기에서 <code>http://내IP주소:8000</code>으로 접속하여 파일을 바로 다운로드할 수 있습니다.</p>
',
  'published',
  '파이썬 표준 웹 모듈 - urllib.request, urllib.parse URL 파싱 & http.server',
  '파이썬 표준 웹 모듈 urllib.request(URL 데이터 다운로드), urllib.parse(URL 쿼리 인코딩/디코딩) 및 http.server(한 줄 웹 서버 구동)를 다룹니다.',
  34,
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
  'ch35-python-stdlib-zipfile-tarfile-zlib',
  '파이썬 압축 파일 포맷 및 아카이브: zipfile, tarfile 및 zlib 스트림 압축',
  '대용량 파일이나 폴더를 .zip 및 .tar.gz 확장자로 압축하고 풀 수 있는 zipfile, tarfile 모듈과 zlib 메모리 고속 압축 기술을 다룹니다.',
  '여러 파일과 폴더를 하나로 묶어 압축 해제하는 **`zipfile`**, **`tarfile`** 모듈과 메모리 텍스트 데이터를 고속 처리하는 **`zlib`**을 배웁니다.

---

## 1. 압축 라이브러리 용어 사전 (Glossary)

- **zipfile**: 널리 쓰이는 `.zip` 아카이브 포맷을 생성, 읽기, 덧붙이기, 해제(`extractall()`)하는 표준 모듈입니다.
- **tarfile**: 리눅스/유닉스 환경의 `.tar`, `.tar.gz`, `.tar.bz2` 아카이브 파일 압축을 다루는 모듈입니다.
- **zlib**: DEFLATE 알고리즘을 이용하여 메모리 상의 바이트 스트림을 고속 압축(`zlib.compress()`) 및 복원하는 저수준 압축 엔진 모듈입니다.

---

## 2. zipfile 파일 압축 및 해제 실습 코드

```python
import zipfile
import zlib
from pathlib import Path

# 1. zipfile 모듈을 통한 파일 압축 생성
zip_path = Path("archive.zip")

with zipfile.ZipFile(zip_path, "w", compression=zipfile.ZIP_DEFLATED) as zip_out:
    # 텍스트 파일 압축 추가
    zip_out.writestr("test1.txt", "DAVHAVE 파이썬 압축 테스트 1")
    zip_out.writestr("test2.txt", "DAVHAVE 파이썬 압축 테스트 2")

print(f"ZIP 아카이브 생성 완료: {zip_path}")

# 2. 압축 파일 내부 목록 조회 및 해제
with zipfile.ZipFile(zip_path, "r") as zip_in:
    print("아카이브 파일 목록:", zip_in.namelist())
    zip_in.extractall("./extracted_files")

# 3. zlib 메모리 바이트 스트림 압축
raw_text = b"Python Standard Library Compression System " * 100
compressed_bytes = zlib.compress(raw_text)

print(f"원래 크기: {len(raw_text)} bytes -> zlib 압축 후: {len(compressed_bytes)} bytes")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. ZIP 압축 시 `compression=zipfile.ZIP_DEFLATED` 옵션을 꼭 주어야 하나요?**
A. 네! 기본값인 `ZIP_STORED`는 파일을 단순히 묶어 보관할 뿐 용량을 압축하지 않으므로, 실제로 데이터 용량을 줄이려면 `ZIP_DEFLATED` 옵션을 명시해야 합니다.
',
  '<p>여러 파일과 폴더를 하나로 묶어 압축 해제하는 <strong><code>zipfile</code></strong>, <strong><code>tarfile</code></strong> 모듈과 메모리 텍스트 데이터를 고속 처리하는 **<code>zlib</code>**을 배웁니다.</p>
<hr>
<h2>1. 압축 라이브러리 용어 사전 (Glossary)</h2>
<ul>
<li><strong>zipfile</strong>: 널리 쓰이는 <code>.zip</code> 아카이브 포맷을 생성, 읽기, 덧붙이기, 해제(<code>extractall()</code>)하는 표준 모듈입니다.</li>
<li><strong>tarfile</strong>: 리눅스/유닉스 환경의 <code>.tar</code>, <code>.tar.gz</code>, <code>.tar.bz2</code> 아카이브 파일 압축을 다루는 모듈입니다.</li>
<li><strong>zlib</strong>: DEFLATE 알고리즘을 이용하여 메모리 상의 바이트 스트림을 고속 압축(<code>zlib.compress()</code>) 및 복원하는 저수준 압축 엔진 모듈입니다.</li>
</ul>
<hr>
<h2>2. zipfile 파일 압축 및 해제 실습 코드</h2>
<pre><code class="language-python">import zipfile
import zlib
from pathlib import Path

# 1. zipfile 모듈을 통한 파일 압축 생성
zip_path = Path(&quot;archive.zip&quot;)

with zipfile.ZipFile(zip_path, &quot;w&quot;, compression=zipfile.ZIP_DEFLATED) as zip_out:
    # 텍스트 파일 압축 추가
    zip_out.writestr(&quot;test1.txt&quot;, &quot;DAVHAVE 파이썬 압축 테스트 1&quot;)
    zip_out.writestr(&quot;test2.txt&quot;, &quot;DAVHAVE 파이썬 압축 테스트 2&quot;)

print(f&quot;ZIP 아카이브 생성 완료: {zip_path}&quot;)

# 2. 압축 파일 내부 목록 조회 및 해제
with zipfile.ZipFile(zip_path, &quot;r&quot;) as zip_in:
    print(&quot;아카이브 파일 목록:&quot;, zip_in.namelist())
    zip_in.extractall(&quot;./extracted_files&quot;)

# 3. zlib 메모리 바이트 스트림 압축
raw_text = b&quot;Python Standard Library Compression System &quot; * 100
compressed_bytes = zlib.compress(raw_text)

print(f&quot;원래 크기: {len(raw_text)} bytes -&gt; zlib 압축 후: {len(compressed_bytes)} bytes&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. ZIP 압축 시 <code>compression=zipfile.ZIP_DEFLATED</code> 옵션을 꼭 주어야 하나요?</strong>
A. 네! 기본값인 <code>ZIP_STORED</code>는 파일을 단순히 묶어 보관할 뿐 용량을 압축하지 않으므로, 실제로 데이터 용량을 줄이려면 <code>ZIP_DEFLATED</code> 옵션을 명시해야 합니다.</p>
',
  'published',
  '파이썬 압축 라이브러리 - zipfile(.zip), tarfile(.tar.gz) & zlib 데이터 압축',
  '파이썬 표준 압축 모듈 zipfile(.zip 파일 압축/해제 및 암호화), tarfile(.tar.gz 아카이브 압축), zlib(메모리 데이터 스트림 압축)을 배웁니다.',
  35,
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
