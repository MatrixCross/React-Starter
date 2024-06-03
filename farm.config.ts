import path from 'node:path'
import process from 'node:process'
import { defineConfig } from '@farmfe/core'
import visualizer from '@farmfe/js-plugin-visualizer'
import postcss from '@farmfe/js-plugin-postcss'
import less from '@farmfe/js-plugin-less'
import { vitePluginForArco } from '@arco-plugins/vite-react'
import autoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  compilation: {
    resolve: {
      alias: {
        '@/': path.join(process.cwd(), 'src'),
      },
    },
  },
  vitePlugins: [vitePluginForArco(), autoImport({
    imports: ['react', 'react-i18next', 'react-router', 'ahooks'],
    dts: 'src/typings/autoImport.d.ts',
  })],
  plugins: ['@farmfe/plugin-react', '@farmfe/plugin-sass', visualizer({}), postcss(), less()],
})
