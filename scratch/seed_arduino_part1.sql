-- Seed Arduino Lessons Part 1

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'arduino',
  'ch01-arduino-introduction',
  '아두이노(Arduino) 소개와 마이크로컨트롤러 및 개발 환경',
  '피지컬 컴퓨팅의 대표적인 오픈소스 하드웨어 플랫폼인 아두이노(Arduino)의 개념과 우노(Uno) 보드 구조, 통합 개발 환경(IDE) 사용법을 다룹니다.',
  '**아두이노(Arduino)**는 초보자나 비전공자도 센서, 모터, LED 등의 전자 부품을 손쉽게 제어할 수 있도록 만든 **오픈소스 피지컬 컴퓨팅 플랫폼**입니다.

---

## 1. 아두이노의 주요 특징

1. **오픈소스 하드웨어 & 소프트웨어**: 회로도와 라이브러리가 완전히 공개되어 있어 누구나 자유롭게 제작하고 확장할 수 있습니다.
2. **쉬운 C/C++ 기반 스케치(Sketch)**: 복잡한 펌웨어 설정 없이 간단한 함수 호출만으로 마이크로컨트롤러를 제어합니다.
3. **풍부한 생태계와 센서 지원**: 전 세계 개발자들이 만든 수많은 센서 및 액추에이터 전용 라이브러리를 활용할 수 있습니다.

---

## 2. 아두이노 우노(Uno) 보드의 구조 분석

가장 입문용으로 많이 쓰이는 **아두이노 우노(Arduino Uno R3)**의 핵심 요소입니다.

- **ATmega328P 마이크로컨트롤러**: 8-bit CPU, 32KB Flash 메모리, 2KB SRAM 탑재.
- **디지털 입출력 핀 (Digital I/O Pins 0 ~ 13)**: 0 또는 1 (0V 또는 5V) 신호를 주고받는 핀 (3, 5, 6, 9, 10, 11은 PWM 출력 겸용).
- **아날로그 입력 핀 (Analog In A0 ~ A5)**: 0V ~ 5V 사이의 연속적인 전압을 10-bit(0 ~ 1023) 디지털 값으로 측정.
- **전원 핀 (Power Pins)**: 5V, 3.3V 전원 공급 핀 및 GND(그라운드) 접지 핀.

---

## 3. 아두이노 스케치(Sketch) 기본 뼈대

아두이노 프로그램 코드는 **`setup()`**과 **`loop()`** 두 개의 필수 함수로 구성됩니다.

```cpp
void setup() {
  // 보드가 전원에 연결되거나 리셋될 때 단 1번만 실행되는 초기화 구역
  pinMode(13, OUTPUT); // 13번 핀을 출력 모드로 설정
}

void loop() {
  // setup() 실행이 끝난 후 전원이 꺼질 때까지 무한히 반복 실행되는 구역
  digitalWrite(13, HIGH); // 13번 핀에 5V 전압 출력 (LED 켜기)
  delay(1000);            // 1초(1000ms) 대기
  digitalWrite(13, LOW);  // 13번 핀에 0V 전압 출력 (LED 끄기)
  delay(1000);            // 1초 대기
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 아두이노 보드를 PC에 연결했는데 IDE에서 업로드 오류가 발생해요.**
A. [툴] $ightarrow$ [보드] 메뉴에서 **Arduino Uno**가 잘 선택되어 있는지 확인하고, [툴] $ightarrow$ [포트] 메뉴에서 아두이노가 연결된 **COM 포트(Windows) / tty.usbmodem(macOS)**가 올바르게 선택되었는지 점검하세요.
',
  '<p>**아두이노(Arduino)**는 초보자나 비전공자도 센서, 모터, LED 등의 전자 부품을 손쉽게 제어할 수 있도록 만든 <strong>오픈소스 피지컬 컴퓨팅 플랫폼</strong>입니다.</p>
<hr>
<h2>1. 아두이노의 주요 특징</h2>
<ol>
<li><strong>오픈소스 하드웨어 &amp; 소프트웨어</strong>: 회로도와 라이브러리가 완전히 공개되어 있어 누구나 자유롭게 제작하고 확장할 수 있습니다.</li>
<li><strong>쉬운 C/C++ 기반 스케치(Sketch)</strong>: 복잡한 펌웨어 설정 없이 간단한 함수 호출만으로 마이크로컨트롤러를 제어합니다.</li>
<li><strong>풍부한 생태계와 센서 지원</strong>: 전 세계 개발자들이 만든 수많은 센서 및 액추에이터 전용 라이브러리를 활용할 수 있습니다.</li>
</ol>
<hr>
<h2>2. 아두이노 우노(Uno) 보드의 구조 분석</h2>
<p>가장 입문용으로 많이 쓰이는 **아두이노 우노(Arduino Uno R3)**의 핵심 요소입니다.</p>
<ul>
<li><strong>ATmega328P 마이크로컨트롤러</strong>: 8-bit CPU, 32KB Flash 메모리, 2KB SRAM 탑재.</li>
<li><strong>디지털 입출력 핀 (Digital I/O Pins 0 ~ 13)</strong>: 0 또는 1 (0V 또는 5V) 신호를 주고받는 핀 (3, 5, 6, 9, 10, 11은 PWM 출력 겸용).</li>
<li><strong>아날로그 입력 핀 (Analog In A0 ~ A5)</strong>: 0V ~ 5V 사이의 연속적인 전압을 10-bit(0 ~ 1023) 디지털 값으로 측정.</li>
<li><strong>전원 핀 (Power Pins)</strong>: 5V, 3.3V 전원 공급 핀 및 GND(그라운드) 접지 핀.</li>
</ul>
<hr>
<h2>3. 아두이노 스케치(Sketch) 기본 뼈대</h2>
<p>아두이노 프로그램 코드는 **<code>setup()</code>**과 <strong><code>loop()</code></strong> 두 개의 필수 함수로 구성됩니다.</p>
<pre><code class="language-cpp">void setup() {
  // 보드가 전원에 연결되거나 리셋될 때 단 1번만 실행되는 초기화 구역
  pinMode(13, OUTPUT); // 13번 핀을 출력 모드로 설정
}

void loop() {
  // setup() 실행이 끝난 후 전원이 꺼질 때까지 무한히 반복 실행되는 구역
  digitalWrite(13, HIGH); // 13번 핀에 5V 전압 출력 (LED 켜기)
  delay(1000);            // 1초(1000ms) 대기
  digitalWrite(13, LOW);  // 13번 핀에 0V 전압 출력 (LED 끄기)
  delay(1000);            // 1초 대기
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 아두이노 보드를 PC에 연결했는데 IDE에서 업로드 오류가 발생해요.</strong>
A. [툴] $
ightarrow$ [보드] 메뉴에서 <strong>Arduino Uno</strong>가 잘 선택되어 있는지 확인하고, [툴] $
ightarrow$ [포트] 메뉴에서 아두이노가 연결된 **COM 포트(Windows) / tty.usbmodem(macOS)**가 올바르게 선택되었는지 점검하세요.</p>
',
  'published',
  '아두이노 입문 가이드 - 아두이노 우노(Uno), IDE 설치 및 스케치 기초',
  '마이크로컨트롤러와 아두이노의 개념, 대표적인 아두이노 우노 보드의 핀 구조, 통합 개발 환경(Arduino IDE) 설치 및 스케치 기본 뼈대 코드(setup, loop)를 배웁니다.',
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
  '아두이노 부품을 태우지 않고 안전하게 회로를 구성하기 위해 꼭 알아야 할 전압, 전류, 저항의 관계와 옴의 법칙, 브레드보드 사용법을 배웁니다.',
  '아두이노로 센서나 LED를 다루려면 기본적인 **전기 전자 이론**과 회로 연결 도구인 **브레드보드(Breadboard)**의 동작 원리를 알아야 합니다.

---

## 1. 전기의 3대 기본 요소

| 요소 | 기호 / 단위 | 비유 | 설명 |
| :--- | :--- | :--- | :--- |
| **전압 (Voltage)** | $V$ / 볼트(V) | 수압 (물의 높이 차이) | 전기를 밀어내는 압력의 크기 (아두이노 기본 전압: 5V) |
| **전류 (Current)** | $I$ / 암페어(A) | 수량 (흘러가는 물의 양) | 회로를 따라 전하가 이동하는 흐름의 양 |
| **저항 (Resistance)** | $R$ / 옴($\Omega$) | 수도관의 굵기/방해물 | 전류의 흐름을 방해하고 제한하는 힘 |

---

## 2. 옴의 법칙 (Ohm''s Law)

전기 회로에서 전압, 전류, 저항 사이의 관계를 나타내는 가장 중요한 법칙입니다.

$$V = I \times R \quad \implies \quad I = \frac{V}{R} \quad \implies \quad R = \frac{V}{I}$$

### LED 보호 저항 계산 실습 예제
- 아두이노 전압 $V_{cc} = 5\text{V}$
- 일반 Red LED의 순방향 전압 $V_{LED} \approx 2\text{V}$, 적정 전류 $I \approx 20\text{mA} (0.02\text{A})$
- 필요한 저항값 $R = \frac{5\text{V} - 2\text{V}}{0.02\text{A}} = 150\Omega$
- $\rightarrow$ 보통 안전을 위해 **$220\Omega$ 또는 $330\Omega$ 저항**을 사용합니다.

---

## 3. 브레드보드 (Breadboard) 내부 연결 구조

- **버스 라인 (Power Rails)**: 양쪽 가장자리의 $+$, $-$ 라인은 **가로(Horizontal) 방향**으로 핀들이 하나로 연결되어 있습니다.
- **터미널 라인 (Component Area)**: 중앙 알파벳 구역(a~j)은 **세로(Vertical) 방향**으로 5개의 구멍이 내부 금속 핀으로 연결되어 있습니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. LED를 저항 없이 아두이노 5V 핀에 바로 꽂으면 어떻게 되나요?**
A. 저항이 없으면 순간적으로 과도한 전류(과전류)가 흘러 LED가 까맣게 타거나 아두이노 보드의 입출력 핀이 손상될 수 있으므로 반드시 보호 저항을 함께 직렬 연결해야 합니다.
',
  '<p>아두이노로 센서나 LED를 다루려면 기본적인 <strong>전기 전자 이론</strong>과 회로 연결 도구인 **브레드보드(Breadboard)**의 동작 원리를 알아야 합니다.</p>
<hr>
<h2>1. 전기의 3대 기본 요소</h2>
<table>
<thead>
<tr>
<th align="left">요소</th>
<th align="left">기호 / 단위</th>
<th align="left">비유</th>
<th align="left">설명</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>전압 (Voltage)</strong></td>
<td align="left">$V$ / 볼트(V)</td>
<td align="left">수압 (물의 높이 차이)</td>
<td align="left">전기를 밀어내는 압력의 크기 (아두이노 기본 전압: 5V)</td>
</tr>
<tr>
<td align="left"><strong>전류 (Current)</strong></td>
<td align="left">$I$ / 암페어(A)</td>
<td align="left">수량 (흘러가는 물의 양)</td>
<td align="left">회로를 따라 전하가 이동하는 흐름의 양</td>
</tr>
<tr>
<td align="left"><strong>저항 (Resistance)</strong></td>
<td align="left">$R$ / 옴($\Omega$)</td>
<td align="left">수도관의 굵기/방해물</td>
<td align="left">전류의 흐름을 방해하고 제한하는 힘</td>
</tr>
</tbody></table>
<hr>
<h2>2. 옴의 법칙 (Ohm&#39;s Law)</h2>
<p>전기 회로에서 전압, 전류, 저항 사이의 관계를 나타내는 가장 중요한 법칙입니다.</p>
<p>$$V = I \times R \quad \implies \quad I = \frac{V}{R} \quad \implies \quad R = \frac{V}{I}$$</p>
<h3>LED 보호 저항 계산 실습 예제</h3>
<ul>
<li>아두이노 전압 $V_{cc} = 5\text{V}$</li>
<li>일반 Red LED의 순방향 전압 $V_{LED} \approx 2\text{V}$, 적정 전류 $I \approx 20\text{mA} (0.02\text{A})$</li>
<li>필요한 저항값 $R = \frac{5\text{V} - 2\text{V}}{0.02\text{A}} = 150\Omega$</li>
<li>$\rightarrow$ 보통 안전을 위해 <strong>$220\Omega$ 또는 $330\Omega$ 저항</strong>을 사용합니다.</li>
</ul>
<hr>
<h2>3. 브레드보드 (Breadboard) 내부 연결 구조</h2>
<ul>
<li><strong>버스 라인 (Power Rails)</strong>: 양쪽 가장자리의 $+$, $-$ 라인은 <strong>가로(Horizontal) 방향</strong>으로 핀들이 하나로 연결되어 있습니다.</li>
<li><strong>터미널 라인 (Component Area)</strong>: 중앙 알파벳 구역(a~j)은 <strong>세로(Vertical) 방향</strong>으로 5개의 구멍이 내부 금속 핀으로 연결되어 있습니다.</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. LED를 저항 없이 아두이노 5V 핀에 바로 꽂으면 어떻게 되나요?</strong>
A. 저항이 없으면 순간적으로 과도한 전류(과전류)가 흘러 LED가 까맣게 타거나 아두이노 보드의 입출력 핀이 손상될 수 있으므로 반드시 보호 저항을 함께 직렬 연결해야 합니다.</p>
',
  'published',
  '아두이노 회로 기초 - 전압(V), 전류(I), 저항(R)과 옴의 법칙, 브레드보드',
  '회로 구성의 기본인 전압(V), 전류(I), 저항(R)의 의미와 옴의 법칙(V=IR), LED 보호 저항 계산법, 브레드보드(빵판) 내부 연결 구조를 초보자 눈높이에서 해설합니다.',
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
  '아두이노의 디지털 출력(digitalWrite)과 펄스 폭 변조(PWM) 기술을 활용하여 LED 켜기/끄기, 밝기 조절, 피에조 부저 멜로디 출력을 구현합니다.',
  '아두이노의 입출력 핀은 전압 신호를 내보내는 **출력(Output) 모드**로 설정하여 LED를 켜거나 모터를 작동시킬 수 있습니다.

---

## 1. 디지털 출력 (Digital Output): `digitalWrite()`

디지털 출력은 **5V (HIGH / 1)** 또는 **0V (LOW / 0)** 두 가지 상태만 존재합니다.

```cpp
void setup() {
  pinMode(8, OUTPUT); // 8번 핀을 출력 핀으로 설정
}

void loop() {
  digitalWrite(8, HIGH); // 8번 핀에 5V 출력 (ON)
  delay(500);            // 0.5초 대기
  digitalWrite(8, LOW);  // 8번 핀에 0V 출력 (OFF)
  delay(500);            // 0.5초 대기
}
```

---

## 2. 펄스 폭 변조 (PWM: Pulse Width Modulation)

아두이노 우노는 진짜 아날로그 전압(1.5V, 3.2V 등)을 내보낼 수 없지만, 디지털 신호의 HIGH 유지 시간 비율(**Duty Cycle**)을 고속으로 조절하여 마치 아날로그 전압이 변하는 것과 같은 효과를 냅니다.

- **PWM 지원 핀**: 물결표시(`~`)가 붙은 **3, 5, 6, 9, 10, 11번 핀**.
- **`analogWrite(pin, value)`**: `value`는 **0 (0V, 0% Duty)**부터 **255 (5V, 100% Duty)**까지 8-bit 값 지정.

```cpp
// LED 서서히 밝아지고 어두워지기 (Fade)
void setup() {
  pinMode(9, OUTPUT);
}

void loop() {
  // 서서히 밝아짐
  for (int brightness = 0; brightness <= 255; brightness += 5) {
    analogWrite(9, brightness);
    delay(30);
  }
  // 서서히 어두워짐
  for (int brightness = 255; brightness >= 0; brightness -= 5) {
    analogWrite(9, brightness);
    delay(30);
  }
}
```

---

## 3. 피에조 부저 (Piezo Buzzer) 멜로디 출력

`tone(pin, frequency)` 함수를 사용하면 원하는 주파수(Hz)의 소리를 부저로 출력할 수 있습니다.

```cpp
void setup() {
  // 8번 핀에 도(262Hz) 소리 0.5초간 출력
  tone(8, 262, 500);
}
void loop() {}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 모든 아두이노 디지털 핀에서 `analogWrite()`를 사용할 수 있나요?**
A. 아닙니다! 우노 보드의 경우 핀 번호 옆에 `~` 기호가 새겨진 **3, 5, 6, 9, 10, 11번 핀**에서만 PWM 출력이 가능합니다.
',
  '<p>아두이노의 입출력 핀은 전압 신호를 내보내는 <strong>출력(Output) 모드</strong>로 설정하여 LED를 켜거나 모터를 작동시킬 수 있습니다.</p>
<hr>
<h2>1. 디지털 출력 (Digital Output): <code>digitalWrite()</code></h2>
<p>디지털 출력은 <strong>5V (HIGH / 1)</strong> 또는 <strong>0V (LOW / 0)</strong> 두 가지 상태만 존재합니다.</p>
<pre><code class="language-cpp">void setup() {
  pinMode(8, OUTPUT); // 8번 핀을 출력 핀으로 설정
}

void loop() {
  digitalWrite(8, HIGH); // 8번 핀에 5V 출력 (ON)
  delay(500);            // 0.5초 대기
  digitalWrite(8, LOW);  // 8번 핀에 0V 출력 (OFF)
  delay(500);            // 0.5초 대기
}
</code></pre>
<hr>
<h2>2. 펄스 폭 변조 (PWM: Pulse Width Modulation)</h2>
<p>아두이노 우노는 진짜 아날로그 전압(1.5V, 3.2V 등)을 내보낼 수 없지만, 디지털 신호의 HIGH 유지 시간 비율(<strong>Duty Cycle</strong>)을 고속으로 조절하여 마치 아날로그 전압이 변하는 것과 같은 효과를 냅니다.</p>
<ul>
<li><strong>PWM 지원 핀</strong>: 물결표시(<code>~</code>)가 붙은 <strong>3, 5, 6, 9, 10, 11번 핀</strong>.</li>
<li><strong><code>analogWrite(pin, value)</code></strong>: <code>value</code>는 **0 (0V, 0% Duty)**부터 **255 (5V, 100% Duty)**까지 8-bit 값 지정.</li>
</ul>
<pre><code class="language-cpp">// LED 서서히 밝아지고 어두워지기 (Fade)
void setup() {
  pinMode(9, OUTPUT);
}

void loop() {
  // 서서히 밝아짐
  for (int brightness = 0; brightness &lt;= 255; brightness += 5) {
    analogWrite(9, brightness);
    delay(30);
  }
  // 서서히 어두워짐
  for (int brightness = 255; brightness &gt;= 0; brightness -= 5) {
    analogWrite(9, brightness);
    delay(30);
  }
}
</code></pre>
<hr>
<h2>3. 피에조 부저 (Piezo Buzzer) 멜로디 출력</h2>
<p><code>tone(pin, frequency)</code> 함수를 사용하면 원하는 주파수(Hz)의 소리를 부저로 출력할 수 있습니다.</p>
<pre><code class="language-cpp">void setup() {
  // 8번 핀에 도(262Hz) 소리 0.5초간 출력
  tone(8, 262, 500);
}
void loop() {}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 모든 아두이노 디지털 핀에서 <code>analogWrite()</code>를 사용할 수 있나요?</strong>
A. 아닙니다! 우노 보드의 경우 핀 번호 옆에 <code>~</code> 기호가 새겨진 <strong>3, 5, 6, 9, 10, 11번 핀</strong>에서만 PWM 출력이 가능합니다.</p>
',
  'published',
  '아두이노 출력 제어 - digitalWrite, delay, PWM analogWrite 및 부저 제어',
  '디지털 핀 출력 함수 digitalWrite(HIGH/LOW), 아날로그 느낌을 내는 펄스 폭 변조 PWM(analogWrite)으로 LED 밝기 조절 및 피에조 부저 톤 제어를 실습합니다.',
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
  '버튼 입력 감지 시 발생하는 플로팅 현상 해결을 위한 풀업/풀다운 저항의 개념과 analogRead()를 통한 가변저항, 센서 아날로그 신호 수신법을 다룹니다.',
  '아두이노는 외부 스위치 누름이나 센서 전압 변화를 **입력(Input) 모드**로 읽어 들여 판단을 내릴 수 있습니다.

---

## 1. 플로팅(Floating) 현상과 풀업/풀다운 저항

스위치가 켜지지도 꺼지지도 않은 공중에 떠 있는 상태일 때, 주변 전자파 잡음으로 인해 핀 전압이 HIGH/LOW로 불안정하게 흔들리는 현상을 **플로팅(Floating)**이라 부릅니다.

### 풀업(Pull-up) & 풀다운(Pull-down) 회로
- **풀업 저항 (Pull-up)**: 핀을 5V 전원에 저항으로 연결 $ightarrow$ 안 누르면 **HIGH**, 누르면 **LOW**.
- **풀다운 저항 (Pull-down)**: 핀을 GND에 저항으로 연결 $ightarrow$ 안 누르면 **LOW**, 누르면 **HIGH**.
- **내부 풀업 저항 (`INPUT_PULLUP`)**: 외부 저항 없이 아두이노 칩 내부 저항을 코드 한 줄로 사용!

```cpp
void setup() {
  pinMode(2, INPUT_PULLUP); // 2번 핀에 내부 풀업 저항 활성화
  pinMode(13, OUTPUT);
}

void loop() {
  int btnState = digitalRead(2); // 버튼 상태 읽기
  if (btnState == LOW) { // 버튼을 누르면 GND와 연결되어 LOW가 됨
    digitalWrite(13, HIGH);
  } else {
    digitalWrite(13, LOW);
  }
}
```

---

## 2. 아날로그 입력 (Analog Input): `analogRead()`

아두이노 우노의 **A0 ~ A5 핀**은 0V ~ 5V 사이의 미세한 전압을 **10-bit ADC(Analog-to-Digital Converter)**를 통해 **0 ~ 1023 사이의 정수 값**으로 변환하여 읽습니다.

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  int val = analogRead(A0); // 가변저항 전압 읽기 (0 ~ 1023)
  float voltage = val * (5.0 / 1023.0); // 실제 전압(V) 계산
  
  Serial.print("ADC 값: ");
  Serial.print(val);
  Serial.print(" | 전압: ");
  Serial.println(voltage);
  delay(200);
}
```

---

## 3. 입력 값 범위 재배치: `map()` 함수

아날로그 입력값(0 ~ 1023)을 PWM 출력값(0 ~ 255) 범위로 쉽게 변환할 수 있습니다.

```cpp
int inputVal = analogRead(A0);
int outputVal = map(inputVal, 0, 1023, 0, 255); // 범위 1:1 매핑
analogWrite(9, outputVal);
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 버튼을 누를 때 튀는 현상(채터링, Chattering)은 어떻게 해결하나요?**
A. 버튼의 기계적 접점이 접촉될 때 수 밀리초 동안 미세하게 켜짐/꺼짐이 반복되는 현상입니다. 코드에 `delay(20);` 지연 시간을 추가하거나 소프트웨어 디바운스(Debounce) 알고리즘을 적용하면 깔끔해집니다.
',
  '<p>아두이노는 외부 스위치 누름이나 센서 전압 변화를 <strong>입력(Input) 모드</strong>로 읽어 들여 판단을 내릴 수 있습니다.</p>
<hr>
<h2>1. 플로팅(Floating) 현상과 풀업/풀다운 저항</h2>
<p>스위치가 켜지지도 꺼지지도 않은 공중에 떠 있는 상태일 때, 주변 전자파 잡음으로 인해 핀 전압이 HIGH/LOW로 불안정하게 흔들리는 현상을 **플로팅(Floating)**이라 부릅니다.</p>
<h3>풀업(Pull-up) &amp; 풀다운(Pull-down) 회로</h3>
<ul>
<li><strong>풀업 저항 (Pull-up)</strong>: 핀을 5V 전원에 저항으로 연결 $
ightarrow$ 안 누르면 <strong>HIGH</strong>, 누르면 <strong>LOW</strong>.</li>
<li><strong>풀다운 저항 (Pull-down)</strong>: 핀을 GND에 저항으로 연결 $
ightarrow$ 안 누르면 <strong>LOW</strong>, 누르면 <strong>HIGH</strong>.</li>
<li><strong>내부 풀업 저항 (<code>INPUT_PULLUP</code>)</strong>: 외부 저항 없이 아두이노 칩 내부 저항을 코드 한 줄로 사용!</li>
</ul>
<pre><code class="language-cpp">void setup() {
  pinMode(2, INPUT_PULLUP); // 2번 핀에 내부 풀업 저항 활성화
  pinMode(13, OUTPUT);
}

void loop() {
  int btnState = digitalRead(2); // 버튼 상태 읽기
  if (btnState == LOW) { // 버튼을 누르면 GND와 연결되어 LOW가 됨
    digitalWrite(13, HIGH);
  } else {
    digitalWrite(13, LOW);
  }
}
</code></pre>
<hr>
<h2>2. 아날로그 입력 (Analog Input): <code>analogRead()</code></h2>
<p>아두이노 우노의 <strong>A0 ~ A5 핀</strong>은 0V ~ 5V 사이의 미세한 전압을 **10-bit ADC(Analog-to-Digital Converter)**를 통해 <strong>0 ~ 1023 사이의 정수 값</strong>으로 변환하여 읽습니다.</p>
<pre><code class="language-cpp">void setup() {
  Serial.begin(9600);
}

void loop() {
  int val = analogRead(A0); // 가변저항 전압 읽기 (0 ~ 1023)
  float voltage = val * (5.0 / 1023.0); // 실제 전압(V) 계산
  
  Serial.print(&quot;ADC 값: &quot;);
  Serial.print(val);
  Serial.print(&quot; | 전압: &quot;);
  Serial.println(voltage);
  delay(200);
}
</code></pre>
<hr>
<h2>3. 입력 값 범위 재배치: <code>map()</code> 함수</h2>
<p>아날로그 입력값(0 ~ 1023)을 PWM 출력값(0 ~ 255) 범위로 쉽게 변환할 수 있습니다.</p>
<pre><code class="language-cpp">int inputVal = analogRead(A0);
int outputVal = map(inputVal, 0, 1023, 0, 255); // 범위 1:1 매핑
analogWrite(9, outputVal);
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 버튼을 누를 때 튀는 현상(채터링, Chattering)은 어떻게 해결하나요?</strong>
A. 버튼의 기계적 접점이 접촉될 때 수 밀리초 동안 미세하게 켜짐/꺼짐이 반복되는 현상입니다. 코드에 <code>delay(20);</code> 지연 시간을 추가하거나 소프트웨어 디바운스(Debounce) 알고리즘을 적용하면 깔끔해집니다.</p>
',
  'published',
  '아두이노 입력 제어 - digitalRead, 풀업/풀다운 저항, analogRead 가변저항',
  '버튼 스위치의 digitalRead() 입력, 채터링 방지 및 플로팅 현상을 해결하는 풀업/풀다운 저항의 원리, ADC를 활용한 analogRead() 가변저항 읽기를 배웁니다.',
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

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'arduino',
  'ch05-serial-communication',
  '아두이노 시리얼 통신 (UART 및 데이터 모니터링)',
  '아두이노와 컴퓨터(PC) 사이의 데이터 송수신을 담당하는 UART 시리얼 통신의 원리, 시리얼 모니터 출력 및 입력 데이터 처리 기법을 공부합니다.',
  '**시리얼 통신(Serial Communication)**은 아두이노와 컴퓨터(PC) 또는 다른 아두이노 보드 간에 한 번에 1비트씩 순차적으로 데이터를 주고받는 직렬 통신 방식입니다.

---

## 1. 시리얼 통신 초기화 및 보레이트 (Baud Rate)

시리얼 통신을 사용하려면 `setup()`에서 통신 속도인 **보레이트(Baud Rate)**를 설정해야 합니다. (가장 흔히 쓰이는 표준 속도: **9600 bps**)

```cpp
void setup() {
  Serial.begin(9600); // 9600bps 속도로 시리얼 통신 시작
}

void loop() {
  Serial.println("Hello, Arduino Serial!"); // PC로 데이터 송신 (줄바꿈 포함)
  delay(1000);
}
```

---

## 2. PC에서 데이터 읽기: `Serial.available()` & `Serial.read()`

컴퓨터의 시리얼 모니터 창에서 문자를 입력하여 아두이노로 보낼 수 있습니다.

```cpp
void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  // 수신 버퍼에 수신된 데이터가 1바이트 이상 존재하는지 확인
  if (Serial.available() > 0) {
    char ch = Serial.read(); // 1바이트 읽기
    
    if (ch == ''1'') {
      digitalWrite(13, HIGH);
      Serial.println("LED가 켜졌습니다.");
    } else if (ch == ''0'') {
      digitalWrite(13, LOW);
      Serial.println("LED가 꺼졌습니다.");
    }
  }
}
```

---

## 3. 그래프 출력 도구: 시리얼 플로터 (Serial Plotter)

아두이노 IDE의 **[툴] $ightarrow$ [시리얼 플로터]**를 실행하면 아날로그 센서 입력값을 텍스트가 아닌 실시간 실선 그래프 형태로 시각화할 수 있습니다.

```cpp
void loop() {
  int sensorVal = analogRead(A0);
  Serial.println(sensorVal); // 숫자만 출력하면 플로터가 파형으로 그려줌
  delay(50);
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 시리얼 모니터에 한글이 깨지거나 이상한 외계어 텍스트가 출력돼요.**
A. 아두이노 코드의 `Serial.begin(9600);` 속도와 시리얼 모니터 창 우측 하단의 **보레이트 속도 설정(9600 baud)**이 일치하지 않을 때 일어나는 현상입니다. 두 통신 속도를 동일하게 맞춰주세요.
',
  '<p>**시리얼 통신(Serial Communication)**은 아두이노와 컴퓨터(PC) 또는 다른 아두이노 보드 간에 한 번에 1비트씩 순차적으로 데이터를 주고받는 직렬 통신 방식입니다.</p>
<hr>
<h2>1. 시리얼 통신 초기화 및 보레이트 (Baud Rate)</h2>
<p>시리얼 통신을 사용하려면 <code>setup()</code>에서 통신 속도인 **보레이트(Baud Rate)**를 설정해야 합니다. (가장 흔히 쓰이는 표준 속도: <strong>9600 bps</strong>)</p>
<pre><code class="language-cpp">void setup() {
  Serial.begin(9600); // 9600bps 속도로 시리얼 통신 시작
}

void loop() {
  Serial.println(&quot;Hello, Arduino Serial!&quot;); // PC로 데이터 송신 (줄바꿈 포함)
  delay(1000);
}
</code></pre>
<hr>
<h2>2. PC에서 데이터 읽기: <code>Serial.available()</code> &amp; <code>Serial.read()</code></h2>
<p>컴퓨터의 시리얼 모니터 창에서 문자를 입력하여 아두이노로 보낼 수 있습니다.</p>
<pre><code class="language-cpp">void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  // 수신 버퍼에 수신된 데이터가 1바이트 이상 존재하는지 확인
  if (Serial.available() &gt; 0) {
    char ch = Serial.read(); // 1바이트 읽기
    
    if (ch == &#39;1&#39;) {
      digitalWrite(13, HIGH);
      Serial.println(&quot;LED가 켜졌습니다.&quot;);
    } else if (ch == &#39;0&#39;) {
      digitalWrite(13, LOW);
      Serial.println(&quot;LED가 꺼졌습니다.&quot;);
    }
  }
}
</code></pre>
<hr>
<h2>3. 그래프 출력 도구: 시리얼 플로터 (Serial Plotter)</h2>
<p>아두이노 IDE의 **[툴] $
ightarrow$ [시리얼 플로터]**를 실행하면 아날로그 센서 입력값을 텍스트가 아닌 실시간 실선 그래프 형태로 시각화할 수 있습니다.</p>
<pre><code class="language-cpp">void loop() {
  int sensorVal = analogRead(A0);
  Serial.println(sensorVal); // 숫자만 출력하면 플로터가 파형으로 그려줌
  delay(50);
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 시리얼 모니터에 한글이 깨지거나 이상한 외계어 텍스트가 출력돼요.</strong>
A. 아두이노 코드의 <code>Serial.begin(9600);</code> 속도와 시리얼 모니터 창 우측 하단의 **보레이트 속도 설정(9600 baud)**이 일치하지 않을 때 일어나는 현상입니다. 두 통신 속도를 동일하게 맞춰주세요.</p>
',
  'published',
  '아두이노 시리얼 통신 - Serial.begin, print, read 및 시리얼 모니터/플로터',
  'PC와 아두이노 간 직렬 통신인 UART 시리얼 통신 사용법! 보레이트(Baudrate) 설정, Serial.println 출력, Serial.read 키보드 데이터 수신 및 시리얼 플로터 그래픽을 익힙니다.',
  5,
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
  'ch06-display-applications',
  '디스플레이 활용 (Char LCD 및 OLED)',
  '센서 수치나 시스템 상태 메시지를 눈으로 확인할 수 있는 Character LCD 16x2 디스플레이와 I2C 통신 기반 0.96인치 OLED 제어법을 배웁니다.',
  '아두이노 프로젝트에 **디스플레이(Display)**를 추가하면 센서 측정값, 시계, 상태 안내문 등을 사용자에게 가시적으로 명확하게 보여줄 수 있습니다.

---

## 1. Character LCD (16x2) 및 I2C 모듈

가장 기본적인 16글자 2줄 디스플레이로, **I2C 배낭 모듈(PCF8574)**을 부착하면 아두이노 핀을 단 **2개(SDA, SCL)**만 사용하여 제어할 수 있습니다.

```cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// I2C 주소 0x27 (또는 0x3F), 16열 2행 LCD 객체 생성
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();      // LCD 초기화
  lcd.backlight(); // 백라이트 켜기
  
  lcd.setCursor(0, 0); // 0번째 열, 0번째 행 커서 이동
  lcd.print("DAVHAVE Studio");
  
  lcd.setCursor(0, 1); // 0번째 열, 1번째 행 커서 이동
  lcd.print("Arduino Ch06");
}

void loop() {}
```

---

## 2. 0.96인치 OLED 디스플레이 (SSD1306)

128x64 해상도의 그래픽 OLED 디스플레이로, 글자뿐만 아니라 직선, 원, 사각형, 이미지 비트맵까지 자유롭게 그릴 수 있습니다.

```cpp
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

void setup() {
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C); // I2C 주소 0x3C
  display.clearDisplay();
  
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(10, 20);
  display.println("OLED Display OK!");
  display.display(); // 화면 갱신 출력
}

void loop() {}
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. LCD 라이브러리를 설치하고 업로드했는데 화면에 글자는 안 보이고 네모 상자만 나와요.**
A. I2C 모듈 뒷면에 위치한 **파란색 가변저항(초소형 나사)**을 드라이버로 조금씩 돌려 **화면 명암(Contrast)**을 조절해보세요.
',
  '<p>아두이노 프로젝트에 **디스플레이(Display)**를 추가하면 센서 측정값, 시계, 상태 안내문 등을 사용자에게 가시적으로 명확하게 보여줄 수 있습니다.</p>
<hr>
<h2>1. Character LCD (16x2) 및 I2C 모듈</h2>
<p>가장 기본적인 16글자 2줄 디스플레이로, **I2C 배낭 모듈(PCF8574)**을 부착하면 아두이노 핀을 단 **2개(SDA, SCL)**만 사용하여 제어할 수 있습니다.</p>
<pre><code class="language-cpp">#include &lt;Wire.h&gt;
#include &lt;LiquidCrystal_I2C.h&gt;

// I2C 주소 0x27 (또는 0x3F), 16열 2행 LCD 객체 생성
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();      // LCD 초기화
  lcd.backlight(); // 백라이트 켜기
  
  lcd.setCursor(0, 0); // 0번째 열, 0번째 행 커서 이동
  lcd.print(&quot;DAVHAVE Studio&quot;);
  
  lcd.setCursor(0, 1); // 0번째 열, 1번째 행 커서 이동
  lcd.print(&quot;Arduino Ch06&quot;);
}

void loop() {}
</code></pre>
<hr>
<h2>2. 0.96인치 OLED 디스플레이 (SSD1306)</h2>
<p>128x64 해상도의 그래픽 OLED 디스플레이로, 글자뿐만 아니라 직선, 원, 사각형, 이미지 비트맵까지 자유롭게 그릴 수 있습니다.</p>
<pre><code class="language-cpp">#include &lt;Wire.h&gt;
#include &lt;Adafruit_GFX.h&gt;
#include &lt;Adafruit_SSD1306.h&gt;

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &amp;Wire, -1);

void setup() {
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C); // I2C 주소 0x3C
  display.clearDisplay();
  
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(10, 20);
  display.println(&quot;OLED Display OK!&quot;);
  display.display(); // 화면 갱신 출력
}

void loop() {}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. LCD 라이브러리를 설치하고 업로드했는데 화면에 글자는 안 보이고 네모 상자만 나와요.</strong>
A. I2C 모듈 뒷면에 위치한 **파란색 가변저항(초소형 나사)**을 드라이버로 조금씩 돌려 **화면 명암(Contrast)**을 조절해보세요.</p>
',
  'published',
  '아두이노 디스플레이 제어 - Character LCD 16x2, I2C 묘듈 및 OLED 0.96',
  '문자형 텍스트 16x2 Character LCD 사용법, 핀 선을 획기적으로 줄여주는 I2C 모듈 연결 및 Adafruit SSD1306 그래픽 OLED 디스플레이 제어를 배웁니다.',
  6,
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
