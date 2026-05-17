# Scope

Status: `approved_for_execution`

## Approved V1.2 Scope

- Add local in-memory Markdown packet generation.
- Generate copyable Markdown for:
  - `intake.md`
  - `classification.md`
  - `scope.md`
  - `decision-log.md`
  - `approval.md`
  - `execution-readiness.md`
  - `implementation-notes.md`
- Add Result screen packet file previews.
- Add copy current file behavior.
- Add copy all packet Markdown behavior.
- Keep dark mode as the default theme.
- Keep output copy-only.

## Explicit Non-Goals

- No generated file writes to disk.
- No planning pack generation.
- No registry mutation.
- No Linear issue creation.
- No GitHub issue creation.
- No Codex task launch.
- No external integrations.
- No automation.
- No deployment.
- No server/database work.
- No authentication.
- No DK Arkitekter OS repo changes.

## Boundary Note

The generated Markdown is a local drafting aid. The staging packet remains the source of truth after its Markdown is copied into repository files through an approved repository change.
