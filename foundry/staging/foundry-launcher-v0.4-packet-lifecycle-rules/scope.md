# Scope

Status: `needs_review`

## Proposed V0.4 Scope

Foundry Launcher V0.4 may add manual lifecycle and decision-update rules for Launcher packets.

Potential V0.4 scope:

- Define packet lifecycle statuses.
- Define status transition rules.
- Define how review decisions should be recorded.
- Define which packet files should be updated after review.
- Add a standard decision-update template.
- Add a standard lifecycle status table template.
- Update staging and Launcher docs with links to lifecycle rules.
- Integrate the technical execution delegation rule.
- Reduce repeated manual/copy-paste packet review updates.

## Explicit Non-Goals

- No automation.
- No executable launcher.
- No UI.
- No CLI.
- No Linear issue creation.
- No GitHub issue creation.
- No Linear/GitHub integration.
- No Codex self-launching.
- No database.
- No server.
- No deployment.
- No production app routes.
- No dependencies.
- No project registry mutation.
- No DK Arkitekter OS repo changes.

## Execution Boundary

Allowed:

- Documentation-only Launcher lifecycle rule work.
- Manual templates for decision updates and status tracking.
- Manual index/status convention updates.
- Links to the technical execution delegation rule.

Blocked:

- Automation.
- Runtime behavior.
- External-system mutation.
- Registry mutation.
- Deployment/release work.
- Project/module creation.
- Client-facing, pricing, legal/privacy, business, or creative decisions unless separately approved.

## Acceptance Criteria For Review

- V0.4 remains manual.
- Lifecycle statuses are clearly defined.
- Transition rules are explicit.
- Decision-update procedure states which files to update after review.
- Delegated technical execution is integrated without weakening Dobromir authority decisions.
- Automation and runtime work remain blocked.
- Relative links resolve.
