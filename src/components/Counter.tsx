import store from '@/store'

export default function Counter() {
  const { count, inc } = store
  return (
    <ArcoButton onClick={inc}>
      count is
      {' '}
      {count}
    </ArcoButton>
  )
}
