# Decision Log

Status: `approved_for_manual_execution`

## Recorded Decision

| Date | Decision | Owner | Notes |
|---|---|---|---|
| `2026-05-16` | Approved for technical registry normalization | Dobromir | Reflect already approved repo split facts. No new project/module creation, ownership change, automation, UI, Linear/GitHub integration, Codex self-launching, deployment, or DK Arkitekter OS repo changes are approved. |

## Questions Answered For This Cleanup

| Question | Status | Answer |
|---|---|---|
| Should Foundry registry status change from planned/transitional to active? | Answered | Yes. Foundry is the active global execution factory. |
| Should repo casing be normalized to `dobkra/Foundry`? | Answered | Yes. Use `dobkra/Foundry`. |
| Should `archive` be listed as cold storage? | Answered | Yes. `dobkra/archive` is cold storage / historical material. |
| Should DK Arkitekter OS be listed only as a registered project/example? | Answered | Yes. It is an active registered business OS project/example, not the default parent. |
| Should registry entries include staging packet references? | Answered | Yes, where useful and lightweight. Staging references must not become heavy schema requirements. |
| Should old duplicate/stale repo references remain only under archive candidates? | Answered | Yes. Duplicate/stale references should not be represented as active repos. |

## Current Decision State

This packet approves technical registry cleanup only.

Allowed:

- Fix stale/transitional wording.
- Normalize repo names and casing.
- Clarify active repo roles.
- Clarify archive as cold storage / historical material.
- Clarify DK Arkitekter OS as a registered project/example, not the default parent.
- Preserve progressive complexity.
- Update registry documentation and draft YAML.

Blocked:

- New project creation.
- New module creation.
- Ownership/scope changes.
- Automation.
- UI.
- Linear/GitHub integration.
- Codex self-launching.
- Deployment.
- Server/database/app routes.
- DK Arkitekter OS repo changes.
