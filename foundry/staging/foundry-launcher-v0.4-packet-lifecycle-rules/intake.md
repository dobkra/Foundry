# Foundry Launcher V0.4 Packet Lifecycle and Decision Update Rules

Status: `approved_for_manual_execution`

## Intake Title

Foundry Launcher V0.4 Packet Lifecycle and Decision Update Rules

## Raw Idea

Create manual lifecycle and decision-update rules so Launcher packets move cleanly from `draft` or `needs_review` into approved, blocked, parked, rejected, or superseded states without repeated ad hoc copy/paste review updates.

## Requested Outcome

Prepare a reviewable V0.4 work package that defines packet lifecycle statuses, status transitions, decision-update procedure, and standard templates for manual packet status tracking.

## Classification Candidate

`work_package`

## Existing Parent Project/Workflow

Parent project: Foundry

Parent workflow: Foundry Launcher

## Business/Project Context

- Foundry Launcher V0.1 created the workflow and templates.
- Foundry Launcher V0.2 created the first real staging packet and recorded review decisions.
- Foundry Launcher V0.3 created the staging index, packet naming rules, staging rules, and packet reference rules.
- PR #11 added Foundry technical execution delegation rules.
- The current pain point was repeated manual/copy-paste review updates after a packet is approved.

V0.4 standardizes the manual packet lifecycle and decision-update process without introducing automation.

## Scope Boundaries

Approved for:

- Lifecycle rules.
- Packet status rules.
- Decision-update procedure.
- Technical execution delegation reference.

Out of scope:

- Automation.
- Runtime launcher behavior.
- UI or CLI.
- Linear/GitHub integration.
- Codex self-launching.
- Database, server, deployment, app routes, or dependencies.
- Project registry mutation.

## Non-Goals

- Do not automate packet updates.
- Do not create Linear issues.
- Do not create GitHub issues.
- Do not implement runtime launcher behavior.
- Do not create database files.
- Do not add server code.
- Do not add app routes.
- Do not add dependencies.
- Do not modify DK Arkitekter OS repo.
- Do not mutate project registry records.

## Approval Requirements

Approval completed for the documentation/manual governance boundary only.

Blocked until separately approved:

- Automation, registry mutation, integrations, deployment, runtime implementation, UI, CLI, database, server, app routes, and Codex self-launching remain blocked until separately approved.

## Suggested Next Step

Use the merged V0.4 lifecycle rules as documentation/manual governance within the approved boundary.

## Reviewer Decision

Decision: `approved_for_manual_execution`

Reviewer: Dobromir

Date: `2026-05-16`

Notes: `Approved as documentation/manual Foundry Launcher governance. Runtime implementation, UI, automation, external integrations, registry mutation, deployment, and Codex self-launching remain blocked unless separately approved.`
