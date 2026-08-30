import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const lessons = [
  {
    order_index: 1,
    slug: 'ch01-arduino-introduction',
    title: '아두이노(Arduino) 소개와 마이크로컨트롤러 및 개발 환경',
    seo_title: '아두이노 입문 가이드 - 아두이노 우노(Uno) 스펙, IDE 설치, 핵심 용어 및 스케치',
    seo_description: '피지컬 컴퓨팅의 대명사 아두이노의 역사, ATmega328P 마이크로컨트롤러 구조, 우노(Uno) 핀 구조, 전문 용어 사전, IDE 환경설정 및 setup/loop 스케치 기본 뼈대를 상세 해설합니다.',
    excerpt: '피지컬 컴퓨팅의 대표 오픈소스 하드웨어 아두이노(Arduino)의 개념과 우노(Uno) 보드의 세부 스펙, 용어 정의, 통합 개발 환경(IDE) 설정법을 다룹니다.',
    content_md: `**아두이노(Arduino)**는 초보자, 예술가, 비전공자부터 전문 엔지니어에 이르기까지 센서, 모터, LED 등의 전자 부품을 손쉽게 제어할 수 있도록 만든 **오픈소스 피지컬 컴퓨팅(Physical Computing) 플랫폼**입니다. 2005년 이탈리아의 마시모 반지(Massimo Banzi) 교수진에 의해 디자인 학교 인터랙션 디자인 프로젝트로 시작되었습니다.

---

## 1. 아두이노의 핵심 용어 사전 (Glossary)

- **MCU (Microcontroller Unit)**: CPU, RAM, ROM(Flash), 입출력(I/O) 장치가 단 하나의 칩 안에 통합되어 특정 제어 목적을 수행하는 소형 컴퓨터입니다.
- **오픈소스 하드웨어 (Open-Source Hardware)**: 제품의 회로도(Schematic), 기판 배치도(PCB Layout), 라이브러리가 모두 공개되어 누구나 복제하고 개조할 수 있는 하드웨어 형태입니다.
- **스케치 (Sketch)**: 아두이노 전용 IDE에서 작성하는 C/C++ 기반의 소스 코드 프로그램 파일(\`.ino\`)을 뜻합니다.
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

모든 아두이노 프로그램 코드는 **\`setup()\`**과 **\`loop()\`** 두 개의 함수 구조를 필수로 포함합니다.

\`\`\`cpp
/*
  프로젝트: 아두이노 기본 온보드 LED 깜빡이기 (Blink)
  설명: 13번 핀에 연결된 내장 LED를 1초 간격으로 켰다 끕니다.
*/

void setup() {
  // 전원이 들어오거나 리셋 버튼을 누를 때 '단 1회만' 실행되는 공간
  // 주로 입출력 핀의 방향(INPUT/OUTPUT) 설정이나 시리얼 통신 초기화 수행
  pinMode(LED_BUILTIN, OUTPUT); // 13번 디지털 핀을 출력 모드로 초기화
}

void loop() {
  // setup()이 종료된 후 전원이 꺼질 때까지 '영원히 무한 반복' 실행되는 공간
  digitalWrite(LED_BUILTIN, HIGH); // 13번 핀에 5V전압을 인가하여 LED 켜기
  delay(1000);                     // 1000밀리초(1초) 동안 대기
  digitalWrite(LED_BUILTIN, LOW);  // 13번 핀에 0V(GND)전압을 인가하여 LED 끄기
  delay(1000);                     // 1초 동안 대기
}
\`\`\`

---

## 4. 아두이노 IDE 설치 및 연결Troubleshooting 가이드

### 1) IDE 설치 및 포트 연결 단계
1. 공식 웹사이트([arduino.cc](https://www.arduino.cc/))에서 **Arduino IDE 2.x** 버전을 다운로드하여 설치합니다.
2. 아두이노 보드를 USB 케이블로 컴퓨터와 연결합니다.
3. [툴] $\rightarrow$ [보드] $\rightarrow$ **Arduino Uno** 선택.
4. [툴] $\rightarrow$ [포트] $\rightarrow$ **COMx (Windows)** 또는 **cu.usbmodemxxxx (macOS)** 선택.

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
`
  },
  {
    order_index: 2,
    slug: 'ch02-basic-electronics',
    title: '전기전자 기본 상식 (전압, 전류, 저항, 옴의 법칙)',
    seo_title: '아두이노 회로 기초 - 전압(V), 전류(I), 저항(R), 옴의 법칙, 전력 및 브레드보드',
    seo_description: '임베디드 회로 설계의 기초인 전압(V), 전류(I), 저항(R), 전력(P) 개념, 옴의 법칙 계산법, LED 저항 선택 가이드, 직렬/병렬 연결과 브레드보드 내부 매핑을 해설합니다.',
    excerpt: '아두이노 회로 부품의 파손을 막고 안전한 피지컬 회로를 구성하기 위한 전압, 전류, 저항의 관계와 옴의 법칙, 브레드보드 실전 활용법을 배웁니다.',
    content_md: `아두이노 부품을 태우지 않고 안전하게 회로를 설계하려면, 전기의 근본 원리인 **전압, 전류, 저항의 관계**와 **옴의 법칙(Ohm's Law)**을 확실하게 이해해야 합니다.

---

## 1. 전기 핵심 용어 사전 (Glossary)

- **전압 (Voltage, $V$)**: 회로에 전하를 밀어붙이는 전위차(전기적 압력)입니다. 단위는 볼트(V)입니다.
- **전류 (Current, $I$)**: 도선을 따라 1초 동안 흘러가는 전하의 양입니다. 단위는 암페어(A) 또는 밀리암페어(mA)입니다. ($1\\text{A} = 1000\\text{mA}$)
- **저항 (Resistor, $R$)**: 전류의 흐름을 일정하게 제한하거나 전자 부품을 보호하는 일종의 수도관 방해물입니다. 단위는 옴($\\Omega$)입니다.
- **전력 (Power, $P$)**: 전기가 1초 동안 수행하는 일의 양(에너지 소비율)입니다. 단위는 와트(W)입니다. ($P = V \\times I$)
- **GND (Ground, 접지)**: 회로의 전압 측정 기준점이 되는 0V(기준 전위) 라인입니다.

---

## 2. 옴의 법칙(Ohm's Law)과 공식 활용

옴의 법칙은 도선에 흐르는 전류의 양이 전압에 비례하고 저항에 반비례한다는 전기공학 최고의 기본 법칙입니다.

$$V = I \\times R \\qquad I = \\frac{V}{R} \\qquad R = \\frac{V}{I}$$

### 실전 LED 보호 저항 계산 가이드
아두이노 디지털 핀에서 5V를 출력할 때, 적색(Red) LED를 켜고자 하는 경우:
- 아두이노 공급 전압 $V_{cc} = 5.0\\text{V}$
- 적색 LED 작동 강하 전압 $V_{f} \\approx 2.0\\text{V}$
- LED 권장 안전 동작 전류 $I_d = 15\\text{mA} = 0.015\\text{A}$

$$R = \\frac{V_{cc} - V_f}{I_d} = \\frac{5.0\\text{V} - 2.0\\text{V}}{0.015\\text{A}} = \\frac{3.0\\text{V}}{0.015\\text{A}} = 200\\Omega$$

따라서 시중에서 가장 구하기 쉬운 **$220\\Omega$ 또는 $330\\Omega$ 저항**을 LED와 직렬로 묶어줍니다.

---

## 3. 저항의 색띠(Color Code) 읽는 방법

저항 표면에 그어진 4개 또는 5개의 색띠를 보고 저항값을 식별할 수 있습니다.

| 색상 | 숫자 (1, 2째 띠) | 승수 (3째 띠) | 오차 (4째 띠) |
| :--- | :--- | :--- | :--- |
| **검정 (Black)** | 0 | $\\times 10^0 (1)$ | - |
| **갈색 (Brown)** | 1 | $\\times 10^1 (10)$ | $\\pm 1\\%$ |
| **빨강 (Red)** | 2 | $\\times 10^2 (100)$ | $\\pm 2\\%$ |
| **주황 (Orange)** | 3 | $\\times 10^3 (1K)$ | - |
| **노랑 (Yellow)** | 4 | $\\times 10^4 (10K)$ | - |
| **초록 (Green)** | 5 | $\\times 10^5 (100K)$ | $\\pm 0.5\\%$ |
| **파랑 (Blue)** | 6 | $\\times 10^6 (1M)$ | - |
| **보라 (Violet)** | 7 | $\\times 10^7$ | - |
| **금색 (Gold)** | - | $\\times 0.1$ | $\\pm 5\\%$ |
| **은색 (Silver)** | - | $\\times 0.01$ | $\\pm 10\\%$ |

> 💡 **예시**: **[적색 - 적색 - 갈색 - 금색]** = $2 \\, 2 \\times 10^1 = 220\\Omega \\, (\\pm 5\\%)$

---

## 4. 브레드보드(Breadboard) 내부 핀 맵 구조

납땜 없이 부품을 꽂아 테스트하는 브레드보드의 내부 핀 맵을 반드시 숙지해야 단락(Short) 사고를 방지할 수 있습니다.

\`\`\`
[ 전원 버스 라인 (+ / -) ]  ---> 가로(Horizontal) 핀 전체가 하나로 연결됨
(+) ------------------------------------------------------------- 5V
(-) ------------------------------------------------------------- GND

[ 부품 터미널 영역 (a b c d e | f g h i j) ] ---> 세로(Vertical) 5개 구멍이 세로로 연결됨
(1)  [o o o o o]   [o o o o o]  (1번 세로줄 공통 연결)
(2)  [o o o o o]   [o o o o o]  (2번 세로줄 공통 연결)
\`\`\`

---

## 5. 자주 묻는 질문 (Q&A)

**Q. 직렬 연결과 병렬 연결에서 전압과 전류는 어떻게 다른가요?**
A. 직렬 연결(Series)은 전류가 일정하고 전압이 저항 비율에 따라 나누어 걸립니다. 반면 병렬 연결(Parallel)은 각 부품에 걸리는 전압이 5V로 일정하고, 전체 전류는 각 브랜치 전류의 합으로 증가합니다.
`
  },
  {
    order_index: 3,
    slug: 'ch03-arduino-output-digital-pwm',
    title: '아두이노 출력 이해하기 (디지털 출력과 PWM)',
    seo_title: '아두이노 출력 - digitalWrite, PWM analogWrite, 듀티 사이클 및 피에조 부저',
    seo_description: '디지털 핀 출력(digitalWrite), PWM(Pulse Width Modulation) 듀티 사이클 원리와 analogWrite(), LED 숨쉬기 효과 및 피에조 부저 tone/noTone 멜로디 생성을 해설합니다.',
    excerpt: '아두이노 디지털 출력과 PWM(펄스 폭 변조) 기법을 사용하여 LED 켜기/끄기, 밝기 연속 조절 및 피에조 부저 음계 출력을 실습합니다.',
    content_md: `아두이노 입출력 핀에 전압을 내보내는 **출력(Output) 제어**는 가장 기본적인 액추에이터 제어 방식입니다.

---

## 1. 출력 제어 용어 사전 (Glossary)

- **digitalWrite**: 지정한 디지털 핀에 5V(HIGH) 또는 0V(LOW)의 이분법적 논리 전압을 내보내는 함수입니다.
- **PWM (Pulse Duty Modulation)**: 디지털 신호의 ON/OFF 고속 스위칭 비율을 조절하여 의사(Pseudo) 아날로그 전압 효과를 연출하는 기술입니다.
- **Duty Cycle (듀티 사이클)**: 한 주기의 전체 시간 중 신호가 HIGH(5V)를 유지하는 시간의 비율(%)입니다.
- **Piezo Buzzer (피에조 부저)**: 압전 효과를 이용하여 전기 신호의 주파수(Hz)에 따라 물리적 진동판을 울려 소리를 내는 소자입니다.

---

## 2. 디지털 출력 (Digital Output) 실습

\`\`\`cpp
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
\`\`\`

---

## 3. PWM (펄스 폭 변조) 원리와 \`analogWrite()\`

아두이노 우노의 디지털 핀 중 물결표시(\`~\`)가 있는 **3, 5, 6, 9, 10, 11번 핀**은 약 490Hz (5, 6번은 980Hz)의 주파수로 PWM 출력을 지원합니다.

- \`analogWrite(pin, 0)\`: Duty Cycle 0% $\rightarrow$ 실질 전압 0V (최저 밝기)
- \`analogWrite(pin, 127)\`: Duty Cycle 50% $\rightarrow$ 실질 전압 2.5V (중간 밝기)
- \`analogWrite(pin, 255)\`: Duty Cycle 100% $\rightarrow$ 실질 전압 5.0V (최고 밝기)

\`\`\`cpp
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
\`\`\`

---

## 4. 피에조 부저 음계 제어 (\`tone()\` / \`noTone()\`)

\`tone(pin, frequency, duration)\` 함수를 사용하면 구형파(Square Wave)를 발생시켜 음계를 연주할 수 있습니다.

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

\`\`\`cpp
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
\`\`\`

---

## 5. 자주 묻는 질문 (Q&A)

**Q. \`digitalWrite(13, 128)\` 같이 숫자를 적으면 어떻게 되나요?**
A. \`digitalWrite\` 함수는 0(LOW)이 아닌 모든 숫자를 단순히 HIGH(5V)로 인지하여 켜버립니다. 아날로그처럼 밝기를 조절하려면 반드시 \`analogWrite()\`를 써야 합니다.
`
  },
  {
    order_index: 4,
    slug: 'ch04-arduino-input-digital-analog',
    title: '아두이노 입력 이해하기 (디지털 입력과 아날로그 입력)',
    seo_title: '아두이노 입력 - digitalRead, INPUT_PULLUP, 플로팅, ADC analogRead 및 map',
    seo_description: '버튼 스위치 digitalRead(), 플로팅 현상 해결을 위한 풀업/풀다운 회로와 내부 풀업 INPUT_PULLUP, 10-bit ADC 기반 analogRead()와 map() 데이터 변환을 배웁니다.',
    excerpt: '버튼 입력 시 발생하는 플로팅 현상과 이를 해결하는 풀업/풀다운 저항, ADC를 이용한 아날로그 전압 읽기 및 map() 범위 재배치 함수를 배웁니다.',
    content_md: `아두이노가 스위치의 누름이나 외부 센서의 신호를 읽어 들여 판단을 내리는 **입력(Input) 제어** 기법을 알아봅니다.

---

## 1. 입력 제어 용어 사전 (Glossary)

- **Floating (플로팅)**: 핀이 5V나 GND 어디에도 확실히 연결되지 않아 정전기 잡음으로 논리 값이 무작위로 튀는 불안정 현상입니다.
- **Pull-up / Pull-down (풀업/풀다운)**: 플로팅을 방지하기 위해 핀을 5V 전원(풀업) 또는 GND(풀다운)에 고저항($10\\text{K}\\Omega$)으로 묶어두는 회로 방식입니다.
- **ADC (Analog-to-Digital Converter)**: 아날로그 연속 전압(0~5V)을 디지털 이진 정수값(0~1023)으로 변환해주는 장치입니다.
- **Debounce (디바운스)**: 스위치 물리 접점이 붙을 때 수 ms 동안 발생하는 미세 튕김(Chattering) 잡음을 소프트웨어/하드웨어적으로 제거하는 기술입니다.

---

## 2. 디지털 입력과 내부 풀업 (\`INPUT_PULLUP\`)

스위치 회로를 만들 때 외부 저항을 생략하고 아두이노 MCU 내부에 내장된 $20\\text{K}\\Omega \\sim 50\\text{K}\\Omega$ 풀업 저항을 활성화하여 간편하게 스위치를 연결할 수 있습니다.

\`\`\`
[내부 풀업 스위치 회로 연결]
아두이노 핀(D2) ------------ (스위치 핀 1)
                     (스위치 핀 2) ------------ GND
\`\`\`

\`\`\`cpp
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
\`\`\`

---

## 3. 아날로그 입력 (\`analogRead\`)과 \`map()\` 함수

아두이노 우노의 **A0 ~ A5 핀**은 10-bit ADC가 적용되어 전압을 1024단계($2^{10}$)로 읽습니다.

- 전압 $0\\text{V} \\rightarrow 0$
- 전압 $2.5\\text{V} \\rightarrow 511$
- 전압 $5.0\\text{V} \\rightarrow 1023$

\`\`\`cpp
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
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. \`map()\` 함수를 직접 수학 공식으로 만들려면 어떻게 적어야 하나요?**
A. \`int pwmValue = rawValue / 4;\` (1024 / 256 = 4이므로 단순 4로 나누기)로 작성하셔도 동일하게 0~255 범위가 계산됩니다.
`
  },
  {
    order_index: 5,
    slug: 'ch05-serial-communication',
    title: '아두이노 시리얼 통신 (UART 및 데이터 모니터링)',
    seo_title: '아두이노 시리얼 통신 - UART, Serial.begin/print/read, 시리얼 모니터 & 플로터',
    seo_description: 'UART 시리얼 직렬 통신 메커니즘, 보레이트(Baud Rate) 설정, Serial.print/println/write/readString, 시리얼 플로터 파형 모니터링을 실습합니다.',
    excerpt: '아두이노와 컴퓨터(PC) 사이 데이터 송수신을 담당하는 UART 시리얼 직렬 통신의 원리 및 데이터 파싱, 시리얼 플로터 파형 시각화를 습득합니다.',
    content_md: `**시리얼 통신(Serial Communication)**은 아두이노와 PC, 센서, 또는 다른 마이크로컨트롤러 보드 간에 한 번에 1비트씩 순차적으로 데이터를 주고받는 표준 직렬 통신입니다.

---

## 1. 시리얼 통신 용어 사전 (Glossary)

- **UART (Universal Asynchronous Receiver-Transmitter)**: 별도의 공통 클록 신호선 없이 지정된 속도로 데이터를 송수신하는 비동기 직렬 통신 장치입니다.
- **Baud Rate (보레이트)**: 1초 동안 송수신되는 비트(Bit)의 수를 나타내는 통신 속도 단위입니다. (예: 9600 bps = 초당 9600비트)
- **TX (Transmit) / RX (Receive)**: 송신선(TX, 아두이노 1번 핀)과 수신선(RX, 아두이노 0번 핀)입니다. (상대 장치와 RX-TX 서로 교차 연결)
- **Serial Buffer (시리얼 버퍼)**: 수신된 시리얼 데이터를 잠시 보관하는 64바이트 임시 큐(Queue) 메모리 공간입니다.

---

## 2. 시리얼 데이터 수신 및 명령어 처리

\`\`\`cpp
/*
  시리얼 모니터에 'ON' 또는 'OFF' 텍스트 명령어를 입력 받아 LED 제어
*/

void setup() {
  Serial.begin(9600); // 통신 속도 9600bps 초기화
  pinMode(13, OUTPUT);
  Serial.println("명령어를 입력하세요: ON 또는 OFF");
}

void loop() {
  // 시리얼 버퍼에 데이터가 들어와 있는지 확인
  if (Serial.available() > 0) {
    String inputStr = Serial.readStringUntil('\n'); // 줄바꿈(\n)을 만날 때까지 문자열 읽기
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
\`\`\`

---

## 3. 시리얼 플로터 (Serial Plotter) 그래픽 활용

아두이노 IDE [툴] $\rightarrow$ [시리얼 플로터]를 이용하면 여러 센서 수치를 동시에 그래프 파형으로 비교할 수 있습니다.

- **규칙**: 여러 값을 한 줄에 콤마(\`,\`)나 탭(\`\\t\`)으로 구분하여 출력하고 마지막에 \`println\`을 수행하면 됩니다.

\`\`\`cpp
void loop() {
  int val1 = analogRead(A0); // 조도 센서 수치
  int val2 = analogRead(A1); // 가변저항 수치
  
  // 라벨과 함께 출력하면 범례가 표시됨
  Serial.print("CDS:"); Serial.print(val1);
  Serial.print(",");
  Serial.print("POT:"); Serial.println(val2);
  delay(40);
}
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. \`Serial.print()\`와 \`Serial.write()\`의 차이는 무엇인가요?**
A. \`Serial.print(65)\`는 숫자 65를 사람의 눈에 보이는 아스키 문자인 **"65" (2바이트 텍스트)**로 변환하여 보내지만, \`Serial.write(65)\`는 숫자 65의 아스키 바이너리 값 자체인 **'A' (1바이트 이진 데이터)**를 직접 보냅니다.
`
  },
  {
    order_index: 6,
    slug: 'ch06-display-applications',
    title: '디스플레이 활용 (Char LCD 및 OLED)',
    seo_title: '아두이노 디스플레이 제어 - Character LCD 16x2, I2C 모듈, SSD1306 OLED',
    seo_description: 'Character LCD 16x2 제어, 핀을 2개(SDA/SCL)로 줄이는 I2C 모듈 PCF8574, Adafruit GFX 기반 0.96인치 SSD1306 그래픽 OLED 실습을 배웁니다.',
    excerpt: '센서 수치나 안내 문구를 출력하는 Character LCD 16x2(I2C 모듈)와 0.96인치 SSD1306 OLED 디스플레이의 회로 및 그래픽 코딩을 배웁니다.',
    content_md: `아두이노 시스템의 모니터 역할을 수행하는 **디스플레이 모듈(Display Module)** 제어 기법을 학습합니다.

---

## 1. 디스플레이 주요 용어 사전 (Glossary)

- **Character LCD**: 정해진 규격의 텍스트 글자(예: 16열 2행)만 전용으로 표시하는 LCD입니다.
- **I2C Serial Interface Adapter**: LCD의 16개 복잡한 핀을 단 2개의 I2C 핀(SDA, SCL)으로 변환해주는 초소형 보드(PCF8574 칩 사용)입니다.
- **OLED (Organic Light Emitting Diode)**: 자발광 유기 발광 다이오드로, 백라이트 없이 대비가 뛰어나고 전력 소비가 적은 정밀 그래픽 디스플레이입니다.
- **Frame Buffer (프레임 버퍼)**: OLED에 표시할 전체 그래픽 화면의 비트맵 데이터를 렌더링하기 위해 SRAM에 마련하는 가상 메모리 공간입니다.

---

## 2. I2C Character LCD (16x2) 실전 사용법

\`\`\`cpp
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
\`\`\`

---

## 3. 0.96인치 I2C OLED (SSD1306) 그래픽 렌더링

\`\`\`cpp
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
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. OLED 라이브러리를 쓰니까 "Not enough memory" 컴파일 경고가 떠요.**
A. SSD1306 OLED 라이브러리는 $128 \\times 64$ 비트맵 프레임 버퍼를 위해 아두이노 SRAM 메모리의 약 1KB(전체 2KB의 50%)를 차지합니다. 다른 변수 사용을 줄이거나 \`Serial.println(F("문자열"))\` 처럼 \`F()\` 매크로를 사용하여 문자열을 플래시 메모리에 배치하세요.
`
  },
  {
    order_index: 7,
    slug: 'ch07-sensors-applications',
    title: '다양한 센서 활용하기 (CDS, 초음파, 온습도, PIR)',
    seo_title: '아두이노 센서 입문 - 조도 CDS, 초음파 HC-SR04, 온습도 DHT11, PIR 인체감지',
    seo_description: '빛을 측정하는 조도센서(CDS), 음파 반사로 거리를 측정하는 초음파 센서(HC-SR04), 온습도 센서(DHT11), PIR 적외선 인체 감지 센서 제어를 배웁니다.',
    excerpt: '빛, 거리, 온도, 습도, 사람의 움직임을 인식하는 4대 입력 센서의 원리와 회로 연결 및 예외 처리 코딩을 학습합니다.',
    content_md: `아두이노 주변의 물리적 환경(빛, 거리, 온도, 습도, 움직임)을 센싱하는 **대표 센서 4종**을 정밀 다룹니다.

---

## 1. 센서 용어 사전 (Glossary)

- **CDS Photoresistor**: 황화카드뮴 소재를 사용하여 빛의 양에 따라 저항값이 가변하는 빛 감지 센서입니다.
- **HC-SR04 (Ultrasonic Sensor)**: 40kHz의 초음파 트리거 신호를 쏜 후 반사되어 돌아오는 시간을 측정하여 거리를 계산하는 센서입니다.
- **DHT11**: 온도와 습도를 디지털 1-Wire 데이터 신호로 전송하는 복합 온습도 센서입니다.
- **PIR (Passive Infrared Sensor)**: 사람이나 동물의 몸에서 방출되는 적외선 변화량을 측정하여 움직임을 감지하는 센서입니다.

---

## 2. 초음파 거리 센서 (HC-SR04) 정밀 거리 계산

음속은 $15^\\circ\\text{C}$ 공기 중에서 약 $340\\text{m/s} = 0.0343\\text{cm/}\\mu\\text{s}$ 입니다.

$$\\text{거리(cm)} = \\frac{\\text{왕복 시간}(\\mu\\text{s}) \\times 0.0343}{2}$$

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
\`\`\`

---

## 3. DHT11 온습도 센서 사용법

\`\`\`cpp
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
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. PIR 센서 아래에 있는 2개의 가변저항 나사는 무엇을 조절하나요?**
A. 하나는 **감지 민감도(Sensitivity/거리 조절)**이고, 다른 하나는 감지 후 **HIGH 신호를 유지하는 지연 시간(Delay Time 조절)** 나사입니다.
`
  },
  {
    order_index: 8,
    slug: 'ch08-motors-control',
    title: '모터 활용하기 (DC 모터, 서보 모터, 스텝 모터)',
    seo_title: '아두이노 모터 제어 - DC 모터(L298N 모터드라이버), 서보모터, 스텝모터',
    seo_description: 'DC 모터 드라이버(L298N H-Bridge) 회로 구성, 서보 모터 Servo.h 각도 제어(0~180도), 정밀 스텝 모터 Stepper 제어 및 돌입전류 방지 회로를 해설합니다.',
    excerpt: '물리적 회전과 위치 이동을 담당하는 3대 모터(DC 모터, 서보 모터, 스텝 모터)의 동작 원리와 모터 드라이버 회로 구축법을 다룹니다.',
    content_md: `아두이노 프로젝트에 물리적 동력과 위치 이동을 부여하는 **3대 모터 액추에이터**를 정밀 분석합니다.

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

\`\`\`cpp
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
\`\`\`

---

## 3. 서보 모터 정밀 각도 제어 (\`Servo.h\`)

서보 모터는 50Hz (20ms 주기)의 PWM 제어 신호를 사용합니다. (1ms = 0°, 1.5ms = 90°, 2ms = 180°)

\`\`\`cpp
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
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 모터를 작동시키면 아두이노가 재부팅되거나 시리얼 통신이 끊깁니다.**
A. 모터 작동 시 발생하는 **돌입 전류(Inrush Current)**와 **전원 노이즈** 때문입니다. 해결책:
1. 아두이노 전원과 모터 전원(배터리/어댑터)을 **물리적으로 분리**하세요.
2. 두 전원의 **GND 선은 서로 공통(Common GND)으로 결합**해 전위 기준을 맞춰야 합니다.
`
  },
  {
    order_index: 9,
    slug: 'ch09-iot-and-wireless-communication',
    title: '사물인터넷(IoT)과 무선 통신의 이해 (Bluetooth, Wi-Fi)',
    seo_title: '아두이노 무선 통신 및 IoT - 블루투스 HC-06, Wi-Fi ESP8266 스마트폰 제어',
    seo_description: '블루투스 HC-06(SoftwareSerial), Wi-Fi ESP8266/ESP32 모듈을 활용한 사물인터넷(IoT) 시스템 구축과 스마트폰 앱 제어를 배웁니다.',
    excerpt: '스마트폰 앱과 아두이노를 연결하는 HC-06 블루투스 통신과 인터넷 클라우드에 데이터를 송수신하는 ESP8266 Wi-Fi IoT 통신을 배웁니다.',
    content_md: `사물에 무선 통신 기술을 융합하여 인터넷 망과 연결하는 **사물인터넷(IoT)** 구축 기술을 파헤칩니다.

---

## 1. 무선 통신 용어 사전 (Glossary)

- **Bluetooth Classic (HC-06/HC-05)**: 2.4GHz 대역을 사용하는 1:1 페어링 기반 근거리 무선 통신 모듈입니다. (SPP: Serial Port Profile 지원)
- **SoftwareSerial**: 아두이노 우노의 일반 디지털 핀을 시리얼 통신(RX, TX) 핀으로 소프트웨어 변환해주는 라이브러리입니다.
- **ESP8266 / ESP32**: Wi-Fi 통신 기능을 탑재한 32-bit SoC 칩셋으로 독립적인 아두이노 개발 보드로도 사용 가능합니다.
- **MQTT (Message Queuing Telemetry Transport)**: IoT 장치 간의 경량 발행/구독(Publish/Subscribe) 메시징 프로토콜입니다.

---

## 2. 블루투스 HC-06 모듈 제어 실습

\`\`\`
[아두이노 - HC-06 핀 연결 주의사항]
아두이노 D2 (Software RX) <--- HC-06 TXD
아두이노 D3 (Software TX) ---> HC-06 RXD (5V->3.3V 분압 권장)
\`\`\`

\`\`\`cpp
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
    
    if (data == '1') {
      digitalWrite(ledPin, HIGH);
      BTSerial.println("LED ON");
    } else if (data == '0') {
      digitalWrite(ledPin, LOW);
      BTSerial.println("LED OFF");
    }
  }
}
\`\`\`

---

## 3. 자주 묻는 질문 (Q&A)

**Q. HC-06 블루투스의 이름과 비밀번호(PIN)를 바꾸려면 어떻게 하나요?**
A. 스마트폰과 페어링되지 않은 상태에서 시리얼 모니터로 \`AT\` (응답: OK), \`AT+NAMEmyArduino\` (이름 변경), \`AT+PIN1234\` (비밀번호 변경) 명령어를 전송하면 됩니다.
`
  },
  {
    order_index: 10,
    slug: 'ch10-digital-communication-interfaces',
    title: '디지털 통신 인터페이스 (I2C, SPI, 1-Wire)',
    seo_title: '아두이노 임베디드 디지털 통신 - I2C 통신, SPI 통신, 1-Wire 규격 분석',
    seo_description: 'I2C(SDA/SCL) 마스터-슬레이브 2선식 통신, 고속 전이중 4선식 SPI(MOSI/MISO/SCK/CS), 1-Wire 통신 규격을 완벽 비교 해설합니다.',
    excerpt: '다양한 부품 및 칩셋과 데이터를 교환하는 표준 디지털 직렬 통신 방식인 I2C, SPI, 1-Wire 인터페이스를 심층 학습합니다.',
    content_md: `마이크로컨트롤러가 주변 센서, 메모리 칩, 디스플레이 IC와 데이터를 교환하는 **표준 디지털 통신 3대 인터페이스**를 비교합니다.

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

\`\`\`cpp
#include <Wire.h>

void setup() {
  Wire.begin();
  Serial.begin(9600);
  Serial.println("\nI2C 버스 스캔 시작...");

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
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. I2C 버스 신호선에 풀업 저항($4.7\\text{K}\\Omega$)을 다는 이유는 무엇인가요?**
A. I2C 출력 회로는 오픈 드레인(Open-Drain) 구조로 되어 있어 신호를 0V(LOW)로 당길 수만 있고 5V(HIGH)로 밀어 올리지 못합니다. 따라서 풀업 저항이 5V 상태를 유지해 주어야 통신이 이루어집니다.
`
  },
  {
    order_index: 11,
    slug: 'ch11-interrupts-and-timer',
    title: '인터럽트(Interrupt)와 타이머 활용',
    seo_title: '아두이노 인터럽트 완벽 이해 - attachInterrupt, ISR, volatile 및 millis 타이머',
    seo_description: '하드웨어 외부 인터럽트(attachInterrupt), ISR 함수 규칙, volatile 변수 선언, delay() 대체 millis() 비동기 타이머 멀티태스킹을 상세 해설합니다.',
    excerpt: '메인 루프를 멈추지 않고 신호를 즉시 감지하는 하드웨어 인터럽트(attachInterrupt)와 millis() 기반 비동기 타이머 구현을 학습합니다.',
    content_md: `프로그램의 메인 루프(\`loop()\`)를 방해하지 않고 긴급 신호를 감지하는 **인터럽트(Interrupt)** 제어를 배웁니다.

---

## 1. 인터럽트 핵심 용어 사전 (Glossary)

- **Interrupt (인터럽트)**: 마이크로컨트롤러가 메인 프로그램을 실행하다가 내부/외부 이벤트가 발생하면 즉시 실행을 멈추고 지정된 예외 처리 루틴을 수행하는 기능입니다.
- **ISR (Interrupt Service Routine)**: 인터럽트 신호 감지 시 즉시 실행되는 전용 콜백 함수입니다.
- **volatile**: 컴파일러가 해당 변수를 최적화하여 레지스터에 보관하지 않고, 항상 RAM 메모리 주소에서 직접 읽어오도록 강제하는 키워드입니다 (ISR 내 수정 변수 필수).
- **millis()**: 아두이노 보드가 켜진 후 경과된 시간(밀리초, ms)을 반환하는 타이머 함수입니다. (약 50일 후 0으로 오버플로우)

---

## 2. 외부 하드웨어 인터럽트 (\`attachInterrupt\`)

아두이노 우노는 **디지털 2번(Interrupt 0)**과 **3번(Interrupt 1)** 핀에서 외부 하드웨어 인터럽트를 지원합니다.

\`\`\`cpp
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
\`\`\`

---

## 3. \`millis()\` 비동기 멀티태스킹 템플릿

\`delay()\`는 CPU를 멈추게 하므로, 여러 개의 작업을 독립적인 주기로 돌리려면 \`millis()\` 타임스탬프 비교 방식을 써야 합니다.

\`\`\`cpp
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
\`\`\`

---

## 4. 자주 묻는 질문 (Q&A)

**Q. ISR 함수 안에서 왜 \`delay()\`를 사용할 수 없나요?**
A. \`delay()\` 함수는 아두이노 내부 타이머 인터럽트를 기반으로 시간을 카운팅합니다. 하지만 ISR 함수가 동작하는 동안에는 다른 모든 인터럽트가 차단되므로 \`delay()\`의 시간 카운터가 동작하지 않아 무한 대기 상태(Deadlock)에 빠지게 됩니다.
`
  },
  {
    order_index: 12,
    slug: 'ch12-first-arduino-project',
    title: '나의 첫 번째 아두이노 종합 프로젝트',
    seo_title: '실전 아두이노 종합 프로젝트 - 스마트 가든 / 자동 식물 물주기 시스템 구현',
    seo_description: '센서, 모터 릴레이, I2C LCD, 시리얼 통신 기술을 종합하여 토양 수분을 자동 측정하고 펌프를 가동하는 스마트 가든 임베디드 프로젝트를 완성합니다.',
    excerpt: '조도/수분 센서, LCD 디스플레이, 릴레이 및 워터 펌프를 융합하여 실전 동작하는 스마트 아두이노 자동화 시스템을 제작합니다.',
    content_md: `배운 모든 기술(입출력, 센서, 모터 릴레이, 디스플레이)을 종합하여 **"스마트 가든 (자동 식물 물주기) 시스템"**을 완성합니다.

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

\`\`\`cpp
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
\`\`\`

---

## 3. 임베디드 프로젝트 문제 해결 패턴

1. **단계별 모듈 테스트**: 한 번에 모든 부품을 다 꽂지 말고, LCD $\rightarrow$ 센서 $\rightarrow$ 릴레이순으로 개별 작동을 먼저 검증합니다.
2. **공통 그라운드(GND) 확인**: 여러 외부 전원을 사용할 경우 모든 GND는 반드시 하나로 이어서 전위 기준을 맞춰야 합니다.
3. **노이즈 및 예외 처리**: 센서 수치가 순간 튈 수 있으므로 3회 평균값을 내거나 임계값 판단에 지연 시간을 둡니다.

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 독립형 하우징 및 배터리 전원 구성 팁은?**
A. 외부 전원으로 $9\\text{V}$ 건전지나 $12\\text{V}$ DC 어댑터를 사용할 때는 아두이노의 **VIN 핀**이나 **DC 배럴 자크(Jack)**로 연결해야 보드 내부 온보드 레귤레이터(5V 변환 칩)가 안전하게 동작합니다.
`
  }
];

// Split into 3 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 4),
  lessons.slice(4, 8),
  lessons.slice(8, 12)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Enhanced Arduino Lessons Part ${index + 1}\n`;
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

  fs.writeFileSync(`scratch/seed_arduino_ext${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 3 enhanced SQL chunk files for Arduino!');
