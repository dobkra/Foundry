export type Classification =
  | 'new_project'
  | 'new_module'
  | 'work_package'
  | 'audit'
  | 'decision_workshop';

export type ParentContext =
  | 'Foundry'
  | 'Existing registered project'
  | 'Existing module/workflow'
  | 'No parent yet';

export type LauncherStatus = 'approved_for_manual_execution' | 'needs_review';

export type PlanningDepth =
  | 'Basic'
  | 'Discovery needed'
  | 'Business functions needed'
  | 'Architecture needed'
  | 'Goals/outcomes needed'
  | 'UI/workflow sprint needed'
  | 'Issue breakdown needed';

export type BlockedWork =
  | 'UI implementation'
  | 'automation'
  | 'Linear/GitHub integration'
  | 'Codex self-launching'
  | 'registry mutation'
  | 'deployment'
  | 'database/server/app routes';

export type IntakeFields = {
  problemContext: string;
  whyItMatters: string;
  currentWorkflow: string;
  targetWorkflow: string;
  painPoints: string;
  sourceMaterials: string;
};

export type LauncherFormState = {
  classification: Classification | '';
  parentContext: ParentContext | '';
  parentProject: 'Foundry' | 'DK Arkitekter OS';
  title: string;
  slug: string;
  slugTouched: boolean;
  status: LauncherStatus;
  intake: IntakeFields;
  planningDepth: PlanningDepth[];
  approvedSourceScope: boolean;
  blockedWork: BlockedWork[];
  scopeNotes: string;
  nonGoals: string;
};

export type WizardStep = {
  id: string;
  title: string;
  eyebrow: string;
};
