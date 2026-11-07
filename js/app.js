/* TRWBCY portfolio, editorial direction. Vanilla JS, no build step.
   Content lives in js/data.js. This file only renders and animates it. */
(function () {
  'use strict';
  var P = window.PORTFOLIO;
  var DATA = P.cases;
  DATA.forEach(function (d) { d.ink = P.inks[d.cat] || '#16151A'; });

  var H = 960;                 // design height; width stretches with the window
  var MOBILE_BELOW = 820;      // px; below this the stage is released
  var KC = { off: '#C23B2E', def: '#1A62BE', build: '#5B2FC9' };
  var SEG = { R: '#C23B2E', B: '#1A62BE', P: '#5B2FC9' };
  var MN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]; }); };
  var pad = function (n) { return String(n).padStart(2, '0'); };

  var S = {
    page: 'work', contact: false, active: 0, muted: true,
    cpos: { x: 0, y: 0 }, kpos: { x: 0, y: 0 },
    spin: 0, spinBase: 0, colOff: 0, colBase: 0,
    busy: false, lock: false, sc: 1, W: 1440, mobile: false
  };
  var prevP = {};
  var drag = null, snapT = null, movedEvt = null;

  /* ---------------- layout ---------------- */
  function layout() {
    var vw = window.innerWidth || 1440, vh = window.innerHeight || 960;
    var mobile = vw < MOBILE_BELOW;
    if (mobile !== S.mobile) {
      S.mobile = mobile;
      document.body.classList.toggle('is-mobile', mobile);
      renderPage(true);
    }
    if (mobile) return;
    var W = Math.max(1280, Math.round(H * vw / vh));
    var sc = Math.min(vh / H, vw / W);
    S.W = W; S.sc = sc;
    var st = $('stage');
    st.style.width = W + 'px';
    st.style.height = H + 'px';
    st.style.left = ((vw - W * sc) / 2) + 'px';
    st.style.top = ((vh - H * sc) / 2) + 'px';
    st.style.transform = 'scale(' + sc + ')';
    if (S.page === 'about') updateCols();
    if (S.page === 'lab') renderPage(true);
  }

  /* ---------------- header ---------------- */
  function clock() {
    var d = new Date(Date.now() + 7 * 3600 * 1000);
    $('clock').textContent = pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes());
  }

  function renderNav() {
    var items = [['work', 'Work'], ['about', 'About'], ['lab', 'Lab notes'], ['contact', 'Contact']];
    var target = S.trans ? S.trans.to : S.page;
    $('nav').innerHTML = items.map(function (it) {
      var cur = it[0] === 'contact' ? S.contact : (!S.contact && target === it[0]);
      return '<button type="button" class="mi" data-go="' + it[0] + '" data-label="' + it[1] + '"' + (cur ? ' aria-current="page"' : '') + '>' + (cur ? '→ ' : '') + it[1].toUpperCase() + '</button>';
    }).join('');
  }

  function setFlip() { $('flip').style.transform = 'rotateY(' + S.spin + 'deg)'; }

  /* ---------------- page switching ---------------- */
  function goPage(id, label) {
    if (S.busy) return;
    if (id === S.page) { closeContact(); return; }
    if (S.mobile) {
      S.page = id; S.contact = false; renderOverlay(); renderNav(); renderPage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    S.busy = true;
    S.contact = false; S.cpos = { x: 0, y: 0 }; S.kpos = { x: 0, y: 0 };
    S.trans = { to: id, label: label, phase: 'in' };
    renderOverlay(); renderNav();
    setTimeout(function () { S.page = id; S.trans.phase = 'out'; renderOverlay(); renderPage(); }, 900);
    setTimeout(function () { S.busy = false; S.trans = null; renderOverlay(); renderNav(); }, 1500);
  }

  function openContact() { if (S.busy) return; S.contact = true; renderOverlay(); renderNav(); }
  function closeContact() { S.contact = false; S.cpos = { x: 0, y: 0 }; S.kpos = { x: 0, y: 0 }; renderOverlay(); renderNav(); }

  function renderPage(keepAnim) {
    var m = $('main');
    if (S.page === 'work') m.innerHTML = workHTML();
    else if (S.page === 'about') m.innerHTML = aboutHTML();
    else m.innerHTML = labHTML();
    if (S.page === 'work') updateCards();
    if (S.page === 'about') { prevP = {}; updateCols(); }
  }

  /* ---------------- WORK ---------------- */
  function workHTML() {
    var cards = DATA.map(function (c, i) {
      var num = pad(i + 1);
      return '<button type="button" class="card" data-i="' + i + '" aria-label="Open case ' + esc(c.title) + '">' +
        '<span class="card-art"><img src="' + esc(c.img) + '" alt="" loading="' + (i < 4 ? 'eager' : 'lazy') + '" onerror="this.parentNode.classList.add(\'noimg\')">' +
        '<span class="card-badge"><i style="background:' + c.tone + '"></i>' + esc(c.cat) + '</span>' +
        '<span class="card-num">' + num + '</span>' +
        '<span class="card-open">' + (c.href ? 'Open case →' : 'Case ' + num) + '</span></span>' +
        '<span class="card-foot"><span class="card-title">' + esc(c.title) + '</span><span class="card-of">' + num + '/' + DATA.length + '</span></span>' +
        '<span class="card-line">' + esc(c.line) + '</span>' +
        '</button>';
    }).join('');
    return '<section class="work pg">' +
      '<div class="work-meta"><div class="kv" id="kv"></div>' +
      '<div class="counter"><span class="counter-label">Selected cases</span><span class="counter-num" id="cnum" aria-hidden="true"></span><span class="counter-of">/' + DATA.length + '</span></div></div>' +
      '<div class="stack" id="stack">' + cards + '<span class="stack-hint">Scroll or click a case</span></div>' +
      '<div class="clist" id="clist"></div>' +
      '</section>';
  }

  function updateCards() {
    var a = S.active, c = DATA[a];
    var kv = $('kv'); if (!kv) return;
    kv.innerHTML =
      '<div class="kv-row"><span class="kv-k">Category</span><span class="kv-v cat" style="color:' + c.ink + '">' + esc(c.cat) + '</span></div>' +
      '<div class="kv-row"><span class="kv-k">' + esc(c.k2) + '</span><span class="kv-v mono">' + esc(c.mitre) + '</span></div>' +
      '<div class="kv-row"><span class="kv-k">Proof</span><span class="kv-v">' + esc(c.proof) + '</span></div>';
    $('cnum').textContent = pad(a + 1);
    var cards = $('stack').querySelectorAll('.card');
    cards.forEach(function (el, i) {
      var d = i - a, ad = Math.abs(d), hidden = d < 0 || d > 4;
      el.style.transform = 'translate3d(' + (d * -70) + 'px, ' + (d * 160) + 'px, ' + (-ad * 140) + 'px) rotateX(18deg) rotateZ(-8deg)';
      el.style.filter = 'blur(' + (ad > 1 ? 1.5 : 0) + 'px)';
      el.style.opacity = hidden ? 0 : Math.max(0.3, 1 - ad * 0.17);
      el.style.zIndex = 50 - ad;
      el.style.pointerEvents = hidden ? 'none' : 'auto';
      el.style.boxShadow = '0 28px 50px rgba(22,21,26,' + (d === 0 ? '0.22' : '0.10') + ')';
      el.tabIndex = hidden ? -1 : 0;
    });
    var start = Math.max(0, Math.min(a - 1, DATA.length - 4));
    $('clist').innerHTML = DATA.slice(start, start + 4).map(function (c, k) {
      var i = start + k, on = i === a;
      return '<button type="button" class="citem" data-i="' + i + '" style="opacity:' + (on ? 1 : 0.3) + ';filter:blur(' + (on ? 0 : 0.6) + 'px)">' +
        '<span class="citem-cat" style="color:' + c.ink + '">' + esc(c.cat) + '</span>' +
        '<span class="citem-title">' + esc(c.title) + '</span><span class="citem-rule" aria-hidden="true"></span>' +
        '<span class="citem-line">' + esc(c.line) + '</span></button>';
    }).join('');
  }

  function pick(i) {
    if (S.mobile) { var c = DATA[i]; if (c.href) window.open(c.href, '_blank', 'noopener'); return; }
    if (i === S.active && DATA[i].href) { window.open(DATA[i].href, '_blank', 'noopener'); return; }
    S.active = Math.max(0, Math.min(DATA.length - 1, i));
    updateCards();
  }

  /* ---------------- ABOUT ---------------- */
  function segs(list) {
    return list.map(function (g) { return '<span' + (g[1] ? ' style="color:' + SEG[g[1]] + '"' : '') + '>' + esc(g[0]) + '</span>'; }).join('');
  }
  function aboutHTML() {
    var facts = P.facts.map(function (row, i) {
      return '<span class="ln"><span class="fact" style="animation-delay:' + (i * 70) + 'ms"><span class="fact-idx">' + pad(i + 1) + '</span><span>' + segs(row) + '</span></span></span>';
    }).join('');
    var cols = P.cols.map(function (c, i) {
      var lines = c.lines.map(function (l) {
        return l[1] ? '<p><a href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + ' ↗</a></p>' : '<p>' + esc(l[0]) + '</p>';
      }).join('');
      return '<div class="col" data-c="' + i + '"><p class="head" style="color:' + c.tone + '">' + esc(c.head) + '</p>' + lines + '</div>';
    }).join('');
    return '<section class="about pg">' +
      '<span class="big-yr l" aria-hidden="true">19</span><span class="big-yr r" aria-hidden="true">97</span>' +
      '<div class="avatar"><span class="avatar-ring" aria-hidden="true"></span><img src="img/me/portrait-about.jpg" alt="Illustrated portrait of Tri with glasses, one hand raised"><span class="avatar-tag">TRWBCY / PURPLE TEAM</span></div>' +
      '<div class="facts-wrap"><div class="facts">' + facts +
      '<span class="ln" style="margin-top:14px"><span class="fact" style="animation-delay:560ms"><span></span><span class="fact-and">and</span></span></span>' +
      '<span class="ln" style="margin-top:8px"><span class="fact" style="animation-delay:640ms"><span></span><span class="fact-close">' + segs(P.closing) + '</span></span></span>' +
      '</div></div>' +
      '<div class="cols" id="cols">' + cols + '</div>' +
      '<span class="spin-hint">Scroll to spin ↻</span>' +
      '</section>';
  }

  function updateCols() {
    var wrap = $('cols'); if (!wrap || S.mobile) return;
    var n = P.cols.length, colW = (S.W - 56) / 4;
    wrap.querySelectorAll('.col').forEach(function (el, i) {
      var p = i - S.colOff;
      p = (((p + 1) % n) + n) % n - 1;
      var jump = prevP[i] !== undefined && Math.abs(p - prevP[i]) > 2.5;
      prevP[i] = p;
      var op = p < 0 ? Math.max(0, 1 + p) : (p > 3 ? Math.max(0, 4 - p) : 1);
      el.style.width = colW + 'px';
      el.style.transition = jump ? 'none' : 'transform 750ms cubic-bezier(.2,.7,.2,1), opacity 500ms';
      el.style.transform = 'translateX(' + (p * colW) + 'px) rotateY(' + ((p - 1.5) * -5) + 'deg)';
      el.style.opacity = op;
    });
  }

  /* ---------------- LAB ---------------- */
  function heatStats() {
    var keys = Object.keys(P.dayCounts).sort();
    var total = 0, best = 0, run = 0, prev = null;
    keys.forEach(function (k) {
      total += P.dayCounts[k];
      var t = Date.UTC(P.heatYear, +k.slice(0, 2) - 1, +k.slice(2));
      run = (prev !== null && t - prev === 86400000) ? run + 1 : 1;
      best = Math.max(best, run); prev = t;
    });
    return { total: total, days: keys.length, best: best };
  }

  function labHTML() {
    var Y = P.heatYear;
    var shade = function (n) { return n === 0 ? '#DCDAD4' : n === 1 ? '#CDBFF3' : n <= 3 ? '#A48AEA' : n <= 6 ? '#7650DA' : '#4520AE'; };
    var now = new Date(Date.now() + 7 * 3600 * 1000);
    var todayKey = pad(now.getUTCMonth() + 1) + pad(now.getUTCDate());
    var nowYear = now.getUTCFullYear();
    var cell = S.mobile ? 12 : Math.max(12, Math.min(18, Math.floor(((S.W - 56 - 400 - 56) - 52 * 3) / 53)));
    var jan1 = Date.UTC(Y, 0, 1), off0 = new Date(jan1).getUTCDay();
    var weeks = '';
    for (var w = 0; w < 53; w++) {
      var days = '';
      for (var dw = 0; dw < 7; dw++) {
        var idx = w * 7 + dw - off0, dt = new Date(jan1 + idx * 86400000);
        var inYear = idx >= 0 && dt.getUTCFullYear() === Y;
        var key = pad(dt.getUTCMonth() + 1) + pad(dt.getUTCDate());
        var n = P.dayCounts[key] || 0;
        var future = nowYear === Y ? key > todayKey : nowYear < Y;
        var st = 'width:' + cell + 'px;height:' + cell + 'px;' + (!inYear ? 'visibility:hidden;' : future ? 'border:1px solid #D3D1CC;' : 'background:' + shade(n) + ';');
        var tip = inYear ? MN[dt.getUTCMonth()] + ' ' + dt.getUTCDate() + ': ' + n + ' session' + (n === 1 ? '' : 's') : '';
        days += '<span class="hcell" title="' + tip + '" style="' + st + '"></span>';
      }
      weeks += '<div class="heat-wk">' + days + '</div>';
    }
    var months = MN.map(function (t, mi) {
      var di = Math.round((Date.UTC(Y, mi, 1) - jan1) / 86400000);
      return '<span style="left:' + (Math.floor((di + off0) / 7) * (cell + 3)) + 'px">' + t + '</span>';
    }).join('');
    var hs = heatStats();
    var tot = P.split.reduce(function (x, y) { return x + y[1]; }, 0);
    var bar = P.split.map(function (s) { return '<span style="flex:' + s[1] + ' 1 0;background:' + KC[s[2]] + '"></span>'; }).join('');
    var keys = P.split.map(function (s) {
      return '<span><span class="split-name" style="color:' + KC[s[2]] + '">' + s[0] + '</span><span class="mono muted" style="font-size:12px">' + s[1] + ' sessions · ' + Math.round(s[1] / tot * 100) + '%</span></span>';
    }).join('');
    var topics = P.topics.slice(0, 10).map(function (t) {
      return '<span class="topic" style="color:' + KC[t[2]] + ';border-color:' + KC[t[2]] + ';font-size:' + Math.round(17 + Math.min(1, Math.sqrt(t[1] / P.topics[0][1])) * 17) + 'px">' + esc(t[0]) + '<small>' + t[1] + '</small></span>';
    }).join('');
    var tiles = P.tiles.map(function (t) {
      return '<div class="lrow"><span class="lrow-p">' + esc(t.platform) + '</span><span class="lrow-t">' + esc(t.title) + '</span><span class="lrow-g">' + esc(t.tag) + '</span></div>';
    }).join('');
    var feedOnce = P.feed.map(function (f) {
      return '<div class="fcard"><span class="fcard-top"><span>' + esc(f.d) + '</span><span>' + esc(f.p) + '</span></span><span class="fcard-t">' + esc(f.t) + '</span><span class="fcard-c" style="color:' + KC[f.k] + '">' + esc(f.c) + '</span></div>';
    }).join('');
    var legend = [0, 1, 3, 6, 9].map(function (n) { return '<i style="background:' + shade(n) + '"></i>'; }).join('');
    return '<section class="lab pg"><div class="lab-grid">' +
      '<div class="lab-left">' +
        '<div class="rooted"><span class="rooted-n" aria-hidden="true">70</span><span class="cap">Machines rooted<br>Writeups locked</span></div>' +
        '<p class="lab-note">Hacktrace asks players to keep solutions private, so every writeup stays locked. Ask me in an interview and I\'ll walk you through any of them.</p>' +
        '<div class="rows">' + tiles + '</div>' +
      '</div>' +
      '<div class="lab-right">' +
        '<div class="study-head"><h2>What I <em>study.</em></h2><div class="stats">' +
          '<div class="stat"><span class="stat-n">' + hs.total + '</span><span class="cap">Sessions logged</span></div>' +
          '<div class="stat"><span class="stat-n">' + hs.days + '</span><span class="cap">Active days</span></div>' +
          '<div class="stat"><span class="stat-n">' + hs.best + '</span><span class="cap">Day best streak</span></div>' +
        '</div></div>' +
        '<div class="heat-wrap"><div class="months">' + months + '</div>' +
          '<div class="heat" role="img" aria-label="' + Y + ' learning heatmap, ' + hs.total + ' sessions across ' + hs.days + ' active days">' + weeks + '</div>' +
          '<div class="heat-legend cap"><span>Every entry is a logged session: CTF, lab, course or real case</span><span class="lg">Less' + legend + 'More</span></div></div>' +
        '<div style="display:flex;flex-direction:column;gap:8px"><div class="split-bar">' + bar + '</div><div class="split-keys">' + keys + '</div></div>' +
        '<div style="display:flex;flex-direction:column;gap:10px"><span class="cap">Most studied topics</span><div class="topics">' + topics + '</div></div>' +
      '</div></div>' +
      '<div class="feed-wrap"><span class="cap">Latest sessions · hover to pause</span><div class="feed-mask"><div class="marq">' + feedOnce + feedOnce + '</div></div></div>' +
      '</section>';
  }

  /* ---------------- overlay: veil + contact ---------------- */
  function renderOverlay() {
    var o = $('overlay'), html = '';
    if (S.trans) html += '<div class="veil' + (S.trans.phase === 'out' ? ' out' : '') + '" aria-hidden="true"><span>' + esc(S.trans.label) + '</span></div>';
    if (S.contact) {
      html += '<div class="contact" id="contactLayer"><div class="contact-box">' +
        '<div class="credits-wrap drag" data-drag="kpos" style="transform:translate(' + S.kpos.x + 'px,' + S.kpos.y + 'px)"><div class="credits" aria-hidden="true">' +
          '<h3>Open to</h3><div class="g2" style="gap:14px"><span><span class="muted">Roles</span><br>Security Analyst<br>Threat hunting &amp; detection<br>Red team</span><span><span class="muted">Where</span><br>Surabaya, Jakarta<br>or remote</span><span><span class="muted">Time zone</span><br>WIB, UTC+7</span><span><span class="muted">Languages</span><br>Indonesian, English</span></div>' +
          '<p class="sig">Designed &amp; built by Tri Wibowo Cahyo</p></div></div>' +
        '<div class="dialog-wrap drag" data-drag="cpos" style="transform:translate(' + S.cpos.x + 'px,' + S.cpos.y + 'px)"><div class="dialog" role="dialog" aria-label="Contact">' +
          '<h3>Come say hi</h3><div class="g2">' +
            '<div><span class="k">Drop me a line</span><br><a href="mailto:twibowo288@gmail.com">twibowo288@gmail.com</a></div>' +
            '<div><span class="k">Career updates</span><br><a href="https://www.linkedin.com/in/tri-wibowo-cahyo/" target="_blank" rel="noopener">LinkedIn</a></div>' +
            '<div><span class="k">Rank proof</span><br><a href="img/rank-red.png" target="_blank" rel="noopener">#5 offensive ↗</a><br><a href="img/rank-blue.png" target="_blank" rel="noopener">#5 defensive ↗</a></div>' +
            '<div><span class="k">Writeups</span><br><span>Locked, on request</span></div>' +
            '<div><span class="k">Resume</span><br><a href="assets/Tri-Wibowo-Cahyo-CV.pdf">Download CV</a></div>' +
            '<div class="close"><button type="button" id="closeContact">Close ✕</button></div>' +
          '</div><p class="hint">' + (S.mobile ? '' : 'drag me around') + '</p></div></div>' +
        '</div></div>';
    }
    o.innerHTML = html;
    if (S.contact) { var b = $('closeContact'); if (b) b.focus({ preventScroll: true }); }
  }

  /* ---------------- input ---------------- */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-go]');
    if (t) { var id = t.getAttribute('data-go'); if (id === 'contact') openContact(); else goPage(id, t.getAttribute('data-label')); return; }
    var c = e.target.closest('.card, .citem');
    if (c) { pick(+c.getAttribute('data-i')); return; }
    if (e.target.closest('#closeContact')) { closeContact(); return; }
    if (e.target.closest('#goLab')) { goPage('lab', 'Lab notes'); return; }
    if (e.target.closest('#mute')) {
      S.muted = !S.muted;
      $('mute').setAttribute('aria-pressed', S.muted ? 'true' : 'false');
      $('mute').querySelector('b').textContent = S.muted ? 'Muted' : 'On';
      return;
    }
    if (e.target.id === 'contactLayer') closeContact();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && S.contact) { closeContact(); return; }
    if (S.mobile || S.contact || S.page !== 'work') return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { pick(S.active + 1); e.preventDefault(); }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { pick(S.active - 1); e.preventDefault(); }
  });

  // Card stack: one wheel notch = one case
  document.addEventListener('wheel', function (e) {
    if (S.mobile) return;
    var stack = e.target.closest && e.target.closest('#stack');
    if (stack && !S.lock && !S.contact && !S.trans) {
      var to = Math.max(0, Math.min(DATA.length - 1, S.active + (e.deltaY > 0 ? 1 : -1)));
      if (to !== S.active) {
        movedEvt = e; S.lock = true;
        setTimeout(function () { S.lock = false; }, 450);
        pick(to);
      }
    }
    onSpin(e);
  }, { passive: true });

  // Stage wheel: flips the logo card at the ends of the stack, spins the About columns
  function onSpin(e) {
    var dy = Math.max(-150, Math.min(150, e.deltaY || 0));
    if (S.trans || S.contact) return;
    var last = DATA.length - 1, moved = movedEvt === e;
    var atEdge = S.page === 'lab' || (S.page === 'work' && !moved && !S.lock && ((dy < 0 && S.active === 0) || (dy > 0 && S.active >= last)));
    if (!atEdge && S.page !== 'about') return;
    if (atEdge) { S.spin += dy * 0.9; setFlip(); }
    if (S.page === 'about') { S.colOff += dy / 220; updateCols(); }
    clearTimeout(snapT);
    snapT = setTimeout(function () {
      var step = function (v, base, unit) { var d = (v - base) / unit; return Math.abs(d) < 0.05 ? base : base + Math.sign(d) * Math.max(1, Math.round(Math.abs(d))) * unit; };
      S.spinBase = step(S.spin, S.spinBase, 180); S.spin = S.spinBase; setFlip();
      S.colBase = step(S.colOff, S.colBase, 1); S.colOff = S.colBase; updateCols();
    }, 260);
  }

  // Dragging the contact cards
  document.addEventListener('pointerdown', function (e) {
    var h = e.target.closest('.drag');
    if (!h || S.mobile || e.target.closest('a, button')) return;
    var key = h.getAttribute('data-drag'), p = S[key];
    drag = { key: key, el: h, sx: e.clientX, sy: e.clientY, ox: p.x, oy: p.y };
    h.setPointerCapture && h.setPointerCapture(e.pointerId);
  });
  document.addEventListener('pointermove', function (e) {
    if (!drag) return;
    var k = S.sc || 1, p = { x: drag.ox + (e.clientX - drag.sx) / k, y: drag.oy + (e.clientY - drag.sy) / k };
    S[drag.key] = p;
    drag.el.style.transform = 'translate(' + p.x + 'px,' + p.y + 'px)';
  });
  ['pointerup', 'pointercancel'].forEach(function (ev) { document.addEventListener(ev, function () { drag = null; }); });

  window.addEventListener('resize', layout);

  /* ---------------- LAB data: study/data/entries.json ----------------
     Builds dayCounts, feed, split and topics from the real learning log.
     If the fetch fails, the values embedded in data.js stay as they are. */
  function kindOf(cat) {
    var c = String(cat || '').toLowerCase();
    if (/documentation|learning|lesson|web development|system administration|data management|virtualization|project/.test(c)) return 'build';
    if (/threat hunting|soc|forensic|dfir|malware|networking/.test(c)) return 'def';
    return 'off';
  }
  var TOPIC_SKIP = /^(learning \/ research|lesson learned \/ methodology|writeup|project)$/;
  function topicOf(cat) {
    var c = String(cat || '').trim(), l = c.toLowerCase();
    if (!c || TOPIC_SKIP.test(l)) return null;
    if (/active directory/.test(l)) return 'Active Directory';
    if (l === 'ctf') return 'CTF';
    if (l === 'soc') return 'SOC Fundamentals';
    if (l === 'dfir') return 'DFIR';
    return c;
  }
  function applyEntries(list) {
    var Y = P.heatYear, days = {}, split = { off: 0, def: 0, build: 0 }, topics = {};
    list.forEach(function (e) {
      if (!e || !/^\d{4}-\d{2}-\d{2}$/.test(e.date)) return;
      var k = kindOf(e.category);
      split[k]++;
      var t = topicOf(e.category);
      if (t) {
        var tk = t.toLowerCase();
        if (!topics[tk]) topics[tk] = [t, 0, k];
        topics[tk][1]++;
      }
      if (+e.date.slice(0, 4) === Y) {
        var key = e.date.slice(5, 7) + e.date.slice(8, 10);
        days[key] = (days[key] || 0) + 1;
      }
    });
    var latest = list.map(function (e, i) { return { e: e, i: i }; })
      .filter(function (x) { return x.e && /^\d{4}-\d{2}-\d{2}$/.test(x.e.date); })
      .sort(function (a, b) { return b.e.date.localeCompare(a.e.date) || b.i - a.i; })
      .slice(0, 10);
    P.dayCounts = days;
    P.split = [['Offense', split.off, 'off'], ['Defense', split.def, 'def'], ['Build & learn', split.build, 'build']];
    P.topics = Object.keys(topics).map(function (k) { return topics[k]; })
      .sort(function (a, b) { return b[1] - a[1]; });
    P.feed = latest.map(function (x) {
      var e = x.e, cat = String(e.category || '');
      return {
        d: MN[+e.date.slice(5, 7) - 1] + ' ' + (+e.date.slice(8, 10)),
        p: e.platform || '',
        c: /^learning \/ research$/i.test(cat) ? 'Learning' : cat,
        t: e.title || '',
        k: kindOf(cat)
      };
    });
  }
  function loadStudy() {
    if (!window.fetch) return;
    fetch('study/data/entries.json', { cache: 'no-cache' })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (list) {
        if (!Array.isArray(list) || !list.length) return;
        applyEntries(list);
        if (S.page === 'lab') renderPage(true);
      })
      .catch(function () { /* keep embedded fallback from data.js */ });
  }

  /* ---------------- boot ---------------- */
  clock(); setInterval(clock, 20000);
  renderNav();
  layout();
  if (!S.mobile) renderPage();
  loadStudy();
})();
