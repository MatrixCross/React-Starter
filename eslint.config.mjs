import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    react: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
    },
  },
)
