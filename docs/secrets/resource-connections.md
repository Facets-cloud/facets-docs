---
id: resource-connections
title: Resource Connections
sidebar_position: 3
---

# Resource Connections

Resources in a project can reference project-level secrets and variables directly from their configuration fields. Instead of hardcoding a value, you insert a reference expression that the platform resolves to the correct value for the active environment at runtime.

This means you define a secret or variable once at the project level, set its value per environment, and every resource that references it automatically receives the right value without any changes to the resource configuration itself.

## How reference expressions work

A reference expression is a string that points to a named secret or variable defined in the project. The platform evaluates the expression at runtime and substitutes the actual value for the environment where the resource is running.

- Secret reference pattern: `${blueprint.self.secrets.SECRET_NAME}`
- Variable reference pattern: `${blueprint.self.variables.VARIABLE_NAME}`

For variables, if no environment-specific value has been set, the platform uses the project-level default. For secrets, a value must be set at the environment level — there is no project-level default.

## Using secret references in resource configuration

:::info Interactive Demo
*An interactive walkthrough for this flow will be added here.*
:::

Resource configuration forms include autocomplete fields for secrets. These fields suggest secret names from the project and format the selection as the correct expression automatically.

1. Open the resource configuration for the resource you want to update.
2. Locate a field that accepts a secret reference. The field presents an autocomplete list of secrets defined in the project.
3. Type the secret name or scroll the list to find it.
4. Select the secret. The field value is set to `${blueprint.self.secrets.SECRET_NAME}`, where `SECRET_NAME` is the name you selected.
5. Save the resource configuration.

At runtime, the platform resolves the expression to the secret value configured for the active environment.

> **Note:** If the secret has no value set for the active environment, the resource will not receive a value for that field. Set the secret value for each environment before deploying. The Secrets & Variables page shows a status indicator for each secret per environment.

## Using variable references in resource configuration

:::info Interactive Demo
*An interactive walkthrough for this flow will be added here.*
:::

Resource configuration forms include autocomplete fields for variables in the same way as secrets.

1. Open the resource configuration for the resource you want to update.
2. Locate a field that accepts a variable reference. The field presents an autocomplete list of variables defined in the project.
3. Type the variable name or scroll the list to find it.
4. Select the variable. The field value is set to `${blueprint.self.variables.VARIABLE_NAME}`, where `VARIABLE_NAME` is the name you selected.
5. Save the resource configuration.

At runtime, the platform resolves the expression to the variable value for the active environment. If no environment-specific override exists, the project-level default value is used.

## Copying a reference expression manually

If you already know the name of the secret or variable and want to paste the expression directly into a configuration field, you can copy it from the Secrets & Variables page.

1. Navigate to the **Secrets & Variables** page within your project.
2. Find the secret or variable row in the table.
3. Click **Copy $ Reference** on that row.
4. The reference expression is copied to your clipboard.
5. Paste it into any resource configuration field that accepts free text.

This approach is useful when a configuration field does not have an autocomplete widget but still accepts the reference expression syntax.

## Related Topics

- [Secrets and Variables](./overview.md) - Overview of secrets and variables in Facets
- [Project Level Secrets and Variables](./project-level-secrets.md) - Define, edit, and manage secrets and variables at the project level
- [Resource Variables](./resource-variables.md) - Configure environment variables directly within a resource
