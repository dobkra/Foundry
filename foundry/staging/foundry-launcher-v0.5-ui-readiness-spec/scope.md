# Scope

Status: `approved_for_manual_execution`

## Reviewer Decision

Decision: `approved_for_manual_execution`

Reviewer: Dobromir

Decision date: `2026-05-16`

Decision summary: Approved as documentation/manual Foundry Launcher governance. Runtime implementation, UI, automation, external integrations, registry mutation, deployment, and Codex self-launching remain blocked unless separately approved.

## Approved V0.5 Scope

Foundry Launcher V0.5 defines UI readiness before any UI implementation begins.

Approved boundary:

- UI readiness specification.
- Selection-first / typing-light UX principle.
- Dictation-assisted free-text requirement.
- Packet-first / prompt-second result model.
- Future Linear/Codex direction as documentation only.
- Progressive planning packs as documentation only.

## Explicit Non-Goals

- No UI implementation.
- No React components.
- No app routes.
- No code.
- No scripts.
- No automation.
- No CLI.
- No speech recognition.
- No browser speech APIs.
- No audio storage or processing.
- No Linear issue creation.
- No GitHub issue creation.
- No Linear/GitHub integration.
- No Codex self-launching.
- No database.
- No server.
- No dependencies.
- No deployment.
- No registry mutation.
- No DK Arkitekter OS repo changes.
- No runtime Launcher behavior.

## Execution Boundary

Allowed:

- Documentation-only UI readiness specification.
- Manual staging packet creation.
- Manual updates to Launcher docs and staging index.

Blocked:

- UI implementation.
- Components.
- App routes.
- Automation.
- CLI.
- External-system integrations.
- Registry mutation.
- Server/database work.
- Deployment/public launch.
- Client-facing, pricing, legal/privacy, business, or creative decisions unless separately approved.

## Verification State

- The selection-first, typing-light UX principle is recorded.
- Dictation-assisted free-text is documented as a UX requirement only.
- Proposed wizard steps are defined.
- Field types and controlled vocabularies are defined.
- Conservative defaults keep automation, deployment, registry mutation, and UI implementation blocked unless separately approved.
- Expected generated output is defined as future behavior, not implementation.
- Packet-first / prompt-second result model is defined.
- Future Linear/Codex integration direction is documented but not implemented.
- Progressive planning packs are documented but not implemented by V0.5.
- Lifecycle and technical execution delegation rules are referenced.
- DK Arkitekter OS is not treated as the default parent.
