# Implementation Blocker

Status: `approved_for_execution`

## Blocker Summary

No suitable UI shell exists in the current Foundry repo.

Because the approved V1.0 boundary explicitly says not to create a large new app framework when no suitable shell exists, this PR stops at the implementation-blocker report path.

## Evidence

Repository pre-flight found:

- No `package.json`.
- No frontend app framework.
- No app routing system.
- No `src/`, `app/`, `pages/`, `components/`, or equivalent UI source structure.
- No existing implemented Foundry Control Center shell.
- Foundry Control Center documentation exists, but its README states it is future/planned and no app implementation exists.

## Recommended Next Step

Create a future approved bootstrap packet for the minimum Foundry Control Center app shell.

That packet should choose the smallest appropriate local/internal app foundation and define exactly where Launcher screens will live.

## Minimum App Shell Needed

A future approved bootstrap PR should provide, at minimum:

- A package manifest and local dev command.
- A clear internal app entry point.
- A routing or screen selection pattern.
- A Foundry Control Center home/shell surface.
- A place for Launcher screen/module files.
- A minimal styling baseline for neutral internal utility UI.
- A test/lint/build command if the selected stack supports it.
- A documented local-only operating boundary.

## Future Files/Folders To Create After Approval

Exact paths depend on the approved app stack. A future bootstrap PR may create a small set like:

- `package.json`
- `src/` or framework-equivalent app source folder.
- A Foundry Control Center entry route/screen.
- A Launcher screen/module folder.
- A small shared UI/component folder if the selected stack requires it.
- A local stylesheet or design token file for neutral utility styling.
- A README explaining local startup and boundaries.

These are examples only. This PR does not create them.

## Future Launcher UI Scope After Shell Exists

A later approved implementation packet may build the minimal local/internal wizard:

- Start.
- Parent Context.
- Metadata.
- Intake.
- Planning Depth.
- Scope.
- Review.
- Result.

The future UI should support:

- Classification selection.
- Parent context selection.
- Title and slug entry.
- Basic intake text.
- Planning depth selection.
- Blocked work selection.
- Review summary.
- Result summary with packet id, packet path, classification, blocked work, review summary, Codex prompt placeholder, and packet-first note.

## Boundaries Preserved

This PR does not add:

- UI implementation.
- React components.
- App routes.
- Code.
- Scripts.
- Automation.
- Linear issue creation.
- GitHub issue creation.
- Codex launch.
- Linear/GitHub/Codex integration.
- Work folders.
- Registry mutation.
- Database/server work.
- Authentication.
- Deployment.
- Public/client-facing routes.
- Speech recognition.
- Audio storage or processing.
- DK Arkitekter OS repo changes.
- Final visual branding.
