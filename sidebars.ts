import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'introduction/what-is-facets',
        'introduction/use-cases',
        'introduction/how-it-works',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/orchestrator-deployment',
        'concepts/basic-concepts',
        'concepts/comparing-to-terraform-tools',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/control-plane-aws',
        'getting-started/control-plane-gcp',
        'getting-started/control-plane-azure',
        'getting-started/petclinic',
      ],
    },
    {
      type: 'category',
      label: 'Project',
      items: [
        'project/overview',
        'project/creating-a-project',
        'project/project-settings',
        'project/gitops-for-overrides',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/overview',
        'resources/adding-editing-resources',
        'resources/linking-resources',
        'resources/templates-for-blueprint',
        'resources/critical-resources',
        'resources/types-of-resources',
      ],
    },
    {
      type: 'category',
      label: 'Environments',
      items: [
        'environments/overview',
        'environments/launching-destroying',
        'environments/configurations',
        'environments/overriding-resources',
        'environments/dependent-environments',
        'environments/template-inputs',
        'environments/settings',
      ],
    },
    {
      type: 'category',
      label: 'Resource Center',
      items: [
        'resource-center/overview',
        'resource-center/live-insights',
        'resource-center/overriding-resources',
        'resource-center/release-history',
        'resource-center/resource-actions',
      ],
    },
    {
      type: 'category',
      label: 'Secrets & Variables',
      items: [
        'secrets/overview',
        'secrets/project-level-secrets',
        'secrets/resource-variables',
        'secrets/resource-connections',
      ],
    },
    {
      type: 'category',
      label: 'Releases',
      items: [
        'releases/overview',
        'releases/performing-releases',
        'releases/approval-workflow',
        'releases/release-history',
        'releases/parallel-releases',
        'releases/release-streams',
        'releases/delivery-pipeline',
      ],
    },
    {
      type: 'category',
      label: 'CI/CD',
      items: [
        'cicd/overview',
        'cicd/workflow',
        'cicd/attach-image',
        'cicd/ci-integration',
        'cicd/container-registries',
      ],
    },
    {
      type: 'category',
      label: 'Account Management',
      items: [
        'accounts/overview',
        'accounts/cloud-accounts',
        'accounts/git-accounts',
      ],
    },
    {
      type: 'category',
      label: 'Monitoring & Observability',
      items: [
        'monitoring/overview',
        'monitoring/notifications',
        'monitoring/kubernetes-events',
        'monitoring/grafana-dashboard',
        'monitoring/cloud-cost-explorer',
        'monitoring/validations',
        'monitoring/guardrail-policies',
        'monitoring/uptime-dashboard',
      ],
    },
    {
      type: 'category',
      label: 'RBAC',
      items: [
        'rbac/overview',
        'rbac/users',
        'rbac/user-roles',
        'rbac/user-groups',
        'rbac/resource-groups',
        'rbac/permissions',
      ],
    },
    {
      type: 'category',
      label: 'OAuth & SSO',
      items: [
        'sso/overview',
        'sso/google',
        'sso/azure-ad',
        'sso/okta',
        'sso/onelogin',
        'sso/saml',
      ],
    },
    {
      type: 'category',
      label: 'CLI',
      items: [
        'cli/overview',
        'cli/installation',
        'cli/commands',
        'cli/ci-pipelines',
      ],
    },
    {
      type: 'category',
      label: 'Modules',
      items: [
        'modules/introduction',
        'modules/core-concepts',
        'modules/building-a-module',
        'modules/generate-via-mcp',
        'modules/versioning',
        'modules/form-ui',
        'modules/custom-actions',
        'modules/module-registry',
      ],
    },
    {
      type: 'category',
      label: 'Facets Intelligence',
      items: [
        'agents/overview',
        'agents/module-builder',
        'agents/infrastructure-designer',
        'agents/release-debugger',
        'agents/kubernetes-agent',
        'agents/ci-agent',
        'agents/incident-responder',
        'agents/web-component-builder',
      ],
    },
    {
      type: 'category',
      label: 'For DevOps',
      items: [
        'devops/project-types',
        'devops/release-approval-workflow',
        'devops/web-components',
      ],
    },
    {
      type: 'category',
      label: 'For Developers',
      items: [
        'developers/overview',
        'developers/service',
        'developers/bring-dependencies',
        'developers/exposing-to-internet',
        'developers/database-migrations',
        'developers/environment-variables',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/terraform-state',
        'troubleshooting/rolling-restart',
        'troubleshooting/rollback',
        'troubleshooting/expand-pvc',
        'troubleshooting/non-ready-pods',
        'troubleshooting/loki-logs',
        'troubleshooting/loki-alerts',
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      items: [
        'use-cases/structuring-projects',
        'use-cases/dependent-environments',
        'use-cases/iam-policies',
        'use-cases/modular-launch-wizard',
        'use-cases/reusing-terraform',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/backstage',
      ],
    },
  ],
};

export default sidebars;
