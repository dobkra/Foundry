# Decision Log

Status: `approved_for_execution`

## Recorded Decisions

| Decision | Owner | Date | Status | Notes |
|---|---|---|---|---|
| Bootstrap a minimal local/internal Foundry Control Center app shell. | Dobromir | `2026-05-17` | Approved | Shell only; full Launcher wizard remains blocked. |
| Use Vite + React + TypeScript. | Dobromir | `2026-05-17` | Approved | Preferred lightweight stack for local internal UI foundation. |
| Keep the app local/internal only. | Dobromir | `2026-05-17` | Approved | No deployment, authentication, external integrations, automation, or registry mutation. |
| Represent Foundry Launcher as a placeholder module card. | Dobromir-directed execution | `2026-05-17` | Applied | Card shows purpose, `Coming next` status, next step, and blocked work. |

## Open Decisions For Future Packet

| Question | Status | Notes |
|---|---|---|
| Should the next packet build the minimal Launcher wizard module? | Open for future packet | This is the recommended next task. |
| Should future module navigation use routing or in-app state first? | Open for future packet | V1 shell does not add routing beyond Vite entry. |
| Should Foundry adopt npm lockfiles as standard for app work? | Open for future maintenance packet | Direct dependencies are pinned in this bootstrap. |
| Should registry selectors later read YAML directly or through a helper layer? | Open for future implementation packet | Registry remains read-only/reference-only. |
| When should deployment, authentication, or integrations be considered? | Open for later approval-gated packets | All remain blocked. |
