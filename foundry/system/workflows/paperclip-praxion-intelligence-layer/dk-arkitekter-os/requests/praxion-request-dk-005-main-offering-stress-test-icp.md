# DK-005 - DK Arkitekter Main Offering Stress-Test + ICP Research

Request ID: P-DKA-20260515-DK-005

Dispatch status: ready for Praxion. Created as repository documentation because no safe local Paperclip / Praxion task interface was found in the current workspace.

Service track: DK Arkitekter Main Offering Stress-Test + ICP Research

Related Linear issues:

- DK-38 - Admin / Growth Studio MVP Decision Workshop
- DK-55 - social package for Heritage Building Records
- DK-56 - social package for Project Records
- DK-67 - promotion workflow for Heritage Building Records
- DK-68 - promotion workflow for Project Records
- DK-72 - lead qualification agent workflow decision workshop
- DK-73 - minimal contact form and follow-up questions
- DK-74 - lead qualification report for Dobromir
- DK-75 - availability and booking workflow decision workshop
- DK-80 - Content Studio / Media Processing app scope
- DK-81 - Heritage Study intake workflow
- DK-82 - source to analysis to modern translation workflow
- DK-83 - YouTube / Instagram / LinkedIn draft generation
- DF-29 - Praxion service-hook map

## Purpose

Request Praxion to stress-test DK Arkitekter's current public offer and produce ideal-client-profile research for content, promotion, landing-page section, lead qualification, and service-positioning planning.

The result should help Codex / Foundry understand the offer's clarity, market fit, likely client profiles, buying triggers, objections, trust factors, and missing proof without approving final positioning, homepage copy, visual direction, ad copy, or campaign launch.

## Background

The current public offer presents DK Arkitekter as designing modern homes inspired by Danish building heritage, including private villas, full-home renovations, and historic homes. Homepage/source material emphasizes one unified process, clear written offers after free clarification, no standard houses, no reused designs, documentation, permit material, consultant coordination, and client contact through a currently non-submitting contact surface.

The request should connect the public offer to future lead qualification, promotion workflows, Project Records, Heritage Building Records, Content Studio, and social / ad planning.

## Available Source Materials

Repository sources:

- `foundry/system/workflows/paperclip-praxion-intelligence-layer/dk-arkitekter-os/praxion-dk-arkitekter-service-hook-map-v1.md`
- `README.md`
- `src/components/public-site.tsx`
- `src/lib/public-site.ts`
- `dk-arkitekter-os/project-governance/platform-architecture-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/public-website-frontend/website-information-architecture-v2.md`
- `dk-arkitekter-os/growth-and-sales/modules/public-website-frontend/seo-and-manual-paid-search-landing-page-structure-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/project-records-manager/project-record-model-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/heritage-building-records-manager/heritage-building-record-model-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/organic-publishing-hub-scope-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/governance-data-integrations/rights-source-attribution-workflow-v1.md`
- `dk-arkitekter-os/production-tools/tools/service-catalogue-research/danish-construction-documentation-service-catalogue-research-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/quote-generator-price-book/service-packages-and-quote-logic-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/analytics-lead-attribution/analytics-event-lead-attribution-model-v1.md`

Linear sources:

- DK-38, DK-55, DK-56, DK-67, DK-68, DK-72, DK-73, DK-74, DK-75, DK-80, DK-81, DK-82, DK-83, DF-29

## Required Research Depth

Deep strategy and market-fit synthesis.

Praxion should review the current offer as source material, compare it against likely Danish private-home client needs, and produce practical ICP, messaging, objection, trust, and landing-section recommendations that remain approval-gated.

## Review And Research Scope

Praxion must review DK Arkitekter's current public offer from homepage / README / source material and produce:

- main offering summary
- stress-test of offer clarity and market fit
- ideal client profile matrix
- client pains
- buying triggers
- objections
- trust factors
- high-fit and low-fit segments
- messaging angles to test
- landing-page / ad section recommendations
- missing proof or missing explanation notes
- connection to modern heritage, modern houses, renovations, extensions, apartment renovations in older / historic buildings, interiors, kitchens, bathrooms, and documentation-service positioning

## Required Deliverables

Praxion must return:

1. Main offering stress-test memo.
2. ICP / client-profile matrix.
3. Buying-trigger and objection map.
4. Trust-factor map.
5. Landing-page / ad-section recommendation matrix.
6. Messaging hypothesis list.
7. Approval-gate checklist.

## Suggested Internal Praxion Microtasks

Praxion may internally decompose the request into microtasks such as:

- extract current public offer from README and homepage source files
- summarize current services, promise, process, CTA, and boundaries
- identify likely high-fit and low-fit client segments
- map client pains and buying triggers by project type
- map objections and trust gaps
- connect offer to Project Records and Heritage Building Records
- connect offer to lead qualification and booking readiness
- connect offer to promotion and low-budget ad hypotheses
- prepare missing proof / missing explanation notes
- QA against final-positioning, client-facing copy, visual, and ad approval boundaries

These microtasks remain internal to Praxion and do not become Linear issues unless Codex / Foundry or Dobromir promotes them under DK-17.

## Output Format

Return a Markdown package with these sections:

1. Executive summary.
2. Source and assumption register.
3. Main offering summary.
4. Main offering stress-test memo.
5. ICP / client-profile matrix.
6. Buying-trigger and objection map.
7. Trust-factor map.
8. High-fit and low-fit segment notes.
9. Landing-page / ad-section recommendation matrix.
10. Messaging hypothesis list.
11. Missing proof / missing explanation notes.
12. Approval-gate checklist.
13. Recommended future Linear issue candidates, if any.

Matrices may be Markdown tables.

## Quality Requirements

- Ground the offer summary in current repository sources.
- Preserve the no standard houses / no reused designs rule.
- Preserve Danish primary / English secondary language strategy.
- Separate internal hypotheses from final public positioning.
- Mark client-facing copy as draft / hypothesis only.
- Do not approve visual direction.
- Do not approve public claims.
- Connect recommendations to lead qualification, content, social, and promotion workflows.
- Identify where Dobromir needs to make business or creative decisions.

## Source / Citation Requirements

Praxion must cite repository source files for current offer claims.

For external market / ICP / client behavior claims, cite public sources where used. Each external source citation should include:

- source title or organization
- URL
- access date
- what the source supports
- confidence level

If Praxion uses strategic inference without a source, mark it clearly as an inference or hypothesis.

## Approval Gates

Dobromir approval remains required before:

- final market positioning is adopted
- homepage copy is changed or approved
- final public claims are used
- visual direction is changed
- final ad copy is used
- campaign strategy is approved for launch
- landing-page structure changes are made
- client-facing messaging is published
- lead qualification or booking workflows are implemented

## Forbidden Actions

Praxion must not:

- approve final positioning
- approve final homepage copy
- approve final ad copy
- approve visual direction
- launch campaigns
- publish content
- schedule content
- change GitHub or Linear directly
- use private client data, raw media, secrets, runtime files, generated caches, or machine-specific files

## Escalation Triggers

Escalate to Codex / Foundry if:

- offer stress-test findings require a business direction decision
- recommendations require public copy approval
- recommendations require visual direction approval
- recommendations require changing route structure
- recommendations require live ads, tracking, publishing, or scheduling
- necessary proof or source material is missing
- a proposed ICP depends on actual pricing decisions

## Return Package Requirements

The return package must include:

- request ID: P-DKA-20260515-DK-005
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
- no-client-contact confirmation
- no-positioning-approval confirmation
- no-final-homepage-copy confirmation
- no-final-ad-copy confirmation
- no-visual-approval confirmation
- no-campaign-launch confirmation

## Boundary Confirmation

No final positioning approval is requested. No final homepage copy is requested. No final ad copy is requested. No visual direction approval is requested. No campaign launch is requested.
