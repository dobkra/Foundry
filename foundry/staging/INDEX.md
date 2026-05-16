# Staging Packet Index

This is the manual index of Foundry Launcher staging packets.

V0.3 and V0.4 remain manual. This index does not create folders, update Linear, update GitHub issues, trigger Codex, mutate the project registry, or enable automation.

| Packet id | Packet title | Classification | Status | Parent project/workflow/module | Approval state | Execution boundary | Packet folder |
|---|---|---|---|---|---|---|---|
| `foundry-launcher-v0.2` | Foundry Launcher V0.2 - First Real Staging Packet | `work_package` | `approved_for_execution` | Foundry / Foundry Launcher | Approved for narrow manual/documentation validation | Manual/documentation V0.2 validation only; automation and runtime work blocked. | [foundry-launcher-v0.2/](foundry-launcher-v0.2/) |
| `project-registry-normalization` | Project Registry Normalization | `work_package` | `needs_review` | Foundry / Project Registry | Pending Dobromir review | Documentation-only staging packet; registry mutation blocked. | [project-registry-normalization/](project-registry-normalization/) |
| `foundry-launcher-v0.4-packet-lifecycle-rules` | Foundry Launcher V0.4 Packet Lifecycle and Decision Update Rules | `work_package` | `needs_review` | Foundry / Foundry Launcher | Pending Dobromir review | Documentation-only packet lifecycle rules; automation blocked. | [foundry-launcher-v0.4-packet-lifecycle-rules/](foundry-launcher-v0.4-packet-lifecycle-rules/) |

## Index Rules

- Add packets manually after they are created or approved for tracking.
- Keep packet ids aligned with folder names.
- Keep status values aligned with the packet `approval.md` and `execution-readiness.md`.
- Do not treat an index entry as execution approval. The packet approval files remain the source for execution boundary and blocked work.
