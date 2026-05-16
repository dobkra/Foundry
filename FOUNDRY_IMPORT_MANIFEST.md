# Foundry Import Manifest

## Summary

- Source repository: `dobkra/dk-arkitekter-os`
- Source commit SHA used for copy: `55e08872aa8946382a09665c156af2f85eae5cfd`
- Foundry import branch: `codex/step-10b-initial-foundry-import`
- Date of import: 2026-05-16
- Archive repository: `dobkra/archive`
- Archive commit SHA: `eeb27372c514be2ff1c13d1185ae775443e0daaf`

This is a copy-first Foundry extraction import. DK source repo cleanup/removal is deferred to Step 10C.

## Imported Material

| Source path | Foundry repo path | Reason | Status |
|---|---|---|---|
| `foundry/README.md` | `foundry/README.md` | Main Foundry documentation entry point. | copied, not removed from source |
| `foundry/00_DASHBOARD.md` | `foundry/00_DASHBOARD.md` | Active Foundry dashboard. | copied, not removed from source |
| `foundry/01_ACTIVE_PROJECTS.md` | `foundry/01_ACTIVE_PROJECTS.md` | Active Foundry project overview. | copied, not removed from source |
| `foundry/02_DECISIONS_INDEX.md` | `foundry/02_DECISIONS_INDEX.md` | Active Foundry decision index. | copied, not removed from source |
| `foundry/03_QUALITY_CONTROL.md` | `foundry/03_QUALITY_CONTROL.md` | Active Foundry quality control entry point. | copied, not removed from source |
| `foundry/standards/**` | `foundry/standards/**` | Foundry-global standards. | copied, not removed from source |
| `foundry/templates/**` | `foundry/templates/**` | Foundry-global templates. | copied, not removed from source |
| `foundry/support/**` | `foundry/support/**` | Foundry-global support and helpdesk layer. | copied, not removed from source |
| `foundry/project-registry/**` | `foundry/project-registry/**` | Foundry project registry material. | copied, not removed from source |
| `foundry/system/README.md` | `foundry/system/README.md` | Foundry system overview. | copied, not removed from source |
| `foundry/system/workflows/codex-linear-github/**` | `foundry/system/workflows/codex-linear-github/**` | Active Codex, Linear, and GitHub workflow material. | copied, not removed from source |
| `foundry/system/workflows/paperclip-praxion-intelligence-layer/**` | `foundry/system/workflows/paperclip-praxion-intelligence-layer/**` | Active Paperclip/Praxion intelligence workflow material. | copied, not removed from source |
| `foundry/system/projects/foundry-control-center/**` | `foundry/system/projects/foundry-control-center/**` | Active Foundry Control Center planning material. | copied, not removed from source |
| `foundry/system/projects/foundry-runtime/**` | `foundry/system/projects/foundry-runtime/**` | Active Foundry Runtime planning material. | copied, not removed from source |

## Deferred

Step 10C should replace extracted Foundry-global payloads in `dobkra/dk-arkitekter-os` with pointer files and update active DK references to point to `dobkra/foundry`.
