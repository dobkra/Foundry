# Launcher Packet Reference Rules

## Purpose

These rules define how future Codex execution prompts should reference approved Foundry Launcher packets.

V0.3 remains manual. These rules do not introduce automation, UI, CLI, Linear integration, GitHub integration, Codex self-launching, database, server, deployment, app routes, dependencies, or project registry mutation.

For technical execution inside an approved packet, use the [Technical Execution Delegation Rules](../../../standards/technical-execution-delegation-rules.md) to decide whether Dobromir input is required.

## Approval-Gated Work

Codex execution prompts for approval-gated work should reference the relevant Launcher packet id and path.

Approval-gated work includes:

- New project.
- New module.
- New work package.
- Audit.
- Decision workshop.
- Automation.
- Deployment/release.
- Registry change.
- Client-facing decisions.
- Business decisions.
- Creative/visual decisions.
- Legal/privacy decisions.
- Pricing/commercial decisions.

## Codex Rules

- Codex must respect the execution boundary recorded in `execution-readiness.md`.
- Codex must not expand scope beyond the packet approval.
- If no packet exists for approval-gated work, Codex should stop and ask for a Launcher staging packet first.
- Routine work inside an already approved scope may proceed without a new packet if it does not change business, architecture, registry, automation, deployment, legal/privacy, pricing, or client-facing scope.

## Recommended Codex Prompt Header

```text
Launcher packet:
- Packet id:
- Packet path:
- Classification:
- Approval status:
- Execution boundary:
- Blocked work:
```

## Reference Quality

The packet reference should be specific enough for Codex to locate:

- `intake.md`
- `classification.md`
- `scope.md`
- `approval.md`
- `execution-readiness.md`

If a prompt references a packet but the approval status or execution boundary is unclear, Codex should treat the task as blocked until the packet is clarified.
