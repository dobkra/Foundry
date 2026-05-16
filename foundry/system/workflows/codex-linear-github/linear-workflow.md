# Linear Workflow

Linear alignment: DK-95 OPS-001.

## Purpose

Linear is mission control for DK Arkitekter OS / Growth & Sales. Every meaningful task must exist in Linear before implementation. Every new business requirement, removal, edit, scope change, or logic change must be captured in Linear before implementation.

Ongoing business requirement intake and change control is defined in `dk-arkitekter-os/project-governance/workflows/business-requirement-intake-and-change-control-v1.md`. Use that workflow to classify Dobromir input, route it to Linear or GitHub, and decide when Codex should continue autonomously versus stop for a real decision gate.

## Required issue fields

Every implementation, documentation, review, or planning issue should include:

- Business goal
- Implementation scope
- Restrictions
- Acceptance criteria
- Assigned agent
- Dependencies
- Output expectation
- Approval gate
- Branch name
- Work level and autonomy level when Codex execution is expected
- Foundry Execution Packet or equivalent packet fields for executable DK work
- Parallel ownership boundary when more than one agent or branch is active

## Issue template

```markdown
## Business goal

Why this work matters for DK Arkitekter OS / Growth & Sales.

## Implementation scope

What is being changed.

## Out of scope / restrictions

What must not be changed or built.

## Acceptance criteria

- Clear, testable completion criteria.
- Guardrails confirmed.
- Required approval phrase captured.

## Assigned agent

Project Manager Agent / Frontend Agent / Backend Agent / CMS-Content Agent / SEO-Marketing Agent / QA-Review Agent / Security / Data Governance Agent.

## Dependencies

Linear issues, PRs, documents, assets, approvals, or decisions required first.

## Output expectation

Docs, code, PR, screenshots, route checks, test results, workflow demo, or review report.

## Approval gate

Scope approved. / Visual approved. / Business function approved. / Client-facing content approved. / Automation approved.

## Branch name

LINEAR-ID/short-kebab-description

## Work level and autonomy level

Foundry-level / DK Arkitekter product-level / Bridge/mixed.

Level 0 / Level 1 / Level 2 / Level 3 / Level 4.

## Execution packet

Use the Foundry Execution Packet structure for executable Codex work. See `foundry/project-registry/dk-agenda-foundry-execution-alignment-v1.md`.
```

## Status guidance

- Backlog: future roadmap, not scheduled now.
- Todo: planned or ready but not active.
- In Progress: active today or this week.
- In Review: waiting for approval, PR review, visual review, business decision, or merge decision.
- Done: completed and merged or approved.
- Canceled: removed or no longer planned.
- Duplicate: duplicate issue.

## Approval labels

Use labels to make review state visible:

- `needs-scope-approval`
- `needs-visual-review`
- `needs-business-approval`
- `needs-client-facing-approval`
- `needs-automation-approval`
- `waiting-for-dobromir`
- `approved-by-dobromir`
- `change-request`
- `business-requirement`
- `requirement-intake`
- `decision-record`
- `idea-candidate`
- `scope-change`
- `superseded`
- `needs-dobromir-input`
- `approved-for-execution`

## Linear rules

- Every meaningful task must exist in Linear.
- Every new business requirement must be captured in Linear.
- Classify Dobromir input using `dk-arkitekter-os/project-governance/workflows/business-requirement-intake-and-change-control-v1.md` before deciding whether to create an issue, update an issue, comment, cancel/supersede a stale issue, or stop for a decision memo.
- Every Codex build task should link to a Linear issue.
- Every PR should reference the Linear issue.
- Do not close an issue until the PR is merged and the relevant approval gate is satisfied.
- Do not implement scope discovered during visual review until it is captured in Linear.
- Add Security / Data Governance Agent review when the issue touches GDPR, privacy, access control, private data, raw/source material, media rights, source attribution, secrets, deployment, analytics/tracking, client portal data, quote/pricing data, or automation data flows.

## Definition of Ready and Done

Use `foundry/standards/definition-ready-done-v1.md` as the source of truth for readiness and completion.

Linear work is not ready to start if required fields, dependencies, restrictions, branch name, or approval gate are missing.

Executable DK Codex work is not ready if the Foundry Execution Packet fields are missing or if the packet would authorize work outside the active issue boundary.

Linear work is not Done until the output is delivered, the required approvals are satisfied, the PR is merged when applicable, and the issue has a final completion comment.

## Parallel work control

Use `foundry/standards/parallel-agent-development-limits-v1.md` before moving multiple related issues into active work.

Parallel work should not start unless Linear records each issue's owner, branch, affected files/modules/routes, dependencies, approval gate, and merge order. If those fields are missing, keep the issue in Todo or In Progress and document the blocker.
