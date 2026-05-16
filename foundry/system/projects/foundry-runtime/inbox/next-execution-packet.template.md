# Foundry Execution Packet - Template

Copy this file to:

```text
foundry/system/projects/foundry-runtime/inbox/next-execution-packet.md
```

The copied live file is ignored by Git.

## Packet Title

[Short title]

## Linear Issue

- Issue:
- URL:
- Current status:
- Project:
- Team:

## Work Level

[Foundry-level / DK Arkitekter product-level / Bridge/mixed]

## Autonomy Level

[Level 0 / Level 1 / Level 2 / Level 3 / Level 4]

Authorized routine actions:

- [Active issue status updates / active-issue comments / PR links / completion summaries / approved non-sensitive Obsidian notes / draft follow-up proposals / Review Inbox candidates / None]

## Current State Verified

- Linear issue exists:
- No conflicting PR exists:
- Base branch current:
- Relevant prior PRs:

## Source-of-Truth Files

- [path] - [reason]

## Exact Task

[One bounded task Codex should execute.]

## Allowed Files / Areas

- [path or area]

## Forbidden Files / Areas

- [path or area]

## Required Approval Gates

- [gate]: [approved / missing / not required]

## Stop Conditions

Codex must stop before:

- [condition]

## Branch Name

[LINEAR-ID]/short-kebab-description

## PR Title

[LINEAR-ID] Short task title

## Checks to Run

- `npm run lint:docs --if-present`
- `git diff --check`
- `git diff --cached --check` before commit

## Expected Codex Output

Write result to:

```text
foundry/system/projects/foundry-runtime/outbox/codex-result.md
```

Optionally write review summary to:

```text
foundry/system/projects/foundry-runtime/review/ready-for-chatgpt.md
```

## Safety

Do not include client/private/sensitive data in this runtime file.

Do not commit this filled packet.
