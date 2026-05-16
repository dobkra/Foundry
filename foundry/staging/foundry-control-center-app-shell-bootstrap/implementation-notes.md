# Implementation Notes

Status: `approved_for_execution`

## Stack Chosen

Vite + React + TypeScript.

Reason:

- Lightweight.
- Fast local development.
- Simple internal UI foundation.
- Suitable for future Foundry Launcher screen/module work.
- Avoids overbuilding.

## App Shell Files

Created:

- `package.json`
- `index.html`
- `tsconfig.json`
- `vite.config.ts`
- `src/main.tsx`
- `src/App.tsx`
- `src/styles.css`
- `.gitignore`

## Shell Behavior

The app displays:

- Title: Dobromir Foundry Control Center.
- Subtitle: Internal execution factory control surface.
- Section: Available modules.
- Module card: Foundry Launcher.
- Module status: Coming next.
- Local/internal-only boundary note.

The Foundry Launcher card shows:

- Purpose: Start and stage Foundry work before execution.
- Current status: UI shell ready; Launcher module not implemented yet.
- Next step: build minimal Launcher wizard module.
- Blocked: Linear/GitHub/Codex integration, automation, registry mutation, deployment.

## Registry Behavior

Registry behavior is read-only/reference-only.

The shell displays static parent reference options:

- Foundry.
- DK Arkitekter OS.

Archive is explicitly not selectable as an active execution parent.

## Lockfile Policy

`npm install` was run during verification. Direct dependency versions are pinned in `package.json`.

No `package-lock.json` is committed in this bootstrap because the repository did not previously have a package-manager policy and the requested file set did not include a lockfile. A future maintenance packet may add one if Foundry chooses npm lockfiles as standard.

## Verification Notes

Local verification completed in a temporary copy of the branch contents because this workspace does not have a local Git checkout.

Commands run:

- `npm install`
- `npm run typecheck`
- `npm run build`

A local Vite dev server was also started for smoke testing. Port `5173` was occupied, so Vite used `http://127.0.0.1:5174/`.

## What Is Not Implemented

- Full Foundry Launcher wizard.
- Packet generation.
- Registry reads or writes.
- External integrations.
- Automation.
- Authentication.
- Deployment.
- Public/client-facing route.
- Speech recognition.
- Audio storage or processing.
- Final visual branding.
