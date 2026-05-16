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
| Screen-by-screen feedback support was needed. | Dobromir | `2026-05-17` | Applied | Added `ux-review-notes.md` and in-app per-step review helper. |

## Open Decisions For Future Packet

| Question | Status | Notes |
|---|---|---|
| Should V1.2 add local Markdown file generation? | Open for future packet | V1.1 deliberately avoids file writes. |
| Should future registry selectors read YAML directly or through a helper layer? | Open for future packet | V1.1 uses static read-only reference options. |
| Should Approval Categories and Execution Permissions become full wizard steps next? | Open for future packet | V1.1 defers full automation. |
| Should future UI work introduce routing? | Open for future packet | V1.1 uses local screen state. |
| When should Linear/Codex/GitHub integrations begin? | Open for later approval-gated packet | All integrations remain blocked. |
