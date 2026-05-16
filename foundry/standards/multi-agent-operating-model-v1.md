# Multi-Agent Operating Model V1

Linear alignment: DK-95 OPS-001.

## Purpose

DK Arkitekter OS / Growth & Sales is moving from a single-thread Codex workflow into a structured multi-agent operating system using ChatGPT, Codex, Linear, and GitHub.

This document defines how planning, execution, review, and approval should work when multiple AI-assisted roles contribute to the system.

This is documentation and workflow only. It does not approve product implementation.

## System hierarchy

1. Dobromir
2. Linear
3. GitHub
4. ChatGPT
5. Codex and scoped agents

Dobromir remains the final authority. Tools and agents may propose, document, implement approved scope, review, and report. They must not decide business direction, visual direction, client-facing promises, pricing, or brand positioning independently.

## Dobromir's role

Dobromir remains:

- Product Architect
- Visual Director
- Business Logic Architect
- Final Validation Layer

Only Dobromir can approve:

- design language
- brand direction
- UX philosophy
- business logic
- public copy
- pricing or quote behavior
- client-facing workflows
- automation activation
- final merge readiness when approval gates require it

No AI agent may override design language, business logic, brand direction, or UX philosophy.

## Linear as mission control

Linear is the daily operating agenda and source of truth for planning.

Linear owns:

- roadmap issues
- task status
- current priorities
- assigned agent
- approval gate required
- business requirements
- change requests
- dependencies
- daily review notes
- weekly replanning

Every meaningful task must exist in Linear before implementation. Every new business requirement, removal, edit, scope change, or logic change must be captured in Linear before implementation.

## GitHub as source of truth

GitHub stores approved docs, code, templates, and schemas. GitHub does not store raw private operating data.

GitHub owns:

- reviewed documentation
- implementation history
- pull requests
- branch history
- code review record
- approved templates
- safe example data

No direct commits to `main` are allowed. Every change must go through a branch and PR.

## Codex as execution infrastructure

Codex executes scoped work against the repository.

Codex may:

- read approved documentation
- implement approved scope
- update docs
- run tests and builds
- prepare PRs
- summarize results

Codex must not:

- invent business requirements
- expand scope without Linear capture
- change unrelated systems
- implement beyond approved scope
- bypass approval gates
- add private data or raw media
- activate external integrations without approval

## ChatGPT as orchestration and review layer

ChatGPT supports strategy, review, critique, and daily steering.

ChatGPT may:

- help Dobromir clarify direction
- prepare Codex prompts
- review outputs
- identify scope drift
- help translate visual feedback into Linear issues
- support daily review

ChatGPT must not:

- treat strategy discussion as implementation approval unless Dobromir uses the required approval phrase
- replace visual review
- replace business-function approval
- send public/client-facing content without approval

## Agent roles

The operating model uses these agent roles:

- Project Manager Agent
- Frontend Agent
- Backend Agent
- CMS / Content Agent
- SEO / Marketing Agent
- QA / Review Agent
- Security / Data Governance Agent

Each agent has a dedicated instruction file in `dk-arkitekter-os/project-governance/agents/`.

The Security / Data Governance Agent is documented in `dk-arkitekter-os/project-governance/agents/security-data-governance-agent.md`. This role reviews GDPR, privacy, access control, private-data boundaries, raw/source material safety, media rights, source attribution, and security-sensitive workflow risks before analytics, deployment, media workflows, client portal, quote, Organic Publishing Hub, or automation work expands.

## Approval gates

The mandatory approval phrases are:

- "Scope approved."
- "Visual approved."
- "Business function approved."
- "Client-facing content approved."
- "Automation approved."

Technical approval does not equal business approval. Code review does not equal visual approval. Visual review can create new business requirements. Those requirements must become Linear issues before implementation.

## No overlapping modification rule

Agents must not modify overlapping systems without explicit coordination.

Detailed parallel-work limits, safe tracks, exclusive ownership rules, and stop conditions are documented in `foundry/standards/parallel-agent-development-limits-v1.md`.

Examples:

- A Frontend Agent changing public layout must not also redefine business logic.
- A Backend Agent defining data behavior must not alter public copy.
- A CMS / Content Agent drafting article structure must not implement publishing automation.
- An SEO / Marketing Agent may define metadata recommendations but must not launch ads or add tracking.
- A QA / Review Agent should report issues, not silently expand the scope.
- A Security / Data Governance Agent should identify data, rights, privacy, access-control, and security blockers, not implement backend, storage, auth, publishing, analytics, ads, deployment, quote, portal, or automation behavior without a separate approved issue.

If multiple agents are needed, each task should have a clear owner, branch, file scope, and expected deliverable.

If ownership, dependencies, approval gates, or merge order are unclear, parallel work is not ready to start.

## Default operating flow

1. Dobromir and ChatGPT brainstorm direction.
2. Linear captures the task, business goal, implementation scope, restrictions, acceptance criteria, assigned agent, dependencies, output expectation, approval gate, and branch name.
3. GitHub documentation is updated if architecture, workflow, business logic, or data boundaries change.
4. Codex or the assigned agent implements only the approved scope.
5. QA / Review Agent checks scope, routes, responsive behavior, guardrails, and merge readiness.
6. Dobromir gives the required approval phrase.
7. PR is marked ready or merged only after the relevant gate is satisfied.

Definition of Ready and Definition of Done for this operating model are documented in `foundry/standards/definition-ready-done-v1.md`. Agents must use that document to decide whether work may start, whether a PR is merge-ready, and whether a Linear issue can be moved to Done.

Parallel-agent readiness and blocking rules are documented in `foundry/standards/parallel-agent-development-limits-v1.md`.

## Current guardrail

This model is active only after Dobromir approves and merges the documentation PR. Until then, it remains a proposed workflow.
