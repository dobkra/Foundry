# Foundry Obsidian Second Brain Structure V1

## Status

Draft for Dobromir and ChatGPT review.

## Linear Issue

DF-5 - Create Obsidian Second Brain vault structure specification.

## Scope

This specification defines how Obsidian should store durable knowledge for Dobromir Foundry as the permanent Second Brain.

This is documentation-only. It does not restructure the live Obsidian vault. It does not create, move, rename, delete, or write any Obsidian folders or notes. It does not activate automation, create webhooks, change GitHub settings, change application behavior, create repositories, deploy, release, merge, or start DF-7 or any other issue.

## 1. Purpose and Authority

Obsidian is the permanent Second Brain for Dobromir Foundry.

Dobromir Foundry is the parent platform for software creation, business systems, AI-assisted execution workflows, repository governance, Linear mission control, and Obsidian Second Brain governance.

Obsidian stores durable human-readable knowledge that should survive beyond individual ChatGPT sessions, Codex tasks, Linear issues, GitHub branches, GitHub PRs, and repository commits.

Primary tool authority:

- Obsidian is the permanent Second Brain and durable knowledge vault.
- GitHub is the source of truth for repository documentation, code, branches, pull requests, checks, and merged repository state.
- Linear is mission control for issue scope, priority, status, approval gates, blockers, and Codex-ready work.
- ChatGPT is the strategy, reasoning, review, documentation, brainstorming, and prompt/workflow architecture layer.
- Codex is the scoped execution agent.
- Dobromir is the final authority and knowledge architecture authority.

Obsidian should store:

- Durable thinking.
- Human-readable summaries.
- Decisions.
- Lessons learned.
- Cross-project memory.
- Product knowledge.
- Business process knowledge.
- Architecture and workflow knowledge.
- ChatGPT session summaries.
- Codex task summaries.
- Linear issue summaries.
- GitHub PR summaries.
- Weekly Foundry retrospectives.

Obsidian should not replace GitHub as source of truth for repository content. It should reference GitHub docs and PRs when repository state matters.

## 2. Proposed Vault Folder Structure

This folder model preserves the original Foundry proposal and adds practical expectations for how each area should be used.

```text
/00_Inbox
/01_Dobromir
/02_Business
/03_Products
/03_Products/DK_Arkitekter_Growth_and_Sales_OS
/03_Products/Future_Tools
/04_Projects
/05_DK_Arkitekter
/06_Software_Systems
/07_Decision_Records
/08_Templates
/09_Meetings
/10_Research
/11_Linear_Summaries
/12_GitHub_PR_Summaries
/13_Codex_Task_Summaries
/14_ChatGPT_Session_Summaries
/15_Foundry_Retrospectives
/99_Archive
```

### Folder Purposes

`/00_Inbox`

- Temporary capture area.
- Unsorted notes, quick ideas, clipped material, and raw summaries.
- Items should be moved only after Dobromir approves the destination if the move affects knowledge architecture.

`/01_Dobromir`

- Personal operating principles.
- Preferences.
- Working style.
- Strategic patterns.
- Personal decision context.
- Notes that help ChatGPT and Codex understand Dobromir's preferences when explicitly provided.

`/02_Business`

- Business strategy.
- Business processes.
- Sales process notes.
- Pricing strategy notes that are not active pricing logic.
- Operational procedures.
- Marketing strategy.
- Client communication principles.

`/03_Products`

- Product-level knowledge for all software products and tools inside Dobromir Foundry.
- Each product should have its own folder.
- DK Arkitekter OS / Growth & Sales is one product inside this area, not the parent platform.
- Future products and tools should be added here after Dobromir approves the product structure.

`/03_Products/DK_Arkitekter_Growth_and_Sales_OS`

- Product overview for DK Arkitekter OS / Growth & Sales.
- Product strategy.
- Feature specifications.
- Product workflows.
- Product decision links.
- Product-specific Linear and GitHub references.

`/03_Products/Future_Tools`

- Placeholder area for future Foundry products.
- Should remain lightweight until a future product is approved.
- Future product folders should not be created automatically without Dobromir approval.

`/04_Projects`

- Client/project knowledge.
- Internal project notes.
- Project histories.
- Project context that may span products, business, and client work.

`/05_DK_Arkitekter`

- DK Arkitekter business knowledge.
- Architecture-business notes.
- Brand and positioning knowledge.
- Client/project context for DK Arkitekter.
- Non-software business knowledge that supports the product but is not product documentation.

`/06_Software_Systems`

- Software architecture knowledge.
- Repository architecture decisions.
- Toolchain notes.
- System maps.
- Foundry operating-layer notes.
- Cross-product software patterns.

`/07_Decision_Records`

- Durable architecture, business, product, workflow, knowledge architecture, and automation decisions.
- Decision records should link to Linear issues, GitHub PRs, ChatGPT summaries, Codex summaries, and source docs.

`/08_Templates`

- Obsidian note templates.
- Summary templates.
- Decision record templates.
- Product note templates.
- Retrospective templates.

`/09_Meetings`

- Meeting notes.
- Planning conversations.
- Review notes.
- Approval discussions when they should survive beyond a chat.

`/10_Research`

- Market research.
- Technical research.
- Product research.
- Architecture/business research.
- Tool integration research.

`/11_Linear_Summaries`

- Durable summaries of important Linear issues.
- Issue histories when the issue created reusable knowledge.
- Links to GitHub PRs and Obsidian follow-up notes.

`/12_GitHub_PR_Summaries`

- Durable summaries of important GitHub PRs.
- Merge outcomes.
- Follow-up actions.
- Links to related Linear issues and Codex summaries.

`/13_Codex_Task_Summaries`

- Codex execution summaries.
- Branch/PR handoffs.
- Checks run.
- Risks and blockers.
- Lessons learned from implementation or documentation tasks.

`/14_ChatGPT_Session_Summaries`

- ChatGPT strategy, review, reasoning, brainstorming, and documentation session summaries.
- Durable capture of decisions, assumptions, next actions, and Codex instructions.

`/15_Foundry_Retrospectives`

- Weekly Foundry retrospective notes.
- Copy-paste friction tracking.
- Automation candidates.
- Suggested Linear issues.
- Obsidian documentation updates.

`/99_Archive`

- Inactive, superseded, or retired notes.
- Archived notes should not be deleted automatically.
- Archiving major knowledge areas requires Dobromir knowledge architecture approval.

## 3. Required Note Types

The vault should support these standard note types:

- Product overview.
- Product specification.
- Feature specification.
- Workflow/process note.
- Decision record.
- ChatGPT session summary.
- Codex task summary.
- Linear issue summary.
- GitHub PR summary.
- Weekly retrospective.
- Repository architecture note.
- Automation proposal.
- Approval record.
- Research note.
- Business process note.
- Client/project note.
- Template note.

Optional supporting note types:

- Meeting note.
- Brainstorming note.
- Release note.
- Lessons learned note.
- Tool integration note.
- Risk register note.

## 4. Product Documentation Structure

Product documentation belongs under:

```text
/03_Products
```

Each product should have a folder:

```text
/03_Products/[Product_Name]
```

Suggested product substructure:

```text
/03_Products/[Product_Name]/Overview
/03_Products/[Product_Name]/Specifications
/03_Products/[Product_Name]/Features
/03_Products/[Product_Name]/Workflows
/03_Products/[Product_Name]/Decisions
/03_Products/[Product_Name]/Releases
/03_Products/[Product_Name]/Research
/03_Products/[Product_Name]/Open_Questions
```

This substructure is a recommendation, not a mandatory live-vault change. Making it mandatory requires knowledge architecture approval.

### DK Arkitekter OS / Growth & Sales

DK Arkitekter OS / Growth & Sales belongs under:

```text
/03_Products/DK_Arkitekter_Growth_and_Sales_OS
```

It should contain:

- Product overview.
- Current scope.
- Product strategy.
- Feature specifications.
- User/workflow notes.
- Architecture notes.
- Decision records.
- Release notes.
- Open questions.
- Links to Linear projects.
- Links to GitHub repository docs and PRs.

DK Arkitekter OS / Growth & Sales is one product inside Dobromir Foundry. It must not be treated as the parent platform.

### Future Foundry Products and Tools

Future products, business tools, automation tools, client tools, pricing tools, content tools, and internal systems should also live under `/03_Products` when they become productized.

Before adding a future product folder, the note or folder should define:

- Product name.
- Purpose.
- Owner.
- Source-of-truth GitHub repository, if any.
- Linear project or team, if any.
- Related Foundry governance notes.
- Approval gate required before build or launch.

### Product Links

Product notes should link to:

- Related Linear projects or issues.
- Related GitHub repositories.
- Related GitHub PR summaries.
- Related Foundry parent-platform governance notes.
- Related decision records.
- Related ChatGPT and Codex summaries.

### Separation From Foundry Governance

Foundry parent-platform governance should remain separate from product-specific knowledge.

Use product folders for product-specific knowledge.

Use `/06_Software_Systems`, `/07_Decision_Records`, and Foundry-specific notes for parent-platform governance.

Examples:

- A DK Arkitekter feature specification belongs under the DK Arkitekter product folder.
- A Foundry-wide Codex handoff rule belongs under software systems, decision records, templates, or Foundry governance.
- A future repository split decision belongs in a repository architecture note and decision record.

## 5. Decision Record Structure

Decision records should be stored in:

```text
/07_Decision_Records
```

Decision records should include:

- Title.
- Date.
- Status.
- Context.
- Decision.
- Options considered.
- Reasoning.
- Consequences.
- Approval gate.
- Dobromir approval status.
- Related Linear issues.
- Related GitHub PRs.
- Related repository docs.
- Related ChatGPT summaries.
- Related Codex summaries.

Recommended status values:

- Proposed.
- Approved.
- Superseded.
- Rejected.
- Deferred.

Decision record template:

```markdown
# [Decision Title]

## Date

YYYY-MM-DD

## Status

Proposed / Approved / Superseded / Rejected / Deferred

## Context

[What led to this decision?]

## Decision

[What was decided?]

## Options Considered

- [Option A]
- [Option B]
- [Option C]

## Reasoning

[Why this decision is preferred.]

## Consequences

[What changes because of this decision?]

## Approval Gate

[Scope / Visual / Business function / Client-facing content / Automation / Knowledge architecture / Launch / Full release / Direction-change / Retrospective action]

## Dobromir Approval Status

[Approved / Needed / Not required / Deferred]

## Related Linear Issues

- [DF-###]

## Related GitHub PRs

- [PR #]

## Related Repository Docs

- [path]

## Related ChatGPT / Codex Summaries

- [note link]
```

## 6. ChatGPT Session Summary Structure

ChatGPT session summaries should be stored in:

```text
/14_ChatGPT_Session_Summaries
```

Use this structure:

- Session purpose.
- Date.
- Context read.
- Decisions made.
- Codex instructions given.
- PRs reviewed.
- Linear issues advanced.
- Open questions.
- Next action.
- Obsidian notes proposed.
- Dobromir approvals given or needed.

Recommended template:

```markdown
# ChatGPT Session Summary - [Short Topic] - YYYY-MM-DD

## Session Purpose

[Why the session happened.]

## Context Read

- [Linear issue]
- [GitHub PR]
- [Repository doc]
- [Obsidian note]

## Decisions Made

- [Decision]

## Codex Instructions Given

- [Instruction or task prompt summary]

## PRs Reviewed

- [PR # and result]

## Linear Issues Advanced

- [Issue ID and status/result]

## Open Questions

- [Question]

## Next Action

[Single next action if known.]

## Obsidian Notes Proposed

- [Suggested note and location]

## Dobromir Approvals

- Given: [Approval]
- Needed: [Approval]
```

## 7. Codex Task Summary Structure

Codex task summaries should be stored in:

```text
/13_Codex_Task_Summaries
```

Use this structure:

- Task title.
- Linear issue.
- Branch.
- PR.
- Files changed.
- What changed.
- Checks run.
- Review result.
- Merge result.
- Risks.
- Obsidian update needed.
- Lessons learned.

Recommended template:

```markdown
# Codex Task Summary - [DF-###] [Short Title]

## Task Title

[Task title]

## Linear Issue

[DF-### and link]

## Branch

[Branch name]

## Pull Request

[PR number and link]

## Files Changed

- [path] - [purpose]

## What Changed

[Summary]

## Checks Run

- [Check and result]

## Review Result

[Review status]

## Merge Result

[Not merged / Merged with SHA / Deferred]

## Risks

- [Risk]

## Obsidian Update Needed

[None / Summary only / New note / Update existing note / Approval required]

## Lessons Learned

- [Lesson]
```

## 8. Linear Issue Summary Structure

Linear issue summaries should be stored in:

```text
/11_Linear_Summaries
```

Use this structure:

- Issue ID/title.
- Team/project.
- Goal.
- Scope.
- Acceptance criteria.
- Approval gate.
- Status history.
- PR links.
- Outcome.
- Lessons learned.

Recommended template:

```markdown
# Linear Issue Summary - [DF-###] [Title]

## Issue

[DF-### - Title]

## Team / Project

[Team and project]

## Goal

[Goal]

## Scope

[Scope]

## Acceptance Criteria

- [Criterion]

## Approval Gate

[Approval gate]

## Status History

- YYYY-MM-DD - [Status change]

## PR Links

- [PR #]

## Outcome

[What happened]

## Lessons Learned

- [Lesson]
```

## 9. GitHub PR Summary Structure

GitHub PR summaries should be stored in:

```text
/12_GitHub_PR_Summaries
```

Use this structure:

- PR number/title.
- Linear issue.
- Branch.
- Files changed.
- Summary.
- Checks.
- Review decision.
- Merge SHA.
- Follow-up actions.
- Obsidian update needed.

Recommended template:

```markdown
# GitHub PR Summary - PR #[Number] - [Title]

## Pull Request

[PR number and link]

## Linear Issue

[DF-### or DK-###]

## Branch

[Branch name]

## Files Changed

- [path]

## Summary

[What changed]

## Checks

- [Check and result]

## Review Decision

[Approved / Changes requested / Deferred / Closed]

## Merge SHA

[SHA or not merged]

## Follow-Up Actions

- [Action]

## Obsidian Update Needed

[None / Summary only / New note / Existing note update / Approval required]
```

## 10. Weekly Retrospective Structure

Weekly retrospective notes should be stored in:

```text
/15_Foundry_Retrospectives
```

They should follow:

```text
foundry/system/workflows/codex-linear-github/foundry-weekly-retrospective-workflow-v1.md
```

Required sections:

- Foundry health.
- What worked.
- What did not work.
- Copy-paste friction.
- Automation candidates.
- Suggested Linear issues.
- Obsidian updates proposed.
- Dobromir decisions needed.

Recommended template:

```markdown
# Weekly Foundry Retrospective - YYYY-MM-DD

## Foundry Health

[Current state]

## What Worked

- [Item]

## What Did Not Work

- [Item]

## Copy-Paste Friction

- Source:
- Destination:
- What was copied:
- Why it was manual:
- Suggested fix:

## Automation Candidates

- [Candidate] - Safe to automate / Automate after review / Requires Dobromir approval / Do not automate

## Suggested Linear Issues

- Title:
- Problem:
- Goal:
- Scope:
- Acceptance criteria:
- Approval gate:
- Task classification:
- Suggested Codex prompt:

## Obsidian Updates Proposed

- [Note or folder]

## Dobromir Decisions Needed

- [Decision]
```

## 11. Naming Conventions

### Folder Naming

Recommended folder naming:

- Use numeric prefixes for top-level system folders.
- Use underscores instead of spaces for stable folder names.
- Use product names as explicit folder names.
- Avoid renaming top-level folders without knowledge architecture approval.

Examples:

```text
/03_Products/DK_Arkitekter_Growth_and_Sales_OS
/15_Foundry_Retrospectives
```

### Note Title Naming

Recommended note title patterns:

```text
Product Overview - [Product Name]
Product Specification - [Product Name] - [Version]
Feature Specification - [Product Name] - [Feature Name] - [Version]
Decision Record - YYYY-MM-DD - [Decision Title]
ChatGPT Session Summary - YYYY-MM-DD - [Topic]
Codex Task Summary - [Linear-ID] - [Short Title]
Linear Issue Summary - [Linear-ID] - [Short Title]
GitHub PR Summary - PR #[Number] - [Short Title]
Weekly Foundry Retrospective - YYYY-MM-DD
```

### Date Format

Use ISO date format:

```text
YYYY-MM-DD
```

### Linear Issue Reference Format

Use:

```text
DF-### - [Title]
DK-### - [Title]
```

When possible, include the Linear URL.

### GitHub PR Reference Format

Use:

```text
PR #[Number] - [Title]
```

When possible, include the GitHub PR URL and merge SHA after merge.

### Product / Repository Reference Format

Use:

```text
[Product Name] - [Repository owner/name]
```

Example:

```text
DK Arkitekter OS / Growth & Sales - dobkra/dk-arkitekter-os
```

## 12. Metadata / Frontmatter Recommendation

YAML frontmatter can help later search and automation, but it should stay simple.

Recommended optional fields:

```yaml
---
type: decision-record
status: proposed
date: 2026-05-14
product: Dobromir Foundry
linear_issue: DF-5
github_pr:
repo: dobkra/dk-arkitekter-os
approval_gate: knowledge-architecture
source: github
tags:
  - foundry
  - obsidian
---
```

Recommended field meanings:

- `type`: note type.
- `status`: draft, proposed, approved, superseded, archived, merged, done.
- `date`: ISO date.
- `product`: product or platform area.
- `linear_issue`: related Linear issue.
- `github_pr`: related GitHub PR.
- `repo`: related GitHub repository.
- `approval_gate`: relevant approval gate.
- `source`: source tool or origin.
- `tags`: simple discovery tags.

Metadata conventions are optional until Dobromir approves them. Making metadata mandatory requires knowledge architecture approval.

## 13. Cross-Linking Rules

Cross-links should make the Second Brain navigable without duplicating every source-of-truth detail.

Rules:

- Linear issue summaries should link to related GitHub PR summaries.
- GitHub PR summaries should link to related Codex task summaries.
- Codex task summaries should link to ChatGPT session summaries where ChatGPT created the task prompt or reviewed the PR.
- Decision records should link to source docs, related approvals, Linear issues, GitHub PRs, ChatGPT summaries, and Codex summaries.
- Product notes should link to parent Foundry governance where relevant.
- Weekly retrospectives should link to issues, PRs, summaries, and decision records created or recommended that week.
- Repository architecture notes should link to product notes and Foundry governance notes.

Avoid:

- Copying full repository docs into Obsidian when a link to GitHub is enough.
- Creating duplicate notes for the same decision.
- Treating an unapproved note as an approved decision.
- Linking to private or sensitive material without considering data safety.

## 14. Obsidian Write Policy

Manual writing is safe when Dobromir chooses the note location and content.

Obsidian-ready summaries are safe when they are prepared in ChatGPT, Codex, Linear, or GitHub without directly writing to the live vault.

Routine non-sensitive writes are allowed inside an approved Foundry Execution Packet when all of these are true:

- The packet authorizes Level 1 routine operating writes or scoped Level 2 controlled creation.
- The target folder already exists in the approved vault structure.
- The note type is already defined.
- The template or structure is already approved.
- The note records already-approved work, a standard summary, or a routine status/PR/task record.
- The note does not contain client/private data.
- The write does not move, rename, delete, archive, or restructure existing notes.

These routine notes should make Obsidian durable memory instead of a new approval bottleneck.

Broad, recurring, triggered, or cross-tool automatic writing to Obsidian requires:

- Knowledge architecture approval.
- Automation approval.
- Clear target folder.
- Clear note type.
- Metadata rules.
- Duplicate detection.
- Review path.
- Rollback plan.

No tool may restructure the vault without Dobromir approval.

Codex and ChatGPT may prepare Obsidian-ready summaries. They may write routine non-sensitive notes only when an approved packet authorizes the relevant autonomy level and the target folder, note type, and template are already defined.

Codex and ChatGPT must stop before:

- Changing the vault folder structure.
- Changing note taxonomy, metadata, templates, or linking rules.
- Moving, renaming, deleting, or archiving existing notes.
- Writing client/private data.
- Writing outside approved folders/templates.
- Treating a routine note as an approved decision record when Dobromir has not approved the decision.

## 15. Migration / Live Vault Safety

This specification does not restructure the live vault.

Future migration must be staged.

Rules:

- Existing notes must not be moved automatically.
- Existing notes must not be deleted automatically.
- Existing folders must not be renamed automatically.
- Top-level folder changes require knowledge architecture approval.
- Major migrations require a rollback plan.
- Migration should start with a small sample area before broad changes.
- Repository docs should remain in GitHub even if Obsidian summaries are created.
- Linear should track any approved migration work.

Recommended staged migration:

1. Dobromir reviews and approves the proposed vault structure.
2. Create a migration plan as a separate Linear issue.
3. Identify current live vault folders and notes.
4. Map existing notes to the proposed structure.
5. Create a small pilot folder or sample set only after approval.
6. Review the sample.
7. Adjust the structure if needed.
8. Expand only after approval.
9. Keep backups before moving notes.
10. Document the final migration in Obsidian and GitHub.

## 16. Open Questions

Dobromir should decide:

- Should the top-level folder model be approved as written?
- Should `/05_DK_Arkitekter` remain separate from `/03_Products/DK_Arkitekter_Growth_and_Sales_OS`?
- Should future product folders be created only after a Linear issue exists?
- Should metadata/frontmatter remain optional or become mandatory later?
- Which note types should be created as templates first?
- Should ChatGPT session summaries be stored after every major strategy/review session or only when decisions are made?
- Should every merged Foundry PR get an Obsidian PR summary, or only PRs that create durable knowledge?
- Should Codex task summaries be stored per task, per PR, or only for important tasks?
- Where should approval records live if they apply to multiple products?
- What should be the first live vault pilot area after approval?

## 17. Next Recommended Safe Issue

Recommended next documentation-only issue:

```text
Create Obsidian note templates for Foundry summaries and decision records
```

Purpose:

Create reusable Obsidian note templates for:

- Decision records.
- ChatGPT session summaries.
- Codex task summaries.
- Linear issue summaries.
- GitHub PR summaries.
- Weekly Foundry retrospectives.
- Product overviews.

This next issue should be documentation-only. It should not write to the live Obsidian vault, create folders, move notes, activate automation, or make metadata mandatory without Dobromir knowledge architecture approval.

## 18. Knowledge Architecture Approval Gate

Dobromir approval is required before:

- Changing the top-level vault folder model.
- Changing required note types.
- Making metadata conventions mandatory.
- Changing naming conventions.
- Creating automation that writes to Obsidian.
- Moving major knowledge areas.
- Creating, moving, renaming, or deleting live vault folders.
- Treating Obsidian as anything other than the permanent Second Brain.
- Allowing any tool to restructure Obsidian.

Until approval is given, this document is a proposed specification, not a live-vault migration instruction.

