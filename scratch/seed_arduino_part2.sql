-- Seed Arduino Lessons Part 2

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'arduino',
  'ch07-sensors-applications',
  '다양한 센서 활용하기 (CDS, 초음파, 온습도, PIR)',
  '주변 환경(빛, 거리, 온도, 습도, 사람의 움직임)을 인식하여 아두이노에 전달하는 대표적인 4대 입력 센서의 원리와 회로 연결 및 코딩을 학습합니다.',
  '**센서(Sensor)**는 빛, 온도, 거리, 움직임 등의 물리적인 자연 현상 변화를 아두이노가 읽을 수 있는 전기 신호로 바꿔주는 장치입니다.

---

## 1. 조도 센서 (CDS Photoresistor)
빛의 양이 많아지면 저항값이 작아지고, 어두워지면 저항값이 커지는 센서입니다.

```cpp
// 전압분배 회로를 거쳐 A0 핀으로 조도 측정
int cdsVal = analogRead(A0);
if (cdsVal < 300) {
  digitalWrite(13, HIGH); // 어두워지면 가로등 LED 켜기
}
```

---

## 2. 초음파 거리 센서 (HC-SR04)
초음파(40kHz)를 쏘아 올린 후 벽에 맞고 돌아오는 왕복 시간을 측정하여 거리를 계산합니다.

$$거리(\text{cm}) = \frac{\text{왕복시간}(\mu\text{s}) \times 0.0343}{2}$$

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
  digitalWrite(trigPin, HIGH); delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  long duration = pulseIn(echoPin, HIGH); // 마이크로초 단위 왕복시간
  float distance = duration * 0.034 / 2;  // cm 거리 계산

  Serial.print("측정 거리: "); Serial.print(distance); Serial.println(" cm");
  delay(200);
}
```

---

## 3. DHT11 온습도 센서 & PIR 인체 감지 센서

- **DHT11**: 디지털 1-Wire 신호로 온도시(0~50°C)와 상대습도(20~90%)를 측정 (`DHT.h` 라이브러리 활용).
- **PIR 센서**: 적외선(Infrared) 변화를 감지하여 사람이 움직일 때 디지털 HIGH 신호 출력 (자동문, 방범등에 활용).

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 초음파 센서로 거리를 재는데 가끔 0cm나 2000cm 같은 비정상 오류값이 찍혀요.**
A. 초음파가 흡음 재질(천, 솜)에 부딪히거나 45도 이상 빗겨나간 각도로 발사되면 반사파가 돌아오지 못해 타임아웃 오류가 발생합니다. 코드에서 `distance > 2 && distance < 400` 조건문으로 유효 범위를 필터링하는 예외 처리가 필요합니다.
',
  '<p>**센서(Sensor)**는 빛, 온도, 거리, 움직임 등의 물리적인 자연 현상 변화를 아두이노가 읽을 수 있는 전기 신호로 바꿔주는 장치입니다.</p>
<hr>
<h2>1. 조도 센서 (CDS Photoresistor)</h2>
<p>빛의 양이 많아지면 저항값이 작아지고, 어두워지면 저항값이 커지는 센서입니다.</p>
<pre><code class="language-cpp">// 전압분배 회로를 거쳐 A0 핀으로 조도 측정
int cdsVal = analogRead(A0);
if (cdsVal &lt; 300) {
  digitalWrite(13, HIGH); // 어두워지면 가로등 LED 켜기
}
</code></pre>
<hr>
<h2>2. 초음파 거리 센서 (HC-SR04)</h2>
<p>초음파(40kHz)를 쏘아 올린 후 벽에 맞고 돌아오는 왕복 시간을 측정하여 거리를 계산합니다.</p>
<p>$$거리(\text{cm}) = \frac{\text{왕복시간}(\mu\text{s}) \times 0.0343}{2}$$</p>
<pre><code class="language-cpp">const int trigPin = 9;
const int echoPin = 8;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  digitalWrite(trigPin, LOW); delayMicroseconds(2);
  digitalWrite(trigPin, HIGH); delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  long duration = pulseIn(echoPin, HIGH); // 마이크로초 단위 왕복시간
  float distance = duration * 0.034 / 2;  // cm 거리 계산

  Serial.print(&quot;측정 거리: &quot;); Serial.print(distance); Serial.println(&quot; cm&quot;);
  delay(200);
}
</code></pre>
<hr>
<h2>3. DHT11 온습도 센서 &amp; PIR 인체 감지 센서</h2>
<ul>
<li><strong>DHT11</strong>: 디지털 1-Wire 신호로 온도시(0<del>50°C)와 상대습도(20</del>90%)를 측정 (<code>DHT.h</code> 라이브러리 활용).</li>
<li><strong>PIR 센서</strong>: 적외선(Infrared) 변화를 감지하여 사람이 움직일 때 디지털 HIGH 신호 출력 (자동문, 방범등에 활용).</li>
</ul>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 초음파 센서로 거리를 재는데 가끔 0cm나 2000cm 같은 비정상 오류값이 찍혀요.</strong>
A. 초음파가 흡음 재질(천, 솜)에 부딪히거나 45도 이상 빗겨나간 각도로 발사되면 반사파가 돌아오지 못해 타임아웃 오류가 발생합니다. 코드에서 <code>distance &gt; 2 &amp;&amp; distance &lt; 400</code> 조건문으로 유효 범위를 필터링하는 예외 처리가 필요합니다.</p>
',
  'published',
  '아두이노 센서 입문 - 조도센서 CDS, 초음파 HC-SR04, 온습도 DHT11, PIR 인체감지',
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
  '아두이노로 물리적인 회전과 위치 이동을 구현하는 DC 모터(모터 드라이버 연동), 서보 모터(Servo), 스텝 모터(Stepper)의 작동 원리와 제어법을 배웁니다.',
  '**모터(Motor)**는 전기 에너지를 회전 운동 에너지로 바꿔주는 대표적인 **액추에이터(Actuator)**입니다.

---

## 1. DC 모터와 L298N 모터 드라이버

아두이노 핀은 전류 출력 제한(최대 40mA)이 있어 모터를 직접 연결하면 보드가 파손됩니다. 반드시 외부 전원과 **H-Bridge 모터 드라이버(L298N)**를 경유해야 합니다.

```cpp
// L298N 핀 연결
const int ENA = 9;  // PWM 속도 조절
const int IN1 = 7;  // 정회전/역회전 제어
const int IN2 = 6;

void setup() {
  pinMode(ENA, OUTPUT); pinMode(IN1, OUTPUT); pinMode(IN2, OUTPUT);
}

void loop() {
  // 정회전, 속도 200 (PWM 0~255)
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, 200);
  delay(2000);
}
```

---

## 2. 서보 모터 (Servo Motor)

원하는 회전 각도(0° ~ 180°)를 지정하면 내부에 내장된 가변저항과 기어가 지정한 위치로 회전축을 정밀하게 고정시키는 모터입니다.

```cpp
#include <Servo.h>

Servo myServo; // 서보 객체 생성

void setup() {
  myServo.attach(9); // 9번 핀에 서보 모터 신호선 연결
}

void loop() {
  myServo.write(0);   // 0도로 이동
  delay(1000);
  myServo.write(90);  // 90도로 이동
  delay(1000);
  myServo.write(180); // 180도로 이동
  delay(1000);
}
```

---

## 3. 스텝 모터 (Stepper Motor)

한 바퀴(360°)를 수백 개의 미세한 단계(Step)로 나누어 정밀하게 각도와 회전수를 제어하는 모터입니다 (3D 프린터, 로봇 팔에 필수적).

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 서보 모터를 아두이노에 연결해 동작시킬 때 아두이노가 자꾸 리셋(재부팅)돼요.**
A. 모터가 작동할 때 순간적으로 큰 전류(돌입 전류)를 끌어가면서 아두이노 5V 전압이 순간 다운(Brownout)되는 현상입니다. 아두이노와 모터의 **전원을 분리(외부 5V 아답터/배터리 사용)**하고, GND 접지선끼리는 서로 연결해 주어야 해결됩니다.
',
  '<p>**모터(Motor)**는 전기 에너지를 회전 운동 에너지로 바꿔주는 대표적인 **액추에이터(Actuator)**입니다.</p>
<hr>
<h2>1. DC 모터와 L298N 모터 드라이버</h2>
<p>아두이노 핀은 전류 출력 제한(최대 40mA)이 있어 모터를 직접 연결하면 보드가 파손됩니다. 반드시 외부 전원과 **H-Bridge 모터 드라이버(L298N)**를 경유해야 합니다.</p>
<pre><code class="language-cpp">// L298N 핀 연결
const int ENA = 9;  // PWM 속도 조절
const int IN1 = 7;  // 정회전/역회전 제어
const int IN2 = 6;

void setup() {
  pinMode(ENA, OUTPUT); pinMode(IN1, OUTPUT); pinMode(IN2, OUTPUT);
}

void loop() {
  // 정회전, 속도 200 (PWM 0~255)
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, 200);
  delay(2000);
}
</code></pre>
<hr>
<h2>2. 서보 모터 (Servo Motor)</h2>
<p>원하는 회전 각도(0° ~ 180°)를 지정하면 내부에 내장된 가변저항과 기어가 지정한 위치로 회전축을 정밀하게 고정시키는 모터입니다.</p>
<pre><code class="language-cpp">#include &lt;Servo.h&gt;

Servo myServo; // 서보 객체 생성

void setup() {
  myServo.attach(9); // 9번 핀에 서보 모터 신호선 연결
}

void loop() {
  myServo.write(0);   // 0도로 이동
  delay(1000);
  myServo.write(90);  // 90도로 이동
  delay(1000);
  myServo.write(180); // 180도로 이동
  delay(1000);
}
</code></pre>
<hr>
<h2>3. 스텝 모터 (Stepper Motor)</h2>
<p>한 바퀴(360°)를 수백 개의 미세한 단계(Step)로 나누어 정밀하게 각도와 회전수를 제어하는 모터입니다 (3D 프린터, 로봇 팔에 필수적).</p>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 서보 모터를 아두이노에 연결해 동작시킬 때 아두이노가 자꾸 리셋(재부팅)돼요.</strong>
A. 모터가 작동할 때 순간적으로 큰 전류(돌입 전류)를 끌어가면서 아두이노 5V 전압이 순간 다운(Brownout)되는 현상입니다. 아두이노와 모터의 **전원을 분리(외부 5V 아답터/배터리 사용)**하고, GND 접지선끼리는 서로 연결해 주어야 해결됩니다.</p>
',
  'published',
  '아두이노 모터 제어 - DC 모터(L298N 모터드라이버), 서보모터, 스텝모터',
  '물체와 로봇을 움직이는 3대 모터! DC 모터 드라이버(L298N/L293D) 회로, 서보 모터(Servo.h) 각도 제어(0~180도), 정밀 위치 스텝 모터 제어를 실습합니다.',
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

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'arduino',
  'ch09-iot-and-wireless-communication',
  '사물인터넷(IoT)과 무선 통신의 이해 (Bluetooth, Wi-Fi)',
  '스마트폰 앱과 아두이노를 무선 연결하는 HC-06 블루투스 통신과 인터넷 망에 접속하여 데이터를 주고받는 ESP8266 Wi-Fi IoT 통신을 학습합니다.',
  '**사물인터넷(IoT: Internet of Things)**은 사물에 센서와 무선 통신 기능을 내장하여 인터넷 망을 통해 원격으로 상태를 확인하고 제어하는 기술입니다.

---

## 1. 블루투스 통신 모듈 (HC-06)과 소프트웨어 시리얼

아두이노 우노의 하드웨어 시리얼(0, 1번 핀)은 PC 업로드 전용으로 비워두고, 일반 임의의 디지털 핀을 시리얼 통신용으로 바꾸는 **`SoftwareSerial`** 라이브러리를 사용합니다.

```cpp
#include <SoftwareSerial.h>

// SoftwareSerial(RX, TX) -> 아두이노 2번(RX)을 HC-06 TX에, 3번(TX)을 HC-06 RX에 연결
SoftwareSerial BTSerial(2, 3);

void setup() {
  Serial.begin(9600);   // PC 시리얼 모니터
  BTSerial.begin(9600); // 블루투스 모듈 통신 속도
}

void loop() {
  // 스마트폰 -> 아두이노 전송 데이터
  if (BTSerial.available()) {
    char data = BTSerial.read();
    Serial.print("스마트폰 수신 데이터: ");
    Serial.println(data);
  }
}
```

---

## 2. Wi-Fi 통신과 ESP8266 / ESP32 모듈

Wi-Fi 망에 접속하여 웹 서버(Web Server)를 띄우거나 HTTP 요청으로 클라우드 서버에 센서 데이터를 전송합니다.

- **ESP8266 (NodeMCU)**: 저렴한 가격으로 Wi-Fi 통신을 지원하는 32-bit SOC 모듈.
- **ESP32**: Wi-Fi와 Bluetooth 4.2 BLE를 동시 지원하는 고성능 IoT 칩셋.

---

## 3. 자주 묻는 질문 (Q&A)

**Q. HC-06 블루투스 모듈에 스케치 코드가 업로드가 안 되고 실패해요.**
A. 아두이노의 하드웨어 시리얼인 **0번(RX), 1번(TX) 핀**에 블루투스를 직접 연결해두면 PC에서 프로그램 코드를 다운로드할 때 신호 충돌이 납니다. 업로드할 때는 0, 1번 핀 선을 잠시 뽑아두거나 `SoftwareSerial`을 사용하세요.
',
  '<p>**사물인터넷(IoT: Internet of Things)**은 사물에 센서와 무선 통신 기능을 내장하여 인터넷 망을 통해 원격으로 상태를 확인하고 제어하는 기술입니다.</p>
<hr>
<h2>1. 블루투스 통신 모듈 (HC-06)과 소프트웨어 시리얼</h2>
<p>아두이노 우노의 하드웨어 시리얼(0, 1번 핀)은 PC 업로드 전용으로 비워두고, 일반 임의의 디지털 핀을 시리얼 통신용으로 바꾸는 <strong><code>SoftwareSerial</code></strong> 라이브러리를 사용합니다.</p>
<pre><code class="language-cpp">#include &lt;SoftwareSerial.h&gt;

// SoftwareSerial(RX, TX) -&gt; 아두이노 2번(RX)을 HC-06 TX에, 3번(TX)을 HC-06 RX에 연결
SoftwareSerial BTSerial(2, 3);

void setup() {
  Serial.begin(9600);   // PC 시리얼 모니터
  BTSerial.begin(9600); // 블루투스 모듈 통신 속도
}

void loop() {
  // 스마트폰 -&gt; 아두이노 전송 데이터
  if (BTSerial.available()) {
    char data = BTSerial.read();
    Serial.print(&quot;스마트폰 수신 데이터: &quot;);
    Serial.println(data);
  }
}
</code></pre>
<hr>
<h2>2. Wi-Fi 통신과 ESP8266 / ESP32 모듈</h2>
<p>Wi-Fi 망에 접속하여 웹 서버(Web Server)를 띄우거나 HTTP 요청으로 클라우드 서버에 센서 데이터를 전송합니다.</p>
<ul>
<li><strong>ESP8266 (NodeMCU)</strong>: 저렴한 가격으로 Wi-Fi 통신을 지원하는 32-bit SOC 모듈.</li>
<li><strong>ESP32</strong>: Wi-Fi와 Bluetooth 4.2 BLE를 동시 지원하는 고성능 IoT 칩셋.</li>
</ul>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. HC-06 블루투스 모듈에 스케치 코드가 업로드가 안 되고 실패해요.</strong>
A. 아두이노의 하드웨어 시리얼인 <strong>0번(RX), 1번(TX) 핀</strong>에 블루투스를 직접 연결해두면 PC에서 프로그램 코드를 다운로드할 때 신호 충돌이 납니다. 업로드할 때는 0, 1번 핀 선을 잠시 뽑아두거나 <code>SoftwareSerial</code>을 사용하세요.</p>
',
  'published',
  '아두이노 무선 통신 및 IoT - 블루투스 HC-06, Wi-Fi ESP8266 스마트폰 제어',
  '스마트폰 애플리케이션으로 아두이노를 무선 제어하는 블루투스 HC-06(SoftwareSerial), 와이파이 ESP8266/ESP32 모듈을 활용한 사물인터넷(IoT) 시스템 구축을 다룹니다.',
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
  '센서, 디스플레이, 메모리 칩과 아두이노가 복잡한 데이터를 전송할 때 사용하는 표준 디지털 통신 방식인 I2C, SPI, 1-Wire 인터페이스의 원리를 배웁니다.',
  '마이크로컨트롤러가 외부의 다양한 주변 장치(IC 칩, 센서, RTC 시계, 디스플레이)와 통신할 때 사용하는 대표적인 **직렬 통신 규격 3가지**를 비교합니다.

---

## 1. I2C (Inter-Integrated Circuit) 통신

단 **2개의 선(SDA, SCL)**으로 고유한 7-bit 장치 주소(Address)를 지정하여 **최대 127개 장치**를 병렬 연결할 수 있는 마스터-슬레이브 방식 통신입니다.

- **SDA (Serial Data)**: 데이터 송수신 라인 (아두이노 우노: **A4 핀**).
- **SCL (Serial Clock)**: 동기화 클록 신호 라인 (아두이노 우노: **A5 핀**).

```cpp
#include <Wire.h> // I2C 표준 라이브러리

void setup() {
  Wire.begin(); // I2C 마스터로 시작
}
```

---

## 2. SPI (Serial Peripheral Interface) 통신

4개의 선을 사용하는 **전이중(Full-Duplex) 초고속 직렬 통신** 방식으로, SD 카드 모듈이나 컬러 TFT LCD 등 대용량 데이터 전송에 사용됩니다.

| SPI 신호선 | 역할 | 아두이노 우노 핀 |
| :--- | :--- | :--- |
| **MOSI** | 마스터 $ightarrow$ 슬레이브 데이터 전송 | **11번 핀** |
| **MISO** | 슬레이브 $ightarrow$ 마스터 데이터 전송 | **12번 핀** |
| **SCK (CLK)** | 동기화 클록 신호 | **13번 핀** |
| **CS (SS)** | 칩 선택 (Chip Select, Active Low) | **10번 핀** |

---

## 3. 통신 규격 3종 한눈에 비교하기

| 규격 | 필요한 선의 개수 | 속도 | 주용도 |
| :--- | :--- | :--- | :--- |
| **I2C** | 2개 (SDA, SCL) | 보통 (100kHz ~ 400kHz) | LCD, 온습도/자이로 센서, RTC |
| **SPI** | 4개 (MOSI, MISO, SCK, CS) | **매우 빠름 (수 MHz ~ 수십 MHz)** | SD 카드 메모리, TFT 텍스트/컬러 LCD |
| **1-Wire** | 1개 (Data) | 느림 | DS18B20 온도 센서 |

---

## 4. 자주 묻는 질문 (Q&A)

**Q. I2C 통신에서 "I2C Scanner" 스케치는 왜 사용하나요?**
A. 구입한 I2C 모듈(LCD, 센서 등)의 하드웨어 I2C 주소(예: `0x27` 또는 `0x3C`)를 모를 때, 버스를 스캔하여 칩의 정확한 주소를 찾아내는 진단용 코드입니다.
',
  '<p>마이크로컨트롤러가 외부의 다양한 주변 장치(IC 칩, 센서, RTC 시계, 디스플레이)와 통신할 때 사용하는 대표적인 <strong>직렬 통신 규격 3가지</strong>를 비교합니다.</p>
<hr>
<h2>1. I2C (Inter-Integrated Circuit) 통신</h2>
<p>단 **2개의 선(SDA, SCL)**으로 고유한 7-bit 장치 주소(Address)를 지정하여 <strong>최대 127개 장치</strong>를 병렬 연결할 수 있는 마스터-슬레이브 방식 통신입니다.</p>
<ul>
<li><strong>SDA (Serial Data)</strong>: 데이터 송수신 라인 (아두이노 우노: <strong>A4 핀</strong>).</li>
<li><strong>SCL (Serial Clock)</strong>: 동기화 클록 신호 라인 (아두이노 우노: <strong>A5 핀</strong>).</li>
</ul>
<pre><code class="language-cpp">#include &lt;Wire.h&gt; // I2C 표준 라이브러리

void setup() {
  Wire.begin(); // I2C 마스터로 시작
}
</code></pre>
<hr>
<h2>2. SPI (Serial Peripheral Interface) 통신</h2>
<p>4개의 선을 사용하는 <strong>전이중(Full-Duplex) 초고속 직렬 통신</strong> 방식으로, SD 카드 모듈이나 컬러 TFT LCD 등 대용량 데이터 전송에 사용됩니다.</p>
<table>
<thead>
<tr>
<th align="left">SPI 신호선</th>
<th align="left">역할</th>
<th align="left">아두이노 우노 핀</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>MOSI</strong></td>
<td align="left">마스터 $</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">ightarrow$ 슬레이브 데이터 전송</td>
<td align="left"><strong>11번 핀</strong></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><strong>MISO</strong></td>
<td align="left">슬레이브 $</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">ightarrow$ 마스터 데이터 전송</td>
<td align="left"><strong>12번 핀</strong></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><strong>SCK (CLK)</strong></td>
<td align="left">동기화 클록 신호</td>
<td align="left"><strong>13번 핀</strong></td>
</tr>
<tr>
<td align="left"><strong>CS (SS)</strong></td>
<td align="left">칩 선택 (Chip Select, Active Low)</td>
<td align="left"><strong>10번 핀</strong></td>
</tr>
</tbody></table>
<hr>
<h2>3. 통신 규격 3종 한눈에 비교하기</h2>
<table>
<thead>
<tr>
<th align="left">규격</th>
<th align="left">필요한 선의 개수</th>
<th align="left">속도</th>
<th align="left">주용도</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>I2C</strong></td>
<td align="left">2개 (SDA, SCL)</td>
<td align="left">보통 (100kHz ~ 400kHz)</td>
<td align="left">LCD, 온습도/자이로 센서, RTC</td>
</tr>
<tr>
<td align="left"><strong>SPI</strong></td>
<td align="left">4개 (MOSI, MISO, SCK, CS)</td>
<td align="left"><strong>매우 빠름 (수 MHz ~ 수십 MHz)</strong></td>
<td align="left">SD 카드 메모리, TFT 텍스트/컬러 LCD</td>
</tr>
<tr>
<td align="left"><strong>1-Wire</strong></td>
<td align="left">1개 (Data)</td>
<td align="left">느림</td>
<td align="left">DS18B20 온도 센서</td>
</tr>
</tbody></table>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. I2C 통신에서 &quot;I2C Scanner&quot; 스케치는 왜 사용하나요?</strong>
A. 구입한 I2C 모듈(LCD, 센서 등)의 하드웨어 I2C 주소(예: <code>0x27</code> 또는 <code>0x3C</code>)를 모를 때, 버스를 스캔하여 칩의 정확한 주소를 찾아내는 진단용 코드입니다.</p>
',
  'published',
  '아두이노 임베디드 디지털 통신 규격 - I2C 통신, SPI 통신, 1-Wire 개념',
  '여러 부품과 데이터를 주고받는 대표적인 디지털 통신 인터페이스! 2선식 I2C(SDA/SCL), 4선식 고속 SPI(MOSI/MISO/SCK/CS), 1-Wire 통신의 차이를 배웁니다.',
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
  '프로그램 실행 도중 신호가 들어오면 즉시 메인 루프를 멈추고 긴급 명령을 처리하는 인터럽트(Interrupt)와 millis() 기반의 비동기 타이머 구현을 다룹니다.',
  '**인터럽트(Interrupt)**란 프로그램의 메인 루프(`loop()`)가 무한히 실행되고 있는 도중에, 신호가 발생하면 **즉시 기존 작업을 일시 중단하고 긴급 처리를 수행하는 기법**입니다.

---

## 1. 외부 하드웨어 인터럽트: `attachInterrupt()`

아두이노 우노는 **2번(Interrupt 0)**과 **3번(Interrupt 1)** 핀에서 외부 인터럽트를 지원합니다.

```cpp
const byte ledPin = 13;
const byte interruptPin = 2; // 버튼 연결 핀
volatile boolean state = LOW; // 인터럽트 서비스 루틴 내 변경 변수는 volatile 선언 필수!

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(interruptPin, INPUT_PULLUP);
  
  // 2번 핀의 신호가 HIGH -> LOW로 떨어질 때(FALLING) blink() 함수 호출
  attachInterrupt(digitalPinToInterrupt(interruptPin), blinkISR, FALLING);
}

void loop() {
  // 메인 루프에서는 긴 작업을 수행하고 있어도 인터럽트는 즉시 감지됨!
  digitalWrite(ledPin, state);
}

// 인터럽트 서비스 루틴 (ISR: Interrupt Service Routine)
void blinkISR() {
  state = !state; // 상태 뒤집기
}
```

---

## 2. 인터럽트 발생 조건 (Trigger Modes)

- **`LOW`**: 핀 전압이 LOW 상태일 때 지속 발생.
- **`CHANGE`**: 핀 전압이 LOW에서 HIGH로, 또는 HIGH에서 LOW로 바뀔 때.
- **`RISING`**: 전압이 LOW $ightarrow$ HIGH로 솟구쳐 오를 때.
- **`FALLING`**: 전압이 HIGH $ightarrow$ LOW로 떨어져 내릴 때.

---

## 3. `delay()` 없이 시간 지연하기: `millis()`

`delay()` 함수는 아두이노 CPU를 완전히 멈추게 만들어 다른 입력을 받지 못하게 방해합니다. **`millis()`** 함수를 사용하면 비동기로 여러 작업을 동시에 처리할 수 있습니다.

```cpp
unsigned long previousMillis = 0;
const long interval = 1000; // 1초 간격

void loop() {
  unsigned long currentMillis = millis(); // 보드 부팅 후 지난 시간(ms)
  
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    // 1초마다 실행할 작업 수행
  }
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 인터럽트 함수(ISR) 안에서 `delay()`나 `Serial.print()`를 써도 되나요?**
A. 안 됩니다! ISR 내부에서는 인터럽트가 비활성화되므로, 타이머에 의존하는 `delay()`나 시리얼 출력 함수를 부르면 프로그램이 먹통(Deadlock)이 됩니다. ISR은 최대한 가볍고 빠르게 끝나도록 작성해야 합니다.
',
  '<p>**인터럽트(Interrupt)**란 프로그램의 메인 루프(<code>loop()</code>)가 무한히 실행되고 있는 도중에, 신호가 발생하면 <strong>즉시 기존 작업을 일시 중단하고 긴급 처리를 수행하는 기법</strong>입니다.</p>
<hr>
<h2>1. 외부 하드웨어 인터럽트: <code>attachInterrupt()</code></h2>
<p>아두이노 우노는 **2번(Interrupt 0)**과 <strong>3번(Interrupt 1)</strong> 핀에서 외부 인터럽트를 지원합니다.</p>
<pre><code class="language-cpp">const byte ledPin = 13;
const byte interruptPin = 2; // 버튼 연결 핀
volatile boolean state = LOW; // 인터럽트 서비스 루틴 내 변경 변수는 volatile 선언 필수!

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(interruptPin, INPUT_PULLUP);
  
  // 2번 핀의 신호가 HIGH -&gt; LOW로 떨어질 때(FALLING) blink() 함수 호출
  attachInterrupt(digitalPinToInterrupt(interruptPin), blinkISR, FALLING);
}

void loop() {
  // 메인 루프에서는 긴 작업을 수행하고 있어도 인터럽트는 즉시 감지됨!
  digitalWrite(ledPin, state);
}

// 인터럽트 서비스 루틴 (ISR: Interrupt Service Routine)
void blinkISR() {
  state = !state; // 상태 뒤집기
}
</code></pre>
<hr>
<h2>2. 인터럽트 발생 조건 (Trigger Modes)</h2>
<ul>
<li><strong><code>LOW</code></strong>: 핀 전압이 LOW 상태일 때 지속 발생.</li>
<li><strong><code>CHANGE</code></strong>: 핀 전압이 LOW에서 HIGH로, 또는 HIGH에서 LOW로 바뀔 때.</li>
<li><strong><code>RISING</code></strong>: 전압이 LOW $
ightarrow$ HIGH로 솟구쳐 오를 때.</li>
<li><strong><code>FALLING</code></strong>: 전압이 HIGH $
ightarrow$ LOW로 떨어져 내릴 때.</li>
</ul>
<hr>
<h2>3. <code>delay()</code> 없이 시간 지연하기: <code>millis()</code></h2>
<p><code>delay()</code> 함수는 아두이노 CPU를 완전히 멈추게 만들어 다른 입력을 받지 못하게 방해합니다. <strong><code>millis()</code></strong> 함수를 사용하면 비동기로 여러 작업을 동시에 처리할 수 있습니다.</p>
<pre><code class="language-cpp">unsigned long previousMillis = 0;
const long interval = 1000; // 1초 간격

void loop() {
  unsigned long currentMillis = millis(); // 보드 부팅 후 지난 시간(ms)
  
  if (currentMillis - previousMillis &gt;= interval) {
    previousMillis = currentMillis;
    // 1초마다 실행할 작업 수행
  }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 인터럽트 함수(ISR) 안에서 <code>delay()</code>나 <code>Serial.print()</code>를 써도 되나요?</strong>
A. 안 됩니다! ISR 내부에서는 인터럽트가 비활성화되므로, 타이머에 의존하는 <code>delay()</code>나 시리얼 출력 함수를 부르면 프로그램이 먹통(Deadlock)이 됩니다. ISR은 최대한 가볍고 빠르게 끝나도록 작성해야 합니다.</p>
',
  'published',
  '아두이노 인터럽트 완벽 이해 - 하드웨어 외부 인터럽트(attachInterrupt)와 타이머',
  'CPU의 메인 루프를 멈추지 않고 신호를 즉시 감지하는 하드웨어 외부 인터럽트(attachInterrupt) 사용법, volatile 키워드, millis() 비동기 타이머 기법을 배웁니다.',
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
  '조도, 토양 수분 센서, LCD 디스플레이, 서보모터 및 워터 펌프를 결합하여 실제 작동하는 스마트 아두이노 임베디드 프로젝트를 완성합니다.',
  '지금까지 배운 전기전자 기본 상식, 디지털/아날로그 입출력, 센서, 모터, 디스플레이 제어 기법을 총동원하여 **"스마트 식물 케어 (자동 물주기) 시스템"** 프로젝트를 직접 구축해 봅니다.

---

## 1. 프로젝트 시스템 아키텍처

- **입력 센서**: 토양 수분 센서 (A0 핀으로 화분 흙 속 수분 측정)
- **출력 장치**: I2C Character LCD (실시간 수분 상태 및 동작 안내 표시)
- **액추에이터**: 5V 워터 펌프 모터 (릴레이 모듈 7번 핀으로 제어)

---

## 2. 스마트 가든 완성 스케치 코드

```cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

const int moisturePin = A0; // 토양 수분 센서
const int relayPin = 7;     // 워터 펌프 릴레이 모듈
const int threshold = 400;  // 물을 줄 건조 수분 기준치

void setup() {
  Serial.begin(9600);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH); // 릴레이 OFF (Active Low 기준)

  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Smart Garden OS");
  delay(2000);
  lcd.clear();
}

void loop() {
  int moistureVal = analogRead(moisturePin); // 수분 읽기 (0~1023)
  
  // LCD 출력
  lcd.setCursor(0, 0);
  lcd.print("Moisture: ");
  lcd.print(moistureVal);
  lcd.print("   ");

  if (moistureVal > threshold) { 
    // 흙이 건조함 -> 물주기 가동
    lcd.setCursor(0, 1);
    lcd.print("Status: WATERING!");
    digitalWrite(relayPin, LOW); // 펌프 ON
    delay(3000);                 // 3초간 물 공급
    digitalWrite(relayPin, HIGH);// 펌프 OFF
  } else {
    // 흙이 촉촉함
    lcd.setCursor(0, 1);
    lcd.print("Status: Good :)  ");
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

**Q. 아두이노 프로젝트를 마치고 컴퓨터 연결을 빼도 계속 동작하게 하려면?**
A. 5V 스마트폰 충전기나 9V 건전지/파워뱅크를 아두이노의 USB 포트 또는 Vin 핀에 꽂아주면 PC 없이도 독립 실행되는 단독 사물인터넷 장치가 됩니다.
',
  '<p>지금까지 배운 전기전자 기본 상식, 디지털/아날로그 입출력, 센서, 모터, 디스플레이 제어 기법을 총동원하여 <strong>&quot;스마트 식물 케어 (자동 물주기) 시스템&quot;</strong> 프로젝트를 직접 구축해 봅니다.</p>
<hr>
<h2>1. 프로젝트 시스템 아키텍처</h2>
<ul>
<li><strong>입력 센서</strong>: 토양 수분 센서 (A0 핀으로 화분 흙 속 수분 측정)</li>
<li><strong>출력 장치</strong>: I2C Character LCD (실시간 수분 상태 및 동작 안내 표시)</li>
<li><strong>액추에이터</strong>: 5V 워터 펌프 모터 (릴레이 모듈 7번 핀으로 제어)</li>
</ul>
<hr>
<h2>2. 스마트 가든 완성 스케치 코드</h2>
<pre><code class="language-cpp">#include &lt;Wire.h&gt;
#include &lt;LiquidCrystal_I2C.h&gt;

LiquidCrystal_I2C lcd(0x27, 16, 2);

const int moisturePin = A0; // 토양 수분 센서
const int relayPin = 7;     // 워터 펌프 릴레이 모듈
const int threshold = 400;  // 물을 줄 건조 수분 기준치

void setup() {
  Serial.begin(9600);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH); // 릴레이 OFF (Active Low 기준)

  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print(&quot;Smart Garden OS&quot;);
  delay(2000);
  lcd.clear();
}

void loop() {
  int moistureVal = analogRead(moisturePin); // 수분 읽기 (0~1023)
  
  // LCD 출력
  lcd.setCursor(0, 0);
  lcd.print(&quot;Moisture: &quot;);
  lcd.print(moistureVal);
  lcd.print(&quot;   &quot;);

  if (moistureVal &gt; threshold) { 
    // 흙이 건조함 -&gt; 물주기 가동
    lcd.setCursor(0, 1);
    lcd.print(&quot;Status: WATERING!&quot;);
    digitalWrite(relayPin, LOW); // 펌프 ON
    delay(3000);                 // 3초간 물 공급
    digitalWrite(relayPin, HIGH);// 펌프 OFF
  } else {
    // 흙이 촉촉함
    lcd.setCursor(0, 1);
    lcd.print(&quot;Status: Good :)  &quot;);
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
<p><strong>Q. 아두이노 프로젝트를 마치고 컴퓨터 연결을 빼도 계속 동작하게 하려면?</strong>
A. 5V 스마트폰 충전기나 9V 건전지/파워뱅크를 아두이노의 USB 포트 또는 Vin 핀에 꽂아주면 PC 없이도 독립 실행되는 단독 사물인터넷 장치가 됩니다.</p>
',
  'published',
  '실전 아두이노 종합 프로젝트 - 스마트 가든 / 자동 식물 물주기 시스템 구현',
  '배운 센서, 모터, 디스플레이, 시리얼 통신 기법을 총동원하여 토양 수분을 감지해 자동으로 워터 펌프를 가동하는 스마트 가든 시스템을 직접 완성합니다.',
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
