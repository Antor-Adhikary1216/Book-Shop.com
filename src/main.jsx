import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {  Route, RouterProvider } from 'react-router'
import { route } from './Routers/Routes'
// import { Routers } from './Routers/Routes'




createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <RouterProvider Routers={Routers}/> */}
   <RouterProvider router={ route}></RouterProvider>
  </StrictMode>,
)
