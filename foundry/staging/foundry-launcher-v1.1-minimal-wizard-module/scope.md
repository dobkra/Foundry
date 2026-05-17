# Scope

Status: `approved_for_execution`

## Approved Boundary

Build only a minimal local/internal Foundry Launcher wizard module inside the existing Foundry Control Center app shell.

## In Scope

- Local in-memory wizard state.
- Simple Control Center home to Launcher wizard screen switch.
- Back to Control Center action.
- Eight wizard screens:
  - Start.
  - Parent Context.
  - Metadata.
  - Intake.
  - Planning Depth.
  - Scope.
  - Review.
  - Result.
- Classification selection.
- Parent context selection.
- Read-only parent project options for Foundry and DK Arkitekter OS.
- Archive displayed only as cold storage/reference, not an active parent.
- Packet title and auto-generated editable slug.
- Intake text areas.
- Planning depth checkbox group.
- Issue breakdown warning when approved source scope is not selected.
- Blocked-work checkbox group.
- Scope notes and non-goals.
- Generated review summary.
- Copyable draft Codex prompt placeholder.
- Optional packet outline.
- Neutral internal utility styling.
- Staging packet and index update.
- Control Center README update.

## Out Of Scope

- Full Approval Categories automation.
- Full Execution Permissions automation.
- File generation from the UI.
- Registry reads or writes.
- Linear issue creation.
- GitHub issue creation.
- Codex launch.
- Linear/GitHub/Codex integration.
- Automation.
- Database/server behavior.
- Authentication.
- Deployment.
- Public/client-facing routes.
- Speech recognition.
- Audio storage or processing.
- DK Arkitekter OS repo changes.
- Final brand/visual identity.
- UI libraries or design system adoption.

## Visual Review Boundary

Dobromir should review the running local UI once for:

- screen flow
- density
- button placement
- field grouping
- whether it feels like a control panel

Technical implementation details do not require Dobromir review.
