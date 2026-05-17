# Classification

Status: `approved_for_execution`

Selected classification: `work_package`

## Rationale

V1.2 is a scoped implementation step inside the existing Foundry Launcher module. It adds local copyable Markdown packet output to the current wizard. It does not create a new independent project, a new module, an audit, or a decision workshop.

## Why This Is Not `new_project`

The Foundry Launcher already exists inside Foundry. V1.2 does not create a new independent project or repo.

## Why This Is Not `new_module`

The minimal wizard module already exists from V1.1. V1.2 extends that module with copyable Markdown output.

## Why This Is Not `audit`

This task implements a narrow approved UI capability. It is not a review of an existing project or module.

## Why This Is Not `decision_workshop`

The implementation boundary is already approved. This task does not decide product direction beyond the scoped V1.2 behavior.

## Parent Context

Foundry / Foundry Launcher

## Registry Eligibility

No registry mutation is allowed in this packet.

## Execution Eligibility

Approved only for local/internal copyable Markdown packet output inside the existing Foundry Control Center app shell.

## Blocked Work

- File writes from the UI.
- Registry mutation.
- Linear/GitHub/Codex integration.
- Codex task launch or self-launching.
- Automation.
- Deployment.
- Database/server work.
- Authentication.
- DK Arkitekter OS repo changes.
