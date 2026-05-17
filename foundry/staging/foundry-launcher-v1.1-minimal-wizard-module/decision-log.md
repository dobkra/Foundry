# Decision Log

Status: `approved_for_execution`

## Recorded Decisions

| Decision | Owner | Date | Status | Notes |
|---|---|---|---|---|
| Build the minimal Launcher wizard inside the Foundry Control Center app shell. | Dobromir | `2026-05-17` | Approved | Local/internal module only. |
| Use a local screen switch instead of routing for V1.1. | Technical execution | `2026-05-17` | Applied | Keeps V1.1 small and avoids app-route scope. |
| Use local React state only. | Technical execution | `2026-05-17` | Applied | No persistence, database, server, or generated file writes. |
| Use copyable Markdown output only. | Dobromir-directed execution | `2026-05-17` | Approved | Packet remains the source of truth; prompt is secondary. |
| Keep registry behavior read-only/reference-only. | Dobromir | `2026-05-17` | Approved | No registry mutation. Archive is not an active execution parent. |
| Require one Dobromir visual review before merge. | Dobromir | `2026-05-17` | Approved | UI/product PR review gate. |
| Overall wizard flow generally works. | Dobromir | `2026-05-17` | Recorded | Flow makes sense, but needed a UX correction pass. |
| Typing amount is acceptable. | Dobromir | `2026-05-17` | Recorded | Keep text input focused on unavoidable human context. |
| Dropdown logic needed correction. | Dobromir | `2026-05-17` | Applied | Classification now controls parent-context expectations and no parent project is selected by default. |
| Dark mode was missing. | Dobromir | `2026-05-17` | Applied | Added CSS-variable dark mode and local toggle. |
| Some sections felt unnecessary or unclear. | Dobromir | `2026-05-17` | Applied | De-emphasized future behavior, separated Basic planning from advanced packs, and tightened helper text. |
| Screen-by-screen feedback support was needed. | Dobromir | `2026-05-17` | Applied | Added `ux-review-notes.md` and in-app, per-step review helper. |
| Light and dark mode should be explicit buttons. | Dobromir | `2026-05-17` | Applied | Replaced the single theme toggle with Light and Dark buttons. |
| Parent Context needs group/project/module hierarchy. | Dobromir | `2026-05-17` | Applied | Added group, project, and module context modes. New projects can sit under groups; modules sit under projects or modules. |
| Work packages, audits, and decision workshops need affected-item selection. | Dobromir | `2026-05-17` | Applied | Added multi-select affected items across groups, projects, and modules. |
| Intake questions should be tuned for Codex handoff. | Dobromir | `2026-05-17` | Applied | Updated Intake fields around raw idea, requested outcome, current state, target state, constraints, and source materials. |
| Scope needs clearer blocked-work meaning. | Dobromir | `2026-05-17` | Applied | Added helper text that blocked work is not authorized by the packet. |
| Result should not feel like a duplicate Review page. | Dobromir | `2026-05-17` | Applied | Reframed Result as handoff/copy output after review. |

## Open Decisions For Future Packet

| Question | Status | Notes |
|---|---|---|
| Should V1.2 add local Markdown file generation? | Open for future packet | V1.1 deliberately avoids file writes. |
| Should future registry selectors read YAML directly or through a helper layer? | Open for future packet | V1.1 uses static read-only reference options. |
| Should the group/project/module hierarchy be formalized in the project registry? | Open for future packet | V1.1 uses static local options only and does not mutate the registry. |
| Should Approval Categories and Execution Permissions become full wizard steps next? | Open for future packet | V1.1 defers full automation. |
| Should future UI work introduce routing? | Open for future packet | V1.1 uses local screen state. |
| When should Linear/Codex/GitHub integrations begin? | Open for later approval-gated packet | All integrations remain blocked. |
