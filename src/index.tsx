import { createRoot } from 'react-dom/client'
import { Main } from './main'
import setupTheme from './setup/setupTheme.ts'
import setupI18n from './setup/setupI18n.ts'
import './index.css'
import { defaultStorage } from './utils/storage.ts'

setupTheme()
setupI18n()

const container = document.querySelector('#root')
const root = createRoot(container!)

root.render(<Main />)

// 默认支持indexeddb和typescript，
// 不支持indexeddb会自动降级到localstorage，
// 也可以通过修改配置强制使用localstorage
defaultStorage.set('demo', { name: 'hello' })
  .then(() => defaultStorage.get('demo'))
// eslint-disable-next-line no-console
  .then(console.log)
