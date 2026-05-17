# Implementation Notes

Status: `approved_for_execution`

## Implementation Boundary

V1.2 adds copyable Markdown packet output only. Generated Markdown is produced from local React state in browser memory.

## Expected UI Behavior

- Result screen shows packet path.
- Result screen shows generated file names.
- User can preview each generated Markdown file.
- User can copy the current file.
- User can copy all packet Markdown.
- UI clearly states that V1.2 is copy-only and does not write files to disk.

## Files Expected From Generator

- `intake.md`
- `classification.md`
- `scope.md`
- `decision-log.md`
- `approval.md`
- `execution-readiness.md`
- `implementation-notes.md`

## Verification Targets

- TypeScript passes.
- Production build passes.
- Local dev server renders.
- Result screen shows generated packet files.
- Copy current file works.
- Copy all packet Markdown works.
- Dark mode remains default.
- No file generation, registry mutation, or external integration is added.
