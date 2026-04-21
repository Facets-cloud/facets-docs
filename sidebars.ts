import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/quick-start',
        'getting-started/key-concepts',
      ],
    },
    {
      type: 'category',
      label: 'Environments',
      items: [
        'environments/overview',
        'environments/creating-environments',
        'environments/environment-types',
        'environments/configuration',
      ],
    },
    {
      type: 'category',
      label: 'CI/CD',
      items: [
        'cicd/overview',
        'cicd/pipelines',
        'cicd/container-registry',
        'cicd/build-configuration',
      ],
    },
    {
      type: 'category',
      label: 'Releases',
      items: [
        'releases/overview',
        'releases/creating-releases',
        'releases/scheduling',
        'releases/parallel-releases',
      ],
    },
    {
      type: 'category',
      label: 'Modules',
      items: [
        'modules/overview',
        'modules/system-modules',
        'modules/custom-modules',
        'modules/output-types',
      ],
    },
    {
      type: 'category',
      label: 'Secrets & Variables',
      items: [
        'secrets/overview',
        'secrets/secrets',
        'secrets/variables',
        'secrets/overrides',
      ],
    },
    {
      type: 'category',
      label: 'Infrastructure',
      items: [
        'infrastructure/overview',
        'infrastructure/cloud-accounts',
        'infrastructure/networking',
        'infrastructure/storage',
      ],
    },
    {
      type: 'category',
      label: 'CLI (Raptor)',
      items: [
        'cli/overview',
        'cli/installation',
        'cli/commands',
        'cli/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Facets Intelligence',
      items: [
        'agents/overview',
        'agents/ci-agent',
        'agents/release-agent',
        'agents/k8s-agent',
      ],
    },
  ],
};

export default sidebars;
