# Decision Log

Status: `approved_for_manual_execution`

## Decision State

V0.5 UI readiness specification has been reviewed and merged into `main` for documentation/manual Foundry Launcher governance use.

## Open Questions For Future Packets

These questions may inform later work, but this packet does not approve UI implementation, automation, runtime behavior, integrations, deployment, or registry mutation.

- Should the future Launcher UI be part of Foundry Control Center or standalone first?
- Should parent project/module options come from registry YAML initially?
- Should packet generation remain manual file output before automation?
- Should UI show Dobromir-required vs delegated technical execution decisions?
- Should future dictation use browser speech recognition only, with no audio storage?
- Should Linear integration start with project/issue creation only after packet approval?
- Should Codex tasks use a work folder by default or only when needed?
- Should Discovery / Architecture / Business Functions / Goals / UI Sprint packs become optional packet modules?
- Should a future packet be UI wireframe/spec refinement or first implementation packet?

## Decision Notes

- V0.5 remains documentation-only and manual.
- V0.5 does not build UI.
- V0.5 does not create app routes, components, server code, database files, automation, or integrations.
- The future UI direction is selection-first and typing-light.
- Free-text fields should be dictation-friendly, but V0.5 does not implement speech recognition or store/process audio.
- The future result model is packet first, prompt second, execution only after approval.
- Future Linear/Codex integration direction is documented, but no integration is implemented.
- Progressive planning packs are documented, but no packs are implemented by V0.5.
- UI implementation remains blocked until a separate approved implementation packet exists.

## Decisions

| Date | Decision | Owner | Notes |
|---|---|---|---|
| `2026-05-16` | Approved for documentation/manual governance use | Dobromir | Approved UI readiness specification, selection-first / typing-light UX principle, dictation-assisted free-text requirement, packet-first / prompt-second result model, future Linear/Codex direction as documentation only, and progressive planning packs as documentation only. Runtime implementation, UI, automation, external integrations, registry mutation, deployment, and Codex self-launching remain blocked unless separately approved. |
