# Intake

Title: Foundry Launcher V1.0 Local UI Foundation

Status: `approved_for_execution`

## Raw Idea

Build the first minimal Foundry Launcher UI foundation as an internal Foundry Control Center screen/module.

## Requested Outcome

Create the first narrow implementation step for a local/internal Foundry Launcher UI foundation, or create an implementation-blocker report if no suitable UI shell exists.

## Classification Candidate

`work_package`

## Parent Project

Foundry

## Parent Workflow/Module

Foundry Launcher

## Context

Foundry Launcher planning is complete through V0.9, including UI readiness, planning pack templates, the full project-initiation example, the wireframe specification, implementation-readiness planning, normalized registry facts, and fast-track review rules.

V1.0 is approved to move from documentation planning toward the first narrow implementation foundation.

## Pre-Flight Result

No suitable app/control-center UI shell exists in the current Foundry repo.

Detected:

- Foundry Control Center documentation exists under `foundry/system/projects/foundry-control-center/`.
- No `package.json` exists.
- No frontend app framework was detected.
- No routing system was detected.
- No existing UI/component structure was detected.
- The Control Center README states it is future/planned and no app implementation exists.

Because no suitable shell exists, this packet creates an implementation-blocker report instead of adding a framework or UI files.

## Non-Goals

- No UI implementation in this PR.
- No React components.
- No app routes.
- No code.
- No scripts.
- No automation.
- No Linear issue creation.
- No GitHub issue creation.
- No Codex launch.
- No Linear/GitHub/Codex integration.
- No work folders.
- No registry mutation.
- No database.
- No server.
- No authentication.
- No deployment.
- No public/client-facing route.
- No speech recognition.
- No audio storage or processing.
- No DK Arkitekter OS repo changes.
- No final visual branding.

## Suggested Next Step

Approve a future bootstrap packet for the minimum Foundry Control Center app shell, then return to the local/internal Launcher UI foundation implementation.

## Reviewer Decision

Decision: `approved_for_execution`

Reviewer: Dobromir

Date: `2026-05-17`

Notes: Approved only for the first narrow local/internal UI foundation or implementation-blocker report. The pre-flight found no suitable UI shell, so this PR stops at the blocker report path.
