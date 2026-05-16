# Definition Of Ready And Definition Of Done V1

Linear alignment: DK-106 STRATEGY-009 Add Definition of Ready and Definition of Done.

Assigned agent: Project Manager Agent.

Approval gate: Scope approved.

## Purpose

This document defines when work is ready to start and when work is truly done for DK Arkitekter OS / Growth & Sales.

The goal is to prevent premature implementation, premature merge, and premature Linear closure. Passing tests is not enough. A task must also satisfy scope, guardrails, review evidence, and the relevant approval gate.

This is documentation-only governance. It does not implement product features, routes, UI, backend, CMS, database, upload, storage, publishing, analytics, ads, email, quote logic, client portal behavior, or automation.

## Global Definition Of Ready

A task is Ready only when all of the following are true:

- A Linear issue exists.
- The Linear issue has a clear business goal.
- The scope says what will be changed.
- The out-of-scope section says what must not be changed.
- Acceptance criteria are testable.
- The assigned agent is named.
- Dependencies are identified.
- Output expectation is clear: documentation, code, PR, screenshot, route check, demo, or review report.
- Required approval gate is named.
- Required approval phrase is present when needed before work starts.
- Branch name follows `LINEAR-ID/short-kebab-description`.
- Executable DK Codex work is expressed as a Foundry Execution Packet or has equivalent packet fields: work level, autonomy level, authorized routine actions, source-of-truth files, allowed files, forbidden files, stop conditions, checks, and reporting format.
- Known guardrails are listed.
- Private data, raw media, pricing files, quote snapshots, ad invoices, client data, archive PDFs, and source drawings are excluded.
- Parallel work, if any, follows `foundry/standards/parallel-agent-development-limits-v1.md` and has explicit ownership boundaries.

Minimum required Linear fields:

- business goal
- implementation or documentation scope
- restrictions
- acceptance criteria
- assigned agent
- dependencies
- output expectation
- approval gate
- branch name
- work level and autonomy level when Codex execution is expected

## Global Definition Of Done

A task is Done only when all of the following are true:

- The scoped work is complete.
- Out-of-scope work was not added.
- Required checks were run or explicitly marked not applicable.
- PR evidence exists when GitHub changes were made.
- The PR references the Linear issue.
- The PR lists changed systems and files.
- The PR includes tests/checks run.
- The PR includes guardrail confirmation.
- The required approval phrase is present before merge or closure.
- The PR is merged, or the non-PR task has explicit approval and recorded output.
- Linear has a final comment summarizing what completed.
- Linear status is moved to Done only after the above is true.

Done does not mean "code compiles." Done means the work is merged or approved, the approval gate is satisfied, and Linear reflects the completed state.

## Required Approval Phrases

Use the exact phrases:

- "Scope approved."
- "Visual approved."
- "Business function approved."
- "Client-facing content approved."
- "Automation approved."
- "Deployment approved."
- "Full release approved."

Technical approval does not equal business approval. Code review does not equal visual approval. Passing CI does not equal merge readiness if the required approval gate is missing.

## Planning Tasks

Ready:

- The planning question is clear.
- The decision owner is clear.
- The output format is defined.
- Existing roadmap, Linear issues, and GitHub docs have been checked.
- The task will not create duplicate issues or duplicate plans.

Done:

- The plan, decision, or recommendation is documented.
- Any new business requirement is captured in Linear.
- Any architecture, workflow, business logic, or data-boundary change is captured in GitHub docs when needed.
- Follow-up issues are created or explicitly listed as future work only when appropriate.
- Linear is updated with the outcome.

Planning tasks are blocked from Done if they create ambiguity, duplicate existing Linear work, or leave decisions only in chat.

## Documentation Tasks

Ready:

- The target document or new file path is named.
- The source issue and approval gate are known.
- The docs to inspect first are listed.
- The task states whether cross-references should be updated.
- Implementation is explicitly out of scope.

Done:

- The requested document exists or is updated.
- Cross-references are updated where relevant.
- Outdated or conflicting references introduced by the change are removed or corrected.
- Markdown links are checked when possible.
- `npm run typecheck` and `npm run build` pass when standard and lightweight.
- No implementation files are changed.
- PR is opened and linked to Linear.

Documentation tasks are blocked from Done if they silently change product behavior, routes, UI, schemas in code, or implementation scope.

## Frontend Tasks

Ready:

- Affected routes, components, pages, and visual surfaces are listed.
- Scope approved exists before implementation.
- Visual approval requirement is named.
- Public copy changes, if any, have client-facing content approval or remain draft.
- Existing route structure and frozen structure rules are understood.
- Screenshots or local preview expectations are defined.

Done:

- The UI change matches the approved scope.
- No unrelated routes, layout systems, backend logic, or business rules changed.
- Desktop and relevant narrow/mobile views are checked.
- Route checks are completed for affected pages.
- Screenshots, local URL, or clear visual review notes are provided.
- `npm run typecheck` and `npm run build` pass.
- Visual approved exists before merge when the change affects public UI or user-facing layout.

Frontend tasks are blocked from merge if tests pass but Dobromir has not given "Visual approved." where required.

## Backend Tasks

Ready:

- Business function approved exists before implementation.
- Data boundaries are documented.
- Storage, secrets, private data, and external-service rules are clear.
- The task states whether database, API, auth, queues, integrations, or background work are in scope.
- Failure behavior, permissions, and audit needs are defined.

Done:

- Implementation matches approved business logic.
- No unapproved database, auth, CMS, analytics, ads, email, publishing, quote, payment, or external integration was added.
- Secrets are not committed.
- Tests/checks pass.
- Operational notes are documented when needed.
- Client-facing output remains blocked until client-facing content approval exists.
- Automation remains disabled until automation approval exists.

Backend tasks are blocked from starting if the business behavior is not approved.

## Content / CMS Tasks

Ready:

- Source record type is named: Project Record, Heritage Building Record, ContentPackage, or another approved type.
- Rights, attribution, and public-ready rules are clear.
- Client-facing content approval requirements are named.
- Raw media and private data boundaries are clear.
- Publishing behavior is explicitly excluded unless separately approved.

Done:

- Draft fields, content model, or documentation is complete.
- Client-facing copy is either approved or marked as draft/internal.
- Rights and attribution constraints are respected.
- No raw media, archive PDFs, source drawings, private data, or client-sensitive material is committed.
- No CMS implementation or publishing integration is added unless explicitly approved.

Content / CMS tasks are blocked from Done if public copy is used without "Client-facing content approved."

## SEO / Marketing Tasks

Ready:

- Target pages, metadata, campaign concept, or measurement model is identified.
- Manual paid-ad boundary is clear.
- Tracking, analytics, ads, and automation approval needs are stated.
- Client-facing content approval needs are stated.

Done:

- Recommendations or metadata drafts are documented.
- Public copy remains draft unless approved.
- No analytics, tracking, pixel, ad, publishing, or automation integration is added unless separately approved.
- Manual paid-ad copy remains manual-use only and does not activate campaigns.

SEO / marketing tasks are blocked if they imply live tracking, public publishing, ad launch, budget change, or external platform activation without approval.

## QA / Review Tasks

Ready:

- Target PR, branch, route, issue, or document is identified.
- Review focus is clear: scope, visual, route, responsive, security, data, guardrails, or merge readiness.
- Expected output is a review decision or findings list.

Done:

- Findings are reported with file, route, PR, or issue references.
- Merge-readiness decision is explicit.
- Missing approvals are listed.
- Scope drift is captured as a Linear issue before implementation.
- The review does not silently alter unrelated files.

QA / review tasks are blocked from Done if the result is unclear or if discovered business requirements remain only in chat.

## Security / Data Governance Tasks

Ready:

- The privacy, rights, access-control, media, source-material, or security-sensitive question is clear.
- Affected systems are named: Project Records, Heritage Building Records, Media Asset Registry, Organic Publishing Hub, Client Portal, Quote Generator, analytics, deployment, or another approved system.
- Private data, raw media, archive PDFs, source drawings, quote snapshots, pricing files, ad invoices, secrets, and client data are explicitly excluded from GitHub.
- Required source documents are identified, including `dk-arkitekter-os/project-governance/agents/security-data-governance-agent.md`, `dk-arkitekter-os/growth-and-sales/modules/governance-data-integrations/media-governance-asset-lifecycle-v1.md`, and `dk-arkitekter-os/growth-and-sales/modules/governance-data-integrations/rights-source-attribution-workflow-v1.md` when relevant.
- Implementation is either explicitly out of scope or separately approved with business-function and security/data-governance review.

Done:

- Privacy, rights, access-control, data-boundary, source-material, or security-sensitive rules are documented or reviewed.
- Missing approvals, blockers, and risks are listed.
- No legal advice is presented as final legal determination.
- No raw media, source material, private data, secrets, pricing files, quote snapshots, ad invoices, archive PDFs, source drawings, or client-sensitive material is committed.
- No backend, auth, database, CMS, upload, storage, analytics, ads, email, quote, client portal, publishing, deployment, or automation implementation is added unless separately approved.
- Linear and PR notes identify any required Dobromir decision.

Security / data governance tasks are blocked from Done if they leave rights, privacy, access control, public-ready status, or private-data boundaries ambiguous for the next implementation step.

## Deployment / Environment Tasks

Ready:

- Deployment or environment scope is documentation-only or separately approved for implementation.
- Target environment is named: local development, preview/staging, or production.
- Hosting/provider assumptions are clear and replaceable.
- Environment-variable names are documented only by name and purpose, never by value.
- Secret, provider-access, production-access, rollback, and data-boundary review needs are clear.
- Security / Data Governance review is included.
- Production deployment is explicitly out of scope unless "Deployment approved." exists.
- Public or operational release is explicitly out of scope unless "Full release approved." exists.

Done:

- Environment responsibilities, approval gates, secret handling, provider boundaries, and rollback rules are documented or implemented only inside approved scope.
- No secrets, API keys, OAuth credentials, production database URLs, private data, raw media, source drawings, PDFs, quote snapshots, pricing files, or ad invoices are committed.
- No Hostinger, GitHub, CI, domain, provider, deployment, release, or automation settings are changed unless explicitly approved.
- Security / Data Governance review notes are present when deployment, environment variables, provider access, production access, logs, rollback, or data boundaries are involved.
- Checks are run or marked not applicable.
- Linear and PR notes identify whether deployment approval or full release approval is still required.

Deployment / environment tasks are blocked from merge or Done if they require production deployment, hosting configuration, CI changes, provider settings, secrets, or public release and the relevant approval phrase is missing.

## Automation Tasks

Ready:

- Automation approved exists before activation.
- Trigger, schedule, action, data touched, destination, retry behavior, and failure behavior are documented.
- External integrations, credentials, environment variables, and security boundaries are approved.
- Manual fallback and kill switch are defined.

Done:

- Automation behavior matches approved scope.
- No automatic sending, publishing, posting, ad launching, quote sending, booking, CRM update, data sync, or external action exists without approval.
- Logs, audit trail, and failure behavior are documented.
- Secrets are not committed.
- Automation can be disabled.

Automation tasks are blocked from merge if "Automation approved." is missing for any activated external or automatic action.

## Linear Workflow Readiness

Linear issue readiness requires:

- correct project
- correct status
- assigned agent
- scope and restrictions
- acceptance criteria
- approval gate
- labels that show approval needs
- branch name
- dependencies
- output expectation

If those fields are missing, the issue may stay Todo, but it should not move to active implementation.

## Parallel Work Readiness

Parallel work is Ready only when:

- every active track has its own Linear issue
- every active track has its own branch
- file, route, model, module, and workflow ownership are non-overlapping
- dependencies and merge order are documented
- approval gates are satisfied for the kind of work being performed
- `foundry/standards/parallel-agent-development-limits-v1.md` does not classify the system as blocked

Parallel work is blocked if core model dependencies are missing, if ownership overlaps, or if the task would mix documentation-only scope with implementation.

## GitHub PR / Merge Readiness

A PR is ready for review only when:

- branch name matches the Linear issue
- PR title matches the task
- PR body lists scope and out of scope
- changed files match the approved scope
- checks are run
- UI changes include screenshots, preview, local URL, or route summary
- guardrails are checked
- required approval gates are listed

A PR is ready to merge only when:

- CI/checks pass
- Linear issue is linked
- scope matches the issue
- no unrelated systems changed
- required approval phrase is present
- required visual, business, client-facing, or automation review is complete
- merge decision is clear

## Approval-Gate Readiness

Before work starts:

- implementation requires "Scope approved."
- data model, backend, workflow, process, content engine, Organic Publishing Hub, admin/Growth Studio, lead, quote, analytics, or automation logic requires "Business function approved."

Before merge or public/client-facing use:

- user-facing layout or visual workflow requires "Visual approved."
- public copy, emails, quotes, offers, legal text, pricing text, ads, newsletters, social posts, and website copy require "Client-facing content approved."
- automatic sending, publishing, posting, ad launching, quote sending, booking, CRM updates, data sync, or external integration actions require "Automation approved."
- production deployment, production hosting changes, production domain changes, production environment changes, or production rollback require "Deployment approved."
- complete product versions, major platform updates, public launches, or operational release packages require "Full release approved."

## What Blocks A Task From Starting

Do not start work if:

- no Linear issue exists
- scope is unclear
- branch name is missing
- Foundry Execution Packet fields are missing for executable DK Codex work
- assigned agent is unclear
- dependencies are unresolved
- approval gate is missing
- required approval phrase is missing
- affected routes/modules are unclear
- private data or raw media boundaries are unclear
- the task would duplicate existing work
- the task combines unrelated visual, backend, content, and business logic changes without explicit approval
- parallel ownership, dependencies, or merge order are unclear

## What Blocks A Task From Being Marked Done

Do not mark Done if:

- PR is not merged
- output is not delivered
- checks were not run or explained
- required approval phrase is missing
- visual review is missing for UI work
- business-function approval is missing for workflow/logic/model work
- client-facing content approval is missing for public/client-facing copy
- automation approval is missing for activated automation
- Linear has not been updated
- final summary comment is missing
- scope drift was implemented without a new Linear issue

## Handling Scope Drift

If new work is discovered:

1. Stop implementation of the new scope.
2. Capture the requirement, change, removal, or edit in Linear.
3. Decide whether documentation must be updated first.
4. Wait for the relevant approval gate.
5. Continue only inside the approved scope.

Scope drift must not be hidden inside a PR because it was convenient.

## Handling Missing Approval

If approval is missing:

- keep the work as draft
- keep the Linear issue in Todo, In Progress, or In Review as appropriate
- do not merge if the missing gate is required before merge
- do not mark Done
- ask Dobromir for the exact approval phrase when ready

Examples:

- Tests pass but visual approval is missing: keep PR open, do not merge.
- Backend logic is technically correct but business-function approval is missing: do not start or merge implementation.
- Public copy is written but client-facing content approval is missing: keep it draft/internal.
- Publishing automation exists but automation approval is missing: do not activate or merge.

## Documentation-Only Tasks

Documentation-only tasks may be implemented after scope approval if they do not create product behavior.

They still require:

- Linear issue
- branch
- PR
- docs-only changed files
- checks when standard and lightweight
- PR link in Linear
- In Review status after PR opens
- Done only after merge and final Linear comment

Documentation-only tasks do not need visual approval unless they change public UI or public-facing presentation. They do not need automation approval unless they activate automation, which they should not.

## Implementation Tasks

Implementation tasks require stricter readiness:

- approved scope
- affected files/modules/routes listed
- test plan
- preview or demo expectation when UI is affected
- data/privacy/security guardrails
- approval gates appropriate to the work

Implementation tasks must not begin from architecture docs alone. They need a current Linear issue with explicit implementation scope.

## PRs That Pass Tests But Fail Business Or Visual Approval

If CI passes but approval is missing:

- keep the PR open
- keep Linear in In Review
- add a comment describing the missing approval
- do not merge
- create follow-up issues for new requirements discovered during review

Technical correctness is not final validation for DK Arkitekter OS / Growth & Sales.

## Completed GitHub Work When Linear Is Not Updated

If GitHub work is merged but Linear is not updated:

1. Update the Linear issue to Done.
2. Add a final comment with PR number, merge commit when useful, summary, and guardrails.
3. Confirm no future roadmap issue was moved into active work by accident.
4. Start the next session with daily review if priorities are unclear.

GitHub is the source of truth for merged docs/code. Linear is the source of truth for operating status. Both must be reconciled before continuing.

## Default Rule

When in doubt, keep the work in draft or In Review, do not merge, and ask for the exact approval gate.
