# Foundry Linear Issue Template

Use this template for executable Dobromir Foundry work. Linear is mission control, so the issue must be specific enough for Codex to execute without Dobromir manually rewriting the task.

This template is the repository source of truth for Foundry issue structure. If native Linear issue templates are not available or not configured, paste the issue-body section into the Linear description and set the Linear fields manually.

For DK Arkitekter OS / Growth & Sales execution, the Codex Task Prompt section should be converted into a Foundry Execution Packet before Codex starts. See `foundry/project-registry/dk-agenda-foundry-execution-alignment-v1.md`.

## Native Linear Fields

Set these fields in Linear before the issue is considered ready for Codex:

- Team: `Dobromir Foundry`
- Initiative: `Dobromir Foundry`
- Project: `Foundry Operating System` or the relevant product/project inside Foundry
- Status: use the current team status that best matches the work state
- Priority: `Low`, `Normal`, `High`, or `Urgent`
- Labels: use available labels only; do not create new labels unless the task explicitly approves it
- Assignee: Dobromir, Codex/delegated agent, or the human owner
- Related links: GitHub branch, GitHub PR, Obsidian note, source document, or relevant ChatGPT summary

## Issue Body

Copy this section into the Linear issue description.

```markdown
## Product / Project Name

Dobromir Foundry / [Product or project inside Foundry]

## Parent Platform Area

[Linear mission control / GitHub repository workflow / Codex execution workflow / ChatGPT strategy and review workflow / Obsidian Second Brain / DK Arkitekter OS / Growth & Sales / Future product or tool / Business system / Automation system]

## Related Obsidian Note or Folder

[Existing note, proposed note, or "None yet"]

## Problem

[What is broken, missing, inefficient, unclear, or manually copy-pasted today?]

## Goal

[What should be true when this issue is complete?]

## Scope

[What is included?]

## Out of Scope

[What must not be changed, built, automated, published, merged, deployed, released, or decided by Codex?]

## Acceptance Criteria

- [ ] [Clear, testable criterion]
- [ ] [Clear, testable criterion]
- [ ] [Clear, testable criterion]

## Task Classification

[A. Autonomous execution allowed / B. Execute then request review / C. Stop and ask Dobromir first]

## Autonomy Level

[Level 0 - Observe and report / Level 1 - Routine operating writes allowed after workflow approval / Level 2 - Controlled creation allowed after workflow approval / Level 3 - Requires Dobromir approval / Level 4 - Forbidden without explicit special approval]

Authorized routine actions:

- [Active issue status updates / active-issue comments / PR links / completion summaries / approved non-sensitive Obsidian notes / draft follow-up proposals / Review Inbox candidates / None]

## Approval Gate Required

[Scope approval / Visual approval / Business function approval / Client-facing content approval / Automation approval / Knowledge architecture approval / Launch approval / Full release approval / Direction-change approval / Retrospective action approval]

## Codex Task Prompt

Task title:

Context:

Goal:

Related Obsidian knowledge:

Files or areas to inspect:

Exact deliverables:

Constraints:

Out of scope:

Approval gates:

Testing/check requirements:

Required documentation update:

Reporting format:

Stop conditions where Dobromir input is required:

## Review Checklist

- [ ] Scope stayed within the issue.
- [ ] Acceptance criteria are satisfied.
- [ ] Approval gates are respected.
- [ ] Tests/checks are documented where relevant.
- [ ] GitHub branch/PR is linked when repository work exists.
- [ ] Obsidian documentation handoff is included if durable knowledge was created.
- [ ] Dobromir input is requested where required.

## Risks

- [Risk]
- [Risk]

## Related GitHub Branch / PR

Branch:

PR:

## Required Obsidian Documentation Update

[None required / Summary only / New note required inside approved folder/template / Existing routine note update required / Dobromir approval required before storing]

Suggested location:

## Current Foundry Work State

[Idea Inbox / Scope Draft / Awaiting Dobromir Input / Ready for Codex / In Codex / PR Created / Review Needed / Obsidian Documentation Needed / Retrospective Review Needed / Awaiting Dobromir Approval / Change Requested / Approved / Ready to Merge / Done / Released / Blocked]

## Stop Conditions for Dobromir Input

Stop and ask Dobromir if:

- Scope expands.
- Business logic changes.
- Visual direction changes.
- Client-facing content changes.
- Automation would act across tools or external systems.
- Launch/release approval is needed.
- Obsidian knowledge architecture would change, notes would be moved/deleted, or sensitive/private data would be written.
- Codex would need to infer product direction, pricing, legal meaning, brand direction, or client-facing communication.
```

## Task Classification Guide

### A. Autonomous Execution Allowed

Use for low-risk work with clear scope:

- Internal documentation cleanup.
- Typo fixes.
- Formatting improvements.
- Missing internal references.
- Test additions.
- Minor refactors with no behavior change.
- Non-client-facing technical improvements.
- Structured summaries from already-approved work.
- Level 1 routine operating writes inside an approved Execution Packet.

### B. Execute Then Request Review

Use for work Codex or ChatGPT can draft, but Dobromir should review before final acceptance:

- New workflow documents.
- New internal utility drafts.
- New internal automation proposals.
- Product documentation drafts.
- Obsidian template drafts.
- Weekly retrospective drafts.
- Suggested Linear issues from retrospective findings.
- Scoped Level 2 draft proposals inside an approved Execution Packet.

### C. Stop and Ask Dobromir First

Use for work requiring Dobromir authority before execution:

- Visual direction changes.
- Public website changes.
- Client-facing text.
- Pricing, quote, sales funnel, legal, or contract logic.
- Email sending.
- Social media publishing.
- Automation that sends, deletes, publishes, invoices, or changes client records.
- Major architecture change.
- Full launch or full release.
- Business direction changes.
- Major Obsidian Second Brain structure changes.
- Broad automation that creates, updates, closes, assigns, or moves Linear issues without approval.
- Automation that changes GitHub branches, PRs, releases, deployments, or merge state without approval.

## Readiness Checklist

An issue is ready for Codex only when:

- Product/project name is set.
- Parent platform area is clear.
- Problem and goal are concrete.
- Scope and out-of-scope boundaries are explicit.
- Acceptance criteria are testable.
- Task classification is selected.
- Autonomy level is selected.
- Approval gate is selected.
- Codex Task Prompt is complete enough to execute.
- Related GitHub branch/PR field is prepared when repository work is expected.
- Required Obsidian documentation update is defined.
- Stop conditions identify when Dobromir input is required.

If any of these are missing, keep the issue in planning or waiting state.

