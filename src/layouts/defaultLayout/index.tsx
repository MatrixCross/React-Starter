import './index.css'
import { Outlet } from 'react-router-dom'
import FarmLogo from '@/assets/logo.png'
import IconReact from '~icons/logos/react'

export default function DefaultLayout() {
  return (
    <>
      <div className="flex justify-between">
        <a href="https://farmfe.org/" target="_blank" rel="noopener noreferrer">
          <img src={FarmLogo} className="h-100px w-100px" alt="Farm logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <IconReact className="animate-spin animate-duration-2000 text-100px text-#00D8FF" alt="React logo" />
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
      <p className="read-the-docs">
        Click on the Farm and React logos to learn more
      </p>
      <Outlet />
    </>
  )
}
