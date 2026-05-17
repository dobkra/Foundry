# Decision Log

Status: `approved_for_execution`

| Date | Decision / Question | Reviewer | Status | Notes |
|---|---|---|---|---|
| 2026-05-17 | Add local copyable Markdown packet output. | Dobromir | Approved | Allowed only as in-memory Markdown generation with copy buttons. |
| 2026-05-17 | Should the UI write generated packet files to disk? | Dobromir | Blocked | V1.2 remains copy-only. Disk writes require a later approval. |
| 2026-05-17 | Should planning pack files be generated in V1.2? | Dobromir | Deferred | V1.2 generates only core packet files. |

## Open Future Questions

- Should V1.3 add safe local file generation under `foundry/staging/`?
- Should generated Markdown include optional planning pack files later?
- Should status become editable in the UI?
- Should registry-backed selectors read YAML directly in a later version?
