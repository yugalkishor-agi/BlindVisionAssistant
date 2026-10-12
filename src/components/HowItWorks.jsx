import styles from './HowItWorks.module.css';

// Clean SVG icons — no emoji dependency
const IconMic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <rect x="9" y="2" width="6" height="12" rx="3"/>
    <path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="9" y1="22" x2="15" y2="22"/>
  </svg>
);
const IconCamera = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);
const IconScan = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/>
    <path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
    <line x1="7" y1="12" x2="17" y2="12"/>
  </svg>
);
const IconBrain = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M12 2a5 5 0 0 1 5 5 5 5 0 0 1-1.4 3.4A5 5 0 0 1 17 14a5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 1.4-3.6A5 5 0 0 1 7 7a5 5 0 0 1 5-5z"/>
    <line x1="12" y1="7" x2="12" y2="17"/><line x1="7" y1="12" x2="17" y2="12"/>
  </svg>
);
const IconVolume = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
  </svg>
);

const steps = [
  {
    num: '01',
    Icon: IconMic,
    title: 'Press & Ask',
    desc: 'The user presses a button on the 8BitDo controller (or taps the screen) and speaks their question. Speech-to-text captures it as plain text.',
  },
  {
    num: '02',
    Icon: IconBrain,
    title: 'Agent Decides — No Fixed Pipeline',
    desc: 'The intent router analyses the question and picks a path: (A) needs a photo → capture + OCR + Gemma vision, (B) needs text from camera → capture + ML Kit OCR only, (C) pure knowledge question → straight to Gemma, no camera opened at all.',
    isDecision: true,
  },
  {
    num: '03',
    Icon: IconCamera,
    title: 'Camera & OCR — Only When Needed',
    desc: 'If the agent decided vision is required, the app silently captures a photo in under a second. If the question involves printed text (labels, signs, bills), ML Kit OCR extracts it on-device before passing it to the model.',
  },
  {
    num: '04',
    Icon: IconScan,
    title: 'Gemma 3n Generates the Answer',
    desc: 'The question — enriched with photo and/or OCR text only when the agent requested them — goes to Gemma 3n. Local inference streams tokens; remote mode returns the hosted response after inference completes.',
  },
  {
    num: '05',
    Icon: IconVolume,
    title: 'Answer Spoken Live',
    desc: 'For local streaming responses, text-to-speech can start before the full answer is ready. Remote responses are spoken after the server returns them. Audio cues indicate progress.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.header}>
        <p className={styles.label}>REAL FLOW · AI AGENT</p>
        <h2 className={styles.title}>How it works</h2>
        <p className={styles.subtitle}>
          VedX is not a fixed pipeline — it's an agent. It reads your question,
          decides what tools it needs, and acts. No camera is opened unless necessary.
          OCR and vision run locally in on-device mode, or through the configured remote
          backend when remote mode is enabled.
        </p>
      </div>

      <div className={styles.steps}>
        {steps.map(({ num, Icon, title, desc, isDecision }, i) => (
          <div key={i} className={`${styles.step} ${isDecision ? styles.stepDecision : ''}`}>
            <div className={styles.stepNum}>{num}</div>
            <div className={styles.stepContent}>
              <div className={styles.stepIcon}><Icon /></div>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Checklist row */}
      <div className={styles.checklist}>
        <div className={styles.checklistLabel}>
          <span className={styles.checklistTag}>WHAT THE{'\n'}AGENT CAN DO</span>
          <span className={styles.arrow}>→</span>
        </div>
        <div className={styles.checklistItems}>
          {[
            ['Understand surroundings',  'Snapshot + model', 'Vision + Agent'],
            ['Read printed text',         'ML Kit OCR',      'OCR + answer'],
            ['Identify products',         'Gemma 3n',       'Vision + Agent'],
            ['Answer knowledge questions','No camera used', 'Text only'],
            ['Describe scenes',           'Image required',  'Vision + Agent'],
          ].map(([task, time, cat], i) => (
            <div key={i} className={styles.checklistRow}>
              <span className={styles.checkbox} />
              <span className={styles.checkTask}>{task}</span>
              <span className={styles.checkTime}>{time}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.checkCat}>{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
