import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './routes/root'
import { UseState } from './pages/UseState'
import { UseEffect } from './pages/UseEffect'
import { UseMemo } from './pages/UseMemo'
import { UseRef } from './pages/UseRef'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <UseState />
      },
      {
        path: '/useeffect',
        element: <UseEffect />
      },
      {
        path: '/memo',
        element: <UseMemo />
      },
      {
        path: '/useref',
        element: <UseRef />
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
