# Foundry Control Center

Foundry Control Center is a Foundry-level visual dashboard/app for monitoring project states, architecture layers, Codex handovers, support state, and progress.

It belongs to Foundry System Layer and does not belong inside DK Arkitekter OS.

## Current Status

A minimal local/internal app shell exists at the repository root using Vite, React, and TypeScript.

The shell is not deployed and is not client-facing. It does not include authentication, automation, external integrations, registry mutation, or public routes.

The Foundry Launcher minimal wizard module now exists inside the shell as a local/internal UI product surface. It uses local React state and copyable Markdown output only.

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

- Foundry Launcher: minimal local wizard module available for visual review.

## V1.1 Limitations

- Uses local in-memory state only.
- Generates copyable Markdown output only.
- Does not write generated packet files to disk.
- Does not mutate the project registry.
- Does not create Linear or GitHub issues.
- Does not launch Codex.
- Does not integrate external systems.
- Does not deploy.

## Visual Review

Foundry Launcher V1.1 is a UI/product PR.

Dobromir should review the running local UI once before final merge for:

- screen flow
- density
- button placement
- field grouping
- whether it feels like a control panel

Technical implementation details do not require Dobromir review.

## What Remains Blocked

- File generation from the UI.
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

After visual review, decide whether the next approved packet should add local Markdown file generation, registry-backed read-only selectors, or full Approval Categories and Execution Permissions steps.
