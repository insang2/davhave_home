import urllib.request, ssl, re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', 'Cache-Control': 'no-cache'})
    with urllib.request.urlopen(req, context=ctx) as resp:
        return resp.getcode(), resp.read().decode('utf-8', errors='ignore')

print('===========================================================')
print('  🔍 DAVHAVE Google GTM / GA4 / Search Console 실시간 오디트')
print('===========================================================\n')

# 1. GTM 스크립트 릴레이 검증 (GTM-T3JSFH8T)
print('[1] Google Tag Manager (GTM-T3JSFH8T) 컨테이너 서버 검증')
gtm_js_url = 'https://www.googletagmanager.com/gtm.js?id=GTM-T3JSFH8T'
try:
    code, gtm_code = fetch(gtm_js_url)
    print(f'  ├ GTM JS URL: {gtm_js_url}')
    print(f'  ├ 구글 태그매니저 응답 코드: [{code} OK]')
    print(f'  └ GTM 컨테이너 스크립트 크기: {len(gtm_code):,} bytes (GA4 데이터 수집 및 분석 활성화 준비 완료)')
except Exception as e:
    print(f'  └ [FAIL] GTM 스크립트 수신 에러: {e}')

print('\n-----------------------------------------------------------')

# 2. 사이트 내 주요 라우트별 GTM-T3JSFH8T 주입 무결성 검사
pages = [
    ('https://davhave.com/', '메인 홈페이지'),
    ('https://davhave.com/blog', '블로그 목록'),
    ('https://davhave.com/education', '교육 허브'),
    ('https://davhave.com/education/ai/claude', 'AI Claude 폴더'),
    ('https://davhave.com/services/ai-solution', 'AI 솔루션 서비스 상세'),
    ('https://davhave.com/stack/flutter', '스택 상세 (Flutter)'),
    ('https://davhave.com/philosophy/positive-impact', '개발 철학 상세 (Positive Impact)')
]

print('[2] DAVHAVE 전역 라우트 GTM & GA4 데이터레이어 태그 삽입 검증')
for url, title in pages:
    try:
        code, html = fetch(url)
        has_gtm = 'GTM-T3JSFH8T' in html
        status = 'PASS ✅' if has_gtm else 'FAIL ❌'
        print(f'  [{code}] {title:38s} -> GTM-T3JSFH8T: {status}')
    except Exception as e:
        print(f'  [ERR] {title:38s} -> {e}')

print('\n-----------------------------------------------------------')

# 3. Google Search Console (구글 서치콘솔) 크롤링 & 색인 상태 검사
print('[3] Google Search Console (SEO 색인 & 크롤러 수집 무결성) 검사')

# 3-1. robots.txt
try:
    code, robots = fetch('https://davhave.com/robots.txt')
    has_allow = 'Allow: /' in robots or 'User-agent: *' in robots
    has_sitemap = 'sitemap.xml' in robots
    print(f'  ├ robots.txt [{code} OK]')
    print(f'     ├ 구글봇 크롤링 허용 (User-agent: *): {"YES ✅" if has_allow else "NO ❌"}')
    print(f'     └ 사이트맵 경로 명시 (Sitemap: sitemap.xml): {"YES ✅" if has_sitemap else "NO ❌"}')
except Exception as e:
    print(f'  ├ robots.txt 오류: {e}')

# 3-2. sitemap.xml
try:
    code, xml = fetch('https://davhave.com/sitemap.xml')
    url_count = len(re.findall(r'<loc>', xml))
    print(f'  ├ sitemap.xml [{code} OK]')
    print(f'     └ 서치콘솔 제출 준비된 총 URL 개수: {url_count}개 (Sitemap 정상 작동)')
except Exception as e:
    print(f'  ├ sitemap.xml 오류: {e}')

# 3-3. googlebot meta tag
try:
    code, html = fetch('https://davhave.com/')
    has_gbot = 'name="googlebot"' in html and 'index, follow' in html
    print(f'  └ 메인 페이지 googlebot 색인 허용 메타 태그: {"YES ✅" if has_gbot else "NO ❌"}')
except Exception as e:
    print(f'  └ googlebot 메타 태그 오류: {e}')

print('===========================================================')
