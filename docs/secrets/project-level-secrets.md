---
id: project-level-secrets
title: Project Level Secrets and Variables
sidebar_position: 2
---

# Project Level Secrets and Variables

This page covers how to create, view, edit, and delete secrets and variables at the project level. All operations are performed from the **Secrets & Variables** page within a project.

## Prerequisites

- You have access to the project where you want to manage secrets and variables.
- To create, edit, or delete entries, you need the `STACK_WRITE` permission on the project.
- To set environment-specific values, you also need the `ENVIRONMENT_CONFIGURE` permission on each target environment.

---

## View secrets and variables

The **Secrets & Variables** page displays all secrets and variables defined for the project in a table with the following columns:

| Column | Description |
|---|---|
| **Name** | The unique identifier for the secret or variable |
| **Default Value** | The project-level default (Variables only); shown as `N/A` for Secrets |
| **Auto-Inject** | Whether the variable is automatically injected into all resources |
| **Used By** | Badges showing each resource that references this entry |

Use the filter options — **All Types**, **Variables Only**, or **Secrets Only** — to narrow the list.

Add environment columns to compare values across environments side by side. Secret values display as `****` by default. Enable the show-secrets toggle to reveal actual values.

> **Note:** Secret values are fetched from the secrets manager only when revealed. They are cached client-side for the current session.

---

## Define a new secret or variable

:::info Interactive Demo
*An interactive walkthrough for this flow will be added here.*
:::

The **Add Secrets/Variables** drawer lets you create one or more secrets and variables in a single operation.

1. On the **Secrets & Variables** page, click **Define New**.
2. The **Add Secrets/Variables** drawer opens.
3. For each entry, fill in the following fields:

   | Field | Description |
   |---|---|
   | **Type** | Select **Secret** or **Variable** |
   | **Name** | Must start with a letter or underscore; only letters, numbers, and underscores allowed (for example, `MY_VARIABLE`) |
   | **Description** | Optional. A short note about the entry's purpose |
   | **Default Value** | Available for Variables only. For Secrets, this field shows "To be set at Environment Level" and is disabled |
   | **Inject in all resources** | Checkbox available for Variables only. Enable to auto-inject the variable into all resources |

4. To add more entries in the same operation, add additional rows to the form.
5. To set per-environment values now, expand the **Set Environment Values** section and enter values for each environment.
6. Click **Save**.

> **Note:** Variable names must be unique within the project. If you submit multiple entries in one operation, each name must also be unique within that request.

> **Tip:** You can also perform this operation programmatically. See the [API Reference](https://apidocs.facets.cloud) for details.

---

## Edit an existing secret or variable

Click **Edit** on any row to open the edit drawer. The current values across all environments are loaded and displayed.

You can update the description, default value (Variables only), the **Inject in all resources** flag, or per-environment values. Only changed environment values are submitted when you save.

---

## Set environment-specific values

:::info Interactive Demo
*An interactive walkthrough for this flow will be added here.*
:::

Use the Environment Overrides drawer to set or update values for a specific environment without editing the project-level definition.

1. On the **Secrets & Variables** page, click **Edit Env. Values** for the environment you want to configure.
2. The Environment Overrides drawer opens, showing all variables and secrets for that environment in a table.
3. Choose how to enter values:
   - Enter values individually, row by row.
   - Switch to the bulk JSON editor to set all values in one JSON object. Any parse errors are shown inline before saving.
4. For secrets, values are masked by default. Use the reveal toggle on a row to view the current value before editing.
5. The status column shows **DEFAULT** (the environment inherits the project-level default) or **OVERRIDDEN** (a value has been explicitly set for this environment).
6. Click **Save** to apply the changes.

---

## Copy a reference expression

Click **Copy $ Reference** on any row to copy the formatted reference expression to the clipboard.

| Type | Expression |
|---|---|
| Variable | `${blueprint.self.variables.VARIABLE_NAME}` |
| Secret | `${blueprint.self.secrets.SECRET_NAME}` |

Paste the expression into any resource configuration field that accepts it. See [Resource Connections](./resource-connections.md) for how these expressions are used in resource configuration.

---

## Delete a secret or variable

Click **Delete** on a row. A confirmation dialog titled **Delete Variable** appears with the message: *Are you sure you want to delete "[name]"? This will remove it from all environments and cannot be undone.*

Click **Delete** to confirm.

> **Warning:** Deletion removes the entry from all environments and cannot be undone. If any resources currently reference the secret or variable, the **Delete** button is disabled. The tooltip shows how many resources are using it. Remove all references from resources before deleting.

---

## Permissions

| Action | Required permission |
|---|---|
| View secrets and variables | Stack read (no write permission required) |
| Define new / Edit / Delete | `STACK_WRITE` |
| Set environment-specific values | `STACK_WRITE` + `ENVIRONMENT_CONFIGURE` on each target environment |

When `STACK_WRITE` is missing:
- The **Define New** and **Edit Env. Values** buttons are disabled with the tooltip "Access is forbidden".
- The **Add Secrets/Variables** drawer shows: "You do not have permission to add variables."

If the user lacks `ENVIRONMENT_CONFIGURE` on any target environment, saving environment values returns the error: "You do not have permission to add/update variables to these environments".

---

## Troubleshooting

| Problem | Message | Solution |
|---|---|---|
| Adding a variable with a name that already exists | `"Variable '%s' already exists in stack '%s'"` (HTTP 400) | Choose a unique name for the variable |
| Duplicate names in a single bulk request | `"Duplicate variable names found in request"` (HTTP 400) | Ensure all names in the bulk form are unique |
| Updating a variable that no longer exists | `"Variable '%s' not found in stack '%s'"` (HTTP 404) | Refresh the page and retry |
| Name fails validation | "Name should start with a letter or underscore and can include numbers and underscores thereafter." | Rename the entry to match the allowed pattern |
| Page fails to load | "Failed to load variables" | Check your permissions or reload the page |
| Invalid project URL | "Invalid Project" error | Verify the project name in the URL |

---

## Best practices

- Store all sensitive values — passwords, API keys, tokens — as **Secrets**, not **Variables**. Secrets are masked in the UI and stored in the secrets manager.
- Enable **Inject in all resources** only for variables that genuinely need to be present in every resource, such as a global feature flag. Injecting too many variables increases noise in resource configurations.
- Set a project-level default value for variables that apply to most environments, then override only the environments that differ. This keeps the Environment Overrides drawer sparse.
- Use the bulk JSON editor in the Environment Overrides drawer when setting many values at once to avoid per-row editing overhead.
- Do not delete a variable or secret while any resource references it. Remove the references from resources first.

---

## Related Topics

- [Secrets and Variables](./overview.md) - Overview of secrets and variables in Facets
- [Resource Variables](./resource-variables.md) - Environment variable configuration for individual resources
- [Resource Connections](./resource-connections.md) - How to use reference expressions in resource configuration
