import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Grant Ships Rulebook</span>,
  project: {
    link: 'https://grantships.fun',
  },
  chat: {
    link: 'https://discord.gg/QNGH4Uxa8A',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  primaryHue: 213,
  primarySaturation: 56,
  footer: {
    text: 'Grant Ships Rulebook',
  },

  darkMode: true
} as any as DocsThemeConfig;

export default config
