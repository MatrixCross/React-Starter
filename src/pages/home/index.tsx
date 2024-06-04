import { Button, Input } from '@arco-design/web-react'
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
        <Button onClick={toggleTheme}>change theme</Button>
        <Button onClick={toggleLanguage}>{t('switch language')}</Button>
      </div>
      <Nav />
    </>
  )
}

function Counter() {
  const { count, inc } = store
  return (
    <Button onClick={inc}>
      count is
      {' '}
      {count}
    </Button>
  )
}

function Nav() {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const go = () => {
    if (name) {
      navigate(`/hello/${name}`)
    }
  }
  return (
    <div className="mt-20px flex">
      <Input placeholder="type and go" value={name} onChange={setName} />
      <Button onClick={go} className="ml-20px">Go!</Button>
    </div>
  )
}
