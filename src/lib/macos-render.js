/**
 * DAVHAVE macOS 27 Edition (Pilot Experience)
 * Pixel-faithful Liquid Glass macOS Simulation referencing macos27.kimi.page
 * Featuring Real Online Photos, Wallpapers, Finder, Safari, Photos, Music & Engineering Suite.
 */

export function renderMacOsPage() {
  return `<!DOCTYPE html>
<html lang="ko" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>macOS 27 (DAVHAVE Edition) — Liquid Glass Studio Experience</title>
  <meta name="description" content="macOS 27 — a pixel-faithful Liquid Glass macOS simulation running entirely in your browser with DAVHAVE Engineering Suite." />
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
      --glass-tint-dark: rgba(22, 26, 35, 0.68);
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

    /* ─── Wallpaper Layer (Online Assets from macos27.kimi.page) ─── */
    #desktop-wallpaper {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: background-image 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease;
      z-index: 0;
      transform: scale(1.01);
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

    /* ─── Desktop Workspace & Grid Icons ─── */
    #desktop {
      position: absolute;
      top: var(--menubar-height);
      left: 0;
      right: 0;
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
    .sq-terminal { background: linear-gradient(135deg, #3A3A3C 0%, #121214 100%); }
    .sq-settings { background: linear-gradient(135deg, #8E8E93 0%, #48484A 100%); }
    .sq-projects { background: linear-gradient(135deg, #32ADE6 0%, #0A5CFF 100%); }
    .sq-web { background: linear-gradient(135deg, #e11d48 0%, #9f1239 100%); }

    /* ─── Bottom Floating Dock (Liquid Glass & Gaussian Magnification) ─── */
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

    /* Dock Tooltip */
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

    /* Dock Bounce Animation */
    @keyframes dockBounce {
      0%, 100% { transform: translateY(0); }
      35% { transform: translateY(-28px); }
      60% { transform: translateY(-14px); }
      80% { transform: translateY(-5px); }
    }

    .dock-bounce {
      animation: dockBounce 0.65s cubic-bezier(0.28, 0.84, 0.42, 1);
    }

    /* ─── Window System (Liquid Glass & Ventura/Sonoma Native Chrome) ─── */
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

    /* Window Unified Titlebar */
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

    /* Window Body */
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

    /* ─── App: Photos (사진 앱 - Online Photography) ─── */
    .photos-container {
      display: flex;
      height: 100%;
      margin: -18px;
    }

    .photos-sidebar {
      width: 190px;
      background: rgba(20, 24, 34, 0.55);
      border-right: 1px solid rgba(255, 255, 255, 0.08);
      padding: 12px 8px;
    }

    .photos-nav-header {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      color: #94a3b8;
      padding: 6px 10px;
      letter-spacing: 0.05em;
    }

    .photos-nav-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 7px 10px;
      border-radius: 6px;
      cursor: pointer;
      color: #cbd5e1;
      font-size: 12.5px;
      font-weight: 500;
      margin-bottom: 2px;
      transition: background 0.15s;
    }

    .photos-nav-item:hover, .photos-nav-item.active {
      background: rgba(0, 122, 255, 0.25);
      color: #fff;
    }

    .photos-main {
      flex: 1;
      padding: 18px;
      overflow-y: auto;
    }

    .photos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 14px;
    }

    .photo-card {
      aspect-ratio: 16/11;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      background: #000;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .photo-card:hover {
      transform: scale(1.03);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.5);
    }

    .photo-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: filter 0.2s ease;
    }

    .photo-badge {
      position: absolute;
      bottom: 6px;
      left: 6px;
      right: 6px;
      padding: 4px 8px;
      background: rgba(10, 15, 25, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-radius: 4px;
      font-size: 11px;
      color: #fff;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Photo Lightbox Inspector */
    #photo-lightbox {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.92);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      z-index: 50;
      display: none;
      flex-direction: column;
    }

    #photo-lightbox.show {
      display: flex;
    }

    .lightbox-bar {
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .lightbox-body {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      position: relative;
    }

    .lightbox-body img {
      max-width: 90%;
      max-height: 90%;
      border-radius: 8px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
      object-fit: contain;
    }

    /* ─── App: Music (음악 플레이어) ─── */
    .music-container {
      display: flex;
      height: 100%;
      margin: -18px;
    }

    .music-sidebar {
      width: 180px;
      background: rgba(20, 24, 34, 0.55);
      border-right: 1px solid rgba(255, 255, 255, 0.08);
      padding: 12px 8px;
    }

    .music-main {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .album-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    .album-card {
      cursor: pointer;
      text-align: center;
    }

    .album-cover {
      width: 100%;
      aspect-ratio: 1/1;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 8px;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
      transition: transform 0.2s ease;
    }

    .album-card:hover .album-cover {
      transform: translateY(-4px);
    }

    .album-cover img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .album-title {
      font-size: 12px;
      font-weight: 600;
      color: #fff;
    }

    .album-artist {
      font-size: 11px;
      color: #94a3b8;
    }

    .player-dock {
      background: rgba(15, 20, 30, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 10px;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 16px;
    }

    /* ─── App: Safari Browser ─── */
    .safari-toolbar {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
    }

    .safari-nav-btn {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #cbd5e1;
    }

    .safari-url-bar {
      flex: 1;
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 8px;
      padding: 6px 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      color: #e2e8f0;
    }

    .safari-favorites-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-top: 18px;
    }

    .safari-fav-item {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.15s ease;
      text-align: center;
      padding-bottom: 10px;
    }

    .safari-fav-item:hover {
      transform: translateY(-3px);
      border-color: var(--accent-blue);
    }

    .safari-fav-thumb {
      width: 100%;
      height: 90px;
      object-fit: cover;
      margin-bottom: 8px;
    }

    /* ─── App: Finder (파일 탐색기) ─── */
    .finder-container {
      display: flex;
      height: 100%;
      margin: -18px;
    }

    .finder-sidebar {
      width: 180px;
      background: rgba(20, 24, 34, 0.55);
      border-right: 1px solid rgba(255, 255, 255, 0.08);
      padding: 12px 8px;
    }

    .finder-main {
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
      border-radius: 6px;
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

    /* ─── App: KCT Silicone Calculator ─── */
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
    .form-group {
      margin-bottom: 12px;
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
      padding: 7px 10px;
      color: #fff;
      font-family: var(--font-mono);
      font-size: 12px;
      outline: none;
      transition: border-color 0.15s;
    }
    .form-input:focus {
      border-color: var(--accent-blue);
      box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.25);
    }
    .res-box {
      background: rgba(16, 24, 40, 0.85);
      border: 1px solid rgba(0, 168, 255, 0.3);
      border-radius: 8px;
      padding: 14px;
      margin-top: 10px;
    }
    .res-metric {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
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

    /* ─── App: ASTM Specimen Lab ─── */
    .specimen-canvas-wrap {
      background: #070b12;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 10px;
      padding: 14px;
      text-align: center;
      margin-bottom: 14px;
    }
    .specimen-types {
      display: flex;
      gap: 8px;
      margin-bottom: 14px;
      overflow-x: auto;
      padding-bottom: 4px;
    }
    .specimen-chip {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
      padding: 5px 12px;
      border-radius: 6px;
      font-size: 11.5px;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s;
    }
    .specimen-chip:hover, .specimen-chip.active {
      background: var(--accent-blue);
      border-color: var(--accent-blue);
      color: #fff;
    }

    /* ─── App: Terminal (davhave-cli) ─── */
    .terminal-body {
      background: #090c10 !important;
      font-family: var(--font-mono) !important;
      font-size: 12px !important;
      line-height: 1.6;
      padding: 14px !important;
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

    /* ─── App: Notes (Insights) ─── */
    .notes-layout {
      display: flex;
      height: 100%;
      margin: -18px;
    }
    .notes-sidebar {
      width: 220px;
      background: rgba(20, 24, 34, 0.55);
      border-right: 1px solid rgba(255, 255, 255, 0.08);
      padding: 12px;
      overflow-y: auto;
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
    }
    .notes-item-date {
      font-size: 10px;
      color: #94a3b8;
    }
    .notes-content {
      flex: 1;
      padding: 22px;
      overflow-y: auto;
      line-height: 1.75;
    }

    /* ─── App: System Settings ─── */
    .settings-section {
      margin-bottom: 22px;
    }
    .settings-title {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #94a3b8;
      margin-bottom: 10px;
    }
    .wp-thumbnails {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
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
      background-size: cover;
      background-position: center;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
    }
    .wp-thumb:hover {
      transform: translateY(-2px);
    }
    .wp-thumb.active {
      border-color: var(--accent-blue);
      box-shadow: 0 0 12px rgba(0, 122, 255, 0.6);
    }
    .wp-thumb span {
      position: absolute;
      bottom: 4px;
      left: 6px;
      font-size: 10px;
      font-weight: 600;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
      background: rgba(0, 0, 0, 0.4);
      padding: 1px 4px;
      border-radius: 3px;
    }

    /* ─── Spotlight Search Modal ─── */
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
    #spotlight-overlay.show {
      display: flex;
    }
    #spotlight-box {
      width: 600px;
      max-width: 90vw;
      background: rgba(30, 35, 48, 0.88);
      backdrop-filter: blur(40px) saturate(200%);
      -webkit-backdrop-filter: blur(40px) saturate(200%);
      border: 1px solid rgba(255, 255, 255, 0.24);
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
      padding: 14px 18px;
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
      max-height: 340px;
      overflow-y: auto;
      padding: 6px;
    }
    .spotlight-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 9px 14px;
      border-radius: 8px;
      cursor: pointer;
      color: #e2e8f0;
      font-size: 13px;
    }
    .spotlight-item:hover, .spotlight-item.active {
      background: var(--accent-blue);
      color: #fff;
    }

    /* ─── Control Center ─── */
    #control-center {
      position: absolute;
      top: 34px;
      right: 12px;
      width: 320px;
      background: rgba(28, 33, 44, 0.9);
      backdrop-filter: blur(40px) saturate(200%);
      -webkit-backdrop-filter: blur(40px) saturate(200%);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.65);
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
      background: var(--accent-blue);
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

    /* ─── Mobile Fallback Notice ─── */
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
      #mobile-notice { display: flex; }
      #dock { height: 56px; padding-bottom: 5px; }
      .dock-item { width: 38px; height: 38px; }
      .app-window { min-width: 280px; }
    }
  </style>
</head>
<body>
  <!-- Liquid Glass Refraction SVG Filter (Directly from macos27.kimi.page) -->
  <svg width="0" height="0" aria-hidden="true" style="position:absolute">
    <defs>
      <filter id="lg-refraction" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="7" result="noise"></feTurbulence>
        <feGaussianBlur in="noise" stdDeviation="2.2" result="soft"></feGaussianBlur>
        <feDisplacementMap in="SourceGraphic" in2="soft" scale="12" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
      </filter>
    </defs>
  </svg>

  <!-- Desktop Wallpaper (Default: Tahoe Day from macos27.kimi.page) -->
  <div id="desktop-wallpaper" style="background-image: url('https://macos27.kimi.page/wallpaper-tahoe-day.jpg');"></div>

  <!-- Mobile Notice Banner -->
  <div id="mobile-notice">
    <div>🖥️ <strong>macOS 27 Pilot</strong>: 데스크톱 화면에서 최상의 경험을 제공합니다.</div>
    <a href="/" style="color:var(--accent-orange); font-weight:700; text-decoration:none; margin-left:8px;">웹 메인으로 ↗</a>
  </div>

  <!-- Top Menu Bar -->
  <header id="menubar" class="lg-refract">
    <div class="menu-left">
      <div class="menu-item menu-apple" id="apple-menu-btn" title="DAVHAVE Studio"></div>
      <div class="menu-item menu-appname" id="menu-active-app">Finder</div>
      <div class="menu-item">파일</div>
      <div class="menu-item">편집</div>
      <div class="menu-item">보기</div>
      <div class="menu-item">이동</div>
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
      <div class="status-icon status-clock" id="clock-display">오후 1:05</div>
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
          <div style="font-size:10px; color:#94a3b8;">Active · Global Sync</div>
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

    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('photos')" data-app="photos">
      <div class="desktop-icon-img">
        <div class="app-squircle sq-photos">
          <svg width="26" height="26" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" fill="#ff2d55"/><circle cx="17" cy="12" r="4" fill="#ff9500"/><circle cx="12" cy="17" r="4" fill="#4cd964"/><circle cx="7" cy="12" r="4" fill="#007aff"/></svg>
        </div>
      </div>
      <span class="desktop-icon-label">사진.app</span>
    </div>

    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('safari')" data-app="safari">
      <div class="desktop-icon-img">
        <div class="app-squircle sq-safari">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#ff3b30" stroke="#fff"></polygon></svg>
        </div>
      </div>
      <span class="desktop-icon-label">Safari</span>
    </div>

    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('music')" data-app="music">
      <div class="desktop-icon-img">
        <div class="app-squircle sq-music">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3" fill="#fff"></circle><circle cx="18" cy="16" r="3" fill="#fff"></circle></svg>
        </div>
      </div>
      <span class="desktop-icon-label">음악.app</span>
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

    <div class="desktop-icon" onclick="selectDesktopIcon(this)" ondblclick="openApp('notes')" data-app="notes">
      <div class="desktop-icon-img">
        <div class="app-squircle sq-notes">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path><path d="M15 3v5h5M9 13h6M9 17h4"></path></svg>
        </div>
      </div>
      <span class="desktop-icon-label">엔지니어링 메모</span>
    </div>
  </main>

  <!-- ─── Window: Photos (사진 앱 - Online Gallery) ─── -->
  <div class="app-window" id="window-photos" style="width: 820px; height: 560px; top: 60px; left: 120px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-photos')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('photos')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('photos')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('photos')"></button>
      </div>
      <div class="window-title">사진 — DAVHAVE Architectural & Engineering Gallery</div>
      <div></div>
    </div>
    <div class="window-body" style="padding:0; overflow:hidden;">
      <div class="photos-container">
        <div class="photos-sidebar">
          <div class="photos-nav-header">보관함</div>
          <div class="photos-nav-item active" onclick="filterPhotos('all', this)">
            <span>🖼️</span><span>모든 사진</span>
          </div>
          <div class="photos-nav-item" onclick="filterPhotos('arch', this)">
            <span>🏢</span><span>건축 &amp; 커튼월</span>
          </div>
          <div class="photos-nav-item" onclick="filterPhotos('nature', this)">
            <span>🌲</span><span>풍경 &amp; 요세미티</span>
          </div>
          <div class="photos-nav-item" onclick="filterPhotos('studio', this)">
            <span>💻</span><span>스튜디오 &amp; 도메인</span>
          </div>
        </div>
        <div class="photos-main">
          <div class="photos-grid" id="photos-grid">
            <!-- Dynamically populated with real online photos -->
          </div>
        </div>
      </div>

      <!-- Photo Lightbox -->
      <div id="photo-lightbox">
        <div class="lightbox-bar">
          <span id="lb-title" style="font-weight:600; color:#fff;">Photo Viewer</span>
          <button onclick="closeLightbox()" style="background:none; border:none; color:#fff; font-size:18px; cursor:pointer;">✕</button>
        </div>
        <div class="lightbox-body">
          <img id="lb-img" src="" alt="Full view" />
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-photos', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-photos', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-photos', 'br')"></div>
  </div>

  <!-- ─── Window: Safari Browser ─── -->
  <div class="app-window" id="window-safari" style="width: 860px; height: 580px; top: 75px; left: 160px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-safari')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('safari')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('safari')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('safari')"></button>
      </div>
      <div class="window-title">Safari — Start Page</div>
      <div></div>
    </div>
    <div class="window-body" style="padding:14px; display:flex; flex-direction:column;">
      <div class="safari-toolbar">
        <div class="safari-nav-btn" onclick="safariHome()">❮</div>
        <div class="safari-nav-btn" onclick="safariReload()">↻</div>
        <div class="safari-url-bar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span id="safari-url-text">https://davhave.com/projects/kct</span>
        </div>
      </div>

      <div id="safari-content-area" style="flex:1; border-radius:8px; overflow:hidden; border:1px solid rgba(255,255,255,0.1); background:#0d1117;">
        <iframe id="safari-frame" src="/projects/kct" style="width:100%; height:100%; border:none;"></iframe>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-safari', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-safari', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-safari', 'br')"></div>
  </div>

  <!-- ─── Window: Finder ─── -->
  <div class="app-window" id="window-finder" style="width: 780px; height: 500px; top: 90px; left: 190px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-finder')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('finder')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('finder')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('finder')"></button>
      </div>
      <div class="window-title">Finder — Documents</div>
      <div></div>
    </div>
    <div class="window-body" style="padding:0; overflow:hidden;">
      <div class="finder-container">
        <div class="finder-sidebar">
          <div class="photos-nav-header">즐겨찾기</div>
          <div class="photos-nav-item active">📁 <span>문서 (Documents)</span></div>
          <div class="photos-nav-item" onclick="openApp('photos')">🖼️ <span>사진 (Photos)</span></div>
          <div class="photos-nav-item" onclick="window.open('/projects', '_blank')">🌐 <span>프로젝트 허브</span></div>
          <div class="photos-nav-header" style="margin-top:10px;">iCloud</div>
          <div class="photos-nav-item">☁️ <span>iCloud Drive</span></div>
        </div>
        <div class="finder-main">
          <div class="finder-files-grid">
            <div class="finder-file" ondblclick="openApp('calc')">
              <div class="finder-file-icon">🧮</div>
              <div class="finder-file-name">KCT_Calculator.app</div>
            </div>
            <div class="finder-file" ondblclick="openApp('specimen')">
              <div class="finder-file-icon">🧪</div>
              <div class="finder-file-name">ASTM_D638_Lab.app</div>
            </div>
            <div class="finder-file" ondblclick="openLightbox('https://macos27.kimi.page/photo-4.jpg', 'Curtain Wall Facade.jpg')">
              <div class="finder-file-icon"><img src="https://macos27.kimi.page/photo-4.jpg" alt="Photo" /></div>
              <div class="finder-file-name">Curtain_Wall.jpg</div>
            </div>
            <div class="finder-file" ondblclick="openLightbox('https://macos27.kimi.page/photo-1.jpg', 'Yosemite Sunset.jpg')">
              <div class="finder-file-icon"><img src="https://macos27.kimi.page/photo-1.jpg" alt="Photo" /></div>
              <div class="finder-file-name">Yosemite.jpg</div>
            </div>
            <div class="finder-file" ondblclick="openApp('notes')">
              <div class="finder-file-icon">📄</div>
              <div class="finder-file-name">Edge_Architecture.md</div>
            </div>
            <div class="finder-file" ondblclick="openApp('about')">
              <div class="finder-file-icon">📝</div>
              <div class="finder-file-name">README.txt</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-finder', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-finder', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-finder', 'br')"></div>
  </div>

  <!-- ─── Window: Music (음악 앱) ─── -->
  <div class="app-window" id="window-music" style="width: 760px; height: 500px; top: 110px; left: 210px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-music')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('music')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('music')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('music')"></button>
      </div>
      <div class="window-title">음악 — Studio Ambient Tracks</div>
      <div></div>
    </div>
    <div class="window-body" style="padding:0; overflow:hidden;">
      <div class="music-container">
        <div class="music-sidebar">
          <div class="photos-nav-header">Apple Music</div>
          <div class="photos-nav-item active">🎧 <span>지금 듣기</span></div>
          <div class="photos-nav-item">📻 <span>라디오</span></div>
          <div class="photos-nav-header" style="margin-top:10px;">보관함</div>
          <div class="photos-nav-item">💿 <span>앨범</span></div>
          <div class="photos-nav-item">🎵 <span>재생 목록</span></div>
        </div>
        <div class="music-main">
          <div>
            <h3 style="font-size:16px; font-weight:700; color:#fff; margin-bottom:12px;">선정된 엔지니어링 앨범</h3>
            <div class="album-grid">
              <div class="album-card" onclick="playTrack('Silicon Glueline Drift', 'DAVHAVE Sessions', 'https://macos27.kimi.page/cover-1.jpg')">
                <div class="album-cover"><img src="https://macos27.kimi.page/cover-1.jpg" alt="Cover 1" /></div>
                <div class="album-title">Silicon Drift</div>
                <div class="album-artist">DAVHAVE Sessions</div>
              </div>
              <div class="album-card" onclick="playTrack('Edge 0ms Ambient', 'Oscar Lee', 'https://macos27.kimi.page/cover-2.jpg')">
                <div class="album-cover"><img src="https://macos27.kimi.page/cover-2.jpg" alt="Cover 2" /></div>
                <div class="album-title">Edge 0ms Ambient</div>
                <div class="album-artist">Oscar Lee</div>
              </div>
              <div class="album-card" onclick="playTrack('ASTM Tensile Resonance', 'Lab Acoustics', 'https://macos27.kimi.page/cover-3.jpg')">
                <div class="album-cover"><img src="https://macos27.kimi.page/cover-3.jpg" alt="Cover 3" /></div>
                <div class="album-title">Tensile Resonance</div>
                <div class="album-artist">Lab Acoustics</div>
              </div>
              <div class="album-card" onclick="playTrack('Tahoe Skyline', 'Pacific Synthesis', 'https://macos27.kimi.page/cover-4.jpg')">
                <div class="album-cover"><img src="https://macos27.kimi.page/cover-4.jpg" alt="Cover 4" /></div>
                <div class="album-title">Tahoe Skyline</div>
                <div class="album-artist">Pacific Synthesis</div>
              </div>
            </div>
          </div>

          <div class="player-dock">
            <img id="player-cover" src="https://macos27.kimi.page/cover-1.jpg" style="width:48px; height:48px; border-radius:6px; object-fit:cover;" alt="Playing" />
            <div style="flex:1;">
              <div id="player-title" style="font-weight:600; font-size:13px; color:#fff;">Silicon Glueline Drift</div>
              <div id="player-artist" style="font-size:11px; color:#94a3b8;">DAVHAVE Sessions</div>
            </div>
            <div style="display:flex; align-items:center; gap:12px; font-size:18px;">
              <span style="cursor:pointer;">⏮</span>
              <span id="player-playbtn" onclick="togglePlayState()" style="cursor:pointer; width:34px; height:34px; border-radius:50%; background:#fff; color:#000; display:flex; align-items:center; justify-content:center; font-size:14px;">▶</span>
              <span style="cursor:pointer;">⏭</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-music', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-music', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-music', 'br')"></div>
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
            * 현장 시공 시 안전율(SF 2.0 이상)을 감안하여 설계하십시오.
          </div>
          <div style="margin-top:12px; display:flex; gap:8px;">
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
      <div class="specimen-types">
        <div class="specimen-chip active" onclick="selectSpecimenType('Type I', this)">ASTM D638 Type I (표준)</div>
        <div class="specimen-chip" onclick="selectSpecimenType('Type II', this)">Type II (고강도)</div>
        <div class="specimen-chip" onclick="selectSpecimenType('Type IV', this)">Type IV (비강도)</div>
        <div class="specimen-chip" onclick="selectSpecimenType('Type V', this)">Type V (초소형 마이크로)</div>
        <div class="specimen-chip" onclick="selectSpecimenType('ASTM C1401', this)">ASTM C1401 H-Shape (접착전단)</div>
      </div>

      <div class="specimen-canvas-wrap">
        <svg id="specimen-svg" width="100%" height="150" viewBox="0 0 600 150">
          <defs>
            <linearGradient id="specimenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.85"/>
              <stop offset="100%" stop-color="#0284c7" stop-opacity="0.85"/>
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
            ASTM D638 / ASTM C1401 인장 시편을 3D 프린팅(PETG/CF/SLA 레진) 및 CNC 밀링으로 정밀 가공합니다. DIC 광학 스트레인 분석용 스페클 패턴 코팅 옵션을 지원합니다.
          </p>
          <button onclick="window.open('/projects/kct/specimens', '_blank')" style="background:var(--accent-blue); color:#fff; border:none; padding:8px 14px; border-radius:6px; font-size:11.5px; font-weight:600; cursor:pointer;">시편 제작 견적 및 FAQ 허브 ↗</button>
        </div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-specimen', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-specimen', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-specimen', 'br')"></div>
  </div>

  <!-- ─── Window: Terminal (davhave-cli) ─── -->
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
      <div class="terminal-output" id="terminal-screen">DAVHAVE Edge Architecture Shell (macOS 27 Edition)
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

  <!-- ─── Window: Notes ─── -->
  <div class="app-window" id="window-notes" style="width: 760px; height: 500px; top: 85px; left: 170px;">
    <div class="window-titlebar" onmousedown="startDragWindow(event, 'window-notes')">
      <div class="traffic-lights">
        <button class="traffic-btn btn-close" onclick="closeApp('notes')"></button>
        <button class="traffic-btn btn-min" onclick="minimizeApp('notes')"></button>
        <button class="traffic-btn btn-max" onclick="maximizeApp('notes')"></button>
      </div>
      <div class="window-title">메모 — DAVHAVE Engineering Insights</div>
      <div></div>
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
        <div class="notes-content" id="notes-view-area"></div>
      </div>
    </div>
    <div class="resize-handle resize-handle-r" onmousedown="startResizeWindow(event, 'window-notes', 'r')"></div>
    <div class="resize-handle resize-handle-b" onmousedown="startResizeWindow(event, 'window-notes', 'b')"></div>
    <div class="resize-handle resize-handle-br" onmousedown="startResizeWindow(event, 'window-notes', 'br')"></div>
  </div>

  <!-- ─── Window: System Settings (Wallpapers from macos27.kimi.page) ─── -->
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
        <div class="wp-thumbnails">
          <div class="wp-thumb active" style="background-image: url('https://macos27.kimi.page/wallpaper-tahoe-day.jpg');" onclick="setOnlineWallpaper('https://macos27.kimi.page/wallpaper-tahoe-day.jpg', this)">
            <span>Tahoe Day</span>
          </div>
          <div class="wp-thumb" style="background-image: url('https://macos27.kimi.page/wallpaper-glass-dark.jpg');" onclick="setOnlineWallpaper('https://macos27.kimi.page/wallpaper-glass-dark.jpg', this)">
            <span>Glass Dark</span>
          </div>
          <div class="wp-thumb" style="background-image: url('https://macos27.kimi.page/wallpaper-glass-light.jpg');" onclick="setOnlineWallpaper('https://macos27.kimi.page/wallpaper-glass-light.jpg', this)">
            <span>Glass Light</span>
          </div>
          <div class="wp-thumb" style="background-image: url('https://macos27.kimi.page/wallpaper-aurora.jpg');" onclick="setOnlineWallpaper('https://macos27.kimi.page/wallpaper-aurora.jpg', this)">
            <span>Aurora</span>
          </div>
          <div class="wp-thumb" style="background-image: url('https://macos27.kimi.page/wallpaper-bigsur.jpg');" onclick="setOnlineWallpaper('https://macos27.kimi.page/wallpaper-bigsur.jpg', this)">
            <span>Big Sur</span>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-title">시스템 정보</div>
        <div style="background:rgba(0,0,0,0.3); border-radius:8px; padding:14px; font-size:12px; line-height:1.8;">
          <div><strong>운영체제:</strong> macOS 27 (DAVHAVE Liquid Glass Edition)</div>
          <div><strong>엔진 아키텍처:</strong> Cloudflare Workers 0ms Edge Compute</div>
          <div><strong>데이터베이스:</strong> Cloudflare D1 Serverless SQL</div>
          <div><strong>수석 아키텍트:</strong> Oscar Lee (DAVHAVE)</div>
          <div><strong>포지셔닝:</strong> The Precision Engineering Laboratory</div>
        </div>
      </div>

      <div style="text-align:right;">
        <button onclick="window.location.href='/'" style="background:rgba(255,255,255,0.12); color:#fff; border:1px solid rgba(255,255,255,0.2); padding:7px 16px; border-radius:6px; cursor:pointer;">기본 웹사이트로 돌아가기</button>
      </div>
    </div>
  </div>

  <!-- ─── Window: About / README ─── -->
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
        DAVHAVE는 실제 산업 현장과 비즈니스의 문제를 해결하는 고성능 모바일 앱, 글로벌 엣지 웹 플랫폼, AI/에이전틱 소프트웨어를 설계·구축합니다.
      </p>
      <p style="margin-bottom:12px;">
        [macOS 27 고도화 업데이트]<br/>
        - 실제 온라인 고화질 배경화면(Tahoe, Glass, Aurora, Big Sur) 완벽 연동<br/>
        - 실제 사진 갤러리(Photos.app) 및 음악 플레이어(Music.app) 탑재<br/>
        - Liquid Glass SVG 굴절 필터 및 네이티브 스퀴클 아이콘 적용
      </p>
      <button onclick="window.location.href='/'" style="background:var(--accent-blue); color:#fff; border:none; padding:8px 16px; border-radius:6px; font-weight:600; cursor:pointer;">웹 표준 홈 열기 ↗</button>
    </div>
  </div>

  <!-- ─── Spotlight Search Overlay ─── -->
  <div id="spotlight-overlay" onclick="handleSpotlightBackdrop(event)">
    <div id="spotlight-box">
      <div class="spotlight-input-row">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" id="spotlight-input" class="spotlight-input" placeholder="Spotlight 검색 (앱, 계산기, 문서...)" autocomplete="off" oninput="filterSpotlight(this.value)" onkeydown="handleSpotlightKey(event)" />
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

      <!-- Safari -->
      <div class="dock-item" onclick="openApp('safari')" data-app="safari" title="Safari">
        <div class="app-squircle sq-safari">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#ff3b30" stroke="#fff"></polygon></svg>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">Safari</div>
      </div>

      <!-- Photos -->
      <div class="dock-item" onclick="openApp('photos')" data-app="photos" title="사진">
        <div class="app-squircle sq-photos">
          <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" fill="#ff2d55"/><circle cx="17" cy="12" r="4" fill="#ff9500"/><circle cx="12" cy="17" r="4" fill="#4cd964"/><circle cx="7" cy="12" r="4" fill="#007aff"/></svg>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">사진</div>
      </div>

      <!-- Music -->
      <div class="dock-item" onclick="openApp('music')" data-app="music" title="음악">
        <div class="app-squircle sq-music">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3" fill="#fff"></circle><circle cx="18" cy="16" r="3" fill="#fff"></circle></svg>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">음악</div>
      </div>

      <!-- KCT Calculator -->
      <div class="dock-item" onclick="openApp('calc')" data-app="calc" title="KCT 실리콘 계산기">
        <div class="app-squircle sq-calc">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path></svg>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">KCT 실리콘 계산기</div>
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

      <!-- Notes -->
      <div class="dock-item" onclick="openApp('notes')" data-app="notes" title="엔지니어링 메모">
        <div class="app-squircle sq-notes">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path><path d="M15 3v5h5M9 13h6M9 17h4"></path></svg>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">엔지니어링 메모</div>
      </div>

      <!-- System Settings -->
      <div class="dock-item" onclick="openApp('settings')" data-app="settings" title="시스템 설정">
        <div class="app-squircle sq-settings">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </div>
        <div class="dock-dot"></div>
        <div class="dock-tooltip">시스템 설정</div>
      </div>

      <div class="dock-separator"></div>

      <!-- Return to Web Standard -->
      <div class="dock-item" onclick="window.location.href='/'" title="웹 표준 버전으로 돌아가기">
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
    // State
    let highestZ = 100;
    const runningApps = new Set(['photos']);
    let activeApp = 'photos';
    let isPlaying = false;

    // Real Online Photos Data (from macos27.kimi.page)
    const PHOTOS_DATA = [
      { id: 'p1', cat: 'nature', title: 'Yosemite Sunrise', url: 'https://macos27.kimi.page/photo-1.jpg', desc: '캘리포니아 요세미티 국립공원의 황혼 풍경 (1600x1067)' },
      { id: 'p2', cat: 'arch', title: 'Lake Architecture Glass', url: 'https://macos27.kimi.page/photo-2.jpg', desc: '호숫가 수면에 반사되는 모던 글래스 파빌리온 구조체' },
      { id: 'p3', cat: 'arch', title: 'Modern Glass Pavilion', url: 'https://macos27.kimi.page/photo-3.jpg', desc: '미니멀 노출 콘크리트 및 구조용 실리콘 글레이징 설계' },
      { id: 'p4', cat: 'arch', title: 'Curtain Wall Facade', url: 'https://macos27.kimi.page/photo-4.jpg', desc: '고층 빌딩 4변 지지 구조용 실리콘 커튼월 패널' },
      { id: 'p5', cat: 'nature', title: 'Redwood Mist Trail', url: 'https://macos27.kimi.page/photo-5.jpg', desc: '태평양 연안 안개 속 삼나무 원시림 트레일' },
      { id: 'p6', cat: 'studio', title: 'Engineering Studio Setup', url: 'https://macos27.kimi.page/photo-6.jpg', desc: 'Oscar Lee 고성능 엣지 소프트웨어 연구 환경' },
      { id: 'p7', cat: 'studio', title: 'Tokyo Neon Skyline', url: 'https://macos27.kimi.page/photo-7.jpg', desc: '글로벌 엣지 인프라 분산 노드 도쿄 야경' },
      { id: 'p8', cat: 'arch', title: 'Precision Joinery & Sealant', url: 'https://macos27.kimi.page/photo-8.jpg', desc: 'ASTM C1401 인장 접착 접합부 디테일' }
    ];

    // Notes Data
    const NOTES_DATA = [
      {
        title: "Cloudflare 0ms 엣지 아키텍처의 비밀",
        date: "2026.09.28",
        content: "<h3>단 1ms도 허비하지 않는 글로벌 엣지 컴퓨팅</h3><p>기존 컨테이너나 가상머신 기반의 백엔드는 콜드 스타트 지연시간(100ms~1s)이 발생하지만, Cloudflare Workers는 V8 Isolate 기반으로 전 세계 300+ 엣지 데이터센터에서 0ms 콜드스타트로 즉시 실행됩니다.</p><p>DAVHAVE는 D1 SQL 데이터베이스 및 R2 오브젝트 스토리지를 글로벌 엣지와 직접 바인딩하여 지연을 최소화합니다.</p>"
      },
      {
        title: "Dow Chemical 실리콘 구조 바이트 공식 해설",
        date: "2026.09.25",
        content: "<h3>ASTM C1401 기준 구조용 실리콘 바이트 산정</h3><p>커튼월 유리 패널에 가해지는 풍하중을 실리콘 실란트가 지탱하기 위한 최소 접착 폭(Bite) 산정 공식:</p><pre style='background:#111; padding:10px; border-radius:6px; color:#38bdf8;'>B = (W × a) / (2 × Fd)</pre><p>여기서 W는 설계 풍하중(kPa), a는 유리 단변 길이(mm), Fd는 설계 허용 응력(통상 140 kPa)입니다. ASTM 규정에 따라 어떠한 경우에도 6.0mm 미만은 허용되지 않습니다.</p>"
      },
      {
        title: "SEO URL 설계: 해시 앵커(#)를 배제해야 하는 이유",
        date: "2026.09.20",
        content: "<h3>색인 가능한 전용 URL(Canonical Route)의 중요성</h3><p>단일 페이지 애플리케이션(SPA)에서 자주 사용하는 해시 앵커(/#section)는 브라우저 내부 스크롤용 프래그먼트에 불과하며, 검색엔진 로봇은 이를 별개의 페이지로 색인하지 않습니다.</p><p>SEO 가치가 있는 모든 콘텐츠는 반드시 고유한 SSR 전용 라우트를 가져야 합니다.</p>"
      },
      {
        title: "AI 에이전틱 개발 및 프롬프트 엔지니어링 교훈",
        date: "2026.09.15",
        content: "<h3>자율 에이전트와 페어 프로그래밍의 실무 패턴</h3><p>단순한 일회성 챗봇 질문을 넘어, 파일 시스템과 도구를 직접 다루는 에이전트에게는 명확한 명세서와 엄격한 검증 피드백 루프가 성공의 핵심입니다.</p>"
      }
    ];

    // Initialize
    window.addEventListener('DOMContentLoaded', () => {
      updateClock();
      setInterval(updateClock, 1000);
      renderPhotosGrid('all');
      loadNote(0, document.querySelector('.notes-item'));
      runSiliconCalc();

      // Launch Photos app on start
      openApp('photos');

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
          closeLightbox();
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
        photos: 'Photos',
        safari: 'Safari',
        music: 'Music',
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

    // Photos App Logic
    function renderPhotosGrid(cat) {
      const grid = document.getElementById('photos-grid');
      const filtered = cat === 'all' ? PHOTOS_DATA : PHOTOS_DATA.filter(p => p.cat === cat);

      grid.innerHTML = filtered.map(p => \`
        <div class="photo-card" onclick="openLightbox('\${p.url}', '\${p.title}')">
          <img src="\${p.url}" alt="\${p.title}" loading="lazy" />
          <div class="photo-badge">\${p.title}</div>
        </div>
      \`).join('');
    }

    function filterPhotos(cat, elem) {
      document.querySelectorAll('.photos-nav-item').forEach(i => i.classList.remove('active'));
      if (elem) elem.classList.add('active');
      renderPhotosGrid(cat);
    }

    function openLightbox(url, title) {
      document.getElementById('lb-img').src = url;
      document.getElementById('lb-title').textContent = title;
      document.getElementById('photo-lightbox').classList.add('show');
    }

    function closeLightbox() {
      document.getElementById('photo-lightbox').classList.remove('show');
    }

    // Music Player Logic
    function playTrack(title, artist, coverUrl) {
      document.getElementById('player-title').textContent = title;
      document.getElementById('player-artist').textContent = artist;
      document.getElementById('player-cover').src = coverUrl;
      isPlaying = true;
      document.getElementById('player-playbtn').textContent = '⏸';
    }

    function togglePlayState() {
      isPlaying = !isPlaying;
      document.getElementById('player-playbtn').textContent = isPlaying ? '⏸' : '▶';
    }

    // Safari App Logic
    function safariHome() {
      const frame = document.getElementById('safari-frame');
      frame.src = '/projects/kct';
      document.getElementById('safari-url-text').textContent = 'https://davhave.com/projects/kct';
    }

    function safariReload() {
      const frame = document.getElementById('safari-frame');
      frame.src = frame.src;
    }

    // KCT Silicone Calculator Engine
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
  photos     - Open online photo gallery
  music      - Launch ambient studio music player
  calc       - Calculate silicone bite [e.g. calc 2.5 1200]
  stack      - Show edge & engineering tech stack
  projects   - List live production systems
  open <app> - Open window (photos, safari, music, calc, specimen, notes)
  date       - Show current edge timestamp
  clear      - Clear terminal screen
  exit       - Close terminal window\`;
      } else if (lower === 'whoami') {
        response = "Oscar Lee (DAVHAVE) — Lead Architect in High-Performance Edge Systems & Industrial Computing.";
      } else if (lower === 'photos') {
        openApp('photos');
        response = "Opening Photos.app with high-resolution online gallery...";
      } else if (lower === 'music') {
        openApp('music');
        response = "Launching Music.app...";
      } else if (lower === 'stack') {
        response = "Cloudflare Workers, D1 Serverless SQL, R2 Media Bucket, Web Standards (0ms Cold Start), Flutter, Swift.";
      } else if (lower === 'projects') {
        response = "1. KCT Silicon Engineering Suite (/projects/kct)\\n2. ASTM D638 Tensile Specimen Lab (/projects/kct/specimens)\\n3. RetroBoy Mobile App (/privacy/retroboy)";
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
        <div style="font-size:13px; color:#e2e8f0; line-height:1.75;">\${note.content}</div>
      \`;
    }

    // Spotlight Search
    const SEARCH_ITEMS = [
      { name: '사진 (Photos)', type: 'App', icon: '🖼️', action: () => openApp('photos') },
      { name: 'Safari 브라우저', type: 'App', icon: '🧭', action: () => openApp('safari') },
      { name: '음악 (Music)', type: 'App', icon: '🎵', action: () => openApp('music') },
      { name: 'Finder', type: 'App', icon: '📁', action: () => openApp('finder') },
      { name: 'KCT 실리콘 계산기', type: 'App', icon: '🧮', action: () => openApp('calc') },
      { name: 'ASTM 인장 시편 연구소', type: 'App', icon: '🧪', action: () => openApp('specimen') },
      { name: 'Terminal (davhave-cli)', type: 'App', icon: '💻', action: () => openApp('terminal') },
      { name: '엔지니어링 메모', type: 'App', icon: '📝', action: () => openApp('notes') },
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

    // Online Wallpaper Switcher (Directly from macos27.kimi.page)
    function setOnlineWallpaper(url, elem) {
      const wp = document.getElementById('desktop-wallpaper');
      wp.style.backgroundImage = \`url('\${url}')\`;

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
