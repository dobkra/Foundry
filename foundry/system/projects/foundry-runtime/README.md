# Foundry Runtime Handoff Queue

This folder is the local handoff surface for Dobromir Foundry.

It is used to reduce copy-paste between ChatGPT and Codex:

1. ChatGPT prepares an Execution Packet.
2. The packet is placed in `inbox/next-execution-packet.md`.
3. Codex reads the packet and executes only the approved scope.
4. Codex writes the result to `outbox/codex-result.md`.
5. Codex may write a cleaned review summary to `review/ready-for-chatgpt.md`.
6. ChatGPT reviews the result.
7. Dobromir is interrupted only for Level 3 or Level 4 decisions, missing approval gates, or merge approval.

## Tracked Starter Files

- `README.md`
- `inbox/.gitkeep`
- `inbox/next-execution-packet.template.md`
- `outbox/.gitkeep`
- `outbox/codex-result.template.md`
- `review/.gitkeep`
- `review/ready-for-chatgpt.template.md`
- `archive/.gitkeep`

## Ignored Live Files

These live working files are ignored by Git:

- `inbox/next-execution-packet.md`
- `outbox/codex-result.md`
- `review/ready-for-chatgpt.md`
- `archive/*.md`

Do not commit filled packets, results, review summaries, or archive markdown files.

## Safety

Do not put client/private/sensitive data, secrets, raw media, private pricing files, quote snapshots, signed agreements, or client records in this folder.

This folder is not source of truth. Linear remains mission control, GitHub remains source of truth for repository state, and Obsidian remains durable memory.

This folder does not enable automation, scripts, watchers, schedulers, webhooks, deployment, release, merge, or live Obsidian writes.
