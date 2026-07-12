import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from 'react-router/dom'

import { router } from './Router/Route.jsx'
import BookProvider from './Context/BookProvider.jsx'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BookProvider>
     <RouterProvider router={router}></RouterProvider>
   </BookProvider>
   <ToastContainer />
  </StrictMode>,
)
