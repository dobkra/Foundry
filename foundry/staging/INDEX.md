# Staging Packet Index

This is the manual index of Foundry Launcher staging packets.

V0.3, V0.4, V0.5, and V0.6 remain manual. This index does not create folders, update Linear, update GitHub issues, trigger Codex, mutate the project registry, or enable automation.

| Packet id | Packet title | Classification | Status | Parent project/workflow/module | Approval state | Execution boundary | Packet folder |
|---|---|---|---|---|---|---|---|
| `foundry-launcher-v0.2` | Foundry Launcher V0.2 - First Real Staging Packet | `work_package` | `approved_for_execution` | Foundry / Foundry Launcher | Approved for narrow manual/documentation validation | Manual/documentation V0.2 validation only; automation and runtime work blocked. | [foundry-launcher-v0.2/](foundry-launcher-v0.2/) |
| `project-registry-normalization` | Project Registry Normalization | `work_package` | `needs_review` | Foundry / Project Registry | Pending Dobromir review | Documentation-only staging packet; registry mutation blocked. | [project-registry-normalization/](project-registry-normalization/) |
| `foundry-launcher-v0.4-packet-lifecycle-rules` | Foundry Launcher V0.4 Packet Lifecycle and Decision Update Rules | `work_package` | `approved_for_manual_execution` | Foundry / Foundry Launcher | Approved for documentation/manual governance use | Documentation/manual governance use only: lifecycle rules, packet status rules, decision-update procedure, and technical execution delegation reference. UI, automation, integrations, Codex self-launching, registry mutation, and deployment remain blocked. | [foundry-launcher-v0.4-packet-lifecycle-rules/](foundry-launcher-v0.4-packet-lifecycle-rules/) |
| `foundry-launcher-v0.5-ui-readiness-spec` | Foundry Launcher V0.5 UI Readiness Specification | `work_package` | `approved_for_manual_execution` | Foundry / Foundry Launcher | Approved for documentation/manual governance use | Documentation/manual governance use only: UI readiness spec, selection-first UX, dictation-friendly free text, packet-first result model, future Linear/Codex direction, and progressive planning packs. UI implementation, automation, integrations, Codex self-launching, registry mutation, and deployment remain blocked. | [foundry-launcher-v0.5-ui-readiness-spec/](foundry-launcher-v0.5-ui-readiness-spec/) |
| `foundry-launcher-v0.6-progressive-planning-pack-templates` | Foundry Launcher V0.6 Progressive Planning Pack Templates | `work_package` | `approved_for_manual_execution` | Foundry / Foundry Launcher | Approved for documentation/manual governance use | Documentation/manual governance use only: progressive planning pack templates, planning pack selection guide, lightweight TOGAF-inspired architecture planning framework, and progressive architecture depth rule. UI implementation, automation, integrations, Codex self-launching, registry mutation, and deployment remain blocked. | [foundry-launcher-v0.6-progressive-planning-pack-templates/](foundry-launcher-v0.6-progressive-planning-pack-templates/) |

## Index Rules

- Add packets manually after they are created or approved for tracking.
- Keep packet ids aligned with folder names.
- Keep status values aligned with the packet `approval.md` and `execution-readiness.md`.
- Do not treat an index entry as execution approval. The packet approval files remain the source for execution boundary and blocked work.
