# Launcher Wireframe Specification

## Purpose

This V0.8 specification defines the future Foundry Launcher UI wireframe before implementation.

It describes screen sequence, screen purpose, primary actions, field groups, input types, default states, validation logic, result/handoff behavior, blocked actions, and future integration placeholders.

V0.8 is documentation-only. It does not build UI, React components, app routes, code, scripts, automation, CLI, Linear/GitHub integration, Codex self-launching, database files, server code, deployment, registry mutation, images, or visual mockups.

## References

- [Launcher UI Readiness Specification](launcher-ui-readiness-spec.md)
- [Launcher Packet Lifecycle Rules](launcher-packet-lifecycle-rules.md)
- [Launcher Packet Reference Rules](launcher-packet-reference-rules.md)
- [Progressive Planning Pack Templates](../../../templates/launcher/planning-packs/README.md)
- [Lightweight Architecture Planning Framework](../../../standards/lightweight-architecture-planning-framework.md)
- [Project Registry Model](../../../project-registry/project-registry-model.md)
- [Project Registry Draft](../../../project-registry/PROJECT_REGISTRY_DRAFT.yml)
- [V0.7 First Project Initiation Example](../../../staging/foundry-launcher-v0.7-first-project-initiation-example/intake.md)

## Core Wireframe Model

The future Launcher UI should behave like a guided control panel, not a document editor.

The UI should be selection-first and typing-light:

- Structured selections define system behavior.
- Free text explains human context.
- Defaults are conservative.
- External-system actions remain blocked unless a later approved implementation explicitly enables them.
- Packet first, prompt second, execution only after approval.

## Screen Sequence

1. Start
2. Parent Context
3. Metadata
4. Intake
5. Planning Depth
6. Scope
7. Approval Categories
8. Execution Permissions
9. Review
10. Result

## 01 Start

Purpose: choose the kind of Foundry work.

Primary action: Continue.

Input model: selection-first. No free text required.

Fields:

- Work type / classification selector:
  - `new_project`
  - `new_module`
  - `work_package`
  - `audit`
  - `decision_workshop`

Input type:

- Radio cards or large selection buttons.

Notes:

- The selected classification controls later validation.
- The UI should not infer execution permission from classification alone.

| Area | Component type | Field / content | Default | Notes |
|---|---|---|---|---|
| Header | Static text | Foundry Launcher | None | Names the entry point. |
| Main selection | Radio cards / large selection buttons | Work type / classification | None selected | Required before Continue. |
| Footer | Button | Continue | Disabled | Enabled only after classification is selected. |
| Footer | Button | Cancel | Enabled | Leaves without creating packet content. |

## 02 Parent Context

Purpose: choose where the work belongs.

Primary action: Continue.

Fields:

- Parent context:
  - Foundry
  - Existing registered project
  - Existing module/workflow
  - No parent yet
- Parent project selector.
- Parent module/workflow selector.

Input type:

- Dropdown/select.
- Dependent dropdowns.

Registry behavior:

- Future UI should read parent project/module options from the registry.
- Registry-backed selectors should start read-only.
- Foundry is the active global execution factory.
- DK Arkitekter OS may appear as a registered project/example.
- DK Arkitekter OS must not be the default parent.
- Archive must not be selectable as an active execution parent unless the UI is specifically showing cold storage/reference options.

| Area | Component type | Field / content | Default | Notes |
|---|---|---|---|---|
| Parent type | Select / segmented control | Parent context | None selected | Required unless classification permits no parent. |
| Parent project | Dropdown | Parent project | Empty | Read-only options from registry in future implementation. |
| Parent module/workflow | Dependent dropdown | Parent module/workflow | Empty | Enabled after parent project is selected. |
| Guidance | Static text | Registry role note | None | Explains Foundry, registered projects, and archive boundaries. |
| Footer | Button | Continue | Disabled | Enabled after required parent context is valid. |
| Footer | Button | Back | Enabled | Returns to Start. |

## 03 Metadata

Purpose: create the basic packet identity.

Primary action: Continue.

Fields:

- Packet title.
- Packet id / slug.
- Classification.
- Parent project.
- Parent workflow/module.
- Owner/reviewer.
- Status.

Input type:

- Packet title: free text with auto-suggest.
- Packet id / slug: auto-derived with manual override.
- Classification: inherited from Start.
- Parent: inherited from Parent Context.
- Reviewer: select/default Dobromir.
- Status: default `needs_review`.

| Area | Component type | Field / content | Default | Notes |
|---|---|---|---|---|
| Identity | Text input | Packet title | Empty | Required. Should suggest readable title casing. |
| Identity | Text input with auto-derive | Packet id / slug | Derived from title | Required. Uses kebab-case. Manual override allowed. |
| Inherited | Read-only chip/select | Classification | From Start | Can be changed only by returning to Start. |
| Inherited | Read-only chip/select | Parent project | From Parent Context | Can be changed by returning to Parent Context. |
| Inherited | Read-only chip/select | Parent workflow/module | From Parent Context | Optional unless classification requires it. |
| Ownership | Select | Owner/reviewer | Dobromir | Defaults to Dobromir for approval authority. |
| Lifecycle | Select | Status | `needs_review` | May be `draft` only when explicitly selected. |
| Footer | Button | Continue | Disabled | Enabled after title and slug validate. |

## 04 Intake

Purpose: capture the actual idea and human context.

Primary action: Continue.

Input type:

- Free text with optional dictation-friendly design.
- Checkboxes/toggles where possible.

Rules:

- Dictation is input convenience only.
- No speech recognition implementation is included in V0.8.
- No audio storage or processing is allowed by V0.8.
- Free text should explain the idea, not control system behavior.

Field groups:

Problem:

- Business/problem context.
- Why this matters.

People:

- Primary users / roles.
- Affected systems / teams.

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

| Area | Component type | Field / content | Default | Notes |
|---|---|---|---|---|
| Problem | Text area | Business/problem context | Empty | Dictation-friendly. |
| Problem | Text area | Why this matters | Empty | Dictation-friendly. |
| People | Text area / tag input | Primary users / roles | Empty | May later become controlled role options. |
| People | Text area / tag input | Affected systems / teams | Empty | May later become registry/tool options. |
| Workflow | Text area | Current workflow | Empty | Dictation-friendly. |
| Workflow | Text area | Target workflow | Empty | Dictation-friendly. |
| Workflow | Text area | Pain points | Empty | Dictation-friendly. |
| Boundary | Text area plus checkboxes | Out of scope | Empty | Should pair free-text notes with common non-goal checkboxes. |
| Boundary | Text area | First-version limits | Empty | Helps keep implementation scope narrow. |
| Inputs | Text area / file-reference list | Source materials | Empty | References only; no file upload behavior in V0.8. |
| Inputs | Text area / tag input | Systems/tools | Empty | May later map to controlled tool list. |
| Inputs | Text area | Existing repositories/files | Empty | Repository references only. |
| Footer | Button | Continue | Enabled | Intake may be incomplete if packet is saved as draft. |

## 05 Planning Depth

Purpose: select which planning packs are needed.

Primary action: Continue.

Fields:

- Architecture depth selector:
  - Basic
  - Discovery needed
  - Business functions needed
  - Architecture needed
  - Goals/outcomes needed
  - UI/workflow sprint needed
  - Issue breakdown needed

Input type:

- Checkbox group / multi-select.

Rules:

- Tiny work should not be forced through all packs.
- Medium work may add only needed packs.
- Large/durable work may use multiple packs.
- Issue breakdown must only be created from approved source scope.
- The architecture-depth model is inspired by lightweight architecture planning, not full TOGAF.

| Area | Component type | Field / content | Default | Notes |
|---|---|---|---|---|
| Depth selection | Checkbox group / multi-select | Architecture depth selector | Basic | Multiple values may be selected except where Basic alone is enough. |
| Guidance | Static text | Progressive complexity note | Visible | Reminds user not to overbuild small work. |
| Dependency warning | Inline validation | Issue breakdown dependency | Hidden | Shown if Issue breakdown is selected without approved source scope. |
| Footer | Button | Continue | Enabled | Validation warnings may require review acknowledgement. |

## 06 Scope

Purpose: define what is in and out.

Primary action: Continue.

Fields:

- Scope categories.
- Non-goals.
- Blocked work.
- Allowed work.
- Risks/unknowns.

Input type:

- Checkbox groups.
- Controlled vocabulary.
- Short notes.

Default blocked work:

- UI implementation.
- Automation.
- Linear/GitHub integration.
- Codex self-launching.
- Registry mutation.
- Deployment.
- Database/server/app routes.

| Area | Component type | Field / content | Default | Notes |
|---|---|---|---|---|
| Scope | Checkbox group | Scope categories | None selected | Controlled vocabulary should be used where possible. |
| Scope | Text area | Scope notes | Empty | Short explanatory notes only. |
| Non-goals | Checkbox group | Non-goals | Common high-risk non-goals selected | Defaults should block UI, automation, integration, deployment, and registry mutation where applicable. |
| Blocked work | Multi-select / checkbox group | Blocked work | Conservative blocked set | Must be visible in Review and Result. |
| Allowed work | Checkbox group / toggle group | Allowed work | Documentation/manual only | External-system mutation defaults off. |
| Risk | Text area | Risks/unknowns | Empty | Free text is acceptable here. |
| Footer | Button | Continue | Enabled | Warning shown if blocked work conflicts with allowed permissions. |

## 07 Approval Categories

Purpose: determine whether Dobromir is required.

Primary action: Continue.

Fields:

- Approval categories:
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

Input type:

- Multi-select / checkbox group.

Rules:

- Routine technical work inside approved scope may continue without Dobromir.
- Direction/authority decisions require Dobromir.
- Registry, automation, deployment/release, public launch, legal/privacy, pricing/commercial, creative/visual, client-facing, architecture ownership, and new project/module creation require Dobromir.

| Area | Component type | Field / content | Default | Notes |
|---|---|---|---|---|
| Approval | Checkbox group | Approval categories | None selected | Required before Review. |
| Authority indicator | Status badge | Dobromir required: yes/no | Derived | Yes if any authority category is selected. |
| Guidance | Static text | Delegation rule summary | Visible | Explains routine technical vs direction/authority decisions. |
| Footer | Button | Continue | Enabled | Validation may require at least one category. |

## 08 Execution Permissions

Purpose: define what actions are allowed.

Primary action: Continue.

Fields:

- Documentation/manual work allowed.
- Codex allowed.
- Linear setup allowed.
- GitHub setup allowed.
- Registry update allowed.
- Automation allowed.
- Deployment allowed.

Input type:

- Toggle group.

Default:

- Documentation/manual work may be allowed after review.
- All external-system mutation is blocked unless explicitly approved.

| Area | Component type | Field / content | Default | Notes |
|---|---|---|---|---|
| Permissions | Toggle | Documentation/manual work allowed | On after review | No runtime implication. |
| Permissions | Toggle | Codex allowed | Off | Must be tied to approved packet boundary. |
| Permissions | Toggle | Linear setup allowed | Off | External-system mutation. |
| Permissions | Toggle | GitHub setup allowed | Off | GitHub PR action is separate from issue/setup automation. |
| Permissions | Toggle | Registry update allowed | Off | Requires explicit registry approval. |
| Permissions | Toggle | Automation allowed | Off | Requires explicit automation approval. |
| Permissions | Toggle | Deployment allowed | Off | Requires explicit deployment/release approval. |
| Warning | Inline validation | External mutation warning | Hidden | Visible when any external mutation toggle is enabled. |
| Footer | Button | Continue | Enabled | Blocks Review if permissions conflict with blocked work. |

## 09 Review

Purpose: show generated packet summary before writing/handoff.

Primary actions:

- Create staging packet.
- Save draft.
- Cancel.

Show:

- Packet id.
- Classification.
- Parent context.
- Planning depth.
- Approval categories.
- Execution permissions.
- Blocked work.
- Dobromir required: yes/no.
- Generated files preview.

Rules:

- No Linear issue creation here.
- No Codex launch here.
- No registry mutation unless explicitly approved by a future implementation packet.
- Review screen must make blocked work visible before the user confirms packet creation.

| Area | Component type | Field / content | Default | Notes |
|---|---|---|---|---|
| Summary | Read-only summary | Packet id, classification, parent context | Derived | Must match previous screens. |
| Summary | Read-only list | Planning depth | Derived | Shows selected packs. |
| Governance | Read-only list | Approval categories | Derived | Shows Dobromir-required categories. |
| Governance | Status badge | Dobromir required: yes/no | Derived | Based on approval categories and delegation rules. |
| Permissions | Read-only list | Execution permissions | Derived | External-system mutation should be visibly blocked by default. |
| Blocked work | Read-only list | Blocked work | Derived | Must be prominent. |
| Preview | File preview list | Generated files preview | Derived | Shows packet files to be created/updated. |
| Footer | Button | Create staging packet | Disabled until validation passes | Future implementation action only; V0.8 documents it. |
| Footer | Button | Save draft | Enabled | Future implementation action only; V0.8 documents it. |
| Footer | Button | Cancel | Enabled | Future implementation action only; V0.8 documents it. |

## 10 Result

Purpose: show completed packet/handoff state.

Show:

- Packet id.
- Packet path.
- Packet status.
- Generated/updated packet files.
- Classification.
- Approval state.
- Execution boundary.
- Blocked work.
- Next allowed action.

Actions:

- Copy review summary.
- Copy Codex prompt.
- Open packet folder.
- Start another packet.

Future actions, blocked unless later approved:

- Create Linear project/issue.
- Start Codex task.
- Create work folder.
- Link GitHub PR.
- Mutate registry.
- Deploy.

Result model:

Packet first.
Prompt second.
Execution only after approval.

The staging packet is source of truth.
The Codex prompt is temporary execution instruction.
The PR is the verified change record.

| Area | Component type | Field / content | Default | Notes |
|---|---|---|---|---|
| Result summary | Read-only summary | Packet id, path, status | Derived | Shows durable packet identity. |
| Result summary | Read-only list | Generated/updated packet files | Derived | Source of truth is the packet. |
| Governance | Read-only summary | Approval state and execution boundary | Derived | Must match `approval.md` and `execution-readiness.md`. |
| Governance | Read-only list | Blocked work | Derived | Must remain visible. |
| Next action | Status/action panel | Next allowed action | Derived | Usually `needs_review` for new packets. |
| Actions | Button | Copy review summary | Enabled | Convenience action only. |
| Actions | Button | Copy Codex prompt | Disabled unless execution boundary allows it | Prompt must not replace the packet. |
| Actions | Button | Open packet folder | Enabled in future local/manual implementation | Does not mutate external systems. |
| Actions | Button | Start another packet | Enabled | Starts new flow. |
| Future integrations | Disabled buttons | Linear/Codex/GitHub/registry/deploy actions | Disabled | Enabled only by later approved integration packet. |

## UI State Model

| State | What the user sees | Enabled actions | Disabled actions |
|---|---|---|---|
| `draft` | Packet content exists but is incomplete. Draft label is visible. | Edit fields, save draft, cancel. | Execution setup, Linear/GitHub actions, Codex launch, registry mutation, deployment. |
| `needs_review` | Packet is ready for Dobromir or delegated review. Review-needed label is visible. | Copy review summary, open packet folder, revise draft. | Execution setup, Linear/GitHub actions, Codex launch unless explicitly allowed for the PR, registry mutation, deployment. |
| `approved_for_manual_execution` | Manual/documentation approval is visible with blocked work list. | Manual documentation updates inside boundary, copy prompt if useful, open packet folder. | Automation, runtime implementation, integrations, deployment, registry mutation unless separately approved. |
| `approved_for_execution` | Execution boundary is visible with allowed work and blocked work. | Work allowed by `execution-readiness.md`, copy Codex prompt, open packet folder. | Anything outside the approved boundary. |
| `approved_for_registry` | Registry approval is visible with registry boundary. | Registry work explicitly allowed by the packet. | New project/module creation or registry changes outside the approved boundary. |
| `blocked` | Blocking reason is visible. | Revise packet, copy review summary. | Execution setup, integrations, automation, registry mutation, deployment. |
| `parked` | Deferred status is visible. | Reopen/revise only after review decision. | Execution setup, integrations, automation, registry mutation, deployment. |
| `rejected` | Rejection reason is visible. | Start a new packet if needed. | Editing into execution, integrations, automation, registry mutation, deployment. |
| `superseded` | Successor packet/reference is visible. | Open successor packet. | Execution from superseded packet, integrations, automation, registry mutation, deployment. |

## Validation Rules

- Packet id is required.
- Classification is required.
- Parent is required unless classification allows no parent.
- `new_project` may use no parent only when approved for a new independent project path.
- `new_module` requires an existing registered parent project.
- `work_package` requires an existing project, module, or workflow.
- `audit` requires a target project, module, or workflow.
- `decision_workshop` may exist without immediate implementation, but must not automatically become execution work.
- Issue breakdown requires approved source scope.
- Registry mutation requires explicit approval.
- Automation requires explicit approval.
- Deployment/public launch requires explicit approval.
- Linear setup requires explicit approval.
- GitHub issue setup requires explicit approval.
- Codex task launch requires explicit approval and must respect `execution-readiness.md`.
- Archive must not be selectable as an active execution parent unless the UI is showing cold storage/reference options.
- DK Arkitekter OS may be selected as a registered project/example but must not be the default parent.
- Blocked work and allowed permissions must not conflict.

## Future Implementation Notes

- First implementation should likely be local/manual file output or a Foundry Control Center screen.
- Registry-backed selectors should start read-only.
- The UI should read registry data without mutating it by default.
- Linear/Codex/GitHub actions should remain disabled until a later approved integration packet enables them.
- Dictation may be considered later, but no audio storage should be allowed without privacy/security approval.
- Speech recognition, browser APIs, file-writing behavior, external-system mutation, and runtime generation are not part of V0.8.
- If a future implementation generates files, the staging packet remains the source of truth.
- If a future implementation generates a Codex prompt, that prompt remains temporary execution instruction and must include the approved packet boundary.

## Blocked Actions In V0.8

V0.8 does not authorize:

- UI implementation.
- React components.
- App routes.
- Code.
- Scripts.
- Automation.
- CLI.
- Linear issue creation.
- GitHub issue creation.
- Linear/GitHub integration.
- Codex task launch.
- Codex self-launching.
- Work folder creation.
- Registry mutation.
- Database files.
- Server code.
- Dependencies.
- Deployment.
- DK Arkitekter OS repo changes.
- Images or visual mockups.
