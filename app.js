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

const DEFAULT_SD_SONGS = [
  'I CANT HELP FALLING IN LOVE',
  'LA VIDA EN ROSE',
  'HIT THE ROAD JACK'
];

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
    playingSong: 'DURDURULDU'
  },
  pins: [],
  notes: [
    {
      id: 'n1',
      author: 'BARAN',
      target: 'EVA',
      date: '20.11.2026',
      time: '21:15',
      ts: 1795209300000,
      text: 'Bu kucuk robot masanda durdukca aklim hep sende olacak. Seni cok seviyorum EVA.'
    },
    {
      id: 'n2',
      author: 'SUDE',
      target: 'WALL-E',
      date: '21.11.2026',
      time: '14:40',
      ts: 1795272000000,
      text: 'Birlikte gececegimiz yeni sehirleri haritaya tek tek isaretleyecegiz.'
    }
  ],
  voices: [],
  songs: [...DEFAULT_SD_SONGS]
};

let appState = loadState();
let activeRole = sessionStorage.getItem(SESSION_ROLE_KEY) || '';
let selectedLoginTab = 'walle';
let mapObj = null;
let leafletMarkers = [];
let tempSearchMarker = null;
let pendingPhotos = [];
let pendingVideos = [];
let activeMemoryOpen = false;
let mediaRec = null;
let recChunks = [];
let isRecording = false;
let voiceRecTimer = null;
let voiceRecStartedAt = 0;
let activeVoiceAudio = null;
let activeVoiceId = '';
let currentSongIdx = 0;
let activePlayingSongIdx = -1;
let aiSpeechRec = null;
let aiListening = false;
let activeWavAudio = null;
let robotLinkOk = false;

const BLE_SVC_UUID = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';
const BLE_RX_UUID  = '6e400002-b5a3-f393-e0a9-e50e24dcca9e';
const BLE_TX_UUID  = '6e400003-b5a3-f393-e0a9-e50e24dcca9e';
let bleDevice = null;
let bleRxChar = null;
let bleTxChar = null;
let bleWriteQueue = Promise.resolve();
let bleRxLineBuf = '';
let pendingBleAiResolver = null;

const IDB_NAME = 'walle_eva_universe_db';
const IDB_STORE = 'state';

function idbOpen() {
  return new Promise((resolve) => {
    if (!window.indexedDB) { resolve(null); return; }
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(IDB_STORE)) {
        req.result.createObjectStore(IDB_STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
  });
}

async function idbLoadState() {
  try {
    const db = await idbOpen();
    if (!db) return null;
    return await new Promise((resolve) => {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const req = tx.objectStore(IDB_STORE).get('main');
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch (e) { return null; }
}

async function idbSaveState(stateObj) {
  try {
    const db = await idbOpen();
    if (!db) return false;
    return await new Promise((resolve) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).put(stateObj, 'main');
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  } catch (e) { return false; }
}

function migrateSongsIfLegacy(songs) {
  if (!Array.isArray(songs) || !songs.length) return [...DEFAULT_SD_SONGS];
  const joined = songs.join('|');
  if (joined.includes('Put On Your Sunday Clothes') || joined.includes('Define Dancing')) {
    return [...DEFAULT_SD_SONGS];
  }
  return songs;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_DATA);
    const parsed = JSON.parse(raw);
    const merged = { ...structuredClone(DEFAULT_DATA), ...parsed };
    merged.songs = migrateSongsIfLegacy(merged.songs);
    return merged;
  } catch (e) {
    return structuredClone(DEFAULT_DATA);
  }
}

function saveState() {
  idbSaveState(appState);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    try {
      const slim = {
        ...appState,
        pins: (appState.pins || []).map(p => ({ ...p, photos: [], videos: [] })),
        voices: (appState.voices || []).map(v => ({ ...v, dataUrl: '' }))
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(slim));
    } catch (e2) {}
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

  const chip = document.getElementById('hudBadgeChip');
  if (chip) chip.textContent = acc.badge;
  const hero = document.getElementById('hudHeroTitle');
  if (hero) hero.textContent = role === 'eva' ? 'EVA // SUDE EVRENI' : 'WALL-E // BARAN EVRENI';
  const pinLbl = document.getElementById('addPinThoughtLabel');
  if (pinLbl) pinLbl.textContent = role === 'eva' ? "EVA'NIN YOLCULUK DUSUNCESI" : "WALL-E'NIN YOLCULUK DUSUNCESI";
  updateRelationshipTimer();

  // Hesaba gore Notlar sekmesi: Sol = Partner Ekranina Gonderim & Gecmis, Sag = Gelen & Alinan Notlar
  const sendPanel = document.getElementById('notesSendPanel');
  const inboxPanel = document.getElementById('notesInboxPanel');
  const sendBtn = document.getElementById('sendNoteBtn');
  if (role === 'eva') {
    if (sendPanel) { sendPanel.classList.remove('gold'); sendPanel.classList.add('eva'); }
    if (inboxPanel) { inboxPanel.classList.remove('eva'); inboxPanel.classList.add('gold'); }
    document.getElementById('sendPanelTitle').textContent = "WALL-E'NIN EKRANINA NOT GONDER";
    document.getElementById('sendTargetBadge').textContent = 'EVA -> WALL-E';
    document.getElementById('sendNoteLbl').textContent = "WALL-E'NIN EKRANINA DUSECEK NOTUN";
    if (sendBtn) {
      sendBtn.className = 'px-btn gold';
      sendBtn.innerHTML = `<span class="px-ico sm" data-ico="heart"></span> WALL-E'NIN EKRANINA GONDER`;
      renderPixelIcons(sendBtn);
    }
    document.getElementById('inboxPanelTitle').textContent = 'EVA EKRANI & SESLI KAPSUL';
    document.getElementById('pinTypeInput').value = 'dream';
  } else {
    if (sendPanel) { sendPanel.classList.remove('eva'); sendPanel.classList.add('gold'); }
    if (inboxPanel) { inboxPanel.classList.remove('gold'); inboxPanel.classList.add('eva'); }
    document.getElementById('sendPanelTitle').textContent = "EVA'NIN EKRANINA NOT GONDER";
    document.getElementById('sendTargetBadge').textContent = 'WALL-E -> EVA';
    document.getElementById('sendNoteLbl').textContent = "EVA'NIN EKRANINA DUSECEK NOTUN";
    if (sendBtn) {
      sendBtn.className = 'px-btn eva';
      sendBtn.innerHTML = `<span class="px-ico sm" data-ico="heart"></span> EVA'NIN EKRANINA GONDER`;
      renderPixelIcons(sendBtn);
    }
    document.getElementById('inboxPanelTitle').textContent = 'EKRAN NOTLARI & SESLI KAPSUL';
    document.getElementById('pinTypeInput').value = 'visited';
    if (document.getElementById('view-settings').classList.contains('active')) switchTab('map');
  }

  renderPinPillsAndDetail();
  renderSentNotes();
  renderNotes();
  renderVoices();
  if (mapObj) setTimeout(() => mapObj.invalidateSize(), 120);
  playRetroBeep(role === 'eva' ? 'eva' : 'startup');
}

function logoutAccount() {
  stopActiveVoiceAudio();
  activeRole = '';
  activeMemoryOpen = false;
  sessionStorage.removeItem(SESSION_ROLE_KEY);
  document.body.classList.remove('role-walle', 'role-eva', 'scene-only');
  document.body.classList.add('locked');
}

// ============================================================================
// DEPOLAMA TAKIBI & sudesenturk6507@gmail.com UYARI SISTEMI
// ============================================================================
function getStorageUsage() {
  const jsonBytes = new Blob([JSON.stringify(appState)]).size;
  const videoBytes = (appState.pins || []).reduce((sum, p) =>
    sum + ((p.videos || []).reduce((vs, v) => vs + (v.size || (v.blob && v.blob.size) || 0), 0)), 0);
  const bytes = jsonBytes + videoBytes;
  const maxMb = Math.max(1, Number(appState.quotaMb) || 5);
  const maxBytes = maxMb * 1024 * 1024;
  const pct = Math.min(100, Math.round((bytes / maxBytes) * 100));
  return { bytes, kb: (bytes / 1024).toFixed(1), mb: (bytes / (1024 * 1024)).toFixed(2), maxMb, pct };
}

function updateStorageMeter() {
  const st = getStorageUsage();
  const label = st.maxMb <= 5 ? `${st.kb} KB / ${st.maxMb} MB (%${st.pct})` : `${st.mb} MB / ${st.maxMb} MB (%${st.pct})`;
  const statsEl = document.getElementById('storageStats');
  if (statsEl) statsEl.textContent = label;
  const hudChip = document.getElementById('hudStorageChip');
  if (hudChip) hudChip.textContent = `DEP %${st.pct}`;

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
  const wavMap = {
    eva: 'sounds/eva.wav',
    walle: 'sounds/walle.wav',
    happy: 'sounds/happy.wav',
    tada: 'sounds/tada.wav',
    suprise: 'sounds/suprise.wav',
    surprised: 'sounds/suprise.wav',
    startup: 'sounds/startup.wav'
  };
  const src = wavMap[kind];
  if (src) {
    try {
      if (activeWavAudio) {
        activeWavAudio.pause();
        activeWavAudio.currentTime = 0;
      }
      const au = new Audio(src);
      au.volume = Math.max(0.15, Math.min(1.0, (appState.robotState.vol || 85) / 100));
      activeWavAudio = au;
      const p = au.play();
      if (p && p.catch) p.catch(() => playSynthFallback(kind));
      return true;
    } catch (e) {}
  }
  playSynthFallback(kind);
  return false;
}

function playSynthFallback(kind) {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    if (!window._ac) window._ac = new AC();
    if (window._ac.state === 'suspended') window._ac.resume();
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
      gain.gain.setValueAtTime(0.08, t);
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
  const el = document.getElementById('sinceLabel');
  if (!el) return;
  const start = new Date((appState.sinceDate || '2025-05-14') + 'T00:00:00');
  const diffMs = Math.max(0, Date.now() - start.getTime());
  const days = Math.floor(diffMs / 86400000);
  const hours = Math.floor((diffMs % 86400000) / 3600000);
  const op = activeRole ? ACCOUNTS[activeRole].operator : 'WALL-E & EVA';
  el.textContent = `${op} // BIRLIKTE: ${days} GUN ${hours} SAAT`;
}

function updateHudLcd(l1, l2) {
  const a = (l1 || '').toUpperCase().slice(0, 16).padEnd(16, ' ');
  const b = (l2 || '').toUpperCase().slice(0, 16).padEnd(16, ' ');
  appState.robotState.lcd1 = a;
  appState.robotState.lcd2 = b;
  const hl = document.getElementById('hudLcd');
  if (hl) hl.textContent = `${a.trim()} | ${b.trim()}`;
  const r1 = document.getElementById('bigLcd1');
  const r2 = document.getElementById('bigLcd2');
  if (r1 && r2) { r1.textContent = a; r2.textContent = b; }
}

function renderMeters() {
  const pct = appState.robotState.batPct || 78;
  const hb = document.getElementById('hudBat');
  if (hb) hb.textContent = `%${pct}`;
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
  const vCount = (pin.videos && pin.videos.length) ? pin.videos.length : 0;
  return `
    <div style="min-width:190px;font-family:'Press Start 2P',monospace;">
      <div style="color:#f6bf42;font-size:10px;line-height:1.5;">${escapeHtml(pin.city)} (${escapeHtml(pin.country)})</div>
      <div style="color:#67d4ff;font-size:8px;line-height:1.6;margin:4px 0 8px;">${escapeHtml(pin.date)} // ${pCount} FOTO, ${vCount} VIDEO</div>
      <button class="px-btn gold sm" style="width:100%;" onclick="focusPinAndUpload('${pin.id}')">ANI KARTINI AC</button>
    </div>
  `;
}

function focusPinAndUpload(id) {
  openMemoryCard(id);
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
    <div style="min-width:195px;font-family:'Press Start 2P',monospace;">
      <div style="color:#67d4ff;font-size:10px;line-height:1.5;">${safeCity} (${safeCountry})</div>
      <div style="font-size:8.5px;line-height:1.6;margin:6px 0 8px;">Bu sehirde henuz kayitli ani yok. Hemen ekleyebilirsiniz.</div>
      <button class="px-btn green sm" style="width:100%;" onclick="openPrefilledPinModal(${lat}, ${lng}, '${encodeURIComponent(cityName)}', '${encodeURIComponent(countryName)}')">BURAYA ANI EKLE</button>
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

function getVideoObjUrl(v) {
  if (!v) return '';
  if (v.blob instanceof Blob) {
    if (!v._objUrl) v._objUrl = URL.createObjectURL(v.blob);
    return v._objUrl;
  }
  return v.dataUrl || '';
}

function renderPinPillsAndDetail() {
  const pillBox = document.getElementById('pinPillList');
  if (pillBox) pillBox.innerHTML = '';

  const wallBody = document.getElementById('memoryWallBody');
  const badgeEl  = document.getElementById('memBadge');
  const closeBtn = document.getElementById('memCloseBtn');

  if (!appState.pins.length) {
    appState.selectedPinId = '';
    activeMemoryOpen = false;
    if (pillBox) {
      pillBox.innerHTML = '<div style="font-size:9px;line-height:1.6;color:var(--text-dim);">HENUZ KAYITLI SEHIR YOK — SEHIR ARA VEYA HARITAYA TIKLAYIP ILK ANINI EKLE.</div>';
    }
    if (wallBody) wallBody.style.display = 'none';
    if (badgeEl) badgeEl.style.display = 'none';
    if (closeBtn) closeBtn.style.display = 'none';
    const pGrid = document.getElementById('memPhotos');
    if (pGrid) pGrid.innerHTML = '';
    return;
  }

  appState.pins.forEach(pin => {
    const b = document.createElement('button');
    b.className = `pin-pill ${pin.type === 'visited' ? 'walle' : 'eva'} ${(activeMemoryOpen && pin.id === appState.selectedPinId) ? 'active' : ''}`;
    b.textContent = pin.city;
    b.onclick = () => {
      if (mapObj) mapObj.flyTo([pin.lat, pin.lng], 10, { duration: 0.7 });
      openMemoryCard(pin.id);
    };
    if (pillBox) pillBox.appendChild(b);
  });

  const pin = appState.pins.find(p => p.id === appState.selectedPinId) || appState.pins[0];
  appState.selectedPinId = pin.id;

  if (!activeMemoryOpen) {
    if (wallBody) wallBody.style.display = 'none';
    if (badgeEl) badgeEl.style.display = 'none';
    if (closeBtn) closeBtn.style.display = 'none';
    return;
  }

  if (wallBody) wallBody.style.display = 'flex';
  if (badgeEl) badgeEl.style.display = 'inline-block';
  if (closeBtn) closeBtn.style.display = 'inline-flex';
  renderMemoryModalContent(pin);
}

function renderMemoryModalContent(pin) {
  if (!pin) return;
  const pGrid = document.getElementById('memPhotos');
  if (pGrid) pGrid.innerHTML = '';

  const cityEl = document.getElementById('memCity');
  const countryEl = document.getElementById('memCountry');
  const badgeEl = document.getElementById('memBadge');
  if (cityEl) cityEl.textContent = pin.city;
  if (countryEl) countryEl.textContent = `${pin.country} // ${pin.date}`;
  if (badgeEl) badgeEl.textContent = pin.type === 'visited' ? 'GIDILDI [WALL-E]' : 'HAYAL [EVA]';

  const photos = pin.photos || [];
  const videos = pin.videos || [];
  if (pGrid) {
    if (!photos.length && !videos.length) {
      const empty = document.createElement('div');
      empty.style.cssText = 'grid-column:1/-1;font-size:9px;line-height:1.6;color:var(--text-dim);padding:8px;border:1px dashed rgba(103,212,255,0.45);';
      empty.textContent = 'HENUZ FOTOGRAF VEYA VIDEO YOK — ASAGIDAN EKLEYEBILIRSIN.';
      pGrid.appendChild(empty);
    } else {
      photos.forEach((src, idx) => {
        const w = document.createElement('div');
        w.className = 'mem-photo-wrap';
        const im = document.createElement('img');
        im.src = src;
        im.alt = `${pin.city} ${idx + 1}`;
        w.appendChild(im);
        w.onclick = () => openMediaLightbox('image', src, `${pin.city} // ${pin.date}`);
        pGrid.appendChild(w);
      });
      videos.forEach((v, idx) => {
        const url = getVideoObjUrl(v);
        if (!url) return;
        const w = document.createElement('div');
        w.className = 'mem-photo-wrap';
        const vid = document.createElement('video');
        vid.src = url;
        vid.muted = true;
        vid.playsInline = true;
        vid.preload = 'metadata';
        const badge = document.createElement('span');
        badge.className = 'mem-video-badge';
        badge.textContent = 'VIDEO';
        w.appendChild(vid);
        w.appendChild(badge);
        w.onclick = () => openMediaLightbox('video', url, `${pin.city} // ${v.name || ('VIDEO ' + (idx + 1))}`);
        pGrid.appendChild(w);
      });
    }
  }

  // Mavi (WALL-E) ve Pembe (EVA) yolculuk dusunceleri — rol kilidi
  const walleText = (pin.walleNote !== undefined) ? pin.walleNote : (pin.note || '');
  const evaText   = (pin.evaNote !== undefined)   ? pin.evaNote   : '';

  const wIn   = document.getElementById('memWalleInput');
  const wRead = document.getElementById('memWalleRead');
  const wBtn  = document.getElementById('memWalleSaveBtn');
  const wLock = document.getElementById('walleThoughtLock');

  const eIn   = document.getElementById('memEvaInput');
  const eRead = document.getElementById('memEvaRead');
  const eBtn  = document.getElementById('memEvaSaveBtn');
  const eLock = document.getElementById('evaThoughtLock');

  if (wIn && wRead && wBtn) {
    if (activeRole === 'walle') {
      wIn.style.display = 'block'; wIn.value = walleText;
      wBtn.style.display = 'inline-flex';
      wRead.style.display = 'none';
      if (wLock) wLock.textContent = 'YAZABILIRSIN';
    } else {
      wIn.style.display = 'none';
      wBtn.style.display = 'none';
      wRead.style.display = 'block';
      wRead.textContent = walleText || 'WALL-E henuz bu yolculuk icin dusunce yazmadi.';
      if (wLock) wLock.textContent = 'SADECE WALL-E';
    }
  }

  if (eIn && eRead && eBtn) {
    if (activeRole === 'eva') {
      eIn.style.display = 'block'; eIn.value = evaText;
      eBtn.style.display = 'inline-flex';
      eRead.style.display = 'none';
      if (eLock) eLock.textContent = 'YAZABILIRSIN';
    } else {
      eIn.style.display = 'none';
      eBtn.style.display = 'none';
      eRead.style.display = 'block';
      eRead.textContent = evaText || 'EVA henuz bu yolculuk icin dusunce yazmadi.';
      if (eLock) eLock.textContent = 'SADECE EVA';
    }
  }
}

function openMemoryCard(id) {
  appState.selectedPinId = id;
  activeMemoryOpen = true;
  saveState();
  renderPinPillsAndDetail();
  if (mapObj) mapObj.closePopup();
  const panel = document.getElementById('memoryWallPanel');
  if (panel && window.innerWidth <= 720) {
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function closeMemoryWall() {
  activeMemoryOpen = false;
  renderPinPillsAndDetail();
}

function selectPin(id) {
  appState.selectedPinId = id;
  saveState();
  renderPinPillsAndDetail();
}

function saveJourneyThought(role) {
  if (activeRole !== role) {
    showToast('SADECE KENDI ALANINA YAZABILIRSIN');
    return;
  }
  const pin = appState.pins.find(p => p.id === appState.selectedPinId);
  if (!pin) return;
  if (role === 'walle') {
    pin.walleNote = document.getElementById('memWalleInput').value.trim();
  } else {
    pin.evaNote = document.getElementById('memEvaInput').value.trim();
  }
  saveState();
  renderMapMarkers();
  renderMemoryModalContent(pin);
  showToast(role === 'walle' ? "WALL-E'NIN DUSUNCESI KAYDEDILDI" : "EVA'NIN DUSUNCESI KAYDEDILDI");
}

function renderPendingPhotoThumbs() {
  const prev = document.getElementById('pinPhotoPreview');
  const box = document.getElementById('pinPhotoThumbs');
  if (prev) prev.textContent = `${pendingPhotos.length} FOTO, ${pendingVideos.length} VIDEO HAZIR`;
  if (!box) return;
  box.innerHTML = '';
  pendingPhotos.forEach((src, idx) => {
    const w = document.createElement('div');
    w.className = 'mem-photo-wrap';
    const im = document.createElement('img');
    im.src = src;
    im.alt = `Secilen ${idx + 1}`;
    w.appendChild(im);
    box.appendChild(w);
  });
  pendingVideos.forEach((v) => {
    const url = getVideoObjUrl(v);
    if (!url) return;
    const w = document.createElement('div');
    w.className = 'mem-photo-wrap';
    const vid = document.createElement('video');
    vid.src = url;
    vid.muted = true;
    vid.playsInline = true;
    vid.preload = 'metadata';
    const badge = document.createElement('span');
    badge.className = 'mem-video-badge';
    badge.textContent = 'VIDEO';
    w.appendChild(vid);
    w.appendChild(badge);
    box.appendChild(w);
  });
}

function openAddPinModal(lat = 39.92, lng = 32.85, cityPre = '', countryPre = '') {
  pendingPhotos = [];
  pendingVideos = [];
  document.getElementById('pinLatInput').value = Number(lat).toFixed(4);
  document.getElementById('pinLngInput').value = Number(lng).toFixed(4);
  document.getElementById('pinCityInput').value = cityPre;
  document.getElementById('pinCountryInput').value = countryPre;
  document.getElementById('pinDateInput').value = '';
  document.getElementById('pinNoteInput').value = '';
  renderPendingPhotoThumbs();
  document.getElementById('addPinModal').classList.add('open');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
  if (id === 'photoModal') {
    const vid = document.getElementById('photoBoxVideo');
    if (vid) { vid.pause(); vid.src = ''; }
  }
}

function compressImageFile(file) {
  return new Promise((resolve) => {
    let done = false;
    const finish = (val) => { if (!done) { done = true; resolve(val); } };
    const timer = setTimeout(() => finish(null), 8000);

    const objUrl = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      clearTimeout(timer);
      try {
        const maxDim = 640;
        let w = img.naturalWidth || img.width || 640;
        let h = img.naturalHeight || img.height || 640;
        if (w > maxDim || h > maxDim) {
          if (w > h) { h = Math.round(h * maxDim / w); w = maxDim; }
          else       { w = Math.round(w * maxDim / h); h = maxDim; }
        }
        const cv = document.createElement('canvas');
        cv.width = w; cv.height = h;
        cv.getContext('2d').drawImage(img, 0, 0, w, h);
        URL.revokeObjectURL(objUrl);
        finish(cv.toDataURL('image/jpeg', 0.74));
      } catch (e) {
        URL.revokeObjectURL(objUrl);
        finish(null);
      }
    };
    img.onerror = () => {
      clearTimeout(timer);
      URL.revokeObjectURL(objUrl);
      // Tarayici onizleyemese de ufak JPG/PNG ise ham DataURL dene
      if (file.size <= 1500000 && /^image\/(jpeg|jpg|png|webp|gif)/i.test(file.type || '')) {
        const rd = new FileReader();
        rd.onload = () => finish(rd.result || null);
        rd.onerror = () => finish(null);
        rd.readAsDataURL(file);
      } else {
        finish(null);
      }
    };
    img.src = objUrl;
  });
}

async function handlePhotoUpload(files, addToCurrentPin = false) {
  const arr = Array.from(files || []);
  if (!arr.length) return;
  showToast(`MEDYA HAZIRLANIYOR (${arr.length})...`);
  const newPhotos = [];
  const newVideos = [];
  let failed = 0;

  for (let i = 0; i < arr.length; i++) {
    const f = arr[i];
    const isVid = (f.type && f.type.startsWith('video/')) || /\.(mp4|mov|webm|m4v|3gp)$/i.test(f.name || '');
    if (isVid) {
      if (f.size > 120 * 1024 * 1024) {
        failed++;
      } else {
        newVideos.push({ id: 'vid_' + Date.now() + '_' + i, name: f.name || 'video.mp4', mime: f.type || 'video/mp4', size: f.size, blob: f });
      }
    } else {
      const res = await compressImageFile(f);
      if (res) newPhotos.push(res);
      else failed++;
    }
  }

  if (!newPhotos.length && !newVideos.length) {
    showToast('MEDYA ACILAMADI (JPG, PNG veya MP4 deneyin)');
    return;
  }

  if (addToCurrentPin) {
    let pin = appState.pins.find(p => p.id === appState.selectedPinId);
    if (!pin && appState.pins.length > 0) {
      pin = appState.pins[0];
      appState.selectedPinId = pin.id;
    }
    if (!pin) {
      openAddPinModal();
      pendingPhotos = [...newPhotos];
      pendingVideos = [...newVideos];
      renderPendingPhotoThumbs();
      showToast('SEHIR ADINI YAZIP "HARITAYA KAYDET" BUTONUNA BAS');
      return;
    }
    pin.photos = [...(pin.photos || []), ...newPhotos];
    pin.videos = [...(pin.videos || []), ...newVideos];
    saveState();
    renderMapMarkers();
    renderPinPillsAndDetail();
    const total = newPhotos.length + newVideos.length;
    showToast(failed ? `${total} MEDYA EKLENDI (${failed} DESTEKLENMEDI)` : `${total} MEDYA ANIYA EKLENDI`);
  } else {
    pendingPhotos = [...pendingPhotos, ...newPhotos];
    pendingVideos = [...pendingVideos, ...newVideos];
    renderPendingPhotoThumbs();
    showToast(`${pendingPhotos.length} FOTO, ${pendingVideos.length} VIDEO HAZIR`);
  }
}

function saveNewPin() {
  const city = document.getElementById('pinCityInput').value.trim().toUpperCase();
  if (!city) { showToast('SEHIR ADI GIRIN'); return; }
  const initialThought = document.getElementById('pinNoteInput').value.trim();
  const pin = {
    id: 'pin_' + Date.now(),
    city,
    country: (document.getElementById('pinCountryInput').value.trim() || 'DUNYA').toUpperCase(),
    lat: parseFloat(document.getElementById('pinLatInput').value) || 41.0,
    lng: parseFloat(document.getElementById('pinLngInput').value) || 29.0,
    type: document.getElementById('pinTypeInput').value,
    date: (document.getElementById('pinDateInput').value.trim() || 'YENI ANI').toUpperCase(),
    note: initialThought || '',
    walleNote: activeRole === 'walle' ? initialThought : '',
    evaNote:   activeRole === 'eva'   ? initialThought : '',
    photos: [...pendingPhotos],
    videos: [...pendingVideos]
  };
  pendingPhotos = [];
  pendingVideos = [];
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
  activeMemoryOpen = false;
  saveState();
  renderMapMarkers();
  renderPinPillsAndDetail();
  showToast('SECILI PIN SILINDI');
}

function openMediaLightbox(kind, src, title) {
  const imgEl = document.getElementById('photoBoxImg');
  const vidEl = document.getElementById('photoBoxVideo');
  const capEl = document.getElementById('photoBoxCap');
  if (capEl) capEl.textContent = title;
  if (kind === 'video') {
    if (imgEl) { imgEl.style.display = 'none'; imgEl.src = ''; }
    if (vidEl) { vidEl.style.display = 'block'; vidEl.src = src; }
  } else {
    if (vidEl) { vidEl.pause(); vidEl.style.display = 'none'; vidEl.src = ''; }
    if (imgEl) { imgEl.style.display = 'block'; imgEl.src = src; }
  }
  document.getElementById('photoModal').classList.add('open');
}

// ============================================================================
// EKRAN NOTLARI, GECMIS LISTE & CIHAZDAN OYNATILABILIR SESLI KAPSUL
// ============================================================================
function getRoleNoteMeta() {
  const isEva = activeRole === 'eva';
  return {
    isEva,
    author: activeRole ? ACCOUNTS[activeRole].author : 'BARAN',
    target: isEva ? 'WALL-E' : 'EVA'
  };
}

function ensureNoteIds() {
  (appState.voices || []).forEach((v, idx) => {
    if (!v.id) v.id = 'v_legacy_' + idx + '_' + (v.ts || 0);
    if (!v.target) v.target = v.sender === 'BARAN' ? 'EVA' : 'WALL-E';
  });
  (appState.notes || []).forEach((n, idx) => {
    if (!n.id) n.id = 'n_legacy_' + idx;
    if (!n.target) n.target = n.author === 'BARAN' ? 'EVA' : 'WALL-E';
  });
}

function formatDurationSec(sec) {
  const s = Math.max(0, Math.floor(Number(sec) || 0));
  const m = String(Math.floor(s / 60)).padStart(2, '0');
  const r = String(s % 60).padStart(2, '0');
  return `${m}:${r}`;
}

function renderSentNotes() {
  const box = document.getElementById('sentNotesList');
  const cnt = document.getElementById('sentNotesCount');
  if (!box) return;
  ensureNoteIds();
  const { author } = getRoleNoteMeta();

  const textItems = (appState.notes || [])
    .filter(n => n.author === author)
    .map((n, idx) => ({ kind: 'text', sortTs: n.ts || idx, item: n }));
  const voiceItems = (appState.voices || [])
    .filter(v => v.sender === author)
    .map((v, idx) => ({ kind: 'voice', sortTs: v.ts || (1000 + idx), item: v }));

  const sentAll = [...textItems, ...voiceItems].sort((a, b) => b.sortTs - a.sortTs);
  if (cnt) cnt.textContent = String(sentAll.length);
  box.innerHTML = '';

  if (!sentAll.length) {
    box.innerHTML = '<div style="font-size:8.5px;line-height:1.7;color:var(--text-dim);">HENUZ GONDERILEN NOT YOK.</div>';
    return;
  }

  sentAll.forEach(({ kind, item }) => {
    const card = document.createElement('div');
    const cls = author === 'BARAN' ? 'from-baran' : 'from-sude';
    card.className = `note-item ${cls}`;
    const stamp = [item.date, item.time].filter(Boolean).join(' ');
    if (kind === 'voice') {
      const isPlaying = activeVoiceId === item.id && activeVoiceAudio && !activeVoiceAudio.paused;
      card.innerHTML = `
        <div class="note-head">
          <span>[SES] -&gt; ${escapeHtml(item.target)} · ${escapeHtml(stamp)}</span>
          <button type="button" class="note-del-btn" onclick="deleteVoiceNote('${escapeHtml(item.id)}')">SIL</button>
        </div>
        <div class="voice-player-row">
          <button type="button" class="px-btn cyan sm voice-play-btn ${isPlaying ? 'playing' : ''}" data-voice-play="${escapeHtml(item.id)}" onclick="togglePlayVoice('${escapeHtml(item.id)}')">${isPlaying ? 'DURAKLAT' : '▶ PLAY'}</button>
          <span class="voice-dur" data-voice-dur="${escapeHtml(item.id)}">${escapeHtml(item.duration || '00:00')}</span>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="note-head">
          <span>-&gt; ${escapeHtml(item.target)} · ${escapeHtml(stamp)}</span>
          <button type="button" class="note-del-btn" onclick="deleteNoteItem('${escapeHtml(item.id)}')">SIL</button>
        </div>
        <div class="note-body">${escapeHtml(item.text)}</div>
      `;
    }
    box.appendChild(card);
  });
}

function renderNotes() {
  const wall = document.getElementById('notesWall');
  if (!wall) return;
  ensureNoteIds();
  wall.innerHTML = '';
  const list = (appState.notes || []).slice().reverse();
  if (!list.length) {
    wall.innerHTML = '<div style="font-size:8.5px;line-height:1.7;color:var(--text-dim);">HENUZ NOT YOK.</div>';
    return;
  }
  list.forEach(n => {
    const card = document.createElement('div');
    card.className = `note-item ${n.author === 'BARAN' ? 'from-baran' : 'from-sude'}`;
    const stamp = [n.date, n.time].filter(Boolean).join(' ');
    card.innerHTML = `
      <div class="note-head">
        <span>${escapeHtml(n.author)} -&gt; ${escapeHtml(n.target || (n.author === 'BARAN' ? 'EVA' : 'WALL-E'))}</span>
        <div class="note-head-actions">
          <span>${escapeHtml(stamp)}</span>
          <button type="button" class="note-del-btn" onclick="deleteNoteItem('${escapeHtml(n.id)}')">SIL</button>
        </div>
      </div>
      <div class="note-body">${escapeHtml(n.text)}</div>
    `;
    wall.appendChild(card);
  });
}

function addLoveNote() {
  const inp = document.getElementById('newNoteInput');
  const text = inp ? inp.value.trim() : '';
  if (!text) { showToast('GONDERILECEK NOT YAZIN'); return; }
  const { isEva, author, target } = getRoleNoteMeta();
  const d = new Date();
  const dateStr = `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`;
  const timeStr = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  appState.notes.push({
    id: 'n_' + Date.now(),
    author,
    target,
    date: dateStr,
    time: timeStr,
    ts: Date.now(),
    text
  });
  inp.value = '';
  saveState();
  renderSentNotes();
  renderNotes();
  playRetroBeep('eva');
  if (bleRxChar || robotLinkOk) {
    if (isEva) sendRobotAction('from_eva', { msg: text.slice(0, 60) });
    else sendRobotAction('sfx', { n: 'eva' });
  }
  showToast(target === 'EVA' ? "EVA'NIN EKRANINA NOT GONDERILDI" : "WALL-E'NIN EKRANINA NOT GONDERILDI");
}

function deleteNoteItem(id) {
  appState.notes = (appState.notes || []).filter(n => n.id !== id);
  saveState();
  renderSentNotes();
  renderNotes();
  showToast('NOT SILINDI');
}

function previewLcdMsg(val) {
  const l1 = document.getElementById('whisperL1');
  const l2 = document.getElementById('whisperL2');
  if (!l1 || !l2) return;
  const clean = (val || '').toUpperCase().replace(/[^A-Z0-9 .,!?:-]/g, ' ');
  l1.textContent = clean.slice(0, 16).padEnd(16, ' ');
  l2.textContent = clean.slice(16, 32).padEnd(16, ' ');
}

function sendWhisperToWalle() {
  const inp = document.getElementById('lcdWhisperInput');
  const val = inp ? inp.value.trim() : '';
  if (!val) { showToast('MESAJ YAZIN'); return; }
  const clean = val.toUpperCase();
  updateHudLcd(clean.slice(0, 16), clean.slice(16, 32) || 'HEDEF >> EVA');
  playRetroBeep('eva');
  if (activeRole === 'eva') {
    sendRobotAction('from_eva', { msg: val }).then(r => {
      if (r && r._sent) showToast('MESAJ EVA OLARAK ROBOTA ILETILDI');
      else showToast('ROBOT BAGLI DEGIL: EKRAN ONIZLEME GUNCELLENDI');
    });
  } else {
    sendRobotAction('sfx', { n: 'eva' });
    sendRobotAction('ask', { q: val }).then(r => {
      if (r && r._sent) showToast('MESAJ WALL-E GOGUS EKRANINA GONDERILDI');
      else showToast('ROBOT BAGLI DEGIL: YEREL KUMANDAYI (192.168.4.1) ACIN');
    });
  }
}

function syncVoicePlayerUI(vid, isPlaying, curSec = 0, totalSec = 0) {
  if (!vid) return;
  document.querySelectorAll(`[data-voice-play="${vid}"]`).forEach(btn => {
    btn.classList.toggle('playing', !!isPlaying);
    btn.textContent = isPlaying ? 'DURAKLAT' : '▶ PLAY';
  });
  const pct = totalSec > 0 ? Math.min(100, Math.round((curSec / totalSec) * 100)) : 0;
  document.querySelectorAll(`[data-voice-fill="${vid}"]`).forEach(fill => {
    fill.style.width = (isPlaying || curSec > 0) ? `${pct}%` : '0%';
  });
  document.querySelectorAll(`[data-voice-dur="${vid}"]`).forEach(lbl => {
    const v = (appState.voices || []).find(x => x.id === vid);
    const baseDur = (v && v.duration) || (totalSec > 0 ? formatDurationSec(totalSec) : '00:00');
    lbl.textContent = (isPlaying || curSec > 0) && totalSec > 0
      ? `${formatDurationSec(curSec)} / ${formatDurationSec(totalSec)}`
      : baseDur;
  });
}

function stopActiveVoiceAudio() {
  const prevId = activeVoiceId;
  if (activeVoiceAudio) {
    try {
      activeVoiceAudio.pause();
      activeVoiceAudio.currentTime = 0;
    } catch (e) {}
    activeVoiceAudio = null;
  }
  activeVoiceId = '';
  if (prevId) syncVoicePlayerUI(prevId, false, 0, 0);
}

function togglePlayVoice(voiceId) {
  ensureNoteIds();
  const v = (appState.voices || []).find(x => x.id === voiceId);
  if (!v || !v.dataUrl) {
    showToast('SES DOSYASI BULUNAMADI');
    return;
  }
  if (activeVoiceId === voiceId && activeVoiceAudio) {
    if (!activeVoiceAudio.paused) {
      activeVoiceAudio.pause();
      syncVoicePlayerUI(voiceId, false, activeVoiceAudio.currentTime, isFinite(activeVoiceAudio.duration) ? activeVoiceAudio.duration : 0);
      return;
    }
    const resumePromise = activeVoiceAudio.play();
    syncVoicePlayerUI(voiceId, true, activeVoiceAudio.currentTime, isFinite(activeVoiceAudio.duration) ? activeVoiceAudio.duration : 0);
    if (resumePromise && resumePromise.catch) {
      resumePromise.catch(() => {
        stopActiveVoiceAudio();
        showToast('CIHAZDAN SES OYNATILAMADI');
      });
    }
    return;
  }

  stopActiveVoiceAudio();
  const au = new Audio(v.dataUrl);
  au.preload = 'auto';
  activeVoiceAudio = au;
  activeVoiceId = voiceId;
  syncVoicePlayerUI(voiceId, true, 0, 0);

  au.addEventListener('timeupdate', () => {
    if (activeVoiceId !== voiceId) return;
    const dur = isFinite(au.duration) ? au.duration : 0;
    syncVoicePlayerUI(voiceId, !au.paused, au.currentTime, dur);
  });
  au.addEventListener('ended', () => {
    if (activeVoiceId === voiceId) stopActiveVoiceAudio();
  });
  au.addEventListener('error', () => {
    if (activeVoiceId === voiceId) stopActiveVoiceAudio();
    showToast('BU SES KAYDI CIHAZDA OYNATILAMADI');
  });

  const p = au.play();
  if (p && p.catch) {
    p.catch(() => {
      stopActiveVoiceAudio();
      showToast('SES OYNATMA BASLATILAMADI');
    });
  }
}

function deleteVoiceNote(voiceId) {
  if (activeVoiceId === voiceId) stopActiveVoiceAudio();
  appState.voices = (appState.voices || []).filter(v => v.id !== voiceId);
  saveState();
  renderVoices();
  renderSentNotes();
  showToast('SESLI NOT SILINDI');
}

function renderVoices() {
  const box = document.getElementById('voiceList');
  if (!box) return;
  ensureNoteIds();
  box.innerHTML = '';
  if (!appState.voices.length) {
    box.innerHTML = '<div style="font-size:8.5px;line-height:1.7;color:var(--text-dim);">HENUZ SESLI NOT YOK. SOLDAN KAYDET!</div>';
    return;
  }
  appState.voices.slice().reverse().forEach(v => {
    const item = document.createElement('div');
    const cls = v.sender === 'BARAN' ? 'from-baran' : 'from-sude';
    const isPlaying = activeVoiceId === v.id && activeVoiceAudio && !activeVoiceAudio.paused;
    const stamp = [v.date, v.time].filter(Boolean).join(' ');
    item.className = `voice-item ${cls}`;
    item.innerHTML = `
      <div class="note-head">
        <span>${escapeHtml(v.sender)} -&gt; ${escapeHtml(v.target || (v.sender === 'BARAN' ? 'EVA' : 'WALL-E'))}</span>
        <div class="note-head-actions">
          <span>${escapeHtml(stamp)}</span>
          <button type="button" class="note-del-btn" onclick="deleteVoiceNote('${escapeHtml(v.id)}')">SIL</button>
        </div>
      </div>
      <div class="voice-player-row">
        <button type="button" class="px-btn cyan sm voice-play-btn ${isPlaying ? 'playing' : ''}" data-voice-play="${escapeHtml(v.id)}" onclick="togglePlayVoice('${escapeHtml(v.id)}')">${isPlaying ? 'DURAKLAT' : '▶ PLAY'}</button>
        <div class="voice-track">
          <div class="voice-track-fill" data-voice-fill="${escapeHtml(v.id)}"></div>
        </div>
        <span class="voice-dur" data-voice-dur="${escapeHtml(v.id)}">${escapeHtml(v.duration || '00:00')}</span>
      </div>
    `;
    box.appendChild(item);
  });
}

function resetVoiceRecordButton() {
  const btn = document.getElementById('recVoiceBtn');
  const timerEl = document.getElementById('voiceRecTimer');
  clearInterval(voiceRecTimer);
  voiceRecTimer = null;
  if (timerEl) { timerEl.style.display = 'none'; timerEl.textContent = '00:00'; }
  if (btn) {
    btn.classList.remove('danger');
    btn.classList.add('cyan');
    btn.innerHTML = '<span class="px-ico sm" data-ico="mic"></span> SESLI NOT KAYDET &amp; GONDER';
    renderPixelIcons(btn);
  }
}

async function toggleVoiceRecord() {
  const btn = document.getElementById('recVoiceBtn');
  const timerEl = document.getElementById('voiceRecTimer');
  if (isRecording && mediaRec) {
    mediaRec.stop();
    isRecording = false;
    resetVoiceRecordButton();
    return;
  }
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || typeof MediaRecorder === 'undefined') {
    showToast('BU TARAYICI SES KAYDINI DESTEKLEMIYOR');
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recChunks = [];
    const mimeCandidates = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm'];
    const supportedMime = mimeCandidates.find(m => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(m)) || '';
    mediaRec = supportedMime ? new MediaRecorder(stream, { mimeType: supportedMime }) : new MediaRecorder(stream);
    voiceRecStartedAt = Date.now();
    mediaRec.ondataavailable = (e) => { if (e.data && e.data.size > 0) recChunks.push(e.data); };
    mediaRec.onstop = () => {
      stream.getTracks().forEach(t => t.stop());
      const elapsedSec = Math.max(1, Math.round((Date.now() - voiceRecStartedAt) / 1000));
      const actualMime = (mediaRec && mediaRec.mimeType) || (recChunks[0] && recChunks[0].type) || supportedMime || 'audio/webm';
      const blob = new Blob(recChunks, { type: actualMime });
      const rd = new FileReader();
      rd.onload = () => {
        const { author, target } = getRoleNoteMeta();
        const d = new Date();
        const dateStr = `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`;
        const timeStr = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
        appState.voices.push({
          id: 'v_' + Date.now(),
          sender: author,
          target,
          date: dateStr,
          time: timeStr,
          ts: Date.now(),
          duration: formatDurationSec(elapsedSec),
          mimeType: actualMime,
          dataUrl: rd.result
        });
        saveState();
        renderVoices();
        renderSentNotes();
        showToast('SESLI NOT GONDERILDI VE SAG PANOYA EKLENDI');
      };
      rd.readAsDataURL(blob);
    };
    mediaRec.start();
    isRecording = true;
    if (btn) {
      btn.classList.remove('cyan');
      btn.classList.add('danger');
      btn.innerHTML = '<span class="px-ico sm" data-ico="mic"></span> KAYDI BITIR &amp; GONDER';
      renderPixelIcons(btn);
    }
    if (timerEl) {
      timerEl.style.display = 'inline-block';
      timerEl.textContent = '00:00';
      clearInterval(voiceRecTimer);
      voiceRecTimer = setInterval(() => {
        timerEl.textContent = formatDurationSec((Date.now() - voiceRecStartedAt) / 1000);
      }, 400);
    }
    showToast('KONUSUNUZ - SESLI NOT KAYDI BASLADI');
  } catch (err) {
    resetVoiceRecordButton();
    showToast('MIKROFON IZNI VERILMEDI');
  }
}

// ============================================================================
// ROBOT KOPRUSU (BLUETOOTH LE + WI-FI + BULUT) & KUMANDA
// ============================================================================
function updateBleButtons(connected) {
  const b1 = document.getElementById('bleConnectBtn');
  const b2 = document.getElementById('hudBleBtn');
  if (connected) {
    if (b1) { b1.textContent = 'BT KES (BAGLI)'; b1.classList.remove('green'); b1.classList.add('danger'); }
    if (b2) { b2.textContent = 'BT: BAGLI'; b2.style.borderColor = '#4ade80'; b2.style.color = '#4ade80'; }
  } else {
    if (b1) { b1.textContent = 'BLUETOOTH BAGLAN'; b1.classList.remove('danger'); b1.classList.add('green'); }
    if (b2) { b2.textContent = 'BT BAGLAN'; b2.style.borderColor = '#38bdf8'; b2.style.color = '#7dd3fc'; }
  }
}

function setRobotLinkStatus(ok, base = '', reason = '') {
  robotLinkOk = !!ok;
  const badge = document.getElementById('ctrlLinkBadge');
  const msg = document.getElementById('ctrlLinkMsg');
  if (!badge || !msg) return;
  if (reason === 'ble') {
    badge.textContent = 'BLUETOOTH BAGLI';
    badge.style.background = 'rgba(22,163,74,0.35)';
    badge.style.borderColor = '#4ade80';
    msg.innerHTML = `<b style="color:#4ade80;">BLUETOOTH LE AKTIF</b> (${escapeHtml(base)}) — Internetin kesilmeden robot kontrolu acik!`;
  } else if (ok) {
    badge.textContent = 'WI-FI BAGLI';
    badge.style.background = 'rgba(22,163,74,0.35)';
    badge.style.borderColor = '#4ade80';
    msg.innerHTML = `<b style="color:#4ade80;">WI-FI BAGLANTI AKTIF</b> (${escapeHtml(base)})`;
  } else if (!navigator.bluetooth) {
    badge.textContent = 'iOS UYARI';
    badge.style.background = 'rgba(217,119,6,0.35)';
    badge.style.borderColor = '#fbbf24';
    msg.innerHTML = 'Bu tarayici (iPhone Safari) Web Bluetooth desteklemez. Bluetooth icin App Store\'dan ucretsiz <b>Bluefy</b> tarayicisiyla ac (Android/PC Chrome doğrudan baglanir).';
  } else if (reason === 'mixed') {
    badge.textContent = 'BT HAZIR';
    badge.style.background = 'rgba(37,99,235,0.35)';
    badge.style.borderColor = '#60a5fa';
    msg.innerHTML = 'Internetin acikken robota baglanmak icin yesil <b>BLUETOOTH BAGLAN</b> butonuna bas (<b>WALL-E Robot</b> sec).';
  } else {
    badge.textContent = 'BAGLI DEGIL';
    badge.style.background = 'rgba(220,38,38,0.3)';
    badge.style.borderColor = '#f87171';
    msg.innerHTML = 'Internetin gitmeden kontrol etmek icin <b>BLUETOOTH BAGLAN</b> butonundan <b>WALL-E Robot</b> cihazini sec.';
  }
}

function getDisplaySongTitle(raw, idx) {
  const cleaned = String(raw || '')
    .replace(/\.(mp3|wav|ogg|aac|flac|m4a)$/i, '')
    .replace(/^0*\d+\s*[-._)]?\s*/, '')
    .trim();
  if (!cleaned && DEFAULT_SD_SONGS[idx]) return DEFAULT_SD_SONGS[idx];
  if (/^(parca|track|song|sarki)\s*\d*$/i.test(cleaned) && DEFAULT_SD_SONGS[idx]) {
    return DEFAULT_SD_SONGS[idx];
  }
  return (cleaned || DEFAULT_SD_SONGS[idx] || `PARCA ${idx + 1}`).toUpperCase();
}

function renderSongList(activeIdx = activePlayingSongIdx) {
  const box = document.getElementById('sdSongList');
  if (!box) return;
  const list = (appState.songs && appState.songs.length) ? appState.songs : DEFAULT_SD_SONGS;
  box.innerHTML = '';
  list.forEach((raw, idx) => {
    const title = getDisplaySongTitle(raw, idx);
    const isPlaying = activeIdx === idx;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'sd-song-btn' + (isPlaying ? ' active' : '');
    btn.dataset.songIdx = String(idx);
    btn.onclick = () => playSongByIdx(idx);
    btn.innerHTML = `
      <span>${idx + 1}. ${escapeHtml(title)}</span>
      <span class="sd-song-tag">${isPlaying ? 'CALIYOR' : 'CAL'}</span>
    `;
    box.appendChild(btn);
  });
}

function populateRemoteSongSelect(songs, activeIdx = -1) {
  if (songs && songs.length) appState.songs = songs;
  renderSongList(activeIdx);
}

function handleBleLine(line) {
  if (!line) return;
  if (line.startsWith('ST:')) {
    try {
      const s = JSON.parse(line.slice(3));
      if (s.l1 !== undefined) updateHudLcd(s.l1, s.l2 || '');
      if (s.bat !== undefined) {
        appState.robotState.batPct = s.bat;
        renderMeters();
      }
      if (s.play !== undefined) {
        appState.robotState.playingSong = s.play || 'DURDURULDU';
      }
      if (s.si !== undefined && s.si >= 0) {
        currentSongIdx = s.si;
        activePlayingSongIdx = s.play ? s.si : -1;
        renderSongList(activePlayingSongIdx);
      } else if (s.play === '') {
        activePlayingSongIdx = -1;
        renderSongList(-1);
      }
      if (s.dn !== undefined) {
        appState.robotState.dance = !!s.dn;
      }
      if (s.vol !== undefined) {
        appState.robotState.vol = s.vol;
        const vr = document.getElementById('volRange');
        const vo = document.getElementById('volOut');
        if (vr && document.activeElement !== vr) vr.value = s.vol;
        if (vo) vo.textContent = s.vol;
      }
      if (s.spd !== undefined) {
        appState.robotState.speed = s.spd;
        const sr = document.getElementById('spdRange');
        const po = document.getElementById('pwmOut');
        if (sr && document.activeElement !== sr) sr.value = s.spd;
        if (po) po.textContent = s.spd;
      }
      const msg = document.getElementById('ctrlLinkMsg');
      if (msg && bleRxChar) {
        const micTxt = s.mic ? `Mic: OK (${s.pk || 0})` : 'Mic: Sinyal Yok';
        const aiTxt = s.ai ? 'AI: Hazir' : 'AI: Ayarlardan Wi-Fi/Key girin';
        msg.innerHTML = `<b style="color:#4ade80;">BLUETOOTH BAGLI</b> | ${micTxt} | ${aiTxt}`;
      }
    } catch (e) {}
  } else if (line.startsWith('SG:')) {
    const raw = line.slice(3).trim();
    if (raw) {
      const list = raw.split('|').filter(Boolean);
      if (list.length) {
        appState.songs = list;
        renderSongList(activePlayingSongIdx);
      }
    }
  } else if (line.startsWith('AI:')) {
    const ans = line.slice(3).trim();
    if (pendingBleAiResolver) {
      const res = pendingBleAiResolver;
      pendingBleAiResolver = null;
      res({ ok: true, answer: ans, _sent: true, _via: 'ble' });
    }
    const out = document.getElementById('remoteAiOut');
    if (out) out.textContent = '> ' + ans;
    updateHudLcd('BULUNAN CEVAP>>>', ans.slice(0, 16));
    playRetroBeep('happy');
  } else if (line.startsWith('ERR:')) {
    const err = line.slice(4).trim();
    if (pendingBleAiResolver) {
      const res = pendingBleAiResolver;
      pendingBleAiResolver = null;
      res({ ok: false, error: err, _sent: true, _via: 'ble' });
    }
    showToast('ROBOT UYARI: ' + err);
  } else if (line.startsWith('OK:')) {
    const msg = line.slice(3).trim();
    if (msg && !msg.startsWith('sfx:')) showToast('ROBOT: ' + msg);
  }
}

function onBleNotify(ev) {
  const chunk = new TextDecoder().decode(ev.target.value);
  bleRxLineBuf += chunk;
  let nl;
  while ((nl = bleRxLineBuf.indexOf('\n')) >= 0) {
    const line = bleRxLineBuf.slice(0, nl).trim();
    bleRxLineBuf = bleRxLineBuf.slice(nl + 1);
    handleBleLine(line);
  }
}

function bleWriteRaw(line) {
  if (!bleRxChar) return Promise.resolve(false);
  bleWriteQueue = bleWriteQueue.then(async () => {
    if (!bleRxChar) return false;
    const payload = new TextEncoder().encode(line + '\n');
    if (bleRxChar.writeValueWithoutResponse) {
      await bleRxChar.writeValueWithoutResponse(payload);
    } else {
      await bleRxChar.writeValue(payload);
    }
    return true;
  }).catch(() => false);
  return bleWriteQueue;
}

async function toggleRobotBle() {
  if (bleDevice && bleDevice.gatt && bleDevice.gatt.connected) {
    bleDevice.gatt.disconnect();
    return;
  }
  await connectRobotBle();
}

async function connectRobotBle() {
  if (!navigator.bluetooth) {
    setRobotLinkStatus(false, '', 'nobt');
    showToast('iPhone Safari Bluetooth desteklemez: Bluefy tarayicisini kullanin veya Android/PC Chrome acin.');
    return false;
  }
  try {
    showToast('WALL-E Bluetooth araniyor...');
    bleDevice = await navigator.bluetooth.requestDevice({
      filters: [{ services: [BLE_SVC_UUID] }, { namePrefix: 'WALL-E' }],
      optionalServices: [BLE_SVC_UUID]
    });
    bleDevice.addEventListener('gattserverdisconnected', () => {
      bleRxChar = null;
      bleTxChar = null;
      bleRxLineBuf = '';
      updateBleButtons(false);
      setRobotLinkStatus(false, '', 'offline');
      showToast('Bluetooth baglantisi kesildi');
    });
    const server = await bleDevice.gatt.connect();
    const svc = await server.getPrimaryService(BLE_SVC_UUID);
    bleRxChar = await svc.getCharacteristic(BLE_RX_UUID);
    bleTxChar = await svc.getCharacteristic(BLE_TX_UUID);
    await bleTxChar.startNotifications();
    bleTxChar.addEventListener('characteristicvaluechanged', onBleNotify);
    updateBleButtons(true);
    setRobotLinkStatus(true, bleDevice.name || 'WALL-E Robot', 'ble');
    showToast('BLUETOOTH BAGLANDI! Internetin acik, robot hazir.');
    await bleWriteRaw('songs');
    await bleWriteRaw('state');
    return true;
  } catch (e) {
    if (e && e.name !== 'NotFoundError') {
      showToast('Bluetooth hatasi: ' + (e.message || e));
    }
    return false;
  }
}

function sendRobotConfigOverBle() {
  if (!bleRxChar) {
    showToast('Once ustten BLUETOOTH BAGLAN ile robota baglan!');
    return;
  }
  const ssid = document.getElementById('bleCfgSsid').value.trim();
  const pass = document.getElementById('bleCfgPass').value.trim();
  const key  = document.getElementById('bleCfgKey').value.trim();
  if (ssid) bleWriteRaw(`cfg:wifi:${ssid}|${pass}`);
  if (key.length >= 10) bleWriteRaw(`cfg:key:${key}`);
  showToast('Ayarlar Bluetooth ile robota gonderildi!');
}

function playSongByIdx(idx) {
  if (idx === '' || idx === undefined) return;
  const i = Number(idx);
  currentSongIdx = i;
  activePlayingSongIdx = i;
  const s = (appState.songs && appState.songs.length) ? appState.songs : DEFAULT_SD_SONGS;
  const title = getDisplaySongTitle(s[i], i);
  renderSongList(i);

  sendRobotAction('play_song', { idx: i }).then(r => {
    if (r && r._sent) {
      appState.robotState.playingSong = title;
      updateHudLcd('MUZIK CALIYOR', title.slice(0, 16));
      showToast(`ROBOTTA CALIYOR: ${i + 1}. ${title}`);
    } else {
      appState.robotState.playingSong = title;
      playRetroBeep('happy');
      showToast(`SD PARCA SECILDI: ${i + 1}. ${title} (BT baglaninca robottan calar)`);
    }
  });
}

async function stopRobotMusic() {
  if (activeWavAudio) { activeWavAudio.pause(); activeWavAudio.currentTime = 0; }
  activePlayingSongIdx = -1;
  appState.robotState.playingSong = 'DURDURULDU';
  renderSongList(-1);
  updateHudLcd('WALLE DINLEMEDE', 'MUZIK DURDU');
  const r = await sendRobotAction('mode', { m: 'stop_music' });
  showToast(r && r._sent ? 'ROBOT MUZIGI DURDURULDU' : 'MUZIK DURDURULDU');
}

function openRobotDirect(url) {
  appState.lanUrl = url;
  const inp = document.getElementById('cfgLanUrl');
  if (inp) inp.value = url;
  saveState();
  window.open(url, '_blank');
}

async function sendRobotAction(endpoint, params = {}) {
  // 1. ÖNCELİK: BLUETOOTH LE (İnternet hiç kesilmeden!)
  if (bleRxChar) {
    let bleLine = '';
    if (endpoint === 'drive') {
      bleLine = (params.cmd === 'speed') ? `drive:speed:${params.val}` : `drive:${params.cmd}`;
    } else if (endpoint === 'sfx') {
      bleLine = `sfx:${params.n || 'walle'}`;
    } else if (endpoint === 'play_song') {
      bleLine = (params.idx !== undefined) ? `song:idx:${params.idx}` : `song:${params.cmd || 'rand'}`;
    } else if (endpoint === 'mode') {
      bleLine = `mode:${params.m || 'solar'}`;
    } else if (endpoint === 'dance') {
      bleLine = 'dance';
    } else if (endpoint === 'volume') {
      bleLine = `vol:${params.val}`;
    } else if (endpoint === 'from_eva') {
      bleLine = `from_eva:${params.msg || 'Seni cok ozledim!'}`;
    } else if (endpoint === 'listen') {
      bleLine = `listen:${params.mode || 'auto'}`;
    } else if (endpoint === 'state') {
      bleLine = 'state';
    } else if (endpoint === 'songs') {
      bleLine = 'songs';
    } else if (endpoint === 'ask') {
      const q = (params.q || '').trim();
      if (!q) return { ok: false, _sent: false };
      return await new Promise(async (resolve) => {
        const timer = setTimeout(() => {
          if (pendingBleAiResolver) { pendingBleAiResolver = null; resolve({ ok: true, _sent: true, _via: 'ble' }); }
        }, 12000);
        pendingBleAiResolver = (data) => { clearTimeout(timer); resolve(data); };
        await bleWriteRaw('ask:' + q);
      });
    }

    if (bleLine) {
      const ok = await bleWriteRaw(bleLine);
      if (ok) return { ok: true, _sent: true, _via: 'ble' };
    }
  }

  // 2. YEREL HTTP / HTTPS KÖPRÜSÜ
  const qs = new URLSearchParams(params).toString();
  const base = (appState.lanUrl || '').replace(/\/$/, '');

  if (base && (base.startsWith('http://') || base.startsWith('https://'))) {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 2500);
      const r = await fetch(`${base}/api/${endpoint}${qs ? '?' + qs : ''}`, {
        mode: 'cors',
        signal: ctrl.signal
      });
      clearTimeout(timer);
      if (r.ok) {
        const data = await r.json().catch(() => ({ ok: true }));
        setRobotLinkStatus(true, base);
        return { ...data, _sent: true, _via: 'lan' };
      }
    } catch (e) {
      const isMixed = location.protocol === 'https:' && base.startsWith('http://');
      setRobotLinkStatus(false, base, isMixed ? 'mixed' : 'offline');
    }
  } else {
    setRobotLinkStatus(false, base, 'offline');
  }

  if (appState.cloudDbUrl && appState.cloudDbUrl.startsWith('https://')) {
    try {
      const dbBase = appState.cloudDbUrl.replace(/\/$/, '');
      const r = await fetch(`${dbBase}/walle_cmd.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ endpoint, params, ts: Date.now() })
      });
      if (r.ok) return { ok: true, _sent: true, _via: 'cloud' };
    } catch (e) {}
  }
  return { ok: false, _sent: false };
}

async function syncRobotStatus(manualClick = false) {
  if (bleRxChar) {
    await bleWriteRaw('songs');
    await bleWriteRaw('state');
    if (manualClick) showToast('Bluetooth ile robot durumu yenilendi!');
    return;
  }
  const s = await sendRobotAction('state');
  if (!s || !s._sent) {
    if (manualClick) {
      showToast(navigator.bluetooth
        ? 'Once BLUETOOTH BAGLAN butonuna basip WALL-E Robot sec!'
        : 'iPhone Safari Bluetooth desteklemez -> Bluefy tarayicisini kullanin.');
    }
    return;
  }
  if (s.lcd1 !== undefined) updateHudLcd(s.lcd1, s.lcd2 || '');
  if (s.bat_pct !== undefined) {
    appState.robotState.batPct = s.bat_pct;
    renderMeters();
  }
  if (s.playing_song !== undefined) {
    appState.robotState.playingSong = s.playing_song || 'DURDURULDU';
    const lbl = document.getElementById('remoteSongLbl');
    if (lbl) lbl.textContent = appState.robotState.playingSong;
  }
  if (s.song_idx !== undefined && s.song_idx >= 0) currentSongIdx = s.song_idx;
  const sg = await sendRobotAction('songs');
  if (sg && sg.songs && sg.songs.length) {
    appState.songs = sg.songs;
    populateRemoteSongSelect(sg.songs, currentSongIdx);
  }
  if (manualClick) showToast('ROBOT CANLI DURUMU ESITLENDI!');
}

function triggerEvaSurprise() {
  updateHudLcd('MESAJ GONDERIYOR', 'HEDEF >>> EVA');
  playRetroBeep('eva');
  sendRobotAction('listen', { mode: 'eva' }).then(r => {
    if (r && r._sent) showToast('EVA SURPRIZI ROBOTA GONDERILDI [360 DONUS + EVA!]');
    else showToast('EVA SESI CALINDI (Robot icin 192.168.4.1 ac)');
  });
}

function triggerSfx(name) {
  playRetroBeep(name);
  updateHudLcd('WALL-E SES', `EFEKT: ${name.toUpperCase()}`);
  sendRobotAction('sfx', { n: name }).then(r => {
    if (r && r._sent) showToast(`ROBOTTA SES CALINDI: ${name.toUpperCase()}`);
    else showToast(`SES ONIZLEME CALINDI: ${name.toUpperCase()} (Robot bagli degil)`);
  });
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

async function triggerMusic(cmd) {
  if (cmd === 'stop') return stopRobotMusic();

  const s = appState.songs && appState.songs.length ? appState.songs : DEFAULT_SD_SONGS;
  if (cmd === 'next') currentSongIdx = (currentSongIdx + 1) % s.length;
  else if (cmd === 'prev') currentSongIdx = (currentSongIdx - 1 + s.length) % s.length;
  else if (cmd === 'rand') {
    let nextIdx = Math.floor(Math.random() * s.length);
    if (s.length > 1 && nextIdx === currentSongIdx) nextIdx = (nextIdx + 1) % s.length;
    currentSongIdx = nextIdx;
  }
  return playSongByIdx(currentSongIdx);
}

function toggleDance() {
  appState.robotState.dance = !appState.robotState.dance;
  const db = document.getElementById('danceToggleBtn');
  if (db) db.textContent = appState.robotState.dance ? 'SARKIDA DANS: ACIK' : 'SARKIDA DANS: KAPALI';
  sendRobotAction('dance');
}

function resetAiMicBtn() {
  const btn = document.getElementById('aiMicAskBtn');
  const badge = document.getElementById('aiModeBadge');
  aiListening = false;
  if (btn) {
    btn.classList.remove('danger');
    btn.classList.add('cyan');
    btn.innerHTML = '<span class="px-ico sm" data-ico="mic"></span> MIKROFONLA SOR';
    renderPixelIcons(btn);
  }
  if (badge) badge.textContent = 'HAZIR';
}

function askAiWithMic() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (aiListening && aiSpeechRec) {
    try { aiSpeechRec.stop(); } catch (e) {}
    resetAiMicBtn();
    return;
  }

  if (SpeechRec) {
    try {
      const rec = new SpeechRec();
      aiSpeechRec = rec;
      rec.lang = 'tr-TR';
      rec.interimResults = true;
      rec.maxAlternatives = 1;

      const btn = document.getElementById('aiMicAskBtn');
      const badge = document.getElementById('aiModeBadge');
      const inp = document.getElementById('remoteAiInput');
      const out = document.getElementById('remoteAiOut');

      aiListening = true;
      if (btn) {
        btn.classList.remove('cyan');
        btn.classList.add('danger');
        btn.innerHTML = '<span class="px-ico sm" data-ico="mic"></span> DINLIYOR... [DUR]';
        renderPixelIcons(btn);
      }
      if (badge) badge.textContent = 'DINLIYOR';
      if (out) out.textContent = '> MIKROFON ACIK, KONUSABILIRSIN...';

      let finalTranscript = '';
      let lastTranscript = '';
      rec.onresult = (ev) => {
        let interim = '';
        for (let i = ev.resultIndex; i < ev.results.length; i++) {
          const t = ev.results[i][0].transcript;
          if (ev.results[i].isFinal) finalTranscript += t + ' ';
          else interim += t;
        }
        const combined = (finalTranscript + interim).trim();
        if (combined) lastTranscript = combined;
        if (inp && combined) inp.value = combined;
      };
      rec.onerror = (ev) => {
        resetAiMicBtn();
        if ((bleRxChar || robotLinkOk) && ev.error !== 'not-allowed') {
          sendRobotAction('listen', { mode: 'auto' });
          if (out) out.textContent = '> WALL-E MIKROFONU DINLIYOR...';
        } else {
          if (out) out.textContent = '> MIKROFON IZNI ALINAMADI. YAZARAK SORABILIRSIN.';
          showToast('MIKROFON IZNI VERILMEDI');
        }
      };
      rec.onend = () => {
        const spoken = (finalTranscript || lastTranscript || '').trim();
        resetAiMicBtn();
        if (spoken) sendRemoteAi();
      };
      rec.start();
      return;
    } catch (e) {
      resetAiMicBtn();
    }
  }

  if (bleRxChar || robotLinkOk) {
    const out = document.getElementById('remoteAiOut');
    if (out) out.textContent = '> WALL-E MIKROFONU DINLIYOR...';
    sendRobotAction('listen', { mode: 'auto' });
    showToast('WALL-E MIKROFONU DINLEMEYE BASLADI');
  } else {
    showToast('TARAYICI SES TANIMA DESTEKLEMIYOR - YAZILI SOR');
  }
}

function sendRemoteAi() {
  if (aiListening && aiSpeechRec) {
    try { aiSpeechRec.stop(); } catch (e) {}
    resetAiMicBtn();
  }
  const inp = document.getElementById('remoteAiInput');
  const out = document.getElementById('remoteAiOut');
  const badge = document.getElementById('aiModeBadge');
  const q = inp ? inp.value.trim() : '';
  if (!q) { showToast('LUTFEN BIR SORU YAZIN'); return; }
  if (out) out.textContent = '> WALL-E ARASTIRIYOR...';
  if (badge) badge.textContent = 'ARASTIRIYOR';
  updateHudLcd('WALLE DINLIYOR', 'ARASTIRIYOR...');
  sendRobotAction('ask', { q }).then((res) => {
    const ans = (res && res.answer) ? res.answer : `("${q.slice(0, 32)}") WALL-E & EVA icin hep hazirim!`;
    if (out) out.textContent = '> ' + ans;
    if (badge) badge.textContent = (res && res._sent) ? 'CEVAPLANDI' : 'HAZIR';
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
  renderSentNotes();
  renderNotes();
  renderVoices();
  renderSongList(activePlayingSongIdx);
  initMap();

  document.getElementById('cfgSince').value = appState.sinceDate;
  document.getElementById('cfgLanUrl').value = appState.lanUrl;
  document.getElementById('cfgCloudUrl').value = appState.cloudDbUrl || '';
  document.getElementById('cfgQuotaMb').value = String(appState.quotaMb || 5);
  document.getElementById('cfgAlertEmail').value = appState.alertEmail || 'sudesenturk6507@gmail.com';
  document.getElementById('cfgAlertWebhook').value = appState.alertWebhook || '';
  document.getElementById('pwmOut').textContent = appState.robotState.speed;
  document.getElementById('spdRange').value = appState.robotState.speed;
  document.getElementById('volOut').textContent = appState.robotState.vol;
  document.getElementById('volRange').value = appState.robotState.vol;

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
  setRobotLinkStatus(false, '', navigator.bluetooth ? 'mixed' : 'nobt');
  syncRobotStatus(false);

  // IndexedDB'deki buyuk/tam fotograf, video ve ses arsivini yukle ve ekrani tazele
  idbLoadState().then((idbData) => {
    if (!idbData || !Array.isArray(idbData.pins)) return;
    const idbMedia = idbData.pins.reduce((n, p) => n + ((p.photos && p.photos.length) || 0) + ((p.videos && p.videos.length) || 0), 0);
    const lsMedia = (appState.pins || []).reduce((n, p) => n + ((p.photos && p.photos.length) || 0) + ((p.videos && p.videos.length) || 0), 0);
    const idbVoiceSize = (idbData.voices || []).reduce((n, v) => n + ((v.dataUrl && v.dataUrl.length) || 0), 0);
    const lsVoiceSize = (appState.voices || []).reduce((n, v) => n + ((v.dataUrl && v.dataUrl.length) || 0), 0);
    if (idbMedia > lsMedia || idbVoiceSize > lsVoiceSize || idbData.pins.length >= (appState.pins || []).length) {
      appState = { ...structuredClone(DEFAULT_DATA), ...idbData };
      appState.songs = migrateSongsIfLegacy(appState.songs);
      renderMapMarkers();
      renderPinPillsAndDetail();
      renderSentNotes();
      renderNotes();
      renderVoices();
      renderSongList(activePlayingSongIdx);
      updateStorageMeter();
    }
  });
});
