
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'ai',
  'ch21-claude-code-installation-and-usage-guide',
  '21. Anthropic 공식 AI 코딩 어시스턴트 Claude Code 설치 및 실전 활용 완벽 가이드',
  'Anthropic의 혁신적인 CLI AI 코딩 도구 Claude Code의 환경 설정, 플랫폼별 설치법, VS Code 연동, 트러블슈팅 및 명령어 총정리 가이드입니다.',
  '
Anthropic이 선보인 공식 CLI 기반 AI 코딩 어시스턴트 **Claude Code (클로드 코드)**의 설치부터 인증, 첫 실행, IDE 연동, 트러블슈팅 및 핵심 명령어에 이르기까지 전 과정을 커버하는 완벽 가이드입니다.

---

## 1. 클로드 코드(Claude Code) 개요 및 핵심 기능

**Claude Code**는 Anthropic이 개발한 공식 AI 코딩 어시스턴트 CLI(명령줄 도구)입니다. 터미널 환경에서 `claude` 명령어를 입력하면 AI가 로컬 프로젝트의 파일 구조와 코드를 즉시 분석하고, 자연어 지시에 따라 신규 기능 구현, 버그 수정, 리팩토링, Git 커밋 생성 및 자동화 스크립트 실행까지 완벽히 수행합니다.

### 클로드 코드 주요 제공 기능
| 주요 기능 | 자연어 요청 예시 | 실행되는 내부 동작 |
| :--- | :--- | :--- |
| **코드 신규 작성** | "FastAPI 로그인 API 라우터 만들어줘" | 파일 생성 및 백엔드 로직 자동 구현 |
| **디버깅 & 수정** | "이 함수에서 메모리 누수 원인 찾아서 고쳐줘" | 코드 정밀 분석 후 인라인 수정 |
| **프로젝트 구조 분석** | "이 프로젝트 폴더 아키텍처 한눈에 설명해줘" | 전체 파일 트리 순회 및 의존성 브리핑 |
| **Git 관리 자동화** | "현재 변경사항 분석해서 커밋 메시지 작성하고 커밋해줘" | `git status` & `diff` 확인 후 스마트 커밋 |
| **웹 검색 & 최신 정보** | "React 19 최신 훅 문법 예제 보여줘" | 실시간 웹 검색 후 최신 가이드 제공 |
| **파일 & 스크립트 자동화** | "CSV 데이터를 파싱해 JSON으로 변환하는 스크립트 작성해줘" | 자동화 파이썬/JS 스크립트 생성 및 구동 |

---

## 2. 시스템 요구 사항 및 사전 필수 설치 (Requirements)

### 1) 운영체제(OS) 최소 요구 사양
- **Windows**: Windows 10 (1809 빌드 이상) 또는 Windows 11
- **macOS**: macOS 13.0 (Ventura) 이상
- **Linux**: Ubuntu 20.04+ / Debian 10+ / Alpine 3.19+

### 2) 하드웨어 및 네트워크 조건
- **RAM**: 최소 4GB 이상 (8GB 이상 권장)
- **네트워크**: 초고속 인터넷 연결 필수 (Anthropic 서비스 지원 국가 - 대한민국 정상 지원)

### 3) ⚠️ Windows 사용자 필수 사전 준비 사항
Windows 환경에서는 **Git for Windows**가 반드시 사전에 설치되어 있어야 클로드 코드가 정상 작동합니다.
1. [Git for Windows 공식 다운로드 페이지](https://git-scm.com/downloads/win) 접속
2. 설치 파일 실행 후 설치 단계에서 **"Add Git to PATH"** 옵션을 반드시 체크하고 설치 진행

---

## 3. 요금제(Pricing Plan) 비교 및 가입 방법

Claude Code는 무료 계정 상태에서는 사용이 불가하며, Anthropic의 유료 구독 플랜 중 하나가 필요합니다.

| 플랜 종류 | 가격 | 주요 추천 대상 |
| :--- | :--- | :--- |
| **Claude Pro** | $20 / 월 | 개인 입문자, 1인 개인 개발자 |
| **Claude Max** | $100 또는 $200 / 월 | 헤비 사용자, 전문 소프트웨어 엔지니어 |
| **Claude for Teams** | $30 / 유저 / 월 | 소규모 스타트업 및 개발 팀 |
| **Claude Enterprise** | 별도 협의 | 기업용 대규모 인프라 도입 |
| **Console (API)** | 종량제 (Token 사용량) | Anthropic Console API 키 기반 과금 이용자 |

---

## 4. 운영체제별 공식 설치 명령어 가이드

### 방법 1: 공식 자동 업데이트 스크립트 (가장 권장 ⭐)

#### 1) Windows (PowerShell - 관리자 권한 실행)
```powershell
irm https://claude.ai/install.ps1 | iex
```

#### 2) Windows (CMD)
```cmd
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

#### 3) macOS / Linux (터미널)
```bash
# 최신 개발 버전을 원하는 경우
curl -fsSL https://claude.ai/install.sh | bash

# 검증된 안정 버전(stable)으로 설치하는 경우 (권장)
curl -fsSL https://claude.ai/install.sh | bash -s stable
```

### 방법 2: 패키지 매니저 방식 (Homebrew / WinGet)
- **macOS (Homebrew)**: `brew install --cask claude-code` (업데이트: `brew upgrade claude-code`)
- **Windows (WinGet)**: `winget install Anthropic.ClaudeCode` (업데이트: `winget upgrade Anthropic.ClaudeCode`)

---

## 5. 설치 검증 및 시스템 헬스 체크 (Health Check)

설치가 완료된 후 터미널을 열고 정상적으로 로드되었는지 진단합니다.

```bash
# 1. 버전에 대한 정상 출력 확인
claude --version
# 정상 출력 예시: claude v1.x.x

# 2. 종합 시스템 진단 실행 (Claude Doctor)
claude doctor
```

### `claude doctor` 자가 진단 항목
- ✅ CLI 설치 상태 및 최신 버전 유무
- ✅ 웹 검색 엔진 연동 상태
- ✅ 자동 업데이트 백그라운드 프로세스
- ✅ 글로벌 설정 파일 유효성
- ✅ MCP (Model Context Protocol) 서버 연동 상태
- ✅ 터미널 단축키 및 키바인딩 오류 점검

---

## 6. OAuth 로그인 및 계정 인증 절차

```bash
# 프로젝트 폴더로 이동 후 최초 실행
claude
```

1. 터미널에 `claude`를 입력하면 기본 웹 브라우저가 자동으로 켜지며 Anthropic OAuth 로그인 창이 뜹니다.
2. 유료 구독이 진행된 Claude 계정으로 로그인 후 **"Authorize CLI"** 승인 버튼을 클릭합니다.
3. 브라우저가 승인되면 인증 토큰이 안전하게 보관되며 터미널 대화 창이 활성화됩니다.
   - **macOS**: OS 내장 Keychain 에 암호화 저장
   - **Windows**: 보안 사용자 자격 증명 디스크에 안전 보관
4. **로그아웃 명령어**: CLI 내부에서 `/logout` 입력

---

## 7. 자주 발생하는 문제 해결 (Troubleshooting Top 6)

### Q1. "command not found: claude" 에러가 발생합니다.
설치 경로가 PATH 환경 변수에 등록되지 않은 경우입니다.
- **macOS (Zsh)**:
  ```bash
  echo ''export PATH="$HOME/.local/bin:$PATH"'' >> ~/.zshrc
  source ~/.zshrc
  ```
- **Windows (PowerShell)**:
  ```powershell
  $currentPath = [Environment]::GetEnvironmentVariable(''PATH'', ''User'')
  [Environment]::SetEnvironmentVariable(''PATH'', "$currentPath;$env:USERPROFILE\.local\bin", ''User'')
  ```

### Q2. 설치 스크립트 실행 시 HTML이나 방화벽 에러가 뜹니다.
네트워크 보안망 또는 SSL 문제일 수 있습니다. Homebrew나 WinGet 패키지 매니저로 대안 설치하세요:
```bash
brew install --cask claude-code   # macOS
winget install Anthropic.ClaudeCode # Windows
```

### Q3. TLS / SSL 연결 오류가 발생합니다.
Windows PowerShell에서 TLS 1.2 프로토콜을 강제 적용합니다:
```powershell
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
irm https://claude.ai/install.ps1 | iex
```

### Q4. 403 Forbidden 권한 오류가 발생합니다.
- [Claude Settings](https://claude.ai/settings) 접속 후 유료 구독(Pro/Max/Team) 상태를 확인합니다.
- VPN을 사용 중이라면 VPN을 끄고 재인증을 시도합니다.

### Q5. Windows에서 Git Bash 경로를 인식하지 못합니다.
`~/.claude/settings.json` 파일에 다음 경로를 직접 지정해 줍니다:
```json
{
  "env": {
    "CLAUDE_CODE_GIT_BASH_PATH": "C:\\Program Files\\Git\\bin\\bash.exe"
  }
}
```

### Q6. Linux에서 메모리 부족으로 "Killed" 프로세스 종료가 뜹니다.
2GB 이상의 가상 Swap 메모리를 할당합니다:
```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

---

## 8. 핵심 명령어 치트시트 (Cheatsheet)

### 1) CLI 외부 터미널 명령어
| 명령어 | 용도 및 설명 |
| :--- | :--- |
| `claude` | 인터랙티브 대화 모드 시작 |
| `claude "지시사항"` | 한 줄 자연어 지시 후 대화 모드 진입 |
| `claude -p "질문"` | 단발성 질문 응답 후 바로 터미널 종료 |
| `claude -c` | 가장 최근에 진행했던 대화 세션 복원 및 이어하기 |
| `claude -r` | 이전 세션 히스토리 목록 선택 창 열기 |
| `claude commit` | 프로젝트 변경사항 분석 후 Git 커밋 자동 생성 |
| `claude doctor` | 전체 CLI 환경 진단 및 문제 리포트 |
| `claude update` | 클로드 코드 최신 버전으로 즉시 업데이트 |

### 2) CLI 내부 인터랙티브 Slash 명령어
| 슬래시 명령어 | 용도 및 설명 |
| :--- | :--- |
| `/help` | 전체 명령어 도움말 브리핑 |
| `/compact` | 대화 컨텍스트를 압축하여 토큰 소비 절약 |
| `/clear` | 현재 대화 세션 초기화 |
| `/config` | 클로드 코드 글로벌 사용자 설정 변경 |
| `/logout` | 로그인 인증 토큰 파기 및 로그아웃 |
| `/exit` | 클로드 코드 인터랙티브 세션 종료 |
',
  '<p>Anthropic이 선보인 공식 CLI 기반 AI 코딩 어시스턴트 **Claude Code (클로드 코드)**의 설치부터 인증, 첫 실행, IDE 연동, 트러블슈팅 및 핵심 명령어에 이르기까지 전 과정을 커버하는 완벽 가이드입니다.</p>
<hr>
<h2>1. 클로드 코드(Claude Code) 개요 및 핵심 기능</h2>
<p><strong>Claude Code</strong>는 Anthropic이 개발한 공식 AI 코딩 어시스턴트 CLI(명령줄 도구)입니다. 터미널 환경에서 <code>claude</code> 명령어를 입력하면 AI가 로컬 프로젝트의 파일 구조와 코드를 즉시 분석하고, 자연어 지시에 따라 신규 기능 구현, 버그 수정, 리팩토링, Git 커밋 생성 및 자동화 스크립트 실행까지 완벽히 수행합니다.</p>
<h3>클로드 코드 주요 제공 기능</h3>
<table>
<thead>
<tr>
<th align="left">주요 기능</th>
<th align="left">자연어 요청 예시</th>
<th align="left">실행되는 내부 동작</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>코드 신규 작성</strong></td>
<td align="left">&quot;FastAPI 로그인 API 라우터 만들어줘&quot;</td>
<td align="left">파일 생성 및 백엔드 로직 자동 구현</td>
</tr>
<tr>
<td align="left"><strong>디버깅 &amp; 수정</strong></td>
<td align="left">&quot;이 함수에서 메모리 누수 원인 찾아서 고쳐줘&quot;</td>
<td align="left">코드 정밀 분석 후 인라인 수정</td>
</tr>
<tr>
<td align="left"><strong>프로젝트 구조 분석</strong></td>
<td align="left">&quot;이 프로젝트 폴더 아키텍처 한눈에 설명해줘&quot;</td>
<td align="left">전체 파일 트리 순회 및 의존성 브리핑</td>
</tr>
<tr>
<td align="left"><strong>Git 관리 자동화</strong></td>
<td align="left">&quot;현재 변경사항 분석해서 커밋 메시지 작성하고 커밋해줘&quot;</td>
<td align="left"><code>git status</code> &amp; <code>diff</code> 확인 후 스마트 커밋</td>
</tr>
<tr>
<td align="left"><strong>웹 검색 &amp; 최신 정보</strong></td>
<td align="left">&quot;React 19 최신 훅 문법 예제 보여줘&quot;</td>
<td align="left">실시간 웹 검색 후 최신 가이드 제공</td>
</tr>
<tr>
<td align="left"><strong>파일 &amp; 스크립트 자동화</strong></td>
<td align="left">&quot;CSV 데이터를 파싱해 JSON으로 변환하는 스크립트 작성해줘&quot;</td>
<td align="left">자동화 파이썬/JS 스크립트 생성 및 구동</td>
</tr>
</tbody></table>
<hr>
<h2>2. 시스템 요구 사항 및 사전 필수 설치 (Requirements)</h2>
<h3>1) 운영체제(OS) 최소 요구 사양</h3>
<ul>
<li><strong>Windows</strong>: Windows 10 (1809 빌드 이상) 또는 Windows 11</li>
<li><strong>macOS</strong>: macOS 13.0 (Ventura) 이상</li>
<li><strong>Linux</strong>: Ubuntu 20.04+ / Debian 10+ / Alpine 3.19+</li>
</ul>
<h3>2) 하드웨어 및 네트워크 조건</h3>
<ul>
<li><strong>RAM</strong>: 최소 4GB 이상 (8GB 이상 권장)</li>
<li><strong>네트워크</strong>: 초고속 인터넷 연결 필수 (Anthropic 서비스 지원 국가 - 대한민국 정상 지원)</li>
</ul>
<h3>3) ⚠️ Windows 사용자 필수 사전 준비 사항</h3>
<p>Windows 환경에서는 <strong>Git for Windows</strong>가 반드시 사전에 설치되어 있어야 클로드 코드가 정상 작동합니다.</p>
<ol>
<li><a href="https://git-scm.com/downloads/win">Git for Windows 공식 다운로드 페이지</a> 접속</li>
<li>설치 파일 실행 후 설치 단계에서 <strong>&quot;Add Git to PATH&quot;</strong> 옵션을 반드시 체크하고 설치 진행</li>
</ol>
<hr>
<h2>3. 요금제(Pricing Plan) 비교 및 가입 방법</h2>
<p>Claude Code는 무료 계정 상태에서는 사용이 불가하며, Anthropic의 유료 구독 플랜 중 하나가 필요합니다.</p>
<table>
<thead>
<tr>
<th align="left">플랜 종류</th>
<th align="left">가격</th>
<th align="left">주요 추천 대상</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>Claude Pro</strong></td>
<td align="left">$20 / 월</td>
<td align="left">개인 입문자, 1인 개인 개발자</td>
</tr>
<tr>
<td align="left"><strong>Claude Max</strong></td>
<td align="left">$100 또는 $200 / 월</td>
<td align="left">헤비 사용자, 전문 소프트웨어 엔지니어</td>
</tr>
<tr>
<td align="left"><strong>Claude for Teams</strong></td>
<td align="left">$30 / 유저 / 월</td>
<td align="left">소규모 스타트업 및 개발 팀</td>
</tr>
<tr>
<td align="left"><strong>Claude Enterprise</strong></td>
<td align="left">별도 협의</td>
<td align="left">기업용 대규모 인프라 도입</td>
</tr>
<tr>
<td align="left"><strong>Console (API)</strong></td>
<td align="left">종량제 (Token 사용량)</td>
<td align="left">Anthropic Console API 키 기반 과금 이용자</td>
</tr>
</tbody></table>
<hr>
<h2>4. 운영체제별 공식 설치 명령어 가이드</h2>
<h3>방법 1: 공식 자동 업데이트 스크립트 (가장 권장 ⭐)</h3>
<h4>1) Windows (PowerShell - 관리자 권한 실행)</h4>
<pre><code class="language-powershell">irm https://claude.ai/install.ps1 | iex
</code></pre>
<h4>2) Windows (CMD)</h4>
<pre><code class="language-cmd">curl -fsSL https://claude.ai/install.cmd -o install.cmd &amp;&amp; install.cmd &amp;&amp; del install.cmd
</code></pre>
<h4>3) macOS / Linux (터미널)</h4>
<pre><code class="language-bash"># 최신 개발 버전을 원하는 경우
curl -fsSL https://claude.ai/install.sh | bash

# 검증된 안정 버전(stable)으로 설치하는 경우 (권장)
curl -fsSL https://claude.ai/install.sh | bash -s stable
</code></pre>
<h3>방법 2: 패키지 매니저 방식 (Homebrew / WinGet)</h3>
<ul>
<li><strong>macOS (Homebrew)</strong>: <code>brew install --cask claude-code</code> (업데이트: <code>brew upgrade claude-code</code>)</li>
<li><strong>Windows (WinGet)</strong>: <code>winget install Anthropic.ClaudeCode</code> (업데이트: <code>winget upgrade Anthropic.ClaudeCode</code>)</li>
</ul>
<hr>
<h2>5. 설치 검증 및 시스템 헬스 체크 (Health Check)</h2>
<p>설치가 완료된 후 터미널을 열고 정상적으로 로드되었는지 진단합니다.</p>
<pre><code class="language-bash"># 1. 버전에 대한 정상 출력 확인
claude --version
# 정상 출력 예시: claude v1.x.x

# 2. 종합 시스템 진단 실행 (Claude Doctor)
claude doctor
</code></pre>
<h3><code>claude doctor</code> 자가 진단 항목</h3>
<ul>
<li>✅ CLI 설치 상태 및 최신 버전 유무</li>
<li>✅ 웹 검색 엔진 연동 상태</li>
<li>✅ 자동 업데이트 백그라운드 프로세스</li>
<li>✅ 글로벌 설정 파일 유효성</li>
<li>✅ MCP (Model Context Protocol) 서버 연동 상태</li>
<li>✅ 터미널 단축키 및 키바인딩 오류 점검</li>
</ul>
<hr>
<h2>6. OAuth 로그인 및 계정 인증 절차</h2>
<pre><code class="language-bash"># 프로젝트 폴더로 이동 후 최초 실행
claude
</code></pre>
<ol>
<li>터미널에 <code>claude</code>를 입력하면 기본 웹 브라우저가 자동으로 켜지며 Anthropic OAuth 로그인 창이 뜹니다.</li>
<li>유료 구독이 진행된 Claude 계정으로 로그인 후 <strong>&quot;Authorize CLI&quot;</strong> 승인 버튼을 클릭합니다.</li>
<li>브라우저가 승인되면 인증 토큰이 안전하게 보관되며 터미널 대화 창이 활성화됩니다.<ul>
<li><strong>macOS</strong>: OS 내장 Keychain 에 암호화 저장</li>
<li><strong>Windows</strong>: 보안 사용자 자격 증명 디스크에 안전 보관</li>
</ul>
</li>
<li><strong>로그아웃 명령어</strong>: CLI 내부에서 <code>/logout</code> 입력</li>
</ol>
<hr>
<h2>7. 자주 발생하는 문제 해결 (Troubleshooting Top 6)</h2>
<h3>Q1. &quot;command not found: claude&quot; 에러가 발생합니다.</h3>
<p>설치 경로가 PATH 환경 변수에 등록되지 않은 경우입니다.</p>
<ul>
<li><strong>macOS (Zsh)</strong>:<pre><code class="language-bash">echo &#39;export PATH=&quot;$HOME/.local/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc
source ~/.zshrc
</code></pre>
</li>
<li><strong>Windows (PowerShell)</strong>:<pre><code class="language-powershell">$currentPath = [Environment]::GetEnvironmentVariable(&#39;PATH&#39;, &#39;User&#39;)
[Environment]::SetEnvironmentVariable(&#39;PATH&#39;, &quot;$currentPath;$env:USERPROFILE\.local\bin&quot;, &#39;User&#39;)
</code></pre>
</li>
</ul>
<h3>Q2. 설치 스크립트 실행 시 HTML이나 방화벽 에러가 뜹니다.</h3>
<p>네트워크 보안망 또는 SSL 문제일 수 있습니다. Homebrew나 WinGet 패키지 매니저로 대안 설치하세요:</p>
<pre><code class="language-bash">brew install --cask claude-code   # macOS
winget install Anthropic.ClaudeCode # Windows
</code></pre>
<h3>Q3. TLS / SSL 연결 오류가 발생합니다.</h3>
<p>Windows PowerShell에서 TLS 1.2 프로토콜을 강제 적용합니다:</p>
<pre><code class="language-powershell">[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
irm https://claude.ai/install.ps1 | iex
</code></pre>
<h3>Q4. 403 Forbidden 권한 오류가 발생합니다.</h3>
<ul>
<li><a href="https://claude.ai/settings">Claude Settings</a> 접속 후 유료 구독(Pro/Max/Team) 상태를 확인합니다.</li>
<li>VPN을 사용 중이라면 VPN을 끄고 재인증을 시도합니다.</li>
</ul>
<h3>Q5. Windows에서 Git Bash 경로를 인식하지 못합니다.</h3>
<p><code>~/.claude/settings.json</code> 파일에 다음 경로를 직접 지정해 줍니다:</p>
<pre><code class="language-json">{
  &quot;env&quot;: {
    &quot;CLAUDE_CODE_GIT_BASH_PATH&quot;: &quot;C:\\Program Files\\Git\\bin\\bash.exe&quot;
  }
}
</code></pre>
<h3>Q6. Linux에서 메모리 부족으로 &quot;Killed&quot; 프로세스 종료가 뜹니다.</h3>
<p>2GB 이상의 가상 Swap 메모리를 할당합니다:</p>
<pre><code class="language-bash">sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
</code></pre>
<hr>
<h2>8. 핵심 명령어 치트시트 (Cheatsheet)</h2>
<h3>1) CLI 외부 터미널 명령어</h3>
<table>
<thead>
<tr>
<th align="left">명령어</th>
<th align="left">용도 및 설명</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><code>claude</code></td>
<td align="left">인터랙티브 대화 모드 시작</td>
</tr>
<tr>
<td align="left"><code>claude &quot;지시사항&quot;</code></td>
<td align="left">한 줄 자연어 지시 후 대화 모드 진입</td>
</tr>
<tr>
<td align="left"><code>claude -p &quot;질문&quot;</code></td>
<td align="left">단발성 질문 응답 후 바로 터미널 종료</td>
</tr>
<tr>
<td align="left"><code>claude -c</code></td>
<td align="left">가장 최근에 진행했던 대화 세션 복원 및 이어하기</td>
</tr>
<tr>
<td align="left"><code>claude -r</code></td>
<td align="left">이전 세션 히스토리 목록 선택 창 열기</td>
</tr>
<tr>
<td align="left"><code>claude commit</code></td>
<td align="left">프로젝트 변경사항 분석 후 Git 커밋 자동 생성</td>
</tr>
<tr>
<td align="left"><code>claude doctor</code></td>
<td align="left">전체 CLI 환경 진단 및 문제 리포트</td>
</tr>
<tr>
<td align="left"><code>claude update</code></td>
<td align="left">클로드 코드 최신 버전으로 즉시 업데이트</td>
</tr>
</tbody></table>
<h3>2) CLI 내부 인터랙티브 Slash 명령어</h3>
<table>
<thead>
<tr>
<th align="left">슬래시 명령어</th>
<th align="left">용도 및 설명</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><code>/help</code></td>
<td align="left">전체 명령어 도움말 브리핑</td>
</tr>
<tr>
<td align="left"><code>/compact</code></td>
<td align="left">대화 컨텍스트를 압축하여 토큰 소비 절약</td>
</tr>
<tr>
<td align="left"><code>/clear</code></td>
<td align="left">현재 대화 세션 초기화</td>
</tr>
<tr>
<td align="left"><code>/config</code></td>
<td align="left">클로드 코드 글로벌 사용자 설정 변경</td>
</tr>
<tr>
<td align="left"><code>/logout</code></td>
<td align="left">로그인 인증 토큰 파기 및 로그아웃</td>
</tr>
<tr>
<td align="left"><code>/exit</code></td>
<td align="left">클로드 코드 인터랙티브 세션 종료</td>
</tr>
</tbody></table>
',
  'published',
  'Claude Code 설치 가이드 - CLI AI 코딩 어시스턴트, IDE 연동, 트러블슈팅 및 명령어 총정리',
  'Anthropic의 공식 CLI AI 코딩 도구 Claude Code의 요구사항, Windows/macOS/Linux 설치 명령어, OAuth 로그인, VS Code/JetBrains IDE 연동, PATH/SSL 트러블슈팅 및 명령어 모음을 배웁니다.',
  21,
  '2026-08-03 00:00:00',
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
