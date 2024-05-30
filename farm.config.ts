import path from 'node:path'
import process from 'node:process'
import { defineConfig } from '@farmfe/core'
import visualizer from '@farmfe/js-plugin-visualizer'

export default defineConfig({
  compilation: {
    resolve: {
      alias: {
        '@/': path.join(process.cwd(), 'src'),
      },
    },
  },
  plugins: ['@farmfe/plugin-react', visualizer({})],
})
