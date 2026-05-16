# DK-004 - Quote Generator Legal / Service / Price Deep-Dive

Request ID: P-DKA-20260515-DK-004

Dispatch status: ready for Praxion. Created as repository documentation because no safe local Paperclip / Praxion task interface was found in the current workspace.

Service track: Quote Generator Legal / Service / Price Deep-Dive

Related Linear issues:

- DK-31 - local systems / Quote Generator / Content Studio
- DK-77 - service packages and quote logic
- DK-78 - third-party consultant allowance logic
- DK-79 - quote snapshot and approval rules
- DK-113 - Quote Generator business model decisions
- DK-115 - Danish construction documentation service catalogue research
- Quote Generator follow-up issues where service catalogue, quote-package, legal, fee, or allowance knowledge is relevant
- DF-29 - Praxion service-hook map

## Purpose

Request Praxion to produce a deep decision-support package for Quote Generator legal, service, pricing-signal, allowance, and service-boundary risks.

The result should help Codex / Foundry understand which legal / service / pricing issues must be handled before future Quote Generator implementation or quote use, without creating final legal wording, binding contract terms, actual prices, formulas, tax/accounting advice, or production quote logic.

## Background

Existing quote documents define a future local/private-first Quote Generator / Price Book with hybrid pricing direction, broad service-package families, consultant and authority allowance concepts, internal versus client-facing quote separation, and immutable sent quote snapshot rules. These documents explicitly do not approve prices, executable formulas, final legal wording, production quote output, automation, implementation, deployment, or release.

Praxion should produce risk mapping, option matrices, and decision-support memos only.

## Available Source Materials

Repository sources:

- `foundry/system/workflows/paperclip-praxion-intelligence-layer/dk-arkitekter-os/praxion-dk-arkitekter-service-hook-map-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/quote-generator-price-book/local-quote-generator-price-book-scope-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/quote-generator-price-book/service-packages-and-quote-logic-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/quote-generator-price-book/quote-generator-business-model-decisions-v1.md`
- `dk-arkitekter-os/production-tools/tools/service-catalogue-research/danish-construction-documentation-service-catalogue-research-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/quote-generator-price-book/quote-snapshot-and-approval-rules-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/quote-generator-price-book/third-party-consultant-allowance-logic-v1.md`
- `dk-arkitekter-os/project-governance/platform-architecture-v1.md`
- `README.md`
- `src/components/public-site.tsx`

Linear sources:

- DK-31, DK-77, DK-78, DK-79, DK-113, DK-115, DF-29

Optional source not available at dispatch:

- The optional local systems scope map was not found on `main`. Proceed using DK-31 and the existing quote docs.

## Required Research Depth

Deep legal-risk and service-structure research, clearly marked as non-legal-advice decision support.

Praxion should distinguish:

- service boundary risks
- pricing / fee signals
- authority fee patterns
- consultant allowance logic implications
- package inclusion / exclusion risks
- internal calculation versus client-facing presentation issues
- quote snapshot governance implications
- legal / contract wording areas requiring later professional review

## Research And Structure Scope

Praxion must research and structure:

- Denmark service catalogue depth
- market price and fee signals
- municipality / authority fee logic
- consultant / specialist allowance logic
- service boundary risks
- package inclusion / exclusion logic
- internal versus client-facing quote structure
- assumptions and exclusions
- revision allowance concepts
- confidence levels
- quote snapshot implications
- legal / contract language risk areas requiring later legal approval
- edge cases and related service categories

## Required Deliverables

Praxion must return:

1. Quote-generator legal / service risk memo.
2. Service boundary map.
3. Pricing signal matrix.
4. Fee / allowance research map.
5. Internal versus client-facing quote separation memo.
6. Approval-gate checklist.

## Suggested Internal Praxion Microtasks

Praxion may internally decompose the request into microtasks such as:

- review all quote source documents and extract explicit non-approvals
- map service-package inclusion / exclusion categories
- map consultant and authority fee allowance issues
- identify edge cases by project type
- scan public Danish quote / architecture / consultant fee practices where safely citeable
- map quote snapshot risk implications
- prepare legal-risk areas requiring later professional review
- separate internal calculation concerns from client-facing presentation concerns
- QA against no-price, no-formula, and no-final-legal boundaries

These microtasks remain internal to Praxion and do not become Linear issues unless Codex / Foundry or Dobromir promotes them under DK-17.

## Output Format

Return a Markdown package with these sections:

1. Executive summary.
2. Source and assumption register.
3. Quote-generator legal / service risk memo.
4. Service boundary map.
5. Pricing signal matrix.
6. Fee / allowance research map.
7. Internal versus client-facing quote separation memo.
8. Quote snapshot implications.
9. Edge cases and unresolved categories.
10. Approval-gate checklist.
11. Open questions for Dobromir.
12. Recommended future Linear issue candidates, if any.

Matrices may be Markdown tables.

## Quality Requirements

- Mark the output as non-legal-advice and non-pricing-approval.
- Separate source-backed findings from cautious inferences.
- Keep actual price adoption outside scope.
- Keep executable formulas outside scope.
- Identify legal / contract wording areas that require Dobromir and later professional review.
- Keep internal calculation details separate from client-facing output structure.
- Preserve immutable issued quote snapshot rules.
- Preserve Dobromir approval before all client-facing quote use.

## Source / Citation Requirements

Praxion must cite external legal, authority, fee, market, or professional-practice sources where used.

For each cited source, include:

- source title or organization
- URL
- access date
- what the source supports
- confidence level

Do not present cited material as final legal advice. Use repository docs for DK Arkitekter-specific governance and cite the relevant file paths.

## Approval Gates

Dobromir approval remains required before:

- final legal or contract wording is used
- final quote terms are used
- actual DK Arkitekter prices are approved
- price tables, rates, markups, discounts, or allowance values are adopted
- executable formulas are created
- client-facing quote wording is approved
- quote generator implementation starts
- quote output is sent or shown to a client
- automation or integrations are implemented

Later professional legal / tax / accounting review may be required for regulated advice or binding terms.

## Forbidden Actions

Praxion must not:

- finalize legal wording
- finalize contract terms
- create binding offer terms
- approve actual prices
- create executable formulas
- provide tax/accounting/legal advice as final advice
- create production quote logic
- create price-book data
- contact clients or consultants on behalf of DK Arkitekter
- change GitHub or Linear directly
- use private client data, raw media, secrets, runtime files, generated caches, or machine-specific files

## Escalation Triggers

Escalate to Codex / Foundry if:

- a conclusion requires legal approval
- a conclusion requires price approval
- a conclusion requires tax or accounting review
- a risk cannot be evaluated from public / repository sources
- the request would require private project or client data
- the work would require implementation, formula creation, quote generation, client communication, or automation
- existing quote source documents conflict materially

## Return Package Requirements

The return package must include:

- request ID: P-DKA-20260515-DK-004
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
- no-price-approval confirmation
- no-formula confirmation
- no-final-legal-wording confirmation
- no-final-client-facing-copy confirmation

## Boundary Confirmation

No final legal wording is requested. No binding contract terms are requested. No actual prices are requested. No formulas are requested. No tax, accounting, or legal advice is requested as final advice.
