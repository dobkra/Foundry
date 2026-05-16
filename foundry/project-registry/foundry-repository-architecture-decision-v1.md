# Foundry Repository Architecture Decision V1

## Status

Draft for Dobromir review.

## Linear Issue

DF-11 - Decide Foundry Repository Architecture.

## Decision Scope

This document decides the recommended repository architecture direction for Dobromir Foundry governance.

This is documentation-only. No repository was created. No files were moved. No files were deleted. No application behavior changed. No automation was activated. No deployment or release was performed. Obsidian was not restructured.

## 1. Current State

Current active repository:

```text
dobkra/dk-arkitekter-os
```

Dobromir Foundry is the parent platform for software creation, business systems, AI-assisted execution workflows, repository governance, Linear mission control, and Obsidian Second Brain governance.

DK Arkitekter OS / Growth & Sales is one product inside Dobromir Foundry. It is not the parent platform.

Foundry governance currently lives inside the DK Arkitekter OS / Growth & Sales repository. This is practical for the current stage because DK Arkitekter OS / Growth & Sales is the first active product and the first place where Foundry operating rules are being tested.

The current repository therefore has two roles:

- Product repository for DK Arkitekter OS / Growth & Sales.
- Temporary host for Dobromir Foundry operating-layer governance.

This mixed state should be treated as intentional but transitional.

## 2. Repository Structure Audit

This audit is based on the current repository tree at the time of DF-11.

### Parent-Platform Foundry Files

These files primarily describe Dobromir Foundry as the parent platform, its operating layer, or its cross-tool governance:

- `foundry/system/workflows/codex-linear-github/dobromir-foundry-autonomous-execution-second-brain-workflow-v1.md`
- `dobkra/archive:foundry/workflow-audits/codex-linear-github/foundry-system-audit-v1.md`
- `foundry/standards/foundry-obsidian-second-brain-structure-v1.md`
- `foundry/system/projects/foundry-control-center/foundry-review-inbox-v1.md`
- `foundry/system/workflows/codex-linear-github/foundry-weekly-retrospective-workflow-v1.md`
- `foundry/templates/foundry-linear-issue-template.md`
- `foundry/templates/foundry-codex-task-prompt-template.md`
- `foundry/templates/foundry-pr-template.md`
- `foundry/system/workflows/codex-linear-github/foundry-linear-issue-workflow-v1.md`
- `foundry/system/workflows/codex-linear-github/foundry-codex-task-prompt-workflow-v1.md`
- `foundry/project-registry/foundry-repository-architecture-decision-v1.md`

These files are candidates for a future dedicated Foundry repository if Dobromir approves a split.

### DK Arkitekter Product-Specific Files

These files primarily belong to DK Arkitekter OS / Growth & Sales as a product repository:

- `README.md`
- `package.json`
- `package-lock.json`
- `next.config.ts`
- `tsconfig.json`
- `tailwind.config.ts`
- `postcss.config.mjs`
- `next-env.d.ts`
- `src/app/**`
- `src/components/**`
- `src/lib/**`
- `public/images/**`

Product-specific documentation also includes:

- `dk-arkitekter-os/growth-and-sales/modules/public-website-frontend/website-mvp.md`
- `dk-arkitekter-os/growth-and-sales/modules/public-website-frontend/website-information-architecture-v2.md`
- `dk-arkitekter-os/growth-and-sales/modules/public-website-frontend/landing-page-direction-v6.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/sales-pipeline.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/quote-generator-price-book/quote-generator-mvp.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/content-to-leads-engine-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/organic-publishing-hub-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/governance-data-integrations/hostinger-app-strategy.md`
- `dk-arkitekter-os/growth-and-sales/modules/local-desktop-production-systems/local-tooling-strategy.md`
- `dk-arkitekter-os/growth-and-sales/modules/governance-data-integrations/media-governance-asset-lifecycle-v1.md`
- `dk-arkitekter-os/project-governance/platform-architecture-v1.md`
- `dk-arkitekter-os/project-governance/roadmap.md`
- `dobkra/archive:dk-arkitekter-os/superseded/week-1-plan.md`
- `dobkra/archive:dk-arkitekter-os/superseded/linear-week-1-issues.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/project-records-manager/project-record-model-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/heritage-building-records-manager/heritage-building-record-model-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/governance-data-integrations/rights-source-attribution-workflow-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/organic-publishing-hub-scope-v1.md`
- `dk-arkitekter-os/project-governance/agents/backend-agent.md`
- `dk-arkitekter-os/project-governance/agents/cms-content-agent.md`
- `dk-arkitekter-os/project-governance/agents/frontend-agent.md`
- `dk-arkitekter-os/project-governance/agents/project-manager-agent.md`
- `dk-arkitekter-os/project-governance/agents/qa-review-agent.md`
- `dk-arkitekter-os/project-governance/agents/seo-marketing-agent.md`

These files should remain in the DK Arkitekter OS / Growth & Sales repository unless a later approved product-architecture task says otherwise.

### Mixed or Bridge Files

These files currently bridge Foundry-level governance and DK Arkitekter product execution:

- `AGENTS.md`
  - Contains Dobromir Foundry parent-platform rules.
  - Also contains DK Arkitekter OS / Growth & Sales product-specific rules.
- `.github/pull_request_template.md`
  - Applies to this repository and contains approval-gate controls.
  - It is useful as a product-repo guardrail and may later need a Foundry-level equivalent or reference.
- `.github/workflows/ci.yml`
  - Applies to this product repository's checks.
  - It should not move into a Foundry repository because it validates this app.
- `foundry/standards/definition-ready-done-v1.md`
- `foundry/system/workflows/codex-linear-github/daily-linear-control-v1.md`
- `foundry/standards/multi-agent-operating-model-v1.md`
- `foundry/standards/parallel-agent-development-limits-v1.md`
- `foundry/system/workflows/codex-linear-github/github-workflow.md`
- `foundry/system/workflows/codex-linear-github/linear-workflow.md`
- `foundry/support/qa-review-flow.md`

These bridge files should be handled carefully during any future split. Some should remain product-specific. Some may later become Foundry-wide templates with product-specific overrides.

## 3. Architecture Options

### Option A: Keep Foundry Governance Inside the DK Arkitekter Repo For Now

Foundry governance remains in `dobkra/dk-arkitekter-os` while the operating model is still being validated.

Benefits:

- Lowest operational risk.
- Keeps GitHub, Linear, Codex, and PR workflow simple.
- Avoids splitting governance before the workflow has stabilized.
- Lets DK Arkitekter OS / Growth & Sales continue serving as the first real proving ground for Foundry.
- Avoids creating a second repo before bridge/reference rules are clear.

Costs:

- Foundry parent-platform files are mixed with product-specific files.
- Codex may need extra care to distinguish Foundry governance tasks from DK Arkitekter product tasks.
- Future products will need references back to this repo until a parent repo exists.

### Option B: Split Foundry Into a Dedicated Repo Later

Foundry governance stays in the current product repo for now, but a future dedicated repository such as `dobromir-foundry` is planned after the operating layer is mature enough.

Benefits:

- Keeps current execution simple while acknowledging the correct long-term architecture.
- Gives Dobromir time to validate templates, approval gates, Review Inbox, Obsidian structure, and Linear-to-Codex delegation.
- Prevents premature fragmentation.
- Creates a clean future path where Foundry can govern multiple product repositories.
- Reduces long-term confusion once more products exist.

Costs:

- Requires a future migration task.
- Requires clear bridge/reference rules before moving governance files.
- Requires Dobromir approval for repository creation and knowledge architecture changes.

### Option C: Split Foundry Into a Dedicated Repo Now

Create a new `dobromir-foundry` repository now and move Foundry governance into it immediately.

Benefits:

- Clean parent-platform separation from the beginning.
- Makes the Foundry parent system visibly independent of DK Arkitekter OS / Growth & Sales.
- Reduces long-term product-governance mixing if done correctly.

Costs:

- Highest immediate operational risk.
- Adds repo, branch, PR, and documentation coordination before DF-8 and DF-9 are complete.
- Could increase Dobromir copy-paste and context switching in the short term.
- Could confuse Codex if parent-governance and product-execution rules are split before references are stable.
- Could fragment Obsidian, Linear, and GitHub source-of-truth relationships before the Foundry operating layer is mature.

## 4. Recommendation

Recommendation: Option B - keep Foundry governance inside the DK Arkitekter OS / Growth & Sales repository for now, and plan a dedicated `dobromir-foundry` repository later.

Reasoning:

- Current maturity favors simplicity. DF-10, DF-1, and DF-2 have only just established the first operating-layer structure.
- The current repo is still the active proving ground for Foundry execution rules.
- A split now would add operational overhead before the Review Inbox, Obsidian structure, PR template, GitHub audit, and Linear-to-Codex delegation path are fully reviewed.
- Future autonomy benefits from a dedicated Foundry repository, but only after bridge rules are clear.
- Keeping the current structure for now reduces copy-paste, avoids premature fragmentation, and gives Codex one source of repository context while the model stabilizes.

The recommended direction is therefore:

1. Keep Foundry governance in this repository temporarily.
2. Mark the current arrangement as transitional.
3. Prepare a future migration only after Dobromir approves direction-change and knowledge-architecture gates.
4. Do not create `dobromir-foundry` until a dedicated approved Linear issue exists.

## 5. Future Migration Plan

Because Option B recommends a later split, the migration plan should be staged and approval-gated.

No migration may happen without Dobromir's explicit approval.

### What Would Move Later

Candidate files for a future `dobromir-foundry` repository:

- `foundry/system/workflows/codex-linear-github/dobromir-foundry-autonomous-execution-second-brain-workflow-v1.md`
- `dobkra/archive:foundry/workflow-audits/codex-linear-github/foundry-system-audit-v1.md`
- `foundry/standards/foundry-obsidian-second-brain-structure-v1.md`
- `foundry/system/projects/foundry-control-center/foundry-review-inbox-v1.md`
- `foundry/system/workflows/codex-linear-github/foundry-weekly-retrospective-workflow-v1.md`
- `foundry/templates/foundry-linear-issue-template.md`
- `foundry/templates/foundry-codex-task-prompt-template.md`
- `foundry/templates/foundry-pr-template.md`
- `foundry/system/workflows/codex-linear-github/foundry-linear-issue-workflow-v1.md`
- `foundry/system/workflows/codex-linear-github/foundry-codex-task-prompt-workflow-v1.md`
- `foundry/project-registry/foundry-repository-architecture-decision-v1.md`

Future Foundry-wide versions of these bridge documents could also move or be copied as templates after review:

- `foundry/standards/definition-ready-done-v1.md`
- `foundry/standards/multi-agent-operating-model-v1.md`
- `foundry/standards/parallel-agent-development-limits-v1.md`
- `foundry/system/workflows/codex-linear-github/github-workflow.md`
- `foundry/system/workflows/codex-linear-github/linear-workflow.md`

### What Would Stay In DK Arkitekter OS / Growth & Sales

The following should stay in `dobkra/dk-arkitekter-os`:

- Product application source under `src/**`.
- Public assets under `public/**`.
- Product package and framework config files.
- DK Arkitekter product documentation.
- DK Arkitekter product-specific agents.
- DK Arkitekter product-specific GitHub Actions.
- DK Arkitekter product-specific PR template or product overlay.
- Product-specific sections of `AGENTS.md`.

### Links and References Needed

If a dedicated Foundry repo is approved later:

- DK Arkitekter `AGENTS.md` should link to the canonical Foundry operating rules.
- DK Arkitekter docs should keep product-specific overrides and reference Foundry-wide defaults.
- The Foundry repo should maintain an index of product repositories.
- Linear DF issues should link to the Foundry repo.
- Product-specific Linear issues should link to their product repos.
- Obsidian should record the parent-platform decision and product-repo relationships.
- Codex prompts should state whether the source of truth is the Foundry repo, a product repo, or both.

### Staged Migration Steps

1. Create a Linear issue specifically for Foundry repository creation and migration planning.
2. Require direction-change approval and knowledge-architecture approval.
3. Create the `dobromir-foundry` repository only after approval.
4. Copy candidate Foundry governance files into the new repo on a migration branch.
5. Add a Foundry repo README explaining parent-platform ownership.
6. Add bridge references from DK Arkitekter OS / Growth & Sales to the new Foundry repo.
7. Preserve product-specific `AGENTS.md` rules in the DK Arkitekter repo.
8. Update Linear issue templates and Codex prompt templates to reference the correct repo source of truth.
9. Prepare Obsidian-ready summaries for the repository split.
10. Review and approve before merging migration PRs.
11. Do not delete old files until the new source of truth is confirmed.
12. Replace old files with explicit reference stubs only after Dobromir approves.

## 6. Bridge and Reference Strategy

### DK Arkitekter Product Repo References

The DK Arkitekter OS / Growth & Sales repo should:

- Keep product-specific implementation, docs, checks, and release history.
- Reference Foundry governance for parent-platform rules.
- Keep product-specific overrides in local docs and `AGENTS.md`.
- Make every PR identify whether it is product work, Foundry governance work, or bridge work.

### Future Foundry Repo References

A future `dobromir-foundry` repo should:

- Define parent-platform operating rules.
- Store Foundry templates, cross-tool workflows, and repository-agnostic governance.
- Maintain a product repository registry.
- Link to DK Arkitekter OS / Growth & Sales as one product.
- Avoid storing product implementation code.

### Linear Alignment

Linear should remain mission control:

- Foundry-wide work belongs in the `Dobromir Foundry` team and `Foundry Operating System` project.
- DK Arkitekter product work belongs in the product's existing Linear structure unless Dobromir changes that.
- Issues must state source-of-truth repository and approval gates.
- Migration tasks must not be bundled with product feature work.

### GitHub Alignment

GitHub should remain the source of truth for repository documentation and code:

- Foundry repo would own Foundry governance if created later.
- DK Arkitekter repo would own product implementation and product-specific docs.
- Bridge docs should link clearly in both directions.
- PRs must identify whether they change Foundry governance, product behavior, or bridge references.

### Codex Alignment

Codex should:

- Read the active repository `AGENTS.md`.
- Confirm whether the task is Foundry-level, product-level, or bridge-level.
- Stop before creating repos, moving files, deleting files, restructuring Obsidian, or changing GitHub architecture.
- Use Linear issue scope as the execution contract.

### Obsidian Alignment

Obsidian remains the Second Brain:

- The repository architecture decision should be captured as durable knowledge.
- Product repo relationships should be recorded in Obsidian after Dobromir approval.
- No Obsidian restructuring should happen from this decision alone.
- Any knowledge architecture change needs explicit approval.

## 7. Risks

### Fragmentation Risk

Splitting too early can scatter Foundry rules across GitHub, Linear, Obsidian, and product repos before the reference model is ready.

Mitigation:

- Keep the current repo as the temporary source of Foundry governance until a migration issue is approved.

### Premature Repo Split Risk

A new repo now could create extra branches, PRs, issue links, and source-of-truth questions before the workflow has stabilized.

Mitigation:

- Delay repo creation until after the Foundry operating layer has been reviewed across DF-3, DF-4, DF-5, DF-7, DF-8, and DF-9 or equivalent approved tasks.

### Mixed Governance/Product Ownership Risk

Keeping Foundry files in the product repo can make it unclear whether a document is parent-platform governance or DK Arkitekter-specific.

Mitigation:

- Store new parent-platform files under `docs/foundry/**` where practical.
- Label PRs and Linear issues clearly as Foundry-level, product-level, or bridge-level.

### Codex Confusion Risk

Codex may apply Foundry-wide rules to product work incorrectly, or treat product-specific rules as parent-platform defaults.

Mitigation:

- Prompts must state the task level and source-of-truth repository.
- `AGENTS.md` should continue distinguishing Foundry parent-platform rules from DK Arkitekter product rules.

### Obsidian Knowledge Architecture Risk

A repo split could imply changes to the Second Brain structure.

Mitigation:

- Treat Obsidian updates as summaries first.
- Do not restructure Obsidian without knowledge architecture approval.

## 8. Decision Authority

Dobromir is the final authority for this architecture decision.

Direction-change approval is required before changing the repository architecture.

Knowledge architecture approval is required before changing the Obsidian Second Brain structure or durable Foundry knowledge taxonomy.

Codex must not:

- Create repositories.
- Move files.
- Delete files.
- Restructure Obsidian.
- Change GitHub architecture.
- Change approval gates.
- Activate automation.
- Start DF-8 from this decision.
- Change product behavior.
- Publish, deploy, release, or merge without explicit approval.

## 9. Next Action Recommendation

Recommended next safe Linear issue after DF-11:

```text
Create Foundry repository split readiness checklist
```

Purpose:

Define the exact conditions that must be true before Dobromir Foundry can safely move from temporary governance inside the DK Arkitekter product repo into a dedicated `dobromir-foundry` repository.

This next issue should not create a repository, move files, delete files, restructure Obsidian, or activate automation. It should only define readiness criteria, source-of-truth rules, migration blockers, and approval gates.
