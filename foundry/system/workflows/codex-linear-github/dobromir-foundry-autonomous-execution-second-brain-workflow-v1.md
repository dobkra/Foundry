# Dobromir Foundry — Autonomous Execution and Second Brain Workflow V1

Personal Knowledge, Business, and Software Execution Platform.

## 1. Purpose

Dobromir Foundry is designed to make Dobromir's software-building, business-building, and knowledge-management process more autonomous while preserving Dobromir's authority over important decisions.

The purpose of this workflow is to reduce or eliminate manual copying of prompts, task results, reviews, status updates, and documentation between ChatGPT, Codex, Linear, GitHub, and Obsidian.

The desired system should let Dobromir contribute ideas, direction, business logic, creative input, strategic decisions, and approvals while the surrounding tools handle structured task preparation, execution handoff, repository work, status reporting, and durable knowledge capture.

This specification is documentation-only. It defines the intended operating model for Dobromir Foundry. It does not implement automation, change application behavior, rename any existing product, or create live integrations.

## 2. Parent Platform Model

Dobromir Foundry is the parent platform for building, managing, documenting, and maintaining multiple software products, business systems, internal processes, automation workflows, and long-term knowledge assets.

Dobromir Foundry is not the same thing as any one product inside it. It is the broader operating platform that supports software creation, business systems, personal documentation, business documentation, product documentation, client and project knowledge, architecture-business knowledge, internal procedures, decision records, strategic thinking, AI-assisted execution, and long-term memory across tools and projects.

Core platform relationships:

- Dobromir Foundry is the parent platform.
- DK Arkitekter Growth and Sales OS is one software product/project inside Dobromir Foundry.
- Future business tools, automation tools, client tools, pricing tools, content tools, and internal systems will also live inside Dobromir Foundry.
- Obsidian is the Second Brain of Dobromir Foundry and the master knowledge vault.
- Linear is mission control for issues, priorities, status, and approval gates.
- GitHub is the source of truth for code, repository documentation, branches, pull requests, checks, and review history.
- Codex is the execution agent for scoped implementation and documentation tasks.
- ChatGPT is the strategic, review, documentation, and reasoning layer.
- Dobromir is the final authority for direction, judgment, approvals, launches, and releases.

The parent platform must remain broad enough to support multiple products, including but not limited to DK Arkitekter Growth and Sales OS, future business tools, internal automation tools, content production workflows, client and project management tools, pricing systems, quoting systems, sales systems, marketing systems, and operational systems.

## 3. Obsidian Second Brain Model

Obsidian is the long-term knowledge vault for Dobromir Foundry. It is the place where knowledge survives beyond individual ChatGPT sessions, Codex tasks, Linear tickets, and GitHub pull requests.

Obsidian should contain:

- Human knowledge about Dobromir's work, thinking, preferences, business, and projects.
- Software and product documentation.
- Strategy documentation.
- Architecture decision records.
- Business decision records.
- Project histories.
- Client and project context.
- Templates.
- Reusable knowledge.
- ChatGPT session summaries.
- Codex task summaries.
- Linear issue summaries.
- GitHub PR summaries.
- Release history.
- Lessons learned.

Obsidian should not be treated as a random note archive. It is the permanent Second Brain and master knowledge vault for Dobromir Foundry. Its job is to preserve durable, human-readable knowledge that should remain useful after a chat is closed, a Codex task is complete, a Linear issue is done, or a GitHub PR is merged.

Obsidian should store the context that explains why work exists, what decisions were made, what tradeoffs were accepted, what the product or business logic means, and how future work should build on previous thinking.

## 4. Current Manual Problem

The current workflow is inefficient because Dobromir has to move information between tools manually:

1. Dobromir discusses or brainstorms in ChatGPT.
2. Dobromir copies a task prompt into Codex.
3. Codex works on the task.
4. Dobromir copies Codex results back into ChatGPT.
5. ChatGPT reviews the result or helps reason about next steps.
6. Dobromir manually decides what should be stored in Obsidian.
7. Dobromir manually updates Linear and GitHub status.
8. Documentation becomes fragmented across chats, issues, PRs, and notes.

This makes Dobromir act as:

- Human message bus.
- Manual documentation router.
- Manual context carrier.
- Manual approval manager.

That model is not scalable. It consumes Dobromir's attention on transfer work instead of high-value work such as direction, strategy, business logic, creative review, client judgment, product architecture, and final approval.

The core problem is not that the tools are weak individually. The problem is that the handoffs between ChatGPT, Codex, Linear, GitHub, and Obsidian are too manual, and durable knowledge is not automatically prepared for the Second Brain.

## 5. Target Autonomous Workflow

The target workflow is:

1. Dobromir contributes an idea, direction, business logic, creative input, strategic decision, or approval.
2. ChatGPT helps brainstorm, clarify, structure, challenge, and document the idea.
3. Relevant durable knowledge is stored or linked in Obsidian.
4. A structured issue is created in Linear.
5. The Linear issue includes or links to a Codex-ready task prompt.
6. Codex executes the scoped task against GitHub.
7. Codex creates a branch and pull request when repository changes are required.
8. Checks and review happen.
9. The execution summary is sent back to Linear.
10. Durable knowledge is written or prepared for Obsidian.
11. Dobromir is asked only when approval, decision-making, input, brainstorming, direction change, review, launch approval, or full release approval is required.
12. Merge and release happen only after the required approval gate.

The desired direction is not full autonomy over everything. The desired direction is selective autonomy: low-risk, well-scoped work should move without Dobromir acting as a copy-paste bridge, while high-risk work must stop at clear approval gates.

## 6. Role Definitions

### Dobromir

Dobromir is:

- Founder.
- Product Architect.
- Business Logic Owner.
- Visual/Brand Director.
- Final Validation Layer.
- Release Approval Authority.
- Launch Approval Authority.
- Strategic decision-maker.
- Owner of the Second Brain.

Dobromir should be involved when human judgment creates value: business direction, product architecture, client impact, brand expression, visual direction, pricing, legal wording, public launch, release approval, scope approval, and strategic tradeoffs.

### ChatGPT

ChatGPT is:

- Strategy partner.
- Brainstorming partner.
- Reviewer.
- Business logic reviewer.
- Prompt and workflow architect.
- Human-facing explanation layer.
- Documentation structuring layer.
- Obsidian note drafting assistant.

ChatGPT helps shape raw thinking into structured plans, issue drafts, review notes, decision records, product documentation, and Obsidian-ready summaries. ChatGPT should support Dobromir's judgment, not replace it.

### Obsidian

Obsidian is:

- Second Brain.
- Long-term knowledge vault.
- Documentation home.
- Decision history.
- Product memory.
- Personal and business knowledge base.
- Cross-project context layer.
- Place where ChatGPT and Codex outputs are preserved as structured knowledge.

Obsidian stores the durable context that should survive beyond individual tools.

### Linear

Linear is:

- Mission control.
- Source of issue status.
- Source of priorities.
- Location of approval gates.
- Location where Codex should receive actionable work.

Linear should hold the operational state of work: what is planned, what is ready, what is blocked, what needs approval, what Codex should execute, and what is done.

### Codex

Codex is:

- Execution agent.
- Agent that works only on scoped issues.
- Agent that creates branches, commits, documentation, tests, and pull requests.
- Agent that produces summaries that can be stored in Obsidian.

Codex must not make major business, release, pricing, client-facing, legal, launch, or brand decisions without Dobromir approval.

### GitHub

GitHub is:

- Source of truth for repository content.
- Home for implementation.
- Home for repository documentation.
- Home for pull requests.
- Home for checks.
- Home for review history.

GitHub records what changed in code and repository documentation, how it was reviewed, and what was merged.

### Weekly Foundry Retrospective Agent

The Weekly Foundry Retrospective Agent is:

- Continuous improvement layer.
- Weekly workflow reviewer.
- Friction detector.
- Automation opportunity detector.
- Obsidian documentation update suggester.
- Linear issue suggester.

It runs once per week and reviews what is working and what is not working. It suggests workflow improvements, automation opportunities, Obsidian documentation updates, and Linear issues.

It does not make final business, release, pricing, visual, client-facing, legal, or launch decisions.

## 7. Knowledge Flow Model

### ChatGPT Sessions

ChatGPT sessions are for:

- Strategic thinking.
- Brainstorming.
- Prompt drafting.
- Business logic.
- Review notes.
- Documentation structure.
- Decision framing.

When a ChatGPT session produces durable knowledge, it must produce a structured summary for Obsidian. The summary should identify what matters long term, what decisions were made, what remains open, and where the note should live.

### Linear Issues

Linear issues are for:

- Actionable work.
- Status.
- Priority.
- Approval gates.
- Codex task prompts.
- Review checklists.
- Blockers.
- Handoff state.

Linear should make it clear whether work is an idea, scoped task, Codex-ready task, active task, PR, review item, documentation item, approval item, release item, or blocked item.

### GitHub

GitHub is for:

- Code.
- Repository documentation.
- Pull requests.
- Technical history.
- Branches.
- Commits.
- Checks.
- Review comments.

GitHub should remain the source of truth for repository content. Obsidian may summarize GitHub work, but it should not replace repository documentation that belongs with code.

### Obsidian

Obsidian is for:

- Durable human-readable knowledge.
- Strategy.
- Decisions.
- Cross-project documentation.
- Product memory.
- Client and project knowledge.
- Notes that should survive beyond individual tools.

Obsidian should capture the "why", the context, the decision history, and the reusable knowledge.

### Codex

Codex is for:

- Execution results.
- Implementation summaries.
- Blockers.
- PR summaries.
- Suggested documentation updates.
- Scoped documentation tasks.

After meaningful work, Codex should produce a handoff that can update Linear and become an Obsidian-ready summary.

### Weekly Foundry Retrospective Agent

The Weekly Foundry Retrospective Agent is for:

- Weekly improvement review.
- Detecting friction across ChatGPT, Codex, Linear, GitHub, and Obsidian.
- Preparing proposed improvements.
- Producing Obsidian-ready weekly review notes.
- Preparing suggested Linear issues for Dobromir approval.

The retrospective agent should not execute high-risk changes. It should prepare decisions for Dobromir.

## 8. Obsidian Vault Structure Proposal

A practical Obsidian vault structure:

```text
/00_Inbox
/01_Dobromir
/02_Business
/03_Products
/03_Products/DK_Arkitekter_Growth_and_Sales_OS
/03_Products/Future_Tools
/04_Projects
/05_DK_Arkitekter
/06_Software_Systems
/07_Decision_Records
/08_Templates
/09_Meetings
/10_Research
/11_Linear_Summaries
/12_GitHub_PR_Summaries
/13_Codex_Task_Summaries
/14_ChatGPT_Session_Summaries
/15_Foundry_Retrospectives
/99_Archive
```

Recommended folder purposes:

- `/00_Inbox`: Temporary capture for unsorted notes and quick inputs.
- `/01_Dobromir`: Personal operating preferences, principles, thinking patterns, and founder context.
- `/02_Business`: Business models, strategy, operations, sales, marketing, pricing thinking, and internal procedures.
- `/03_Products`: Product-level documentation across all products inside Dobromir Foundry.
- `/03_Products/DK_Arkitekter_Growth_and_Sales_OS`: Product memory for DK Arkitekter Growth and Sales OS.
- `/03_Products/Future_Tools`: Early product ideas and future tool concepts.
- `/04_Projects`: Project-specific execution context.
- `/05_DK_Arkitekter`: Architecture-business context, client knowledge, service knowledge, and DK Arkitekter-specific operations.
- `/06_Software_Systems`: Technical architecture, platform systems, integrations, automation models, and internal software systems.
- `/07_Decision_Records`: Architecture and business decision records.
- `/08_Templates`: Note templates, issue templates, PR templates, review templates, and retrospective templates.
- `/09_Meetings`: Meeting notes and follow-ups.
- `/10_Research`: Research notes and external references.
- `/11_Linear_Summaries`: Durable summaries of important Linear issues.
- `/12_GitHub_PR_Summaries`: Durable summaries of important GitHub PRs.
- `/13_Codex_Task_Summaries`: Codex execution summaries.
- `/14_ChatGPT_Session_Summaries`: ChatGPT session summaries worth preserving.
- `/15_Foundry_Retrospectives`: Weekly Foundry Retrospective Agent outputs.
- `/99_Archive`: Deprecated, superseded, or inactive knowledge.

## 9. Required Obsidian Note Types

Standard note types:

- Product specification.
- Product overview.
- Feature specification.
- Decision record.
- Brainstorming note.
- Meeting note.
- Codex task summary.
- ChatGPT session summary.
- Linear issue summary.
- GitHub PR summary.
- Release note.
- Weekly Foundry retrospective.
- Client/project note.
- Business process note.
- Template note.

Each note type should have a clear template, expected metadata, recommended folder, and linking conventions. Notes should be written for future usefulness, not only immediate task tracking.

## 10. Task Classification Model

### A. Autonomous Execution Allowed

This class covers low-risk work where execution can proceed without Dobromir approval after scope is already clear.

Examples:

- Internal documentation cleanup.
- Typo fixes.
- Formatting improvements.
- Adding missing internal references.
- Test additions.
- Minor refactors with no product behavior change.
- Non-client-facing technical improvements.
- Creating structured Obsidian summaries from already-approved work.
- Routine Linear status updates, PR links, completion comments, and approved non-sensitive Obsidian/vault summaries inside an approved Execution Packet boundary.

Rules:

- Codex may execute within the approved scope.
- Codex must report what changed.
- Codex must stop if the work becomes ambiguous, client-facing, strategic, visual, pricing-related, legal, release-related, or broader than the approved scope.

### B. Execute Then Request Review

This class covers work where a draft or implementation can be prepared, but Dobromir should review before final acceptance, merge, publishing, or durable adoption.

Examples:

- New internal workflow document.
- New backend utility.
- New admin feature draft.
- New CMS/data structure.
- New internal automation proposal.
- Updates to product structure that do not publish externally.
- New Obsidian templates.
- New product documentation draft.
- Weekly retrospective draft.
- Suggested Linear issues from retrospective findings.
- Scoped draft follow-up issue proposals, Review Inbox candidates, and routine notes created inside an approved Level 2 Execution Packet boundary.

Rules:

- Codex or ChatGPT may prepare the work.
- The result must be clearly marked for review.
- Approval gates must be visible in Linear and the PR.
- The work must not be treated as final until Dobromir approves it where required.

### C. Stop and Ask Dobromir First

This class covers high-risk or authority-sensitive work where Dobromir must decide before execution.

Examples:

- Visual direction changes.
- Public website changes.
- Client-facing text.
- Pricing logic.
- Quote generation logic.
- Sales funnel logic.
- Contract/legal wording.
- Email sending.
- Social media publishing.
- Automation that sends, deletes, publishes, invoices, or changes client records.
- Major architecture change.
- Full launch.
- Full release.
- Anything that changes the business direction.
- Anything that changes the structure of Obsidian as the Second Brain in a major way.
- Any broad automation that creates, updates, closes, assigns, or moves Linear issues without Dobromir approval.
- Any automation that changes GitHub branches, PRs, or releases without approval.

Rules:

- Codex must stop.
- ChatGPT must present the decision clearly.
- Linear must show that Dobromir input is required.
- Work resumes only after Dobromir gives explicit approval or direction.

## 11. Approval Gates

Approval gates define where Dobromir's authority is required before work can proceed, merge, publish, launch, or become part of the permanent knowledge architecture.

### Scope Approval

Required when:

- A task is not already clearly scoped.
- The task may affect multiple products, systems, or workflows.
- The acceptance criteria are incomplete.
- Codex would need to infer meaningful product or business requirements.

### Visual Approval

Required when:

- Work changes visual direction, layout, branding, user-facing interface, marketing pages, product presentation, or design language.
- Screenshots or visual review are needed before merge or launch.

### Business Function Approval

Required when:

- Work changes business logic, sales logic, pricing logic, quote logic, operational rules, client workflows, or product behavior with business consequences.

### Client-Facing Content Approval

Required when:

- Work changes public website text, client communication, onboarding text, emails, proposals, contracts, reports, social media, or any external-facing content.

### Automation Approval

Required when:

- An automation sends, publishes, deletes, invoices, updates client data, closes issues, creates issues, changes repository state, triggers releases, or performs actions across tools without manual review.

### Knowledge Architecture Approval

Required when:

- Work changes Obsidian's folder model, note taxonomy, templates, metadata conventions, linking conventions, or the role of Obsidian inside Dobromir Foundry.

### Launch Approval

Required when:

- A feature, site, product, workflow, or automation is about to become publicly available, client-facing, or operationally active.

### Full Release Approval

Required when:

- A complete product version, major platform update, or release package is ready to ship.

### Direction-Change Approval

Required when:

- Work would change product direction, business direction, brand direction, platform architecture, target users, pricing strategy, workflow philosophy, or the role of a major tool.

### Retrospective Action Approval

Required when:

- The Weekly Foundry Retrospective Agent proposes new automations, new Linear issues, changes to approval rules, changes to the Obsidian structure, or workflow changes that affect how Dobromir Foundry operates.

## 12. Linear Issue Requirements

Every executable Linear issue should include:

- Title.
- Product/project name.
- Parent platform area.
- Related Obsidian note or folder.
- Problem.
- Goal.
- Scope.
- Out of scope.
- Acceptance criteria.
- Approval gate required.
- Task classification.
- Codex Task Prompt.
- Review checklist.
- Risks.
- Related GitHub branch/PR.
- Required Obsidian documentation update.
- Status.

The issue should be clear enough for Codex to execute without asking Dobromir to restate context. If context is missing, the issue should stay in `Scope Draft` or `Awaiting Dobromir Input` instead of moving to `Ready for Codex`.

The Linear issue is the operational contract for the task. It should state what is being done, why it matters, what is excluded, what approval is required, how completion will be judged, and what knowledge must be preserved.

## 13. Codex Task Prompt Structure

The standard prompt Codex receives from Linear should include:

- Task title.
- Context.
- Goal.
- Related Obsidian knowledge, if available.
- Files or areas to inspect.
- Exact deliverables.
- Constraints.
- Out of scope.
- Approval gates.
- Testing/check requirements.
- Required documentation update.
- Reporting format.
- Stop conditions where Dobromir input is required.

Recommended structure:

```markdown
## Task Title

## Context

## Goal

## Related Obsidian Knowledge

## Files or Areas to Inspect

## Exact Deliverables

## Constraints

## Out of Scope

## Approval Gates

## Testing and Checks

## Required Documentation Update

## Reporting Format

## Stop Conditions
```

The Codex Task Prompt should be specific enough to reduce back-and-forth and safe enough to prevent scope expansion.

## 14. Obsidian Documentation Handoff

After meaningful work, Codex and ChatGPT should produce an Obsidian documentation handoff.

The handoff should include:

- Short summary.
- What changed.
- Why it changed.
- Decisions made.
- Open questions.
- Links to Linear issue.
- Links to GitHub PR.
- Suggested Obsidian note location.
- Suggested tags.
- Whether Dobromir approval is required before storing.

The handoff should distinguish between temporary task output and durable knowledge. Not every small task needs a full note, but meaningful product, business, platform, architecture, automation, or workflow knowledge should be preserved in Obsidian.

## 15. Linear Status Model

Proposed statuses:

- Idea Inbox.
- Scope Draft.
- Awaiting Dobromir Input.
- Ready for Codex.
- In Codex.
- PR Created.
- Review Needed.
- Obsidian Documentation Needed.
- Retrospective Review Needed.
- Awaiting Dobromir Approval.
- Change Requested.
- Approved.
- Ready to Merge.
- Done.
- Released.
- Blocked.

Status movement model:

- `Idea Inbox`: Raw ideas, rough tasks, and unstructured inputs start here.
- `Scope Draft`: ChatGPT or Dobromir shapes the idea into a clear issue.
- `Awaiting Dobromir Input`: The issue needs business logic, direction, approval, clarification, brainstorming, or a decision.
- `Ready for Codex`: The issue has scope, acceptance criteria, task classification, approval gate, and a Codex-ready prompt.
- `In Codex`: Codex is actively executing the scoped task.
- `PR Created`: Codex has created a GitHub PR or prepared a repository change for review.
- `Review Needed`: The work needs ChatGPT, Codex self-review, technical review, visual review, business review, or Dobromir review.
- `Obsidian Documentation Needed`: Durable knowledge should be captured or prepared for the Second Brain.
- `Retrospective Review Needed`: The work or workflow should be reviewed by the Weekly Foundry Retrospective Agent.
- `Awaiting Dobromir Approval`: A required approval gate is active.
- `Change Requested`: Dobromir or review feedback requires changes.
- `Approved`: Required approval has been granted.
- `Ready to Merge`: The PR is approved, checks are acceptable, documentation requirements are satisfied, and merge is allowed.
- `Done`: The task is complete.
- `Released`: The work has been included in a release or launch after approval.
- `Blocked`: The task cannot continue due to missing context, dependency failure, technical blocker, or required decision.

Issues should not skip approval gates. If new risk is discovered, the issue should move back to `Awaiting Dobromir Input`, `Awaiting Dobromir Approval`, or `Blocked`.

## 16. GitHub Branch and PR Conventions

Branch naming conventions:

```text
platform/<linear-id>-short-description
product/<linear-id>-short-description
docs/<linear-id>-short-description
fix/<linear-id>-short-description
knowledge/<linear-id>-short-description
retrospective/<linear-id>-short-description
```

Branch category guidance:

- `platform/`: Parent platform work for Dobromir Foundry.
- `product/`: Product-specific feature or product documentation work.
- `docs/`: Repository documentation changes.
- `fix/`: Bug fixes.
- `knowledge/`: Obsidian, Second Brain, knowledge model, or documentation handoff work.
- `retrospective/`: Weekly Foundry Retrospective Agent outputs or related workflow improvement proposals.

PR title format:

```text
[Linear-ID] Short task title
```

Every PR should include:

- Summary.
- Files changed.
- Acceptance criteria checklist.
- Risks.
- Screenshots if visual.
- Tests/checks run.
- Approval gate needed.
- Obsidian documentation update needed.
- Whether Dobromir input is required.

PRs should make review state obvious. If a PR cannot be merged without Dobromir approval, that requirement must be visible in the PR body and Linear issue.

## 17. Dobromir Review Inbox Concept

Dobromir Foundry should eventually include a Dobromir Review Inbox.

The Dobromir Review Inbox is a future aggregation layer that collects work requiring Dobromir's attention from multiple tools into one place, so Dobromir does not have to hunt across ChatGPT, Codex, Linear, GitHub, and Obsidian.

The review inbox should collect:

- Linear issues waiting for input.
- PRs waiting for approval.
- Codex questions.
- ChatGPT review notes.
- Obsidian notes waiting for confirmation.
- Weekly Foundry Retrospective items.
- Launch/release approval requests.
- Direction-change requests.
- Visual/client-facing review requests.

The goal is to keep Dobromir involved where his input creates value while reducing status hunting, manual routing, and context reconstruction.

## 18. Weekly Foundry Retrospective Agent

The recurring review workflow is called:

```text
Weekly Foundry Retrospective Agent
```

### Purpose

The Weekly Foundry Retrospective Agent exists to help Dobromir continuously improve Dobromir Foundry as a personal knowledge, business, and software execution platform.

It should run once per week and help Dobromir review:

- What is working.
- What is not working.
- Where the workflow creates friction.
- Where Dobromir is still acting as a human copy-paste bridge.
- Which parts of ChatGPT, Codex, Linear, GitHub, and Obsidian are not integrated well enough.
- Which automations should be added.
- Which automations should be removed or restricted.
- Which documentation is missing.
- Which knowledge should be stored in Obsidian.
- Which Linear issues should be created next.
- Which parts of the platform are becoming too complex.
- Which product or business direction needs Dobromir's decision.

The agent must not make final business, visual, release, pricing, client-facing, legal, or launch decisions.

The agent should only:

- Review.
- Summarize.
- Detect friction.
- Suggest improvements.
- Prepare proposed Linear issues.
- Prepare Obsidian-ready notes.
- Ask Dobromir for decisions where needed.

### Weekly Output Format

#### 1. Foundry Health Summary

Briefly summarize the current state of Dobromir Foundry.

#### 2. What Worked This Week

List the workflows, tools, decisions, or automations that worked well.

#### 3. What Did Not Work

List bottlenecks, repeated manual work, confusing steps, missing documentation, broken handoffs, or unnecessary friction.

#### 4. Copy-Paste Friction

Identify where Dobromir still had to manually copy information between:

- ChatGPT.
- Codex.
- Linear.
- GitHub.
- Obsidian.

#### 5. Decision Points for Dobromir

List only the items where Dobromir's input, judgment, brainstorming, approval, or change of direction is needed.

#### 6. Suggested Improvements

Propose practical workflow improvements.

#### 7. Suggested Automations

Classify each automation idea as:

- Safe to automate.
- Automate after review.
- Requires Dobromir approval.
- Do not automate.

#### 8. Obsidian Documentation Updates

Suggest what should be stored in Obsidian, including:

- Weekly summary.
- Decisions made.
- New templates.
- Lessons learned.
- Platform architecture changes.
- Product-specific knowledge.

#### 9. Recommended Linear Issues

Prepare suggested Linear issues using this structure:

- Title.
- Problem.
- Goal.
- Scope.
- Acceptance criteria.
- Approval gate required.
- Task classification.
- Suggested Codex prompt.

#### 10. Recommended Next Highest-Leverage Improvement

Choose one improvement that would give Dobromir the biggest workflow gain next week.

### Rules

- The agent must support Dobromir's autonomy, not replace Dobromir's judgment.
- The agent must preserve approval gates.
- The agent must not suggest full autonomy for high-risk work.
- The agent must treat Obsidian as the permanent Second Brain.
- The agent must treat Linear as mission control.
- The agent must treat GitHub as the source of truth for code and repository documentation.
- The agent must treat Codex as the execution agent.
- The agent must treat ChatGPT as the reasoning, review, and strategy layer.
- The agent must keep Dobromir involved only where his input creates value.

## 19. Automation Phases

### Phase 1 — Structured Manual Workflow

- Linear issues contain Codex-ready prompts.
- Obsidian contains structured documentation.
- Dobromir still triggers Codex manually.
- Copy-paste is reduced but not fully removed.

### Phase 2 — Linear-to-Codex Delegation

- Codex can be triggered from Linear.
- Codex works directly from the issue.
- Results are posted back to Linear/GitHub.

### Phase 3 — GitHub PR Automation

- Codex creates branches and PRs.
- PR templates enforce review gates.
- Checks and review summaries run automatically.

### Phase 4 — Obsidian Documentation Automation

- ChatGPT and/or Codex prepare structured Obsidian notes.
- PR and issue summaries are converted into durable Second Brain notes.
- Dobromir approves major knowledge-architecture changes.

### Phase 5 — Dobromir Review Inbox

- Platform aggregates all required decisions into one place.
- Dobromir only reviews what needs human authority.

### Phase 6 — Selective Autonomous Execution

- Low-risk tasks can execute automatically.
- High-risk tasks still require Dobromir approval.
- Launches and full releases always require explicit approval.

### Phase 7 — Continuous Foundry Improvement

- Weekly Foundry Retrospective Agent reviews the full setup.
- It identifies friction, missing documentation, weak handoffs, and automation opportunities.
- It proposes Linear issues and Obsidian updates.
- Dobromir approves the next improvement direction.

## 20. Non-Goals

This specification does not aim to:

- Remove Dobromir from business decisions.
- Automate brand direction without approval.
- Automate client-facing publishing without approval.
- Automate release or launch approval.
- Make Codex the product owner.
- Hardcode the workflow only for DK Arkitekter Growth and Sales OS.
- Treat Obsidian as a random note archive.
- Allow documentation to remain fragmented across ChatGPT, Codex, Linear, and GitHub without a durable Obsidian knowledge record.
- Allow the Weekly Foundry Retrospective Agent to become an authority layer.

## 21. Safety and Control Rules

Required safety and control rules:

- Codex must stop and ask when the task requires judgment outside the approved scope.
- Codex must not expand scope without approval.
- Codex must not merge without approval.
- Codex must not publish externally without approval.
- Codex must not change pricing, legal, client-facing, or brand logic without approval.
- Codex must not restructure the Obsidian knowledge architecture without approval.
- Routine Linear status updates, PR links, completion comments, and approved non-sensitive Obsidian/vault summaries may proceed inside approved Execution Packet autonomy boundaries.
- Codex must report blockers clearly.
- Codex must identify when Dobromir input is needed.
- ChatGPT and Codex outputs that matter long term should produce structured Obsidian-ready summaries.
- The Weekly Foundry Retrospective Agent must suggest improvements but must not execute high-risk changes without approval.
- Launches and full releases always require explicit Dobromir approval.

These rules protect Dobromir's authority while allowing the platform to remove low-value manual transfer work.

## 22. Recommended Next Implementation Issues

Proposed next Linear issues:

### A. Create Standard Linear Issue Template for Dobromir Foundry

- Problem: Executable work needs a consistent issue structure.
- Goal: Create a reusable Linear issue template with required Foundry fields.
- Approval gate required: Scope approval.
- Task classification: B. Execute then request review.

### B. Create Standard Codex Task Prompt Template

- Problem: Codex tasks currently depend on manually prepared prompts.
- Goal: Create a standardized Codex prompt template for Linear issues.
- Approval gate required: Scope approval.
- Task classification: B. Execute then request review.

### C. Create PR Template with Approval Gates

- Problem: PRs need consistent visibility into acceptance criteria, risks, tests, approval gates, and Obsidian updates.
- Goal: Add a repository PR template for Dobromir Foundry work.
- Approval gate required: Scope approval.
- Task classification: B. Execute then request review.

### D. Create AGENTS.md Operating Rules for Dobromir Foundry

- Problem: Codex needs durable operating rules for Foundry tasks.
- Goal: Create an `AGENTS.md` file that defines scoped execution, stop conditions, approval gates, and reporting expectations.
- Approval gate required: Scope approval.
- Task classification: B. Execute then request review.

### E. Create Obsidian Second Brain Vault Structure Specification

- Problem: The Second Brain needs a detailed vault model before automation writes to it.
- Goal: Document folders, note types, metadata, linking rules, and ownership rules.
- Approval gate required: Knowledge architecture approval.
- Task classification: B. Execute then request review.

### F. Create Obsidian Note Templates for Products, Decisions, PRs, Issues, ChatGPT Sessions, and Weekly Retrospectives

- Problem: Knowledge capture will remain inconsistent without templates.
- Goal: Create reusable Obsidian templates for the required note types.
- Approval gate required: Knowledge architecture approval.
- Task classification: B. Execute then request review.

### G. Create Dobromir Review Inbox Concept Specification

- Problem: Dobromir should not hunt across tools for decisions and approvals.
- Goal: Specify a central review inbox that aggregates required human input.
- Approval gate required: Scope approval and automation approval.
- Task classification: B. Execute then request review.

### H. Research Linear-to-Codex Delegation Setup

- Problem: Manual triggering of Codex from Linear is a major copy-paste source.
- Goal: Research practical options for allowing Codex to work from Linear issues.
- Approval gate required: Automation approval.
- Task classification: B. Execute then request review.

### I. Research GitHub PR Automation Setup

- Problem: Branch, PR, check, and summary workflows should become more repeatable.
- Goal: Research automation options for PR creation, templates, checks, summaries, and status updates.
- Approval gate required: Automation approval.
- Task classification: B. Execute then request review.

### J. Research Obsidian Integration Options for Future Automation

- Problem: Obsidian is the permanent knowledge vault, but automated writing must be controlled.
- Goal: Research integration options for preparing, reviewing, and storing Obsidian notes.
- Approval gate required: Knowledge architecture approval and automation approval.
- Task classification: B. Execute then request review.

### K. Create Weekly Foundry Retrospective Agent Specification

- Problem: Continuous improvement needs a recurring workflow with clear limits.
- Goal: Specify retrospective inputs, outputs, rules, approval gates, and reporting format.
- Approval gate required: Retrospective action approval.
- Task classification: B. Execute then request review.

### L. Create Linear Issue Template for Foundry Improvement Proposals

- Problem: Retrospective findings need a consistent path into Linear.
- Goal: Create a Linear template for workflow improvement proposals.
- Approval gate required: Retrospective action approval.
- Task classification: B. Execute then request review.

### M. Create Automation Rules for When Retrospective Findings Become Linear Issues

- Problem: Not every finding should automatically become a task.
- Goal: Define criteria for safe issue creation, review-required issue creation, and do-not-automate cases.
- Approval gate required: Retrospective action approval and automation approval.
- Task classification: C. Stop and ask Dobromir first for any live automation.

Recommended first issue:

```text
A. Create standard Linear issue template for Dobromir Foundry.
```

This should come first because Linear is mission control. A reliable issue structure makes later Codex prompts, PR templates, Obsidian handoffs, approval gates, and retrospective improvements easier to standardize.
