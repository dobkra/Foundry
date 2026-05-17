import type { LauncherFormState } from './launcherTypes';
import { registryItems } from './launcherDefaults';

export function toSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getPacketPath(state: LauncherFormState) {
  return state.slug ? `foundry/staging/${state.slug}/` : 'foundry/staging/[packet-id]/';
}

function formatList(items: string[], emptyText = 'None selected') {
  return items.length > 0 ? items.map((item) => `- ${item}`).join('\n') : `- ${emptyText}`;
}

function getItemLabel(itemId: string) {
  return registryItems.find((item) => item.id === itemId)?.label || itemId;
}

function getItemDisplay(itemId: string) {
  const item = registryItems.find((candidate) => candidate.id === itemId);
  if (!item) {
    return itemId;
  }

  return `${item.type}: ${item.label}`;
}

function getSummaryStatus(state: LauncherFormState) {
  return state.classification === 'new_project' ||
    state.classification === 'new_module' ||
    state.classification === 'decision_workshop'
    ? 'needs_review'
    : state.status;
}

export function getContextSummary(state: LauncherFormState) {
  if (!state.parentMode) {
    return '[missing]';
  }

  if (state.parentMode === 'Affected items') {
    const affectedItems = state.affectedItemIds.map(getItemDisplay);
    return affectedItems.length > 0 ? affectedItems.join(', ') : 'Affected items not selected yet';
  }

  if (state.parentMode === 'No parent yet') {
    return 'No parent yet';
  }

  return state.parentItemId
    ? `${state.parentMode}: ${getItemLabel(state.parentItemId)}`
    : `${state.parentMode}: [not selected]`;
}

export function getReviewSummary(state: LauncherFormState) {
  const intakeSummary = [
    state.intake.rawIdea && `Raw idea/context: ${state.intake.rawIdea}`,
    state.intake.requestedOutcome && `Requested outcome: ${state.intake.requestedOutcome}`,
    state.intake.currentState && `Current state: ${state.intake.currentState}`,
    state.intake.targetState && `Target state: ${state.intake.targetState}`,
    state.intake.constraints && `Constraints/risks/unknowns: ${state.intake.constraints}`,
    state.intake.sourceMaterials && `Source materials/notes: ${state.intake.sourceMaterials}`,
  ].filter(Boolean);

  return [
    '# Foundry Launcher Review Summary',
    '',
    `Packet id: ${state.slug || '[missing]'}`,
    `Packet path: ${getPacketPath(state)}`,
    `Title: ${state.title || '[missing]'}`,
    `Classification: ${state.classification || '[missing]'}`,
    `Context model: ${state.parentMode || '[missing]'}`,
    `Selected context: ${getContextSummary(state)}`,
    `Status: ${getSummaryStatus(state)}`,
    '',
    '## Planning Depth',
    formatList(state.planningDepth),
    '',
    '## Blocked Work',
    formatList(state.blockedWork),
    '',
    '## Intake Summary',
    intakeSummary.length > 0 ? intakeSummary.map((item) => `- ${item}`).join('\n') : '- No intake notes yet.',
    '',
    '## Scope Notes',
    state.scopeNotes || 'No scope notes yet.',
    '',
    '## Non-Goals',
    state.nonGoals || 'No non-goals recorded yet.',
    '',
    'Packet is the source of truth. Prompt is secondary. Execution only after approval.',
  ].join('\n');
}

export function getCodexPromptPlaceholder(state: LauncherFormState) {
  return [
    '# Draft Codex Prompt',
    '',
    'Draft Codex Prompt - generated from current local form state. Not a replacement for a staging packet.',
    '',
    'Launcher packet:',
    `- Packet id: ${state.slug || '[missing]'}`,
    `- Packet path: ${getPacketPath(state)}`,
    `- Classification: ${state.classification || '[missing]'}`,
    `- Context: ${getContextSummary(state)}`,
    `- Approval status: ${getSummaryStatus(state)}`,
    `- Execution boundary: local/internal copyable wizard output only unless a packet separately approves more.`,
    `- Blocked work: ${state.blockedWork.join(', ') || 'none selected'}`,
    '',
    'Task:',
    `Use the approved packet at ${getPacketPath(state)} as the source of truth. Do not expand scope beyond the packet boundary.`,
  ].join('\n');
}

export function getPacketOutline(state: LauncherFormState) {
  return [
    '# Packet Outline',
    '',
    `Packet id: ${state.slug || '[missing]'}`,
    `Packet path: ${getPacketPath(state)}`,
    '',
    'Expected files:',
    '- intake.md',
    '- classification.md',
    '- scope.md',
    '- decision-log.md',
    '- approval.md',
    '- execution-readiness.md',
    '',
    'This V1.2 UI does not write these files. It only prepares copyable Markdown output.',
  ].join('\n');
}
