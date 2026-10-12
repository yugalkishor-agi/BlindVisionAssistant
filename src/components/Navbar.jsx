import styles from './Navbar.module.css';

const REPO = 'https://github.com/yugalkishor-agi/Blind-Vision-Assistant';
const APK  = 'https://github.com/yugalkishor-agi/Blind-Vision-Assistant/releases/tag/release';

export default function Navbar() {
  const links = [
    { label: 'how it works', href: '#how-it-works' },
    { label: 'features',     href: '#features' },
    { label: 'tech stack',   href: '#tech-stack' },
    { label: 'for judges',   href: '#for-judges' },
    { label: 'project notes',href: '#neatlogs' },
    { label: 'team',         href: '#team' },
  ];

  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.brand}>
        <span className={styles.brandIcon}>◈</span> VedX
      </a>
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={styles.link}>{l.label}</a>
          </li>
        ))}
      </ul>
      <div className={styles.navActions}>
        <a href={REPO} target="_blank" rel="noopener noreferrer" className={styles.ctaGhost}>
          GitHub
        </a>
        <a href={APK} target="_blank" rel="noopener noreferrer" className={styles.ctaSmall}>
          Download APK →
        </a>
      </div>
    </nav>
  );
}
