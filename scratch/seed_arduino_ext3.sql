-- Enhanced Arduino Lessons Part 3

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'arduino',
  'ch09-iot-and-wireless-communication',
  '사물인터넷(IoT)과 무선 통신의 이해 (Bluetooth, Wi-Fi)',
  '스마트폰 앱과 아두이노를 연결하는 HC-06 블루투스 통신과 인터넷 클라우드에 데이터를 송수신하는 ESP8266 Wi-Fi IoT 통신을 배웁니다.',
  '사물에 무선 통신 기술을 융합하여 인터넷 망과 연결하는 **사물인터넷(IoT)** 구축 기술을 파헤칩니다.

---

## 1. 무선 통신 용어 사전 (Glossary)

- **Bluetooth Classic (HC-06/HC-05)**: 2.4GHz 대역을 사용하는 1:1 페어링 기반 근거리 무선 통신 모듈입니다. (SPP: Serial Port Profile 지원)
- **SoftwareSerial**: 아두이노 우노의 일반 디지털 핀을 시리얼 통신(RX, TX) 핀으로 소프트웨어 변환해주는 라이브러리입니다.
- **ESP8266 / ESP32**: Wi-Fi 통신 기능을 탑재한 32-bit SoC 칩셋으로 독립적인 아두이노 개발 보드로도 사용 가능합니다.
- **MQTT (Message Queuing Telemetry Transport)**: IoT 장치 간의 경량 발행/구독(Publish/Subscribe) 메시징 프로토콜입니다.

---

## 2. 블루투스 HC-06 모듈 제어 실습

```
[아두이노 - HC-06 핀 연결 주의사항]
아두이노 D2 (Software RX) <--- HC-06 TXD
아두이노 D3 (Software TX) ---> HC-06 RXD (5V->3.3V 분압 권장)
```

```cpp
#include <SoftwareSerial.h>

SoftwareSerial BTSerial(2, 3); // RX=2, TX=3

const int ledPin = 13;

void setup() {
  Serial.begin(9600);
  BTSerial.begin(9600);
  pinMode(ledPin, OUTPUT);
  Serial.println("블루투스 접속 대기 중...");
}

void loop() {
  // 스마트폰 앱에서 보낸 데이터 읽기
  if (BTSerial.available()) {
    char data = BTSerial.read();
    Serial.print("수신 데이터: "); Serial.println(data);
    
    if (data == ''1'') {
      digitalWrite(ledPin, HIGH);
      BTSerial.println("LED ON");
    } else if (data == ''0'') {
      digitalWrite(ledPin, LOW);
      BTSerial.println("LED OFF");
    }
  }
}
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. HC-06 블루투스의 이름과 비밀번호(PIN)를 바꾸려면 어떻게 하나요?**
A. 스마트폰과 페어링되지 않은 상태에서 시리얼 모니터로 `AT` (응답: OK), `AT+NAMEmyArduino` (이름 변경), `AT+PIN1234` (비밀번호 변경) 명령어를 전송하면 됩니다.
',
  '<p>사물에 무선 통신 기술을 융합하여 인터넷 망과 연결하는 <strong>사물인터넷(IoT)</strong> 구축 기술을 파헤칩니다.</p>
<hr>
<h2>1. 무선 통신 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Bluetooth Classic (HC-06/HC-05)</strong>: 2.4GHz 대역을 사용하는 1:1 페어링 기반 근거리 무선 통신 모듈입니다. (SPP: Serial Port Profile 지원)</li>
<li><strong>SoftwareSerial</strong>: 아두이노 우노의 일반 디지털 핀을 시리얼 통신(RX, TX) 핀으로 소프트웨어 변환해주는 라이브러리입니다.</li>
<li><strong>ESP8266 / ESP32</strong>: Wi-Fi 통신 기능을 탑재한 32-bit SoC 칩셋으로 독립적인 아두이노 개발 보드로도 사용 가능합니다.</li>
<li><strong>MQTT (Message Queuing Telemetry Transport)</strong>: IoT 장치 간의 경량 발행/구독(Publish/Subscribe) 메시징 프로토콜입니다.</li>
</ul>
<hr>
<h2>2. 블루투스 HC-06 모듈 제어 실습</h2>
<pre><code>[아두이노 - HC-06 핀 연결 주의사항]
아두이노 D2 (Software RX) &lt;--- HC-06 TXD
아두이노 D3 (Software TX) ---&gt; HC-06 RXD (5V-&gt;3.3V 분압 권장)
</code></pre>
<pre><code class="language-cpp">#include &lt;SoftwareSerial.h&gt;

SoftwareSerial BTSerial(2, 3); // RX=2, TX=3

const int ledPin = 13;

void setup() {
  Serial.begin(9600);
  BTSerial.begin(9600);
  pinMode(ledPin, OUTPUT);
  Serial.println(&quot;블루투스 접속 대기 중...&quot;);
}

void loop() {
  // 스마트폰 앱에서 보낸 데이터 읽기
  if (BTSerial.available()) {
    char data = BTSerial.read();
    Serial.print(&quot;수신 데이터: &quot;); Serial.println(data);
    
    if (data == &#39;1&#39;) {
      digitalWrite(ledPin, HIGH);
      BTSerial.println(&quot;LED ON&quot;);
    } else if (data == &#39;0&#39;) {
      digitalWrite(ledPin, LOW);
      BTSerial.println(&quot;LED OFF&quot;);
    }
  }
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. HC-06 블루투스의 이름과 비밀번호(PIN)를 바꾸려면 어떻게 하나요?</strong>
A. 스마트폰과 페어링되지 않은 상태에서 시리얼 모니터로 <code>AT</code> (응답: OK), <code>AT+NAMEmyArduino</code> (이름 변경), <code>AT+PIN1234</code> (비밀번호 변경) 명령어를 전송하면 됩니다.</p>
',
  'published',
  '아두이노 무선 통신 및 IoT - 블루투스 HC-06, Wi-Fi ESP8266 스마트폰 제어',
  '블루투스 HC-06(SoftwareSerial), Wi-Fi ESP8266/ESP32 모듈을 활용한 사물인터넷(IoT) 시스템 구축과 스마트폰 앱 제어를 배웁니다.',
  9,
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
  'ch10-digital-communication-interfaces',
  '디지털 통신 인터페이스 (I2C, SPI, 1-Wire)',
  '다양한 부품 및 칩셋과 데이터를 교환하는 표준 디지털 직렬 통신 방식인 I2C, SPI, 1-Wire 인터페이스를 심층 학습합니다.',
  '마이크로컨트롤러가 주변 센서, 메모리 칩, 디스플레이 IC와 데이터를 교환하는 **표준 디지털 통신 3대 인터페이스**를 비교합니다.

---

## 1. 디지털 통신 용어 사전 (Glossary)

- **I2C (Inter-Integrated Circuit)**: 2개의 선(SDA, SCL)과 7-bit 주소를 사용하여 최대 127개 주변장치를 병렬 연결하는 필립스 개발 통신 규격입니다.
- **SPI (Serial Peripheral Interface)**: 4개의 선(MOSI, MISO, SCK, CS)을 사용하며 동기식으로 데이터를 매우 빠르게 송수신하는 전이중(Full-Duplex) 통신입니다.
- **1-Wire**: 단 1개의 데이터 선(과 GND)을 공유하며 다수의 1-Wire 장치(DS18B20 등)를 연결하는 댈러스 세미컨덕터 통신 규격입니다.
- **Master / Slave**: 통신 클록(Clock)을 주도적으로 생성하여 전송을 지시하는 장치(Master)와 이에 응답하는 장치(Slave) 구도입니다.

---

## 2. 통신 규격 3종 특성 비교표

| 비교 항목 | I2C 통신 | SPI 통신 | 1-Wire 통신 |
| :--- | :--- | :--- | :--- |
| **필요 신호선 수** | **2개** (SDA, SCL) | **4개** (MOSI, MISO, SCK, CS) | **1개** (Data) |
| **전송 방식** | 반이중 (Half-Duplex) | **전이중 (Full-Duplex)** | 반이중 (Half-Duplex) |
| **최대 전송 속도** | 100kbps ~ 3.4Mbps | **10Mbps ~ 100Mbps (최고속)** | ~16.3kbps (느림) |
| **슬레이브 선택 방식** | 7-bit / 10-bit 소프트웨어 주소 | 하드웨어 CS(SS) 핀 개별 제어 | 64-bit 고유 ROM 주소 |
| **주요 사용 부품** | Character LCD, RTC, 온습도 센서 | SD 카드 모듈, TFT 컬러 LCD, RFID | DS18B20 방수 온도 센서 |

---

## 3. I2C Scanner 진단 코드

내 연결된 I2C 장치의 주소를 모를 때 탐색하는 필수 스크립트입니다.

```cpp
#include <Wire.h>

void setup() {
  Wire.begin();
  Serial.begin(9600);
  Serial.println("
I2C 버스 스캔 시작...");

  int count = 0;
  for (byte address = 1; address < 127; address++) {
    Wire.beginTransmission(address);
    if (Wire.endTransmission() == 0) {
      Serial.print("I2C 장치 발견! 주소: 0x");
      if (address < 16) Serial.print("0");
      Serial.println(address, HEX);
      count++;
    }
  }
  Serial.print("스캔 완료. 발견된 장치 수: "); Serial.println(count);
}
void loop() {}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. I2C 버스 신호선에 풀업 저항($4.7\text{K}\Omega$)을 다는 이유는 무엇인가요?**
A. I2C 출력 회로는 오픈 드레인(Open-Drain) 구조로 되어 있어 신호를 0V(LOW)로 당길 수만 있고 5V(HIGH)로 밀어 올리지 못합니다. 따라서 풀업 저항이 5V 상태를 유지해 주어야 통신이 이루어집니다.
',
  '<p>마이크로컨트롤러가 주변 센서, 메모리 칩, 디스플레이 IC와 데이터를 교환하는 <strong>표준 디지털 통신 3대 인터페이스</strong>를 비교합니다.</p>
<hr>
<h2>1. 디지털 통신 용어 사전 (Glossary)</h2>
<ul>
<li><strong>I2C (Inter-Integrated Circuit)</strong>: 2개의 선(SDA, SCL)과 7-bit 주소를 사용하여 최대 127개 주변장치를 병렬 연결하는 필립스 개발 통신 규격입니다.</li>
<li><strong>SPI (Serial Peripheral Interface)</strong>: 4개의 선(MOSI, MISO, SCK, CS)을 사용하며 동기식으로 데이터를 매우 빠르게 송수신하는 전이중(Full-Duplex) 통신입니다.</li>
<li><strong>1-Wire</strong>: 단 1개의 데이터 선(과 GND)을 공유하며 다수의 1-Wire 장치(DS18B20 등)를 연결하는 댈러스 세미컨덕터 통신 규격입니다.</li>
<li><strong>Master / Slave</strong>: 통신 클록(Clock)을 주도적으로 생성하여 전송을 지시하는 장치(Master)와 이에 응답하는 장치(Slave) 구도입니다.</li>
</ul>
<hr>
<h2>2. 통신 규격 3종 특성 비교표</h2>
<table>
<thead>
<tr>
<th align="left">비교 항목</th>
<th align="left">I2C 통신</th>
<th align="left">SPI 통신</th>
<th align="left">1-Wire 통신</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>필요 신호선 수</strong></td>
<td align="left"><strong>2개</strong> (SDA, SCL)</td>
<td align="left"><strong>4개</strong> (MOSI, MISO, SCK, CS)</td>
<td align="left"><strong>1개</strong> (Data)</td>
</tr>
<tr>
<td align="left"><strong>전송 방식</strong></td>
<td align="left">반이중 (Half-Duplex)</td>
<td align="left"><strong>전이중 (Full-Duplex)</strong></td>
<td align="left">반이중 (Half-Duplex)</td>
</tr>
<tr>
<td align="left"><strong>최대 전송 속도</strong></td>
<td align="left">100kbps ~ 3.4Mbps</td>
<td align="left"><strong>10Mbps ~ 100Mbps (최고속)</strong></td>
<td align="left">~16.3kbps (느림)</td>
</tr>
<tr>
<td align="left"><strong>슬레이브 선택 방식</strong></td>
<td align="left">7-bit / 10-bit 소프트웨어 주소</td>
<td align="left">하드웨어 CS(SS) 핀 개별 제어</td>
<td align="left">64-bit 고유 ROM 주소</td>
</tr>
<tr>
<td align="left"><strong>주요 사용 부품</strong></td>
<td align="left">Character LCD, RTC, 온습도 센서</td>
<td align="left">SD 카드 모듈, TFT 컬러 LCD, RFID</td>
<td align="left">DS18B20 방수 온도 센서</td>
</tr>
</tbody></table>
<hr>
<h2>3. I2C Scanner 진단 코드</h2>
<p>내 연결된 I2C 장치의 주소를 모를 때 탐색하는 필수 스크립트입니다.</p>
<pre><code class="language-cpp">#include &lt;Wire.h&gt;

void setup() {
  Wire.begin();
  Serial.begin(9600);
  Serial.println(&quot;
I2C 버스 스캔 시작...&quot;);

  int count = 0;
  for (byte address = 1; address &lt; 127; address++) {
    Wire.beginTransmission(address);
    if (Wire.endTransmission() == 0) {
      Serial.print(&quot;I2C 장치 발견! 주소: 0x&quot;);
      if (address &lt; 16) Serial.print(&quot;0&quot;);
      Serial.println(address, HEX);
      count++;
    }
  }
  Serial.print(&quot;스캔 완료. 발견된 장치 수: &quot;); Serial.println(count);
}
void loop() {}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. I2C 버스 신호선에 풀업 저항($4.7\text{K}\Omega$)을 다는 이유는 무엇인가요?</strong>
A. I2C 출력 회로는 오픈 드레인(Open-Drain) 구조로 되어 있어 신호를 0V(LOW)로 당길 수만 있고 5V(HIGH)로 밀어 올리지 못합니다. 따라서 풀업 저항이 5V 상태를 유지해 주어야 통신이 이루어집니다.</p>
',
  'published',
  '아두이노 임베디드 디지털 통신 - I2C 통신, SPI 통신, 1-Wire 규격 분석',
  'I2C(SDA/SCL) 마스터-슬레이브 2선식 통신, 고속 전이중 4선식 SPI(MOSI/MISO/SCK/CS), 1-Wire 통신 규격을 완벽 비교 해설합니다.',
  10,
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
  'ch11-interrupts-and-timer',
  '인터럽트(Interrupt)와 타이머 활용',
  '메인 루프를 멈추지 않고 신호를 즉시 감지하는 하드웨어 인터럽트(attachInterrupt)와 millis() 기반 비동기 타이머 구현을 학습합니다.',
  '프로그램의 메인 루프(`loop()`)를 방해하지 않고 긴급 신호를 감지하는 **인터럽트(Interrupt)** 제어를 배웁니다.

---

## 1. 인터럽트 핵심 용어 사전 (Glossary)

- **Interrupt (인터럽트)**: 마이크로컨트롤러가 메인 프로그램을 실행하다가 내부/외부 이벤트가 발생하면 즉시 실행을 멈추고 지정된 예외 처리 루틴을 수행하는 기능입니다.
- **ISR (Interrupt Service Routine)**: 인터럽트 신호 감지 시 즉시 실행되는 전용 콜백 함수입니다.
- **volatile**: 컴파일러가 해당 변수를 최적화하여 레지스터에 보관하지 않고, 항상 RAM 메모리 주소에서 직접 읽어오도록 강제하는 키워드입니다 (ISR 내 수정 변수 필수).
- **millis()**: 아두이노 보드가 켜진 후 경과된 시간(밀리초, ms)을 반환하는 타이머 함수입니다. (약 50일 후 0으로 오버플로우)

---

## 2. 외부 하드웨어 인터럽트 (`attachInterrupt`)

아두이노 우노는 **디지털 2번(Interrupt 0)**과 **3번(Interrupt 1)** 핀에서 외부 하드웨어 인터럽트를 지원합니다.

```cpp
const byte ledPin = 13;
const byte interruptPin = 2;

// ISR 내에서 변경되는 변수는 반드시 volatile 지정!
volatile boolean ledState = LOW;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(interruptPin, INPUT_PULLUP);
  
  // 2번 핀 전압이 HIGH -> LOW로 떨어지는 순간(FALLING) toggleISR() 즉시 실행
  attachInterrupt(digitalPinToInterrupt(interruptPin), toggleISR, FALLING);
}

void loop() {
  // 메인 루프에서는 딜레이나 무거운 연산을 수행 중이어도 인터럽트는 즉시 반영됨
  digitalWrite(ledPin, ledState);
}

// ISR 함수는 매개변수와 반환값이 없어야 함 (void)
void toggleISR() {
  ledState = !ledState;
}
```

---

## 3. `millis()` 비동기 멀티태스킹 템플릿

`delay()`는 CPU를 멈추게 하므로, 여러 개의 작업을 독립적인 주기로 돌리려면 `millis()` 타임스탬프 비교 방식을 써야 합니다.

```cpp
unsigned long prevLED = 0;
unsigned long prevSensor = 0;

void loop() {
  unsigned long current = millis();

  // Task A: 0.5초 간격 LED 점멸
  if (current - prevLED >= 500) {
    prevLED = current;
    // LED 작업 수행
  }

  // Task B: 2초 간격 센서 측정
  if (current - prevSensor >= 2000) {
    prevSensor = current;
    // 센서 작업 수행
  }
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. ISR 함수 안에서 왜 `delay()`를 사용할 수 없나요?**
A. `delay()` 함수는 아두이노 내부 타이머 인터럽트를 기반으로 시간을 카운팅합니다. 하지만 ISR 함수가 동작하는 동안에는 다른 모든 인터럽트가 차단되므로 `delay()`의 시간 카운터가 동작하지 않아 무한 대기 상태(Deadlock)에 빠지게 됩니다.
',
  '<p>프로그램의 메인 루프(<code>loop()</code>)를 방해하지 않고 긴급 신호를 감지하는 <strong>인터럽트(Interrupt)</strong> 제어를 배웁니다.</p>
<hr>
<h2>1. 인터럽트 핵심 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Interrupt (인터럽트)</strong>: 마이크로컨트롤러가 메인 프로그램을 실행하다가 내부/외부 이벤트가 발생하면 즉시 실행을 멈추고 지정된 예외 처리 루틴을 수행하는 기능입니다.</li>
<li><strong>ISR (Interrupt Service Routine)</strong>: 인터럽트 신호 감지 시 즉시 실행되는 전용 콜백 함수입니다.</li>
<li><strong>volatile</strong>: 컴파일러가 해당 변수를 최적화하여 레지스터에 보관하지 않고, 항상 RAM 메모리 주소에서 직접 읽어오도록 강제하는 키워드입니다 (ISR 내 수정 변수 필수).</li>
<li><strong>millis()</strong>: 아두이노 보드가 켜진 후 경과된 시간(밀리초, ms)을 반환하는 타이머 함수입니다. (약 50일 후 0으로 오버플로우)</li>
</ul>
<hr>
<h2>2. 외부 하드웨어 인터럽트 (<code>attachInterrupt</code>)</h2>
<p>아두이노 우노는 **디지털 2번(Interrupt 0)**과 <strong>3번(Interrupt 1)</strong> 핀에서 외부 하드웨어 인터럽트를 지원합니다.</p>
<pre><code class="language-cpp">const byte ledPin = 13;
const byte interruptPin = 2;

// ISR 내에서 변경되는 변수는 반드시 volatile 지정!
volatile boolean ledState = LOW;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(interruptPin, INPUT_PULLUP);
  
  // 2번 핀 전압이 HIGH -&gt; LOW로 떨어지는 순간(FALLING) toggleISR() 즉시 실행
  attachInterrupt(digitalPinToInterrupt(interruptPin), toggleISR, FALLING);
}

void loop() {
  // 메인 루프에서는 딜레이나 무거운 연산을 수행 중이어도 인터럽트는 즉시 반영됨
  digitalWrite(ledPin, ledState);
}

// ISR 함수는 매개변수와 반환값이 없어야 함 (void)
void toggleISR() {
  ledState = !ledState;
}
</code></pre>
<hr>
<h2>3. <code>millis()</code> 비동기 멀티태스킹 템플릿</h2>
<p><code>delay()</code>는 CPU를 멈추게 하므로, 여러 개의 작업을 독립적인 주기로 돌리려면 <code>millis()</code> 타임스탬프 비교 방식을 써야 합니다.</p>
<pre><code class="language-cpp">unsigned long prevLED = 0;
unsigned long prevSensor = 0;

void loop() {
  unsigned long current = millis();

  // Task A: 0.5초 간격 LED 점멸
  if (current - prevLED &gt;= 500) {
    prevLED = current;
    // LED 작업 수행
  }

  // Task B: 2초 간격 센서 측정
  if (current - prevSensor &gt;= 2000) {
    prevSensor = current;
    // 센서 작업 수행
  }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. ISR 함수 안에서 왜 <code>delay()</code>를 사용할 수 없나요?</strong>
A. <code>delay()</code> 함수는 아두이노 내부 타이머 인터럽트를 기반으로 시간을 카운팅합니다. 하지만 ISR 함수가 동작하는 동안에는 다른 모든 인터럽트가 차단되므로 <code>delay()</code>의 시간 카운터가 동작하지 않아 무한 대기 상태(Deadlock)에 빠지게 됩니다.</p>
',
  'published',
  '아두이노 인터럽트 완벽 이해 - attachInterrupt, ISR, volatile 및 millis 타이머',
  '하드웨어 외부 인터럽트(attachInterrupt), ISR 함수 규칙, volatile 변수 선언, delay() 대체 millis() 비동기 타이머 멀티태스킹을 상세 해설합니다.',
  11,
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
  'ch12-first-arduino-project',
  '나의 첫 번째 아두이노 종합 프로젝트',
  '조도/수분 센서, LCD 디스플레이, 릴레이 및 워터 펌프를 융합하여 실전 동작하는 스마트 아두이노 자동화 시스템을 제작합니다.',
  '배운 모든 기술(입출력, 센서, 모터 릴레이, 디스플레이)을 종합하여 **"스마트 가든 (자동 식물 물주기) 시스템"**을 완성합니다.

---

## 1. 프로젝트 회로 핀맵 연결표

| 부품 모듈 | 아두이노 핀 | 전원 연결 | 비고 |
| :--- | :--- | :--- | :--- |
| **I2C LCD (SDA)** | **A4 핀** | 5V / GND | I2C 데이터 라인 |
| **I2C LCD (SCL)** | **A5 핀** | 5V / GND | I2C 클록 라인 |
| **토양 수분 센서** | **A0 핀** | 5V / GND | 아날로그 입력 |
| **5V 릴레이 모듈** | **디지털 7번 핀** | 5V / GND | 워터 펌프 전원 스위칭 |

---

## 2. 스마트 가든 완성 스케치 소스 코드

```cpp
/*
  프로젝트: 스마트 식물 물주기 자동화 시스템
*/

#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

const int moisturePin = A0;
const int relayPin = 7;
const int dryThreshold = 500; // 건조 기준 임계값

void setup() {
  Serial.begin(9600);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH); // 릴레이 OFF (Active Low 모듈)

  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Smart Garden OS");
  delay(1500);
  lcd.clear();
}

void loop() {
  int moistureVal = analogRead(moisturePin);
  
  Serial.print("Soil Moisture: ");
  Serial.println(moistureVal);

  // LCD 1행: 수분 수치 표시
  lcd.setCursor(0, 0);
  lcd.print("Moisture: ");
  lcd.print(moistureVal);
  lcd.print("   ");

  // 수분 판단 로직
  if (moistureVal > dryThreshold) {
    // 흙이 말라있음 -> 3초간 펌프 동작
    lcd.setCursor(0, 1);
    lcd.print("Status: WATERING!");
    digitalWrite(relayPin, LOW);  // 릴레이 ON (펌프 가동)
    delay(3000);
    digitalWrite(relayPin, HIGH); // 릴레이 OFF
    lcd.setCursor(0, 1);
    lcd.print("Status: DONE    ");
  } else {
    lcd.setCursor(0, 1);
    lcd.print("Status: HEALTHY ");
  }

  delay(1000);
}
```

---

## 3. 임베디드 프로젝트 문제 해결 패턴

1. **단계별 모듈 테스트**: 한 번에 모든 부품을 다 꽂지 말고, LCD $ightarrow$ 센서 $ightarrow$ 릴레이순으로 개별 작동을 먼저 검증합니다.
2. **공통 그라운드(GND) 확인**: 여러 외부 전원을 사용할 경우 모든 GND는 반드시 하나로 이어서 전위 기준을 맞춰야 합니다.
3. **노이즈 및 예외 처리**: 센서 수치가 순간 튈 수 있으므로 3회 평균값을 내거나 임계값 판단에 지연 시간을 둡니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 독립형 하우징 및 배터리 전원 구성 팁은?**
A. 외부 전원으로 $9\text{V}$ 건전지나 $12\text{V}$ DC 어댑터를 사용할 때는 아두이노의 **VIN 핀**이나 **DC 배럴 자크(Jack)**로 연결해야 보드 내부 온보드 레귤레이터(5V 변환 칩)가 안전하게 동작합니다.
',
  '<p>배운 모든 기술(입출력, 센서, 모터 릴레이, 디스플레이)을 종합하여 **&quot;스마트 가든 (자동 식물 물주기) 시스템&quot;**을 완성합니다.</p>
<hr>
<h2>1. 프로젝트 회로 핀맵 연결표</h2>
<table>
<thead>
<tr>
<th align="left">부품 모듈</th>
<th align="left">아두이노 핀</th>
<th align="left">전원 연결</th>
<th align="left">비고</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>I2C LCD (SDA)</strong></td>
<td align="left"><strong>A4 핀</strong></td>
<td align="left">5V / GND</td>
<td align="left">I2C 데이터 라인</td>
</tr>
<tr>
<td align="left"><strong>I2C LCD (SCL)</strong></td>
<td align="left"><strong>A5 핀</strong></td>
<td align="left">5V / GND</td>
<td align="left">I2C 클록 라인</td>
</tr>
<tr>
<td align="left"><strong>토양 수분 센서</strong></td>
<td align="left"><strong>A0 핀</strong></td>
<td align="left">5V / GND</td>
<td align="left">아날로그 입력</td>
</tr>
<tr>
<td align="left"><strong>5V 릴레이 모듈</strong></td>
<td align="left"><strong>디지털 7번 핀</strong></td>
<td align="left">5V / GND</td>
<td align="left">워터 펌프 전원 스위칭</td>
</tr>
</tbody></table>
<hr>
<h2>2. 스마트 가든 완성 스케치 소스 코드</h2>
<pre><code class="language-cpp">/*
  프로젝트: 스마트 식물 물주기 자동화 시스템
*/

#include &lt;Wire.h&gt;
#include &lt;LiquidCrystal_I2C.h&gt;

LiquidCrystal_I2C lcd(0x27, 16, 2);

const int moisturePin = A0;
const int relayPin = 7;
const int dryThreshold = 500; // 건조 기준 임계값

void setup() {
  Serial.begin(9600);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH); // 릴레이 OFF (Active Low 모듈)

  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print(&quot;Smart Garden OS&quot;);
  delay(1500);
  lcd.clear();
}

void loop() {
  int moistureVal = analogRead(moisturePin);
  
  Serial.print(&quot;Soil Moisture: &quot;);
  Serial.println(moistureVal);

  // LCD 1행: 수분 수치 표시
  lcd.setCursor(0, 0);
  lcd.print(&quot;Moisture: &quot;);
  lcd.print(moistureVal);
  lcd.print(&quot;   &quot;);

  // 수분 판단 로직
  if (moistureVal &gt; dryThreshold) {
    // 흙이 말라있음 -&gt; 3초간 펌프 동작
    lcd.setCursor(0, 1);
    lcd.print(&quot;Status: WATERING!&quot;);
    digitalWrite(relayPin, LOW);  // 릴레이 ON (펌프 가동)
    delay(3000);
    digitalWrite(relayPin, HIGH); // 릴레이 OFF
    lcd.setCursor(0, 1);
    lcd.print(&quot;Status: DONE    &quot;);
  } else {
    lcd.setCursor(0, 1);
    lcd.print(&quot;Status: HEALTHY &quot;);
  }

  delay(1000);
}
</code></pre>
<hr>
<h2>3. 임베디드 프로젝트 문제 해결 패턴</h2>
<ol>
<li><strong>단계별 모듈 테스트</strong>: 한 번에 모든 부품을 다 꽂지 말고, LCD $
ightarrow$ 센서 $
ightarrow$ 릴레이순으로 개별 작동을 먼저 검증합니다.</li>
<li><strong>공통 그라운드(GND) 확인</strong>: 여러 외부 전원을 사용할 경우 모든 GND는 반드시 하나로 이어서 전위 기준을 맞춰야 합니다.</li>
<li><strong>노이즈 및 예외 처리</strong>: 센서 수치가 순간 튈 수 있으므로 3회 평균값을 내거나 임계값 판단에 지연 시간을 둡니다.</li>
</ol>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 독립형 하우징 및 배터리 전원 구성 팁은?</strong>
A. 외부 전원으로 $9\text{V}$ 건전지나 $12\text{V}$ DC 어댑터를 사용할 때는 아두이노의 <strong>VIN 핀</strong>이나 **DC 배럴 자크(Jack)**로 연결해야 보드 내부 온보드 레귤레이터(5V 변환 칩)가 안전하게 동작합니다.</p>
',
  'published',
  '실전 아두이노 종합 프로젝트 - 스마트 가든 / 자동 식물 물주기 시스템 구현',
  '센서, 모터 릴레이, I2C LCD, 시리얼 통신 기술을 종합하여 토양 수분을 자동 측정하고 펌프를 가동하는 스마트 가든 임베디드 프로젝트를 완성합니다.',
  12,
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
