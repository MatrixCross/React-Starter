export default function Nav() {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const go = () => {
    if (name) {
      navigate(`/hello/${name}`)
    }
  }
  return (
    <div className="mt-20px flex">
      <ArcoInput placeholder="type and go" value={name} onChange={setName} />
      <ArcoButton onClick={go} className="ml-20px">Go!</ArcoButton>
    </div>
  )
}
