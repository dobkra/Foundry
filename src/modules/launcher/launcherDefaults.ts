import type {
  BlockedWork,
  Classification,
  LauncherFormState,
  ParentContext,
  PlanningDepth,
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
  'Basic',
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

export const initialLauncherState: LauncherFormState = {
  classification: '',
  parentContext: '',
  parentProject: 'Foundry',
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
