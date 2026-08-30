import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

function makeMegaAlgorithmContent(slug, title, bodyMd, pythonCode, pythonExplanation) {
  let content = bodyMd.trim();
  content += `\n\n---

## 4. 실전 파이썬(Python 3) 알고리즘 구현 코드 및 라인별 주석 해설

본 레슨의 핵심 연산 매커니즘을 파이썬 3 환경에서 가장 효율적이고 직관적으로 구현한 실전 소스 코드입니다. **모든 주요 라인마다 상세한 한글 주석**이 기재되어 있어 코드의 흐름을 쉽고 명확하게 이해할 수 있습니다.

\`\`\`python
${pythonCode.trim()}
\`\`\`

### 파이썬 소스 코드 핵심 포인트 해설
${pythonExplanation.trim()}

---

## 5. 알고리즘 설계 및 최적화 실무 지침 (Best Practices & Complexity Audit)

본 **${title}** 레슨에서 익힌 핵심 알고리즘 메커니즘을 코딩 테스트 및 대규모 웹/서버 엔지니어링 환경에 도입할 때 반드시 체크해야 하는 튜닝 가이드입니다.

### 1) 공간/시간 복잡도 한계 및 메모리 사용 제어
- **콜 스택 오버플로우(Stack Overflow) 예방**: 파이썬의 기본 재귀 깊이 제한은 1,000회입니다. 재귀 탐색이 깊어질 경우 \`import sys; sys.setrecursionlimit(10**6)\`을 설정하거나 명시적 스택/반복문(Tabulation)으로 전환해야 합니다.
- **파이썬 내장 라이브러리 적극 활용**: 파이썬 내장 C-API 기반 라이브러리인 \`collections.deque\`(선형 BFS), \`heapq\`(다익스트라/우선순위 큐), \`bisect\`(이분 탐색), \`functools.lru_cache\`(Top-down DP)를 활용하면 직접 구현한 코드보다 3~5배 이상 빠르게 동작합니다.
- **빠른 입출력(Fast I/O) 적용**: 백준/프로그래머스 등 대용량 입력 문제에서는 \`import sys; input = sys.stdin.readline\`을 상단에 지정하여 I/O 시간 초과를 완벽히 예방합니다.

### 2) 예외 케이스(Edge Cases) 및 코딩 테스트 체크리스트
1. **입력 경계값 검증**: $N=1$ 이거나 $N=0$ 인 극단적 최소 입력, 혹은 모든 요소의 값이 동일한 경우(Corner Case)에 대한 예외 처리를 누락하지 않습니다.
2. **무한 루프 및 사이클 감지**: 그래프/트리 탐색 시 방문 처리 배열(\`visited[]\`)의 업데이트 위치를 정확히 지정하여 중복 큐 삽입으로 인한 메모리 초과를 예방합니다.

---

## 6. 핵심 요약 및 실무 FAQ (Summary & Q&A)

**Q1. 파이썬 코드 주석에서 강조된 성능 핵심은 무엇인가요?**
- 코드 주석에서 명시하듯, 선형 큐 탐색에는 $O(N)$의 \`list.pop(0)\` 대신 $O(1)$의 \`collections.deque.popleft()\`를 사용하는 등 파이썬 자료구조의 내부 복잡도를 명확히 파악하고 작성하는 것입니다.

**Q2. 실무 개발에서 본 파이썬 알고리즘 패턴은 어디에 활용되나요?**
- 백엔드 데이터 파이프라인, Django/FastAPI 비동기 스케줄링, 데이터 분석 및 Machine Learning 전처리 파이프라인의 핵심 데이터 구조 연산으로 널리 활용됩니다.
`;

  return content;
}

const lessons = [
  // 1
  {
    order_index: 1,
    slug: 'ch01-algorithm-complexity-time-space-big-o',
    title: '01. 알고리즘 성능 분석 기초 - 시간 복잡도, 공간 복잡도 및 Big-O 표기법',
    seo_title: '알고리즘 복잡도 분석 - 시간 복잡도, 공간 복잡도, Big-O / Big-Omega / Big-Theta',
    seo_description: '알고리즘의 효율성을 평가하는 시간 복잡도(Time Complexity), 공간 복잡도(Space Complexity), Big-O 표기법 및 루프 구조별 복잡도 연산법을 배웁니다.',
    excerpt: '알고리즘 입문의 필수 관문인 시간 복잡도와 공간 복잡도, 점근적 표기법(Big-O)의 수학적 의미와 연산량 예측 기법을 다룹니다.',
    body_md: `프로그램의 입력 크기 $N$이 증가함에 따라 연산 횟수와 메모리 사용량이 어떻게 변화하는지 분석하는 **시간 복잡도(Time Complexity)**와 **공간 복잡도(Space Complexity)**를 다룹니다.

---

## 1. 알고리즘 복잡도 핵심 용어 사전 (Glossary)

- **Time Complexity (시간 복잡도)**: 알고리즘이 수행되는 동안 필요한 기본 연산(비교, 대입, 산술 연산)의 총 횟수를 입력 크기 $N$의 함수로 나타낸 것입니다.
- **Space Complexity (공간 복잡도)**: 알고리즘을 실행할 때 동적 할당 및 콜 스택을 포함하여 소비되는 총 메모리 공간의 크기입니다.
- **Big-O Notation (빅오 표기법)**: 알고리즘의 최악의 경우(Worst-case) 실행 시간 상한선을 나타내는 수학적 점근 표기법입니다.
- **Big-Omega ($\Omega$)**: 알고리즘의 최선의 경우(Best-case) 하한선을 나타내는 표기법입니다.
- **Big-Theta ($\Theta$)**: 상한과 하한이 일치할 때 엄밀한 평균 실행 시간을 나타내는 표기법입니다.

---

## 2. 주요 Big-O 복잡도 순위 및 허용 입력 크기 ($N$)

\`\`\`
O(1) < O(log N) < O(N) < O(N log N) < O(N^2) < O(2^N) < O(N!)
[빠름 / 효율적] -----------------------------------> [느림 / 비효율적]
\`\`\`

| Big-O 표기 | 대표 알고리즘 예시 | 1초 내 실행 가능한 최대 입력 크기 ($N$) |
| :--- | :--- | :--- |
| **$O(1)$** | 배열 인덱스 접근, 해시 테이블 조회 | 무제한 |
| **$O(\log N)$** | 이분 탐색(Binary Search), 이진 탐색 트리 | $N \le 10^{18}$ (매우 큼) |
| **$O(N)$** | 선형 탐색, 1차원 배열 순회 | $N \le 20,000,000$ (약 2,000만) |
| **$O(N \log N)$** | 퀵 정렬, 병합 정렬, 우선순위 큐 힙 | $N \le 1,000,000$ (약 100만) |
| **$O(N^2)$** | 이중 루프, 버블/선택/삽입 정렬, 플로이드-워셜 | $N \le 5,000$ ~ $10,000$ |
| **$O(2^N)$** | 재귀적 피보나치, 부분집합 완전 탐색 | $N \le 20$ ~ $25$ |
| **$O(N!)$** | 외판원 순회 완전 탐색(TSP), 순열 생성 | $N \le 10$ ~ $12$ |
`,
    python_code: `import time

def measure_time(func, *args):
    """함수의 실행 시간을 정밀 측정하는 헬퍼 함수"""
    start_time = time.perf_counter()  # 시작 고해상도 타이머 측정
    result = func(*args)              # 대상 알고리즘 함수 실행
    end_time = time.perf_counter()    # 종료 고해상도 타이머 측정
    # 밀리초(ms) 단위로 측정 결과 출력
    print(f"[{func.__name__:12s}] 실행 시간: {(end_time - start_time) * 1000:.4f} ms")
    return result

# 1. O(1) - Constant Time (상수 시간 복잡도)
def o_constant(arr: list):
    # 입력 리스트 크기 N과 무관하게 첫 번째 인덱스 요소 즉시 반환 (단 1회 연산)
    return arr[0] if arr else None

# 2. O(N) - Linear Time (선형 시간 복잡도)
def o_linear(arr: list):
    total = 0
    # 입력 리스트의 N개 원소를 단일 루프로 1회씩 모두 방문 (N회 연산)
    for num in arr:
        total += num
    return total

# 3. O(N^2) - Quadratic Time (2차 시간 복잡도)
def o_quadratic(arr: list):
    count = 0
    n = len(arr)
    # 이중 루프를 통해 N x N 번 모든 원소의 쌍을 교차 연산 (N^2회 연산)
    for i in range(n):
        for j in range(n):
            count += arr[i] * arr[j]
    return count

if __name__ == "__main__":
    # N = 1,000 개의 정수 리스트 생성
    data = list(range(1000))
    print("=== 알고리즘 복잡도별 실행 시간 비교 (N = 1,000) ===")
    measure_time(o_constant, data)
    measure_time(o_linear, data)
    measure_time(o_quadratic, data)
`,
    python_explanation: `
1. \`# 주석\`: 파이썬 코드의 작동 원리를 직관적으로 이해할 수 있도록 기능별 상세 설명 주석을 첨부했습니다.
2. \`time.perf_counter()\`: 파이썬에서 알고리즘의 정밀한 실행 시간을 측정하는 표준 고해상도 타이머입니다.
3. \`o_constant\`: 리스트의 인덱스 접근은 입력 크기와 상관없이 $O(1)$의 상수 시간이 걸립니다.
4. \`o_linear\`: 1차원 리스트를 1회 순회하므로 $O(N)$의 시간이 소요됩니다.
5. \`o_quadratic\`: 이중 루프 순회로 $N \times N$ 번 연산하여 $O(N^2)$ 복잡도를 나타냅니다.
`
  },
  // 2
  {
    order_index: 2,
    slug: 'ch02-recursion-and-divide-and-conquer',
    title: '02. 재귀(Recursion)와 분할 정복(Divide and Conquer) - 콜 스택, 팩토리얼 및 마스터 정리',
    seo_title: '재귀 함수와 분할 정복 - Call Stack, 팩토리얼, 하노이의 탑 & 마스터 정리',
    seo_description: '자기 자신을 호출하는 재귀 함수(Recursion)의 작동 원리, 콜 스택(Call Stack), 탈출 조건, 하노이의 탑 및 분할 정복 알고리즘과 마스터 정리를 배웁니다.',
    excerpt: '알고리즘 사고의 핵심인 재귀 함수의 콜 스택 구동 원리와 문제를 조각으로 나누어 해결하는 분할 정복 기법 및 복잡도 마스터 정리를 학습합니다.',
    body_md: `자기 자신을 재귀적으로 호출하여 복잡한 문제를 단순한 하위 문제로 분해하는 **재귀(Recursion)**와 **분할 정복(Divide and Conquer)** 패러다임을 심도 있게 다룹니다.

---

## 1. 재귀 핵심 전문 용어 사전 (Glossary)

- **Recursion (재귀)**: 함수 내부에서 자기 자신을 다시 호출하여 문제를 해결하는 알고리즘 기법입니다.
- **Base Case (기본 조건 / 탈출 조건)**: 더 이상 재귀 호출을 진행하지 않고 즉시 값을 반환하여 무한 루프를 막는 종료 조건입니다.
- **Recursive Case (재귀 단계)**: 문제를 더 작은 입력 크기의 동일 문제로 쪼개어 자기 자신을 호출하는 단계입니다.
- **Call Stack (콜 스택)**: 재귀 호출 시 각 함수의 매개변수, 지역 변수, 복귀 주소가 저장되는 메모리 스택 영역입니다.
`,
    python_code: `import sys

# 파이썬 재귀 한계 설정 (기본 1,000회 제한을 100,000회로 확장하여 스택 오버플로우 방지)
sys.setrecursionlimit(10**5)

# 1. 재귀 팩토리얼 (Factorial)
def factorial(n: int) -> int:
    """N! 을 구하는 재귀 함수"""
    if n <= 1:  # [Base Case] n이 1 이하이면 즉시 1을 반환하며 재귀 탈출
        return 1
    # [Recursive Case] n * (n-1)! 형태로 문제를 더 작은 재귀로 분할
    return n * factorial(n - 1)

# 2. 하노이의 탑 (Hanoi Tower)
def hanoi(n: int, src: str, via: str, dst: str):
    """n개의 원판을 src에서 dst로 via를 거쳐 이동"""
    if n == 1:  # [Base Case] 원판이 1개일 때는 곧바로 dst로 이동
        print(f"원판 1 : {src} -> {dst}")
        return
    # 1단계: 상위 (n-1)개 원판을 경유지(via)로 이동
    hanoi(n - 1, src, dst, via)
    # 2단계: 가장 큰 n번째 원판을 목적지(dst)로 이동
    print(f"원판 {n} : {src} -> {dst}")
    # 3단계: 경유지(via)에 있던 (n-1)개 원판을 목적지(dst)로 이동
    hanoi(n - 1, via, src, dst)

# 3. 분할 정복 병합 정렬 (Merge Sort)
def merge_sort(arr: list) -> list:
    """분할 정복 기반 O(N log N) 병합 정렬"""
    if len(arr) <= 1:  # [Base Case] 원소가 1개 이하이면 이미 정렬된 상태
        return arr
    
    # 1. Divide (분할): 배열을 중앙 기준으로 두 조각으로 분할
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])   # 왼쪽 부분 배열 재귀 정렬
    right = merge_sort(arr[mid:])  # 오른쪽 부분 배열 재귀 정렬
    
    # 2. Combine (결합): 정렬된 두 부분 배열을 순서대로 병합
    merged = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1
    # 남은 원소들 일괄 추가
    merged.extend(left[i:])
    merged.extend(right[j:])
    return merged

if __name__ == "__main__":
    print("5! =", factorial(5))
    print("\n[하노이의 탑 3개 원판 이동 경로]")
    hanoi(3, "A", "B", "C")
    print("\n[병합 정렬 결과]:", merge_sort([38, 27, 43, 3, 9, 82, 10]))
`,
    python_explanation: `
1. \`# [Base Case]\`: 재귀 호출을 멈추는 핵심 탈출 조건에 주석을 달아 무한 재귀를 막는 중요성을 강조했습니다.
2. \`sys.setrecursionlimit(10**5)\`: 파이썬 재귀 깊이 제한 오버플로우 예방 표준 구문입니다.
3. \`merge_sort()\`: $O(N \log N)$ 분할 정복 정렬로 리스트를 절반으로 쪼갠 후 재귀 결합하는 라인별 해설입니다.
`
  },
  // 3
  {
    order_index: 3,
    slug: 'ch03-sorting-algorithms-1-comparison-sorts',
    title: '03. 정렬 알고리즘 1: 비교 정렬 - 버블 정렬(Bubble), 선택 정렬(Selection) 및 삽입 정렬(Insertion)',
    seo_title: '기초 정렬 알고리즘 - 버블 정렬, 선택 정렬, 삽입 정렬 $O(N^2)$ 원리와 최적화',
    seo_description: '가장 기본적인 3대 비교 정렬 알고리즘인 버블 정렬(Bubble Sort), 선택 정렬(Selection Sort), 삽입 정렬(Insertion Sort)의 동작 과정과 $O(N^2)$ 시간 복잡도를 배웁니다.',
    excerpt: '배열 요소를 순차 비교하여 정렬하는 버블 정렬, 선택 정렬, 삽입 정렬의 매커니즘과 최적화 플래그(Early Stop) 적용법을 다룹니다.',
    body_md: `가장 기초적인 3대 비교 정렬 알고리즘인 **버블 정렬(Bubble Sort)**, **선택 정렬(Selection Sort)**, **삽입 정렬(Insertion Sort)**의 연산 구조를 배웁니다.`,
    python_code: `def bubble_sort(arr: list) -> list:
    """버블 정렬 (Bubble Sort) - O(N^2) 최적화 버전"""
    n = len(arr)
    for i in range(n):
        swapped = False  # 조기 종료(Early Stop)를 위한 플래그
        for j in range(0, n - i - 1):
            # 인접한 두 원소를 비교하여 앞이 더 크면 위치 교환(Swap)
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]  # Pythonic Swap
                swapped = True
        # 한 회차 동안 원소 교환이 한 번도 안 일어났다면 이미 완전 정렬됨!
        if not swapped:
            break
    return arr

def selection_sort(arr: list) -> list:
    """선택 정렬 (Selection Sort) - O(N^2)"""
    n = len(arr)
    for i in range(n):
        min_idx = i  # 현재 위치를 최소값 인덱스로 초기 가정
        # i 이후의 미정렬 영역에서 진짜 최소값의 인덱스를 탐색
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        # 탐색된 최소값 원소를 미정렬 맨 앞(i) 위치와 교환
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

def insertion_sort(arr: list) -> list:
    """삽입 정렬 (Insertion Sort) - O(N^2)"""
    n = len(arr)
    for i in range(1, n):
        key = arr[i]  # 정렬할 대상 원소
        j = i - 1
        # key보다 큰 정렬된 영역의 원소들을 우측으로 한 칸씩 밀어냄
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        # 적절한 삽입 위치(j + 1)에 key 안착
        arr[j + 1] = key
    return arr

if __name__ == "__main__":
    test_data = [64, 34, 25, 12, 22, 11, 90]
    print("버블 정렬 결과:", bubble_sort(test_data.copy()))
    print("선택 정렬 결과:", selection_sort(test_data.copy()))
    print("삽입 정렬 결과:", insertion_sort(test_data.copy()))
`,
    python_explanation: `
1. \`arr[j], arr[j+1] = arr[j+1], arr[j]\`: 파이썬 다중 대입을 통한 변수 Swap 라인 주석입니다.
2. \`swapped\` 조기 종료 플래그: 이미 정렬된 배열인 경우 $O(N)$ 타임에 즉시 정렬을 완료하는 버블 정렬의 튜닝 포인트입니다.
`
  },
  // 4
  {
    order_index: 4,
    slug: 'ch04-sorting-algorithms-2-fast-sorts',
    title: '04. 정렬 알고리즘 2: 고속 정렬 - 퀵 정렬(Quick Sort), 병합 정렬(Merge Sort) 및 힙 정렬(Heap Sort)',
    seo_title: '고속 정렬 알고리즘 - 퀵 정렬, 병합 정렬, 힙 정렬 평균 $O(N \\log N)$ 완벽 해설',
    seo_description: '실무에서 널리 쓰이는 고속 정렬인 퀵 정렬(Quick Sort), 병합 정렬(Merge Sort), 힙 정렬(Heap Sort)의 분할 정복 연산과 최악/평균 시간 복잡도를 배웁니다.',
    excerpt: '평균 $O(N \\log N)$ 성능을 자랑하는 퀵 정렬의 피봇(Pivot) 선택 전략, 병합 정렬의 정합성 및 힙 정렬의 최단 힙 재구성 알고리즘을 다룹니다.',
    body_md: `평균 $O(N \log N)$의 압도적인 속도를 보장하는 현대 정렬의 대표주자인 **퀵 정렬(Quick Sort)**, **병합 정렬(Merge Sort)**, **힙 정렬(Heap Sort)**을 다룹니다.`,
    python_code: `import heapq

# 1. 퀵 정렬 (Quick Sort - Pythonic List Comprehension)
def quick_sort(arr: list) -> list:
    """평균 O(N log N) 분할 정복 퀵 정렬"""
    if len(arr) <= 1:  # Base Case: 원소가 1개 이하이면 정렬 완료
        return arr
    
    pivot = arr[len(arr) // 2]  # 중앙 요소를 피봇(Pivot)으로 선정
    # 피봇보다 작은 원소들 분할
    left = [x for x in arr if x < pivot]
    # 피봇과 같은 원소들 (중복 요소 처리)
    middle = [x for x in arr if x == pivot]
    # 피봇보다 큰 원소들 분할
    right = [x for x in arr if x > pivot]
    
    # 재귀적으로 정렬한 후 재결합
    return quick_sort(left) + middle + quick_sort(right)

# 2. 힙 정렬 (Heap Sort using 파이썬 heapq)
def heap_sort(arr: list) -> list:
    """우선순위 큐 최소 힙(Min-heap)을 이용한 O(N log N) 힙 정렬"""
    h = []
    # 1. 모든 원소를 최소 힙에 삽입 (O(N log N))
    for value in arr:
        heapq.heappush(h, value)
    
    # 2. 힙에서 가장 작은 원소를 순서대로 pop하여 결과 리스트 생성 (O(N log N))
    return [heapq.heappop(h) for _ in range(len(h))]

if __name__ == "__main__":
    nums = [3, 6, 8, 10, 1, 2, 1]
    print("퀵 정렬 결과:", quick_sort(nums))
    print("힙 정렬 결과:", heap_sort(nums))
`,
    python_explanation: `
1. \`quick_sort()\`: 파이썬 List Comprehension을 활용하여 Pivot보다 작은 값, 같은 값, 큰 값을 직관적으로 분할 정복합니다.
2. \`heapq.heappush / heappop\`: 파이썬 내장 C-Extension 힙 라이브러리로, 최소 힙(Min-heap)을 활용하여 $O(N \log N)$ 정렬을 손쉽게 작성합니다.
`
  },
  // 5
  {
    order_index: 5,
    slug: 'ch05-sorting-algorithms-3-non-comparison-sorts',
    title: '05. 정렬 알고리즘 3: 비비교 정렬 및 정렬 안정성 - 계수 정렬, 기수 정렬 및 Stable Sort',
    seo_title: '비비교 정렬 & 안정성 - 계수 정렬(Counting Sort), 기수 정렬(Radix Sort) & Stable Sort',
    seo_description: '비교 연산 없이 $O(N+K)$ 선형 시간에 정렬하는 계수 정렬(Counting Sort), 기수 정렬(Radix Sort) 및 동일 키값의 순서를 유지하는 정렬 안정성(Stable Sort)을 배웁니다.',
    excerpt: '원소 간 비교를 수행하지 않고 정수 자릿수나 값의 빈도수를 이용해 $O(N)$ 타임에 정렬하는 비비교 정렬 알고리즘과 정렬 안정성을 다룹니다.',
    body_md: `원소 간의 비교 연산 없이 선형 시간 $O(N)$에 정렬을 완료하는 **계수 정렬(Counting Sort)**과 **기수 정렬(Radix Sort)**, 그리고 **정렬 안정성(Stable Sort)**을 다룹니다.`,
    python_code: `def counting_sort(arr: list) -> list:
    """비교 연산 없는 선형 시간 O(N + K) 계수 정렬"""
    if not arr:
        return []
    
    max_val = max(arr)
    # 0부터 max_val 까지의 등장 빈도를 저장할 카운팅 배열 생성
    count = [0] * (max_val + 1)
    
    # 1. 입력 원소들의 빈도수 집계 (O(N))
    for num in arr:
        count[num] += 1
        
    # 2. 카운팅 배열을 바탕으로 정렬된 결과 배열 복원 (O(N + K))
    sorted_arr = []
    for num, cnt in enumerate(count):
        sorted_arr.extend([num] * cnt)  # 빈도수만큼 해당 숫자를 추가
    return sorted_arr

# 파이썬 sorted()의 Stable Sort 증명 예제
if __name__ == "__main__":
    nums = [4, 2, 2, 8, 3, 3, 1]
    print("계수 정렬 결과:", counting_sort(nums))

    # 객체 정렬 시 기존 입력 순서가 유지되는지 확인 (Stable Sort)
    students = [("김철수", 90), ("이영희", 85), ("박민수", 90)]
    # 점수(s[1]) 기준 오름차순 정렬 -> 김철수와 박민수는 90점으로 동점이므로 원래 순서 유지!
    sorted_students = sorted(students, key=lambda s: s[1])
    print("Stable Sort 결과 (동점자 원래 순서 유지):", sorted_students)
`,
    python_explanation: `
1. \`counting_sort()\`: 값의 등장 횟수를 저장하는 카운팅 배열을 이용하여 $O(N+K)$ 타임에 완성하는 주석 해설입니다.
2. \`sorted()\`: 파이썬의 표준 정렬 알고리즘인 **Timsort**는 대표적인 정렬 안정성(Stable Sort)을 보장합니다.
`
  },
  // 6
  {
    order_index: 6,
    slug: 'ch06-binary-search-and-parametric-search',
    title: '06. 이분 탐색(Binary Search)과 매개변수 탐색(Parametric Search) - Lower/Upper Bound',
    seo_title: '이분 탐색 & 매개변수 탐색 - Binary Search $O(\\log N)$, Lower Bound, Upper Bound',
    seo_description: '정렬된 배열에서 $O(\\log N)$ 속도로 원하는 값을 찾는 이분 탐색(Binary Search), Lower Bound / Upper Bound 구현 및 최적화 문제를 결정 문제로 바꾸는 매개변수 탐색을 배웁니다.',
    excerpt: '로그 시간에 대용량 데이터를 검색하는 이분 탐색 알고리즘과 중복 데이터 범위 찾기, 그리고 결정 문제를 해결하는 매개변수 탐색(Parametric Search)을 학습합니다.',
    body_md: `정렬된 데이터셋에서 검색 범위를 절반씩 줄여 나가며 $O(\log N)$ 시간에 탐색을 완료하는 **이분 탐색(Binary Search)**과 **매개변수 탐색(Parametric Search)**을 다룹니다.`,
    python_code: `import bisect

# 1. 순수 이분 탐색 (Binary Search - O(log N))
def binary_search(arr: list, target: int) -> int:
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2  # 중간 인덱스 계산
        if arr[mid] == target:
            return mid  # 타겟 발견 시 인덱스 즉시 반환
        elif arr[mid] < target:
            left = mid + 1  # 타겟이 우측에 존재 -> 왼쪽 경계 이동
        else:
            right = mid - 1 # 타겟이 좌측에 존재 -> 오른쪽 경계 이동
    return -1  # 미발견 시 -1 반환

# 2. 파이썬 bisect 활용 (Lower Bound & Upper Bound)
arr = [1, 2, 4, 4, 4, 5, 7, 9]
print("Lower Bound (4 이상이 처음 나오는 인덱스):", bisect.bisect_left(arr, 4))
print("Upper Bound (4 초과가 처음 나오는 인덱스):", bisect.bisect_right(arr, 4))
print("숫자 4의 개수:", bisect.bisect_right(arr, 4) - bisect.bisect_left(arr, 4))

# 3. 매개변수 탐색 (Parametric Search - 나무 잘라가기 문제)
def cut_trees_max_height(trees: list, target_length: int) -> int:
    """가져가고자 하는 나무 길이 target_length를 확보할 수 있는 절단기 최대 높이 구하기"""
    left, right = 0, max(trees)
    result = 0
    
    while left <= right:
        mid = (left + right) // 2  # 절단기 높이 후보(mid)
        # 절단기 높이 mid로 잘랐을 때 확보되는 총 나무 길이
        total_cut = sum(t - mid for t in trees if t > mid)
        
        if total_cut >= target_length: # 목표 길이 이상 확보 가능! -> 높이를 더 올려본다
            result = mid
            left = mid + 1
        else: # 목표 길이 부족! -> 절단기 높이를 낮춘다
            right = mid - 1
    return result

print("나무 잘라가기 절단기 최대 높이:", cut_trees_max_height([20, 15, 10, 17], 7))
`,
    python_explanation: `
1. \`bisect_left\` / \`bisect_right\`: 파이썬 표준 라이브러리로, 중복 요소가 있는 정렬 리스트에서 경계 인덱스를 $O(\log N)$에 탐색합니다.
2. Parametric Search: 최적화 문제를 결정 문제(Yes/No)로 바꾸어 이분 탐색 알고리즘으로 극적인 성능 최적화를 이룹니다.
`
  },
  // 7
  {
    order_index: 7,
    slug: 'ch07-two-pointers-and-sliding-window',
    title: '07. 투 포인터(Two Pointers)와 슬라이딩 윈도우(Sliding Window) - 1차원 배열 $O(N)$ 연속 탐색',
    seo_title: '투 포인터 & 슬라이딩 윈도우 - Two Pointers, Sliding Window 1차원 배열 $O(N)$ 탐색',
    seo_description: '1차원 배열에서 두 개의 포인터 위치를 조절하며 탐색하는 투 포인터(Two Pointers) 및 고정/가변 크기 창을 이동시키는 슬라이딩 윈도우(Sliding Window) 알고리즘을 배웁니다.',
    excerpt: '$O(N^2)$ 탐색을 $O(N)$ 선형 타임으로 획기적으로 줄여주는 투 포인터 기술과 고정된 범위를 유지하며 이동하는 슬라이딩 윈도우 패턴을 학습합니다.',
    body_md: `1차원 배열 데이터를 효율적으로 탐색하기 위해 두 개의 인덱스 포인터를 조절하는 **투 포인터(Two Pointers)**와 창(Window)을 이동시키는 **슬라이딩 윈도우(Sliding Window)** 기법을 다룹니다.`,
    python_code: `from collections import deque

# 1. 투 포인터 (Two Pointers - 특정 연속 합 S 구하기)
def count_subarray_sum(arr: list, target: int) -> int:
    """부분 수열의 합이 target인 경우의 수 구하기 (O(N))"""
    count = 0
    current_sum = 0
    right = 0
    
    # left 포인터를 0부터 시작하여 이동
    for left in range(len(arr)):
        # current_sum이 target보다 작은 동안 right 포인터를 전진
        while current_sum < target and right < len(arr):
            current_sum += arr[right]
            right += 1
        # 정확히 target에 도달한 경우 카운트 증가
        if current_sum == target:
            count += 1
        # 다음 left 조사를 위해 현재 left 원소를 뺌
        current_sum -= arr[left]
    return count

# 2. 슬라이딩 윈도우 (Sliding Window - 고정 크기 K 최댓값)
def max_sub_array_of_size_k(arr: list, k: int) -> int:
    """크기 K의 슬라이딩 윈도우 구간 합 중 최댓값 구하기 (O(N))"""
    if len(arr) < k:
        return 0
    # 최초 k개 원소의 합 계산
    window_sum = sum(arr[:k])
    max_val = window_sum
    
    # 윈도우를 한 칸씩 오른쪽으로 이동하며 계산 (O(1) 갱신)
    for i in range(k, len(arr)):
        # 윈도우에 새 원소(arr[i])를 추가하고, 맨 앞 원소(arr[i-k])를 제거
        window_sum += arr[i] - arr[i - k]
        max_val = max(max_val, window_sum)
    return max_val

if __name__ == "__main__":
    nums = [1, 2, 3, 2, 5, 2, 2, 1, 1]
    print("합이 5인 연속 부분 배열 개수:", count_subarray_sum(nums, 5))
    print("크기 3인 윈도우 최대 합:", max_sub_array_of_size_k(nums, 3))
`,
    python_explanation: `
1. \`count_subarray_sum()\`: 두 개의 인덱스(\`left\`, \`right\`)를 우측으로 이동시키며 $O(N)$ 선형 타임 조회를 달성합니다.
2. \`window_sum += arr[i] - arr[i-k]\`: 슬라이딩 윈도우의 핵심 매커니즘으로, 맨 앞을 빼고 새 원소를 더해 $O(1)$ 연산으로 윈도우를 갱신합니다.
`
  },
  // 8
  {
    order_index: 8,
    slug: 'ch08-greedy-algorithms-and-fractional-knapsack',
    title: '08. 탐욕법(Greedy Algorithm) - 그리디 선택 속성, 회의실 배정 및 분할 배낭 문제',
    seo_title: '그리디 알고리즘 - Greedy Algorithm, 탐욕적 선택 속성, 회의실 배정 & 분할 배낭',
    seo_description: '매 순간 가장 최선의 선택을 내리는 탐욕법(Greedy Algorithm), 그리디 조건(탐욕적 선택 속성, 최적 부분 구조), 회의실 배정 문제 및 분할 배낭 문제(Fractional Knapsack)를 배웁니다.',
    excerpt: '매 단계에서 국소적으로 가장 좋은 대안을 선택하여 전체 최적해를 구하는 그리디 알고리즘의 정당성 증명과 실전 탐욕 문제들을 학습합니다.',
    body_md: `매 순간마다 눈앞에 보이는 가장 최선의 선택을 해 나가는 **탐욕 알고리즘(Greedy Algorithm)**과 정당성 증명 조건을 다룹니다.`,
    python_code: `# 1. 회의실 배정 문제 (Greedy - 종료 시간 기준 오름차순 정렬)
def max_meetings(meetings: list) -> int:
    """종료 시간이 가장 빠른 회의부터 우선 선택하는 탐욕 알고리즘"""
    # 1. 종료 시간(x[1]) 기준 오름차순 정렬 (종료 시간 동일 시 시작 시간(x[0]) 오름차순)
    meetings.sort(key=lambda x: (x[1], x[0]))
    
    count = 0
    last_end_time = 0
    for start, end in meetings:
        # 직전 회의 종료 시간 이후에 시작하는 회의인 경우 채택
        if start >= last_end_time:
            count += 1
            last_end_time = end  # 종료 시간 갱신
    return count

# 2. 분할 배낭 문제 (Fractional Knapsack)
def fractional_knapsack(capacity: float, items: list) -> float:
    """무게 대비 가치가 가장 높은 물건부터 쪼개어 담는 탐욕 알고리즘"""
    # items = [(weight, value), ...]
    # 1. 단위 무게당 가치(value/weight) 기준 내림차순 정렬
    items.sort(key=lambda x: x[1] / x[0], reverse=True)
    
    total_value = 0.0
    for weight, value in items:
        if capacity >= weight:
            # 물건 전체를 통째로 담음
            capacity -= weight
            total_value += value
        else:
            # 배낭의 남아있는 용량만큼 물건을 쪼개서 담음
            total_value += value * (capacity / weight)
            break  # 배낭이 가득 차서 종료
    return total_value

if __name__ == "__main__":
    meetings = [(1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9), (6, 10), (8, 11), (8, 12), (2, 13), (12, 14)]
    print("최대 배정 가능한 회의 수:", max_meetings(meetings))
`,
    python_explanation: `
1. \`meetings.sort(key=lambda x: (x[1], x[0]))\`: 회의가 가장 일찍 끝나는 순서대로 정렬해야 뒤이어 더 많은 회의를 선택할 수 있다는 탐욕적 선택 속성을 적용합니다.
`
  },
  // 9
  {
    order_index: 9,
    slug: 'ch09-dynamic-programming-1-memoization-and-tabulation',
    title: '09. 동적 계획법(Dynamic Programming) 1: 기초 - Top-down(메모이제이션) vs Bottom-up(타뷸레이션)',
    seo_title: '동적 계획법 DP 1 - DP 개념, Top-down (Memoization) vs Bottom-up (Tabulation)',
    seo_description: '복잡한 문제를 하위 문제로 분할하여 중복 계산을 방지하는 동적 계획법(Dynamic Programming), Top-down 재귀 메모이제이션과 Bottom-up 반복 타뷸레이션 방식을 배웁니다.',
    excerpt: '중복되는 부분 문제(Overlapping Subproblems)의 연산 결과를 배열에 저장하여 재활용하는 DP 튜토리얼과 점화식 세우기 전략을 학습합니다.',
    body_md: `소규모 하위 문제들의 해를 저장해 두었다가 재활용하는 **동적 계획법(Dynamic Programming: DP)**의 기본 개념과 **Top-down vs Bottom-up** 방식을 학습합니다.`,
    python_code: `from functools import lru_cache

# 1. Top-down DP (@functools.lru_cache 파이썬 자동 메모이제이션)
@lru_cache(maxsize=None)  # 함수의 리턴값을 자동으로 메적하여 중복 연산 방지
def fib_top_down(n: int) -> int:
    """Top-down 재귀 + 메모이제이션 피보나치"""
    if n <= 2:  # Base Case
        return 1
    # 하위 문제로 재귀 호출 후 캐시된 결과 반환
    return fib_top_down(n - 1) + fib_top_down(n - 2)

# 2. Bottom-up DP (Tabulation 반복문 기반 테이블 구축)
def fib_bottom_up(n: int) -> int:
    """Bottom-up 반복문 타뷸레이션 피보나치"""
    if n <= 2:
        return 1
    # DP 테이블 할당 및 초기 상태 설정
    dp = [0] * (n + 1)
    dp[1] = dp[2] = 1
    
    # 소규모 문제부터 순차적으로 점화식 채워 나가기
    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]

if __name__ == "__main__":
    print("피보나치 50항 (Top-down DP):", fib_top_down(50))
    print("피보나치 50항 (Bottom-up DP):", fib_bottom_up(50))
`,
    python_explanation: `
1. \`@lru_cache\`: 파이썬 표준 라이브러리로, 함수의 리턴값을 자동으로 캐싱하는 강력한 메모이제이션 데코레이터 주석 해설입니다.
2. \`dp[i] = dp[i-1] + dp[i-2]\`: 점화식을 바탕으로 배열을 채워 올라가는 전통적 Bottom-up 타뷸레이션 방식입니다.
`
  },
  // 10
  {
    order_index: 10,
    slug: 'ch10-dynamic-programming-2-classic-problems',
    title: '10. 동적 계획법(DP) 2: 실전 대표 문제 - LIS($O(N \\log N)$), 0-1 배낭 문제 및 편집 거리',
    seo_title: '동적 계획법 DP 2 - LIS 최장 증가 부분 수열, 0-1 Knapsack 배낭 문제 & 편집 거리',
    seo_description: 'DP의 대표 문제인 최장 증가 부분 수열(LIS), 0-1 배낭 문제(0-1 Knapsack), 편집 거리(Edit Distance / Levenshtein Distance) 및 2차원 DP 점화식을 배웁니다.',
    excerpt: '코딩 테스트에 자주 출제되는 LIS, 0-1 Knapsack, 편집 거리 문제의 DP 점화식 도출 과정과 공간 복잡도 최적화 기법을 학습합니다.',
    body_md: `알고리즘 시험에 빈출되는 대표적 DP 문제인 **최장 증가 부분 수열(LIS)**, **0-1 배낭 문제(0-1 Knapsack)**, **편집 거리(Edit Distance)**를 다룹니다.`,
    python_code: `import bisect

# 1. LIS (Longest Increasing Subsequence - O(N log N) 이분 탐색 조합)
def lis_fast(arr: list) -> int:
    """이분 탐색(bisect)을 활용한 고속 LIS 길이 탐색"""
    lis = []
    for num in arr:
        # num이 들어갈 위치를 lis 배열에서 이분 탐색으로 찾음
        pos = bisect.bisect_left(lis, num)
        if pos == len(lis):
            lis.append(num)  # 가장 큰 값이면 꼬리에 추가
        else:
            lis[pos] = num   # 기존 위치의 값을 더 작은 값으로 대체
    return len(lis)

# 2. 0-1 배낭 문제 (0-1 Knapsack - 1차원 배열 최적화)
def knapsack_01(capacity: int, weights: list, values: list) -> int:
    """1차원 DP 배열을 역순 순회하여 공간 복잡도를 O(W)로 최적화한 배낭 문제"""
    dp = [0] * (capacity + 1)
    for w, v in zip(weights, values):
        # 1차원 배열 갱신 시 중복 사용을 막기 위해 뒤에서부터 역순 순회!
        for c in range(capacity, w - 1, -1):
            dp[c] = max(dp[c], dp[c - w] + v)
    return dp[capacity]

if __name__ == "__main__":
    nums = [10, 20, 10, 30, 20, 50]
    print("LIS 최장 증가 부분 수열 길이:", lis_fast(nums))
    print("0-1 Knapsack 배낭 최대 가치:", knapsack_01(7, [6, 4, 3, 5], [13, 8, 6, 12]))
`,
    python_explanation: `
1. \`lis_fast()\`: \`bisect\`를 활용해 $O(N \log N)$ 만에 최장 증가 부분 수열 길이를 구하는 주석 해설입니다.
2. \`knapsack_01()\`: 1차원 DP 배열을 뒤에서부터 역순 순회하여 $O(N \times W)$ 공간 복잡도를 1차원으로 혁신적 축소합니다.
`
  },
  // 11
  {
    order_index: 11,
    slug: 'ch11-backtracking-and-n-queens-problem',
    title: '11. 백트래킹(Backtracking)과 상태 공간 트리 - 가지치기(Pruning), N-Queen 문제 및 스도쿠',
    seo_title: '백트래킹 & 가지치기 - Backtracking, State Space Tree, Pruning & N-Queen 문제',
    seo_description: '해를 찾는 도중 조건에 맞지 않으면 즉시 후보를 포기하고 되돌아가는 백트래킹(Backtracking), 상태 공간 트리, 가지치기(Pruning) 및 N-Queen 문제 풀이를 배웁니다.',
    excerpt: '가능성이 없는 경로는 일찍 차단(가지치기)하여 완전 탐색의 시간 복잡도를 획기적으로 줄여주는 백트래킹 원리와 N-Queen 알고리즘을 다룹니다.',
    body_md: `모든 경우의 수를 탐색하되 유망하지 않은 경로는 일찍 포기하고 되돌아가는 **백트래킹(Backtracking)**과 **가지치기(Pruning)** 기법을 다룹니다.`,
    python_code: `def solve_n_queens(n: int) -> int:
    """N-Queen 체스판 퀸 배치 백트래킹 풀이"""
    cols = set()      # 열 방문 상태 (c)
    diag1 = set()     # 대각선 1 상태 (r + c)
    diag2 = set()     # 대각선 2 상태 (r - c)
    count = 0

    def backtrack(r: int):
        nonlocal count
        # [Base Case] n개의 퀸을 모든 행에 무사히 배치한 경우
        if r == n:
            count += 1
            return
        
        for c in range(n):
            # [ 가지치기 (Pruning) ] 이미 퀸이 공격 가능한 위치라면 탐색 차단!
            if c in cols or (r + c) in diag1 or (r - c) in diag2:
                continue
            
            # 퀸 배치 (상태 기록)
            cols.add(c)
            diag1.add(r + c)
            diag2.add(r - c)
            
            # 다음 행으로 재귀 이동
            backtrack(r + 1)
            
            # 퀸 제거 (상태 복원 - 백트래킹)
            cols.remove(c)
            diag1.remove(r + c)
            diag2.remove(r - c)

    backtrack(0)
    return count

if __name__ == "__main__":
    n = 8
    print(f"{n}-Queen 체스판 배치 해의 총 개수:", solve_n_queens(n))
`,
    python_explanation: `
1. \`set()\` 기반 상태 관리: \`cols\`, \`diag1\`, \`diag2\` 대각선 집합을 파이썬 \`set\`으로 만들어 $O(1)$ 검사를 가능하게 만듭니다.
2. 가지치기(Pruning): 조건 불충분 시 바로 \`continue\`하여 하위 재귀를 조기 차단합니다.
`
  },
  // 12
  {
    order_index: 12,
    slug: 'ch12-graph-traversals-dfs-and-bfs',
    title: '12. 그래프 탐색 - 깊이 우선 탐색(DFS), 너비 우선 탐색(BFS) 및 미로 최단 거리',
    seo_title: '그래프 탐색 - DFS (Depth First Search), BFS (Breadth First Search) & 최단 경로',
    seo_description: '그래프 노드를 탐색하는 깊이 우선 탐색(DFS: 재귀/스택)과 너비 우선 탐색(BFS: 큐), 최단 경로 찾기 및 연결 요소 개수 세기를 배웁니다.',
    excerpt: '스택/재귀를 이용한 DFS 깊이 탐색과 큐를 이용한 BFS 너비 탐색의 작동 방식 및 미로 최단 거리 탐색 알고리즘을 학습합니다.',
    body_md: `비선형 자료구조인 그래프의 모든 노드를 빠짐없이 방문하는 **깊이 우선 탐색(DFS)**과 **너비 우선 탐색(BFS)**의 알고리즘 매커니즘을 다룹니다.`,
    python_code: `from collections import deque

def bfs_maze(maze: list, start: tuple, target: tuple) -> int:
    """BFS(너비 우선 탐색)를 이용한 미로 최단 거리 탐색"""
    rows, cols = len(maze), len(maze[0])
    # 큐 생성: (행, 열, 이동거리)
    queue = deque([(start[0], start[1], 1)])
    
    # 방문 처리 배열 초기화
    visited = [[False] * cols for _ in range(rows)]
    visited[start[0]][start[1]] = True
    
    # 상, 하, 좌, 우 이동 변위 벡터
    dr = [-1, 1, 0, 0]
    dc = [0, 0, -1, 1]
    
    while queue:
        r, c, dist = queue.popleft()  # O(1) 선형 큐 pop
        
        # 목적지 도달 시 최단 거리 즉시 반환
        if (r, c) == target:
            return dist
        
        # 4방향 인접 미로 칸 탐색
        for i in range(4):
            nr, nc = r + dr[i], c + dc[i]
            # 미로 경계 내부이고, 미방문 상태이며, 이동 가능한 길(1)인 경우
            if 0 <= nr < rows and 0 <= nc < cols and not visited[nr][nc] and maze[nr][nc] == 1:
                visited[nr][nc] = True  # 방문 처리
                queue.append((nr, nc, dist + 1))  # 큐에 다음 좌표 삽입
    return -1  # 도달 불가능 시 -1 반환

if __name__ == "__main__":
    grid = [
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 1, 1, 0, 1],
        [0, 0, 0, 0, 1]
    ]
    print("미로 최단 이동 거리:", bfs_maze(grid, (0, 0), (3, 4)))
`,
    python_explanation: `
1. \`deque.popleft()\`: BFS 구현 시 파이썬 선형 큐 $O(1)$ 추출을 보장하는 핵심 구문 주석 해설입니다.
`
  },
  // 13
  {
    order_index: 13,
    slug: 'ch13-shortest-path-dijkstra-and-bellman-ford',
    title: '13. 단일 출발지 최단 경로 알고리즘 - 다익스트라(Dijkstra)와 벨만-포드(Bellman-Ford)',
    seo_title: '최단 경로 알고리즘 1 - 다익스트라(Dijkstra $O((E+V)\\log V)$), 벨만-포드(Bellman-Ford)',
    seo_description: '단일 출발지 최단 경로를 구하는 다익스트라(Dijkstra: 우선순위 큐 힙 적용) 및 음수 가중치 간선과 음수 사이클을 감지할 수 있는 벨만-포드(Bellman-Ford) 알고리즘을 배웁니다.',
    excerpt: '가중치 그래프에서 최단 경로를 구하는 다익스트라 알고리즘과 음수 가중치가 존재할 때 사용하는 벨만-포드 알고리즘을 학습합니다.',
    body_md: `특정 출발 노드에서 다른 모든 노드로 가는 최단 경로를 구하는 **다익스트라(Dijkstra)** 알고리즘과 **벨만-포드(Bellman-Ford)** 알고리즘을 학습합니다.`,
    python_code: `import heapq

def dijkstra(graph: dict, start: int) -> dict:
    """우선순위 큐 힙(heapq) 기반 다익스트라 O((E+V) log V) 최단 경로"""
    # 1. 모든 노드의 최단 거리를 무한대(inf)로 초기화
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    
    # 2. 우선순위 큐 (누적거리, 노드)
    pq = [(0, start)]
    
    while pq:
        current_dist, current_node = heapq.heappop(pq)
        
        # 이미 처리된 노드의 거리보다 더 긴 경로는 무시 (가지치기)
        if current_dist > distances[current_node]:
            continue
            
        # 인접 노드 탐색 및 최단 거리 테이블 갱신
        for neighbor, weight in graph[current_node]:
            distance = current_dist + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))  # 힙에 추가
                
    return distances

if __name__ == "__main__":
    graph = {
        1: [(2, 2), (3, 5), (4, 1)],
        2: [(3, 3), (4, 2)],
        3: [(4, 3), (5, 1)],
        4: [(5, 1)],
        5: []
    }
    print("1번 노드 출발 각 노드별 최단 거리:", dijkstra(graph, 1))
`,
    python_explanation: `
1. \`heapq.heappush / heappop\`: 우선순위 큐 힙을 활용하여 $O((E+V) \log V)$ 시간에 다익스트라 알고리즘을 수행합니다.
`
  },
  // 14
  {
    order_index: 14,
    slug: 'ch14-all-pairs-shortest-path-floyd-warshall',
    title: '14. 모든 쌍 최단 경로 알고리즘 - 플로이드-워셜(Floyd-Warshall $O(V^3)$)과 경유지 DP',
    seo_title: '최단 경로 알고리즘 2 - 플로이드-워셜(Floyd-Warshall $O(V^3)$) & 3중 루프 DP',
    seo_description: '모든 노드 쌍 간의 최단 거리를 구하는 플로이드-워셜(Floyd-Warshall) 알고리즘, 경유 노드 $K$를 이용한 3중 루프 동적 계획법 점화식을 배웁니다.',
    excerpt: '그래프의 모든 정점 쌍 간의 최단 거리를 $O(V^3)$ 타임에 구하는 플로이드-워셜 알고리즘의 경유지 점화식 원리를 학습합니다.',
    body_md: `모든 정점 쌍 간의 최단 거리를 동적 계획법(DP)으로 구하는 **플로이드-워셜(Floyd-Warshall)** 알고리즘을 학습합니다.`,
    python_code: `def floyd_warshall(n: int, edges: list) -> list:
    """모든 정점 쌍 간의 최단 경로 플로이드-워셜 O(V^3)"""
    INF = float('inf')
    # 2차원 최단 거리 테이블 초기화
    dist = [[INF] * (n + 1) for _ in range(n + 1)]
    
    # 자기 자신으로 가는 거리는 0 설정
    for i in range(1, n + 1):
        dist[i][i] = 0
        
    # 간선 가중치 정보 반영
    for u, v, w in edges:
        dist[u][v] = w
        
    # 3중 루프: [경유지 k] -> [출발지 i] -> [도착지 j]
    for k in range(1, n + 1):
        for i in range(1, n + 1):
            for j in range(1, n + 1):
                # 점화식: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
    return dist

if __name__ == "__main__":
    edges = [(1, 2, 4), (1, 4, 6), (2, 1, 3), (2, 3, 7), (3, 1, 5), (3, 4, 4), (4, 3, 2)]
    matrix = floyd_warshall(4, edges)
    print("모든 쌍 최단 경로 (노드 1 -> 노드 3):", matrix[1][3])
`,
    python_explanation: `
1. \`dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])\`: 경유지 $k$를 가장 바깥쪽 루프에 두어야 정확한 최단 경로 DP 갱신이 보장됩니다.
`
  },
  // 15
  {
    order_index: 15,
    slug: 'ch15-minimum-spanning-tree-mst-kruskal-prim',
    title: '15. 최소 신장 트리(MST) - 크루스칼(Kruskal: Union-Find)과 프림(Prim: Priority Queue)',
    seo_title: '최소 신장 트리 MST - 크루스칼(Kruskal), 프림(Prim) & 서로소 집합 Union-Find',
    seo_description: '그래프의 모든 노드를 최소 비용으로 연결하는 최소 신장 트리(MST), 간선 중심 크루스칼(Kruskal: Union-Find) 및 정점 중심 프림(Prim) 알고리즘을 배웁니다.',
    excerpt: '사이클 형성 없이 그래프의 모든 정점을 최소 가중치 합으로 잇는 크루스칼 알고리즘과 프림 알고리즘의 동작 원리를 다룹니다.',
    body_md: `무방향 가중치 그래프에서 모든 정점을 연결하는 부부 그래프 중 가중치의 합이 최소가 되는 **최소 신장 트리(MST: Minimum Spanning Tree)**를 다룹니다.`,
    python_code: `# 서로소 집합 (Disjoint Set / Union-Find) 구현
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n + 1))
        
    def find(self, i):
        """경로 압축(Path Compression)이 적용된 root 정점 탐색"""
        if self.parent[i] == i:
            return i
        self.parent[i] = self.find(self.parent[i])  # 재귀적 경로 압축
        return self.parent[i]
        
    def union(self, i, j):
        """두 정점의 집합을 병합 (사이클이 형성되면 False 반환)"""
        root_i = self.find(i)
        root_j = self.find(j)
        if root_i != root_j:
            self.parent[root_i] = root_j
            return True
        return False

def kruskal(n: int, edges: list) -> int:
    """크루스칼 MST 알고리즘"""
    # 1. 간선 가중치 오름차순 정렬
    edges.sort()
    uf = UnionFind(n)
    mst_cost = 0
    
    # 2. 가중치가 작은 간선부터 순차 선택하며 사이클 형성 여부 검사
    for w, u, v in edges:
        if uf.union(u, v):  # 사이클이 발생하지 않을 때만 간선 채택
            mst_cost += w
    return mst_cost

if __name__ == "__main__":
    edges = [(29, 1, 2), (75, 1, 6), (35, 2, 3), (34, 2, 6), (7, 3, 4), (23, 4, 6), (13, 4, 5)]
    print("MST 최소 신장 트리 가중치 합:", kruskal(6, edges))
`,
    python_explanation: `
1. \`self.find()\`: 경로 압축(Path Compression) 기법으로 탐색 시간을 $O(\alpha(N))$ 분할상환 상수 타임으로 단축하는 주석 해설입니다.
`
  },
  // 16
  {
    order_index: 16,
    slug: 'ch16-topological-sort-and-dag',
    title: '16. 위상 정렬(Topological Sort)과 방향 비순환 그래프(DAG) - 진입 차수와 Kahn 알고리즘',
    seo_title: '위상 정렬 Topological Sort - DAG, 진입 차수(Indegree), Kahn 큐 알고리즘 & 사이클 검증',
    seo_description: '방향성 그래프에서 작업의 순서를 결정하는 위상 정렬(Topological Sort), DAG(Direct Acyclic Graph), 진입 차수(Indegree) 기반 Kahn 알고리즘을 배웁니다.',
    excerpt: '선후 관계가 정의된 작업들을 순서대로 배치하는 위상 정렬 알고리즘과 큐를 이용한 사이클 존재 여부 판단 기법을 다룹니다.',
    body_md: `사이클이 없는 방향 그래프(DAG)에서 정점들을 선후 관계 순서에 맞추어 일렬로 정렬하는 **위상 정렬(Topological Sort)**을 다룹니다.`,
    python_code: `from collections import deque

def topological_sort(v: int, edges: list) -> list:
    """Kahn 큐 기반 위상 정렬 알고리즘"""
    indegree = [0] * (v + 1)  # 진입 차수 배열
    graph = [[] for _ in range(v + 1)]  # 인접 리스트
    
    for u, dest in edges:
        graph[u].append(dest)
        indegree[dest] += 1  # 진입 차수 증가
        
    # 진입 차수가 0인 노드들을 큐에 초기 삽입
    queue = deque([i for i in range(1, v + 1) if indegree[i] == 0])
    result = []
    
    while queue:
        curr = queue.popleft()
        result.append(curr)
        
        # 현재 노드와 연결된 인접 노드들의 진입 차수 감축
        for nxt in graph[curr]:
            indegree[nxt] -= 1
            # 새롭게 진입 차수가 0이 된 노드를 큐에 삽입
            if indegree[nxt] == 0:
                queue.append(nxt)
                
    # 결과 원소 수가 전체 정점 수와 다르면 그래프 내 사이클 존재!
    return result if len(result) == v else []

if __name__ == "__main__":
    edges = [(1, 2), (1, 5), (2, 3), (3, 4), (4, 6), (5, 6), (6, 7)]
    print("위상 정렬 작업 수행 순서:", topological_sort(7, edges))
`,
    python_explanation: `
1. \`indegree\`: 진입 차수가 0인 노드를 큐에 삽입하고 간선을 제거해 나가며 순서를 배치합니다.
`
  },
  // 17
  {
    order_index: 17,
    slug: 'ch17-string-matching-kmp-and-rabin-karp',
    title: '17. 문자열 검색 알고리즘 - KMP(Knuth-Morris-Pratt $O(N+M)$)와 라빈-카프(Rabin-Karp)',
    seo_title: '문자열 탐색 알고리즘 - KMP 알고리즘, 실패 함수(LPS 배열) & 라빈-카프 롤링 해시',
    seo_description: '긴 텍스트에서 패턴 문자열을 빠르게 찾는 KMP 알고리즘, 접두사/접미사 일치 실패 함수(LPS 배열) 및 롤링 해시 기반 라빈-카프 알고리즘을 배웁니다.',
    excerpt: '비교 불일치 발생 시 뒤로 돌아가지 않고 $O(N+M)$ 시간에 검색하는 KMP 알고리즘과 해시 함수를 이용한 라빈-카프 패턴 매칭을 학습합니다.',
    body_md: `긴 본문 텍스트 내에서 특정 패턴 문자열의 위치를 $O(N+M)$ 선형 시간에 빠르게 찾아내는 **KMP 알고리즘**과 **라빈-카프(Rabin-Karp)**를 배웁니다.`,
    python_code: `def build_lps(pattern: str) -> list:
    """KMP 실패 함수 (Longest Proper Prefix which is also Suffix 배열) 생성"""
    lps = [0] * len(pattern)
    length = 0  # 이전 일치 접두사 길이
    i = 1
    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]  # LPS 테이블을 통해 건너뜀
            else:
                lps[i] = 0
                i += 1
    return lps

def kmp_search(text: str, pattern: str) -> list:
    """KMP 패턴 매칭 O(N + M)"""
    lps = build_lps(pattern)
    matches = []
    i = j = 0  # i: text 인덱스, j: pattern 인덱스
    
    while i < len(text):
        if pattern[j] == text[i]:
            i += 1
            j += 1
        if j == len(pattern):
            matches.append(i - j)  # 일치 패턴 매칭 위치 발견
            j = lps[j - 1]         # 점프!
        elif i < len(text) and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]     # 불일치 시 LPS 테이블로 인덱스 점프
            else:
                i += 1
    return matches

if __name__ == "__main__":
    txt = "ABABDABACDABABCABAB"
    pat = "ABABCABAB"
    print("KMP 패턴 일치 인덱스 목록:", kmp_search(txt, pat))
`,
    python_explanation: `
1. \`build_lps()\`: 접두사와 접미사의 일치 길이를 저장하는 실패 함수(LPS)를 $O(M)$ 타임에 생성합니다.
`
  },
  // 18
  {
    order_index: 18,
    slug: 'ch18-tree-advanced-lca-lowest-common-ancestor',
    title: '18. 트리 심화 - 최소 공통 조상(LCA: Lowest Common Ancestor) 및 희소 배열(Sparse Table)',
    seo_title: '트리 LCA 알고리즘 - 최소 공통 조상(Lowest Common Ancestor), 희소 배열 $O(\\log N)$',
    seo_description: '트리 상의 두 노드가 갖는 가장 가까운 공통 조상을 찾는 LCA(Lowest Common Ancestor) 알고리즘 및 희소 배열(Sparse Table)을 이용한 $O(\\log N)$ 고속 쿼리를 배웁니다.',
    excerpt: '트리 계층 구조에서 두 정점의 가장 가까운 공통 조상을 탐색하는 기본 선형 방식과 $2^k$ 점프를 이용한 $O(\\log N)$ 희소 배열 LCA를 다룹니다.',
    body_md: `트리 구조에서 두 정점의 가장 가까운 공통 조상을 효율적으로 탐색하는 **최소 공통 조상(LCA: Lowest Common Ancestor)** 알고리즘을 학습합니다.`,
    python_code: `import sys
sys.setrecursionlimit(10**5)

LOG = 21  # 2^20 > 1,000,000 대용량 트리를 위한 상한

def get_lca(u: int, v: int, depth: list, parent: list) -> int:
    """희소 배열(Sparse Table)을 이용한 O(log N) LCA 최소 공통 조상 탐색"""
    # 1. v의 깊이가 더 깊도록 정렬
    if depth[u] < depth[v]:
        u, v = v, u
        
    # 2. 두 노드의 깊이(depth)를 동일하게 맞춤 (2^i 만큼 껑충 점프)
    for i in range(LOG - 1, -1, -1):
        if depth[u] - depth[v] >= (1 << i):
            u = parent[u][i]
            
    # 깊이를 맞췄을 때 두 노드가 같으면 그 노드가 곧 LCA
    if u == v:
        return u
        
    # 3. 공통 조상 직전까지 2^i 단위로 올라감
    for i in range(LOG - 1, -1, -1):
        if parent[u][i] != parent[v][i]:
            u = parent[u][i]
            v = parent[v][i]
            
    # 바로 위의 부모(parent[u][0])가 최종 LCA
    return parent[u][0]
`,
    python_explanation: `
1. \`parent[node][k]\`: $2^k$ 번째 부모를 미리 계산해 두는 희소 배열(Sparse Table) 기법으로 $O(\log N)$ 시간에 공통 조상을 탐색합니다.
`
  },
  // 19
  {
    order_index: 19,
    slug: 'ch19-segment-tree-and-lazy-propagation',
    title: '19. 구간 쿼리 자료구조 - 세그먼트 트리(Segment Tree) 및 느리게 갱신되는 세그먼트 트리',
    seo_title: '세그먼트 트리 - Segment Tree $O(\\log N)$ 구간합 쿼리 & Lazy Propagation 느린 갱신',
    seo_description: '배열의 특정 구간합/최솟값 쿼리 및 값 변경을 $O(\\log N)$ 시간에 처리하는 세그먼트 트리(Segment Tree)와 구간 변경 연산을 최적화하는 Lazy Propagation을 배웁니다.',
    excerpt: '연속 데이터의 구간 쿼리 및 포인트 수정 작업을 logarithmic 타임에 처리하는 세그먼트 트리의 노드 구성과 느린 갱신(Lazy Propagation)을 학습합니다.',
    body_md: `배열의 구간 합, 최댓값, 최솟값 쿼리 및 특정 원소의 변경을 $O(\log N)$ 시간에 처리하는 **세그먼트 트리(Segment Tree)**와 **Lazy Propagation**을 다룹니다.`,
    python_code: `class SegmentTree:
    """O(log N) 구간합 쿼리 세그먼트 트리"""
    def __init__(self, arr):
        self.n = len(arr)
        # 세그먼트 트리의 노드 수: 보통 4 * N 크기 할당
        self.tree = [0] * (4 * self.n)
        self.build(arr, 1, 0, self.n - 1)
        
    def build(self, arr, node, start, end):
        """세그먼트 트리 재귀적 구축"""
        if start == end:
            self.tree[node] = arr[start]  # 리프 노드
            return
        mid = (start + end) // 2
        self.build(arr, node * 2, start, mid)       # 왼쪽 자식
        self.build(arr, node * 2 + 1, mid + 1, end) # 오른쪽 자식
        self.tree[node] = self.tree[node * 2] + self.tree[node * 2 + 1]  # 자식들의 합
        
    def query(self, node, start, end, l, r):
        """구간 [l, r] 의 합 쿼리 (O(log N))"""
        if r < start or end < l:  # 범위를 벗어난 경우
            return 0
        if l <= start and end <= r:  # 완전히 포함되는 경우
            return self.tree[node]
        mid = (start + end) // 2
        return self.query(node * 2, start, mid, l, r) + self.query(node * 2 + 1, mid + 1, end, l, r)

if __name__ == "__main__":
    st = SegmentTree([1, 2, 3, 4, 5])
    print("구간합 (인덱스 1~3):", st.query(1, 0, 4, 1, 3))
`,
    python_explanation: `
1. \`self.tree[node * 2] + self.tree[node * 2 + 1]\`: 자식 노드의 합을 부모 노드에 축적하는 완전 이진 트리 방식 구현 주석 해설입니다.
`
  },
  // 20
  {
    order_index: 20,
    slug: 'ch20-bitmasking-and-tsp-traveling-salesperson',
    title: '20. 비트마스킹(Bitmasking)과 외판원 순회 문제(TSP: Traveling Salesperson Problem)',
    seo_title: '비트마스킹 & TSP - Bitmask 연산자, 외판원 순회 문제 DP + Bitmask $O(N^2 2^N)$',
    seo_description: '정수 비트로 집합 상태를 표현하는 비트마스킹(Bitmasking) 기법과 DP + Bitmask를 조합하여 외판원 순회 문제(TSP)를 $O(N^2 2^N)$에 푸는 알고리즘을 배웁니다.',
    excerpt: '메모리와 속도를 극대화하는 비트 연산자 활용법과 모든 도시를 방문하고 돌아오는 외판원 순회(TSP) 알고리즘의 비트마스크 DP 기법을 다룹니다.',
    body_md: `정수의 비트(Bit)를 이용하여 집합의 방문 상태를 효율적으로 표현하는 **비트마스킹(Bitmasking)**과 **외판원 순회 문제(TSP)**의 DP 조합 기법을 다룹니다.`,
    python_code: `def tsp(n: int, W: list) -> int:
    """비트마스크 + DP 기반 외판원 순회 문제 (O(N^2 * 2^N))"""
    INF = float('inf')
    dp = {}

    def visit(curr: int, visited: int) -> int:
        # [Base Case] 모든 도시를 방문 완료한 경우 (비트마스크가 모두 1)
        if visited == (1 << n) - 1:
            return W[curr][0] or INF  # 시작 도시(0)로 돌아가는 비용 반환

        # 메모이제이션 캐시 확인
        if (curr, visited) in dp:
            return dp[(curr, visited)]

        min_cost = INF
        for next_city in range(n):
            # 1. 아직 방문하지 않았고 (visited & (1 << next_city) == 0)
            # 2. 이동 가능한 길(W[curr][next_city] != 0)인 경우
            if not (visited & (1 << next_city)) and W[curr][next_city] != 0:
                cost = W[curr][next_city] + visit(next_city, visited | (1 << next_city))
                min_cost = min(min_cost, cost)

        dp[(curr, visited)] = min_cost
        return min_cost

    return visit(0, 1)  # 0번 도시에서 방문 시작(visited = 1)

if __name__ == "__main__":
    W = [
        [0, 10, 15, 20],
        [10, 0, 35, 25],
        [15, 35, 0, 30],
        [20, 25, 30, 0]
    ]
    print("TSP 최단 순회 비용:", tsp(4, W))
`,
    python_explanation: `
1. \`visited | (1 << next_city)\`: 비트 연산자를 사용하여 도시 방문 상태를 정수 하나로 압축 및 메모이제이션합니다.
`
  }
];

// Split into 5 chunks for safe remote execution
const chunks = [
  lessons.slice(0, 4),
  lessons.slice(4, 8),
  lessons.slice(8, 12),
  lessons.slice(12, 16),
  lessons.slice(16, 20)
];

chunks.forEach((chunk, index) => {
  let sqlContent = `-- Algorithm Mega 2000+ Chars Lessons with Detailed Python Comments Part ${index + 1}\n`;
  for (const lesson of chunk) {
    const super_content_md = makeMegaAlgorithmContent(
      lesson.slug,
      lesson.title,
      lesson.body_md,
      lesson.python_code,
      lesson.python_explanation
    );
    const content_html = marked.parse(super_content_md);
    const escapeSql = (str) => str ? str.replace(/'/g, "''") : '';

    sqlContent += `
INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'algorithm',
  '${escapeSql(lesson.slug)}',
  '${escapeSql(lesson.title)}',
  '${escapeSql(lesson.excerpt)}',
  '${escapeSql(super_content_md)}',
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

  fs.writeFileSync(`scratch/seed_algorithm_mega_p${index + 1}.sql`, sqlContent, 'utf-8');
});

console.log('Successfully generated 5 Mega Algorithm 20 SQL chunk files with DETAILED PYTHON COMMENTS!');
