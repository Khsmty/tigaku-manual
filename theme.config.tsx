import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>地学部マニュアル</span>,
  footer: {
    text: '©︎2023 齋藤 大雅',
  },

  useNextSeoProps() {
    return {
      titleTemplate: '%s - 地学部マニュアル'
    }
  },
}

export default config