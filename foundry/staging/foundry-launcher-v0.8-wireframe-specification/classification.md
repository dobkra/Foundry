# Classification

Status: `needs_review`

## Selected Classification

`work_package`

## Classification Rationale

Foundry Launcher already exists as a Foundry workflow. V0.8 is a scoped documentation/specification package inside that existing workflow.

## Why This Is Not `new_project`

This is not a `new_project` because it does not create a new independent project or repository. The parent project already exists: Foundry.

## Why This Is Not `new_module`

This is not a `new_module` because it does not approve or create a real Launcher UI module. It only specifies a future wireframe model.

## Why This Is Not `audit`

This is not an `audit` because it does not assess an existing implementation. No UI implementation exists in this packet.

## Why This Is Not `decision_workshop`

This is not a `decision_workshop` because it creates a concrete wireframe specification packet. It includes open questions, but the primary output is a documentation artifact.

## Parent Context

Parent project: Foundry

Parent workflow/module: Foundry Launcher

## Registry Eligibility

No registry mutation is allowed by this packet.

The registry may be referenced for read-only future selector behavior, but V0.8 does not change registry records.

## Execution Eligibility

Documentation/specification work only until Dobromir approval.

Blocked:

- UI implementation.
- React components.
- App routes.
- Automation.
- Linear/GitHub integration.
- Codex self-launching.
- Database.
- Server.
- Deployment.
- Registry mutation.
- DK Arkitekter OS repo changes.
