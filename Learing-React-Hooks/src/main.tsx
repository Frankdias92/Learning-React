import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './routes/root'
import { UseState } from './pages/layout/UseState'
import { UseEffect } from './pages/layout/UseEffect'
import { UseMemo } from './pages/layout/UseMemo'
import { UseRef } from './pages/layout/UseRef'
import { UseReducer } from './pages/layout/UseReducer'
import { UseContext } from './pages/layout/UseContext'
import { UseCallback } from './pages/layout/useCallback'
import UseLayoutEffect from './pages/layout/UseLayoutEffect'
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
      },
      {
        path: '/layoutEffect',
        element: <UseLayoutEffect />
      },
    ]
  },
  {
    path: '/usememo',
    element: <Memo />
  }
  
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
