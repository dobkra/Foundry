# UI / Workflow Sprint Pack

## Packet id

`foundry-launcher-v0.7-first-project-initiation-example`

## Parent packet

`foundry/staging/foundry-launcher-v0.7-first-project-initiation-example/`

## UI/workflow status

`needs_review`

## Target users

- Dobromir.
- ChatGPT-assisted planning sessions.
- Codex execution preparation after approval.

## User journeys

- Start with a loose idea and classify it.
- Select parent context and planning depth.
- Fill structured packet fields.
- Review generated packet summary.
- Decide whether work is ready for review, parked, rejected, or later execution setup.
- Generate future prompt/issue/task material only after approval.

## Screen flow

1. Start.
2. Parent Context.
3. Metadata.
4. Intake.
5. Discovery Depth.
6. Scope.
7. Approval Categories.
8. Execution Permissions.
9. Review.
10. Result.

## Workflow steps

- Choose work type.
- Select parent project/workflow/module.
- Enter raw idea and requested outcome.
- Select planning packs needed.
- Fill required structured fields.
- Mark blocked work.
- Review generated packet.
- Record review state.
- Prepare proposed issue breakdown only after scope exists.

## Selection-first fields

- Classification.
- Parent context.
- Planning depth.
- Status.
- Approval categories.
- Execution permissions.
- Blocked work.
- Non-goals.
- Reviewer decision.
- Next action.

## Free-text / dictation-friendly fields

- Raw idea.
- Business/problem context.
- Why this matters.
- Current workflow.
- Target workflow.
- Pain points.
- Source materials.
- Reviewer notes.
- Decision notes.

## Controlled vocabularies

- Launcher classification values.
- Lifecycle status values.
- Approval categories.
- Execution permissions.
- Blocked work categories.
- Planning pack selection values.

## UI states

- Draft.
- Needs review.
- Approved for manual execution.
- Approved for execution.
- Parked.
- Rejected.
- Superseded.

## Validation rules

- `new_module` requires a parent project/workflow/module.
- Registry mutation requires separate approval.
- UI implementation requires separate approval.
- Automation requires separate approval.
- Issue breakdown must reference approved source scope.
- Linear/Codex actions must remain blocked until execution-readiness allows them.

## Empty states

- No parent selected.
- No planning packs selected.
- No approval categories selected.
- No blocked work selected.
- No reviewer decision recorded.

## Error states

- Missing parent context for `new_module`.
- Attempted execution setup before approval.
- Attempted registry mutation without approval.
- Attempted automation without approval.
- Attempted Linear/Codex action while blocked.

## Result / handoff step

The result step should show:

- Packet path.
- Packet files.
- Classification.
- Approval state.
- Execution boundary.
- Blocked work.
- Copy review summary.
- Copy Codex prompt.
- Future Linear/Codex actions blocked until approved.

## Sprint grouping

Future hypothetical only:

- V1 wireframe.
- V1 packet generator.
- V1 local/manual file output.
- Later integrations.

These sprint groups are examples only and do not authorize implementation.

## Visual/creative decisions required

- Whether the future UI is Foundry Control Center or standalone.
- How dense or guided the control panel should feel.
- How to present approval gates and blocked work without creating friction.

## Accessibility notes

- Use clear labels for structured controls.
- Preserve keyboard navigation in future UI.
- Keep status and blocked-work indicators text-readable.
- Do not rely on color alone for approval state.

## Non-goals

- No UI implementation.
- No React components.
- No app routes.
- No design system changes.
- No runtime behavior.

## Approval notes

`[Pending Dobromir review]`
