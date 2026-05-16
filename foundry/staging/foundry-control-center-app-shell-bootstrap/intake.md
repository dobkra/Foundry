# Intake

Title: Foundry Control Center App Shell Bootstrap

Status: `approved_for_execution`

## Raw Idea

Create the smallest possible local/internal Foundry Control Center app shell so the Foundry Launcher UI has somewhere to live.

## Requested Outcome

Bootstrap a minimal Vite, React, and TypeScript app shell with a neutral internal Control Center landing page and a placeholder Foundry Launcher module card.

## Classification Candidate

`work_package`

## Parent Project

Foundry

## Parent Workflow/Module

Foundry Control Center

## Context

PR #22 confirmed that the Foundry repo had no package manifest, frontend framework, routing system, UI/component structure, or implemented Foundry Control Center shell.

This packet creates the smallest local/internal app shell needed before the Launcher wizard can be implemented in a later packet.

## Non-Goals

- Do not build the full Foundry Launcher wizard.
- Do not create Linear issues.
- Do not create GitHub issues.
- Do not launch Codex.
- Do not integrate Linear/GitHub/Codex.
- Do not mutate registry files.
- Do not add database or server behavior.
- Do not add authentication.
- Do not add deployment config.
- Do not add CI.
- Do not add Tailwind, shadcn, framer-motion, charts, or unrelated libraries.
- Do not modify DK Arkitekter OS.
- Do not create final visual branding.
- Do not create public/client-facing routes.
- Do not add speech recognition.
- Do not store or process audio.

## Suggested Next Step

Build the minimal Foundry Launcher wizard module inside this shell in a separate approved packet.

## Reviewer Decision

Decision: `approved_for_execution`

Reviewer: Dobromir

Date: `2026-05-17`

Notes: Approved for minimal local/internal app shell bootstrap only. Deployment, authentication, automation, external integrations, registry mutation, full Launcher wizard, and DK Arkitekter OS changes remain blocked.
