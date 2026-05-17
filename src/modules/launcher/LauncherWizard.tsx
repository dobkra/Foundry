import { useMemo, useState } from 'react';
import {
  classifications,
  defaultBlockedWork,
  initialLauncherState,
  parentModes,
  planningDepthOptions,
  referenceItems,
  registryItems,
  stepReviewGuidance,
  wizardSteps,
} from './launcherDefaults';
import {
  getCodexPromptPlaceholder,
  getContextSummary,
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
  ParentMode,
  PlanningDepth,
  RegistryItem,
  RegistryItemType,
  ThemeMode,
} from './launcherTypes';

type LauncherWizardProps = {
  onBackHome: () => void;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
};

type CopyState = 'idle' | 'copied' | 'failed';

const textFieldLabels: Array<{ key: keyof IntakeFields; label: string; helper: string }> = [
  {
    key: 'rawIdea',
    label: 'Raw idea / context',
    helper: 'Plain-language description of the work, question, or problem.',
  },
  {
    key: 'requestedOutcome',
    label: 'Requested outcome',
    helper: 'What should exist after review or execution?',
  },
  {
    key: 'currentState',
    label: 'Current state',
    helper: 'What exists today, including current workflow or files.',
  },
  {
    key: 'targetState',
    label: 'Target state',
    helper: 'What should change or become clearer after this packet?',
  },
  {
    key: 'constraints',
    label: 'Constraints / risks / unknowns',
    helper: 'Boundaries Codex should not cross, open questions, or known risks.',
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

function getDefaultParentModeForClassification(classification: Classification): ParentMode {
  if (classification === 'new_project') {
    return 'Parent group';
  }

  if (classification === 'new_module') {
    return 'Parent project';
  }

  return 'Affected items';
}

function getAllowedParentModes(classification: Classification | '') {
  if (classification === 'new_project') {
    return ['No parent yet', 'Parent group'] as ParentMode[];
  }

  if (classification === 'new_module') {
    return ['Parent project', 'Parent module'] as ParentMode[];
  }

  if (classification === 'work_package' || classification === 'audit' || classification === 'decision_workshop') {
    return ['Affected items'] as ParentMode[];
  }

  return parentModes;
}

function getSelectableParentItems(state: LauncherFormState) {
  if (state.classification === 'new_project') {
    return registryItems.filter((item) => item.type === 'group');
  }

  if (state.classification === 'new_module') {
    return registryItems.filter((item) =>
      state.parentMode === 'Parent module' ? item.type === 'module' : item.type === 'project',
    );
  }

  return registryItems;
}

function getItemsByType(type: RegistryItemType) {
  return registryItems.filter((item) => item.type === type);
}

function getParentLabel(itemId: string) {
  return registryItems.find((item) => item.id === itemId)?.label || '';
}

function getHierarchyGuidance(state: LauncherFormState) {
  if (!state.classification || !state.parentMode) {
    return '';
  }

  if (state.classification === 'new_project') {
    return 'New projects may sit under a group or sub-group. A group is an organizing container, not software.';
  }

  if (state.classification === 'new_module') {
    return 'New modules must belong to an existing project or an existing module inside a project.';
  }

  if (state.classification === 'work_package') {
    return 'Work packages can affect one or more groups, projects, or modules without creating new structure.';
  }

  if (state.classification === 'audit') {
    return 'Audits can target one or more groups, projects, or modules and should name the affected items.';
  }

  return 'Decision workshops can apply to one or more groups, projects, or modules without creating execution work.';
}

function getParentWarning(state: LauncherFormState) {
  if (!state.classification || !state.parentMode) {
    return '';
  }

  if (state.classification === 'new_project' && state.parentMode === 'Parent group' && !state.parentItemId) {
    return 'Select the group this project belongs under, or choose No parent yet.';
  }

  if (state.classification === 'new_module' && !state.parentItemId) {
    return 'new_module requires an existing project or module parent.';
  }

  if (
    (state.classification === 'work_package' ||
      state.classification === 'audit' ||
      state.classification === 'decision_workshop') &&
    state.affectedItemIds.length === 0
  ) {
    return 'Select one or more affected groups, projects, or modules when the target context is known.';
  }

  return '';
}

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

function RegistryItemCheckbox({
  item,
  checked,
  onToggle,
}: {
  item: RegistryItem;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <label className="item-card item-card--checkbox">
      <input checked={checked} onChange={onToggle} type="checkbox" />
      <span>
        <strong>{item.label}</strong>
        <small>{item.description}</small>
      </span>
    </label>
  );
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

  if (stepIndex === 1) {
    if (!state.parentMode) {
      return 'Select a context mode before continuing.';
    }

    if (state.classification === 'new_project' && state.parentMode === 'Parent group' && !state.parentItemId) {
      return 'Select a parent group or choose No parent yet.';
    }

    if (state.classification === 'new_module' && !state.parentItemId) {
      return 'Select the project or module this new module belongs to.';
    }
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

function LauncherWizard({ onBackHome, theme, onThemeChange }: LauncherWizardProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [state, setState] = useState<LauncherFormState>(initialLauncherState);

  const reviewSummary = useMemo(() => getReviewSummary(state), [state]);
  const codexPrompt = useMemo(() => getCodexPromptPlaceholder(state), [state]);
  const packetOutline = useMemo(() => getPacketOutline(state), [state]);
  const validationMessage = getValidationMessage(stepIndex, state);
  const canGoNext = !validationMessage;
  const selectedStep = wizardSteps[stepIndex];
  const currentGuidance = stepReviewGuidance[selectedStep.id];
  const allowedParentModes = getAllowedParentModes(state.classification);
  const selectableParentItems = getSelectableParentItems(state);
  const parentWarning = getParentWarning(state);
  const hierarchyGuidance = getHierarchyGuidance(state);
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

  function chooseClassification(classification: Classification) {
    const defaultParentMode = getDefaultParentModeForClassification(classification);

    setState((current) => ({
      ...current,
      classification,
      parentMode: defaultParentMode,
      parentItemId: '',
      affectedItemIds: [],
    }));
  }

  function updateParentMode(parentMode: ParentMode) {
    setState((current) => ({
      ...current,
      parentMode,
      parentItemId: '',
      affectedItemIds: parentMode === 'Affected items' ? current.affectedItemIds : [],
    }));
  }

  function toggleAffectedItem(itemId: string) {
    setState((current) => ({
      ...current,
      affectedItemIds: toggleValue(current.affectedItemIds, itemId),
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

  function resetWizard() {
    setState(initialLauncherState);
    setStepIndex(0);
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
                onChange={() => chooseClassification(classification.value)}
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
            <span>Context mode</span>
            <select
              value={state.parentMode}
              onChange={(event) => updateParentMode(event.target.value as ParentMode)}
            >
              <option value="">Select context mode</option>
              {allowedParentModes.map((context) => (
                <option key={context} value={context}>
                  {context}
                </option>
              ))}
            </select>
          </label>

          {state.parentMode !== 'No parent yet' && state.parentMode !== 'Affected items' && (
            <label className="field">
              <span>{state.parentMode}</span>
              <select
                value={state.parentItemId}
                onChange={(event) => updateState({ parentItemId: event.target.value })}
              >
                <option value="">Select {state.parentMode.toLowerCase()}</option>
                {selectableParentItems.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
              {state.parentItemId && <small>{getParentLabel(state.parentItemId)}</small>}
            </label>
          )}

          <div className="inline-note">
            <strong>Hierarchy:</strong> Groups organize work and can contain sub-groups or projects.
            Projects can contain modules. Modules can contain submodules when needed. Groups are not
            software projects.
          </div>

          {state.parentMode === 'Affected items' && (
            <div className="field field--wide">
              <span>Affected items</span>
              <small>
                Work packages, audits, and decision workshops can apply to one item or a group of
                groups, projects, and modules.
              </small>
              <div className="item-checklist">
                {(['group', 'project', 'module'] as RegistryItemType[]).map((type) => (
                  <section className="item-group" key={type}>
                    <p>{type}s</p>
                    {getItemsByType(type).map((item) => (
                      <RegistryItemCheckbox
                        checked={state.affectedItemIds.includes(item.id)}
                        item={item}
                        key={item.id}
                        onToggle={() => toggleAffectedItem(item.id)}
                      />
                    ))}
                  </section>
                ))}
              </div>
            </div>
          )}

          <div className="reference-note field--wide">
            <strong>Registry reference:</strong> active options are read-only.{' '}
            {referenceItems.map((item) => `${item.label}: ${item.description}`).join(' ')}
          </div>

          {hierarchyGuidance && <p className="inline-note">{hierarchyGuidance}</p>}
          {parentWarning && <p className="field-warning">{parentWarning}</p>}
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
            <span>Context</span>
            <strong>{getContextSummary(state)}</strong>
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
          <div className="planning-group">
            <p>Base packet</p>
            <label className="checkbox-row">
              <input
                checked={state.planningDepth.includes('Basic')}
                onChange={() =>
                  updateState({
                    planningDepth: toggleValue<PlanningDepth>(state.planningDepth, 'Basic'),
                  })
                }
                type="checkbox"
              />
              <span>Basic</span>
            </label>
          </div>

          <div className="planning-group">
            <p>Advanced planning packs</p>
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
          </div>

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
            <p className="fieldset-note">
              Checked items are safety boundaries. They mean this packet does not authorize that
              work.
            </p>
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
                <dt>Context</dt>
                <dd>{getContextSummary(state)}</dd>
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
        <section className="handoff-card">
          <div>
            <p className="eyebrow">Handoff</p>
            <h3>Use this page to copy the packet handoff text.</h3>
            <p>
              Review is for checking the packet. Result is for copying the summary, draft Codex
              prompt, or outline after the packet looks correct.
            </p>
          </div>
          <dl className="handoff-list">
            <div>
              <dt>Packet</dt>
              <dd>{state.slug || 'Missing'} at {getPacketPath(state)}</dd>
            </div>
            <div>
              <dt>Context</dt>
              <dd>{getContextSummary(state)}</dd>
            </div>
            <div>
              <dt>Next action</dt>
              <dd>Copy handoff text. Do not generate files or trigger execution from V1.1.</dd>
            </div>
          </dl>
        </section>

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
        <div className="header-actions">
          <ThemeSwitch theme={theme} onThemeChange={onThemeChange} />
          <button className="secondary-button" type="button" onClick={onBackHome}>
            Back to Control Center
          </button>
        </div>
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

          <section className="review-helper" aria-label="Step review notes">
            <h3>What to check on this step</h3>
            <dl>
              <div>
                <dt>Purpose</dt>
                <dd>{currentGuidance.purpose}</dd>
              </div>
              <div>
                <dt>Check</dt>
                <dd>{currentGuidance.check}</dd>
              </div>
              <div>
                <dt>Not implemented</dt>
                <dd>{currentGuidance.notImplemented}</dd>
              </div>
            </dl>
          </section>

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
              <button className="primary-button" onClick={resetWizard} type="button">
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
