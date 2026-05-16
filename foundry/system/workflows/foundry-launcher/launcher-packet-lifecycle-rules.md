# Launcher Packet Lifecycle Rules

## Purpose

These rules define how Foundry Launcher packets move through statuses and how review decisions should be recorded.

V0.4 remains manual. These rules do not introduce automation, UI, CLI, Linear integration, GitHub integration, Codex self-launching, database, server, deployment, app routes, dependencies, runtime folder generation, or project registry mutation.

## Status Definitions

| Status | Definition |
|---|---|
| `draft` | Packet content is being formed and may be incomplete. It is not ready for review. |
| `staged` | Packet has the required files and basic structure but has not yet been prepared for review. |
| `needs_review` | Packet is complete enough for Dobromir or delegated review. No execution approval is implied. |
| `approved_for_registry` | Registry update may proceed only within the approved registry boundary. This status requires explicit registry approval and an eligible classification. |
| `approved_for_execution` | Work may proceed inside the approved execution boundary recorded in the packet. Blocked work remains blocked. |
| `approved_for_manual_execution` | Manual/documentation work may proceed, but automation, runtime behavior, integrations, deployment, and other blocked work remain blocked. |
| `blocked` | Packet cannot proceed because required context, approval, parent scope, or authority is missing. |
| `parked` | Packet is valid but intentionally deferred. No execution should proceed while parked. |
| `rejected` | Packet should not proceed. A new packet or explicit review decision is required before related work resumes. |
| `superseded` | Packet has been replaced by a later packet or merged decision. The successor packet or decision becomes the active reference. |

## Status Transition Rules

- `draft` -> `staged`: Packet has required files but has not yet been prepared for review.
- `staged` -> `needs_review`: Packet is complete enough for Dobromir or delegated review.
- `needs_review` -> `approved_for_execution`: Work may proceed inside the execution boundary.
- `needs_review` -> `approved_for_manual_execution`: Manual/documentation work may proceed, but automation/runtime/integration work remains blocked.
- `needs_review` -> `approved_for_registry`: Registry update may proceed only if the packet classification and approval explicitly allow it.
- `needs_review` -> `blocked`: Packet cannot proceed because required context, approval, or parent scope is missing.
- `needs_review` -> `parked`: Packet is valid but intentionally deferred.
- `needs_review` -> `rejected`: Packet should not proceed.
- Any active status -> `superseded`: Packet has been replaced by a later packet or merged decision.

## Decision Update Procedure

After review, Codex should update only the relevant packet files:

- `decision-log.md`
- `approval.md`
- `execution-readiness.md`
- `intake.md`, `classification.md`, and `scope.md` only if stale statuses or reviewer decisions need cleanup
- `foundry/staging/INDEX.md` status row

Decision updates must:

- Record the reviewer decision.
- Record the decision date.
- Record the approved execution boundary.
- Record what remains blocked.
- Update `INDEX.md`.
- Avoid changing scope unless the decision explicitly changed scope.
- Avoid implementing the approved work unless the packet permits it.

## Delegated Technical Execution

Once a packet is approved, routine technical execution inside that approved boundary does not require Dobromir to be asked again.

Codex and ChatGPT should continue with implementation, formatting, cleanup, verification, documentation, and routine safe PR merges when the task is inside approved scope.

Dobromir must still be asked if the work changes direction, product meaning, architecture ownership, public/client-facing behavior, legal/privacy position, pricing/commercial position, autonomous-system power, project/module creation, or durable registry meaning.

Use the [Technical Execution Delegation Rules](../../../standards/technical-execution-delegation-rules.md) as the authority for deciding whether Dobromir input is required.

## Manual Boundary

These lifecycle rules standardize manual packet operations. They do not create scripts, automations, generators, bots, issue integrations, registry writers, or runtime launcher behavior.

If a future packet proposes automation for lifecycle updates, that packet must pass the appropriate Launcher review gates before any automation is built or enabled.
