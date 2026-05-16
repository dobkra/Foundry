# Step 13B — Linear Cleanup Phase 1

## Scope

This was a controlled Linear cleanup task for Phase 1 only.

- Linear edits were limited to the approved Phase 1 target list.
- No source code was changed.
- No deployment was performed.
- No PRs were merged.
- No Linear issue close/archive actions were performed.
- Ambiguous raw-media path references were left untouched.
- No issue priorities, assignees, workflow statuses, teams, labels, or project memberships were intentionally changed.

## Inputs

- Step 13A audit report path: `foundry/system/workflows/codex-linear-github/STEP_13A_GLOBAL_LINEAR_ALIGNMENT_AUDIT.md`
- Step 13A audit PR: https://github.com/dobkra/Foundry/pull/2
- Verification note: the Step 13A report was not present on Foundry `main` at the start of Step 13B, but was verified as available on PR #2 branch `codex/step-13a-global-linear-alignment-audit`.

Approved target list:

- Issue: `DK-116`
- Completed Foundry issues: `DF-9`, `DF-10`, `DF-11`, `DF-29`
- Completed DK governance issues: `DK-17`, `DK-18`
- Initiative: `Build DK Arkitekter Growth & Sales OS`
- DK projects reviewed under the renamed initiative:
  - Operating Rhythm & Daily Control
  - Codex Build System
  - Content Engine
  - Website + SEO
  - Brand + Positioning
  - Quote Generator + Price Book
  - Sales CRM
  - Google Ads + YouTube
  - Ads, Analytics & Tracking
  - Content-to-Leads Engine
  - Platform Architecture & Roadmap

## Linear Changes Applied

| Linear item ID/name | Type | Previous title/name | New title/name | Description changed | Links added | Status changed | Priority changed | Assignee changed | Notes |
|---|---|---|---|---|---|---|---|---|---|
| `DK-116` | issue | `DAILY-001 Daily Growth OS Review` | `DAILY-001 Daily DK Arkitekter OS Review` | Yes | No | No | No | No | Replaced active `Growth OS` wording with `DK Arkitekter OS`; cadence and operating logic preserved. |
| `Build DK Arkitekter OS` | initiative | `Build DK Arkitekter Growth & Sales OS` | `Build DK Arkitekter OS` | Yes | No | No | N/A | N/A | Summary/description now reflect the active DK business OS, `dobkra/dk-arkitekter-os`, and separate Foundry repo `dobkra/Foundry`; owner and target date unchanged. |
| Operating Rhythm & Daily Control | project | Operating Rhythm & Daily Control | Operating Rhythm & Daily Control | No | No | No | No | N/A | Summary updated to `Daily and weekly execution control for DK Arkitekter OS.` |
| Platform Architecture & Roadmap | project | Platform Architecture & Roadmap | Platform Architecture & Roadmap | No | No | No | No | N/A | Summary updated to `Own the DK Arkitekter OS roadmap, module map, and change control.` |
| Codex Build System | project | Codex Build System | Codex Build System | Yes | No | No | No | N/A | Description now references `Build DK Arkitekter OS` and DK repo workflow for `dobkra/dk-arkitekter-os`. |
| Quote Generator + Price Book | project | Quote Generator + Price Book | Quote Generator + Price Book | Yes | No | No | No | N/A | Initiative reference changed to `Build DK Arkitekter OS`. |
| Sales CRM | project | Sales CRM | Sales CRM | Yes | No | No | No | N/A | Initiative reference changed to `Build DK Arkitekter OS`. |
| Google Ads + YouTube | project | Google Ads + YouTube | Google Ads + YouTube | Yes | No | No | No | N/A | Initiative reference changed to `Build DK Arkitekter OS`. |
| Content Engine | project | Content Engine | Content Engine | Yes | No | No | No | N/A | Initiative reference changed to `Build DK Arkitekter OS`. |
| Website + SEO | project | Website + SEO | Website + SEO | Yes | No | No | No | N/A | Initiative reference changed to `Build DK Arkitekter OS`. |
| Brand + Positioning | project | Brand + Positioning | Brand + Positioning | Yes | No | No | No | N/A | Initiative reference changed to `Build DK Arkitekter OS`. |
| `DF-9` | issue | Audit GitHub automation and PR workflow for Foundry | Audit GitHub automation and PR workflow for Foundry | Yes | Yes | No | No | No | Added approved post-split note and current Foundry repo link; historical PR link retained. |
| `DF-10` | issue | Create Foundry System Audit Report V1 | Create Foundry System Audit Report V1 | Yes | Yes | No | No | No | Added approved post-split note and current Foundry repo link; historical PR link retained. |
| `DF-11` | issue | Decide Foundry Repository Architecture | Decide Foundry Repository Architecture | Yes | Yes | No | No | No | Added approved post-split note and current Foundry repo link; historical PR link retained. |
| `DF-29` | issue | Map Praxion service hooks into DK Arkitekter agenda | Map Praxion service hooks into DK Arkitekter agenda | Yes | Yes | No | No | No | Added approved post-split note plus current Foundry and DK repo links; historical old-repo links retained. |
| `DK-17` | issue | REQ-001 Business requirement intake and change control | REQ-001 Business requirement intake and change control | Yes | No | No | No | No | Added approved current-state note only; historical PR link retained. |
| `DK-18` | issue | DECISION-001 Decision log for platform architecture | DECISION-001 Decision log for platform architecture | Yes | No | No | No | No | Added approved current-state note only; historical PR link retained. |

Total edited Linear items: 17.

## Items Deliberately Not Changed

- `DK-89` was not edited. Its `W:\DK Arkitekter OS\Historical Buildings` path may be a valid raw-media source path outside Git.
- `DK-90` was not edited. Its `W:\DK Arkitekter OS\Historical Buildings` path may be a valid raw-media source path outside Git.
- `DK-91` was not edited. Its `W:\DK Arkitekter OS\Historical Buildings` path may be a valid raw-media source path outside Git.
- `DK-100` was not edited. Its `W:\DK Arkitekter OS\Historical Buildings` path may be a valid raw-media source path outside Git.
- All 16 Step 13A close/archive candidates were left unchanged.
- Historical old GitHub PR links were not removed.
- `Ads, Analytics & Tracking` was reviewed and left unchanged because no stale active DK product naming was found.
- `Content-to-Leads Engine` was reviewed and left unchanged because no stale active DK product naming was found.

## Verification

Repository verification before Linear edits:

```powershell
cd 'W:\AI Projects\foundry'
git switch main
git pull --ff-only origin main
git status --short
git rev-parse HEAD
```

Result:

```text
Switched to branch 'main'
Already up to date.
<no output>
093d1164271df70d38a79c896f33a21bd8bc1228
```

Step 13A audit basis verification:

```powershell
Test-Path 'W:\AI Projects\foundry\foundry\system\workflows\codex-linear-github\STEP_13A_GLOBAL_LINEAR_ALIGNMENT_AUDIT.md'
gh pr view 2 --repo dobkra/Foundry --json number,state,isDraft,headRefName,baseRefName,url,mergeStateStatus
git -c http.sslCAInfo='W:\AI Projects\tools\mingit-2.54.0\mingw64\etc\ssl\certs\ca-bundle.crt' fetch origin codex/step-13a-global-linear-alignment-audit
git cat-file -e origin/codex/step-13a-global-linear-alignment-audit:foundry/system/workflows/codex-linear-github/STEP_13A_GLOBAL_LINEAR_ALIGNMENT_AUDIT.md
```

Result:

```text
False
{"baseRefName":"main","headRefName":"codex/step-13a-global-linear-alignment-audit","isDraft":true,"mergeStateStatus":"CLEAN","number":2,"state":"OPEN","url":"https://github.com/dobkra/Foundry/pull/2"}
From https://github.com/dobkra/foundry
 * branch            codex/step-13a-global-linear-alignment-audit -> FETCH_HEAD
True
```

DK repo verification:

```powershell
cd 'W:\AI Projects\dk-arkitekter-os'
git switch main
git pull --ff-only origin main
git status --short
```

Result:

```text
Already on 'main'
Already up to date.
<no output>
```

Archive repo verification:

```powershell
cd 'W:\AI Projects\archive'
git switch main
git pull --ff-only origin main
git status --short
```

Result:

```text
Already on 'main'
Already up to date.
<no output>
```

Linear refetch verification:

- `DK-116` title is `DAILY-001 Daily DK Arkitekter OS Review`; status remains `Todo`; priority remains `Medium`; assignee remains Dobromir Kraychev.
- Initiative is `Build DK Arkitekter OS`; status remains `Active`; owner remains Dobromir Kraychev; target date remains `2026-05-17`.
- Active DK project descriptions/summaries reviewed under the initiative no longer use stale active `Growth & Sales OS` naming.
- `DF-9`, `DF-10`, `DF-11`, and `DF-29` contain the approved post-split note.
- `DF-9`, `DF-10`, and `DF-11` each have the current Foundry repo link added.
- `DF-29` has current Foundry and DK repo links added.
- `DK-17` and `DK-18` contain the approved current-state note.
- `DK-89`, `DK-90`, `DK-91`, and `DK-100` were refetched and not edited.
- No Linear issues were closed or archived.
- No ambiguous raw-media path cleanup happened.
- No workflow statuses, priorities, assignees, teams, labels, or project memberships were intentionally changed.

Excluded raw-media issue `updatedAt` values remained unchanged:

| Issue | `updatedAt` after refetch |
|---|---|
| `DK-89` | `2026-05-10T22:54:47.311Z` |
| `DK-90` | `2026-05-10T22:54:48.232Z` |
| `DK-91` | `2026-05-10T22:54:49.180Z` |
| `DK-100` | `2026-05-14T13:21:13.247Z` |

Package/build verification:

```powershell
Test-Path 'W:\AI Projects\foundry\package.json'
```

Result:

```text
False
```

Foundry has no `package.json`; typecheck/build are not applicable for this documentation-only report.

Report file verification before staging:

```powershell
cd 'W:\AI Projects\foundry'
git diff --name-status
git status --short
```

Result:

```text
<no output from git diff --name-status because the new report was still untracked>
?? foundry/system/workflows/codex-linear-github/STEP_13B_LINEAR_CLEANUP_PHASE_1.md
```

## Recommended Step 13C

Step 13C should be a Dobromir review and approval task before any broader cleanup:

- Decide the policy for ambiguous raw-media path references such as `W:\DK Arkitekter OS\Historical Buildings`.
- Decide whether any of the 16 Step 13A close/archive candidates should actually be closed or archived.
- Decide the policy for retaining historical old GitHub PR links versus adding current-state notes only.
- Optionally approve deeper comment/attachment-level cleanup for the 47 old repo URL candidates from Step 13A.

Do not perform Step 13C until Dobromir approves the policy decisions above.
