-- Full Java Professor Lessons Part 3

INSERT INTO posts (
  kind, category, slug, title, excerpt, content_md, content_html, status, seo_title, seo_description, order_index, published_at, updated_at, created_at
) VALUES (
  'education',
  'java',
  'ch09-gui-basics-and-swing-components',
  '자바 GUI 기초: Swing 컴포넌트와 컨테이너 및 레이아웃',
  '윈도우 그래픽 데스크톱 창(Window)을 띄우고 버튼, 라벨, 텍스트 입력 칸을 배치하는 Swing 컴포넌트와 레이아웃 매니저(Layout Manager)를 익힙니다.',
  '사용자가 마우스와 키보드로 상호작용하는 윈도우 그래픽 화면을 만드는 **자바 GUI(Graphical User Interface) 스윙(Swing)** 프로그래밍을 배웁니다.

---

## 1. GUI Swing 용어 사전 (Glossary)

- **Container (컨테이너)**: 다른 GUI 컴포넌트 부품들을 화면 내에 탑재할 수 있는 창 그릇입니다. (예: `JFrame`, `JPanel`, `JDialog`)
- **Component (컴포넌트)**: 화면에 독립적으로 표시되는 시각적 부품 요소입니다. (예: `JButton`, `JLabel`, `JTextField`)
- **Layout Manager (레이아웃 매니저)**: 컨테이너 내부에서 컴포넌트들의 위치와 크기를 자동으로 배치해 주는 객체입니다. (`FlowLayout`, `BorderLayout`, `GridLayout`)

---

## 2. 주요 레이아웃 매니저 3종 비교

- **FlowLayout**: 컴포넌트를 왼쪽에서 오른쪽으로, 공간이 없으면 다음 줄로 배치하는 기본 레이아웃.
- **BorderLayout**: 컨테이너를 **동(East), 서(West), 남(South), 북(North), 중앙(Center)** 5개 구역으로 분할 배치.
- **GridLayout**: 컨테이너를 $N \times M$ 형태의 바둑판 모양 격자 구조로 균등 분할 배치.

---

## 3. Swing 윈도우 창 띄우기 실습 예제

```java
import javax.swing.*;
import java.awt.*;

public class MyFirstSwingFrame extends JFrame {
    public MyFirstSwingFrame() {
        setTitle("DAVHAVE GUI Swing 창");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // 창 닫기 시 프로세스 종료
        setLayout(new BorderLayout()); // 레이아웃 지정

        // 컴포넌트 생성 및 배치
        JLabel label = new JLabel("자바 Swing GUI 상단 제목", SwingConstants.CENTER);
        JButton btn = new JButton("클릭하세요");

        add(label, BorderLayout.NORTH);
        add(btn, BorderLayout.CENTER);

        setVisible(true); // 윈도우 창 화면 표시
    }

    public static void main(String[] args) {
        new MyFirstSwingFrame();
    }
}
```

---

## 4. 자주 묻는 질문 (Q&A)

**Q. 컴포넌트를 원하는 절대 좌표(x, y) 위치에 직접 배치하려면?**
A. `setLayout(null);` 로 레이아웃 매니저를 제거한 뒤, 각 컴포넌트의 `setBounds(x, y, width, height);` 메소드를 직접 호출하면 됩니다.
',
  '<p>사용자가 마우스와 키보드로 상호작용하는 윈도우 그래픽 화면을 만드는 <strong>자바 GUI(Graphical User Interface) 스윙(Swing)</strong> 프로그래밍을 배웁니다.</p>
<hr>
<h2>1. GUI Swing 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Container (컨테이너)</strong>: 다른 GUI 컴포넌트 부품들을 화면 내에 탑재할 수 있는 창 그릇입니다. (예: <code>JFrame</code>, <code>JPanel</code>, <code>JDialog</code>)</li>
<li><strong>Component (컴포넌트)</strong>: 화면에 독립적으로 표시되는 시각적 부품 요소입니다. (예: <code>JButton</code>, <code>JLabel</code>, <code>JTextField</code>)</li>
<li><strong>Layout Manager (레이아웃 매니저)</strong>: 컨테이너 내부에서 컴포넌트들의 위치와 크기를 자동으로 배치해 주는 객체입니다. (<code>FlowLayout</code>, <code>BorderLayout</code>, <code>GridLayout</code>)</li>
</ul>
<hr>
<h2>2. 주요 레이아웃 매니저 3종 비교</h2>
<ul>
<li><strong>FlowLayout</strong>: 컴포넌트를 왼쪽에서 오른쪽으로, 공간이 없으면 다음 줄로 배치하는 기본 레이아웃.</li>
<li><strong>BorderLayout</strong>: 컨테이너를 <strong>동(East), 서(West), 남(South), 북(North), 중앙(Center)</strong> 5개 구역으로 분할 배치.</li>
<li><strong>GridLayout</strong>: 컨테이너를 $N \times M$ 형태의 바둑판 모양 격자 구조로 균등 분할 배치.</li>
</ul>
<hr>
<h2>3. Swing 윈도우 창 띄우기 실습 예제</h2>
<pre><code class="language-java">import javax.swing.*;
import java.awt.*;

public class MyFirstSwingFrame extends JFrame {
    public MyFirstSwingFrame() {
        setTitle(&quot;DAVHAVE GUI Swing 창&quot;);
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // 창 닫기 시 프로세스 종료
        setLayout(new BorderLayout()); // 레이아웃 지정

        // 컴포넌트 생성 및 배치
        JLabel label = new JLabel(&quot;자바 Swing GUI 상단 제목&quot;, SwingConstants.CENTER);
        JButton btn = new JButton(&quot;클릭하세요&quot;);

        add(label, BorderLayout.NORTH);
        add(btn, BorderLayout.CENTER);

        setVisible(true); // 윈도우 창 화면 표시
    }

    public static void main(String[] args) {
        new MyFirstSwingFrame();
    }
}
</code></pre>
<hr>
<h2>4. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 컴포넌트를 원하는 절대 좌표(x, y) 위치에 직접 배치하려면?</strong>
A. <code>setLayout(null);</code> 로 레이아웃 매니저를 제거한 뒤, 각 컴포넌트의 <code>setBounds(x, y, width, height);</code> 메소드를 직접 호출하면 됩니다.</p>
',
  'published',
  '자바 GUI 프로그래밍 - Swing, JFrame, JPanel, Component 및 Layout Manager',
  '윈도우 그래픽 창을 띄우는 Swing 프로그래밍, JFrame, JPanel 컨테이너, 레이아웃 매니저(Flow, Border, Grid) 및 기본 GUI 컴포넌트 배치를 학습합니다.',
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
  'java',
  'ch10-gui-event-handling-model',
  '자바 GUI 이벤트 처리 모델 (Event Source, Listener, Object)',
  '버튼 클릭, 마우스 이동, 키보드 입력 등 사용자의 동작을 감지하여 실행되는 자바 GUI 이벤트 처리(Event Handling) 모델과 리스너 클래스를 익힙니다.',
  '사용자가 버튼을 누르거나 마우스를 움직이고 키보드를 칠 때 발생하는 동작을 감지하여 코드를 실행시키는 **이벤트 기반 프로그래밍(Event-Driven Programming)**을 학습합니다.

---

## 1. 이벤트 처리 모델 3대 요소 (Glossary)

- **Event Source (이벤트 소스)**: 사용자 동작으로 이벤트가 발생한 대상 컴포넌트 객체입니다. (예: 클릭된 `JButton`)
- **Event Object (이벤트 객체)**: 발생한 이벤트의 종류, 발생 시각, 마우스 좌표 등의 정보를 담고 있는 객체입니다. (예: `ActionEvent`, `MouseEvent`, `KeyEvent`)
- **Event Listener (이벤트 리스너)**: 이벤트를 수신하여 처리하는 인터페이스로, 개발자가 내부 메소드를 구현해야 합니다. (예: `ActionListener`)

---

## 2. 버튼 클릭 이벤트 연동 실습

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class EventHandlingFrame extends JFrame {
    private JLabel statusLabel;
    private int clickCount = 0;

    public EventHandlingFrame() {
        setTitle("이벤트 처리 실습");
        setSize(350, 150);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        JButton actionBtn = new JButton("카운트 증가 버튼");
        statusLabel = new JLabel("클릭 횟수: 0회");

        // 이벤트 소스에 리스너 등록 (익명 클래스 방식)
        actionBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                clickCount++;
                statusLabel.setText("클릭 횟수: " + clickCount + "회");
            }
        });

        add(actionBtn);
        add(statusLabel);
        setVisible(true);
    }

    public static void main(String[] args) {
        new EventHandlingFrame();
    }
}
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. 리스너(Listener)와 어댑터(Adapter) 클래스의 차이는 무엇인가요?**
A. 리스너는 인터페이스이므로 포함된 모든 메소드를 의무 구현해야 하지만, 어댑터 클래스는 리스너를 미리 빈 몸체로 구현해둔 추상 클래스이므로 **필요한 메소드만 선택 오버라이딩**할 수 있어 편합니다.
',
  '<p>사용자가 버튼을 누르거나 마우스를 움직이고 키보드를 칠 때 발생하는 동작을 감지하여 코드를 실행시키는 **이벤트 기반 프로그래밍(Event-Driven Programming)**을 학습합니다.</p>
<hr>
<h2>1. 이벤트 처리 모델 3대 요소 (Glossary)</h2>
<ul>
<li><strong>Event Source (이벤트 소스)</strong>: 사용자 동작으로 이벤트가 발생한 대상 컴포넌트 객체입니다. (예: 클릭된 <code>JButton</code>)</li>
<li><strong>Event Object (이벤트 객체)</strong>: 발생한 이벤트의 종류, 발생 시각, 마우스 좌표 등의 정보를 담고 있는 객체입니다. (예: <code>ActionEvent</code>, <code>MouseEvent</code>, <code>KeyEvent</code>)</li>
<li><strong>Event Listener (이벤트 리스너)</strong>: 이벤트를 수신하여 처리하는 인터페이스로, 개발자가 내부 메소드를 구현해야 합니다. (예: <code>ActionListener</code>)</li>
</ul>
<hr>
<h2>2. 버튼 클릭 이벤트 연동 실습</h2>
<pre><code class="language-java">import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class EventHandlingFrame extends JFrame {
    private JLabel statusLabel;
    private int clickCount = 0;

    public EventHandlingFrame() {
        setTitle(&quot;이벤트 처리 실습&quot;);
        setSize(350, 150);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        JButton actionBtn = new JButton(&quot;카운트 증가 버튼&quot;);
        statusLabel = new JLabel(&quot;클릭 횟수: 0회&quot;);

        // 이벤트 소스에 리스너 등록 (익명 클래스 방식)
        actionBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                clickCount++;
                statusLabel.setText(&quot;클릭 횟수: &quot; + clickCount + &quot;회&quot;);
            }
        });

        add(actionBtn);
        add(statusLabel);
        setVisible(true);
    }

    public static void main(String[] args) {
        new EventHandlingFrame();
    }
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. 리스너(Listener)와 어댑터(Adapter) 클래스의 차이는 무엇인가요?</strong>
A. 리스너는 인터페이스이므로 포함된 모든 메소드를 의무 구현해야 하지만, 어댑터 클래스는 리스너를 미리 빈 몸체로 구현해둔 추상 클래스이므로 <strong>필요한 메소드만 선택 오버라이딩</strong>할 수 있어 편합니다.</p>
',
  'published',
  '자바 GUI 이벤트 처리 - ActionListener, MouseListener, KeyListener & Adapter',
  '이벤트 기반 프로그래밍(Event-Driven), Event Source, Event Listener, 마우스/키보드 이벤트 처리 및 어댑터(Adapter) 클래스 활용법을 학습합니다.',
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
  'java',
  'ch11-swing-advanced-components-use',
  '고급 Swing 컴포넌트 활용 (JCheckBox, JRadioButton, JList, JComboBox)',
  '체크박스, 라디오 버튼, 드롭다운 콤보박스, 리스트 박스 및 여러 줄 입력 텍스트 영역 등 풍부한 GUI 컴포넌트와 팝업 대화상자를 다룹니다.',
  '실무 데스크톱 프로그램에서 널리 쓰이는 **다양한 고급 스윙(Swing) 컴포넌트**와 팝업 대화상자(**`JDialog`**)를 다룹니다.

---

## 1. 고급 컴포넌트 용어 사전 (Glossary)

- **JCheckBox**: 다중 선택(Multiple Choice)이 가능한 체크박스 컴포넌트입니다.
- **JRadioButton**: 여러 선택지 중 오직 **단 1개만 선택** 가능한 원형 라디오 버튼입니다. (`ButtonGroup`으로 묶음 필수)
- **JComboBox**: 클릭하면 아래로 선택 목록이 드롭다운(Drop-down)되는 컴포넌트입니다.
- **JTextArea**: 여러 줄의 텍스트를 입력 및 표시할 수 있는 대용량 입력 영역입니다. (`JScrollPane`으로 감싸기 필수)
- **JDialog**: 메인 윈도우 창 외에 알림이나 추가 입력을 받기 위해 떠오르는 팝업 창입니다.

---

## 2. 라디오 버튼과 콤보박스 활용 예제

```java
import javax.swing.*;
import java.awt.*;

public class AdvancedComponentsFrame extends JFrame {
    public AdvancedComponentsFrame() {
        setTitle("고급 Swing 컴포넌트");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        // 1. 라디오 버튼 그룹화
        JRadioButton r1 = new JRadioButton("남자");
        JRadioButton r2 = new JRadioButton("여자", true); // 기본 선택
        ButtonGroup group = new ButtonGroup();
        group.add(r1); group.add(r2);

        // 2. 드롭다운 콤보박스
        String[] cities = {"서울", "부산", "대구", "인천", "광주"};
        JComboBox<String> cityCombo = new JComboBox<>(cities);

        add(new JLabel("성별:")); add(r1); add(r2);
        add(new JLabel("거주지:")); add(cityCombo);

        setVisible(true);
    }

    public static void main(String[] args) {
        new AdvancedComponentsFrame();
    }
}
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `JTextArea`에 텍스트가 넘칠 때 스크롤바가 안 생기나요?**
A. `JTextArea` 자체에는 스크롤바가 없으므로 `JScrollPane scrollPane = new JScrollPane(textArea);` 형태로 스크롤 팬으로 감싸서 컨테이너에 배치해야 스크롤바가 생깁니다.
',
  '<p>실무 데스크톱 프로그램에서 널리 쓰이는 <strong>다양한 고급 스윙(Swing) 컴포넌트</strong>와 팝업 대화상자(<strong><code>JDialog</code></strong>)를 다룹니다.</p>
<hr>
<h2>1. 고급 컴포넌트 용어 사전 (Glossary)</h2>
<ul>
<li><strong>JCheckBox</strong>: 다중 선택(Multiple Choice)이 가능한 체크박스 컴포넌트입니다.</li>
<li><strong>JRadioButton</strong>: 여러 선택지 중 오직 <strong>단 1개만 선택</strong> 가능한 원형 라디오 버튼입니다. (<code>ButtonGroup</code>으로 묶음 필수)</li>
<li><strong>JComboBox</strong>: 클릭하면 아래로 선택 목록이 드롭다운(Drop-down)되는 컴포넌트입니다.</li>
<li><strong>JTextArea</strong>: 여러 줄의 텍스트를 입력 및 표시할 수 있는 대용량 입력 영역입니다. (<code>JScrollPane</code>으로 감싸기 필수)</li>
<li><strong>JDialog</strong>: 메인 윈도우 창 외에 알림이나 추가 입력을 받기 위해 떠오르는 팝업 창입니다.</li>
</ul>
<hr>
<h2>2. 라디오 버튼과 콤보박스 활용 예제</h2>
<pre><code class="language-java">import javax.swing.*;
import java.awt.*;

public class AdvancedComponentsFrame extends JFrame {
    public AdvancedComponentsFrame() {
        setTitle(&quot;고급 Swing 컴포넌트&quot;);
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        // 1. 라디오 버튼 그룹화
        JRadioButton r1 = new JRadioButton(&quot;남자&quot;);
        JRadioButton r2 = new JRadioButton(&quot;여자&quot;, true); // 기본 선택
        ButtonGroup group = new ButtonGroup();
        group.add(r1); group.add(r2);

        // 2. 드롭다운 콤보박스
        String[] cities = {&quot;서울&quot;, &quot;부산&quot;, &quot;대구&quot;, &quot;인천&quot;, &quot;광주&quot;};
        JComboBox&lt;String&gt; cityCombo = new JComboBox&lt;&gt;(cities);

        add(new JLabel(&quot;성별:&quot;)); add(r1); add(r2);
        add(new JLabel(&quot;거주지:&quot;)); add(cityCombo);

        setVisible(true);
    }

    public static void main(String[] args) {
        new AdvancedComponentsFrame();
    }
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>JTextArea</code>에 텍스트가 넘칠 때 스크롤바가 안 생기나요?</strong>
A. <code>JTextArea</code> 자체에는 스크롤바가 없으므로 <code>JScrollPane scrollPane = new JScrollPane(textArea);</code> 형태로 스크롤 팬으로 감싸서 컨테이너에 배치해야 스크롤바가 생깁니다.</p>
',
  'published',
  '자바 Swing 컴포넌트 - JTextField, JTextArea, JCheckBox, JComboBox & JDialog',
  '다양한 Swing 컴포넌트(JTextField, JTextArea, JCheckBox, JRadioButton, ButtonGroup, JComboBox, JList)의 활용 및 대화상자(JDialog) 구축을 배웁니다.',
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
  'java',
  'ch12-graphics-paint-and-drawing',
  '그래픽과 칠하기 (Graphics, Color, Font 및 이미지)',
  '패널에 선, 원, 사각형 도형을 그리거나 이미지를 렌더링하는 `paintComponent()`, Graphics 객체 및 그래픽 처리 기법을 배웁니다.',
  '컴포넌트 표면에 선, 원, 사각형, 텍스트, 이미지를 커스텀으로 직접 그려 넣는 **자바 2D 그래픽(Graphics)** 처리 기법을 다룹니다.

---

## 1. 그래픽 처리 용어 사전 (Glossary)

- **Graphics Class**: 선, 도형, 텍스트, 이미지를 그리는 그리기 도구 패키지 클래스입니다.
- **`paintComponent(Graphics g)`**: Swing 컴포넌트가 화면에 다시 그려져야 할 때 JVM이 자동 호출해 주는 커스텀 그래픽 메소드입니다.
- **repaint()**: 화면 변경이 일어났을 때 컴포넌트의 `paintComponent()`를 강제로 다시 호출하도록 요청하는 메소드입니다.

---

## 2. 커스텀 그래픽 패널 구현 예제

```java
import javax.swing.*;
import java.awt.*;

class CustomPaintPanel extends JPanel {
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g); // 기존 배경 칠하기

        // 1. 빨간색 직선 그리기
        g.setColor(Color.RED);
        g.drawLine(20, 20, 200, 20);

        // 2. 파란색 채워진 사각형 그리기
        g.setColor(Color.BLUE);
        g.fillRect(20, 50, 100, 60);

        // 3. 초록색 원(타원) 그리기
        g.setColor(Color.GREEN);
        g.fillOval(150, 50, 80, 80);

        // 4. 커스텀 폰트 텍스트 출력
        g.setColor(Color.BLACK);
        g.setFont(new Font("Pretendard", Font.BOLD, 18));
        g.drawString("DAVHAVE Java 2D Graphics", 20, 180);
    }
}

public class GraphicFrame extends JFrame {
    public GraphicFrame() {
        setTitle("자바 2D 그래픽 실습");
        setSize(320, 250);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        add(new CustomPaintPanel());
        setVisible(true);
    }
    public static void main(String[] args) { new GraphicFrame(); }
}
```

---

## 3. 자주 묻는 질문 (Q&A)

**Q. `paintComponent()` 메소드를 개발자가 코드에서 직접 `panel.paintComponent(g)` 로 부르면 안 되나요?**
A. 안 됩니다! 그래픽 렌더링 스레드의 제어권은 JVM에 있으므로, 화면을 다시 그리려면 개발자는 반드시 `panel.repaint()` 메소드를 호출해야 안전하게 갱신됩니다.
',
  '<p>컴포넌트 표면에 선, 원, 사각형, 텍스트, 이미지를 커스텀으로 직접 그려 넣는 <strong>자바 2D 그래픽(Graphics)</strong> 처리 기법을 다룹니다.</p>
<hr>
<h2>1. 그래픽 처리 용어 사전 (Glossary)</h2>
<ul>
<li><strong>Graphics Class</strong>: 선, 도형, 텍스트, 이미지를 그리는 그리기 도구 패키지 클래스입니다.</li>
<li><strong><code>paintComponent(Graphics g)</code></strong>: Swing 컴포넌트가 화면에 다시 그려져야 할 때 JVM이 자동 호출해 주는 커스텀 그래픽 메소드입니다.</li>
<li><strong>repaint()</strong>: 화면 변경이 일어났을 때 컴포넌트의 <code>paintComponent()</code>를 강제로 다시 호출하도록 요청하는 메소드입니다.</li>
</ul>
<hr>
<h2>2. 커스텀 그래픽 패널 구현 예제</h2>
<pre><code class="language-java">import javax.swing.*;
import java.awt.*;

class CustomPaintPanel extends JPanel {
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g); // 기존 배경 칠하기

        // 1. 빨간색 직선 그리기
        g.setColor(Color.RED);
        g.drawLine(20, 20, 200, 20);

        // 2. 파란색 채워진 사각형 그리기
        g.setColor(Color.BLUE);
        g.fillRect(20, 50, 100, 60);

        // 3. 초록색 원(타원) 그리기
        g.setColor(Color.GREEN);
        g.fillOval(150, 50, 80, 80);

        // 4. 커스텀 폰트 텍스트 출력
        g.setColor(Color.BLACK);
        g.setFont(new Font(&quot;Pretendard&quot;, Font.BOLD, 18));
        g.drawString(&quot;DAVHAVE Java 2D Graphics&quot;, 20, 180);
    }
}

public class GraphicFrame extends JFrame {
    public GraphicFrame() {
        setTitle(&quot;자바 2D 그래픽 실습&quot;);
        setSize(320, 250);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        add(new CustomPaintPanel());
        setVisible(true);
    }
    public static void main(String[] args) { new GraphicFrame(); }
}
</code></pre>
<hr>
<h2>3. 자주 묻는 질문 (Q&amp;A)</h2>
<p><strong>Q. <code>paintComponent()</code> 메소드를 개발자가 코드에서 직접 <code>panel.paintComponent(g)</code> 로 부르면 안 되나요?</strong>
A. 안 됩니다! 그래픽 렌더링 스레드의 제어권은 JVM에 있으므로, 화면을 다시 그리려면 개발자는 반드시 <code>panel.repaint()</code> 메소드를 호출해야 안전하게 갱신됩니다.</p>
',
  'published',
  '자바 Swing 그래픽 - Graphics, paintComponent(), Color, Font & drawImage',
  '화면에 직접 도형, 선, 텍스트 및 이미지를 그리는 paintComponent() 메소드 오버라이딩, Graphics 객체, Color, Font 및 이미지 출력을 다룹니다.',
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
