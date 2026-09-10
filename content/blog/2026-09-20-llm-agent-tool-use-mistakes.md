---
title: LLM 에이전트에 도구를 쥐여줄 때 흔한 실수 5가지
slug: llm-agent-tool-use-mistakes
excerpt: Tool use(function calling)로 에이전트를 만들 때 반복적으로 나오는 실수들 — 병렬 호출 처리, 에러 반환, 도구 설명, 스키마 강제까지.
seo_title: LLM 에이전트 Tool Use 실수 5가지 (function calling)
seo_description: LLM 에이전트 개발에서 tool use/function calling을 다룰 때 흔한 실수 — 병렬 tool_result 분할, is_error 누락, 모호한 도구 설명, 스키마 미검증, 도구 과다.
---

## 에이전트의 버그는 대부분 도구 경계에서 나온다

Tool use(function calling)로 에이전트를 만들면, 모델 자체보다 **모델과 도구를 잇는 코드**에서 문제가 더 많이 터진다. 반복적으로 보는 다섯 가지.

## 1. 병렬 tool_result를 여러 메시지로 쪼갠다

모델은 한 턴에 도구를 여러 개 동시에 호출할 수 있다. 이때 결과를 **한 user 메시지 안에 모든 `tool_result` 블록으로 묶어서** 돌려줘야 한다.

```
assistant: [tool_use A][tool_use B]
user:      [tool_result A][tool_result B]   ← 하나의 메시지에 둘 다
```

결과를 두 메시지로 나눠 보내면 에러는 안 나지만, 모델이 "아, 병렬 호출은 문제를 일으키는구나"를 학습해서 **점점 도구를 하나씩만 부른다.** 조용히 느려진다.

## 2. 실패한 도구 결과를 그냥 빼먹는다

도구 하나가 에러 났을 때, 그 `tool_result`를 안 보내고 성공한 것만 보내면 모델은 호출이 사라진 상태를 보게 된다. 실패도 **`is_error: true`를 달아서 반환**한다.

```json
{ "type": "tool_result", "tool_use_id": "...", "content": "타임아웃", "is_error": true }
```

그래야 모델이 재시도하거나 다른 경로를 택한다.

## 3. 도구 설명을 사람용으로 쓴다

도구 `description`은 모델이 **언제 이걸 부를지** 판단하는 유일한 근거다. "사용자 정보를 가져옵니다"로는 부족하다.

- 무엇을 반환하는지 (형식 포함)
- 언제 써야 하는지, 언제 쓰면 안 되는지
- 파라미터 각각의 의미와 예시

도구가 잘못 불리거나 안 불리면, 로직이 아니라 설명을 먼저 고친다.

## 4. tool_use.input을 검증 없이 그대로 쓴다

모델이 준 인자가 스키마에 맞다는 보장은 기본적으로 없다. 두 가지를 한다.

- **`strict: true`** 를 도구 정의에 걸면 인자가 스키마를 정확히 지킨다 (`additionalProperties: false` + `required` 필요)
- 인자는 항상 `JSON.parse()`로 파싱한다. 직렬화된 문자열을 정규식으로 긁지 않는다 — 모델마다 이스케이프 방식이 다를 수 있다

## 5. 도구를 너무 많이 준다

도구가 20개, 30개가 되면 모델이 고르기 어려워지고, 매 요청 토큰(도구 정의 전체가 프리픽스)도 커진다.

- 정말 자주 쓰는 것만 상시 노출
- 나머지는 "도구 검색"으로 필요할 때 로드하거나, 하나의 도구로 통합
- 도구 세트를 요청마다 바꾸지 않는다 — 캐시가 깨진다 (자세히는 [Prompt Caching 글](/blog/claude-api-prompt-caching-cost) 참고)

## 루프는 직접 짜지 말지 고민

대부분의 SDK에 tool-call 루프를 대신 돌려주는 헬퍼(tool runner)가 있다. 승인 게이트·에러 가로채기·재시도 훅이 필요 없으면 직접 `while (stop_reason === "tool_use")`를 짜기보다 헬퍼를 쓰는 게 실수가 적다. 루프 전체를 통제해야 할 때만 수동 루프로 간다.

## 정리

에이전트 tool use의 실수는 다섯 개로 압축된다. **병렬 결과는 한 메시지에, 실패도 반환, 도구 설명은 모델용으로, 인자는 검증·파싱, 도구는 적게.** 여기에 루프는 가능하면 SDK 헬퍼로.

LLM 에이전트·자동화 워크플로우 구축이 필요하면 [AI & Agentic Solution](/services/ai-solution)을, 도입 전 검토는 [사내 AI 챗봇 체크리스트](/blog/internal-ai-chatbot-checklist)를 참고하면 된다. 에이전트 설계 기초는 [AI 교육 섹션](/education/ai)에 정리해뒀다.
