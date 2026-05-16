# Decision Log

Status: `approved_for_execution`

## Initial Decision State

Dobromir has reviewed the V0.2 first staging packet and approved a narrow manual/documentation execution boundary.

No automation, external-system setup, or registry mutation is approved by this decision update.

## Open Questions And Answers

- Should `foundry/staging/` become the canonical staging area?
  Answered: yes, for Foundry-level and governance packets.
- Should staging packets be stored globally or inside each project/module?
  Answered: use a hybrid model. Foundry/global governance packets live in `foundry/staging/`; project-local packets may later live inside the relevant project repo under `staging/`; cross-project or Foundry governance work stays in `foundry/staging/`.
- Should every future Codex execution packet reference a Launcher packet?
  Answered: future Codex execution packets should reference a Launcher packet when the work is approval-gated.
- Should V0.3 introduce automation or remain documentation-only?
  Answered: V0.3 should remain manual. Do not introduce automation yet.
- Should the project registry reference approved staging packets?
  Answered: the project registry may lightly reference approved staging packets for approved `new_project` and `new_module` entries. `work_package` packets should not mutate the registry unless they affect durable project/module structure.

## Initial Notes

- The current packet uses `foundry/staging/foundry-launcher-v0.2/` as the first canonical Foundry-level staging location.
- The packet does not create a project registry entry.
- The packet does not create execution setup.
- Automation remains blocked.
- V0.3 may improve indexing, status conventions, packet references, and manual operating rules.

## Launcher Packet Reference Rule

Launcher packet required for:

- New project.
- New module.
- New work package.
- Audit.
- Decision workshop.
- Automation.
- Deployment/release.
- Registry change.
- Client-facing, business, creative, legal, or pricing decisions.

Launcher packet not required for:

- Tiny routine implementation inside an already approved scope.
- Bugfix inside an already approved issue.
- Documentation correction with no scope impact.

## Decisions

| Date | Decision | Owner | Notes |
|---|---|---|---|
| 2026-05-16 | Canonical Foundry staging location approved | Dobromir | `foundry/staging/` is the canonical staging area for Foundry-level and governance packets. |
| 2026-05-16 | Hybrid packet storage model approved | Dobromir | Foundry/global governance packets live in `foundry/staging/`; project-local packets may later live in project repos under `staging/`; cross-project or Foundry governance work stays in `foundry/staging/`. |
| 2026-05-16 | Approval-gated Codex work should reference Launcher packets | Dobromir | Required for new project, new module, new work package, audit, decision workshop, automation, deployment/release, registry change, and client-facing/business/creative/legal/pricing decisions. Not required for tiny routine approved-scope work, approved-issue bugfixes, or no-scope-impact documentation corrections. |
| 2026-05-16 | V0.3 remains manual | Dobromir | No automation in V0.3. V0.3 may improve indexing, status conventions, packet references, and manual operating rules. |
| 2026-05-16 | Registry references limited | Dobromir | The project registry may lightly reference approved staging packets for approved `new_project` and `new_module` entries. `work_package` packets should not mutate the registry unless they affect durable project/module structure. |
