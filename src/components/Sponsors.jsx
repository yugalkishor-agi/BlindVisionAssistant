import styles from './Sponsors.module.css';

const partners = [
  {
    name: 'NeatLogs',
    url: 'https://neatlogs.com',
    desc: 'Telemetry & trace pipeline',
    role: 'Observability Partner',
  },
  {
    name: 'Entire.io',
    url: 'https://entire.io',
    desc: 'Code graph & agent memory',
    role: 'Code Intelligence Partner',
  },
  {
    name: 'cfo.ai',
    url: 'https://cfo.ai',
    desc: 'Financial modelling & runway',
    role: 'Business Partner',
  },
  {
    name: 'Orchestrator.inc',
    url: 'https://orchestrator.inc',
    desc: 'Agent orchestration platform',
    role: 'Infrastructure Partner',
  },
];

export default function Sponsors() {
  return (
    <section className={styles.section}>
      {/* Label row */}
      <div className={styles.labelRow}>
        <p className={styles.label}>HACKATHON PARTNERS</p>
        <p className={styles.sublabel}>
          NeatLogic Hackathon — built using all required partner tools
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
          <span className={styles.footerHack}>NeatLogic Hackathon 2026</span>
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
