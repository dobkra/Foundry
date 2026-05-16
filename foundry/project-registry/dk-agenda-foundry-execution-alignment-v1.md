# DK Agenda And Foundry Execution Packet Alignment V1

Linear alignment: DK-112 STRATEGY-011 Align DK Arkitekter Agenda With Foundry Execution Packet Workflow.

Assigned agent: Project Manager Agent.

Work level: Bridge/mixed.

Approval gate: Scope approved.

Autonomy level: Level 1 - Routine operating writes allowed after workflow approval.

## Purpose

This document defines how DK Arkitekter OS / Growth & Sales agenda work should align with the Dobromir Foundry Execution Packet workflow.

The goal is to make future DK Arkitekter Codex work start from a complete Foundry Execution Packet instead of a loose plain prompt.

This is documentation and workflow governance only. It does not implement product features, change website routes, change UI, add backend, add CMS, add database, add auth, add upload/storage, add analytics, add ads, add email, add quote logic, add client portal behavior, deploy, release, publish, merge, or activate automation.

## Source Documents

Use these source documents together:

- `AGENTS.md`
- `foundry/system/workflows/codex-linear-github/foundry-execution-packet-workflow-v1.md`
- `foundry/system/workflows/codex-linear-github/handoff-queue/foundry-handoff-file-execution-queue-v1.md`
- `foundry/templates/foundry-codex-task-prompt-template.md`
- `foundry/templates/foundry-linear-issue-template.md`
- `foundry/templates/foundry-pr-template.md`
- `foundry/system/projects/foundry/system/projects/foundry-runtime/README.md`
- `foundry/standards/multi-agent-operating-model-v1.md`
- `foundry/standards/definition-ready-done-v1.md`
- `foundry/standards/parallel-agent-development-limits-v1.md`
- `foundry/system/workflows/codex-linear-github/linear-workflow.md`
- `foundry/system/workflows/codex-linear-github/github-workflow.md`
- `foundry/support/qa-review-flow.md`
- `foundry/system/workflows/codex-linear-github/daily-linear-control-v1.md`
- `dk-arkitekter-os/project-governance/roadmap.md`

The Foundry packet workflow controls packet shape, autonomy levels, stop conditions, and review routing. The DK workflow docs control product-specific guardrails, route/content/model boundaries, and approval gates.

## Operating Principle

DK Arkitekter OS / Growth & Sales is one product inside Dobromir Foundry.

Therefore:

- Foundry provides the execution packet structure.
- DK Arkitekter provides product-specific scope, source documents, guardrails, and approval gates.
- Linear remains mission control.
- GitHub remains source of truth for repository state.
- ChatGPT prepares and reviews packets.
- Codex executes only the approved packet.
- Dobromir remains final authority.

## Required Future DK Codex Prompt Format

Future DK Arkitekter Codex work should use the Foundry Execution Packet structure from `foundry/system/workflows/codex-linear-github/foundry-execution-packet-workflow-v1.md`.

A DK packet should include:

- Packet title.
- Linear issue ID and status.
- Work level: Foundry-level, DK Arkitekter product-level, or bridge/mixed.
- Autonomy level.
- Authorized routine actions.
- Current state verified.
- Source-of-truth files.
- Exact task.
- Allowed files and areas.
- Forbidden files and areas.
- Required approval gates.
- Stop conditions.
- Branch name.
- Checks to run.
- Commit and PR expectations.
- Linear update expectations.
- Reporting format.

Loose prompts are still allowed for brainstorming, review, or discussion, but executable Codex work should be converted into a packet before work starts.

## Work Level Rules For DK Tasks

Use these work levels:

- Foundry-level: changes parent-platform governance, templates, handoff workflows, repository architecture, Obsidian/Second Brain architecture, or cross-product execution rules.
- DK Arkitekter product-level: changes DK product docs, product workflows, application code, website routes, public content, content models, business logic, or DK agent rules.
- Bridge/mixed: changes both Foundry execution governance and DK product operating rules.

When the work level is unclear, stop and ask before editing.

## Autonomy Rules For DK Tasks

DK tasks may use Foundry autonomy levels, but only inside the approved packet boundary.

### Level 0

Observe and report only.

Allowed:

- read Linear, GitHub, repo docs, and relevant state
- summarize status
- prepare review findings
- draft a packet or recommendation

Not allowed:

- repository changes
- Linear writes
- GitHub writes
- Obsidian writes

### Level 1

Routine operating writes for the active issue only.

Allowed when the packet approves it:

- move the active DK issue through expected states
- add comments to the active DK issue
- link the active PR to the active DK issue
- create a scoped branch
- commit scoped docs/code changes
- push the branch
- open a PR
- add standard PR/status summaries

Not allowed:

- merge
- start another issue
- bulk edit the backlog
- change Linear workflow/settings
- change GitHub settings
- activate automation
- deploy, release, publish, send, or integrate externally

### Level 2

Controlled draft creation only when the packet explicitly allows it.

Allowed examples:

- draft follow-up issue proposals
- draft Review Inbox candidates
- prepare Obsidian-ready summaries

Level 2 output must not be actioned automatically. It is draft material for review.

### Level 3

Requires Dobromir approval.

Examples:

- creative, visual, brand, business, pricing, legal, quote, sales, public-content, client-facing, launch, release, deployment, external integration, broad automation, repository architecture, or knowledge architecture decisions

### Level 4

Forbidden without explicit special approval.

Examples:

- destructive deletes
- mass moves
- private/client data writes
- irreversible external actions
- payments or invoicing
- production deployment/release
- broad autonomous agent execution across many issues

## Manual-Only Automation Boundary

This alignment does not enable automation.

The DK Arkitekter agenda must remain manual and approval-gated unless a future approved packet explicitly changes that boundary.

Not enabled:

- Linear-to-Codex trigger
- webhook
- scheduler
- background agent
- automatic branch creation
- automatic PR creation
- auto-merge
- auto-deploy
- automatic issue closure
- automatic Obsidian write
- automatic publishing
- automatic email, social, ad, quote, booking, CRM, or external-system action

Codex may perform routine operating writes only when Dobromir or ChatGPT provides an approved packet in the current session.

## DK Linear Agenda Readiness

A DK issue is Codex-ready only when Linear records or the packet states:

- business goal
- exact scope
- out of scope
- affected files or areas
- assigned agent
- work level
- autonomy level
- required approval gates
- authorized routine actions
- stop conditions
- source-of-truth files
- branch name
- checks
- PR expectation
- reporting format

If any of these fields are missing, the daily review may recommend a packet, but Codex should not start execution.

## Daily Review Alignment

Daily review should now check:

- whether the next issue has a complete Foundry Execution Packet
- whether the work level is correct
- whether autonomy level is listed
- whether Level 1 routine writes are authorized for the active issue
- whether any Level 3 or Level 4 decision is hidden in the task
- whether source-of-truth files are listed
- whether allowed and forbidden files are clear
- whether stop conditions are strong enough
- whether there is an open conflicting PR
- whether main is clean and synced before branching

Daily review should not start work just because an issue is Todo. It should recommend or prepare the next packet when the issue is ready.

## Weekly Replan Alignment

Weekly replan should:

- keep DK issues grouped by current operating priority
- identify which issues are packet-ready
- identify which issues need Dobromir decisions before packet creation
- keep future-only modules in Backlog or Todo
- avoid moving multiple implementation issues into active work without ownership and merge-order clarity
- preserve the manual-only automation boundary

## Agenda Hygiene Rules

Use these rules when reviewing the DK backlog.

### Active

Active means the issue is In Progress or In Review and has a current owner, branch, PR, or review task.

There should be only a small number of active issues at once.

### Todo

Todo means planned or ready but not active. Todo issues may be selected for packet creation after daily review confirms priority and readiness.

### Backlog

Backlog means future roadmap item, not scheduled now. Backlog items should not be pulled into active work without explicit scope and a packet.

### Blocked

Blocked means a required decision, approval gate, source document, dependency, or clean GitHub/Linear state is missing.

Blocked issues should say what is missing and who owns the next decision.

### Superseded

Superseded means a later PR, document, or issue replaced the older work.

Superseded issues or PRs should be closed only with explicit approval and a comment linking the replacement.

### Duplicate

Duplicate means another Linear issue already represents the same task.

Duplicate issues should not be merged into active work. Use the canonical issue.

### Future-only

Future-only means useful later, but not part of the current sprint or implementation track.

Future-only issues should stay in Backlog or Todo and should not receive branches until a packet is approved.

## PR And Merge Rules

Every DK packet that changes the repository should produce a PR unless the packet is explicitly read-only.

The PR must include:

- Linear issue
- work level
- assigned agent
- summary
- scope
- out of scope
- files changed
- checks run
- approval gates
- guardrails
- reviewer notes

Codex must not merge from a normal execution packet. Merge requires a separate explicit Dobromir merge instruction.

## Handoff Queue Relationship

The local `foundry/system/projects/foundry-runtime/` queue is a handoff surface, not source of truth.

It may hold temporary packets, Codex results, and review summaries in ignored live files.

It must not contain:

- client/private data
- raw media
- source drawings
- PDFs
- quote snapshots
- pricing files
- ad invoices
- secrets
- permanent source-of-truth docs

DK execution packets may be pasted directly into Codex or placed in the ignored runtime inbox, but only repository docs and merged PRs become GitHub source of truth.

## Stop Conditions

Stop before continuing if:

- the task requires implementation not approved by the packet
- the task requires changing app behavior
- the task requires changing GitHub or Linear settings
- the task requires automation activation
- the task requires deployment, release, publishing, email, ads, analytics, quote, portal, upload, storage, database, auth, or external integration implementation
- the task requires public/client-facing content
- raw/private/source material would enter GitHub
- another issue must be started
- backlog items would need bulk mutation
- there is an open conflicting PR
- the local working tree is not clean
- the packet omits work level, autonomy level, approval gates, source files, branch, or stop conditions

Stopping is correct when the packet is incomplete or risky.

## Default DK Execution Flow

1. Dobromir and ChatGPT clarify direction.
2. Linear captures the issue and approval gates.
3. ChatGPT prepares a Foundry Execution Packet for the DK issue.
4. Codex validates current state, open PRs, branch state, source files, and stop conditions.
5. Codex moves only the active issue through authorized Level 1 states.
6. Codex creates the scoped branch.
7. Codex edits only allowed files.
8. Codex runs checks.
9. Codex commits, pushes, and opens a PR.
10. Codex links the PR to Linear and moves the active issue to In Review when authorized.
11. ChatGPT and Dobromir review the PR against Linear, GitHub, and the packet.
12. Merge happens only after explicit Dobromir merge approval.

## Default Rule

If a DK task is ready enough to execute, it is ready enough to be expressed as a Foundry Execution Packet.

If it cannot be expressed as a complete packet, it is not Codex-ready.
