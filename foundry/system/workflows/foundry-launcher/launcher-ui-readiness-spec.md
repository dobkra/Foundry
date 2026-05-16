# Launcher UI Readiness Specification

## Purpose

This specification defines what the future Foundry Launcher UI should support before any UI implementation begins.

V0.5 is not implementation work. It does not create UI, React components, app routes, frontend framework files, backend/server files, CLI, automation, Linear/GitHub integration, Codex self-launching, database files, deployment, production routes, or project registry mutation.

## Governance References

- [Technical Execution Delegation Rules](../../../standards/technical-execution-delegation-rules.md)
- [Launcher Packet Reference Rules](launcher-packet-reference-rules.md)
- [Launcher Packet Lifecycle Rules](launcher-packet-lifecycle-rules.md)
- [Staging Rules](../../../staging/STAGING_RULES.md)
- [Packet Naming](../../../staging/PACKET_NAMING.md)
- [Staging Packet Index](../../../staging/INDEX.md)

## Core UX Principle

The Foundry Launcher UI should be selection-first and typing-light.

Typing should explain the idea.
Selections should define system behavior.

The UI should feel like a control panel / guided wizard, not a document editor.

The UI should prefer:

- Dropdowns.
- Radio buttons.
- Checkbox groups.
- Toggle groups.
- Predefined status values.
- Predefined classification values.
- Predefined approval categories.
- Predefined blocked-work categories.
- Parent project/module selectors from the registry.

Free-text input should be limited to:

- Raw idea.
- Short description.
- Special context.
- Reviewer notes.
- Decision notes.

## Proposed Wizard Flow

### 01 Start

Choose what kind of Foundry work this is.

Select from:

- New project.
- New module.
- Work package.
- Audit.
- Decision workshop.

### 02 Parent Context

Select parent context.

Options:

- Foundry.
- Existing registered project.
- Existing module.
- No parent yet.

Future UI should eventually load registered projects/modules from the Foundry project registry.

DK Arkitekter OS may appear as an example registered project, but it must not be the default parent.

### 03 Metadata

Fields:

- Packet title.
- Packet id / slug.
- Parent project.
- Parent workflow/module.
- Classification.
- Owner/reviewer.
- Status.

Most metadata should be selected or auto-derived.

### 04 Intake

Fields:

- Raw idea.
- Requested outcome.
- Short description.
- Special context.
- Risks/unknowns.

This is one of the few typing-heavy areas.

### 05 Scope

Actions:

- Select scope categories.
- Select non-goals.
- Select blocked work.
- Add optional notes.

### 06 Approval Categories

Select approval categories:

- Routine technical.
- Business.
- Creative/visual.
- Client-facing.
- Legal/privacy.
- Pricing/commercial.
- Architecture/project ownership.
- Registry.
- Automation.
- Deployment/release.
- Public launch.
- New project/module creation.

### 07 Execution Permissions

Select what is allowed:

- Documentation/manual work allowed.
- Codex allowed.
- Linear setup allowed.
- GitHub setup allowed.
- Registry update allowed.
- Automation allowed.
- Deployment allowed.

Default should be conservative:

- Documentation/manual work may be allowed after review.
- Automation, deployment, registry mutation, and external-system setup are blocked unless explicitly approved.

### 08 Review

Show:

- Generated packet summary.
- Classification.
- Approval gates.
- Execution boundary.
- Blocked work.
- Whether Dobromir is required.

### 09 Result

Generate or update staging packet files.

Show packet path.

Show next action:

- `needs_review`
- `approved_for_manual_execution`
- `approved_for_execution`
- `approved_for_registry`
- `parked`
- `rejected`
- `superseded`

## Field Type Model

System behavior should be controlled by structured fields, not free text.

| Field group | Field type | Notes |
|---|---|---|
| Work type / classification | Select or radio group | Uses the controlled classification vocabulary. |
| Parent project | Select | Eventually loaded from the Foundry project registry. DK Arkitekter OS may appear as an example, not a default. |
| Parent module/workflow | Select | Filtered by selected parent project when registry/module data exists. |
| Status | Select | Uses lifecycle status values. |
| Approval category | Multi-select or checkbox group | Multiple approval gates may apply. |
| Execution permissions | Toggle group or checkbox group | Defaults should be conservative and approval-aware. |
| Blocked work | Multi-select or checkbox group | Uses predefined blocked-work categories. |
| Non-goals | Multi-select with optional notes | Common non-goals should be selectable. |
| Reviewer decision | Select | Decision notes may remain free text. |
| Raw idea | Free text | Captures human intent and loose idea context. |
| Notes | Free text | Limited to special context, reviewer notes, and decision notes. |

## Initial Controlled Vocabularies

### Classification

- `new_project`
- `new_module`
- `work_package`
- `audit`
- `decision_workshop`

### Status

- `draft`
- `staged`
- `needs_review`
- `approved_for_registry`
- `approved_for_execution`
- `approved_for_manual_execution`
- `blocked`
- `parked`
- `rejected`
- `superseded`

### Approval Category

- `routine_technical`
- `business`
- `creative_visual`
- `client_facing`
- `legal_privacy`
- `pricing_commercial`
- `architecture_ownership`
- `registry`
- `automation`
- `deployment_release`
- `public_launch`
- `new_project_module`

### Execution Permission

- `documentation_manual_allowed`
- `codex_allowed`
- `linear_allowed`
- `github_allowed`
- `registry_update_allowed`
- `automation_allowed`
- `deployment_allowed`

### Blocked Work

- `automation`
- `ui`
- `cli`
- `linear_integration`
- `github_integration`
- `codex_self_launching`
- `database`
- `server`
- `deployment`
- `app_routes`
- `registry_mutation`
- `client_facing_change`
- `pricing_change`
- `legal_privacy_change`
- `public_launch`

## Default Conservative Behavior

- New packets should start as `needs_review` unless explicitly created as `draft`.
- UI implementation must remain blocked until a separate UI implementation packet is approved.
- Automation must remain blocked unless separately approved.
- Registry mutation must remain blocked unless the packet explicitly approves registry work.
- Deployment/public launch must remain blocked unless explicitly approved.
- If a task is routine technical work inside an approved boundary, the UI should indicate that Dobromir is not required.
- If a task changes business direction, product meaning, architecture ownership, client-facing behavior, legal/privacy, pricing/commercial position, or autonomous-system power, the UI should indicate that Dobromir is required.

## Expected UI Output

If a later approved implementation builds the UI, the future UI should generate or update:

- `intake.md`
- `classification.md`
- `scope.md`
- `decision-log.md`
- `approval.md`
- `execution-readiness.md`
- `INDEX.md` row

It should not directly:

- Create Linear issues.
- Create GitHub issues.
- Start Codex execution.
- Mutate registry files.
- Trigger automation.
- Deploy anything.

Those integrations remain blocked unless a later approved implementation explicitly allows them.

## Not In V0.5

V0.5 does not build:

- UI.
- React components.
- Local server.
- CLI.
- Database.
- Automation.
- Linear integration.
- GitHub integration.
- Codex self-launching.
- Deployment.
- Production app routes.
- Registry mutation.
