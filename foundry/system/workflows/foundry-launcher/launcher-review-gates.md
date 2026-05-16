# Launcher Review Gates

## Purpose

Launcher review gates prevent staged ideas from becoming registry entries or execution work before the right authority has reviewed the context, classification, scope, and risk.

Technical readiness does not replace Dobromir approval.

For approved technical execution steps, use the [Technical Execution Delegation Rules](../../../standards/technical-execution-delegation-rules.md) to decide when ChatGPT and Codex can continue without asking Dobromir.

## Intake Review Gate

Purpose: Confirm that the staging intake is complete enough to classify.

Checks:

- Raw idea is captured.
- Requested outcome is stated.
- Known parent project or module is named, if any.
- Scope boundaries and non-goals are visible.
- Risks and unknowns are recorded.
- Approval requirements are listed.

Allowed outcomes:

- Continue to classification.
- Return for more intake detail.
- Park the intake.
- Reject the intake.

## Classification Approval Gate

Purpose: Confirm that the staging intake uses the correct Launcher classification.

Checks:

- Classification is one of `new_project`, `new_module`, `work_package`, `audit`, or `decision_workshop`.
- Parent context requirement is satisfied or explicitly marked missing.
- Approval level matches the classification and risk.
- The handoff folder contract matches the classification.

Allowed outcomes:

- Approve classification.
- Reclassify.
- Request more context.
- Park or reject.

## Registry Update Gate

Purpose: Decide whether the project registry may be updated.

Rules:

- Only approved `new_project` and `new_module` classifications may update the project registry.
- `new_project` requires Dobromir approval before registry update.
- `new_module` requires an existing registered parent project and Dobromir approval before registry update.
- DK Arkitekter OS may appear as one registered project example, but it is not the default parent.
- The registry should support progressive complexity. Simple projects should not be forced into complex architecture layers.

Allowed outcomes:

- Approved for registry.
- Not approved for registry.
- Needs more registry context.
- Parked or rejected.

## Execution Setup Gate

Purpose: Decide whether staged work may become Linear, GitHub, or Codex execution work.

Rules:

- No Linear issue is created before approval.
- No GitHub issue, branch, pull request, release, deployment, or merge action is created before approval.
- No Codex execution packet starts before approval.
- No automation is enabled before approval.
- Decision workshops do not automatically become execution work.

Allowed outcomes:

- Approved for execution setup.
- Approved for decision-only documentation.
- Blocked pending approval.
- Parked or rejected.

## High-Level Decision Gate

Purpose: Protect strategic, business, creative, legal, pricing, client-facing, automation, deployment, release, privacy, registry, and Codex execution decisions.

Dobromir is final authority for:

- Conceptual direction.
- Business scope.
- Creative/visual direction.
- Client-facing scope.
- Pricing/commercial decisions.
- Legal/privacy decisions.
- Automation scope.
- Deployment/release decisions.
- Project/module creation.
- Registry changes.
- Codex execution approval.

Allowed outcomes:

- Decision approved.
- Decision revised.
- Decision parked.
- Decision rejected.
- Separate execution packet approved.
