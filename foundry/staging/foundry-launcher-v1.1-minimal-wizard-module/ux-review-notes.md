# UX Review Notes

Status: `approved_for_execution`

## Review Context

Dobromir completed the first visual/product review of the Foundry Launcher V1.1 minimal wizard module.

This document captures screen-by-screen feedback so Dobromir can review the UI without commenting directly on code files.

## Screen-by-Screen Review Table

| Step | Current issue | Dobromir feedback | Proposed correction | Status |
|---|---|---|---|---|
| Start | Flow generally works, but the review path needs clearer per-step context. | Overall flow makes sense. | Add an in-app review helper explaining purpose, what to check, and what is not implemented. | Applied |
| Parent Context | Dropdown logic did not fully reflect classification rules, and parent defaults could imply the wrong parent. | Dropdown logic needs correction. | Let classification drive allowed parent contexts; keep parent project unselected unless Foundry context is explicitly selected. | Applied |
| Metadata | Status and parent readouts were useful but needed clearer connection to current selections. | Some parts do not fully make sense yet. | Keep metadata focused on title, slug, classification, parent, and status only. | Applied |
| Intake | Amount of typing is acceptable. | Typing amount is acceptable. | Keep grouped text areas and avoid dictation/speech features. | Applied |
| Planning Depth | Basic was not visually separate enough from advanced planning packs. | Some parts felt unnecessary or unclear. | Separate Basic from advanced planning pack options. | Applied |
| Scope | Blocked work needed to remain visually clear and not appear like approved work. | Some parts need clearer meaning. | Keep blocked work grouped and preserve warnings instead of adding heavy validation. | Applied |
| Review | Review output is useful but should support visual/product review without code comments. | Need a better review/comment method for each step. | Add step review helper and keep generated summary visible. | Applied |
| Result | Copy output is useful, but future actions must not appear active. | Some parts are unnecessary or too future-facing. | Keep copyable output only and leave file generation/integrations blocked. | Applied |
| Global UI | UI feels like a control panel, but hierarchy needed improvement. | Feels like a control panel, but some parts are unnecessary or do not fully make sense. | Improve step header, action hierarchy, review helper, and blocked-work clarity without redesigning everything. | Applied |
| Dark mode | Dark mode was missing. | Dark mode is missing. | Add CSS custom-property dark mode with a simple local toggle and `prefers-color-scheme` support. | Applied |
| Dropdown logic | Parent context and parent project selections needed better rules. | Dropdowns/selections are present, but some dropdown logic is not correct. | Add classification-based parent context options, no DK Arkitekter OS default, no active Archive parent, and warnings for unresolved parent needs. | Applied |

## Remaining Review Focus

Dobromir should review the updated running UI for:

- whether the per-step review helper is useful
- whether parent-context behavior now matches expectations
- whether Basic vs advanced planning depth is clear
- whether dark mode is readable
- whether Result output still feels useful without becoming a future-integration screen
