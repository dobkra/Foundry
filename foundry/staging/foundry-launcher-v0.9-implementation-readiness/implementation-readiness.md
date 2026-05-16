# Implementation Readiness

Status: `approved_for_manual_execution`

## Purpose

This document prepares the first real Foundry Launcher implementation path without implementing it.

It should be used to create the next implementation packet, not as direct authorization to build.

## 1. Recommended First Implementation Target

Recommendation: build the first Launcher implementation as a Foundry Control Center screen/module, not as a standalone project.

Reason:

- Foundry is the active global execution factory.
- Launcher is part of Foundry governance.
- Registry-backed selectors belong inside Foundry.
- A standalone project would add unnecessary complexity now.

This recommendation does not create a real module. Module creation and implementation remain blocked until separately approved.

## 2. Recommended First Implementation Mode

Recommendation: start with a local/manual file-output implementation.

The first implementation should:

- Render the 10-screen wizard from the V0.8 wireframe specification.
- Use controlled fields, dropdowns, toggles, radio groups, and checkbox groups.
- Generate Markdown packet files locally or in the repository.
- Update the staging index manually or through safe file generation if separately approved.
- Avoid Linear/GitHub/Codex integration.
- Avoid public deployment.

The first implementation should keep the packet as the source of truth. Generated prompts should remain temporary execution instructions derived from the packet.

## 3. First Build Boundary

Allowed in the first implementation packet, after separate approval:

- Simple local UI/control surface.
- Registry read-only project selector.
- Packet form state.
- Markdown packet generation.
- Local preview/review screen.
- Copy review summary.
- Copy Codex prompt.

Blocked in the first implementation packet unless separately approved:

- Linear issue creation.
- GitHub issue creation.
- Codex task launch.
- Codex self-launching.
- Deployment.
- Database.
- Server.
- Registry mutation beyond generated packet/index files.
- Audio storage.
- Speech recognition.
- Public/client-facing launch.

## 4. Suggested V1 MVP Screens

Use:

- Start.
- Parent Context.
- Metadata.
- Intake.
- Planning Depth.
- Scope.
- Review.
- Result.

Defer:

- Full approval automation.
- Full execution permissions automation.
- Linear/Codex/GitHub actions.

The V1 MVP should focus on reducing packet creation friction, not on replacing approval gates.

## 5. Suggested First Technical Route

Do not implement this in V0.9. Use this as the recommended route for a future implementation packet:

1. Create a first implementation packet.
2. Create a small local/manual UI or Foundry Control Center module.
3. Keep it filesystem/Markdown-oriented first.
4. Read registry data as the source for parent selectors.
5. Write generated packets to `foundry/staging/`.
6. Keep external-system actions disabled.
7. Keep review and merge as the status decision for safe documentation/manual packets.

## 6. Open Decisions For Dobromir

These remain open for a future implementation packet:

- Visual style of the Launcher UI.
- Exact Foundry Control Center placement.
- Whether the first UI is local-only or a web app.
- Whether registry selector reads YAML directly or through a helper layer.
- Whether V1 includes packet file generation or only prompt/spec generation.
- When Linear/Codex integration should begin.

## Not Approved By V0.9

V0.9 does not approve:

- UI implementation.
- React components.
- App routes.
- Code.
- Scripts.
- Automation.
- Linear issue creation.
- GitHub issue creation.
- Linear/GitHub/Codex integration.
- Codex launch.
- Codex self-launching.
- Work folder creation.
- Registry mutation.
- Database/server work.
- Dependencies.
- Deployment.
- DK Arkitekter OS repo changes.
