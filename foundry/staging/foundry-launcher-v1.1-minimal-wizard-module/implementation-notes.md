# Implementation Notes

Status: `approved_for_execution`

## Implementation Summary

V1.1 adds a minimal Foundry Launcher wizard module inside the existing Foundry Control Center app shell.

Dobromir completed the first visual/product review. This correction pass records that feedback and applies focused UX fixes without expanding the implementation boundary.

## Files Added

- `src/modules/launcher/LauncherWizard.tsx`
- `src/modules/launcher/launcherTypes.ts`
- `src/modules/launcher/launcherDefaults.ts`
- `src/modules/launcher/launcherSummary.ts`
- `foundry/staging/foundry-launcher-v1.1-minimal-wizard-module/ux-review-notes.md`

## Files Updated

- `src/App.tsx`
- `src/styles.css`
- `foundry/system/projects/foundry-control-center/README.md`
- `foundry/staging/INDEX.md`

## Wizard Screens

Implemented:

- Start.
- Parent Context.
- Metadata.
- Intake.
- Planning Depth.
- Scope.
- Review.
- Result.

Deferred:

- Full Approval Categories automation.
- Full Execution Permissions automation.
- Linear/GitHub/Codex actions.
- Registry mutation.
- File generation from the UI.

## UX Correction Pass

Applied after Dobromir visual review:

- Added screen-by-screen `ux-review-notes.md`.
- Added a non-invasive in-app review helper for each wizard step.
- Added dark mode through CSS custom properties, `prefers-color-scheme`, and a simple local toggle.
- Corrected parent-context and parent-project dropdown logic.
- Prevented DK Arkitekter OS from behaving like a default parent.
- Kept Archive as cold storage/reference only, not an active parent.
- Separated Basic planning depth from advanced planning packs.
- Preserved issue-breakdown warning for missing approved source scope.
- Reset wizard state when starting another packet.
- Corrected generated summary behavior when no planning depth is selected.

## Second UX Correction Pass

Applied after Dobromir's follow-up visual/product feedback:

- Replaced the single theme toggle with explicit Light and Dark buttons.
- Reworked Parent Context into a clearer context hierarchy model:
  - groups organize work and are not software projects
  - projects can contain modules
  - modules can be nested under projects or other modules
  - work packages, audits, and decision workshops can select multiple affected groups/projects/modules
- Updated Intake fields to better support Codex handoff:
  - raw idea / context
  - requested outcome
  - current state
  - target state
  - constraints / risks / unknowns
  - source materials / notes
- Added clearer blocked-work helper text explaining that blocked work means "not authorized by this packet."
- Reframed Result as the handoff/copy area so it no longer behaves like a duplicate Review screen.

## Third UX Correction Pass

Applied after Dobromir's follow-up feedback on Start and Parent Context:

- Added `New group` as a proposed future start type on the Start screen.
- Kept `New group` inactive as a V1.1 classification because the approved Launcher model still has five classifications.
- Replaced the hidden module-parent path with visible project and module parent cards for `new_module`.
- Made available modules visible in Parent Context without requiring a separate dropdown discovery step.
- Preserved the current static read-only hierarchy and recorded registry-backed hierarchy as a future decision.

## Remaining UI/Product Decisions

- Whether the review helper should remain in the main wizard or become a reviewer-only mode.
- Whether Light/Dark preference should later persist between sessions.
- Whether parent selectors should later read registry YAML directly.
- Whether the group/project/module hierarchy should become a registry-backed data model.
- Whether `new_group` should become a formal Launcher classification.
- Whether V1.2 should add local Markdown file generation.
- Whether Approval Categories and Execution Permissions should become full wizard steps.

## Output Behavior

The Result screen provides copyable Markdown text for:

- review summary
- draft Codex prompt placeholder
- optional packet outline

The running UI does not write files to disk.

## Registry Behavior

Registry behavior remains read-only/reference-only.

The wizard exposes static context options for V1.1 only:

- groups such as Foundry and DK Arkitekter OS
- projects such as Foundry Control Center and Foundry Project Registry
- modules such as Foundry Launcher and Foundry Launcher Wizard

Archive is shown as cold storage/reference only and is not selectable as an active execution parent.

## Verification Notes

Commands run:

- `npm install`
- `npm run typecheck`
- `npm run build`

Local dev server:

- `http://127.0.0.1:5174/`

Browser smoke test:

- Opened the Launcher wizard.
- Selected `work_package`.
- Selected Foundry parent context and project.
- Entered title and intake notes.
- Selected Issue breakdown and confirmed warning behavior.
- Filled scope notes and non-goals.
- Reached Review and Result screens.
- Verified copyable review summary and draft Codex prompt placeholder were present.
- Confirmed no console errors were reported.

## What Is Not Implemented

- File generation from UI.
- Registry reads or writes.
- External integrations.
- Automation.
- Authentication.
- Deployment.
- Public/client-facing route.
- Speech recognition.
- Audio storage or processing.
- Final visual branding.
