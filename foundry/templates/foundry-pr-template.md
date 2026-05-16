# Foundry Pull Request Template

This documented template mirrors the active GitHub template at `.github/pull_request_template.md`. Keep both files synchronized when the Foundry PR workflow changes.

## Linear Issue

Issue:

Link:

## Task Level

Choose one:

- [ ] Foundry-level
- [ ] DK Arkitekter product-level
- [ ] Bridge/mixed

Task level notes:

## Assigned Agent / Execution Owner

<!-- Project Manager Agent / Frontend Agent / Backend Agent / CMS-Content Agent / SEO-Marketing Agent / QA-Review Agent / Codex / Dobromir / other owner -->

## Summary

<!-- What changed and why. -->

## Scope

<!-- What this PR includes. -->

## Out of Scope

<!-- What this PR intentionally does not include. -->

## Files Changed

- `path` - purpose

## Acceptance Criteria Checklist

- [ ] Linear issue acceptance criteria are satisfied.
- [ ] Scope stayed within the Linear issue.
- [ ] Required approval gates are listed below.
- [ ] Required documentation updates are covered below.
- [ ] No unrelated systems changed.

## Checks / Tests Run

- [ ] `npm run lint:docs --if-present`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] `git diff --check`
- [ ] Route checks, if relevant:
- [ ] Responsive checks, if relevant:
- [ ] Other:
- [ ] Not run; explain why:

## Risk Review

Risk level:

- [ ] Low
- [ ] Medium
- [ ] High

Known risks:

- [Risk or "None known"]

Risk mitigation:

- [Mitigation or "Not applicable"]

## Obsidian / Second Brain Documentation Update

Choose all that apply:

- [ ] None required.
- [ ] Obsidian-ready summary included in PR or Linear comment.
- [ ] Existing Obsidian note should be updated.
- [ ] New Obsidian note should be created.
- [ ] Knowledge architecture approval required before storing.

Suggested Obsidian location:

## Dobromir Input Needed

Choose all that apply:

- [ ] No Dobromir input needed beyond normal review.
- [ ] Dobromir input needed before merge.
- [ ] Dobromir decision needed before continuing.
- [ ] Dobromir approval needed before launch.
- [ ] Dobromir approval needed before full release.

Input needed:

## Approval Gates

Required gates:

- [ ] Scope approval.
- [ ] Visual approval.
- [ ] Business function approval.
- [ ] Client-facing content approval.
- [ ] Automation approval.
- [ ] Knowledge architecture approval.
- [ ] Launch approval.
- [ ] Full release approval.
- [ ] Direction-change approval.
- [ ] Retrospective action approval.
- [ ] Not applicable; explain why:

Approval evidence or links:

## Screenshots / Preview

<!-- Required for UI or visual changes. Include local URL, screenshots, or route summary. -->

## Launch / Release Safety

- [ ] This PR does not launch, release, deploy, publish content, send emails, run ads, activate automation, change pricing, change legal wording, or change client-facing text.
- [ ] If launch, release, deployment, publishing, automation, pricing, legal, or client-facing behavior is involved, explicit Dobromir approval is linked above.
- [ ] This PR has no silent merge, deployment, release, publishing, sending, or external side effect.

## Guardrails Checklist

- [ ] No direct commit to `main`.
- [ ] Linear issue is linked.
- [ ] Branch follows `LINEAR-ID/short-kebab-description`.
- [ ] Scope matches the Linear issue.
- [ ] No unrelated systems changed.
- [ ] No other Linear issue was started.
- [ ] No merge performed by this PR.
- [ ] No deploy or release automation added or enabled.
- [ ] No automation activated unless explicitly approved.
- [ ] No content published unless explicitly approved.
- [ ] No emails sent unless explicitly approved.
- [ ] No pricing, quote, sales, legal, or client-facing text changed unless explicitly approved.
- [ ] No Obsidian restructuring unless explicitly approved.
- [ ] No repository created, deleted, moved, or restructured unless explicitly approved.
- [ ] No files moved or deleted outside approved scope.
- [ ] No website routes changed unless explicitly approved.
- [ ] No website design changed unless explicitly approved.
- [ ] No backend added unless explicitly approved.
- [ ] No database added unless explicitly approved.
- [ ] No authentication added unless explicitly approved.
- [ ] No CMS added unless explicitly approved.
- [ ] No analytics or tracking added unless explicitly approved.
- [ ] No ads integration added unless explicitly approved.
- [ ] No raw media or private data committed.

## Reviewer Notes

<!-- Anything the reviewer should inspect carefully. -->
