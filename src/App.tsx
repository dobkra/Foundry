import { useEffect, useState } from 'react';
import LauncherWizard from './modules/launcher/LauncherWizard';
import type { ThemeMode } from './modules/launcher/launcherTypes';

type ModuleCard = {
  title: string;
  status: string;
  purpose: string;
  currentStatus: string;
  nextStep: string;
  blocked: string[];
};

const modules: ModuleCard[] = [
  {
    title: 'Foundry Launcher',
    status: 'Available',
    purpose: 'Start and stage Foundry work before execution.',
    currentStatus: 'Minimal local wizard module ready for visual review.',
    nextStep: 'Use the wizard to prepare copyable packet summaries and prompt placeholders.',
    blocked: [
      'Linear/GitHub/Codex integration',
      'automation',
      'registry mutation',
      'deployment',
    ],
  },
];

const readOnlyParents = ['Foundry', 'DK Arkitekter OS'];
const blockedCapabilities = [
  'No deployment',
  'No automation',
  'No external integrations',
  'No registry mutation',
];

function ThemeSwitch({
  theme,
  onThemeChange,
}: {
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}) {
  return (
    <div className="theme-switch" aria-label="Theme mode">
      <button
        aria-pressed={theme === 'light'}
        className={`theme-option ${theme === 'light' ? 'theme-option--active' : ''}`}
        onClick={() => onThemeChange('light')}
        type="button"
      >
        Light
      </button>
      <button
        aria-pressed={theme === 'dark'}
        className={`theme-option ${theme === 'dark' ? 'theme-option--active' : ''}`}
        onClick={() => onThemeChange('dark')}
        type="button"
      >
        Dark
      </button>
    </div>
  );
}

function App() {
  const [activeScreen, setActiveScreen] = useState<'home' | 'launcher'>('home');
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  if (activeScreen === 'launcher') {
    return (
      <LauncherWizard
        onBackHome={() => setActiveScreen('home')}
        onThemeChange={setTheme}
        theme={theme}
      />
    );
  }

  return (
    <main className="shell" aria-labelledby="app-title">
      <section className="hero" aria-describedby="app-subtitle">
        <p className="eyebrow">Local/internal only</p>
        <h1 id="app-title">Dobromir Foundry Control Center</h1>
        <p id="app-subtitle" className="subtitle">
          Internal execution factory control surface
        </p>
        <ThemeSwitch theme={theme} onThemeChange={setTheme} />
      </section>

      <section className="notice" aria-label="Operating boundary">
        <strong>Boundary:</strong> Local/internal only. No deployment, automation, or external integrations.
      </section>

      <section className="grid-section" aria-labelledby="modules-title">
        <div className="section-heading">
          <h2 id="modules-title">Available modules</h2>
          <p>Minimal shell for future Foundry workflow surfaces.</p>
        </div>

        <div className="module-grid">
          {modules.map((module) => (
            <article className="module-card" key={module.title}>
              <div className="module-card__header">
                <h3>{module.title}</h3>
                <span className="status-pill">{module.status}</span>
              </div>

              <dl className="module-details">
                <div>
                  <dt>Purpose</dt>
                  <dd>{module.purpose}</dd>
                </div>
                <div>
                  <dt>Current status</dt>
                  <dd>{module.currentStatus}</dd>
                </div>
                <div>
                  <dt>Next step</dt>
                  <dd>{module.nextStep}</dd>
                </div>
              </dl>

              <div className="blocked-list" aria-label={`${module.title} blocked work`}>
                <span>Blocked</span>
                <ul>
                  {module.blocked.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <button
                className="primary-button"
                onClick={() => setActiveScreen('launcher')}
                type="button"
              >
                Open Launcher wizard
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="grid-section" aria-labelledby="registry-title">
        <div className="section-heading">
          <h2 id="registry-title">Registry reference</h2>
          <p>Read-only parent options for future Launcher selector work.</p>
        </div>

        <div className="reference-panel">
          <ul className="tag-list" aria-label="Read-only parent options">
            {readOnlyParents.map((parent) => (
              <li key={parent}>{parent}</li>
            ))}
          </ul>
          <p>
            Archive is cold storage and is not selectable as an active execution parent.
          </p>
        </div>
      </section>

      <section className="grid-section" aria-labelledby="boundary-title">
        <div className="section-heading">
          <h2 id="boundary-title">Shell boundary</h2>
          <p>The packet remains the source of truth. The Launcher wizard produces copyable output only.</p>
        </div>

        <ul className="boundary-list">
          {blockedCapabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
