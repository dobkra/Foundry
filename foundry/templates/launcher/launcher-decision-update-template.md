# Launcher Decision Update Template

Use this template to record a review decision for an existing Launcher packet.

This template is manual. It does not update files automatically, create issues, trigger Codex, mutate the project registry, or enable automation.

## Packet Reference

Packet id: `[packet-id]`

Packet path: `[foundry/staging/packet-id/]`

Current status: `[draft | staged | needs_review | approved_for_registry | approved_for_execution | approved_for_manual_execution | blocked | parked | rejected | superseded]`

New status: `[draft | staged | needs_review | approved_for_registry | approved_for_execution | approved_for_manual_execution | blocked | parked | rejected | superseded]`

## Reviewer

Reviewer: `[name]`

Review date: `[YYYY-MM-DD]`

## Decision Summary

Decision: `[approved | approved with boundary | blocked | parked | rejected | superseded | revised]`

Summary: `[short decision summary]`

## Approved Boundary

Approved work:

- `[approved item]`

Execution boundary:

- `[scope boundary]`

## Blocked Work

Blocked work:

- `[blocked item]`

## Delegation Effect

Routine technical execution may proceed without Dobromir after this decision: `[yes | no | only inside approved boundary]`

Delegation notes:

- `[state whether implementation, formatting, cleanup, verification, documentation, and routine safe PR merges may continue without Dobromir]`
- `[state any direction/authority decisions that still require Dobromir]`

## Files To Update

- `decision-log.md`
- `approval.md`
- `execution-readiness.md`
- `intake.md` if status or reviewer decision is stale
- `classification.md` if status or classification approval is stale
- `scope.md` if status or approved boundary is stale

## `INDEX.md` Update

Update `foundry/staging/INDEX.md`:

- Packet id: `[packet-id]`
- Status: `[new-status]`
- Approval state: `[approval state]`
- Execution boundary: `[approved boundary]`
- Packet folder: `[packet-folder/]`

## Verification Checklist

- [ ] Reviewer decision is recorded.
- [ ] Review date is recorded.
- [ ] Approved boundary is recorded.
- [ ] Blocked work is recorded.
- [ ] Delegation effect is recorded.
- [ ] `INDEX.md` status row is updated.
- [ ] Scope was not changed unless the decision explicitly changed scope.
- [ ] Approved work was not implemented unless the packet permits it.
- [ ] Automation remains blocked unless explicitly approved.
- [ ] Relative links resolve.
