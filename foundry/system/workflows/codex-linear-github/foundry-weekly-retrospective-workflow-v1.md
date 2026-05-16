# Foundry Weekly Retrospective Workflow V1

## Status

Draft for Dobromir and ChatGPT review.

## Linear Issue

DF-7 - Create Weekly Foundry Retrospective workflow.

## Scope

This workflow defines the weekly continuous improvement process for Dobromir Foundry.

This is documentation-only. It does not create a recurring automation, scheduler, dashboard, Linear automation, GitHub automation, Obsidian automation, webhook, live retrospective agent, Review Inbox implementation, live data aggregation, notification change, application behavior change, deployment, release, merge, or any Linear issue beyond DF-7 workflow status changes.

## 1. Purpose and Authority

The Weekly Foundry Retrospective is the continuous improvement layer for Dobromir Foundry.

It exists to help Dobromir review how the Foundry operating system is working across:

- ChatGPT.
- Codex.
- Linear.
- GitHub.
- Obsidian.
- DK Arkitekter OS / Growth & Sales as the first product inside Foundry.
- Future products, tools, workflows, and internal systems.

The Weekly Foundry Retrospective may:

- Observe.
- Summarize.
- Detect repeated friction.
- Identify missing documentation.
- Identify copy-paste handoffs.
- Suggest workflow improvements.
- Suggest automation candidates.
- Prepare Obsidian-ready notes.
- Prepare proposed Linear issue drafts.
- Propose Review Inbox candidates for Dobromir decisions.

The Weekly Foundry Retrospective is not an authority layer.

It must not:

- Make business decisions.
- Make visual or brand decisions.
- Approve scope.
- Approve launch.
- Approve release.
- Create, update, close, assign, or move Linear issues automatically.
- Merge PRs.
- Deploy.
- Release.
- Publish content.
- Send emails.
- Write to Obsidian.
- Restructure Obsidian.
- Activate automation.
- Change GitHub settings, CI workflows, branch protection, or repository settings.

Dobromir remains the final authority. Retrospective recommendations become action only after Dobromir explicitly approves them through the relevant approval gate.

## 2. Weekly Inputs

The weekly retrospective should review the state of the Foundry operating layer, not every low-level event.

Required inputs:

- Linear issues and statuses.
- GitHub PRs and repository changes.
- Codex task summaries.
- ChatGPT session summaries.
- Obsidian notes created or missing.
- Review Inbox items and candidates from `foundry/system/projects/foundry-control-center/foundry-review-inbox-v1.md`.
- Manual handoffs Dobromir had to perform.
- Copy-paste friction.
- Blockers and repeated friction.
- Approval gates triggered.
- Launch, release, and automation requests.
- Decisions deferred.
- Issues or PRs that stayed in review too long.
- Missing templates or unclear workflows.
- State drift between Linear, GitHub, Obsidian, ChatGPT, and Codex.

Optional inputs:

- Product-specific weekly context for DK Arkitekter OS / Growth & Sales.
- Future product/tool planning notes.
- GitHub CI/check failures.
- Linear issue proposals from prior retrospectives.
- Obsidian-ready summaries waiting for storage decisions.

Input safety:

- Do not aggregate live external data automatically from DF-7.
- Do not connect to email, client records, private files, or future tools without a separate approved automation and data safety review.
- Do not treat unavailable data as proof that no issue exists.

## 3. Weekly Output Format

The retrospective output should be short enough for Dobromir to review and structured enough to become durable knowledge later.

Use this format:

```markdown
# Weekly Foundry Retrospective - YYYY-MM-DD

## 1. Foundry Health Summary

[Briefly summarize the current state of Dobromir Foundry.]

## 2. What Worked

- [Workflow, tool handoff, decision, template, approval gate, or automation idea that worked.]

## 3. What Did Not Work

- [Bottleneck, repeated manual work, confusing step, missing documentation, broken handoff, or unnecessary friction.]

## 4. Copy-Paste Friction

- Source tool:
- Destination tool:
- What was copied:
- Why it was manual:
- Risk created:
- Suggested template or automation:
- Approval gate required:
- Should become Review Inbox item: Yes / No

## 5. Approval Gates Triggered

- Gate:
- Source:
- Item:
- Evidence available:
- Decision needed:
- Status:

## 6. Review Inbox Candidates

- Source tool:
- Source link:
- Related Linear issue:
- Related GitHub PR:
- Category:
- Priority:
- Approval gate:
- Risk level:
- Requested decision:
- Recommended action:

## 7. Decision Points for Dobromir

- Decision needed:
- Why Dobromir is required:
- Evidence available:
- Recommended next action:

## 8. Suggested Improvements

- Improvement:
- Problem:
- Expected benefit:
- Risk:
- Approval gate:

## 9. Suggested Automations

- Automation idea:
- Classification: Safe to automate / Automate after review / Requires Dobromir approval / Do not automate
- Approval gate:
- Why:
- Stop condition:

## 10. Obsidian Documentation Updates Proposed

- Proposed note or update:
- Suggested location:
- Source links:
- Approval needed:

## 11. Recommended Linear Issue Proposals

- Title:
- Problem:
- Goal:
- Scope:
- Out of scope:
- Acceptance criteria:
- Approval gate required:
- Task classification:
- Suggested Codex prompt:
- Stop conditions:

## 12. Highest-Leverage Improvement for Next Week

[Choose one improvement that would produce the biggest workflow gain next week.]
```

The output may be prepared in ChatGPT, Codex, Linear comments, or a repository document. It must not be written to Obsidian automatically unless Dobromir approves knowledge architecture and automation gates.

## 4. Copy-Paste Friction Tracking

The retrospective should explicitly track where Dobromir still acts as a human message bus.

Each manual handoff should record:

- Source tool.
- Destination tool.
- What was copied.
- Why it was manual.
- Risk created.
- Suggested template or automation.
- Approval gate required.
- Whether it should become a Review Inbox item.

Example:

```markdown
## Copy-Paste Friction Item

- Source tool: ChatGPT
- Destination tool: Codex
- What was copied: Full Codex task prompt
- Why it was manual: Linear-to-Codex delegation is not enabled
- Risk created: Context could be lost or altered during manual transfer
- Suggested template or automation: Use `foundry/templates/foundry-codex-task-prompt-template.md`
- Approval gate required: Automation approval before live delegation
- Should become Review Inbox item: No, unless approval is needed
```

The retrospective should distinguish:

- Friction that can be solved with a better template.
- Friction that can be solved with a clearer workflow.
- Friction that requires automation.
- Friction that should stay manual because it is high-risk.

## 5. Automation Suggestion Classification

Automation suggestions must be classified before any action is proposed.

### Safe to Automate

Use for low-risk, non-destructive, internal helper work after the workflow is approved.

Examples:

- Formatting an already-approved summary.
- Drafting a Review Inbox candidate list from already provided context.
- Generating an Obsidian-ready summary without writing to Obsidian.
- Creating a routine non-sensitive retrospective note in an approved folder/template when an approved Execution Packet authorizes Level 1 routine operating writes.
- Checking whether a PR body includes required sections.

Approval gates:

- Scope approval when introducing the automation.
- Automation approval if the automation is recurring, triggered, or connected to external systems.

### Automate After Review

Use when the automation can draft or prepare work, but a human must approve before tool state changes.

Examples:

- Drafting Linear issues from a retrospective.
- Drafting Obsidian notes from completed work.
- Drafting PR summaries.
- Drafting Review Inbox items.
- Preparing weekly retrospective notes.

Approval gates:

- Scope approval for the pilot.
- Automation approval before running automatically.
- Knowledge architecture approval before any Obsidian writes.

### Requires Dobromir Approval

Use when the automation would change state, affect external systems, or could bypass a decision gate.

Examples:

- Creating or actioning Linear issues outside an approved scoped Level 2 draft-proposal boundary.
- Updating Linear issue status outside an approved active-packet workflow.
- Closing Linear issues outside approved completion handling for the active issue.
- Writing to Obsidian outside approved folders, note types, templates, or packet boundaries.
- Opening or updating GitHub PRs.
- Triggering Codex from Linear.
- Sending notifications.
- Scheduling recurring runs.

Approval gates:

- Automation approval.
- Scope approval.
- Knowledge architecture approval for Obsidian writes.
- Direction-change approval if the workflow model changes.

### Do Not Automate

Use when the action must remain under Dobromir's explicit judgment.

Examples:

- Business decisions.
- Visual direction.
- Pricing.
- Legal wording.
- Client-facing publishing.
- Email sending.
- Launch approval.
- Full release approval.
- Repository creation.
- Obsidian restructuring.
- Merge approval.

Approval gates:

- These items require explicit Dobromir approval and should stay manual unless Dobromir later approves a narrow assistive workflow that does not make the decision.

## 6. Obsidian Documentation Update Rules

The retrospective should support Obsidian as the Second Brain without making the live vault an approval bottleneck.

It may propose:

- Weekly retrospective notes.
- Decision records.
- Lessons learned.
- Product-specific knowledge updates.
- ChatGPT session summaries.
- Codex task summaries.
- Linear issue summaries.
- GitHub PR summaries.
- Automation proposal notes.
- Approval records.

It may prepare Obsidian-ready notes with:

- Suggested title.
- Suggested folder.
- Source links.
- Summary.
- Decisions made.
- Open questions.
- Approval status.
- Tags.

It may write routine non-sensitive notes only when an approved Execution Packet authorizes Level 1 or scoped Level 2 activity and the target folder, note type, and template are already approved.

It must not:

- Write to Obsidian outside approved packet boundaries.
- Create Obsidian folders.
- Move Obsidian notes.
- Rename Obsidian notes.
- Delete Obsidian notes.
- Make metadata mandatory.
- Change note taxonomy.
- Change the live vault structure.

The retrospective must respect `foundry/standards/foundry-obsidian-second-brain-structure-v1.md`.

Knowledge architecture approval is required before:

- Structural Obsidian changes.
- Mandatory metadata changes.
- New required note types.
- Broad, recurring, triggered, or cross-tool automatic Obsidian writes.
- Live vault migration.

## 7. Linear Issue Proposal Rules

The retrospective may propose Linear issues. It must not create, update, close, assign, or move Linear issues automatically outside an approved packet boundary.

Scoped Level 2 packets may create draft follow-up issue proposals from approved templates. Those proposals must not be automatically actioned, assigned, scheduled, or treated as approved work.

Each proposed issue must include:

- Title.
- Problem.
- Goal.
- Scope.
- Out of scope.
- Acceptance criteria.
- Approval gate required.
- Task classification.
- Suggested Codex prompt.
- Stop conditions.

Use this proposal format:

```markdown
## Proposed Linear Issue

### Title

[Title]

### Problem

[What is broken, missing, inefficient, unclear, or repeated?]

### Goal

[What should be true when complete?]

### Scope

- [Included work]

### Out of Scope

- [Excluded work]

### Acceptance Criteria

- [ ] [Criterion]

### Approval Gate Required

[Scope / Visual / Business function / Client-facing content / Automation / Knowledge architecture / Launch / Full release / Direction-change / Retrospective action]

### Task Classification

[A. Autonomous execution allowed / B. Execute then request review / C. Stop and ask Dobromir first]

### Suggested Codex Prompt

[Short, scoped Codex prompt.]

### Stop Conditions

- [When to stop and ask Dobromir.]
```

Major retrospective actions require Dobromir approval before becoming Linear issues.

The retrospective should avoid issue spam. It should recommend the smallest number of high-leverage issues, not every possible improvement.

## 8. Review Inbox Integration

The retrospective should produce Review Inbox candidates for items that require Dobromir review.

It must not implement or update a live Review Inbox.

It should use `foundry/system/projects/foundry-control-center/foundry-review-inbox-v1.md` conceptually.

Review Inbox candidates should include:

- Item ID.
- Source tool.
- Source link.
- Related Linear issue.
- Related GitHub PR.
- Related Obsidian note, if any.
- Category.
- Priority.
- Approval gate.
- Risk level.
- Requested decision.
- Recommended action.
- Deadline, if any.
- Status.
- Owner.
- Last updated.
- Notes.

The retrospective should route only items needing Dobromir review:

- Scope approval.
- Visual approval.
- Business function approval.
- Client-facing content approval.
- Automation approval.
- Knowledge architecture approval.
- Launch approval.
- Full release approval.
- Direction-change approval.
- Retrospective action approval.
- Clarification.
- Merge approval.
- Obsidian storage decision.

It should not route:

- Every issue update.
- Every PR comment.
- Every CI event.
- Every completed low-risk task.
- General activity that does not require Dobromir.

## 9. Weekly Operating Cadence

DF-7 does not create a recurring automation or schedule anything.

Manual cadence:

1. Once per week, Dobromir or ChatGPT starts a retrospective session.
2. ChatGPT or Codex reads the approved source context provided or explicitly requested.
3. The retrospective uses the weekly output format in this document.
4. It lists decision points separately from informational summaries.
5. It proposes Obsidian-ready notes but does not write them.
6. It proposes Linear issues but does not create them.
7. It proposes Review Inbox candidates but does not update a live inbox.
8. Dobromir approves, rejects, changes, or defers recommendations.
9. Only approved follow-up work becomes a new Linear issue or implementation task.

Manual weekly prompt:

```markdown
Run the Weekly Foundry Retrospective for this week.

Review the current state of Dobromir Foundry across:
- Linear issues and statuses.
- GitHub PRs and repository changes.
- Codex task summaries.
- ChatGPT session summaries.
- Obsidian notes created or missing.
- Review Inbox candidates.
- Manual handoffs and copy-paste friction.
- Blockers and repeated friction.
- Approval gates triggered.
- Launch, release, and automation requests.
- Decisions deferred.

Use `foundry/system/workflows/codex-linear-github/foundry-weekly-retrospective-workflow-v1.md`.

Do not create issues, update Linear, write to Obsidian, implement automation, schedule anything, deploy, release, or merge.

Output:
- Foundry health summary.
- What worked.
- What did not work.
- Copy-paste friction.
- Approval gates triggered.
- Review Inbox candidates.
- Decision points for Dobromir.
- Suggested improvements.
- Suggested automations.
- Obsidian documentation updates proposed.
- Recommended Linear issue proposals.
- Highest-leverage improvement for next week.
```

Dobromir approval options:

- Approve one recommended action.
- Request changes to a recommendation.
- Defer the recommendation.
- Reject the recommendation.
- Ask for brainstorming before action.
- Ask ChatGPT to turn one recommendation into a Linear issue draft.

## 10. Retrospective Action Approval Rule

No major change may be actioned only because it appears in a retrospective.

Dobromir must explicitly approve actioning it.

The following gates remain active:

- Scope approval.
- Visual approval.
- Business function approval.
- Client-facing content approval.
- Automation approval.
- Knowledge architecture approval.
- Launch approval.
- Full release approval.
- Direction-change approval.
- Retrospective action approval.

Examples:

- A retrospective may recommend a Linear-to-Codex pilot. It must not start the pilot without automation approval and a scoped issue.
- A retrospective may recommend an Obsidian note template. It must not write to Obsidian without knowledge architecture approval if the live vault changes.
- A retrospective may recommend a GitHub workflow change. It must not change CI, branch protection, or repository settings without explicit approval.
- A retrospective may recommend a Review Inbox dashboard. It must not implement one without a separate approved issue.

## 11. Risks

### Retrospective Becomes Authority Layer

The retrospective could start making decisions instead of routing them.

Mitigation:

- It may observe, summarize, propose, and route. Dobromir decides.

### Too Many Proposed Issues

The retrospective could generate too many Linear issue proposals.

Mitigation:

- Recommend the smallest set of high-leverage issues.
- Always choose one highest-leverage improvement.

### Automation Overreach

The retrospective could push toward automation before gates are ready.

Mitigation:

- Classify automation ideas and require approval before implementation.

### Obsidian Clutter

The retrospective could propose too many notes or duplicate durable knowledge.

Mitigation:

- Propose only notes that should survive beyond chats, issues, PRs, or tasks.
- Follow the Obsidian Second Brain structure.

### Review Inbox Noise

The retrospective could route too much activity into the Review Inbox.

Mitigation:

- Route only items requiring Dobromir input, approval, brainstorming, or decision.

### State Drift Between Tools

Linear, GitHub, Obsidian, ChatGPT, and Codex can disagree about current status.

Mitigation:

- Treat Linear as mission control.
- Treat GitHub as source of truth for repository state.
- Treat Obsidian as durable knowledge.
- Flag inconsistencies as blockers or Review Inbox candidates.

### Retrospective Action Without Approval

A recommendation could be treated as approval.

Mitigation:

- Every major recommendation must list required approval gate and Dobromir approval status.

## 12. Recommendations

Recommended next safe documentation-only issue:

```text
Create manual Weekly Foundry Retrospective report template
```

Purpose:

Create a reusable report template that ChatGPT or Codex can fill during a manual weekly retrospective.

Why this is safe:

- It does not schedule anything.
- It does not create automation.
- It does not write to Obsidian outside an approved packet boundary.
- It does not create Linear issues automatically.
- It makes the weekly process easier to run manually.

Do not create this issue from DF-7 unless Dobromir explicitly asks.

## 13. Stop Conditions

Codex must stop and ask Dobromir before:

- Creating a recurring automation.
- Scheduling anything.
- Creating, updating, closing, assigning, or moving Linear issues outside approved packet boundaries.
- Writing to Obsidian outside approved folders, note types, templates, and packet boundaries.
- Restructuring Obsidian.
- Implementing Review Inbox.
- Updating a live Review Inbox.
- Aggregating live external data.
- Changing notification behavior.
- Creating webhooks.
- Changing GitHub settings.
- Changing branch protection.
- Changing merge, deployment, release, or CI workflows.
- Creating repositories.
- Moving or deleting files.
- Starting or actioning another Linear issue outside an approved scoped Level 2 draft-proposal boundary.
- Changing app behavior.
- Changing pricing, quote, legal, visual direction, business logic, public content, or client-facing content.
- Publishing, deploying, releasing, sending emails, or launching ads.
- Expanding beyond retrospective workflow documentation.

Until Dobromir approves otherwise, the Weekly Foundry Retrospective is a manual, documentation-defined review process only.

