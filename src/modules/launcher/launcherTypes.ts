export type Classification =
  | 'new_project'
  | 'new_module'
  | 'work_package'
  | 'audit'
  | 'decision_workshop';

export type ThemeMode = 'light' | 'dark';

export type RegistryItemType = 'group' | 'project' | 'module';

export type RegistryItem = {
  id: string;
  label: string;
  type: RegistryItemType;
  parentId?: string;
  description: string;
  active: boolean;
};

export type ParentMode =
  | 'No parent yet'
  | 'Parent group'
  | 'Parent project'
  | 'Parent module'
  | 'Affected items';

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
  rawIdea: string;
  requestedOutcome: string;
  currentState: string;
  targetState: string;
  constraints: string;
  sourceMaterials: string;
};

export type LauncherFormState = {
  classification: Classification | '';
  parentMode: ParentMode | '';
  parentItemId: string;
  affectedItemIds: string[];
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

export type StepReviewGuidance = {
  purpose: string;
  check: string;
  notImplemented: string;
};
