# Foundry Launcher V0.5 UI Readiness Specification

Status: `needs_review`

## Intake Title

Foundry Launcher V0.5 UI Readiness Specification

## Raw Idea

Prepare the future Launcher UI specification with selection-first, typing-light UX.

The V0.5 direction now includes selection-first UX, dictation-assisted free text, packet-first result model, future Linear/Codex integration direction, and progressive planning packs.

## Requested Outcome

Create a reviewable UI readiness spec before any UI implementation begins.

## Classification Candidate

`work_package`

## Existing Parent Project/Workflow

Parent project: Foundry

Parent workflow/module: Foundry Launcher

## Business/Project Context

The future Launcher UI should resemble a guided project launcher or control panel, but remain universal and governance-aware across Foundry.

The UI should help users create staged packets, classify work, record approval requirements, and identify blocked work without turning the Launcher into a document editor.

## Scope Boundaries

In scope:

- Define the selection-first, typing-light UX principle.
- Define dictation-assisted free-text requirements.
- Define future wizard steps.
- Define field types and controlled vocabularies.
- Define conservative defaults.
- Define packet-first / prompt-second result model.
- Define future Linear/Codex integration direction.
- Define progressive planning packs.
- Define expected generated output.
- Define explicit non-goals and blocked implementation work.

Out of scope:

- UI implementation.
- React components.
- App routes.
- Automation.
- Server/database work.
- Linear/GitHub/Codex integration.
- Registry mutation.

## Non-Goals

- No UI implementation.
- No automation.
- No speech recognition.
- No browser speech APIs.
- No audio storage or processing.
- No server.
- No database.
- No integrations.
- No app routes.
- No React components.
- No CLI.
- No deployment.
- No registry mutation.
- No DK Arkitekter OS repo changes.

## Risks/Unknowns

- The future UI may be overbuilt if it starts as a document editor instead of a control panel.
- Structured selections must define system behavior clearly enough to reduce manual copy/paste.
- Registry-backed parent selectors require future approved implementation and should not be faked in V0.5.
- Dobromir-required decisions must remain visible and not be hidden behind UI convenience.
- Dictation should remain an input convenience, not automation.
- Future Linear/Codex actions must stay blocked until packet approval permits them.
- Progressive planning packs should prevent Linear issues from becoming the place where scope is invented.

## Approval Requirements

Required approvals:

- Dobromir review of the V0.5 packet.
- Classification approval for `work_package`.
- High-Level Decision Gate approval for UI readiness direction.
- UI Implementation Gate approval before any future UI work.

Blocked until:

- UI implementation, components, app routes, automation, CLI, integrations, registry mutation, database, server, deployment, and runtime Launcher behavior remain blocked until separately approved.

## Suggested Next Step

Dobromir reviews and approves or revises the UI readiness direction.

## Reviewer Decision

Decision: `pending`

Reviewer: Dobromir

Date: `[YYYY-MM-DD]`

Notes: `[Pending review]`
