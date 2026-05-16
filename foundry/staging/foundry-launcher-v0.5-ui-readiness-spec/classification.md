# Classification

Status: `needs_review`

## Selected Classification

`work_package`

## Classification Rationale

Foundry Launcher already exists as a Foundry workflow. V0.5 UI Readiness Specification is a scoped next body of documentation work inside that existing workflow.

## Why This Is Not `new_project`

This is not a `new_project` because it does not create a new independent Foundry project.

The parent project already exists: Foundry.

## Why This Is Not `new_module`

This is not a `new_module` because it does not create a new module inside Foundry or another registered project.

It prepares a future UI readiness specification for an existing workflow.

## Why This Is Not `audit`

This is not an `audit` because the output is not an assessment of an existing system.

It defines readiness requirements before any UI is built.

## Why This Is Not `decision_workshop`

This is not a `decision_workshop` because the task creates a concrete specification document and staging packet.

Some open questions are recorded for Dobromir, but the packet is not decision-only.

## Parent Context

Parent project: Foundry

Parent workflow/module: Foundry Launcher

## Registry Eligibility

No registry mutation is allowed in this packet.

The future UI may eventually read from the Foundry project registry if separately approved, but V0.5 does not mutate registry files.

## Execution Eligibility

Execution is documentation-only until Dobromir approval.

UI implementation, components, app routes, automation, CLI, Linear/GitHub integration, Codex self-launching, database, server, deployment, and registry mutation remain blocked unless separately approved.
