# Step 13A — Global Linear Alignment Audit

## Scope

- Audit-only.
- No Linear issues were edited.
- No Linear projects were edited.
- No Linear labels were edited.
- No Linear issue statuses, assignees, priorities, or project placements were changed.
- No GitHub repositories were modified except for this audit report in the Foundry repository.
- No source code was changed.
- No deployment was performed.

## Current Repo Model

- `dobkra/dk-arkitekter-os` = active DK Arkitekter business OS
- `dobkra/Foundry` = active global execution factory
- `dobkra/archive` = global cold storage

## Linear Inventory Summary

Inventory method:

- Reviewed the main Linear issue inventory returned by `_list_issues` in three pages.
- Reviewed active Linear projects returned by `_list_projects`.
- Ran targeted searches for stale repo slugs, repo URLs, local paths, product names, Foundry/Praxion/Paperclip terms, and archive terms.
- Fetched high-risk matching issues for full descriptions and attachments.

Counts:

- Total issues reviewed: 133 primary issue records.
- Open issues reviewed: 55.
- Completed/recent issues reviewed: 78.
- Projects reviewed: 13.
- Issues aligned: 51 open issues have correct DK/Foundry ownership and no confirmed repo/path blocker in the audit view.
- Issues needing update: 21 high-confidence issue records, plus 47 old GitHub URL search candidates requiring comment/attachment-level verification before edits.
- Issues needing Dobromir review: 8.
- Close/archive candidates: 16.

Notes:

- The old GitHub URL search for `https://github.com/dobkra/dk-arkitekter-growth-sales-os` returned 47 issue candidates. Several confirmed examples are listed below; some matches may live in Linear comments or attachments not included in `_fetch` output.
- Search for final repo links `https://github.com/dobkra/dk-arkitekter-os`, `https://github.com/dobkra/Foundry`, and `https://github.com/dobkra/archive` returned no issue hits.

## Findings by Category

| Linear issue ID | Title | Current project/status | Classification | Problem found | Recommended action | Risk | Requires Dobromir review |
|---|---|---|---|---|---|---|---|
| DK-116 | DAILY-001 Daily Growth OS Review | Operating Rhythm & Daily Control / Todo | Needs product naming update | Active recurring issue still says `DK Arkitekter Growth & Sales OS` and uses `Daily Growth OS Review`. | Update title/description to the approved current DK product name if Dobromir approves naming cleanup. | Medium | Yes |
| DK-89 | ADMIN-010 Define Heritage Building Record manager inside Admin / Growth Studio | Platform Architecture & Roadmap / Backlog | Needs local path update | References `W:\DK Arkitekter OS\Historical Buildings`; this may be a raw-media source path, not a repo path, but it conflicts with the final repo path model. | Confirm whether this path is still the canonical raw media location; update only after Dobromir confirms. | Medium | Yes |
| DK-91 | MEDIA-001 Define raw vs published media storage strategy | Platform Architecture & Roadmap / Backlog | Needs local path update | References `W:\DK Arkitekter OS\Historical Buildings`. | Same as DK-89: confirm raw media source path before updating. | Medium | Yes |
| DK-90 | CONTENTFLOW-006 Define temporary raw heritage folder workflow | Content-to-Leads Engine / Done | Needs local path update / Completed | Completed issue references `W:\DK Arkitekter OS\Historical Buildings`. | Leave as historical unless Step 13B approves adding a current-path note. | Low | Yes |
| DK-100 | STRATEGY-003 Create Heritage Building Record Model V1 | Content-to-Leads Engine / Done | Needs local path update / Needs repo reference update | References `W:\DK Arkitekter OS\Historical Buildings`; attachment points to old GitHub slug. | Add current repo/path clarification only if historical cleanup is approved. | Medium | Yes |
| DF-9 | Audit GitHub automation and PR workflow for Foundry | Foundry Operating System / Done | Needs repo reference update | Foundry issue has PR attachment under `dobkra/dk-arkitekter-growth-sales-os`. | If historical links are cleaned up, add/replace with current Foundry repo or archive reference. | High | No |
| DF-10 | Create Foundry System Audit Report V1 | Foundry Operating System / Done | Needs repo reference update / Needs product naming update | Foundry audit issue links old DK repo PR; description references DK Arkitekter Growth and Sales OS as first product inside Foundry. | Keep as historical or annotate with post-split repo model in Step 13B. | Medium | Yes |
| DF-11 | Decide Foundry Repository Architecture | Foundry Operating System / Done | Completed / historical assumption | Description explicitly says Foundry governance currently lives inside the DK Arkitekter Growth & Sales OS repository. That was true before the split, but is false now. | Treat as completed historical decision record; optionally add a current-state note or archive pointer after approval. | High | No |
| DF-29 | Map Praxion service hooks into DK Arkitekter agenda | Praxion Foundation / Done | Needs repo reference update / Needs product naming update | Attachments link to old DK repo slug; description repeatedly uses `DK Arkitekter Growth & Sales OS`. | Update links/naming if Step 13B approves cleaning completed bridge issues. | High | Yes |
| DK-16 | WEEKLY-001 Weekly Growth OS Replan | Operating Rhythm & Daily Control / Done | Completed / product naming update | Completed weekly operating issue uses old product name. | No immediate action unless historical operating issue naming cleanup is approved. | Low | Yes |
| DK-17 | REQ-001 Business requirement intake and change control | Operating Rhythm & Daily Control / Done | Completed / product naming update | Completed governance issue uses old product name. | Leave as historical or annotate after approval. | Medium | Yes |
| DK-18 | DECISION-001 Decision log for platform architecture | Platform Architecture & Roadmap / Done | Completed / product naming update | Completed decision issue tracks old product name and old repo-era source output. | Leave as historical unless Step 13B updates source links to current repo/archive pointers. | Medium | Yes |
| DK-87, DK-88, DK-108, DK-110 | DAILY-001 Daily Growth OS Review | Operating Rhythm & Daily Control / Canceled | Obsolete / archive candidate | Older canceled daily control issues are superseded by later daily issues. | Archive/cold-storage candidate; do not reopen. | Low | No |
| DK-111, DK-114 | DAILY-001 Daily Growth OS Review | Operating Rhythm & Daily Control / Done | Completed / archive candidate | Completed daily control issues are historical operating records. | Leave Done; archive only if Dobromir wants a cleaner active issue list. | Low | Yes |
| DK-35, DK-36, DK-47, DK-49, DK-60, DK-70, DK-71 | Duplicate/canceled model and attribution issues | DK product projects / Duplicate | Duplicate / consolidate candidate | Already marked Duplicate after strategy consolidation. | No action required; optional archive/cold-storage cleanup. | Low | No |
| DK-1, DK-2, DK-3, DK-4 | Linear onboarding defaults | DK Arkitekter / Done | Obsolete / archive candidate | Default Linear onboarding issues are completed and not Foundry/DK product work. | Archive candidate if Linear hygiene cleanup is approved. | Low | No |
| DF-19 to DF-28 | Praxion Foundation setup issues | Praxion Foundation / Todo | Aligned | Open Praxion issues belong to Dobromir Foundry, not DK Arkitekter OS. | No ownership move. Keep under Foundry/Praxion. | Low | No |
| DK active backlog/todo except DK-89, DK-91, DK-116 | DK Arkitekter product backlog | DK Arkitekter projects / Todo or Backlog | Aligned | Product work is correctly under DK Arkitekter projects. | No ownership move. Apply only approved naming cleanup globally. | Low | No |
| Project: Build DK Arkitekter Growth & Sales OS | Initiative | Active initiative | Needs product naming update | Initiative still encodes the old product name. | Rename only after Dobromir approves the canonical current product label. | Medium | Yes |
| Projects: Operating Rhythm & Daily Control, Codex Build System, Content Engine, Website + SEO, Brand + Positioning, Quote Generator + Price Book, Sales CRM, Google Ads + YouTube, Ads/Analytics, Content-to-Leads, Platform Architecture | DK project set | Active projects | Needs product naming update | Several project summaries/descriptions reference `Build DK Arkitekter Growth & Sales OS` or `DK Arkitekter Growth & Sales OS`. | Batch-update project descriptions after naming approval. | Medium | Yes |

## Repo / Path Reference Issues

Confirmed stale or ambiguous references:

- `dobkra/dk-arkitekter-growth-sales-os` / `https://github.com/dobkra/dk-arkitekter-growth-sales-os`
  - High-confidence examples: DF-9, DF-10, DF-11, DF-29, DK-100.
  - Search candidates: DK-8, DK-9, DK-17, DK-18, DK-19, DK-20, DK-27, DK-33, DK-34, DK-37, DK-46, DK-76, DK-77, DK-78, DK-79, DK-89, DK-90, DK-91, DK-98, DK-99, DK-100, DK-101, DK-102, DK-103, DK-104, DK-105, DK-106, DK-107, DK-109, DK-112, DK-113, DK-115, DF-1, DF-2, DF-3, DF-4, DF-5, DF-6, DF-7, DF-8, DF-9, DF-10, DF-11, DF-13, DF-17, DF-18, DF-29.
  - Recommendation: Step 13B should verify each candidate at comment/attachment level before editing, then replace or annotate old links with the correct current repo or archive target.
- `W:\DK Arkitekter OS\Historical Buildings`
  - Confirmed examples: DK-89, DK-90, DK-91, DK-100.
  - Recommendation: confirm whether this remains the raw media source path. It is not the DK Git checkout path, and it may intentionally live outside repos.
- No issue hits were found for:
  - `C:\Users\Dobromir\Documents\New project\dk-arkitekter-growth-sales-os`
  - `W:\AI Projects\dk-arkitekter-os`
  - `dobkra/Foundry`
  - `dobkra/archive`
  - `foundry/_migration`

## Product Naming Issues

Observed stale or transitional naming:

- `DK Arkitekter Growth & Sales OS`
- `Growth & Sales OS`
- `Daily Growth OS Review`
- `Weekly Growth OS Replan`
- Initiative: `Build DK Arkitekter Growth & Sales OS`

Impact:

- The Linear project/initiative layer still reads as if `Growth & Sales OS` is the active product label.
- The final repo model says `dobkra/dk-arkitekter-os` is the active DK Arkitekter business OS.
- This is a naming and product-taxonomy decision, so Step 13B should not rename issues/projects until Dobromir approves the canonical label.

High-priority naming cleanup candidates:

- DK-116 because it is active and recurring.
- The `Build DK Arkitekter Growth & Sales OS` initiative because it affects project grouping.
- DK project descriptions that inherit the old initiative language.
- DF-29 because it bridges Praxion to the DK agenda and can propagate stale product wording.

## Ownership / Project Placement Issues

DK Arkitekter OS:

- DK-prefixed active product issues are correctly under the DK Arkitekter team and DK product projects.
- No open DK issue was found that should be moved wholesale to the Foundry project solely because of the repo split.

Foundry:

- DF-prefixed Foundry operating issues are correctly under the Dobromir Foundry team.
- Foundry Operating System remains the right project for Foundry execution/governance issues.

Archive:

- No active Linear issue appears to belong directly under archive as a live product/project.
- Historical audit records and old repo-era PR evidence should point to `dobkra/archive` only where the source material has actually been copied there.

Paperclip/Praxion:

- Praxion Foundation is correctly under Dobromir Foundry.
- DF-19 through DF-28 are aligned as Foundry/Praxion work.
- DF-29 is correctly in Praxion Foundation, but its links and DK product naming are stale after the repo split.

Ambiguous:

- DK-89, DK-91, and DK-100 depend on whether `W:\DK Arkitekter OS\Historical Buildings` remains the raw media source outside Git.
- The global rename from `DK Arkitekter Growth & Sales OS` to `DK Arkitekter OS` or `DK Arkitekter business OS` requires Dobromir naming approval.
- Historical old-repo PR links need a policy decision: preserve as historical redirect links, replace with current repo links, or add archive pointers.

## Close / Archive Candidates

Do not close them in this task.

Candidates:

- DK-1, DK-2, DK-3, DK-4: completed Linear onboarding defaults; not product work.
- DK-35, DK-36, DK-47, DK-49, DK-60, DK-70, DK-71: already marked Duplicate/canceled after consolidation.
- DK-87, DK-88, DK-108, DK-110: canceled daily control issues superseded by newer daily records.
- DK-111, DK-114: completed daily control records; optional archive/cold-storage cleanup only.
- DF-1 through DF-18: completed Foundry setup sequence; keep as Done unless Dobromir wants completed setup issues archived after repo split.

Close/archive candidate count used for summary: 16 near-term candidates, excluding DF-1 through DF-18 because those are useful Foundry provenance records.

## Recommended Step 13B

Step 13B should be an approved Linear cleanup pass. It should:

- Update approved Linear issue descriptions with current repo model.
- Update stale GitHub links from `dobkra/dk-arkitekter-growth-sales-os` to the correct current target:
  - `dobkra/dk-arkitekter-os` for active DK product work.
  - `dobkra/Foundry` for active Foundry operating work.
  - `dobkra/archive` for cold-storage historical material.
- Update stale product naming only after Dobromir approves the canonical current DK product label.
- Move issues/projects/labels only if the audit item has explicit Dobromir approval.
- Close or archive completed obsolete issues only after approval.
- Leave ambiguous path and historical-link policy items for Dobromir review.

Step 13B must not:

- Merge PRs.
- Deploy.
- Change GitHub branch, PR, release, or deployment state.
- Enable automations.
- Publish or send anything externally.

## Out Of Scope Confirmed

- No Linear edits.
- No GitHub repo changes except this audit report.
- No source code changes.
- No route changes.
- No deployment.

## Verification

Repo verification commands and results:

```text
DK repo command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' switch main
Result:
Your branch is up to date with 'origin/main'.
Already on 'main'

DK repo command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' pull --ff-only origin main
Result:
From https://github.com/dobkra/dk-arkitekter-os
 * branch            main       -> FETCH_HEAD
Already up to date.

DK repo command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' status --short
Result:
<no output>

DK repo command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' rev-parse HEAD
Result:
4cffe03d7f930ef3a64ead33ec3341be61141fe0

Foundry repo command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' switch main
Result:
Your branch is up to date with 'origin/main'.
Already on 'main'

Foundry repo command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' -c http.sslCAInfo='W:\AI Projects\tools\mingit-2.54.0\mingw64\etc\ssl\certs\ca-bundle.crt' pull --ff-only origin main
Result:
From https://github.com/dobkra/foundry
 * branch            main       -> FETCH_HEAD
Already up to date.

Foundry repo command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' status --short
Result:
<no output>

Foundry repo command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' rev-parse HEAD
Result:
093d1164271df70d38a79c896f33a21bd8bc1228

Archive repo command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' switch main
Result:
Your branch is up to date with 'origin/main'.
Already on 'main'

Archive repo command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' -c http.sslCAInfo='W:\AI Projects\tools\mingit-2.54.0\mingw64\etc\ssl\certs\ca-bundle.crt' pull --ff-only origin main
Result:
From https://github.com/dobkra/archive
 * branch            main       -> FETCH_HEAD
Already up to date.

Archive repo command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' status --short
Result:
<no output>

Archive repo command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' rev-parse HEAD
Result:
eeb27372c514be2ff1c13d1185ae775443e0daaf
```

SHA confirmation:

- DK repo is exactly at the provided main SHA `4cffe03d7f930ef3a64ead33ec3341be61141fe0`.
- Foundry repo is exactly at the provided main SHA `093d1164271df70d38a79c896f33a21bd8bc1228`.
- Archive repo is exactly at the provided main SHA `eeb27372c514be2ff1c13d1185ae775443e0daaf`.

Foundry report verification:

```text
Command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' diff --name-status
Result:
<no output>

Command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' status --short
Result:
?? foundry/system/workflows/codex-linear-github/STEP_13A_GLOBAL_LINEAR_ALIGNMENT_AUDIT.md
```

Build/typecheck:

- Foundry repo has no `package.json`.
- Typecheck/build are not applicable for this documentation-only audit report.

DK and Archive cleanliness:

```text
DK command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' status --short
Result:
<no output>

Archive command:
& 'W:\AI Projects\tools\mingit-2.54.0\cmd\git.exe' status --short
Result:
<no output>
```
