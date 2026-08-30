-- Enhanced Arduino Lessons Part 1

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'arduino',
  'ch01-arduino-introduction',
  '아두이노(Arduino) 소개와 마이크로컨트롤러 및 개발 환경',
  '피지컬 컴퓨팅의 대표 오픈소스 하드웨어 아두이노(Arduino)의 개념과 우노(Uno) 보드의 세부 스펙, 용어 정의, 통합 개발 환경(IDE) 설정법을 다룹니다.',
  '**아두이노(Arduino)**는 초보자, 예술가, 비전공자부터 전문 엔지니어에 이르기까지 센서, 모터, LED 등의 전자 부품을 손쉽게 제어할 수 있도록 만든 **오픈소스 피지컬 컴퓨팅(Physical Computing) 플랫폼**입니다. 2005년 이탈리아의 마시모 반지(Massimo Banzi) 교수진에 의해 디자인 학교 인터랙션 디자인 프로젝트로 시작되었습니다.

---

## 1. 아두이노의 핵심 용어 사전 (Glossary)

- **MCU (Microcontroller Unit)**: CPU, RAM, ROM(Flash), 입출력(I/O) 장치가 단 하나의 칩 안에 통합되어 특정 제어 목적을 수행하는 소형 컴퓨터입니다.
- **오픈소스 하드웨어 (Open-Source Hardware)**: 제품의 회로도(Schematic), 기판 배치도(PCB Layout), 라이브러리가 모두 공개되어 누구나 복제하고 개조할 수 있는 하드웨어 형태입니다.
- **스케치 (Sketch)**: 아두이노 전용 IDE에서 작성하는 C/C++ 기반의 소스 코드 프로그램 파일(`.ino`)을 뜻합니다.
- **Bootloader (부트로더)**: 외부 롬 라이터 장비 없이도 USB 시리얼 연결만으로 마이크로컨트롤러 플래시 메모리에 새 코드를 다운로드할 수 있게 돕는 극소형 시작 프로그램입니다.

---

## 2. 대표 보드: 아두이노 우노(Arduino Uno R3) 상세 스펙

| 세부 스펙 항목 | 데이터 / 규격 | 상세 설명 및 역할 |
| :--- | :--- | :--- |
| **메인 마이크로컨트롤러** | ATmega328P (Microchip/Atmel) | 8-bit AVR RISC 구조 16MHz 클록 |
| **작동 전압 (Logic Voltage)** | 5V | 아두이노 핀이 처리하는 표준 논리 전압 |
| **권장 권장 입력 전압 (Vin)** | 7V ~ 12V | DC 어댑터나 건전지 공급 전압 |
| **디지털 입출력 핀** | 14개 (D0 ~ D13) | 6개 핀은 PWM(펄스 폭 변조) 출력 지원 |
| **아날로그 입력 핀** | 6개 (A0 ~ A5) | 10-bit ADC(0 ~ 1023 단계) 변환 |
| **플래시 메모리 (Flash)** | 32 KB | 코드가 저장되는 비휘발성 공간 (0.5KB는 부트로더가 사용) |
| **SRAM (Static RAM)** | 2 KB | 변수와 실행 데이터가 보관되는 휘발성 공간 |
| **EEPROM** | 1 KB | 전원이 꺼져도 저장되는 비휘발성 데이터 공간 |

---

## 3. 아두이노 스케치(Sketch) 기본 뼈대와 작동 알고리즘

모든 아두이노 프로그램 코드는 **`setup()`**과 **`loop()`** 두 개의 함수 구조를 필수로 포함합니다.

```cpp
/*
  프로젝트: 아두이노 기본 온보드 LED 깜빡이기 (Blink)
  설명: 13번 핀에 연결된 내장 LED를 1초 간격으로 켰다 끕니다.
*/

void setup() {
  // 전원이 들어오거나 리셋 버튼을 누를 때 ''단 1회만'' 실행되는 공간
  // 주로 입출력 핀의 방향(INPUT/OUTPUT) 설정이나 시리얼 통신 초기화 수행
  pinMode(LED_BUILTIN, OUTPUT); // 13번 디지털 핀을 출력 모드로 초기화
}

void loop() {
  // setup()이 종료된 후 전원이 꺼질 때까지 ''영원히 무한 반복'' 실행되는 공간
  digitalWrite(LED_BUILTIN, HIGH); // 13번 핀에 5V전압을 인가하여 LED 켜기
  delay(1000);                     // 1000밀리초(1초) 동안 대기
  digitalWrite(LED_BUILTIN, LOW);  // 13번 핀에 0V(GND)전압을 인가하여 LED 끄기
  delay(1000);                     // 1초 동안 대기
}
```

---

## 4. 아두이노 IDE 설치 및 연결Troubleshooting 가이드

### 1) IDE 설치 및 포트 연결 단계
1. 공식 웹사이트([arduino.cc](https://www.arduino.cc/))에서 **Arduino IDE 2.x** 버전을 다운로드하여 설치합니다.
2. 아두이노 보드를 USB 케이블로 컴퓨터와 연결합니다.
3. [툴] $ightarrow$ [보드] $ightarrow$ **Arduino Uno** 선택.
4. [툴] $ightarrow$ [포트] $ightarrow$ **COMx (Windows)** 또는 **cu.usbmodemxxxx (macOS)** 선택.

### 2) 자주 발생하는 3대 오류와 해결책
- **stk500_getsync() attempt 1 of 10: not in sync error**: 
  - 원인: PC와 아두이노 간의 통신 연결 문제 또는 0번/1번 핀에 외부 통신 모듈(블루투스 등)이 꽂혀 있어서 발생합니다.
  - 해결: 0번(RX), 1번(TX) 핀에 연결된 배선을 잠시 제거한 후 업로드하거나, 포트를 재설정합니다.
- **Access Denied / 권한 오류**:
  - 원인: 시리얼 모니터 창이나 다른 프로그램이 해당 COM 포트를 점유하고 있는 경우입니다.
  - 해결: 시리얼 모니터를 닫고 업로드를 재시도합니다.

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 아두이노 Uno, Nano, Mega 보드의 차이는 무엇인가요?**
A. 우노(Uno)는 표준 입문용 보드이며, 나노(Nano)는 우노와 동일한 ATmega328P 칩을 사용하되 브레드보드에 꽂아 쓰기 좋게 소형화한 보드입니다. 메가(Mega 2560)는 핀 수가 54개로 많고 메모리가 256KB로 커 대규모 모터/센서 프로젝트에 적합합니다.
',
  '<p>**아두이노(Arduino)**는 초보자, 예술가, 비전공자부터 전문 엔지니어에 이르기까지 센서, 모터, LED 등의 전자 부품을 손쉽게 제어할 수 있도록 만든 <strong>오픈소스 피지컬 컴퓨팅(Physical Computing) 플랫폼</strong>입니다. 2005년 이탈리아의 마시모 반지(Massimo Banzi) 교수진에 의해 디자인 학교 인터랙션 디자인 프로젝트로 시작되었습니다.</p>
<hr>
<h2>1. 아두이노의 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>MCU (Microcontroller Unit)</strong>: CPU, RAM, ROM(Flash), 입출력(I/O) 장치가 단 하나의 칩 안에 통합되어 특정 제어 목적을 수행하는 소형 컴퓨터입니다.</li>
<li><strong>오픈소스 하드웨어 (Open-Source Hardware)</strong>: 제품의 회로도(Schematic), 기판 배치도(PCB Layout), 라이브러리가 모두 공개되어 누구나 복제하고 개조할 수 있는 하드웨어 형태입니다.</li>
<li><strong>스케치 (Sketch)</strong>: 아두이노 전용 IDE에서 작성하는 C/C++ 기반의 소스 코드 프로그램 파일(<code>.ino</code>)을 뜻합니다.</li>
<li><strong>Bootloader (부트로더)</strong>: 외부 롬 라이터 장비 없이도 USB 시리얼 연결만으로 마이크로컨트롤러 플래시 메모리에 새 코드를 다운로드할 수 있게 돕는 극소형 시작 프로그램입니다.</li>
</ul>
<hr>
<h2>2. 대표 보드: 아두이노 우노(Arduino Uno R3) 상세 스펙</h2>
<table>
<thead>
<tr>
<th align="left">세부 스펙 항목</th>
<th align="left">데이터 / 규격</th>
<th align="left">상세 설명 및 역할</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>메인 마이크로컨트롤러</strong></td>
<td align="left">ATmega328P (Microchip/Atmel)</td>
<td align="left">8-bit AVR RISC 구조 16MHz 클록</td>
</tr>
<tr>
<td align="left"><strong>작동 전압 (Logic Voltage)</strong></td>
<td align="left">5V</td>
<td align="left">아두이노 핀이 처리하는 표준 논리 전압</td>
</tr>
<tr>
<td align="left"><strong>권장 권장 입력 전압 (Vin)</strong></td>
<td align="left">7V ~ 12V</td>
<td align="left">DC 어댑터나 건전지 공급 전압</td>
</tr>
<tr>
<td align="left"><strong>디지털 입출력 핀</strong></td>
<td align="left">14개 (D0 ~ D13)</td>
<td align="left">6개 핀은 PWM(펄스 폭 변조) 출력 지원</td>
</tr>
<tr>
<td align="left"><strong>아날로그 입력 핀</strong></td>
<td align="left">6개 (A0 ~ A5)</td>
<td align="left">10-bit ADC(0 ~ 1023 단계) 변환</td>
</tr>
<tr>
<td align="left"><strong>플래시 메모리 (Flash)</strong></td>
<td align="left">32 KB</td>
<td align="left">코드가 저장되는 비휘발성 공간 (0.5KB는 부트로더가 사용)</td>
</tr>
<tr>
<td align="left"><strong>SRAM (Static RAM)</strong></td>
<td align="left">2 KB</td>
<td align="left">변수와 실행 데이터가 보관되는 휘발성 공간</td>
</tr>
<tr>
<td align="left"><strong>EEPROM</strong></td>
<td align="left">1 KB</td>
<td align="left">전원이 꺼져도 저장되는 비휘발성 데이터 공간</td>
</tr>
</tbody></table>
<hr>
<h2>3. 아두이노 스케치(Sketch) 기본 뼈대와 작동 알고리즘</h2>
<p>모든 아두이노 프로그램 코드는 **<code>setup()</code>**과 <strong><code>loop()</code></strong> 두 개의 함수 구조를 필수로 포함합니다.</p>
<pre><code class="language-cpp">/*
  프로젝트: 아두이노 기본 온보드 LED 깜빡이기 (Blink)
  설명: 13번 핀에 연결된 내장 LED를 1초 간격으로 켰다 끕니다.
*/

void setup() {
  // 전원이 들어오거나 리셋 버튼을 누를 때 &#39;단 1회만&#39; 실행되는 공간
  // 주로 입출력 핀의 방향(INPUT/OUTPUT) 설정이나 시리얼 통신 초기화 수행
  pinMode(LED_BUILTIN, OUTPUT); // 13번 디지털 핀을 출력 모드로 초기화
}

void loop() {
  // setup()이 종료된 후 전원이 꺼질 때까지 &#39;영원히 무한 반복&#39; 실행되는 공간
  digitalWrite(LED_BUILTIN, HIGH); // 13번 핀에 5V전압을 인가하여 LED 켜기
  delay(1000);                     // 1000밀리초(1초) 동안 대기
  digitalWrite(LED_BUILTIN, LOW);  // 13번 핀에 0V(GND)전압을 인가하여 LED 끄기
  delay(1000);                     // 1초 동안 대기
}
</code></pre>
<hr>
<h2>4. 아두이노 IDE 설치 및 연결Troubleshooting 가이드</h2>
<h3>1) IDE 설치 및 포트 연결 단계</h3>
<ol>
<li>공식 웹사이트(<a href="https://www.arduino.cc/">arduino.cc</a>)에서 <strong>Arduino IDE 2.x</strong> 버전을 다운로드하여 설치합니다.</li>
<li>아두이노 보드를 USB 케이블로 컴퓨터와 연결합니다.</li>
<li>[툴] $
ightarrow$ [보드] $
ightarrow$ <strong>Arduino Uno</strong> 선택.</li>
<li>[툴] $
ightarrow$ [포트] $
ightarrow$ <strong>COMx (Windows)</strong> 또는 <strong>cu.usbmodemxxxx (macOS)</strong> 선택.</li>
</ol>
<h3>2) 자주 발생하는 3대 오류와 해결책</h3>
<ul>
<li><strong>stk500_getsync() attempt 1 of 10: not in sync error</strong>: <ul>
<li>원인: PC와 아두이노 간의 통신 연결 문제 또는 0번/1번 핀에 외부 통신 모듈(블루투스 등)이 꽂혀 있어서 발생합니다.</li>
<li>해결: 0번(RX), 1번(TX) 핀에 연결된 배선을 잠시 제거한 후 업로드하거나, 포트를 재설정합니다.</li>
</ul>
</li>
<li><strong>Access Denied / 권한 오류</strong>:<ul>
<li>원인: 시리얼 모니터 창이나 다른 프로그램이 해당 COM 포트를 점유하고 있는 경우입니다.</li>
<li>해결: 시리얼 모니터를 닫고 업로드를 재시도합니다.</li>
</ul>
</li>
</ul>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 아두이노 Uno, Nano, Mega 보드의 차이는 무엇인가요?</strong>
A. 우노(Uno)는 표준 입문용 보드이며, 나노(Nano)는 우노와 동일한 ATmega328P 칩을 사용하되 브레드보드에 꽂아 쓰기 좋게 소형화한 보드입니다. 메가(Mega 2560)는 핀 수가 54개로 많고 메모리가 256KB로 커 대규모 모터/센서 프로젝트에 적합합니다.</p>
',
  'published',
  '아두이노 입문 가이드 - 아두이노 우노(Uno) 스펙, IDE 설치, 핵심 용어 및 스케치',
  '피지컬 컴퓨팅의 대명사 아두이노의 역사, ATmega328P 마이크로컨트롤러 구조, 우노(Uno) 핀 구조, 전문 용어 사전, IDE 환경설정 및 setup/loop 스케치 기본 뼈대를 상세 해설합니다.',
  1,
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
  'arduino',
  'ch02-basic-electronics',
  '전기전자 기본 상식 (전압, 전류, 저항, 옴의 법칙)',
  '아두이노 회로 부품의 파손을 막고 안전한 피지컬 회로를 구성하기 위한 전압, 전류, 저항의 관계와 옴의 법칙, 브레드보드 실전 활용법을 배웁니다.',
  '아두이노 부품을 태우지 않고 안전하게 회로를 설계하려면, 전기의 근본 원리인 **전압, 전류, 저항의 관계**와 **옴의 법칙(Ohm''s Law)**을 확실하게 이해해야 합니다.

---

## 1. 전기 핵심 용어 사전 (Glossary)

- **전압 (Voltage, $V$)**: 회로에 전하를 밀어붙이는 전위차(전기적 압력)입니다. 단위는 볼트(V)입니다.
- **전류 (Current, $I$)**: 도선을 따라 1초 동안 흘러가는 전하의 양입니다. 단위는 암페어(A) 또는 밀리암페어(mA)입니다. ($1\text{A} = 1000\text{mA}$)
- **저항 (Resistor, $R$)**: 전류의 흐름을 일정하게 제한하거나 전자 부품을 보호하는 일종의 수도관 방해물입니다. 단위는 옴($\Omega$)입니다.
- **전력 (Power, $P$)**: 전기가 1초 동안 수행하는 일의 양(에너지 소비율)입니다. 단위는 와트(W)입니다. ($P = V \times I$)
- **GND (Ground, 접지)**: 회로의 전압 측정 기준점이 되는 0V(기준 전위) 라인입니다.

---

## 2. 옴의 법칙(Ohm''s Law)과 공식 활용

옴의 법칙은 도선에 흐르는 전류의 양이 전압에 비례하고 저항에 반비례한다는 전기공학 최고의 기본 법칙입니다.

$$V = I \times R \qquad I = \frac{V}{R} \qquad R = \frac{V}{I}$$

### 실전 LED 보호 저항 계산 가이드
아두이노 디지털 핀에서 5V를 출력할 때, 적색(Red) LED를 켜고자 하는 경우:
- 아두이노 공급 전압 $V_{cc} = 5.0\text{V}$
- 적색 LED 작동 강하 전압 $V_{f} \approx 2.0\text{V}$
- LED 권장 안전 동작 전류 $I_d = 15\text{mA} = 0.015\text{A}$

$$R = \frac{V_{cc} - V_f}{I_d} = \frac{5.0\text{V} - 2.0\text{V}}{0.015\text{A}} = \frac{3.0\text{V}}{0.015\text{A}} = 200\Omega$$

따라서 시중에서 가장 구하기 쉬운 **$220\Omega$ 또는 $330\Omega$ 저항**을 LED와 직렬로 묶어줍니다.

---

## 3. 저항의 색띠(Color Code) 읽는 방법

저항 표면에 그어진 4개 또는 5개의 색띠를 보고 저항값을 식별할 수 있습니다.

| 색상 | 숫자 (1, 2째 띠) | 승수 (3째 띠) | 오차 (4째 띠) |
| :--- | :--- | :--- | :--- |
| **검정 (Black)** | 0 | $\times 10^0 (1)$ | - |
| **갈색 (Brown)** | 1 | $\times 10^1 (10)$ | $\pm 1\%$ |
| **빨강 (Red)** | 2 | $\times 10^2 (100)$ | $\pm 2\%$ |
| **주황 (Orange)** | 3 | $\times 10^3 (1K)$ | - |
| **노랑 (Yellow)** | 4 | $\times 10^4 (10K)$ | - |
| **초록 (Green)** | 5 | $\times 10^5 (100K)$ | $\pm 0.5\%$ |
| **파랑 (Blue)** | 6 | $\times 10^6 (1M)$ | - |
| **보라 (Violet)** | 7 | $\times 10^7$ | - |
| **금색 (Gold)** | - | $\times 0.1$ | $\pm 5\%$ |
| **은색 (Silver)** | - | $\times 0.01$ | $\pm 10\%$ |

> 💡 **예시**: **[적색 - 적색 - 갈색 - 금색]** = $2 \, 2 \times 10^1 = 220\Omega \, (\pm 5\%)$

---

## 4. 브레드보드(Breadboard) 내부 핀 맵 구조

납땜 없이 부품을 꽂아 테스트하는 브레드보드의 내부 핀 맵을 반드시 숙지해야 단락(Short) 사고를 방지할 수 있습니다.

```
[ 전원 버스 라인 (+ / -) ]  ---> 가로(Horizontal) 핀 전체가 하나로 연결됨
(+) ------------------------------------------------------------- 5V
(-) ------------------------------------------------------------- GND

[ 부품 터미널 영역 (a b c d e | f g h i j) ] ---> 세로(Vertical) 5개 구멍이 세로로 연결됨
(1)  [o o o o o]   [o o o o o]  (1번 세로줄 공통 연결)
(2)  [o o o o o]   [o o o o o]  (2번 세로줄 공통 연결)
```

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 직렬 연결과 병렬 연결에서 전압과 전류는 어떻게 다른가요?**
A. 직렬 연결(Series)은 전류가 일정하고 전압이 저항 비율에 따라 나누어 걸립니다. 반면 병렬 연결(Parallel)은 각 부품에 걸리는 전압이 5V로 일정하고, 전체 전류는 각 브랜치 전류의 합으로 증가합니다.
',
  '<p>아두이노 부품을 태우지 않고 안전하게 회로를 설계하려면, 전기의 근본 원리인 <strong>전압, 전류, 저항의 관계</strong>와 **옴의 법칙(Ohm&#39;s Law)**을 확실하게 이해해야 합니다.</p>
<hr>
<h2>1. 전기 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>전압 (Voltage, $V$)</strong>: 회로에 전하를 밀어붙이는 전위차(전기적 압력)입니다. 단위는 볼트(V)입니다.</li>
<li><strong>전류 (Current, $I$)</strong>: 도선을 따라 1초 동안 흘러가는 전하의 양입니다. 단위는 암페어(A) 또는 밀리암페어(mA)입니다. ($1\text{A} = 1000\text{mA}$)</li>
<li><strong>저항 (Resistor, $R$)</strong>: 전류의 흐름을 일정하게 제한하거나 전자 부품을 보호하는 일종의 수도관 방해물입니다. 단위는 옴($\Omega$)입니다.</li>
<li><strong>전력 (Power, $P$)</strong>: 전기가 1초 동안 수행하는 일의 양(에너지 소비율)입니다. 단위는 와트(W)입니다. ($P = V \times I$)</li>
<li><strong>GND (Ground, 접지)</strong>: 회로의 전압 측정 기준점이 되는 0V(기준 전위) 라인입니다.</li>
</ul>
<hr>
<h2>2. 옴의 법칙(Ohm&#39;s Law)과 공식 활용</h2>
<p>옴의 법칙은 도선에 흐르는 전류의 양이 전압에 비례하고 저항에 반비례한다는 전기공학 최고의 기본 법칙입니다.</p>
<p>$$V = I \times R \qquad I = \frac{V}{R} \qquad R = \frac{V}{I}$$</p>
<h3>실전 LED 보호 저항 계산 가이드</h3>
<p>아두이노 디지털 핀에서 5V를 출력할 때, 적색(Red) LED를 켜고자 하는 경우:</p>
<ul>
<li>아두이노 공급 전압 $V_{cc} = 5.0\text{V}$</li>
<li>적색 LED 작동 강하 전압 $V_{f} \approx 2.0\text{V}$</li>
<li>LED 권장 안전 동작 전류 $I_d = 15\text{mA} = 0.015\text{A}$</li>
</ul>
<p>$$R = \frac{V_{cc} - V_f}{I_d} = \frac{5.0\text{V} - 2.0\text{V}}{0.015\text{A}} = \frac{3.0\text{V}}{0.015\text{A}} = 200\Omega$$</p>
<p>따라서 시중에서 가장 구하기 쉬운 <strong>$220\Omega$ 또는 $330\Omega$ 저항</strong>을 LED와 직렬로 묶어줍니다.</p>
<hr>
<h2>3. 저항의 색띠(Color Code) 읽는 방법</h2>
<p>저항 표면에 그어진 4개 또는 5개의 색띠를 보고 저항값을 식별할 수 있습니다.</p>
<table>
<thead>
<tr>
<th align="left">색상</th>
<th align="left">숫자 (1, 2째 띠)</th>
<th align="left">승수 (3째 띠)</th>
<th align="left">오차 (4째 띠)</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>검정 (Black)</strong></td>
<td align="left">0</td>
<td align="left">$\times 10^0 (1)$</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left"><strong>갈색 (Brown)</strong></td>
<td align="left">1</td>
<td align="left">$\times 10^1 (10)$</td>
<td align="left">$\pm 1%$</td>
</tr>
<tr>
<td align="left"><strong>빨강 (Red)</strong></td>
<td align="left">2</td>
<td align="left">$\times 10^2 (100)$</td>
<td align="left">$\pm 2%$</td>
</tr>
<tr>
<td align="left"><strong>주황 (Orange)</strong></td>
<td align="left">3</td>
<td align="left">$\times 10^3 (1K)$</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left"><strong>노랑 (Yellow)</strong></td>
<td align="left">4</td>
<td align="left">$\times 10^4 (10K)$</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left"><strong>초록 (Green)</strong></td>
<td align="left">5</td>
<td align="left">$\times 10^5 (100K)$</td>
<td align="left">$\pm 0.5%$</td>
</tr>
<tr>
<td align="left"><strong>파랑 (Blue)</strong></td>
<td align="left">6</td>
<td align="left">$\times 10^6 (1M)$</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left"><strong>보라 (Violet)</strong></td>
<td align="left">7</td>
<td align="left">$\times 10^7$</td>
<td align="left">-</td>
</tr>
<tr>
<td align="left"><strong>금색 (Gold)</strong></td>
<td align="left">-</td>
<td align="left">$\times 0.1$</td>
<td align="left">$\pm 5%$</td>
</tr>
<tr>
<td align="left"><strong>은색 (Silver)</strong></td>
<td align="left">-</td>
<td align="left">$\times 0.01$</td>
<td align="left">$\pm 10%$</td>
</tr>
</tbody></table>
<blockquote>
<p>💡 <strong>예시</strong>: <strong>[적색 - 적색 - 갈색 - 금색]</strong> = $2 , 2 \times 10^1 = 220\Omega , (\pm 5%)$</p>
</blockquote>
<hr>
<h2>4. 브레드보드(Breadboard) 내부 핀 맵 구조</h2>
<p>납땜 없이 부품을 꽂아 테스트하는 브레드보드의 내부 핀 맵을 반드시 숙지해야 단락(Short) 사고를 방지할 수 있습니다.</p>
<pre><code>[ 전원 버스 라인 (+ / -) ]  ---&gt; 가로(Horizontal) 핀 전체가 하나로 연결됨
(+) ------------------------------------------------------------- 5V
(-) ------------------------------------------------------------- GND

[ 부품 터미널 영역 (a b c d e | f g h i j) ] ---&gt; 세로(Vertical) 5개 구멍이 세로로 연결됨
(1)  [o o o o o]   [o o o o o]  (1번 세로줄 공통 연결)
(2)  [o o o o o]   [o o o o o]  (2번 세로줄 공통 연결)
</code></pre>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 직렬 연결과 병렬 연결에서 전압과 전류는 어떻게 다른가요?</strong>
A. 직렬 연결(Series)은 전류가 일정하고 전압이 저항 비율에 따라 나누어 걸립니다. 반면 병렬 연결(Parallel)은 각 부품에 걸리는 전압이 5V로 일정하고, 전체 전류는 각 브랜치 전류의 합으로 증가합니다.</p>
',
  'published',
  '아두이노 회로 기초 - 전압(V), 전류(I), 저항(R), 옴의 법칙, 전력 및 브레드보드',
  '임베디드 회로 설계의 기초인 전압(V), 전류(I), 저항(R), 전력(P) 개념, 옴의 법칙 계산법, LED 저항 선택 가이드, 직렬/병렬 연결과 브레드보드 내부 매핑을 해설합니다.',
  2,
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
  'arduino',
  'ch03-arduino-output-digital-pwm',
  '아두이노 출력 이해하기 (디지털 출력과 PWM)',
  '아두이노 디지털 출력과 PWM(펄스 폭 변조) 기법을 사용하여 LED 켜기/끄기, 밝기 연속 조절 및 피에조 부저 음계 출력을 실습합니다.',
  '아두이노 입출력 핀에 전압을 내보내는 **출력(Output) 제어**는 가장 기본적인 액추에이터 제어 방식입니다.

---

## 1. 출력 제어 용어 사전 (Glossary)

- **digitalWrite**: 지정한 디지털 핀에 5V(HIGH) 또는 0V(LOW)의 이분법적 논리 전압을 내보내는 함수입니다.
- **PWM (Pulse Duty Modulation)**: 디지털 신호의 ON/OFF 고속 스위칭 비율을 조절하여 의사(Pseudo) 아날로그 전압 효과를 연출하는 기술입니다.
- **Duty Cycle (듀티 사이클)**: 한 주기의 전체 시간 중 신호가 HIGH(5V)를 유지하는 시간의 비율(%)입니다.
- **Piezo Buzzer (피에조 부저)**: 압전 효과를 이용하여 전기 신호의 주파수(Hz)에 따라 물리적 진동판을 울려 소리를 내는 소자입니다.

---

## 2. 디지털 출력 (Digital Output) 실습

```cpp
// 8번 핀에 연결된 외부 LED를 0.5초 간격으로 점멸
const int ledPin = 8;

void setup() {
  pinMode(ledPin, OUTPUT); // 8번 핀의 모드를 출력(OUTPUT)으로 지정
}

void loop() {
  digitalWrite(ledPin, HIGH); // 8번 핀 5V 출력 (LED ON)
  delay(500);
  digitalWrite(ledPin, LOW);  // 8번 핀 0V 출력 (LED OFF)
  delay(500);
}
```

---

## 3. PWM (펄스 폭 변조) 원리와 `analogWrite()`

아두이노 우노의 디지털 핀 중 물결표시(`~`)가 있는 **3, 5, 6, 9, 10, 11번 핀**은 약 490Hz (5, 6번은 980Hz)의 주파수로 PWM 출력을 지원합니다.

- `analogWrite(pin, 0)`: Duty Cycle 0% $ightarrow$ 실질 전압 0V (최저 밝기)
- `analogWrite(pin, 127)`: Duty Cycle 50% $ightarrow$ 실질 전압 2.5V (중간 밝기)
- `analogWrite(pin, 255)`: Duty Cycle 100% $ightarrow$ 실질 전압 5.0V (최고 밝기)

```cpp
// 9번 PWM 핀을 활용한 LED Fade(숨쉬기) 효과
const int pwmPin = 9;

void setup() {
  pinMode(pwmPin, OUTPUT);
}

void loop() {
  // 밝기가 0에서 255까지 솟구침
  for (int b = 0; b <= 255; b += 5) {
    analogWrite(pwmPin, b);
    delay(20);
  }
  // 밝기가 255에서 0으로 떨어짐
  for (int b = 255; b >= 0; b -= 5) {
    analogWrite(pwmPin, b);
    delay(20);
  }
}
```

---

## 4. 피에조 부저 음계 제어 (`tone()` / `noTone()`)

`tone(pin, frequency, duration)` 함수를 사용하면 구형파(Square Wave)를 발생시켜 음계를 연주할 수 있습니다.

| 음계 (Note) | 주파수 (Hz) | 비고 |
| :--- | :--- | :--- |
| **도 (C4)** | 262 Hz | 4옥타브 도 |
| **레 (D4)** | 294 Hz | |
| **미 (E4)** | 330 Hz | |
| **파 (F4)** | 349 Hz | |
| **솔 (G4)** | 392 Hz | |
| **라 (A4)** | 440 Hz | 표준 음고 |
| **시 (B4)** | 494 Hz | |
| **도 (C5)** | 523 Hz | 5옥타브 도 |

```cpp
const int buzzerPin = 5;
int melody[] = {262, 294, 330, 349, 392, 440, 494, 523};

void setup() {
  for (int i = 0; i < 8; i++) {
    tone(buzzerPin, melody[i], 250); // 0.25초 동안 해당 음 출력
    delay(300);
  }
  noTone(buzzerPin); // 소리 끄기
}
void loop() {}
```

---

## 5. 자주 묻는 질문 (Q&A)

**Q. `digitalWrite(13, 128)` 같이 숫자를 적으면 어떻게 되나요?**
A. `digitalWrite` 함수는 0(LOW)이 아닌 모든 숫자를 단순히 HIGH(5V)로 인지하여 켜버립니다. 아날로그처럼 밝기를 조절하려면 반드시 `analogWrite()`를 써야 합니다.
',
  '<p>아두이노 입출력 핀에 전압을 내보내는 <strong>출력(Output) 제어</strong>는 가장 기본적인 액추에이터 제어 방식입니다.</p>
<hr>
<h2>1. 출력 제어 용어 사전 (Glossary)</h2>
<ul>
<li><strong>digitalWrite</strong>: 지정한 디지털 핀에 5V(HIGH) 또는 0V(LOW)의 이분법적 논리 전압을 내보내는 함수입니다.</li>
<li><strong>PWM (Pulse Duty Modulation)</strong>: 디지털 신호의 ON/OFF 고속 스위칭 비율을 조절하여 의사(Pseudo) 아날로그 전압 효과를 연출하는 기술입니다.</li>
<li><strong>Duty Cycle (듀티 사이클)</strong>: 한 주기의 전체 시간 중 신호가 HIGH(5V)를 유지하는 시간의 비율(%)입니다.</li>
<li><strong>Piezo Buzzer (피에조 부저)</strong>: 압전 효과를 이용하여 전기 신호의 주파수(Hz)에 따라 물리적 진동판을 울려 소리를 내는 소자입니다.</li>
</ul>
<hr>
<h2>2. 디지털 출력 (Digital Output) 실습</h2>
<pre><code class="language-cpp">// 8번 핀에 연결된 외부 LED를 0.5초 간격으로 점멸
const int ledPin = 8;

void setup() {
  pinMode(ledPin, OUTPUT); // 8번 핀의 모드를 출력(OUTPUT)으로 지정
}

void loop() {
  digitalWrite(ledPin, HIGH); // 8번 핀 5V 출력 (LED ON)
  delay(500);
  digitalWrite(ledPin, LOW);  // 8번 핀 0V 출력 (LED OFF)
  delay(500);
}
</code></pre>
<hr>
<h2>3. PWM (펄스 폭 변조) 원리와 <code>analogWrite()</code></h2>
<p>아두이노 우노의 디지털 핀 중 물결표시(<code>~</code>)가 있는 <strong>3, 5, 6, 9, 10, 11번 핀</strong>은 약 490Hz (5, 6번은 980Hz)의 주파수로 PWM 출력을 지원합니다.</p>
<ul>
<li><code>analogWrite(pin, 0)</code>: Duty Cycle 0% $
ightarrow$ 실질 전압 0V (최저 밝기)</li>
<li><code>analogWrite(pin, 127)</code>: Duty Cycle 50% $
ightarrow$ 실질 전압 2.5V (중간 밝기)</li>
<li><code>analogWrite(pin, 255)</code>: Duty Cycle 100% $
ightarrow$ 실질 전압 5.0V (최고 밝기)</li>
</ul>
<pre><code class="language-cpp">// 9번 PWM 핀을 활용한 LED Fade(숨쉬기) 효과
const int pwmPin = 9;

void setup() {
  pinMode(pwmPin, OUTPUT);
}

void loop() {
  // 밝기가 0에서 255까지 솟구침
  for (int b = 0; b &lt;= 255; b += 5) {
    analogWrite(pwmPin, b);
    delay(20);
  }
  // 밝기가 255에서 0으로 떨어짐
  for (int b = 255; b &gt;= 0; b -= 5) {
    analogWrite(pwmPin, b);
    delay(20);
  }
}
</code></pre>
<hr>
<h2>4. 피에조 부저 음계 제어 (<code>tone()</code> / <code>noTone()</code>)</h2>
<p><code>tone(pin, frequency, duration)</code> 함수를 사용하면 구형파(Square Wave)를 발생시켜 음계를 연주할 수 있습니다.</p>
<table>
<thead>
<tr>
<th align="left">음계 (Note)</th>
<th align="left">주파수 (Hz)</th>
<th align="left">비고</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>도 (C4)</strong></td>
<td align="left">262 Hz</td>
<td align="left">4옥타브 도</td>
</tr>
<tr>
<td align="left"><strong>레 (D4)</strong></td>
<td align="left">294 Hz</td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><strong>미 (E4)</strong></td>
<td align="left">330 Hz</td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><strong>파 (F4)</strong></td>
<td align="left">349 Hz</td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><strong>솔 (G4)</strong></td>
<td align="left">392 Hz</td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><strong>라 (A4)</strong></td>
<td align="left">440 Hz</td>
<td align="left">표준 음고</td>
</tr>
<tr>
<td align="left"><strong>시 (B4)</strong></td>
<td align="left">494 Hz</td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><strong>도 (C5)</strong></td>
<td align="left">523 Hz</td>
<td align="left">5옥타브 도</td>
</tr>
</tbody></table>
<pre><code class="language-cpp">const int buzzerPin = 5;
int melody[] = {262, 294, 330, 349, 392, 440, 494, 523};

void setup() {
  for (int i = 0; i &lt; 8; i++) {
    tone(buzzerPin, melody[i], 250); // 0.25초 동안 해당 음 출력
    delay(300);
  }
  noTone(buzzerPin); // 소리 끄기
}
void loop() {}
</code></pre>
<hr>
<h2>5. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>digitalWrite(13, 128)</code> 같이 숫자를 적으면 어떻게 되나요?</strong>
A. <code>digitalWrite</code> 함수는 0(LOW)이 아닌 모든 숫자를 단순히 HIGH(5V)로 인지하여 켜버립니다. 아날로그처럼 밝기를 조절하려면 반드시 <code>analogWrite()</code>를 써야 합니다.</p>
',
  'published',
  '아두이노 출력 - digitalWrite, PWM analogWrite, 듀티 사이클 및 피에조 부저',
  '디지털 핀 출력(digitalWrite), PWM(Pulse Width Modulation) 듀티 사이클 원리와 analogWrite(), LED 숨쉬기 효과 및 피에조 부저 tone/noTone 멜로디 생성을 해설합니다.',
  3,
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
  'arduino',
  'ch04-arduino-input-digital-analog',
  '아두이노 입력 이해하기 (디지털 입력과 아날로그 입력)',
  '버튼 입력 시 발생하는 플로팅 현상과 이를 해결하는 풀업/풀다운 저항, ADC를 이용한 아날로그 전압 읽기 및 map() 범위 재배치 함수를 배웁니다.',
  '아두이노가 스위치의 누름이나 외부 센서의 신호를 읽어 들여 판단을 내리는 **입력(Input) 제어** 기법을 알아봅니다.

---

## 1. 입력 제어 용어 사전 (Glossary)

- **Floating (플로팅)**: 핀이 5V나 GND 어디에도 확실히 연결되지 않아 정전기 잡음으로 논리 값이 무작위로 튀는 불안정 현상입니다.
- **Pull-up / Pull-down (풀업/풀다운)**: 플로팅을 방지하기 위해 핀을 5V 전원(풀업) 또는 GND(풀다운)에 고저항($10\text{K}\Omega$)으로 묶어두는 회로 방식입니다.
- **ADC (Analog-to-Digital Converter)**: 아날로그 연속 전압(0~5V)을 디지털 이진 정수값(0~1023)으로 변환해주는 장치입니다.
- **Debounce (디바운스)**: 스위치 물리 접점이 붙을 때 수 ms 동안 발생하는 미세 튕김(Chattering) 잡음을 소프트웨어/하드웨어적으로 제거하는 기술입니다.

---

## 2. 디지털 입력과 내부 풀업 (`INPUT_PULLUP`)

스위치 회로를 만들 때 외부 저항을 생략하고 아두이노 MCU 내부에 내장된 $20\text{K}\Omega \sim 50\text{K}\Omega$ 풀업 저항을 활성화하여 간편하게 스위치를 연결할 수 있습니다.

```
[내부 풀업 스위치 회로 연결]
아두이노 핀(D2) ------------ (스위치 핀 1)
                     (스위치 핀 2) ------------ GND
```

```cpp
const int buttonPin = 2;
const int ledPin = 13;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP); // 내부 풀업 입력 모드 활성화
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // 스위치를 누르면 GND와 연결되어 digitalRead() 값은 LOW(0)가 됨
  int btnState = digitalRead(buttonPin);
  
  if (btnState == LOW) {
    digitalWrite(ledPin, HIGH); // 버튼 누름 상태 -> LED ON
  } else {
    digitalWrite(ledPin, LOW);  // 안 누름 상태 -> LED OFF
  }
}
```

---

## 3. 아날로그 입력 (`analogRead`)과 `map()` 함수

아두이노 우노의 **A0 ~ A5 핀**은 10-bit ADC가 적용되어 전압을 1024단계($2^{10}$)로 읽습니다.

- 전압 $0\text{V} \rightarrow 0$
- 전압 $2.5\text{V} \rightarrow 511$
- 전압 $5.0\text{V} \rightarrow 1023$

```cpp
// 가변저항(Potentiometer)으로 LED 밝기 실시간 제어
const int potPin = A0;
const int ledPin = 9; // PWM 핀

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int rawValue = analogRead(potPin); // 0 ~ 1023 읽기
  
  // 0~1023 아날로그 입력 범위를 0~255 PWM 출력 범위로 1:1 변환
  int pwmValue = map(rawValue, 0, 1023, 0, 255);
  
  analogWrite(ledPin, pwmValue); // 밝기 조절
  
  Serial.print("Raw ADC: "); Serial.print(rawValue);
  Serial.print(" -> PWM: "); Serial.println(pwmValue);
  delay(50);
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. `map()` 함수를 직접 수학 공식으로 만들려면 어떻게 적어야 하나요?**
A. `int pwmValue = rawValue / 4;` (1024 / 256 = 4이므로 단순 4로 나누기)로 작성하셔도 동일하게 0~255 범위가 계산됩니다.
',
  '<p>아두이노가 스위치의 누름이나 외부 센서의 신호를 읽어 들여 판단을 내리는 <strong>입력(Input) 제어</strong> 기법을 알아봅니다.</p>
<hr>
<h2>1. 입력 제어 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Floating (플로팅)</strong>: 핀이 5V나 GND 어디에도 확실히 연결되지 않아 정전기 잡음으로 논리 값이 무작위로 튀는 불안정 현상입니다.</li>
<li><strong>Pull-up / Pull-down (풀업/풀다운)</strong>: 플로팅을 방지하기 위해 핀을 5V 전원(풀업) 또는 GND(풀다운)에 고저항($10\text{K}\Omega$)으로 묶어두는 회로 방식입니다.</li>
<li><strong>ADC (Analog-to-Digital Converter)</strong>: 아날로그 연속 전압(0<del>5V)을 디지털 이진 정수값(0</del>1023)으로 변환해주는 장치입니다.</li>
<li><strong>Debounce (디바운스)</strong>: 스위치 물리 접점이 붙을 때 수 ms 동안 발생하는 미세 튕김(Chattering) 잡음을 소프트웨어/하드웨어적으로 제거하는 기술입니다.</li>
</ul>
<hr>
<h2>2. 디지털 입력과 내부 풀업 (<code>INPUT_PULLUP</code>)</h2>
<p>스위치 회로를 만들 때 외부 저항을 생략하고 아두이노 MCU 내부에 내장된 $20\text{K}\Omega \sim 50\text{K}\Omega$ 풀업 저항을 활성화하여 간편하게 스위치를 연결할 수 있습니다.</p>
<pre><code>[내부 풀업 스위치 회로 연결]
아두이노 핀(D2) ------------ (스위치 핀 1)
                     (스위치 핀 2) ------------ GND
</code></pre>
<pre><code class="language-cpp">const int buttonPin = 2;
const int ledPin = 13;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP); // 내부 풀업 입력 모드 활성화
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // 스위치를 누르면 GND와 연결되어 digitalRead() 값은 LOW(0)가 됨
  int btnState = digitalRead(buttonPin);
  
  if (btnState == LOW) {
    digitalWrite(ledPin, HIGH); // 버튼 누름 상태 -&gt; LED ON
  } else {
    digitalWrite(ledPin, LOW);  // 안 누름 상태 -&gt; LED OFF
  }
}
</code></pre>
<hr>
<h2>3. 아날로그 입력 (<code>analogRead</code>)과 <code>map()</code> 함수</h2>
<p>아두이노 우노의 <strong>A0 ~ A5 핀</strong>은 10-bit ADC가 적용되어 전압을 1024단계($2^{10}$)로 읽습니다.</p>
<ul>
<li>전압 $0\text{V} \rightarrow 0$</li>
<li>전압 $2.5\text{V} \rightarrow 511$</li>
<li>전압 $5.0\text{V} \rightarrow 1023$</li>
</ul>
<pre><code class="language-cpp">// 가변저항(Potentiometer)으로 LED 밝기 실시간 제어
const int potPin = A0;
const int ledPin = 9; // PWM 핀

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int rawValue = analogRead(potPin); // 0 ~ 1023 읽기
  
  // 0~1023 아날로그 입력 범위를 0~255 PWM 출력 범위로 1:1 변환
  int pwmValue = map(rawValue, 0, 1023, 0, 255);
  
  analogWrite(ledPin, pwmValue); // 밝기 조절
  
  Serial.print(&quot;Raw ADC: &quot;); Serial.print(rawValue);
  Serial.print(&quot; -&gt; PWM: &quot;); Serial.println(pwmValue);
  delay(50);
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>map()</code> 함수를 직접 수학 공식으로 만들려면 어떻게 적어야 하나요?</strong>
A. <code>int pwmValue = rawValue / 4;</code> (1024 / 256 = 4이므로 단순 4로 나누기)로 작성하셔도 동일하게 0~255 범위가 계산됩니다.</p>
',
  'published',
  '아두이노 입력 - digitalRead, INPUT_PULLUP, 플로팅, ADC analogRead 및 map',
  '버튼 스위치 digitalRead(), 플로팅 현상 해결을 위한 풀업/풀다운 회로와 내부 풀업 INPUT_PULLUP, 10-bit ADC 기반 analogRead()와 map() 데이터 변환을 배웁니다.',
  4,
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
