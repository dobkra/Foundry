# Launcher Fast Track Review Rules

## Purpose

These rules define when Foundry Launcher packets may be created directly as `approved_for_manual_execution` and avoid a second status-normalization pull request.

The goal is to reduce repetitive governance loops while keeping direction, authority, runtime, integration, registry, automation, deployment, and product decisions gated.

## Single-Pass Approval For Safe Documentation/Manual Work

Codex may create a Launcher packet directly with:

Status: `approved_for_manual_execution`

when all are true:

- The task is already directed by Dobromir or ChatGPT.
- The change is Markdown/YAML only.
- The scope is documentation/manual governance/specification/planning only.
- No code, UI, automation, integration, deployment, registry meaning change, or runtime behavior is added.
- All blocked work is explicitly listed.
- The packet does not create a real project/module.
- The packet does not create Linear/GitHub issues.
- The packet does not launch Codex.
- The packet does not mutate external systems except the GitHub PR itself.

## Use `needs_review` Only When A Real Decision Is Unresolved

Use:

Status: `needs_review`

when the packet asks Dobromir to decide:

- Business direction.
- Creative/visual direction.
- Client-facing scope.
- Legal/privacy.
- Pricing/commercial logic.
- Architecture ownership.
- New project/module creation.
- Registry meaning change.
- Automation.
- Deployment/public launch.
- UI implementation boundary.
- External-system integration.

## No Automatic Follow-Up Normalization PRs

Do not create a second PR just to change `needs_review` to `approved_for_manual_execution` if the original PR could safely have used `approved_for_manual_execution`.

If a packet is safe documentation/manual work under these rules, the status should be correct in the original PR.

## Merge Review Becomes The Status Decision

For safe documentation/manual PRs, the assistant's review and merge confirms the `approved_for_manual_execution` state.

The packet must still record its execution boundary and blocked work clearly. Merge does not expand the boundary beyond what the packet states.

## Keep Blocked Boundaries

Even fast-tracked packets must explicitly state blocked work unless separately approved:

- UI implementation.
- Code.
- App routes.
- Automation.
- Linear/GitHub integration.
- Codex launch/self-launching.
- Registry mutation.
- Deployment.
- Database/server work.
- DK Arkitekter OS repo changes.

## Relationship To Delegation Rules

Fast-track review rules apply only to safe documentation/manual work inside an already clear scope.

Use the [Technical Execution Delegation Rules](../../../standards/technical-execution-delegation-rules.md) for the broader authority model.

Use the [Launcher Packet Lifecycle Rules](launcher-packet-lifecycle-rules.md) for status definitions and transition terminology.
