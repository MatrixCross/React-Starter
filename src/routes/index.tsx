import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from '@/layouts/defaultLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        lazy: () => import('@/pages/home'),
      },
      {
        path: 'hello/:name',
        lazy: () => import('@/pages/hello'),
      },
    ],
  },
])
