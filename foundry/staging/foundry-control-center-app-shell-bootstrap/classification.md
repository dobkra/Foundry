# Classification

Status: `approved_for_execution`

## Selected Classification

`work_package`

## Classification Rationale

Foundry Control Center already exists as a planned Foundry system project. This is a scoped bootstrap package inside that existing Foundry context.

## Why This Is Not `new_project`

This is not a `new_project` because it does not create a new independent repository or product. It creates a minimal app shell inside the existing Foundry repo.

## Why This Is Not `new_module`

This is not a `new_module` because it does not create the Launcher module yet. It only creates the shell where future modules can live.

## Why This Is Not `audit`

This is not an `audit` because it implements a minimal local app foundation rather than reviewing an existing implementation.

## Why This Is Not `decision_workshop`

This is not a `decision_workshop` because the implementation boundary and preferred stack are already approved.

## Parent Context

Parent project: Foundry

Parent workflow/module: Foundry Control Center

## Registry Eligibility

No registry mutation is allowed.

The app shell may display registry-derived facts as static read-only context, but it does not read, write, or mutate registry files.

## Execution Eligibility

Approved:

- Minimal local/internal app shell.
- Vite + React + TypeScript bootstrap.
- Neutral Control Center landing page.
- Placeholder Foundry Launcher module card.
- Local build/typecheck scripts.

Blocked:

- Full Foundry Launcher wizard.
- Linear issue creation.
- GitHub issue creation.
- Codex launch.
- Linear/GitHub/Codex integration.
- Automation.
- Registry mutation.
- Database/server behavior.
- Authentication.
- Deployment.
- Public/client-facing routes.
- Speech recognition.
- Audio storage or processing.
- DK Arkitekter OS repo changes.
- Final visual branding.
