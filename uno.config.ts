import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetIcons(),
    presetUno(),
    presetAttributify(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
