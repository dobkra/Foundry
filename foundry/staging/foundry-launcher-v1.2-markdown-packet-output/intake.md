# Foundry Launcher V1.2 Local Markdown Packet Output

Status: `approved_for_execution`

## Raw Idea

Add local copyable Markdown packet output to the Foundry Launcher wizard.

## Requested Outcome

The V1.1 wizard should generate realistic Markdown text for core staging packet files from the current local form state, without writing files to disk.

## Classification Candidate

`work_package`

## Parent Project

Foundry

## Parent Workflow / Module

Foundry Launcher

## Context

V1.1 created the minimal local/internal Launcher wizard module inside the Foundry Control Center app shell. V1.2 adds copyable packet-file Markdown previews while preserving the packet-first model and keeping the running UI local/internal.

## Scope Boundaries

- React code inside the existing app shell is allowed.
- Markdown strings may be generated in browser memory.
- Copy buttons and preview sections are allowed.
- The UI must not write generated files to disk.

## Non-Goals

- No file writes from the UI.
- No registry mutation.
- No Linear/GitHub/Codex integration.
- No Codex task launch or self-launching.
- No automation.
- No deployment.
- No database/server work.
- No authentication.
- No DK Arkitekter OS repo changes.

## Suggested Next Step

Visually verify the Result screen and copy behavior in the local app.

## Reviewer Decision

Decision: `approved_for_execution`

Reviewer: Dobromir

Date: `2026-05-17`

Notes: Approved only for local copyable Markdown packet output. File writes, registry mutation, external integrations, automation, deployment, and DK Arkitekter OS changes remain blocked.
