# Foundry Launcher V0.2 - First Real Staging Packet

Status: `approved_for_execution`

## Intake Title

Foundry Launcher V0.2 - First Real Staging Packet

## Raw Idea

Use the Foundry Launcher workflow itself to stage its next improvement cycle.

## Requested Outcome

Prepare a reviewable V0.2 work package before implementation.

## Classification Candidate

`work_package`

## Existing Parent Project/Module

Parent project: Foundry

Parent workflow/module: Foundry Launcher

## Business/Project Context

Foundry Launcher V0.1 created the workflow docs, classification model, review gates, and reusable templates for staging intake and handoff folders. V0.2 should test that workflow with a real packet before any implementation work begins.

This staging packet is a self-test of the Launcher system. It prepares the V0.2 direction for Dobromir review and does not authorize execution setup by itself.

## Scope Boundaries

In scope:

- Stage the proposed Foundry Launcher V0.2 work package.
- Use the V0.1 handoff folder contract manually.
- Capture scope, open decisions, approval state, and execution readiness.

Out of scope:

- Implementing V0.2 features.
- Creating execution tasks before approval.
- Mutating the project registry.

## Non-Goals

- No UI.
- No CLI.
- No automation.
- No Linear/GitHub integration.
- No Codex self-launching.
- No database.
- No server.
- No deployment.

## Risks/Unknowns

- The staging folder convention may need adjustment after review.
- Future packet storage may need to be global, project-local, or hybrid.
- V0.1 templates may be missing fields once used in a real staged packet.
- V0.3 may need a decision on whether lightweight automation is appropriate or whether the Launcher should remain documentation-only.

## Approval Requirements

Required approvals:

- Dobromir review of the staging packet.
- Classification approval for `work_package`.
- Execution setup approval before any Linear, GitHub, or Codex work.
- High-Level Decision Gate approval before any automation, registry, workflow expansion, deployment, or release direction change.

Blocked until:

- Automation, registry mutation, integrations, deployment, and runtime implementation remain blocked until separately approved.

## Suggested Next Step

Proceed only with manual/documentation V0.2 validation work inside the approved boundary.

## Reviewer Decision

Decision: `approved_for_execution`

Reviewer: Dobromir

Date: `2026-05-16`

Notes: `Approved only for manual/documentation V0.2 validation, staging index/status convention exploration, and packet reference rule documentation. Automation, integrations, registry mutation, deployment, server, database, UI, CLI, app routes, and Codex self-launching remain blocked.`
