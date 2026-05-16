# Foundry Codex Task Prompt Workflow V1

## Purpose

This workflow explains how ChatGPT, Linear, and Codex should use the standard Codex Task Prompt template for Dobromir Foundry.

The goal is to reduce Dobromir's copy-paste work by making each Linear issue contain a Codex-ready execution prompt. Dobromir should not have to manually rewrite tasks between ChatGPT, Linear, Codex, GitHub, and Obsidian.

This workflow is documentation-only. It does not activate Linear-to-Codex automation, change Linear statuses, create native Linear templates, activate GitHub PR templates, change application behavior, deploy, release, restructure Obsidian, start DF-8, or merge anything.

## Source of Truth

Primary template:

```text
foundry/templates/foundry-codex-task-prompt-template.md
```

Related workflow:

```text
foundry/system/workflows/codex-linear-github/foundry-linear-issue-workflow-v1.md
```

Linear remains mission control. GitHub remains source of truth for code and repository documentation. Obsidian remains the permanent Second Brain. Codex executes scoped tasks. ChatGPT structures work and reviews reasoning. Dobromir remains final authority.

## How ChatGPT Converts a Linear Issue Into a Codex Prompt

ChatGPT should convert the Linear issue into a Codex Task Prompt by:

1. Reading the Linear issue title, problem, goal, scope, out of scope, acceptance criteria, approval gate, task classification, and risks.
2. Copying the issue ID and Linear URL into the prompt.
3. Naming the product/project and parent platform area.
4. Listing source-of-truth documents from GitHub, Linear, Obsidian, and relevant ChatGPT session summaries.
5. Translating the issue scope into exact deliverables.
6. Making constraints and out-of-scope boundaries explicit.
7. Selecting the approval gates and recording whether approval is already granted.
8. Selecting the task classification.
9. Writing stop conditions that prevent Codex from inferring business, visual, pricing, legal, launch, release, client-facing, or automation decisions.
10. Adding branch naming, PR title, testing/check, Obsidian handoff, reporting, and safety-list requirements.

ChatGPT must not treat brainstorming as scope approval. If the Linear issue lacks scope or approval information, ChatGPT should mark the issue as not Codex-ready.

## How Codex Validates the Prompt Before Executing

Before starting work, Codex should verify:

- The Linear issue ID is present.
- The product/project is named.
- The parent platform area is named.
- Source-of-truth documents are listed.
- Files or areas to inspect are specific enough.
- Deliverables are concrete.
- Scope and out-of-scope boundaries are clear.
- Approval gates are stated.
- Task classification is stated.
- Stop conditions are present.
- GitHub branch and PR title format are specified.
- Testing/check requirements are specified.
- Obsidian documentation handoff requirements are specified.

If the prompt is incomplete, Codex should stop and report exactly what is missing.

## How Codex Stops When Scope Is Unclear

Codex must stop when:

- The task requires a product or business decision not already approved.
- The issue mixes unrelated systems without explicit scope.
- Acceptance criteria are missing, contradictory, or too vague.
- A required approval gate is missing.
- Work would affect visual direction, client-facing content, pricing, quote logic, legal wording, launch, release, deployment, or external publishing.
- Work would activate automation or change external systems.
- Work would restructure Obsidian.
- Work would start another Linear issue without explicit approval.

Stopping is correct behavior when the issue is not Codex-ready.

## How Codex Executes a Valid Prompt

For a valid prompt, Codex should:

1. Sync the GitHub repository and create the requested branch.
2. Inspect the files and source-of-truth documents named in the prompt.
3. Make only the scoped changes.
4. Avoid unrelated refactors and product behavior changes.
5. Run the requested checks.
6. Commit only the intended files.
7. Push the branch.
8. Open a PR with the requested title.
9. Link the PR to the Linear issue.
10. Move the Linear issue to `In Review` when the PR is ready, if the connector permits it.

Codex must not merge unless Dobromir explicitly approves the merge.

## How Codex Reports Completion

Codex should report:

- Files changed.
- What was improved.
- Checks run and results.
- GitHub branch.
- GitHub PR URL.
- Linear issue status.
- Obsidian-ready summary.
- What remains manual.
- Risks.
- Decisions needed from Dobromir.
- Recommended next single task.

The report should be concise enough for Dobromir to review without reconstructing context across tools.

## How Codex Links GitHub PRs Back to Linear

When repository work creates a PR, Codex should:

1. Add the Linear issue link to the PR body.
2. Add the PR link to the Linear issue if the connector permits it.
3. Move the Linear issue to `In Review` when the PR is ready.
4. Leave a clear final Linear comment after merge when Dobromir approves merge.

This keeps Linear as mission control and GitHub as source of truth for repository changes.

## How Codex Prepares Obsidian-Ready Summaries

Codex should prepare an Obsidian-ready handoff after meaningful work:

- Short summary.
- What changed.
- Why it changed.
- Decisions made.
- Open questions.
- Linear issue link.
- GitHub PR link.
- Suggested Obsidian note location.
- Suggested tags.
- Whether Dobromir approval is required before storing.

Codex may write routine non-sensitive Obsidian notes only when the task or approved Execution Packet authorizes Level 1 or scoped Level 2 activity and the target folder, note type, and template are already defined.

Codex must stop before changing Obsidian vault architecture, moving/deleting notes, writing sensitive/private data, or writing outside approved folders/templates.

## Future Linear-to-Codex Delegation

This prompt template is structured for future delegation from Linear to Codex.

It supports future delegation by making the task self-contained:

- Linear issue ID.
- Source-of-truth documents.
- Files to inspect.
- Exact deliverables.
- Constraints.
- Approval gates.
- Task classification.
- Stop conditions.
- GitHub branch and PR expectations.
- Testing requirements.
- Obsidian handoff.
- Reporting format.
- Safety list.

DF-8 must still audit and define the actual Linear-to-Codex delegation mechanism before automation is activated.

## How This Reduces Dobromir Copy-Paste Work

This workflow reduces manual transfer work by:

- Turning a Linear issue into a ready-to-run Codex prompt.
- Making ChatGPT responsible for structuring the prompt instead of Dobromir rewriting it.
- Making Codex report back in a predictable format.
- Making GitHub PR links and Linear issue links part of the standard handoff.
- Making Obsidian-ready summaries part of the standard output.
- Keeping approval gates visible so Dobromir only intervenes where judgment is needed.

## What Remains Manual Until DF-8

Until DF-8 is completed, these steps remain manual:

- Dobromir or ChatGPT must trigger Codex with the prompt.
- Linear cannot automatically delegate the issue to Codex through this workflow.
- Codex can update the active Linear issue through routine status/comment/link steps only when the approved prompt or Execution Packet authorizes Level 1 routine operating writes.
- Obsidian summaries are prepared or stored only within approved packet boundaries, folders, note types, and templates.
- Automation that creates, updates, closes, or delegates Linear issues remains unapproved.

## Non-Goals

- Do not activate Linear-to-Codex automation.
- Do not change Linear statuses.
- Do not create native Linear templates.
- Do not activate GitHub PR templates.
- Do not change application behavior.
- Do not deploy.
- Do not release.
- Do not restructure Obsidian.
- Do not start DF-8.
- Do not merge without Dobromir approval.
