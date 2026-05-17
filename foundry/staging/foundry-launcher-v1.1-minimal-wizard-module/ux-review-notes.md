# UX Review Notes

Status: `approved_for_execution`

## Review Context

Dobromir completed the first visual/product review of the Foundry Launcher V1.1 minimal wizard module.

This document captures screen-by-screen feedback so Dobromir can review the UI without commenting directly on code files.

## Screen-by-Screen Review Table

| Step | Current issue | Dobromir feedback | Proposed correction | Status |
|---|---|---|---|---|
| Start | Flow generally works, but the review path needs clearer per-step context. | Overall flow makes sense. | Add an in-app review helper explaining purpose, what to check, and what is not implemented. | Applied |
| Parent Context | Flat parent-project dropdown did not match the needed group/project/module model. | New project can belong under a group; groups are not software; projects can contain modules; work packages, audits, and decision workshops need affected-item selection across groups/projects/modules. | Replace flat parent project logic with context modes, group/project/module selector rules, and multi-select affected items. | Applied |
| Metadata | Status and parent readouts were useful but needed clearer connection to current selections. | Some parts do not fully make sense yet. | Keep metadata focused on title, slug, classification, context, and status only. | Applied |
| Intake | Original questions were acceptable but needed clearer purpose for Codex handoff. | Dobromir was unsure whether the questions made sense and asked what would work better for Codex. | Rename fields around raw idea, requested outcome, current state, target state, constraints/risks/unknowns, and source materials. | Applied |
| Planning Depth | Basic was not visually separate enough from advanced planning packs. | Some parts felt unnecessary or unclear. | Separate Basic from advanced planning pack options. | Applied |
| Scope | Blocked work needed to remain visually clear and not appear like approved work. | Some parts need clearer meaning. | Keep blocked work grouped and preserve warnings instead of adding heavy validation. | Applied |
| Review | Review output is useful but should support visual/product review without code comments. | Need a better review/comment method for each step. | Add step review helper and keep generated summary visible. | Applied |
| Result | Result looked too similar to Review. | Result felt like another Review page and was hard to understand. | Reframe Result as the handoff/copy area: Review checks the packet; Result copies handoff text. | Applied |
| Global UI | UI feels like a control panel, but hierarchy needed improvement. | Feels like a control panel, but some parts are unnecessary or do not fully make sense. | Improve step header, action hierarchy, review helper, and blocked-work clarity without redesigning everything. | Applied |
| Dark mode | Dark mode was missing. | Dark and light mode should both be explicit. | Replace the single theme toggle with Light and Dark buttons. | Applied |
| Dropdown logic | Parent context and parent project selections needed better rules. | Dropdowns/selections are present, but some dropdown logic is not correct. | Add classification-based context modes, group/project/module options, affected-item checklists, no DK Arkitekter OS default, and no active Archive parent. | Applied |

## Remaining Review Focus

Dobromir should review the updated running UI for:

- whether the per-step review helper is useful
- whether parent-context behavior now matches expectations
- whether the group/project/module model matches how Foundry should structure work
- whether affected-item multi-select works for work packages, audits, and decision workshops
- whether Basic vs advanced planning depth is clear
- whether Light/Dark buttons are clear
- whether Result now feels like handoff instead of repeated review
