---
title: Flutter 상태 관리, 뭘 쓸지 3분 정리 — setState·Provider·Riverpod·Bloc
slug: flutter-state-management-choice
excerpt: Flutter 상태 관리 라이브러리 선택은 앱 규모와 팀 크기로 갈린다. 네 가지 선택지의 자리와, 흔한 성능 함정 하나.
seo_title: Flutter 상태 관리 선택 — Provider vs Riverpod vs Bloc
seo_description: Flutter 상태 관리에서 setState, Provider, Riverpod, Bloc을 언제 쓰는지. 앱 규모별 선택 기준과 불필요한 리빌드로 인한 성능 문제 해결.
---

## 정답은 없지만, 자리는 있다

Flutter 상태 관리는 "뭐가 최고냐" 논쟁이 끝나지 않는다. 그런데 실무에서는 **앱 규모와 팀 크기**로 대부분 갈린다.

## setState — 화면 하나로 끝나는 상태

위젯 하나 안에서만 쓰는 상태라면 `setState`로 충분하다. 토글, 폼 입력, 애니메이션 컨트롤러.

라이브러리를 얹기 전에 물어봐야 한다. **"이 상태를 다른 화면이 알아야 하나?"** 아니면 `setState`가 맞다. 남용하지 말라는 말이 "쓰지 말라"는 뜻은 아니다.

## Provider — 소규모~중형 앱의 기본값

여러 화면이 같은 상태를 공유해야 하면 Provider. Flutter 팀이 오래 권장해온 선택지고, 러닝 커브가 낮다.

- 화면 10~20개 규모
- 상태 종류가 복잡하지 않음 (사용자 정보, 장바구니, 설정 정도)
- 팀이 작거나 Flutter 경험이 얕음

MVP나 커머스·예약 앱 대부분이 여기 해당한다.

## Riverpod — Provider의 상위 호환, 신규 프로젝트라면

Riverpod은 Provider를 만든 사람이 그 한계를 고쳐서 다시 만든 것이다. `BuildContext` 없이 상태에 접근하고, 컴파일 타임에 의존성 오류를 잡고, 테스트가 쉽다.

- **신규 프로젝트**면서 앱이 커질 가능성이 있다
- 상태 간 의존 관계가 있다 (A가 바뀌면 B를 다시 계산)
- 테스트를 진지하게 쓴다

지금 새로 시작하면서 Provider와 Riverpod을 두고 고민 중이면, 대체로 Riverpod이 낫다.

## Bloc — 규모가 크고 상태 흐름이 복잡할 때

Bloc은 이벤트 → 상태 전이를 명시적으로 강제한다. 보일러플레이트가 많은 대신, 상태 변화 흐름이 추적 가능하고 팀이 커도 일관성이 유지된다.

- 화면 수십 개, 개발자 여러 명
- 복잡한 비즈니스 로직, 상태 머신에 가까운 흐름
- 상태 변화 로깅·디버깅이 중요한 도메인 (금융, 헬스케어)

작은 앱에 Bloc을 쓰면 코드량만 늘어난다.

## 어떤 걸 골라도 겪는 함정: 불필요한 리빌드

"Flutter 느리다"의 대부분은 렌더링 엔진이 아니라 **상태가 바뀔 때 필요 이상으로 넓은 위젯 트리가 다시 빌드되는 것**이다.

- Provider면 `Consumer`/`Selector`로 리빌드 범위를 좁힌다
- Riverpod이면 `select`로 필요한 필드만 구독한다
- 리스트는 항목 단위로 구독을 쪼갠다

상태 관리 라이브러리를 바꾸기 전에, 리빌드 범위부터 확인하는 게 맞다. 대부분 그게 원인이다.

## 정리

- **한 화면**: setState
- **소~중형, 작은 팀**: Provider
- **신규 + 확장 가능성**: Riverpod
- **대형 + 복잡한 상태 흐름**: Bloc

그리고 어떤 걸 쓰든 **리빌드 범위를 좁게** 유지하는 게 성능의 8할이다.

Flutter 앱 개발이나 기존 앱 성능 개선이 필요하면 [Mobile App Development](/services/mobile-app)를 참고하면 된다. Flutter 위젯·상태 관리·배포까지 단계별 가이드는 [모바일 개발 교육](/education/mobile)에 있고, 관련해서 [Flutter로 갈까 네이티브로 갈까](/blog/flutter-vs-native-decision) 글도 참고할 만하다.
