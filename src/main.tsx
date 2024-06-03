import './main.css'
import { Button } from '@arco-design/web-react'
import reactLogo from './assets/react.svg'
import FarmLogo from './assets/logo.png'
import store from './store'
import { toggleTheme } from './utils/theme.ts'

export function Main() {
  const { t } = useTranslation()
  const { toggleLanguage } = store
  return (
    <>
      <div className="flex justify-between">
        <a href="https://farmfe.org/" target="_blank" rel="noopener noreferrer">
          <img src={FarmLogo} className="h-100px w-100px" alt="Farm logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-100px w-100px animate-spin animate-duration-2000" alt="React logo" />
        </a>
        <a href="https://github.com/MatrixCross/React-Starter" target="_blank" rel="noopener noreferrer">
          <div className="i-line-md-github-loop text-100px"></div>
        </a>
      </div>
      <h1>
        <span className="text-#8F1A7F">Farm</span>
        {' '}
        +
        {' '}
        <span className="text-#00D8FF">React</span>
      </h1>
      <Counter />
      <p className="read-the-docs">
        Click on the Farm and React logos to learn more
      </p>
      <div className="flex justify-between">
        <Button onClick={toggleTheme}>change theme</Button>
        <Button onClick={toggleLanguage}>{t('switch language')}</Button>
      </div>
    </>
  )
}

function Counter() {
  const { count, inc } = store
  return (
    <div className="card">
      <Button onClick={inc}>
        count is
        {' '}
        {count}
      </Button>

      <p>
        Edit
        {' '}
        <code>src/main.tsx</code>
        {' '}
        and save to test HMR
      </p>
    </div>
  )
}
