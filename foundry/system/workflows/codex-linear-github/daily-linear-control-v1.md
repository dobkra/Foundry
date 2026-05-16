# Daily Linear Control V1

Linear alignment: DK-15 DAILY-001.

## Purpose

Linear is the daily agenda and source of truth for planning DK Arkitekter OS / Growth & Sales. GitHub stores approved docs, code, and schemas. Codex executes scoped build and documentation tasks. ChatGPT supports strategy, review, approval, and daily steering. Dobromir approves business direction, pricing, content, public pages, quotes, and client-facing outputs.

## Daily review trigger

The daily review starts when Dobromir writes "daily review" in ChatGPT or opens the recurring Linear issue.

## Daily review checks

Every daily review checks:

- active issues
- what waits for Dobromir
- what waits for Codex
- PRs
- approvals
- blockers
- security, privacy, private-data, rights, attribution, and access-control blockers
- parallel-work overlap risks
- today's top 3
- Linear moves
- next Codex prompt
- tomorrow's recommended step
- whether the next Codex task is expressed as a Foundry Execution Packet
- whether any deployment, hosting, production, rollback, or release work follows `dk-arkitekter-os/growth-and-sales/modules/governance-data-integrations/deployment-environment-strategy-v1.md`
- whether new Dobromir input should be routed through `dk-arkitekter-os/project-governance/workflows/business-requirement-intake-and-change-control-v1.md`

## Daily output format

Use this format:

1. Today's status: on track / ahead / blocked
2. Done since last review
3. Needs Dobromir
4. Needs Codex
5. Needs approval
6. Today's top 3 tasks
7. Linear moves needed
8. Next Codex prompt
9. Tomorrow's recommended next step

## Weekly replan

At the end of each week:

- close done work
- move unfinished work
- update next cycle
- pull forward approved work if ahead
- reschedule blocked work
- define next week's priorities
- confirm what Codex should build next
- confirm what Dobromir must provide next

## Operating rules

- Every strategic decision should become a GitHub document or Linear issue.
- Every Codex build task should be linked to a Linear issue.
- Every build should happen only after scope approval.
- Public content, pricing, legal text, quotes, ad launches, and client-facing outputs require Dobromir approval before use.
- Raw media, PDFs, photos, videos, drawings, ad invoices, client data, and private pricing data must not be committed to GitHub.
- Issues that touch GDPR, privacy, access control, private data, raw/source material, media rights, source attribution, deployment secrets, analytics/tracking data, client portal data, quote/pricing data, or automation data flows should include Security / Data Governance Agent review.
- Daily review should use `foundry/standards/definition-ready-done-v1.md` to decide whether a task is ready to start and whether completed work can be moved to Done.
- Daily review should use `foundry/standards/parallel-agent-development-limits-v1.md` before allowing multiple agents or branches to work in related systems.
- Daily review should use `foundry/project-registry/dk-agenda-foundry-execution-alignment-v1.md` before starting Codex work. The next Codex prompt should be a Foundry Execution Packet with work level, autonomy level, authorized routine actions, source-of-truth files, allowed/forbidden files, stop conditions, branch name, checks, and reporting format.
- Daily review should use `dk-arkitekter-os/project-governance/workflows/business-requirement-intake-and-change-control-v1.md` to classify new Dobromir input as a decision, requirement, idea/candidate, scope change, rejection/removal, or approval gate before creating or updating issues.

## Mandatory approval gates

Daily review must check whether the next task has the correct approval gate before Codex starts or before a PR is marked ready to merge.

Approval types and required phrases:

- Scope approval: required before implementation. Dobromir must approve what is being built, what is not being built, affected routes or modules, business purpose, assumptions, and guardrails. Required phrase: "Scope approved."
- Visual approval: required for public UI, landing pages, admin interfaces, visual workflows, and any user-facing layout before merge. Required phrase: "Visual approved."
- Business-function approval: required for backend, Admin/Growth Studio, lead qualification, booking, client portal, content engine, newsletter, social, ads, analytics, quote generator, pricing, workflow logic, data models, and process automation before implementation. Required phrase: "Business function approved."
- Client-facing content approval: required for public copy, emails, quotes, offers, legal/terms, pricing, ads, newsletters, social posts, and website copy before use. Required phrase: "Client-facing content approved."
- Automation approval: required before any automatic sending, publishing, posting, ad launching, quote sending, booking, CRM update, data sync, or external integration action is activated. Required phrase: "Automation approved."
- Deployment approval: required before production deployment, production hosting changes, production domain changes, production environment changes, or production rollback. Required phrase: "Deployment approved."
- Full release approval: required before a complete product version, major platform update, public launch, or operational release package ships. Required phrase: "Full release approved."

Daily review should also enforce these principles:

- Technical approval does not equal business approval.
- Code review does not equal visual approval.
- Visual review can create new business requirements.
- Creative/design review is part of business-function validation.
- Every new business requirement, change, removal, edit, or logic change must be captured in Linear before implementation.

Recommended Linear labels:

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

Approval workflow:

1. Brainstorm with Dobromir.
2. Capture agreed scope in Linear.
3. Create or update GitHub documentation if architecture, workflow, business logic, or data boundaries change.
4. Build only the approved scope.
5. Provide preview, screenshots, test results, local URL, or workflow demo.
6. Wait for the correct explicit approval phrase.
7. Only then mark ready for merge or done.

If a PR passes tests but is missing visual, business-function, client-facing content, or automation approval, daily review should keep it in In Review and list the missing approval instead of treating it as Done.

If two active issues or PRs overlap in files, routes, models, modules, or approval rules, daily review should stop the overlap and assign ownership before work continues.
