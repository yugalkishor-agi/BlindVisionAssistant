import styles from './JudgeConnect.module.css';

const APK_URL  = 'https://github.com/yugalkishor-agi/Blind-Vision-Assistant/releases/tag/release';

/* ── SVG Icons ─────────────────────────────────────────────── */
const IconKey = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <circle cx="7.5" cy="15.5" r="5.5"/>
    <path d="M21 2l-9.6 9.6M15.5 7.5l2 2M18 5l2 2"/>
  </svg>
);
const IconNotebook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 9h18M3 15h18M9 3v18"/>
  </svg>
);
const IconCloud = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <circle cx="12" cy="17" r="1"/>
  </svg>
);
const IconAlert = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

/* ── Steps data ─────────────────────────────────────────────── */
const steps = [
  {
    num: '01',
    Icon: IconKey,
    title: 'Add your Hugging Face token to Kaggle',
    points: [
      'Go to huggingface.co → Settings → Access Tokens → create a token with Read access.',
      'In your Kaggle notebook, open the sidebar → Add-ons → Secrets → add a secret named HF_TOKEN and paste your token value.',
      'The notebook cell reads it automatically via UserSecretsClient — you never hard-code the token.',
    ],
    warn: null,
  },
  {
    num: '02',
    Icon: IconNotebook,
    title: 'Run the Kaggle notebook — accept the licence first',
    points: [
      'Open the model page on Hugging Face: google/gemma-3n-E2B-it.',
      'Log in with your Hugging Face account and click "Agree and access repository".',
      'You must also accept Google\'s additional terms and the model licence that appears on that page. Download will be blocked until you do.',
      'Once accepted, go back to Kaggle and run all cells from top to bottom. The notebook starts the FastAPI server on port 8000 and checks its health endpoint before opening the tunnel.',
    ],
    warn: 'Download will silently fail or hang if you skip the licence agreement step on Hugging Face. This is the most common issue judges hit — always verify acceptance before running the notebook.',
  },
  {
    num: '03',
    Icon: IconCloud,
    title: 'Get the Cloudflare tunnel URL',
    points: [
      'The last cell in the notebook downloads cloudflared and starts a tunnel pointed at localhost:8000.',
      'It prints a line like: Public URL: https://something-random.trycloudflare.com',
      'Copy that full URL. It is unique to this session and changes every time you restart the notebook.',
      'The tunnel stays alive as long as the notebook session is running. Keep the browser tab open.',
    ],
    warn: null,
  },
  {
    num: '04',
    Icon: IconPhone,
    title: 'Connect the app to the tunnel',
    points: [
      'Install the APK on your phone or emulator. On first launch the app opens the Model Download page.',
      'Tap the Settings icon → enable "Remote Model" toggle → paste the Cloudflare tunnel URL → save.',
      'The app uses the configured tunnel URL and the notebook API key is kept in the notebook environment. Do not publish or share secrets with the URL.',
      'The app will skip the local model entirely and route all inference to the Kaggle server.',
    ],
    warn: 'On an emulator the camera, microphone, and TTS may behave differently. For full evaluation of the agent — including voice input, camera capture, and spoken responses — a physical Android device is strongly recommended.',
  },
  {
    num: '05',
    Icon: IconDownload,
    title: 'Alternative: use a physical Android phone',
    points: [
      'Download the APK from the release page and install it on a real Android phone.',
      'On first launch the app opens the Model Download page — enable Remote Model in Settings instead of downloading the local model.',
      'Paste the Cloudflare tunnel URL (from Step 03) as the Server URL and save.',
      'The app will now use the Kaggle-hosted Gemma server for model requests — no local model download needed. Agent routing, image requests, OCR, and TTS remain available, but remote inference is not token-streamed like the local path.',
    ],
    warn: 'A physical Android phone gives the full intended experience: voice input, streaming TTS, camera-based OCR, and the 8BitDo controller. The emulator can only test the agent logic, not the hardware features.',
  },
];

/* ── Component ──────────────────────────────────────────────── */
export default function JudgeConnect() {
  return (
    <section className={styles.section} id="for-judges">
      <div className={styles.header}>
        <p className={styles.label}>FOR JUDGES · EVALUATION GUIDE</p>
        <h2 className={styles.title}>
          Running VedX<br />in 5 minutes
        </h2>
        <p className={styles.subtitle}>
          VedX is designed for local inference on a compatible phone. To evaluate
          the model without downloading it locally, you can run the included
          Kaggle notebook and connect through a Cloudflare tunnel. Follow the
          steps below.
        </p>
      </div>

      {/* Step cards */}
      <div className={styles.steps}>
        {steps.map(({ num, Icon, title, points, warn }) => (
          <div key={num} className={styles.step}>
            <div className={styles.stepLeft}>
              <div className={styles.numBadge}>{num}</div>
              <div className={styles.iconWrap}><Icon /></div>
            </div>
            <div className={styles.stepBody}>
              <h3 className={styles.stepTitle}>{title}</h3>
              <ul className={styles.pointList}>
                {points.map((p, i) => (
                  <li key={i} className={styles.point}>
                    <span className={styles.checkIcon}><IconCheck /></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              {warn && (
                <div className={styles.warnBox}>
                  <span className={styles.warnIcon}><IconAlert /></span>
                  <p>{warn}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Troubleshooting callout */}
      <div className={styles.callout}>
        <div className={styles.calloutInner}>
          <p className={styles.calloutLabel}>NEED HELP?</p>
          <p className={styles.calloutText}>
            If the download is blocked or the server fails to start, the most
            likely cause is a missing licence acceptance on Hugging Face (Step 02
            above). If you have verified that and still face issues, reach out to
            the team — we can share a pre-authorised account or walk you through
            it live.
          </p>
          <a
            href="mailto:utkarah515@gmail.com"
            className={styles.contactLink}
          >
            <IconMail />
            utkarah515@gmail.com
          </a>
        </div>
      </div>

      {/* APK download banner */}
      <div className={styles.apkBanner}>
        <div className={styles.apkLeft}>
          <p className={styles.apkLabel}>DOWNLOAD · ANDROID APK</p>
          <p className={styles.apkTitle}>Get the app now</p>
          <p className={styles.apkSub}>
            The latest release is on GitHub. Install on a compatible Android device —
            no Play Store required.
          </p>
        </div>
        <a
          href={APK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.apkBtn}
        >
          <IconDownload />
          Download APK →
        </a>
      </div>
    </section>
  );
}
