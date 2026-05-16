# Parallel Agent Development Limits V1

Linear alignment: DK-107 STRATEGY-010 Limit Parallel Agent Development Until Core Models Are Approved.

Assigned agent: Project Manager Agent.

Approval gate: Scope approved.

## Purpose

This document defines when DK Arkitekter OS / Growth & Sales agents may work in parallel and when work must stay single-owner.

The goal is to prevent frontend, backend, CMS / content, SEO / marketing, QA, and future specialist agents from making incompatible assumptions before core models, governance rules, dependencies, and approval gates are clear.

This is documentation-only governance. It does not implement product features, routes, UI, backend, CMS, database, upload, storage, publishing, analytics, ads, email, quote logic, client portal behavior, or automation.

## Why Parallel Work Is Restricted

Parallel work is risky when agents touch shared assumptions before those assumptions are approved.

High-risk assumptions include:

- route structure
- public website structure
- Project Record fields
- Heritage Building Record fields
- Media Engine behavior
- rights and attribution gates
- Organic Publishing Hub behavior
- quote and pricing rules
- client portal security and data boundaries
- analytics, ads, and automation events
- Admin / Growth Studio workflows
- approval status meanings

If those assumptions diverge, later work becomes expensive to reconcile and may accidentally expose public content, private data, pricing, media, or unfinished business logic.

## Global No-Overlap Rule

No two agents may change the same file, route, module, model, workflow, or approval rule at the same time unless Linear explicitly approves shared ownership and the PRs define a merge order.

Default rule:

```text
one Linear issue -> one branch -> one owner -> one bounded file/module scope
```

Parallel work is allowed only when file ownership, system ownership, dependencies, approval gates, and merge order are clear before work starts.

## Allowed Parallel-Safe Tracks

The following tracks may run in parallel when they use separate Linear issues, separate branches, and non-overlapping files:

- documentation-only research on different modules
- copyediting or link fixes in separate documents
- QA review of an existing PR while another agent prepares documentation for a different issue
- roadmap cleanup that does not redefine active implementation scope
- source inventory work that does not alter implementation docs
- design critique notes that do not edit public UI or public copy
- agent instruction updates in one area while another agent updates unrelated workflow docs
- test/check reporting without code changes

Parallel-safe work must still respect approval gates and must not create public/client-facing output.

## Non-Parallel-Safe Systems

These systems are not parallel-safe until their core model, owner, dependencies, and approval gates are approved:

- public website routes, navigation, layout, and language switching
- Admin / Growth Studio
- Project Records
- Heritage Building Records
- Media Engine / Media Source Layer
- rights and source-attribution workflow
- Organic Publishing Hub
- Quote Generator / Price Book
- Client Portal / Client Login
- analytics and lead attribution
- ads and manual ad handoff
- email, newsletter, social, or publishing workflows
- automation, scheduler, queues, data sync, or external integrations

These systems require exclusive ownership per issue unless Linear explicitly documents a split.

## Core Model Dependencies Required Before Implementation

Implementation must not begin until the relevant source-of-truth document exists, has approval, and is linked from the Linear issue.

Core dependencies:

- Project Records require `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/project-records-manager/project-record-model-v1.md`.
- Heritage Building Records require `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/heritage-building-records-manager/heritage-building-record-model-v1.md`.
- Media behavior requires `dk-arkitekter-os/growth-and-sales/modules/governance-data-integrations/media-governance-asset-lifecycle-v1.md`.
- Rights and attribution behavior requires `dk-arkitekter-os/growth-and-sales/modules/governance-data-integrations/rights-source-attribution-workflow-v1.md`.
- Organic Publishing Hub requires `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/organic-publishing-hub-scope-v1.md`.
- Public website route work requires `dk-arkitekter-os/growth-and-sales/modules/public-website-frontend/website-information-architecture-v2.md`.
- Approval, readiness, and completion rules require `foundry/standards/definition-ready-done-v1.md`.
- Multi-agent ownership requires this document, `foundry/standards/multi-agent-operating-model-v1.md`, and the relevant file in `dk-arkitekter-os/project-governance/agents/`.
- Security, privacy, access-control, rights, private-data, and source-material review requires `dk-arkitekter-os/project-governance/agents/security-data-governance-agent.md`.
- Deployment and environment work requires `dk-arkitekter-os/growth-and-sales/modules/governance-data-integrations/deployment-environment-strategy-v1.md`.
- Platform assumptions require `dk-arkitekter-os/project-governance/platform-architecture-v1.md`.
- DK agenda execution alignment requires `foundry/project-registry/dk-agenda-foundry-execution-alignment-v1.md` when Codex work is packaged as a Foundry Execution Packet.

If the dependency is missing, stale, or contradictory, implementation is blocked.

## Agent Parallel Rules

### Project Manager Agent

May work in parallel with other agents only on planning, Linear hygiene, roadmap updates, PR body preparation, or documentation governance that does not alter the other agent's active implementation scope.

Must stop if the work changes business logic, route behavior, data models, approval gates, or ownership boundaries for another active issue.

### Frontend Agent

May work in parallel only when:

- affected routes and components are listed
- no backend, CMS, data model, quote, analytics, publishing, or automation behavior is changed
- Visual approval requirements are known
- public copy remains draft unless client-facing content approval exists

Must not work in parallel on public website surfaces that depend on unsettled route maps, Project Record fields, Heritage Building Record fields, Organic Publishing Hub behavior, or Admin / Growth Studio workflows.

### Backend Agent

May work in parallel only when:

- Business function approved exists
- data boundaries are documented
- exclusive ownership of schemas, APIs, services, and storage behavior is assigned
- no frontend or CMS agent is redefining the same model

Must not implement database, auth, CMS, analytics, ads, email, quote, publishing, client portal, upload, storage, or automation behavior unless separately approved.

### CMS / Content Agent

May work in parallel only on draft content models, field naming, editorial workflow docs, or content package planning when the affected source record is not being modified by another agent.

Must not create public copy, publish content, implement CMS behavior, or change rights/publication states without approval.

### SEO / Marketing Agent

May work in parallel only on recommendations, metadata drafts, manual campaign planning, UTM planning, or content briefs that do not activate tracking, ads, publishing, or automation.

Must not add analytics, pixels, ad integrations, public copy, or platform publishing behavior.

### Security / Data Governance Agent

May work in parallel only on review or documentation that defines privacy, rights, access-control, data-boundary, source-material, or security-sensitive rules without changing implementation files.

May review another agent's PR for raw/private data, rights, attribution, public-ready status, access-control assumptions, secrets, analytics/tracking risk, deployment risk, client portal data risk, quote/pricing data risk, and automation risk.

Must not implement backend, auth, database, CMS, upload, storage, analytics, ads, email, quote, client portal, publishing, deployment, or automation behavior unless a separate approved implementation issue assigns that work.

Must stop if its review would redefine an active source model, rights workflow, media workflow, route, public copy, or implementation behavior owned by another active issue. The overlap must be captured in Linear before work continues.

### QA / Review Agent

May work in parallel with active work only as a reviewer.

QA may report findings, missing approvals, scope drift, route risks, and merge-readiness decisions. QA must not silently alter unrelated files or implement fixes outside the review issue.

## Files And Modules That Require Exclusive Ownership

Exclusive ownership is required for any issue touching:

- `src/app/**`
- `src/components/**`
- `src/lib/**`
- route structure or navigation
- Project Record model docs
- Heritage Building Record model docs
- Media Engine / Media Source Layer docs or implementation
- rights/source-attribution workflow docs
- Organic Publishing Hub scope or future implementation
- Quote Generator / Price Book docs or implementation
- Client Portal / Client Login docs or implementation
- analytics, tracking, ads, email, newsletter, social, publishing, or automation docs
- approval-gate and readiness governance docs

Documentation-only work may share a general area only if each branch edits different files and the merge order is clear.

## Frontend / Backend / CMS / SEO / QA Rules

Frontend work must not start from a backend or CMS assumption that is still draft.

Backend work must not start from UI copy, visual ideas, or marketing needs unless the business function is approved.

CMS / content work must not define public publishing behavior while backend or Organic Publishing Hub rules are unsettled.

SEO / marketing work must not imply analytics, ads, platform publishing, or public copy approval.

QA work must treat missing approvals and overlapping scope as blockers, not as minor review comments.

## Documentation-Only Parallel Work

Documentation-only work may run in parallel when:

- every issue is docs-only
- each branch edits separate files or has a documented merge order
- no branch changes implementation files
- no branch changes public/client-facing content for use
- no branch creates product behavior
- cross-reference conflicts are checked before merge

If two documentation tasks update the same governance file, one must wait or Linear must name the owner and merge order.

## Implementation Parallel Work

Implementation parallel work is blocked by default until:

- the relevant core model is approved
- dependencies are listed in Linear
- affected files/modules/routes are listed
- exclusive ownership is assigned
- approval gates are satisfied
- branch names and PR dependencies are clear
- tests/checks and review expectations are defined

Implementation work must not begin because a planning document exists. It requires a current Linear implementation issue with explicit scope and approval.

## Public Website Work

Public website work is not parallel-safe when it touches:

- routes
- navigation
- language switching
- public copy
- project pages
- heritage studies
- lead CTAs
- booking/contact flows
- SEO metadata
- public media display

Public website work requires Visual approved before merge when layout or visual behavior changes. Public copy requires Client-facing content approved before use.

## Growth Studio / Admin Work

Admin / Growth Studio work is not parallel-safe until the affected module model is approved.

Admin / Growth Studio workflows require Business function approved before implementation and Visual approved before user-facing UI merge.

No Admin / Growth Studio work may add auth, database, upload, media manager, analytics, ads, email, CMS, quote, client portal, publishing, or automation behavior without separate approval.

## Module-Specific Rules

### Project Records

Project Records depend on `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/project-records-manager/project-record-model-v1.md`.

No parallel work may redefine Project Record fields, Project page UI, Organic Publishing Hub source fields, media references, or approval statuses at the same time.

### Heritage Building Records

Heritage Building Records depend on `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/heritage-building-records-manager/heritage-building-record-model-v1.md`.

No parallel work may redefine heritage import, raw source rules, media asset references, publication dependencies, rights fields, or public Danish Heritage Study structure at the same time.

### Media Engine

Media Engine / Media Source Layer work depends on `dk-arkitekter-os/growth-and-sales/modules/governance-data-integrations/media-governance-asset-lifecycle-v1.md`.

Provider-specific decisions must remain replaceable. No agent may hardcode Bunny, YouTube, Google Drive, Hostinger database, or other provider behavior into core records without approval.

### Organic Publishing Hub

Organic Publishing Hub depends on `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/organic-publishing-hub-scope-v1.md`.

It must not be implemented in parallel with source-record model changes unless the dependency and merge order are explicit.

No publishing, scheduling, platform API, OAuth, retry, or external action may be activated without Automation approved.

### Quote Generator / Price Book

Quote Generator and Price Book work require exclusive ownership.

No agent may add quote logic, price defaults, pricing files, sent quote snapshots, invoice behavior, payment behavior, or client-facing quote wording without the required approvals.

### Client Portal

Client Portal work requires exclusive ownership and approved security/data boundaries.

No agent may add authentication, client data, uploads, file sharing, communication workflow, or project delivery behavior without approval.

### Analytics And Ads

Analytics and ads work must remain documentation or manual planning until implementation is approved.

No tracking pixels, analytics events, ad integrations, budget logic, targeting, or platform activation may be added without approval.

### Automation

Automation work is not parallel-safe unless every trigger, action, data boundary, destination, retry rule, failure behavior, kill switch, and approval gate is documented.

No automatic sending, publishing, posting, ad launching, quote sending, booking, CRM update, data sync, or external integration action may be activated without Automation approved.

### Deployment And Environment

Deployment and environment work depends on `dk-arkitekter-os/growth-and-sales/modules/governance-data-integrations/deployment-environment-strategy-v1.md`.

No agent may change Hostinger settings, domains, production environment variables, CI workflows, GitHub settings, deployment automation, release automation, production deployment, rollback behavior, or provider configuration without a separate approved issue and the required deployment/release approval.

## Conflict Detection Rules

Before work starts, check:

- active Linear issues
- open PRs
- branch names
- changed-file scope
- dependency documents
- approval labels
- module ownership

During work, stop if:

- another branch changes the same file
- another issue changes the same model
- a source document contradicts the current scope
- a required approval is missing
- public/client-facing content would be created
- implementation is needed to finish a documentation task
- private data, raw media, PDFs, screenshots, quote snapshots, pricing files, or source drawings appear in scope

## Stop Conditions

Stop immediately and report if:

- scope overlaps another active issue
- required approval phrase is missing
- core model dependency is missing or stale
- implementation is required but the issue is documentation-only
- public UI, route, backend, CMS, database, analytics, ads, email, quote, client portal, storage, upload, publishing, or automation work is requested without approval
- raw/private/source material is about to enter GitHub
- the PR would mix unrelated systems
- a new business requirement appears during review

Stopping is the correct behavior when governance is unclear.

## Escalation Path For Overlapping Scope

When an agent discovers overlap:

1. Stop the overlapping work.
2. Leave existing completed work untouched.
3. Document the overlap in the Linear issue or PR.
4. Identify the conflicting issue, branch, file, route, model, or module.
5. Ask Dobromir or the Project Manager Agent to decide ownership.
6. Split the work into separate Linear issues if needed.
7. Resume only after Linear records ownership, dependency order, and approval gate.

## Linear Requirements Before Parallel Work Starts

Each parallel issue must include:

- business goal
- scope
- out of scope
- assigned agent
- affected files/modules/routes
- dependencies
- approval gate
- expected output
- work level and autonomy level
- branch name
- ownership boundary
- merge order if another PR depends on it
- labels showing approval needs

If those fields are missing, the issue is not ready for parallel work.

## GitHub Branch And PR Requirements

Every parallel branch must:

- follow `LINEAR-ID/short-kebab-description`
- map to one Linear issue
- come from a complete Foundry Execution Packet or equivalent packet fields when Codex execution is expected
- avoid overlapping files unless Linear names the owner and merge order
- include a PR body with changed files, scope, out of scope, checks, approval gates, and guardrails
- link the Linear issue
- list any dependency PRs
- stay open if approval gates are missing

No direct commits to `main` are allowed.

## Approval Gates Required Before Merge

Required before merge:

- Scope approved for all work.
- Visual approved for public UI, landing pages, admin interfaces, visual workflows, or user-facing layout.
- Business function approved for backend, Admin / Growth Studio, lead qualification, booking, client portal, content engine, newsletter, social, ads, analytics, quote generator, pricing, workflow logic, data models, and process automation.
- Client-facing content approved for public copy, emails, quotes, offers, legal text, pricing text, ads, newsletters, social posts, and website copy.
- Automation approved before any automatic sending, publishing, posting, ad launching, quote sending, booking, CRM update, data sync, or external integration action is activated.

Passing checks is not enough if the required approval gate is missing.

## Blocking Rules When Dependencies Are Missing

If a dependency is missing:

- do not implement
- keep the issue in Todo or In Progress
- document the blocker in Linear
- update or create the dependency documentation first
- wait for the relevant approval gate

If the missing dependency is discovered during PR review, keep the PR in In Review and do not merge.

## Safe Parallel Work Examples

Safe examples:

- Project Manager Agent updates roadmap text while QA / Review Agent reviews a separate docs-only PR.
- SEO / Marketing Agent drafts internal metadata recommendations while CMS / Content Agent documents unrelated Project Record editorial fields.
- QA / Review Agent checks a frontend PR while Backend Agent waits on an approved backend issue without changing files.
- Security / Data Governance Agent documents rights status rules while Frontend Agent only reads them and does not implement UI.
- Two documentation tasks edit different files and both PRs list the same source documents they inspected.

## Unsafe Parallel Work Examples

Unsafe examples:

- Frontend Agent builds Project page UI while CMS / Content Agent changes Project Record fields.
- Backend Agent implements Heritage Building Record import while Security / Data Governance Agent changes rights/public-ready rules.
- SEO / Marketing Agent adds tracking while Analytics approval is missing.
- CMS / Content Agent implements Organic Publishing Hub drafts while Backend Agent changes source-record relationships.
- Frontend Agent changes public website routes while Project Manager Agent updates the route source of truth.
- QA / Review Agent silently fixes UI issues inside a review PR without a scoped implementation issue.
- Any agent adds quote logic, client portal behavior, publishing automation, or upload/storage behavior from a documentation-only task.

## Default Rule

If parallel work might overlap, treat it as blocked until Linear records ownership, dependency order, approval gates, and merge order.

Drafts are acceptable. Unapproved parallel implementation is not.
