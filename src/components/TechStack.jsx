import styles from './TechStack.module.css';

const REPO = 'https://github.com/yugalkishor-agi/Blind-Vision-Assistant';

const stack = [
  { name: 'Flutter',         role: 'Cross-platform UI',     color: '#0553B1' },
  { name: 'Gemma 3n',        role: 'On-device LLM',         color: '#E8440A' },
  { name: 'Google AI Edge',  role: 'MediaPipe GenAI',        color: '#4285F4' },
  { name: 'ML Kit',          role: 'On-device OCR',         color: '#FBBC05' },
  { name: 'flutter_gemma',   role: 'Gemma integration',     color: '#34A853' },
  { name: 'HuggingFace',     role: 'Model distribution',    color: '#FF9D00' },
  { name: '8BitDo Micro',    role: 'BT controller',         color: '#222222' },
  { name: 'flutter_tts',     role: 'Text-to-speech',        color: '#9C27B0' },
];

const highlights = [
  { value: 'Local', label: 'Primary inference mode' },
  { value: '4-bit', label: 'On-device model format' },
  { value: 'OCR',   label: 'Text-reading tool' },
  { value: 'Remote',label: 'Optional demo backend' },
];

// Arrow SVG
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function TechStack() {
  return (
    <section className={styles.section} id="tech-stack">
      <div className={styles.header}>
        <p className={styles.label}>UNDER THE HOOD</p>
        <h2 className={styles.title}>Built with the<br />best on-device tools</h2>
      </div>

      <div className={styles.body}>
        <div className={styles.stackGrid}>
          {stack.map((item, i) => (
            <div key={i} className={styles.stackItem}>
              <div className={styles.stackDot} style={{ background: item.color }} />
              <div>
                <p className={styles.stackName}>{item.name}</p>
                <p className={styles.stackRole}>{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.statsCol}>
          {highlights.map((h, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statValue}>{h.value}</span>
              <span className={styles.statLabel}>{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture callout */}
      <div className={styles.arch}>
        <div className={styles.archBlock}>
          <span className={styles.archArrow}><ArrowRight /></span>
          <p className={styles.archText}>
            <strong>VedX is an AI agent, not a fixed pipeline.</strong>
            {' '}The intent router reads your question and decides at runtime: open the camera,
            run OCR, both, or neither. Only the tools the question actually needs are invoked —
            keeping unnecessary camera work low. Local mode keeps processing on the
            device; remote mode is an explicit user setting for testing and demos.
          </p>
        </div>
        <div className={styles.archPipeline}>
          {['Voice Input', 'Intent Router', 'Camera + OCR?', 'Gemma 3n', 'TTS Output'].map((s, i, arr) => (
            <div key={i} className={`${styles.pipeStep} ${s === 'Intent Router' ? styles.pipeStepAgent : ''}`}>
              <div className={styles.pipeBox}>{s}</div>
              {i < arr.length - 1 && <span className={styles.pipeArrow}><ArrowRight /></span>}
            </div>
          ))}
        </div>
        <a href={REPO} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
          View source on GitHub →
        </a>
      </div>
    </section>
  );
}
