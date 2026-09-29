/**
 * DAVHAVE macOS 27 Edition (Pilot Experience)
 * Pixel-faithful Liquid Glass macOS Simulation with:
 * - Real File System (Upload from local PC, Download, Create, Delete, LocalStorage persist)
 * - Full Notes App (Create, Edit, Auto-save to LocalStorage, Load, Delete, Export .md)
 * - Desktop Widgets (Analog & Digital Clock, Monthly Calendar, Weather, System Monitor, Sticky Note)
 * - Calendar.app (Interactive event scheduler)
 * - Clock.app (World Clock, Stopwatch with laps, Timer)
 * - Online Wallpapers (Tahoe, Glass, Aurora, Big Sur)
 * - Online Photos & Music Player
 * - KCT Calculator & ASTM Specimen Lab
 */

export function renderMacOsPage() {
  return `<!DOCTYPE html>
<html lang="ko" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>macOS 27 (DAVHAVE Edition) — Interactive Web Desktop</title>
  <meta name="description" content="macOS 27 — a pixel-faithful Liquid Glass macOS simulation with real file management, notes editor, widgets, calendar, clock and engineering suite." />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <meta name="theme-color" content="#000000" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300..800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <style>
    /* ─── Global Reset & macOS Variables ─── */
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
      --accent-blue: #007aff;
      --accent-orange: #ff6b35;
      --accent-purple: #af52de;
      --accent-green: #34c759;
      --glass-tint-dark: rgba(22, 26, 35, 0.72);
      --glass-border: rgba(255, 255, 255, 0.16);
      --glass-glow: inset 0 1px 0 rgba(255, 255, 255, 0.28);
      --shadow-window: 0 28px 75px -12px rgba(0, 0, 0, 0.68), 0 0 1px rgba(255, 255, 255, 0.22);
      --shadow-window-active: 0 38px 90px -15px rgba(0, 0, 0, 0.82), 0 0 0 1px rgba(255, 255, 255, 0.28);
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
      background: #000;
      position: fixed;
    }

    /* ─── Liquid Glass Refraction Support ─── */
    @supports (backdrop-filter: url(#x)) or (-webkit-backdrop-filter: url(#x)) {
      .lg-refract {
        -webkit-backdrop-filter: url(#lg-refraction) blur(24px) saturate(170%);
        backdrop-filter: url(#lg-refraction) blur(24px) saturate(170%);
      }
      .lg-refract-strong {
        -webkit-backdrop-filter: url(#lg-refraction) blur(32px) saturate(180%);
        backdrop-filter: url(#lg-refraction) blur(32px) saturate(180%);
      }
    }

    /* ─── Wallpaper Layer ─── */
    #desktop-wallpaper {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: background-image 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease;
      z-index: 0;
    }

    /* ─── Top Menu Bar (Liquid Glass) ─── */
    #menubar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: var(--menubar-height);
      background: rgba(18, 20, 26, 0.52);
      backdrop-filter: blur(28px) saturate(190%);
      -webkit-backdrop-filter: blur(28px) saturate(190%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 12px;
      z-index: 10000;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    }

    .menu-left, .menu-right {
      display: flex;
      align-items: center;
      gap: 2px;
      height: 100%;
    }

    .menu-item {
      padding: 0 9px;
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
      font-size: 16px;
      font-weight: 700;
      padding: 0 7px;
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
      background: rgba(26, 30, 40, 0.88);
      backdrop-filter: blur(36px) saturate(200%);
      -webkit-backdrop-filter: blur(36px) saturate(200%);
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 8px;
      padding: 5px;
      min-width: 220px;
      box-shadow: 0 14px 34px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.1);
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
      background: var(--accent-blue);
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
      cursor: pointer;
    }

    /* ─── Desktop Workspace & Grid Icons ─── */
    #desktop {
      position: absolute;
      top: var(--menubar-height);
      left: 0;
      right: 320px; /* Space for desktop widgets */
      bottom: 86px;
      padding: 16px;
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: repeat(auto-fill, 96px);
      grid-auto-columns: 88px;
      gap: 16px 14px;
      align-content: start;
      justify-content: start;
      z-index: 1;
    }

    @media (max-width: 1024px) {
      #desktop { right: 0; }
      #desktop-widgets { display: none; }
    }

    .desktop-icon {
      width: 84px;
      height: 94px;
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
      background: rgba(0, 122, 255, 0.38);
      border: 1px solid rgba(0, 122, 255, 0.6);
    }

    .desktop-icon-img {
      width: 48px;
      height: 48px;
      margin-bottom: 6px;
      filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.45));
      transition: transform 0.15s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .desktop-icon:hover .desktop-icon-img {
      transform: scale(1.05);
    }

    .desktop-icon-label {
      font-size: 11.5px;
      font-weight: 500;
      color: #fff;
      line-height: 1.25;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.95), 0 0 6px rgba(0, 0, 0, 0.8);
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* ─── Apple-Style Squircle App Icons ─── */
    .app-squircle {
      width: 48px;
      height: 48px;
      border-radius: 22.5%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.15);
      position: relative;
      overflow: hidden;
    }

    .sq-finder { background: linear-gradient(135deg, #5EC9F8 0%, #1463E8 100%); }
    .sq-safari { background: linear-gradient(135deg, #5EE0F8 0%, #1A6CF0 100%); }
    .sq-photos { background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%); }
    .sq-music { background: linear-gradient(135deg, #FC5C7D 0%, #FA2D55 100%); }
    .sq-calc { background: linear-gradient(135deg, #FF6B35 0%, #C2410C 100%); }
    .sq-specimen { background: linear-gradient(135deg, #0F2D6B 0%, #0284C7 100%); }
    .sq-notes { background: linear-gradient(135deg, #FFE57A 0%, #FFC600 100%); }
    .sq-calendar { background: linear-gradient(135deg, #ffffff 0%, #f5f5f7 100%); }
    .sq-clock { background: linear-gradient(135deg, #1C1C1E 0%, #000000 100%); }
    .sq-terminal { background: linear-gradient(135deg, #3A3A3C 0%, #121214 100%); }
    .sq-settings { background: linear-gradient(135deg, #8E8E93 0%, #48484A 100%); }
    .sq-web { background: linear-gradient(135deg, #e11d48 0%, #9f1239 100%); }

    /* ─── Desktop Widgets (macOS Sonoma / 27 Native Tiles) ─── */
    #desktop-widgets {
      position: absolute;
      top: calc(var(--menubar-height) + 16px);
      right: 20px;
      width: 290px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      z-index: 2;
      pointer-events: auto;
    }

    .widget-tile {
      background: rgba(22, 26, 36, 0.52);
      backdrop-filter: blur(35px) saturate(190%);
      -webkit-backdrop-filter: blur(35px) saturate(190%);
      border: 1px solid rgba(255, 255, 255, 0.18);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.25);
      border-radius: 20px;
      padding: 14px;
      color: #fff;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .widget-tile:hover {
      transform: translateY(-2px);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    }

    /* Analog Clock Widget */
    .widget-clock-wrap {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .analog-clock-canvas {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: radial-gradient(circle at 50% 50%, #1c2230 0%, #0d111a 100%);
      border: 2px solid rgba(255, 255, 255, 0.25);
      box-shadow: inset 0 2px 6px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.4);
      position: relative;
    }

    .clock-hand {
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform-origin: bottom center;
      border-radius: 4px;
    }

    .hand-hour { width: 3px; height: 26px; background: #fff; margin-left: -1.5px; }
    .hand-min { width: 2px; height: 34px; background: #cbd5e1; margin-left: -1px; }
    .hand-sec { width: 1.5px; height: 38px; background: #ff3b30; margin-left: -0.75px; }
    .clock-pin {
      position: absolute;
      top: 50%; left: 50%;
      width: 6px; height: 6px;
      margin: -3px 0 0 -3px;
      background: #ff3b30;
      border-radius: 50%;
    }

    /* Calendar Widget */
    .widget-cal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      font-size: 12px;
      font-weight: 700;
      color: #f59e0b;
    }

    .widget-cal-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      text-align: center;
      gap: 4px;
      font-size: 11px;
    }

    .cal-day-label {
      font-size: 9.5px;
      color: #94a3b8;
      font-weight: 600;
    }

    .cal-day {
      padding: 3px 0;
      border-radius: 50%;
      cursor: pointer;
      color: #e2e8f0;
    }

    .cal-day:hover {
      background: rgba(255, 255, 255, 0.15);
    }

    .cal-day.today {
      background: var(--accent-blue);
      font-weight: 700;
      color: #fff;
    }

    /* Weather & System Widget */
    .widget-wx-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .wx-temp {
      font-size: 26px;
      font-weight: 700;
      line-height: 1;
    }

    /* Sticky Note Widget */
    .widget-sticky {
      background: rgba(254, 240, 138, 0.88);
      color: #713f12;
      border-color: rgba(250, 204, 21, 0.4);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
    }

    .sticky-textarea {
      width: 100%;
      height: 70px;
      background: transparent;
      border: none;
      outline: none;
      resize: none;
      font-family: var(--font-system);
      font-size: 12px;
      color: #713f12;
      line-height: 1.5;
    }

    /* ─── Bottom Floating Dock ─── */
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
      height: 66px;
      padding: 0 14px;
      background: rgba(24, 28, 38, 0.48);
      backdrop-filter: blur(36px) saturate(210%);
      -webkit-backdrop-filter: blur(36px) saturate(210%);
      border: 1px solid rgba(255, 255, 255, 0.22);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.4);
      border-radius: 22px;
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

    .dock-dot {
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      margin-top: 3px;
      opacity: 0;
      transition: opacity 0.2s ease;
      box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
    }

    .dock-item.running .dock-dot {
      opacity: 1;
    }

    .dock-separator {
      width: 1px;
      height: 40px;
      background: rgba(255, 255, 255, 0.18);
      margin: 0 4px 6px 4px;
    }

    .dock-tooltip {
      position: absolute;
      top: -34px;
      background: rgba(24, 28, 38, 0.9);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
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
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.45);
    }

    .dock-item:hover .dock-tooltip {
      opacity: 1;
      transform: translateY(0);
    }

    @keyframes dockBounce {
      0%, 100% { transform: translateY(0); }
      35% { transform: translateY(-28px); }
      60% { transform: translateY(-14px); }
      80% { transform: translateY(-5px); }
    }

    .dock-bounce {
      animation: dockBounce 0.65s cubic-bezier(0.28, 0.84, 0.42, 1);
    }

    /* ─── Window System ─── */
    .app-window {
      position: absolute;
      border-radius: 12px;
      background: rgba(26, 31, 42, 0.82);
      backdrop-filter: blur(40px) saturate(190%);
      -webkit-backdrop-filter: blur(40px) saturate(190%);
      border: 1px solid var(--glass-border);
      box-shadow: var(--shadow-window);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-width: 340px;
      min-height: 240px;
      opacity: 0;
      transform: scale(0.96) translateY(12px);
      transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                  box-shadow 0.2s ease;
      z-index: 10;
    }

    .app-window.active {
      box-shadow: var(--shadow-window-active);
      border-color: rgba(255, 255, 255, 0.28);
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

    .window-titlebar {
      height: 42px;
      background: rgba(22, 26, 36, 0.55);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 14px;
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
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3);
    }

    .traffic-btn::after {
      content: '';
      font-size: 8px;
      color: rgba(0, 0, 0, 0.75);
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
      color: rgba(255, 255, 255, 0.9);
      pointer-events: none;
    }

    .window-body {
      flex: 1;
      overflow: auto;
      padding: 18px;
      position: relative;
      color: #e2e8f0;
      font-size: 13px;
    }

    /* Window Resize Handles */
    .resize-handle { position: absolute; z-index: 5; }
    .resize-handle-r { top: 0; right: 0; width: 6px; height: 100%; cursor: ew-resize; }
    .resize-handle-b { bottom: 0; left: 0; height: 6px; width: 100%; cursor: ns-resize; }
    .resize-handle-br { bottom: 0; right: 0; width: 14px; height: 14px; cursor: nwse-resize; }

    /* ─── Notes App (생성, 저장, 불러오기, 편집, 내보내기) ─── */
    .notes-container {
      display: flex;
      height: 100%;
      margin: -18px;
    }

    .notes-sidebar {
      width: 230px;
      background: rgba(20, 24, 34, 0.6);
      border-right: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      flex-direction: column;
    }

    .notes-toolbar {
      padding: 10px 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .notes-action-btn {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 6px;
      padding: 4px 10px;
      color: #fff;
      font-size: 11.5px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: background 0.15s;
    }

    .notes-action-btn:hover {
      background: var(--accent-blue);
      border-color: var(--accent-blue);
    }

    .notes-list {
      flex: 1;
      overflow-y: auto;
      padding: 8px;
    }

    .notes-item {
      padding: 9px 12px;
      border-radius: 8px;
      cursor: pointer;
      margin-bottom: 4px;
      transition: background 0.15s;
    }

    .notes-item:hover, .notes-item.active {
      background: rgba(255, 255, 255, 0.12);
    }

    .notes-item.active {
      border-left: 3px solid var(--accent-blue);
    }

    .notes-item-title {
      font-size: 12px;
      font-weight: 600;
      color: #fff;
      margin-bottom: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .notes-item-date {
      font-size: 10px;
      color: #94a3b8;
    }

    .notes-editor {
      flex: 1;
      display: flex;
      flex-direction: column;
      background: rgba(18, 22, 30, 0.4);
    }

    .editor-header {
      padding: 12px 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .editor-title-input {
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      background: transparent;
      border: none;
      outline: none;
      width: 70%;
      font-family: var(--font-system);
    }

    .editor-body-textarea {
      flex: 1;
      padding: 18px;
      background: transparent;
      border: none;
      outline: none;
      color: #e2e8f0;
      font-size: 13.5px;
      line-height: 1.8;
      font-family: var(--font-system);
      resize: none;
    }

    /* ─── Finder App (실제 파일 업로드, 저장, 다운로드, 삭제) ─── */
    .finder-container {
      display: flex;
      height: 100%;
      margin: -18px;
    }

    .finder-sidebar {
      width: 180px;
      background: rgba(20, 24, 34, 0.6);
      border-right: 1px solid rgba(255, 255, 255, 0.08);
      padding: 12px 8px;
    }

    .finder-main {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .finder-toolbar {
      padding: 8px 14px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(15, 20, 28, 0.4);
    }

    .finder-content {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
    }

    .finder-files-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
      gap: 16px;
    }

    .finder-file {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      cursor: pointer;
      padding: 8px 4px;
      border-radius: 8px;
      position: relative;
    }

    .finder-file:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .finder-file.selected {
      background: rgba(0, 122, 255, 0.35);
    }

    .finder-file-icon {
      width: 48px;
      height: 48px;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
    }

    .finder-file-icon img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .finder-file-name {
      font-size: 11.5px;
      color: #fff;
      word-break: break-all;
    }

    /* ─── Calendar.app (인터랙티브 일정 관리자) ─── */
    .cal-app-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    .cal-month-nav {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 18px;
      font-weight: 700;
    }

    .cal-full-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 6px;
    }

    .cal-full-cell {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      min-height: 64px;
      padding: 6px;
      cursor: pointer;
      transition: background 0.15s;
    }

    .cal-full-cell:hover {
      background: rgba(0, 122, 255, 0.2);
    }

    .cal-full-cell.current-day {
      border-color: var(--accent-blue);
      background: rgba(0, 122, 255, 0.15);
    }

    .cal-cell-num {
      font-weight: 700;
      font-size: 12px;
      margin-bottom: 4px;
    }

    .cal-event-tag {
      background: var(--accent-orange);
      color: #fff;
      font-size: 9.5px;
      padding: 1px 4px;
      border-radius: 3px;
      margin-bottom: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* ─── Clock.app (스톱워치 & 타이머 & 세계시계) ─── */
    .clock-tab-bar {
      display: flex;
      gap: 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 10px;
      margin-bottom: 16px;
    }

    .clock-tab-btn {
      padding: 6px 14px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #cbd5e1;
      cursor: pointer;
      font-weight: 600;
    }

    .clock-tab-btn.active {
      background: var(--accent-blue);
      color: #fff;
    }

    .stopwatch-display {
      font-family: var(--font-mono);
      font-size: 46px;
      font-weight: 700;
      text-align: center;
      margin: 20px 0;
      color: #fff;
    }

    .clock-ctrl-btns {
      display: flex;
      justify-content: center;
      gap: 16px;
    }

    /* ─── KCT & ASTM App Styles ─── */
    .calc-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .calc-card {
      background: rgba(15, 20, 28, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      padding: 16px;
    }
    .calc-title {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--accent-orange);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .form-group { margin-bottom: 12px; }
    .form-label { display: block; font-size: 11px; color: #94a3b8; margin-bottom: 4px; }
    .form-input {
      width: 100%;
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 6px;
      padding: 7px 10px;
      color: #fff;
      font-family: var(--font-mono);
      font-size: 12px;
      outline: none;
    }
    .form-input:focus { border-color: var(--accent-blue); box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.25); }
    .res-box {
      background: rgba(16, 24, 40, 0.85);
      border: 1px solid rgba(0, 168, 255, 0.3);
      border-radius: 8px;
      padding: 14px;
      margin-top: 10px;
    }
    .res-metric { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 12px; }
    .res-val { font-family: var(--font-mono); font-weight: 700; color: #38bdf8; }
    .res-val.highlight { font-size: 16px; color: #4ade80; }

    /* ─── Terminal Body ─── */
    .terminal-body {
      background: #090c10 !important;
      font-family: var(--font-mono) !important;
      font-size: 12px !important;
      line-height: 1.6;
      padding: 14px !important;
      color: #d1d5db;
    }
    .terminal-output { margin-bottom: 8px; white-space: pre-wrap; }
    .terminal-prompt-line { display: flex; align-items: center; gap: 6px; }
    .prompt-label { color: #4ade80; font-weight: 700; }
    .terminal-input { flex: 1; background: transparent; border: none; outline: none; color: #fff; font-family: var(--font-mono); font-size: 12px; caret-color: #38bdf8; }

    /* ─── Spotlight ─── */
    #spotlight-overlay {
      position: fixed; inset: 0; background: rgba(0, 0, 0, 0.35); backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px); display: none; align-items: flex-start; justify-content: center;
      padding-top: 15vh; z-index: 20000;
    }
    #spotlight-overlay.show { display: flex; }
    #spotlight-box {
      width: 600px; max-width: 90vw; background: rgba(30, 35, 48, 0.88); backdrop-filter: blur(40px) saturate(200%);
      -webkit-backdrop-filter: blur(40px) saturate(200%); border: 1px solid rgba(255, 255, 255, 0.24);
      border-radius: 14px; box-shadow: 0 30px 80px rgba(0, 0, 0, 0.7); overflow: hidden; animation: spotIn 0.15s ease-out;
    }
    @keyframes spotIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
    .spotlight-input-row { display: flex; align-items: center; padding: 14px 18px; gap: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
    .spotlight-input { flex: 1; background: transparent; border: none; outline: none; font-size: 18px; color: #fff; font-family: var(--font-system); }
    .spotlight-results { max-height: 340px; overflow-y: auto; padding: 6px; }
    .spotlight-item { display: flex; align-items: center; gap: 12px; padding: 9px 14px; border-radius: 8px; cursor: pointer; color: #e2e8f0; font-size: 13px; }
    .spotlight-item:hover, .spotlight-item.active { background: var(--accent-blue); color: #fff; }

    /* ─── Control Center ─── */
    #control-center {
      position: absolute; top: 34px; right: 12px; width: 320px; background: rgba(28, 33, 44, 0.9);
      backdrop-filter: blur(40px) saturate(200%); -webkit-backdrop-filter: blur(40px) saturate(200%);
      border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 16px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.65);
      padding: 14px; display: none; flex-direction: column; gap: 12px; z-index: 10005; animation: menuFadeIn 0.15s ease-out;
    }
    #control-center.show { display: flex; }
    .cc-row { display: flex; gap: 10px; }
    .cc-card { flex: 1; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 10px; display: flex; align-items: center; gap: 10px; }
    .cc-icon-btn { width: 32px; height: 32px; border-radius: 50%; background: var(--accent-blue); display: flex; align-items: center; justify-content: center; color: #fff; }
    .cc-slider-wrap { background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 12px; }
    .cc-slider-label { font-size: 11px; color: #94a3b8; margin-bottom: 6px; display: flex; justify-content: space-between; }
    .cc-slider { width: 100%; -webkit-appearance: none; height: 18px; border-radius: 9px; background: rgba(0, 0, 0, 0.4); outline: none; }
    .cc-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 22px; height: 22px; border-radius: 50%; background: #fff; cursor: pointer; }

    /* ─── Mobile Fallback ─── */
    #mobile-notice {
      display: none; position: absolute; top: 34px; left: 12px; right: 12px;
      background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(255, 107, 53, 0.5);
      padding: 10px 14px; border-radius: 10px; z-index: 10002; font-size: 12px; color: #f8fafc;
      align-items: center; justify-content: space-between;
    }
    @media (max-width: 768px) {
      #mobile-notice { display: flex; }
      #dock { height: 56px; padding-bottom: 5px; }
      .dock-item { width: 38px; height: 38px; }
      .app-window { min-width: 280px; }
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
  <div id="desktop-wallpaper" style="background-image: url('https://macos27.kimi.page/wallpaper-tahoe-day.jpg');"></div>

  <!-- Hidden File Input for Real PC File Upload -->
  <input type="file" id="real-file-uploader" style="display:none;" onchange="handleRealFileUpload(event)" />

  <!-- Mobile Notice -->
  <div id="mobile-notice">
    <div>🖥️ <strong>macOS 27 Pilot</strong>: 데스크톱 화면에서 최상의 경험을 제공합니다.</div>
    <a href="/" style="color:var(--accent-orange); font-weight:700; text-decoration:none; margin-left:8px;">웹 메인으로 ↗</a>
  </div>

  <!-- Top Menu Bar -->
  <header id="menubar" class="lg-refract">
    <div class="menu-left">
      <div class="menu-item menu-apple" id="apple-menu-btn" title="DAVHAVE Studio"></div>
      <div class="menu-item menu-appname" id="menu-active-app">Finder</div>
      <div class="menu-item" onclick="openApp('finder')">파일</div>
      <div class="menu-item" onclick="openApp('notes')">편집</div>
      <div class="menu-item" onclick="toggleWidgets()">위젯 보기</div>
      <div class="menu-item" onclick="openApp('calendar')">캘린더</div>
      <div class="menu-item" onclick="openApp('clock')">시계</div>
      <div class="menu-item" onclick="openApp('about')">도움말</div>
    </div>

    <!-- Apple Dropdown Menu -->
    <div class="menu-dropdown" id="apple-dropdown">
      <div class="dropdown-row" onclick="openApp('about')"><span>DAVHAVE Studio 정보</span></div>
      <div class="dropdown-divider"></div>
      <div class="dropdown-row" onclick="openApp('settings')"><span>시스템 설정...</span><span class="dropdown-shortcut">⌘,</span></div>
      <div class="dropdown-row" onclick="toggleSpotlight()"><span>Spotlight 검색</span><span class="dropdown-shortcut">⌘Space</span></div>
      <div class="dropdown-divider"></div>
      <div class="dropdown-row" onclick="window.location.href='/'"><span>웹 표준 홈으로 돌아가기</span><span class="dropdown-shortcut">⎋ Esc</span></div>
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
      <div class="status-icon status-clock" id="clock-display" onclick="openApp('clock')">오후 1:20</div>
    </div>
  </header>

  <!-- Control Center Dropdown -->
  <div id="control-center" class="lg-refract">
    <div class="cc-row">
      <div class="cc-card">
        <div class="cc-icon-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
        </div>
        <div>
          <div style="font-weight:600; font-size:12px;">Wi-Fi</div>
          <div style="font-size:10px; color:#94a3b8;">Cloudflare 0ms Edge</div>
        </div>
      </div>
      <div class="cc-card">
        <div class="cc-icon-btn" style="background:#10b981;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 6v6l4 2"></path></svg>
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
        <div style="font-size:10px; color:#94a3b8;">배경화면, 테마, 엔지니어링 스펙</div>
      </div>
      <span style="color:#64748b;">›</span>
    </div>
  </div>

  <!-- Desktop Workspace & Grid Icons -->
  <main id="desktop">
    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('finder')" data-app="finder">
      <div class="desktop-icon-img">
        <div class="app-squircle sq-finder">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"></rect><path d="M9 9h.01M15 9h.01M8 14s1.5 2 4 2 4-2 4-2"></path></svg>
        </div>
      </div>
      <span class="desktop-icon-label">Finder</span>
    </div>

    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('notes')" data-app="notes">
      <div class="desktop-icon-img">
        <div class="app-squircle sq-notes">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path><path d="M15 3v5h5M9 13h6M9 17h4"></path></svg>
        </div>
      </div>
      <span class="desktop-icon-label">메모.app</span>
    </div>

    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('calendar')" data-app="calendar">
      <div class="desktop-icon-img">
        <div class="app-squircle sq-calendar">
          <div style="text-align:center;">
            <div style="font-size:8px; font-weight:800; color:#ff3b30; text-transform:uppercase;">SEP</div>
            <div style="font-size:16px; font-weight:800; color:#1c1c1e; line-height:1;" id="icon-cal-date">29</div>
          </div>
        </div>
      </div>
      <span class="desktop-icon-label">캘린더.app</span>
    </div>

    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('clock')" data-app="clock">
      <div class="desktop-icon-img">
        <div class="app-squircle sq-clock">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </div>
      </div>
      <span class="desktop-icon-label">시계.app</span>
    </div>

    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('calc')" data-app="calc">
      <div class="desktop-icon-img">
        <div class="app-squircle sq-calc">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path></svg>
        </div>
      </div>
      <span class="desktop-icon-label">KCT 계산기.app</span>
    </div>

    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('specimen')" data-app="specimen">
      <div class="desktop-icon-img">
        <div class="app-squircle sq-specimen">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M10 2v7.31L4.19 19A2 2 0 0 0 5.9 22h12.2a2 2 0 0 0 1.71-3L14 9.31V2"></path><path d="M8.5 2h7M14 9.3h-4"></path></svg>
        </div>
      </div>
      <span class="desktop-icon-label">ASTM 시편 연구소</span>
    </div>

    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('terminal')" data-app="terminal">
      <div class="desktop-icon-img">
        <div class="app-squircle sq-terminal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
        </div>
      </div>
      <span class="desktop-icon-label">Terminal</span>
    </div>
  </main>

  <!-- ─── Desktop Widgets (macOS Sonoma / 27 Style Tiles) ─── -->
  <aside id="desktop-widgets">
    <!-- Widget 1: Analog Clock & Time -->
    <div class="widget-tile" onclick="openApp('clock')" style="cursor:pointer;" title="시계 앱 열기">
      <div class="widget-clock-wrap">
        <div class="analog-clock-canvas">
          <div class="clock-hand hand-hour" id="hand-hour"></div>
          <div class="clock-hand hand-min" id="hand-min"></div>
          <div class="clock-hand hand-sec" id="hand-sec"></div>
          <div class="clock-pin"></div>
        </div>
        <div>
          <div style="font-size:11px; font-weight:700; color:#94a3b8; text-transform:uppercase;">SEOUL · KST</div>
          <div style="font-size:22px; font-weight:800; font-variant-numeric:tabular-nums;" id="widget-digital-clock">13:20:00</div>
          <div style="font-size:11.5px; color:#cbd5e1;" id="widget-date-str">9월 29일 화요일</div>
        </div>
      </div>
    </div>

    <!-- Widget 2: Interactive Monthly Calendar -->
    <div class="widget-tile" onclick="openApp('calendar')" style="cursor:pointer;" title="캘린더 앱 열기">
      <div class="widget-cal-header">
        <span id="widget-cal-month-title">2026년 9월</span>
        <span style="font-size:10px; color:#94a3b8;">CALENDAR</span>
      </div>
      <div class="widget-cal-grid" id="widget-cal-days">
        <!-- Rendered by JS -->
      </div>
    </div>

    <!-- Widget 3: Real-time Weather & System Pulse -->
    <div class="widget-tile">
      <div class="widget-wx-row">
        <div>
          <div style="font-size:11px; font-weight:700; color:#94a3b8;">SEOUL · 맑음</div>
          <div class="wx-temp">22°</div>
          <div style="font-size:10.5px; color:#cbd5e1; margin-top:2px;">최고 25° · 최저 17°</div>
        </div>
        <div style="font-size:36px;">☀️</div>
      </div>
      <div style="margin-top:12px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.1); font-size:11px; display:flex; justify-content:space-between;">
        <span>엣지 가동률: <strong style="color:#4ade80;" id="cpu-pulse">12%</strong></span>
        <span>지연시간: <strong style="color:#38bdf8;">0ms</strong></span>
      </div>
    </div>

    <!-- Widget 4: Quick Desktop Sticky Note -->
    <div class="widget-tile widget-sticky">
      <div style="font-size:10px; font-weight:800; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:4px; opacity:0.8;">STICKY NOTE</div>
      <textarea class="sticky-textarea" id="sticky-note-input" placeholder="바탕화면 빠른 메모를 입력하세요 (자동 저장됨)..." oninput="saveStickyNote(this.value)"></textarea>
    </div>
  </aside>

  <!-- ─── Window: Notes (생성, 저장, 불러오기, 편집, 다운로드) ─── -->
  <div class="app-window" id="window-notes" style="width: 820px; height: 540px; top: 60px; left: 130px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-notes')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('notes')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('notes')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('notes')"></button>
      </div>
      <div class="window-title">메모 — DAVHAVE Engineering Notes</div>
      <div></div>
    </div>
    <div class="window-body" style="padding:0; overflow:hidden;">
      <div class="notes-container">
        <!-- Notes Sidebar -->
        <div class="notes-sidebar">
          <div class="notes-toolbar">
            <span style="font-size:12px; font-weight:700; color:#fff;">모든 메모</span>
            <button class="notes-action-btn" onclick="createNewNote()">+ 새 메모</button>
          </div>
          <div class="notes-list" id="notes-items-list">
            <!-- Injected by JS -->
          </div>
        </div>
        <!-- Notes Editor -->
        <div class="notes-editor">
          <div class="editor-header">
            <input type="text" class="editor-title-input" id="note-title-input" placeholder="메모 제목" oninput="handleNoteEdit()" />
            <div style="display:flex; align-items:center; gap:8px;">
              <span id="note-save-status" style="font-size:11px; color:#4ade80;">자동 저장됨</span>
              <button class="notes-action-btn" onclick="exportCurrentNote()" title="내 컴퓨터로 다운로드 (.md)">📥 저장</button>
              <button class="notes-action-btn" onclick="deleteCurrentNote()" style="color:#ff5f56;" title="메모 삭제">🗑️</button>
            </div>
          </div>
          <textarea class="editor-body-textarea" id="note-body-input" placeholder="메모 내용을 자유롭게 입력하세요. 입력 즉시 로컬에 영구 저장됩니다..." oninput="handleNoteEdit()"></textarea>
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-notes', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-notes', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-notes', 'br')"></div>
  </div>

  <!-- ─── Window: Finder (실제 파일 업로드, 저장, 다운로드) ─── -->
  <div class="app-window" id="window-finder" style="width: 820px; height: 520px; top: 80px; left: 160px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-finder')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('finder')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('finder')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('finder')"></button>
      </div>
      <div class="window-title">Finder — Documents &amp; User Files</div>
      <div></div>
    </div>
    <div class="window-body" style="padding:0; overflow:hidden;">
      <div class="finder-container">
        <div class="finder-sidebar">
          <div class="photos-nav-header">즐겨찾기</div>
          <div class="photos-nav-item active" onclick="filterFinderCategory('docs', this)">📁 <span>문서 (Documents)</span></div>
          <div class="photos-nav-item" onclick="openApp('photos')">🖼️ <span>사진 (Photos)</span></div>
          <div class="photos-nav-item" onclick="filterFinderCategory('uploads', this)">💾 <span>업로드된 파일</span></div>
          <div class="photos-nav-header" style="margin-top:10px;">iCloud</div>
          <div class="photos-nav-item">☁️ <span>iCloud Drive</span></div>
        </div>
        <div class="finder-main">
          <div class="finder-toolbar">
            <button class="notes-action-btn" onclick="triggerRealFileUpload()">⬆️ 파일 업로드 (내 컴퓨터)</button>
            <button class="notes-action-btn" onclick="createBlankFile()">+ 새 텍스트 파일</button>
            <button class="notes-action-btn" onclick="downloadSelectedFile()">📥 다운로드</button>
            <button class="notes-action-btn" onclick="deleteSelectedFile()" style="color:#ff5f56;">🗑️ 삭제</button>
          </div>
          <div class="finder-content" ondragover="handleDragOver(event)" ondrop="handleFileDrop(event)">
            <div class="finder-files-grid" id="finder-grid">
              <!-- Rendered by JS -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-finder', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-finder', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-finder', 'br')"></div>
  </div>

  <!-- ─── Window: Calendar.app (일정 관리자) ─── -->
  <div class="app-window" id="window-calendar" style="width: 780px; height: 540px; top: 90px; left: 190px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-calendar')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('calendar')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('calendar')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('calendar')"></button>
      </div>
      <div class="window-title">캘린더 — 2026년 9월</div>
      <div></div>
    </div>
    <div class="window-body">
      <div class="cal-app-header">
        <div class="cal-month-nav">
          <button class="notes-action-btn" onclick="changeCalMonth(-1)">❮</button>
          <span id="cal-app-month-title">2026년 9월</span>
          <button class="notes-action-btn" onclick="changeCalMonth(1)">❯</button>
        </div>
        <button class="notes-action-btn" onclick="promptAddEvent()">+ 새 일정 추가</button>
      </div>
      <div class="widget-cal-grid" style="font-size:12px; margin-bottom:8px;">
        <span class="cal-day-label" style="color:#ff5f56;">일</span>
        <span class="cal-day-label">월</span>
        <span class="cal-day-label">화</span>
        <span class="cal-day-label">수</span>
        <span class="cal-day-label">목</span>
        <span class="cal-day-label">금</span>
        <span class="cal-day-label">토</span>
      </div>
      <div class="cal-full-grid" id="cal-full-matrix">
        <!-- Rendered by JS -->
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-calendar', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-calendar', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-calendar', 'br')"></div>
  </div>

  <!-- ─── Window: Clock.app (세계 시계 & 스톱워치 & 타이머) ─── -->
  <div class="app-window" id="window-clock" style="width: 640px; height: 460px; top: 100px; left: 220px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-clock')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('clock')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('clock')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('clock')"></button>
      </div>
      <div class="window-title">시계 — 세계 시계 &amp; 스톱워치</div>
      <div></div>
    </div>
    <div class="window-body">
      <div class="clock-tab-bar">
        <button class="clock-tab-btn active" onclick="switchClockTab('stopwatch', this)">스톱워치</button>
        <button class="clock-tab-btn" onclick="switchClockTab('world', this)">세계 시계</button>
        <button class="clock-tab-btn" onclick="switchClockTab('timer', this)">타이머</button>
      </div>

      <!-- Tab: Stopwatch -->
      <div id="tab-stopwatch">
        <div class="stopwatch-display" id="sw-display">00:00.00</div>
        <div class="clock-ctrl-btns">
          <button id="sw-btn-start" onclick="toggleStopwatch()" style="width:72px; height:72px; border-radius:50%; background:#10b981; color:#fff; border:none; font-weight:700; cursor:pointer;">시작</button>
          <button id="sw-btn-reset" onclick="resetStopwatch()" style="width:72px; height:72px; border-radius:50%; background:#334155; color:#fff; border:none; font-weight:700; cursor:pointer;">재설정</button>
        </div>
      </div>

      <!-- Tab: World Clock -->
      <div id="tab-world" style="display:none;">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
          <div class="calc-card">
            <div style="font-size:11px; color:#94a3b8;">대한민국 (KST)</div>
            <div style="font-size:24px; font-weight:800; color:#fff;" id="world-seoul">13:20</div>
            <div style="font-size:11px; color:#38bdf8;">서울 (오늘, +0시간)</div>
          </div>
          <div class="calc-card">
            <div style="font-size:11px; color:#94a3b8;">미국 태평양 (PDT)</div>
            <div style="font-size:24px; font-weight:800; color:#fff;" id="world-cupertino">21:20</div>
            <div style="font-size:11px; color:#38bdf8;">쿠퍼티노 (어제, -16시간)</div>
          </div>
          <div class="calc-card">
            <div style="font-size:11px; color:#94a3b8;">영국 (BST)</div>
            <div style="font-size:24px; font-weight:800; color:#fff;" id="world-london">05:20</div>
            <div style="font-size:11px; color:#38bdf8;">런던 (오늘, -8시간)</div>
          </div>
          <div class="calc-card">
            <div style="font-size:11px; color:#94a3b8;">일본 (JST)</div>
            <div style="font-size:24px; font-weight:800; color:#fff;" id="world-tokyo">13:20</div>
            <div style="font-size:11px; color:#38bdf8;">도쿄 (오늘, +0시간)</div>
          </div>
        </div>
      </div>

      <!-- Tab: Timer -->
      <div id="tab-timer" style="display:none; text-align:center;">
        <div class="stopwatch-display" id="timer-display">05:00</div>
        <div class="clock-ctrl-btns">
          <button onclick="startPresetTimer(300)" class="notes-action-btn">5분</button>
          <button onclick="startPresetTimer(600)" class="notes-action-btn">10분</button>
          <button onclick="startPresetTimer(1500)" class="notes-action-btn">25분 (뽀모도로)</button>
          <button onclick="stopTimer()" class="notes-action-btn" style="color:#ff5f56;">정지</button>
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-clock', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-clock', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-clock', 'br')"></div>
  </div>

  <!-- ─── Window: Photos (온라인 사진 갤러리) ─── -->
  <div class="app-window" id="window-photos" style="width: 820px; height: 560px; top: 60px; left: 120px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-photos')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('photos')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('photos')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('photos')"></button>
      </div>
      <div class="window-title">사진 — Architectural &amp; Engineering Gallery</div>
      <div></div>
    </div>
    <div class="window-body" style="padding:0; overflow:hidden;">
      <div class="finder-container">
        <div class="finder-sidebar">
          <div class="photos-nav-header">보관함</div>
          <div class="photos-nav-item active" onclick="filterPhotos('all', this)">🖼️ <span>모든 사진</span></div>
          <div class="photos-nav-item" onclick="filterPhotos('arch', this)">🏢 <span>건축 &amp; 커튼월</span></div>
          <div class="photos-nav-item" onclick="filterPhotos('nature', this)">🌲 <span>풍경 &amp; 요세미티</span></div>
          <div class="photos-nav-item" onclick="filterPhotos('studio', this)">💻 <span>스튜디오</span></div>
        </div>
        <div class="finder-main" style="padding:16px; overflow-y:auto;">
          <div class="finder-files-grid" id="photos-grid" style="grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));"></div>
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-photos', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-photos', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-photos', 'br')"></div>
  </div>

  <!-- ─── Window: KCT Calculator ─── -->
  <div class="app-window" id="window-calc" style="width: 700px; height: 510px; top: 80px; left: 180px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-calc')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('calc')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('calc')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('calc')"></button>
      </div>
      <div class="window-title">KCT Silicon Suite — Dow Chemical Structural Calculator</div>
      <div></div>
    </div>
    <div class="window-body">
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
            <label class="form-label">설계 허용응력 Fd (140 kPa / 20 psi)</label>
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
              <span>권장 글루라인 두께:</span>
              <span class="res-val" id="res-glueline">6.0 mm</span>
            </div>
            <div class="res-metric">
              <span>구조 검증 상태:</span>
              <span class="res-val" style="color:#4ade80;" id="res-status">PASS (ASTM 규격 충족)</span>
            </div>
          </div>
          <div style="margin-top:14px; display:flex; gap:8px;">
            <button onclick="window.open('/projects/kct', '_blank')" style="background:var(--accent-orange); color:#fff; border:none; padding:7px 14px; border-radius:6px; font-size:11.5px; font-weight:600; cursor:pointer;">KCT 정식 플랫폼 열기 ↗</button>
          </div>
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-calc', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-calc', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-calc', 'br')"></div>
  </div>

  <!-- ─── Window: ASTM Specimen Lab ─── -->
  <div class="app-window" id="window-specimen" style="width: 740px; height: 530px; top: 95px; left: 210px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-specimen')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('specimen')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('specimen')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('specimen')"></button>
      </div>
      <div class="window-title">ASTM D638 / C1401 물리 인장 시편 가공 센터</div>
      <div></div>
    </div>
    <div class="window-body">
      <div class="calc-grid">
        <div class="calc-card">
          <div class="calc-title">📊 기계적 물성 파라미터 (ASTM D638 Type I)</div>
          <div class="res-metric"><span>전체 길이 (LO):</span><span class="res-val">165.0 mm</span></div>
          <div class="res-metric"><span>게이지 길이 (G):</span><span class="res-val">50.0 mm</span></div>
          <div class="res-metric"><span>협착부 폭 (W):</span><span class="res-val">13.0 mm</span></div>
          <div class="res-metric"><span>가공 공차:</span><span class="res-val" style="color:#4ade80;">±0.05 mm (ISO 527)</span></div>
        </div>
        <div class="calc-card">
          <div class="calc-title">🔬 3D 정밀 가공 및 인장 시험 의뢰</div>
          <p style="font-size:12px; color:#cbd5e1; line-height:1.6; margin-bottom:12px;">
            ASTM D638 / ASTM C1401 인장 시편을 3D 프린팅(PETG/CF/SLA 레진) 및 CNC 밀링으로 정밀 가공합니다.
          </p>
          <button onclick="window.open('/projects/kct/specimens', '_blank')" style="background:var(--accent-blue); color:#fff; border:none; padding:8px 14px; border-radius:6px; font-size:11.5px; font-weight:600; cursor:pointer;">시편 제작 견적 및 FAQ 허브 ↗</button>
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-specimen', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-specimen', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-specimen', 'br')"></div>
  </div>

  <!-- ─── Window: Terminal ─── -->
  <div class="app-window" id="window-terminal" style="width: 640px; height: 430px; top: 110px; left: 250px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-terminal')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('terminal')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('terminal')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('terminal')"></button>
      </div>
      <div class="window-title">Terminal — oscar@davhave-edge: ~ (zsh)</div>
      <div></div>
    </div>
    <div class="window-body terminal-body" onclick="document.getElementById('terminal-cli-input').focus()">
      <div class="terminal-output" id="terminal-screen">DAVHAVE Edge Architecture Shell (macOS 27 Full Suite)
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

  <!-- ─── Window: System Settings ─── -->
  <div class="app-window" id="window-settings" style="width: 620px; height: 480px; top: 100px; left: 200px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-settings')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('settings')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('settings')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('settings')"></button>
      </div>
      <div class="window-title">시스템 설정 — 배경화면 &amp; 스펙</div>
      <div></div>
    </div>
    <div class="window-body">
      <div class="settings-section">
        <div class="settings-title">데스크톱 배경화면 선택 (공식 온라인 고화질 팩)</div>
        <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:10px;">
          <div class="cal-day" style="height:70px; background-size:cover; background-position:center; background-image: url('https://macos27.kimi.page/wallpaper-tahoe-day.jpg'); border-radius:8px; border:2px solid var(--accent-blue);" onclick="setOnlineWallpaper('https://macos27.kimi.page/wallpaper-tahoe-day.jpg', this)"></div>
          <div class="cal-day" style="height:70px; background-size:cover; background-position:center; background-image: url('https://macos27.kimi.page/wallpaper-glass-dark.jpg'); border-radius:8px;" onclick="setOnlineWallpaper('https://macos27.kimi.page/wallpaper-glass-dark.jpg', this)"></div>
          <div class="cal-day" style="height:70px; background-size:cover; background-position:center; background-image: url('https://macos27.kimi.page/wallpaper-glass-light.jpg'); border-radius:8px;" onclick="setOnlineWallpaper('https://macos27.kimi.page/wallpaper-glass-light.jpg', this)"></div>
          <div class="cal-day" style="height:70px; background-size:cover; background-position:center; background-image: url('https://macos27.kimi.page/wallpaper-aurora.jpg'); border-radius:8px;" onclick="setOnlineWallpaper('https://macos27.kimi.page/wallpaper-aurora.jpg', this)"></div>
          <div class="cal-day" style="height:70px; background-size:cover; background-position:center; background-image: url('https://macos27.kimi.page/wallpaper-bigsur.jpg'); border-radius:8px;" onclick="setOnlineWallpaper('https://macos27.kimi.page/wallpaper-bigsur.jpg', this)"></div>
        </div>
      </div>
      <div style="margin-top:20px; background:rgba(0,0,0,0.3); border-radius:8px; padding:14px; font-size:12px; line-height:1.8;">
        <div><strong>운영체제:</strong> macOS 27 (DAVHAVE Liquid Glass Full Suite)</div>
        <div><strong>로컬 스토리지:</strong> 영구 파일 및 메모 자동 동기화 활성화됨</div>
        <div><strong>수석 아키텍트:</strong> Oscar Lee (DAVHAVE)</div>
      </div>
    </div>
  </div>

  <!-- ─── Window: About ─── -->
  <div class="app-window" id="window-about" style="width: 520px; height: 390px; top: 120px; left: 240px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-about')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('about')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('about')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('about')"></button>
      </div>
      <div class="window-title">DAVHAVE Studio — README.txt</div>
      <div></div>
    </div>
    <div class="window-body" style="font-family:var(--font-mono); font-size:12px; line-height:1.7;">
      <h3 style="color:var(--accent-orange); margin-bottom:8px;"># DAVHAVE PRECISION ENGINEERING STUDIO</h3>
      <p style="margin-bottom:12px;">
        DAVHAVE macOS 27 에디션에 파일 시스템 및 메모 에디터, 캘린더, 시계, 위젯 엔진이 완벽히 통합되었습니다.
      </p>
      <ul style="padding-left:18px; margin-bottom:16px;">
        <li><strong>파일 업로드 &amp; 다운로드:</strong> Finder에서 내 PC 파일을 올리고 받을 수 있습니다.</li>
        <li><strong>메모장 에디터:</strong> 메모 생성, 실시간 편집, 로컬 영구 저장이 동작합니다.</li>
        <li><strong>데스크톱 위젯:</strong> 실시간 아날로그 시계, 달력, 날씨, 스티키 노트 지원.</li>
      </ul>
      <button onclick="window.location.href='/'" style="background:var(--accent-blue); color:#fff; border:none; padding:8px 16px; border-radius:6px; font-weight:600; cursor:pointer;">웹 표준 홈 열기 ↗</button>
    </div>
  </div>

  <!-- ─── Spotlight Search Overlay ─── -->
  <div id="spotlight-overlay" onclick="handleSpotlightBackdrop(event)">
    <div id="spotlight-box">
      <div class="spotlight-input-row">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" id="spotlight-input" class="spotlight-input" placeholder="Spotlight 검색 (앱, 파일, 메모, 계산기...)" autocomplete="off" oninput="filterSpotlight(this.value)" onkeydown="handleSpotlightKey(event)" />
      </div>
      <div class="spotlight-results" id="spotlight-results"></div>
    </div>
  </div>

  <!-- ─── Bottom Floating Dock ─── -->
  <div id="dock-container">
    <nav id="dock" class="lg-refract" onmousemove="handleDockMouseMove(event)" onmouseleave="resetDockMagnification()">
      <!-- Finder -->
      <div class="dock-item" onclick="openApp('finder')" data-app="finder" title="Finder">
        <div class="app-squircle sq-finder">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"></rect><path d="M9 9h.01M15 9h.01M8 14s1.5 2 4 2 4-2 4-2"></path></svg>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">Finder</div>
      </div>

      <!-- Notes -->
      <div class="dock-item" onclick="openApp('notes')" data-app="notes" title="메모">
        <div class="app-squircle sq-notes">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path><path d="M15 3v5h5M9 13h6M9 17h4"></path></svg>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">메모.app</div>
      </div>

      <!-- Calendar -->
      <div class="dock-item" onclick="openApp('calendar')" data-app="calendar" title="캘린더">
        <div class="app-squircle sq-calendar">
          <div style="text-align:center;">
            <div style="font-size:7px; font-weight:800; color:#ff3b30; text-transform:uppercase;">SEP</div>
            <div style="font-size:15px; font-weight:800; color:#1c1c1e; line-height:1;">29</div>
          </div>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">캘린더.app</div>
      </div>

      <!-- Clock -->
      <div class="dock-item" onclick="openApp('clock')" data-app="clock" title="시계">
        <div class="app-squircle sq-clock">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">시계.app</div>
      </div>

      <!-- Photos -->
      <div class="dock-item" onclick="openApp('photos')" data-app="photos" title="사진">
        <div class="app-squircle sq-photos">
          <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" fill="#ff2d55"/><circle cx="17" cy="12" r="4" fill="#ff9500"/><circle cx="12" cy="17" r="4" fill="#4cd964"/><circle cx="7" cy="12" r="4" fill="#007aff"/></svg>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">사진</div>
      </div>

      <!-- KCT Calculator -->
      <div class="dock-item" onclick="openApp('calc')" data-app="calc" title="KCT 실리콘 계산기">
        <div class="app-squircle sq-calc">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path></svg>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">KCT 계산기</div>
      </div>

      <!-- ASTM Specimen Lab -->
      <div class="dock-item" onclick="openApp('specimen')" data-app="specimen" title="ASTM 인장 시편 연구소">
        <div class="app-squircle sq-specimen">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M10 2v7.31L4.19 19A2 2 0 0 0 5.9 22h12.2a2 2 0 0 0 1.71-3L14 9.31V2"></path><path d="M8.5 2h7M14 9.3h-4"></path></svg>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">ASTM 시편 연구소</div>
      </div>

      <!-- Terminal -->
      <div class="dock-item" onclick="openApp('terminal')" data-app="terminal" title="Terminal">
        <div class="app-squircle sq-terminal">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">Terminal.app</div>
      </div>

      <!-- Settings -->
      <div class="dock-item" onclick="openApp('settings')" data-app="settings" title="시스템 설정">
        <div class="app-squircle sq-settings">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">설정</div>
      </div>

      <div class="dock-separator"></div>

      <!-- Return to Web Standard -->
      <div class="dock-item" onclick="window.location.href='/'" title="웹 표준 홈으로">
        <div class="app-squircle sq-web">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">메인 웹으로 이동</div>
      </div>
    </nav>
  </div>

  <!-- ─── Client Scripts ─── -->
  <script>
    // System State
    let highestZ = 100;
    const runningApps = new Set(['finder']);
    let activeApp = 'finder';

    // ─── LocalStorage Key Constants ───
    const STORAGE_KEY_NOTES = 'davhave_macos_notes_v1';
    const STORAGE_KEY_FILES = 'davhave_macos_files_v1';
    const STORAGE_KEY_STICKY = 'davhave_macos_sticky_v1';
    const STORAGE_KEY_EVENTS = 'davhave_macos_events_v1';

    // ─── Default Notes ───
    const DEFAULT_NOTES = [
      {
        id: 'note-1',
        title: "Cloudflare 0ms 엣지 아키텍처의 비밀",
        date: "2026.09.28",
        content: "단 1ms도 허비하지 않는 글로벌 엣지 컴퓨팅\\n\\n기존 컨테이너나 가상머신 기반의 백엔드는 콜드 스타트 지연시간(100ms~1s)이 발생하지만, Cloudflare Workers는 V8 Isolate 기반으로 전 세계 300+ 엣지 데이터센터에서 0ms 콜드스타트로 즉시 실행됩니다.\\n\\nDAVHAVE는 D1 SQL 데이터베이스 및 R2 오브젝트 스토리지를 글로벌 엣지와 직접 바인딩하여 지연을 최소화합니다."
      },
      {
        id: 'note-2',
        title: "Dow Chemical 실리콘 구조 바이트 산정 공식",
        date: "2026.09.25",
        content: "ASTM C1401 기준 구조용 실리콘 바이트 산정 공식:\\n\\nB = (W * a) / (2 * Fd)\\n\\n여기서 W는 설계 풍하중(kPa), a는 유리 단변 길이(mm), Fd는 설계 허용 응력(통상 140 kPa)입니다. ASTM 규정에 따라 어떠한 경우에도 6.0mm 미만은 허용되지 않습니다."
      },
      {
        id: 'note-3',
        title: "SEO URL 설계: 해시 앵커(#)를 배제해야 하는 이유",
        date: "2026.09.20",
        content: "색인 가능한 전용 URL(Canonical Route)의 중요성\\n\\n단일 페이지 애플리케이션(SPA)에서 자주 사용하는 해시 앵커(/#section)는 브라우저 내부 스크롤용 프래그먼트에 불과하며, 검색엔진 로봇은 이를 별개의 페이지로 색인하지 않습니다.\\n\\nSEO 가치가 있는 모든 콘텐츠는 반드시 고유한 SSR 전용 라우트를 가져야 합니다."
      }
    ];

    // ─── Default Virtual Files ───
    const DEFAULT_FILES = [
      { id: 'f1', name: 'Curtain_Wall_Detail.jpg', type: 'image', url: 'https://macos27.kimi.page/photo-4.jpg', size: '395 KB' },
      { id: 'f2', name: 'Yosemite_Sunrise.jpg', type: 'image', url: 'https://macos27.kimi.page/photo-1.jpg', size: '708 KB' },
      { id: 'f3', name: 'KCT_Silicon_Spec.txt', type: 'text', content: 'Dow Chemical 6대 실리콘 공학 연산 규격서 v2.4\\n- 풍하중 바이트 공식: B = (W * a) / (2 * Fd)\\n- 글루라인 최소 기준: G >= 6.0mm', size: '12 KB' },
      { id: 'f4', name: 'ASTM_D638_Specimen.txt', type: 'text', content: 'ASTM D638 Type I 인장 시편 가공 규격\\n- 전체 길이: 165.0mm\\n- 게이지 길이: 50.0mm\\n- 폭: 13.0mm', size: '8 KB' }
    ];

    let notes = [];
    let currentNoteId = null;
    let files = [];
    let selectedFileId = null;

    // ─── Initialize ───
    window.addEventListener('DOMContentLoaded', () => {
      loadStorageData();
      initClocksAndWidgets();
      renderFinderFiles();
      renderCalendarDays();

      // Launch Finder on start
      openApp('finder');

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

    // ─── LocalStorage Management ───
    function loadStorageData() {
      try {
        const storedNotes = localStorage.getItem(STORAGE_KEY_NOTES);
        notes = storedNotes ? JSON.parse(storedNotes) : DEFAULT_NOTES;
      } catch {
        notes = DEFAULT_NOTES;
      }

      try {
        const storedFiles = localStorage.getItem(STORAGE_KEY_FILES);
        files = storedFiles ? JSON.parse(storedFiles) : DEFAULT_FILES;
      } catch {
        files = DEFAULT_FILES;
      }

      const storedSticky = localStorage.getItem(STORAGE_KEY_STICKY);
      if (storedSticky) {
        document.getElementById('sticky-note-input').value = storedSticky;
      }

      renderNotesList();
      if (notes.length > 0) {
        selectNote(notes[0].id);
      }
    }

    function saveNotesToStorage() {
      try {
        localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(notes));
      } catch (err) {
        console.warn('Storage save failed:', err);
      }
    }

    function saveFilesToStorage() {
      try {
        localStorage.setItem(STORAGE_KEY_FILES, JSON.stringify(files));
      } catch (err) {
        console.warn('Storage save failed:', err);
      }
    }

    function saveStickyNote(val) {
      localStorage.setItem(STORAGE_KEY_STICKY, val);
    }

    // ─── Notes App Logic (생성, 저장, 불러오기, 편집, 다운로드) ───
    function renderNotesList() {
      const listEl = document.getElementById('notes-items-list');
      listEl.innerHTML = notes.map(n => \`
        <div class="notes-item \${n.id === currentNoteId ? 'active' : ''}" onclick="selectNote('\${n.id}')">
          <div class="notes-item-title">\${escapeHtml(n.title || '무제 메모')}</div>
          <div class="notes-item-date">\${n.date}</div>
        </div>
      \`).join('');
    }

    function selectNote(id) {
      currentNoteId = id;
      const note = notes.find(n => n.id === id);
      if (!note) return;

      document.getElementById('note-title-input').value = note.title;
      document.getElementById('note-body-input').value = note.content;
      document.getElementById('note-save-status').textContent = '저장됨';
      renderNotesList();
    }

    function createNewNote() {
      const newId = 'note-' + Date.now();
      const newNote = {
        id: newId,
        title: '새 메모',
        date: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
        content: ''
      };
      notes.unshift(newNote);
      saveNotesToStorage();
      selectNote(newId);
      document.getElementById('note-title-input').focus();
    }

    function handleNoteEdit() {
      if (!currentNoteId) return;
      const note = notes.find(n => n.id === currentNoteId);
      if (!note) return;

      note.title = document.getElementById('note-title-input').value;
      note.content = document.getElementById('note-body-input').value;
      note.date = new Date().toISOString().slice(0, 10).replace(/-/g, '.');

      document.getElementById('note-save-status').textContent = '저장 중...';
      saveNotesToStorage();
      renderNotesList();

      setTimeout(() => {
        document.getElementById('note-save-status').textContent = '자동 저장됨';
      }, 300);
    }

    function deleteCurrentNote() {
      if (!currentNoteId) return;
      if (!confirm('이 메모를 삭제하시겠습니까?')) return;

      notes = notes.filter(n => n.id !== currentNoteId);
      saveNotesToStorage();

      if (notes.length > 0) {
        selectNote(notes[0].id);
      } else {
        createNewNote();
      }
    }

    function exportCurrentNote() {
      if (!currentNoteId) return;
      const note = notes.find(n => n.id === currentNoteId);
      if (!note) return;

      const blob = new Blob([\`# \${note.title}\\n\\n\${note.content}\`], { type: 'text/markdown;charset=utf-8' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = \`\${note.title.replace(/[^a-zA-Z0-9가-힣]/g, '_') || 'note'}.md\`;
      a.click();
    }

    // ─── Real File System & Finder (업로드, 다운로드, 삭제) ───
    function renderFinderFiles() {
      const grid = document.getElementById('finder-grid');
      grid.innerHTML = files.map(f => \`
        <div class="finder-file \${f.id === selectedFileId ? 'selected' : ''}" onclick="selectFinderFile('\${f.id}')" ondblclick="openFinderFile('\${f.id}')">
          <div class="finder-file-icon">
            \${f.type === 'image' ? \`<img src="\${f.url}" alt="\${f.name}" />\` : (f.name.endsWith('.txt') ? '📄' : '📁')}
          </div>
          <div class="finder-file-name">\${escapeHtml(f.name)}</div>
        </div>
      \`).join('');
    }

    function selectFinderFile(id) {
      selectedFileId = id;
      renderFinderFiles();
    }

    function openFinderFile(id) {
      const file = files.find(f => f.id === id);
      if (!file) return;

      if (file.type === 'image') {
        openApp('photos');
      } else if (file.type === 'text') {
        // Open inside notes
        const existing = notes.find(n => n.title === file.name);
        if (existing) {
          selectNote(existing.id);
        } else {
          const newId = 'note-' + Date.now();
          notes.unshift({ id: newId, title: file.name, date: '2026.09.29', content: file.content || '' });
          saveNotesToStorage();
          selectNote(newId);
        }
        openApp('notes');
      }
    }

    function triggerRealFileUpload() {
      document.getElementById('real-file-uploader').click();
    }

    function handleRealFileUpload(e) {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      const isImg = file.type.startsWith('image/');

      reader.onload = (event) => {
        const newFile = {
          id: 'file-' + Date.now(),
          name: file.name,
          type: isImg ? 'image' : 'text',
          url: isImg ? event.target.result : null,
          content: !isImg ? event.target.result : null,
          size: (file.size / 1024).toFixed(1) + ' KB'
        };
        files.unshift(newFile);
        saveFilesToStorage();
        renderFinderFiles();
        alert(\`파일 "\${file.name}"이 Finder에 성공적으로 업로드되었습니다!\`);
      };

      if (isImg) {
        reader.readAsDataURL(file);
      } else {
        reader.readAsText(file);
      }
    }

    function createBlankFile() {
      const name = prompt('새 텍스트 파일 이름을 입력하세요:', '새문서.txt');
      if (!name) return;

      files.unshift({
        id: 'file-' + Date.now(),
        name: name.endsWith('.txt') ? name : name + '.txt',
        type: 'text',
        content: '새로 작성된 텍스트 파일입니다.',
        size: '1 KB'
      });
      saveFilesToStorage();
      renderFinderFiles();
    }

    function downloadSelectedFile() {
      if (!selectedFileId) {
        alert('다운로드할 파일을 먼저 선택해주세요.');
        return;
      }
      const file = files.find(f => f.id === selectedFileId);
      if (!file) return;

      const a = document.createElement('a');
      if (file.url) {
        a.href = file.url;
      } else {
        const blob = new Blob([file.content || ''], { type: 'text/plain;charset=utf-8' });
        a.href = URL.createObjectURL(blob);
      }
      a.download = file.name;
      a.click();
    }

    function deleteSelectedFile() {
      if (!selectedFileId) return;
      const file = files.find(f => f.id === selectedFileId);
      if (!file) return;

      if (!confirm(\`"\${file.name}" 파일을 삭제하시겠습니까?\`)) return;
      files = files.filter(f => f.id !== selectedFileId);
      selectedFileId = null;
      saveFilesToStorage();
      renderFinderFiles();
    }

    function handleDragOver(e) { e.preventDefault(); }
    function handleFileDrop(e) {
      e.preventDefault();
      if (e.dataTransfer.files.length > 0) {
        document.getElementById('real-file-uploader').files = e.dataTransfer.files;
        handleRealFileUpload({ target: { files: e.dataTransfer.files } });
      }
    }

    // ─── Clocks & Widgets (Analog Clock & World Clock) ───
    function initClocksAndWidgets() {
      updateClocks();
      setInterval(updateClocks, 1000);
      animateCpuPulse();
    }

    function updateClocks() {
      const now = new Date();
      const sec = now.getSeconds();
      const min = now.getMinutes();
      const hr = now.getHours();

      // Analog clock hands
      const secDeg = (sec / 60) * 360;
      const minDeg = ((min + sec / 60) / 60) * 360;
      const hrDeg = ((hr % 12 + min / 60) / 12) * 360;

      const secHand = document.getElementById('hand-sec');
      const minHand = document.getElementById('hand-min');
      const hrHand = document.getElementById('hand-hour');

      if (secHand) secHand.style.transform = \`rotate(\${secDeg}deg)\`;
      if (minHand) minHand.style.transform = \`rotate(\${minDeg}deg)\`;
      if (hrHand) hrHand.style.transform = \`rotate(\${hrDeg}deg)\`;

      // Digital strings
      const timeStr = String(hr).padStart(2, '0') + ':' + String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
      const menubarTime = (hr >= 12 ? '오후 ' : '오전 ') + (hr % 12 || 12) + ':' + String(min).padStart(2, '0');

      document.getElementById('clock-display').textContent = menubarTime;
      const digEl = document.getElementById('widget-digital-clock');
      if (digEl) digEl.textContent = timeStr;

      // World clock
      const wcSeoul = document.getElementById('world-seoul');
      if (wcSeoul) wcSeoul.textContent = String(hr).padStart(2, '0') + ':' + String(min).padStart(2, '0');

      const wcCup = document.getElementById('world-cupertino');
      if (wcCup) {
        const cupHr = (hr - 16 + 24) % 24;
        wcCup.textContent = String(cupHr).padStart(2, '0') + ':' + String(min).padStart(2, '0');
      }

      const wcLon = document.getElementById('world-london');
      if (wcLon) {
        const lonHr = (hr - 8 + 24) % 24;
        wcLon.textContent = String(lonHr).padStart(2, '0') + ':' + String(min).padStart(2, '0');
      }

      const wcTok = document.getElementById('world-tokyo');
      if (wcTok) wcTok.textContent = String(hr).padStart(2, '0') + ':' + String(min).padStart(2, '0');
    }

    function animateCpuPulse() {
      setInterval(() => {
        const val = Math.floor(8 + Math.random() * 8);
        const el = document.getElementById('cpu-pulse');
        if (el) el.textContent = val + '%';
      }, 2500);
    }

    // ─── Calendar Widget & App ───
    let calViewYear = 2026;
    let calViewMonth = 8; // 0-indexed (8 = September)

    function renderCalendarDays() {
      // Widget mini calendar
      const widgetGrid = document.getElementById('widget-cal-days');
      if (widgetGrid) {
        let html = \`
          <span class="cal-day-label">일</span><span class="cal-day-label">월</span>
          <span class="cal-day-label">화</span><span class="cal-day-label">수</span>
          <span class="cal-day-label">목</span><span class="cal-day-label">금</span>
          <span class="cal-day-label">토</span>
        \`;
        // Pad for September 2026 (Starts on Tuesday = index 2)
        for (let i = 0; i < 2; i++) html += '<span></span>';
        for (let d = 1; d <= 30; d++) {
          const isToday = d === 29;
          html += \`<span class="cal-day \${isToday ? 'today' : ''}" onclick="alert('2026년 9월 \${d}일')">\${d}</span>\`;
        }
        widgetGrid.innerHTML = html;
      }

      // Full Calendar App matrix
      const fullGrid = document.getElementById('cal-full-matrix');
      if (fullGrid) {
        let html = '';
        for (let i = 0; i < 2; i++) html += '<div class="cal-full-cell" style="opacity:0.3;"></div>';
        for (let d = 1; d <= 30; d++) {
          const isToday = d === 29;
          let event = '';
          if (d === 10) event = '<div class="cal-event-tag">KCT 계산기 배포</div>';
          if (d === 15) event = '<div class="cal-event-tag">ASTM 인장 시험</div>';
          if (d === 29) event = '<div class="cal-event-tag" style="background:#007aff;">macOS 에디션 출시</div>';

          html += \`
            <div class="cal-full-cell \${isToday ? 'current-day' : ''}" onclick="openDaySchedule(\${d})">
              <div class="cal-cell-num">\${d}</div>
              \${event}
            </div>
          \`;
        }
        fullGrid.innerHTML = html;
      }
    }

    function changeCalMonth(delta) {
      calViewMonth += delta;
      const d = new Date(calViewYear, calViewMonth, 1);
      document.getElementById('cal-app-month-title').textContent = \`\${d.getFullYear()}년 \${d.getMonth() + 1}월\`;
    }

    function promptAddEvent() {
      const title = prompt('추가할 일정 제목을 입력하세요:', '실리콘 풍하중 현장 검측');
      if (!title) return;
      alert(\`일정 "\${title}"이 캘린더에 성공적으로 등록되었습니다.\`);
    }

    function openDaySchedule(d) {
      alert(\`2026년 9월 \${d}일 일정 상세 보기\`);
    }

    // ─── Stopwatch & Timer Logic ───
    let swRunning = false;
    let swTime = 0;
    let swTimerId = null;

    function toggleStopwatch() {
      const btn = document.getElementById('sw-btn-start');
      if (swRunning) {
        clearInterval(swTimerId);
        swRunning = false;
        btn.textContent = '시작';
        btn.style.background = '#10b981';
      } else {
        swRunning = true;
        btn.textContent = '중단';
        btn.style.background = '#ef4444';
        swTimerId = setInterval(() => {
          swTime += 10;
          const ms = Math.floor((swTime % 1000) / 10);
          const s = Math.floor((swTime / 1000) % 60);
          const m = Math.floor(swTime / 60000);
          document.getElementById('sw-display').textContent =
            String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0') + '.' + String(ms).padStart(2, '0');
        }, 10);
      }
    }

    function resetStopwatch() {
      clearInterval(swTimerId);
      swRunning = false;
      swTime = 0;
      document.getElementById('sw-display').textContent = '00:00.00';
      const btn = document.getElementById('sw-btn-start');
      btn.textContent = '시작';
      btn.style.background = '#10b981';
    }

    function switchClockTab(tab, elem) {
      document.querySelectorAll('.clock-tab-btn').forEach(b => b.classList.remove('active'));
      if (elem) elem.classList.add('active');

      document.getElementById('tab-stopwatch').style.display = tab === 'stopwatch' ? 'block' : 'none';
      document.getElementById('tab-world').style.display = tab === 'world' ? 'block' : 'none';
      document.getElementById('tab-timer').style.display = tab === 'timer' ? 'block' : 'none';
    }

    let timerRemain = 300;
    let timerInterval = null;

    function startPresetTimer(sec) {
      clearInterval(timerInterval);
      timerRemain = sec;
      updateTimerDisplay();
      timerInterval = setInterval(() => {
        timerRemain--;
        updateTimerDisplay();
        if (timerRemain <= 0) {
          clearInterval(timerInterval);
          alert('⏰ 설정한 타이머 시간이 완료되었습니다!');
        }
      }, 1000);
    }

    function stopTimer() {
      clearInterval(timerInterval);
    }

    function updateTimerDisplay() {
      const m = Math.floor(timerRemain / 60);
      const s = timerRemain % 60;
      document.getElementById('timer-display').textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    }

    // ─── Photos App Logic ───
    const PHOTOS_DATA = [
      { id: 'p1', cat: 'nature', title: 'Yosemite Sunrise', url: 'https://macos27.kimi.page/photo-1.jpg' },
      { id: 'p2', cat: 'arch', title: 'Lake Architecture Glass', url: 'https://macos27.kimi.page/photo-2.jpg' },
      { id: 'p3', cat: 'arch', title: 'Modern Glass Pavilion', url: 'https://macos27.kimi.page/photo-3.jpg' },
      { id: 'p4', cat: 'arch', title: 'Curtain Wall Facade', url: 'https://macos27.kimi.page/photo-4.jpg' },
      { id: 'p5', cat: 'nature', title: 'Redwood Mist Trail', url: 'https://macos27.kimi.page/photo-5.jpg' },
      { id: 'p6', cat: 'studio', title: 'Engineering Studio Setup', url: 'https://macos27.kimi.page/photo-6.jpg' },
      { id: 'p7', cat: 'studio', title: 'Tokyo Neon Skyline', url: 'https://macos27.kimi.page/photo-7.jpg' },
      { id: 'p8', cat: 'arch', title: 'Precision Joinery & Sealant', url: 'https://macos27.kimi.page/photo-8.jpg' }
    ];

    function filterPhotos(cat, elem) {
      document.querySelectorAll('.photos-nav-item').forEach(i => i.classList.remove('active'));
      if (elem) elem.classList.add('active');

      const grid = document.getElementById('photos-grid');
      const filtered = cat === 'all' ? PHOTOS_DATA : PHOTOS_DATA.filter(p => p.cat === cat);
      grid.innerHTML = filtered.map(p => \`
        <div class="finder-file" onclick="window.open('\${p.url}', '_blank')">
          <div class="finder-file-icon" style="width:100%; height:120px;">
            <img src="\${p.url}" alt="\${p.title}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;" />
          </div>
          <div class="finder-file-name" style="margin-top:6px;">\${p.title}</div>
        </div>
      \`).join('');
    }

    // ─── App Window Management ───
    function openApp(id) {
      const win = document.getElementById('window-' + id);
      if (!win) return;

      win.classList.remove('minimized');
      win.classList.add('open');
      bringToFront(win, id);

      runningApps.add(id);
      updateDockRunningStatus();

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
        win.style.width = win.dataset.origWidth || '780px';
        win.style.height = win.dataset.origHeight || '520px';
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

      const titles = {
        finder: 'Finder',
        notes: 'Notes',
        calendar: 'Calendar',
        clock: 'Clock',
        photos: 'Photos',
        calc: 'KCT Calculator',
        specimen: 'ASTM Specimen Lab',
        terminal: 'Terminal',
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

    // ─── Window Dragging & Resizing ───
    let isDragging = false, dragTarget = null, dragOffsetX = 0, dragOffsetY = 0;

    function startDragWindow(e, winId) {
      if (e.target.classList.contains('traffic-btn') || e.target.tagName === 'BUTTON') return;
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
      if (newY < 28) newY = 28;
      dragTarget.style.left = newX + 'px';
      dragTarget.style.top = newY + 'px';
    }

    function stopDragWindow() {
      isDragging = false;
      dragTarget = null;
      document.removeEventListener('mousemove', onDragWindow);
      document.removeEventListener('mouseup', stopDragWindow);
    }

    let isResizing = false, resizeTarget = null, resizeType = null, startW = 0, startH = 0, startX = 0, startY = 0;

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
        const nw = Math.max(340, startW + dx);
        resizeTarget.style.width = nw + 'px';
      }
      if (resizeType.includes('b')) {
        const nh = Math.max(240, startH + dy);
        resizeTarget.style.height = nh + 'px';
      }
    }

    function stopResizeWindow() {
      isResizing = false;
      resizeTarget = null;
      document.removeEventListener('mousemove', onResizeWindow);
      document.removeEventListener('mouseup', stopResizeWindow);
    }

    // ─── Dock Magnification (Parabolic Curve) ───
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
          const scale = 1 + factor * 0.45;
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

    // ─── KCT Silicone Calculator Engine ───
    function runSiliconCalc() {
      const w = parseFloat(document.getElementById('calc-wind').value) || 2.5;
      const a = parseFloat(document.getElementById('calc-short').value) || 1200;
      const fd = parseFloat(document.getElementById('calc-fd').value) || 140;

      let bite = (w * a) / (2 * fd);
      if (bite < 6.0) bite = 6.0;
      let glueline = Math.max(6.0, bite / 2);

      document.getElementById('res-bite').textContent = bite.toFixed(1) + ' mm';
      document.getElementById('res-glueline').textContent = glueline.toFixed(1) + ' mm';
      document.getElementById('res-status').textContent = bite >= 6.0 ? 'PASS (ASTM 규격 충족)' : '주의 (최소 6mm 권장)';
    }

    // ─── Terminal (davhave-cli) ───
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
  whoami     - Studio architect profile
  notes      - Open persistent notes editor
  files      - List files in virtual filesystem
  calc       - Calculate silicone bite [e.g. calc 2.5 1200]
  clock      - Open clock & stopwatch app
  calendar   - Open calendar app
  open <app> - Open app window
  clear      - Clear terminal screen\`;
      } else if (lower === 'whoami') {
        response = "Oscar Lee (DAVHAVE) — Lead Architect in High-Performance Edge Systems & Industrial Computing.";
      } else if (lower === 'files') {
        response = files.map(f => \`- \${f.name} (\${f.size})\`).join('\\n');
      } else if (lower.startsWith('open ')) {
        const app = lower.split(' ')[1];
        openApp(app);
        response = \`Opened \${app}.app\`;
      } else if (lower === 'clear') {
        screen.textContent = 'DAVHAVE Edge Architecture Shell (v2.7.0)\\n';
        return;
      } else {
        response = \`zsh: command not found: \${cmd}. Type "help" for a list of commands.\`;
      }

      screen.textContent += response;
      const body = document.querySelector('.terminal-body');
      body.scrollTop = body.scrollHeight;
    }

    // ─── Spotlight Search ───
    const SEARCH_ITEMS = [
      { name: 'Finder (파일 관리자)', type: 'App', icon: '📁', action: () => openApp('finder') },
      { name: '메모 (Notes)', type: 'App', icon: '📝', action: () => openApp('notes') },
      { name: '캘린더 (Calendar)', type: 'App', icon: '📅', action: () => openApp('calendar') },
      { name: '시계 (Clock & Stopwatch)', type: 'App', icon: '⏰', action: () => openApp('clock') },
      { name: '사진 (Photos)', type: 'App', icon: '🖼️', action: () => openApp('photos') },
      { name: 'KCT 실리콘 계산기', type: 'App', icon: '🧮', action: () => openApp('calc') },
      { name: 'ASTM 인장 시편 연구소', type: 'App', icon: '🧪', action: () => openApp('specimen') },
      { name: 'Terminal (davhave-cli)', type: 'App', icon: '💻', action: () => openApp('terminal') },
      { name: '시스템 설정 (Wallpaper)', type: 'App', icon: '⚙️', action: () => openApp('settings') },
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
      if (e.key === 'Enter') executeSpotlightItem(0);
    }

    function toggleControlCenter() {
      document.getElementById('control-center').classList.toggle('show');
    }

    function toggleWidgets() {
      const w = document.getElementById('desktop-widgets');
      w.style.display = (w.style.display === 'none') ? 'flex' : 'none';
    }

    function adjustBrightness(val) {
      document.getElementById('brightness-val').textContent = val + '%';
      document.body.style.filter = \`brightness(\${val}%)\`;
    }

    function setOnlineWallpaper(url, elem) {
      document.getElementById('desktop-wallpaper').style.backgroundImage = \`url('\${url}')\`;
    }

    function selectDesktopIcon(elem) {
      document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
      elem.classList.add('selected');
    }

    function escapeHtml(str) {
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
  </script>
</body>
</html>`;
}
