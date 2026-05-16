# Foundry Operating Rules

## Repository Role

This repository, `dobkra/foundry`, is the active global execution factory for Dobromir Foundry.

Foundry owns global execution standards, templates, support workflows, project registry structure, Codex workflow rules, runtime planning, and cross-project operating systems.

Foundry does not own DK Arkitekter business source code. Active project repositories remain the source of truth for project-specific implementation, business rules, source code, product routes, client-facing copy, package identity, and deployment configuration.

Historical inactive material belongs in `dobkra/archive`.

## Codex Role

Codex is the scoped execution agent. Codex may perform clearly scoped repository, documentation, and workflow tasks, but must preserve project boundaries and avoid expanding scope beyond the approved task.

## Active Foundry Areas

Use these folders as the active source of truth for Foundry-global work:

- `foundry/standards/**`
- `foundry/templates/**`
- `foundry/support/**`
- `foundry/project-registry/**`
- `foundry/system/workflows/**`
- `foundry/system/projects/**`

## Safety Rules

Codex must not deploy without approval.

Codex must not perform repository extraction, repository creation, or repository restructuring without approval.

Codex must not delete archive material without approval.

Codex must not migrate client data, private data, credentials, banking or payment data, signed agreements, private pricing, raw media, source drawings, or secrets without explicit approval and sanitization.

Codex must preserve project boundaries. DK Arkitekter OS material belongs in `dobkra/dk-arkitekter-os`; historical inactive material belongs in `dobkra/archive`; active Foundry-global material belongs here.

## Reporting

For meaningful work, report:

- files changed
- decisions made
- checks run
- risks or blockers
- follow-up decisions needed
- whether any project boundary was affected
