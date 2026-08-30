-- Full Python IDLE PDF Lessons Part 11

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'python',
  'ch41-python-idle-editors-pycharm-vscode-wing',
  '다양한 파이썬 IDLE 개발 환경 설치와 사용법 가이드: PyCharm, VS Code, Wing IDE',
  '파이썬 개발 생산성을 극대화하는 파이참(PyCharm), VS Code, Wing 101 3대 IDE/에디터의 상세 설치 절차와 파이썬 인터프리터 연결 및 프로그램 실행법을 학습합니다.',
  '파이썬 프로그래밍 효율을 획기적으로 높여주는 대표적인 파이썬 통합 개발 환경(IDE/IDLE)인 **파이참(PyCharm)**, **비주얼 스튜디오 코드(VS Code)**, **윙 IDE(Wing 101)**의 설치 및 인터프리터 바인딩 가이드를 다룹니다.

---

## 1. 파이썬 IDE 개발 환경 용어 사전 (Glossary)

- **IDE (Integrated Development Environment)**: 소스 코드 에디터, 파이썬 인터프리터 연동, 디버거, 터미널이 하나로 통합된 개발 소프트웨어입니다.
- **PyCharm (파이참)**: JetBrains 사에서 만든 최고 수준의 파이썬 전용 IDE로, 무료 버전인 **Community 에디션**과 유료인 Professional 에디션이 제공됩니다.
- **VS Code (Visual Studio Code)**: Microsoft 사에서 만든 경량 고성능 오픈소스 에디터로, 확장 기능(**Extension**)을 통해 파이썬 개발 환경을 구축합니다.
- **Wing IDE (Wing 101)**: 크기가 매우 가볍고 직관적이어서 초보자 및 이공계 수강생 실습 교육용에 최적화된 IDE입니다.
- **Python Interpreter Binding**: IDE가 작성된 파이썬 코드를 실행할 수 있도록 PC에 설치된 `python.exe` 실행 파일의 경로를 연결해 주는 작업입니다.

---

## 2. 파이참 (PyCharm Community) 설치 및 사용 가이드

### (1) 다운로드 및 인스톨 절차
1. JetBrains 공식 사이트(`https://www.jetbrains.com/pycharm/download/`)에 접속하여 **Community 에디션** 인스톨러(`.exe`)를 다운로드합니다.
2. 설치 인스톨러를 실행하고, 설치 경로(`C:\Program Files\JetBrains\PyCharm Community Edition...`)를 지정합니다.
3. Installation Options 화면에서 필요한 파이썬 파일 연동 옵션을 체크한 후 [Next] $ightarrow$ [Install] 버튼을 눌러 설치를 완료합니다.

### (2) 파이참 프로젝트 생성 및 인터프리터 연동
1. 파이참 실행 후 [Customize] 탭에서 테마(Dark / IntelliJ Light)를 선택합니다.
2. [Projects] $ightarrow$ **[New Project]**를 클릭합니다.
3. 프로젝트 위치(`D:\myCode\pythonProject`)를 지정한 후, **[New environment]**에서 PC에 구동 중인 파이썬 인터프리터를 지정하고 [Create]를 누릅니다.
4. 왼쪽 프로젝트 메뉴에서 마우스 우클릭 $ightarrow$ [New] $ightarrow$ [Python File]을 선택하고 이름(`helloworld`)을 입력합니다.
5. 소스 코드 작성 후 상단 메뉴 [Run] $ightarrow$ [Run] (`Alt + Shift + F10`)을 눌러 하단 콘솔 창에서 결과를 확인합니다.

---

## 3. 비주얼 스튜디오 코드 (VS Code) 설치 및 파이썬 설정

### (1) VS Code 설치 및 Python Extension 추가
1. 공식 웹사이트(`https://code.visualstudio.com/`)에서 Windows 64-bit 설치 파일(`VSCodeUserSetup-x64-....exe`)을 내려받아 설치합니다.
2. 실행 후 왼쪽 네비게이션 바의 **확장 마켓플레이스 아이콘(조각 창문 모양)**을 클릭합니다.
3. 검색창에 `python`을 입력한 후, Microsoft 공식 **Python Extension**을 선택하여 [Install]을 클릭합니다.

### (2) 작업 폴더 및 인터프리터 바인딩
1. [File] $ightarrow$ [Open Folder]를 클릭하여 파이썬 작업 환경 폴더(`D:\myCode\myVSCode`)를 엽니다. ("Yes, I trust the authors" 체크)
2. 상단 메뉴 [View] $ightarrow$ **[Command Palette]** (`Ctrl + Shift + P`)를 열고 `Python: Select Interpreter`를 검색해 클릭합니다.
3. 추천 파이썬 인터프리터를 선택하여 에디터와 파이썬 엔진을 연결합니다.
4. [New File] $ightarrow$ `helloworld.py` 생성 후 `print("Hello World")`를 작성하고, 상단 오른쪽 삼각형(▶) 버튼 또는 `Ctrl + F5`를 눌러 하단 TERMINAL에서 출력을 확인합니다.

---

## 4. 윙 IDE (Wing 101) 초보자용 세팅 및 사용법

### (1) Wing 101 다운로드 및 설치
1. Wingware 공식 사이트(`https://wingware.com/`) 접속 후 [Download] $ightarrow$ **[Wing 101]** 선택 인스톨러(`wing-101-....exe`)를 다운로드합니다.
2. 인스톨러를 실행하고 라이선스 동의 후 기본 경로로 설치를 마칩니다.

### (2) 파이썬 셸(Python Shell) 및 파일 실행
1. 윈도우 시작 메뉴에서 Wing 101을 실행합니다.
2. 하단 오른쪽 **Python Shell** 프롬프트(`>>>`)에 `print("hello")`를 입력해 즉시 실행 테스트를 진행합니다.
3. 상단 [File] 아이콘을 눌러 새 파이썬 파일(`test1.py`)을 생성하고, 안전한 디렉토리(`D:\PythonCode`)에 저장합니다.
4. 상단 툴바의 **초록색 화살표(▶) 버튼**을 클릭하여 프로그램 전체를 실행하고 하단 셸 결과를 확인합니다.

---

## 5. 파이썬 주요 IDE 3종 비교 및 선택 가이드

| 파이썬 IDE 구분 | 주요 개발 타겟 및 장점 | 인터프리터 오류 시 대처법 |
| :--- | :--- | :--- |
| **PyCharm Community** | 파이썬 전용 최고의 리팩토링, 디버깅 및 프로젝트 관리 기능 | Create Project 메뉴에서 `New environment using` 파이썬 경로 재지정 |
| **VS Code** | 가볍고 빠르며 다양한 언어(C/C++, Web)를 동시에 개발하는 다목적 에디터 | `Ctrl+Shift+P` $ightarrow$ `Python: Select Interpreter` 실행 후 재선택 |
| **Wing 101** | 설치 용량이 매우 작고 대화형 Shell 중심의 직관적 초보자/교육용 IDE | 하단 Python Shell 프롬프트의 정상 구동 및 인터프리터 경로 확인 |

---

## 6. 자주 묻는 질문 (Q&A)

**Q. 파이참이나 VS Code에서 "No Python Interpreter Selected" 오류가 뜨는 이유는?**
A. IDE 에디터만 설치되고 컴퓨터에 실제 파이썬 인터프리터(CPython) 엔진이 설치되어 있지 않거나, IDE 설정에서 파이썬 실행 파일 경로(`python.exe`)가 연결되지 않았기 때문입니다. 파이썬 공식 사이트에서 파이썬을 먼져 설치한 후, Select Interpreter 기능으로 경로를 바인딩해 주면 해결됩니다.
',
  '<p>파이썬 프로그래밍 효율을 획기적으로 높여주는 대표적인 파이썬 통합 개발 환경(IDE/IDLE)인 <strong>파이참(PyCharm)</strong>, <strong>비주얼 스튜디오 코드(VS Code)</strong>, **윙 IDE(Wing 101)**의 설치 및 인터프리터 바인딩 가이드를 다룹니다.</p>
<hr>
<h2>1. 파이썬 IDE 개발 환경 용어 사전 (Glossary)</h2>
<ul>
<li><strong>IDE (Integrated Development Environment)</strong>: 소스 코드 에디터, 파이썬 인터프리터 연동, 디버거, 터미널이 하나로 통합된 개발 소프트웨어입니다.</li>
<li><strong>PyCharm (파이참)</strong>: JetBrains 사에서 만든 최고 수준의 파이썬 전용 IDE로, 무료 버전인 <strong>Community 에디션</strong>과 유료인 Professional 에디션이 제공됩니다.</li>
<li><strong>VS Code (Visual Studio Code)</strong>: Microsoft 사에서 만든 경량 고성능 오픈소스 에디터로, 확장 기능(<strong>Extension</strong>)을 통해 파이썬 개발 환경을 구축합니다.</li>
<li><strong>Wing IDE (Wing 101)</strong>: 크기가 매우 가볍고 직관적이어서 초보자 및 이공계 수강생 실습 교육용에 최적화된 IDE입니다.</li>
<li><strong>Python Interpreter Binding</strong>: IDE가 작성된 파이썬 코드를 실행할 수 있도록 PC에 설치된 <code>python.exe</code> 실행 파일의 경로를 연결해 주는 작업입니다.</li>
</ul>
<hr>
<h2>2. 파이참 (PyCharm Community) 설치 및 사용 가이드</h2>
<h3>(1) 다운로드 및 인스톨 절차</h3>
<ol>
<li>JetBrains 공식 사이트(<code>https://www.jetbrains.com/pycharm/download/</code>)에 접속하여 <strong>Community 에디션</strong> 인스톨러(<code>.exe</code>)를 다운로드합니다.</li>
<li>설치 인스톨러를 실행하고, 설치 경로(<code>C:\Program Files\JetBrains\PyCharm Community Edition...</code>)를 지정합니다.</li>
<li>Installation Options 화면에서 필요한 파이썬 파일 연동 옵션을 체크한 후 [Next] $
ightarrow$ [Install] 버튼을 눌러 설치를 완료합니다.</li>
</ol>
<h3>(2) 파이참 프로젝트 생성 및 인터프리터 연동</h3>
<ol>
<li>파이참 실행 후 [Customize] 탭에서 테마(Dark / IntelliJ Light)를 선택합니다.</li>
<li>[Projects] $
ightarrow$ **[New Project]**를 클릭합니다.</li>
<li>프로젝트 위치(<code>D:\myCode\pythonProject</code>)를 지정한 후, **[New environment]**에서 PC에 구동 중인 파이썬 인터프리터를 지정하고 [Create]를 누릅니다.</li>
<li>왼쪽 프로젝트 메뉴에서 마우스 우클릭 $
ightarrow$ [New] $
ightarrow$ [Python File]을 선택하고 이름(<code>helloworld</code>)을 입력합니다.</li>
<li>소스 코드 작성 후 상단 메뉴 [Run] $
ightarrow$ [Run] (<code>Alt + Shift + F10</code>)을 눌러 하단 콘솔 창에서 결과를 확인합니다.</li>
</ol>
<hr>
<h2>3. 비주얼 스튜디오 코드 (VS Code) 설치 및 파이썬 설정</h2>
<h3>(1) VS Code 설치 및 Python Extension 추가</h3>
<ol>
<li>공식 웹사이트(<code>https://code.visualstudio.com/</code>)에서 Windows 64-bit 설치 파일(<code>VSCodeUserSetup-x64-....exe</code>)을 내려받아 설치합니다.</li>
<li>실행 후 왼쪽 네비게이션 바의 **확장 마켓플레이스 아이콘(조각 창문 모양)**을 클릭합니다.</li>
<li>검색창에 <code>python</code>을 입력한 후, Microsoft 공식 <strong>Python Extension</strong>을 선택하여 [Install]을 클릭합니다.</li>
</ol>
<h3>(2) 작업 폴더 및 인터프리터 바인딩</h3>
<ol>
<li>[File] $
ightarrow$ [Open Folder]를 클릭하여 파이썬 작업 환경 폴더(<code>D:\myCode\myVSCode</code>)를 엽니다. (&quot;Yes, I trust the authors&quot; 체크)</li>
<li>상단 메뉴 [View] $
ightarrow$ <strong>[Command Palette]</strong> (<code>Ctrl + Shift + P</code>)를 열고 <code>Python: Select Interpreter</code>를 검색해 클릭합니다.</li>
<li>추천 파이썬 인터프리터를 선택하여 에디터와 파이썬 엔진을 연결합니다.</li>
<li>[New File] $
ightarrow$ <code>helloworld.py</code> 생성 후 <code>print(&quot;Hello World&quot;)</code>를 작성하고, 상단 오른쪽 삼각형(▶) 버튼 또는 <code>Ctrl + F5</code>를 눌러 하단 TERMINAL에서 출력을 확인합니다.</li>
</ol>
<hr>
<h2>4. 윙 IDE (Wing 101) 초보자용 세팅 및 사용법</h2>
<h3>(1) Wing 101 다운로드 및 설치</h3>
<ol>
<li>Wingware 공식 사이트(<code>https://wingware.com/</code>) 접속 후 [Download] $
ightarrow$ <strong>[Wing 101]</strong> 선택 인스톨러(<code>wing-101-....exe</code>)를 다운로드합니다.</li>
<li>인스톨러를 실행하고 라이선스 동의 후 기본 경로로 설치를 마칩니다.</li>
</ol>
<h3>(2) 파이썬 셸(Python Shell) 및 파일 실행</h3>
<ol>
<li>윈도우 시작 메뉴에서 Wing 101을 실행합니다.</li>
<li>하단 오른쪽 <strong>Python Shell</strong> 프롬프트(<code>&gt;&gt;&gt;</code>)에 <code>print(&quot;hello&quot;)</code>를 입력해 즉시 실행 테스트를 진행합니다.</li>
<li>상단 [File] 아이콘을 눌러 새 파이썬 파일(<code>test1.py</code>)을 생성하고, 안전한 디렉토리(<code>D:\PythonCode</code>)에 저장합니다.</li>
<li>상단 툴바의 <strong>초록색 화살표(▶) 버튼</strong>을 클릭하여 프로그램 전체를 실행하고 하단 셸 결과를 확인합니다.</li>
</ol>
<hr>
<h2>5. 파이썬 주요 IDE 3종 비교 및 선택 가이드</h2>
<table>
<thead>
<tr>
<th align="left">파이썬 IDE 구분</th>
<th align="left">주요 개발 타겟 및 장점</th>
<th align="left">인터프리터 오류 시 대처법</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>PyCharm Community</strong></td>
<td align="left">파이썬 전용 최고의 리팩토링, 디버깅 및 프로젝트 관리 기능</td>
<td align="left">Create Project 메뉴에서 <code>New environment using</code> 파이썬 경로 재지정</td>
</tr>
<tr>
<td align="left"><strong>VS Code</strong></td>
<td align="left">가볍고 빠르며 다양한 언어(C/C++, Web)를 동시에 개발하는 다목적 에디터</td>
<td align="left"><code>Ctrl+Shift+P</code> $</td>
</tr>
<tr>
<td align="left">ightarrow$ <code>Python: Select Interpreter</code> 실행 후 재선택</td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><strong>Wing 101</strong></td>
<td align="left">설치 용량이 매우 작고 대화형 Shell 중심의 직관적 초보자/교육용 IDE</td>
<td align="left">하단 Python Shell 프롬프트의 정상 구동 및 인터프리터 경로 확인</td>
</tr>
</tbody></table>
<hr>
<h2>6. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 파이참이나 VS Code에서 &quot;No Python Interpreter Selected&quot; 오류가 뜨는 이유는?</strong>
A. IDE 에디터만 설치되고 컴퓨터에 실제 파이썬 인터프리터(CPython) 엔진이 설치되어 있지 않거나, IDE 설정에서 파이썬 실행 파일 경로(<code>python.exe</code>)가 연결되지 않았기 때문입니다. 파이썬 공식 사이트에서 파이썬을 먼져 설치한 후, Select Interpreter 기능으로 경로를 바인딩해 주면 해결됩니다.</p>
',
  'published',
  '파이썬 IDE 설치 가이드 - PyCharm Community, VS Code Python Extension & Wing 101',
  '이공계생 및 입문자를 위한 파이썬 통합 개발 환경(IDE) 3종 PyCharm(파이참), 비주얼 스튜디오 코드(VS Code), 윙 IDE(Wing 101)의 다운로드, 설치, 인터프리터 바인딩 및 실행법을 완벽 해설합니다.',
  41,
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
