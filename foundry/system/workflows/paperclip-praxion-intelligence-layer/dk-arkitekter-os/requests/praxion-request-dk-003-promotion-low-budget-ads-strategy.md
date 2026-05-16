# DK-003 - Promotion Workflow + Low-Budget Ads Strategy

Request ID: P-DKA-20260515-DK-003

Dispatch status: ready for Praxion. Created as repository documentation because no safe local Paperclip / Praxion task interface was found in the current workspace.

Service track: Promotion Workflow + Low-Budget Ads Strategy

Related Linear issues:

- DK-67 - promotion workflow for Heritage Building Records
- DK-68 - promotion workflow for Project Records
- DK-69 - GA4 / website tracking setup
- DK-42 - social draft approval workflow
- DK-55 - social package for Heritage Building Records
- DK-56 - social package for Project Records
- DK-83 - YouTube / Instagram / LinkedIn draft generation
- DF-29 - Praxion service-hook map

## Purpose

Request Praxion to produce a promotion workflow and low-budget paid-ad strategy research package for DK Arkitekter.

The result should define how Heritage Building Records and Project Records can move from organic content into manual promotion planning, especially with very small daily budgets of approximately 5-10 EUR/day, while preserving all approval gates and avoiding any live ad, tracking, publishing, or scheduling action.

## Background

DK Arkitekter is planning social packages, promotion workflows, analytics/tracking setup, and future draft generation for YouTube, Instagram, and LinkedIn. Existing source documents make paid advertising manual and approval-gated, allow ad-ready fields only as draft/manual-use material, and prohibit tracking activation or publishing without approval.

Praxion should produce strategy, matrices, and approval checklists only.

## Available Source Materials

Repository sources:

- `foundry/system/workflows/paperclip-praxion-intelligence-layer/dk-arkitekter-os/praxion-dk-arkitekter-service-hook-map-v1.md`
- `README.md`
- `src/components/public-site.tsx`
- `src/lib/public-site.ts`
- `dk-arkitekter-os/growth-and-sales/modules/public-website-frontend/website-information-architecture-v2.md`
- `dk-arkitekter-os/growth-and-sales/modules/public-website-frontend/seo-and-manual-paid-search-landing-page-structure-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/analytics-lead-attribution/analytics-event-lead-attribution-model-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/organic-publishing-hub-scope-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/project-records-manager/project-record-model-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/heritage-building-records-manager/heritage-building-record-model-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/governance-data-integrations/rights-source-attribution-workflow-v1.md`

Linear sources:

- DK-67, DK-68, DK-69, DK-42, DK-55, DK-56, DK-83, DF-29

## Required Research Depth

Deep practical strategy research with low-budget constraints.

Praxion should focus on what can be tested with small budgets, what should remain organic-only, which channels are likely to matter, and which approval gates prevent waste, tracking risk, or premature public claims.

## Research And Definition Scope

Praxion must research and define:

- best marketing channels for DK Arkitekter
- organic-to-paid promotion logic
- strategy for very small ad budgets, approximately 5-10 EUR/day
- campaign structures for Heritage Building Records
- campaign structures for Project Records
- Instagram, LinkedIn, Facebook, Google, and YouTube relevance
- low-budget test framework
- audience hypotheses
- creative / message hypotheses
- landing-page alignment
- success metrics
- risks and waste-prevention rules
- approval gates before live campaigns

## Required Deliverables

Praxion must return:

1. Low-budget ad strategy memo.
2. Organic-to-paid promotion map.
3. Channel priority matrix.
4. Audience hypothesis matrix.
5. Creative / message test matrix.
6. 5-10 EUR/day experiment structure.
7. Approval gate checklist.

## Suggested Internal Praxion Microtasks

Praxion may internally decompose the request into microtasks such as:

- review current public offer and SEO / paid-search boundaries
- map Heritage Building Record promotion paths
- map Project Record promotion paths
- compare likely channel fit for Instagram, LinkedIn, Facebook, Google, and YouTube
- define low-budget test structures and stopping rules
- map audience hypotheses by service / content type
- map creative and message hypotheses without final ad copy approval
- define measurement concepts without activating tracking
- QA against ad, tracking, publishing, scheduling, and budget boundaries

These microtasks remain internal to Praxion and do not become Linear issues unless Codex / Foundry or Dobromir promotes them under DK-17.

## Output Format

Return a Markdown package with these sections:

1. Executive summary.
2. Source and assumption register.
3. Low-budget ad strategy memo.
4. Organic-to-paid promotion map.
5. Channel priority matrix.
6. Audience hypothesis matrix.
7. Creative / message test matrix.
8. 5-10 EUR/day experiment structure.
9. Measurement and success criteria notes.
10. Waste-prevention and risk rules.
11. Approval gate checklist.
12. Recommended future Linear issue candidates, if any.

Matrices may be Markdown tables.

## Quality Requirements

- Keep all ad strategy non-executing.
- Focus on low-budget reality, learning speed, and waste prevention.
- Separate organic content workflow from paid campaign workflow.
- Separate draft ad-ready ideas from final ad copy.
- Mark retargeting / remarketing only as future options requiring approval.
- Do not recommend tracking activation as part of this request.
- Include stop-loss style criteria for very small budget experiments.
- Preserve rights/source attribution and content approval gates.

## Source / Citation Requirements

Praxion must cite external channel, ads, benchmark, or platform claims where used.

For each external source, include:

- source title or organization
- URL
- access date
- what the source supports
- confidence level

Use repository documents for DK Arkitekter-specific constraints and cite the relevant file paths.

## Approval Gates

Dobromir approval remains required before:

- ad campaigns are launched
- ad accounts are configured
- budgets are activated or changed
- tracking pixels, analytics SDKs, cookies, or conversion events are implemented
- posts, videos, articles, or ads are published or scheduled
- final ad copy is used
- landing-page copy or public claims are used
- platform integrations or automation are implemented

## Forbidden Actions

Praxion must not:

- launch campaigns
- set or spend budgets
- configure ad accounts
- install tracking pixels
- activate analytics
- publish content
- schedule content
- approve final ad copy
- approve final campaign strategy for live use
- change GitHub or Linear directly
- use private client data, raw media, secrets, runtime files, generated caches, or machine-specific files

## Escalation Triggers

Escalate to Codex / Foundry if:

- a recommendation requires live campaign setup
- a recommendation requires tracking activation
- a recommendation requires public copy approval
- a recommendation requires visual direction approval
- a recommendation depends on unavailable account data or private analytics
- public content rights are unclear
- the strategy would require publishing, scheduling, email, or automation

## Return Package Requirements

The return package must include:

- request ID: P-DKA-20260515-DK-003
- related Linear issue list
- service track
- source materials used
- sources not available
- assumptions made
- deliverables produced
- confidence levels
- risks and constraints
- approval gates triggered
- forbidden actions avoided
- open questions for Dobromir
- recommended incorporation targets
- internal Praxion microtask summary
- no-implementation confirmation
- no-live-automation confirmation
- no-live-ads confirmation
- no-budget-activation confirmation
- no-tracking confirmation
- no-publishing confirmation
- no-final-client-facing-copy confirmation

## Boundary Confirmation

No live ads are requested. No ad account setup is requested. No tracking pixels are requested. No publishing, scheduling, or budget activation is requested.
