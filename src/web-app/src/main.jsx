import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Logon from './pages/Logon'
import PasswordRecover from './pages/PasswordRecover'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/logon",
    element: <Logon />,
  },
  {
    path: "/recorver",
    element: <PasswordRecover />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
