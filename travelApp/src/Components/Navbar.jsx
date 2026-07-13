import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Tailwind classes for active vs inactive links
  const linkStyles = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive 
        ? 'text-emerald-400 border-b-2 border-emerald-400 pb-1' 
        : 'text-slate-200 hover:text-emerald-300'
    }`

  const mobileLinkStyles = ({ isActive }) =>
    `block text-base font-medium py-2 px-3 rounded-md transition-colors ${
      isActive 
        ? 'bg-emerald-600 text-white' 
        : 'text-slate-200 hover:bg-slate-800 hover:text-emerald-300'
    }`

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
<div className="flex-shrink-0">
  <NavLink to="/" className="flex items-center gap-3">
    {/* Logo Image */}
    <img 
      src={logo} 
      alt="Explore Pakistan Logo" 
      className="h-9 w-9 object-contain rounded-lg filter drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]" 
    /> 
    
    {/* Logo Text */}
    <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
      EXPLORE PAKISTAN
    </span>
  </NavLink>
</div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              <li><NavLink to="/" end className={linkStyles}>Home</NavLink></li>
              <li><NavLink to="/tours" className={linkStyles}>Tours</NavLink></li>
              <li><NavLink to="/gallery" className={linkStyles}>Gallery</NavLink></li>
              <li><NavLink to="/about" className={linkStyles}>About</NavLink></li>
              <li><NavLink to="/contact" className={linkStyles}>Contact</NavLink></li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-emerald-400 hover:bg-slate-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-900 border-b border-slate-800`} id="mobile-menu">
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          <NavLink to="/" end onClick={() => setIsOpen(false)} className={mobileLinkStyles}>Home</NavLink>
          <NavLink to="/tours" onClick={() => setIsOpen(false)} className={mobileLinkStyles}>Tours</NavLink>
          <NavLink to="/gallery" onClick={() => setIsOpen(false)} className={mobileLinkStyles}>Gallery</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileLinkStyles}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={mobileLinkStyles}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar