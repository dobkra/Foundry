# GitHub Workflow

Linear alignment: DK-97 OPS-003.

## Purpose

GitHub is the source of truth for approved docs, code, templates, schemas, and review history.

## Branch rules

No direct commits to `main`.

Every change requires:

1. Linear issue
2. Branch
3. Commit
4. Pull request
5. Review and approval gate
6. Merge after approval

## Branch naming

Use:

```text
LINEAR-ID/short-kebab-description
```

Examples:

- `DK-35/project-record-model`
- `DK-36/heritage-studies-model`
- `DK-37/seo-ads-landing-structure`

## Pull request requirements

Every PR must include:

- Linear issue reference
- work level and autonomy level when the task came from a Foundry Execution Packet
- assigned agent
- changed systems
- scope
- out-of-scope
- screenshots or preview notes if UI
- tests/checks
- guardrail checklist
- required approval gates
- Security / Data Governance review notes when the PR touches privacy, access control, private data, raw/source material, media rights, source attribution, secrets, deployment, analytics/tracking, client portal data, quote/pricing data, or automation data flows
- deployment/release notes when the PR affects environment strategy, hosting assumptions, production readiness, rollback, provider settings, or release scope

## PR scope rules

- One PR should map to one clear Linear task or tightly grouped set of related tasks.
- Do not mix unrelated systems.
- Do not combine visual changes with backend/business logic unless the Linear issue explicitly approves that combined scope.
- Do not include private data, raw media, client data, pricing files, quote snapshots, signed agreements, or ad invoices.
- Parallel branches must follow `foundry/standards/parallel-agent-development-limits-v1.md` and must list ownership boundaries and dependency PRs when relevant.

## Merge readiness

A PR is not ready to merge until:

- requested checks pass
- scope matches the Linear issue
- guardrails are confirmed
- required screenshots or previews are provided
- required approval phrase is present when applicable
- QA/review result is clear

Technical approval does not equal business approval. Code review does not equal visual approval.

Definition of Ready and Definition of Done rules are documented in `foundry/standards/definition-ready-done-v1.md`. Use that document to decide whether a branch may start, whether a PR is review-ready, and whether a merged PR can close the Linear issue.

Parallel-agent branch and PR rules are documented in `foundry/standards/parallel-agent-development-limits-v1.md`.

Security / Data Governance Agent responsibilities are documented in `dk-arkitekter-os/project-governance/agents/security-data-governance-agent.md`. Use that document when a PR has privacy, rights, attribution, access-control, raw/source material, secret, private-data, or security-sensitive implications.

DK agenda alignment with the Foundry Execution Packet workflow is documented in `foundry/project-registry/dk-agenda-foundry-execution-alignment-v1.md`. Use it to verify that Codex-created DK PRs came from a complete packet, stayed inside authorized routine actions, and did not perform merge, deployment, release, publishing, settings, automation, or unrelated Linear work.

Deployment and environment strategy is documented in `dk-arkitekter-os/growth-and-sales/modules/governance-data-integrations/deployment-environment-strategy-v1.md`. Use it when a PR mentions Hostinger, preview/staging, production, environment variables, secrets, rollback, deployment approval, full release approval, or provider boundaries.
