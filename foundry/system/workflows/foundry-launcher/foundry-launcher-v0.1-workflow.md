# Foundry Launcher V0.1 Workflow

## Purpose

The Foundry Launcher V0.1 workflow stages new Foundry work before execution. It creates a controlled path from raw idea to reviewable handoff, then to project registry update and execution setup only after approval.

Core flow:

```text
Idea
-> Foundry Launcher / staging intake
-> classification
-> handoff folder generated as a staged documentation contract
-> review gate
-> project registry update decision
-> Linear/GitHub/Codex setup only after approval
```

## V0.1 Boundary

Allowed in V0.1:

- Documentation.
- Templates.
- Classification rules.
- Handoff folder contract.
- Approval rules.

Not allowed in V0.1:

- Executable launcher.
- UI.
- CLI.
- Automation.
- Linear integration.
- GitHub integration.
- Codex integration.
- Database.
- Runtime folder generation.

## Workflow Steps

### 1. Idea Capture

Capture the raw idea without forcing it into an execution format. The idea may be conceptual, operational, product-related, business-related, creative, legal, pricing-related, client-facing, automation-related, deployment-related, release-related, or technical.

The idea capture should preserve uncertainty. It should not become a Linear issue, GitHub task, Codex packet, automation, or registry entry by default.

### 2. Intake Creation

Create a staging intake using the [Launcher Intake Template](../../../templates/launcher/launcher-intake-template.md).

The intake records:

- Raw idea.
- Requested outcome.
- Classification candidate.
- Existing parent project or module, if any.
- Business or project context.
- Scope boundaries.
- Non-goals.
- Risks and unknowns.
- Approval requirements.
- Suggested next step.
- Reviewer decision.

### 3. Classification

Classify the staging intake using the [Launcher Classification Model](launcher-classification-model.md).

Supported classifications:

- `new_project`
- `new_module`
- `work_package`
- `audit`
- `decision_workshop`

Classification determines required parent context, approval level, handoff output, registry eligibility, and whether execution setup may happen after approval.

### 4. Handoff Folder Preparation

Prepare a staged handoff folder contract using the [Launcher Handoff Folder Template](../../../templates/launcher/launcher-handoff-folder-template.md).

V0.1 defines the expected contents only. When the workflow says the handoff folder is generated, it means the handoff folder is prepared as a documentation contract. It does not generate folders automatically.

Expected conceptual files:

- `intake.md`
- `classification.md`
- `scope.md`
- `decision-log.md`
- `approval.md`
- `execution-readiness.md`

### 5. Review Gate

Route the staged handoff through the relevant review gate before any registry or execution setup decision.

The review confirms:

- Classification is correct.
- Scope boundaries are clear.
- Parent project or module context is valid when required.
- Approval requirements are explicit.
- Decision risks are visible.
- Execution setup is allowed, blocked, rejected, or parked.

### 6. Registry Update Decision

After review, decide whether the project registry should be updated.

Only approved `new_project` and `new_module` classifications may update the project registry. `work_package`, `audit`, and `decision_workshop` items do not update the registry unless they later become an approved `new_project` or `new_module` through a separate review decision.

Registry alignment is defined in the [Project Registry Model](../../../project-registry/project-registry-model.md).

### 7. Execution Setup Decision

After review approval, decide whether execution setup is appropriate.

Execution setup may include preparing Linear, GitHub, or Codex work, but only after the required review gate approves that setup. Decision workshops do not automatically become execution work. They may end as a decision, parked item, rejected idea, or approved execution packet.

### 8. Post-Approval Next Steps

Approved next steps depend on classification:

- `new_project`: update project registry only after Dobromir approval, then prepare execution setup if separately approved.
- `new_module`: confirm registered parent project, update registry only after approval, then prepare execution setup if separately approved.
- `work_package`: prepare scoped execution setup inside the approved project or module if approved.
- `audit`: prepare audit packet, audit checklist, or repository review plan if approved.
- `decision_workshop`: record the decision outcome. Create execution work only if the outcome explicitly approves an execution packet.

## Non-Execution Rule

The Foundry Launcher does not execute work. It stages, classifies, prepares, and routes. Execution begins only after the required approval gate authorizes execution setup.
