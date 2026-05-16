# Decision Log

Status: `approved_for_manual_execution`

## Decision State

V0.6 progressive planning pack templates have been reviewed and merged into `main` for documentation/manual Foundry Launcher governance use.

## Open Questions For Future Packets

These questions may inform later work, but this packet does not approve UI implementation, automation, runtime behavior, integrations, deployment, or registry mutation.

- Should these packs become optional modules inside future UI?
- Should V0.7 define a full project-initiation example using the packs?
- Should issue breakdown be the first place where Linear issue structure is drafted?
- Should project-local repos later include their own planning-packs folder?
- Should Discovery and Architecture packs be required for all `new_project` classifications?
- Should the future Launcher UI include an architecture-depth selector?
- Should `new_project` classifications default to Discovery + Architecture + Goals/Outcomes before Issue Breakdown?
- Should small work packages be allowed to bypass architecture packs entirely?
- Should the framework remain TOGAF-inspired without using formal TOGAF terminology in the UI?

## Decision Notes

- V0.6 remains documentation-only.
- Planning pack templates do not create UI, automation, Linear issues, GitHub issues, Codex tasks, registry updates, deployments, or runtime Launcher behavior.
- Issue breakdown must not invent scope.
- The lightweight architecture planning framework is TOGAF-inspired only and does not implement full TOGAF.
- Small work is not forced through heavy architecture process.

## Decisions

| Date | Decision | Owner | Notes |
|---|---|---|---|
| `2026-05-16` | Approved for documentation/manual governance use | Dobromir | Approved progressive planning pack templates, planning pack selection guide, lightweight TOGAF-inspired architecture planning framework, and progressive architecture depth rule. Runtime implementation, UI, automation, external integrations, registry mutation, deployment, and Codex self-launching remain blocked unless separately approved. |
