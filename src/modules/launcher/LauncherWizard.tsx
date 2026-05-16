import { useMemo, useState } from 'react';
import {
  classifications,
  defaultBlockedWork,
  initialLauncherState,
  parentContexts,
  parentProjects,
  planningDepthOptions,
  wizardSteps,
} from './launcherDefaults';
import {
  getCodexPromptPlaceholder,
  getPacketOutline,
  getPacketPath,
  getReviewSummary,
  toSlug,
} from './launcherSummary';
import type {
  BlockedWork,
  Classification,
  IntakeFields,
  LauncherFormState,
  ParentContext,
  PlanningDepth,
} from './launcherTypes';

type LauncherWizardProps = {
  onBackHome: () => void;
};

type CopyState = 'idle' | 'copied' | 'failed';

const textFieldLabels: Array<{ key: keyof IntakeFields; label: string; helper: string }> = [
  {
    key: 'problemContext',
    label: 'Problem / context',
    helper: 'What is happening and where does this work belong?',
  },
  {
    key: 'whyItMatters',
    label: 'Why this matters',
    helper: 'The reason this packet should exist.',
  },
  {
    key: 'currentWorkflow',
    label: 'Current workflow',
    helper: 'How the work happens today.',
  },
  {
    key: 'targetWorkflow',
    label: 'Target workflow',
    helper: 'How the work should behave after approval.',
  },
  {
    key: 'painPoints',
    label: 'Pain points',
    helper: 'Friction, risk, repeated steps, or missing clarity.',
  },
  {
    key: 'sourceMaterials',
    label: 'Source materials / notes',
    helper: 'Relevant files, repos, references, or short notes.',
  },
];

function toggleValue<T extends string>(values: T[], value: T) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

function OutputBlock({ label, value }: { label: string; value: string }) {
  const [copyState, setCopyState] = useState<CopyState>('idle');

  async function copyValue() {
    try {
      await navigator.clipboard.writeText(value);
      setCopyState('copied');
    } catch {
      setCopyState('failed');
    }
  }

  return (
    <section className="copy-panel" aria-label={label}>
      <div className="copy-panel__header">
        <h3>{label}</h3>
        <button className="secondary-button" type="button" onClick={copyValue}>
          {copyState === 'copied' ? 'Copied' : 'Copy'}
        </button>
      </div>
      {copyState === 'failed' && (
        <p className="field-warning">Copy failed. Select the text manually from the field below.</p>
      )}
      <textarea readOnly value={value} rows={10} aria-label={label} />
    </section>
  );
}

function getValidationMessage(stepIndex: number, state: LauncherFormState) {
  if (stepIndex === 0 && !state.classification) {
    return 'Select a work type before continuing.';
  }

  if (stepIndex === 1 && !state.parentContext) {
    return 'Select a parent context before continuing.';
  }

  if (stepIndex === 2) {
    if (!state.title.trim()) {
      return 'Add a packet title before continuing.';
    }

    if (!state.slug.trim()) {
      return 'Add a packet id / slug before continuing.';
    }
  }

  return '';
}

function LauncherWizard({ onBackHome }: LauncherWizardProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [state, setState] = useState<LauncherFormState>(initialLauncherState);

  const reviewSummary = useMemo(() => getReviewSummary(state), [state]);
  const codexPrompt = useMemo(() => getCodexPromptPlaceholder(state), [state]);
  const packetOutline = useMemo(() => getPacketOutline(state), [state]);
  const validationMessage = getValidationMessage(stepIndex, state);
  const canGoNext = !validationMessage;
  const selectedStep = wizardSteps[stepIndex];
  const issueBreakdownWarning =
    state.planningDepth.includes('Issue breakdown needed') && !state.approvedSourceScope;

  function updateState(next: Partial<LauncherFormState>) {
    setState((current) => ({ ...current, ...next }));
  }

  function updateIntake(key: keyof IntakeFields, value: string) {
    setState((current) => ({
      ...current,
      intake: {
        ...current.intake,
        [key]: value,
      },
    }));
  }

  function updateTitle(title: string) {
    setState((current) => ({
      ...current,
      title,
      slug: current.slugTouched ? current.slug : toSlug(title),
    }));
  }

  function goNext() {
    if (!canGoNext) {
      return;
    }

    setStepIndex((current) => Math.min(current + 1, wizardSteps.length - 1));
  }

  function goBack() {
    setStepIndex((current) => Math.max(current - 1, 0));
  }

  function renderStep() {
    if (selectedStep.id === 'start') {
      return (
        <div className="wizard-card-grid">
          {classifications.map((classification) => (
            <label
              className={`selection-card ${
                state.classification === classification.value ? 'selection-card--selected' : ''
              }`}
              key={classification.value}
            >
              <input
                checked={state.classification === classification.value}
                name="classification"
                onChange={() => updateState({ classification: classification.value })}
                type="radio"
              />
              <span>{classification.label}</span>
              <small>{classification.description}</small>
            </label>
          ))}
        </div>
      );
    }

    if (selectedStep.id === 'parent') {
      return (
        <div className="form-grid">
          <label className="field">
            <span>Parent context</span>
            <select
              value={state.parentContext}
              onChange={(event) => updateState({ parentContext: event.target.value as ParentContext })}
            >
              <option value="">Select parent context</option>
              {parentContexts.map((context) => (
                <option key={context} value={context}>
                  {context}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Parent project</span>
            <select
              value={state.parentProject}
              onChange={(event) =>
                updateState({ parentProject: event.target.value as (typeof parentProjects)[number] })
              }
            >
              {parentProjects.map((project) => (
                <option key={project} value={project}>
                  {project}
                </option>
              ))}
            </select>
          </label>

          <div className="inline-note">
            <strong>Registry:</strong> read-only/reference-only. Archive is cold storage and is disabled
            as an active execution parent.
          </div>
        </div>
      );
    }

    if (selectedStep.id === 'metadata') {
      return (
        <div className="form-grid">
          <label className="field field--wide">
            <span>Packet title</span>
            <input
              onChange={(event) => updateTitle(event.target.value)}
              placeholder="Foundry Launcher V1.1 Minimal Wizard Module"
              type="text"
              value={state.title}
            />
          </label>

          <label className="field">
            <span>Packet id / slug</span>
            <input
              onChange={(event) =>
                updateState({ slug: toSlug(event.target.value), slugTouched: true })
              }
              placeholder="foundry-launcher-v1.1-minimal-wizard-module"
              type="text"
              value={state.slug}
            />
          </label>

          <div className="metadata-readout">
            <span>Classification</span>
            <strong>{state.classification || 'Not selected'}</strong>
          </div>

          <div className="metadata-readout">
            <span>Parent project</span>
            <strong>{state.parentProject}</strong>
          </div>

          <div className="metadata-readout">
            <span>Status</span>
            <strong>{state.status}</strong>
            <small>Default for safe documentation/manual packets.</small>
          </div>
        </div>
      );
    }

    if (selectedStep.id === 'intake') {
      return (
        <div className="intake-grid">
          {textFieldLabels.map((field) => (
            <label className="field" key={field.key}>
              <span>{field.label}</span>
              <small>{field.helper}</small>
              <textarea
                onChange={(event) => updateIntake(field.key, event.target.value)}
                rows={4}
                value={state.intake[field.key]}
              />
            </label>
          ))}
        </div>
      );
    }

    if (selectedStep.id === 'planning') {
      return (
        <div className="option-stack">
          {planningDepthOptions.map((option) => (
            <label className="checkbox-row" key={option}>
              <input
                checked={state.planningDepth.includes(option)}
                onChange={() =>
                  updateState({
                    planningDepth: toggleValue<PlanningDepth>(state.planningDepth, option),
                  })
                }
                type="checkbox"
              />
              <span>{option}</span>
            </label>
          ))}

          <label className="checkbox-row checkbox-row--subtle">
            <input
              checked={state.approvedSourceScope}
              onChange={(event) => updateState({ approvedSourceScope: event.target.checked })}
              type="checkbox"
            />
            <span>Approved source scope exists for issue breakdown.</span>
          </label>

          {issueBreakdownWarning && (
            <p className="field-warning">Issue breakdown should derive from approved source scope.</p>
          )}
        </div>
      );
    }

    if (selectedStep.id === 'scope') {
      return (
        <div className="form-grid">
          <fieldset className="fieldset">
            <legend>Blocked work</legend>
            <div className="option-stack">
              {defaultBlockedWork.map((item) => (
                <label className="checkbox-row" key={item}>
                  <input
                    checked={state.blockedWork.includes(item)}
                    onChange={() =>
                      updateState({
                        blockedWork: toggleValue<BlockedWork>(state.blockedWork, item),
                      })
                    }
                    type="checkbox"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="field">
            <span>Scope notes</span>
            <textarea
              onChange={(event) => updateState({ scopeNotes: event.target.value })}
              rows={5}
              value={state.scopeNotes}
            />
          </label>

          <label className="field">
            <span>Non-goals</span>
            <textarea
              onChange={(event) => updateState({ nonGoals: event.target.value })}
              rows={5}
              value={state.nonGoals}
            />
          </label>
        </div>
      );
    }

    if (selectedStep.id === 'review') {
      return (
        <div className="review-layout">
          <div className="summary-card">
            <dl className="summary-list">
              <div>
                <dt>Packet id</dt>
                <dd>{state.slug || 'Missing'}</dd>
              </div>
              <div>
                <dt>Title</dt>
                <dd>{state.title || 'Missing'}</dd>
              </div>
              <div>
                <dt>Classification</dt>
                <dd>{state.classification || 'Missing'}</dd>
              </div>
              <div>
                <dt>Parent context</dt>
                <dd>{state.parentContext || 'Missing'}</dd>
              </div>
              <div>
                <dt>Planning depth</dt>
                <dd>{state.planningDepth.join(', ') || 'None selected'}</dd>
              </div>
              <div>
                <dt>Proposed packet path</dt>
                <dd>{getPacketPath(state)}</dd>
              </div>
            </dl>
          </div>

          <div className="summary-card summary-card--accent">
            <h3>Packet first</h3>
            <p>Packet is the source of truth. Prompt is secondary. Execution only after approval.</p>
          </div>

          <OutputBlock label="Generated review summary" value={reviewSummary} />
        </div>
      );
    }

    return (
      <div className="result-layout">
        <div className="result-grid">
          <div className="metadata-readout">
            <span>Packet id</span>
            <strong>{state.slug || 'Missing'}</strong>
          </div>
          <div className="metadata-readout">
            <span>Packet path</span>
            <strong>{getPacketPath(state)}</strong>
          </div>
          <div className="metadata-readout">
            <span>Classification</span>
            <strong>{state.classification || 'Missing'}</strong>
          </div>
          <div className="metadata-readout">
            <span>Status</span>
            <strong>{state.status}</strong>
          </div>
        </div>

        <div className="blocked-list blocked-list--boxed">
          <span>Blocked work</span>
          <ul>
            {state.blockedWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <OutputBlock label="Copyable review summary" value={reviewSummary} />
        <OutputBlock label="Copyable Codex prompt placeholder" value={codexPrompt} />
        <OutputBlock label="Optional packet outline" value={packetOutline} />
      </div>
    );
  }

  return (
    <main className="launcher-shell" aria-labelledby="launcher-title">
      <header className="launcher-header">
        <div>
          <p className="eyebrow">Foundry Launcher</p>
          <h1 id="launcher-title">Minimal staging wizard</h1>
          <p className="subtitle">
            Local/internal control surface. Copyable output only. No file generation or integrations.
          </p>
        </div>
        <button className="secondary-button" type="button" onClick={onBackHome}>
          Back to Control Center
        </button>
      </header>

      <section className="notice" aria-label="Launcher boundary">
        <strong>Boundary:</strong> This V1.1 wizard uses local state only. It does not write staging
        files, mutate the registry, create issues, launch Codex, automate work, or deploy anything.
      </section>

      <div className="wizard-layout">
        <aside className="wizard-steps" aria-label="Wizard steps">
          {wizardSteps.map((step, index) => (
            <button
              className={`step-button ${index === stepIndex ? 'step-button--active' : ''}`}
              disabled={index > stepIndex}
              key={step.id}
              onClick={() => setStepIndex(index)}
              type="button"
            >
              <span>{step.eyebrow}</span>
              {step.title}
            </button>
          ))}
        </aside>

        <section className="wizard-panel" aria-labelledby="wizard-step-title">
          <div className="wizard-panel__header">
            <p className="eyebrow">{selectedStep.eyebrow}</p>
            <h2 id="wizard-step-title">{selectedStep.title}</h2>
          </div>

          {renderStep()}

          {validationMessage && <p className="field-warning">{validationMessage}</p>}

          <div className="wizard-actions">
            <button className="secondary-button" disabled={stepIndex === 0} onClick={goBack} type="button">
              Back
            </button>
            {stepIndex < wizardSteps.length - 1 ? (
              <button className="primary-button" disabled={!canGoNext} onClick={goNext} type="button">
                Continue
              </button>
            ) : (
              <button className="primary-button" onClick={() => setStepIndex(0)} type="button">
                Start another packet
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default LauncherWizard;
