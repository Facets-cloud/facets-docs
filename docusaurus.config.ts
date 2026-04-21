import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Facets Documentation',
  tagline: 'DevOps orchestration platform for Terraform and Kubernetes',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://facets-cloud.github.io',
  baseUrl: '/facets-docs/',

  organizationName: 'facets-cloud',
  projectName: 'facets-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/facets-cloud/facets-docs/edit/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/facets-social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Facets',
      logo: {
        alt: 'Facets Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/facets-cloud/facets-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Platform',
          items: [
            {label: 'Getting Started', to: '/getting-started/overview'},
            {label: 'CI/CD', to: '/cicd/overview'},
            {label: 'Releases', to: '/releases/overview'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'API Reference', href: 'https://apidocs.facets.cloud'},
            {label: 'Changelog', href: 'https://facets.cloud/changelog'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Facets Cloud. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json', 'hcl'],
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
