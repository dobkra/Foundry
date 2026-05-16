# Launcher Classification Model

## Purpose

The Launcher classification model determines what kind of Foundry work is being staged, what parent context is required, what approval level applies, and what handoff output is expected.

Supported classifications:

- `new_project`
- `new_module`
- `work_package`
- `audit`
- `decision_workshop`

## Classification Rules

### `new_project`

Definition: Starting a new independent Foundry project.

When to use it: Use `new_project` when the idea does not belong inside an existing registered project or module and may need its own project identity, ownership, repository path, templates, operating model, or registry entry.

Required parent context: Foundry as the parent platform. No existing project parent is required.

Required approval level: Dobromir approval is required before project registry update, GitHub setup, Linear setup, Codex execution, or any launch/release path.

Expected handoff output: A staged new-project handoff with intake, classification, scope boundaries, decision log, approval state, proposed registry entry, and execution-readiness notes.

May update the project registry: Yes, but only after approval.

May create Linear/GitHub/Codex work after approval: Yes, if the execution setup gate approves it.

### `new_module`

Definition: Starting a new module inside an existing software project registered in Foundry.

When to use it: Use `new_module` when the idea belongs inside an existing registered project but is large enough to need module-level ownership, scope, documentation, and potential execution setup.

Required parent context: An existing registered parent project.

Required approval level: Dobromir approval is required before module registry update, GitHub setup, Linear setup, Codex execution, or any launch/release path.

Expected handoff output: A staged new-module handoff with parent project reference, module purpose, scope boundaries, decision log, approval state, proposed registry entry, and execution-readiness notes.

May update the project registry: Yes, but only after approval and only under the confirmed registered parent project.

May create Linear/GitHub/Codex work after approval: Yes, if the execution setup gate approves it.

### `work_package`

Definition: Starting a new sprint, package, or scoped body of work inside an existing project or module.

When to use it: Use `work_package` when the parent project or module already exists and the work is a bounded execution package, milestone, improvement pass, documentation pass, maintenance batch, or implementation packet.

Required parent context: An existing project or module.

Required approval level: Scope approval is required. Dobromir approval is required when the package touches conceptual direction, business scope, visual direction, client-facing scope, pricing, legal/privacy, automation, deployment, release, registry changes, or Codex execution approval.

Expected handoff output: A staged work-package handoff with parent context, scope, non-goals, acceptance criteria, risks, approval state, and execution-readiness notes.

May update the project registry: No, unless a separate approved `new_project` or `new_module` decision is created.

May create Linear/GitHub/Codex work after approval: Yes, if the execution setup gate approves it.

### `audit`

Definition: Starting an audit of an existing project or module.

When to use it: Use `audit` when the work is to inspect, review, compare, validate, or assess an existing project or module before deciding what should happen next.

Required parent context: A target project or module.

Required approval level: Scope approval is required. Dobromir approval is required if the audit may recommend high-level direction changes, client-facing changes, automation, deployment, release, registry changes, or Codex execution.

Expected handoff output: A staged audit handoff with target context, audit questions, scope boundaries, evidence requirements, risks, approval state, and expected report format.

May update the project registry: No, unless a separate approved `new_project` or `new_module` decision is created from the audit outcome.

May create Linear/GitHub/Codex work after approval: Yes, but only for the approved audit work or for follow-up execution packets approved after the audit.

### `decision_workshop`

Definition: Starting high-level decision work that may be conceptual, business, creative, legal, pricing, client-facing, automation-related, deployment-related, release-related, privacy-related, approval-gated, or otherwise not ready for execution.

When to use it: Use `decision_workshop` when the main output is a decision, recommendation, tradeoff review, approval path, parked item, rejected idea, or possible execution packet.

Required parent context: Optional. A decision workshop may reference an existing project or module, but it may also exist before a parent project or module is approved.

Required approval level: Dobromir approval is required for conceptual direction, business scope, creative or visual direction, client-facing scope, pricing or commercial decisions, legal/privacy decisions, automation scope, deployment/release decisions, project/module creation, registry changes, and Codex execution approval.

Expected handoff output: A staged decision-workshop handoff with decision topic, context, options, risks, approval requirements, decision owner, outcome, and whether execution remains blocked, parked, rejected, or approved as a separate execution packet.

May update the project registry: No, not directly. It may recommend a registry update, but only an approved `new_project` or `new_module` classification may update the registry.

May create Linear/GitHub/Codex work after approval: Not automatically. It may create execution work only if the workshop outcome explicitly approves a separate execution packet.

## Universal Constraints

- DK Arkitekter OS is one example of a registered Foundry project, not the default parent project.
- No classification creates Linear, GitHub, or Codex execution work by itself.
- No classification mutates the project registry by itself.
- Approval gates control when registry updates and execution setup are allowed.
