# Foundry Launcher V0.4 Packet Lifecycle and Decision Update Rules

Status: `needs_review`

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
- The current pain point is repeated manual/copy-paste review updates after a packet is approved.

V0.4 should standardize the manual packet lifecycle and decision-update process without introducing automation.

## Scope Boundaries

In scope:

- Define manual packet lifecycle statuses.
- Define status transition rules.
- Define a decision-update procedure.
- Add decision-update and lifecycle status table templates.
- Link lifecycle rules from Launcher and staging documentation.
- Integrate the technical execution delegation rule.

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

## Risks/Unknowns

- Status names must remain compatible with existing Launcher terminology.
- The lifecycle rules should reduce repeated manual review-update work without pretending to automate it.
- The delegation rule must not be read as permission to bypass Dobromir for direction/authority decisions.
- The distinction between `approved_for_execution` and `approved_for_manual_execution` should be clear.

## Approval Requirements

Required approvals:

- Dobromir review of the V0.4 packet.
- Classification approval for `work_package`.
- High-Level Decision Gate approval for lifecycle status and decision-update conventions.
- Execution Setup Gate approval before any future automation, integration, or runtime behavior.

Blocked until:

- Automation, registry mutation, integrations, deployment, runtime implementation, UI, CLI, database, server, app routes, and Codex self-launching remain blocked until separately approved.

## Suggested Next Step

Dobromir reviews the V0.4 packet and approves, revises, parks, rejects, or supersedes the lifecycle rule direction.

## Reviewer Decision

Decision: `pending`

Reviewer: Dobromir

Date: `[YYYY-MM-DD]`

Notes: `[Pending review]`
