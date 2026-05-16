# Scope

Status: `draft`

## Proposed V0.2 Scope

Foundry Launcher V0.2 is proposed as staging-process validation only.

The goal is to test whether the V0.1 Launcher workflow and templates are usable in a real packet, then identify what needs review before any implementation path is opened.

## Potential V0.2 Scope

- Validate whether the V0.1 templates are usable in a real packet.
- Establish a central staging packet location convention.
- Define how future ChatGPT/Codex prompts should reference Launcher packets.
- Identify missing fields or confusing approval states.
- Decide whether future V0.3 should introduce lightweight automation or stay manual.

## Acceptance Criteria For Review

- The packet uses the V0.1 handoff folder contract.
- The selected classification is `work_package`.
- The packet clearly distinguishes staging from implementation.
- The approval state blocks Linear, GitHub, Codex, registry, and automation setup until Dobromir review.
- Open decisions are visible enough for Dobromir to approve, park, reject, or revise the V0.2 direction.

## Explicit Non-Goals

- No automated folder generation.
- No Linear issue creation.
- No GitHub issue creation.
- No Codex auto-launching.
- No UI.
- No CLI.
- No server.
- No database.
- No deployment.
- No production app routes.

## Constraints

- This packet must remain documentation-only.
- This packet must not mutate the project registry.
- This packet must not treat DK Arkitekter OS as the default parent project.
- This packet must not implement Foundry Launcher V0.2 features.
