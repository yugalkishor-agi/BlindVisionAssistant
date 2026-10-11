import styles from './Navbar.module.css';

const REPO = 'https://github.com/yugalkishor-agi/Blind-Vision-Assistant';

export default function Navbar() {
  const links = [
    { label: 'how it works', href: '#how-it-works' },
    { label: 'features', href: '#features' },
    { label: 'tech stack', href: '#tech-stack' },
    { label: 'neatlogs', href: '#neatlogs' },
    { label: 'team', href: '#team' },
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
      <a
        href={REPO}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ctaSmall}
      >
        GitHub →
      </a>
    </nav>
  );
}
