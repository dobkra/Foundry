import { registryItems } from './launcherDefaults';
import { getContextSummary, getPacketPath } from './launcherSummary';
import type { Classification, LauncherFormState, LauncherStatus } from './launcherTypes';

export type GeneratedPacketFile = {
  filename: string;
  label: string;
  content: string;
};

function today() {
  return new Date().toISOString().slice(0, 10);
}

function formatList(items: string[], emptyText = 'None recorded') {
  return items.length > 0 ? items.map((item) => `- ${item}`).join('\n') : `- ${emptyText}`;
}

function formatText(value: string, emptyText = 'Not recorded yet.') {
  return value.trim() || emptyText;
}

function getAffectedItems(state: LauncherFormState) {
  return state.affectedItemIds.map((itemId) => {
    const item = registryItems.find((candidate) => candidate.id === itemId);
    return item ? `${item.type}: ${item.label}` : itemId;
  });
}

function getDobromirReviewRequired(state: LauncherFormState) {
  return (
    state.classification === 'new_project' ||
    state.classification === 'new_module' ||
    state.classification === 'decision_workshop'
  );
}

export function getGeneratedPacketStatus(state: LauncherFormState): LauncherStatus {
  return getDobromirReviewRequired(state) ? 'needs_review' : state.status;
}

function getClassificationDefinition(classification: Classification | '') {
  switch (classification) {
    case 'new_project':
      return 'Starts a new independent Foundry project. It may sit under a group, but it is not automatically created by this packet.';
    case 'new_module':
      return 'Starts a module inside an existing registered project or module. Real module creation still requires separate approval.';
    case 'work_package':
      return 'Stages a scoped body of work inside existing Foundry context without creating durable structure by itself.';
    case 'audit':
      return 'Starts a review of existing groups, projects, modules, workflows, or related context.';
    case 'decision_workshop':
      return 'Frames high-level direction or authority decisions without automatically becoming implementation work.';
    default:
      return 'Classification has not been selected yet.';
  }
}

function getWhySelected(state: LauncherFormState, classification: Classification) {
  if (state.classification === classification) {
    return `Selected because the current form state is classified as \`${classification}\`.`;
  }

  if (!state.classification) {
    return 'Not selected because no classification has been chosen yet.';
  }

  return `Not selected because the current packet is classified as \`${state.classification}\`.`;
}

function getRegistryEligibility(state: LauncherFormState) {
  if (state.classification === 'new_project' || state.classification === 'new_module') {
    return 'Potentially eligible only after explicit registry approval. V1.2 UI output does not mutate registry files.';
  }

  return 'No registry update expected. V1.2 UI output does not mutate registry files.';
}

function getExecutionEligibility(state: LauncherFormState) {
  const status = getGeneratedPacketStatus(state);

  if (status === 'needs_review') {
    return 'Blocked until review approves the requested direction and execution boundary.';
  }

  return 'Allowed only for local/manual documentation work inside the copied packet boundary.';
}

function getIntakeSummary(state: LauncherFormState) {
  return [
    '## Raw Idea / Context',
    formatText(state.intake.rawIdea),
    '',
    '## Requested Outcome',
    formatText(state.intake.requestedOutcome),
    '',
    '## Current State',
    formatText(state.intake.currentState),
    '',
    '## Target State',
    formatText(state.intake.targetState),
    '',
    '## Constraints / Risks / Unknowns',
    formatText(state.intake.constraints),
    '',
    '## Source Materials / Notes',
    formatText(state.intake.sourceMaterials),
  ].join('\n');
}

function getCommonHeader(state: LauncherFormState, title: string) {
  return [
    `# ${title}`,
    '',
    `Packet title: ${state.title || '[missing]'}`,
    `Packet id: \`${state.slug || '[missing]'}\``,
    `Packet path: \`${getPacketPath(state)}\``,
    `Status: \`${getGeneratedPacketStatus(state)}\``,
    `Classification: \`${state.classification || '[missing]'}\``,
    `Parent context: ${getContextSummary(state)}`,
    `Generated date: ${today()}`,
  ].join('\n');
}

function getBlockedCapabilities(state: LauncherFormState) {
  return [
    '## Blocked Work',
    formatList(state.blockedWork),
    '',
    'V1.2 generates copyable Markdown only. It does not write files to disk, mutate the registry, create issues, launch Codex, automate work, or deploy anything.',
  ].join('\n');
}

function buildIntake(state: LauncherFormState) {
  return [
    getCommonHeader(state, state.title || 'Launcher Intake'),
    '',
    getIntakeSummary(state),
    '',
    '## Planning Depth',
    formatList(state.planningDepth),
    '',
    getBlockedCapabilities(state),
    '',
    '## Suggested Next Step',
    getGeneratedPacketStatus(state) === 'needs_review'
      ? 'Review the packet direction and approve, revise, park, or reject it.'
      : 'Use the copied packet Markdown for local/manual staging documentation.',
  ].join('\n');
}

function buildClassification(state: LauncherFormState) {
  return [
    getCommonHeader(state, 'Classification'),
    '',
    '## Selected Classification',
    `\`${state.classification || '[missing]'}\``,
    '',
    '## Definition',
    getClassificationDefinition(state.classification),
    '',
    '## Classification Rationale',
    `- new_project: ${getWhySelected(state, 'new_project')}`,
    `- new_module: ${getWhySelected(state, 'new_module')}`,
    `- work_package: ${getWhySelected(state, 'work_package')}`,
    `- audit: ${getWhySelected(state, 'audit')}`,
    `- decision_workshop: ${getWhySelected(state, 'decision_workshop')}`,
    '',
    '## Parent Context',
    getContextSummary(state),
    '',
    '## Affected Items',
    formatList(getAffectedItems(state), 'No affected items selected.'),
    '',
    '## Registry Eligibility',
    getRegistryEligibility(state),
    '',
    '## Execution Eligibility',
    getExecutionEligibility(state),
    '',
    getBlockedCapabilities(state),
  ].join('\n');
}

function buildScope(state: LauncherFormState) {
  return [
    getCommonHeader(state, 'Scope'),
    '',
    '## Scope Notes',
    formatText(state.scopeNotes),
    '',
    '## Non-Goals',
    formatText(state.nonGoals),
    '',
    '## Planning Depth',
    formatList(state.planningDepth),
    '',
    '## Intake Summary',
    getIntakeSummary(state),
    '',
    getBlockedCapabilities(state),
  ].join('\n');
}

function buildDecisionLog(state: LauncherFormState) {
  return [
    getCommonHeader(state, 'Decision Log'),
    '',
    '| Date | Decision / Question | Reviewer | Status | Notes |',
    '|---|---|---|---|---|',
    `| ${today()} | Initial packet generated from local Launcher form state. | Dobromir / delegated review | ${getGeneratedPacketStatus(
      state,
    )} | Copy-only generated Markdown; no file writes or external-system actions. |`,
    `| ${today()} | Is Dobromir review required? | Dobromir | ${
      getDobromirReviewRequired(state) ? 'needs_review' : 'not_required_for_safe_manual_scope'
    } | ${getDobromirReviewRequired(state) ? 'Classification implies direction/authority review.' : 'Generated as safe local/manual documentation scope.'} |`,
    '',
    '## Open Review Notes',
    '- Confirm classification and parent context.',
    '- Confirm selected planning depth.',
    '- Confirm blocked work remains accurate.',
  ].join('\n');
}

function buildApproval(state: LauncherFormState) {
  const reviewRequired = getDobromirReviewRequired(state);

  return [
    getCommonHeader(state, 'Approval'),
    '',
    '## Approval State',
    `Current status: \`${getGeneratedPacketStatus(state)}\``,
    `Dobromir review required: ${reviewRequired ? 'yes' : 'no for routine local/manual scope'}`,
    '',
    '## Approval Gates',
    `- Intake Review Gate: ${reviewRequired ? 'pending Dobromir review' : 'approved for local/manual packet output'}`,
    `- Classification Approval Gate: ${reviewRequired ? 'pending Dobromir review' : 'approved for local/manual packet output'}`,
    '- Registry Update Gate: blocked',
    '- Execution Setup Gate: local/manual copy output only',
    '- Automation Gate: blocked',
    '- Deployment Gate: blocked',
    '',
    getBlockedCapabilities(state),
  ].join('\n');
}

function buildExecutionReadiness(state: LauncherFormState) {
  return [
    getCommonHeader(state, 'Execution Readiness'),
    '',
    '## Readiness',
    `Status: \`${getGeneratedPacketStatus(state)}\``,
    '- Local/manual documentation work allowed: yes, only from copied Markdown text',
    '- File writes from UI allowed: no',
    '- Registry update allowed: no',
    '- Linear/GitHub/Codex integration allowed: no',
    '- Codex task launch allowed: no',
    '- Automation allowed: no',
    '- Deployment allowed: no',
    '',
    '## Approved Next Step',
    getGeneratedPacketStatus(state) === 'needs_review'
      ? 'Dobromir or delegated review confirms the packet direction before execution setup.'
      : 'Copy the generated Markdown into a staging packet if the local/manual boundary is still correct.',
    '',
    getBlockedCapabilities(state),
  ].join('\n');
}

function buildImplementationNotes(state: LauncherFormState) {
  return [
    getCommonHeader(state, 'Implementation Notes'),
    '',
    '## V1.2 Output Behavior',
    '- Generated in browser memory from the current local form state.',
    '- Copyable per file or as one combined packet.',
    '- Does not write generated files to disk.',
    '- Does not mutate `foundry/staging/` from the running UI.',
    '- Does not mutate project registry files.',
    '',
    '## Review Notes',
    'Packet is the source of truth. Prompt is secondary. Execution only after approval.',
    '',
    getBlockedCapabilities(state),
  ].join('\n');
}

export function getGeneratedPacketFiles(state: LauncherFormState): GeneratedPacketFile[] {
  return [
    { filename: 'intake.md', label: 'Intake', content: buildIntake(state) },
    { filename: 'classification.md', label: 'Classification', content: buildClassification(state) },
    { filename: 'scope.md', label: 'Scope', content: buildScope(state) },
    { filename: 'decision-log.md', label: 'Decision Log', content: buildDecisionLog(state) },
    { filename: 'approval.md', label: 'Approval', content: buildApproval(state) },
    {
      filename: 'execution-readiness.md',
      label: 'Execution Readiness',
      content: buildExecutionReadiness(state),
    },
    {
      filename: 'implementation-notes.md',
      label: 'Implementation Notes',
      content: buildImplementationNotes(state),
    },
  ];
}

export function getAllPacketMarkdown(files: GeneratedPacketFile[]) {
  return files.map((file) => `<!-- ${file.filename} -->\n\n${file.content}`).join('\n\n---\n\n');
}
