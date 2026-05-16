# Classification

Status: `approved_for_execution`

## Selected Classification

`work_package`

## Classification Rationale

This is a scoped implementation package inside the existing Foundry Launcher workflow and Foundry Control Center app shell.

## Why This Is Not `new_project`

This is not a `new_project` because it does not create a new independent repository, product, or project record.

## Why This Is Not `new_module`

This is not a `new_module` because the Foundry Launcher already exists as a Foundry workflow and the Control Center shell already exists. V1.1 implements a narrow first wizard screen/module inside that existing context.

## Why This Is Not `audit`

This is not an `audit` because it builds a minimal local UI foundation rather than reviewing an existing project or module.

## Why This Is Not `decision_workshop`

This is not a `decision_workshop` because the implementation boundary is already approved. Visual/product review is still required before merge, but the task is implementation work inside a defined boundary.

## Parent Context

Parent project: Foundry

Parent workflow/module: Foundry Launcher

## Registry Eligibility

No registry mutation is allowed.

The wizard may display read-only parent reference options:

- Foundry.
- DK Arkitekter OS.

Archive is cold storage/reference only and must not be selectable as an active execution parent.

## Execution Eligibility

Approved:

- Minimal local/internal Launcher wizard module.
- Local React state.
- In-app screen switch inside the existing Control Center shell.
- Controlled fields, dropdowns, checkboxes, and local validation warnings.
- Copyable review summary.
- Copyable draft Codex prompt placeholder.
- Optional packet outline text.
- Neutral internal utility styling.

Blocked:

- Deployment.
- Automation.
- Linear issue creation.
- GitHub issue creation.
- Linear/GitHub/Codex integration.
- Codex task launch.
- Codex self-launching.
- Registry mutation.
- Generated packet file writes from the UI.
- Database/server behavior.
- Authentication.
- Public/client-facing routes.
- Speech recognition.
- Audio storage or processing.
- DK Arkitekter OS repo changes.
- Final visual identity.
