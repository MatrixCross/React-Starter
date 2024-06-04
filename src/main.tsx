import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes'

export function Main() {
  return (
    <RouterProvider router={router} />
  )
}
