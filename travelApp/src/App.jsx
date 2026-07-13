import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Tours from './Pages/Tours'
import Gallery from './Pages/Gallery'
import About from './Pages/About'
import Contact from './Pages/Contact'

// A Layout component that wraps around your changing pages
const AppLayout = () => (
  <>
    <Navbar />
    <Outlet /> {/* This is where Home, Tours, Gallery, etc. will render */}
    <Footer />
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'tours', element: <Tours /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App