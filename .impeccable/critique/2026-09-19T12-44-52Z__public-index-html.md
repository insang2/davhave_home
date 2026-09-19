---
target_identity: "file:/Users/islee/Desktop/devhave/davhave_home/public/index.html"
target_fingerprint: "sha256:f7ee16517d8ca3c020869da2f297b4a09cad9793d7170ec33fb7700ce6b1d040"
target_path: /Users/islee/Desktop/devhave/davhave_home/public/index.html
timestamp: 2026-09-19T12-44-52Z
slug: public-index-html
---
Method: dual-agent (A: 742c2542-b394-4801-9da1-09efff0a72e6 · B: 77174b5e-4a85-4436-861c-7be3e5fe6f30)

# Design Critique: DAVHAVE Landing Page (`public/index.html`)

## Design Health Score

| # | Heuristic | Score (0–4) | Key Issue / Evidence |
|---|-----------|:-----------:|----------------------|
| **1** | **Visibility of System Status** | **3** | Clean micro-feedback on hover and scroll; fixed island nav lacks scrollspy active indicator; PWA popup auto-fires at 2s without user initiation. |
| **2** | **Match System & Real World** | **3** | Plain Korean language used; severe domain dissonance between industrial civil engineering copy ("Dow Chemical 6대 계산기") and consumer wellness copy ("긍정 메시지와 멘탈 루틴"). |
| **3** | **User Control & Freedom** | **3** | Smooth anchor scrolling; easily dismissible mobile drawer; but internal hubs (`/projects`, `/education`) navigate away without breadcrumb reassurance. |
| **4** | **Consistency & Standards** | **2** | Critical mental model conflict: "Projects" vs. "Portfolio" coexist as separate competing destinations in nav and hero CTAs. Card action labels are inconsistent. |
| **5** | **Error Prevention** | **3** | Clean static markup; triggering PWA install on unsupported browser/iOS fires a native blocking `alert()`. |
| **6** | **Recognition Rather Than Recall** | **3** | Good icon badging and tech chips; but forcing users to distinguish between `#portfolio` and `/projects` requires high cognitive recall. |
| **7** | **Flexibility & Efficiency of Use** | **n/a** | *Persuade / Landing surface exception*: Accelerator shortcuts, bulk operations, and macros are not applicable to a public marketing showcase. |
| **8** | **Aesthetic & Minimalist Design** | **2** | Severe cognitive clutter: 9 nav links, 6 services, 4 stack cards, 4 portfolio cards, 6 philosophy cards, 5 FAQs, and a 2s auto-firing PWA banner. Hero code terminal is pure decorative noise. |
| **9** | **Error Diagnosis & Recovery** | **3** | Low error surface; iOS fallback alert gives instructional next steps though delivered through a crude modal alert. |
| **10** | **Help and Documentation** | **n/a** | *Persuade / Landing surface exception*: FAQ section provides marketing clarifications; deep documentation help systems are n/a. |
| **Total** | | **22 / 32** | **Acceptable (68.8%)** |

## Design Specificity Verdict

**Verdict: Category-Interchangeable Solo Dev Template Masking Authentic Industrial Engineering Gold.**

- **LLM Assessment**: The landing page suffers from a fundamental identity crisis. While `PRODUCT.md` and `DESIGN.md` define DAVHAVE as *"The Precision Engineering Laboratory"* with 0ms edge architecture and Dow Chemical civil engineering engines, the actual landing page leads with the most oversaturated cliché in the developer portfolio playbook: a fake macOS terminal window (`davhave.config.ts`) with colored traffic lights displaying trivial JSON (`mode: "solo"`). The page tries to be five conflicting businesses at once (B2B engineering lab, solo freelancer, consumer wellness app publisher, local tax accountant agency, free coding academy), while completely hiding the paper-grade, 100% ink-black research lab aesthetic promised in the design system.
- **Deterministic Scan**: Detected **18 active anti-patterns** and **30 advisory notices**:
  - `gradient-text` (9 occurrences): Multi-stop gradient text (`.ink`) on every single section header, a signature AI template tell that harms readability.
  - `dark-glow` (5 occurrences): Zero-offset diffuse halo shadows on buttons and nav pills, violating DESIGN.md's tactile hard-shadow rule.
  - `hero-eyebrow-chip` (1 occurrence): Formulaic AI SaaS eyebrow chip above H1.
  - `pulsing-dot` (1 occurrence): Simulated live activity dot on static content.
  - `design-system-font-size` (18 occurrences): Widespread font scale drift outside the 5-tier typography ramp.

## Overall Impression
Technically robust and lightning fast, but commercially self-sabotaging. DAVHAVE has built extraordinarily rare and valuable engineering artifacts (KCT Dow calculation engine, ASTM specimen 3D printing & DIC analysis), yet hides them behind a generic dark-mode solo developer template with fake code windows and diffuse orange glows.

## What's Working
1. **Unassailable Industrial Domain Proof**: The KCT B2B engineering platform card is an elite differentiator that separates DAVHAVE from 99.9% of software agencies.
2. **True 0ms Edge Performance Discipline**: Zero framework bloat, sub-50ms TTFB, preloaded typography, and vanilla DOM events delivering on the Cloudflare Workers edge promise.
3. **Refined Micro-Interactions and CSS Craft**: Custom SVG symbols, concentric bezel geometry (`.bezel-inner`), and tactile hover physics show high frontend craft.

## Priority Issues

### [P0] Severe Positioning Schizophrenia & "Solo Dev" Value Demotion
- **Why it matters**: Enterprise B2B clients looking for engineering software are repelled by `mode: "solo"`, consumer mental health apps, and "283 free coding lessons" in the same view.
- **Fix**: Position DAVHAVE unambiguously as an elite **"Precision Engineering Studio"**. Elevate KCT and high-performance edge architecture to the hero. Move mass tutorials to `/education`, and frame Oscar Lee as Principal / Lead Architect rather than a "solo developer."
- **Suggested Command**: `$impeccable shape` / `$impeccable clarify`

### [P1] The Toy Terminal Hero Anti-Pattern
- **Why it matters**: The fake macOS terminal window with colored traffic dots displaying trivial JSON directly contradicts the "Precision Engineering" brand commitment.
- **Fix**: Replace the fake terminal with a **live interactive precision instrument**: an interactive wind-load bite calculator preview, an ASTM specimen tensile stress-strain visualizer, or a live edge telemetry latency monitor (<20ms global edge TTFB).
- **Suggested Command**: `$impeccable bolder` / `$impeccable overdrive`

### [P1] Pervasive AI Template Tells (Gradient Text & Dark Halo Glows)
- **Why it matters**: 9 gradient headings (`.ink`) and diffuse orange glow shadows violate DESIGN.md's *"Zero Ambiguity & Ink-Black Rule"*, making the site look like an AI-generated SaaS template.
- **Fix**: Replace all multi-stop gradient text on headings with crisp, solid typography (`#f2ede4` in dark mode, `#000000` in lab mode). Replace diffuse button glows with crisp 2px/3px hard shadows (`box-shadow: 3px 3px 0px #0f172a`).
- **Suggested Command**: `$impeccable polish` / `$impeccable typeset`

### [P1] Crippling Choice Overload & IA Duplication ("Projects" vs. "Portfolio")
- **Why it matters**: 9 navigation items and 7 hero action targets create severe cognitive clutter. Coexisting `#portfolio` and `/projects` confuses visitors.
- **Fix**: Consolidate navigation to **4–5 items**: `Studio`, `Platforms`, `Services`, `Lab`, `Contact`. Unify "Projects" and "Portfolio" into a single authoritative case study hub. Restrict hero CTAs to 1 primary ("Explore Engineering Platforms") and 1 secondary ("Technical Consultation").
- **Suggested Command**: `$impeccable distill` / `$impeccable layout`

### [P2] Complete Absence of the White Paper "Laboratory" Design Language
- **Why it matters**: DESIGN.md defines a dual-domain tension between the dark Edge Studio and the paper-grade 100% ink-black Research Lab. The landing page is 100% dark mode, failing to showcase its most distinctive aesthetic weapon.
- **Fix**: Introduce a stark, high-contrast **"Laboratory Section"** on the landing page featuring a crisp white background (`#ffffff`), 100% ink black (`#000000`) typography, 3-line IEEE tables, and terracotta (`#b43403`) accents to visually prove the engineering rigor.
- **Suggested Command**: `$impeccable typeset` / `$impeccable bolder`

## Persona Red Flags
- **Min-ho (Corporate B2B Decision Maker)**: Sees `mode: "solo"` and a personal Gmail address (`useapp.davhave@gmail.com`) rather than an enterprise intake form, causing high vendor risk concern.
- **Ji-eun (Senior Edge/AI Architect)**: Sees trivial JSON object assignment instead of architectural DAGs, distributed edge latency charts, or real-time benchmarks.
- **Alex (Executive Recruiter / Tech Scout)**: Gets lost in 9 nav items and the arbitrary distinction between "Projects" and "Portfolio", missing the 1-sentence statement of business impact.
