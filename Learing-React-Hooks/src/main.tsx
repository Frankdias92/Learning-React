import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './routes/root'
import { UseState } from './pages/UseState'
import { UseEffect } from './pages/UseEffect'
import { UseMemo } from './pages/UseMemo'
import { UseRef } from './pages/UseRef'
import { UseReducer } from './pages/UseReducer'
import { UseContext } from './pages/UseContext'
import { UseCallback } from './pages/useCallback'


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
      },
      {
        path: '/usereducer',
        element: <UseReducer />
      },
      {
        path: '/usecontext',
        element: <UseContext />
      },
      {
        path: '/usecallback',
        element: <UseCallback />
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
