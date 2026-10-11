import styles from './Features.module.css';

// Inline SVG icons — sharp, consistent, no emoji rendering differences
const icons = {
  wifi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
      <line x1="1" y1="1" x2="23" y2="23"/>
      <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>
      <path d="M10.71 5.05A16 16 0 0 1 22.56 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  gamepad: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
      <line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/>
      <line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/>
      <rect x="2" y="6" width="20" height="12" rx="2"/>
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  type: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
      <polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/>
      <line x1="12" y1="4" x2="12" y2="20"/>
    </svg>
  ),
  accessibility: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
      <circle cx="12" cy="4" r="2"/><path d="M19 13s-5.4-1-7-1-7 1-7 1"/>
      <path d="M5.6 13.8 4 20l8-2 8 2-1.6-6.2"/><path d="M9 13v4l3 1 3-1v-4"/>
    </svg>
  ),
  music: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
      <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
    </svg>
  ),
  layout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
    </svg>
  ),
};

const features = [
  { iconKey: 'wifi',          title: 'Fully Offline',          tag: 'Privacy',       desc: 'No internet needed. The app works everywhere — underground, in rural areas, at hospitals. Your data never leaves your phone.' },
  { iconKey: 'lock',          title: 'Zero Data Leakage',      tag: 'Security',      desc: 'Photos are processed entirely on-device. No cloud servers, no foreign data-protection rules, no privacy risk.' },
  { iconKey: 'gamepad',       title: 'Physical Controller',    tag: 'UX',            desc: 'The 8BitDo Micro controller lets users interact without touching the screen — ideal when the phone is in a chest harness.' },
  { iconKey: 'zap',           title: '5× Faster Inference',    tag: 'Performance',   desc: 'By closing the camera before inference, response time dropped from 50 seconds to 5 seconds on the same hardware.' },
  { iconKey: 'type',          title: 'Accurate OCR',           tag: 'Accuracy',      desc: 'Google ML Kit reads text on-device in under 1 second — far more reliable than asking Gemma alone to read text.' },
  { iconKey: 'accessibility', title: 'TalkBack + VoiceOver',   tag: 'Accessibility', desc: 'Full screen-reader support on Android and iOS. Large, labelled buttons. Loading music so users know the AI is thinking.' },
  { iconKey: 'music',         title: 'Rich Audio Feedback',    tag: 'Audio',         desc: 'Dictation chimes, send whoosh, loading music, and voice confirmations — every action has a sound so nothing is silent.' },
  { iconKey: 'layout',        title: 'Single Screen Design',   tag: 'Design',        desc: 'Everything on one screen. No navigation back and forth. Asking a new question is always one button press away.' },
];

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.sectionHeader}>
        <div className={styles.left}>
          <p className={styles.label}>WHAT MAKES IT DIFFERENT</p>
          <h2 className={styles.title}>Features built<br />for real use</h2>
        </div>
        <p className={styles.desc}>
          Every decision was validated by a completely blind user in real daily scenarios.
          No feature made the cut unless it actually helped.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((f, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardIcon}>{icons[f.iconKey]}</span>
              <span className={styles.cardTag}>{f.tag}</span>
            </div>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardDesc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
