/* ============================================================================
   WALL-E & EVA // KOZMIK ANI HARITASI & 2-HESAPLI KUMANDA MOTORU (V2)
   - Hesap 1: WALL-E [BARAN] -> Sifre: brn123
   - Hesap 2: EVA    [SUDE]  -> Sifre: Always
   - Sehir arama + tiklayinca aninda foto/not ekleme + renkli zoomlanabilir harita
   - Depolama %80 esik takip + sudesenturk6507@gmail.com uyari sistemi
   ============================================================================ */

const CUSTOM_PNG_ICONS = [];

const ACCOUNTS = {
  walle: { role: 'walle', pass: 'brn1234', badge: 'WALL-E', operator: 'BARAN [WALL-E]', author: 'BARAN' },
  eva:   { role: 'eva',   pass: 'Always',  badge: 'EVA',    operator: 'SUDE [EVA]',     author: 'SUDE'  }
};

const PX_ICONS = {
  walle: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="2" y="2" width="5" height="5" fill="#7c8ea6"/><rect x="9" y="2" width="5" height="5" fill="#7c8ea6"/>
    <rect x="3" y="3" width="3" height="3" fill="#0f172a"/><rect x="10" y="3" width="3" height="3" fill="#0f172a"/>
    <rect x="4" y="4" width="1" height="1" fill="#67d4ff"/><rect x="11" y="4" width="1" height="1" fill="#67d4ff"/>
    <rect x="7" y="4" width="2" height="2" fill="#475569"/>
    <rect x="7" y="7" width="2" height="2" fill="#94a3b8"/>
    <rect x="3" y="9" width="10" height="5" fill="#f6bf42"/>
    <rect x="5" y="10" width="6" height="2" fill="#1e293b"/>
    <rect x="2" y="12" width="2" height="3" fill="#475569"/><rect x="12" y="12" width="2" height="3" fill="#475569"/>
  </svg>`,
  eva: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="5" y="2" width="6" height="1" fill="#f8fafc"/>
    <rect x="4" y="3" width="8" height="4" fill="#f8fafc"/>
    <rect x="5" y="4" width="6" height="2" fill="#061326"/>
    <rect x="6" y="4" width="1" height="1" fill="#67d4ff"/><rect x="9" y="4" width="1" height="1" fill="#67d4ff"/>
    <rect x="4" y="8" width="8" height="5" fill="#e2e8f0"/>
    <rect x="5" y="13" width="6" height="1" fill="#cbd5e1"/>
    <rect x="7" y="9" width="2" height="2" fill="#67d4ff"/>
  </svg>`,
  heart: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="3" y="3" width="3" height="2" fill="#ff4f86"/><rect x="10" y="3" width="3" height="2" fill="#ff4f86"/>
    <rect x="2" y="4" width="12" height="4" fill="#ff4f86"/>
    <rect x="7" y="4" width="2" height="1" fill="#030612"/>
    <rect x="3" y="8" width="10" height="2" fill="#e11d62"/>
    <rect x="5" y="10" width="6" height="2" fill="#e11d62"/>
    <rect x="7" y="12" width="2" height="2" fill="#be123c"/>
    <rect x="4" y="4" width="1" height="1" fill="#ffe4ef"/>
  </svg>`,
  map: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="4" y="2" width="8" height="12" fill="#2563eb"/>
    <rect x="2" y="4" width="12" height="8" fill="#2563eb"/>
    <rect x="4" y="4" width="3" height="3" fill="#4ade80"/>
    <rect x="9" y="6" width="4" height="4" fill="#4ade80"/>
    <rect x="5" y="10" width="3" height="2" fill="#f6bf42"/>
    <rect x="4" y="2" width="8" height="1" fill="#93c5fd"/>
  </svg>`,
  pinGold: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="5" y="2" width="6" height="6" fill="#f6bf42"/>
    <rect x="4" y="3" width="8" height="4" fill="#f6bf42"/>
    <rect x="7" y="4" width="2" height="2" fill="#fffbeb"/>
    <rect x="6" y="8" width="4" height="3" fill="#d97706"/>
    <rect x="7" y="11" width="2" height="3" fill="#b45309"/>
  </svg>`,
  pinCyan: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="5" y="2" width="6" height="6" fill="#67d4ff"/>
    <rect x="4" y="3" width="8" height="4" fill="#67d4ff"/>
    <rect x="7" y="4" width="2" height="2" fill="#f0f9ff"/>
    <rect x="6" y="8" width="4" height="3" fill="#0284c7"/>
    <rect x="7" y="11" width="2" height="3" fill="#0369a1"/>
  </svg>`,
  note: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="2" y="3" width="12" height="10" fill="#fde68a"/>
    <rect x="2" y="3" width="12" height="2" fill="#f59e0b"/>
    <rect x="4" y="7" width="8" height="1" fill="#78350f"/>
    <rect x="4" y="9" width="6" height="1" fill="#78350f"/>
    <rect x="11" y="9" width="2" height="2" fill="#ff4f86"/>
  </svg>`,
  music: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="6" y="2" width="7" height="2" fill="#58ff9a"/>
    <rect x="6" y="4" width="2" height="7" fill="#58ff9a"/>
    <rect x="11" y="4" width="2" height="6" fill="#58ff9a"/>
    <rect x="3" y="10" width="5" height="3" fill="#4ade80"/>
    <rect x="8" y="9" width="5" height="3" fill="#4ade80"/>
  </svg>`,
  gamepad: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="2" y="5" width="12" height="7" fill="#334155"/>
    <rect x="4" y="7" width="3" height="1" fill="#f6bf42"/><rect x="5" y="6" width="1" height="3" fill="#f6bf42"/>
    <rect x="10" y="7" width="1" height="1" fill="#67d4ff"/><rect x="12" y="8" width="1" height="1" fill="#ff4f86"/>
    <rect x="2" y="5" width="12" height="1" fill="#94a3b8"/>
  </svg>`,
  battery: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="2" y="5" width="11" height="6" fill="#0f172a"/>
    <rect x="2" y="5" width="11" height="1" fill="#67d4ff"/><rect x="2" y="10" width="11" height="1" fill="#67d4ff"/>
    <rect x="2" y="5" width="1" height="6" fill="#67d4ff"/><rect x="12" y="5" width="1" height="6" fill="#67d4ff"/>
    <rect x="13" y="7" width="1" height="2" fill="#67d4ff"/>
    <rect x="4" y="7" width="7" height="2" fill="#58ff9a"/>
  </svg>`,
  eye: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="4" y="5" width="8" height="1" fill="#67d4ff"/><rect x="4" y="10" width="8" height="1" fill="#67d4ff"/>
    <rect x="2" y="7" width="2" height="2" fill="#67d4ff"/><rect x="12" y="7" width="2" height="2" fill="#67d4ff"/>
    <rect x="6" y="6" width="4" height="4" fill="#f8fafc"/>
    <rect x="7" y="7" width="2" height="2" fill="#0284c7"/>
  </svg>`,
  mic: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="6" y="2" width="4" height="6" fill="#67d4ff"/>
    <rect x="5" y="7" width="1" height="3" fill="#94a3b8"/><rect x="10" y="7" width="1" height="3" fill="#94a3b8"/>
    <rect x="6" y="10" width="4" height="1" fill="#94a3b8"/>
    <rect x="7" y="11" width="2" height="2" fill="#94a3b8"/>
    <rect x="5" y="13" width="6" height="1" fill="#f6bf42"/>
  </svg>`,
  camera: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="5" y="3" width="6" height="2" fill="#94a3b8"/>
    <rect x="2" y="5" width="12" height="8" fill="#475569"/>
    <rect x="6" y="7" width="4" height="4" fill="#0f172a"/>
    <rect x="7" y="8" width="2" height="2" fill="#67d4ff"/>
    <rect x="11" y="6" width="2" height="1" fill="#f6bf42"/>
  </svg>`,
  plus: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="7" y="3" width="2" height="10" fill="#58ff9a"/>
    <rect x="3" y="7" width="10" height="2" fill="#58ff9a"/>
  </svg>`,
  ai: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="7" y="2" width="2" height="12" fill="#67d4ff"/>
    <rect x="2" y="7" width="12" height="2" fill="#67d4ff"/>
    <rect x="5" y="5" width="6" height="6" fill="#f6bf42"/>
    <rect x="7" y="7" width="2" height="2" fill="#fffbeb"/>
  </svg>`,
  arrowUp: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="7" y="2" width="2" height="11" fill="#fffbeb"/>
    <rect x="5" y="4" width="6" height="2" fill="#fffbeb"/><rect x="3" y="6" width="10" height="2" fill="#fffbeb"/>
  </svg>`,
  arrowDown: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="7" y="3" width="2" height="11" fill="#fffbeb"/>
    <rect x="3" y="8" width="10" height="2" fill="#fffbeb"/><rect x="5" y="10" width="6" height="2" fill="#fffbeb"/>
  </svg>`,
  arrowLeft: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="3" y="7" width="11" height="2" fill="#fffbeb"/>
    <rect x="5" y="5" width="2" height="6" fill="#fffbeb"/><rect x="7" y="3" width="2" height="10" fill="#fffbeb"/>
  </svg>`,
  arrowRight: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="2" y="7" width="11" height="2" fill="#fffbeb"/>
    <rect x="9" y="5" width="2" height="6" fill="#fffbeb"/><rect x="7" y="3" width="2" height="10" fill="#fffbeb"/>
  </svg>`,
  stop: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="4" y="4" width="8" height="8" fill="#fff1f2"/>
  </svg>`,
  spin: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="4" y="3" width="8" height="2" fill="#f6bf42"/><rect x="11" y="5" width="2" height="4" fill="#f6bf42"/>
    <rect x="4" y="11" width="8" height="2" fill="#67d4ff"/><rect x="3" y="7" width="2" height="4" fill="#67d4ff"/>
  </svg>`,
  lock: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="5" y="2" width="6" height="2" fill="#94a3b8"/>
    <rect x="4" y="4" width="2" height="3" fill="#94a3b8"/><rect x="10" y="4" width="2" height="3" fill="#94a3b8"/>
    <rect x="3" y="7" width="10" height="7" fill="#f6bf42"/>
    <rect x="7" y="9" width="2" height="3" fill="#0f172a"/>
  </svg>`,
  wifi: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="3" y="4" width="10" height="2" fill="#67d4ff"/>
    <rect x="5" y="7" width="6" height="2" fill="#67d4ff"/>
    <rect x="7" y="10" width="2" height="2" fill="#58ff9a"/>
  </svg>`,
  gear: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">
    <rect x="7" y="2" width="2" height="12" fill="#94a3b8"/>
    <rect x="2" y="7" width="12" height="2" fill="#94a3b8"/>
    <rect x="4" y="4" width="8" height="8" fill="#cbd5e1"/>
    <rect x="6" y="6" width="4" height="4" fill="#0f172a"/>
  </svg>`
};

function renderPixelIcons(root = document) {
  root.querySelectorAll('.px-ico[data-ico]').forEach(el => {
    const name = el.dataset.ico;
    if (CUSTOM_PNG_ICONS.includes(name)) {
      el.innerHTML = `<img src="using_pictures/icons/${name}.png" alt="${name}">`;
    } else if (PX_ICONS[name]) {
      el.innerHTML = PX_ICONS[name];
    }
  });
}

// ============================================================================
// DURUM, HESAP YONETIMI & KALICI DEPOLAMA
// ============================================================================
const STORAGE_KEY = 'walle_eva_universe_v3';
const SESSION_ROLE_KEY = 'walle_eva_active_role';

const DEFAULT_DATA = {
  sinceDate: '2025-05-14',
  lanUrl: 'http://walle.local',
  cloudDbUrl: '',
  quotaMb: 5,
  alertEmail: 'sudesenturk6507@gmail.com',
  alertWebhook: '',
  lastAlertSentPct: 0,
  selectedPinId: '',
  robotState: {
    lcd1: '   WALLE & EVA  ',
    lcd2: '  SISTEM AKTIF  ',
    batPct: 78,
    vol: 85,
    speed: 210,
    dance: true,
    playingSong: '01. La Vie En Rose.mp3'
  },
  pins: [],
  notes: [
    {
      id: 'n1',
      author: 'BARAN',
      date: '20.11.2026',
      text: 'Bu kucuk robot masanda durdukca aklim hep sende olacak. Seni cok seviyorum EVA.'
    },
    {
      id: 'n2',
      author: 'SUDE',
      date: '21.11.2026',
      text: 'Birlikte gececegimiz yeni sehirleri haritaya tek tek isaretleyecegiz.'
    }
  ],
  voices: [],
  songs: [
    '01. Put On Your Sunday Clothes.mp3',
    '02. La Vie En Rose.mp3',
    '03. Define Dancing.wav'
  ]
};

let appState = loadState();
let activeRole = sessionStorage.getItem(SESSION_ROLE_KEY) || '';
let selectedLoginTab = 'walle';
let mapObj = null;
let leafletMarkers = [];
let tempSearchMarker = null;
let pendingPhotos = [];
let mediaRec = null;
let recChunks = [];
let isRecording = false;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_DATA);
    const parsed = JSON.parse(raw);
    return { ...structuredClone(DEFAULT_DATA), ...parsed };
  } catch (e) {
    return structuredClone(DEFAULT_DATA);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    showToast('DEPOLAMA SINIRI DOLDU!');
  }
  updateStorageMeter();
  syncCloudOptional();
}

// ============================================================================
// 2 HESAPLI GIRIS & AYRI ARAYUZ YONETIMI (brn123 = WALL-E | Always = EVA)
// ============================================================================
function selectLoginAccount(role) {
  selectedLoginTab = role;
  document.getElementById('pickWalleBtn').classList.toggle('selected', role === 'walle');
  document.getElementById('pickEvaBtn').classList.toggle('selected', role === 'eva');
  document.getElementById('loginErr').style.display = 'none';
}

function attemptLogin() {
  const pw = document.getElementById('loginPass').value.trim();
  const errEl = document.getElementById('loginErr');
  let matched = null;

  if (pw === ACCOUNTS.walle.pass) matched = 'walle';
  else if (pw === ACCOUNTS.eva.pass) matched = 'eva';

  if (!matched) {
    errEl.style.display = 'block';
    playRetroBeep('suprise');
    return;
  }

  errEl.style.display = 'none';
  document.getElementById('loginPass').value = '';
  applyAccountUI(matched);
  switchTab('map');
}

function applyAccountUI(role) {
  activeRole = role;
  sessionStorage.setItem(SESSION_ROLE_KEY, role);
  const acc = ACCOUNTS[role];

  document.body.classList.remove('locked', 'role-walle', 'role-eva');
  document.body.classList.add('role-' + role);

  const ico = document.getElementById('hudRoleIcon');
  ico.dataset.ico = role;
  renderPixelIcons(ico.parentElement);

  document.getElementById('hudBadgeChip').textContent = acc.badge;
  document.getElementById('hudHeroTitle').textContent = role === 'eva' ? 'EVA // SUDE EVRENI' : 'WALL-E // BARAN EVRENI';
  updateRelationshipTimer();

  // Hesaba gore Notlar sekmesini otomatik ayir
  const notesRow = document.querySelector('#view-notes .two-col');
  const voicePanel = document.getElementById('notesVoicePanel');
  const composePanel = document.getElementById('notesComposePanel');
  if (role === 'eva') {
    notesRow.prepend(voicePanel);
    document.getElementById('voicePanelTitle').textContent = 'BARAN -> EVA GELEN KUTUSU';
    document.getElementById('composePanelTitle').textContent = "WALL-E'YE MESAJ GONDER";
    document.getElementById('noteComposeHeading').textContent = 'EVA IMZALI ASK NOTU BIRAK';
    document.getElementById('pinTypeInput').value = 'dream';
  } else {
    notesRow.prepend(composePanel);
    document.getElementById('voicePanelTitle').textContent = 'EVA SESLI KAPSUL & DUVAR';
    document.getElementById('composePanelTitle').textContent = "EVA'YA SURPRIZ & LCD FISILTI";
    document.getElementById('noteComposeHeading').textContent = 'WALL-E IMZALI ASK NOTU BIRAK';
    document.getElementById('pinTypeInput').value = 'visited';
    if (document.getElementById('view-settings').classList.contains('active')) switchTab('map');
  }

  if (mapObj) setTimeout(() => mapObj.invalidateSize(), 120);
  playRetroBeep(role === 'eva' ? 'eva' : 'startup');
}

function logoutAccount() {
  activeRole = '';
  sessionStorage.removeItem(SESSION_ROLE_KEY);
  document.body.classList.remove('role-walle', 'role-eva', 'scene-only');
  document.body.classList.add('locked');
}

// ============================================================================
// DEPOLAMA TAKIBI & sudesenturk6507@gmail.com UYARI SISTEMI
// ============================================================================
function getStorageUsage() {
  const bytes = new Blob([JSON.stringify(appState)]).size;
  const maxMb = Math.max(1, Number(appState.quotaMb) || 5);
  const maxBytes = maxMb * 1024 * 1024;
  const pct = Math.min(100, Math.round((bytes / maxBytes) * 100));
  return { bytes, kb: (bytes / 1024).toFixed(1), mb: (bytes / (1024 * 1024)).toFixed(2), maxMb, pct };
}

function updateStorageMeter() {
  const st = getStorageUsage();
  const label = st.maxMb <= 5 ? `${st.kb} KB / ${st.maxMb} MB (%${st.pct})` : `${st.mb} MB / ${st.maxMb} MB (%${st.pct})`;
  document.getElementById('storageStats').textContent = label;
  document.getElementById('hudStorageChip').textContent = `DEP %${st.pct}`;

  const bar = document.getElementById('storageBar');
  if (bar) {
    bar.innerHTML = '';
    const on = Math.round(st.pct / 10);
    for (let i = 0; i < 10; i++) {
      const seg = document.createElement('div');
      seg.className = 'px-seg' + (i < on ? (st.pct >= 80 ? ' warn' : ' on') : '');
      bar.appendChild(seg);
    }
  }

  const banner = document.getElementById('storageAlertBanner');
  if (st.pct >= 80) {
    banner.classList.add('show');
    banner.innerHTML = `UYARI: Depolama <b>%${st.pct}</b> doldu! Hedef adres: <b>${escapeHtml(appState.alertEmail || 'sudesenturk6507@gmail.com')}</b>`;
    if (appState.lastAlertSentPct < 80) {
      appState.lastAlertSentPct = st.pct;
      sendStorageEmailAlert(false);
    }
  } else {
    banner.classList.remove('show');
  }
}

async function sendStorageEmailAlert(manualClick) {
  const st = getStorageUsage();
  const email = (appState.alertEmail || 'sudesenturk6507@gmail.com').trim();
  const webhook = (appState.alertWebhook || '').trim();
  const subj = `WALL-E & EVA Depolama Uyarisi: %${st.pct} Dolu`;
  const msg = `Merhaba, WALL-E & EVA anilar ve fotograf web sitesinde depolama alani %${st.pct} seviyesine ulasti (${st.kb} KB / ${st.maxMb} MB).`;

  if (webhook.startsWith('https://')) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ to: email, email, subject: subj, message: msg, percent: st.pct })
      });
      if (res.ok) {
        showToast(`${email} ADRESINE DEPOLAMA BILDIRIMI GONDERILDI (%${st.pct})`);
        return;
      }
    } catch (e) {}
  }

  if (manualClick) {
    window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(msg)}`;
    showToast(`E-POSTA TASLAGI HAZIRLANDI -> ${email}`);
  } else {
    showToast(`DEPOLAMA %${st.pct} DOLDU - ${email} UYARISI HAZIR`);
  }
}

function showToast(msg) {
  const el = document.getElementById('toastEl');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(window._pxToastT);
  window._pxToastT = setTimeout(() => el.classList.remove('show'), 2800);
}

function playRetroBeep(kind) {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    if (!window._ac) window._ac = new AC();
    const ctx = window._ac;
    const now = ctx.currentTime;
    const seqs = {
      eva: [[660, 0.09], [880, 0.14]],
      walle: [[440, 0.08], [392, 0.08], [523, 0.12]],
      happy: [[523, 0.07], [659, 0.07], [784, 0.09], [1046, 0.14]],
      tada: [[523, 0.08], [659, 0.08], [784, 0.08], [1046, 0.22]],
      suprise: [[400, 0.06], [920, 0.14]],
      startup: [[330, 0.07], [440, 0.07], [660, 0.12]]
    };
    const notes = seqs[kind] || [[580, 0.08]];
    let t = now;
    notes.forEach(([freq, dur]) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.045, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + dur);
      t += dur + 0.02;
    });
  } catch (e) {}
}

// ============================================================================
// UST HUD & SAYAC & LCD SENKRONU
// ============================================================================
function updateRelationshipTimer() {
  const start = new Date((appState.sinceDate || '2025-05-14') + 'T00:00:00');
  const diffMs = Math.max(0, Date.now() - start.getTime());
  const days = Math.floor(diffMs / 86400000);
  const hours = Math.floor((diffMs % 86400000) / 3600000);
  const op = activeRole ? ACCOUNTS[activeRole].operator : 'WALL-E & EVA';
  document.getElementById('sinceLabel').textContent = `${op} // BIRLIKTE: ${days} GUN ${hours} SAAT`;
}

function updateHudLcd(l1, l2) {
  const a = (l1 || '').toUpperCase().slice(0, 16).padEnd(16, ' ');
  const b = (l2 || '').toUpperCase().slice(0, 16).padEnd(16, ' ');
  appState.robotState.lcd1 = a;
  appState.robotState.lcd2 = b;
  document.getElementById('hudLcd').textContent = `${a.trim()} | ${b.trim()}`;
  const r1 = document.getElementById('bigLcd1');
  const r2 = document.getElementById('bigLcd2');
  if (r1 && r2) { r1.textContent = a; r2.textContent = b; }
}

function renderMeters() {
  const pct = appState.robotState.batPct || 78;
  document.getElementById('hudBat').textContent = `%${pct}`;
  const solarBox = document.getElementById('remoteSolarMeter');
  if (solarBox) {
    solarBox.innerHTML = '';
    const on = Math.round(pct / 10);
    for (let i = 0; i < 10; i++) {
      const s = document.createElement('div');
      s.className = 'px-seg' + (i < on ? ' on' : '');
      solarBox.appendChild(s);
    }
  }
}

function switchTab(tabId) {
  if (tabId === 'settings' && activeRole !== 'eva') {
    tabId = 'map';
  }
  document.querySelectorAll('.tab-view').forEach(v => v.classList.toggle('active', v.id === 'view-' + tabId));
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tabId));
  if (tabId === 'map' && mapObj) {
    setTimeout(() => mapObj.invalidateSize(), 120);
  }
}

function toggleSceneOnly() {
  document.body.classList.toggle('scene-only');
}

// ============================================================================
// RENKLI YAKLASABILEN DUNYA HARITASI + SEHIR ARAMA + ANINDA FOTO/NOT EKLEME
// ============================================================================
function createPixelMarkerIcon(type) {
  const svg = type === 'visited' ? PX_ICONS.pinGold : PX_ICONS.pinCyan;
  return L.divIcon({
    className: 'px-map-pin',
    html: `<div style="width:28px;height:28px;filter:drop-shadow(2px 2px 0 #02050e);">${svg}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 26]
  });
}

function buildPinPopupHtml(pin) {
  const pCount = (pin.photos && pin.photos.length) ? pin.photos.length : 0;
  return `
    <div style="min-width:190px;font-family:'Pixelify Sans',monospace;">
      <div style="color:#f6bf42;font-weight:700;font-size:14px;">${escapeHtml(pin.city)} (${escapeHtml(pin.country)})</div>
      <div style="color:#67d4ff;font-size:11px;margin:2px 0 6px;">${escapeHtml(pin.date)} // ${pCount} FOTOGRAF</div>
      <div style="font-size:12px;line-height:1.4;margin-bottom:8px;">${escapeHtml(pin.note)}</div>
      <button class="px-btn gold sm" style="width:100%;" onclick="focusPinAndUpload('${pin.id}')">FOTOGRAF / NOT EKLE</button>
    </div>
  `;
}

function focusPinAndUpload(id) {
  selectPin(id);
  openEditNoteModal();
}

function initMap() {
  const container = document.getElementById('worldMap');
  if (typeof L !== 'undefined') {
    mapObj = L.map('worldMap', {
      center: [43.0, 22.0],
      zoom: 3,
      minZoom: 2,
      maxZoom: 18,
      zoomControl: true,
      scrollWheelZoom: true,
      touchZoom: true,
      attributionControl: false
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18
    }).addTo(mapObj);
    L.control.attribution({ prefix: false }).addAttribution('OSM // WALL-E MAP').addTo(mapObj);

    mapObj.on('click', (e) => handleMapSurfaceClick(e.latlng));
    renderMapMarkers();
  } else {
    renderOfflinePixelMap(container);
  }
}

async function handleMapSurfaceClick(latlng) {
  const { lat, lng } = latlng;
  // Yakinda kayitli pin var mi kontrol et (yaklasik ~25km)
  const existing = appState.pins.find(p => Math.hypot(p.lat - lat, p.lng - lng) < 0.28);
  if (existing) {
    selectPin(existing.id);
    return;
  }

  let cityLabel = 'SECILEN KONUM';
  let countryLabel = 'DUNYA';
  try {
    const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=tr`);
    if (r.ok) {
      const d = await r.json();
      const ad = d.address || {};
      cityLabel = (ad.city || ad.town || ad.province || ad.state || ad.village || 'YENI SEHIR').toUpperCase();
      countryLabel = (ad.country || 'DUNYA').toUpperCase();
    }
  } catch (e) {}

  showTempCityPopup(lat, lng, cityLabel, countryLabel);
}

function showTempCityPopup(lat, lng, cityName, countryName) {
  if (!mapObj || typeof L === 'undefined') {
    openAddPinModal(lat, lng, cityName, countryName);
    return;
  }
  if (tempSearchMarker) mapObj.removeLayer(tempSearchMarker);
  tempSearchMarker = L.marker([lat, lng], { icon: createPixelMarkerIcon('dream') }).addTo(mapObj);

  const safeCity = escapeHtml(cityName);
  const safeCountry = escapeHtml(countryName);
  tempSearchMarker.bindPopup(`
    <div style="min-width:195px;font-family:'Pixelify Sans',monospace;">
      <div style="color:#67d4ff;font-weight:700;font-size:14px;">${safeCity} (${safeCountry})</div>
      <div style="font-size:12px;margin:4px 0 8px;">Bu sehirde henuz kayitli ani yok. Hemen ekleyebilirsiniz.</div>
      <button class="px-btn green sm" style="width:100%;" onclick="openPrefilledPinModal(${lat}, ${lng}, '${encodeURIComponent(cityName)}', '${encodeURIComponent(countryName)}')">BURAYA FOTOGRAF &amp; NOT EKLE</button>
    </div>
  `).openPopup();
}

function openPrefilledPinModal(lat, lng, encCity, encCountry) {
  openAddPinModal(lat, lng, decodeURIComponent(encCity), decodeURIComponent(encCountry));
}

async function searchCity() {
  const q = document.getElementById('citySearchInput').value.trim();
  const resBox = document.getElementById('citySearchResults');
  if (!q) { resBox.classList.remove('open'); return; }

  resBox.innerHTML = '<div class="search-item">ARANIYOR...</div>';
  resBox.classList.add('open');

  // Once kayitli pinler icinde ara
  const qLow = q.toLowerCase();
  const localMatches = appState.pins.filter(p => p.city.toLowerCase().includes(qLow) || p.country.toLowerCase().includes(qLow));
  let itemsHtml = '';

  localMatches.forEach(p => {
    itemsHtml += `<button class="search-item" onclick="jumpToExistingPin('${p.id}')">[KAYITLI ANI] ${escapeHtml(p.city)} - ${escapeHtml(p.country)}</button>`;
  });

  try {
    const r = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&accept-language=tr&q=${encodeURIComponent(q)}`);
    if (r.ok) {
      const list = await r.json();
      list.forEach(loc => {
        const shortName = (loc.name || loc.display_name.split(',')[0] || q).toUpperCase();
        const parts = loc.display_name.split(',');
        const country = (parts[parts.length - 1] || 'DUNYA').trim().toUpperCase();
        itemsHtml += `<button class="search-item" onclick="jumpToSearchResult(${loc.lat}, ${loc.lon}, '${encodeURIComponent(shortName)}', '${encodeURIComponent(country)}')">${escapeHtml(loc.display_name)}</button>`;
      });
    }
  } catch (e) {}

  resBox.innerHTML = itemsHtml || '<div class="search-item">SONUC BULUNAMADI</div>';
}

function jumpToExistingPin(id) {
  document.getElementById('citySearchResults').classList.remove('open');
  selectPin(id);
  const pin = appState.pins.find(p => p.id === id);
  if (pin && mapObj) mapObj.flyTo([pin.lat, pin.lng], 11, { duration: 0.9 });
}

function jumpToSearchResult(lat, lng, encCity, encCountry) {
  document.getElementById('citySearchResults').classList.remove('open');
  const city = decodeURIComponent(encCity);
  const country = decodeURIComponent(encCountry);

  // Bu sehirde zaten pin var mi?
  const existing = appState.pins.find(p =>
    p.city.toLowerCase() === city.toLowerCase() || Math.hypot(p.lat - lat, p.lng - lng) < 0.25
  );
  if (existing) {
    jumpToExistingPin(existing.id);
    showToast(`${existing.city} ANILARI ACILDI`);
    return;
  }

  if (mapObj) mapObj.flyTo([lat, lng], 11, { duration: 0.9 });
  showTempCityPopup(lat, lng, city, country);
}

function renderMapMarkers() {
  if (!mapObj || typeof L === 'undefined') {
    renderOfflinePixelMap(document.getElementById('worldMap'));
    return;
  }
  leafletMarkers.forEach(m => mapObj.removeLayer(m));
  leafletMarkers = [];

  appState.pins.forEach(pin => {
    const m = L.marker([pin.lat, pin.lng], { icon: createPixelMarkerIcon(pin.type) }).addTo(mapObj);
    m.bindPopup(buildPinPopupHtml(pin));
    m.on('click', () => selectPin(pin.id));
    leafletMarkers.push(m);
  });
}

function renderOfflinePixelMap(container) {
  container.innerHTML = `<div class="offline-map" id="offlineMapCanvas">
    <svg viewBox="0 0 360 180" style="width:100%;height:100%;opacity:0.5;" shape-rendering="crispEdges">
      <rect x="42" y="28" width="56" height="44" fill="#1e40af"/>
      <rect x="86" y="82" width="32" height="58" fill="#1d4ed8"/>
      <rect x="168" y="26" width="44" height="28" fill="#16a34a"/>
      <rect x="172" y="56" width="38" height="62" fill="#1e40af"/>
      <rect x="212" y="24" width="96" height="56" fill="#2563eb"/>
      <rect x="275" y="106" width="42" height="28" fill="#16a34a"/>
    </svg>
  </div>`;
  const box = container.querySelector('#offlineMapCanvas');
  appState.pins.forEach(pin => {
    const xPct = ((pin.lng + 180) / 360) * 100;
    const yPct = ((90 - pin.lat) / 180) * 100;
    const btn = document.createElement('button');
    btn.style.cssText = `position:absolute;left:${xPct}%;top:${yPct}%;transform:translate(-50%,-90%);background:none;border:none;cursor:pointer;width:26px;height:26px;padding:0;`;
    btn.title = pin.city;
    btn.innerHTML = pin.type === 'visited' ? PX_ICONS.pinGold : PX_ICONS.pinCyan;
    btn.onclick = () => selectPin(pin.id);
    box.appendChild(btn);
  });
}

function renderPinPillsAndDetail() {
  const pillBox = document.getElementById('pinPillList');
  pillBox.innerHTML = '';
  const pGrid = document.getElementById('memPhotos');
  pGrid.innerHTML = '';

  if (!appState.pins.length) {
    appState.selectedPinId = '';
    pillBox.innerHTML = '<div style="font-size:12px;color:var(--text-dim);">HENUZ KAYITLI SEHIR YOK — YUKARIDAN SEHIR ARA VEYA HARITADA BIR YERE TIKLA.</div>';
    document.getElementById('memCity').textContent = 'HENUZ ANI YOK';
    document.getElementById('memCountry').textContent = 'DUNYA // BOS HARITA';
    document.getElementById('memBadge').textContent = 'HAZIR';
    document.getElementById('memNote').textContent = 'Yukaridaki arama cubugundan bir sehir arayabilir veya haritadan istedigin yere tiklayip ilk fotografini ekleyebilirsin.';
    return;
  }

  appState.pins.forEach(pin => {
    const b = document.createElement('button');
    b.className = `pin-pill ${pin.type === 'visited' ? 'walle' : 'eva'} ${pin.id === appState.selectedPinId ? 'active' : ''}`;
    b.textContent = pin.city;
    b.onclick = () => {
      selectPin(pin.id);
      if (mapObj) mapObj.flyTo([pin.lat, pin.lng], 10, { duration: 0.7 });
    };
    pillBox.appendChild(b);
  });

  const pin = appState.pins.find(p => p.id === appState.selectedPinId) || appState.pins[0];
  appState.selectedPinId = pin.id;

  document.getElementById('memCity').textContent = pin.city;
  document.getElementById('memCountry').textContent = `${pin.country} // ${pin.date}`;
  document.getElementById('memBadge').textContent = pin.type === 'visited' ? 'GIDILDI [WALL-E]' : 'HEDEF [EVA]';
  document.getElementById('memNote').textContent = pin.note;

  if (!pin.photos || pin.photos.length === 0) {
    const empty = document.createElement('div');
    empty.style.cssText = 'grid-column:1/-1;font-size:12px;color:var(--text-dim);padding:7px;border:1px dashed rgba(103,212,255,0.45);';
    empty.textContent = 'HENUZ FOTOGRAF YOK - ASAGIDAKI FOTO EKLE BUTONUNDAN EKLEYEBILIRSIN.';
    pGrid.appendChild(empty);
  } else {
    pin.photos.forEach((src, idx) => {
      const w = document.createElement('div');
      w.className = 'mem-photo-wrap';
      w.innerHTML = `<img src="${src}" alt="${pin.city} ${idx + 1}">`;
      w.onclick = () => openPhotoLightbox(src, `${pin.city} // ${pin.date}`);
      pGrid.appendChild(w);
    });
  }
}

function selectPin(id) {
  appState.selectedPinId = id;
  saveState();
  renderPinPillsAndDetail();
}

function openAddPinModal(lat = 39.92, lng = 32.85, cityPre = '', countryPre = '') {
  pendingPhotos = [];
  document.getElementById('pinLatInput').value = Number(lat).toFixed(4);
  document.getElementById('pinLngInput').value = Number(lng).toFixed(4);
  document.getElementById('pinCityInput').value = cityPre;
  document.getElementById('pinCountryInput').value = countryPre;
  document.getElementById('pinDateInput').value = '';
  document.getElementById('pinNoteInput').value = '';
  document.getElementById('pinPhotoPreview').textContent = '0 FOTOGRAF SECILDI';
  document.getElementById('addPinModal').classList.add('open');
}

function openEditNoteModal() {
  const pin = appState.pins.find(p => p.id === appState.selectedPinId);
  if (!pin) { showToast('ONCE HARITADAN BIR SEHIR EKLEYIN'); return; }
  document.getElementById('editPinNoteArea').value = pin.note;
  document.getElementById('editNoteModal').classList.add('open');
}

function saveEditedPinNote() {
  const pin = appState.pins.find(p => p.id === appState.selectedPinId);
  if (!pin) return;
  pin.note = document.getElementById('editPinNoteArea').value.trim() || pin.note;
  saveState();
  renderMapMarkers();
  renderPinPillsAndDetail();
  closeModal('editNoteModal');
  showToast('ANI NOTU GUNCELLENDI');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

function compressImageFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const maxDim = 760;
        let w = img.width, h = img.height;
        if (w > maxDim || h > maxDim) {
          if (w > h) { h = Math.round(h * maxDim / w); w = maxDim; }
          else       { w = Math.round(w * maxDim / h); h = maxDim; }
        }
        const cv = document.createElement('canvas');
        cv.width = w; cv.height = h;
        cv.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(cv.toDataURL('image/jpeg', 0.78));
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });
}

async function handlePhotoUpload(files, addToCurrentPin = false) {
  const arr = Array.from(files).slice(0, 3);
  const compressed = [];
  for (const f of arr) compressed.push(await compressImageFile(f));

  if (addToCurrentPin) {
    const pin = appState.pins.find(p => p.id === appState.selectedPinId);
    if (!pin) {
      showToast('ONCE HARITADAN BIR SEHIR EKLEYIN');
      return;
    }
    pin.photos = [...(pin.photos || []), ...compressed].slice(0, 6);
    saveState();
    renderMapMarkers();
    renderPinPillsAndDetail();
    showToast('FOTOGRAFLAR ANIYA EKLENDI');
  } else {
    pendingPhotos = compressed;
    document.getElementById('pinPhotoPreview').textContent = `${pendingPhotos.length} FOTOGRAF HAZIR`;
  }
}

function saveNewPin() {
  const city = document.getElementById('pinCityInput').value.trim().toUpperCase();
  if (!city) { showToast('SEHIR ADI GIRIN'); return; }
  const pin = {
    id: 'pin_' + Date.now(),
    city,
    country: (document.getElementById('pinCountryInput').value.trim() || 'DUNYA').toUpperCase(),
    lat: parseFloat(document.getElementById('pinLatInput').value) || 41.0,
    lng: parseFloat(document.getElementById('pinLngInput').value) || 29.0,
    type: document.getElementById('pinTypeInput').value,
    date: (document.getElementById('pinDateInput').value.trim() || 'YENI ANI').toUpperCase(),
    note: document.getElementById('pinNoteInput').value.trim() || 'Birlikte guzel bir ani.',
    photos: pendingPhotos
  };
  if (tempSearchMarker && mapObj) {
    mapObj.removeLayer(tempSearchMarker);
    tempSearchMarker = null;
  }
  appState.pins.push(pin);
  appState.selectedPinId = pin.id;
  saveState();
  renderMapMarkers();
  renderPinPillsAndDetail();
  if (mapObj) mapObj.flyTo([pin.lat, pin.lng], 10);
  closeModal('addPinModal');
  showToast(`${pin.city} HARITAYA EKLENDI`);
}

function deleteSelectedPin() {
  if (!appState.pins.length) { showToast('SILINECEK PIN YOK'); return; }
  appState.pins = appState.pins.filter(p => p.id !== appState.selectedPinId);
  appState.selectedPinId = appState.pins.length ? appState.pins[0].id : '';
  saveState();
  renderMapMarkers();
  renderPinPillsAndDetail();
  showToast('SECILI PIN SILINDI');
}

function sendCurrentPinToLcd() {
  const pin = appState.pins.find(p => p.id === appState.selectedPinId);
  if (!pin) { showToast('ONCE HARITADAN BIR SEHIR EKLEYIN'); return; }
  updateHudLcd(pin.city, pin.note.slice(0, 16));
  sendRobotAction('lcd', { l1: pin.city, l2: pin.note.slice(0, 16) });
  playRetroBeep('happy');
  showToast(`GOGUS EKRANINA YANSITILDI: ${pin.city}`);
}

function openPhotoLightbox(src, title) {
  document.getElementById('photoBoxImg').src = src;
  document.getElementById('photoBoxCap').textContent = title;
  document.getElementById('photoModal').classList.add('open');
}

// ============================================================================
// ASK NOTLARI, LCD FISILTI & SESLI KAPSUL
// ============================================================================
function renderNotes() {
  const wall = document.getElementById('notesWall');
  wall.innerHTML = '';
  appState.notes.slice().reverse().forEach(n => {
    const card = document.createElement('div');
    card.className = `note-item ${n.author === 'BARAN' ? 'from-baran' : 'from-sude'}`;
    card.innerHTML = `
      <div class="note-head">
        <span>${n.author}</span>
        <span>${n.date}</span>
      </div>
      <div class="note-body">${escapeHtml(n.text)}</div>
    `;
    wall.appendChild(card);
  });
}

function addLoveNote() {
  const text = document.getElementById('newNoteInput').value.trim();
  if (!text) return;
  const author = activeRole ? ACCOUNTS[activeRole].author : 'BARAN';
  const d = new Date();
  const dateStr = `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`;
  appState.notes.push({ id: 'n_' + Date.now(), author, date: dateStr, text });
  document.getElementById('newNoteInput').value = '';
  saveState();
  renderNotes();
  playRetroBeep('eva');
  showToast(`${author} IMZALI ASK NOTU EKLENDI`);
}

function previewLcdMsg(val) {
  const clean = (val || '').toUpperCase().replace(/[^A-Z0-9 .,!?:-]/g, ' ');
  document.getElementById('whisperL1').textContent = clean.slice(0, 16).padEnd(16, ' ');
  document.getElementById('whisperL2').textContent = clean.slice(16, 32).padEnd(16, ' ');
}

function sendWhisperToWalle() {
  const val = document.getElementById('lcdWhisperInput').value.trim();
  if (!val) { showToast('MESAJ YAZIN'); return; }
  const clean = val.toUpperCase();
  updateHudLcd(clean.slice(0, 16), clean.slice(16, 32) || 'HEDEF >> EVA');
  sendRobotAction('sfx', { n: 'eva' });
  sendRobotAction('ask', { q: val });
  playRetroBeep('eva');
  showToast('MESAJ WALL-E GOGUS EKRANINA GONDERILDI');
}

function renderVoices() {
  const box = document.getElementById('voiceList');
  box.innerHTML = '';
  if (!appState.voices.length) {
    box.innerHTML = '<div style="font-size:12px;color:var(--text-dim);">HENUZ KAYITLI SES MESAJI YOK.</div>';
    return;
  }
  appState.voices.slice().reverse().forEach(v => {
    const item = document.createElement('div');
    item.className = 'voice-item';
    item.innerHTML = `<div class="note-head"><span>${v.sender}</span><span>${v.date}</span></div>`;
    const au = document.createElement('audio');
    au.controls = true;
    au.src = v.dataUrl;
    item.appendChild(au);
    box.appendChild(item);
  });
}

async function toggleVoiceRecord() {
  const btn = document.getElementById('recVoiceBtn');
  if (isRecording && mediaRec) {
    mediaRec.stop();
    isRecording = false;
    btn.textContent = 'TARAYICIDAN SES KAYDET';
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recChunks = [];
    mediaRec = new MediaRecorder(stream);
    mediaRec.ondataavailable = (e) => { if (e.data.size > 0) recChunks.push(e.data); };
    mediaRec.onstop = () => {
      stream.getTracks().forEach(t => t.stop());
      const blob = new Blob(recChunks, { type: 'audio/webm' });
      const rd = new FileReader();
      rd.onload = () => {
        const d = new Date();
        appState.voices.push({
          sender: activeRole ? ACCOUNTS[activeRole].author : 'BARAN',
          date: `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`,
          dataUrl: rd.result
        });
        saveState();
        renderVoices();
        showToast('SESLI MESAJ EVA KUTUSUNA EKLENDI');
      };
      rd.readAsDataURL(blob);
    };
    mediaRec.start();
    isRecording = true;
    btn.textContent = 'KAYIT DURDUR [BITIR]';
    showToast('KONUSUNUZ - KAYIT BASLADI');
  } catch (err) {
    showToast('MIKROFON IZNI VERILMEDI');
  }
}

// ============================================================================
// ROBOT KOPRUSU & KUMANDA
// ============================================================================
async function sendRobotAction(endpoint, params = {}) {
  const qs = new URLSearchParams(params).toString();
  const base = (appState.lanUrl || '').replace(/\/$/, '');

  if (base && location.protocol === 'http:' && !base.includes('127.0.0.1')) {
    try {
      const r = await fetch(`${base}/api/${endpoint}${qs ? '?' + qs : ''}`);
      return await r.json();
    } catch (e) {}
  }

  if (appState.cloudDbUrl && appState.cloudDbUrl.startsWith('https://')) {
    try {
      const dbBase = appState.cloudDbUrl.replace(/\/$/, '');
      await fetch(`${dbBase}/walle_cmd.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ endpoint, params, ts: Date.now() })
      });
    } catch (e) {}
  }
  return null;
}

function triggerEvaSurprise() {
  updateHudLcd('MESAJ GONDERIYOR', 'HEDEF >>> EVA');
  playRetroBeep('tada');
  sendRobotAction('listen', { mode: 'eva' });
  showToast('EVA SURPRIZI TETIKLENDI [360 DONUS + SES]');
}

function triggerSfx(name) {
  playRetroBeep(name);
  updateHudLcd('WALL-E SES', `EFEKT: ${name.toUpperCase()}`);
  sendRobotAction('sfx', { n: name });
  showToast(`SES EFEKTI: ${name.toUpperCase()}`);
}

function sendDrive(cmd) {
  const labels = {
    fwd: 'PALET: ILERI', back: 'PALET: GERI', left: 'PALET: SOL',
    right: 'PALET: SAG', stop: 'PALET: DUR', spin: '360 DERECE DON'
  };
  updateHudLcd('KUMANDA AKTIF', labels[cmd] || 'HAZIR');
  if (cmd === 'spin') playRetroBeep('tada');
  sendRobotAction('drive', { cmd });
}

function sendSpeed(val) {
  appState.robotState.speed = Number(val);
  document.getElementById('pwmOut').textContent = val;
  sendRobotAction('drive', { cmd: 'speed', val });
}

function sendVol(val) {
  appState.robotState.vol = Number(val);
  document.getElementById('volOut').textContent = val;
  sendRobotAction('volume', { val });
}

function triggerMusic(cmd) {
  const s = appState.songs;
  let idx = 0;
  if (cmd === 'next') idx = 1;
  else if (cmd === 'rand') idx = Math.floor(Math.random() * s.length);
  const track = s[idx % s.length];
  appState.robotState.playingSong = track;
  document.getElementById('remoteSongLbl').textContent = track;
  updateHudLcd('MUZIK CALIYOR', track.slice(0, 16));
  playRetroBeep('happy');
  sendRobotAction('play_song', { cmd });
  showToast(`MUZIK: ${track}`);
}

function toggleDance() {
  appState.robotState.dance = !appState.robotState.dance;
  document.getElementById('danceToggleBtn').textContent =
    appState.robotState.dance ? 'SARKIDA DANS: ACIK' : 'SARKIDA DANS: KAPALI';
  sendRobotAction('dance');
}

function sendRemoteAi() {
  const q = document.getElementById('remoteAiInput').value.trim();
  if (!q) return;
  document.getElementById('remoteAiOut').textContent = '> WALLE ARASTIRIYOR...';
  updateHudLcd('WALLE DINLIYOR', 'ARASTIRIYOR...');
  sendRobotAction('ask', { q }).then((res) => {
    const ans = (res && res.answer) ? res.answer : `("${q.slice(0, 22)}") Baran & EVA icin hep hazirim!`;
    document.getElementById('remoteAiOut').textContent = '> ' + ans;
    updateHudLcd('BULUNAN CEVAP>>>', ans.slice(0, 16));
    playRetroBeep('happy');
  });
}

function openDirectLanRemote() {
  const url = document.getElementById('cfgLanUrl').value.trim() || 'http://walle.local';
  window.open(url, '_blank');
}

function saveBridgeSettings() {
  appState.sinceDate = document.getElementById('cfgSince').value || '2025-05-14';
  appState.lanUrl = document.getElementById('cfgLanUrl').value.trim() || 'http://walle.local';
  appState.cloudDbUrl = document.getElementById('cfgCloudUrl').value.trim();
  appState.quotaMb = Number(document.getElementById('cfgQuotaMb').value) || 5;
  appState.alertEmail = document.getElementById('cfgAlertEmail').value.trim() || 'sudesenturk6507@gmail.com';
  appState.alertWebhook = document.getElementById('cfgAlertWebhook').value.trim();
  saveState();
  updateRelationshipTimer();
  showToast('SITE & DEPOLAMA AYARLARI KAYDEDILDI');
}

async function syncCloudOptional() {
  if (!appState.cloudDbUrl || !appState.cloudDbUrl.startsWith('https://')) return;
  try {
    const dbBase = appState.cloudDbUrl.replace(/\/$/, '');
    await fetch(`${dbBase}/walle_universe.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sinceDate: appState.sinceDate,
        pins: appState.pins,
        notes: appState.notes,
        updatedAt: Date.now()
      })
    });
  } catch (e) {}
}

function exportJsonBackup() {
  const blob = new Blob([JSON.stringify(appState, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'walle_eva_anilar_yedek.json';
  a.click();
  showToast('TUM ANILAR JSON OLARAK INDIRILDI');
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ============================================================================
// BASLANGIC
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderPixelIcons();
  updateRelationshipTimer();
  setInterval(updateRelationshipTimer, 60000);
  renderMeters();
  updateStorageMeter();
  updateHudLcd(appState.robotState.lcd1, appState.robotState.lcd2);
  renderPinPillsAndDetail();
  renderNotes();
  renderVoices();
  initMap();

  document.getElementById('cfgSince').value = appState.sinceDate;
  document.getElementById('cfgLanUrl').value = appState.lanUrl;
  document.getElementById('cfgCloudUrl').value = appState.cloudDbUrl || '';
  document.getElementById('cfgQuotaMb').value = String(appState.quotaMb || 5);
  document.getElementById('cfgAlertEmail').value = appState.alertEmail || 'sudesenturk6507@gmail.com';
  document.getElementById('cfgAlertWebhook').value = appState.alertWebhook || '';
  document.getElementById('remoteSongLbl').textContent = appState.robotState.playingSong;
  document.getElementById('pwmOut').textContent = appState.robotState.speed;
  document.getElementById('spdRange').value = appState.robotState.speed;
  document.getElementById('volOut').textContent = appState.robotState.vol;
  document.getElementById('volRange').value = appState.robotState.vol;
  previewLcdMsg('SENI SEVIYORUM  KALP EVA');

  // Sehir arama listesini disari tiklayinca veya ESC ile kapat
  document.addEventListener('click', (e) => {
    const res = document.getElementById('citySearchResults');
    if (res && !e.target.closest('.search-bar-wrap')) res.classList.remove('open');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const res = document.getElementById('citySearchResults');
      if (res) res.classList.remove('open');
    }
  });

  // Oturum zaten aciksa doğrudan uygula
  if (activeRole && ACCOUNTS[activeRole]) {
    applyAccountUI(activeRole);
  }
});
