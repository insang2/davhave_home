/**
 * DAVHAVE macOS 27 Edition (Pilot Experience)
 * Pixel-faithful Liquid Glass macOS Simulation with DAVHAVE Engineering Suite.
 */

export function renderMacOsPage() {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>macOS 27 (DAVHAVE Edition) — Oscar Lee</title>
  <meta name="description" content="DAVHAVE Studio macOS 27 Web Desktop Experience — 0ms Edge Architecture & Industrial Engineering Suite." />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <meta name="theme-color" content="#0d1117" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet" />

  <style>
    /* ─── Global Reset & Variables ─── */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-user-select: none;
      user-select: none;
    }

    :root {
      --font-system: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Inter", "Pretendard", sans-serif;
      --font-mono: "JetBrains Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      --menubar-height: 28px;
      --accent-color: #007aff;
      --accent-orange: #ff6b35;
      --glass-bg: rgba(26, 30, 38, 0.65);
      --glass-border: rgba(255, 255, 255, 0.16);
      --glass-glow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
      --shadow-window: 0 25px 60px -10px rgba(0, 0, 0, 0.65), 0 0 1px rgba(255, 255, 255, 0.2);
      --shadow-window-active: 0 35px 80px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.28);
      --traffic-close: #ff5f56;
      --traffic-min: #ffbd2e;
      --traffic-max: #27c93f;
    }

    html, body {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      font-family: var(--font-system);
      font-size: 13px;
      color: #f5f5f7;
      background-color: #000;
      position: fixed;
    }

    /* ─── Wallpaper Layer ─── */
    #desktop-wallpaper {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      transition: background-image 0.5s ease-in-out, filter 0.3s ease;
      z-index: 0;
    }

    /* Wallpaper Themes */
    .wp-sequoia {
      background: radial-gradient(circle at 20% 20%, #4a154b 0%, #1a0826 40%, #080310 100%),
                  radial-gradient(circle at 80% 70%, #d9531e 0%, #852d11 35%, transparent 70%),
                  linear-gradient(135deg, #0d0914 0%, #1d122b 50%, #2b1126 100%);
      background-blend-mode: screen, normal, normal;
    }
    .wp-void {
      background: radial-gradient(circle at 50% 40%, #152238 0%, #060a12 60%, #020408 100%);
    }
    .wp-blueprint {
      background-color: #0c1829;
      background-image:
        linear-gradient(rgba(0, 168, 255, 0.12) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 168, 255, 0.12) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(15, 45, 107, 0.7) 0%, #070e18 80%);
      background-size: 40px 40px, 40px 40px, 100% 100%;
    }
    .wp-aurora {
      background: linear-gradient(135deg, #09121d 0%, #0d2735 40%, #153c3e 70%, #201a35 100%),
                  radial-gradient(circle at 70% 30%, rgba(46, 213, 115, 0.35) 0%, transparent 50%),
                  radial-gradient(circle at 30% 60%, rgba(123, 31, 162, 0.45) 0%, transparent 50%);
    }

    /* ─── Top Menu Bar (Liquid Glass) ─── */
    #menubar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: var(--menubar-height);
      background: rgba(18, 20, 26, 0.45);
      backdrop-filter: blur(28px) saturate(190%);
      -webkit-backdrop-filter: blur(28px) saturate(190%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 12px;
      z-index: 10000;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    .menu-left, .menu-right {
      display: flex;
      align-items: center;
      gap: 2px;
      height: 100%;
    }

    .menu-item {
      padding: 0 10px;
      height: 22px;
      display: inline-flex;
      align-items: center;
      border-radius: 4px;
      cursor: default;
      font-weight: 500;
      font-size: 13px;
      color: rgba(255, 255, 255, 0.92);
      transition: background 0.15s ease;
      position: relative;
    }

    .menu-item:hover, .menu-item.active {
      background: rgba(255, 255, 255, 0.18);
    }

    .menu-apple {
      font-size: 15px;
      font-weight: 700;
      padding: 0 8px;
    }

    .menu-appname {
      font-weight: 700;
      color: #fff;
    }

    /* Dropdown Menus */
    .menu-dropdown {
      position: absolute;
      top: 26px;
      left: 0;
      background: rgba(28, 32, 42, 0.85);
      backdrop-filter: blur(35px) saturate(200%);
      -webkit-backdrop-filter: blur(35px) saturate(200%);
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 8px;
      padding: 5px;
      min-width: 210px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.1);
      display: none;
      flex-direction: column;
      z-index: 10001;
    }

    .menu-dropdown.show {
      display: flex;
      animation: menuFadeIn 0.12s ease-out;
    }

    @keyframes menuFadeIn {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .dropdown-row {
      padding: 4px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      font-size: 12.5px;
      color: #e5e5ea;
      cursor: default;
    }

    .dropdown-row:hover {
      background: var(--accent-color);
      color: #fff;
    }

    .dropdown-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.12);
      margin: 4px 2px;
    }

    .dropdown-shortcut {
      font-size: 11px;
      opacity: 0.6;
      margin-left: 12px;
    }

    /* Menu Right Icons */
    .status-icon {
      padding: 0 6px;
      height: 22px;
      display: inline-flex;
      align-items: center;
      border-radius: 4px;
      cursor: default;
    }

    .status-icon:hover {
      background: rgba(255, 255, 255, 0.18);
    }

    .status-clock {
      padding: 0 8px;
      font-variant-numeric: tabular-nums;
      font-weight: 500;
    }

    /* ─── Desktop Workspace & Icons ─── */
    #desktop {
      position: absolute;
      top: var(--menubar-height);
      left: 0;
      right: 0;
      bottom: 84px;
      padding: 16px;
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: repeat(auto-fill, 96px);
      grid-auto-columns: 88px;
      gap: 16px 12px;
      align-content: start;
      justify-content: start;
      z-index: 1;
    }

    .desktop-icon {
      width: 84px;
      height: 92px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      cursor: default;
      padding: 4px;
      transition: background 0.15s ease;
      text-align: center;
    }

    .desktop-icon:hover {
      background: rgba(255, 255, 255, 0.12);
    }

    .desktop-icon.selected {
      background: rgba(0, 122, 255, 0.35);
      border: 1px solid rgba(0, 122, 255, 0.6);
    }

    .desktop-icon-img {
      width: 48px;
      height: 48px;
      margin-bottom: 6px;
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.35));
      transition: transform 0.15s ease;
    }

    .desktop-icon:hover .desktop-icon-img {
      transform: scale(1.04);
    }

    .desktop-icon-label {
      font-size: 11.5px;
      font-weight: 500;
      color: #fff;
      line-height: 1.25;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9), 0 0 6px rgba(0, 0, 0, 0.7);
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Selection Marquee */
    #selection-box {
      position: absolute;
      border: 1px solid rgba(0, 122, 255, 0.8);
      background: rgba(0, 122, 255, 0.2);
      pointer-events: none;
      display: none;
      z-index: 2;
    }

    /* ─── Bottom Dock (Liquid Glass & Magnification) ─── */
    #dock-container {
      position: absolute;
      bottom: 12px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      z-index: 9999;
      pointer-events: none;
    }

    #dock {
      pointer-events: auto;
      height: 64px;
      padding: 0 12px;
      background: rgba(22, 26, 36, 0.45);
      backdrop-filter: blur(35px) saturate(210%);
      -webkit-backdrop-filter: blur(35px) saturate(210%);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.35);
      border-radius: 20px;
      display: flex;
      align-items: flex-end;
      gap: 10px;
      padding-bottom: 7px;
      transform-origin: bottom center;
      transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .dock-item {
      position: relative;
      width: 48px;
      height: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: width 0.15s ease, height 0.15s ease, transform 0.15s ease;
      transform-origin: bottom center;
    }

    .dock-icon {
      width: 100%;
      height: 100%;
      border-radius: 12px;
      filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4));
      pointer-events: none;
    }

    .dock-dot {
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.85);
      border-radius: 50%;
      margin-top: 3px;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .dock-item.running .dock-dot {
      opacity: 1;
    }

    .dock-separator {
      width: 1px;
      height: 38px;
      background: rgba(255, 255, 255, 0.18);
      margin: 0 4px 6px 4px;
    }

    /* Dock Tooltip */
    .dock-tooltip {
      position: absolute;
      top: -34px;
      background: rgba(24, 28, 38, 0.88);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      padding: 3px 10px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 500;
      color: #fff;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transform: translateY(4px);
      transition: opacity 0.15s ease, transform 0.15s ease;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    }

    .dock-item:hover .dock-tooltip {
      opacity: 1;
      transform: translateY(0);
    }

    /* Dock Bounce Animation */
    @keyframes dockBounce {
      0%, 100% { transform: translateY(0); }
      35% { transform: translateY(-26px); }
      60% { transform: translateY(-12px); }
      80% { transform: translateY(-4px); }
    }

    .dock-bounce {
      animation: dockBounce 0.65s cubic-bezier(0.28, 0.84, 0.42, 1);
    }

    /* ─── Window System ─── */
    .app-window {
      position: absolute;
      border-radius: 12px;
      background: rgba(28, 33, 44, 0.78);
      backdrop-filter: blur(40px) saturate(190%);
      -webkit-backdrop-filter: blur(40px) saturate(190%);
      border: 1px solid var(--glass-border);
      box-shadow: var(--shadow-window);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-width: 320px;
      min-height: 220px;
      opacity: 0;
      transform: scale(0.96) translateY(12px);
      transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                  box-shadow 0.2s ease;
      z-index: 10;
    }

    .app-window.active {
      box-shadow: var(--shadow-window-active);
      border-color: rgba(255, 255, 255, 0.25);
    }

    .app-window.open {
      opacity: 1;
      transform: scale(1) translateY(0);
    }

    .app-window.minimized {
      opacity: 0;
      transform: scale(0.3) translateY(200px);
      pointer-events: none;
    }

    /* Window Titlebar */
    .window-titlebar {
      height: 38px;
      background: rgba(20, 24, 32, 0.5);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 12px;
      cursor: grab;
      position: relative;
    }

    .window-titlebar:active {
      cursor: grabbing;
    }

    .traffic-lights {
      display: flex;
      align-items: center;
      gap: 8px;
      z-index: 2;
    }

    .traffic-btn {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .traffic-btn::after {
      content: '';
      font-size: 8px;
      color: rgba(0, 0, 0, 0.7);
      opacity: 0;
      transition: opacity 0.15s ease;
      font-weight: 800;
    }

    .traffic-lights:hover .traffic-btn::after {
      opacity: 1;
    }

    .btn-close { background: var(--traffic-close); }
    .btn-close::after { content: '✕'; font-size: 7px; }
    .btn-min { background: var(--traffic-min); }
    .btn-min::after { content: '−'; font-size: 8px; }
    .btn-max { background: var(--traffic-max); }
    .btn-max::after { content: '+'; font-size: 8px; }

    .window-title {
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      font-size: 13px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.88);
      pointer-events: none;
    }

    .window-actions {
      display: flex;
      align-items: center;
      gap: 6px;
      z-index: 2;
    }

    /* Window Body */
    .window-body {
      flex: 1;
      overflow: auto;
      padding: 16px;
      position: relative;
      color: #e2e8f0;
      font-size: 13px;
    }

    /* Window Resize Handles */
    .resize-handle {
      position: absolute;
      z-index: 5;
    }
    .resize-handle-r { top: 0; right: 0; width: 6px; height: 100%; cursor: ew-resize; }
    .resize-handle-b { bottom: 0; left: 0; height: 6px; width: 100%; cursor: ns-resize; }
    .resize-handle-br { bottom: 0; right: 0; width: 14px; height: 14px; cursor: nwse-resize; }

    /* ─── App 1: KCT Silicone Calculator ─── */
    .calc-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .calc-card {
      background: rgba(15, 20, 28, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 14px;
    }
    .calc-title {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--accent-orange);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .form-group {
      margin-bottom: 10px;
    }
    .form-label {
      display: block;
      font-size: 11px;
      color: #94a3b8;
      margin-bottom: 4px;
    }
    .form-input {
      width: 100%;
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 6px;
      padding: 6px 10px;
      color: #fff;
      font-family: var(--font-mono);
      font-size: 12px;
      outline: none;
      transition: border-color 0.15s;
    }
    .form-input:focus {
      border-color: var(--accent-color);
      box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.25);
    }
    .res-box {
      background: rgba(16, 24, 40, 0.85);
      border: 1px solid rgba(0, 168, 255, 0.3);
      border-radius: 6px;
      padding: 12px;
      margin-top: 10px;
    }
    .res-metric {
      display: flex;
      justify-content: space-between;
      margin-bottom: 6px;
      font-size: 12px;
    }
    .res-val {
      font-family: var(--font-mono);
      font-weight: 700;
      color: #38bdf8;
    }
    .res-val.highlight {
      font-size: 16px;
      color: #4ade80;
    }

    /* ─── App 2: ASTM Specimen Lab ─── */
    .specimen-canvas-wrap {
      background: #070b12;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      padding: 12px;
      text-align: center;
      margin-bottom: 12px;
    }
    .specimen-types {
      display: flex;
      gap: 6px;
      margin-bottom: 12px;
      overflow-x: auto;
      padding-bottom: 4px;
    }
    .specimen-chip {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 11px;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s;
    }
    .specimen-chip:hover, .specimen-chip.active {
      background: var(--accent-color);
      border-color: var(--accent-color);
      color: #fff;
    }

    /* ─── App 3: Terminal (davhave-cli) ─── */
    .terminal-body {
      background: #090c10 !important;
      font-family: var(--font-mono) !important;
      font-size: 12px !important;
      line-height: 1.6;
      padding: 12px !important;
      color: #d1d5db;
    }
    .terminal-output {
      margin-bottom: 8px;
      white-space: pre-wrap;
    }
    .terminal-prompt-line {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .prompt-label {
      color: #4ade80;
      font-weight: 700;
    }
    .terminal-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      color: #fff;
      font-family: var(--font-mono);
      font-size: 12px;
      caret-color: #38bdf8;
    }

    /* ─── App 4: Notes (Insights) ─── */
    .notes-layout {
      display: flex;
      height: 100%;
      margin: -16px;
    }
    .notes-sidebar {
      width: 200px;
      background: rgba(20, 24, 32, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.08);
      padding: 10px;
      overflow-y: auto;
    }
    .notes-item {
      padding: 8px 10px;
      border-radius: 6px;
      cursor: pointer;
      margin-bottom: 4px;
      transition: background 0.15s;
    }
    .notes-item:hover, .notes-item.active {
      background: rgba(255, 255, 255, 0.12);
    }
    .notes-item.active {
      border-left: 3px solid var(--accent-color);
    }
    .notes-item-title {
      font-size: 12px;
      font-weight: 600;
      color: #fff;
      margin-bottom: 2px;
    }
    .notes-item-date {
      font-size: 10px;
      color: #94a3b8;
    }
    .notes-content {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      line-height: 1.7;
    }

    /* ─── App 5: System Settings ─── */
    .settings-section {
      margin-bottom: 20px;
    }
    .settings-title {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #94a3b8;
      margin-bottom: 8px;
    }
    .wp-thumbnails {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
    .wp-thumb {
      aspect-ratio: 16/10;
      border-radius: 8px;
      border: 2px solid transparent;
      cursor: pointer;
      transition: all 0.2s;
      position: relative;
      overflow: hidden;
    }
    .wp-thumb:hover {
      transform: translateY(-2px);
    }
    .wp-thumb.active {
      border-color: var(--accent-color);
      box-shadow: 0 0 12px rgba(0, 122, 255, 0.5);
    }
    .wp-thumb span {
      position: absolute;
      bottom: 4px;
      left: 6px;
      font-size: 10px;
      font-weight: 600;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    }

    /* ─── Spotlight Search Modal ─── */
    #spotlight-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding-top: 15vh;
      z-index: 20000;
    }
    #spotlight-overlay.show {
      display: flex;
    }
    #spotlight-box {
      width: 580px;
      max-width: 90vw;
      background: rgba(30, 35, 48, 0.88);
      backdrop-filter: blur(40px) saturate(200%);
      -webkit-backdrop-filter: blur(40px) saturate(200%);
      border: 1px solid rgba(255, 255, 255, 0.22);
      border-radius: 14px;
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.3);
      overflow: hidden;
      animation: spotIn 0.15s ease-out;
    }
    @keyframes spotIn {
      from { opacity: 0; transform: scale(0.97); }
      to { opacity: 1; transform: scale(1); }
    }
    .spotlight-input-row {
      display: flex;
      align-items: center;
      padding: 14px 16px;
      gap: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .spotlight-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      font-size: 18px;
      color: #fff;
      font-family: var(--font-system);
    }
    .spotlight-results {
      max-height: 320px;
      overflow-y: auto;
      padding: 6px;
    }
    .spotlight-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      border-radius: 8px;
      cursor: pointer;
      color: #e2e8f0;
      font-size: 13px;
    }
    .spotlight-item:hover, .spotlight-item.active {
      background: var(--accent-color);
      color: #fff;
    }

    /* ─── Control Center ─── */
    #control-center {
      position: absolute;
      top: 34px;
      right: 12px;
      width: 300px;
      background: rgba(28, 33, 44, 0.88);
      backdrop-filter: blur(40px) saturate(200%);
      -webkit-backdrop-filter: blur(40px) saturate(200%);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
      padding: 14px;
      display: none;
      flex-direction: column;
      gap: 12px;
      z-index: 10005;
      animation: menuFadeIn 0.15s ease-out;
    }
    #control-center.show {
      display: flex;
    }
    .cc-row {
      display: flex;
      gap: 10px;
    }
    .cc-card {
      flex: 1;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .cc-icon-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--accent-color);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
    .cc-slider-wrap {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 12px;
    }
    .cc-slider-label {
      font-size: 11px;
      color: #94a3b8;
      margin-bottom: 6px;
      display: flex;
      justify-content: space-between;
    }
    .cc-slider {
      width: 100%;
      -webkit-appearance: none;
      height: 18px;
      border-radius: 9px;
      background: rgba(0, 0, 0, 0.4);
      outline: none;
    }
    .cc-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #fff;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    }

    /* ─── Mobile Fallback Banner ─── */
    #mobile-notice {
      display: none;
      position: absolute;
      top: 34px;
      left: 12px;
      right: 12px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid rgba(255, 107, 53, 0.5);
      padding: 10px 14px;
      border-radius: 10px;
      z-index: 10002;
      font-size: 12px;
      color: #f8fafc;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    }
    @media (max-width: 768px) {
      #mobile-notice {
        display: flex;
      }
      #dock {
        height: 56px;
        padding-bottom: 5px;
      }
      .dock-item {
        width: 38px;
        height: 38px;
      }
      .app-window {
        min-width: 280px;
      }
    }
  </style>
</head>
<body>
  <!-- Liquid Glass Refraction SVG Filter -->
  <svg width="0" height="0" aria-hidden="true" style="position:absolute">
    <defs>
      <filter id="lg-refraction" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="7" result="noise"></feTurbulence>
        <feGaussianBlur in="noise" stdDeviation="2.2" result="soft"></feGaussianBlur>
        <feDisplacementMap in="SourceGraphic" in2="soft" scale="12" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
      </filter>
    </defs>
  </svg>

  <!-- Desktop Wallpaper -->
  <div id="desktop-wallpaper" class="wp-sequoia"></div>

  <!-- Mobile Notice Banner -->
  <div id="mobile-notice">
    <div>🖥️ <strong>macOS Pilot</strong>: 데스크톱 화면에서 최상의 경험을 제공합니다.</div>
    <a href="/" style="color:var(--accent-orange); font-weight:700; text-decoration:none; margin-left:8px;">웹 메인으로 ↗</a>
  </div>

  <!-- Selection Marquee Box -->
  <div id="selection-box"></div>

  <!-- Top Menu Bar -->
  <header id="menubar">
    <div class="menu-left">
      <div class="menu-item menu-apple" id="apple-menu-btn" title="DAVHAVE Studio"></div>
      <div class="menu-item menu-appname" id="menu-active-app">Finder</div>
      <div class="menu-item">파일</div>
      <div class="menu-item">편집</div>
      <div class="menu-item">보기</div>
      <div class="menu-item">창</div>
      <div class="menu-item">도움말</div>
    </div>

    <!-- Apple Dropdown Menu -->
    <div class="menu-dropdown" id="apple-dropdown">
      <div class="dropdown-row" onclick="openApp('about')">
        <span>DAVHAVE Studio 정보</span>
      </div>
      <div class="dropdown-divider"></div>
      <div class="dropdown-row" onclick="openApp('settings')">
        <span>시스템 설정...</span>
        <span class="dropdown-shortcut">⌘,</span>
      </div>
      <div class="dropdown-row" onclick="toggleSpotlight()">
        <span>Spotlight 검색</span>
        <span class="dropdown-shortcut">⌘Space</span>
      </div>
      <div class="dropdown-divider"></div>
      <div class="dropdown-row" onclick="window.location.href='/'">
        <span>웹 표준 홈으로 돌아가기</span>
        <span class="dropdown-shortcut">⎋ Esc</span>
      </div>
    </div>

    <div class="menu-right">
      <div class="status-icon" title="Cloudflare 0ms Global Edge">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
      </div>
      <div class="status-icon" title="배터리: 100% (Edge Power)">
        <svg width="17" height="15" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="16" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect><rect x="4" y="9" width="12" height="6" rx="1"></rect><line x1="20" y1="10" x2="20" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line></svg>
      </div>
      <div class="status-icon" id="spotlight-btn" onclick="toggleSpotlight()" title="Spotlight 검색 (⌘Space)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </div>
      <div class="status-icon" id="control-center-btn" onclick="toggleControlCenter()" title="제어 센터">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="6" rx="3"></rect><circle cx="9" cy="7" r="1.5" fill="currentColor"></circle><rect x="4" y="14" width="16" height="6" rx="3"></rect><circle cx="15" cy="17" r="1.5" fill="currentColor"></circle></svg>
      </div>
      <div class="status-icon status-clock" id="clock-display">오후 12:45</div>
    </div>
  </header>

  <!-- Control Center Dropdown -->
  <div id="control-center">
    <div class="cc-row">
      <div class="cc-card">
        <div class="cc-icon-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
        </div>
        <div>
          <div style="font-weight:600; font-size:12px;">Wi-Fi</div>
          <div style="font-size:10px; color:#94a3b8;">Cloudflare Edge (0ms)</div>
        </div>
      </div>
      <div class="cc-card">
        <div class="cc-icon-btn" style="background:#10b981;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 7h10v10H7z"></path></svg>
        </div>
        <div>
          <div style="font-weight:600; font-size:12px;">D1 Database</div>
          <div style="font-size:10px; color:#94a3b8;">Active · Connected</div>
        </div>
      </div>
    </div>
    <div class="cc-slider-wrap">
      <div class="cc-slider-label">
        <span>화면 밝기 (Display)</span>
        <span id="brightness-val">100%</span>
      </div>
      <input type="range" min="50" max="120" value="100" class="cc-slider" id="brightness-slider" oninput="adjustBrightness(this.value)" />
    </div>
    <div class="cc-card" onclick="openApp('settings')" style="cursor:pointer;">
      <div style="font-size:16px;">⚙️</div>
      <div style="flex:1;">
        <div style="font-weight:600; font-size:12px;">시스템 환경설정</div>
        <div style="font-size:10px; color:#94a3b8;">배경화면, 테마, 엔지니어링 스펙 변경</div>
      </div>
      <span style="color:#64748b;">›</span>
    </div>
  </div>

  <!-- Desktop Workspace & Grid Icons -->
  <main id="desktop">
    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('calc')" data-app="calc">
      <div class="desktop-icon-img">🧮</div>
      <span class="desktop-icon-label">KCT 실리콘 계산기.app</span>
    </div>

    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('specimen')" data-app="specimen">
      <div class="desktop-icon-img">🧪</div>
      <span class="desktop-icon-label">ASTM 시편 연구소.app</span>
    </div>

    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('terminal')" data-app="terminal">
      <div class="desktop-icon-img">💻</div>
      <span class="desktop-icon-label">Terminal.app</span>
    </div>

    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('notes')" data-app="notes">
      <div class="desktop-icon-img">📝</div>
      <span class="desktop-icon-label">엔지니어링 노트.app</span>
    </div>

    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('about')" data-app="about">
      <div class="desktop-icon-img">📄</div>
      <span class="desktop-icon-label">README.txt</span>
    </div>

    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="window.open('/projects', '_blank')">
      <div class="desktop-icon-img">📁</div>
      <span class="desktop-icon-label">Projects 허브</span>
    </div>
  </main>

  <!-- ─── Window: KCT Calculator ─── -->
  <div class="app-window" id="window-calc" style="width: 680px; height: 500px; top: 70px; left: 140px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-calc')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('calc')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('calc')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('calc')"></button>
      </div>
      <div class="window-title">KCT Silicon Suite — Dow Chemical Structural Calculator</div>
      <div class="window-actions"></div>
    </div>
    <div class="window-body">
      <div style="margin-bottom:14px; font-size:12px; color:#cbd5e1;">
        Dow Chemical 및 ASTM C1401 기준 <strong>풍하중 구조 바이트(Structural Bite)</strong> 및 <strong>글루라인 두께</strong> 실시간 연산기
      </div>
      <div class="calc-grid">
        <div class="calc-card">
          <div class="calc-title">📐 설계 하중 및 유리 치수 입력</div>
          <div class="form-group">
            <label class="form-label">설계 풍하중 (Wind Load, kPa)</label>
            <input type="number" step="0.1" value="2.5" class="form-input" id="calc-wind" oninput="runSiliconCalc()" />
          </div>
          <div class="form-group">
            <label class="form-label">유리 단변 길이 a (Short Span, mm)</label>
            <input type="number" step="10" value="1200" class="form-input" id="calc-short" oninput="runSiliconCalc()" />
          </div>
          <div class="form-group">
            <label class="form-label">유리 장변 길이 b (Long Span, mm)</label>
            <input type="number" step="10" value="2400" class="form-input" id="calc-long" oninput="runSiliconCalc()" />
          </div>
          <div class="form-group">
            <label class="form-label">설계 허용응력 Fd (기본 140 kPa / 20 psi)</label>
            <input type="number" step="5" value="140" class="form-input" id="calc-fd" oninput="runSiliconCalc()" />
          </div>
        </div>

        <div class="calc-card">
          <div class="calc-title">⚡ 공학 연산 결과 (ASTM C1401)</div>
          <div class="res-box">
            <div class="res-metric">
              <span>최소 구조 바이트 (Bite):</span>
              <span class="res-val highlight" id="res-bite">10.7 mm</span>
            </div>
            <div class="res-metric">
              <span>권장 글루라인 두께 (Glueline):</span>
              <span class="res-val" id="res-glueline">6.0 mm</span>
            </div>
            <div class="res-metric">
              <span>구조 검증 상태:</span>
              <span class="res-val" style="color:#4ade80;" id="res-status">PASS (규격 충족)</span>
            </div>
          </div>
          <div style="margin-top:14px; padding:10px; background:rgba(0,0,0,0.3); border-radius:6px; font-size:11px; line-height:1.5; color:#94a3b8;">
            * 공식: <code>B = (W × a) / (2 × Fd)</code> (최소 규격 6.0mm 이상 강제 적용)<br/>
            * 현장 시공 시 안전율(SF 2.0 이상)을 감안하여 반올림 치수를 적용하십시오.
          </div>
          <div style="margin-top:12px; display:flex; gap:8px;">
            <button onclick="window.open('/projects/kct', '_blank')" style="background:var(--accent-orange); color:#fff; border:none; padding:6px 12px; border-radius:6px; font-size:11px; font-weight:600; cursor:pointer;">KCT 정식 플랫폼 열기 ↗</button>
          </div>
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-calc', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-calc', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-calc', 'br')"></div>
  </div>

  <!-- ─── Window: ASTM Specimen Lab ─── -->
  <div class="app-window" id="window-specimen" style="width: 720px; height: 520px; top: 100px; left: 220px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-specimen')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('specimen')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('specimen')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('specimen')"></button>
      </div>
      <div class="window-title">ASTM D638 / C1401 물리 인장 시편 가공 센터</div>
      <div class="window-actions"></div>
    </div>
    <div class="window-body">
      <div class="specimen-types">
        <div class="specimen-chip active" onclick="selectSpecimenType('Type I', this)">ASTM D638 Type I (표준)</div>
        <div class="specimen-chip" onclick="selectSpecimenType('Type II', this)">Type II (고강도)</div>
        <div class="specimen-chip" onclick="selectSpecimenType('Type IV', this)">Type IV (비강도)</div>
        <div class="specimen-chip" onclick="selectSpecimenType('Type V', this)">Type V (초소형 마이크로)</div>
        <div class="specimen-chip" onclick="selectSpecimenType('ASTM C1401', this)">ASTM C1401 H-Shape (접착전단)</div>
      </div>

      <div class="specimen-canvas-wrap">
        <svg id="specimen-svg" width="100%" height="150" viewBox="0 0 600 150">
          <!-- Dogbone Specimen Blueprint -->
          <defs>
            <linearGradient id="specimenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#0284c7" stop-opacity="0.8"/>
            </linearGradient>
          </defs>
          <path d="M 50 40 L 150 40 Q 180 40 200 60 L 400 60 Q 420 40 450 40 L 550 40 L 550 110 L 450 110 Q 420 110 400 90 L 200 90 Q 180 110 150 110 L 50 110 Z" fill="url(#specimenGrad)" stroke="#67e8f9" stroke-width="2"/>
          <line x1="200" y1="20" x2="400" y2="20" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4"/>
          <text x="300" y="15" fill="#f59e0b" font-size="11" text-anchor="middle" font-family="monospace">G = 50.0 mm (Gauge Length)</text>
          <line x1="50" y1="135" x2="550" y2="135" stroke="#94a3b8" stroke-width="1.5"/>
          <text x="300" y="148" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="monospace">LO = 165.0 mm (전체 길이)</text>
        </svg>
      </div>

      <div class="calc-grid">
        <div class="calc-card">
          <div class="calc-title">📊 기계적 물성 파라미터 (<span id="specimen-name-lbl">Type I</span>)</div>
          <div class="res-metric"><span>전체 길이 (LO):</span><span class="res-val" id="spec-lo">165.0 mm</span></div>
          <div class="res-metric"><span>게이지 길이 (G):</span><span class="res-val" id="spec-g">50.0 mm</span></div>
          <div class="res-metric"><span>협착부 폭 (W):</span><span class="res-val" id="spec-w">13.0 mm</span></div>
          <div class="res-metric"><span>그립부 폭 (WO):</span><span class="res-val" id="spec-wo">19.0 mm</span></div>
          <div class="res-metric"><span>가공 공차:</span><span class="res-val" style="color:#4ade80;">±0.05 mm (ISO 527)</span></div>
        </div>
        <div class="calc-card">
          <div class="calc-title">🔬 3D 정밀 가공 및 인장 시험 의뢰</div>
          <p style="font-size:12px; color:#cbd5e1; line-height:1.6; margin-bottom:12px;">
            ASTM D638 / ASTM C1401 인장 시편을 3D 프린팅(PETG/CF/SLA 레진) 및 CNC 밀링으로 정밀 가공합니다. DIC 광학 스트레인 분석용 스페클 패턴 코팅 옵션을 제공합니다.
          </p>
          <button onclick="window.open('/projects/kct/specimens', '_blank')" style="background:var(--accent-color); color:#fff; border:none; padding:8px 14px; border-radius:6px; font-size:11px; font-weight:600; cursor:pointer;">시편 제작 견적 및 FAQ 허브 ↗</button>
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-specimen', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-specimen', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-specimen', 'br')"></div>
  </div>

  <!-- ─── Window: Terminal (davhave-cli) ─── -->
  <div class="app-window" id="window-terminal" style="width: 620px; height: 420px; top: 120px; left: 280px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-terminal')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('terminal')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('terminal')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('terminal')"></button>
      </div>
      <div class="window-title">Terminal — oscar@davhave-edge: ~ (zsh)</div>
      <div class="window-actions"></div>
    </div>
    <div class="window-body terminal-body" onclick="document.getElementById('terminal-cli-input').focus()">
      <div class="terminal-output" id="terminal-screen">DAVHAVE Edge Architecture Shell (v2.7.0)
Type "help" to view available studio commands.
</div>
      <div class="terminal-prompt-line">
        <span class="prompt-label">oscar@davhave-edge ~ %</span>
        <input type="text" id="terminal-cli-input" class="terminal-input" autocomplete="off" spellcheck="false" onkeydown="handleTerminalKey(event)" />
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-terminal', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-terminal', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-terminal', 'br')"></div>
  </div>

  <!-- ─── Window: Notes (Blog & Education Hub) ─── -->
  <div class="app-window" id="window-notes" style="width: 740px; height: 500px; top: 90px; left: 180px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-notes')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('notes')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('notes')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('notes')"></button>
      </div>
      <div class="window-title">메모 — DAVHAVE Engineering Insights</div>
      <div class="window-actions"></div>
    </div>
    <div class="window-body" style="padding:0; overflow:hidden;">
      <div class="notes-layout">
        <div class="notes-sidebar">
          <div class="notes-item active" onclick="loadNote(0, this)">
            <div class="notes-item-title">Cloudflare 0ms 엣지 아키텍처</div>
            <div class="notes-item-date">2026.09.28 · 시스템 설계</div>
          </div>
          <div class="notes-item" onclick="loadNote(1, this)">
            <div class="notes-item-title">실리콘 구조 바이트 공식 해설</div>
            <div class="notes-item-date">2026.09.25 · 산업 공학</div>
          </div>
          <div class="notes-item" onclick="loadNote(2, this)">
            <div class="notes-item-title">SEO URL 설계: 해시 앵커 배제</div>
            <div class="notes-item-date">2026.09.20 · 프론트엔드</div>
          </div>
          <div class="notes-item" onclick="loadNote(3, this)">
            <div class="notes-item-title">AI 에이전틱 개발 및 프롬프트</div>
            <div class="notes-item-date">2026.09.15 · 인공지능</div>
          </div>
        </div>
        <div class="notes-content" id="notes-view-area">
          <!-- Populated by JS -->
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-notes', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-notes', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-notes', 'br')"></div>
  </div>

  <!-- ─── Window: System Settings ─── -->
  <div class="app-window" id="window-settings" style="width: 580px; height: 460px; top: 110px; left: 200px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-settings')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('settings')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('settings')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('settings')"></button>
      </div>
      <div class="window-title">시스템 설정</div>
      <div class="window-actions"></div>
    </div>
    <div class="window-body">
      <div class="settings-section">
        <div class="settings-title">데스크톱 배경화면 선택</div>
        <div class="wp-thumbnails">
          <div class="wp-thumb wp-sequoia active" onclick="setWallpaper('wp-sequoia', this)">
            <span>Sequoia</span>
          </div>
          <div class="wp-thumb wp-void" onclick="setWallpaper('wp-void', this)">
            <span>Deep Void</span>
          </div>
          <div class="wp-thumb wp-blueprint" onclick="setWallpaper('wp-blueprint', this)">
            <span>Blueprint</span>
          </div>
          <div class="wp-thumb wp-aurora" onclick="setWallpaper('wp-aurora', this)">
            <span>Aurora</span>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-title">시스템 정보</div>
        <div style="background:rgba(0,0,0,0.3); border-radius:8px; padding:12px; font-size:12px; line-height:1.8;">
          <div><strong>운영체제:</strong> macOS 27 (DAVHAVE Liquid Glass Edition)</div>
          <div><strong>아키텍처:</strong> Cloudflare Workers 0ms Edge Compute</div>
          <div><strong>데이터베이스:</strong> Cloudflare D1 Serverless SQL</div>
          <div><strong>수석 아키텍트:</strong> Oscar Lee (DAVHAVE)</div>
          <div><strong>포지셔닝:</strong> The Precision Engineering Laboratory</div>
        </div>
      </div>

      <div style="text-align:right;">
        <button onclick="window.location.href='/'" style="background:rgba(255,255,255,0.12); color:#fff; border:1px solid rgba(255,255,255,0.2); padding:6px 14px; border-radius:6px; cursor:pointer;">기본 웹사이트로 돌아가기</button>
      </div>
    </div>
  </div>

  <!-- ─── Window: About / README ─── -->
  <div class="app-window" id="window-about" style="width: 520px; height: 400px; top: 130px; left: 240px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-about')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('about')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('about')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('about')"></button>
      </div>
      <div class="window-title">DAVHAVE Studio — README.txt</div>
      <div class="window-actions"></div>
    </div>
    <div class="window-body" style="font-family:var(--font-mono); font-size:12px; line-height:1.7;">
      <h3 style="color:var(--accent-orange); margin-bottom:8px;"># DAVHAVE PRECISION ENGINEERING STUDIO</h3>
      <p style="margin-bottom:12px;">
        DAVHAVE는 실제 산업 현장과 비즈니스의 문제를 해결하는 고성능 모바일 앱, 글로벌 엣지 웹 플랫폼, AI/에이전틱 소프트웨어를 설계·구축합니다.
      </p>
      <p style="margin-bottom:12px;">
        [파일럿 안내]<br/>
        본 페이지는 최신 macOS 27의 Liquid Glass 인터랙션과 DAVHAVE의 실무 공학 도구를 결합한 웹 데스크톱 파일럿입니다.
      </p>
      <ul style="padding-left:18px; margin-bottom:16px;">
        <li>단축키 <strong>⌘Space</strong> : Spotlight 검색</li>
        <li>하단 <strong>Dock</strong> : 실시간 가우시안 마그니피케이션 확대</li>
        <li>실시간 공학 계산기 및 터미널 쉘 완벽 탑재</li>
      </ul>
      <button onclick="window.location.href='/'" style="background:var(--accent-color); color:#fff; border:none; padding:8px 16px; border-radius:6px; font-weight:600; cursor:pointer;">웹 표준 홈 열기 ↗</button>
    </div>
  </div>

  <!-- ─── Spotlight Search Overlay ─── -->
  <div id="spotlight-overlay" onclick="handleSpotlightBackdrop(event)">
    <div id="spotlight-box">
      <div class="spotlight-input-row">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" id="spotlight-input" class="spotlight-input" placeholder="Spotlight 검색 (앱, 계산기, 문서...)" autocomplete="off" oninput="filterSpotlight(this.value)" onkeydown="handleSpotlightKey(event)" />
      </div>
      <div class="spotlight-results" id="spotlight-results">
        <!-- Results injected by JS -->
      </div>
    </div>
  </div>

  <!-- ─── Bottom Floating Dock ─── -->
  <div id="dock-container">
    <nav id="dock" onmousemove="handleDockMouseMove(event)" onmouseleave="resetDockMagnification()">
      <div class="dock-item" onclick="openApp('calc')" data-app="calc" title="KCT 실리콘 계산기">
        <div class="dock-icon" style="background:#1e293b; display:flex; align-items:center; justify-content:center; font-size:26px;">🧮</div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">KCT 실리콘 계산기</div>
      </div>

      <div class="dock-item" onclick="openApp('specimen')" data-app="specimen" title="ASTM 인장 시편 연구소">
        <div class="dock-icon" style="background:#0f2d6b; display:flex; align-items:center; justify-content:center; font-size:26px;">🧪</div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">ASTM 시편 연구소</div>
      </div>

      <div class="dock-item" onclick="openApp('terminal')" data-app="terminal" title="Terminal">
        <div class="dock-icon" style="background:#0f172a; border:1px solid rgba(255,255,255,0.2); display:flex; align-items:center; justify-content:center; font-size:24px;">💻</div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">Terminal.app</div>
      </div>

      <div class="dock-item" onclick="openApp('notes')" data-app="notes" title="엔지니어링 노트">
        <div class="dock-icon" style="background:#b45309; display:flex; align-items:center; justify-content:center; font-size:24px;">📝</div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">엔지니어링 노트</div>
      </div>

      <div class="dock-item" onclick="openApp('settings')" data-app="settings" title="시스템 설정">
        <div class="dock-icon" style="background:#475569; display:flex; align-items:center; justify-content:center; font-size:24px;">⚙️</div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">시스템 설정</div>
      </div>

      <div class="dock-separator"></div>

      <div class="dock-item" onclick="window.open('/projects', '_blank')" title="Projects 허브">
        <div class="dock-icon" style="background:#0284c7; display:flex; align-items:center; justify-content:center; font-size:24px;">📁</div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">Projects 허브 ↗</div>
      </div>

      <div class="dock-item" onclick="window.location.href='/'" title="웹 표준 버전으로 돌아가기">
        <div class="dock-icon" style="background:#b91c1c; display:flex; align-items:center; justify-content:center; font-size:22px;">🌐</div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">메인 웹으로 이동</div>
      </div>
    </nav>
  </div>

  <!-- ─── Client Scripts ─── -->
  <script>
    // State
    let highestZ = 100;
    const runningApps = new Set(['calc']);
    let activeApp = 'calc';

    // Notes Data
    const NOTES_DATA = [
      {
        title: "Cloudflare 0ms 엣지 아키텍처의 비밀",
        date: "2026.09.28",
        content: "<h3>단 1ms도 허비하지 않는 글로벌 엣지 컴퓨팅</h3><p>기존 컨테이너나 가상머신 기반의 백엔드는 콜드 스타트 지연시간(100ms~1s)이 발생하지만, Cloudflare Workers는 V8 Isolate 기반으로 전 세계 300+ 엣지 데이터센터에서 0ms 콜드스타트로 즉시 실행됩니다.</p><p>DAVHAVE는 D1 SQL 데이터베이스 및 R2 오브젝트 스토리지를 글로벌 엣지와 직접 바인딩하여 데이터베이스 쿼리 및 자산 로딩 지연을 최소화합니다.</p>"
      },
      {
        title: "Dow Chemical 실리콘 구조 바이트 공식 해설",
        date: "2026.09.25",
        content: "<h3>ASTM C1401 기준 구조용 실리콘 바이트 산정</h3><p>커튼월 유리 패널에 가해지는 풍하중을 실리콘 실란트가 지탱하기 위한 최소 접착 폭(Bite) 산정 공식:</p><pre style='background:#111; padding:10px; border-radius:6px; color:#38bdf8;'>B = (W × a) / (2 × Fd)</pre><p>여기서 W는 설계 풍하중(kPa), a는 유리 단변 길이(mm), Fd는 설계 허용 응력(통상 140 kPa / 20 psi)입니다. ASTM 규정에 따라 어떠한 경우에도 6.0mm 미만은 허용되지 않습니다.</p>"
      },
      {
        title: "SEO URL 설계: 해시 앵커(#)를 배제해야 하는 이유",
        date: "2026.09.20",
        content: "<h3>색인 가능한 전용 URL(Canonical Route)의 중요성</h3><p>단일 페이지 애플리케이션(SPA)에서 자주 사용하는 해시 앵커(/#section)는 브라우저 내부 스크롤용 프래그먼트에 불과하며, 검색엔진(구글, 네이버) 로봇은 이를 별개의 페이지로 색인하지 않습니다.</p><p>SEO 가치가 있는 모든 콘텐츠는 반드시 고유한 SSR 전용 라우트(/projects/kct, /blog/:slug)를 가져야 합니다.</p>"
      },
      {
        title: "AI 에이전틱 개발 및 프롬프트 엔지니어링 교훈",
        date: "2026.09.15",
        content: "<h3>자율 에이전트와 페어 프로그래밍의 실무 패턴</h3><p>단순한 일회성 챗봇 질문을 넘어, 파일 시스템과 도구를 직접 다루는 에이전트에게는 명확한 명세서(Product/Design Context)와 엄격한 검증 피드백 루프가 성공의 핵심입니다.</p>"
      }
    ];

    // Initialize
    window.addEventListener('DOMContentLoaded', () => {
      updateClock();
      setInterval(updateClock, 1000);
      loadNote(0, document.querySelector('.notes-item'));
      runSiliconCalc();

      // Open initial window
      openApp('calc');

      // Apple Menu toggle
      const appleBtn = document.getElementById('apple-menu-btn');
      const appleDropdown = document.getElementById('apple-dropdown');
      appleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        appleDropdown.classList.toggle('show');
      });

      document.addEventListener('click', () => {
        appleDropdown.classList.remove('show');
        document.getElementById('control-center').classList.remove('show');
      });

      // Keyboard shortcuts
      window.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && (e.key === ' ' || e.key === 'k' || e.key === 'K')) {
          e.preventDefault();
          toggleSpotlight();
        }
        if (e.key === 'Escape') {
          closeSpotlight();
          document.getElementById('control-center').classList.remove('show');
          appleDropdown.classList.remove('show');
        }
      });
    });

    // Real-time Clock
    function updateClock() {
      const now = new Date();
      const days = ['일', '월', '화', '수', '목', '금', '토'];
      const day = days[now.getDay()];
      const month = now.getMonth() + 1;
      const date = now.getDate();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? '오후' : '오전';
      hours = hours % 12 || 12;
      document.getElementById('clock-display').textContent = \`\${day} \${month}월 \${date}일 \${ampm} \${hours}:\${minutes}\`;
    }

    // App Management
    function openApp(id) {
      const win = document.getElementById('window-' + id);
      if (!win) return;

      win.classList.remove('minimized');
      win.classList.add('open');
      bringToFront(win, id);

      runningApps.add(id);
      updateDockRunningStatus();

      // Dock bounce effect
      const dockItem = document.querySelector(\`.dock-item[data-app="\${id}"]\`);
      if (dockItem) {
        dockItem.classList.add('dock-bounce');
        setTimeout(() => dockItem.classList.remove('dock-bounce'), 650);
      }
    }

    function closeApp(id) {
      const win = document.getElementById('window-' + id);
      if (!win) return;
      win.classList.remove('open');
      win.classList.remove('active');
      runningApps.delete(id);
      updateDockRunningStatus();
    }

    function minimizeApp(id) {
      const win = document.getElementById('window-' + id);
      if (!win) return;
      win.classList.add('minimized');
      win.classList.remove('active');
    }

    function maximizeApp(id) {
      const win = document.getElementById('window-' + id);
      if (!win) return;
      if (win.dataset.maximized === 'true') {
        win.style.top = win.dataset.origTop || '70px';
        win.style.left = win.dataset.origLeft || '140px';
        win.style.width = win.dataset.origWidth || '680px';
        win.style.height = win.dataset.origHeight || '500px';
        win.dataset.maximized = 'false';
      } else {
        win.dataset.origTop = win.style.top;
        win.dataset.origLeft = win.style.left;
        win.dataset.origWidth = win.style.width;
        win.dataset.origHeight = win.style.height;
        win.style.top = '30px';
        win.style.left = '4px';
        win.style.width = 'calc(100vw - 8px)';
        win.style.height = 'calc(100vh - 100px)';
        win.dataset.maximized = 'true';
      }
      bringToFront(win, id);
    }

    function bringToFront(win, id) {
      highestZ += 2;
      win.style.zIndex = highestZ;

      document.querySelectorAll('.app-window').forEach(w => w.classList.remove('active'));
      win.classList.add('active');

      // Update menu bar active app label
      const titles = {
        calc: 'KCT Calculator',
        specimen: 'ASTM Specimen Lab',
        terminal: 'Terminal',
        notes: 'Notes',
        settings: 'System Settings',
        about: 'About Studio'
      };
      activeApp = id;
      document.getElementById('menu-active-app').textContent = titles[id] || 'Finder';
    }

    function updateDockRunningStatus() {
      document.querySelectorAll('.dock-item').forEach(item => {
        const app = item.dataset.app;
        if (runningApps.has(app)) {
          item.classList.add('running');
        } else {
          item.classList.remove('running');
        }
      });
    }

    // Window Dragging
    let isDragging = false;
    let dragTarget = null;
    let dragOffsetX = 0;
    let dragOffsetY = 0;

    function startDragWindow(e, winId) {
      if (e.target.classList.contains('traffic-btn')) return;
      const win = document.getElementById(winId);
      dragTarget = win;
      isDragging = true;

      const rect = win.getBoundingClientRect();
      dragOffsetX = e.clientX - rect.left;
      dragOffsetY = e.clientY - rect.top;

      bringToFront(win, winId.replace('window-', ''));

      document.addEventListener('mousemove', onDragWindow);
      document.addEventListener('mouseup', stopDragWindow);
    }

    function onDragWindow(e) {
      if (!isDragging || !dragTarget) return;
      let newX = e.clientX - dragOffsetX;
      let newY = e.clientY - dragOffsetY;
      if (newY < 28) newY = 28; // keep below menubar
      dragTarget.style.left = newX + 'px';
      dragTarget.style.top = newY + 'px';
    }

    function stopDragWindow() {
      isDragging = false;
      dragTarget = null;
      document.removeEventListener('mousemove', onDragWindow);
      document.removeEventListener('mouseup', stopDragWindow);
    }

    // Window Resizing
    let isResizing = false;
    let resizeTarget = null;
    let resizeType = null;
    let startW = 0, startH = 0, startX = 0, startY = 0;

    function startResizeWindow(e, winId, type) {
      e.stopPropagation();
      resizeTarget = document.getElementById(winId);
      isResizing = true;
      resizeType = type;
      startX = e.clientX;
      startY = e.clientY;
      startW = resizeTarget.offsetWidth;
      startH = resizeTarget.offsetHeight;

      document.addEventListener('mousemove', onResizeWindow);
      document.addEventListener('mouseup', stopResizeWindow);
    }

    function onResizeWindow(e) {
      if (!isResizing || !resizeTarget) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (resizeType.includes('r')) {
        const nw = Math.max(320, startW + dx);
        resizeTarget.style.width = nw + 'px';
      }
      if (resizeType.includes('b')) {
        const nh = Math.max(200, startH + dy);
        resizeTarget.style.height = nh + 'px';
      }
    }

    function stopResizeWindow() {
      isResizing = false;
      resizeTarget = null;
      document.removeEventListener('mousemove', onResizeWindow);
      document.removeEventListener('mouseup', stopResizeWindow);
    }

    // Dock Magnification Effect (Smooth Parabolic Scaling)
    function handleDockMouseMove(e) {
      if (window.innerWidth < 768) return;
      const dock = document.getElementById('dock');
      const items = dock.querySelectorAll('.dock-item');
      const mouseX = e.clientX;

      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const iconCenter = rect.left + rect.width / 2;
        const dist = Math.abs(mouseX - iconCenter);
        const maxDist = 120;

        if (dist < maxDist) {
          const factor = Math.cos((dist / maxDist) * (Math.PI / 2));
          const scale = 1 + factor * 0.45; // up to 1.45x
          const width = 48 * scale;
          item.style.width = width + 'px';
          item.style.height = width + 'px';
        } else {
          item.style.width = '48px';
          item.style.height = '48px';
        }
      });
    }

    function resetDockMagnification() {
      document.querySelectorAll('.dock-item').forEach(item => {
        item.style.width = '48px';
        item.style.height = '48px';
      });
    }

    // KCT Silicone Calculator Engine
    function runSiliconCalc() {
      const w = parseFloat(document.getElementById('calc-wind').value) || 2.5;
      const a = parseFloat(document.getElementById('calc-short').value) || 1200;
      const fd = parseFloat(document.getElementById('calc-fd').value) || 140;

      // ASTM C1401 Formula: B = (W * a) / (2 * Fd)
      let bite = (w * a) / (2 * fd);
      if (bite < 6.0) bite = 6.0;

      let glueline = Math.max(6.0, bite / 2);

      document.getElementById('res-bite').textContent = bite.toFixed(1) + ' mm';
      document.getElementById('res-glueline').textContent = glueline.toFixed(1) + ' mm';
      document.getElementById('res-status').textContent = bite >= 6.0 ? 'PASS (ASTM 규격 충족)' : '주의 (최소 6mm 권장)';
    }

    // ASTM Specimen Lab Type Selector
    function selectSpecimenType(type, elem) {
      document.querySelectorAll('.specimen-chip').forEach(c => c.classList.remove('active'));
      elem.classList.add('active');
      document.getElementById('specimen-name-lbl').textContent = type;

      const specs = {
        'Type I': { lo: '165.0 mm', g: '50.0 mm', w: '13.0 mm', wo: '19.0 mm' },
        'Type II': { lo: '183.0 mm', g: '50.0 mm', w: '6.0 mm', wo: '19.0 mm' },
        'Type IV': { lo: '115.0 mm', g: '25.0 mm', w: '6.0 mm', wo: '19.0 mm' },
        'Type V': { lo: '63.5 mm', g: '7.6 mm', w: '3.18 mm', wo: '9.5 mm' },
        'ASTM C1401': { lo: '50.0 mm (H-Shape)', g: '12.0 mm', w: '12.0 mm', wo: '25.0 mm' }
      };

      const s = specs[type] || specs['Type I'];
      document.getElementById('spec-lo').textContent = s.lo;
      document.getElementById('spec-g').textContent = s.g;
      document.getElementById('spec-w').textContent = s.w;
      document.getElementById('spec-wo').textContent = s.wo;
    }

    // Terminal Emulator (davhave-cli)
    function handleTerminalKey(e) {
      if (e.key !== 'Enter') return;
      const input = document.getElementById('terminal-cli-input');
      const cmd = input.value.trim();
      input.value = '';

      const screen = document.getElementById('terminal-screen');
      screen.textContent += \`\\noscar@davhave-edge ~ % \${cmd}\\n\`;

      if (!cmd) return;

      const lower = cmd.toLowerCase();
      let response = '';

      if (lower === 'help') {
        response = \`Available commands:
  whoami     - Display studio architect profile
  stack      - Show edge & engineering tech stack
  projects   - List live production systems
  calc       - Calculate silicone bite [e.g. calc 2.5 1200]
  open <app> - Open window (calc, specimen, notes, settings)
  date       - Show current edge timestamp
  clear      - Clear terminal screen
  exit       - Close terminal window\`;
      } else if (lower === 'whoami') {
        response = "Oscar Lee (DAVHAVE) — Lead Architect in High-Performance Edge Systems & Industrial Computing.";
      } else if (lower === 'stack') {
        response = "Cloudflare Workers, D1 Serverless SQL, R2 Media Bucket, Web Standards (0ms Cold Start), Flutter, Swift.";
      } else if (lower === 'projects') {
        response = "1. KCT Silicon Engineering Suite (/projects/kct)\\n2. ASTM D638 Tensile Specimen Lab (/projects/kct/specimens)\\n3. RetroBoy Mobile App (/privacy/retroboy)\\n4. 103Tax Enterprise Portal";
      } else if (lower.startsWith('calc')) {
        const parts = lower.split(' ');
        const w = parseFloat(parts[1]) || 2.5;
        const a = parseFloat(parts[2]) || 1200;
        const bite = Math.max(6.0, (w * a) / (2 * 140));
        response = \`Calculated Silicone Bite: \${bite.toFixed(1)} mm (W=\${w}kPa, a=\${a}mm, Fd=140kPa)\`;
      } else if (lower.startsWith('open ')) {
        const app = lower.split(' ')[1];
        openApp(app);
        response = \`Opened \${app}.app\`;
      } else if (lower === 'date') {
        response = new Date().toISOString();
      } else if (lower === 'clear') {
        screen.textContent = 'DAVHAVE Edge Architecture Shell (v2.7.0)\\n';
        return;
      } else if (lower === 'exit') {
        closeApp('terminal');
        return;
      } else {
        response = \`zsh: command not found: \${cmd}. Type "help" for a list of commands.\`;
      }

      screen.textContent += response;
      const body = document.querySelector('.terminal-body');
      body.scrollTop = body.scrollHeight;
    }

    // Notes Reader
    function loadNote(idx, elem) {
      document.querySelectorAll('.notes-item').forEach(n => n.classList.remove('active'));
      if (elem) elem.classList.add('active');

      const note = NOTES_DATA[idx];
      const area = document.getElementById('notes-view-area');
      area.innerHTML = \`
        <div style="font-size:11px; color:#94a3b8; margin-bottom:6px;">\${note.date}</div>
        <h2 style="font-size:18px; font-weight:700; color:#fff; margin-bottom:14px;">\${note.title}</h2>
        <div style="font-size:13px; color:#e2e8f0; line-height:1.7;">\${note.content}</div>
      \`;
    }

    // Spotlight Search
    const SEARCH_ITEMS = [
      { name: 'KCT 실리콘 계산기', type: 'App', icon: '🧮', action: () => openApp('calc') },
      { name: 'ASTM 인장 시편 연구소', type: 'App', icon: '🧪', action: () => openApp('specimen') },
      { name: 'Terminal (davhave-cli)', type: 'App', icon: '💻', action: () => openApp('terminal') },
      { name: '엔지니어링 메모', type: 'App', icon: '📝', action: () => openApp('notes') },
      { name: '시스템 설정 (Wallpaper)', type: 'App', icon: '⚙️', action: () => openApp('settings') },
      { name: 'Cloudflare 0ms 엣지 아키텍처', type: 'Note', icon: '📄', action: () => { openApp('notes'); loadNote(0); } },
      { name: 'Dow Chemical 실리콘 바이트 공식', type: 'Note', icon: '📐', action: () => { openApp('notes'); loadNote(1); } },
      { name: 'KCT B2B 플랫폼 정식 페이지', type: 'Web', icon: '🌐', action: () => window.open('/projects/kct', '_blank') },
      { name: '웹 표준 홈으로 이동', type: 'Web', icon: '🏠', action: () => window.location.href = '/' }
    ];

    function toggleSpotlight() {
      const overlay = document.getElementById('spotlight-overlay');
      if (overlay.classList.contains('show')) {
        closeSpotlight();
      } else {
        overlay.classList.add('show');
        const input = document.getElementById('spotlight-input');
        input.value = '';
        filterSpotlight('');
        setTimeout(() => input.focus(), 50);
      }
    }

    function closeSpotlight() {
      document.getElementById('spotlight-overlay').classList.remove('show');
    }

    function handleSpotlightBackdrop(e) {
      if (e.target.id === 'spotlight-overlay') closeSpotlight();
    }

    function filterSpotlight(q) {
      const list = document.getElementById('spotlight-results');
      const filtered = SEARCH_ITEMS.filter(item => item.name.toLowerCase().includes(q.toLowerCase()));

      list.innerHTML = filtered.map((item, idx) => \`
        <div class="spotlight-item \${idx === 0 ? 'active' : ''}" onclick="executeSpotlightItem(\${idx})">
          <span style="font-size:18px;">\${item.icon}</span>
          <span style="flex:1; font-weight:500;">\${item.name}</span>
          <span style="font-size:11px; opacity:0.6;">\${item.type}</span>
        </div>
      \`).join('');
    }

    function executeSpotlightItem(idx) {
      const input = document.getElementById('spotlight-input').value;
      const filtered = SEARCH_ITEMS.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));
      if (filtered[idx]) {
        filtered[idx].action();
        closeSpotlight();
      }
    }

    function handleSpotlightKey(e) {
      if (e.key === 'Enter') {
        executeSpotlightItem(0);
      }
    }

    // Control Center
    function toggleControlCenter() {
      const cc = document.getElementById('control-center');
      cc.classList.toggle('show');
    }

    function adjustBrightness(val) {
      document.getElementById('brightness-val').textContent = val + '%';
      document.body.style.filter = \`brightness(\${val}%)\`;
    }

    // Wallpaper Switcher
    function setWallpaper(cls, elem) {
      const wp = document.getElementById('desktop-wallpaper');
      wp.className = '';
      wp.classList.add(cls);

      document.querySelectorAll('.wp-thumb').forEach(t => t.classList.remove('active'));
      if (elem) elem.classList.add('active');
    }

    // Desktop Icon Select
    function selectDesktopIcon(elem) {
      document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
      elem.classList.add('selected');
    }
  </script>
</body>
</html>`;
}
