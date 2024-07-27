import store from '@/store'
import { toggleTheme } from '@/utils/theme.ts'

export function Component() {
  const { t } = useTranslation()
  const { toggleLanguage, count } = store
  return (
    <>
      <Counter />
      <div>
        <p>
          count is
          {' '}
          {count}
        </p>
        <p>
          Edit
          {' '}
          <code>src/pages/home/index.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <div className="flex justify-between">
        <ArcoButton onClick={toggleTheme}>change theme</ArcoButton>
        <ArcoButton onClick={toggleLanguage}>{t('switch language')}</ArcoButton>
      </div>
      <Nav />
    </>
  )
}
