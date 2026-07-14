import React from 'react'
import { Link } from 'react-router-dom'
import cover from '../assets/cover.jpg' 

const Header = () => {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center bg-slate-950 overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src={cover} 
          alt="Beautiful Pakistan Landscape" 
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/70 to-slate-950" />
      </div>

      {/* Hero Content Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Dynamic Badge */}
        <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-widest mb-6">
          🇵🇰 Discover the Unseen
        </span>

        {/* Catchy Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15]">
          Ready to Start Your{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            Adventure?
          </span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Book your dream vacation today and create unforgettable memories across the spectacular peaks, valleys, and heritage sites of Pakistan.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/tours"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-slate-950 font-semibold rounded-xl hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Explore Tours
          </Link>
          
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 text-white font-medium rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-slate-800 backdrop-blur-sm transition-all duration-200"
          >
            Contact Agent
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Header