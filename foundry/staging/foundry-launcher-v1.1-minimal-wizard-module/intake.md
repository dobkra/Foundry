# Intake

Title: Foundry Launcher V1.1 Minimal Wizard Module

Status: `approved_for_execution`

## Raw Idea

Build the first minimal Foundry Launcher wizard module inside the existing Foundry Control Center app shell.

## Requested Outcome

Create a local/internal wizard that proves the Launcher can guide staged intake from work type through result handoff without writing files, mutating the registry, integrating external systems, or deploying.

## Classification Candidate

`work_package`

## Parent Project

Foundry

## Parent Workflow/Module

Foundry Launcher

## Context

PR #23 created the minimal local/internal Foundry Control Center app shell using Vite, React, and TypeScript.

V1.1 adds the first narrow Launcher wizard module inside that shell. The module uses local React state, controlled selections, compact text areas, review summary generation, and copyable output.

This is a UI/product PR. Dobromir should visually review the running local UI once before final merge.

## Non-Goals

- Do not deploy.
- Do not create Linear issues.
- Do not create GitHub issues.
- Do not launch Codex.
- Do not integrate Linear/GitHub/Codex.
- Do not mutate registry files.
- Do not write generated packet files to disk from the UI.
- Do not add database or server behavior.
- Do not add authentication.
- Do not add public/client-facing routes.
- Do not add speech recognition.
- Do not store or process audio.
- Do not modify DK Arkitekter OS.
- Do not create final visual branding.
- Do not add UI libraries.

## Suggested Next Step

Dobromir reviews the running local UI once for screen flow, density, button placement, field grouping, and whether it feels like a control panel.

## Reviewer Decision

Decision: `approved_for_execution`

Reviewer: Dobromir

Date: `2026-05-17`

Notes: Approved for minimal local/internal Launcher wizard module inside the existing Foundry Control Center app shell. Final merge should wait for one Dobromir visual review. Deployment, automation, integrations, registry mutation, file generation from the UI, Codex launch, and DK Arkitekter OS changes remain blocked.
