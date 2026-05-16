# Foundry Execution Packet Workflow V1

## Status

Draft for Dobromir and ChatGPT review.

## Linear Issue

DF-13 - Create Foundry Execution Packet Workflow.

Updated by DF-14 - Add Foundry Autonomy Levels to Execution Packet Workflow.

## Scope

This document defines the Foundry Execution Packet workflow.

This is documentation-only. It defines how approved Execution Packets can authorize routine operating writes without interrupting Dobromir for every status update, PR link, completion comment, or standard knowledge summary.

This document does not implement automation, create webhooks, change Linear workflows/settings, change GitHub settings, change CI workflows, write to the live Obsidian vault, restructure Obsidian, change application behavior, deploy, release, merge, start another issue, or change pricing, legal, visual direction, business logic, client-facing content, or public content.

## 1. Purpose

The Foundry Execution Packet is the standard package ChatGPT prepares for Codex so Codex can execute one scoped task without Dobromir manually rewriting or coordinating the work.

It reduces Dobromir's copy-paste burden by turning a reviewed Linear issue, source context, constraints, approval gates, and reporting expectations into one complete execution package.

The Execution Packet sits between:

- The Foundry Linear issue template.
- The Codex Task Prompt template.
- The GitHub PR template.
- The Review Inbox concept.
- The Obsidian handoff model.

The packet should reduce this loop:

```text
ChatGPT -> Dobromir copy/paste -> Codex -> Dobromir copy/paste -> ChatGPT
```

into this controlled workflow:

```text
ChatGPT prepares packet -> Codex executes packet -> Codex reports result -> ChatGPT/Dobromir review
```

Dobromir remains the decision authority. A packet helps prepare and route work, and packet approval may authorize routine operating writes inside the approved packet boundary. It does not approve creative, business, visual, launch, release, merge, broad automation, architecture, or high-risk decisions unless those approvals are explicitly stated.

## 2. Roles

### Dobromir

Dobromir is the final authority.

Dobromir may:

- Approve a packet.
- Reject a packet.
- Request changes to a packet.
- Defer a packet.
- Redirect the work.
- Approve merge later.
- Approve or reject any required gate.

Packet approval is not merge approval.

### ChatGPT

ChatGPT is the packet author and review layer.

ChatGPT should:

- Read Linear, GitHub, repository docs, and relevant Obsidian context when available.
- Verify the current state.
- Convert the Linear issue into one scoped Execution Packet.
- Identify approval gates and stop conditions.
- Keep scope and out-of-scope boundaries explicit.
- Review Codex output against the packet and source of truth.
- Prepare Obsidian-ready summaries when durable knowledge is created.

ChatGPT must not treat brainstorming, draft packets, or inferred intent as approval.

### Codex

Codex is the scoped execution agent.

Codex should:

- Validate the packet before executing.
- Execute only the packet.
- Create or use the specified branch.
- Commit only files in scope.
- Run requested checks.
- Open a PR.
- Link the PR to Linear.
- Report results in the packet's required format.
- Stop when approval gates or stop conditions are triggered.

Codex must not merge without explicit Dobromir merge approval.

### Linear

Linear is mission control.

Linear owns:

- Issue scope.
- Priority.
- Status.
- Approval gates.
- Blockers.
- Codex-ready work.
- PR links.
- Final Done state after approved completion.

### GitHub

GitHub is the source of truth for:

- Repository files.
- Branches.
- Commits.
- Pull requests.
- Checks.
- Review history.
- Merged repository state.

### Obsidian

Obsidian is the Second Brain and durable knowledge vault.

The packet may prepare Obsidian-ready summaries. When the packet boundary, target folder, note type, and template are already approved, routine non-sensitive notes may be written within the approved scope. Changing the vault architecture, moving or deleting notes, writing sensitive/private data, or creating new structural rules still requires Dobromir approval.

## 3. Autonomy Levels

Execution Packets use autonomy levels so Dobromir is not interrupted for routine operational handling, while high-risk decisions remain protected.

The packet must state the highest autonomy level it authorizes. When the level is missing or ambiguous, Codex must treat the packet as Level 0 until Dobromir or ChatGPT clarifies it.

### Level 0 - Observe and Report

Allowed actions:

- Read repository, Linear, GitHub, and approved context.
- Summarize current state.
- Prepare review items.
- Prepare draft instructions or summaries.
- No state changes.

Use Level 0 when the task is exploratory, unclear, blocked by missing approval, or intended only for review.

### Level 1 - Routine Operating Writes Allowed After Workflow Approval

Allowed without per-action Dobromir approval when the workflow boundary and active packet are approved:

- Move the active Linear issue through expected workflow states.
- Add Linear comments on the active issue.
- Link PRs to the active issue.
- Create routine completion summaries.
- Create Obsidian-ready notes.
- Write approved categories of notes into the Foundry vault when the target folder and note type are already defined.
- Update routine status or summary notes.
- Create standard PR, Linear, Codex, and ChatGPT summaries.
- Record completed tasks and merged PRs.

Level 1 is for routine bookkeeping and durable memory capture, not judgment. It must stay attached to the active issue or approved packet.

### Level 2 - Controlled Creation Allowed After Workflow Approval

Allowed without per-action Dobromir approval if the workflow and boundaries are already approved:

- Create follow-up Linear issue drafts from approved templates.
- Create Review Inbox candidate items.
- Create retrospective proposal notes.
- Create Obsidian notes using approved templates.
- Create non-destructive folder contents inside an approved vault structure.

Level 2 may create drafts and non-destructive records, but it must not automatically action the follow-up work, change workflow structure, or create broad autonomous execution.

### Level 3 - Requires Dobromir Approval

Still requires Dobromir approval:

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
- Repository creation, deletion, or movement.
- Major architecture change.
- Changing the approved Obsidian vault structure.
- Changing the Linear workflow/status model.
- Broad automation activation.
- External integrations with side effects.
- Email sending.
- Publishing.
- Client record changes.

### Level 4 - Forbidden Without Explicit Special Approval

Forbidden without explicit special approval:

- Destructive deletes.
- Mass moves.
- Client/private data writes.
- Irreversible external actions.
- Payments or invoicing.
- Production deployment or release.
- Broad autonomous agent execution across many issues.

Level 4 work should normally be split into a separate decision record, risk review, and explicit approval flow before any execution packet is created.

## 4. When to Create an Execution Packet

Create an Execution Packet when:

- A Linear issue is approved or scoped enough for execution.
- The task has clear acceptance criteria.
- The task has clear out-of-scope boundaries.
- Required approval gates are known.
- Stop conditions are explicit.
- The source-of-truth files are identified.
- Codex can execute one bounded task without inventing product, business, visual, legal, pricing, launch, or release decisions.

Good packet candidates:

- Documentation-only Foundry workflow tasks.
- Repository documentation updates.
- Scoped template updates.
- Scoped implementation work after approvals are clear.
- Test or check additions with no product behavior ambiguity.
- Internal non-client-facing improvements with clear scope.

Do not create an execution packet for:

- Unclear scope.
- Missing approval gates.
- High-risk work that needs Dobromir input first.
- Visual direction changes without visual approval.
- Business function changes without business approval.
- Client-facing content without content approval.
- Pricing, quote, sales, legal, launch, or release work without explicit approval.
- Automation, webhooks, scheduled runs, Linear-to-Codex delegation, GitHub automation, unapproved Obsidian architecture changes, or sensitive/private Obsidian writes without the required approval.
- Work that requires starting or actioning another issue outside an approved Level 2 draft proposal boundary.
- Work with conflicting Linear, GitHub, branch, or PR state.

If a packet cannot be made complete, the correct output is a Review Inbox item or a request for Dobromir clarification, not a Codex task.

## 5. Packet Structure

Every Execution Packet should use this structure.

```markdown
# Foundry Execution Packet

## Packet Title

[Short title]

## Linear Issue

- Issue: [DF-### / DK-###]
- URL:
- Current status:
- Project:
- Team:

## Work Level

Choose one:

- Foundry-level
- DK Arkitekter product-level
- Bridge/mixed

Reason:

## Autonomy Level

Choose the highest level authorized by the packet:

- Level 0 - Observe and report
- Level 1 - Routine operating writes allowed after workflow approval
- Level 2 - Controlled creation allowed after workflow approval
- Level 3 - Requires Dobromir approval
- Level 4 - Forbidden without explicit special approval

Authorized routine actions:

- [Linear state/comment/link updates, completion summaries, approved Obsidian summary notes, draft follow-up proposals, or "None"]

## Current State Verified

- Linear issue exists: Yes / No
- Linear status checked:
- No conflicting PR exists: Yes / No
- `main` or base branch current: Yes / No
- Relevant branch state:
- GitHub assumptions:
- Relevant prior PRs:

## Source-of-Truth Files

- [path] - [why it matters]
- [path] - [why it matters]

## Exact Task

[One bounded task Codex should execute.]

## Allowed Files / Areas

- [path or area]
- [path or area]

## Forbidden Files / Areas

- [path or area]
- [path or area]

## Required Approval Gates

- [Scope approval / Visual approval / Business function approval / Client-facing content approval / Automation approval / Knowledge architecture approval / Launch approval / Full release approval / Direction-change approval / Retrospective action approval]

Approval status:

- [Approved / Missing / Not required]

## Stop Conditions

Codex must stop if:

- [Condition]
- [Condition]

Routine approved notes, status updates, PR links, and completion comments are allowed within the packet scope. Stop conditions should focus on unclear scope, approval-gate triggers, high-risk work, external side effects, destructive actions, architecture changes, or scope expansion.

## Branch Name

Use:

```text
[LINEAR-ID]/short-kebab-description
```

Expected branch:

```text
[DF-###/short-kebab-description]
```

## PR Title

Use:

```text
[DF-###] Short task title
```

## Checks to Run

- `npm run lint:docs --if-present`
- `npm run typecheck` if code or typed config changed, or if required by the task.
- `npm run build` if application behavior, routes, or build-relevant files changed.
- `git diff --check`
- `git diff --cached --check` before commit

If a check is not applicable, report why.

## Expected Codex Report Format

Report:

- What was done.
- Files changed.
- Checks run and results.
- PR link.
- Linear status.
- Risks.
- Stop conditions triggered, if any.
- Whether Dobromir input is needed.
- Whether a Review Inbox item is needed.
- Whether an Obsidian handoff is needed.

## Obsidian Handoff

- Durable knowledge created: Yes / No
- Suggested Obsidian location:
- Suggested tags:
- Allowed within packet scope: Yes / No
- Requires Dobromir approval before storing: Yes / No
- Summary:

Routine non-sensitive notes may be written only when the packet authorizes the relevant autonomy level and the target folder, note type, and template are already approved. Stop before changing vault architecture, moving/deleting notes, or writing sensitive/private data.

## Review Inbox Trigger

Create or propose a Review Inbox item only if Dobromir input is needed.

Trigger:

- [Scope / Visual / Business function / Client-facing content / Automation / Knowledge architecture / Launch / Full release / Direction-change / Retrospective action / Merge approval / Clarification]

Requested decision:

Recommended action:
```

## 6. Work-Level Variants

### Foundry-Level Governance Work

Use this variant for:

- Foundry workflows.
- Foundry templates.
- Foundry operating rules.
- Approval gate documentation.
- Linear/Codex/GitHub/Obsidian handoff rules.
- Review Inbox and retrospective docs.
- Repository architecture decisions.

Packet requirements:

- Source files should include Foundry docs and templates.
- Allowed files should normally be under `dk-arkitekter-os/project-governance`, `dk-arkitekter-os/growth-and-sales`, `dk-arkitekter-os/production-tools`, `foundry/standards`, `foundry/templates`, `foundry/system/workflows`, `foundry/project-registry`, `AGENTS.md`, or `.github` when explicitly scoped.
- Forbidden files should include app code unless the issue explicitly allows it.
- Approval gates usually include scope approval.
- Automation approval is required before any live automation or connector behavior changes.
- Knowledge architecture approval is required before Obsidian structure, templates, metadata rules, or write rules change. Routine notes inside already-approved folders/templates may be Level 1 or scoped Level 2 when the packet explicitly authorizes them.

Default checks:

- `npm run lint:docs --if-present`
- `git diff --check`
- `git diff --cached --check`

### DK Arkitekter Product Work

Use this variant for:

- DK Arkitekter OS / Growth & Sales application code.
- Product-specific documentation.
- Admin or public UI.
- Product workflows.
- Data model or business logic.
- Content, quote, sales, lead, client portal, or marketing workflows.

Packet requirements:

- Source files must include product-specific docs and relevant code areas.
- Allowed files must be precise.
- Forbidden files must protect unrelated product areas.
- Visual approval is required for UI or visual work.
- Business function approval is required for workflows, data models, lead flows, quote logic, sales logic, or admin behavior.
- Client-facing content approval is required for public or client-facing wording.
- Launch/full release approval is required before public or operational release.

Default checks:

- `npm run typecheck` when code or typed config changes.
- `npm run build` when build-relevant files or app behavior changes.
- `git diff --check`
- Route, UI, or responsive checks when relevant.

### Bridge/Mixed Work

Use this variant when the task touches both Foundry governance and DK Arkitekter product execution.

Examples:

- Updating `AGENTS.md` in a way that affects both Foundry and DK Arkitekter.
- Changing a PR template that governs product PRs and Foundry PRs.
- Updating workflow docs that affect product execution.

Packet requirements:

- Work level must explain why the task is mixed.
- Source-of-truth files must include both Foundry and product context.
- Allowed files must be especially narrow.
- Forbidden files must be explicit.
- Required approval gates must cover both parent-platform and product risk.
- Codex must stop if the task begins to change product behavior or business logic not explicitly approved.

## 7. Dobromir Approval Flow

Dobromir can respond to an Execution Packet in four ways:

- Approved: Codex may execute the packet as written.
- Rejected: Codex must not execute.
- Changed: ChatGPT should revise the packet before Codex executes.
- Deferred: No execution happens until Dobromir reactivates the task.

Approval of a packet means:

- The task scope is approved for execution.
- Codex may follow the packet within its boundaries.
- Level 1 routine operating writes are authorized when listed in the packet.
- Scoped Level 2 controlled creation is authorized when listed in the packet.
- Routine Linear status updates, PR links, active-issue comments, completion summaries, and approved-category knowledge summaries do not need separate Dobromir approval when they are inside the packet boundary.

Approval of a packet does not mean:

- Merge approval.
- Launch approval.
- Full release approval.
- Visual approval unless explicitly stated.
- Business function approval unless explicitly stated.
- Client-facing content approval unless explicitly stated.
- Automation approval unless explicitly stated.
- Knowledge architecture approval unless explicitly stated.
- Approval for Level 3 or Level 4 actions unless explicitly stated.
- Approval to change Linear workflow/status models, GitHub settings, repository architecture, or Obsidian vault architecture unless explicitly stated.

Packet approval still does not equal merge approval unless the packet specifically covers a post-review merge task and Dobromir has explicitly approved merge.

Merge normally requires a later explicit merge instruction after PR review.

## 8. What Should Not Interrupt Dobromir

The Foundry should not ask Dobromir to approve every routine operating step once the packet boundary has already been approved.

These should normally proceed without interrupting Dobromir when they are inside an approved packet and match the authorized autonomy level:

- Routine Linear status updates.
- PR link comments.
- Standard completion comments.
- Standard Obsidian summaries.
- Routine merged-PR summaries.
- Routine Codex task summaries.
- Routine ChatGPT session summaries.
- Routine weekly retrospective notes.
- Creation of draft follow-up issue proposals, as long as they are not automatically actioned.
- Non-destructive updates inside approved folders and templates.

These updates should still be reported in the Codex completion summary so ChatGPT and Dobromir can audit the work later.

## 9. What Must Interrupt Dobromir

Codex or ChatGPT must interrupt Dobromir when the next step requires judgment, authority, or risk acceptance from Dobromir.

Interrupt Dobromir for:

- Visual or creative decisions.
- Business direction decisions.
- Pricing, legal, quote, sales, client-facing, or public-content decisions.
- Launch, full release, or deployment decisions.
- Automation boundary expansion.
- Destructive or irreversible action.
- Ambiguity that could change product or business direction.
- Changing vault architecture, not merely adding notes inside it.
- Changing Linear workflow model, not merely updating issue state.
- Major architecture decisions.
- External integrations with side effects.
- Client/private data writes.

If the decision is real authority work, route it to Dobromir through the Review Inbox concept instead of burying it in routine status updates.

## 10. Codex Validation Rules

Before executing, Codex must validate:

- The Linear issue exists.
- The Linear issue status is appropriate for execution.
- The Linear issue is not Done, Canceled, or Duplicate.
- The packet matches the Linear issue.
- Scope is clear.
- Out of scope is clear.
- Branch name is correct.
- Files allowed and forbidden are clear.
- The authorized autonomy level is listed.
- Approval gates are listed.
- Approval status is clear.
- Stop conditions are clear.
- No conflicting open PR exists.
- GitHub state matches packet assumptions.
- The local working tree does not contain unrelated changes.
- The task does not require automation, external side effects, launch, release, merge, Obsidian architecture changes, sensitive/private Obsidian writes, or another issue unless explicitly approved.

If any validation fails, Codex must stop and report the blocker.

## 11. Codex Execution Rules

Codex must:

- Execute only the packet.
- Stay inside the allowed files and areas.
- Avoid forbidden files and areas.
- Preserve out-of-scope boundaries.
- Run applicable checks.
- Commit only scoped changes.
- Push the branch.
- Open a PR with the required title.
- Link the PR to Linear.
- Move the active Linear issue through expected workflow states when the packet authorizes Level 1 routine operating writes.
- Add routine comments, PR links, and completion summaries on the active Linear issue when the packet authorizes Level 1 routine operating writes.
- Create approved-category Obsidian-ready or Obsidian notes only when the packet authorizes the relevant autonomy level and the folder/note type are already defined.
- Create draft follow-up issue proposals or Review Inbox candidate items only when the packet authorizes scoped Level 2 controlled creation.
- Move Linear to In Review only when the packet or task allows it.
- Report results in the expected format.

Codex must not:

- Expand scope.
- Start another issue.
- Change forbidden files.
- Change product behavior outside scope.
- Make business, visual, pricing, legal, client-facing, launch, release, or direction decisions.
- Activate automation.
- Create webhooks.
- Change Linear workflows or settings.
- Change GitHub settings or CI workflows.
- Change Obsidian vault architecture.
- Move or delete Obsidian notes.
- Write sensitive/private data to Obsidian.
- Write to Obsidian outside approved folders, note types, templates, or packet scope.
- Merge without explicit Dobromir merge approval.

## 12. Codex Report Format

Codex should report:

```markdown
## Execution Result

### What Was Done

- [Summary]

### Files Changed

- [path] - [purpose]

### Checks Run

- [check] - [result]

### Pull Request

- [PR link]

### Linear Status

- [Issue ID] moved to [status]

### Routine Operating Writes

- [Linear comments, PR links, status updates, Obsidian summaries, or "None"]

### Risks

- [Risk or "None known"]

### Stop Conditions Triggered

- [Condition or "None"]

### Dobromir Input Needed

- [Yes/No]
- Reason:

### Review Inbox Item Needed

- [Yes/No]
- Trigger:
- Requested decision:

### Obsidian Handoff

- Durable knowledge created: Yes / No
- Suggested note location:
- Summary:
```

The report should be short enough for Dobromir to review and structured enough for ChatGPT to use in follow-up review.

## 13. Review Inbox Integration

The Execution Packet should create or propose a Review Inbox item only when Dobromir input is needed for a real decision.

The Review Inbox should not surface routine operational updates. Routine summaries, PR links, status changes, completion comments, and approved-category knowledge notes should flow through Linear, GitHub, and Obsidian reporting without interrupting Dobromir.

Review Inbox triggers:

- Scope decision.
- Visual approval.
- Business function approval.
- Client-facing content approval.
- Automation approval.
- Knowledge architecture approval.
- Launch approval.
- Full release approval.
- Direction-change approval.
- Retrospective action approval.
- Merge approval.
- Clarification.
- Blocker that requires Dobromir.

Do not create Review Inbox items for routine activity:

- Every commit.
- Every PR comment.
- Every check run.
- Every low-risk documentation update.
- Every completed task that does not need Dobromir.
- Routine Linear status changes on the active issue.
- Routine PR link comments.
- Standard Codex, ChatGPT, Linear, GitHub PR, or retrospective summaries.
- Non-sensitive notes added inside approved Obsidian folders/templates.

When a Review Inbox item is needed, use the conceptual model in `foundry/system/projects/foundry-control-center/foundry-review-inbox-v1.md`:

- Source tool.
- Source link.
- Related Linear issue.
- Related GitHub PR.
- Category.
- Priority.
- Approval gate.
- Risk level.
- Requested decision.
- Recommended action.
- Status.

This workflow does not implement or update a live Review Inbox.

## 14. Obsidian Handoff

Execution Packets can prepare Obsidian-ready summaries.

Obsidian should become durable memory for Foundry execution, not a bottleneck that requires Dobromir to approve every routine summary.

The packet should say:

- Whether durable knowledge was created.
- Whether an Obsidian note should be created or updated.
- Suggested Obsidian folder.
- Suggested title.
- Suggested tags.
- Source links.
- Whether Dobromir approval is required before storing.

Routine non-sensitive notes using approved templates and approved folders may be created within approved packet scope when the packet authorizes Level 1 or scoped Level 2 activity.

Changing vault architecture still requires Dobromir approval. Codex must stop before changing folders, note taxonomy, metadata rules, templates, linking rules, moving/deleting notes, archiving major knowledge areas, or writing sensitive/private data.

Automatic Obsidian writes require:

- Knowledge architecture approval.
- Automation approval.
- Clear target folder.
- Clear note type.
- Duplicate handling.
- Rollback path.

Completed packets should always report whether durable knowledge should be stored, even if the answer is "No."

## 15. Examples

### Example A: Documentation-Only Foundry Workflow Task

```markdown
# Foundry Execution Packet

## Packet Title

Create Foundry pre-merge checklist workflow

## Linear Issue

- Issue: DF-XX
- Current status: Todo
- Project: Foundry Operating System

## Work Level

Foundry-level

## Autonomy Level

Level 1 - Routine operating writes allowed after workflow approval.

Authorized routine actions:

- Move DF-XX to In Progress and In Review.
- Add PR link to DF-XX.
- Add standard completion comment on DF-XX.
- Prepare standard Codex task summary.

## Current State Verified

- Linear issue exists: Yes
- No conflicting PR exists: Yes
- `main` current: Yes

## Source-of-Truth Files

- `AGENTS.md`
- `.github/pull_request_template.md`
- `dobkra/archive:foundry/workflow-audits/codex-linear-github/foundry-github-automation-pr-workflow-audit-v1.md`

## Exact Task

Create a documentation-only workflow for Codex pre-merge verification.

## Allowed Files / Areas

- `foundry/system/workflows/codex-linear-github/foundry-pre-merge-checklist-v1.md`

## Forbidden Files / Areas

- `src/**`
- `.github/workflows/**`
- Obsidian vault

## Required Approval Gates

- Scope approval: approved

## Stop Conditions

Stop before changing GitHub settings, CI workflows, automation, app behavior, Obsidian architecture, Linear workflow structure, or starting another issue.

## Branch Name

`DF-XX/foundry-pre-merge-checklist`

## PR Title

`[DF-XX] Create Foundry pre-merge checklist workflow`
```

### Example B: DK Arkitekter App/Code Task

```markdown
# Foundry Execution Packet

## Packet Title

Add locked placeholder state for approved internal admin route

## Linear Issue

- Issue: DK-XX
- Current status: Todo
- Project: DK Arkitekter OS / Growth & Sales

## Work Level

DK Arkitekter product-level

## Autonomy Level

Level 1 for routine branch, PR, Linear status, and completion reporting only.

## Source-of-Truth Files

- `AGENTS.md`
- Relevant product specification
- Relevant route/component files

## Exact Task

Implement the scoped locked placeholder state described in the Linear issue.

## Allowed Files / Areas

- `src/app/[approved-route]/**`
- `src/components/[approved-component].tsx`

## Forbidden Files / Areas

- Pricing logic.
- Quote logic.
- Legal text.
- Client-facing copy not approved in the issue.
- Unrelated routes.

## Required Approval Gates

- Scope approval: approved
- Visual approval: required before merge if UI changes are visible
- Business function approval: required if workflow logic changes

## Stop Conditions

Stop if product behavior, business logic, visual direction, pricing, legal text, or client-facing content must be inferred.
```

### Example C: Stop-and-Ask Task Where Approval Is Missing

```markdown
# Foundry Execution Packet Review

## Packet Title

Update quote generator pricing assumptions

## Work Level

DK Arkitekter product-level

## Validation Result

Stop. Do not execute.

## Reason

The task affects pricing, quote logic, and could influence launch readiness, but business function approval, pricing approval, and launch/release context are missing.

## Review Inbox Trigger

- Category: Needs business function approval
- Approval gate: Business function approval
- Requested decision: Dobromir must approve pricing and quote assumptions before Codex edits files.

## Codex Action

No branch, commit, PR, or implementation.
```

### Example D: Routine Linear and Obsidian Summary Without Interruption

```markdown
# Foundry Execution Packet

## Packet Title

Record merged Foundry documentation task

## Linear Issue

- Issue: DF-XX
- Current status: In Review
- Project: Foundry Operating System

## Work Level

Foundry-level

## Autonomy Level

Level 1 - Routine operating writes allowed after workflow approval.

## Exact Task

After Dobromir approves merge and the PR is merged, update the active Linear issue to Done, add the PR/merge summary comment, and create the standard Codex task summary note in the approved Foundry vault summary folder.

## Allowed Files / Areas

- Active Linear issue DF-XX.
- GitHub PR link for the active issue.
- Approved Obsidian folder: `/13_Codex_Task_Summaries`.
- Approved note type: Codex task summary.

## Forbidden Files / Areas

- Linear workflow/status model.
- Other Linear issues.
- Obsidian folder structure.
- Existing Obsidian notes not listed in the packet.
- Client/private data.

## Required Approval Gates

- Scope approval: approved by packet.
- Knowledge architecture approval: already satisfied by approved folder and note type.
- Merge approval: required separately before merge.

## Stop Conditions

Stop before changing vault architecture, moving/deleting notes, writing sensitive/private data, changing Linear settings, starting another issue, or treating this routine summary as launch/release approval.

## Review Inbox Trigger

No Review Inbox item is needed for the routine status/comment/summary work unless a blocker or missing approval appears.
```

## 16. Safety Rules

The Execution Packet workflow does not enable automation.

Automation approval is required before:

- Linear-to-Codex delegation.
- Webhooks.
- Scheduled runs.
- Broad automatic Obsidian writes outside an approved packet boundary.
- Broad automatic Linear issue creation, update, closure, assignment, or movement outside the active approved packet.
- Automatic GitHub branch, PR, merge, release, or deployment actions.
- Automatic Review Inbox updates outside approved candidate-item drafting.

Codex must stop before:

- Automation.
- Webhooks.
- Linear workflow or settings changes.
- Destructive Linear changes or broad issue operations.
- GitHub settings or CI workflow changes.
- Obsidian architecture changes, note moves/deletes, sensitive/private data writes, or writes outside approved folders/templates.
- App behavior changes outside scope.
- Pricing, legal, visual direction, business logic, client-facing content, or public content changes.
- Deployment.
- Release.
- Merge.
- Starting another issue.

The packet is a coordination artifact. It makes routine execution cleaner, but it does not replace Dobromir's judgment.
