import styles from './NeatLogs.module.css';

const implemented = [
  {
    title: 'Agentic routing',
    desc: 'A text-only decision step chooses final_answer, ask_user, run_ocr, detect_scene, or analyze_both.',
    status: 'Implemented',
  },
  {
    title: 'Lazy camera capture',
    desc: 'The camera is opened only for an action that needs an image, then the controller is disposed after the snapshot.',
    status: 'Implemented',
  },
  {
    title: 'OCR tool path',
    desc: 'ML Kit text recognition is used for text-reading requests and its output is passed into the answer flow.',
    status: 'Implemented',
  },
  {
    title: 'Local and remote backends',
    desc: 'The app supports on-device Gemma and an optional OpenAI-compatible remote server for emulator or demo testing.',
    status: 'Implemented',
  },
  {
    title: 'Streaming local speech',
    desc: 'Local model tokens can be forwarded to the streaming TTS service. The remote backend returns a completed response.',
    status: 'Implemented',
  },
];

const IconActivity = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

export default function NeatLogs() {
  return (
    <section className={styles.section} id="neatlogs">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.label}>IMPLEMENTED IN THE APP</p>
          <h2 className={styles.title}>
            The real flow,<br />without the hype
          </h2>
          <p className={styles.subtitle}>
            These are the core behaviors present in the Flutter application. We are
            not presenting manually created trace IDs or benchmark numbers as runtime telemetry.
          </p>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statBox}><span className={styles.statValue}>5</span><span className={styles.statLabel}>Agent actions</span></div>
          <div className={styles.statBox}><span className={styles.statValue}>2</span><span className={styles.statLabel}>Model backends</span></div>
          <div className={styles.statBox}><span className={styles.statValue}>1</span><span className={styles.statLabel}>Snapshot per vision turn</span></div>
          <div className={styles.statBox}><span className={styles.statValue}>0</span><span className={styles.statLabel}>Built-in app telemetry claims</span></div>
        </div>
      </div>

      <div className={styles.tableHeader}>
        <span className={styles.col1}>Capability</span>
        <span className={styles.col2}>Status</span>
        <span className={styles.col3}>Evidence</span>
      </div>

      <div className={styles.traceList}>
        {implemented.map((item) => (
          <div key={item.title} className={styles.traceRow}>
            <div className={styles.col1}>
              <div className={styles.traceIcon}><IconActivity /></div>
              <div>
                <p className={styles.traceTitle}>{item.title}</p>
                <p className={styles.traceDesc}>{item.desc}</p>
              </div>
            </div>
            <div className={styles.col2}><span className={styles.spanBadge}>{item.status}</span></div>
            <div className={styles.col3}>
              <code className={styles.traceId}>Flutter source</code>
              <span className={styles.verifiedDot} title="Present in source">✓</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.callout}>
        <div className={styles.calloutInner}>
          <p className={styles.calloutLabel}>HONEST LIMITATION</p>
          <p className={styles.calloutText}>
            The showcase does not claim universal response times. Local inference speed
            depends on the phone and model runtime, while remote mode depends on Kaggle,
            the server, and the Cloudflare tunnel.
          </p>
        </div>
      </div>
    </section>
  );
}
