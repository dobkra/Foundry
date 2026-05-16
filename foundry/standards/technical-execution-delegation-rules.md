# Technical Execution Delegation Rules

## Core Rule

Do not ask Dobromir for technical execution steps.
Ask Dobromir only for direction/authority decisions.

These rules remove Dobromir from routine technical loops while preserving Dobromir as final authority for strategic, business, creative, client-facing, legal, pricing, product, architecture, and autonomous-system decisions.

This document does not authorize automation, external-system mutation, registry meaning changes, deployment, release, public launch, or client-facing changes by itself.

## Proceed Without Dobromir

ChatGPT and Codex may proceed without asking Dobromir when the task is already inside an approved scope and is one of:

- Routine Markdown/doc updates.
- Routine safe implementation inside an approved packet/scope.
- Formatting, cleanup, consistency fixes, or typo correction.
- Updating links and references.
- Aligning wording with already approved decisions.
- Fixing repo casing or stale transitional wording.
- Adding references to approved staging packets.
- Checking CI/status.
- Fixing routine failed checks.
- Merging routine approved PRs when verification passes.
- Preparing release notes from already approved changes.
- Updating documentation after an approved release.
- Technical project registry cleanup that only reflects already approved decisions.
- Technical deployment/release steps that do not change live/public/client-facing behavior.

Proceeding without Dobromir means continuing within the approved execution boundary. It does not allow scope expansion, new project/module creation, autonomous automation, live public changes, client-facing changes, or durable architecture decisions.

## Ask Dobromir

ChatGPT and Codex must ask Dobromir when the task would decide or change:

- Business direction.
- Product meaning.
- Creative/visual direction.
- Client-facing behavior or public messaging.
- Pricing/commercial position.
- Legal/privacy position.
- Architecture ownership or project/module boundaries.
- Whether work belongs in Foundry, DK Arkitekter OS, archive, or another repo.
- Approval model rules.
- Autonomous automation scope.
- Production deployment with business/client/user impact.
- Public launch.
- Major version/release meaning.
- New project creation.
- New module creation.
- Durable registry meaning, not just technical cleanup.

## Registry Work

Technical registry cleanup does not require Dobromir when it only:

- Fixes repo casing.
- Removes obvious transitional wording.
- Aligns registry status labels with already approved decisions.
- Adds links to approved staging packets.
- Preserves existing project/module meaning.
- Keeps registry files consistent with merged Foundry decisions.

Dobromir is required when registry work:

- Creates a new project.
- Creates a new module.
- Changes ownership/scope.
- Changes project meaning.
- Changes parent/child architecture.
- Decides whether something belongs in Foundry, DK Arkitekter OS, archive, or another repo.
- Changes the approval model.

## Deployment and Release Work

Technical deployment/release steps do not require Dobromir when they only:

- Prepare release notes from approved changes.
- Merge routine approved PRs after verification.
- Tag or document versions according to an approved versioning rule.
- Update docs after an approved release.
- Check CI/status.
- Fix routine failed checks.

Dobromir is required when deployment/release work:

- Publishes something client-facing.
- Changes live product behavior.
- Affects users, clients, business operations, or public messaging.
- Enables automation that can act without review.
- Releases a major version with product/business meaning.
- Launches a production system.

## Practical Operating Rule

If the decision is already approved, ChatGPT and Codex continue without asking Dobromir.

If the task only implements, formats, cleans, aligns, verifies, documents, or merges routine approved work, ChatGPT and Codex continue without asking Dobromir.

If the task changes business direction, product meaning, architecture ownership, public/client-facing behavior, legal/privacy position, pricing/commercial position, or autonomous-system power, ask Dobromir.
