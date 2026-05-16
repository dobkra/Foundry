# Foundry Review Inbox V1

## Status

Draft for Dobromir and ChatGPT review.

## Linear Issue

DF-6 - Create Dobromir Review Inbox concept specification.

## Scope

This specification defines the future Dobromir Review Inbox concept for Dobromir Foundry.

This is documentation-only. It does not implement an inbox, dashboard, notification system, external data aggregation, integration, webhook, automation, Linear configuration change, GitHub setting change, Obsidian write, Obsidian restructure, deployment, release, merge, DF-7 work, or any other Linear issue.

## 1. Purpose and Authority

The Dobromir Review Inbox is a future review-routing concept inside Dobromir Foundry.

Its purpose is to collect the items that require Dobromir's input, approval, brainstorming, review, or decision, so Dobromir does not have to hunt across Linear, GitHub, ChatGPT, Codex, Obsidian, email, and future tools.

The Review Inbox is not an authority layer.

Authority rules:

- Dobromir remains the final authority.
- Dobromir approves, rejects, defers, redirects, or asks for changes.
- The Review Inbox only routes attention and summarizes required decisions.
- The Review Inbox must not approve work by itself.
- The Review Inbox must not reject work by itself.
- The Review Inbox must not merge, deploy, publish, release, send, invoice, update client records, activate automation, restructure Obsidian, or change external systems.

Tool authority remains:

- Linear is mission control for issue scope, priority, status, approval gates, blockers, and Codex-ready work.
- GitHub is the source of truth for repository content, branches, PRs, checks, review history, and merged state.
- Obsidian is the Second Brain and permanent knowledge vault.
- Codex is the scoped execution agent.
- ChatGPT is the strategy, reasoning, review, documentation, and Codex-direction layer.
- Dobromir is the final decision-maker.

## 2. Problem It Solves

Dobromir Foundry currently uses several tools with different source-of-truth roles:

- Linear for issue mission control.
- GitHub for repository and PR truth.
- ChatGPT for reasoning, review, strategy, and instructions.
- Codex for scoped execution.
- Obsidian for durable knowledge.
- Email and future tools for possible external requests or approvals.

Without a Review Inbox, Dobromir must manually check each tool to find:

- What needs his approval.
- What is blocked by his input.
- What needs brainstorming.
- What changed after review.
- What is ready to merge.
- What requires launch, release, business, visual, automation, or knowledge architecture approval.

This creates:

- Copy-paste friction.
- Context switching.
- Missed decision points.
- Linear/GitHub/Obsidian state drift.
- Risk that ChatGPT or Codex treats incomplete context as approval.

The Review Inbox should surface only what requires Dobromir's judgment. It should not become a general task feed, status dashboard, activity stream, or replacement for Linear.

Routine operating updates inside an approved Execution Packet should not become Review Inbox items. Linear status updates, PR links, completion comments, standard summaries, and approved non-sensitive Obsidian/vault summaries should flow through their source tools without interrupting Dobromir unless they reveal a real decision point.

## 3. Inbox Sources

The Review Inbox may eventually surface review items from these sources. This specification does not connect to or aggregate any of them live.

### Linear

Possible Linear sources:

- Issues needing scope approval.
- Issues needing clarification.
- Issues waiting for Dobromir decision.
- Issues blocked by approval gates.
- Issues ready for Codex but missing required scope.
- Issues in review with unresolved approval gates.
- Retrospective action proposals.

### GitHub

Possible GitHub sources:

- PRs needing review.
- PRs needing merge approval.
- PRs needing correction.
- PRs with changed scope after review.
- PRs requiring visual approval.
- PRs requiring business function approval.
- PRs requiring launch or full release approval.
- PRs with failed or unavailable checks.
- PRs with Obsidian documentation handoff decisions that exceed approved folders, note types, templates, or data-safety boundaries.

### Codex

Possible Codex sources:

- Questions.
- Blockers.
- Completion reports.
- Stop-condition reports.
- Risk reports.
- Requests for missing scope.
- Requests for approval-gate clarification.
- Obsidian-ready summaries only when a storage, knowledge architecture, or data-safety decision is needed.

### ChatGPT

Possible ChatGPT sources:

- Review notes.
- Strategy proposals.
- Brainstorming summaries.
- Codex instruction recommendations.
- Decision summaries.
- PR review summaries.
- Linear issue drafting recommendations.
- Obsidian note recommendations.

### Obsidian

Possible Obsidian sources:

- Notes proposed for approval.
- Notes proposed for storage.
- Notes proposed for update.
- Knowledge architecture decisions.
- Template changes.
- Folder or taxonomy changes.
- Approval records that need confirmation.

### Launch, Release, Automation, and Public Work

Possible high-authority sources:

- Launch approval requests.
- Full release approval requests.
- Automation proposals.
- Automation activation requests.
- Retrospective action proposals.
- Client-facing content approval requests.
- Public-content approval requests.
- Visual/brand review requests.
- Pricing, quote, sales, legal, or business-function decisions.

### Email and Future Tools

Possible future sources:

- Email items needing Dobromir decision.
- Future client tool requests.
- Future admin dashboard items.
- Future pricing or quoting tool approvals.
- Future content publishing approvals.

Email and future tools must not be connected to the Review Inbox without explicit automation approval and clear data safety rules.

## 4. Review Categories

The Review Inbox should classify items by the decision Dobromir needs to make.

Required categories:

- Needs scope approval.
- Needs visual approval.
- Needs business function approval.
- Needs client-facing content approval.
- Needs automation approval.
- Needs knowledge architecture approval.
- Needs launch approval.
- Needs full release approval.
- Needs direction-change approval.
- Needs retrospective action approval.
- Needs clarification.
- Blocked / waiting for Dobromir.
- Ready for review.
- Ready for merge approval.
- Obsidian-ready summary waiting for storage decision only when outside an approved packet boundary.

Optional supporting categories:

- Needs brainstorming.
- Needs priority decision.
- Needs risk decision.
- Needs repository architecture decision.
- Needs product direction decision.
- Needs business decision.
- Changes requested.
- Deferred by Dobromir.

Categories should be mutually clear enough that Dobromir can quickly understand what decision is being requested.

## 5. Priority Logic

Priority should be based on decision impact, not tool activity volume.

Priority inputs:

- Risk level.
- External or client-facing impact.
- Automation impact.
- Launch or release impact.
- Business impact.
- Whether the item blocks other work.
- Time sensitivity.
- Whether Dobromir is the only decision-maker.
- Whether missing the decision could create hidden external side effects.

Recommended priority order:

1. Launch, release, deployment, publishing, automation, email, pricing, legal, quote, client-facing, and public-content decisions.
2. Items blocking active PR review, merge approval, or issue completion.
3. Business function, visual direction, repository architecture, and knowledge architecture decisions.
4. Scope approval needed before Codex can safely execute.
5. Obsidian-ready summaries and documentation storage decisions.
6. Retrospective action proposals.
7. Non-blocking brainstorming and future direction items.

Priority should not be inferred only from Linear priority. Linear priority is useful, but the Review Inbox should also consider risk and approval-gate type.

## 6. Low-Risk vs High-Risk Items

The inbox should separate low-risk items from high-risk items so Dobromir can batch safe reviews and inspect risky decisions individually.

### Low-Risk Examples

Low-risk items may be batched when scope is clear:

- Internal docs review.
- Documentation-only PR review.
- Obsidian-ready summary review.
- Draft Linear issue proposal.
- Template wording cleanup.
- Internal process clarification.
- Completed checks summary.
- Non-client-facing technical note.
- Retrospective summary with no immediate action.

Low-risk does not mean automatic approval. It only means the item may be suitable for grouped review, unless the work is already covered by an approved Execution Packet autonomy level.

### High-Risk Examples

High-risk items must be surfaced individually:

- Pricing logic.
- Quote generation logic.
- Legal or contract wording.
- Client-facing text.
- Public website copy.
- Visual or brand direction.
- Automation activation.
- Launch, release, or deployment.
- GitHub settings.
- Branch protection.
- Repository creation, deletion, movement, or restructuring.
- File moves or deletes outside approved scope.
- Obsidian restructuring.
- Business logic.
- Sales funnel logic.
- Email sending.
- Social media publishing.
- Client record updates.
- Any action with external side effects.

High-risk items require explicit Dobromir approval before action.

## 7. Approval Gate Mapping

Every Review Inbox item should identify the relevant approval gate, what triggered it, what evidence Dobromir needs, what Dobromir must approve, and what ChatGPT or Codex must not do before approval.

| Approval gate | Trigger | Evidence needed | Dobromir approves | ChatGPT/Codex must not do before approval |
| --- | --- | --- | --- | --- |
| Scope approval | New work, unclear scope, changed acceptance criteria, or expanded task boundaries | Linear issue, scope, out of scope, acceptance criteria, files/areas affected | What is included, excluded, and ready for execution | Execute unclear work, expand scope, start another issue, or infer missing boundaries |
| Visual approval | UI, layout, brand, screenshots, public presentation, or visual direction | Screenshot, preview, route, design notes, affected files | Visual direction, layout, and brand fit | Merge visual changes, publish UI, or treat technical review as visual approval |
| Business function approval | Business workflow, sales logic, quote logic, lead flow, operational process, admin behavior, or product behavior | Workflow description, assumptions, affected data/processes, risks | Business rule, workflow behavior, and operational fit | Implement or merge business logic based on inference |
| Client-facing content approval | Public copy, emails, proposals, quotes, onboarding, contracts, social posts, reports, website copy | Exact text, context, audience, source issue/PR | External wording and use | Publish, send, merge, or use client-facing text as final |
| Automation approval | Any automated action across Linear, GitHub, Obsidian, email, publishing, client data, deployment, release, or external tools | Trigger, action, permissions, rollback, stop conditions, dry-run plan | Whether the automation may run and under what limits | Enable, test live, schedule, or trigger automation |
| Knowledge architecture approval | Obsidian folder structure, note taxonomy, metadata, templates, linking rules, durable knowledge architecture | Proposed structure, migration impact, affected notes/folders, rollback plan | Knowledge structure and live-vault changes | Write to Obsidian automatically, restructure vault, move notes, or make metadata mandatory |
| Launch approval | Anything becomes public, client-facing, operationally active, or externally visible | Launch checklist, scope, risks, approvals, rollback path | Launch timing and go/no-go decision | Launch, publish, deploy, activate, or announce |
| Full release approval | Complete product version, major platform update, release package, or release milestone | Release notes, PRs, checks, risks, outstanding issues, approval evidence | Final release readiness | Release, tag, announce, or treat merge as full release |
| Direction-change approval | Product, business, brand, repository architecture, platform workflow, target user, or strategic direction changes | Decision options, reasoning, consequences, source docs, Linear issue | Strategic direction | Change direction, create repos, migrate architecture, or update governance as final |
| Retrospective action approval | Weekly retrospective proposes meaningful workflow, automation, architecture, or governance change | Retrospective item, recommendation, risk, proposed issue, approval gate | Whether to action the improvement | Create/change/close issues, activate automation, or change workflow based only on a retrospective |

If an inbox item has multiple gates, it should show the strictest gate first and list the others as secondary gates.

## 8. Inbox Item Data Model

The Review Inbox item model should stay simple enough for manual use now and future automation later.

Conceptual item fields:

- Item ID.
- Source tool.
- Source link.
- Related Linear issue.
- Related GitHub PR.
- Related Obsidian note.
- Category.
- Priority.
- Approval gate.
- Secondary approval gates, if any.
- Risk level.
- Requested decision.
- Recommended action.
- Deadline, if any.
- Status.
- Owner.
- Last updated.
- Notes.

Example:

```yaml
item_id: review-2026-05-14-df-6
source_tool: GitHub
source_link: https://github.com/dobkra/dk-arkitekter-os/pull/XX
related_linear_issue: DF-6
related_github_pr: PR #XX
related_obsidian_note:
category: Ready for review
priority: Medium
approval_gate: Scope approval
secondary_approval_gates:
  - Automation approval before implementation
risk_level: Low
requested_decision: Review the Review Inbox concept specification.
recommended_action: Approve, request changes, or defer.
deadline:
status: Needs Dobromir review
owner: Dobromir
last_updated: 2026-05-14
notes: Documentation-only. No inbox implementation was performed.
```

This is a conceptual model, not a database schema. Making it mandatory requires separate approval.

## 9. Inbox Statuses

Recommended statuses:

- New.
- Needs Dobromir review.
- Waiting for clarification.
- Approved.
- Changes requested.
- Rejected.
- Deferred.
- Done / archived.

Status meanings:

- `New`: captured but not triaged.
- `Needs Dobromir review`: ready for Dobromir to decide.
- `Waiting for clarification`: source item lacks enough context.
- `Approved`: Dobromir approved the requested action.
- `Changes requested`: Dobromir wants revision before action.
- `Rejected`: Dobromir rejected the requested action.
- `Deferred`: Dobromir intentionally postponed the decision.
- `Done / archived`: decision was handled and no longer needs inbox attention.

The Review Inbox status should not replace Linear issue status or GitHub PR state. It should summarize the review-routing state and link back to source.

## 10. User Experience Concept

Dobromir should see one clean decision list, not another noisy task feed.

The ideal inbox should show:

- One list of items requiring Dobromir authority.
- Grouping by approval gate, urgency, or priority.
- A clear "what decision is needed" line for each item.
- Source links back to Linear, GitHub, Obsidian, ChatGPT summary, Codex report, or future tool.
- The requested decision.
- The risk level.
- The recommended action.
- The consequence of no decision when relevant.
- The current owner.
- The last update date.

The inbox should avoid:

- Showing every task update.
- Showing every CI event.
- Showing every comment.
- Becoming a replacement for Linear.
- Becoming a replacement for GitHub PR review.
- Automatically taking action from a click unless that behavior is explicitly approved.
- Hiding the real source of truth.

For a solo-founder workflow, the first useful version can be a small manual review list generated by ChatGPT or Codex during review, not a full dashboard.

## 11. Manual Workflow Now

The Review Inbox can exist manually before software exists.

Current manual workflow:

1. ChatGPT reads the active Linear issue, GitHub PR, and relevant repository docs.
2. ChatGPT produces a concise review list in chat.
3. Linear issue status or issue body marks approval needs.
4. GitHub PR bodies expose approval gates, risks, checks, and Dobromir input needed.
5. Codex completion reports include blockers, risks, PR links, and decisions needed.
6. Obsidian-ready summaries are proposed, but not written automatically.
7. Dobromir approves, rejects, asks for changes, defers, or redirects in the current tool flow.
8. Codex or ChatGPT updates only the approved source tool state.

Manual review item format:

```markdown
## Dobromir Review Item

- Source:
- Link:
- Related Linear issue:
- Related PR:
- Category:
- Approval gate:
- Risk level:
- Decision needed:
- Recommended action:
- What must not happen before approval:
```

This manual format reduces hunting across tools without implementing a dashboard or automation.

## 12. Future Implementation Options

These are options only. DF-6 does not implement any of them.

### Option A: Linear View or Dashboard

Use Linear statuses, labels, filters, or views to show issues waiting for Dobromir review.

Pros:

- Keeps mission control in Linear.
- Low conceptual overhead.
- Close to current workflow.

Limits:

- Linear may not show GitHub, ChatGPT, Codex, Obsidian, email, and future tool context in one clean place.
- Native Linear template, label, or workflow changes require explicit approval.

### Option B: GitHub PR Query or Report

Generate a report of PRs needing review, merge approval, launch/release approval, or correction.

Pros:

- Strong for repository work.
- Uses GitHub source-of-truth state.

Limits:

- Does not cover Obsidian, ChatGPT, Codex questions, or non-PR decisions.

### Option C: Obsidian Note or Index

Maintain a Review Inbox index note inside Obsidian.

Pros:

- Keeps durable decision context in the Second Brain.
- Useful for weekly retrospectives and decision records.

Limits:

- Live writes to Obsidian require knowledge architecture approval and automation approval.
- Obsidian should not become operational mission control.

### Option D: Local Foundry Dashboard

Build a local dashboard that aggregates approved read-only sources.

Pros:

- Could give Dobromir a single, purpose-built review surface.
- Can separate low-risk from high-risk items.

Limits:

- Requires implementation work.
- Requires permissions, data model, safety rules, and approval gates.
- Must avoid hidden automation.

### Option E: Client Portal or Admin Dashboard Later

Add review inbox concepts to a future internal/admin product surface.

Pros:

- Could align internal operations with product workflows later.

Limits:

- Higher risk.
- Must not mix internal Foundry authority decisions with client-facing flows.
- Requires business function approval and likely visual approval.

### Option F: Automation-Backed Aggregator Later

Use connectors, APIs, or webhooks to create an automated read-only or semi-automated Review Inbox.

Pros:

- Highest copy-paste reduction.
- Could route decision items from multiple systems.

Limits:

- Requires automation approval.
- Requires permissions audit.
- Requires no-action default behavior.
- Requires strict guardrails against issue closure, merge, release, publishing, email sending, Obsidian writes, or external side effects.

## 13. Automation Safety

The Review Inbox recommends. Dobromir decides.

Automation safety rules:

- No live aggregation without Dobromir approval.
- No notification behavior changes without approval.
- No broad or recurring automatic issue creation without approval.
- No automatic issue updates outside an approved packet boundary without approval.
- No automatic issue closure outside an approved packet boundary without approval.
- No GitHub writes without approval.
- No Linear writes outside approved packet boundaries without approval.
- No Obsidian writes outside approved folders, note types, templates, and packet boundaries without approval.
- No Obsidian restructuring without approval.
- No email, publishing, deployment, release, merge, or external action from the inbox.
- No automation may bypass approval gates.
- No automation may treat ChatGPT reasoning, Codex completion, CI success, or PR approval as launch or release approval.
- No automation may start or action another Linear issue unless explicitly approved. Scoped Level 2 draft follow-up issue proposals may be created inside an approved packet, but they must not be automatically actioned.

Approved Execution Packet autonomy is not the same as Review Inbox automation. Level 1 routine operating writes and scoped Level 2 draft creation remain limited to the active packet boundary and must not become broad background aggregation.

Any future automation must define:

- Source tools.
- Read permissions.
- Write permissions, if any.
- Trigger.
- Action.
- Stop conditions.
- Rollback plan.
- Human review path.
- Data sensitivity limits.
- Approval gates preserved.

## 14. Risks

### Inbox Becomes Noisy

If the inbox shows every update, it becomes another task feed instead of a decision list.

Mitigation:

- Include only items requiring Dobromir input, approval, brainstorming, or decision.

### Inbox Becomes Another Task System

If the inbox duplicates Linear, source-of-truth boundaries become unclear.

Mitigation:

- Linear remains mission control.
- Inbox items link back to Linear instead of replacing issue status.

### Incorrect Priority

An item may be prioritized too low or too high.

Mitigation:

- Prioritize by risk, approval gate, external impact, blocking impact, and Dobromir-only authority.

### Hidden Automation

An inbox could appear read-only while silently changing tool state.

Mitigation:

- No automation or writes without explicit approval.
- Every future implementation must state read/write behavior.
- Routine Level 1 and scoped Level 2 writes are allowed only inside approved Execution Packet boundaries and must remain auditable in the source tools.

### Approval Gate Bypass

The inbox could encourage quick approvals without evidence.

Mitigation:

- Each item must show approval gate, evidence needed, and what must not happen before approval.

### Source-of-Truth Confusion

The inbox could obscure whether Linear, GitHub, or Obsidian owns the real record.

Mitigation:

- Every item must link to the source and identify the source-of-truth tool.

### Sensitive or Client Data Exposure

Aggregating across tools may expose sensitive or client information in the wrong place.

Mitigation:

- Do not connect email, client records, private files, or sensitive data without a separate data safety review.

## 15. Recommendations

Recommended safe next documentation-only step:

```text
Create manual Dobromir Review Inbox report template
```

Purpose:

Define a reusable ChatGPT/Codex report format that lists only the current items needing Dobromir review, grouped by approval gate, priority, and source link.

Why this is safe:

- It reduces copy-paste immediately.
- It does not implement a dashboard.
- It does not aggregate live data.
- It does not change notifications.
- It does not write to Linear, GitHub, or Obsidian.
- It keeps Dobromir as final authority.

Do not create this issue from DF-6 unless Dobromir explicitly asks.

Future implementation should wait until:

- DF-6 is reviewed and merged.
- Dobromir chooses where the first manual inbox should live.
- Approval gates and source-of-truth rules remain clear.
- Any live automation receives explicit automation approval.

## 16. Stop Conditions

Codex must stop and ask Dobromir before:

- Implementing any inbox UI or dashboard.
- Aggregating live external data.
- Changing notification behavior.
- Activating automation.
- Creating webhooks.
- Updating Linear labels, templates, statuses, or workflows.
- Automatically creating, updating, closing, assigning, or moving Linear issues outside approved packet boundaries.
- Writing to Obsidian outside approved folders, note types, templates, and packet boundaries.
- Restructuring Obsidian.
- Changing GitHub settings.
- Changing branch protection.
- Changing merge, deployment, release, or CI behavior.
- Creating repositories.
- Moving or deleting files.
- Starting DF-7 or any other Linear issue.
- Changing app behavior.
- Changing pricing, quote, legal, visual direction, business logic, public content, or client-facing content.
- Publishing, deploying, releasing, sending emails, or launching ads.
- Expanding beyond review inbox concept documentation.

Until Dobromir approves otherwise, the Review Inbox is a concept and manual review-routing model only.

