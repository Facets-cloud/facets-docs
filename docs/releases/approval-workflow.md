---
id: approval-workflow
title: Release Approval Workflow
sidebar_position: 3
---

# Release Approval Workflow

Some releases require explicit approval before execution proceeds. When a release is pending approval, it appears with the status **Pending Approval** in the Release History table and in the **Active Releases** card. No execution occurs until an authorized user approves or rejects it.

![Release Approval Workflow](../../static/img/releases/approval-workflow.png)

## Approving or rejecting a release

:::info Interactive Demo
*An interactive walkthrough for this flow will be added here.*
:::

To act on a release that is waiting for approval:

1. Open the Environment Releases page for the relevant environment.
2. In the Release History table, locate the release with status **Pending Approval**.
3. Click the release row to open the **Release Details** drawer.
4. Choose one of the following:
   - Click **Approve** to allow the release to proceed. The release moves to the execution queue and the history table shows an **Approved** badge on that entry.
   - Click **Reject** to cancel the release. The release is recorded with status **Rejected** and does not execute.

> **Note:** Only users with the appropriate approval permission can approve or reject a release. If the **Approve** and **Reject** actions are not visible, contact your administrator to review your role permissions.

## Signing off on a release

Sign-off is a separate action from approval. It records that a designated user has reviewed the release — independently of whether the release was approved or executed.

:::info Interactive Demo
*An interactive walkthrough for this flow will be added here.*
:::

To sign off on a release:

1. Open the **Release Details** drawer for the release you want to sign off on.
2. Click the sign-off action in the drawer.
3. To review what changed between the current state and the previously signed-off version, click **Compare with signed-off version**.

> **Note:** Sign-off is recorded for audit and review purposes. It does not block or unblock release execution.

## Release statuses related to approval

| Status | Meaning |
|---|---|
| **Pending Approval** | The release is waiting for an authorized user to approve or reject it. Execution is paused. |
| **Approved** | The release was approved and has proceeded or is queued for execution. An **Approved** badge appears in the history table. |
| **Rejected** | An approver rejected the release. It will not execute. |

> **Tip:** You can also perform approval operations programmatically. See the [API Reference](https://apidocs.facets.cloud) for details.

## Related Topics

- [Performing Releases](./performing-releases.md) - How to trigger any release type
- Release History - Viewing past releases and their statuses
- [Releases Overview](./overview.md) - How releases work in Facets
