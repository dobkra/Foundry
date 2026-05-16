# Scope

Status: `needs_review`

## Proposed V0.5 Scope

Foundry Launcher V0.5 may define UI readiness before any UI implementation begins.

Proposed future UI readiness scope:

- Define selection-first UX principle.
- Define typing-light interaction model.
- Define wizard steps.
- Define field types.
- Define controlled vocabularies.
- Define conservative defaults.
- Define generated output.
- Define non-goals and blocked implementation work.
- Reference lifecycle and technical execution delegation rules.

## Explicit Non-Goals

- No UI implementation.
- No React components.
- No app routes.
- No code.
- No scripts.
- No automation.
- No CLI.
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

## Acceptance Criteria For Review

- The selection-first, typing-light UX principle is recorded.
- Proposed wizard steps are defined.
- Field types and controlled vocabularies are defined.
- Conservative defaults keep automation, deployment, registry mutation, and UI implementation blocked unless separately approved.
- Expected generated output is defined as future behavior, not implementation.
- Lifecycle and technical execution delegation rules are referenced.
- DK Arkitekter OS is not treated as the default parent.
