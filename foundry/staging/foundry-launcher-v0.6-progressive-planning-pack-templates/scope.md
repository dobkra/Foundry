# Scope

Status: `needs_review`

## Proposed V0.6 Scope

Foundry Launcher V0.6 may create reusable Markdown templates for progressive planning packs.

In scope:

- Create planning pack templates.
- Create planning pack selection guide.
- Link templates from Launcher UI readiness spec.
- Preserve progressive complexity.
- Avoid forcing all packs on small work.
- Keep Linear/Codex execution blocked until approval.

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

- Documentation-only progressive planning pack templates.
- Manual staging packet creation.
- Manual documentation links from Launcher docs.

Blocked:

- UI implementation.
- Automation.
- External-system integration.
- Linear issue creation.
- GitHub issue creation.
- Codex task launch.
- Registry mutation.
- Deployment.

## Acceptance Criteria For Review

- Planning pack templates exist.
- Planning pack selection guide exists.
- The templates support progressive complexity.
- Small work is not forced through all packs.
- Issue Breakdown Pack requires approved source scope.
- Launcher UI readiness spec links to the templates.
- Relative links resolve.
