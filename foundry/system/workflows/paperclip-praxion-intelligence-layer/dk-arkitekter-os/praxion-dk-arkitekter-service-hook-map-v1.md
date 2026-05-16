# Praxion DK Arkitekter Service Hook Map V1

Linear alignment: DF-29 / Map Praxion service hooks into DK Arkitekter agenda.

Work level: Bridge/mixed work between Dobromir Foundry / Praxion Foundation and DK Arkitekter Growth & Sales OS.

Assigned agent: Codex Foundry execution layer, with Praxion treated as a controlled service-provider layer.

Approval gate: Scope approved for documentation-only service-request control mapping. Future business, creative, client-facing, pricing, legal, privacy, automation, deployment, publishing, release, client communication, tracking, and ad activation decisions still require Dobromir approval.

## 1. Purpose

This specification defines how Codex / Foundry may request bounded Praxion service deliverables from the remaining DK Arkitekter Growth & Sales OS agenda when enough source information exists.

The goal is to create a service-request control layer, not an implementation layer.

This document maps:

- which DK agenda areas can ask Praxion for service deliverables
- what information must exist before a request is safe
- what a Codex-to-Praxion service request packet must include
- what Praxion may decompose internally
- what Praxion must return to Codex / Foundry
- where Praxion deliverables feed back into Linear and GitHub
- which approval gates remain with Dobromir

This specification incorporates Dobromir's DF-29 Praxion service-request input from Linear, including the five initial Praxion service tracks for Denmark documentation-service research, lead qualification and booking, promotion and low-budget ads strategy, quote-generator legal/service/price research, and DK Arkitekter main-offering stress testing.

## 2. Decision Status

Status: active service-hook map after merge.

Decision:

Codex may prepare bounded Praxion service requests for DK Arkitekter agenda work when the information sufficiency criteria in this document are met and the request stays inside the non-implementation boundaries.

Praxion may internally decompose accepted service requests into microtasks, but those internal microtasks do not authorize repository changes, Linear changes, implementation, publishing, client contact, pricing approval, legal finalization, automation, deployment, or release.

Dobromir remains the final Product Architect, Visual Director, Business Logic Architect, and Final Validation Layer.

Source review performed for this map:

- DF-29 and Dobromir's latest Praxion service-request comment
- DF-19, DF-20, DF-21, DF-22, DF-25, DF-27, and DF-28
- DK-17 business requirement intake and change control
- DK-31, DK-38 to DK-45, DK-55, DK-56, DK-67 to DK-69, DK-72 to DK-75, DK-80 to DK-86, DK-77 to DK-79, DK-113, and DK-115
- `AGENTS.md`
- `dk-arkitekter-os/project-governance/workflows/business-requirement-intake-and-change-control-v1.md`
- `dk-arkitekter-os/project-governance/roadmap.md`
- `dk-arkitekter-os/growth-and-sales/modules/public-website-frontend/website-information-architecture-v2.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/quote-generator-price-book/local-quote-generator-price-book-scope-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/quote-generator-price-book/quote-generator-business-model-decisions-v1.md`
- `dk-arkitekter-os/production-tools/tools/service-catalogue-research/danish-construction-documentation-service-catalogue-research-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/quote-generator-price-book/service-packages-and-quote-logic-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/quote-generator-price-book/third-party-consultant-allowance-logic-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/quote-generator-price-book/quote-snapshot-and-approval-rules-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/public-website-frontend/seo-and-manual-paid-search-landing-page-structure-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/analytics-lead-attribution/analytics-event-lead-attribution-model-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/organic-publishing-hub-scope-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/project-records-manager/project-record-model-v1.md`
- `dk-arkitekter-os/growth-and-sales/modules/backend-admin-growth-studio/heritage-building-records-manager/heritage-building-record-model-v1.md`

No reviewed source conflicts with this service-provider operating model.

## 3. Scope

This document covers documentation-only service-request governance for Praxion hooks into DK Arkitekter Growth & Sales OS.

In scope:

- service-request lifecycle
- source sufficiency rules
- Praxion microtask boundaries
- return package format
- approval gate matrix
- service request taxonomy
- DK issue-to-Praxion hook matrix
- five initial Praxion service tracks
- safe request examples
- refusal and escalation examples
- delivery feed-back paths into Linear and GitHub
- future promotion rules for Praxion internal microtasks

This document is operational and implementation-ready as a control layer, but it does not execute any service request.

## 4. Non-Goals

This document does not introduce:

- implementation code
- app code
- UI
- backend behavior
- database schema
- migrations
- API endpoints
- live Paperclip automation
- live agent execution
- live Linear-to-Paperclip integration
- live Codex-to-Praxion automation
- live ad campaigns
- tracking pixels
- publishing or scheduling
- email sending
- client communication
- actual DK Arkitekter prices
- executable quote formulas
- final legal wording
- final contract wording
- final client-facing copy
- privacy policy finalization
- deployment or release configuration
- raw media
- private client data
- local Paperclip / DKA runtime files
- generated caches
- machine-specific files
- secrets

## 5. Praxion Role In DK Arkitekter Growth & Sales OS

Praxion is a controlled service-provider layer inside the Dobromir Foundry operating model.

Operating roles:

- Linear is mission control for issue scope, status, blockers, approval gates, and done state.
- GitHub is source of truth for merged repository documentation, code, PR history, checks, and review history.
- Codex executes scoped repository and documentation tasks.
- Praxion receives bounded service requests from Codex / Foundry.
- Praxion researches, synthesizes, structures, drafts, evaluates, or prepares decision options inside the approved request boundary.
- Praxion may define internal microtasks needed to deliver the accepted service request.
- Praxion returns deliverables to Codex / Foundry for review, incorporation, or escalation.
- Dobromir owns final product, business, visual, client-facing, pricing, legal, creative, automation, publishing, deployment, and release decisions.

Praxion is not a repository execution agent. Praxion does not independently change GitHub, Linear, public website content, client records, ad accounts, tracking systems, email systems, quote systems, or deployment state.

## 6. Codex-to-Praxion Service Request Lifecycle

1. Codex reads the active Linear issue and relevant GitHub source documents.
2. Codex classifies the needed Praxion output using the taxonomy in this document.
3. Codex checks information sufficiency.
4. Codex checks forbidden actions and approval gates.
5. Codex prepares a service request packet.
6. Codex sends the packet to Praxion only if the request is bounded, source-backed, and non-executing.
7. Praxion accepts, refuses, or asks for clarification.
8. If accepted, Praxion may decompose the work into internal microtasks.
9. Praxion produces the requested deliverable and applies QA / approval-gate checks before return.
10. Praxion returns the package to Codex / Foundry.
11. Codex reviews the return package for scope, source support, forbidden content, approval gates, and repo fit.
12. Codex incorporates the deliverable into the relevant GitHub documentation or Linear issue only through normal scoped execution.
13. If the deliverable reveals new work, Codex / Foundry or Dobromir may promote it into Linear under DK-17 change-control classification.
14. Dobromir approval remains mandatory before any Level 3 or Level 4 decision or external action.

Requesting a Praxion deliverable does not approve the deliverable for public, client-facing, commercial, legal, quote, ad, automation, deployment, or release use.

## 7. Information Sufficiency Criteria

Codex may request a Praxion service deliverable only when all of the following are true:

- The related DK issue or Foundry issue is known by identifier.
- The request can identify the relevant source documents, issue descriptions, or repository materials.
- The desired Praxion output is a bounded deliverable, not a vague mandate.
- The output can be reviewed as text, matrix, checklist, memo, or source-backed draft material.
- The request lists known constraints and forbidden actions.
- The request lists approval gates that remain outside Praxion authority.
- No private client data, raw media, secrets, local runtime files, generated caches, or machine-specific files are needed.
- No actual prices, executable formulas, final legal wording, final contract wording, or final client-facing copy must be approved to complete the request.
- No live automation, ad activation, tracking, publishing, scheduling, deployment, client communication, email sending, or external account change is required.
- The request can be refused or escalated cleanly if Praxion finds a missing approval gate.

A request is not sufficiently bounded if Praxion would need to invent Dobromir's business decision, decide DK Arkitekter pricing, finalize public positioning, approve legal language, choose a visual direction, activate an external system, contact a client, or publish material.

## 8. Praxion Internal Microtask Rule

Praxion may create and manage internal microtasks to deliver an accepted service request.

Internal Praxion microtasks are allowed for:

- research decomposition
- source collection and review planning
- market scan subtopics
- criteria matrix preparation
- option matrix preparation
- risk register preparation
- draft package assembly
- QA checks before return
- confidence and gap analysis

Internal Praxion microtasks are not Linear issues by default.

Internal Praxion microtasks do not authorize:

- implementation
- GitHub writes
- Linear writes
- client contact
- publishing
- scheduling
- ad campaign creation or activation
- budget changes
- tracking pixels
- automation
- deployment
- release
- legal finalization
- price approval
- executable quote formulas
- client-facing final copy
- privacy policy finalization
- use of private client data
- use of raw media in GitHub

Only Codex / Foundry or Dobromir may promote a Praxion internal microtask into Linear.

Promoted microtasks must preserve DK-17 change-control classification. They must be classified as Decision, Requirement, Idea / Candidate, Scope Change, Rejection / Removal, or Approval Gate before action.

## 9. Return Package Format

Every Praxion return package must include:

- `request_id`
- related DK / DF issue identifiers
- service track
- short executive summary
- source materials used
- source materials not available
- assumptions made
- deliverables produced
- confidence level for each deliverable
- risk notes
- approval gates triggered
- forbidden actions avoided
- open questions for Dobromir
- recommended incorporation target in GitHub or Linear
- Praxion internal microtask summary, if any
- proposed Linear promotion candidates, if any
- no-implementation confirmation
- no-live-automation confirmation
- no-client-contact confirmation
- no-price-approval confirmation
- no-final-legal-wording confirmation
- no-final-client-facing-copy confirmation
- date and version

Return packages must separate research findings, recommendations, options, assumptions, and approval-required decisions.

If Praxion cannot complete the request safely, the return package must say so and identify the missing source, conflicting source, required approval gate, or forbidden action.

## 10. Approval Gate Matrix

| Area | Praxion may do | Praxion must not do | Approval owner |
| --- | --- | --- | --- |
| Business model | Compare options, identify implications, prepare decision memos | Choose final business model or service positioning | Dobromir |
| Pricing | Research price signals, fee models, market patterns, allowance concepts | Approve DK Arkitekter prices, rates, amounts, discounts, markups, or executable formulas | Dobromir |
| Quote logic | Map assumptions, exclusions, internal versus client-facing separation, risk flags | Create production quote logic, price-book data, sent quote behavior, or executable calculation rules | Dobromir |
| Legal / contract | Flag issues, map risk, draft non-final concepts | Finalize legal wording, contract terms, privacy policy, tax/accounting advice, or binding offer terms | Dobromir and later professional review where needed |
| Client-facing copy | Produce draft options clearly marked as draft | Approve final public copy, quote copy, ads, scripts, posts, reports, emails, or website text | Dobromir |
| Creative / visual | Identify messaging hypotheses and content structure options | Choose final visual direction, brand direction, layouts, media use, or creative claims | Dobromir |
| Privacy / data | Identify data-boundary risks and minimization questions | Use private client data, raw media, secrets, or local runtime files in GitHub-facing outputs | Dobromir / Security and Data Governance review |
| Automation | Recommend future control points and risks | Activate agents, schedulers, API integrations, Paperclip flows, sending, publishing, or cross-tool automation | Dobromir |
| Ads / tracking | Research channels, audiences, test structures, success metrics | Launch campaigns, change budgets, configure accounts, install pixels, activate tracking, or publish ads | Dobromir |
| Publishing / scheduling | Prepare approval checklists and draft handoff maps | Publish, schedule, upload, send, or change external platform state | Dobromir |
| Client communication | Draft internal question trees and report structures | Contact leads, book meetings, send emails, qualify real clients automatically, or issue client promises | Dobromir |
| Deployment / release | Identify future dependencies and gates | Deploy, release, change hosting, connect services, or change production configuration | Dobromir |

## 11. Service Request Taxonomy

Codex may request these Praxion deliverable types when information sufficiency criteria are met:

- research brief
- source analysis brief
- market / competitor scan brief
- service catalogue structuring support
- price / fee signal matrix
- consultant / specialist category map
- public authority fee map
- criteria matrix
- readiness checklist
- follow-up question tree
- risk register
- decision-options memo
- implementation-readiness review
- QA checklist pass
- content package draft, internal draft only
- social post package draft, internal draft only
- bilingual copy support draft, internal draft only
- lead report structure
- promotion workflow map
- audience hypothesis matrix
- creative / message hypothesis matrix
- landing-page / section recommendation matrix

Draft deliverables may help later Codex documentation work, but final client-facing use requires the relevant approval gate.

## 12. DK Issue-to-Praxion Hook Matrix

| DK issue area | Praxion hook | Minimum source inputs | Expected return | Feeds back into |
| --- | --- | --- | --- | --- |
| DK-31 local systems / Quote Generator / Content Studio | Denmark service catalogue research, quote implications, Content Studio service-knowledge overlap | DK-31 scope, quote docs, Content Studio issue descriptions, current service-catalogue docs | Research brief, service category map, quote-generator implications memo | Local systems scope, future Quote Generator planning, Content Studio planning |
| DK-80 Content Studio scope | Source-to-draft workflow analysis and service-provider boundaries | DK-80 scope, Heritage Building Record model, Project Record model, Organic Publishing Hub scope | Content Studio service-hook map and risk notes | Content Studio scope map |
| DK-81 Heritage Study intake workflow | Heritage Study intake criteria and source sufficiency checklist | DK-81 scope, Heritage Building Record model, rights/source workflow | Intake checklist and Praxion request readiness criteria | Heritage Study intake workflow |
| DK-82 source-analysis and modern translation workflow | Source analysis brief and modern architectural translation support | DK-82 scope, Heritage Building Record model, rights/source workflow, approved source summaries | Source analysis matrix and draft interpretation options | Content analysis workflow |
| DK-83 YouTube / Instagram / LinkedIn draft generation | Draft generation support and promotion-adjacent hypotheses | DK-83 scope, Organic Publishing Hub scope, rights/source rules, target channel boundaries | Draft package structure, channel matrix, approval checklist | Draft generation workflow and promotion planning |
| DK-55 Heritage Building Record social package | Social package draft structure and organic-to-paid handoff options | DK-55 scope, Heritage Building Record model, Organic Publishing Hub scope, rights/source rules | Social package template, draft variants, approval checklist | Social package scope |
| DK-56 Project Record social package | Project Record social package draft structure and proof-positioning options | DK-56 scope, Project Record model, Organic Publishing Hub scope | Social package template, draft variants, approval checklist | Social package scope |
| DK-39 content approval workflow | Approval gate checklist and content QA pass design | DK-39 scope, DK-17, AGENTS approval gates, content specs | Approval workflow risk map and checklist | Admin / Growth Studio content approval workflow |
| DK-42 social draft approval workflow | Social approval criteria and blocked-action map | DK-42 scope, Organic Publishing Hub scope, promotion issues | Social draft approval matrix | Admin / Growth Studio social draft workflow |
| DK-44 newsletter manager | Newsletter source criteria and draft-handoff structure | DK-44 scope, Heritage / Project Record docs, content governance | Newsletter manager service-hook memo | Growth Studio newsletter manager scope |
| DK-45 Heritage Studies manager | Heritage study pipeline and service-provider handoff criteria | DK-45 scope, Heritage Building Record model, rights/source rules | Heritage Studies manager request criteria | Growth Studio Heritage Studies manager scope |
| DK-72 lead qualification agent workshop | Lead qualification criteria and agent boundary map | DK-72 scope, lead / booking issues, quote docs, homepage source material | Lead qualification criteria matrix and risk notes | Lead qualification decision workshop |
| DK-73 contact form and follow-up questions | Follow-up question tree and required-field options | DK-73 scope, lead qualification criteria, privacy boundaries | Question tree and approval-gated client-facing draft notes | Contact form planning |
| DK-74 lead qualification report | Dobromir-facing lead report structure | DK-74 scope, lead criteria, quote readiness sources | Lead report template structure | Lead report documentation |
| DK-75 booking workflow | Booking readiness checklist and no-automation boundary map | DK-75 scope, DK-40, DK-41, lead criteria | Booking-readiness checklist and escalation rules | Booking workflow decision workshop |
| DK-38 Admin / Growth Studio MVP | Service-provider placement and module boundary review | DK-38 scope, roadmap, local systems docs, DK-17 | Decision-options memo and dependency map | Growth Studio MVP decision workshop |
| DK-84 to DK-86 Client Portal future scope | Client portal data-boundary and service-request exclusion review | Portal issue scope, website IA, quote snapshot docs, privacy boundaries | Data-boundary risk memo and approval gate checklist | Future Client Portal decision work |
| DK-67 Heritage Building Record promotion workflow | Promotion workflow and low-budget test strategy | DK-67 scope, Heritage Building Record model, SEO / ads planning docs | Organic-to-paid promotion map and approval checklist | Promotion workflow |
| DK-68 Project Record promotion workflow | Promotion workflow and low-budget test strategy | DK-68 scope, Project Record model, SEO / ads planning docs | Organic-to-paid promotion map and approval checklist | Promotion workflow |
| DK-69 analytics / tracking setup | Measurement strategy implications only | DK-69 scope, analytics model, ad strategy memo | Measurement notes and tracking approval gates | Analytics planning, not live tracking |
| DK-77 to DK-79, DK-113, DK-115 Quote Generator docs | Legal / service / pricing research support and risk mapping | Existing quote docs, service catalogue research, allowance logic, snapshot rules | Legal/service risk memo, pricing signal matrix, allowance map | Quote Generator follow-up issues |

## 13. The Five Initial Praxion Service Tracks

### 13.1 Denmark Documentation Service + Price Research Track

Connected issues:

- DK-31
- Quote Generator follow-up issues
- DK-80 to DK-83 where Content Studio and quote / service knowledge overlap

Praxion service purpose:

Produce deep Denmark-specific research for services related to DK Arkitekter's documentation-service model.

Required research scope:

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
- faerdigmelding / final-use documentation support
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

Praxion may:

- research public sources
- compare market patterns
- structure service categories
- identify decision options
- mark confidence levels
- explain quote-generator implications

Praxion must not:

- approve DK Arkitekter prices
- create executable quote formulas
- create binding commercial terms
- finalize quote package names for client use
- create final client-facing pricing text

Expected Praxion deliverables:

- Denmark service catalogue research brief
- price / fee signal matrix
- consultant / specialist fee category map
- public authority fee map
- risk and confidence notes
- quote-generator implications memo
- open questions requiring Dobromir approval

### 13.2 Lead Qualification + Booking Criteria Track

Connected issues:

- DK-72
- DK-73
- DK-74
- DK-75
- DK-40
- DK-41

Praxion service purpose:

Produce deep criteria for qualifying DK Arkitekter leads and deciding when a lead is ready for booking.

Required research / synthesis scope:

- ideal client profile criteria
- project fit criteria
- budget-readiness signals
- decision-maker readiness
- timeline / urgency signals
- property ownership and access readiness
- permit complexity indicators
- heritage / modern-traditional design fit
- service-package fit
- renovation / extension / apartment / bathroom / kitchen / project-type logic
- red flags and disqualification criteria
- follow-up question logic
- booking-readiness threshold
- recommended lead score dimensions
- information needed before a 3D scan / site visit
- information needed before a quote request
- what Dobromir should review before accepting the project

Praxion may:

- produce criteria
- propose decision dimensions
- draft internal question trees
- design lead report structures
- identify risk flags and escalation points

Praxion must not:

- send messages to leads
- book meetings
- qualify real clients automatically
- approve lead acceptance
- create final client-facing scripts without approval

Expected Praxion deliverables:

- lead qualification criteria matrix
- booking-readiness checklist
- follow-up question tree
- disqualification / low-fit rule set
- lead report structure for Dobromir
- risk notes and approval gates

### 13.3 Promotion Workflow + Low-Budget Ads Strategy Track

Connected issues:

- DK-67
- DK-68
- DK-69
- DK-42
- DK-55
- DK-56
- DK-83

Praxion service purpose:

Support promotion workflows and advertising strategy for DK Arkitekter, especially how to get the best outcome from very small budgets of approximately 5-10 EUR/day.

Required research / synthesis scope:

- best marketing channels for DK Arkitekter
- organic-to-paid promotion workflow
- ad strategy for Heritage Building Records
- ad strategy for Project Records
- Instagram, LinkedIn, Facebook, Google / YouTube relevance
- low-budget test strategy
- audience hypotheses
- creative / message hypotheses
- campaign objective options
- landing-page / section alignment
- remarketing or retargeting considerations, only as future options
- measurement and success criteria
- risk of wasting budget
- approval gates before live campaigns
- what can be drafted versus what requires Dobromir approval

Praxion may:

- recommend channel priority options
- propose low-budget experiment structures
- identify likely audience hypotheses
- prepare message test matrices
- define measurement questions
- flag waste risks

Praxion must not:

- launch campaigns
- activate budgets
- change ad accounts
- install tracking pixels
- publish or schedule posts
- set up platforms
- approve final campaign strategy
- approve ad copy for live use

Expected Praxion deliverables:

- low-budget ad strategy memo
- organic-to-paid promotion map
- channel priority matrix
- audience hypothesis matrix
- creative / message test matrix
- 5-10 EUR/day experiment structure
- approval gate checklist

### 13.4 Quote Generator Legal / Service / Price Deep-Dive Track

Connected issues:

- Quote Generator follow-up issues
- DK-31
- DK-77
- DK-78
- DK-79
- DK-113
- DK-115

Praxion service purpose:

Support the Quote Generator with deep legal / service / pricing research and structure, without finalizing prices or legal wording.

Required scope:

- service catalogue depth
- Denmark market pricing and fee signals
- municipality / authority fee logic
- consultant / specialist allowance logic
- legal / service boundary risks
- what is included versus excluded in service packages
- internal versus client-facing quote structure
- assumptions and exclusions
- revision allowance concepts
- confidence levels
- quote snapshot implications
- contract / quote language issues requiring later legal approval
- edge cases and related service categories

Praxion may:

- produce research
- identify risk flags
- prepare option matrices
- draft non-final concepts
- separate internal from client-facing implications

Praxion must not:

- finalize legal wording
- finalize contract terms
- approve actual prices
- create executable formulas
- provide tax or accounting guidance
- create binding offer terms

Expected Praxion deliverables:

- quote-generator legal / service risk memo
- service boundary map
- pricing signal matrix
- fee / allowance research map
- client-facing versus internal quote separation memo
- approval-gate checklist

### 13.5 DK Arkitekter Main Offering Stress-Test + ICP Track

Connected issues:

- DK-38
- DK-55
- DK-56
- DK-67
- DK-68
- DK-72 to DK-75
- DK-80 to DK-83
- website / homepage / content strategy issues where relevant

Praxion service purpose:

Stress-test DK Arkitekter's main public offering as visible on homepage, README, and source material, then produce market and client-profile research for better advertising, landing-page sections, and content strategy.

Required scope:

- read available homepage / README / source material in the repository
- identify the current main offering
- stress-test the offering against market demand
- identify likely client profiles / ICPs
- identify buying triggers
- identify objections
- identify trust factors
- identify high-fit and low-fit segments
- map client profiles to modern heritage, modern houses, renovations, extensions, apartment renovations in older / historic buildings, interiors, kitchens, bathrooms, and documentation-service positioning
- recommend ad / landing-page section hypotheses
- identify which messaging angles should be tested
- identify missing proof, missing trust material, and missing explanations

Praxion may:

- recommend profiles
- identify positioning options
- prepare objection maps
- produce messaging hypotheses
- identify trust and proof gaps

Praxion must not:

- choose final market positioning
- approve homepage copy
- approve public claims
- choose visual direction
- approve final ad copy
- approve campaign launch

Expected Praxion deliverables:

- main offering stress-test memo
- ICP / client-profile matrix
- buying-trigger and objection map
- trust-factor map
- landing-page / ad-section recommendation matrix
- messaging hypothesis list
- approval-gate checklist

## 14. Safe Request Examples

Safe request example 1:

```text
Request ID: P-DKA-20260515-DENMARK-SERVICE-001
Related DK issues: DK-31, DK-77, DK-78, DK-115
Praxion service track: Denmark Documentation Service + Price Research
Required deliverable: Denmark service catalogue research brief and price / fee signal matrix
Required depth: Deep public-source research with confidence levels and gaps
Forbidden actions: No actual DK Arkitekter prices, no executable formulas, no quote wording approval, no legal finalization
Return package requirements: Sources, confidence notes, quote-generator implications, open Dobromir questions
```

Safe request example 2:

```text
Request ID: P-DKA-20260515-LEAD-001
Related DK issues: DK-72, DK-73, DK-74, DK-75
Praxion service track: Lead Qualification + Booking Criteria
Required deliverable: Lead qualification criteria matrix and booking-readiness checklist
Required depth: Internal decision-support level
Forbidden actions: No lead contact, no booking, no automatic qualification, no final client-facing scripts
Return package requirements: Criteria, red flags, follow-up question tree, Dobromir review gates
```

Safe request example 3:

```text
Request ID: P-DKA-20260515-PROMO-001
Related DK issues: DK-67, DK-68, DK-69, DK-83
Praxion service track: Promotion Workflow + Low-Budget Ads Strategy
Required deliverable: 5-10 EUR/day experiment structure and channel priority matrix
Required depth: Strategy memo with risk of wasted budget and approval gates
Forbidden actions: No campaigns, no ad account changes, no tracking pixels, no publishing, no scheduling
Return package requirements: Audience hypotheses, creative test matrix, measurement notes, approval checklist
```

Safe request example 4:

```text
Request ID: P-DKA-20260515-OFFERING-001
Related DK issues: DK-38, DK-55, DK-56, DK-67, DK-72, DK-80
Praxion service track: Main Offering Stress-Test + ICP
Required deliverable: ICP matrix and main offering stress-test memo
Required depth: Read repository homepage / README / website source material and compare against market-fit hypotheses
Forbidden actions: No final positioning, no final homepage copy, no final ad copy, no public claims approval
Return package requirements: Buying triggers, objections, trust factors, missing proof, approval gates
```

## 15. Refusal / Escalation Examples

Praxion must refuse or escalate requests such as:

- Approve the final DK Arkitekter price for a bathroom documentation package.
- Create the executable formula for Quote Generator pricing.
- Write final legal terms for a client quote.
- Send the lead follow-up email and book the client meeting.
- Launch a 10 EUR/day Meta campaign for a Heritage Building Record.
- Install a tracking pixel or configure GA4 events.
- Publish the Instagram and LinkedIn posts.
- Upload raw heritage-building media into GitHub.
- Use private client names, phone numbers, emails, addresses, quotes, signed documents, or raw project notes.
- Decide that a lead is accepted as a real DK Arkitekter client.
- Change the public homepage positioning without Dobromir approval.
- Create Paperclip automation that requests Praxion deliverables automatically.
- Create Linear issues automatically from Praxion internal microtasks.

Escalation format:

```text
Escalation reason: [missing source / conflicting source / approval gate / forbidden action]
Affected request ID: [request id]
Blocked deliverable: [deliverable]
Required decision or approval: [specific gate]
Safe partial deliverable available: [yes/no and description]
Recommended next Codex / Dobromir action: [action]
```

## 16. Where Deliverables Feed Back Into The DK Agenda

Praxion deliverables may feed back into the DK agenda through these controlled paths:

- Linear comment on the active issue, when the deliverable only informs issue-specific planning.
- GitHub documentation update, when the deliverable changes source-of-truth scope, workflow, governance, or specification material.
- New Linear issue proposal, when the deliverable reveals work not currently represented in Linear.
- Existing Linear issue update, when the deliverable clarifies or narrows active scope.
- Dobromir decision memo, when the deliverable surfaces business, creative, pricing, legal, client-facing, privacy, automation, deployment, release, or approval-gate questions.

Track-specific feed-back paths:

- Denmark Documentation Service + Price Research feeds DK-31, DK-77 to DK-79, DK-113, DK-115, and quote-generator follow-up planning.
- Lead Qualification + Booking Criteria feeds DK-72 to DK-75, DK-40, and DK-41.
- Promotion Workflow + Low-Budget Ads Strategy feeds DK-67, DK-68, DK-69, DK-42, DK-55, DK-56, and DK-83.
- Quote Generator Legal / Service / Price Deep-Dive feeds quote-generator source docs and future decision workshops.
- Main Offering Stress-Test + ICP feeds DK-38, content strategy, promotion workflows, lead qualification, homepage / website strategy, Project Records, and Heritage Studies planning.

Codex must review Praxion deliverables before incorporation. Praxion output is not source of truth until Codex / Foundry incorporates it through normal Linear / GitHub workflow and required approval gates are satisfied.

## 17. Future Promotion Into Linear

Praxion may identify internal microtasks or follow-up needs, but they remain internal unless promoted.

Promotion rules:

- Only Codex / Foundry or Dobromir may promote a Praxion internal microtask into Linear.
- Promoted items must preserve DK-17 classification.
- Promoted items must identify the originating Praxion request ID.
- Promoted items must identify whether the work is a Decision, Requirement, Idea / Candidate, Scope Change, Rejection / Removal, or Approval Gate.
- Promoted items must specify whether the work is Scope Map, Decision Workshop, or implementation candidate.
- Promoted items must keep approval gates explicit.
- Promoted items must not imply implementation approval unless a separate approved execution packet exists.
- Promoted items must not create duplicate issues for work already represented in Linear.

Recommended promoted issue note:

```text
Origin: Praxion return package [request_id]
DK-17 classification: [classification]
Proposed issue type: [Scope Map / Decision Workshop / implementation candidate]
Reason for promotion: [reason]
Approval gates: [gates]
Forbidden actions: [actions]
Source materials: [sources]
```

## 18. Open Questions

These questions do not block DF-29 completion. They should be resolved only when a future issue needs them.

- Which exact Praxion / Paperclip intake surface will receive service request packets?
- Should returned Praxion deliverables be stored first as Linear comments, GitHub docs, Paperclip artifacts, or a Foundry review inbox item?
- What QA checklist from DF-25 should be mandatory before Praxion returns high-risk deliverables?
- Should Praxion research deliverables use stable request IDs generated by Codex, Paperclip, or Linear?
- Which future issue should define the first real Praxion pilot request using DK Arkitekter as the internal case study?
- Which ad channels should be prioritized first if Dobromir later approves live low-budget experiments?
- Which quote-generator follow-up issue should own legal / service / price deep-dive incorporation after Praxion returns research?

## 19. Explicit Non-Approvals

This document explicitly does not approve:

- implementation code
- app code
- UI
- backend
- database schema
- migrations
- API endpoints
- Paperclip automation
- live agent execution
- Linear-to-Paperclip integration
- Codex-to-Praxion automation
- live ad campaigns
- tracking pixels
- publishing
- scheduling
- email sending
- client communication
- real lead qualification
- meeting booking
- actual DK Arkitekter prices
- price tables
- executable quote formulas
- final quote logic
- final legal wording
- final contract wording
- final client-facing copy
- homepage positioning approval
- final ad copy
- privacy policy finalization
- production quote output
- deployment
- release
- raw media
- private client data
- local Paperclip / DKA runtime files
- generated caches
- machine-specific files
- secrets

## Reusable Service Request Packet Format

Codex should use this packet format when requesting Praxion service work.

```text
Request ID:
Related DK issue(s):
Related DF issue(s), if any:
Praxion service track:
Request classification:
Source materials available:
Source materials excluded:
Required deliverable:
Required depth:
Output format:
Known constraints:
Approval gates:
Forbidden actions:
Deadline / priority, if applicable:
Return package requirements:
Escalation conditions:
```

Field guidance:

- `Request ID`: Stable ID such as `P-DKA-YYYYMMDD-TRACK-NN`.
- `Related DK issue(s)`: Linear issue identifiers that own the DK agenda context.
- `Related DF issue(s), if any`: Foundry / Praxion issue identifiers when the request affects Praxion governance.
- `Praxion service track`: One of the approved tracks or a taxonomy item from this document.
- `Request classification`: Research, synthesis, draft support, QA, risk review, decision-options memo, or implementation-readiness review.
- `Source materials available`: GitHub docs, Linear issue IDs, README / homepage materials, public sources, and approved internal source summaries.
- `Source materials excluded`: Private client data, raw media, secrets, local runtime files, generated caches, and machine-specific files.
- `Required deliverable`: Exact return artifact expected.
- `Required depth`: Light scan, standard brief, deep research, decision-ready matrix, or critical risk review.
- `Output format`: Memo, matrix, checklist, source register, question tree, risk register, or combined return package.
- `Known constraints`: Scope limits and business rules.
- `Approval gates`: Dobromir gates that remain outside Praxion authority.
- `Forbidden actions`: Actions Praxion must not take.
- `Deadline / priority`: Optional priority, not permission to skip gates.
- `Return package requirements`: Required return fields from section 9.
- `Escalation conditions`: Missing source, conflicting source, approval gate, legal/pricing/client-facing risk, or forbidden action.

## Appendix: Control Rule Summary

Codex may request Praxion deliverables when enough information exists and the request is bounded.

Praxion may internally decompose accepted requests into microtasks.

Praxion returns deliverables; Codex / Foundry reviews and incorporates them.

Dobromir remains final authority for product, business, visual, client-facing, pricing, legal, privacy, automation, publishing, deployment, and release decisions.
