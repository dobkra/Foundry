# Architecture Pack

## Packet id

`foundry-launcher-v0.7-first-project-initiation-example`

## Parent packet

`foundry/staging/foundry-launcher-v0.7-first-project-initiation-example/`

## Architecture status

`approved_for_manual_execution`

## Approval decision

Reviewer: Dobromir

Decision date: `2026-05-16`

Decision summary: Approved as a documentation/manual reference example for full Foundry Launcher project initiation. The architecture content may be used as planning guidance only. Real module creation, UI implementation, automation, integrations, Codex task launch, registry mutation, deployment, server/database work, and DK Arkitekter OS changes remain blocked unless separately approved.

## Target project/repo

`dobkra/Foundry`

## Parent project/module

Foundry / Foundry Launcher

## Possible future module

Foundry Launcher UI / Foundry Control Center entry point

This possible module is not created or approved by this packet.

## System boundaries

- Staging packets.
- Planning packs.
- Project registry.
- Future UI.
- Future Linear/Codex/GitHub integrations.

## Module boundaries

The possible future module would sit inside Foundry as a Launcher entry point or Foundry Control Center surface. It would not create a separate project or repository unless separately approved.

Whether a future real implementation should remain a module or become a separate project is open for a future packet.

## Data/input/output flow

1. User input / selections.
2. Generated or updated packet files.
3. Review state.
4. Optional future Linear issue after approval.
5. Optional future Codex task after approval.
6. GitHub PR record for repository changes.

This flow is a reference example only. It does not authorize integrations or automation.

## Integrations

Future candidates only:

- Project registry read access for parent selectors.
- Linear project/issue creation after approval.
- Codex task context after approval.
- GitHub PR linkage after implementation work begins.

All integrations remain blocked unless separately approved.

## Storage/database needs

No storage or database decision is finalized by this packet.

Future UI work may start with local/manual file output before any database is considered.

## Automation needs

Automation remains blocked.

Possible future automation candidates include packet generation, work folder creation, Linear issue creation, Codex task launch, and PR linkage, but only after separate approval.

## Security/privacy considerations

- Dictation must not store audio unless separately approved.
- Registry-backed selectors should avoid mutating registry records without approval.
- External integrations require separate approval and permission review.
- Packet files should remain the durable source of truth.

## Local/server/deployment assumptions

No local UI, server, deployment, or runtime route is approved by this packet.

Future architecture must decide whether the UI starts as a local tool, web app, Foundry Control Center screen, or standalone surface. This is open for a future packet.

## File/folder structure proposal

Documentation/manual reference example:

- `foundry/staging/foundry-launcher-v0.7-first-project-initiation-example/`
- Planning pack files inside the packet folder.
- Future implementation file structure remains undecided.

No work folder creation is approved.

## Dependencies

None added.

Future dependencies must be proposed in a separate approved implementation-readiness packet.

## Architecture risks

- Starting implementation before approval could bypass governance.
- Building UI before workflow decisions are settled could hard-code the wrong model.
- Registry-backed selectors could imply registry mutation if boundaries are unclear.
- Linear/Codex integration could turn planning convenience into automation before approval.

## Architecture decisions required

Open for future packet:

- Local UI vs web app.
- Part of Foundry Control Center vs standalone.
- Registry-backed selectors.
- Work folder policy.
- Integration timing.
- Whether this future work remains a module or becomes a separate project.

## Non-goals

- No runtime implementation.
- No server/database decision finalized.
- No integrations implemented.
- No UI built.
- No app routes created.
- No registry mutation.

## Approval notes

Approved for documentation/manual reference use only. All real implementation and external-system setup remains blocked.
