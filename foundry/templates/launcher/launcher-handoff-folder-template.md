# Launcher Handoff Folder Template

This template defines the expected staged handoff folder contract for Foundry Launcher work. It does not create runtime folders, run scripts, mutate external systems, or generate project files automatically.

## Folder Contract

Each staged handoff folder should contain:

- `intake.md`
- `classification.md`
- `scope.md`
- `decision-log.md`
- `approval.md`
- `execution-readiness.md`

## Status Values

Use one status value at a time. The canonical status definitions live in the [Launcher Packet Lifecycle Rules](../../system/workflows/foundry-launcher/launcher-packet-lifecycle-rules.md).

- `draft`
- `staged`
- `needs_review`
- `approved_for_registry`
- `approved_for_execution`
- `approved_for_manual_execution`
- `blocked`
- `rejected`
- `parked`
- `superseded`

## `intake.md`

Purpose: Preserve the original staging intake.

Should include:

- Intake title.
- Raw idea.
- Requested outcome.
- Existing parent project or module, if any.
- Business or project context.
- Risks and unknowns.

## `classification.md`

Purpose: Record the Launcher classification decision.

Should include:

- Selected classification.
- Classification rationale.
- Required parent context.
- Required approval level.
- Registry eligibility.
- Execution setup eligibility.

## `scope.md`

Purpose: Define boundaries before review.

Should include:

- In-scope items.
- Out-of-scope items.
- Non-goals.
- Acceptance criteria, if execution may be proposed.
- Constraints.

## `decision-log.md`

Purpose: Capture decisions and open questions.

Should include:

- Decision date.
- Decision owner.
- Decision summary.
- Alternatives considered.
- Open questions.
- Follow-up needed.

## `approval.md`

Purpose: Record review gate status.

Should include:

- Intake Review Gate result.
- Classification Approval Gate result.
- Registry Update Gate result, if applicable.
- Execution Setup Gate result, if applicable.
- High-Level Decision Gate result, if applicable.
- Dobromir approval notes when required.

## `execution-readiness.md`

Purpose: State whether execution setup is allowed.

Should include:

- Current status.
- Required approvals still missing.
- Whether Linear setup is allowed.
- Whether GitHub setup is allowed.
- Whether Codex execution is allowed.
- Explicit blockers.
- Approved next step.

## Non-Execution Rule

The handoff folder is a documentation contract. It does not create Linear issues, GitHub issues, GitHub branches, GitHub pull requests, Codex tasks, automations, deployments, databases, or runtime folders.
