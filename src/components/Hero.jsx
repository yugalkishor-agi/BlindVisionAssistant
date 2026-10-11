import styles from './Hero.module.css';

const REPO = 'https://github.com/yugalkishor-agi/Blind-Vision-Assistant';
const APK  = 'https://github.com/yugalkishor-agi/Blind-Vision-Assistant/releases';

// Clean SVG icons — no emoji, proper scalable art
const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
);
const IconMic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <rect x="9" y="2" width="6" height="12" rx="3"/>
    <path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="9" y1="22" x2="15" y2="22"/>
  </svg>
);
const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);
const IconBuilding = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/>
  </svg>
);
const IconEye = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconVolume = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
  </svg>
);

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Left column */}
      <div className={styles.left}>
        <p className={styles.tag}>NeatLogic Hackathon · Team VedX</p>
        <h1 className={styles.headline}>
          AI that sees<br />
          for those who{' '}
          <span className={styles.highlight}>
            can<span className={styles.eyeAnim}>👁</span>t.
          </span>
        </h1>
        <p className={styles.sub}>
          An offline, on-device AI assistant for blind users — navigation,
          shopping, and text reading with zero internet and zero data sharing.
        </p>
        <div className={styles.actions}>
          <a href={APK} target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
            Download APK →
          </a>
          <a href={REPO} target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
            View on GitHub
          </a>
        </div>
        <div className={styles.badges}>
          <span className={styles.badge}>100% Offline</span>
          <span className={styles.badge}>No Photos Shared</span>
          <span className={styles.badge}>Gemma 3n</span>
          <span className={styles.badge}>Flutter</span>
        </div>
      </div>

      {/* Right column — orbital diagram */}
      <div className={styles.right}>
        <div className={styles.orbit}>
          <div className={styles.orbitRing} />
          <div className={styles.centerNode}>
            <img src="/logo.png" alt="VedX Logo" className={styles.logo} />
          </div>
          <div className={`${styles.node} ${styles.nodeTop}`}><IconUser /></div>
          <div className={`${styles.node} ${styles.nodeLeft}`}><IconMic /></div>
          <div className={`${styles.node} ${styles.nodeBottom}`}><IconRocket /></div>
          <div className={`${styles.node} ${styles.nodeRight}`}><IconBuilding /></div>
        </div>

        {/* Floating cards */}
        <div className={`${styles.floatCard} ${styles.cardOrange}`}>
          <strong>Offline-first AI</strong>
        </div>
        <div className={`${styles.floatCard} ${styles.cardWhite1}`}>
          <span className={styles.cardSvg}><IconEye /></span>
          <div>
            <strong>Vision activated</strong>
            <p>Camera opened, photo taken</p>
          </div>
        </div>
        <div className={`${styles.floatCard} ${styles.cardWhite2}`}>
          <span className={styles.cardSvg}><IconVolume /></span>
          <div>
            <strong>Answer spoken</strong>
            <p>Response streaming live!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
