import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './routes/root'
import { UseState } from './pages/layout/Hooks/UseState'
import { UseEffect } from './pages/layout/Hooks/UseEffect'
import { UseMemo } from './pages/layout/Hooks/UseMemo'
import { UseRef } from './pages/layout/Hooks/UseRef'
import { UseReducer } from './pages/layout/Hooks/UseReducer'
import { UseContext } from './pages/layout/Hooks/UseContext'
import { UseCallback } from './pages/layout/Hooks/useCallback'
import UseLayoutEffect from './pages/layout/Hooks/UseLayoutEffect'
import { Memo } from './pages/useMemo/Memo'


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
        element: <UseMemo />,
        children: [
          {
            path: '/memo/usememo',
            element: <Memo />
          }
        ]
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
      },
      {
        path: '/layoutEffect',
        element: <UseLayoutEffect />
      },
    ]
  }
  
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
