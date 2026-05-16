# Step 13C — Linear Policy Review Pack

## Scope

This is a policy review and decision pack only.

- No Linear issues were edited.
- No Linear projects were edited.
- No Linear initiatives were edited.
- No Linear labels were edited.
- No issue close/archive actions were performed.
- No source code was changed.
- No deployment was performed.
- No DK repo changes were made.
- No Archive repo changes were made.

## Prerequisites Verified

PR and report prerequisites:

| Prerequisite | Result |
|---|---|
| PR #2 `https://github.com/dobkra/Foundry/pull/2` | Merged at `2026-05-16T19:46:10Z` |
| PR #3 `https://github.com/dobkra/Foundry/pull/3` | Merged at `2026-05-16T19:46:47Z` |
| Step 13A report exists on Foundry main | Yes |
| Step 13B report exists on Foundry main | Yes |
| Foundry repo cleanliness before report work | Clean |
| DK repo cleanliness | Clean |
| Archive repo cleanliness | Clean |

Foundry `main` was verified at `968084ba436d7ec05fdf9a513a1f2b5952e18316`, matching the known latest valid Foundry main HEAD after Step 13AB.

## Decision Area 1 — Raw-Media Path Policy

Affected issues:

| Issue | Title | Current status | Evidence found |
|---|---|---|---|
| `DK-89` | ADMIN-010 Define Heritage Building Record manager inside Admin / Growth Studio | Backlog | Calls `W:\DK Arkitekter OS\Historical Buildings` Dobromir's canonical local raw source directory and says raw assets must not be committed to GitHub. |
| `DK-90` | CONTENTFLOW-006 Define temporary raw heritage folder workflow | Done | Defines `W:\DK Arkitekter OS\Historical Buildings` as the canonical raw source directory and documents current verified folders under it. |
| `DK-91` | MEDIA-001 Define raw vs published media storage strategy | Backlog | Uses the path as the canonical raw source directory and asks future storage/location questions. |
| `DK-100` | STRATEGY-003 Create Heritage Building Record Model V1 | Done | Acceptance criteria require the raw source folder rule `W:\DK Arkitekter OS\Historical Buildings`; old GitHub PR attachment also exists. |

Recommended policy:

Treat `W:\DK Arkitekter OS\Historical Buildings` as a valid external raw-media working folder and future media-ingestion source, not as a Git repository path, not as an archive repo path, and not as obsolete.

Recommended handling:

- Do not rewrite or remove the path from `DK-89`, `DK-90`, `DK-91`, or `DK-100`.
- If Dobromir wants extra clarity later, add a short explanatory note rather than changing the path.
- Create a dedicated media-storage policy document later if raw/local/published media handling becomes active implementation work.

Exact recommended note text, if approved later:

```text
Current-state note: `W:\DK Arkitekter OS\Historical Buildings` is an external raw-media working folder, not the DK Git repository path. The active DK Git repository is `dobkra/dk-arkitekter-os`.
```

Risk of changing:

- Medium. Rewriting this path could break the documented raw-media intake model and confuse local source-of-truth handling for photos, videos, drawings, and PDFs.
- Medium. Treating it as an archive or Git path would incorrectly collapse private/local raw media into repository architecture.

Risk of leaving unchanged:

- Low to medium. The path can look stale beside `W:\AI Projects\dk-arkitekter-os`, but the issue descriptions explicitly frame it as raw media, not code.

Recommended next action:

Approve treating the path as an external raw-media folder. Add explanatory notes only if Dobromir wants the distinction to be visible inside Linear before media ingestion work resumes.

## Decision Area 2 — Close / Archive Candidate Policy

Candidate count reconciliation:

- Step 13A summary says `Close/archive candidates: 16`.
- The explicit Step 13A candidate list plus the Step 13C requested issue list contains 17 unique DK issue IDs: `DK-1`, `DK-2`, `DK-3`, `DK-4`, `DK-35`, `DK-36`, `DK-47`, `DK-49`, `DK-60`, `DK-70`, `DK-71`, `DK-87`, `DK-88`, `DK-108`, `DK-110`, `DK-111`, and `DK-114`.
- Excluding `DK-111` and `DK-114` as optional completed daily records leaves 15 core hygiene candidates.
- Including `DK-111` and `DK-114` leaves 17 named candidates, not 18.
- Therefore the safe policy is to decide by named issue ID and bucket, not by the inconsistent Step 13A count.

Recommended count policy:

- Treat `DK-111` and `DK-114` as excluded from near-term close/archive cleanup by default.
- Treat them as optional historical daily records that should stay Done unless Dobromir wants daily operating traces hidden from active views.
- Before any Step 13D close/archive action, use the named ID list approved by Dobromir rather than the Step 13A numeric count.

| Issue ID | Title | Current status | Bucket | Recommended action | Reason | Requires Dobromir approval |
|---|---|---|---|---|---|---|
| `DK-1` | Get familiar with Linear | Done | Linear onboarding defaults | Archive | Default Linear onboarding issue; not DK product work or Foundry provenance. | Yes |
| `DK-2` | Set up your teams | Done | Linear onboarding defaults | Archive | Default Linear onboarding issue; not DK product work or Foundry provenance. | Yes |
| `DK-3` | Connect your tools | Done | Linear onboarding defaults | Archive | Default Linear onboarding issue; not DK product work or Foundry provenance. | Yes |
| `DK-4` | Import your data | Done | Linear onboarding defaults | Archive | Default Linear onboarding issue; not DK product work or Foundry provenance. | Yes |
| `DK-35` | WEB-007 Define Projects section: Concepts / Built Projects | Duplicate | Duplicate/consolidated issues | Leave untouched because already duplicate | Already in `Duplicate` canceled state; no operational risk. | No, unless archiving for hygiene |
| `DK-36` | WEB-008 Define Heritage Studies article model | Duplicate | Duplicate/consolidated issues | Leave untouched because already duplicate | Already in `Duplicate` canceled state; no operational risk. | No, unless archiving for hygiene |
| `DK-47` | CONTENTFLOW-001 Define Heritage Building Record model | Duplicate | Duplicate/consolidated issues | Leave untouched because already duplicate | Already in `Duplicate` canceled state; no operational risk. | No, unless archiving for hygiene |
| `DK-49` | CONTENTFLOW-003 Define Project Record model | Duplicate | Duplicate/consolidated issues | Leave untouched because already duplicate | Already in `Duplicate` canceled state; no operational risk. | No, unless archiving for hygiene |
| `DK-60` | ADS-004 Define UTM tracking and naming rules | Duplicate | Duplicate/consolidated issues | Leave untouched because already duplicate | Already in `Duplicate` canceled state; no operational risk. | No, unless archiving for hygiene |
| `DK-70` | ANALYTICS-005 Define lead-source attribution model | Duplicate | Duplicate/consolidated issues | Leave untouched because already duplicate | Already in `Duplicate` canceled state; no operational risk. | No, unless archiving for hygiene |
| `DK-71` | ANALYTICS-006 Define content-to-lead performance tracking | Duplicate | Duplicate/consolidated issues | Leave untouched because already duplicate | Already in `Duplicate` canceled state; no operational risk. | No, unless archiving for hygiene |
| `DK-87` | DAILY-001 Daily Growth OS Review | Canceled | Canceled/superseded daily control records | Leave untouched because already canceled | Superseded daily record; no need to close again. | No, unless archiving for hygiene |
| `DK-88` | DAILY-001 Daily Growth OS Review | Canceled | Canceled/superseded daily control records | Leave untouched because already canceled | Superseded daily record; no need to close again. | No, unless archiving for hygiene |
| `DK-108` | DAILY-001 Daily Growth OS Review | Canceled | Canceled/superseded daily control records | Leave untouched because already canceled | Superseded daily record; no need to close again. | No, unless archiving for hygiene |
| `DK-110` | DAILY-001 Daily Growth OS Review | Canceled | Canceled/superseded daily control records | Leave untouched because already canceled | Superseded daily record; no need to close again. | No, unless archiving for hygiene |
| `DK-111` | DAILY-001 Daily Growth OS Review | Done | Completed daily records | Keep as-is | Historical daily operating trace; optional archive only if it clutters active views. | Yes |
| `DK-114` | DAILY-001 Daily Growth OS Review | Done | Completed daily records | Keep as-is | Historical daily operating trace; optional archive only if it clutters active views. | Yes |

Foundry provenance issue policy:

- Do not archive `DF-1` through `DF-18`.
- These are completed setup/provenance issues for the Foundry operating model.
- Their old PR attachments are historical evidence of the pre-split repository state, not active execution instructions.

## Decision Area 3 — Historical GitHub PR Link Policy

Observed issue types with old links to `dobkra/dk-arkitekter-growth-sales-os`:

- Completed Foundry operating records, including `DF-1` through `DF-18`.
- Completed or bridge Foundry records that already received notes/links in Step 13B: `DF-9`, `DF-10`, `DF-11`, `DF-29`.
- Completed DK governance records that already received notes in Step 13B: `DK-17`, `DK-18`.
- Completed DK product records such as `DK-100`.
- Search-level candidates where the match may be in issue descriptions, comments, or attachments.

Policy options:

1. Preserve old links as provenance and add notes only where the old link could mislead future execution.
2. Replace old links globally with current repo links.
3. Add current repo links to every old-link issue while retaining old links.
4. Archive or remove historical old-link issues.

Recommendation:

Use option 1 as the default.

- Preserve old GitHub PR links as historical provenance.
- Do not delete old links.
- Add current-state notes where completed text could mislead future execution.
- Add current repo links only for high-value bridge/governance issues.
- Avoid rewriting completed issue history unless the stale link creates operational risk.

Issue types that should keep old links:

- Completed Foundry setup records (`DF-1` through `DF-18`).
- Completed DK strategy/governance records where the old PR link is useful implementation provenance.
- Historical daily records and canceled/duplicate issues.

Issue types that should receive current-state notes:

- Completed issues whose descriptions describe an old repo architecture as current.
- Active or recurring operating issues where old naming or repo references could guide future execution incorrectly.
- High-value bridge issues between Foundry and DK, such as Praxion/DK handoff records.

Issue types that should get current repo links:

- High-value Foundry governance and workflow issues.
- Bridge issues that need both Foundry and DK context.
- Active execution issues where the correct repository target is immediately relevant.

What not to touch:

- Do not remove historical old PR links.
- Do not rewrite all completed issues globally.
- Do not modify comments/attachments without a read-classify-first Step 13D approval.
- Do not archive `DF-1` through `DF-18`.

## Decision Area 4 — 47 Old Repo URL Candidate Cleanup

The old repo URL search still returns 47 issue candidates for `https://github.com/dobkra/dk-arkitekter-growth-sales-os`.

Candidate list from Step 13A / Linear search:

`DK-8`, `DK-9`, `DK-17`, `DK-18`, `DK-19`, `DK-20`, `DK-27`, `DK-33`, `DK-34`, `DK-37`, `DK-46`, `DK-76`, `DK-77`, `DK-78`, `DK-79`, `DK-89`, `DK-90`, `DK-91`, `DK-98`, `DK-99`, `DK-100`, `DK-101`, `DK-102`, `DK-103`, `DK-104`, `DK-105`, `DK-106`, `DK-107`, `DK-109`, `DK-112`, `DK-113`, `DK-115`, `DF-1`, `DF-2`, `DF-3`, `DF-4`, `DF-5`, `DF-6`, `DF-7`, `DF-8`, `DF-9`, `DF-10`, `DF-11`, `DF-13`, `DF-17`, `DF-18`, `DF-29`.

Whether deeper cleanup is recommended:

Do not clean all 47 automatically. Deeper cleanup is useful only if it is batched and limited to active/high-risk execution surfaces.

Proposed batching strategy:

1. High-risk active/current operating bucket:
   - Active or near-active DK issues that could send Codex to the old repository.
   - Current operating workflow issues, repo workflow issues, and bridge issues.
   - Recommended action: read description, comments, and attachments first; add note or current repo link only where operationally useful.
2. Medium-risk completed governance bucket:
   - Completed issues that define governance, repo architecture, or handoff behavior.
   - Recommended action: add current-state notes only when the old text reads as current.
3. Low-risk historical/provenance bucket:
   - Completed Foundry setup issues and old PR attachments.
   - Recommended action: leave untouched as provenance.
4. Ambiguous raw-media bucket:
   - `DK-89`, `DK-90`, `DK-91`, `DK-100`.
   - Recommended action: do not rewrite path references; add the external-folder note only if approved.

High-risk first bucket:

- Active/current DK execution issues in the 47-candidate set.
- Any issue where `dobkra/dk-arkitekter-growth-sales-os` appears as an instruction for future work instead of a historical PR link.
- Any issue that lacks a Step 13B current-state note and is likely to be used in near-term Codex execution.

Low-risk historical bucket:

- `DF-1` through `DF-18`, except already-noted bridge/governance records.
- Completed PR provenance links.
- Canceled or duplicate issues.

What should remain untouched:

- Historical PR attachments that prove where pre-split work was originally implemented.
- Completed Foundry setup records unless a specific stale statement creates operational risk.
- Raw-media path language until Dobromir approves the external-folder policy.

Estimated risk:

- Global automatic cleanup: High risk, because it can destroy provenance and create unnecessary Linear churn.
- Read-classify-first cleanup for active/high-risk issues: Low to medium risk.
- Leaving all 47 untouched forever: Medium risk, because active issues may still route future execution to the old repo.

## Recommended Dobromir Decisions

- [ ] Approve treating `W:\DK Arkitekter OS\Historical Buildings` as an external raw-media folder.
- [ ] Approve adding explanatory notes to `DK-89`, `DK-90`, `DK-91`, and `DK-100`.
- [ ] Approve archiving DK onboarding defaults `DK-1` through `DK-4`.
- [ ] Approve leaving duplicate/canceled issues untouched.
- [ ] Approve keeping completed daily records `DK-111` and `DK-114` as historical operating traces.
- [ ] Approve keeping historical GitHub PR links as provenance.
- [ ] Approve Step 13D for deeper old repo URL cleanup only on active/high-risk issues.
- [ ] Approve excluding `DF-1` through `DF-18` from archive cleanup because they are Foundry provenance records.

## Recommended Step 13D

Step 13D should be selected only after Dobromir approves one of these options:

Option A: Raw-media path note cleanup only.

- Add the approved external raw-media folder note to `DK-89`, `DK-90`, `DK-91`, and `DK-100`.
- Do not rewrite the path itself.

Option B: Close/archive approved onboarding defaults only.

- Archive `DK-1` through `DK-4` if Dobromir confirms they are Linear noise.
- Do not touch duplicate/canceled/done daily records.

Option C: Deeper old repo URL cleanup for active/high-risk issues only.

- Read and classify candidate descriptions, comments, and attachments before any edit.
- Add current-state notes or current repo links only where stale references create operational risk.
- Leave completed historical records as provenance.

Option D: No further cleanup; return to normal Foundry execution.

Recommended default: Option A if Dobromir wants immediate clarity on raw-media policy; otherwise Option D. Option C should wait until there is a concrete operational risk or a focused cleanup window.

## Out Of Scope Confirmed

- No Linear edits.
- No issue close/archive actions.
- No source code changes.
- No deployment.
- No DK repo changes.
- No Archive repo changes.
- No PR merges.
- No Step 13D execution.

## Verification

Prerequisite and repo verification:

```powershell
cd 'W:\AI Projects\foundry'
git switch main
git pull --ff-only origin main
git status --short
git rev-parse HEAD
Test-Path 'W:\AI Projects\foundry\foundry\system\workflows\codex-linear-github\STEP_13A_GLOBAL_LINEAR_ALIGNMENT_AUDIT.md'
Test-Path 'W:\AI Projects\foundry\foundry\system\workflows\codex-linear-github\STEP_13B_LINEAR_CLEANUP_PHASE_1.md'
gh pr view 2 --repo dobkra/Foundry --json number,state,isDraft,mergedAt,headRefName,baseRefName,url
gh pr view 3 --repo dobkra/Foundry --json number,state,isDraft,mergedAt,headRefName,baseRefName,url
```

Result:

```text
Already on 'main'
Already up to date.
<no output>
968084ba436d7ec05fdf9a513a1f2b5952e18316
True
True
{"baseRefName":"main","headRefName":"codex/step-13a-global-linear-alignment-audit","isDraft":false,"mergedAt":"2026-05-16T19:46:10Z","number":2,"state":"MERGED","url":"https://github.com/dobkra/Foundry/pull/2"}
{"baseRefName":"main","headRefName":"codex/step-13b-linear-cleanup-phase-1","isDraft":false,"mergedAt":"2026-05-16T19:46:47Z","number":3,"state":"MERGED","url":"https://github.com/dobkra/Foundry/pull/3"}
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

Linear read-only verification:

- Fetched raw-media path issues: `DK-89`, `DK-90`, `DK-91`, `DK-100`.
- Fetched close/archive candidate issues: `DK-1`, `DK-2`, `DK-3`, `DK-4`, `DK-35`, `DK-36`, `DK-47`, `DK-49`, `DK-60`, `DK-70`, `DK-71`, `DK-87`, `DK-88`, `DK-108`, `DK-110`, `DK-111`, `DK-114`.
- Fetched Foundry provenance issues: `DF-1` through `DF-18`, plus `DF-29`.
- Searched old repo URL candidates for `https://github.com/dobkra/dk-arkitekter-growth-sales-os`; the search returned 47 issue candidates.
- No Linear save/update/archive tools were used.

Package/build verification:

```powershell
Test-Path 'W:\AI Projects\foundry\package.json'
```

Result:

```text
False
```

Foundry has no `package.json`; typecheck/build are not applicable for this documentation-only policy report.

Report file verification before staging:

```powershell
cd 'W:\AI Projects\foundry'
git diff --name-status
git status --short
```

Result:

```text
<no output from git diff --name-status because the new report was still untracked>
?? foundry/system/workflows/codex-linear-github/STEP_13C_LINEAR_POLICY_REVIEW_PACK.md
```
