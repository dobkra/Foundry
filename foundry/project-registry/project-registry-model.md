# Project Registry Model

## Purpose

The Foundry project registry is a lightweight contract for tracking approved Foundry projects, modules, and repo roles. It should support progressive complexity without forcing simple projects into complex architecture layers.

The current draft registry lives in [PROJECT_REGISTRY_DRAFT.yml](PROJECT_REGISTRY_DRAFT.yml).

## Current Repo Roles

The completed repo split is reflected as follows:

- Foundry (`dobkra/Foundry`) is the active global execution factory.
- DK Arkitekter OS (`dobkra/dk-arkitekter-os`) is an active registered business OS project/example inside Foundry.
- Archive (`dobkra/archive`) is cold storage / historical material.

DK Arkitekter OS must not be treated as Foundry's default parent project. It is one registered project/example, not the parent platform.

## Launcher Alignment

Launcher-approved registry updates follow the [Foundry Launcher workflow](../system/workflows/foundry-launcher/README.md).

Only approved `new_project` and `new_module` classifications may update the project registry when the approval explicitly allows registry work.

- `new_project` may add a new registered project only after Dobromir approval.
- `new_module` may add a module only under an existing registered parent project and only after Dobromir approval.
- `work_package`, `audit`, and `decision_workshop` do not update the registry directly unless a separate approval explicitly allows a technical registry cleanup or follow-up registry action.
- A `decision_workshop` may recommend a registry update, but the registry update still requires an approved registry action.

Approved staging packets may be referenced where useful, especially when they explain why a registry entry or cleanup happened. The project registry normalization packet lives at [../staging/project-registry-normalization/](../staging/project-registry-normalization/).

## Technical Cleanup Rule

Routine technical registry cleanup may align registry files with already approved decisions without a new Dobromir loop when it only:

- Fixes repo casing.
- Removes obvious transitional wording.
- Aligns registry status labels with already approved decisions.
- Adds links to approved staging packets.
- Preserves existing project/module meaning.
- Keeps registry files consistent with merged Foundry decisions.

This follows the [technical execution delegation rules](../standards/technical-execution-delegation-rules.md).

Dobromir is still required for new project creation, new module creation, ownership/scope changes, parent/child architecture changes, project meaning changes, approval model changes, or decisions about whether work belongs in Foundry, DK Arkitekter OS, archive, or another repo.

## Lightweight Registry Contract

Registry entries should be able to describe:

- Project or module id.
- Name.
- Classification or type.
- Parent project, when applicable.
- Repository or target location, when applicable.
- Status.
- Ownership or scope summary.
- Links to relevant workflow, handoff, approval, staging, or execution documents.

This is a lightweight documentation contract, not a database schema.

## Progressive Complexity

Simple projects should remain simple. A small project may need only a name, id, owner/context, status, and location.

More complex software projects may add modules, branches, support workflows, release rules, architecture layers, or planning packs when those details are useful and approved.

The registry should record approved structure. It should not invent product architecture before the Launcher review gate approves the need for it.

The registry should remain aligned with the [Lightweight Architecture Planning Framework](../standards/lightweight-architecture-planning-framework.md): use enough structure for the work, but do not force simple projects into advanced architecture layers.

## Boundaries

Registry normalization does not create new projects, create new modules, change project ownership, approve UI work, approve automation, approve Linear/GitHub integration, approve Codex self-launching, approve deployment, or modify the DK Arkitekter OS repo.

Registry files may be normalized to reflect the already approved repo split facts:

- `dobkra/Foundry` is active Foundry.
- `dobkra/dk-arkitekter-os` is the active DK Arkitekter OS registered project/example.
- `dobkra/archive` is cold storage / historical material.
