# Scope

Status: `approved_for_execution`

## Approved Scope

Create a minimal local/internal Foundry Control Center app shell using Vite, React, and TypeScript.

## In Scope

- Root package manifest.
- Minimal Vite configuration.
- TypeScript configuration.
- React app entry point.
- Neutral CSS.
- Internal Control Center landing page.
- Available modules section.
- Foundry Launcher placeholder card with `Coming next` status.
- Explicit local/internal boundary note.
- Read-only parent reference for Foundry and DK Arkitekter OS.
- Archive blocked as active execution parent.
- Staging packet and index update.
- Control Center README update.

## Out Of Scope

- Full Launcher wizard.
- Module routing beyond the shell surface.
- Packet generation.
- Registry reads or writes.
- Linear issue creation.
- GitHub issue creation.
- Codex launch.
- Linear/GitHub/Codex integration.
- Automation.
- Database/server behavior.
- Authentication.
- Deployment.
- CI configuration.
- Tailwind, shadcn, framer-motion, charts, or unrelated libraries.
- Public/client-facing route.
- Speech recognition.
- Audio storage or processing.
- DK Arkitekter OS repo changes.
- Final visual branding.

## Lockfile Policy

This bootstrap pins direct dependency versions in `package.json` and does not commit a lockfile yet. The repository did not previously have a package-manager policy, and this keeps the initial app-shell PR small.

A future maintenance PR may add `package-lock.json` if Foundry chooses npm lockfiles as the standard for app work.
