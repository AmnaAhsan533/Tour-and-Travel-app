import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='sticky mx-auto top-0 transition-all py-6 bg-transparent'>
        <div className='px-4 fixed w-full z-50 top-0 py-2 bg-transparent/75'>
            <div className='max-w-7xl mx-auto py-2 px-5 flex bg-transparent justify-between items-center'>
                <Link to='/'>
                    <h1 className='text-2xl text-white font-bold'>Travel & Tour</h1>
                </Link>
            </div>
            <div className='flex items-center gap-5'>
                <nav className='hidden md:flex gap-7'>
                    <ul className='flex items-center gap-7 text-white font-semibold text-xl'>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li>About Us</li>
                        </Link>
                        <Link to='/tours'>
                            <li>Tours</li>
                        </Link>
                        <Link to='/gallery'>
                            <li>Gallery</li>
                        </Link>
                        <Link to='/contact'>
                            <li>Contact</li>
                        </Link>
                    </ul>
                    <button className="bg-red-500 text-white px-4 py-1 rounded-md font-semibold">Book Now</button>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Navbar