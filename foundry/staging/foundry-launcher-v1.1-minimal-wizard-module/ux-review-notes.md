# UX Review Notes

Status: `approved_for_execution`

## Review Context

Dobromir completed the first visual/product review of the Foundry Launcher V1.1 minimal wizard module.

This document captures screen-by-screen feedback so Dobromir can review the UI without commenting directly on code files.

## Screen-by-Screen Review Table

| Step | Current issue | Dobromir feedback | Proposed correction | Status |
|---|---|---|---|---|
| Start | The approved five classification choices do not include group creation. | Start may need an option to start a new Group. | Show `New group` as a proposed future start type for review, but do not activate it as a V1.1 classification without a later classification-model decision. | Applied as proposal |
| Parent Context | Module selection was too hidden behind the `Parent module` context-mode dropdown. | Available modules could not be seen clearly in the current options. | For `new_module`, show project parents and module parents directly as selectable cards. Keep Archive reference-only. | Applied |
| Metadata | Status and parent readouts were useful but needed clearer connection to current selections. | Some parts do not fully make sense yet. | Keep metadata focused on title, slug, classification, context, and status only. | Applied |
| Intake | Original questions were acceptable but needed clearer purpose for Codex handoff. | Dobromir was unsure whether the questions made sense and asked what would work better for Codex. | Rename fields around raw idea, requested outcome, current state, target state, constraints/risks/unknowns, and source materials. | Applied |
| Planning Depth | Basic was not visually separate enough from advanced planning packs. | Some parts felt unnecessary or unclear. | Separate Basic from advanced planning pack options. | Applied |
| Scope | Blocked work needed to remain visually clear and not appear like approved work. | Some parts need clearer meaning. | Keep blocked work grouped and preserve warnings instead of adding heavy validation. | Applied |
| Review | Review output is useful but should support visual/product review without code comments. | Need a better review/comment method for each step. | Add step review helper and keep generated summary visible. | Applied |
| Result | Result looked too similar to Review. | Result felt like another Review page and was hard to understand. | Reframe Result as the handoff/copy area: Review checks the packet; Result copies handoff text. | Applied |
| Global UI | UI feels like a control panel, but hierarchy needed improvement. | Feels like a control panel, but some parts are unnecessary or do not fully make sense. | Improve step header, action hierarchy, review helper, and blocked-work clarity without redesigning everything. | Applied |
| Dark mode | Dark mode was missing. | Dark and light mode should both be explicit. | Replace the single theme toggle with Light and Dark buttons. | Applied |
| Dropdown logic | Parent context and parent project selections needed better rules. | Dropdowns/selections are present, but some dropdown logic is not correct. | Add classification-based context modes, group/project/module options, affected-item checklists, no DK Arkitekter OS default, and no active Archive parent. | Applied |

## Follow-Up Visual Feedback

Recorded on `2026-05-17`:

- Start may need a `New group` option.
- `New group` is currently treated as a proposed future classification because V1.1 is still based on the approved Launcher classification model.
- Parent Context should make available modules visible instead of requiring Dobromir to discover the `Parent module` dropdown path.
- Current project/module hierarchy is still static and may need a stronger registry-backed model later.
- Dark/black mode should be the default theme, with Light still available as a button.

## Remaining Review Focus

Dobromir should review the updated running UI for:

- whether the per-step review helper is useful
- whether parent-context behavior now matches expectations
- whether the group/project/module model matches how Foundry should structure work
- whether `New group` should become a formal Launcher classification
- whether module hierarchy should become registry-backed instead of static
- whether affected-item multi-select works for work packages, audits, and decision workshops
- whether Basic vs advanced planning depth is clear
- whether Light/Dark buttons are clear
- whether Result now feels like handoff instead of repeated review
