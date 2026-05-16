# Implementation Notes

Status: `approved_for_execution`

## Implementation Path Taken

The implementation-blocker path was taken.

The current Foundry repo does not contain a suitable UI shell for implementing the Launcher as a Foundry Control Center screen/module.

## Pre-Flight Checked

Checked for:

- App framework.
- `package.json`.
- Frontend app source.
- Routing system.
- Existing Foundry Control Center area.
- Existing UI/component structure.

Found:

- `foundry/system/projects/foundry-control-center/README.md`.
- `foundry/system/projects/foundry-control-center/foundry-review-inbox-v1.md`.
- No package manifest.
- No frontend app framework.
- No route structure.
- No UI component structure.

## Relevant References

- [Launcher Wireframe Specification](../../system/workflows/foundry-launcher/launcher-wireframe-specification.md)
- [V0.9 Implementation Readiness](../foundry-launcher-v0.9-implementation-readiness/implementation-readiness.md)
- [Project Registry Draft](../../project-registry/PROJECT_REGISTRY_DRAFT.yml)
- [Fast Track Review Rules](../../system/workflows/foundry-launcher/launcher-fast-track-review-rules.md)
- [Implementation Blocker](implementation-blocker.md)

## What Works In This PR

- V1.0 packet is created.
- `INDEX.md` tracks V1.0.
- The missing-shell blocker is documented.
- The minimum future shell requirement is defined.
- Registry behavior remains read-only/reference-only.
- Archive is explicitly not an active execution parent.
- Packet-first model is preserved.

## What Does Not Work Yet

No UI exists yet.

The user cannot move through the wizard until a future approved app shell exists and a separate implementation packet authorizes building inside it.

## Future Implementation Reminder

When a suitable shell exists, the first Launcher UI should remain:

- Local/internal.
- Selection-first.
- Typing-light.
- Neutral utility style.
- Packet-first.
- Registry read-only.
- Free of external integrations.
- Free of deployment.
