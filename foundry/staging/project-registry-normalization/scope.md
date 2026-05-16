# Scope

Status: `approved_for_manual_execution`

## Approval Decision

Reviewer: Dobromir

Decision date: `2026-05-16`

Decision summary: Approved for technical registry normalization reflecting already approved repo split facts. No new project/module creation, ownership change, automation, UI, Linear/GitHub integration, Codex self-launching, deployment, or DK Arkitekter OS repo changes are approved.

## Approved Normalization Scope

The Project Registry Normalization work package may update registry documentation and draft YAML to reflect the completed repo split and current Foundry operating model.

Approved cleanup:

- Review current registry draft.
- Correct active repo names and casing.
- Clarify Foundry as active global execution factory.
- Clarify DK Arkitekter OS as active registered business OS project/example.
- Clarify archive as cold storage / historical material.
- Remove or resolve transitional wording.
- Preserve progressive complexity principle.
- Avoid making DK Arkitekter OS the default parent.
- Avoid inventing new architecture layers.
- Reference approved staging packets where useful.

## Explicit Non-Goals

- No automation.
- No new project creation.
- No new module creation.
- No ownership/scope change beyond already approved repo split facts.
- No Linear issue creation.
- No GitHub issue creation.
- No database.
- No server.
- No UI.
- No CLI.
- No deployment.
- No DK Arkitekter OS repo changes.

## Constraints

- This is technical registry cleanup only.
- Foundry remains the parent platform.
- DK Arkitekter OS remains one registered business OS project/example, not the default parent.
- Archive remains cold storage / historical material.
- Simple projects should not be forced into advanced architecture layers.
- Future durable registry structure changes still require appropriate Launcher approval.

## Acceptance Criteria

- Foundry is represented as the active global execution factory.
- DK Arkitekter OS is represented as an active registered business OS project/example, not the default parent.
- Archive is represented as cold storage / historical material.
- Repo names and casing are normalized.
- No new project/module is created.
- No ownership or scope change is introduced.
- No automation, UI, integration, deployment, or runtime work is added.
