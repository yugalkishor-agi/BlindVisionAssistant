import styles from './NeatLogs.module.css';

// Arrow SVG
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const IconActivity = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

const traces = [
  {
    id: '6cd1b6dba226a19126bdc2350216dc06',
    spans: 11,
    title: 'Multimodal Vision Pipeline',
    desc: 'Full end-to-end: Bluetooth tactile trigger → camera 512×512 → ML Kit OCR → Gemma 3n streaming (386 tokens, TTFT 348ms, 20.8 tok/s) → TTS clause chunker.',
  },
  {
    id: '57dac27c617c2aa80a16bed9f8ed6d70',
    spans: 5,
    title: 'Voice Dictation & Intent Router',
    desc: 'STT loop with SpeechListenOptions, targeted intent routing bypassing generic describer for medicine/expiry queries, cyclic dependency decoupling.',
  },
  {
    id: 'a91cd2ebf9834c0a05de37210e442bf6',
    spans: 6,
    title: 'Model Downloader & Scoped Storage',
    desc: 'HuggingFace PKCE OAuth → 2.85 GB background download via FlutterDownloader isolate with WakelockPlus → Android FileProvider scoped storage → SHA-256 checksum.',
  },
  {
    id: '7f74c735b7227b4c3f9eb092ad25845a',
    spans: 5,
    title: 'Error Recovery & Accessibility Self-Healing',
    desc: 'Traps uninitialized hardware / corrupted weights → navigates ErrorRecoveryPage with automatic TTS diagnostic vocalization → single-tap 64dp retry reset.',
  },
  {
    id: '869614e3535d93f661b512558bff0770',
    spans: 6,
    title: 'Repo Refactor & Polish Pipeline',
    desc: 'Branded splash screen, trailing brace fix, dead null-aware operator cleanup, Android SDK 35 Gradle stabilisation, and Entire code-graph checkpoint sync.',
  },
];

const stats = [
  { value: '33',     label: 'Total spans logged' },
  { value: '5',      label: 'Trace pipelines' },
  { value: '100%',   label: 'HTTP 200 OK ingestion' },
  { value: '348ms',  label: 'Tracked TTFT (Gemma)' },
];

export default function NeatLogs() {
  return (
    <section className={styles.section} id="neatlogs">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.label}>BUILT WITH NEATLOGS</p>
          <h2 className={styles.title}>
            Every pipeline<br />traced & verified
          </h2>
          <p className={styles.subtitle}>
            All five core subsystems are instrumented with structured multi-span
            telemetry via <strong>NeatLogs</strong> — fully on-device, no cloud shortcuts.
          </p>
          <a
            href="https://neatlogs.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.neatlogsLink}
          >
            neatlogs.com <ArrowRight />
          </a>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statBox}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trace table */}
      <div className={styles.tableHeader}>
        <span className={styles.col1}>Pipeline</span>
        <span className={styles.col2}>Spans</span>
        <span className={styles.col3}>Trace ID</span>
      </div>

      <div className={styles.traceList}>
        {traces.map((t, i) => (
          <div key={i} className={styles.traceRow}>
            <div className={styles.col1}>
              <div className={styles.traceIcon}><IconActivity /></div>
              <div>
                <p className={styles.traceTitle}>{t.title}</p>
                <p className={styles.traceDesc}>{t.desc}</p>
              </div>
            </div>
            <div className={styles.col2}>
              <span className={styles.spanBadge}>{t.spans} spans</span>
            </div>
            <div className={styles.col3}>
              <code className={styles.traceId}>{t.id.slice(0, 16)}…</code>
              <span className={styles.verifiedDot} title="Verified 200 OK">✓</span>
            </div>
          </div>
        ))}
      </div>

      {/* How it's used callout */}
      <div className={styles.callout}>
        <div className={styles.calloutInner}>
          <p className={styles.calloutLabel}>HOW NEATLOGS IS USED IN THIS PROJECT</p>
          <p className={styles.calloutText}>
            Each subsystem — camera capture, on-device OCR, Gemma 3n streaming inference,
            TTS output, OAuth download, and error recovery — emits structured OpenTelemetry-style
            spans to <code>ingest.neatlogs.com/v1/trace</code>. Real device timings, token counts,
            and hardware profiles are attached as span attributes so every claimed performance
            number is evidence-backed, not estimated.
          </p>
        </div>
      </div>
    </section>
  );
}
