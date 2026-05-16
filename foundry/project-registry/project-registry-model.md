# Project Registry Model

## Purpose

The Foundry project registry is a lightweight contract for tracking approved Foundry projects and modules. It should support progressive complexity without forcing simple projects into complex architecture layers.

The current draft registry lives in [PROJECT_REGISTRY_DRAFT.yml](PROJECT_REGISTRY_DRAFT.yml).

## Launcher Alignment

Launcher-approved registry updates follow the [Foundry Launcher workflow](../system/workflows/foundry-launcher/README.md).

Only approved `new_project` and `new_module` classifications may update the project registry.

- `new_project` may add a new registered project only after Dobromir approval.
- `new_module` may add a module only under an existing registered parent project and only after Dobromir approval.
- `work_package`, `audit`, and `decision_workshop` do not update the registry directly.
- A `decision_workshop` may recommend a registry update, but the registry update still requires an approved `new_project` or `new_module` classification.

DK Arkitekter OS is one example of a registered Foundry project. It is not the default parent project.

## Lightweight Registry Contract

Registry entries should be able to describe:

- Project or module id.
- Name.
- Classification or type.
- Parent project, when applicable.
- Repository or target location, when applicable.
- Status.
- Ownership or scope summary.
- Links to relevant workflow, handoff, approval, or execution documents.

## Progressive Complexity

Simple projects should remain simple. A small project may need only a name, id, owner/context, status, and location.

More complex software projects may add modules, branches, support workflows, release rules, or architecture layers when those details are useful and approved.

The registry should record approved structure. It should not invent product architecture before the Launcher review gate approves the need for it.
