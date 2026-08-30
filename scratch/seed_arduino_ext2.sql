-- Enhanced Arduino Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'arduino',
  'ch05-serial-communication',
  '아두이노 시리얼 통신 (UART 및 데이터 모니터링)',
  '아두이노와 컴퓨터(PC) 사이 데이터 송수신을 담당하는 UART 시리얼 직렬 통신의 원리 및 데이터 파싱, 시리얼 플로터 파형 시각화를 습득합니다.',
  '**시리얼 통신(Serial Communication)**은 아두이노와 PC, 센서, 또는 다른 마이크로컨트롤러 보드 간에 한 번에 1비트씩 순차적으로 데이터를 주고받는 표준 직렬 통신입니다.

---

## 1. 시리얼 통신 용어 사전 (Glossary)

- **UART (Universal Asynchronous Receiver-Transmitter)**: 별도의 공통 클록 신호선 없이 지정된 속도로 데이터를 송수신하는 비동기 직렬 통신 장치입니다.
- **Baud Rate (보레이트)**: 1초 동안 송수신되는 비트(Bit)의 수를 나타내는 통신 속도 단위입니다. (예: 9600 bps = 초당 9600비트)
- **TX (Transmit) / RX (Receive)**: 송신선(TX, 아두이노 1번 핀)과 수신선(RX, 아두이노 0번 핀)입니다. (상대 장치와 RX-TX 서로 교차 연결)
- **Serial Buffer (시리얼 버퍼)**: 수신된 시리얼 데이터를 잠시 보관하는 64바이트 임시 큐(Queue) 메모리 공간입니다.

---

## 2. 시리얼 데이터 수신 및 명령어 처리

```cpp
/*
  시리얼 모니터에 ''ON'' 또는 ''OFF'' 텍스트 명령어를 입력 받아 LED 제어
*/

void setup() {
  Serial.begin(9600); // 통신 속도 9600bps 초기화
  pinMode(13, OUTPUT);
  Serial.println("명령어를 입력하세요: ON 또는 OFF");
}

void loop() {
  // 시리얼 버퍼에 데이터가 들어와 있는지 확인
  if (Serial.available() > 0) {
    String inputStr = Serial.readStringUntil(''
''); // 줄바꿈(
)을 만날 때까지 문자열 읽기
    inputStr.trim(); // 양쪽 공백 및 개행문자 제거

    if (inputStr == "ON") {
      digitalWrite(13, HIGH);
      Serial.println("-> 결과: LED가 켜졌습니다.");
    } else if (inputStr == "OFF") {
      digitalWrite(13, LOW);
      Serial.println("-> 결과: LED가 꺼졌습니다.");
    } else {
      Serial.print("-> 알 수 없는 명령어: ");
      Serial.println(inputStr);
    }
  }
}
```

---

## 3. 시리얼 플로터 (Serial Plotter) 그래픽 활용

아두이노 IDE [툴] $ightarrow$ [시리얼 플로터]를 이용하면 여러 센서 수치를 동시에 그래프 파형으로 비교할 수 있습니다.

- **규칙**: 여러 값을 한 줄에 콤마(`,`)나 탭(`\t`)으로 구분하여 출력하고 마지막에 `println`을 수행하면 됩니다.

```cpp
void loop() {
  int val1 = analogRead(A0); // 조도 센서 수치
  int val2 = analogRead(A1); // 가변저항 수치
  
  // 라벨과 함께 출력하면 범례가 표시됨
  Serial.print("CDS:"); Serial.print(val1);
  Serial.print(",");
  Serial.print("POT:"); Serial.println(val2);
  delay(40);
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. `Serial.print()`와 `Serial.write()`의 차이는 무엇인가요?**
A. `Serial.print(65)`는 숫자 65를 사람의 눈에 보이는 아스키 문자인 **"65" (2바이트 텍스트)**로 변환하여 보내지만, `Serial.write(65)`는 숫자 65의 아스키 바이너리 값 자체인 **''A'' (1바이트 이진 데이터)**를 직접 보냅니다.
',
  '<p>**시리얼 통신(Serial Communication)**은 아두이노와 PC, 센서, 또는 다른 마이크로컨트롤러 보드 간에 한 번에 1비트씩 순차적으로 데이터를 주고받는 표준 직렬 통신입니다.</p>
<hr>
<h2>1. 시리얼 통신 용어 사전 (Glossary)</h2>
<ul>
<li><strong>UART (Universal Asynchronous Receiver-Transmitter)</strong>: 별도의 공통 클록 신호선 없이 지정된 속도로 데이터를 송수신하는 비동기 직렬 통신 장치입니다.</li>
<li><strong>Baud Rate (보레이트)</strong>: 1초 동안 송수신되는 비트(Bit)의 수를 나타내는 통신 속도 단위입니다. (예: 9600 bps = 초당 9600비트)</li>
<li><strong>TX (Transmit) / RX (Receive)</strong>: 송신선(TX, 아두이노 1번 핀)과 수신선(RX, 아두이노 0번 핀)입니다. (상대 장치와 RX-TX 서로 교차 연결)</li>
<li><strong>Serial Buffer (시리얼 버퍼)</strong>: 수신된 시리얼 데이터를 잠시 보관하는 64바이트 임시 큐(Queue) 메모리 공간입니다.</li>
</ul>
<hr>
<h2>2. 시리얼 데이터 수신 및 명령어 처리</h2>
<pre><code class="language-cpp">/*
  시리얼 모니터에 &#39;ON&#39; 또는 &#39;OFF&#39; 텍스트 명령어를 입력 받아 LED 제어
*/

void setup() {
  Serial.begin(9600); // 통신 속도 9600bps 초기화
  pinMode(13, OUTPUT);
  Serial.println(&quot;명령어를 입력하세요: ON 또는 OFF&quot;);
}

void loop() {
  // 시리얼 버퍼에 데이터가 들어와 있는지 확인
  if (Serial.available() &gt; 0) {
    String inputStr = Serial.readStringUntil(&#39;
&#39;); // 줄바꿈(
)을 만날 때까지 문자열 읽기
    inputStr.trim(); // 양쪽 공백 및 개행문자 제거

    if (inputStr == &quot;ON&quot;) {
      digitalWrite(13, HIGH);
      Serial.println(&quot;-&gt; 결과: LED가 켜졌습니다.&quot;);
    } else if (inputStr == &quot;OFF&quot;) {
      digitalWrite(13, LOW);
      Serial.println(&quot;-&gt; 결과: LED가 꺼졌습니다.&quot;);
    } else {
      Serial.print(&quot;-&gt; 알 수 없는 명령어: &quot;);
      Serial.println(inputStr);
    }
  }
}
</code></pre>
<hr>
<h2>3. 시리얼 플로터 (Serial Plotter) 그래픽 활용</h2>
<p>아두이노 IDE [툴] $
ightarrow$ [시리얼 플로터]를 이용하면 여러 센서 수치를 동시에 그래프 파형으로 비교할 수 있습니다.</p>
<ul>
<li><strong>규칙</strong>: 여러 값을 한 줄에 콤마(<code>,</code>)나 탭(<code>\t</code>)으로 구분하여 출력하고 마지막에 <code>println</code>을 수행하면 됩니다.</li>
</ul>
<pre><code class="language-cpp">void loop() {
  int val1 = analogRead(A0); // 조도 센서 수치
  int val2 = analogRead(A1); // 가변저항 수치
  
  // 라벨과 함께 출력하면 범례가 표시됨
  Serial.print(&quot;CDS:&quot;); Serial.print(val1);
  Serial.print(&quot;,&quot;);
  Serial.print(&quot;POT:&quot;); Serial.println(val2);
  delay(40);
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>Serial.print()</code>와 <code>Serial.write()</code>의 차이는 무엇인가요?</strong>
A. <code>Serial.print(65)</code>는 숫자 65를 사람의 눈에 보이는 아스키 문자인 **&quot;65&quot; (2바이트 텍스트)**로 변환하여 보내지만, <code>Serial.write(65)</code>는 숫자 65의 아스키 바이너리 값 자체인 **&#39;A&#39; (1바이트 이진 데이터)**를 직접 보냅니다.</p>
',
  'published',
  '아두이노 시리얼 통신 - UART, Serial.begin/print/read, 시리얼 모니터 & 플로터',
  'UART 시리얼 직렬 통신 메커니즘, 보레이트(Baud Rate) 설정, Serial.print/println/write/readString, 시리얼 플로터 파형 모니터링을 실습합니다.',
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
  '센서 수치나 안내 문구를 출력하는 Character LCD 16x2(I2C 모듈)와 0.96인치 SSD1306 OLED 디스플레이의 회로 및 그래픽 코딩을 배웁니다.',
  '아두이노 시스템의 모니터 역할을 수행하는 **디스플레이 모듈(Display Module)** 제어 기법을 학습합니다.

---

## 1. 디스플레이 주요 용어 사전 (Glossary)

- **Character LCD**: 정해진 규격의 텍스트 글자(예: 16열 2행)만 전용으로 표시하는 LCD입니다.
- **I2C Serial Interface Adapter**: LCD의 16개 복잡한 핀을 단 2개의 I2C 핀(SDA, SCL)으로 변환해주는 초소형 보드(PCF8574 칩 사용)입니다.
- **OLED (Organic Light Emitting Diode)**: 자발광 유기 발광 다이오드로, 백라이트 없이 대비가 뛰어나고 전력 소비가 적은 정밀 그래픽 디스플레이입니다.
- **Frame Buffer (프레임 버퍼)**: OLED에 표시할 전체 그래픽 화면의 비트맵 데이터를 렌더링하기 위해 SRAM에 마련하는 가상 메모리 공간입니다.

---

## 2. I2C Character LCD (16x2) 실전 사용법

```cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// I2C 주소 0x27 (모듈에 따라 0x3F일 수 있음), 16열 2행 설정
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();      // LCD 초기화
  lcd.backlight(); // 백라이트 LED ON
  
  lcd.setCursor(0, 0); // (열, 행) 커서 위치 0, 0 지정
  lcd.print("DAVHAVE EDU HUB");
  
  lcd.setCursor(0, 1);
  lcd.print("Arduino Ch06 OK!");
}

void loop() {
  // 1초마다 업타임(초) 업데이트
  lcd.setCursor(12, 1);
  lcd.print(millis() / 1000);
}
```

---

## 3. 0.96인치 I2C OLED (SSD1306) 그래픽 렌더링

```cpp
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

Adafruit_SSD1306 display(128, 64, &Wire, -1);

void setup() {
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    for(;;); // OLED 시작 실패 시 무한 루프
  }
  
  display.clearDisplay(); // 프레임 버퍼 비우기
  
  // 도형 그리기
  display.drawRect(0, 0, 128, 64, WHITE);     // 테두리 사각형
  display.fillCircle(30, 32, 15, WHITE);       // 채워진 원
  
  // 글자 출력
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(60, 25);
  display.println("DAVHAVE");
  
  display.display(); // 실제 OLED 화면으로 렌더링 갱신!
}
void loop() {}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. OLED 라이브러리를 쓰니까 "Not enough memory" 컴파일 경고가 떠요.**
A. SSD1306 OLED 라이브러리는 $128 \times 64$ 비트맵 프레임 버퍼를 위해 아두이노 SRAM 메모리의 약 1KB(전체 2KB의 50%)를 차지합니다. 다른 변수 사용을 줄이거나 `Serial.println(F("문자열"))` 처럼 `F()` 매크로를 사용하여 문자열을 플래시 메모리에 배치하세요.
',
  '<p>아두이노 시스템의 모니터 역할을 수행하는 <strong>디스플레이 모듈(Display Module)</strong> 제어 기법을 학습합니다.</p>
<hr>
<h2>1. 디스플레이 주요 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Character LCD</strong>: 정해진 규격의 텍스트 글자(예: 16열 2행)만 전용으로 표시하는 LCD입니다.</li>
<li><strong>I2C Serial Interface Adapter</strong>: LCD의 16개 복잡한 핀을 단 2개의 I2C 핀(SDA, SCL)으로 변환해주는 초소형 보드(PCF8574 칩 사용)입니다.</li>
<li><strong>OLED (Organic Light Emitting Diode)</strong>: 자발광 유기 발광 다이오드로, 백라이트 없이 대비가 뛰어나고 전력 소비가 적은 정밀 그래픽 디스플레이입니다.</li>
<li><strong>Frame Buffer (프레임 버퍼)</strong>: OLED에 표시할 전체 그래픽 화면의 비트맵 데이터를 렌더링하기 위해 SRAM에 마련하는 가상 메모리 공간입니다.</li>
</ul>
<hr>
<h2>2. I2C Character LCD (16x2) 실전 사용법</h2>
<pre><code class="language-cpp">#include &lt;Wire.h&gt;
#include &lt;LiquidCrystal_I2C.h&gt;

// I2C 주소 0x27 (모듈에 따라 0x3F일 수 있음), 16열 2행 설정
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();      // LCD 초기화
  lcd.backlight(); // 백라이트 LED ON
  
  lcd.setCursor(0, 0); // (열, 행) 커서 위치 0, 0 지정
  lcd.print(&quot;DAVHAVE EDU HUB&quot;);
  
  lcd.setCursor(0, 1);
  lcd.print(&quot;Arduino Ch06 OK!&quot;);
}

void loop() {
  // 1초마다 업타임(초) 업데이트
  lcd.setCursor(12, 1);
  lcd.print(millis() / 1000);
}
</code></pre>
<hr>
<h2>3. 0.96인치 I2C OLED (SSD1306) 그래픽 렌더링</h2>
<pre><code class="language-cpp">#include &lt;Wire.h&gt;
#include &lt;Adafruit_GFX.h&gt;
#include &lt;Adafruit_SSD1306.h&gt;

Adafruit_SSD1306 display(128, 64, &amp;Wire, -1);

void setup() {
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    for(;;); // OLED 시작 실패 시 무한 루프
  }
  
  display.clearDisplay(); // 프레임 버퍼 비우기
  
  // 도형 그리기
  display.drawRect(0, 0, 128, 64, WHITE);     // 테두리 사각형
  display.fillCircle(30, 32, 15, WHITE);       // 채워진 원
  
  // 글자 출력
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(60, 25);
  display.println(&quot;DAVHAVE&quot;);
  
  display.display(); // 실제 OLED 화면으로 렌더링 갱신!
}
void loop() {}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. OLED 라이브러리를 쓰니까 &quot;Not enough memory&quot; 컴파일 경고가 떠요.</strong>
A. SSD1306 OLED 라이브러리는 $128 \times 64$ 비트맵 프레임 버퍼를 위해 아두이노 SRAM 메모리의 약 1KB(전체 2KB의 50%)를 차지합니다. 다른 변수 사용을 줄이거나 <code>Serial.println(F(&quot;문자열&quot;))</code> 처럼 <code>F()</code> 매크로를 사용하여 문자열을 플래시 메모리에 배치하세요.</p>
',
  'published',
  '아두이노 디스플레이 제어 - Character LCD 16x2, I2C 모듈, SSD1306 OLED',
  'Character LCD 16x2 제어, 핀을 2개(SDA/SCL)로 줄이는 I2C 모듈 PCF8574, Adafruit GFX 기반 0.96인치 SSD1306 그래픽 OLED 실습을 배웁니다.',
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

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'arduino',
  'ch07-sensors-applications',
  '다양한 센서 활용하기 (CDS, 초음파, 온습도, PIR)',
  '빛, 거리, 온도, 습도, 사람의 움직임을 인식하는 4대 입력 센서의 원리와 회로 연결 및 예외 처리 코딩을 학습합니다.',
  '아두이노 주변의 물리적 환경(빛, 거리, 온도, 습도, 움직임)을 센싱하는 **대표 센서 4종**을 정밀 다룹니다.

---

## 1. 센서 용어 사전 (Glossary)

- **CDS Photoresistor**: 황화카드뮴 소재를 사용하여 빛의 양에 따라 저항값이 가변하는 빛 감지 센서입니다.
- **HC-SR04 (Ultrasonic Sensor)**: 40kHz의 초음파 트리거 신호를 쏜 후 반사되어 돌아오는 시간을 측정하여 거리를 계산하는 센서입니다.
- **DHT11**: 온도와 습도를 디지털 1-Wire 데이터 신호로 전송하는 복합 온습도 센서입니다.
- **PIR (Passive Infrared Sensor)**: 사람이나 동물의 몸에서 방출되는 적외선 변화량을 측정하여 움직임을 감지하는 센서입니다.

---

## 2. 초음파 거리 센서 (HC-SR04) 정밀 거리 계산

음속은 $15^\circ\text{C}$ 공기 중에서 약 $340\text{m/s} = 0.0343\text{cm/}\mu\text{s}$ 입니다.

$$\text{거리(cm)} = \frac{\text{왕복 시간}(\mu\text{s}) \times 0.0343}{2}$$

```cpp
const int trigPin = 9;
const int echoPin = 8;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  digitalWrite(trigPin, LOW); delayMicroseconds(2);
  digitalWrite(trigPin, HIGH); delayMicroseconds(10); // 10us 초음파 발사 펄스
  digitalWrite(trigPin, LOW);

  // echoPin이 HIGH를 유지하는 시간(us)을 측정
  long duration = pulseIn(echoPin, HIGH, 30000); // 30ms 타임아웃
  
  if (duration == 0) {
    Serial.println("측정 범위 초과 (타임아웃)");
  } else {
    float distance = duration * 0.0343 / 2.0;
    Serial.print("측정 거리: "); Serial.print(distance); Serial.println(" cm");
  }
  delay(200);
}
```

---

## 3. DHT11 온습도 센서 사용법

```cpp
#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  float h = dht.readHumidity();    // 습도 측정 (%)
  float t = dht.readTemperature(); // 온도 측정 (°C)

  if (isnan(h) || isnan(t)) {
    Serial.println("DHT 센서 읽기 실패!");
    return;
  }

  Serial.print("습도: "); Serial.print(h);
  Serial.print("% | 온도: "); Serial.print(t); Serial.println("°C");
  delay(2000); // DHT11은 최소 2초 샘플링 주기 필요
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. PIR 센서 아래에 있는 2개의 가변저항 나사는 무엇을 조절하나요?**
A. 하나는 **감지 민감도(Sensitivity/거리 조절)**이고, 다른 하나는 감지 후 **HIGH 신호를 유지하는 지연 시간(Delay Time 조절)** 나사입니다.
',
  '<p>아두이노 주변의 물리적 환경(빛, 거리, 온도, 습도, 움직임)을 센싱하는 <strong>대표 센서 4종</strong>을 정밀 다룹니다.</p>
<hr>
<h2>1. 센서 용어 사전 (Glossary)</h2>
<ul>
<li><strong>CDS Photoresistor</strong>: 황화카드뮴 소재를 사용하여 빛의 양에 따라 저항값이 가변하는 빛 감지 센서입니다.</li>
<li><strong>HC-SR04 (Ultrasonic Sensor)</strong>: 40kHz의 초음파 트리거 신호를 쏜 후 반사되어 돌아오는 시간을 측정하여 거리를 계산하는 센서입니다.</li>
<li><strong>DHT11</strong>: 온도와 습도를 디지털 1-Wire 데이터 신호로 전송하는 복합 온습도 센서입니다.</li>
<li><strong>PIR (Passive Infrared Sensor)</strong>: 사람이나 동물의 몸에서 방출되는 적외선 변화량을 측정하여 움직임을 감지하는 센서입니다.</li>
</ul>
<hr>
<h2>2. 초음파 거리 센서 (HC-SR04) 정밀 거리 계산</h2>
<p>음속은 $15^\circ\text{C}$ 공기 중에서 약 $340\text{m/s} = 0.0343\text{cm/}\mu\text{s}$ 입니다.</p>
<p>$$\text{거리(cm)} = \frac{\text{왕복 시간}(\mu\text{s}) \times 0.0343}{2}$$</p>
<pre><code class="language-cpp">const int trigPin = 9;
const int echoPin = 8;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  digitalWrite(trigPin, LOW); delayMicroseconds(2);
  digitalWrite(trigPin, HIGH); delayMicroseconds(10); // 10us 초음파 발사 펄스
  digitalWrite(trigPin, LOW);

  // echoPin이 HIGH를 유지하는 시간(us)을 측정
  long duration = pulseIn(echoPin, HIGH, 30000); // 30ms 타임아웃
  
  if (duration == 0) {
    Serial.println(&quot;측정 범위 초과 (타임아웃)&quot;);
  } else {
    float distance = duration * 0.0343 / 2.0;
    Serial.print(&quot;측정 거리: &quot;); Serial.print(distance); Serial.println(&quot; cm&quot;);
  }
  delay(200);
}
</code></pre>
<hr>
<h2>3. DHT11 온습도 센서 사용법</h2>
<pre><code class="language-cpp">#include &lt;DHT.h&gt;

#define DHTPIN 4
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  float h = dht.readHumidity();    // 습도 측정 (%)
  float t = dht.readTemperature(); // 온도 측정 (°C)

  if (isnan(h) || isnan(t)) {
    Serial.println(&quot;DHT 센서 읽기 실패!&quot;);
    return;
  }

  Serial.print(&quot;습도: &quot;); Serial.print(h);
  Serial.print(&quot;% | 온도: &quot;); Serial.print(t); Serial.println(&quot;°C&quot;);
  delay(2000); // DHT11은 최소 2초 샘플링 주기 필요
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. PIR 센서 아래에 있는 2개의 가변저항 나사는 무엇을 조절하나요?</strong>
A. 하나는 **감지 민감도(Sensitivity/거리 조절)**이고, 다른 하나는 감지 후 <strong>HIGH 신호를 유지하는 지연 시간(Delay Time 조절)</strong> 나사입니다.</p>
',
  'published',
  '아두이노 센서 입문 - 조도 CDS, 초음파 HC-SR04, 온습도 DHT11, PIR 인체감지',
  '빛을 측정하는 조도센서(CDS), 음파 반사로 거리를 측정하는 초음파 센서(HC-SR04), 온습도 센서(DHT11), PIR 적외선 인체 감지 센서 제어를 배웁니다.',
  7,
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
  'ch08-motors-control',
  '모터 활용하기 (DC 모터, 서보 모터, 스텝 모터)',
  '물리적 회전과 위치 이동을 담당하는 3대 모터(DC 모터, 서보 모터, 스텝 모터)의 동작 원리와 모터 드라이버 회로 구축법을 다룹니다.',
  '아두이노 프로젝트에 물리적 동력과 위치 이동을 부여하는 **3대 모터 액추에이터**를 정밀 분석합니다.

---

## 1. 모터 제어 용어 사전 (Glossary)

- **DC Motor**: 직류 전원을 인가하면 연속 회전하는 가장 보편적인 모터입니다.
- **H-Bridge (H-브리지)**: 4개의 트랜지스터 스위치를 H자 모양으로 배치하여 전류의 방향을 바꿔 DC 모터의 정회전/역회전을 제어하는 회로 구조입니다.
- **Servo Motor**: 내부에 감속 기어, DC 모터, 가변저항 포텐쇼미터, 제어 회로가 합쳐져 0° ~ 180° 정밀 각도를 유지하는 모터입니다.
- **Stepper Motor**: 내부 고정자 코일에 순차적으로 전원을 인가하여 1 스텝 단위(예: 1.8°)로 정밀 회전시키는 모터입니다.
- **Back-EMF (역기전력)**: 모터 코일이 멈추거나 회전할 때 반대 방향으로 발생하는 높은 전압 서지로, 이를 방지하기 위해 다이오드나 드라이버 IC를 사용합니다.

---

## 2. DC 모터 제어와 L298N 모터 드라이버

아두이노 IO 핀의 출력 전류 한계(40mA)로 인해 DC 모터는 반드시 외부 전원 및 **L298N 모터 드라이버 IC**를 거쳐야 합니다.

```cpp
// L298N 핀 설정
const int ENA = 9;  // PWM 속도 제어 핀
const int IN1 = 7;  // 회전 방향 제어 핀 1
const int IN2 = 6;  // 회전 방향 제어 핀 2

void setup() {
  pinMode(ENA, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
}

void loop() {
  // 1. 정회전 (IN1: HIGH, IN2: LOW) + 속도 200
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, 200);
  delay(2000);

  // 2. 브레이크 (IN1: LOW, IN2: LOW)
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  delay(1000);

  // 3. 역회전 (IN1: LOW, IN2: HIGH) + 속도 150
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  analogWrite(ENA, 150);
  delay(2000);
}
```

---

## 3. 서보 모터 정밀 각도 제어 (`Servo.h`)

서보 모터는 50Hz (20ms 주기)의 PWM 제어 신호를 사용합니다. (1ms = 0°, 1.5ms = 90°, 2ms = 180°)

```cpp
#include <Servo.h>

Servo myServo;

void setup() {
  myServo.attach(9); // 9번 핀에 서보 신호선(황색/주황색) 연결
}

void loop() {
  // 0도부터 180도까지 부드럽게 스위핑 회전
  for (int angle = 0; angle <= 180; angle += 1) {
    myServo.write(angle);
    delay(15);
  }
  for (int angle = 180; angle >= 0; angle -= 1) {
    myServo.write(angle);
    delay(15);
  }
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 모터를 작동시키면 아두이노가 재부팅되거나 시리얼 통신이 끊깁니다.**
A. 모터 작동 시 발생하는 **돌입 전류(Inrush Current)**와 **전원 노이즈** 때문입니다. 해결책:
1. 아두이노 전원과 모터 전원(배터리/어댑터)을 **물리적으로 분리**하세요.
2. 두 전원의 **GND 선은 서로 공통(Common GND)으로 결합**해 전위 기준을 맞춰야 합니다.
',
  '<p>아두이노 프로젝트에 물리적 동력과 위치 이동을 부여하는 <strong>3대 모터 액추에이터</strong>를 정밀 분석합니다.</p>
<hr>
<h2>1. 모터 제어 용어 사전 (Glossary)</h2>
<ul>
<li><strong>DC Motor</strong>: 직류 전원을 인가하면 연속 회전하는 가장 보편적인 모터입니다.</li>
<li><strong>H-Bridge (H-브리지)</strong>: 4개의 트랜지스터 스위치를 H자 모양으로 배치하여 전류의 방향을 바꿔 DC 모터의 정회전/역회전을 제어하는 회로 구조입니다.</li>
<li><strong>Servo Motor</strong>: 내부에 감속 기어, DC 모터, 가변저항 포텐쇼미터, 제어 회로가 합쳐져 0° ~ 180° 정밀 각도를 유지하는 모터입니다.</li>
<li><strong>Stepper Motor</strong>: 내부 고정자 코일에 순차적으로 전원을 인가하여 1 스텝 단위(예: 1.8°)로 정밀 회전시키는 모터입니다.</li>
<li><strong>Back-EMF (역기전력)</strong>: 모터 코일이 멈추거나 회전할 때 반대 방향으로 발생하는 높은 전압 서지로, 이를 방지하기 위해 다이오드나 드라이버 IC를 사용합니다.</li>
</ul>
<hr>
<h2>2. DC 모터 제어와 L298N 모터 드라이버</h2>
<p>아두이노 IO 핀의 출력 전류 한계(40mA)로 인해 DC 모터는 반드시 외부 전원 및 <strong>L298N 모터 드라이버 IC</strong>를 거쳐야 합니다.</p>
<pre><code class="language-cpp">// L298N 핀 설정
const int ENA = 9;  // PWM 속도 제어 핀
const int IN1 = 7;  // 회전 방향 제어 핀 1
const int IN2 = 6;  // 회전 방향 제어 핀 2

void setup() {
  pinMode(ENA, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
}

void loop() {
  // 1. 정회전 (IN1: HIGH, IN2: LOW) + 속도 200
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, 200);
  delay(2000);

  // 2. 브레이크 (IN1: LOW, IN2: LOW)
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  delay(1000);

  // 3. 역회전 (IN1: LOW, IN2: HIGH) + 속도 150
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  analogWrite(ENA, 150);
  delay(2000);
}
</code></pre>
<hr>
<h2>3. 서보 모터 정밀 각도 제어 (<code>Servo.h</code>)</h2>
<p>서보 모터는 50Hz (20ms 주기)의 PWM 제어 신호를 사용합니다. (1ms = 0°, 1.5ms = 90°, 2ms = 180°)</p>
<pre><code class="language-cpp">#include &lt;Servo.h&gt;

Servo myServo;

void setup() {
  myServo.attach(9); // 9번 핀에 서보 신호선(황색/주황색) 연결
}

void loop() {
  // 0도부터 180도까지 부드럽게 스위핑 회전
  for (int angle = 0; angle &lt;= 180; angle += 1) {
    myServo.write(angle);
    delay(15);
  }
  for (int angle = 180; angle &gt;= 0; angle -= 1) {
    myServo.write(angle);
    delay(15);
  }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 모터를 작동시키면 아두이노가 재부팅되거나 시리얼 통신이 끊깁니다.</strong>
A. 모터 작동 시 발생하는 **돌입 전류(Inrush Current)**와 <strong>전원 노이즈</strong> 때문입니다. 해결책:</p>
<ol>
<li>아두이노 전원과 모터 전원(배터리/어댑터)을 <strong>물리적으로 분리</strong>하세요.</li>
<li>두 전원의 <strong>GND 선은 서로 공통(Common GND)으로 결합</strong>해 전위 기준을 맞춰야 합니다.</li>
</ol>
',
  'published',
  '아두이노 모터 제어 - DC 모터(L298N 모터드라이버), 서보모터, 스텝모터',
  'DC 모터 드라이버(L298N H-Bridge) 회로 구성, 서보 모터 Servo.h 각도 제어(0~180도), 정밀 스텝 모터 Stepper 제어 및 돌입전류 방지 회로를 해설합니다.',
  8,
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
