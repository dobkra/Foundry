# Foundry Codex Task Prompt Template

Use this template inside Linear issues so Codex can execute scoped Dobromir Foundry work without Dobromir manually rewriting the task.

This template is designed for copy-paste into Codex now and for future Linear-to-Codex delegation after DF-8 defines the supported delegation path. Until DF-8 is complete, Dobromir or ChatGPT still manually triggers Codex with this prompt.

For executable DK Arkitekter OS / Growth & Sales work, prefer the Foundry Execution Packet structure documented in `foundry/system/workflows/codex-linear-github/foundry-execution-packet-workflow-v1.md` and DK-specific alignment rules in `foundry/project-registry/dk-agenda-foundry-execution-alignment-v1.md`. This template may still be used as source material inside a packet, but DK execution should not rely on a loose plain prompt when a packet can be prepared.

## Copy-Paste Prompt

Copy this full block into Codex.

````markdown
# Codex Task Prompt

## Task Title

[Exact task title]

## Linear Issue ID

[DF-### and Linear URL]

## Product / Project

[Dobromir Foundry / DK Arkitekter OS / Growth & Sales / other product or project inside Foundry]

## Parent Platform Area

[Linear mission control / GitHub repository workflow / Codex execution workflow / ChatGPT strategy and review workflow / Obsidian Second Brain / product-specific work / business system / automation system]

## Context

[Explain the relevant history, current state, why this work matters, and how it connects to Dobromir Foundry.]

## Goal

[State the exact desired outcome. Make it concrete enough that Codex can verify completion without inventing scope.]

## Source of Truth

- Linear issue: [DF-###]
- GitHub repository: [owner/repo]
- Branch: [expected branch]
- Relevant repository docs:
  - [path]
- Related Obsidian knowledge:
  - [note or planned location, or "None available"]
- ChatGPT/session context:
  - [summary or "None"]

## Files or Areas to Inspect

- [path or area]
- [path or area]

## Exact Deliverables

- [Deliverable 1]
- [Deliverable 2]
- [Deliverable 3]

## Constraints

- Keep the task within the Linear issue scope.
- Use Dobromir Foundry as the parent platform.
- Treat DK Arkitekter OS / Growth & Sales as one product inside Dobromir Foundry.
- Treat Linear as mission control.
- Treat GitHub as source of truth for code and repository documentation.
- Treat Obsidian as the Second Brain and permanent knowledge vault.
- Treat Codex as the execution agent.
- Treat ChatGPT as the strategy, reasoning, review, and documentation layer.
- Treat Dobromir as final authority.
- Do not infer business, visual, pricing, legal, launch, or release decisions.

## Out of Scope

- [Out-of-scope item]
- [Out-of-scope item]
- [Out-of-scope item]

## Approval Gates

Required gates:

- [Scope approval / Visual approval / Business function approval / Client-facing content approval / Automation approval / Knowledge architecture approval / Launch approval / Full release approval / Direction-change approval / Retrospective action approval]

Approval status:

- [Approved / Missing / Not required]

## Task Classification

[A. Autonomous execution allowed / B. Execute then request review / C. Stop and ask Dobromir first]

Classification reason:

[Explain why this task belongs in the selected class.]

## Autonomy Level

[Level 0 - Observe and report / Level 1 - Routine operating writes allowed after workflow approval / Level 2 - Controlled creation allowed after workflow approval / Level 3 - Requires Dobromir approval / Level 4 - Forbidden without explicit special approval]

Authorized routine actions:

- [Active Linear issue status updates / active-issue comments / PR links / completion summaries / approved non-sensitive Obsidian notes / draft follow-up issue proposals / Review Inbox candidates / None]

## Stop Conditions Requiring Dobromir Input

Stop and ask Dobromir if:

- Scope expands beyond this prompt.
- Acceptance criteria are incomplete or contradictory.
- Product or business direction must be inferred.
- Visual direction changes are required.
- Client-facing content changes are required.
- Pricing, quote, sales funnel, contract, or legal meaning changes are required.
- Automation would send, delete, publish, invoice, update client records, broadly update Linear outside the active approved packet, update GitHub automatically, or write to Obsidian outside approved folders/templates and packet boundaries.
- Launch, release, deploy, merge, or external publishing approval is needed.
- Obsidian knowledge architecture would change.
- The task requires starting or actioning another Linear issue outside an approved scoped Level 2 draft-proposal boundary.

## GitHub Branch Naming

Use:

```text
[LINEAR-ID]/short-kebab-description
```

Expected branch:

```text
[DF-###/short-kebab-description]
```

## PR Title Format

Use:

```text
[DF-###] Short task title
```

Expected PR title:

```text
[DF-###] [Short title]
```

## Testing / Check Requirements

Run applicable checks:

- `npm run lint:docs --if-present`
- `npm run typecheck` if code or typed config changed, or if the repository normally requires it.
- `npm run build` if application behavior, routes, or build-relevant files changed.
- `git diff --check`

If a check is not applicable or cannot run, report why.

## Obsidian Documentation Handoff

After meaningful work, prepare an Obsidian-ready summary with:

- Short summary.
- What changed.
- Why it changed.
- Decisions made.
- Open questions.
- Linear issue link.
- GitHub PR link.
- Suggested Obsidian note location.
- Suggested tags.
- Whether the note is allowed within the approved packet scope.
- Whether Dobromir approval is required before storing.

Routine non-sensitive notes may be written only when the task authorizes Level 1 or scoped Level 2 activity and the target folder, note type, and template are already defined. Stop before changing vault architecture, moving/deleting notes, or writing sensitive/private data.

## Reporting Format

Report:

- Files changed.
- What was improved.
- Checks run and results.
- Linear issue status.
- GitHub branch and PR.
- Obsidian documentation handoff.
- Remaining manual steps.
- Risks.
- Dobromir decisions needed.
- Recommended next single task.

## Final Do Not Do Safety List

- Do not expand scope.
- Do not start or action another Linear issue outside an approved scoped Level 2 draft-proposal boundary.
- Do not activate automation.
- Do not create unsupported Linear configuration changes.
- Do not customize Linear statuses unless explicitly approved.
- Do not create native Linear templates unless explicitly approved.
- Do not activate GitHub PR templates unless explicitly approved.
- Do not change product behavior unless explicitly approved.
- Do not change pricing, quote, legal, sales, client-facing, or brand logic without approval.
- Do not deploy.
- Do not release.
- Do not merge without approval.
- Do not publish externally.
- Do not send emails.
- Do not restructure Obsidian, move/delete notes, write sensitive/private data, or write outside approved folders/templates.
````

## Prompt Quality Checklist

Before using this prompt, confirm:

- Linear issue ID and URL are included.
- Product/project and parent platform area are clear.
- Source of truth is listed.
- Files or areas to inspect are specific.
- Deliverables are concrete.
- Constraints and out-of-scope boundaries are explicit.
- Approval gates and task classification are selected.
- Stop conditions are strong enough to prevent scope expansion.
- GitHub branch and PR title expectations are present.
- Testing/check expectations are present.
- Obsidian documentation handoff expectations are present.
- Final safety list is preserved.

If these fields are incomplete, the issue is not Codex-ready.

