# Issue Breakdown Pack

## Packet id

`foundry-launcher-v0.7-first-project-initiation-example`

## Parent packet

`foundry/staging/foundry-launcher-v0.7-first-project-initiation-example/`

## Issue breakdown status

`approved_for_manual_execution`

## Approval decision

Reviewer: Dobromir

Decision date: `2026-05-16`

Decision summary: Approved as a documentation/manual reference example for full Foundry Launcher project initiation. The issue breakdown may be used as a planning example only. Real module creation, UI implementation, automation, Linear/GitHub integration, Codex task launch, registry mutation, deployment, server/database work, and DK Arkitekter OS changes remain blocked unless separately approved.

## Important Rule

This issue breakdown is proposed only. Do not create Linear issues from this packet.

Issue Breakdown must not invent new scope. These proposed issues derive from the example Discovery, Architecture, Business Functions, Goals/Outcomes, and UI/Workflow Sprint scope.

## Approved source scope

V0.7 is approved only as a documentation/manual reference example.

No implementation scope is approved.

Source planning references in this example:

- `discovery.md`
- `architecture.md`
- `business-functions.md`
- `goals-and-outcomes.md`
- `ui-workflow-sprint.md`

## Linear project/area candidate

Foundry / Foundry Launcher

This is a planning example only and does not authorize Linear setup.

## Target repo

`dobkra/Foundry`

## Target branch naming pattern

`feature/<approved-packet-id-or-issue-slug>`

This branch pattern is an example only.

## Issue groups / epics

- UI readiness refinement.
- Wireframe specification.
- Packet generator model.
- Registry selector model.
- Result page handoff model.
- Linear/Codex integration planning.

## Proposed issues

### UI readiness refinement

Issue title: Refine Foundry Launcher UI readiness requirements.

Issue purpose: Convert V0.5 and V0.7 UI readiness notes into a tighter implementation-readiness specification.

Acceptance criteria:

- Selection-first / typing-light model is preserved.
- Dictation-friendly fields are identified.
- Approval categories and blocked-work categories are validated.
- No implementation is added.

Dependencies:

- Future Dobromir approval of implementation-readiness direction.

Blocked work:

- UI implementation.
- App routes.
- Automation.
- Integrations.

Codex eligibility: blocked until separate approval.

Linear eligibility: blocked until separate approval.

GitHub eligibility: documentation-only PRs for future approved packets only.

### Wireframe specification

Issue title: Draft Launcher UI / Control Center wireframe specification.

Issue purpose: Define future screen flow and interaction model before implementation.

Acceptance criteria:

- Start, Parent Context, Metadata, Intake, Discovery Depth, Scope, Approval Categories, Execution Permissions, Review, and Result screens are specified.
- No React components or app routes are created.
- Visual/creative decisions requiring Dobromir are listed.

Dependencies:

- UI readiness refinement.
- Dobromir visual/product direction approval.

Blocked work:

- UI implementation.
- Design system changes.
- App routes.

Codex eligibility: blocked until separate approval.

Linear eligibility: blocked until separate approval.

GitHub eligibility: documentation-only PRs for future approved packets only.

### Packet generator model

Issue title: Define manual packet generator data model.

Issue purpose: Specify how structured selections could map to packet Markdown files without implementing a generator.

Acceptance criteria:

- Required fields for packet files are mapped.
- Controlled vocabularies are referenced.
- File output remains documentation-only.
- Automation remains blocked.

Dependencies:

- Approved wireframe specification.
- Approved planning pack field model.

Blocked work:

- Runtime generator.
- Scripts.
- Automation.
- File-writing UI.

Codex eligibility: blocked until separate approval.

Linear eligibility: blocked until separate approval.

GitHub eligibility: documentation-only PRs for future approved packets only.

### Registry selector model

Issue title: Define registry-backed parent selector model.

Issue purpose: Plan how a future UI could read parent project/module options from the project registry.

Acceptance criteria:

- Read-only registry selector behavior is specified.
- Registry mutation remains blocked.
- DK Arkitekter OS is not treated as default parent.
- Progressive complexity principle is preserved.

Dependencies:

- Registry model approval.
- Architecture decision on registry data source.

Blocked work:

- Registry mutation.
- Database.
- Runtime selector implementation.

Codex eligibility: blocked until separate approval.

Linear eligibility: blocked until separate approval.

GitHub eligibility: documentation-only PRs for future approved packets only.

### Result page handoff model

Issue title: Specify packet-first result page handoff model.

Issue purpose: Define how the future Result step presents packet path, packet files, review summary, Codex prompt, and blocked work.

Acceptance criteria:

- Packet-first / prompt-second model is preserved.
- Copy review summary and Copy Codex prompt behavior is specified as future behavior.
- Linear/Codex actions remain blocked until approval.
- PR record role is documented.

Dependencies:

- UI readiness refinement.
- Packet reference rules.

Blocked work:

- Codex launch.
- Linear issue creation.
- GitHub issue creation.
- Automation.

Codex eligibility: blocked until separate approval.

Linear eligibility: blocked until separate approval.

GitHub eligibility: documentation-only PRs for future approved packets only.

### Linear/Codex integration planning

Issue title: Plan future Linear and Codex integration gates.

Issue purpose: Define when post-approval Linear/Codex actions could become available without implementing them.

Acceptance criteria:

- Integration prerequisites are listed.
- Approval states required for Linear/Codex actions are defined.
- External-system mutation remains blocked in the planning document.
- Automation and Codex self-launching remain separately gated.

Dependencies:

- Dobromir approval for integration direction.
- Technical execution delegation rules.
- Launcher packet reference rules.

Blocked work:

- Linear integration.
- GitHub integration.
- Codex self-launching.
- Automation.
- Deployment.

Codex eligibility: blocked until separate approval.

Linear eligibility: blocked until separate approval.

GitHub eligibility: documentation-only PRs for future approved packets only.

## Future Decisions Still Open

Open for future packet:

- Whether future Linear integration should create projects first or issues first.
- Whether Codex work folders should be default or optional.
- Whether V0.8 should be wireframe specification or implementation-readiness.

## Verification requirements

- Confirm proposed issues were not created in Linear.
- Confirm no GitHub issues were created.
- Confirm all proposed issues remain documentation-only.
- Confirm no implementation, automation, or integration work was added.

## Approval notes

Approved for documentation/manual reference use only. All real implementation and external-system setup remains blocked.
