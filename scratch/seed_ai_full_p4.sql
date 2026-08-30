-- Full AI Lessons Part 4

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  'ch16-financial-stock-analysis-ai',
  '실시간 주식/금융 데이터 연동 AI 투자 분석 시스템',
  '실시간 주식 가격 및 기업 재무제표 데이터를 수집하고 LLM 투자 분석 모델을 적용하여 금융 리포트를 자동 작성하는 주식 분석 서비스를 구축합니다.',
  '야후 파이낸스(`yfinance`) 등 금융 API로 **실시간 주가 및 재무제표 데이터**를 가져와 LLM이 금융 전문가 관점에서 분석하고 포트폴리오를 제안하는 시스템을 구현합니다.

---

## 1. 금융 AI 전문 용어 사전 (Glossary)

- **yfinance**: 야후 파이낸스(Yahoo Finance)의 주가, 이동평균선, PER, PBR, 재무제표 데이터를 파이썬으로 수집하는 라이브러리입니다.
- **PER (Price to Earnings Ratio, 주가수익비율)**: 주가를 1주당 순이익으로 나눈 값으로 주가의 고평가/저평가를 판단합니다.
- **Portfolio Simulation**: 자산 배분 비중을 조절하며 과거 데이터 기반 수익률과 변동성을 테스트하는 시뮬레이션입니다.

---

## 2. 파이썬 주식 데이터 수집 및 AI 분석 예제

```python
import yfinance as yf

def analyze_stock(ticker_symbol):
    # 1. 주식 데이터 가져오기 (예: Apple ''AAPL'' 또는 삼성전자 ''005930.KS'')
    ticker = yf.Ticker(ticker_symbol)
    info = ticker.info
    
    stock_data = {
        "company": info.get("longName"),
        "current_price": info.get("currentPrice"),
        "PER": info.get("trailingPE"),
        "PBR": info.get("priceToBook"),
        "52week_high": info.get("fiftyTwoWeekHigh"),
        "52week_low": info.get("fiftyTwoWeekLow"),
    }
    
    # 2. AI 분석 프롬프트 작성
    prompt = f"""
너는 월스트리트 수석 금융 분석가야. 
다음 수집된 주식 재무 데이터를 분석하고 투자 의견(매수/관망)과 리스크 요인을 정리해 줘.

[주식 데이터]
{stock_data}
"""
    res = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.2
    )
    return res.choices[0].message.content

print(analyze_stock("AAPL"))
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. AI가 투자 조언을 할 때 법적 주의사항(면책조항)은?**
A. AI 서비스 화면 하단에 "본 분석은 단순 참고용이며 최종 투자 결정과 책임은 본인에게 있습니다"라는 **면책 조항(Disclaimer)** 문구를 반드시 명시해야 합니다.
',
  '<p>야후 파이낸스(<code>yfinance</code>) 등 금융 API로 <strong>실시간 주가 및 재무제표 데이터</strong>를 가져와 LLM이 금융 전문가 관점에서 분석하고 포트폴리오를 제안하는 시스템을 구현합니다.</p>
<hr>
<h2>1. 금융 AI 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>yfinance</strong>: 야후 파이낸스(Yahoo Finance)의 주가, 이동평균선, PER, PBR, 재무제표 데이터를 파이썬으로 수집하는 라이브러리입니다.</li>
<li><strong>PER (Price to Earnings Ratio, 주가수익비율)</strong>: 주가를 1주당 순이익으로 나눈 값으로 주가의 고평가/저평가를 판단합니다.</li>
<li><strong>Portfolio Simulation</strong>: 자산 배분 비중을 조절하며 과거 데이터 기반 수익률과 변동성을 테스트하는 시뮬레이션입니다.</li>
</ul>
<hr>
<h2>2. 파이썬 주식 데이터 수집 및 AI 분석 예제</h2>
<pre><code class="language-python">import yfinance as yf

def analyze_stock(ticker_symbol):
    # 1. 주식 데이터 가져오기 (예: Apple &#39;AAPL&#39; 또는 삼성전자 &#39;005930.KS&#39;)
    ticker = yf.Ticker(ticker_symbol)
    info = ticker.info
    
    stock_data = {
        &quot;company&quot;: info.get(&quot;longName&quot;),
        &quot;current_price&quot;: info.get(&quot;currentPrice&quot;),
        &quot;PER&quot;: info.get(&quot;trailingPE&quot;),
        &quot;PBR&quot;: info.get(&quot;priceToBook&quot;),
        &quot;52week_high&quot;: info.get(&quot;fiftyTwoWeekHigh&quot;),
        &quot;52week_low&quot;: info.get(&quot;fiftyTwoWeekLow&quot;),
    }
    
    # 2. AI 분석 프롬프트 작성
    prompt = f&quot;&quot;&quot;
너는 월스트리트 수석 금융 분석가야. 
다음 수집된 주식 재무 데이터를 분석하고 투자 의견(매수/관망)과 리스크 요인을 정리해 줘.

[주식 데이터]
{stock_data}
&quot;&quot;&quot;
    res = client.chat.completions.create(
        model=&quot;gpt-4o-mini&quot;,
        messages=[{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: prompt}],
        temperature=0.2
    )
    return res.choices[0].message.content

print(analyze_stock(&quot;AAPL&quot;))
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. AI가 투자 조언을 할 때 법적 주의사항(면책조항)은?</strong>
A. AI 서비스 화면 하단에 &quot;본 분석은 단순 참고용이며 최종 투자 결정과 책임은 본인에게 있습니다&quot;라는 <strong>면책 조항(Disclaimer)</strong> 문구를 반드시 명시해야 합니다.</p>
',
  'published',
  'AI 금융 투자가 구축 - yfinance 실시간 주가 데이터 연동 및 포트폴리오 분석',
  'yfinance 라이브러리로 실시간 주식/재무제표 데이터를 수집하고, LLM을 결합하여 종목 분석 및 포트폴리오 투자 시뮬레이션을 수행하는 시스템을 만듭니다.',
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
  'ai',
  'ch17-google-oauth-and-cloud-backup',
  '구글 로그인(OAuth 2.0) 및 클라우드 데이터 백업',
  '사용자 친화적인 구글 OAuth 2.0 소셜 로그인을 연동하고 Firebase/Supabase 데이터베이스에 개인 대화 기록과 설정을 동기화하는 백업 시스템을 구축합니다.',
  '사용자가 클릭 한 번으로 소셜 로그인할 수 있는 **구글 OAuth 2.0** 시스템을 구현하고, 사용자별 AI 대화 이력과 설정을 클라우드 DB에 백업 동기화합니다.

---

## 1. 회원가입 및 DB 전문 용어 사전 (Glossary)

- **OAuth 2.0**: 비밀번호 노출 없이 구글, 카카오 등 외부 서비스의 인증 자격 증명을 안전하게 수용하는 표준 인증 프로토콜입니다.
- **Firebase / Supabase**: Serverless 환경에서 즉시 사용할 수 있는 BaaS(Backend-as-a-Service) 데이터베이스 서비스입니다.
- **ID Token**: 구글 로그인 성공 시 발급되는 사용자 식별용 암호화 토큰(JWT)입니다.

---

## 2. 구글 OAuth 2.0 연동 3단계 절차

1. **Google Cloud Console 프로젝트 생성**: OAuth 동의 화면 설정 및 클라이언트 ID 발급.
2. **프론트엔드 버튼 배치**: Google Identity Services SDK 연동.
3. **백엔드 검증 및 백업**: 수신한 토큰을 검증하고 DB에 유저 프로필 저장.

```html
<!-- 구글 간편 로그인 버튼 HTML 템플릿 -->
<script src="https://accounts.google.com/gsi/client" async defer></script>
<div id="g_id_onload"
     data-client_id="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com"
     data-callback="handleCredentialResponse">
</div>
<div class="g_id_signin" data-type="standard"></div>

<script>
function handleCredentialResponse(response) {
  // 구글 로그인 성공 시 JWT ID 토큰 수신
  const id_token = response.credential;
  console.log("인증 토큰 획득:", id_token);
  // 백엔드 또는 Firebase로 토큰 전달 후 백업 수행
}
</script>
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 왜 자체 데이터베이스 대신 Supabase나 Firebase를 많이 쓰나요?**
A. 데이터베이스 서버를 직접 구축 및 관리할 필요 없이 인증, 데이터 백업, 실시간 동기화를 몇 줄의 API 호출로 처리할 수 있어 바이브 코딩 개발 속도가 10배 이상 빨라집니다.
',
  '<p>사용자가 클릭 한 번으로 소셜 로그인할 수 있는 <strong>구글 OAuth 2.0</strong> 시스템을 구현하고, 사용자별 AI 대화 이력과 설정을 클라우드 DB에 백업 동기화합니다.</p>
<hr>
<h2>1. 회원가입 및 DB 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>OAuth 2.0</strong>: 비밀번호 노출 없이 구글, 카카오 등 외부 서비스의 인증 자격 증명을 안전하게 수용하는 표준 인증 프로토콜입니다.</li>
<li><strong>Firebase / Supabase</strong>: Serverless 환경에서 즉시 사용할 수 있는 BaaS(Backend-as-a-Service) 데이터베이스 서비스입니다.</li>
<li><strong>ID Token</strong>: 구글 로그인 성공 시 발급되는 사용자 식별용 암호화 토큰(JWT)입니다.</li>
</ul>
<hr>
<h2>2. 구글 OAuth 2.0 연동 3단계 절차</h2>
<ol>
<li><strong>Google Cloud Console 프로젝트 생성</strong>: OAuth 동의 화면 설정 및 클라이언트 ID 발급.</li>
<li><strong>프론트엔드 버튼 배치</strong>: Google Identity Services SDK 연동.</li>
<li><strong>백엔드 검증 및 백업</strong>: 수신한 토큰을 검증하고 DB에 유저 프로필 저장.</li>
</ol>
<pre><code class="language-html">&lt;!-- 구글 간편 로그인 버튼 HTML 템플릿 --&gt;
&lt;script src=&quot;https://accounts.google.com/gsi/client&quot; async defer&gt;&lt;/script&gt;
&lt;div id=&quot;g_id_onload&quot;
     data-client_id=&quot;YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com&quot;
     data-callback=&quot;handleCredentialResponse&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;g_id_signin&quot; data-type=&quot;standard&quot;&gt;&lt;/div&gt;

&lt;script&gt;
function handleCredentialResponse(response) {
  // 구글 로그인 성공 시 JWT ID 토큰 수신
  const id_token = response.credential;
  console.log(&quot;인증 토큰 획득:&quot;, id_token);
  // 백엔드 또는 Firebase로 토큰 전달 후 백업 수행
}
&lt;/script&gt;
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 왜 자체 데이터베이스 대신 Supabase나 Firebase를 많이 쓰나요?</strong>
A. 데이터베이스 서버를 직접 구축 및 관리할 필요 없이 인증, 데이터 백업, 실시간 동기화를 몇 줄의 API 호출로 처리할 수 있어 바이브 코딩 개발 속도가 10배 이상 빨라집니다.</p>
',
  'published',
  '웹/앱 회원가입 구축 - 구글 OAuth 2.0 로그인 및 Firebase/Supabase 데이터 백업',
  '구글 OAuth 2.0 간편 로그인 서비스 연동, Firebase/Supabase 클라우드 DB를 활용하여 사용자 개인 설정 및 대화 기록을 안전하게 백업하는 법을 다룹니다.',
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
  'ai',
  'ch18-pwa-and-mobile-app-conversion',
  '설치 없이 사용하는 PWA 및 모바일 앱(APK) 전환',
  '내가 만든 웹 앱을 설치형 PWA(Progressive Web App)로 변환하고, 1분 만에 안드로이드 APK 모바일 앱으로 빌드하여 배포하는 방법을 다룹니다.',
  '복잡한 앱스토어 심사나 모바일 네이티브 코딩 없이, 완성된 웹 애플리케이션을 즉시 설치 가능한 **PWA(Progressive Web App)** 및 **안드로이드 APK 앱**으로 변환합니다.

---

## 1. PWA 및 모바일 앱 전문 용어 사전 (Glossary)

- **PWA (Progressive Web App)**: 웹 기술(HTML/CSS/JS)로 개발되었지만 홈 화면 추가, 푸시 알림, 오프라인 동작 등 모바일 앱처럼 작동하는 웹 앱입니다.
- **Service Worker (서비스 워커)**: 브라우저 백그라운드에서 실행되며 캐싱, 리소스 오프라인 제공, 푸시 알림을 처리하는 스크립트입니다.
- **manifest.json**: 앱 이름, 아이콘, 테마 색상, 실행 모드(standalone) 등 앱 설치에 필요한 정보가 적힌 설정 파일입니다.
- **TWA (Trusted Web Activity)**: PWA 웹 앱을 안드로이드 플레이스토어용 APK/AAB 바이너리로 감싸주는 표준 패키징 기술입니다.

---

## 2. PWA 필수 설정 1: `manifest.json`

```json
{
  "name": "DAVHAVE 스마트 AI 비서",
  "short_name": "DAVHAVE AI",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0908",
  "theme_color": "#ff6b35",
  "icons": [
    {
      "src": "/images/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/images/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## 3. 웹을 1분 만에 안드로이드 APK로 만드는 방법

- **PWABuilder ([pwabuilder.com](https://www.pwabuilder.com/)) 활용**:
  1. 배포된 PWA 웹사이트 URL 입력.
  2. **[Package for Store]** 버튼 클릭.
  3. 안드로이드 APK 및 AAB 파일 즉시 다운로드 후 휴대폰 설치!

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 아이폰(iOS)에서도 PWA 설치가 가능한가요?**
A. 네! 사파리(Safari) 브라우저에서 웹사이트 접속 후 **[공유 버튼] $ightarrow$ [홈 화면에 추가]**를 누르면 아이폰 바탕화면에 앱 아이콘이 생성되어 독립 실행됩니다.
',
  '<p>복잡한 앱스토어 심사나 모바일 네이티브 코딩 없이, 완성된 웹 애플리케이션을 즉시 설치 가능한 <strong>PWA(Progressive Web App)</strong> 및 <strong>안드로이드 APK 앱</strong>으로 변환합니다.</p>
<hr>
<h2>1. PWA 및 모바일 앱 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>PWA (Progressive Web App)</strong>: 웹 기술(HTML/CSS/JS)로 개발되었지만 홈 화면 추가, 푸시 알림, 오프라인 동작 등 모바일 앱처럼 작동하는 웹 앱입니다.</li>
<li><strong>Service Worker (서비스 워커)</strong>: 브라우저 백그라운드에서 실행되며 캐싱, 리소스 오프라인 제공, 푸시 알림을 처리하는 스크립트입니다.</li>
<li><strong>manifest.json</strong>: 앱 이름, 아이콘, 테마 색상, 실행 모드(standalone) 등 앱 설치에 필요한 정보가 적힌 설정 파일입니다.</li>
<li><strong>TWA (Trusted Web Activity)</strong>: PWA 웹 앱을 안드로이드 플레이스토어용 APK/AAB 바이너리로 감싸주는 표준 패키징 기술입니다.</li>
</ul>
<hr>
<h2>2. PWA 필수 설정 1: <code>manifest.json</code></h2>
<pre><code class="language-json">{
  &quot;name&quot;: &quot;DAVHAVE 스마트 AI 비서&quot;,
  &quot;short_name&quot;: &quot;DAVHAVE AI&quot;,
  &quot;start_url&quot;: &quot;/&quot;,
  &quot;display&quot;: &quot;standalone&quot;,
  &quot;background_color&quot;: &quot;#0a0908&quot;,
  &quot;theme_color&quot;: &quot;#ff6b35&quot;,
  &quot;icons&quot;: [
    {
      &quot;src&quot;: &quot;/images/icon-192.png&quot;,
      &quot;sizes&quot;: &quot;192x192&quot;,
      &quot;type&quot;: &quot;image/png&quot;
    },
    {
      &quot;src&quot;: &quot;/images/icon-512.png&quot;,
      &quot;sizes&quot;: &quot;512x512&quot;,
      &quot;type&quot;: &quot;image/png&quot;
    }
  ]
}
</code></pre>
<hr>
<h2>3. 웹을 1분 만에 안드로이드 APK로 만드는 방법</h2>
<ul>
<li><strong>PWABuilder (<a href="https://www.pwabuilder.com/">pwabuilder.com</a>) 활용</strong>:<ol>
<li>배포된 PWA 웹사이트 URL 입력.</li>
<li><strong>[Package for Store]</strong> 버튼 클릭.</li>
<li>안드로이드 APK 및 AAB 파일 즉시 다운로드 후 휴대폰 설치!</li>
</ol>
</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 아이폰(iOS)에서도 PWA 설치가 가능한가요?</strong>
A. 네! 사파리(Safari) 브라우저에서 웹사이트 접속 후 **[공유 버튼] $
ightarrow$ [홈 화면에 추가]**를 누르면 아이폰 바탕화면에 앱 아이콘이 생성되어 독립 실행됩니다.</p>
',
  'published',
  'PWA(Progressive Web App) 제작과 안드로이드 APK / iOS 웹앱 초고속 전환',
  '웹사이트를 앱처럼 홈 화면에 추가하고 오프라인 동작을 돕는 PWA(Manifest, Service Worker) 구축과 1분 만에 안드로이드 APK 앱으로 포팅하는 기법을 배웁니다.',
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
  'ai',
  'ch19-media-processing-utility-apps',
  '미디어 처리 AI 유틸리티 앱 제작 (이미지, 오디오, GIF)',
  '이미지 일괄 변환, GIF 동영상 애니메이션 생성, 오디오/문서 용량 압축 등 실무에 유용한 유틸리티 미디어 처리 앱을 제작합니다.',
  '이미지 일괄 리사이즈, GIF 동영상 생성, 오디오 편집 등 실생활과 업무 생산성을 극대화하는 **미디어 처리 AI 유틸리티 애플리케이션**을 제작합니다.

---

## 1. 미디어 처리 전문 용어 사전 (Glossary)

- **Pillow (PIL)**: 이미지 생성, 리사이즈, 포맷 변환(PNG $ightarrow$ WEBP), 필터 처리를 담당하는 파이썬 대표 이미지 라이브러리입니다.
- **FFmpeg**: 동영상 및 오디오 파일의 인코딩, 자르기, 병합, 압축을 수행하는 초고속 멀티미디어 프레임워크입니다.
- **HTML5 Canvas**: 브라우저 화면 상에서 자바스크립트로 그래픽을 그리고 이미지를 조작하는 픽셀 드로잉 엘리먼트입니다.

---

## 2. 이미지 일괄 변환 파이썬 코드 예제

```python
from PIL import Image
import os

def batch_resize_images(input_dir, output_dir, max_width=800):
    """지정한 디렉터리 내 모든 이미지를 최대 너비 800px로 일괄 리사이즈 및 WEBP 압축"""
    os.makedirs(output_dir, exist_ok=True)
    
    for filename in os.listdir(input_dir):
        if filename.lower().endswith((''png'', ''jpg'', ''jpeg'')):
            filepath = os.path.join(input_dir, filename)
            with Image.open(filepath) as img:
                # 비율 유지 리사이즈 계산
                w_percent = (max_width / float(img.size[0]))
                h_size = int((float(img.size[1]) * float(w_percent)))
                
                resized_img = img.resize((max_width, h_size), Image.Resampling.LANCZOS)
                
                # 용량이 작은 WEBP 포맷으로 저장
                save_path = os.path.join(output_dir, f"compressed_{os.path.splitext(filename)[0]}.webp")
                resized_img.save(save_path, "WEBP", quality=85)
                print(f"변환 완료: {save_path}")

# batch_resize_images("raw_images", "output_images")
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 브라우저 단에서 클라이언트 자바스크립트만으로 이미지 압축이 가능한가요?**
A. 네! HTML5 `<canvas>` 태그에 이미지를 그린 후 `canvas.toDataURL(''image/jpeg'', 0.7)` 메소드를 사용하면 서버 업로드 없이 브라우저에서 70% 용량으로 압축할 수 있습니다.
',
  '<p>이미지 일괄 리사이즈, GIF 동영상 생성, 오디오 편집 등 실생활과 업무 생산성을 극대화하는 <strong>미디어 처리 AI 유틸리티 애플리케이션</strong>을 제작합니다.</p>
<hr>
<h2>1. 미디어 처리 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Pillow (PIL)</strong>: 이미지 생성, 리사이즈, 포맷 변환(PNG $
ightarrow$ WEBP), 필터 처리를 담당하는 파이썬 대표 이미지 라이브러리입니다.</li>
<li><strong>FFmpeg</strong>: 동영상 및 오디오 파일의 인코딩, 자르기, 병합, 압축을 수행하는 초고속 멀티미디어 프레임워크입니다.</li>
<li><strong>HTML5 Canvas</strong>: 브라우저 화면 상에서 자바스크립트로 그래픽을 그리고 이미지를 조작하는 픽셀 드로잉 엘리먼트입니다.</li>
</ul>
<hr>
<h2>2. 이미지 일괄 변환 파이썬 코드 예제</h2>
<pre><code class="language-python">from PIL import Image
import os

def batch_resize_images(input_dir, output_dir, max_width=800):
    &quot;&quot;&quot;지정한 디렉터리 내 모든 이미지를 최대 너비 800px로 일괄 리사이즈 및 WEBP 압축&quot;&quot;&quot;
    os.makedirs(output_dir, exist_ok=True)
    
    for filename in os.listdir(input_dir):
        if filename.lower().endswith((&#39;png&#39;, &#39;jpg&#39;, &#39;jpeg&#39;)):
            filepath = os.path.join(input_dir, filename)
            with Image.open(filepath) as img:
                # 비율 유지 리사이즈 계산
                w_percent = (max_width / float(img.size[0]))
                h_size = int((float(img.size[1]) * float(w_percent)))
                
                resized_img = img.resize((max_width, h_size), Image.Resampling.LANCZOS)
                
                # 용량이 작은 WEBP 포맷으로 저장
                save_path = os.path.join(output_dir, f&quot;compressed_{os.path.splitext(filename)[0]}.webp&quot;)
                resized_img.save(save_path, &quot;WEBP&quot;, quality=85)
                print(f&quot;변환 완료: {save_path}&quot;)

# batch_resize_images(&quot;raw_images&quot;, &quot;output_images&quot;)
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 브라우저 단에서 클라이언트 자바스크립트만으로 이미지 압축이 가능한가요?</strong>
A. 네! HTML5 <code>&lt;canvas&gt;</code> 태그에 이미지를 그린 후 <code>canvas.toDataURL(&#39;image/jpeg&#39;, 0.7)</code> 메소드를 사용하면 서버 업로드 없이 브라우저에서 70% 용량으로 압축할 수 있습니다.</p>
',
  'published',
  '미디어 처리 유틸리티 앱 개발 - Pillow 이미지 변환, GIF 생성 및 미디어 제어',
  '파이썬 Pillow/FFmpeg 및 Canvas API를 활용하여 이미지 일괄 리사이즈, GIF 애니메이션 생성, 문서 압축 유틸리티 웹 앱을 개발해 봅니다.',
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
  'ai',
  'ch20-fullstack-ai-service-deployment',
  '풀스택 AI 애플리케이션 구축 및 클라우드 배포 종합 실습',
  '지금까지 배운 바이브 코딩과 LLM API, 대화 메모리, UI 라이브러리를 총동원하여 완벽한 풀스택 AI 서비스를 만들고 글로벌 서버에 최종 배포합니다.',
  '배운 모든 생성형 AI 기술, 바이브 코딩, 프론트엔드 UI 및 백엔드 데이터베이스를 결합하여 완벽한 **풀스택 AI 서비스를 제작하고 글로벌 클라우드에 라이브 배포**합니다.

---

## 1. 클라우드 배포 전문 용어 사전 (Glossary)

- **Cloudflare Workers / Pages**: 전 세계 Edge 데이터센터 망에서 서버리스(Serverless)로 자바스크립트/웹 앱을 1초 만에 배포하는 플랫폼입니다.
- **Streamlit / Gradio**: 파이썬 코드 몇 줄만으로 AI 인터랙티브 웹 UI 화면을 생성해주는 파이썬 전용 웹 프레임워크입니다.
- **Custom Domain & SSL**: `https://davhave.com` 처럼 사용자 전용 도메인을 연결하고 암호화 보안(HTTPS)을 적용하는 작업입니다.

---

## 2. Streamlit 기반 AI 챗봇 풀스택 코드

```python
import streamlit as st
from openai import OpenAI

# 1. 페이지 타이틀 및 설정
st.set_page_config(page_title="DAVHAVE AI 비서", page_icon="🤖")
st.title("🤖 DAVHAVE 스마트 AI 통합 비서")

# 2. API 키 및 클라이언트 초기화
openai_api_key = st.sidebar.text_input("OpenAI API Key", type="password")

# 3. 세션 대화 이력 초기화
if "messages" not in st.session_state:
    st.session_state["messages"] = [{"role": "assistant", "content": "안녕하세요! 무엇을 도와드릴까요?"}]

# 4. 이전 대화 화면 렌더링
for msg in st.session_state.messages:
    st.chat_message(msg["role"]).write(msg["content"])

# 5. 사용자 입력 처리
if prompt := st.chat_input():
    if not openai_api_key:
        st.info("왼쪽 사이드바에 OpenAI API 키를 입력해 주세요.")
        st.stop()

    client = OpenAI(api_key=openai_api_key)
    st.session_state.messages.append({"role": "user", "content": prompt})
    st.chat_message("user").write(prompt)

    response = client.chat.completions.create(model="gpt-4o-mini", messages=st.session_state.messages)
    msg = response.choices[0].message.content
    st.session_state.messages.append({"role": "assistant", "content": msg})
    st.chat_message("assistant").write(msg)
```

---

## 3. 성공적인 AI 파이프라인 개발 및 배포 체크리스트

1. **보안 체크**: API Key 및 DB 암호가 소스코드에 하드코딩되지 않았는가?
2. **예외 처리**: API 연결 실패, 토큰 한계 초과, 빈 입력값 제출 시 사용자 안내 메시지가 나오는가?
3. **사용자 경험(UX)**: AI 답변이 나오는 동안 로딩 스피너나 스트리밍(Streaming) 처리가 되어 있는가?
4. **글로벌 배포**: HTTPS 보안 접속이 지원되는 도메인으로 서비스되고 있는가?

---

## 4. 자주 묻는 질문 (Q&A)

**Q. DAVHAVE 플랫폼처럼 Cloudflare Workers에 배포할 때의 이점은 무엇인가요?**
A. 전 세계 300개 이상의 엣지 데이터센터에서 코드가 실행되므로 접속 속도가 압도적으로 빠르고, 콜드 스타트(Cold Start) 지연이 없어 쾌적한 AI 서비스를 제공할 수 있습니다.
',
  '<p>배운 모든 생성형 AI 기술, 바이브 코딩, 프론트엔드 UI 및 백엔드 데이터베이스를 결합하여 완벽한 <strong>풀스택 AI 서비스를 제작하고 글로벌 클라우드에 라이브 배포</strong>합니다.</p>
<hr>
<h2>1. 클라우드 배포 전문 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Cloudflare Workers / Pages</strong>: 전 세계 Edge 데이터센터 망에서 서버리스(Serverless)로 자바스크립트/웹 앱을 1초 만에 배포하는 플랫폼입니다.</li>
<li><strong>Streamlit / Gradio</strong>: 파이썬 코드 몇 줄만으로 AI 인터랙티브 웹 UI 화면을 생성해주는 파이썬 전용 웹 프레임워크입니다.</li>
<li><strong>Custom Domain &amp; SSL</strong>: <code>https://davhave.com</code> 처럼 사용자 전용 도메인을 연결하고 암호화 보안(HTTPS)을 적용하는 작업입니다.</li>
</ul>
<hr>
<h2>2. Streamlit 기반 AI 챗봇 풀스택 코드</h2>
<pre><code class="language-python">import streamlit as st
from openai import OpenAI

# 1. 페이지 타이틀 및 설정
st.set_page_config(page_title=&quot;DAVHAVE AI 비서&quot;, page_icon=&quot;🤖&quot;)
st.title(&quot;🤖 DAVHAVE 스마트 AI 통합 비서&quot;)

# 2. API 키 및 클라이언트 초기화
openai_api_key = st.sidebar.text_input(&quot;OpenAI API Key&quot;, type=&quot;password&quot;)

# 3. 세션 대화 이력 초기화
if &quot;messages&quot; not in st.session_state:
    st.session_state[&quot;messages&quot;] = [{&quot;role&quot;: &quot;assistant&quot;, &quot;content&quot;: &quot;안녕하세요! 무엇을 도와드릴까요?&quot;}]

# 4. 이전 대화 화면 렌더링
for msg in st.session_state.messages:
    st.chat_message(msg[&quot;role&quot;]).write(msg[&quot;content&quot;])

# 5. 사용자 입력 처리
if prompt := st.chat_input():
    if not openai_api_key:
        st.info(&quot;왼쪽 사이드바에 OpenAI API 키를 입력해 주세요.&quot;)
        st.stop()

    client = OpenAI(api_key=openai_api_key)
    st.session_state.messages.append({&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: prompt})
    st.chat_message(&quot;user&quot;).write(prompt)

    response = client.chat.completions.create(model=&quot;gpt-4o-mini&quot;, messages=st.session_state.messages)
    msg = response.choices[0].message.content
    st.session_state.messages.append({&quot;role&quot;: &quot;assistant&quot;, &quot;content&quot;: msg})
    st.chat_message(&quot;assistant&quot;).write(msg)
</code></pre>
<hr>
<h2>3. 성공적인 AI 파이프라인 개발 및 배포 체크리스트</h2>
<ol>
<li><strong>보안 체크</strong>: API Key 및 DB 암호가 소스코드에 하드코딩되지 않았는가?</li>
<li><strong>예외 처리</strong>: API 연결 실패, 토큰 한계 초과, 빈 입력값 제출 시 사용자 안내 메시지가 나오는가?</li>
<li><strong>사용자 경험(UX)</strong>: AI 답변이 나오는 동안 로딩 스피너나 스트리밍(Streaming) 처리가 되어 있는가?</li>
<li><strong>글로벌 배포</strong>: HTTPS 보안 접속이 지원되는 도메인으로 서비스되고 있는가?</li>
</ol>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. DAVHAVE 플랫폼처럼 Cloudflare Workers에 배포할 때의 이점은 무엇인가요?</strong>
A. 전 세계 300개 이상의 엣지 데이터센터에서 코드가 실행되므로 접속 속도가 압도적으로 빠르고, 콜드 스타트(Cold Start) 지연이 없어 쾌적한 AI 서비스를 제공할 수 있습니다.</p>
',
  'published',
  '풀스택 AI 서비스 배포 실습 - Streamlit, Cloudflare Workers, Vercel 클라우드 배포',
  '백엔드 AI 모델과 프론트엔드를 결합한 완벽한 풀스택 AI 웹 애플리케이션을 제작하고 Cloudflare Workers / Vercel에 도메인 연결하여 라이브 배포합니다.',
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
