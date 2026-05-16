import type { LauncherFormState } from './launcherTypes';

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

export function getReviewSummary(state: LauncherFormState) {
  const intakeSummary = [
    state.intake.problemContext && `Problem/context: ${state.intake.problemContext}`,
    state.intake.whyItMatters && `Why this matters: ${state.intake.whyItMatters}`,
    state.intake.currentWorkflow && `Current workflow: ${state.intake.currentWorkflow}`,
    state.intake.targetWorkflow && `Target workflow: ${state.intake.targetWorkflow}`,
    state.intake.painPoints && `Pain points: ${state.intake.painPoints}`,
    state.intake.sourceMaterials && `Source materials/notes: ${state.intake.sourceMaterials}`,
  ].filter(Boolean);

  return [
    '# Foundry Launcher Review Summary',
    '',
    `Packet id: ${state.slug || '[missing]'}`,
    `Packet path: ${getPacketPath(state)}`,
    `Title: ${state.title || '[missing]'}`,
    `Classification: ${state.classification || '[missing]'}`,
    `Parent context: ${state.parentContext || '[missing]'}`,
    `Parent project: ${state.parentProject || '[not selected]'}`,
    `Status: ${state.status}`,
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
    `- Approval status: ${state.status}`,
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
    'This V1.1 UI does not write these files. It only prepares copyable Markdown output.',
  ].join('\n');
}
