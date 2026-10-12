import styles from './Sponsors.module.css';

const partners = [
  {
    name: 'Website',
    url: 'https://blindvisionassistant.vercel.app',
    desc: 'Project showcase and judge guide',
    role: 'Open',
  },
  {
    name: 'GitHub Release',
    url: 'https://github.com/yugalkishor-agi/Blind-Vision-Assistant/releases/tag/release',
    desc: 'APK, source package, and remote-model notebook',
    role: 'Download',
  },
  {
    name: 'Source Code',
    url: 'https://github.com/yugalkishor-agi/Blind-Vision-Assistant',
    desc: 'Flutter application repository',
    role: 'Inspect',
  },
];

export default function Sponsors() {
  return (
    <section className={styles.section}>
      {/* Label row */}
      <div className={styles.labelRow}>
        <p className={styles.label}>PROJECT LINKS</p>
        <p className={styles.sublabel}>
          The links judges need to inspect and try the actual project
        </p>
      </div>

      {/* Partner cards */}
      <div className={styles.grid}>
        {partners.map((p, i) => (
          <a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.cardTop}>
              <span className={styles.partnerName}>{p.name}</span>
              <span className={styles.roleBadge}>{p.role}</span>
            </div>
            <p className={styles.partnerDesc}>{p.desc}</p>
            <span className={styles.visitLink}>Visit site →</span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.footerBrand}>◈ VedX</span>
          <span className={styles.footerDivider} />
          <span className={styles.footerHack}>neatlogs Hackathon 2026</span>
        </div>
        <div className={styles.footerRight}>
          <span className={styles.footerCredit}>
            Made with ❤️ by <strong>Yugal Kishor</strong> &amp; <strong>Harshvardhan Singh</strong>
          </span>
          <span className={styles.footerDivider} />
          <a
            href="https://github.com/yugalkishor-agi/Blind-Vision-Assistant"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
