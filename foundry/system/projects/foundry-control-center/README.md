# Foundry Control Center

Foundry Control Center is a Foundry-level visual dashboard/app for monitoring project states, architecture layers, Codex handovers, support state, and progress.

It belongs to Foundry System Layer and does not belong inside DK Arkitekter OS.

## Current Status

A minimal local/internal app shell exists at the repository root using Vite, React, and TypeScript.

The shell is not deployed and is not client-facing. It does not include authentication, automation, external integrations, registry mutation, or a completed Launcher wizard.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Validate the app shell:

```bash
npm run typecheck
npm run build
```

Preview a production build locally:

```bash
npm run preview
```

## Current Modules

- Foundry Launcher: coming next. The app shell shows a placeholder module card only.

## What Remains Blocked

- Full Foundry Launcher wizard.
- Linear issue creation.
- GitHub issue creation.
- Codex launch or self-launching.
- Linear/GitHub/Codex integration.
- Automation.
- Registry mutation.
- Authentication.
- Database/server work.
- Deployment.
- Public/client-facing routes.
- Speech recognition.
- Audio storage or processing.
- DK Arkitekter OS repo changes.
- Final visual branding.

## Next Intended Step

Build the minimal Foundry Launcher wizard module inside this shell, still local/internal only and without external integrations.
