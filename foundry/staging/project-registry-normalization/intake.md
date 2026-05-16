# Project Registry Normalization

Status: `approved_for_manual_execution`

## Intake Title

Project Registry Normalization

## Raw Idea

Clean up transitional project registry wording after the repo split.

## Requested Outcome

Normalize registry documentation and draft registry records so they reflect the completed repo split and current Foundry operating model.

## Classification Candidate

`work_package`

## Existing Parent Project/Area

Parent project: Foundry

Parent area: Project Registry

## Business/Project Context

- Foundry repo is the active global execution factory: `dobkra/Foundry`.
- DK Arkitekter OS is an active registered business OS project/example: `dobkra/dk-arkitekter-os`.
- The archive repo is cold storage for historical material: `dobkra/archive`.
- The registry draft contained transitional wording from the repo split.

This packet authorizes technical registry normalization only, reflecting already approved repo split facts.

## Review Decision

Reviewer: Dobromir

Decision date: `2026-05-16`

Decision summary: Approved for technical registry normalization reflecting already approved repo split facts. No new project/module creation, ownership change, automation, UI, Linear/GitHub integration, Codex self-launching, deployment, or DK Arkitekter OS repo changes are approved.

## Scope Boundaries

In scope:

- Fix stale/transitional registry wording.
- Normalize repo names and casing.
- Clarify active repo roles.
- Clarify archive as cold storage / historical material.
- Clarify DK Arkitekter OS as a registered project/example, not the default parent.
- Preserve progressive complexity.
- Update registry documentation and draft YAML.

Out of scope:

- Creating new projects.
- Creating new modules.
- Changing project ownership or scope beyond already approved repo split facts.
- Mutating GitHub or Linear beyond this PR.
- Automating registry changes.
- UI, deployment, server, database, app route, or runtime work.
- DK Arkitekter OS repo changes.

## Non-Goals

- Do not create project records beyond reflecting existing repo split facts.
- Do not create module records.
- Do not mutate GitHub/Linear beyond this pull request.
- Do not automate anything.
- Do not change DK Arkitekter OS repo content.

## Risks/Unknowns

- Future registry work may require more structure, but this cleanup must not invent durable architecture layers.
- Future new projects/modules still require separate Launcher approval.

## Approval Requirements

Approved for this task:

- Technical registry normalization reflecting already approved repo split facts.
- Documentation/YAML cleanup inside Foundry only.

Blocked unless separately approved:

- New project/module creation.
- Ownership/scope changes.
- Automation, UI, integrations, deployment, runtime implementation, or DK Arkitekter OS repo changes.

## Suggested Next Step

Perform technical registry normalization in the Foundry repo and keep future registry structure changes gated by Launcher approval.

## Reviewer Decision

Decision: `approved_for_manual_execution`

Reviewer: Dobromir

Date: `2026-05-16`

Notes: Approved for technical registry normalization reflecting already approved repo split facts. No new project/module creation, ownership change, automation, UI, Linear/GitHub integration, Codex self-launching, deployment, or DK Arkitekter OS repo changes are approved.
