# Staging Rules

Foundry Launcher staging packets are pre-execution documents for approval-gated work.

V0.3 remains manual. These rules do not introduce automation, UI, CLI, Linear integration, GitHub integration, Codex self-launching, database, server, deployment, app routes, dependencies, or project registry mutation.

## Packet Required

A Launcher packet is required for:

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
- Approval-gated Codex execution.

## Packet Not Required

A Launcher packet is not required for:

- Tiny routine implementation inside an already approved scope.
- Bugfix inside an already approved issue.
- Documentation correction with no scope impact.
- Safe maintenance work already covered by an approved packet or issue.

## Storage Model

- Foundry-level and governance packets live in `foundry/staging/`.
- Project-local packets may later live inside project repositories under `staging/`.
- Cross-project governance work stays in Foundry.

## Execution Boundary

Each packet must define its execution boundary in `execution-readiness.md`.

Codex, Linear, GitHub, automation, deployment, registry, client-facing, pricing, legal/privacy, business, and creative/visual work must stay blocked unless the packet explicitly approves that work.
