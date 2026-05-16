# Packet Naming

Staging packet folder names use kebab-case.

Recommended pattern:

```text
<project-or-workflow>-<version-or-topic>
```

## Examples

- `foundry-launcher-v0.2`
- `foundry-launcher-v0.3`
- `foundry-control-center-intake`
- `project-registry-normalization`
- `dk-arkitekter-os-content-pipeline-audit`

DK Arkitekter OS is only an example of a registered Foundry project. It is not the default parent project.

## Rules

- Names must be descriptive.
- Names must not assume DK Arkitekter OS as the default parent.
- Packet id should match folder name.
- Versioned packets may use `v0.1`, `v0.2`, `v0.3` style.
- Decision workshops should include the decision topic.
- Audits should include target and audit type where possible.
