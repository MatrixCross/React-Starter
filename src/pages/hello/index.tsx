import { Button } from '@arco-design/web-react'

export function Component() {
  const { name } = useParams<{ name: string }>()
  const navigate = useNavigate()
  return (
    <>
      <div>
        <h2>
          Hello!
          {name}
          !
        </h2>
      </div>
      <div>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    </>
  )
}
