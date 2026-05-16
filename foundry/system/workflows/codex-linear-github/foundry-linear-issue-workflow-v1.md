# Foundry Linear Issue Workflow V1

## Purpose

This workflow defines how Dobromir, ChatGPT, and Codex should use the Foundry Linear issue template.

Linear is mission control for Dobromir Foundry. GitHub remains the source of truth for repository content. Obsidian remains the Second Brain and permanent knowledge vault. Codex executes scoped work. ChatGPT shapes strategy, reviews reasoning, and helps prepare structured work. Dobromir remains the final authority.

This workflow is documentation-only. It does not activate automation, customize Linear statuses, create native Linear templates, deploy, release, or restructure Obsidian.

## Current Linear Capability Check

The available Linear connector can:

- List teams.
- List issue statuses.
- List issue labels.
- Create and update issues.
- Create and update projects.
- Create and update initiatives.
- Add comments.
- Link GitHub PRs to issues.
- Move issues between existing statuses.

The available Linear connector does not expose native Linear issue-template management. It also does not expose team status customization as an approved DF-1 action.

Current native statuses visible for the `Dobromir Foundry` team:

- Backlog.
- Todo.
- In Progress.
- In Review.
- Done.
- Canceled.
- Duplicate.

Current labels visible for the `Dobromir Foundry` team:

- Improvement.
- Feature.
- Bug.

## Native Template Decision

Native Linear issue templates are not configured through this PR because the connector does not expose a native issue-template creation/update tool.

Until native Linear templates are manually configured or a supported connector path is approved, the source of truth is:

```text
foundry/templates/foundry-linear-issue-template.md
```

Manual workaround:

1. Open the repository template.
2. Copy the `Issue Body` block.
3. Paste it into the Linear issue description.
4. Set the native Linear fields manually.
5. Link related GitHub, Obsidian, or source documents.
6. Keep the issue in planning until all required sections are filled.

## Native Linear Field Setup

For Foundry operating-layer work:

- Team: `Dobromir Foundry`.
- Initiative: `Dobromir Foundry`.
- Project: `Foundry Operating System`.
- Label: `Improvement` unless another available label is more accurate.
- Priority: based on operational urgency.
- Status: use the current available status that best matches the work state.

Do not create unsupported Linear configuration changes as part of normal issue creation.

## Status Mapping

Use the Foundry work state inside the issue body for detailed workflow state. Use Linear's native status for broad operational state.

| Foundry work state | Current Linear status |
| --- | --- |
| Idea Inbox | Backlog |
| Scope Draft | Todo |
| Awaiting Dobromir Input | Todo or In Review |
| Ready for Codex | Todo |
| In Codex | In Progress |
| PR Created | In Review |
| Review Needed | In Review |
| Obsidian Documentation Needed | In Review |
| Retrospective Review Needed | In Review |
| Awaiting Dobromir Approval | In Review |
| Change Requested | In Progress |
| Approved | In Review |
| Ready to Merge | In Review |
| Done | Done |
| Released | Done |
| Blocked | Todo or In Review, with blocker written in the issue |

Recommended later improvement:

- Consider native Foundry-specific statuses only after Dobromir approves a Linear configuration task.

## Dobromir Workflow

Dobromir should provide:

- Ideas.
- Direction.
- Business logic.
- Creative input.
- Strategic decisions.
- Scope approval.
- Visual approval.
- Business function approval.
- Client-facing content approval.
- Automation approval.
- Launch approval.
- Full release approval.

Dobromir should not need to manually rewrite Codex prompts when a Linear issue is properly structured. If the issue is incomplete, it should remain in planning or waiting state.

## ChatGPT Workflow

ChatGPT should help convert raw thinking into structured Linear issues.

ChatGPT should:

- Clarify the problem and goal.
- Separate scope from out of scope.
- Identify the task classification.
- Identify the autonomy level.
- Identify approval gates.
- Draft acceptance criteria.
- Draft the Codex Task Prompt.
- Identify Obsidian documentation needs.
- Identify stop conditions for Dobromir input.

ChatGPT should not treat brainstorming as implementation approval.

## Codex Workflow

Codex should use Linear as the operational contract for work.

Before executing, Codex should check:

- Is the issue assigned to the correct Foundry team/project?
- Is the task classification present?
- Is the autonomy level present?
- Is the approval gate present?
- Is the Codex Task Prompt specific enough?
- Are scope and out of scope clear?
- Are stop conditions clear?
- Is GitHub branch/PR naming specified when repository work is required?
- Is the Obsidian documentation update requirement clear?

Codex must stop and ask Dobromir if the issue requires judgment outside approved scope.

Routine Linear status updates, active-issue comments, PR links, completion comments, and approved non-sensitive Obsidian/vault summaries may proceed inside an approved Execution Packet when the issue authorizes Level 1 routine operating writes or scoped Level 2 controlled creation.

## Issue Creation Flow

1. Idea or direction starts with Dobromir or ChatGPT.
2. ChatGPT drafts the issue using the Foundry issue template.
3. Dobromir approves scope when required.
4. The issue is created in Linear under the correct Foundry team/project.
5. The Codex Task Prompt section is completed.
6. The issue is moved to `Ready for Codex` in the issue body and `Todo` in native Linear status.
7. Codex creates the branch and performs the scoped work.
8. Codex opens a PR and links it to the issue.
9. The issue moves to `In Review` when the approved packet authorizes Level 1 routine operating writes.
10. Review, approval, merge, and documentation handoff happen.
11. The issue moves to `Done` only after merge or approved completion.

## Review and Completion Rules

A Foundry issue is not review-ready until:

- The PR or deliverable is linked.
- Acceptance criteria are checked.
- Tests/checks are documented when relevant.
- Risks are documented.
- Approval gates are visible.
- Obsidian documentation handoff is included when durable knowledge was created.

A Foundry issue is not Done until:

- Required approval gates are satisfied.
- GitHub PR is merged when repository work exists.
- Final Linear comment summarizes the result.
- Obsidian update requirement is completed inside approved folders/templates, documented as Obsidian-ready, or explicitly deferred.

## Manual Workaround Examples

For a documentation-only Foundry task:

1. Use Team `Dobromir Foundry`.
2. Use Project `Foundry Operating System`.
3. Paste the issue body template.
4. Set Task Classification to `B. Execute then request review`.
5. Set Autonomy Level to `Level 1` when routine status updates, PR links, completion comments, or standard summaries are allowed.
6. Set Approval Gate Required to `Scope approval`.
7. Fill the Codex Task Prompt with exact files and deliverables.
8. Keep automation, deployment, release, Obsidian architecture changes, and sensitive/private Obsidian writes out of scope unless explicitly approved.

For a high-risk task:

1. Set Task Classification to `C. Stop and ask Dobromir first`.
2. State the required approval gate.
3. Do not move to execution until Dobromir approves.

## Non-Goals

- Do not activate automation.
- Do not customize Linear statuses in DF-1.
- Do not create unsupported Linear configuration changes.
- Do not change product behavior.
- Do not deploy.
- Do not release.
- Do not restructure Obsidian.
- Do not start DF-2 from this workflow.

