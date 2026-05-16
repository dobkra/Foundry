# Decision Log

Status: `approved_for_execution`

## Recorded Decisions

| Decision | Owner | Date | Status | Notes |
|---|---|---|---|---|
| Move V1.0 into first narrow local/internal Launcher UI foundation work. | Dobromir | `2026-05-17` | Approved | Approved boundary excludes deployment, automation, external integrations, registry mutation, Codex launch, and DK Arkitekter OS changes. |
| Use existing repository stack if one exists. | Dobromir | `2026-05-17` | Approved | No new app stack should be invented before detecting the repo structure. |
| Stop at implementation-blocker report if no suitable UI shell exists. | Dobromir | `2026-05-17` | Applied | Pre-flight found no app framework, package manifest, routing system, or UI/component shell. |

## Pre-Flight Finding

No suitable UI shell exists in the Foundry repo.

The Foundry Control Center exists only as documentation under `foundry/system/projects/foundry-control-center/`.

## Open Decisions For Future Packet

| Question | Status | Notes |
|---|---|---|
| What minimum app shell should Foundry use? | Open for future bootstrap packet | The current repo has no package manifest or frontend stack. |
| Should the first app shell be local-only or a local web app? | Open for future bootstrap packet | Deployment remains blocked. |
| Should registry selectors read YAML directly or through a helper layer? | Open for future implementation packet | Registry remains read-only/reference-only. |
| Should V1 initially generate Markdown files or only copy packet markdown? | Open for future implementation packet | File generation remains blocked until there is an approved shell and safe route. |
| Where exactly should the Launcher sit inside Foundry Control Center navigation? | Open for future implementation packet | Product placement remains internal only and unbranded. |
