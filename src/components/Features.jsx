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
  agent: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
    </svg>
  ),
};

const features = [
  { iconKey: 'agent',         title: 'AI Agent — Not Just an Assistant', tag: 'Intelligence',  desc: 'VedX is no longer a fixed pipeline. The built-in intent router reads your question and decides on its own: does this need the camera? Does it need OCR? Or is a plain text answer enough? You ask — the agent figures out the rest.' },
  { iconKey: 'wifi',          title: 'Offline-First',          tag: 'Privacy',       desc: 'On a compatible device, Gemma and OCR can run locally without an inference API. Remote mode is available separately for emulator and demo testing.' },
  { iconKey: 'lock',          title: 'Local Privacy Mode',     tag: 'Security',      desc: 'In on-device mode, captured images stay on the phone. If remote mode is enabled, prompts and images are sent to the configured server.' },
  { iconKey: 'gamepad',       title: 'Physical Controller',    tag: 'UX',            desc: 'The 8BitDo Micro controller lets users interact without touching the screen — ideal when the phone is in a chest harness.' },
  { iconKey: 'zap',           title: 'Snapshot Camera Flow',   tag: 'Performance',   desc: 'The app opens the camera only when a request needs an image, captures a snapshot, and disposes the camera before inference.' },
  { iconKey: 'type',          title: 'On-Device OCR',           tag: 'Accuracy',      desc: 'Google ML Kit is used for text-reading requests and its result is supplied as grounded context to the answer stage.' },
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
          VedX evolved from a simple assistant into an AI agent — one that reasons about
          your question before acting. The local and remote paths are shown separately
          so the demo does not overpromise what runs on every device.
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
