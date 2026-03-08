/**
 * Site Icons — Self-contained SVG icon replacement system
 * Replaces Font Awesome <i> tags with inline SVG icons.
 * No external CDN or web-font files required.
 *
 * All icons use a 24×24 viewBox with stroke-based rendering
 * for a clean, modern look. Colors inherit from CSS via currentColor.
 */
(function () {
  'use strict';

  /* ── Icon Definitions ───────────────────────────────────────────────
   *  Each key matches the Font Awesome class suffix (fa-<key>).
   *  Values are SVG innerHTML strings rendered inside a 24×24 viewBox.
   *  Default rendering: stroke="currentColor", fill="none".
   *  Per-element overrides (fill="currentColor" stroke="none") are used
   *  where a filled shape is needed (dots, solid circles, etc.).
   * ─────────────────────────────────────────────────────────────────── */
  var icons = {

    /* ── Navigation / Direction ─────────────────────────────────────── */
    'home':
      '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>' +
      '<polyline points="9 22 9 12 15 12 15 22"/>',

    'arrow-up':
      '<line x1="12" y1="19" x2="12" y2="5"/>' +
      '<polyline points="5 12 12 5 19 12"/>',

    'arrow-down':
      '<line x1="12" y1="5" x2="12" y2="19"/>' +
      '<polyline points="19 12 12 19 5 12"/>',

    'arrow-left':
      '<line x1="19" y1="12" x2="5" y2="12"/>' +
      '<polyline points="12 19 5 12 12 5"/>',

    'external-link-alt':
      '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>' +
      '<polyline points="15 3 21 3 21 9"/>' +
      '<line x1="10" y1="14" x2="21" y2="3"/>',

    'compass':
      '<circle cx="12" cy="12" r="10"/>' +
      '<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88" fill="currentColor" stroke="none"/>',

    'route':
      '<circle cx="6" cy="19" r="3"/>' +
      '<path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>' +
      '<circle cx="18" cy="5" r="3"/>',

    'map':
      '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>' +
      '<line x1="8" y1="2" x2="8" y2="18"/>' +
      '<line x1="16" y1="6" x2="16" y2="22"/>',

    'map-marked-alt':
      '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>' +
      '<circle cx="12" cy="9" r="2.5"/>',

    /* ── Code / Tech ────────────────────────────────────────────────── */
    'code':
      '<polyline points="16 18 22 12 16 6"/>' +
      '<polyline points="8 6 2 12 8 18"/>',

    'laptop-code':
      '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9"/>' +
      '<path d="M1 20h22"/>' +
      '<polyline points="10 9 8 11 10 13"/>' +
      '<polyline points="14 9 16 11 14 13"/>',

    'desktop':
      '<rect x="2" y="3" width="20" height="14" rx="2"/>' +
      '<line x1="8" y1="21" x2="16" y2="21"/>' +
      '<line x1="12" y1="17" x2="12" y2="21"/>',

    'mobile-alt':
      '<rect x="5" y="2" width="14" height="20" rx="2"/>' +
      '<line x1="12" y1="18" x2="12.01" y2="18"/>',

    'server':
      '<rect x="2" y="2" width="20" height="8" rx="2"/>' +
      '<rect x="2" y="14" width="20" height="8" rx="2"/>' +
      '<line x1="6" y1="6" x2="6.01" y2="6"/>' +
      '<line x1="6" y1="18" x2="6.01" y2="18"/>',

    'robot':
      '<rect x="4" y="8" width="16" height="12" rx="2"/>' +
      '<circle cx="9" cy="14" r="1" fill="currentColor" stroke="none"/>' +
      '<circle cx="15" cy="14" r="1" fill="currentColor" stroke="none"/>' +
      '<path d="M9 18h6"/>' +
      '<line x1="12" y1="4" x2="12" y2="8"/>' +
      '<circle cx="12" cy="3" r="1"/>',

    'project-diagram':
      '<rect x="2" y="2" width="7" height="7" rx="1"/>' +
      '<rect x="15" y="2" width="7" height="7" rx="1"/>' +
      '<rect x="9" y="15" width="7" height="7" rx="1"/>' +
      '<line x1="5.5" y1="9" x2="12.5" y2="15"/>' +
      '<line x1="18.5" y1="9" x2="12.5" y2="15"/>',

    'sitemap':
      '<rect x="8" y="2" width="8" height="5" rx="1"/>' +
      '<rect x="1" y="17" width="6" height="5" rx="1"/>' +
      '<rect x="9" y="17" width="6" height="5" rx="1"/>' +
      '<rect x="17" y="17" width="6" height="5" rx="1"/>' +
      '<line x1="12" y1="7" x2="12" y2="12"/>' +
      '<line x1="4" y1="12" x2="20" y2="12"/>' +
      '<line x1="4" y1="12" x2="4" y2="17"/>' +
      '<line x1="12" y1="12" x2="12" y2="17"/>' +
      '<line x1="20" y1="12" x2="20" y2="17"/>',

    /* ── People ─────────────────────────────────────────────────────── */
    'user':
      '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>' +
      '<circle cx="12" cy="7" r="4"/>',

    'users':
      '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>' +
      '<circle cx="9" cy="7" r="4"/>' +
      '<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>' +
      '<path d="M16 3.13a4 4 0 0 1 0 7.75"/>',

    'user-friends':
      '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>' +
      '<circle cx="9" cy="7" r="4"/>' +
      '<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>' +
      '<path d="M16 3.13a4 4 0 0 1 0 7.75"/>',

    'user-tie':
      '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>' +
      '<circle cx="12" cy="7" r="4"/>' +
      '<polyline points="12 14 10 22 12 20 14 22 12 14" fill="currentColor" stroke="none"/>',

    'user-secret':
      '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>' +
      '<circle cx="12" cy="7" r="4"/>' +
      '<path d="M15 7H9l3-4z" fill="currentColor" stroke="none"/>',

    'users-cog':
      '<path d="M14 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>' +
      '<circle cx="8" cy="7" r="4"/>' +
      '<circle cx="19" cy="16" r="3"/>' +
      '<line x1="19" y1="12" x2="19" y2="12.5"/>' +
      '<line x1="19" y1="19.5" x2="19" y2="20"/>' +
      '<line x1="15.5" y1="14" x2="16" y2="14.3"/>' +
      '<line x1="22" y1="17.7" x2="22.5" y2="18"/>',

    'chalkboard-teacher':
      '<rect x="2" y="3" width="20" height="14" rx="1"/>' +
      '<path d="M22 21v-1a3 3 0 0 0-3-3h-2"/>' +
      '<circle cx="17" cy="13" r="2"/>',

    /* ── Calendar / Time ────────────────────────────────────────────── */
    'calendar-alt':
      '<rect width="18" height="18" x="3" y="4" rx="2"/>' +
      '<line x1="16" y1="2" x2="16" y2="6"/>' +
      '<line x1="8" y1="2" x2="8" y2="6"/>' +
      '<line x1="3" y1="10" x2="21" y2="10"/>',

    'calendar-check':
      '<rect width="18" height="18" x="3" y="4" rx="2"/>' +
      '<line x1="16" y1="2" x2="16" y2="6"/>' +
      '<line x1="8" y1="2" x2="8" y2="6"/>' +
      '<line x1="3" y1="10" x2="21" y2="10"/>' +
      '<polyline points="9 16 11 18 15 14"/>',

    'calendar-day':
      '<rect width="18" height="18" x="3" y="4" rx="2"/>' +
      '<line x1="16" y1="2" x2="16" y2="6"/>' +
      '<line x1="8" y1="2" x2="8" y2="6"/>' +
      '<line x1="3" y1="10" x2="21" y2="10"/>' +
      '<rect x="8" y="13" width="3" height="3" rx=".5" fill="currentColor" stroke="none"/>',

    'calendar-plus':
      '<rect width="18" height="18" x="3" y="4" rx="2"/>' +
      '<line x1="16" y1="2" x2="16" y2="6"/>' +
      '<line x1="8" y1="2" x2="8" y2="6"/>' +
      '<line x1="3" y1="10" x2="21" y2="10"/>' +
      '<line x1="12" y1="14" x2="12" y2="18"/>' +
      '<line x1="10" y1="16" x2="14" y2="16"/>',

    'calendar-week':
      '<rect width="18" height="18" x="3" y="4" rx="2"/>' +
      '<line x1="16" y1="2" x2="16" y2="6"/>' +
      '<line x1="8" y1="2" x2="8" y2="6"/>' +
      '<line x1="3" y1="10" x2="21" y2="10"/>' +
      '<line x1="7" y1="15" x2="17" y2="15"/>',

    'clock':
      '<circle cx="12" cy="12" r="10"/>' +
      '<polyline points="12 6 12 12 16 14"/>',

    'hourglass-half':
      '<path d="M5 4h14"/>' +
      '<path d="M5 20h14"/>' +
      '<path d="M7 4v3a5 5 0 0 0 5 5 5 5 0 0 0 5-5V4"/>' +
      '<path d="M7 20v-3a5 5 0 0 1 5-5 5 5 0 0 1 5 5v3"/>',

    /* ── Files / Documents ──────────────────────────────────────────── */
    'file-alt':
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
      '<polyline points="14 2 14 8 20 8"/>' +
      '<line x1="16" y1="13" x2="8" y2="13"/>' +
      '<line x1="16" y1="17" x2="8" y2="17"/>',

    'file-word':
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
      '<polyline points="14 2 14 8 20 8"/>' +
      '<polyline points="8 15 10 13 12 15 14 13 16 15"/>',

    'file-archive':
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
      '<polyline points="14 2 14 8 20 8"/>' +
      '<rect x="10" y="12" width="4" height="6" rx="1"/>',

    'file-powerpoint':
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
      '<polyline points="14 2 14 8 20 8"/>' +
      '<path d="M9 13h4a2 2 0 0 0 0-4H9v8"/>',

    'file-export':
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
      '<polyline points="14 2 14 8 20 8"/>' +
      '<path d="M12 18v-6"/>' +
      '<polyline points="9 15 12 12 15 15"/>',

    'folder':
      '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',

    'folder-open':
      '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>' +
      '<path d="m2 10 2.5 9h15l2.5-9"/>',

    'clipboard-list':
      '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>' +
      '<rect x="8" y="2" width="8" height="4" rx="1"/>' +
      '<line x1="8" y1="12" x2="16" y2="12"/>' +
      '<line x1="8" y1="16" x2="14" y2="16"/>',

    'clipboard-check':
      '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>' +
      '<rect x="8" y="2" width="8" height="4" rx="1"/>' +
      '<polyline points="9 14 11 16 15 12"/>',

    'book-open':
      '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>' +
      '<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',

    /* ── Status / Feedback ──────────────────────────────────────────── */
    'check':
      '<polyline points="20 6 9 17 4 12"/>',

    'check-circle':
      '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>' +
      '<polyline points="22 4 12 14.01 9 11.01"/>',

    'check-double':
      '<path d="M18 6 7 17l-5-5"/>' +
      '<path d="m22 10-7.5 7.5L13 16"/>',

    'circle-exclamation':
      '<circle cx="12" cy="12" r="10"/>' +
      '<line x1="12" y1="8" x2="12" y2="12"/>' +
      '<line x1="12" y1="16" x2="12.01" y2="16"/>',

    'exclamation-triangle':
      '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/>' +
      '<line x1="12" y1="9" x2="12" y2="13"/>' +
      '<line x1="12" y1="17" x2="12.01" y2="17"/>',

    'info-circle':
      '<circle cx="12" cy="12" r="10"/>' +
      '<line x1="12" y1="16" x2="12" y2="12"/>' +
      '<line x1="12" y1="8" x2="12.01" y2="8"/>',

    'bell':
      '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>' +
      '<path d="M13.73 21a2 2 0 0 1-3.46 0"/>',

    /* ── Charts / Data ──────────────────────────────────────────────── */
    'chart-line':
      '<line x1="3" y1="20" x2="3" y2="4"/>' +
      '<line x1="3" y1="20" x2="21" y2="20"/>' +
      '<polyline points="6 16 10 10 14 14 20 6"/>',

    'chart-pie':
      '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>' +
      '<path d="M22 12A10 10 0 0 0 12 2v10z"/>',

    'tachometer-alt':
      '<circle cx="12" cy="14" r="8"/>' +
      '<path d="M12 6v2"/>' +
      '<path d="m14 9-2 5"/>',

    /* ── Actions ────────────────────────────────────────────────────── */
    'upload':
      '<polyline points="16 16 12 12 8 16"/>' +
      '<line x1="12" y1="12" x2="12" y2="21"/>' +
      '<path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>',

    'edit':
      '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>' +
      '<path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',

    'search':
      '<circle cx="11" cy="11" r="8"/>' +
      '<line x1="21" y1="21" x2="16.65" y2="16.65"/>',

    'sync':
      '<polyline points="23 4 23 10 17 10"/>' +
      '<polyline points="1 20 1 14 7 14"/>' +
      '<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/>' +
      '<path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14"/>',

    'list-check':
      '<line x1="10" y1="6" x2="21" y2="6"/>' +
      '<line x1="10" y1="12" x2="21" y2="12"/>' +
      '<line x1="10" y1="18" x2="21" y2="18"/>' +
      '<polyline points="3 6 4 7 6 5"/>' +
      '<polyline points="3 12 4 13 6 11"/>' +
      '<polyline points="3 18 4 19 6 17"/>',

    'tasks':
      '<line x1="10" y1="6" x2="21" y2="6"/>' +
      '<line x1="10" y1="12" x2="21" y2="12"/>' +
      '<line x1="10" y1="18" x2="21" y2="18"/>' +
      '<polyline points="3 6 4 7 6 5"/>' +
      '<polyline points="3 12 4 13 6 11"/>' +
      '<polyline points="3 18 4 19 6 17"/>',

    /* ── Objects ────────────────────────────────────────────────────── */
    'star':
      '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',

    'lightbulb':
      '<path d="M9 18h6"/>' +
      '<path d="M10 22h4"/>' +
      '<path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',

    'crown':
      '<path d="m2 17 2-10 5 5 3-7 3 7 5-5 2 10z"/>' +
      '<path d="M2 17h20"/>',

    'gem':
      '<polygon points="12 2 2 9 12 22 22 9 12 2"/>' +
      '<line x1="2" y1="9" x2="22" y2="9"/>' +
      '<line x1="12" y1="2" x2="8" y2="9"/>' +
      '<line x1="12" y1="2" x2="16" y2="9"/>' +
      '<line x1="8" y1="9" x2="12" y2="22"/>' +
      '<line x1="16" y1="9" x2="12" y2="22"/>',

    'puzzle-piece':
      '<path d="M20 13V5a2 2 0 0 0-2-2h-5v2a2 2 0 0 1-4 0V3H4a2 2 0 0 0-2 2v5h2a2 2 0 0 1 0 4H2v5a2 2 0 0 0 2 2h5v-2a2 2 0 0 1 4 0v2h5a2 2 0 0 0 2-2v-5h-2a2 2 0 0 1 0-4z"/>',

    'flag-checkered':
      '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>' +
      '<line x1="4" y1="22" x2="4" y2="15"/>',

    'shield-alt':
      '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',

    'envelope':
      '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>' +
      '<polyline points="22 6 12 13 2 6"/>',

    'comments':
      '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>' +
      '<path d="M14 10h.01"/>' +
      '<path d="M10 10h.01"/>' +
      '<path d="M18 10h.01"/>',

    'brain':
      '<path d="M9.5 2A4.5 4.5 0 0 0 5 6.5C5 8 5.5 9 6.5 10L12 12"/>' +
      '<path d="M14.5 2A4.5 4.5 0 0 1 19 6.5C19 8 18.5 9 17.5 10L12 12"/>' +
      '<path d="M5 10a4.5 4.5 0 0 0 2.5 8h1L12 12"/>' +
      '<path d="M19 10a4.5 4.5 0 0 1-2.5 8h-1L12 12"/>' +
      '<path d="M12 12v10"/>',

    'rocket':
      '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>' +
      '<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>' +
      '<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>' +
      '<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',

    'palette':
      '<circle cx="13.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>' +
      '<circle cx="17.5" cy="10.5" r="1.5" fill="currentColor" stroke="none"/>' +
      '<circle cx="8.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"/>' +
      '<circle cx="6.5" cy="12.5" r="1.5" fill="currentColor" stroke="none"/>' +
      '<path d="M12 2a10 10 0 0 0 0 20c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.13a1.64 1.64 0 0 1 1.23-2.79h2c3.05 0 5.56-2.5 5.56-5.56C22 6 17.5 2 12 2z"/>',

    'paint-brush':
      '<path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3z"/>' +
      '<path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"/>',

    'magic':
      '<path d="m15 4-3 3"/>' +
      '<path d="M20 4h-3"/>' +
      '<path d="M20 7V4"/>' +
      '<path d="m4 20 12-12"/>' +
      '<path d="M2 15h3"/>' +
      '<path d="M2 12v3"/>',

    'mountain':
      '<path d="m8 3 4 8 5-5 5 15H2z"/>',

    'ghost':
      '<path d="M9 10h.01M15 10h.01"/>' +
      '<path d="M12 2a8 8 0 0 0-8 8v12l3-3 2 2 3-3 3 3 2-2 3 3V10a8 8 0 0 0-8-8z"/>',

    'chess':
      '<path d="M8 4h8l-1 5h-6z"/>' +
      '<path d="M10 9v2h4V9"/>' +
      '<path d="M6 16h12"/>' +
      '<path d="M7 20h10"/>' +
      '<path d="M8 16l1-5"/>' +
      '<path d="M16 16l-1-5"/>' +
      '<path d="M7 20l1-4"/>' +
      '<path d="M17 20l-1-4"/>',

    'chess-board':
      '<rect x="2" y="2" width="20" height="20" rx="1"/>' +
      '<rect x="7" y="2" width="5" height="5" fill="currentColor" stroke="none"/>' +
      '<rect x="17" y="2" width="5" height="5" fill="currentColor" stroke="none"/>' +
      '<rect x="2" y="7" width="5" height="5" fill="currentColor" stroke="none"/>' +
      '<rect x="12" y="7" width="5" height="5" fill="currentColor" stroke="none"/>' +
      '<rect x="7" y="12" width="5" height="5" fill="currentColor" stroke="none"/>' +
      '<rect x="17" y="12" width="5" height="5" fill="currentColor" stroke="none"/>' +
      '<rect x="2" y="17" width="5" height="5" fill="currentColor" stroke="none"/>' +
      '<rect x="12" y="17" width="5" height="5" fill="currentColor" stroke="none"/>',

    'utensils':
      '<path d="M3 2v7c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V2"/>' +
      '<line x1="6" y1="2" x2="6" y2="22"/>' +
      '<path d="M18 2a4 4 0 0 1 0 8v12"/>',

    'video':
      '<polygon points="23 7 16 12 23 17 23 7"/>' +
      '<rect x="1" y="5" width="15" height="14" rx="2"/>',

    'eye':
      '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>' +
      '<circle cx="12" cy="12" r="3"/>',

    'quote-left':
      '<path d="M10 8H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3"/>' +
      '<path d="M20 8h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3"/>',

    'equals':
      '<line x1="5" y1="9" x2="19" y2="9"/>' +
      '<line x1="5" y1="15" x2="19" y2="15"/>',

    'link':
      '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>' +
      '<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',

    'handshake':
      '<path d="M20 17l-4-4-4 4-4-4-6 6"/>' +
      '<path d="M2 7l4 4 4-4 4 4 6-6"/>' +
      '<line x1="18" y1="5" x2="22" y2="9"/>' +
      '<line x1="2" y1="9" x2="6" y2="5"/>',

    'award':
      '<circle cx="12" cy="8" r="6"/>' +
      '<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',

    /* ── Institutional ──────────────────────────────────────────────── */
    'university':
      '<path d="M12 2 2 7h20z"/>' +
      '<rect x="4" y="10" width="2" height="8"/>' +
      '<rect x="8" y="10" width="2" height="8"/>' +
      '<rect x="14" y="10" width="2" height="8"/>' +
      '<rect x="18" y="10" width="2" height="8"/>' +
      '<path d="M2 20h20"/>' +
      '<path d="M2 7h20"/>',

    'graduation-cap':
      '<path d="M22 10 12 5 2 10l10 5z"/>' +
      '<path d="M6 12v5c0 1.1 2.69 3 6 3s6-1.9 6-3v-5"/>' +
      '<line x1="22" y1="10" x2="22" y2="17"/>',

    'bullseye':
      '<circle cx="12" cy="12" r="10"/>' +
      '<circle cx="12" cy="12" r="6"/>' +
      '<circle cx="12" cy="12" r="2"/>',

    /* ── Layout / Structure ─────────────────────────────────────────── */
    'columns':
      '<rect x="3" y="3" width="7" height="18" rx="1"/>' +
      '<rect x="14" y="3" width="7" height="18" rx="1"/>',

    'layer-group':
      '<polygon points="12 2 2 7 12 12 22 7 12 2"/>' +
      '<polyline points="2 17 12 22 22 17"/>' +
      '<polyline points="2 12 12 17 22 12"/>',

    'drafting-compass':
      '<circle cx="12" cy="5" r="2"/>' +
      '<path d="m12 7-7 15"/>' +
      '<path d="m12 7 7 15"/>' +
      '<path d="M8.5 14h7"/>',

    'universal-access':
      '<circle cx="12" cy="12" r="10"/>' +
      '<circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/>' +
      '<path d="M7 12h10"/>' +
      '<path d="m9 19 3-7 3 7"/>',

    'presentation-screen':
      '<rect x="2" y="3" width="20" height="14" rx="2"/>' +
      '<line x1="12" y1="17" x2="12" y2="21"/>' +
      '<line x1="8" y1="21" x2="16" y2="21"/>' +
      '<line x1="2" y1="7" x2="22" y2="7"/>',

    /* ── Brands ─────────────────────────────────────────────────────── */
    'github':
      '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',

    'youtube':
      '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>' +
      '<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none"/>'
  };

  /* ── Aliases (Font Awesome has multiple names for some icons) ────── */
  icons['exclamation-circle']  = icons['circle-exclamation'];
  icons['triangle-exclamation'] = icons['exclamation-triangle'];

  /* ── Replacement Engine ─────────────────────────────────────────── */
  function initIcons() {
    var elements = document.querySelectorAll('i[class]');
    for (var j = 0; j < elements.length; j++) {
      var el = elements[j];
      var cls = el.className;

      // Only process Font Awesome elements
      if (!/\bfa[srb]?\b|\bfas\b|\bfar\b|\bfab\b/.test(cls)) continue;

      // Extract icon name from class list
      var match = cls.match(/\bfa-([a-z0-9-]+)/);
      if (!match) continue;

      var name = match[1];
      var svgContent = icons[name];
      if (!svgContent) continue;

      // Build inline SVG
      var svgNS = 'http://www.w3.org/2000/svg';
      var svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('xmlns', svgNS);
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('width', '1em');
      svg.setAttribute('height', '1em');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      svg.setAttribute('aria-hidden', 'true');
      svg.classList.add('site-icon');

      // Parse SVG content into proper namespace
      var temp = document.createElement('div');
      temp.innerHTML = '<svg xmlns="' + svgNS + '">' + svgContent + '</svg>';
      var tempSvg = temp.querySelector('svg');
      while (tempSvg.firstChild) {
        svg.appendChild(tempSvg.firstChild);
      }

      // Insert SVG into the existing <i> tag (preserves CSS selectors targeting <i>)
      el.innerHTML = '';
      el.appendChild(svg);
      el.style.fontStyle = 'normal';
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIcons);
  } else {
    initIcons();
  }
})();
