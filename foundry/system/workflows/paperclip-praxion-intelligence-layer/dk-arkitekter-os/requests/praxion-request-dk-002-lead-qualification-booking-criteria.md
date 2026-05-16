# DK-002 - Lead Qualification + Booking Criteria Research

Request ID: P-DKA-20260515-DK-002

Dispatch status: ready for Praxion. Created as repository documentation because no safe local Paperclip / Praxion task interface was found in the current workspace.

Service track: Lead Qualification + Booking Criteria Research

Related Linear issues:

- DK-72 - Lead Qualification Agent Workflow Decision Workshop
- DK-73 - minimal contact form and follow-up questions
- DK-74 - lead qualification report for Dobromir
- DK-75 - availability and booking workflow decision workshop
- DK-40 - lead inbox and qualification dashboard
- DK-41 - booking availability management
- DF-29 - Praxion service-hook map

## Purpose

Request Praxion to produce a decision-support research package for DK Arkitekter lead qualification and booking readiness.

The result should help Codex / Foundry define how leads should be evaluated, what information is required before a site visit or 3D scan, what Dobromir needs in a lead report, and which approval gates prevent automatic qualification or booking.

## Background

DK Arkitekter is planning lead qualification, contact form, lead report, and booking workflows before any automation or client-facing messaging is implemented. Existing quote documents require minimum client and Opportunity information before quote work, and the public offer emphasizes a free initial clarification before a written offer.

Praxion should produce internal criteria, checklists, and question logic only. Praxion must not contact leads, qualify real clients, book meetings, or approve client-facing scripts.

## Available Source Materials

Repository sources:

- `foundry/system/workflows/paperclip-praxion-intelligence-layer/dk-arkitekter-os/praxion-dk-arkitekter-service-hook-map-v1.md`
- `README.md`
- `src/components/public-site.tsx`
- `src/lib/public-site.ts`
- `dk-arkitekter-os/project-governance/platform-architecture-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/public-website-frontend/website-information-architecture-v2.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/quote-generator-price-book/quote-generator-business-model-decisions-v1.md`
- `dk-arkitekter-os/production-tools/tools/service-catalogue-research/danish-construction-documentation-service-catalogue-research-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/quote-generator-price-book/service-packages-and-quote-logic-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/quote-generator-price-book/quote-snapshot-and-approval-rules-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/analytics-lead-attribution/analytics-event-lead-attribution-model-v1.md`

Linear sources:

- DK-72, DK-73, DK-74, DK-75, DK-40, DK-41, DF-29

## Required Research Depth

Deep criteria research and synthesis.

Praxion should produce practical decision-support materials that can be converted later into scope maps, workflow docs, or decision workshop prompts. The output should distinguish safe internal criteria from client-facing wording that needs Dobromir approval.

## Research And Definition Scope

Praxion must research and define:

- ideal client profile criteria
- lead-fit criteria
- budget-readiness signals
- project-type qualification
- ownership / decision-maker readiness
- urgency and timeline criteria
- permit complexity indicators
- property / building constraints
- heritage / modern-traditional design fit
- service-package fit
- renovation / extension / apartment / bathroom / kitchen logic
- disqualification criteria
- booking-readiness criteria
- required information before site visit or 3D scan
- required information before quote request
- recommended follow-up question logic
- lead report structure for Dobromir

## Required Deliverables

Praxion must return:

1. Lead qualification criteria matrix.
2. Booking-readiness checklist.
3. Follow-up question tree.
4. Disqualification / low-fit rule set.
5. Lead report template for Dobromir.
6. Risk notes and approval gates.

## Suggested Internal Praxion Microtasks

Praxion may internally decompose the request into microtasks such as:

- map lead journey from public offer to clarification to quote readiness
- define ideal client profile dimensions
- define project-fit dimensions by project type
- define budget-readiness signals without asking Praxion to approve prices
- map property / permit / ownership readiness criteria
- draft internal follow-up question tree
- map booking readiness and site-visit readiness thresholds
- draft Dobromir-facing lead report structure
- QA against client-contact, booking, and automation boundaries

These microtasks remain internal to Praxion and do not become Linear issues unless Codex / Foundry or Dobromir promotes them under DK-17.

## Output Format

Return a Markdown package with these sections:

1. Executive summary.
2. Source and assumption register.
3. Lead qualification criteria matrix.
4. Booking-readiness checklist.
5. Follow-up question tree.
6. Disqualification / low-fit rule set.
7. Site visit / 3D scan readiness criteria.
8. Quote-readiness information requirements.
9. Dobromir lead report template.
10. Risk notes and approval gates.
11. Recommended future Linear issue candidates, if any.

Matrices and checklists may be Markdown tables.

## Quality Requirements

- Keep criteria operational and concrete.
- Separate high-fit, medium-fit, low-fit, and disqualifying signals.
- Distinguish missing information from negative fit.
- Do not infer that a real lead is accepted.
- Do not create final client-facing scripts.
- Preserve Dobromir as final validation layer before accepting projects.
- Preserve privacy and data minimization.
- Identify what must be reviewed by Dobromir before booking or quote preparation.

## Source / Citation Requirements

For market or sales-process claims, cite relevant public sources where used. For internal DK Arkitekter process rules, cite repository documents and Linear issue IDs.

Each external source citation should include:

- source title or organization
- URL
- access date
- what the source supports
- confidence level

If Praxion uses general synthesis without a direct source, mark it as an inference.

## Approval Gates

Dobromir approval remains required before:

- a real lead is qualified or disqualified
- a meeting is booked
- a site visit or 3D scan is scheduled
- a quote request is accepted
- final client-facing contact form copy is used
- final client-facing follow-up scripts are used
- automation or lead-scoring logic is implemented
- booking or calendar integration is implemented

## Forbidden Actions

Praxion must not:

- contact leads
- send messages or emails
- book meetings
- qualify real clients automatically
- approve real lead acceptance
- approve final client-facing scripts
- activate lead automation
- change GitHub or Linear directly
- use private client data, raw media, secrets, runtime files, generated caches, or machine-specific files

## Escalation Triggers

Escalate to Codex / Foundry if:

- criteria require a business decision by Dobromir
- a proposed question would become client-facing final copy
- a rule would automatically reject or accept real leads
- a rule requires actual pricing thresholds
- a rule requires legal, privacy, or consent wording
- the request would require client data or client contact
- implementation, booking, automation, or external integration becomes necessary

## Return Package Requirements

The return package must include:

- request ID: P-DKA-20260515-DK-002
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
- no-booking confirmation
- no-real-client-qualification confirmation
- no-final-client-facing-copy confirmation

## Boundary Confirmation

No real client qualification automation is requested. No client messaging is requested. No booking is requested. No final client-facing scripts are requested.
