import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <><Navbar/><Home/></>
  },

  {
    path:'/tours',
    element: <><Navbar/><Tours/></>
  },

  {
    path:'/gallery',
    element: <><Navbar/><Gallery/></>
  },

  {
    path:'/about',
    element: <><Navbar/><About/></>
  },

  {
    path:'/contact',
    element: <><Navbar/><Contact/></>
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
