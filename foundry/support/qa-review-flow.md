# QA Review Flow

Linear alignment: DK-95 OPS-001.

## Purpose

QA review protects scope, guardrails, visual quality, route behavior, and merge readiness. It does not replace Dobromir's final approval.

Definition of Ready and Definition of Done rules are documented in `foundry/standards/definition-ready-done-v1.md`. QA review should use that document when deciding whether work is ready for review, blocked, merge-ready, or eligible to move to Done.

## QA review checklist

Check:

- Linear issue is linked.
- Assigned agent is named.
- Scope matches the issue.
- Out-of-scope items were not added.
- Required approval gate is identified.
- Work level and autonomy level are identified when the PR came from a Foundry Execution Packet.
- Authorized routine actions were not exceeded.
- Guardrails are confirmed.
- Tests/checks were run.
- Screenshots or preview notes exist when UI changed.
- Parallel ownership, dependencies, and merge order are documented when more than one branch or agent is active.
- Security / Data Governance review is present when the PR touches privacy, access control, private data, raw/source material, media rights, source attribution, secrets, deployment, analytics/tracking, client portal data, quote/pricing data, or automation data flows.
- Deployment and environment rules in `dk-arkitekter-os/growth-and-sales/modules/governance-data-integrations/deployment-environment-strategy-v1.md` are followed when the PR touches Hostinger, preview/staging, production, environment variables, secrets, rollback, provider settings, deployment approval, or full release approval.

## Route checks

For website work, verify relevant routes:

- route returns successfully
- expected page still loads
- language equivalents still work
- internal pages are not accidentally exposed or broken
- anchors and navigation still behave as expected

## Responsive checks

For UI work, check:

- desktop layout
- tablet/narrow layout when relevant
- mobile layout
- header behavior
- footer position
- text wrapping
- button alignment
- no incoherent overlap

## Visual consistency

Review:

- typography consistency
- spacing rhythm
- color logic
- visual hierarchy
- design-language alignment
- public-facing polish
- whether the change respects Dobromir's visual direction

Visual review can create new business requirements. Any such requirement must become a Linear issue before implementation.

## Scope drift

Flag scope drift if the PR:

- changes routes without approval
- changes public copy without approval
- adds backend or workflow behavior outside scope
- changes business logic
- adds tracking, ads, email, CMS, auth, database, quote logic, or automation without approval
- touches unrelated modules
- overlaps files, routes, models, or workflows owned by another active Linear issue or branch
- performs actions not authorized by the packet autonomy level

## Guardrail validation

Confirm the PR does not add:

- backend features unless approved
- database dependency unless approved
- authentication unless approved
- CMS unless approved
- analytics or tracking unless approved
- ads integration unless approved
- email sending unless approved
- quote logic unless approved
- raw media or private data
- public/client-facing text without approval
- secrets, API keys, private data exports, source drawings, archive PDFs, quote snapshots, pricing files, ad invoices, or client-sensitive screenshots

## Merge readiness decision

Return one decision:

- Safe to merge after required approval
- Needs Dobromir visual review
- Needs business-function approval
- Needs client-facing content approval
- Needs automation approval
- Needs deployment approval
- Needs full release approval
- Needs Security / Data Governance review
- Needs correction before review
- Blocked

Explain the reason briefly and reference the files, routes, or Linear issues involved.

Use `foundry/standards/parallel-agent-development-limits-v1.md` when deciding whether overlapping or parallel work is safe to merge.

Use `foundry/project-registry/dk-agenda-foundry-execution-alignment-v1.md` when reviewing DK PRs that came from a Foundry Execution Packet.
