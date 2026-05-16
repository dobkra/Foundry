import type {
  BlockedWork,
  Classification,
  LauncherFormState,
  ParentContext,
  PlanningDepth,
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

export const parentContexts: ParentContext[] = [
  'Foundry',
  'Existing registered project',
  'Existing module/workflow',
  'No parent yet',
];

export const parentProjects = ['Foundry', 'DK Arkitekter OS'] as const;

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
  { id: 'parent', title: 'Parent Context', eyebrow: '02' },
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
    purpose: 'Choose where the work belongs without making DK Arkitekter OS the default parent.',
    check: 'Check parent options, defaults, and warnings for the selected classification.',
    notImplemented: 'No registry write, project creation, or external-system integration is implemented.',
  },
  metadata: {
    purpose: 'Set the packet title and packet id used in copyable handoff text.',
    check: 'Check whether title, slug, classification, parent, and status are clear enough.',
    notImplemented: 'No staging folder or packet files are generated from this UI.',
  },
  intake: {
    purpose: 'Capture the human context that cannot be reduced to dropdowns.',
    check: 'Check whether the amount of typing is acceptable and the grouped fields make sense.',
    notImplemented: 'No dictation, speech recognition, or audio handling is implemented.',
  },
  planning: {
    purpose: 'Select only the planning depth needed for the packet.',
    check: 'Check that Basic is visually separate from optional advanced planning packs.',
    notImplemented: 'No Linear issue breakdown or planning-pack file generation is implemented.',
  },
  scope: {
    purpose: 'Confirm blocked work and record short scope/non-goal notes.',
    check: 'Check whether blocked work is obvious and not mixed with active work.',
    notImplemented: 'Blocked items stay blocked; selecting them here does not approve them.',
  },
  review: {
    purpose: 'Review the generated packet summary before copying handoff text.',
    check: 'Check whether the summary is useful for review without feeling like a long document.',
    notImplemented: 'No write action, registry mutation, or execution setup happens here.',
  },
  result: {
    purpose: 'Provide copyable output while preserving packet-first handoff behavior.',
    check: 'Check whether the copy panels are useful and not too prominent for future features.',
    notImplemented: 'No file generation, Codex launch, Linear/GitHub integration, or deployment happens here.',
  },
};

export const initialLauncherState: LauncherFormState = {
  classification: '',
  parentContext: '',
  parentProject: '',
  title: '',
  slug: '',
  slugTouched: false,
  status: 'approved_for_manual_execution',
  intake: {
    problemContext: '',
    whyItMatters: '',
    currentWorkflow: '',
    targetWorkflow: '',
    painPoints: '',
    sourceMaterials: '',
  },
  planningDepth: ['Basic'],
  approvedSourceScope: false,
  blockedWork: defaultBlockedWork,
  scopeNotes: '',
  nonGoals: '',
};
