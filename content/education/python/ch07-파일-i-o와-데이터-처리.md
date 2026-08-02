---
title: 파일 I/O와 데이터 처리
slug: ch07-파일-i-o와-데이터-처리
excerpt: Python의 ch7에서 다루는 파일 I/O와 데이터 처리
seo_title: 파일 I/O와 데이터 처리 — Python 레슨
seo_description: 파일 I/O와 데이터 처리를 배우는 Python 레슨 (중급)
order_index: 7
---

## 들어가며

파일 입출력과 데이터 처리는 실제 애플리케이션 개발에 필수적입니다. 텍스트 파일, CSV, JSON 등 다양한 형식의 데이터를 효율적으로 다루세요.

## 기본 파일 I/O

### 예제 1: 파일 읽기와 쓰기

```python
# 파일 쓰기
with open("hello.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("Python File I/O\n")

print("파일 쓰기 완료")

# 파일 읽기 (전체 내용)
with open("hello.txt", "r") as file:
    content = file.read()
    print(f"전체 내용:\n{content}")

# 파일 읽기 (한 줄씩)
print("\n한 줄씩 읽기:")
with open("hello.txt", "r") as file:
    for line in file:
        print(f"  {line.rstrip()}")

# 파일 읽기 (모든 줄을 리스트로)
with open("hello.txt", "r") as file:
    lines = file.readlines()
    print(f"\n리스트로 읽기: {lines}")
```

출력:
```
파일 쓰기 완료
전체 내용:
Hello, World!
Python File I/O

한 줄씩 읽기:
  Hello, World!
  Python File I/O

리스트로 읽기: ['Hello, World!\n', 'Python File I/O\n']
```

### 예제 2: 파일 모드와 위치 조작

```python
# 파일 모드 예제
# 'w': 쓰기 (기존 파일 덮어쓰기)
# 'a': 추가 (파일 끝에 추가)
# 'r': 읽기 (기본값)
# 'b': 바이너리 모드

# 파일에 텍스트 추가
with open("data.txt", "w") as file:
    file.write("Line 1\n")
    file.write("Line 2\n")

# 파일에 텍스트 추가
with open("data.txt", "a") as file:
    file.write("Line 3\n")

# 파일 포인터 조작
with open("data.txt", "r") as file:
    print("처음 5자: ", file.read(5))
    print("현재 위치: ", file.tell())
    file.seek(0)  # 처음으로 이동
    print("seek(0) 후: ", file.read(5))
```

출력:
```
처음 5자:  Line 
현재 위치:  5
seek(0) 후:  Line 
```

## CSV 파일 처리

### 예제 3: CSV 읽기와 쓰기

```python
import csv

# CSV 쓰기
data = [
    ["이름", "나이", "직업"],
    ["Alice", "25", "Engineer"],
    ["Bob", "30", "Designer"],
    ["Charlie", "28", "Manager"]
]

with open("people.csv", "w", newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)

print("CSV 파일 작성 완료")

# CSV 읽기
with open("people.csv", "r") as file:
    reader = csv.reader(file)
    print("\nCSV 파일 내용:")
    for row in reader:
        print(f"  {row}")

# CSV 읽기 (딕셔너리로)
print("\n딕셔너리로 읽기:")
with open("people.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(f"  {row}")
```

출력:
```
CSV 파일 작성 완료

CSV 파일 내용:
  ['이름', '나이', '직업']
  ['Alice', '25', 'Engineer']
  ['Bob', '30', 'Designer']
  ['Charlie', '28', 'Manager']

딕셔너리로 읽기:
  {'이름': 'Alice', '나이': '25', '직업': 'Engineer'}
  {'이름': 'Bob', '나이': '30', '직업': 'Designer'}
  {'이름': 'Charlie', '나이': '28', '직업': 'Manager'}
```

## JSON 처리

### 예제 4: JSON 직렬화와 역직렬화

```python
import json

# Python 객체를 JSON으로 변환 (직렬화)
person = {
    "name": "Alice",
    "age": 25,
    "email": "alice@example.com",
    "hobbies": ["reading", "gaming", "cooking"]
}

# 문자열로 변환
json_str = json.dumps(person, ensure_ascii=False, indent=2)
print("JSON 문자열:")
print(json_str)

# 파일에 저장
with open("person.json", "w", encoding='utf-8') as file:
    json.dump(person, file, ensure_ascii=False, indent=2)

print("\n파일에 저장 완료")

# 파일에서 읽기 (역직렬화)
with open("person.json", "r", encoding='utf-8') as file:
    loaded_person = json.load(file)
    print(f"로드된 데이터: {loaded_person}")
    print(f"이름: {loaded_person['name']}")
    print(f"취미: {loaded_person['hobbies']}")
```

출력:
```
JSON 문자열:
{
  "name": "Alice",
  "age": 25,
  "email": "alice@example.com",
  "hobbies": [
    "reading",
    "gaming",
    "cooking"
  ]
}

파일에 저장 완료
로드된 데이터: {'name': 'Alice', 'age': 25, 'email': 'alice@example.com', 'hobbies': ['reading', 'gaming', 'cooking']}
이름: Alice
취미: ['reading', 'gaming', 'cooking']
```

## 텍스트 데이터 처리

### 예제 5: 텍스트 필터링 및 정렬

```python
# 대량의 텍스트 데이터 생성
text = """Python is amazing
Python is powerful
Java is popular
Python is easy to learn
JavaScript is flexible"""

# 파일에 저장
with open("languages.txt", "w") as file:
    file.write(text)

# 읽기 및 처리
with open("languages.txt", "r") as file:
    lines = file.readlines()

print("1. 원본 파일:")
for line in lines:
    print(f"  {line.rstrip()}")

# Python 관련 줄만 필터링
python_lines = [line for line in lines if "Python" in line]
print(f"\n2. Python 관련 줄 ({len(python_lines)}개):")
for line in python_lines:
    print(f"  {line.rstrip()}")

# 줄을 알파벳순으로 정렬
sorted_lines = sorted(lines)
print(f"\n3. 정렬된 줄:")
for line in sorted_lines:
    print(f"  {line.rstrip()}")

# 단어 빈도 계산
from collections import Counter
words = " ".join(lines).split()
word_count = Counter(words)
print(f"\n4. 단어 빈도 (상위 5개):")
for word, count in word_count.most_common(5):
    print(f"  {word}: {count}")
```

출력:
```
1. 원본 파일:
  Python is amazing
  Python is powerful
  Java is popular
  Python is easy to learn
  JavaScript is flexible

2. Python 관련 줄 (3개):
  Python is amazing
  Python is powerful
  Python is easy to learn

3. 정렬된 줄:
  Java is popular
  JavaScript is flexible
  Python is amazing
  Python is easy to learn
  Python is powerful

4. 단어 빈도 (상위 5개):
  is: 5
  Python: 3
  amazing: 1
  powerful: 1
  Java: 1
```

## 바이너리 파일 처리

### 예제 6: 바이너리 파일 읽고 쓰기

```python
import pickle

# 객체를 바이너리로 저장
data = {
    "name": "Alice",
    "scores": [85, 90, 78],
    "active": True
}

# pickle을 사용한 직렬화
with open("data.pkl", "wb") as file:
    pickle.dump(data, file)

print("바이너리 파일 저장 완료")

# 바이너리에서 읽기 (역직렬화)
with open("data.pkl", "rb") as file:
    loaded_data = pickle.load(file)
    print(f"로드된 데이터: {loaded_data}")
    print(f"이름: {loaded_data['name']}")
    print(f"점수: {loaded_data['scores']}")
```

출력:
```
바이너리 파일 저장 완료
로드된 데이터: {'name': 'Alice', 'scores': [85, 90, 78], 'active': True}
이름: Alice
점수: [85, 90, 78]
```

## 흔한 실수와 해결책

### 실수 1: 파일을 명시적으로 닫지 않음

**틀린 예제:**
```python
file = open("data.txt")
content = file.read()
# 파일이 닫혀지지 않음 - 리소스 누수!
```

**올바른 예제:**
```python
with open("data.txt") as file:
    content = file.read()
# 자동으로 파일이 닫힘
```

### 실수 2: 인코딩 문제

**틀린 예제:**
```python
# 한글 파일을 기본 인코딩으로 읽음 - 오류 가능
with open("korean.txt") as file:
    content = file.read()
```

**올바른 예제:**
```python
# 명시적으로 인코딩 지정
with open("korean.txt", encoding='utf-8') as file:
    content = file.read()
```

### 실수 3: CSV 작성 시 newline 누락

**틀린 예제:**
```python
with open("data.csv", "w") as file:
    writer = csv.writer(file)  # newline 지정 안 함
    writer.writerow(["a", "b", "c"])
```

**올바른 예제:**
```python
with open("data.csv", "w", newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["a", "b", "c"])
```

## 연습 문제

### 문제 1: 학생 성적 통계
CSV 파일에서 학생 성적을 읽어 평균과 최고점을 계산하세요.

### 문제 2: JSON 데이터 변환
JSON 파일을 읽어 CSV로 변환하세요.

### 문제 3: 대량 파일 처리
텍스트 파일 여러 개를 읽어 모든 파일의 단어 수를 세세요.

## 풀이

### 문제 1 풀이
```python
import csv

# 샘플 CSV 생성
with open("grades.csv", "w", newline='') as f:
    writer = csv.DictWriter(f, fieldnames=['name', 'score'])
    writer.writeheader()
    writer.writerows([
        {'name': 'Alice', 'score': 85},
        {'name': 'Bob', 'score': 90},
        {'name': 'Charlie', 'score': 78}
    ])

# 성적 계산
with open("grades.csv", "r") as f:
    reader = csv.DictReader(f)
    scores = []
    for row in reader:
        scores.append(int(row['score']))

avg = sum(scores) / len(scores)
max_score = max(scores)

print(f"평균: {avg:.1f}")
print(f"최고점: {max_score}")
```

### 문제 2 풀이
```python
import json
import csv

# JSON 읽기
with open("data.json", "r", encoding='utf-8') as f:
    data = json.load(f)

# CSV로 변환
if isinstance(data, list):
    with open("output.csv", "w", newline='', encoding='utf-8') as f:
        if data:
            writer = csv.DictWriter(f, fieldnames=data[0].keys())
            writer.writeheader()
            writer.writerows(data)
```

### 문제 3 풀이
```python
import os

def count_words_in_files(directory):
    total_words = 0
    for filename in os.listdir(directory):
        if filename.endswith('.txt'):
            with open(os.path.join(directory, filename)) as f:
                words = len(f.read().split())
                print(f"{filename}: {words} words")
                total_words += words
    return total_words

# 사용
# total = count_words_in_files("./text_files")
# print(f"총 단어 수: {total}")
```

## 마무리

다양한 파일 형식을 효율적으로 처리하는 것은 데이터 분석과 애플리케이션 개발의 핵심입니다.
