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
  vitePlugins: [
    vitePluginForArco(),
    autoImport({
      imports: ['react', 'react-i18next', 'react-router-dom', 'ahooks'],
      dts: 'src/typings/autoImport.d.ts',
    }),
  ],
  plugins: [
    '@farmfe/plugin-react',
    [
      '@farmfe/plugin-react-components',
      {
        dts: true,
        dirs: ['src/components'],
        filename: 'src/typings/components.d.ts',
        resolvers: [
          {
            module: '@arco-design/web-react',
            prefix: 'Arco',
            import_style: true,
          },
        ],
      },
    ],
    '@farmfe/plugin-sass',
    [
      '@farmfe/plugin-icons',
      {
        autoInstall: true,
        compiler: 'jsx',
      },
    ],
    visualizer({}),
    postcss(),
    less(),
  ],
})
