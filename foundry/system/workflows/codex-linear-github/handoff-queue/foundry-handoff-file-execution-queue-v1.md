# Foundry Handoff File Execution Queue V1

## Status

Draft for Dobromir and ChatGPT review.

## Linear Issue

DF-16 - Create Foundry Handoff File Execution Queue.

## Purpose

The Foundry Handoff File Execution Queue creates a controlled local file handoff between ChatGPT and Codex.

Its purpose is to:

- Reduce copy-paste between ChatGPT and Codex.
- Give ChatGPT a stable place to prepare an Execution Packet.
- Give Codex a stable place to read that packet.
- Give Codex a stable place to write its execution result.
- Give ChatGPT a stable place to review Codex output.
- Keep Dobromir involved only for Level 3 or Level 4 decisions, merge approval, or other explicit authority gates.

This workflow is not full automation. It does not create scripts, watchers, schedulers, webhooks, live delegation, or background execution.

## Tool Authority

The runtime queue is only a temporary operating surface.

- Linear remains mission control for issue scope, status, priority, blockers, and approval gates.
- GitHub remains the source of truth for code, repository documentation, branches, PRs, checks, and merged state.
- Obsidian remains the durable Second Brain and permanent knowledge vault.
- ChatGPT remains the strategy, reasoning, review, documentation, and packet-authoring layer.
- Codex remains the scoped execution agent.
- Dobromir remains final authority for Level 3 and Level 4 decisions and merge approval.

Runtime files are not source of truth. They are working handoff files that should be overwritten, cleared, or archived locally after use.

## Runtime Folder Structure

The local queue lives under:

```text
foundry-runtime/
  README.md
  inbox/
    .gitkeep
    next-execution-packet.template.md
  outbox/
    .gitkeep
    codex-result.template.md
  review/
    .gitkeep
    ready-for-chatgpt.template.md
  archive/
    .gitkeep
```

Tracked starter files:

- `foundry/system/projects/foundry-runtime/README.md`
- `foundry-runtime/inbox/.gitkeep`
- `foundry/system/projects/foundry-runtime/inbox/next-execution-packet.template.md`
- `foundry-runtime/outbox/.gitkeep`
- `foundry/system/projects/foundry-runtime/outbox/codex-result.template.md`
- `foundry-runtime/review/.gitkeep`
- `foundry/system/projects/foundry-runtime/review/ready-for-chatgpt.template.md`
- `foundry-runtime/archive/.gitkeep`

Ignored live working files:

- `foundry-runtime/inbox/next-execution-packet.md`
- `foundry-runtime/outbox/codex-result.md`
- `foundry-runtime/review/ready-for-chatgpt.md`
- `foundry-runtime/archive/*.md`

## Folder Roles

### `inbox/`

`inbox/` is where ChatGPT-prepared Execution Packets are placed for Codex.

Live working file:

```text
foundry-runtime/inbox/next-execution-packet.md
```

This file is ignored by Git. It may contain temporary operating context and must not be committed.

Tracked starter template:

```text
foundry/system/projects/foundry-runtime/inbox/next-execution-packet.template.md
```

### `outbox/`

`outbox/` is where Codex writes its execution result after reading and executing a packet.

Live working file:

```text
foundry-runtime/outbox/codex-result.md
```

This file is ignored by Git. It may contain temporary task output and must not be committed.

Tracked starter template:

```text
foundry/system/projects/foundry-runtime/outbox/codex-result.template.md
```

### `review/`

`review/` is where Codex can write a cleaned, review-ready summary for ChatGPT and Dobromir.

Live working file:

```text
foundry-runtime/review/ready-for-chatgpt.md
```

This file is ignored by Git. It should contain only the information needed for ChatGPT review and Dobromir decision routing.

Tracked starter template:

```text
foundry/system/projects/foundry-runtime/review/ready-for-chatgpt.template.md
```

### `archive/`

`archive/` is an optional local ignored archive for handled packets and results.

Archive markdown files are ignored by Git. They are local working records, not repository documentation or Obsidian durable memory.

## Standard Workflow

1. ChatGPT reads Linear, GitHub, repository docs, and approved context.
2. ChatGPT prepares one Execution Packet using `foundry/system/workflows/codex-linear-github/foundry-execution-packet-workflow-v1.md`.
3. Dobromir or Codex places the packet in:

   ```text
   foundry-runtime/inbox/next-execution-packet.md
   ```

4. Codex reads the packet from the inbox.
5. Codex validates the packet:
   - Linear issue exists.
   - Scope is clear.
   - Autonomy level is listed.
   - Allowed and forbidden files are clear.
   - Stop conditions are clear.
   - No conflicting PR exists.
   - GitHub state matches packet assumptions.
6. Codex executes only the allowed work.
7. Codex writes its result to:

   ```text
   foundry-runtime/outbox/codex-result.md
   ```

8. Codex optionally writes a review-ready summary to:

   ```text
   foundry-runtime/review/ready-for-chatgpt.md
   ```

9. ChatGPT reviews the result against Linear, GitHub, and the packet.
10. Dobromir is interrupted only for Level 3 or Level 4 decisions, missing approval gates, merge approval, or real direction changes.
11. If the work creates durable knowledge, Codex or ChatGPT prepares or writes the approved summary according to the active packet and Foundry autonomy rules.

## Autonomy Integration

The handoff queue follows the DF-14 and DF-15 autonomy model.

### Level 0 - Observe and Report

The queue can be used to pass read-only state summaries and review packets.

Allowed:

- Read state.
- Summarize.
- Prepare review items.
- Write local ignored handoff files.

No repository, Linear, GitHub, or Obsidian state changes are authorized by Level 0.

### Level 1 - Routine Operating Writes

Inside an approved packet boundary, Codex may perform routine operating writes such as:

- Moving the active Linear issue through expected workflow states.
- Adding comments on the active Linear issue.
- Linking PRs to the active issue.
- Writing standard completion summaries.
- Creating approved non-sensitive Obsidian/vault summaries when the target folder, note type, and template are already defined.

The queue reduces copy-paste for these actions. It does not turn them into background automation.

### Level 2 - Controlled Creation

Inside an approved packet boundary, Codex or ChatGPT may create controlled drafts such as:

- Draft follow-up Linear issue proposals from approved templates.
- Review Inbox candidate items.
- Retrospective proposal notes.
- Obsidian notes using approved templates.
- Non-destructive folder contents inside an approved vault structure.

Level 2 output must not be automatically actioned unless a later approved packet or Dobromir instruction permits it.

### Level 3 - Requires Dobromir Approval

The queue must route Level 3 items to Dobromir instead of executing them.

Examples:

- Creative feedback.
- Visual direction.
- Brand direction.
- Business direction.
- Pricing.
- Legal wording.
- Quote logic.
- Sales logic.
- Client-facing or public content.
- Launch.
- Full release.
- Deployment.
- Major architecture change.
- Changing the approved Obsidian vault structure.
- Changing the Linear workflow/status model.
- Broad automation activation.
- External integrations with side effects.
- Email sending.
- Publishing.
- Client record changes.

### Level 4 - Forbidden Without Explicit Special Approval

The queue must stop before Level 4 work.

Examples:

- Destructive deletes.
- Mass moves.
- Client/private data writes.
- Irreversible external actions.
- Payments or invoicing.
- Production deployment or release.
- Broad autonomous agent execution across many issues.

## Template Files

The tracked `.template.md` files are starter templates only.

To use them:

1. Copy the relevant `.template.md` file.
2. Rename the copy to the corresponding live working file.
3. Fill the live working file locally.
4. Do not commit the filled live working file.

Tracked templates should stay generic and should not contain private client data, secrets, pricing details, private business context, or sensitive project material.

## Git Ignore Policy

`.gitignore` ignores live runtime markdown files:

```text
foundry-runtime/inbox/*.md
foundry-runtime/outbox/*.md
foundry-runtime/review/*.md
foundry-runtime/archive/*.md
```

It then re-includes safe starter files:

```text
!foundry/system/projects/foundry-runtime/README.md
!foundry-runtime/**/.gitkeep
!foundry-runtime/**/*.template.md
```

This means:

- Filled live packets are ignored.
- Filled live results are ignored.
- Archive markdown files are ignored.
- Starter templates remain tracked.
- `.gitkeep` files remain tracked.
- The README remains tracked.

## Safety Rules

Do not put these in runtime files:

- Real client data.
- Private client records.
- Signed agreements.
- Private pricing files.
- Secrets.
- API keys.
- Uploaded media.
- Quote snapshots.
- Sensitive business data that should not live in the repository workspace.

Do not commit:

- `foundry-runtime/inbox/next-execution-packet.md`
- `foundry-runtime/outbox/codex-result.md`
- `foundry-runtime/review/ready-for-chatgpt.md`
- Any filled archive markdown file.

Do not use runtime files as source of truth:

- Store issue truth in Linear.
- Store repository truth in GitHub.
- Store durable knowledge in Obsidian.
- Store temporary handoff context in `foundry-runtime/`.

## Stop Conditions

Codex must stop before:

- Enabling automation.
- Creating scripts, watchers, schedulers, or background jobs.
- Creating webhooks.
- Changing GitHub settings.
- Changing Linear settings or workflows.
- Changing branch protection.
- Changing CI workflows.
- Writing to live Obsidian outside approved packet scope.
- Changing Obsidian vault architecture.
- Moving or deleting Obsidian notes.
- Writing client/private/sensitive data.
- Committing private runtime data.
- Acting on Level 3 or Level 4 decisions without Dobromir.
- Deploying.
- Releasing.
- Merging without explicit merge approval.
- Starting DF-17 or any other issue.

## Non-Goals

This workflow does not:

- Implement Linear-to-Codex automation.
- Trigger Codex automatically.
- Watch files.
- Schedule work.
- Create webhooks.
- Add scripts.
- Change GitHub or Linear settings.
- Write to live Obsidian.
- Change application behavior.
- Deploy.
- Release.
- Merge.

## Recommended Next Step

Review PR for DF-16. After review and merge, the next safe step would be a separate issue to test the manual handoff queue on one documentation-only Foundry task.
