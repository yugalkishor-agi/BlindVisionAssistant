import styles from './Team.module.css';

const REPO = 'https://github.com/yugalkishor-agi/Blind-Vision-Assistant';
const APK  = 'https://github.com/yugalkishor-agi/Blind-Vision-Assistant/releases';

// SVG icons for team cards
const IconCode = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const IconCane = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
    <circle cx="12" cy="5" r="2"/>
    <path d="M12 7v6l3 5"/><path d="M9 13l3 1"/>
    <path d="M15 18l2 3"/>
  </svg>
);

const team = [
  {
    Icon: IconCode,
    name: 'Yugal Kishor',
    role: 'Lead Developer & Team Lead',
    contributions: [
      'Full Flutter app architecture',
      'Gemma 3n + Google AI Edge integration',
      '8BitDo controller & keyboard event handling',
      'ML Kit OCR pipeline',
      'TalkBack & VoiceOver compatibility',
      '5× inference speed optimisation',
    ],
    accent: false,
  },
  {
    Icon: IconCane,
    name: 'Harshvardhan Singh',
    role: 'Co-developer & Lead Tester',
    note: 'Completely blind — no light perception.',
    contributions: [
      'Real-world daily usage testing',
      'Accessibility UX feedback',
      'Audio feedback design input',
      'Controller usability testing',
      'Edge-case scenario discovery',
      'Final demo recording & validation',
    ],
    accent: true,
  },
];

export default function Team() {
  return (
    <section className={styles.section} id="team">
      {/* Team */}
      <div className={styles.teamHeader}>
        <p className={styles.label}>THE PEOPLE BEHIND IT</p>
        <h2 className={styles.title}>Team VedX</h2>
        <p className={styles.sub}>NeatLogic Hackathon — two developers, one real-world mission.</p>
      </div>

      <div className={styles.teamGrid}>
        {team.map((m, i) => (
          <div key={i} className={`${styles.memberCard} ${m.accent ? styles.memberCardAccent : ''}`}>
            <div className={`${styles.memberIconWrap} ${m.accent ? styles.memberIconAccent : ''}`}>
              <m.Icon />
            </div>
            <div className={styles.memberInfo}>
              <div className={styles.memberMeta}>
                <h3 className={styles.memberName}>{m.name}</h3>
                <span className={`${styles.memberRoleBadge} ${m.accent ? styles.badgeAccent : ''}`}>
                  {m.role}
                </span>
              </div>
              {m.note && <p className={styles.memberNote}>{m.note}</p>}
              <ul className={styles.contribList}>
                {m.contributions.map((c, j) => (
                  <li key={j}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Download CTA */}
      <div className={styles.download}>
        <div className={styles.downloadLeft}>
          <p className={styles.label}>GET STARTED</p>
          <h2 className={styles.downloadTitle}>
            Try it yourself.
          </h2>
          <p className={styles.downloadSub}>
            Download the APK and try it on any Android phone powerful enough to run Gemma 3n.
            The model downloads on first launch from HuggingFace — no account needed.
          </p>
          <div className={styles.downloadActions}>
            <a href={APK} target="_blank" rel="noopener noreferrer" className={styles.apkBtn}>
              ⬇ Download APK
            </a>
            <a href={REPO} target="_blank" rel="noopener noreferrer" className={styles.ghBtn}>
              View Source →
            </a>
          </div>
        </div>

        <div className={styles.downloadRight}>
          <div className={styles.reqBox}>
            <p className={styles.reqTitle}>Requirements</p>
            <ul className={styles.reqList}>
              <li>Android phone with 6 GB+ RAM</li>
              <li>~4 GB free storage for the model</li>
              <li>WiFi for first-time model download</li>
              <li>Optional: 8BitDo Micro controller</li>
              <li>Optional: chest harness for hands-free use</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p className={styles.footerBrand}>◈ VedX · NeatLogic Hackathon 2026</p>
        <p className={styles.footerCredit}>
          Made with ❤️ by Yugal Kishor &amp; Harshvardhan Singh
        </p>
      </div>
    </section>
  );
}
