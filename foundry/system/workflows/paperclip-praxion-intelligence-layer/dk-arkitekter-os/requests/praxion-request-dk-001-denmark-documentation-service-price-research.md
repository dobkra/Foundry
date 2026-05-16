# DK-001 - Denmark Documentation Service + Price/Fee Research

Request ID: P-DKA-20260515-DK-001

Dispatch status: ready for Praxion. Created as repository documentation because no safe local Paperclip / Praxion task interface was found in the current workspace.

Service track: Denmark Documentation Service + Price/Fee Research

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

Request Praxion to produce the deepest practical Denmark-specific research package for DK Arkitekter's documentation-service model and future Quote Generator / Price Book planning.

The result should help Codex / Foundry understand the Danish service catalogue, fee signals, consultant categories, public authority fee patterns, and market positioning implications without approving DK Arkitekter prices or quote logic.

## Background

DF-29 authorizes bounded Praxion service requests when enough source material exists. DK Arkitekter is planning local/internal systems including the Quote Generator / Price Book, Content Studio / Media Processing, and automation tools. Existing quote documents define a broad documentation-service model, hybrid pricing direction, consultant allowance concepts, quote snapshot governance, and strict boundaries against actual price approval or executable formulas.

Praxion should treat this as research and decision support only.

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
- `src/lib/public-site.ts`

Linear sources:

- DK-31, DK-77, DK-78, DK-79, DK-113, DK-115, DF-29

Optional source not available at dispatch:

- The optional local systems scope map was not found on `main`. Proceed using DK-31 and the listed quote/platform docs.

## Required Research Depth

Deep public-source research and structured synthesis.

Praxion should prioritize Denmark-specific sources and distinguish:

- source-backed findings
- market pattern observations
- cautious inferences
- unknowns or low-confidence areas
- areas requiring Dobromir approval
- areas requiring later professional/legal/accounting review

## Research Scope

Praxion must research:

- architectural documentation services performed in Denmark
- design services
- myndighedsprojekt / permit documentation services
- hovedprojekt / technical documentation services
- construction-documentation coordination
- engineering / statics services
- energy calculation / energy documentation services
- land surveyor services
- soil / geotechnical services
- municipality / authority fees and public fee structures
- existing-condition registration
- 3D scanning / scan-to-drawings
- final documentation / building record collection
- færdigmelding / final-use documentation support
- interior architecture
- bathrooms
- kitchens
- wardrobes
- laundry rooms
- built-in furniture
- lighting fixtures
- material selection
- landscape design as secondary service
- styling / movable furniture as secondary service
- related consultant / specialist services
- typical price ranges, fee models, package structures, and market patterns where publicly researchable or safely inferable

## Required Deliverables

Praxion must return:

1. Denmark service catalogue research brief.
2. Price / fee signal matrix.
3. Consultant / specialist fee category map.
4. Public authority fee map.
5. Market positioning notes.
6. Risk and confidence notes.
7. Quote-generator implications memo.
8. Open questions for Dobromir.

## Suggested Internal Praxion Microtasks

Praxion may internally decompose the request into microtasks such as:

- collect Danish public authority and BR18 / municipality source references
- map architecture and documentation service categories
- map consultant and specialist categories
- identify public authority fee patterns and municipality variability
- scan publicly visible Danish architecture / consultant market pricing signals
- separate source-backed price signals from inferred market patterns
- map quote-generator implications against DK-77, DK-78, DK-79, DK-113, and DK-115
- prepare confidence and risk notes
- QA the packet against forbidden actions before return

These microtasks remain internal to Praxion and do not become Linear issues unless Codex / Foundry or Dobromir promotes them under DK-17.

## Output Format

Return a Markdown package with these sections:

1. Executive summary.
2. Source register.
3. Denmark service catalogue research brief.
4. Price / fee signal matrix.
5. Consultant / specialist fee category map.
6. Public authority fee map.
7. Market positioning notes.
8. Quote-generator implications memo.
9. Risk and confidence notes.
10. Open questions for Dobromir.
11. Recommended future Linear issue candidates, if any.
12. Required approval gates before use.

Matrices may be Markdown tables.

## Quality Requirements

- Denmark-specific research is primary.
- Public, citeable sources are preferred.
- Separate facts from recommendations and inferences.
- Mark confidence for each price / fee signal.
- Keep public authority fees separate from consultant/service fees.
- Keep consultant allowances separate from DK Arkitekter service pricing.
- Preserve internal versus client-facing quote separation.
- Do not imply production quote use.
- Do not invent approved DK Arkitekter prices.

## Source / Citation Requirements

Praxion must include citations for external factual claims and public price / fee signals.

For each cited source, include:

- source title or organization
- URL
- access date
- what the source supports
- confidence level

Use direct quotes sparingly. Prefer concise summaries with links.

## Approval Gates

Dobromir approval remains required before:

- actual DK Arkitekter prices are adopted
- hourly rates, package rates, markups, discounts, or allowance amounts are used
- executable quote formulas are created
- client-facing package names or pricing language are approved
- legal / contract / quote wording is finalized
- pricing policy is used commercially
- any implementation starts

## Forbidden Actions

Praxion must not:

- approve actual DK Arkitekter prices
- create executable formulas
- create binding quote logic
- create production price-book data
- finalize legal wording
- finalize client-facing pricing text
- make tax, accounting, or legal advice claims
- contact consultants or clients on behalf of DK Arkitekter
- change GitHub or Linear directly
- use private client data, raw media, secrets, runtime files, generated caches, or machine-specific files

## Escalation Triggers

Escalate to Codex / Foundry if:

- a required source is unavailable
- public price signals are too weak for a confident matrix
- findings require actual price approval
- findings require legal / tax / accounting interpretation
- a source conflicts materially with existing DK documents
- the research would require private data, consultant outreach, client contact, or paid data access
- completing the request would require implementation or automation

## Return Package Requirements

The return package must include:

- request ID: P-DKA-20260515-DK-001
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
- no-final-legal-wording confirmation
- no-final-client-facing-copy confirmation

## Boundary Confirmation

No actual DK Arkitekter prices are approved by this request. No executable formulas are requested. No binding quote logic is requested. No final legal or client-facing wording is requested.
