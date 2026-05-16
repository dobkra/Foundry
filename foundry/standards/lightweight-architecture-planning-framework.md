# Lightweight Architecture Planning Framework

## Core Principle

Foundry may use TOGAF-inspired architecture thinking as a reference pattern, but Foundry is not implementing full TOGAF.

Foundry must remain:

- Lightweight.
- Execution-oriented.
- Progressively complex.
- Practical for solo/founder-led work.
- Suitable for software projects, business systems, AI-assisted workflows, and knowledge/operations architecture.

TOGAF is useful as an architecture thinking toolkit, not as a mandatory enterprise process.

## Useful TOGAF-Inspired Areas

- Architecture Vision.
- Business Architecture.
- Application Architecture.
- Data Architecture.
- Technology Architecture.
- Roadmap / Migration Planning.
- Governance.

## Foundry Planning Pack Mapping

| Foundry planning pack | TOGAF-inspired reference area |
|---|---|
| Discovery Pack | Architecture Vision, problem framing, current/target state. |
| Business Functions Pack | Business Architecture, roles, workflows, service model, operating logic. |
| Architecture Pack | Application Architecture, Data Architecture, Technology Architecture, system boundaries, repo/module structure, integrations. |
| Goals and Outcomes Pack | Architecture requirements, success criteria, definition of done, measurable outcomes. |
| UI / Workflow Sprint Pack | User/application interaction model, workflows, screens, sprint sequencing. |
| Issue Breakdown Pack | Implementation roadmap, Linear-ready issue structure, Codex execution preparation. |

## Progressive Complexity Rule

- Tiny/routine work should use only a basic staging packet.
- Medium work may add only the planning packs it needs.
- Large or durable projects should pass through Discovery, Business Functions, Architecture, Goals/Outcomes, UI/Workflow if relevant, and Issue Breakdown before Linear/Codex execution.
- Issue Breakdown must not invent scope. It must derive from approved planning scope.

## Governance Rule

Dobromir is required only for direction/authority decisions.

Routine technical execution inside approved scope may continue without Dobromir according to [Technical Execution Delegation Rules](technical-execution-delegation-rules.md).

## Explicit Non-Goals

- No full TOGAF implementation.
- No mandatory enterprise architecture bureaucracy.
- No heavy phase gates for small work.
- No abstract artifacts that do not support execution.
- No Linear issues before approved scope.
- No Codex execution before execution-readiness allows it.
