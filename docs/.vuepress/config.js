import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { viteBundler } from '@vuepress/bundler-vite'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"

export default defineUserConfig({
  lang: 'en-US',
  title: 'GO Documentation',
  description: 'Setup and usage documentation for GO development environment',
  base: '/',

  bundler: viteBundler(),

  theme: defaultTheme({
    logo: 'https://www.generativeobjects.com/images/logo-generative-objevts.png?crc=3880192056',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Support', link: 'https://www.generativeobjects.com/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          collapsible: false,
          children: [
            '/guide/README.md',
            '/guide/prerequisites.md',
          ]
        },
        {
          text: 'Installation',
          collapsible: false,
          children: [
            '/guide/installation/software.md',
            '/guide/installation/windows.md',
            '/guide/installation/database.md',
            '/guide/installation/iis.md'
          ]
        },
        {
          text: 'Development',
          collapsible: false,
          children: [
            '/guide/development/first-app.md',
            '/guide/development/best-practices.md'
          ]
        },
        {
          text: 'Troubleshooting',
          collapsible: false,
          children: [
            '/guide/troubleshooting/common-issues.md',
            '/guide/troubleshooting/error-reference.md'
          ]
        }
      ]
    },
    repo: 'https://github.com/generative-objects-org',
    docsDir: 'docs',
    editLink: true,
    editLinkPattern: 'https://www.generativeobjects.com/',
    lastUpdated: true,
    contributors: true
  }),

  plugins: [
    searchPlugin({
      maxSuggestions: 10
    }),
    backToTopPlugin(),
    mediumZoomPlugin(),
    mdEnhancePlugin({
      // Enable Mermaid
      mermaid: true,
      // Enable tabs
      tabs: true,
      // Enable code demo
      demo: true,
      // Enable alerts
      align: true,
      // Enable charts
      chart: true,
      // Enable codetabs
      codetabs: true,
      // Enable task lists
      tasklist: true,
    }),
  ],

  markdown: {
    code: {
      lineNumbers: true
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ]
})