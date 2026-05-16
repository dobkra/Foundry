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

## Dictation-Assisted Free Text

The future Foundry Launcher UI should be:

- Selection-first for system behavior.
- Dictation-assisted for unavoidable free-text context.

Typing should remain limited, but some fields require human explanation and should support optional dictation.

Dictation-friendly fields:

- Raw idea.
- Business/problem context.
- Why this matters.
- Current workflow.
- Target workflow.
- Pain points.
- Primary users/roles.
- Out-of-scope notes.
- Source materials.
- Systems/tools.
- Reviewer notes.
- Decision notes.

Dictation is an input convenience, not automation.

The UI must not store audio unless explicitly approved in a future privacy/security decision.

For V0.5, record only the UX requirement: free-text fields should be dictation-friendly.

Do not implement speech recognition. Do not add browser APIs. Do not add code, scripts, UI, or runtime behavior.

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

This step may use dictation on free-text fields, while still using selections and toggles where possible.

Problem:

- Business/problem context.
- Why this matters.

People:

- Primary users / roles.
- Affected systems or teams.

Workflow:

- Current workflow.
- Target workflow.
- Pain points.

Boundary:

- Out of scope.
- First-version limits.

Inputs:

- Source materials.
- Systems/tools.
- Existing repositories/files.

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

The future Launcher UI should not end only with a copied prompt.

The correct Foundry model is:

Packet first.
Prompt second.
Execution only after approval.

The staging packet is the durable source of truth.
The Codex prompt is a temporary execution instruction generated from the approved packet.
The PR is the implementation/change record.

The Result step should show:

- Packet id.
- Packet path.
- Packet status.
- Generated/updated packet files.
- Classification.
- Approval state.
- Execution boundary.
- Blocked work.
- Next allowed action.

The Result step may include:

- Copy review summary.
- Copy Codex prompt.
- Open packet folder.
- Start another packet.

The Result step must not directly:

- Create Linear issues.
- Create GitHub issues.
- Start Codex execution.
- Mutate registry files.
- Trigger automation.
- Deploy anything.

unless a later approved implementation explicitly allows those integrations.

The "Copy Codex Prompt" action should generate a prompt from the packet contents and approved execution boundary. It must not replace the staging packet.

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

## Future Linear and Codex Integration Direction

The future model is:

Launcher packet = source of truth.
Linear = execution/project-management mirror.
Codex task = implementation workspace.
GitHub PR = verified change record.

Future Result step actions may include:

- Create Linear project / issue.
- Start Codex task.
- Open work folder.
- Copy Codex prompt.
- Open packet folder.

These actions must only become available after the packet approval state allows them.

Linear direction:

- For `new_project`, the Launcher may create or suggest a new Linear project area.
- For `new_module`, the Launcher may create issues under the parent project's Linear area.
- For `work_package`, the Launcher may create issues under the existing project/module area.
- For `audit`, the Launcher may create audit issues under the target project/module.
- For `decision_workshop`, the Launcher may create a decision-tracking issue only if follow-up tracking is needed.

Linear issues should include:

- Launcher packet id.
- Packet path.
- Classification.
- Approval status.
- Execution boundary.
- Blocked work.
- Target repo.
- Related branch/PR when available.

Codex direction:

The Launcher should not only generate a prompt. It should eventually define a Codex work context.

Future Codex task metadata should include:

- Packet id.
- Packet path.
- Target repo.
- Target branch.
- Work folder, if needed.
- Allowed files/areas.
- Blocked files/areas.
- Execution boundary.
- Verification requirements.

Future work folder direction:

Use a work folder only when useful for planning, analysis, generated artifacts, migration notes, or handoff material.

Recommended pattern:

- Foundry-level work may use `work/<packet-id>/` in the Foundry repo.
- Project-local work may use `work/<packet-id>/` in the target project repo.
- Staging packets remain under `foundry/staging/` for Foundry/governance work or under project-local `staging/` later.

The work folder must not replace:

- The staging packet.
- The Git branch.
- The PR.
- The review gate.

Do not implement Linear integration in V0.5.
Do not implement Codex task launching in V0.5.
Do not create work folders in V0.5 unless they are documentation examples only.
Do not add APIs, scripts, automation, UI, server code, or database files.

## Progressive Planning Packs

The future Foundry Launcher UI should not only create a basic intake packet. For larger projects, it should route the user into deeper planning packs before Linear or Codex execution.

The Launcher should support progressive planning depth:

1. Basic Staging Packet

Used for small work packages and simple documentation/implementation tasks.

2. Discovery Pack

Used when the idea needs clarification before architecture or issue creation.

3. Architecture Pack

Used when the project needs technical/project architecture, repo/module structure, system boundaries, data flow, integrations, or ownership decisions.

4. Business Functions Pack

Used when the project needs business functions, user roles, operating workflows, service model, commercial logic, or organizational responsibilities defined.

5. Goals and Outcomes Pack

Used when success criteria, KPIs, outcomes, acceptance criteria, or project value need to be defined before implementation.

6. UI / Workflow Sprint Pack

Used when the project needs interface planning, screen flow, UX decisions, component groups, user journeys, or sprint sequencing.

7. Issue Breakdown Pack

Used only after the relevant scope is approved. It converts approved scope into Linear-ready issues.

Important operating rule:

Linear issues should be generated from approved Launcher / Discovery / Architecture scope.
Linear should mirror the approved work; it should not be the primary place where project scope is invented.

ChatGPT role:

ChatGPT acts as the project architect and planning assistant during Discovery, Architecture, Business Functions, Goals/Outcomes, UI Sprint, and Issue Breakdown work.

Codex role:

Codex updates repository files, creates planning documents, and later executes scoped implementation tasks after approval.

Dobromir role:

Dobromir is required for direction/authority decisions, including business model, creative direction, client-facing scope, architecture ownership, new project/module creation, and autonomous automation scope.

Future UI behavior:

The Launcher should ask whether the packet requires deeper planning:

- Discovery needed?
- Architecture needed?
- Business functions needed?
- Goals/outcomes needed?
- UI/workflow sprint planning needed?
- Issue breakdown needed?

The UI should use dropdowns/toggles for these decisions, not free text where possible.

The future Launcher UI should eventually support a lightweight architecture-depth selector inspired by TOGAF architecture thinking, but not a full TOGAF process.

Possible selector values:

- Basic.
- Discovery needed.
- Business functions needed.
- Architecture needed.
- Goals/outcomes needed.
- UI/workflow sprint needed.
- Issue breakdown needed.

See [Lightweight Architecture Planning Framework](../../../standards/lightweight-architecture-planning-framework.md).

Do not implement these packs in V0.5.
Only document this progressive planning model.

## Planning Pack Templates

V0.6 defines reusable Markdown templates for the progressive planning pack model:

- [Planning Packs Overview](../../../templates/launcher/planning-packs/README.md)
- [Discovery Pack Template](../../../templates/launcher/planning-packs/discovery-pack-template.md)
- [Architecture Pack Template](../../../templates/launcher/planning-packs/architecture-pack-template.md)
- [Business Functions Pack Template](../../../templates/launcher/planning-packs/business-functions-pack-template.md)
- [Goals and Outcomes Pack Template](../../../templates/launcher/planning-packs/goals-and-outcomes-pack-template.md)
- [UI / Workflow Sprint Pack Template](../../../templates/launcher/planning-packs/ui-workflow-sprint-pack-template.md)
- [Issue Breakdown Pack Template](../../../templates/launcher/planning-packs/issue-breakdown-pack-template.md)
- [Planning Pack Selection Guide](../../../templates/launcher/planning-packs/planning-pack-selection-guide.md)

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
- Speech recognition.
- Browser speech APIs.
- Audio storage or processing.
- Work folders.
