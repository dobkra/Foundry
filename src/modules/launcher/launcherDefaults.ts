import type {
  BlockedWork,
  Classification,
  LauncherFormState,
  ParentMode,
  PlanningDepth,
  RegistryItem,
  StepReviewGuidance,
  WizardStep,
} from './launcherTypes';

export const classifications: Array<{ value: Classification; label: string; description: string }> = [
  {
    value: 'new_project',
    label: 'New project',
    description: 'Start a new independent Foundry project.',
  },
  {
    value: 'new_module',
    label: 'New module',
    description: 'Start a module inside an existing registered project.',
  },
  {
    value: 'work_package',
    label: 'Work package',
    description: 'Stage a scoped package of work inside existing context.',
  },
  {
    value: 'audit',
    label: 'Audit',
    description: 'Review an existing project, module, or workflow.',
  },
  {
    value: 'decision_workshop',
    label: 'Decision workshop',
    description: 'Frame direction, approval, or high-level decisions.',
  },
];

export const parentModes: ParentMode[] = [
  'No parent yet',
  'Parent group',
  'Parent project',
  'Parent module',
  'Affected items',
];

export const registryItems: RegistryItem[] = [
  {
    id: 'foundry',
    label: 'Foundry',
    type: 'group',
    description: 'Global execution factory group.',
    active: true,
  },
  {
    id: 'dk-arkitekter-os',
    label: 'DK Arkitekter OS',
    type: 'group',
    description: 'Registered business OS group/example, not the Foundry default parent.',
    active: true,
  },
  {
    id: 'foundry-control-center',
    label: 'Foundry Control Center',
    type: 'project',
    parentId: 'foundry',
    description: 'Internal control surface project inside Foundry.',
    active: true,
  },
  {
    id: 'foundry-project-registry',
    label: 'Foundry Project Registry',
    type: 'project',
    parentId: 'foundry',
    description: 'Registry documentation and project reference area.',
    active: true,
  },
  {
    id: 'foundry-launcher',
    label: 'Foundry Launcher',
    type: 'module',
    parentId: 'foundry-control-center',
    description: 'Staging and intake workflow module.',
    active: true,
  },
  {
    id: 'foundry-launcher-wizard',
    label: 'Foundry Launcher Wizard',
    type: 'module',
    parentId: 'foundry-launcher',
    description: 'Minimal local wizard module under Foundry Launcher.',
    active: true,
  },
  {
    id: 'dk-arkitekter-business-os',
    label: 'DK Arkitekter Business OS',
    type: 'project',
    parentId: 'dk-arkitekter-os',
    description: 'Active registered business OS project/example.',
    active: true,
  },
];

export const referenceItems = [
  {
    label: 'Archive',
    description: 'Cold storage / historical material. Not selectable as an active execution parent.',
  },
];

export const planningDepthOptions: PlanningDepth[] = [
  'Discovery needed',
  'Business functions needed',
  'Architecture needed',
  'Goals/outcomes needed',
  'UI/workflow sprint needed',
  'Issue breakdown needed',
];

export const defaultBlockedWork: BlockedWork[] = [
  'UI implementation',
  'automation',
  'Linear/GitHub integration',
  'Codex self-launching',
  'registry mutation',
  'deployment',
  'database/server/app routes',
];

export const wizardSteps: WizardStep[] = [
  { id: 'start', title: 'Start', eyebrow: '01' },
  { id: 'parent', title: 'Context', eyebrow: '02' },
  { id: 'metadata', title: 'Metadata', eyebrow: '03' },
  { id: 'intake', title: 'Intake', eyebrow: '04' },
  { id: 'planning', title: 'Planning Depth', eyebrow: '05' },
  { id: 'scope', title: 'Scope', eyebrow: '06' },
  { id: 'review', title: 'Review', eyebrow: '07' },
  { id: 'result', title: 'Result', eyebrow: '08' },
];

export const stepReviewGuidance: Record<string, StepReviewGuidance> = {
  start: {
    purpose: 'Choose the work classification that controls later parent-context expectations.',
    check: 'Do the five classification choices make sense for the work being staged?',
    notImplemented: 'No execution, issue creation, or automation is triggered from this step.',
  },
  parent: {
    purpose: 'Choose where the work belongs or which groups/projects/modules are affected.',
    check: 'Check group/project/module logic, defaults, and whether DK Arkitekter OS is not treated as the default parent.',
    notImplemented: 'No registry write, project creation, or external-system integration is implemented.',
  },
  metadata: {
    purpose: 'Set the packet title and packet id used in copyable handoff text.',
    check: 'Check whether title, slug, classification, context, and status are clear enough.',
    notImplemented: 'No staging folder or packet files are generated from this UI.',
  },
  intake: {
    purpose: 'Capture the minimum human context Codex needs for a useful handoff.',
    check: 'Check whether these questions help explain the task, outcome, boundaries, and source material.',
    notImplemented: 'No dictation, speech recognition, or audio handling is implemented.',
  },
  planning: {
    purpose: 'Select only the planning depth needed for the packet.',
    check: 'Check that Basic is visually separate from optional advanced planning packs.',
    notImplemented: 'No Linear issue breakdown or planning-pack file generation is implemented.',
  },
  scope: {
    purpose: 'Confirm what this packet does not authorize and record short scope/non-goal notes.',
    check: 'Check whether blocked work reads as safety boundaries, not selected tasks.',
    notImplemented: 'Blocked items stay blocked; selecting them here does not approve them.',
  },
  review: {
    purpose: 'Review the generated packet summary before copying handoff text.',
    check: 'Check whether the summary is useful for review without feeling like a long document.',
    notImplemented: 'No write action, registry mutation, or execution setup happens here.',
  },
  result: {
    purpose: 'Provide the handoff/copy area after the Review step has checked the packet.',
    check: 'Check whether this feels distinct from Review: less checking, more copy-and-handoff.',
    notImplemented: 'No file generation, Codex launch, Linear/GitHub integration, or deployment happens here.',
  },
};

export const initialLauncherState: LauncherFormState = {
  classification: '',
  parentMode: '',
  parentItemId: '',
  affectedItemIds: [],
  title: '',
  slug: '',
  slugTouched: false,
  status: 'approved_for_manual_execution',
  intake: {
    rawIdea: '',
    requestedOutcome: '',
    currentState: '',
    targetState: '',
    constraints: '',
    sourceMaterials: '',
  },
  planningDepth: ['Basic'],
  approvedSourceScope: false,
  blockedWork: defaultBlockedWork,
  scopeNotes: '',
  nonGoals: '',
};
