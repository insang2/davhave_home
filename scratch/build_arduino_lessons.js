import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  {
    order_index: 1,
    slug: 'ch01-arduino-introduction',
    title: '아두이노(Arduino) 소개와 마이크로컨트롤러 및 개발 환경',
    seo_title: '아두이노 입문 가이드 - 아두이노 우노(Uno), IDE 설치 및 스케치 기초',
    seo_description: '마이크로컨트롤러와 아두이노의 개념, 대표적인 아두이노 우노 보드의 핀 구조, 통합 개발 환경(Arduino IDE) 설치 및 스케치 기본 뼈대 코드(setup, loop)를 배웁니다.',
    excerpt: '피지컬 컴퓨팅의 대표적인 오픈소스 하드웨어 플랫폼인 아두이노(Arduino)의 개념과 우노(Uno) 보드 구조, 통합 개발 환경(IDE) 사용법을 다룹니다.',
    content_md: `**아두이노(Arduino)**는 초보자나 비전공자도 센서, 모터, LED 등의 전자 부품을 손쉽게 제어할 수 있도록 만든 **오픈소스 피지컬 컴퓨팅 플랫폼**입니다.

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

아두이노 프로그램 코드는 **\`setup()\`**과 **\`loop()\`** 두 개의 필수 함수로 구성됩니다.

\`\`\`cpp
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
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 아두이노 보드를 PC에 연결했는데 IDE에서 업로드 오류가 발생해요.**
A. [툴] $\rightarrow$ [보드] 메뉴에서 **Arduino Uno**가 잘 선택되어 있는지 확인하고, [툴] $\rightarrow$ [포트] 메뉴에서 아두이노가 연결된 **COM 포트(Windows) / tty.usbmodem(macOS)**가 올바르게 선택되었는지 점검하세요.
`
  },
  {
    order_index: 2,
    slug: 'ch02-basic-electronics',
    title: '전기전자 기본 상식 (전압, 전류, 저항, 옴의 법칙)',
    seo_title: '아두이노 회로 기초 - 전압(V), 전류(I), 저항(R)과 옴의 법칙, 브레드보드',
    seo_description: '회로 구성의 기본인 전압(V), 전류(I), 저항(R)의 의미와 옴의 법칙(V=IR), LED 보호 저항 계산법, 브레드보드(빵판) 내부 연결 구조를 초보자 눈높이에서 해설합니다.',
    excerpt: '아두이노 부품을 태우지 않고 안전하게 회로를 구성하기 위해 꼭 알아야 할 전압, 전류, 저항의 관계와 옴의 법칙, 브레드보드 사용법을 배웁니다.',
    content_md: `아두이노로 센서나 LED를 다루려면 기본적인 **전기 전자 이론**과 회로 연결 도구인 **브레드보드(Breadboard)**의 동작 원리를 알아야 합니다.

---

## 1. 전기의 3대 기본 요소

| 요소 | 기호 / 단위 | 비유 | 설명 |
| :--- | :--- | :--- | :--- |
| **전압 (Voltage)** | $V$ / 볼트(V) | 수압 (물의 높이 차이) | 전기를 밀어내는 압력의 크기 (아두이노 기본 전압: 5V) |
| **전류 (Current)** | $I$ / 암페어(A) | 수량 (흘러가는 물의 양) | 회로를 따라 전하가 이동하는 흐름의 양 |
| **저항 (Resistance)** | $R$ / 옴($\\Omega$) | 수도관의 굵기/방해물 | 전류의 흐름을 방해하고 제한하는 힘 |

---

## 2. 옴의 법칙 (Ohm's Law)

전기 회로에서 전압, 전류, 저항 사이의 관계를 나타내는 가장 중요한 법칙입니다.

$$V = I \\times R \\quad \\implies \\quad I = \\frac{V}{R} \\quad \\implies \\quad R = \\frac{V}{I}$$

### LED 보호 저항 계산 실습 예제
- 아두이노 전압 $V_{cc} = 5\\text{V}$
- 일반 Red LED의 순방향 전압 $V_{LED} \\approx 2\\text{V}$, 적정 전류 $I \\approx 20\\text{mA} (0.02\\text{A})$
- 필요한 저항값 $R = \\frac{5\\text{V} - 2\\text{V}}{0.02\\text{A}} = 150\\Omega$
- $\\rightarrow$ 보통 안전을 위해 **$220\\Omega$ 또는 $330\\Omega$ 저항**을 사용합니다.

---

## 3. 브레드보드 (Breadboard) 내부 연결 구조

- **버스 라인 (Power Rails)**: 양쪽 가장자리의 $+$, $-$ 라인은 **가로(Horizontal) 방향**으로 핀들이 하나로 연결되어 있습니다.
- **터미널 라인 (Component Area)**: 중앙 알파벳 구역(a~j)은 **세로(Vertical) 방향**으로 5개의 구멍이 내부 금속 핀으로 연결되어 있습니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. LED를 저항 없이 아두이노 5V 핀에 바로 꽂으면 어떻게 되나요?**
A. 저항이 없으면 순간적으로 과도한 전류(과전류)가 흘러 LED가 까맣게 타거나 아두이노 보드의 입출력 핀이 손상될 수 있으므로 반드시 보호 저항을 함께 직렬 연결해야 합니다.
`
  },
  {
    order_index: 3,
    slug: 'ch03-arduino-output-digital-pwm',
    title: '아두이노 출력 이해하기 (디지털 출력과 PWM)',
    seo_title: '아두이노 출력 제어 - digitalWrite, delay, PWM analogWrite 및 부저 제어',
    seo_description: '디지털 핀 출력 함수 digitalWrite(HIGH/LOW), 아날로그 느낌을 내는 펄스 폭 변조 PWM(analogWrite)으로 LED 밝기 조절 및 피에조 부저 톤 제어를 실습합니다.',
    excerpt: '아두이노의 디지털 출력(digitalWrite)과 펄스 폭 변조(PWM) 기술을 활용하여 LED 켜기/끄기, 밝기 조절, 피에조 부저 멜로디 출력을 구현합니다.',
    content_md: `아두이노의 입출력 핀은 전압 신호를 내보내는 **출력(Output) 모드**로 설정하여 LED를 켜거나 모터를 작동시킬 수 있습니다.

---

## 1. 디지털 출력 (Digital Output): \`digitalWrite()\`

디지털 출력은 **5V (HIGH / 1)** 또는 **0V (LOW / 0)** 두 가지 상태만 존재합니다.

\`\`\`cpp
void setup() {
  pinMode(8, OUTPUT); // 8번 핀을 출력 핀으로 설정
}

void loop() {
  digitalWrite(8, HIGH); // 8번 핀에 5V 출력 (ON)
  delay(500);            // 0.5초 대기
  digitalWrite(8, LOW);  // 8번 핀에 0V 출력 (OFF)
  delay(500);            // 0.5초 대기
}
\`\`\`

---

## 2. 펄스 폭 변조 (PWM: Pulse Width Modulation)

아두이노 우노는 진짜 아날로그 전압(1.5V, 3.2V 등)을 내보낼 수 없지만, 디지털 신호의 HIGH 유지 시간 비율(**Duty Cycle**)을 고속으로 조절하여 마치 아날로그 전압이 변하는 것과 같은 효과를 냅니다.

- **PWM 지원 핀**: 물결표시(\`~\`)가 붙은 **3, 5, 6, 9, 10, 11번 핀**.
- **\`analogWrite(pin, value)\`**: \`value\`는 **0 (0V, 0% Duty)**부터 **255 (5V, 100% Duty)**까지 8-bit 값 지정.

\`\`\`cpp
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
\`\`\`

---

## 3. 피에조 부저 (Piezo Buzzer) 멜로디 출력

\`tone(pin, frequency)\` 함수를 사용하면 원하는 주파수(Hz)의 소리를 부저로 출력할 수 있습니다.

\`\`\`cpp
void setup() {
  // 8번 핀에 도(262Hz) 소리 0.5초간 출력
  tone(8, 262, 500);
}
void loop() {}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 모든 아두이노 디지털 핀에서 \`analogWrite()\`를 사용할 수 있나요?**
A. 아닙니다! 우노 보드의 경우 핀 번호 옆에 \`~\` 기호가 새겨진 **3, 5, 6, 9, 10, 11번 핀**에서만 PWM 출력이 가능합니다.
`
  },
  {
    order_index: 4,
    slug: 'ch04-arduino-input-digital-analog',
    title: '아두이노 입력 이해하기 (디지털 입력과 아날로그 입력)',
    seo_title: '아두이노 입력 제어 - digitalRead, 풀업/풀다운 저항, analogRead 가변저항',
    seo_description: '버튼 스위치의 digitalRead() 입력, 채터링 방지 및 플로팅 현상을 해결하는 풀업/풀다운 저항의 원리, ADC를 활용한 analogRead() 가변저항 읽기를 배웁니다.',
    excerpt: '버튼 입력 감지 시 발생하는 플로팅 현상 해결을 위한 풀업/풀다운 저항의 개념과 analogRead()를 통한 가변저항, 센서 아날로그 신호 수신법을 다룹니다.',
    content_md: `아두이노는 외부 스위치 누름이나 센서 전압 변화를 **입력(Input) 모드**로 읽어 들여 판단을 내릴 수 있습니다.

---

## 1. 플로팅(Floating) 현상과 풀업/풀다운 저항

스위치가 켜지지도 꺼지지도 않은 공중에 떠 있는 상태일 때, 주변 전자파 잡음으로 인해 핀 전압이 HIGH/LOW로 불안정하게 흔들리는 현상을 **플로팅(Floating)**이라 부릅니다.

### 풀업(Pull-up) & 풀다운(Pull-down) 회로
- **풀업 저항 (Pull-up)**: 핀을 5V 전원에 저항으로 연결 $\rightarrow$ 안 누르면 **HIGH**, 누르면 **LOW**.
- **풀다운 저항 (Pull-down)**: 핀을 GND에 저항으로 연결 $\rightarrow$ 안 누르면 **LOW**, 누르면 **HIGH**.
- **내부 풀업 저항 (\`INPUT_PULLUP\`)**: 외부 저항 없이 아두이노 칩 내부 저항을 코드 한 줄로 사용!

\`\`\`cpp
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
\`\`\`

---

## 2. 아날로그 입력 (Analog Input): \`analogRead()\`

아두이노 우노의 **A0 ~ A5 핀**은 0V ~ 5V 사이의 미세한 전압을 **10-bit ADC(Analog-to-Digital Converter)**를 통해 **0 ~ 1023 사이의 정수 값**으로 변환하여 읽습니다.

\`\`\`cpp
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
\`\`\`

---

## 3. 입력 값 범위 재배치: \`map()\` 함수

아날로그 입력값(0 ~ 1023)을 PWM 출력값(0 ~ 255) 범위로 쉽게 변환할 수 있습니다.

\`\`\`cpp
int inputVal = analogRead(A0);
int outputVal = map(inputVal, 0, 1023, 0, 255); // 범위 1:1 매핑
analogWrite(9, outputVal);
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 버튼을 누를 때 튀는 현상(채터링, Chattering)은 어떻게 해결하나요?**
A. 버튼의 기계적 접점이 접촉될 때 수 밀리초 동안 미세하게 켜짐/꺼짐이 반복되는 현상입니다. 코드에 \`delay(20);\` 지연 시간을 추가하거나 소프트웨어 디바운스(Debounce) 알고리즘을 적용하면 깔끔해집니다.
`
  },
  {
    order_index: 5,
    slug: 'ch05-serial-communication',
    title: '아두이노 시리얼 통신 (UART 및 데이터 모니터링)',
    seo_title: '아두이노 시리얼 통신 - Serial.begin, print, read 및 시리얼 모니터/플로터',
    seo_description: 'PC와 아두이노 간 직렬 통신인 UART 시리얼 통신 사용법! 보레이트(Baudrate) 설정, Serial.println 출력, Serial.read 키보드 데이터 수신 및 시리얼 플로터 그래픽을 익힙니다.',
    excerpt: '아두이노와 컴퓨터(PC) 사이의 데이터 송수신을 담당하는 UART 시리얼 통신의 원리, 시리얼 모니터 출력 및 입력 데이터 처리 기법을 공부합니다.',
    content_md: `**시리얼 통신(Serial Communication)**은 아두이노와 컴퓨터(PC) 또는 다른 아두이노 보드 간에 한 번에 1비트씩 순차적으로 데이터를 주고받는 직렬 통신 방식입니다.

---

## 1. 시리얼 통신 초기화 및 보레이트 (Baud Rate)

시리얼 통신을 사용하려면 \`setup()\`에서 통신 속도인 **보레이트(Baud Rate)**를 설정해야 합니다. (가장 흔히 쓰이는 표준 속도: **9600 bps**)

\`\`\`cpp
void setup() {
  Serial.begin(9600); // 9600bps 속도로 시리얼 통신 시작
}

void loop() {
  Serial.println("Hello, Arduino Serial!"); // PC로 데이터 송신 (줄바꿈 포함)
  delay(1000);
}
\`\`\`

---

## 2. PC에서 데이터 읽기: \`Serial.available()\` & \`Serial.read()\`

컴퓨터의 시리얼 모니터 창에서 문자를 입력하여 아두이노로 보낼 수 있습니다.

\`\`\`cpp
void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  // 수신 버퍼에 수신된 데이터가 1바이트 이상 존재하는지 확인
  if (Serial.available() > 0) {
    char ch = Serial.read(); // 1바이트 읽기
    
    if (ch == '1') {
      digitalWrite(13, HIGH);
      Serial.println("LED가 켜졌습니다.");
    } else if (ch == '0') {
      digitalWrite(13, LOW);
      Serial.println("LED가 꺼졌습니다.");
    }
  }
}
\`\`\`

---

## 3. 그래프 출력 도구: 시리얼 플로터 (Serial Plotter)

아두이노 IDE의 **[툴] $\rightarrow$ [시리얼 플로터]**를 실행하면 아날로그 센서 입력값을 텍스트가 아닌 실시간 실선 그래프 형태로 시각화할 수 있습니다.

\`\`\`cpp
void loop() {
  int sensorVal = analogRead(A0);
  Serial.println(sensorVal); // 숫자만 출력하면 플로터가 파형으로 그려줌
  delay(50);
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 시리얼 모니터에 한글이 깨지거나 이상한 외계어 텍스트가 출력돼요.**
A. 아두이노 코드의 \`Serial.begin(9600);\` 속도와 시리얼 모니터 창 우측 하단의 **보레이트 속도 설정(9600 baud)**이 일치하지 않을 때 일어나는 현상입니다. 두 통신 속도를 동일하게 맞춰주세요.
`
  },
  {
    order_index: 6,
    slug: 'ch06-display-applications',
    title: '디스플레이 활용 (Char LCD 및 OLED)',
    seo_title: '아두이노 디스플레이 제어 - Character LCD 16x2, I2C 묘듈 및 OLED 0.96',
    seo_description: '문자형 텍스트 16x2 Character LCD 사용법, 핀 선을 획기적으로 줄여주는 I2C 모듈 연결 및 Adafruit SSD1306 그래픽 OLED 디스플레이 제어를 배웁니다.',
    excerpt: '센서 수치나 시스템 상태 메시지를 눈으로 확인할 수 있는 Character LCD 16x2 디스플레이와 I2C 통신 기반 0.96인치 OLED 제어법을 배웁니다.',
    content_md: `아두이노 프로젝트에 **디스플레이(Display)**를 추가하면 센서 측정값, 시계, 상태 안내문 등을 사용자에게 가시적으로 명확하게 보여줄 수 있습니다.

---

## 1. Character LCD (16x2) 및 I2C 모듈

가장 기본적인 16글자 2줄 디스플레이로, **I2C 배낭 모듈(PCF8574)**을 부착하면 아두이노 핀을 단 **2개(SDA, SCL)**만 사용하여 제어할 수 있습니다.

\`\`\`cpp
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
\`\`\`

---

## 2. 0.96인치 OLED 디스플레이 (SSD1306)

128x64 해상도의 그래픽 OLED 디스플레이로, 글자뿐만 아니라 직선, 원, 사각형, 이미지 비트맵까지 자유롭게 그릴 수 있습니다.

\`\`\`cpp
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
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. LCD 라이브러리를 설치하고 업로드했는데 화면에 글자는 안 보이고 네모 상자만 나와요.**
A. I2C 모듈 뒷면에 위치한 **파란색 가변저항(초소형 나사)**을 드라이버로 조금씩 돌려 **화면 명암(Contrast)**을 조절해보세요.
`
  },
  {
    order_index: 7,
    slug: 'ch07-sensors-applications',
    title: '다양한 센서 활용하기 (CDS, 초음파, 온습도, PIR)',
    seo_title: '아두이노 센서 입문 - 조도센서 CDS, 초음파 HC-SR04, 온습도 DHT11, PIR 인체감지',
    seo_description: '빛을 측정하는 조도센서(CDS), 음파 반사로 거리를 측정하는 초음파 센서(HC-SR04), 온습도 센서(DHT11), PIR 적외선 인체 감지 센서 제어를 배웁니다.',
    excerpt: '주변 환경(빛, 거리, 온도, 습도, 사람의 움직임)을 인식하여 아두이노에 전달하는 대표적인 4대 입력 센서의 원리와 회로 연결 및 코딩을 학습합니다.',
    content_md: `**센서(Sensor)**는 빛, 온도, 거리, 움직임 등의 물리적인 자연 현상 변화를 아두이노가 읽을 수 있는 전기 신호로 바꿔주는 장치입니다.

---

## 1. 조도 센서 (CDS Photoresistor)
빛의 양이 많아지면 저항값이 작아지고, 어두워지면 저항값이 커지는 센서입니다.

\`\`\`cpp
// 전압분배 회로를 거쳐 A0 핀으로 조도 측정
int cdsVal = analogRead(A0);
if (cdsVal < 300) {
  digitalWrite(13, HIGH); // 어두워지면 가로등 LED 켜기
}
\`\`\`

---

## 2. 초음파 거리 센서 (HC-SR04)
초음파(40kHz)를 쏘아 올린 후 벽에 맞고 돌아오는 왕복 시간을 측정하여 거리를 계산합니다.

$$거리(\\text{cm}) = \\frac{\\text{왕복시간}(\\mu\\text{s}) \\times 0.0343}{2}$$

\`\`\`cpp
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
\`\`\`

---

## 3. DHT11 온습도 센서 & PIR 인체 감지 센서

- **DHT11**: 디지털 1-Wire 신호로 온도시(0~50°C)와 상대습도(20~90%)를 측정 (\`DHT.h\` 라이브러리 활용).
- **PIR 센서**: 적외선(Infrared) 변화를 감지하여 사람이 움직일 때 디지털 HIGH 신호 출력 (자동문, 방범등에 활용).

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 초음파 센서로 거리를 재는데 가끔 0cm나 2000cm 같은 비정상 오류값이 찍혀요.**
A. 초음파가 흡음 재질(천, 솜)에 부딪히거나 45도 이상 빗겨나간 각도로 발사되면 반사파가 돌아오지 못해 타임아웃 오류가 발생합니다. 코드에서 \`distance > 2 && distance < 400\` 조건문으로 유효 범위를 필터링하는 예외 처리가 필요합니다.
`
  },
  {
    order_index: 8,
    slug: 'ch08-motors-control',
    title: '모터 활용하기 (DC 모터, 서보 모터, 스텝 모터)',
    seo_title: '아두이노 모터 제어 - DC 모터(L298N 모터드라이버), 서보모터, 스텝모터',
    seo_description: '물체와 로봇을 움직이는 3대 모터! DC 모터 드라이버(L298N/L293D) 회로, 서보 모터(Servo.h) 각도 제어(0~180도), 정밀 위치 스텝 모터 제어를 실습합니다.',
    excerpt: '아두이노로 물리적인 회전과 위치 이동을 구현하는 DC 모터(모터 드라이버 연동), 서보 모터(Servo), 스텝 모터(Stepper)의 작동 원리와 제어법을 배웁니다.',
    content_md: `**모터(Motor)**는 전기 에너지를 회전 운동 에너지로 바꿔주는 대표적인 **액추에이터(Actuator)**입니다.

---

## 1. DC 모터와 L298N 모터 드라이버

아두이노 핀은 전류 출력 제한(최대 40mA)이 있어 모터를 직접 연결하면 보드가 파손됩니다. 반드시 외부 전원과 **H-Bridge 모터 드라이버(L298N)**를 경유해야 합니다.

\`\`\`cpp
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
\`\`\`

---

## 2. 서보 모터 (Servo Motor)

원하는 회전 각도(0° ~ 180°)를 지정하면 내부에 내장된 가변저항과 기어가 지정한 위치로 회전축을 정밀하게 고정시키는 모터입니다.

\`\`\`cpp
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
\`\`\`

---

## 3. 스텝 모터 (Stepper Motor)

한 바퀴(360°)를 수백 개의 미세한 단계(Step)로 나누어 정밀하게 각도와 회전수를 제어하는 모터입니다 (3D 프린터, 로봇 팔에 필수적).

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 서보 모터를 아두이노에 연결해 동작시킬 때 아두이노가 자꾸 리셋(재부팅)돼요.**
A. 모터가 작동할 때 순간적으로 큰 전류(돌입 전류)를 끌어가면서 아두이노 5V 전압이 순간 다운(Brownout)되는 현상입니다. 아두이노와 모터의 **전원을 분리(외부 5V 아답터/배터리 사용)**하고, GND 접지선끼리는 서로 연결해 주어야 해결됩니다.
`
  },
  {
    order_index: 9,
    slug: 'ch09-iot-and-wireless-communication',
    title: '사물인터넷(IoT)과 무선 통신의 이해 (Bluetooth, Wi-Fi)',
    seo_title: '아두이노 무선 통신 및 IoT - 블루투스 HC-06, Wi-Fi ESP8266 스마트폰 제어',
    seo_description: '스마트폰 애플리케이션으로 아두이노를 무선 제어하는 블루투스 HC-06(SoftwareSerial), 와이파이 ESP8266/ESP32 모듈을 활용한 사물인터넷(IoT) 시스템 구축을 다룹니다.',
    excerpt: '스마트폰 앱과 아두이노를 무선 연결하는 HC-06 블루투스 통신과 인터넷 망에 접속하여 데이터를 주고받는 ESP8266 Wi-Fi IoT 통신을 학습합니다.',
    content_md: `**사물인터넷(IoT: Internet of Things)**은 사물에 센서와 무선 통신 기능을 내장하여 인터넷 망을 통해 원격으로 상태를 확인하고 제어하는 기술입니다.

---

## 1. 블루투스 통신 모듈 (HC-06)과 소프트웨어 시리얼

아두이노 우노의 하드웨어 시리얼(0, 1번 핀)은 PC 업로드 전용으로 비워두고, 일반 임의의 디지털 핀을 시리얼 통신용으로 바꾸는 **\`SoftwareSerial\`** 라이브러리를 사용합니다.

\`\`\`cpp
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
\`\`\`

---

## 2. Wi-Fi 통신과 ESP8266 / ESP32 모듈

Wi-Fi 망에 접속하여 웹 서버(Web Server)를 띄우거나 HTTP 요청으로 클라우드 서버에 센서 데이터를 전송합니다.

- **ESP8266 (NodeMCU)**: 저렴한 가격으로 Wi-Fi 통신을 지원하는 32-bit SOC 모듈.
- **ESP32**: Wi-Fi와 Bluetooth 4.2 BLE를 동시 지원하는 고성능 IoT 칩셋.

---

## 3. 자주 묻는 질문 (Q&A)

**Q. HC-06 블루투스 모듈에 스케치 코드가 업로드가 안 되고 실패해요.**
A. 아두이노의 하드웨어 시리얼인 **0번(RX), 1번(TX) 핀**에 블루투스를 직접 연결해두면 PC에서 프로그램 코드를 다운로드할 때 신호 충돌이 납니다. 업로드할 때는 0, 1번 핀 선을 잠시 뽑아두거나 \`SoftwareSerial\`을 사용하세요.
`
  },
  {
    order_index: 10,
    slug: 'ch10-digital-communication-interfaces',
    title: '디지털 통신 인터페이스 (I2C, SPI, 1-Wire)',
    seo_title: '아두이노 임베디드 디지털 통신 규격 - I2C 통신, SPI 통신, 1-Wire 개념',
    seo_description: '여러 부품과 데이터를 주고받는 대표적인 디지털 통신 인터페이스! 2선식 I2C(SDA/SCL), 4선식 고속 SPI(MOSI/MISO/SCK/CS), 1-Wire 통신의 차이를 배웁니다.',
    excerpt: '센서, 디스플레이, 메모리 칩과 아두이노가 복잡한 데이터를 전송할 때 사용하는 표준 디지털 통신 방식인 I2C, SPI, 1-Wire 인터페이스의 원리를 배웁니다.',
    content_md: `마이크로컨트롤러가 외부의 다양한 주변 장치(IC 칩, 센서, RTC 시계, 디스플레이)와 통신할 때 사용하는 대표적인 **직렬 통신 규격 3가지**를 비교합니다.

---

## 1. I2C (Inter-Integrated Circuit) 통신

단 **2개의 선(SDA, SCL)**으로 고유한 7-bit 장치 주소(Address)를 지정하여 **최대 127개 장치**를 병렬 연결할 수 있는 마스터-슬레이브 방식 통신입니다.

- **SDA (Serial Data)**: 데이터 송수신 라인 (아두이노 우노: **A4 핀**).
- **SCL (Serial Clock)**: 동기화 클록 신호 라인 (아두이노 우노: **A5 핀**).

\`\`\`cpp
#include <Wire.h> // I2C 표준 라이브러리

void setup() {
  Wire.begin(); // I2C 마스터로 시작
}
\`\`\`

---

## 2. SPI (Serial Peripheral Interface) 통신

4개의 선을 사용하는 **전이중(Full-Duplex) 초고속 직렬 통신** 방식으로, SD 카드 모듈이나 컬러 TFT LCD 등 대용량 데이터 전송에 사용됩니다.

| SPI 신호선 | 역할 | 아두이노 우노 핀 |
| :--- | :--- | :--- |
| **MOSI** | 마스터 $\rightarrow$ 슬레이브 데이터 전송 | **11번 핀** |
| **MISO** | 슬레이브 $\rightarrow$ 마스터 데이터 전송 | **12번 핀** |
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
A. 구입한 I2C 모듈(LCD, 센서 등)의 하드웨어 I2C 주소(예: \`0x27\` 또는 \`0x3C\`)를 모를 때, 버스를 스캔하여 칩의 정확한 주소를 찾아내는 진단용 코드입니다.
`
  },
  {
    order_index: 11,
    slug: 'ch11-interrupts-and-timer',
    title: '인터럽트(Interrupt)와 타이머 활용',
    seo_title: '아두이노 인터럽트 완벽 이해 - 하드웨어 외부 인터럽트(attachInterrupt)와 타이머',
    seo_description: 'CPU의 메인 루프를 멈추지 않고 신호를 즉시 감지하는 하드웨어 외부 인터럽트(attachInterrupt) 사용법, volatile 키워드, millis() 비동기 타이머 기법을 배웁니다.',
    excerpt: '프로그램 실행 도중 신호가 들어오면 즉시 메인 루프를 멈추고 긴급 명령을 처리하는 인터럽트(Interrupt)와 millis() 기반의 비동기 타이머 구현을 다룹니다.',
    content_md: `**인터럽트(Interrupt)**란 프로그램의 메인 루프(\`loop()\`)가 무한히 실행되고 있는 도중에, 신호가 발생하면 **즉시 기존 작업을 일시 중단하고 긴급 처리를 수행하는 기법**입니다.

---

## 1. 외부 하드웨어 인터럽트: \`attachInterrupt()\`

아두이노 우노는 **2번(Interrupt 0)**과 **3번(Interrupt 1)** 핀에서 외부 인터럽트를 지원합니다.

\`\`\`cpp
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
\`\`\`

---

## 2. 인터럽트 발생 조건 (Trigger Modes)

- **\`LOW\`**: 핀 전압이 LOW 상태일 때 지속 발생.
- **\`CHANGE\`**: 핀 전압이 LOW에서 HIGH로, 또는 HIGH에서 LOW로 바뀔 때.
- **\`RISING\`**: 전압이 LOW $\rightarrow$ HIGH로 솟구쳐 오를 때.
- **\`FALLING\`**: 전압이 HIGH $\rightarrow$ LOW로 떨어져 내릴 때.

---

## 3. \`delay()\` 없이 시간 지연하기: \`millis()\`

\`delay()\` 함수는 아두이노 CPU를 완전히 멈추게 만들어 다른 입력을 받지 못하게 방해합니다. **\`millis()\`** 함수를 사용하면 비동기로 여러 작업을 동시에 처리할 수 있습니다.

\`\`\`cpp
unsigned long previousMillis = 0;
const long interval = 1000; // 1초 간격

void loop() {
  unsigned long currentMillis = millis(); // 보드 부팅 후 지난 시간(ms)
  
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    // 1초마다 실행할 작업 수행
  }
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 인터럽트 함수(ISR) 안에서 \`delay()\`나 \`Serial.print()\`를 써도 되나요?**
A. 안 됩니다! ISR 내부에서는 인터럽트가 비활성화되므로, 타이머에 의존하는 \`delay()\`나 시리얼 출력 함수를 부르면 프로그램이 먹통(Deadlock)이 됩니다. ISR은 최대한 가볍고 빠르게 끝나도록 작성해야 합니다.
`
  },
  {
    order_index: 12,
    slug: 'ch12-first-arduino-project',
    title: '나의 첫 번째 아두이노 종합 프로젝트',
    seo_title: '실전 아두이노 종합 프로젝트 - 스마트 가든 / 자동 식물 물주기 시스템 구현',
    seo_description: '배운 센서, 모터, 디스플레이, 시리얼 통신 기법을 총동원하여 토양 수분을 감지해 자동으로 워터 펌프를 가동하는 스마트 가든 시스템을 직접 완성합니다.',
    excerpt: '조도, 토양 수분 센서, LCD 디스플레이, 서보모터 및 워터 펌프를 결합하여 실제 작동하는 스마트 아두이노 임베디드 프로젝트를 완성합니다.',
    content_md: `지금까지 배운 전기전자 기본 상식, 디지털/아날로그 입출력, 센서, 모터, 디스플레이 제어 기법을 총동원하여 **"스마트 식물 케어 (자동 물주기) 시스템"** 프로젝트를 직접 구축해 봅니다.

---

## 1. 프로젝트 시스템 아키텍처

- **입력 센서**: 토양 수분 센서 (A0 핀으로 화분 흙 속 수분 측정)
- **출력 장치**: I2C Character LCD (실시간 수분 상태 및 동작 안내 표시)
- **액추에이터**: 5V 워터 펌프 모터 (릴레이 모듈 7번 핀으로 제어)

---

## 2. 스마트 가든 완성 스케치 코드

\`\`\`cpp
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
\`\`\`

---

## 3. 임베디드 프로젝트 문제 해결 패턴

1. **단계별 모듈 테스트**: 한 번에 모든 부품을 다 꽂지 말고, LCD $\rightarrow$ 센서 $\rightarrow$ 릴레이순으로 개별 작동을 먼저 검증합니다.
2. **공통 그라운드(GND) 확인**: 여러 외부 전원을 사용할 경우 모든 GND는 반드시 하나로 이어서 전위 기준을 맞춰야 합니다.
3. **노이즈 및 예외 처리**: 센서 수치가 순간 튈 수 있으므로 3회 평균값을 내거나 임계값 판단에 지연 시간을 둡니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 아두이노 프로젝트를 마치고 컴퓨터 연결을 빼도 계속 동작하게 하려면?**
A. 5V 스마트폰 충전기나 9V 건전지/파워뱅크를 아두이노의 USB 포트 또는 Vin 핀에 꽂아주면 PC 없이도 독립 실행되는 단독 사물인터넷 장치가 됩니다.
`
  }
];

// Split into 2 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 6),
  lessons.slice(6, 12)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Seed Arduino Lessons Part ${index + 1}\n`;
  for (const lesson of chunk) {
    const content_html = marked.parse(lesson.content_md);
    const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

    sqlContent += `
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'arduino',
  '${escapeSql(lesson.slug)}',
  '${escapeSql(lesson.title)}',
  '${escapeSql(lesson.excerpt)}',
  '${escapeSql(lesson.content_md)}',
  '${escapeSql(content_html)}',
  'published',
  '${escapeSql(lesson.seo_title)}',
  '${escapeSql(lesson.seo_description)}',
  ${lesson.order_index},
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
`;
  }

  fs.writeFileSync(`scratch/seed_arduino_part${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 2 SQL chunk files for Arduino!');
