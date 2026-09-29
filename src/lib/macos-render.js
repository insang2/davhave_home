/**
 * DAVHAVE macOS 27 Edition (High-Fidelity macOS Web Experience)
 * Highly faithful to native macOS Ventura/Sonoma/Sequoia GUI,
 * inspired by top github.com/topics/macos-web open-source projects:
 * - SF Pro Typography, Apple Font Smoothing & Tracking
 * - Pixel-accurate Window Controls (Traffic Lights with hover symbols)
 * - Safari Browser (URL address bar, favorites bookmarks, tabs, navigation history)
 * - Photos App (Photo gallery, Lightbox viewer, EXIF data, One-click Set-as-Wallpaper)
 * - Photo Booth / FaceTime (Live webcam feed, countdown timer, white flash, filters, shutter sound)
 * - Native Apple Calculator (round orange/gray keypad, full keyboard input support)
 * - VS Code Developer Studio (syntax highlighting, file tree, tabs, copy code)
 * - Notes Editor (Create, Edit, Auto-save to LocalStorage, Export .md)
 * - Music Player (Album art, song info, track scrubber, Web Audio ambient tone generator)
 * - Trash Can (Empty/Full states in Dock, put back, empty trash with crunch sound)
 * - Fullscreen Launchpad with instant search filtering
 * - Mission Control (Window Exposé overview grid with instant window switching)
 * - Big Sur / Sequoia 2-Column Control Center (Wi-Fi, Bluetooth, AirDrop, Focus, Brightness, Sound, Now Playing)
 * - Spotlight Search with Instant Math Calculator (e.g. 24 * 365, sqrt(144)) & App Search
 * - Lock Screen & Apple Reboot Sequence with authentic synthesized Apple Startup Chime (F# major chord)
 * - Desktop Right-Click Context Menu & Dynamic Menubar
 * - Real File System (Upload from local PC, Download, LocalStorage persist)
 * - Desktop Widgets (Analog canvas clock, Digital clock, Calendar, Weather card, CPU pulse, Sticky note)
 * - High-Res Online Wallpapers & Photos from macos27.kimi.page
 */

export function renderMacOsPage() {
  return `<!DOCTYPE html>
<html lang="ko" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>macOS 27 (DAVHAVE Edition) — High-Fidelity Web OS</title>
  <meta name="description" content="macOS 27 — a pixel-faithful Liquid Glass macOS simulation with Safari, Photos, Photo Booth, Calculator, Code Studio, File System, Notes, Mission Control, Control Center & Engineering Suite." />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <meta name="theme-color" content="#000000" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300..800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <style>
    /* ─── Apple Typography & System Tokens ─── */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-user-select: none;
      user-select: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }

    :root {
      --font-system: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", "Inter", "Pretendard", -system-ui, sans-serif;
      --font-mono: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Monaco, Consolas, monospace;
      --menubar-height: 28px;
      --accent-blue: #007aff;
      --accent-orange: #ff9f0a;
      --accent-red: #ff3b30;
      --accent-green: #34c759;
      --accent-purple: #af52de;
      --glass-tint-dark: rgba(24, 28, 38, 0.72);
      --glass-border: rgba(255, 255, 255, 0.18);
      --glass-glow: inset 0 1px 0 rgba(255, 255, 255, 0.28);
      --shadow-window: 0 30px 80px -15px rgba(0, 0, 0, 0.7), 0 0 1px rgba(255, 255, 255, 0.22);
      --shadow-window-active: 0 40px 95px -15px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.3);
      --traffic-close: #ff5f56;
      --traffic-min: #ffbd2e;
      --traffic-max: #27c93f;
    }

    html[data-theme="light"] {
      --glass-tint-dark: rgba(255, 255, 255, 0.75);
      --glass-border: rgba(0, 0, 0, 0.12);
      --glass-glow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
      color: #1d1d1f;
    }

    html, body {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      font-family: var(--font-system);
      font-size: 13px;
      letter-spacing: -0.015em;
      color: #f5f5f7;
      background: #000;
      position: fixed;
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
      background: rgba(18, 20, 26, 0.55);
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

    html[data-theme="light"] #menubar {
      background: rgba(255, 255, 255, 0.65);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      color: #1d1d1f;
    }

    .menu-left {
      display: flex;
      align-items: center;
      gap: 16px;
      height: 100%;
    }

    .menu-item {
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      padding: 2px 6px;
      border-radius: 4px;
      transition: background 0.15s ease;
    }

    .menu-item:hover {
      background: rgba(255, 255, 255, 0.16);
    }

    .menu-apple {
      font-size: 15px;
      font-weight: 700;
      display: flex;
      align-items: center;
    }

    .menu-appname {
      font-weight: 700;
      letter-spacing: -0.01em;
    }

    .menu-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .status-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0.9;
      padding: 2px 4px;
      border-radius: 4px;
      transition: all 0.15s ease;
    }

    .status-icon:hover {
      opacity: 1;
      background: rgba(255, 255, 255, 0.15);
    }

    .status-clock {
      font-weight: 500;
      font-size: 12.5px;
      letter-spacing: -0.01em;
      padding: 2px 6px;
    }

    .camera-active-dot {
      width: 7px;
      height: 7px;
      background: #34c759;
      border-radius: 50%;
      box-shadow: 0 0 8px #34c759;
      display: none;
      margin-right: 4px;
    }

    /* ─── Apple Menu Dropdown ─── */
    .menu-dropdown {
      position: absolute;
      top: var(--menubar-height);
      left: 8px;
      min-width: 220px;
      background: rgba(30, 34, 46, 0.85);
      backdrop-filter: blur(35px) saturate(200%);
      -webkit-backdrop-filter: blur(35px) saturate(200%);
      border: 1px solid rgba(255, 255, 255, 0.16);
      border-radius: 8px;
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5);
      padding: 5px;
      display: none;
      flex-direction: column;
      z-index: 10001;
    }

    .menu-dropdown.show { display: flex; }

    .dropdown-row {
      padding: 5px 12px;
      border-radius: 5px;
      font-size: 12.5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: background 0.1s ease;
    }

    .dropdown-row:hover {
      background: var(--accent-blue);
      color: #fff;
    }

    .dropdown-row:hover .dropdown-shortcut {
      color: rgba(255, 255, 255, 0.8);
    }

    .dropdown-shortcut {
      font-size: 11px;
      opacity: 0.55;
    }

    .dropdown-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 4px 6px;
    }

    /* ─── Context Menu ─── */
    #context-menu {
      position: fixed;
      width: 210px;
      background: rgba(30, 34, 46, 0.88);
      backdrop-filter: blur(35px) saturate(200%);
      -webkit-backdrop-filter: blur(35px) saturate(200%);
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 8px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
      padding: 5px;
      display: none;
      flex-direction: column;
      z-index: 15000;
    }
    #context-menu.show { display: flex; }

    /* ─── Big Sur / Sequoia Control Center (2-Column Modular Grid) ─── */
    #control-center {
      position: absolute;
      top: calc(var(--menubar-height) + 8px);
      right: 12px;
      width: 320px;
      background: rgba(25, 29, 39, 0.82);
      backdrop-filter: blur(40px) saturate(200%);
      -webkit-backdrop-filter: blur(40px) saturate(200%);
      border: 1px solid rgba(255, 255, 255, 0.16);
      border-radius: 18px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.65);
      padding: 14px;
      display: none;
      flex-direction: column;
      gap: 12px;
      z-index: 10001;
    }
    #control-center.show { display: flex; }

    .cc-grid-top {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    .cc-tile-card {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      cursor: pointer;
      transition: all 0.18s ease;
    }

    .cc-tile-card:hover {
      background: rgba(255, 255, 255, 0.13);
    }

    .cc-tile-card.active {
      background: var(--accent-blue);
      color: #fff;
    }

    .cc-tile-header {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .cc-icon-bubble {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .cc-tile-card.active .cc-icon-bubble {
      background: #fff;
      color: var(--accent-blue);
    }

    .cc-slider-wrap {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 10px 14px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .cc-slider-label {
      display: flex;
      justify-content: space-between;
      font-size: 11.5px;
      font-weight: 600;
      color: #cbd5e1;
    }

    .cc-slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 18px;
      background: rgba(0, 0, 0, 0.35);
      border-radius: 9px;
      outline: none;
      padding: 2px;
    }

    .cc-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 22px;
      height: 14px;
      border-radius: 7px;
      background: #fff;
      cursor: pointer;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    }

    .cc-music-card {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 10px;
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
    }

    .cc-music-thumb {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      background: linear-gradient(135deg, #fa2d48, #af52de);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }

    /* ─── Desktop Area & Icons ─── */
    #desktop {
      position: absolute;
      top: var(--menubar-height);
      left: 0;
      right: 0;
      bottom: 0;
      padding: 16px;
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: repeat(auto-fill, 92px);
      grid-auto-columns: 88px;
      gap: 14px 16px;
      z-index: 10;
      overflow: hidden;
    }

    .desktop-icon {
      width: 82px;
      height: 86px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
      cursor: pointer;
      border-radius: 6px;
      padding: 4px;
      transition: background 0.15s ease;
    }

    .desktop-icon:hover {
      background: rgba(255, 255, 255, 0.12);
    }

    .desktop-icon.selected {
      background: rgba(0, 122, 255, 0.35);
      outline: 1px solid rgba(0, 122, 255, 0.6);
    }

    .desktop-icon-img {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.45));
    }

    .desktop-icon-label {
      font-size: 11.5px;
      font-weight: 500;
      color: #fff;
      text-align: center;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.85);
      line-height: 1.2;
      word-break: break-word;
      max-width: 78px;
    }

    /* ─── Desktop Widgets Suite ─── */
    #desktop-widgets {
      position: absolute;
      top: calc(var(--menubar-height) + 16px);
      right: 18px;
      width: 280px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      z-index: 12;
      pointer-events: auto;
    }

    .widget-card {
      background: rgba(22, 26, 35, 0.62);
      backdrop-filter: blur(28px) saturate(180%);
      -webkit-backdrop-filter: blur(28px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 18px;
      padding: 14px;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .widget-clock-flex {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .analog-clock-canvas {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background: #1e293b;
      border: 2px solid rgba(255, 255, 255, 0.25);
      position: relative;
      box-shadow: inset 0 2px 6px rgba(0,0,0,0.6);
    }

    .clock-hand {
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform-origin: bottom center;
      border-radius: 2px;
    }

    .hand-hour { width: 3px; height: 16px; background: #fff; margin-left: -1.5px; }
    .hand-min { width: 2px; height: 22px; background: #cbd5e1; margin-left: -1px; }
    .hand-sec { width: 1px; height: 24px; background: var(--accent-orange); margin-left: -0.5px; }
    .clock-center-dot {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: var(--accent-orange);
      transform: translate(-50%, -50%);
    }

    .widget-cal-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 3px;
      text-align: center;
      font-size: 11px;
    }

    .cal-day-label { color: #94a3b8; font-weight: 600; font-size: 10px; margin-bottom: 2px; }
    .cal-day { padding: 3px 0; border-radius: 4px; cursor: pointer; }
    .cal-day:hover { background: rgba(255,255,255,0.1); }
    .cal-day.today { background: var(--accent-blue); color: #fff; font-weight: 700; border-radius: 50%; }

    .sticky-note-card {
      background: #fef08a !important;
      color: #1c1917 !important;
      border: 1px solid #fde047 !important;
      box-shadow: 0 10px 25px rgba(0,0,0,0.25);
    }

    .sticky-textarea {
      width: 100%;
      height: 68px;
      background: transparent;
      border: none;
      outline: none;
      resize: none;
      font-family: var(--font-system);
      font-size: 12px;
      line-height: 1.4;
      color: #292524;
    }

    /* ─── Window Management Base ─── */
    .app-window {
      position: absolute;
      background: rgba(28, 32, 42, 0.88);
      backdrop-filter: blur(35px) saturate(190%);
      -webkit-backdrop-filter: blur(35px) saturate(190%);
      border: 1px solid var(--glass-border);
      border-radius: 12px;
      box-shadow: var(--shadow-window);
      display: none;
      flex-direction: column;
      overflow: hidden;
      z-index: 100;
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease, width 0.15s ease, height 0.15s ease;
    }

    .app-window.open { display: flex; }
    .app-window.active {
      box-shadow: var(--shadow-window-active);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .app-window.minimized {
      transform: translateY(120vh) scale(0.2);
      opacity: 0;
      pointer-events: none;
    }

    .window-titlebar {
      height: 38px;
      background: rgba(255, 255, 255, 0.04);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      padding: 0 14px;
      cursor: grab;
      position: relative;
    }

    .window-titlebar:active { cursor: grabbing; }

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
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0);
      cursor: pointer;
      transition: color 0.1s ease, filter 0.1s ease;
    }

    .traffic-lights:hover .traffic-btn {
      color: rgba(0, 0, 0, 0.65);
    }

    .traffic-close { background: var(--traffic-close); border: 0.5px solid rgba(0,0,0,0.15); }
    .traffic-min { background: var(--traffic-min); border: 0.5px solid rgba(0,0,0,0.15); }
    .traffic-max { background: var(--traffic-max); border: 0.5px solid rgba(0,0,0,0.15); }

    .window-title {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 600;
      color: #e2e8f0;
      pointer-events: none;
    }

    .window-body {
      flex: 1;
      overflow: auto;
      padding: 16px;
      position: relative;
    }

    .resize-handle {
      position: absolute;
      z-index: 100;
    }
    .resize-handle-r { top: 0; right: 0; width: 6px; height: 100%; cursor: ew-resize; }
    .resize-handle-b { bottom: 0; left: 0; height: 6px; width: 100%; cursor: ns-resize; }
    .resize-handle-br { bottom: 0; right: 0; width: 12px; height: 12px; cursor: nwse-resize; }

    /* ─── Safari Browser Specifics ─── */
    .safari-toolbar {
      height: 44px;
      background: rgba(255, 255, 255, 0.05);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      padding: 0 12px;
      gap: 12px;
    }

    .safari-nav-btn {
      background: none;
      border: none;
      color: #cbd5e1;
      font-size: 14px;
      cursor: pointer;
      padding: 4px 6px;
      border-radius: 4px;
    }
    .safari-nav-btn:hover { background: rgba(255,255,255,0.1); }

    .safari-address-bar {
      flex: 1;
      height: 28px;
      background: rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 6px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      gap: 8px;
    }

    .safari-address-input {
      flex: 1;
      background: none;
      border: none;
      outline: none;
      color: #fff;
      font-size: 12px;
      font-family: var(--font-system);
    }

    .safari-favorites-bar {
      height: 30px;
      background: rgba(255, 255, 255, 0.02);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      padding: 0 12px;
      gap: 14px;
      overflow-x: auto;
    }

    .safari-fav-item {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 11px;
      color: #cbd5e1;
      cursor: pointer;
      padding: 2px 6px;
      border-radius: 4px;
    }
    .safari-fav-item:hover { background: rgba(255,255,255,0.1); color: #fff; }

    .safari-viewport {
      width: 100%;
      height: calc(100% - 74px);
      border: none;
      background: #0f172a;
    }

    /* ─── Photos App Specifics ─── */
    .photos-container {
      display: flex;
      height: 100%;
    }

    .photos-sidebar {
      width: 190px;
      background: rgba(0, 0, 0, 0.25);
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      padding: 12px 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .photos-sidebar-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
      border-radius: 6px;
      font-size: 12px;
      cursor: pointer;
      color: #cbd5e1;
    }
    .photos-sidebar-item:hover { background: rgba(255, 255, 255, 0.08); color: #fff; }
    .photos-sidebar-item.active { background: var(--accent-blue); color: #fff; }

    .photos-grid-view {
      flex: 1;
      padding: 14px;
      overflow-y: auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 12px;
    }

    .photo-thumb-card {
      aspect-ratio: 16/10;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      border: 1px solid rgba(255,255,255,0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .photo-thumb-card:hover {
      transform: scale(1.03);
      box-shadow: 0 8px 24px rgba(0,0,0,0.5);
    }

    .photo-thumb-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .photo-thumb-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 4px 8px;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
      font-size: 10.5px;
      color: #fff;
    }

    /* ─── Photo Booth / FaceTime ─── */
    .photobooth-body {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 0;
      background: #000;
      position: relative;
    }

    .photobooth-viewfinder-wrap {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    #photobooth-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scaleX(-1);
    }

    .photobooth-controls {
      height: 80px;
      background: rgba(20, 20, 20, 0.95);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      position: relative;
    }

    .shutter-btn {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background: #ff3b30;
      border: 4px solid #fff;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(255, 59, 48, 0.5);
      transition: transform 0.1s ease;
    }
    .shutter-btn:active { transform: scale(0.92); }

    .photobooth-countdown {
      position: absolute;
      font-size: 96px;
      font-weight: 800;
      color: #fff;
      text-shadow: 0 4px 20px rgba(0,0,0,0.8);
      display: none;
      z-index: 10;
    }

    .photobooth-flash {
      position: absolute;
      inset: 0;
      background: #fff;
      opacity: 0;
      pointer-events: none;
      z-index: 20;
      transition: opacity 0.15s ease-out;
    }

    /* ─── Apple Native Calculator ─── */
    .calc-screen {
      height: 90px;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      padding: 10px 18px;
      font-size: 48px;
      font-weight: 300;
      color: #fff;
      font-variant-numeric: tabular-nums;
      overflow: hidden;
    }

    .calc-keypad {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      padding: 14px;
    }

    .calc-btn {
      height: 52px;
      border-radius: 26px;
      border: none;
      font-size: 20px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: filter 0.15s ease, transform 0.08s ease;
    }
    .calc-btn:active { filter: brightness(1.25); transform: scale(0.96); }

    .calc-btn-num { background: #333333; color: #fff; }
    .calc-btn-fn { background: #a5a5a5; color: #000; }
    .calc-btn-op { background: #ff9f0a; color: #fff; font-size: 24px; }
    .calc-btn-zero { grid-column: span 2; border-radius: 26px; justify-content: flex-start; padding-left: 22px; }

    /* ─── VS Code Studio ─── */
    .vscode-workspace { display: flex; height: 100%; }
    .vscode-explorer {
      width: 200px;
      background: rgba(18, 20, 26, 0.7);
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      padding: 10px 6px;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .vscode-file-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 5px 8px;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
      color: #94a3b8;
    }
    .vscode-file-item:hover { background: rgba(255, 255, 255, 0.06); color: #fff; }
    .vscode-file-item.active { background: rgba(0, 122, 255, 0.25); color: #38bdf8; font-weight: 600; }

    .vscode-editor-main { flex: 1; display: flex; flex-direction: column; background: #0b0f19; }
    .vscode-tabs {
      height: 34px;
      background: rgba(255, 255, 255, 0.03);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      padding: 0 10px;
    }
    .vscode-code-area {
      flex: 1;
      padding: 14px 16px;
      font-family: var(--font-mono);
      font-size: 12.5px;
      line-height: 1.6;
      color: #e2e8f0;
      overflow: auto;
      white-space: pre;
    }

    /* ─── Notes Editor ─── */
    .notes-container { display: flex; height: 100%; }
    .notes-sidebar {
      width: 240px;
      background: rgba(0, 0, 0, 0.25);
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      flex-direction: column;
    }
    .notes-list { flex: 1; overflow-y: auto; padding: 6px; display: flex; flex-direction: column; gap: 4px; }
    .notes-item {
      padding: 10px 12px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.15s ease;
    }
    .notes-item:hover { background: rgba(255, 255, 255, 0.08); }
    .notes-item.active { background: var(--accent-orange); color: #fff; }
    .notes-editor { flex: 1; display: flex; flex-direction: column; background: rgba(255, 255, 255, 0.02); }

    /* ─── Music Player App ─── */
    .music-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
      gap: 16px;
      text-align: center;
    }

    .music-album-art {
      width: 160px;
      height: 160px;
      border-radius: 16px;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
      background: linear-gradient(135deg, #fa2d48 0%, #af52de 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 64px;
    }

    .music-eq-bars {
      display: flex;
      align-items: flex-end;
      gap: 3px;
      height: 20px;
    }
    .eq-bar {
      width: 3px;
      background: #fa2d48;
      border-radius: 2px;
      animation: eqBounce 0.8s ease-in-out infinite alternate;
    }
    @keyframes eqBounce { 0% { height: 4px; } 100% { height: 18px; } }

    /* ─── Mission Control & Overlays ─── */
    #mission-control-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(25px);
      -webkit-backdrop-filter: blur(25px);
      display: none;
      flex-direction: column;
      align-items: center;
      padding: 60px 40px 100px;
      z-index: 18000;
    }
    #mission-control-overlay.show { display: flex; }

    .mc-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 24px;
      max-width: 1200px;
      width: 100%;
    }

    .mc-window-thumb {
      width: 260px;
      height: 180px;
      background: rgba(30, 35, 48, 0.85);
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: transform 0.2s ease, border-color 0.2s ease;
    }
    .mc-window-thumb:hover { transform: scale(1.05); border-color: var(--accent-blue); }

    /* ─── Lock Screen & Boot Screen ─── */
    #lock-screen-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(40px);
      -webkit-backdrop-filter: blur(40px);
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      z-index: 30000;
    }
    #lock-screen-overlay.show { display: flex; }

    #boot-screen-overlay {
      position: fixed;
      inset: 0;
      background: #000;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
      z-index: 35000;
    }
    #boot-screen-overlay.show { display: flex; }

    .boot-progress-bar {
      width: 220px;
      height: 4px;
      background: #333;
      border-radius: 2px;
      overflow: hidden;
    }
    .boot-progress-fill {
      width: 0%;
      height: 100%;
      background: #fff;
      transition: width 2.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* ─── Fullscreen Launchpad ─── */
    #launchpad-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(40px) saturate(180%);
      -webkit-backdrop-filter: blur(40px) saturate(180%);
      display: none;
      flex-direction: column;
      align-items: center;
      padding-top: 6vh;
      z-index: 12000;
    }
    #launchpad-overlay.show { display: flex; }

    .launchpad-search {
      width: 260px;
      padding: 7px 16px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.16);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      outline: none;
      font-size: 13px;
      text-align: center;
      margin-bottom: 30px;
    }

    .launchpad-grid {
      display: grid;
      grid-template-columns: repeat(6, 100px);
      gap: 30px 24px;
      justify-content: center;
    }

    .launchpad-app {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: transform 0.15s ease;
    }
    .launchpad-app:hover { transform: scale(1.1); }
    .launchpad-app-label { font-size: 12px; color: #fff; text-shadow: 0 1px 3px rgba(0,0,0,0.8); }

    /* ─── Spotlight Search Overlay ─── */
    #spotlight-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding-top: 15vh;
      z-index: 20000;
    }
    #spotlight-overlay.show { display: flex; }

    .spotlight-box {
      width: 600px;
      background: rgba(30, 34, 46, 0.88);
      backdrop-filter: blur(35px) saturate(200%);
      -webkit-backdrop-filter: blur(35px) saturate(200%);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 14px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .spotlight-input-row {
      display: flex;
      align-items: center;
      padding: 14px 18px;
      gap: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .spotlight-input {
      flex: 1;
      background: none;
      border: none;
      outline: none;
      color: #fff;
      font-size: 19px;
      font-weight: 400;
      font-family: var(--font-system);
    }

    .spotlight-results { max-height: 380px; overflow-y: auto; padding: 6px; }

    .spotlight-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 12px;
      border-radius: 8px;
      cursor: pointer;
    }
    .spotlight-item.active, .spotlight-item:hover { background: var(--accent-blue); color: #fff; }

    /* ─── Parabolic Magnification Dock ─── */
    #dock-container {
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      pointer-events: none;
      z-index: 10000;
    }

    #dock {
      pointer-events: auto;
      height: 64px;
      padding: 0 12px;
      background: rgba(25, 28, 38, 0.58);
      backdrop-filter: blur(32px) saturate(180%);
      -webkit-backdrop-filter: blur(32px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6);
    }

    .dock-item {
      position: relative;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: width 0.15s ease, height 0.15s ease;
    }

    .dock-item.running::after {
      content: '';
      position: absolute;
      bottom: -4px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 0 4px #fff;
    }

    .dock-tooltip {
      position: absolute;
      top: -34px;
      background: rgba(30, 34, 46, 0.9);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      padding: 3px 10px;
      border-radius: 6px;
      font-size: 11.5px;
      font-weight: 500;
      color: #fff;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.15s ease;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }
    .dock-item:hover .dock-tooltip { opacity: 1; }

    .dock-bounce {
      animation: dockBounce 0.65s cubic-bezier(0.28, 0.84, 0.42, 1);
    }
    @keyframes dockBounce {
      0%, 100% { transform: translateY(0); }
      40% { transform: translateY(-24px); }
      70% { transform: translateY(-8px); }
      85% { transform: translateY(-3px); }
    }

    .dock-separator {
      width: 1px;
      height: 38px;
      background: rgba(255, 255, 255, 0.15);
      margin: 0 2px;
    }

    /* ─── Squircle Icon System ─── */
    .app-squircle {
      width: 100%;
      height: 100%;
      border-radius: 22.5%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
      transition: filter 0.15s ease;
    }

    .sq-finder { background: linear-gradient(135deg, #1ea0f2 0%, #1572b6 100%); }
    .sq-safari { background: linear-gradient(135deg, #25aae1 0%, #0077c5 100%); }
    .sq-photos { background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%); }
    .sq-booth { background: linear-gradient(135deg, #e52d27 0%, #b31217 100%); }
    .sq-calc { background: linear-gradient(135deg, #FF9F0A 0%, #F7821B 100%); }
    .sq-code { background: linear-gradient(135deg, #007ACC 0%, #005A9E 100%); }
    .sq-notes { background: linear-gradient(135deg, #FED049 0%, #E6B325 100%); }
    .sq-music { background: linear-gradient(135deg, #fa2d48 0%, #c41031 100%); }
    .sq-trash { background: linear-gradient(135deg, #64748b 0%, #475569 100%); }
    .sq-kct { background: linear-gradient(135deg, #10B981 0%, #059669 100%); }
    .sq-specimen { background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%); }
    .sq-terminal { background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%); border: 1px solid rgba(255,255,255,0.15); }
    .sq-settings { background: linear-gradient(135deg, #94A3B8 0%, #64748B 100%); }
    .sq-launchpad { background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%); }
    .sq-mission { background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); }
    .sq-web { background: linear-gradient(135deg, #2563EB 0%, #1E40AF 100%); }

    /* ─── Responsive Adjustments ─── */
    @media (max-width: 768px) {
      #desktop-widgets { display: none; }
      .app-window { width: 95vw !important; left: 2.5vw !important; }
    }
  </style>
</head>
<body oncontextmenu="handleDesktopContextMenu(event)">

  <!-- Desktop Wallpaper -->
  <div id="desktop-wallpaper" style="background-image: url('https://macos27.kimi.page/wallpaper-tahoe-day.jpg');"></div>

  <!-- Real File System Uploader (Hidden) -->
  <input type="file" id="real-file-uploader" style="display:none;" onchange="handleRealFileUpload(event)" />

  <!-- ─── Top Menu Bar ─── -->
  <header id="menubar">
    <div class="menu-left">
      <div class="menu-item menu-apple" id="apple-menu-btn" title="DAVHAVE Studio"></div>
      <div class="menu-item menu-appname" id="menu-active-app">Finder</div>
      <div id="dynamic-menu-items" style="display:flex;">
        <div class="menu-item">파일</div>
        <div class="menu-item">편집</div>
        <div class="menu-item">보기</div>
        <div class="menu-item">이동</div>
        <div class="menu-item">창</div>
        <div class="menu-item">도움말</div>
      </div>
    </div>

    <!-- Apple Menu Dropdown -->
    <div class="menu-dropdown" id="apple-dropdown">
      <div class="dropdown-row" onclick="openApp('about')"><span>이 Mac에 관하여</span></div>
      <div class="dropdown-divider"></div>
      <div class="dropdown-row" onclick="openApp('settings')"><span>시스템 설정...</span><span class="dropdown-shortcut">⌘,</span></div>
      <div class="dropdown-row" onclick="toggleLaunchpad()"><span>Launchpad</span></div>
      <div class="dropdown-row" onclick="toggleSpotlight()"><span>Spotlight 검색</span><span class="dropdown-shortcut">⌘Space</span></div>
      <div class="dropdown-row" onclick="toggleMissionControl()"><span>Mission Control</span><span class="dropdown-shortcut">F3</span></div>
      <div class="dropdown-divider"></div>
      <div class="dropdown-row" onclick="lockScreen()"><span>화면 잠금</span><span class="dropdown-shortcut">^⌘Q</span></div>
      <div class="dropdown-row" onclick="rebootSystem()"><span>재시동...</span></div>
      <div class="dropdown-row" onclick="shutdownSystem()"><span>시스템 종료...</span></div>
      <div class="dropdown-divider"></div>
      <div class="dropdown-row" onclick="window.location.href='/'"><span>웹 표준 홈으로 돌아가기</span><span class="dropdown-shortcut">⎋ Esc</span></div>
    </div>

    <div class="menu-right">
      <div class="camera-active-dot" id="menubar-camera-dot" title="카메라 활성화됨"></div>
      <div class="status-icon" id="sound-indicator-btn" onclick="toggleSoundMute()" title="사운드">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
      </div>
      <div class="status-icon" title="Wi-Fi: Cloudflare 0ms Edge">
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
      <div class="status-icon status-clock" id="clock-display" onclick="toggleWidgets()">오후 1:30</div>
    </div>
  </header>

  <!-- Desktop Right-Click Context Menu -->
  <div id="context-menu">
    <div class="dropdown-row" onclick="createNewNote(); openApp('notes');"><span>새 메모</span></div>
    <div class="dropdown-row" onclick="createBlankFile(); openApp('finder');"><span>새 텍스트 파일</span></div>
    <div class="dropdown-row" onclick="triggerRealFileUpload()"><span>파일 가져오기 (업로드)...</span></div>
    <div class="dropdown-divider"></div>
    <div class="dropdown-row" onclick="openApp('safari')"><span>Safari 열기</span></div>
    <div class="dropdown-row" onclick="openApp('photos')"><span>사진 보기</span></div>
    <div class="dropdown-row" onclick="openApp('settings')"><span>배경화면 변경...</span></div>
    <div class="dropdown-row" onclick="toggleLaunchpad()"><span>Launchpad 열기</span></div>
    <div class="dropdown-row" onclick="toggleMissionControl()"><span>Mission Control</span></div>
    <div class="dropdown-row" onclick="toggleWidgets()"><span>데스크탑 위젯 토글</span></div>
    <div class="dropdown-divider"></div>
    <div class="dropdown-row" onclick="openApp('about')"><span>이 Mac에 관하여</span></div>
    <div class="dropdown-row" onclick="window.location.href='/'"><span>웹 표준 홈으로 돌아가기</span></div>
  </div>

  <!-- Big Sur / Sequoia 2-Column Control Center -->
  <div id="control-center">
    <div class="cc-grid-top">
      <div class="cc-tile-card active" onclick="this.classList.toggle('active')">
        <div class="cc-tile-header">
          <div class="cc-icon-bubble">📶</div>
          <div>
            <div style="font-weight:600; font-size:12px;">Wi-Fi</div>
            <div style="font-size:10px; opacity:0.8;">DAVHAVE 0ms</div>
          </div>
        </div>
      </div>
      <div class="cc-tile-card active" onclick="this.classList.toggle('active')">
        <div class="cc-tile-header">
          <div class="cc-icon-bubble">🎧</div>
          <div>
            <div style="font-weight:600; font-size:12px;">Bluetooth</div>
            <div style="font-size:10px; opacity:0.8;">AirPods 연결됨</div>
          </div>
        </div>
      </div>
      <div class="cc-tile-card active" onclick="this.classList.toggle('active')">
        <div class="cc-tile-header">
          <div class="cc-icon-bubble">📡</div>
          <div>
            <div style="font-weight:600; font-size:12px;">AirDrop</div>
            <div style="font-size:10px; opacity:0.8;">모두</div>
          </div>
        </div>
      </div>
      <div class="cc-tile-card" onclick="this.classList.toggle('active')">
        <div class="cc-tile-header">
          <div class="cc-icon-bubble">🌙</div>
          <div>
            <div style="font-weight:600; font-size:12px;">집중 모드</div>
            <div style="font-size:10px; opacity:0.8;">방해금지</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sliders -->
    <div class="cc-slider-wrap">
      <div class="cc-slider-label">
        <span>디스플레이 밝기</span>
        <span id="brightness-val">100%</span>
      </div>
      <input type="range" min="50" max="120" value="100" class="cc-slider" id="brightness-slider" oninput="adjustBrightness(this.value)" />
    </div>

    <div class="cc-slider-wrap">
      <div class="cc-slider-label">
        <span>사운드 볼륨</span>
        <span id="sound-vol-val">80%</span>
      </div>
      <input type="range" min="0" max="100" value="80" class="cc-slider" id="sound-slider" oninput="adjustSoundVolume(this.value)" />
    </div>

    <!-- Now Playing Mini -->
    <div class="cc-music-card" onclick="openApp('music')">
      <div class="cc-music-thumb">🎵</div>
      <div style="flex:1;">
        <div style="font-weight:600; font-size:12px;" id="cc-music-title">Clair de Lune (드뷔시)</div>
        <div style="font-size:10px; color:#94a3b8;">DAVHAVE Ambient Synth</div>
      </div>
      <button style="background:none; border:none; color:#fff; font-size:18px; cursor:pointer;" onclick="event.stopPropagation(); toggleMusicPlay()">▶</button>
    </div>

    <!-- Dark/Light Theme Switch -->
    <div class="cc-tile-card" onclick="toggleTheme()" style="flex-direction:row; align-items:center; justify-content:space-between; padding:8px 12px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:16px;">🌓</span>
        <span style="font-weight:600; font-size:12px;">다크 / 라이트 모드 전환</span>
      </div>
      <span style="font-size:11px; opacity:0.7;">토글</span>
    </div>
  </div>

  <!-- ─── Fullscreen Launchpad ─── -->
  <div id="launchpad-overlay" onclick="handleLaunchpadBackdrop(event)">
    <input type="text" class="launchpad-search" id="launchpad-search-input" placeholder="검색 (Search)" oninput="filterLaunchpad(this.value)" />
    <div class="launchpad-grid" id="launchpad-grid"></div>
  </div>

  <!-- ─── Spotlight Search with Instant Math Evaluator ─── -->
  <div id="spotlight-overlay" onclick="handleSpotlightBackdrop(event)">
    <div class="spotlight-box">
      <div class="spotlight-input-row">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" class="spotlight-input" id="spotlight-input" placeholder="Spotlight 검색 또는 계산식 (예: 25 * 40, sqrt(144))..." oninput="filterSpotlight(this.value)" onkeydown="handleSpotlightKey(event)" />
      </div>
      <div class="spotlight-results" id="spotlight-results"></div>
    </div>
  </div>

  <!-- ─── Mission Control Window Exposé ─── -->
  <div id="mission-control-overlay" onclick="closeMissionControl()">
    <div style="font-size:18px; font-weight:700; color:#fff; margin-bottom:24px;">Mission Control</div>
    <div class="mc-grid" id="mission-control-grid"></div>
  </div>

  <!-- ─── Lock Screen Overlay ─── -->
  <div id="lock-screen-overlay">
    <div style="font-size:72px; font-weight:200; letter-spacing:-0.03em;" id="lock-time">13:30</div>
    <div style="font-size:18px; font-weight:500; opacity:0.85; margin-top:-14px;" id="lock-date">9월 29일 화요일</div>
    <div style="display:flex; flex-direction:column; align-items:center; gap:12px; margin-top:30px;">
      <div style="width:72px; height:72px; border-radius:50%; background:linear-gradient(135deg,#007aff,#0051a8); display:flex; align-items:center; justify-content:center; font-size:32px; box-shadow:0 8px 24px rgba(0,0,0,0.5);"></div>
      <div style="font-size:15px; font-weight:600;">DAVHAVE Lead Engineer</div>
      <input type="password" id="lock-pwd-input" placeholder="Touch ID 또는 암호 입력" style="width:200px; padding:7px 14px; border-radius:18px; background:rgba(255,255,255,0.18); border:1px solid rgba(255,255,255,0.25); color:#fff; outline:none; text-align:center;" onkeydown="if(event.key==='Enter') unlockScreen()" />
      <button onclick="unlockScreen()" style="padding:6px 18px; border-radius:14px; background:var(--accent-blue); border:none; color:#fff; font-weight:600; cursor:pointer; margin-top:4px;">로그인</button>
    </div>
  </div>

  <!-- ─── Apple Boot Screen Simulation ─── -->
  <div id="boot-screen-overlay">
    <div style="font-size:80px; color:#fff;"></div>
    <div class="boot-progress-bar">
      <div class="boot-progress-fill" id="boot-progress-fill"></div>
    </div>
  </div>

  <!-- ─── Desktop Icons ─── -->
  <main id="desktop">
    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('finder')">
      <div class="desktop-icon-img"><div class="app-squircle sq-finder"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg></div></div>
      <div class="desktop-icon-label">Macintosh HD</div>
    </div>
    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('safari')">
      <div class="desktop-icon-img"><div class="app-squircle sq-safari"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg></div></div>
      <div class="desktop-icon-label">Safari</div>
    </div>
    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('photos')">
      <div class="desktop-icon-img"><div class="app-squircle sq-photos"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></div></div>
      <div class="desktop-icon-label">사진 보관함</div>
    </div>
    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('notes')">
      <div class="desktop-icon-img"><div class="app-squircle sq-notes"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path><path d="M15 3v5h5M9 13h6M9 17h4"></path></svg></div></div>
      <div class="desktop-icon-label">엔지니어링 메모</div>
    </div>
    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('calc')">
      <div class="desktop-icon-img"><div class="app-squircle sq-kct"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg></div></div>
      <div class="desktop-icon-label">KCT 실리콘 연산기</div>
    </div>
  </main>

  <!-- ─── Desktop Widgets Suite ─── -->
  <aside id="desktop-widgets">
    <!-- Analog & Digital Clock -->
    <div class="widget-card">
      <div class="widget-clock-flex">
        <div class="analog-clock-canvas">
          <div class="clock-hand hand-hour" id="hand-hour"></div>
          <div class="clock-hand hand-min" id="hand-min"></div>
          <div class="clock-hand hand-sec" id="hand-sec"></div>
          <div class="clock-center-dot"></div>
        </div>
        <div>
          <div style="font-size:22px; font-weight:800; font-variant-numeric:tabular-nums;" id="widget-digital-clock">13:30:00</div>
          <div style="font-size:11.5px; color:#cbd5e1;" id="widget-date-str">9월 29일 화요일</div>
        </div>
      </div>
    </div>

    <!-- Monthly Calendar -->
    <div class="widget-card">
      <div style="font-size:12px; font-weight:700; color:var(--accent-orange); display:flex; justify-content:space-between;">
        <span>2026년 9월</span>
        <span style="font-size:10px; color:#94a3b8;">Seoul, KR</span>
      </div>
      <div class="widget-cal-grid" id="widget-cal-days"></div>
    </div>

    <!-- Live Weather -->
    <div class="widget-card" style="flex-direction:row; align-items:center; justify-content:space-between;">
      <div>
        <div style="font-size:11px; color:#94a3b8; font-weight:600;">서울 특별시</div>
        <div style="font-size:24px; font-weight:700;">21°</div>
        <div style="font-size:11px; color:#38bdf8;">대체로 맑음 · 습도 48%</div>
      </div>
      <div style="font-size:36px;">☀️</div>
    </div>

    <!-- CPU Edge Pulse -->
    <div class="widget-card" style="padding:10px 14px;">
      <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px;">
        <span>엣지 가동률: <strong style="color:#4ade80;" id="cpu-pulse">12%</strong></span>
        <span>응답속도: <strong>0.3ms</strong></span>
      </div>
    </div>

    <!-- Sticky Note -->
    <div class="widget-card sticky-note-card">
      <div style="font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:#854d0e;">빠른 메모</div>
      <textarea class="sticky-textarea" id="sticky-note-input" placeholder="바탕화면 빠른 메모를 입력하세요 (자동 저장됨)..." oninput="saveStickyNote(this.value)"></textarea>
    </div>
  </aside>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- ─── WINDOW 1: Safari Browser ─── -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <div class="app-window" id="window-safari" style="width: 880px; height: 580px; top: 50px; left: 120px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-safari')">
      <div class="traffic-lights">
        <button class="traffic-btn traffic-close" onclick="closeApp('safari')">✕</button>
        <button class="traffic-btn traffic-min" onclick="minimizeApp('safari')">−</button>
        <button class="traffic-btn traffic-max" onclick="maximizeApp('safari')">+</button>
      </div>
      <div class="window-title">Safari — DAVHAVE Engineering Web</div>
    </div>
    <div class="safari-toolbar">
      <button class="safari-nav-btn" onclick="safariGoBack()" title="뒤로">‹</button>
      <button class="safari-nav-btn" onclick="safariGoForward()" title="앞으로">›</button>
      <button class="safari-nav-btn" onclick="safariReload()" title="새로고침">↻</button>
      <div class="safari-address-bar">
        <span style="font-size:12px; color:#34c759;">🔒</span>
        <input type="text" class="safari-address-input" id="safari-url-input" value="https://davhave.com/" onkeydown="handleSafariAddressKey(event)" />
        <span style="font-size:11px; opacity:0.6; cursor:pointer;" onclick="window.open(document.getElementById('safari-url-input').value, '_blank')" title="외부 브라우저에서 열기">↗</span>
      </div>
    </div>
    <div class="safari-favorites-bar">
      <div class="safari-fav-item" onclick="navigateSafari('/')">🌐 DAVHAVE 메인</div>
      <div class="safari-fav-item" onclick="navigateSafari('/projects/kct')">📐 KCT 실리콘 플랫폼</div>
      <div class="safari-fav-item" onclick="navigateSafari('/projects/kct/specimens')">🧪 ASTM 시편 주문소</div>
      <div class="safari-fav-item" onclick="navigateSafari('https://apple.com')">🍎 Apple</div>
      <div class="safari-fav-item" onclick="navigateSafari('https://github.com/insang2/davhave_home')">🐙 GitHub</div>
    </div>
    <iframe id="safari-iframe" class="safari-viewport" src="/"></iframe>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-safari', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-safari', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-safari', 'br')"></div>
  </div>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- ─── WINDOW 2: Photos Gallery ─── -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <div class="app-window" id="window-photos" style="width: 860px; height: 560px; top: 70px; left: 160px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-photos')">
      <div class="traffic-lights">
        <button class="traffic-btn traffic-close" onclick="closeApp('photos')">✕</button>
        <button class="traffic-btn traffic-min" onclick="minimizeApp('photos')">−</button>
        <button class="traffic-btn traffic-max" onclick="maximizeApp('photos')">+</button>
      </div>
      <div class="window-title">사진 — Photos Library</div>
    </div>
    <div class="window-body" style="padding:0; overflow:hidden;">
      <div class="photos-container">
        <div class="photos-sidebar">
          <div style="font-size:10px; font-weight:700; color:#94a3b8; padding:4px 8px; text-transform:uppercase;">보관함</div>
          <div class="photos-sidebar-item active" onclick="filterPhotosCategory('all', this)">📸 모든 사진</div>
          <div class="photos-sidebar-item" onclick="filterPhotosCategory('fav', this)">⭐️ 즐겨찾는 항목</div>
          <div style="font-size:10px; font-weight:700; color:#94a3b8; padding:10px 8px 4px; text-transform:uppercase;">앨범</div>
          <div class="photos-sidebar-item" onclick="filterPhotosCategory('silicon', this)">🏗️ 실리콘 구조 공학</div>
          <div class="photos-sidebar-item" onclick="filterPhotosCategory('landscape', this)">🏔️ Tahoe &amp; Yosemite</div>
          <div class="photos-sidebar-item" onclick="filterPhotosCategory('lab', this)">🧪 ASTM 시험편</div>
        </div>
        <div class="photos-grid-view" id="photos-grid-container"></div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-photos', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-photos', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-photos', 'br')"></div>
  </div>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- ─── WINDOW 3: Photo Booth / FaceTime ─── -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <div class="app-window" id="window-photobooth" style="width: 700px; height: 530px; top: 90px; left: 200px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-photobooth')">
      <div class="traffic-lights">
        <button class="traffic-btn traffic-close" onclick="closeApp('photobooth')">✕</button>
        <button class="traffic-btn traffic-min" onclick="minimizeApp('photobooth')">−</button>
        <button class="traffic-btn traffic-max" onclick="maximizeApp('photobooth')">+</button>
      </div>
      <div class="window-title">Photo Booth — 카메라 &amp; 셀피</div>
    </div>
    <div class="window-body photobooth-body">
      <div class="photobooth-viewfinder-wrap">
        <video id="photobooth-video" autoplay playsinline muted></video>
        <canvas id="photobooth-canvas" style="display:none;"></canvas>
        <div class="photobooth-countdown" id="photobooth-countdown">3</div>
        <div class="photobooth-flash" id="photobooth-flash"></div>
      </div>
      <div class="photobooth-controls">
        <div style="display:flex; gap:6px;">
          <button style="padding:4px 10px; border-radius:12px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:#fff; font-size:11px; cursor:pointer;" onclick="setPhotoFilter('none')">기본</button>
          <button style="padding:4px 10px; border-radius:12px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:#fff; font-size:11px; cursor:pointer;" onclick="setPhotoFilter('grayscale(100%)')">흑백</button>
          <button style="padding:4px 10px; border-radius:12px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:#fff; font-size:11px; cursor:pointer;" onclick="setPhotoFilter('sepia(80%)')">세피아</button>
        </div>
        <button class="shutter-btn" onclick="takePhoto()" title="사진 촬영"></button>
        <div id="photobooth-filmstrip" style="display:flex; gap:6px; overflow-x:auto; max-width:140px;"></div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-photobooth', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-photobooth', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-photobooth', 'br')"></div>
  </div>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- ─── WINDOW 4: Native Apple Calculator ─── -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <div class="app-window calc-native-window" id="window-calc-native" style="width: 320px; height: 460px; top: 120px; left: 240px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-calc-native')">
      <div class="traffic-lights">
        <button class="traffic-btn traffic-close" onclick="closeApp('calc-native')">✕</button>
        <button class="traffic-btn traffic-min" onclick="minimizeApp('calc-native')">−</button>
        <button class="traffic-btn traffic-max" onclick="maximizeApp('calc-native')">+</button>
      </div>
      <div class="window-title">계산기</div>
    </div>
    <div class="window-body" style="padding:0; display:flex; flex-direction:column;">
      <div class="calc-screen" id="calc-display-val">0</div>
      <div class="calc-keypad">
        <button class="calc-btn calc-btn-fn" onclick="calcKey('AC')">AC</button>
        <button class="calc-btn calc-btn-fn" onclick="calcKey('+/-')">±</button>
        <button class="calc-btn calc-btn-fn" onclick="calcKey('%')">%</button>
        <button class="calc-btn calc-btn-op" onclick="calcKey('÷')">÷</button>
        <button class="calc-btn calc-btn-num" onclick="calcKey('7')">7</button>
        <button class="calc-btn calc-btn-num" onclick="calcKey('8')">8</button>
        <button class="calc-btn calc-btn-num" onclick="calcKey('9')">9</button>
        <button class="calc-btn calc-btn-op" onclick="calcKey('×')">×</button>
        <button class="calc-btn calc-btn-num" onclick="calcKey('4')">4</button>
        <button class="calc-btn calc-btn-num" onclick="calcKey('5')">5</button>
        <button class="calc-btn calc-btn-num" onclick="calcKey('6')">6</button>
        <button class="calc-btn calc-btn-op" onclick="calcKey('−')">−</button>
        <button class="calc-btn calc-btn-num" onclick="calcKey('1')">1</button>
        <button class="calc-btn calc-btn-num" onclick="calcKey('2')">2</button>
        <button class="calc-btn calc-btn-num" onclick="calcKey('3')">3</button>
        <button class="calc-btn calc-btn-op" onclick="calcKey('+')">+</button>
        <button class="calc-btn calc-btn-num calc-btn-zero" onclick="calcKey('0')">0</button>
        <button class="calc-btn calc-btn-num" onclick="calcKey('.')">.</button>
        <button class="calc-btn calc-btn-op" onclick="calcKey('=')">=</button>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- ─── WINDOW 5: VS Code Developer Studio ─── -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <div class="app-window" id="window-vscode" style="width: 860px; height: 560px; top: 70px; left: 150px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-vscode')">
      <div class="traffic-lights">
        <button class="traffic-btn traffic-close" onclick="closeApp('vscode')">✕</button>
        <button class="traffic-btn traffic-min" onclick="minimizeApp('vscode')">−</button>
        <button class="traffic-btn traffic-max" onclick="maximizeApp('vscode')">+</button>
      </div>
      <div class="window-title">Code — worker.js (davhave_home)</div>
    </div>
    <div class="window-body" style="padding:0; overflow:hidden;">
      <div class="vscode-workspace">
        <div class="vscode-explorer">
          <div style="font-size:11px; font-weight:700; text-transform:uppercase; color:#64748b; padding:4px 6px;">Explorer: DAVHAVE</div>
          <div class="vscode-file-item active" onclick="switchVsCodeTab('worker.js')">📄 worker.js</div>
          <div class="vscode-file-item" onclick="switchVsCodeTab('silicone.ts')">🔷 silicone.ts</div>
          <div class="vscode-file-item" onclick="switchVsCodeTab('astm_tensile.py')">🐍 astm_tensile.py</div>
          <div class="vscode-file-item" onclick="switchVsCodeTab('README.md')">📝 README.md</div>
        </div>
        <div class="vscode-editor-main">
          <div class="vscode-tabs">
            <div class="vscode-tab" id="vscode-active-tab">📄 worker.js</div>
          </div>
          <div class="vscode-code-area" id="vscode-code-content">// Cloudflare Workers 0ms Edge Architecture
import { renderMacOsPage } from "./lib/macos-render.js";
import { renderKctPage } from "./lib/kct-render.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;

    // High-Fidelity macOS 27 Desktop Simulation
    if (pathname === "/macos") {
      return new Response(renderMacOsPage(), {
        headers: { "content-type": "text/html; charset=utf-8" }
      });
    }

    return env.ASSETS.fetch(request);
  }
};</div>
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-vscode', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-vscode', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-vscode', 'br')"></div>
  </div>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- ─── WINDOW 6: Notes App ─── -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <div class="app-window" id="window-notes" style="width: 820px; height: 540px; top: 60px; left: 130px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-notes')">
      <div class="traffic-lights">
        <button class="traffic-btn traffic-close" onclick="closeApp('notes')">✕</button>
        <button class="traffic-btn traffic-min" onclick="minimizeApp('notes')">−</button>
        <button class="traffic-btn traffic-max" onclick="maximizeApp('notes')">+</button>
      </div>
      <div class="window-title">메모 — DAVHAVE Engineering Notes</div>
    </div>
    <div class="window-body" style="padding:0; overflow:hidden;">
      <div class="notes-container">
        <div class="notes-sidebar">
          <div style="padding:8px; display:flex; gap:6px; border-bottom:1px solid rgba(255,255,255,0.1);">
            <button style="flex:1; padding:6px; border-radius:6px; background:var(--accent-orange); border:none; color:#fff; font-weight:600; cursor:pointer;" onclick="createNewNote()">+ 새 메모</button>
            <button style="padding:6px 10px; border-radius:6px; background:rgba(255,255,255,0.1); border:none; color:#fff; cursor:pointer;" onclick="deleteCurrentNote()">🗑️</button>
          </div>
          <div class="notes-list" id="notes-items-list"></div>
        </div>
        <div class="notes-editor">
          <div style="padding:10px 14px; border-bottom:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; align-items:center;">
            <input type="text" id="note-title-input" placeholder="메모 제목" style="background:none; border:none; outline:none; color:#fff; font-size:16px; font-weight:700; width:70%; font-family:var(--font-system);" oninput="handleNoteEdit()" />
            <div style="display:flex; align-items:center; gap:8px;">
              <span id="note-save-status" style="font-size:11px; color:#4ade80;">자동 저장됨</span>
              <button onclick="exportCurrentNote()" style="padding:4px 8px; border-radius:4px; background:rgba(255,255,255,0.1); border:none; color:#fff; font-size:11px; cursor:pointer;">.md 내보내기</button>
            </div>
          </div>
          <textarea id="note-body-input" placeholder="메모 내용을 입력하세요..." style="flex:1; background:transparent; border:none; outline:none; color:#e2e8f0; font-family:var(--font-system); font-size:13.5px; line-height:1.6; padding:14px; resize:none;" oninput="handleNoteEdit()"></textarea>
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-notes', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-notes', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-notes', 'br')"></div>
  </div>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- ─── WINDOW 7: Finder & File System ─── -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <div class="app-window" id="window-finder" style="width: 820px; height: 520px; top: 80px; left: 160px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-finder')">
      <div class="traffic-lights">
        <button class="traffic-btn traffic-close" onclick="closeApp('finder')">✕</button>
        <button class="traffic-btn traffic-min" onclick="minimizeApp('finder')">−</button>
        <button class="traffic-btn traffic-max" onclick="maximizeApp('finder')">+</button>
      </div>
      <div class="window-title">Finder — Documents &amp; User Files</div>
    </div>
    <div class="window-body" style="padding:0; overflow:hidden;">
      <div style="display:flex; height:100%;">
        <div style="width:180px; background:rgba(0,0,0,0.25); border-right:1px solid rgba(255,255,255,0.1); padding:12px 8px; display:flex; flex-direction:column; gap:4px;">
          <div style="font-size:10px; font-weight:700; color:#94a3b8; padding:4px 8px; text-transform:uppercase;">즐겨찾기</div>
          <div class="photos-sidebar-item active">📁 모든 문서</div>
          <div class="photos-sidebar-item" onclick="triggerRealFileUpload()">⬆️ 파일 업로드</div>
          <div class="photos-sidebar-item" onclick="createBlankFile()">➕ 새 텍스트 파일</div>
          <div class="photos-sidebar-item" onclick="openApp('trash')">🗑️ 휴지통</div>
        </div>
        <div style="flex:1; display:flex; flex-direction:column;">
          <div style="padding:8px 12px; border-bottom:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; align-items:center;">
            <div style="font-size:12px; color:#94a3b8;">방문자 PC 파일 드래그 앤 드롭 지원</div>
            <div style="display:flex; gap:8px;">
              <button onclick="downloadSelectedFile()" style="padding:4px 10px; border-radius:6px; background:rgba(255,255,255,0.1); border:none; color:#fff; font-size:11px; cursor:pointer;">PC로 다운로드</button>
              <button onclick="deleteSelectedFile()" style="padding:4px 10px; border-radius:6px; background:rgba(239,68,68,0.25); border:none; color:#f87171; font-size:11px; cursor:pointer;">삭제 (휴지통)</button>
            </div>
          </div>
          <div id="finder-grid" style="flex:1; padding:16px; overflow-y:auto; display:grid; grid-template-columns:repeat(auto-fill, minmax(90px, 1fr)); gap:16px;" ondragover="event.preventDefault()" ondrop="handleFileDrop(event)"></div>
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-finder', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-finder', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-finder', 'br')"></div>
  </div>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- ─── WINDOW 8: Music Player App ─── -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <div class="app-window" id="window-music" style="width: 440px; height: 420px; top: 110px; left: 220px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-music')">
      <div class="traffic-lights">
        <button class="traffic-btn traffic-close" onclick="closeApp('music')">✕</button>
        <button class="traffic-btn traffic-min" onclick="minimizeApp('music')">−</button>
        <button class="traffic-btn traffic-max" onclick="maximizeApp('music')">+</button>
      </div>
      <div class="window-title">음악 — Apple Music</div>
    </div>
    <div class="window-body music-body">
      <div class="music-album-art">🎵</div>
      <div>
        <div style="font-size:17px; font-weight:700;" id="music-player-title">Clair de Lune (달빛)</div>
        <div style="font-size:13px; color:#cbd5e1; margin-top:2px;" id="music-player-artist">Claude Debussy — Ambient Synthesizer</div>
      </div>
      <div class="music-eq-bars" id="music-eq-container" style="opacity:0.3;">
        <div class="eq-bar" style="animation-delay:0.1s;"></div>
        <div class="eq-bar" style="animation-delay:0.3s;"></div>
        <div class="eq-bar" style="animation-delay:0.2s;"></div>
        <div class="eq-bar" style="animation-delay:0.4s;"></div>
        <div class="eq-bar" style="animation-delay:0.15s;"></div>
      </div>
      <div style="display:flex; align-items:center; gap:24px;">
        <button onclick="prevMusicTrack()" style="background:none; border:none; color:#fff; font-size:22px; cursor:pointer;">⏮</button>
        <button id="music-main-play-btn" onclick="toggleMusicPlay()" style="width:52px; height:52px; border-radius:50%; background:#fa2d48; border:none; color:#fff; font-size:20px; cursor:pointer; box-shadow:0 4px 14px rgba(250,45,72,0.5);">▶</button>
        <button onclick="nextMusicTrack()" style="background:none; border:none; color:#fff; font-size:22px; cursor:pointer;">⏭</button>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- ─── WINDOW 9: Trash Can ─── -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <div class="app-window" id="window-trash" style="width: 580px; height: 380px; top: 130px; left: 240px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-trash')">
      <div class="traffic-lights">
        <button class="traffic-btn traffic-close" onclick="closeApp('trash')">✕</button>
        <button class="traffic-btn traffic-min" onclick="minimizeApp('trash')">−</button>
        <button class="traffic-btn traffic-max" onclick="maximizeApp('trash')">+</button>
      </div>
      <div class="window-title">휴지통 — Trash</div>
    </div>
    <div class="window-body" style="display:flex; flex-direction:column; padding:12px;">
      <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.1);">
        <span id="trash-count-label" style="font-size:12px; color:#94a3b8;">0개 항목</span>
        <button onclick="emptyTrash()" style="padding:5px 12px; border-radius:6px; background:rgba(239,68,68,0.25); border:1px solid rgba(239,68,68,0.4); color:#f87171; font-weight:600; cursor:pointer;">휴지통 비우기</button>
      </div>
      <div id="trash-items-list" style="flex:1; overflow-y:auto; padding-top:10px; display:flex; flex-direction:column; gap:6px;"></div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- ─── WINDOW 10: KCT Silicone Calculator ─── -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <div class="app-window" id="window-calc" style="width: 700px; height: 510px; top: 80px; left: 180px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-calc')">
      <div class="traffic-lights">
        <button class="traffic-btn traffic-close" onclick="closeApp('calc')">✕</button>
        <button class="traffic-btn traffic-min" onclick="minimizeApp('calc')">−</button>
        <button class="traffic-btn traffic-max" onclick="maximizeApp('calc')">+</button>
      </div>
      <div class="window-title">KCT Silicon Suite — Dow Chemical Structural Calculator</div>
    </div>
    <div class="window-body">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
        <div style="background:rgba(15,20,28,0.6); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:16px;">
          <div style="font-size:12px; font-weight:700; color:var(--accent-orange); margin-bottom:12px;">입력 설계 변수</div>
          <div style="margin-bottom:10px;">
            <label style="font-size:11px; color:#94a3b8;">설계 풍하중 W (kPa):</label>
            <input type="number" id="calc-wind" value="2.5" step="0.1" style="width:100%; padding:6px 10px; background:#0b0f19; border:1px solid rgba(255,255,255,0.15); border-radius:6px; color:#fff;" />
          </div>
          <div style="margin-bottom:10px;">
            <label style="font-size:11px; color:#94a3b8;">유리 단변 길이 a (mm):</label>
            <input type="number" id="calc-short" value="1200" step="10" style="width:100%; padding:6px 10px; background:#0b0f19; border:1px solid rgba(255,255,255,0.15); border-radius:6px; color:#fff;" />
          </div>
          <div style="margin-bottom:14px;">
            <label style="font-size:11px; color:#94a3b8;">허용 응력 Fd (kPa, 기본 140):</label>
            <input type="number" id="calc-fd" value="140" step="5" style="width:100%; padding:6px 10px; background:#0b0f19; border:1px solid rgba(255,255,255,0.15); border-radius:6px; color:#fff;" />
          </div>
          <button onclick="runSiliconCalc()" style="width:100%; padding:9px; border-radius:6px; background:var(--accent-green); border:none; color:#fff; font-weight:600; cursor:pointer;">ASTM C1401 연산 실행</button>
        </div>
        <div style="background:rgba(15,20,28,0.6); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:16px;">
          <div style="font-size:12px; font-weight:700; color:#38bdf8; margin-bottom:12px;">공학 해석 결과</div>
          <div style="margin-bottom:12px;">
            <div style="font-size:11px; color:#94a3b8;">구조 실리콘 바이트 (B):</div>
            <div id="res-bite" style="font-size:24px; font-weight:700; color:#4ade80;">10.7 mm</div>
          </div>
          <div style="margin-bottom:12px;">
            <div style="font-size:11px; color:#94a3b8;">글루라인 두께 (G):</div>
            <div id="res-glueline" style="font-size:24px; font-weight:700; color:#38bdf8;">6.0 mm</div>
          </div>
          <div>
            <div style="font-size:11px; color:#94a3b8;">규격 적합 판정:</div>
            <div id="res-status" style="font-size:14px; font-weight:700; color:#4ade80;">PASS (ASTM C1401 충족)</div>
          </div>
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-calc', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-calc', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-calc', 'br')"></div>
  </div>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- ─── WINDOW 11: ASTM Specimen Lab ─── -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <div class="app-window" id="window-specimen" style="width: 740px; height: 530px; top: 95px; left: 210px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-specimen')">
      <div class="traffic-lights">
        <button class="traffic-btn traffic-close" onclick="closeApp('specimen')">✕</button>
        <button class="traffic-btn traffic-min" onclick="minimizeApp('specimen')">−</button>
        <button class="traffic-btn traffic-max" onclick="maximizeApp('specimen')">+</button>
      </div>
      <div class="window-title">ASTM D638 / C1401 물리 인장 시편 가공 센터</div>
    </div>
    <div class="window-body">
      <div style="background:rgba(0,0,0,0.3); border-radius:8px; padding:16px; border:1px solid rgba(255,255,255,0.1); margin-bottom:16px;">
        <h4 style="font-size:14px; color:var(--accent-purple); margin-bottom:8px;">ASTM D638 Type I 덤벨형 시편 정밀 규격</h4>
        <div style="font-size:12px; line-height:1.6; color:#cbd5e1;">
          전장(LO): 165mm · 평행부 폭(W): 13.0mm · 그립부 폭(WO): 19.0mm · 표점거리(G): 50.0mm · 가공오차: ±0.05mm
        </div>
      </div>
      <div style="display:flex; gap:12px;">
        <button onclick="window.open('/projects/kct/specimens', '_blank')" style="flex:1; padding:10px; border-radius:6px; background:var(--accent-purple); border:none; color:#fff; font-weight:600; cursor:pointer;">시편 가공 견적 의뢰</button>
        <button onclick="window.open('/projects/kct', '_blank')" style="padding:10px 16px; border-radius:6px; background:rgba(255,255,255,0.1); border:none; color:#fff; cursor:pointer;">KCT 플랫폼 열기</button>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-specimen', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-specimen', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-specimen', 'br')"></div>
  </div>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- ─── WINDOW 12: Terminal ─── -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <div class="app-window" id="window-terminal" style="width: 640px; height: 430px; top: 110px; left: 250px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-terminal')">
      <div class="traffic-lights">
        <button class="traffic-btn traffic-close" onclick="closeApp('terminal')">✕</button>
        <button class="traffic-btn traffic-min" onclick="minimizeApp('terminal')">−</button>
        <button class="traffic-btn traffic-max" onclick="maximizeApp('terminal')">+</button>
      </div>
      <div class="window-title">Terminal — oscar@davhave-edge: ~ (zsh)</div>
    </div>
    <div class="window-body" style="background:#0b0f19; font-family:var(--font-mono); font-size:12.5px; line-height:1.5; color:#4ade80;" onclick="document.getElementById('terminal-cli-input').focus()">
      <div id="terminal-screen" style="white-space:pre-wrap;">DAVHAVE Edge Architecture Shell (v2.7.4)
Type "help" for a list of commands.
</div>
      <div style="display:flex; align-items:center; gap:6px; margin-top:6px;">
        <span style="color:#38bdf8;">oscar@davhave-edge ~ %</span>
        <input type="text" id="terminal-cli-input" style="flex:1; background:transparent; border:none; outline:none; font-family:var(--font-mono); font-size:12.5px; color:#fff;" onkeydown="handleTerminalKey(event)" />
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-terminal', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-terminal', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-terminal', 'br')"></div>
  </div>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- ─── WINDOW 13: System Settings ─── -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <div class="app-window" id="window-settings" style="width: 620px; height: 480px; top: 100px; left: 200px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-settings')">
      <div class="traffic-lights">
        <button class="traffic-btn traffic-close" onclick="closeApp('settings')">✕</button>
        <button class="traffic-btn traffic-min" onclick="minimizeApp('settings')">−</button>
        <button class="traffic-btn traffic-max" onclick="maximizeApp('settings')">+</button>
      </div>
      <div class="window-title">시스템 설정 — 배경화면 &amp; 스펙</div>
    </div>
    <div class="window-body">
      <h4 style="font-size:13px; font-weight:700; margin-bottom:12px;">공식 배경화면 (Official Wallpapers)</h4>
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-bottom:20px;">
        <div class="photo-thumb-card" onclick="setOnlineWallpaper('https://macos27.kimi.page/wallpaper-tahoe-day.jpg', this)">
          <img src="https://macos27.kimi.page/wallpaper-tahoe-day.jpg" alt="Tahoe Day" />
          <div class="photo-thumb-caption">Tahoe Day</div>
        </div>
        <div class="photo-thumb-card" onclick="setOnlineWallpaper('https://macos27.kimi.page/wallpaper-glass-dark.jpg', this)">
          <img src="https://macos27.kimi.page/wallpaper-glass-dark.jpg" alt="Liquid Glass Dark" />
          <div class="photo-thumb-caption">Glass Dark</div>
        </div>
        <div class="photo-thumb-card" onclick="setOnlineWallpaper('https://macos27.kimi.page/wallpaper-glass-light.jpg', this)">
          <img src="https://macos27.kimi.page/wallpaper-glass-light.jpg" alt="Liquid Glass Light" />
          <div class="photo-thumb-caption">Glass Light</div>
        </div>
        <div class="photo-thumb-card" onclick="setOnlineWallpaper('https://macos27.kimi.page/wallpaper-aurora.jpg', this)">
          <img src="https://macos27.kimi.page/wallpaper-aurora.jpg" alt="Aurora Borealis" />
          <div class="photo-thumb-caption">Aurora</div>
        </div>
        <div class="photo-thumb-card" onclick="setOnlineWallpaper('https://macos27.kimi.page/wallpaper-bigsur.jpg', this)">
          <img src="https://macos27.kimi.page/wallpaper-bigsur.jpg" alt="Big Sur" />
          <div class="photo-thumb-caption">Big Sur</div>
        </div>
      </div>
      <div style="background:rgba(0,0,0,0.25); border-radius:8px; padding:14px; border:1px solid rgba(255,255,255,0.08);">
        <div style="font-size:12px; font-weight:600; margin-bottom:6px;">사운드 효과</div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:12px; color:#cbd5e1;">시스템 효과음 (시동 차임벨, 셔터음, 휴지통)</span>
          <button onclick="playAppleChime()" style="padding:4px 10px; border-radius:6px; background:var(--accent-blue); border:none; color:#fff; font-size:11px; cursor:pointer;">차임벨 재생</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════════ -->
  <!-- ─── WINDOW 14: About This Mac ─── -->
  <!-- ══════════════════════════════════════════════════════════ -->
  <div class="app-window" id="window-about" style="width: 540px; height: 320px; top: 140px; left: 260px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-about')">
      <div class="traffic-lights">
        <button class="traffic-btn traffic-close" onclick="closeApp('about')">✕</button>
        <button class="traffic-btn traffic-min" onclick="minimizeApp('about')">−</button>
        <button class="traffic-btn traffic-max" onclick="maximizeApp('about')">+</button>
      </div>
      <div class="window-title">이 Mac에 관하여</div>
    </div>
    <div class="window-body" style="display:flex; align-items:center;">
      <div style="width:140px; display:flex; justify-content:center; font-size:72px;"></div>
      <div style="flex:1; display:flex; flex-direction:column; gap:4px;">
        <h2 style="font-size:22px; font-weight:700;">macOS 27 Sequoia</h2>
        <div style="font-size:12px; color:#94a3b8; margin-bottom:8px;">버전 27.4.1 (DAVHAVE Edition)</div>
        <div style="font-size:12px; line-height:1.6; color:#cbd5e1;">
          <strong>MacBook Pro</strong> (16형, 2026년)<br/>
          <strong>칩:</strong> Apple M4 Ultra / Cloudflare 300+ Edge Cores<br/>
          <strong>메모리:</strong> 128 GB 고대역폭 통합 메모리<br/>
          <strong>저장장치:</strong> Cloudflare D1 Database &amp; R2 Media Bucket<br/>
          <strong>일련 번호:</strong> DH-EDGE-2026-0MS
        </div>
      </div>
    </div>
  </div>

  <!-- ─── Parabolic Magnification Dock ─── -->
  <div id="dock-container">
    <nav id="dock" onmousemove="handleDockMouseMove(event)" onmouseleave="resetDockMagnification()">
      <!-- Finder -->
      <div class="dock-item" onclick="openApp('finder')" data-app="finder">
        <div class="app-squircle sq-finder"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg></div>
        <div class="dock-tooltip">Finder</div>
      </div>

      <!-- Launchpad -->
      <div class="dock-item" onclick="toggleLaunchpad()" data-app="launchpad">
        <div class="app-squircle sq-launchpad"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
        <div class="dock-tooltip">Launchpad</div>
      </div>

      <!-- Safari -->
      <div class="dock-item" onclick="openApp('safari')" data-app="safari">
        <div class="app-squircle sq-safari"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg></div>
        <div class="dock-tooltip">Safari.app</div>
      </div>

      <!-- Photos -->
      <div class="dock-item" onclick="openApp('photos')" data-app="photos">
        <div class="app-squircle sq-photos"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></div>
        <div class="dock-tooltip">사진.app</div>
      </div>

      <!-- Photo Booth -->
      <div class="dock-item" onclick="openApp('photobooth')" data-app="photobooth">
        <div class="app-squircle sq-booth"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div>
        <div class="dock-tooltip">Photo Booth</div>
      </div>

      <!-- Native Calculator -->
      <div class="dock-item" onclick="openApp('calc-native')" data-app="calc-native">
        <div class="app-squircle sq-calc"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path></svg></div>
        <div class="dock-tooltip">계산기.app</div>
      </div>

      <!-- VS Code Studio -->
      <div class="dock-item" onclick="openApp('vscode')" data-app="vscode">
        <div class="app-squircle sq-code"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
        <div class="dock-tooltip">Code.app</div>
      </div>

      <!-- Notes -->
      <div class="dock-item" onclick="openApp('notes')" data-app="notes">
        <div class="app-squircle sq-notes"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path><path d="M15 3v5h5M9 13h6M9 17h4"></path></svg></div>
        <div class="dock-tooltip">메모.app</div>
      </div>

      <!-- Music -->
      <div class="dock-item" onclick="openApp('music')" data-app="music">
        <div class="app-squircle sq-music"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></div>
        <div class="dock-tooltip">음악.app</div>
      </div>

      <!-- KCT Silicone Calculator -->
      <div class="dock-item" onclick="openApp('calc')" data-app="calc">
        <div class="app-squircle sq-kct"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg></div>
        <div class="dock-tooltip">KCT 계산기</div>
      </div>

      <!-- ASTM Specimen Lab -->
      <div class="dock-item" onclick="openApp('specimen')" data-app="specimen">
        <div class="app-squircle sq-specimen"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M10 2v7.31L4.19 19A2 2 0 0 0 5.9 22h12.2a2 2 0 0 0 1.71-3L14 9.31V2"></path><path d="M8.5 2h7M14 9.3h-4"></path></svg></div>
        <div class="dock-tooltip">ASTM 시편 연구소</div>
      </div>

      <!-- Terminal -->
      <div class="dock-item" onclick="openApp('terminal')" data-app="terminal">
        <div class="app-squircle sq-terminal"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg></div>
        <div class="dock-tooltip">Terminal.app</div>
      </div>

      <!-- Settings -->
      <div class="dock-item" onclick="openApp('settings')" data-app="settings">
        <div class="app-squircle sq-settings"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
        <div class="dock-tooltip">설정</div>
      </div>

      <div class="dock-separator"></div>

      <!-- Trash Can -->
      <div class="dock-item" onclick="openApp('trash')" data-app="trash">
        <div class="app-squircle sq-trash" id="dock-trash-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></div>
        <div class="dock-tooltip">휴지통</div>
      </div>

      <!-- Return to Web Standard -->
      <div class="dock-item" onclick="window.location.href='/'" title="웹 표준 홈으로">
        <div class="app-squircle sq-web"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
        <div class="dock-tooltip">메인 웹으로 이동</div>
      </div>
    </nav>
  </div>

  <!-- ─── Client Scripts ─── -->
  <script>
    let highestZ = 100;
    const runningApps = new Set(['finder']);
    let activeApp = 'finder';

    const STORAGE_KEY_NOTES = 'davhave_macos_notes_v2';
    const STORAGE_KEY_FILES = 'davhave_macos_files_v2';
    const STORAGE_KEY_TRASH = 'davhave_macos_trash_v2';
    const STORAGE_KEY_STICKY = 'davhave_macos_sticky_v2';

    const DEFAULT_NOTES = [
      {
        id: 'note-1',
        title: "Cloudflare 0ms 엣지 아키텍처의 비밀",
        date: "2026.09.28",
        content: "단 1ms도 허비하지 않는 글로벌 엣지 컴퓨팅\\\\n\\\\n기존 컨테이너나 가상머신 기반의 백엔드는 콜드 스타트 지연시간(100ms~1s)이 발생하지만, Cloudflare Workers는 V8 Isolate 기반으로 전 세계 300+ 엣지 데이터센터에서 0ms 콜드스타트로 즉시 실행됩니다."
      },
      {
        id: 'note-2',
        title: "Dow Chemical 실리콘 구조 바이트 공식",
        date: "2026.09.25",
        content: "ASTM C1401 기준 구조용 실리콘 바이트 산정 공식:\\\\n\\\\nB = (W * a) / (2 * Fd)\\\\n\\\\n여기서 W는 설계 풍하중(kPa), a는 유리 단변 길이(mm), Fd는 설계 허용 응력(통상 140 kPa)입니다. ASTM 규정에 따라 어떠한 경우에도 6.0mm 미만은 허용되지 않습니다."
      }
    ];

    const DEFAULT_FILES = [
      { id: 'f1', name: 'Curtain_Wall_Detail.jpg', type: 'image', url: 'https://macos27.kimi.page/photo-4.jpg', size: '395 KB' },
      { id: 'f2', name: 'Yosemite_Sunrise.jpg', type: 'image', url: 'https://macos27.kimi.page/photo-1.jpg', size: '708 KB' },
      { id: 'f3', name: 'KCT_Silicon_Spec.txt', type: 'text', content: 'Dow Chemical 6대 실리콘 공학 연산 규격서 v2.4\\\\n- 풍하중 바이트 공식: B = (W * a) / (2 * Fd)\\\\n- 글루라인 최소 기준: G >= 6.0mm', size: '12 KB' }
    ];

    const PHOTOS_DATA = [
      { id: 'p1', title: 'Lake Tahoe Daybreak', cat: 'landscape', url: 'https://macos27.kimi.page/wallpaper-tahoe-day.jpg', res: '3840x2160', fav: true },
      { id: 'p2', title: 'Curtain Wall Facade Joint', cat: 'silicon', url: 'https://macos27.kimi.page/photo-4.jpg', res: '2560x1440', fav: true },
      { id: 'p3', title: 'Liquid Glass Spectrum', cat: 'silicon', url: 'https://macos27.kimi.page/wallpaper-glass-dark.jpg', res: '3840x2160', fav: false },
      { id: 'p4', title: 'Yosemite Valley Mist', cat: 'landscape', url: 'https://macos27.kimi.page/photo-1.jpg', res: '2880x1800', fav: true },
      { id: 'p5', title: 'Aurora Borealis Edge', cat: 'landscape', url: 'https://macos27.kimi.page/wallpaper-aurora.jpg', res: '3840x2160', fav: false },
      { id: 'p6', title: 'Glass Architecture Light', cat: 'silicon', url: 'https://macos27.kimi.page/wallpaper-glass-light.jpg', res: '3840x2160', fav: false },
      { id: 'p7', title: 'ASTM Specimen Macro', cat: 'lab', url: 'https://macos27.kimi.page/photo-2.jpg', res: '2048x1365', fav: true },
      { id: 'p8', title: 'Big Sur Highway Coast', cat: 'landscape', url: 'https://macos27.kimi.page/wallpaper-bigsur.jpg', res: '3840x2160', fav: false }
    ];

    let notes = [];
    let currentNoteId = null;
    let files = [];
    let selectedFileId = null;
    let trashItems = [];
    let audioContext = null;
    let isMuted = false;

    // ─── Launchpad Apps Registry ───
    const LAUNCHPAD_APPS = [
      { id: 'finder', name: 'Finder', sqClass: 'sq-finder', icon: '📁' },
      { id: 'safari', name: 'Safari', sqClass: 'sq-safari', icon: '🧭' },
      { id: 'photos', name: '사진', sqClass: 'sq-photos', icon: '🖼️' },
      { id: 'photobooth', name: 'Photo Booth', sqClass: 'sq-booth', icon: '📷' },
      { id: 'calc-native', name: '계산기', sqClass: 'sq-calc', icon: '🧮' },
      { id: 'vscode', name: 'Code', sqClass: 'sq-code', icon: '💻' },
      { id: 'notes', name: '메모', sqClass: 'sq-notes', icon: '📝' },
      { id: 'music', name: '음악', sqClass: 'sq-music', icon: '🎵' },
      { id: 'calc', name: 'KCT 계산기', sqClass: 'sq-kct', icon: '📐' },
      { id: 'specimen', name: 'ASTM 시편', sqClass: 'sq-specimen', icon: '🧪' },
      { id: 'terminal', name: 'Terminal', sqClass: 'sq-terminal', icon: '🖥️' },
      { id: 'trash', name: '휴지통', sqClass: 'sq-trash', icon: '🗑️' },
      { id: 'settings', name: '시스템 설정', sqClass: 'sq-settings', icon: '⚙️' },
      { id: 'about', name: '이 Mac에 관하여', sqClass: 'sq-launchpad', icon: '' }
    ];

    window.addEventListener('DOMContentLoaded', () => {
      loadStorageData();
      initClocksAndWidgets();
      renderFinderFiles();
      renderPhotosGrid('all');
      renderTrashList();
      renderLaunchpadGrid('');

      openApp('finder');

      // Apple Menu
      const appleBtn = document.getElementById('apple-menu-btn');
      const appleDropdown = document.getElementById('apple-dropdown');
      appleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        appleDropdown.classList.toggle('show');
      });

      document.addEventListener('click', () => {
        appleDropdown.classList.remove('show');
        document.getElementById('control-center').classList.remove('show');
        document.getElementById('context-menu').classList.remove('show');
      });

      // Keyboard shortcuts
      window.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && (e.key === ' ' || e.key === 'k' || e.key === 'K')) {
          e.preventDefault();
          toggleSpotlight();
        }
        if (e.key === 'F3') {
          e.preventDefault();
          toggleMissionControl();
        }
        if (e.key === 'Escape') {
          closeSpotlight();
          closeLaunchpad();
          closeMissionControl();
          document.getElementById('control-center').classList.remove('show');
          appleDropdown.classList.remove('show');
          document.getElementById('context-menu').classList.remove('show');
        }
        if (activeApp === 'calc-native') {
          handleCalcKeyboard(e);
        }
      });
    });

    // ─── Web Audio API Synthesizer (0 External Dependencies) ───
    function getAudioCtx() {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      return audioContext;
    }

    function playAppleChime() {
      if (isMuted) return;
      try {
        const ctx = getAudioCtx();
        const now = ctx.currentTime;
        // F# major chord: F#2, C#3, F#3, A#3, C#4, F#4
        const freqs = [185.0, 277.18, 369.99, 466.16, 554.37, 739.99];
        freqs.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now);
          gain.gain.setValueAtTime(0.09 / freqs.length, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.004);
          osc.stop(now + 3.4);
        });
      } catch (e) {}
    }

    function playShutterSound() {
      if (isMuted) return;
      try {
        const ctx = getAudioCtx();
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.08);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.09);
      } catch (e) {}
    }

    function playTrashSound() {
      if (isMuted) return;
      try {
        const ctx = getAudioCtx();
        const bufferSize = ctx.sampleRate * 0.15;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.14, ctx.currentTime);
        noise.connect(gain);
        gain.connect(ctx.destination);
        noise.start();
      } catch (e) {}
    }

    function toggleSoundMute() {
      isMuted = !isMuted;
      document.getElementById('sound-indicator-btn').style.opacity = isMuted ? '0.4' : '1';
    }

    function adjustSoundVolume(val) {
      document.getElementById('sound-vol-val').textContent = val + '%';
      if (val == 0) isMuted = true;
      else isMuted = false;
    }

    // ─── Theme Toggle (Dark / Light) ───
    function toggleTheme() {
      const html = document.documentElement;
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
    }

    // ─── Safari Browser Logic ───
    function navigateSafari(url) {
      const input = document.getElementById('safari-url-input');
      const iframe = document.getElementById('safari-iframe');
      if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('/')) {
        url = 'https://' + url;
      }
      input.value = url;
      iframe.src = url;
      openApp('safari');
    }

    function handleSafariAddressKey(e) {
      if (e.key === 'Enter') {
        let val = document.getElementById('safari-url-input').value.trim();
        if (val.includes('.') && !val.includes(' ')) {
          navigateSafari(val);
        } else {
          navigateSafari('https://www.google.com/search?q=' + encodeURIComponent(val));
        }
      }
    }

    function safariGoBack() {
      try { document.getElementById('safari-iframe').contentWindow.history.back(); } catch (e) {}
    }
    function safariGoForward() {
      try { document.getElementById('safari-iframe').contentWindow.history.forward(); } catch (e) {}
    }
    function safariReload() {
      const iframe = document.getElementById('safari-iframe');
      iframe.src = iframe.src;
    }

    // ─── Photos App Logic ───
    function renderPhotosGrid(category) {
      const container = document.getElementById('photos-grid-container');
      const filtered = category === 'all' ? PHOTOS_DATA : (category === 'fav' ? PHOTOS_DATA.filter(p => p.fav) : PHOTOS_DATA.filter(p => p.cat === category));
      container.innerHTML = filtered.map(p => \`
        <div class="photo-thumb-card" onclick="setOnlineWallpaper('\${p.url}', this); alert('바탕화면이 \\\\"\${p.title}\\\\"(으)로 변경되었습니다.');">
          <img src="\${p.url}" alt="\${p.title}" />
          <div class="photo-thumb-caption">
            <div>\${p.title}</div>
            <div style="font-size:9.5px; opacity:0.75;">\${p.res} · 클릭 시 배경화면 설정</div>
          </div>
        </div>
      \`).join('');
    }

    function filterPhotosCategory(cat, elem) {
      document.querySelectorAll('.photos-sidebar-item').forEach(i => i.classList.remove('active'));
      elem.classList.add('active');
      renderPhotosGrid(cat);
    }

    // ─── Photo Booth / FaceTime Logic ───
    let pbStream = null;
    let pbFilter = 'none';

    async function initPhotoBooth() {
      const video = document.getElementById('photobooth-video');
      const dot = document.getElementById('menubar-camera-dot');
      try {
        pbStream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 }, audio: false });
        video.srcObject = pbStream;
        dot.style.display = 'block';
      } catch (err) {
        console.warn('Camera permission denied or unavailable, fallback active:', err);
        dot.style.display = 'block';
      }
    }

    function stopPhotoBooth() {
      if (pbStream) {
        pbStream.getTracks().forEach(t => t.stop());
        pbStream = null;
      }
      document.getElementById('menubar-camera-dot').style.display = 'none';
    }

    function setPhotoFilter(f) {
      pbFilter = f;
      document.getElementById('photobooth-video').style.filter = f;
    }

    function takePhoto() {
      const countdown = document.getElementById('photobooth-countdown');
      const flash = document.getElementById('photobooth-flash');
      let count = 3;
      countdown.style.display = 'block';
      countdown.textContent = count;

      const timer = setInterval(() => {
        count--;
        if (count > 0) {
          countdown.textContent = count;
        } else {
          clearInterval(timer);
          countdown.style.display = 'none';

          // Flash effect
          flash.style.opacity = '1';
          playShutterSound();
          setTimeout(() => flash.style.opacity = '0', 250);

          // Capture frame
          const video = document.getElementById('photobooth-video');
          const canvas = document.getElementById('photobooth-canvas');
          canvas.width = 640;
          canvas.height = 480;
          const ctx = canvas.getContext('2d');
          ctx.filter = pbFilter;
          ctx.translate(canvas.width, 0);
          ctx.scale(-1, 1);
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL('image/jpeg');

          // Add to filmstrip & Finder files
          const filmstrip = document.getElementById('photobooth-filmstrip');
          const img = document.createElement('img');
          img.src = dataUrl;
          img.style.cssText = 'width:42px; height:32px; object-fit:cover; border-radius:4px; border:1px solid #fff; cursor:pointer;';
          img.onclick = () => window.open(dataUrl, '_blank');
          filmstrip.prepend(img);

          files.unshift({
            id: 'file-photo-' + Date.now(),
            name: 'Photo_' + new Date().toISOString().slice(11, 19).replace(/:/g, '-') + '.jpg',
            type: 'image',
            url: dataUrl,
            size: '145 KB'
          });
          saveFilesToStorage();
          renderFinderFiles();
        }
      }, 1000);
    }

    // ─── Music Player Ambient Synthesizer ───
    let musicPlaying = false;
    let musicOscillators = [];

    function toggleMusicPlay() {
      const btn = document.getElementById('music-main-play-btn');
      const eq = document.getElementById('music-eq-container');
      if (musicPlaying) {
        stopMusicTone();
        btn.textContent = '▶';
        eq.style.opacity = '0.3';
        musicPlaying = false;
      } else {
        startMusicTone();
        btn.textContent = '❚❚';
        eq.style.opacity = '1';
        musicPlaying = true;
      }
    }

    function startMusicTone() {
      try {
        const ctx = getAudioCtx();
        const chords = [261.63, 329.63, 392.00, 523.25]; // C major soft ambient
        musicOscillators = chords.map(freq => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          gain.gain.setValueAtTime(0.015, ctx.currentTime);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          return { osc, gain };
        });
      } catch (e) {}
    }

    function stopMusicTone() {
      musicOscillators.forEach(o => {
        try { o.osc.stop(); o.osc.disconnect(); } catch (e) {}
      });
      musicOscillators = [];
    }

    function nextMusicTrack() {
      document.getElementById('music-player-title').textContent = 'Steve Jobs Macworld 2007 (Keynote Audio)';
      document.getElementById('music-player-artist').textContent = 'Apple Special Event';
      document.getElementById('cc-music-title').textContent = 'Steve Jobs 2007 Keynote';
    }

    function prevMusicTrack() {
      document.getElementById('music-player-title').textContent = 'Clair de Lune (달빛)';
      document.getElementById('music-player-artist').textContent = 'Claude Debussy — Ambient Synthesizer';
      document.getElementById('cc-music-title').textContent = 'Clair de Lune (드뷔시)';
    }

    // ─── Trash Can Logic ───
    function renderTrashList() {
      const list = document.getElementById('trash-items-list');
      const countLabel = document.getElementById('trash-count-label');
      const trashIcon = document.getElementById('dock-trash-icon');
      countLabel.textContent = trashItems.length + '개 항목';

      if (trashItems.length > 0) {
        trashIcon.style.filter = 'brightness(1.2)';
        list.innerHTML = trashItems.map(item => \`
          <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; background:rgba(255,255,255,0.05); border-radius:6px;">
            <span>\${escapeHtml(item.name)}</span>
            <button onclick="restoreTrashItem('\${item.id}')" style="padding:4px 8px; border-radius:4px; background:rgba(255,255,255,0.1); border:none; color:#38bdf8; font-size:11px; cursor:pointer;">복원</button>
          </div>
        \`).join('');
      } else {
        trashIcon.style.filter = 'none';
        list.innerHTML = '<div style="text-align:center; color:#64748b; font-size:12px; padding:30px 0;">휴지통이 비어 있습니다.</div>';
      }
    }

    function emptyTrash() {
      if (trashItems.length === 0) return;
      playTrashSound();
      trashItems = [];
      try { localStorage.setItem(STORAGE_KEY_TRASH, JSON.stringify([])); } catch(e){}
      renderTrashList();
    }

    function restoreTrashItem(id) {
      const idx = trashItems.findIndex(i => i.id === id);
      if (idx !== -1) {
        const item = trashItems.splice(idx, 1)[0];
        files.unshift(item);
        saveFilesToStorage();
        renderFinderFiles();
        try { localStorage.setItem(STORAGE_KEY_TRASH, JSON.stringify(trashItems)); } catch(e){}
        renderTrashList();
      }
    }

    // ─── Mission Control ───
    function toggleMissionControl() {
      const overlay = document.getElementById('mission-control-overlay');
      if (overlay.classList.contains('show')) {
        closeMissionControl();
      } else {
        const grid = document.getElementById('mission-control-grid');
        const openWins = [...document.querySelectorAll('.app-window.open')];
        grid.innerHTML = openWins.map(w => {
          const id = w.id.replace('window-', '');
          const title = w.querySelector('.window-title').textContent;
          return \`
            <div class="mc-window-thumb" onclick="openApp('\${id}'); closeMissionControl();">
              <div style="font-size:12px; font-weight:700; color:#cbd5e1; margin-bottom:8px;">\${escapeHtml(title)}</div>
              <div style="flex:1; background:rgba(0,0,0,0.3); border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:32px;">🪟</div>
            </div>
          \`;
        }).join('');
        overlay.classList.add('show');
      }
    }

    function closeMissionControl() {
      document.getElementById('mission-control-overlay').classList.remove('show');
    }

    // ─── Lock Screen & Boot Sequences ───
    function lockScreen() {
      document.getElementById('lock-screen-overlay').classList.add('show');
      document.getElementById('lock-pwd-input').value = '';
      setTimeout(() => document.getElementById('lock-pwd-input').focus(), 100);
    }

    function unlockScreen() {
      document.getElementById('lock-screen-overlay').classList.remove('show');
    }

    function rebootSystem() {
      const boot = document.getElementById('boot-screen-overlay');
      const fill = document.getElementById('boot-progress-fill');
      boot.classList.add('show');
      fill.style.width = '0%';
      playAppleChime();

      setTimeout(() => fill.style.width = '100%', 100);
      setTimeout(() => {
        boot.classList.remove('show');
      }, 2600);
    }

    function shutdownSystem() {
      if (confirm('macOS 시스템을 종료하시겠습니까?')) {
        window.location.href = '/';
      }
    }

    // ─── Spotlight Search with Instant Math Evaluator ───
    const SEARCH_ITEMS = [
      { name: 'Safari', type: 'App', icon: '🧭', action: () => openApp('safari') },
      { name: '사진 (Photos)', type: 'App', icon: '🖼️', action: () => openApp('photos') },
      { name: 'Photo Booth (카메라)', type: 'App', icon: '📷', action: () => openApp('photobooth') },
      { name: '계산기 (Calculator)', type: 'App', icon: '🧮', action: () => openApp('calc-native') },
      { name: 'Code (VS Code Studio)', type: 'App', icon: '💻', action: () => openApp('vscode') },
      { name: '메모 (Notes)', type: 'App', icon: '📝', action: () => openApp('notes') },
      { name: '음악 (Music)', type: 'App', icon: '🎵', action: () => openApp('music') },
      { name: 'Finder', type: 'App', icon: '📁', action: () => openApp('finder') },
      { name: 'KCT 실리콘 계산기', type: 'App', icon: '📐', action: () => openApp('calc') },
      { name: 'ASTM 인장 시편 연구소', type: 'App', icon: '🧪', action: () => openApp('specimen') },
      { name: 'Terminal', type: 'App', icon: '🖥️', action: () => openApp('terminal') },
      { name: '이 Mac에 관하여', type: 'App', icon: '', action: () => openApp('about') },
      { name: '시스템 설정', type: 'App', icon: '⚙️', action: () => openApp('settings') }
    ];

    function toggleSpotlight() {
      const overlay = document.getElementById('spotlight-overlay');
      if (overlay.classList.contains('show')) closeSpotlight();
      else {
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

    function evaluateMath(expr) {
      try {
        const clean = expr.replace(/sqrt\\(([^)]+)\\)/g, 'Math.sqrt($1)').replace(/\\^/g, '**');
        if (/^[0-9+*\\/().\\sMathsqrt-]+$/.test(clean)) {
          const res = Function('"use strict"; return (' + clean + ')')();
          if (typeof res === 'number' && !isNaN(res)) return res;
        }
      } catch (e) {}
      return null;
    }

    function filterSpotlight(q) {
      const list = document.getElementById('spotlight-results');
      let html = '';

      // Instant Math Check
      const mathResult = evaluateMath(q.trim());
      if (mathResult !== null) {
        html += \`
          <div class="spotlight-item active" onclick="navigator.clipboard.writeText('\${mathResult}'); alert('계산 결과가 클립보드에 복사되었습니다: \${mathResult}'); closeSpotlight();">
            <span style="font-size:20px;">🧮</span>
            <span style="flex:1; font-weight:700; font-size:16px; color:#4ade80;">= \${Number(mathResult).toLocaleString()}</span>
            <span style="font-size:11px; opacity:0.6;">계산 결과 (Enter 복사)</span>
          </div>
        \`;
      }

      const filtered = SEARCH_ITEMS.filter(item => item.name.toLowerCase().includes(q.toLowerCase()));
      html += filtered.map((item, idx) => \`
        <div class="spotlight-item \${idx === 0 && mathResult === null ? 'active' : ''}" onclick="executeSpotlightItem(\${idx})">
          <span style="font-size:18px;">\${item.icon}</span>
          <span style="flex:1; font-weight:500;">\${item.name}</span>
          <span style="font-size:11px; opacity:0.6;">\${item.type}</span>
        </div>
      \`).join('');

      list.innerHTML = html;
    }

    function executeSpotlightItem(idx) {
      const input = document.getElementById('spotlight-input').value;
      const mathResult = evaluateMath(input.trim());
      if (mathResult !== null && idx === 0) {
        navigator.clipboard.writeText(String(mathResult));
        closeSpotlight();
        return;
      }
      const filtered = SEARCH_ITEMS.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));
      if (filtered[idx]) {
        filtered[idx].action();
        closeSpotlight();
      }
    }

    function handleSpotlightKey(e) {
      if (e.key === 'Enter') executeSpotlightItem(0);
    }

    // ─── Desktop Context Menu ───
    function handleDesktopContextMenu(e) {
      if (e.target.closest('.app-window') || e.target.closest('#dock') || e.target.closest('#menubar')) {
        return;
      }
      e.preventDefault();
      const menu = document.getElementById('context-menu');
      menu.style.top = e.clientY + 'px';
      menu.style.left = e.clientX + 'px';
      menu.classList.add('show');
    }

    // ─── Launchpad Logic ───
    function toggleLaunchpad() {
      const lp = document.getElementById('launchpad-overlay');
      if (lp.classList.contains('show')) closeLaunchpad();
      else {
        lp.classList.add('show');
        document.getElementById('launchpad-search-input').value = '';
        renderLaunchpadGrid('');
        setTimeout(() => document.getElementById('launchpad-search-input').focus(), 100);
      }
    }

    function closeLaunchpad() {
      document.getElementById('launchpad-overlay').classList.remove('show');
    }

    function handleLaunchpadBackdrop(e) {
      if (e.target.id === 'launchpad-overlay') closeLaunchpad();
    }

    function renderLaunchpadGrid(q) {
      const grid = document.getElementById('launchpad-grid');
      const filtered = LAUNCHPAD_APPS.filter(a => a.name.toLowerCase().includes(q.toLowerCase()));
      grid.innerHTML = filtered.map(a => \`
        <div class="launchpad-app" onclick="openApp('\${a.id}'); closeLaunchpad();">
          <div class="app-squircle \${a.sqClass}" style="width:60px; height:60px; font-size:28px;">
            \${a.icon}
          </div>
          <span class="launchpad-app-label">\${a.name}</span>
        </div>
      \`).join('');
    }

    function filterLaunchpad(q) {
      renderLaunchpadGrid(q);
    }

    // ─── Apple Native Calculator Engine ───
    let calcCurrent = '0';
    let calcPrevious = null;
    let calcOp = null;
    let calcWaitNew = false;

    function calcKey(k) {
      const disp = document.getElementById('calc-display-val');
      if (!isNaN(k)) {
        if (calcCurrent === '0' || calcWaitNew) {
          calcCurrent = k;
          calcWaitNew = false;
        } else {
          calcCurrent += k;
        }
      } else if (k === '.') {
        if (!calcCurrent.includes('.')) calcCurrent += '.';
      } else if (k === 'AC') {
        calcCurrent = '0';
        calcPrevious = null;
        calcOp = null;
      } else if (k === '+/-') {
        calcCurrent = String(-parseFloat(calcCurrent));
      } else if (k === '%') {
        calcCurrent = String(parseFloat(calcCurrent) / 100);
      } else if (['+', '−', '×', '÷'].includes(k)) {
        calcPrevious = parseFloat(calcCurrent);
        calcOp = k;
        calcWaitNew = true;
      } else if (k === '=') {
        if (calcOp && calcPrevious !== null) {
          const cur = parseFloat(calcCurrent);
          let res = cur;
          if (calcOp === '+') res = calcPrevious + cur;
          if (calcOp === '−') res = calcPrevious - cur;
          if (calcOp === '×') res = calcPrevious * cur;
          if (calcOp === '÷') res = cur !== 0 ? calcPrevious / cur : 'Error';
          calcCurrent = String(res);
          calcOp = null;
          calcPrevious = null;
          calcWaitNew = true;
        }
      }
      disp.textContent = calcCurrent;
    }

    function handleCalcKeyboard(e) {
      if (!isNaN(e.key)) calcKey(e.key);
      if (e.key === '.') calcKey('.');
      if (e.key === '+') calcKey('+');
      if (e.key === '-') calcKey('−');
      if (e.key === '*') calcKey('×');
      if (e.key === '/') calcKey('÷');
      if (e.key === 'Enter' || e.key === '=') calcKey('=');
      if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') calcKey('AC');
    }

    // ─── VS Code Tab Switcher ───
    const CODE_SNIPPETS = {
      'worker.js': \`// Cloudflare Workers 0ms Edge Architecture
import { renderMacOsPage } from "./lib/macos-render.js";
import { renderKctPage } from "./lib/kct-render.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;

    // High-Fidelity macOS 27 Desktop Simulation
    if (pathname === "/macos") {
      return new Response(renderMacOsPage(), {
        headers: { "content-type": "text/html; charset=utf-8" }
      });
    }

    return env.ASSETS.fetch(request);
  }
};\`,
      'silicone.ts': \`// Dow Chemical & ASTM C1401 Structural Silicone Calculator
export function calculateSiliconeBite(windLoadKpa: number, shortSpanMm: number, fdKpa = 140): number {
  // Formula: B = (W * a) / (2 * Fd)
  const bite = (windLoadKpa * shortSpanMm) / (2 * fdKpa);
  return Math.max(6.0, Math.round(bite * 10) / 10);
}

export function calculateGlueline(biteMm: number): number {
  return Math.max(6.0, Math.round((biteMm / 2) * 10) / 10);
}\`,
      'astm_tensile.py': \`# ASTM D638 Type I Tensile Specimen Geometry
class ASTMSpecimen:
    LO = 165.0  # Overall length (mm)
    G = 50.0    # Gauge length (mm)
    W = 13.0    # Width of narrow section (mm)
    WO = 19.0   # Width overall (mm)

    @classmethod
    def calculate_cross_section(cls, thickness_mm=3.2):
        return cls.W * thickness_mm\`,
      'README.md': \`# DAVHAVE Precision Engineering Studio
High-Performance Edge Systems & Industrial Computing.
- 0ms Cold Start Edge Workers
- Dow Chemical Structural Silicone Computing
- ASTM D638 / C1401 Physical Specimen Lab\`
    };

    function switchVsCodeTab(name) {
      document.querySelectorAll('.vscode-file-item').forEach(f => f.classList.remove('active'));
      const activeItem = [...document.querySelectorAll('.vscode-file-item')].find(el => el.textContent.includes(name));
      if (activeItem) activeItem.classList.add('active');

      document.getElementById('vscode-active-tab').textContent = '📄 ' + name;
      document.getElementById('vscode-code-content').textContent = CODE_SNIPPETS[name] || '// Empty file';
    }

    // ─── LocalStorage Management ───
    function loadStorageData() {
      try {
        const storedNotes = localStorage.getItem(STORAGE_KEY_NOTES);
        notes = storedNotes ? JSON.parse(storedNotes) : DEFAULT_NOTES;
      } catch { notes = DEFAULT_NOTES; }

      try {
        const storedFiles = localStorage.getItem(STORAGE_KEY_FILES);
        files = storedFiles ? JSON.parse(storedFiles) : DEFAULT_FILES;
      } catch { files = DEFAULT_FILES; }

      try {
        const storedTrash = localStorage.getItem(STORAGE_KEY_TRASH);
        trashItems = storedTrash ? JSON.parse(storedTrash) : [];
      } catch { trashItems = []; }

      const storedSticky = localStorage.getItem(STORAGE_KEY_STICKY);
      if (storedSticky) document.getElementById('sticky-note-input').value = storedSticky;

      renderNotesList();
      if (notes.length > 0) selectNote(notes[0].id);
    }

    function saveNotesToStorage() {
      try { localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(notes)); } catch (e) {}
    }

    function saveFilesToStorage() {
      try { localStorage.setItem(STORAGE_KEY_FILES, JSON.stringify(files)); } catch (e) {}
    }

    function saveStickyNote(val) {
      localStorage.setItem(STORAGE_KEY_STICKY, val);
    }

    // ─── Notes App Logic ───
    function renderNotesList() {
      const listEl = document.getElementById('notes-items-list');
      listEl.innerHTML = notes.map(n => \`
        <div class="notes-item \${n.id === currentNoteId ? 'active' : ''}" onclick="selectNote('\${n.id}')">
          <div style="font-weight:600; font-size:12.5px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">\${escapeHtml(n.title || '무제 메모')}</div>
          <div style="font-size:10.5px; opacity:0.65; margin-top:2px;">\${n.date}</div>
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
      notes.unshift({
        id: newId,
        title: '새 메모',
        date: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
        content: ''
      });
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
      saveNotesToStorage();
      renderNotesList();
    }

    function deleteCurrentNote() {
      if (!currentNoteId) return;
      const note = notes.find(n => n.id === currentNoteId);
      if (!note || !confirm('이 메모를 휴지통으로 이동하시겠습니까?')) return;
      trashItems.unshift({ id: 'trash-' + Date.now(), name: note.title + '.txt', content: note.content });
      notes = notes.filter(n => n.id !== currentNoteId);
      saveNotesToStorage();
      try { localStorage.setItem(STORAGE_KEY_TRASH, JSON.stringify(trashItems)); } catch(e){}
      renderTrashList();
      if (notes.length > 0) selectNote(notes[0].id);
      else createNewNote();
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

    // ─── Real File System ───
    function renderFinderFiles() {
      const grid = document.getElementById('finder-grid');
      grid.innerHTML = files.map(f => \`
        <div class="finder-file \${f.id === selectedFileId ? 'selected' : ''}" onclick="selectFinderFile('\${f.id}')" ondblclick="openFinderFile('\${f.id}')" style="display:flex; flex-direction:column; align-items:center; gap:6px; cursor:pointer; padding:6px; border-radius:6px;">
          <div style="width:48px; height:48px; display:flex; align-items:center; justify-content:center; font-size:32px;">
            \${f.type === 'image' ? \`<img src="\${f.url}" style="width:44px; height:44px; object-fit:cover; border-radius:4px;" />\` : (f.name.endsWith('.txt') ? '📄' : '📁')}
          </div>
          <div style="font-size:11px; text-align:center; word-break:break-all; max-width:80px;">\${escapeHtml(f.name)}</div>
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
      if (file.type === 'text') {
        const newId = 'note-' + Date.now();
        notes.unshift({ id: newId, title: file.name, date: '2026.09.29', content: file.content || '' });
        saveNotesToStorage();
        selectNote(newId);
        openApp('notes');
      } else if (file.type === 'image') {
        window.open(file.url, '_blank');
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
        files.unshift({
          id: 'file-' + Date.now(),
          name: file.name,
          type: isImg ? 'image' : 'text',
          url: isImg ? event.target.result : null,
          content: !isImg ? event.target.result : null,
          size: (file.size / 1024).toFixed(1) + ' KB'
        });
        saveFilesToStorage();
        renderFinderFiles();
        alert(\`"\${file.name}" 파일이 성공적으로 로드되었습니다!\`);
      };
      if (isImg) reader.readAsDataURL(file);
      else reader.readAsText(file);
    }

    function createBlankFile() {
      const name = prompt('새 텍스트 파일 이름:', '새문서.txt');
      if (!name) return;
      files.unshift({
        id: 'file-' + Date.now(),
        name: name.endsWith('.txt') ? name : name + '.txt',
        type: 'text',
        content: '새 텍스트 내용',
        size: '1 KB'
      });
      saveFilesToStorage();
      renderFinderFiles();
    }

    function downloadSelectedFile() {
      if (!selectedFileId) { alert('다운로드할 파일을 선택하세요.'); return; }
      const file = files.find(f => f.id === selectedFileId);
      if (!file) return;
      const a = document.createElement('a');
      if (file.url) a.href = file.url;
      else a.href = URL.createObjectURL(new Blob([file.content || ''], { type: 'text/plain' }));
      a.download = file.name;
      a.click();
    }

    function deleteSelectedFile() {
      if (!selectedFileId) return;
      const file = files.find(f => f.id === selectedFileId);
      if (!file || !confirm(\`"\${file.name}" 파일을 휴지통으로 이동하시겠습니까?\`)) return;
      trashItems.unshift(file);
      files = files.filter(f => f.id !== selectedFileId);
      selectedFileId = null;
      saveFilesToStorage();
      try { localStorage.setItem(STORAGE_KEY_TRASH, JSON.stringify(trashItems)); } catch(e){}
      renderFinderFiles();
      renderTrashList();
    }

    function handleFileDrop(e) {
      e.preventDefault();
      if (e.dataTransfer.files.length > 0) {
        document.getElementById('real-file-uploader').files = e.dataTransfer.files;
        handleRealFileUpload({ target: { files: e.dataTransfer.files } });
      }
    }

    // ─── Widgets & Clock ───
    function initClocksAndWidgets() {
      updateClocks();
      setInterval(updateClocks, 1000);
      setInterval(() => {
        const val = Math.floor(8 + Math.random() * 8);
        document.getElementById('cpu-pulse').textContent = val + '%';
      }, 2500);

      // Mini Calendar widget
      const widgetGrid = document.getElementById('widget-cal-days');
      if (widgetGrid) {
        let html = \`
          <span class="cal-day-label">일</span><span class="cal-day-label">월</span>
          <span class="cal-day-label">화</span><span class="cal-day-label">수</span>
          <span class="cal-day-label">목</span><span class="cal-day-label">금</span>
          <span class="cal-day-label">토</span>
        \`;
        for (let i = 0; i < 2; i++) html += '<span></span>';
        for (let d = 1; d <= 30; d++) {
          html += \`<span class="cal-day \${d === 29 ? 'today' : ''}" onclick="alert('2026년 9월 \${d}일')">\${d}</span>\`;
        }
        widgetGrid.innerHTML = html;
      }
    }

    function updateClocks() {
      const now = new Date();
      const sec = now.getSeconds();
      const min = now.getMinutes();
      const hr = now.getHours();

      const secDeg = (sec / 60) * 360;
      const minDeg = ((min + sec / 60) / 60) * 360;
      const hrDeg = ((hr % 12 + min / 60) / 12) * 360;

      const secHand = document.getElementById('hand-sec');
      const minHand = document.getElementById('hand-min');
      const hrHand = document.getElementById('hand-hour');

      if (secHand) secHand.style.transform = \`rotate(\${secDeg}deg)\`;
      if (minHand) minHand.style.transform = \`rotate(\${minDeg}deg)\`;
      if (hrHand) hrHand.style.transform = \`rotate(\${hrDeg}deg)\`;

      const timeStr = String(hr).padStart(2, '0') + ':' + String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
      const menubarTime = (hr >= 12 ? '오후 ' : '오전 ') + (hr % 12 || 12) + ':' + String(min).padStart(2, '0');

      document.getElementById('clock-display').textContent = menubarTime;
      const digEl = document.getElementById('widget-digital-clock');
      if (digEl) digEl.textContent = timeStr;
      const lockTime = document.getElementById('lock-time');
      if (lockTime) lockTime.textContent = String(hr).padStart(2, '0') + ':' + String(min).padStart(2, '0');
    }

    // ─── Dynamic Menubar Menu Sets ───
    const MENUBAR_SETS = {
      finder: ['파일', '편집', '보기', '이동', '창', '도움말'],
      safari: ['파일', '편집', '보기', '방문기록', '책갈피', '창', '도움말'],
      photos: ['파일', '편집', '이미지', '보기', '창', '도움말'],
      photobooth: ['파일', '편집', '카메라', '효과', '창', '도움말'],
      'calc-native': ['편집', '보기', '변환', '창', '도움말'],
      vscode: ['파일', '편집', '선택영역', '보기', '이동', '실행', '도움말'],
      notes: ['파일', '편집', '포맷', '보기', '창', '도움말'],
      music: ['음악', '재생', '제어', '계정', '창', '도움말'],
      trash: ['파일', '편집', '보기', '창', '도움말'],
      calc: ['파일', '공학공식', '단위변환', '창', '도움말'],
      specimen: ['파일', '규격표', '시편3D', '창', '도움말'],
      terminal: ['셸', '편집', '보기', '창', '도움말'],
      settings: ['보기', '계정', '창', '도움말'],
      about: ['창', '도움말']
    };

    function updateMenubarMenus(appId) {
      const container = document.getElementById('dynamic-menu-items');
      const items = MENUBAR_SETS[appId] || MENUBAR_SETS.finder;
      container.innerHTML = items.map(m => \`<div class="menu-item">\${m}</div>\`).join('');
    }

    // ─── Window Management ───
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

      if (id === 'photobooth') initPhotoBooth();
    }

    function closeApp(id) {
      const win = document.getElementById('window-' + id);
      if (!win) return;
      win.classList.remove('open');
      win.classList.remove('active');
      runningApps.delete(id);
      updateDockRunningStatus();
      if (id === 'photobooth') stopPhotoBooth();
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
        safari: 'Safari',
        photos: 'Photos',
        photobooth: 'Photo Booth',
        'calc-native': '계산기',
        vscode: 'Code',
        notes: 'Notes',
        music: 'Music',
        trash: 'Trash',
        calc: 'KCT Calculator',
        specimen: 'ASTM Specimen Lab',
        terminal: 'Terminal',
        settings: 'System Settings',
        about: 'About Studio'
      };
      activeApp = id;
      document.getElementById('menu-active-app').textContent = titles[id] || 'Finder';
      updateMenubarMenus(id);
    }

    function updateDockRunningStatus() {
      document.querySelectorAll('.dock-item').forEach(item => {
        const app = item.dataset.app;
        if (runningApps.has(app)) item.classList.add('running');
        else item.classList.remove('running');
      });
    }

    // ─── Window Dragging ───
    let isDragging = false, dragTarget = null, dragOffsetX = 0, dragOffsetY = 0;

    function startDragWindow(e, winId) {
      if (e.target.classList.contains('traffic-btn') || e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT') return;
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

    // ─── Window Resizing ───
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
        const nw = Math.max(300, startW + dx);
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

    // ─── KCT Silicone Calculator ───
    function runSiliconCalc() {
      const w = parseFloat(document.getElementById('calc-wind').value) || 2.5;
      const a = parseFloat(document.getElementById('calc-short').value) || 1200;
      const fd = parseFloat(document.getElementById('calc-fd').value) || 140;

      let bite = (w * a) / (2 * fd);
      if (bite < 6.0) bite = 6.0;
      let glueline = Math.max(6.0, bite / 2);

      document.getElementById('res-bite').textContent = bite.toFixed(1) + ' mm';
      document.getElementById('res-glueline').textContent = glueline.toFixed(1) + ' mm';
      document.getElementById('res-status').textContent = bite >= 6.0 ? 'PASS (ASTM 충족)' : '주의 (최소 6mm 권장)';
    }

    // ─── Terminal ───
    function handleTerminalKey(e) {
      if (e.key !== 'Enter') return;
      const input = document.getElementById('terminal-cli-input');
      const cmd = input.value.trim();
      input.value = '';

      const screen = document.getElementById('terminal-screen');
      screen.textContent += \`\\\\noscar@davhave-edge ~ % \${cmd}\\\\n\`;
      if (!cmd) return;

      const lower = cmd.toLowerCase();
      let response = '';

      if (lower === 'help') {
        response = \`Available commands:
  whoami     - Studio architect profile
  safari     - Open Safari browser
  photos     - Open Photos gallery
  calc       - Calculate silicone bite [e.g. calc 2.5 1200]
  code       - Open Code Studio IDE
  notes      - Open persistent notes editor
  music      - Open Music player
  chime      - Play authentic Apple startup chime
  files      - List files in virtual filesystem
  launchpad  - Toggle full screen Launchpad
  open <app> - Open app window
  clear      - Clear terminal screen\`;
      } else if (lower === 'whoami') {
        response = "Oscar Lee (DAVHAVE) — Lead Architect in High-Performance Edge Systems & Industrial Computing.";
      } else if (lower === 'chime') {
        playAppleChime();
        response = "Playing Apple startup chime...";
      } else if (lower === 'safari') {
        openApp('safari');
        response = "Launching Safari browser...";
      } else if (lower === 'photos') {
        openApp('photos');
        response = "Opening Photos library...";
      } else if (lower === 'music') {
        openApp('music');
        response = "Launching Music player...";
      } else if (lower === 'code') {
        openApp('vscode');
        response = "Launching Code.app IDE...";
      } else if (lower === 'launchpad') {
        toggleLaunchpad();
        response = "Opened Launchpad.";
      } else if (lower.startsWith('open ')) {
        const app = lower.split(' ')[1];
        openApp(app);
        response = \`Opened \${app}.app\`;
      } else if (lower === 'clear') {
        screen.textContent = 'DAVHAVE Edge Architecture Shell (v2.7.4)\\\\n';
        return;
      } else {
        response = \`zsh: command not found: \${cmd}. Type "help" for a list of commands.\`;
      }

      screen.textContent += response;
      const body = document.querySelector('#window-terminal .window-body');
      body.scrollTop = body.scrollHeight;
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
