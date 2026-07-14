import React from 'react'
import { MapPin } from 'lucide-react'

const GalleryCard = ({ title, region, category, imageSrc }) => {
  return (
    <div className="group relative h-96 rounded-2xl overflow-hidden border border-slate-850 bg-slate-900 shadow-xl cursor-pointer">
      
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        onError={(e) => {
          e.target.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80' // Beautiful mountain fallback
        }}
      />

      {/* Dark Vignette Overlay (Grows darker on hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Card Content (Stays pinned to the bottom) */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        
        {/* Category Tag */}
        <span className="self-start inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
          {category}
        </span>

        {/* Scene Title / Name */}
        <h3 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-emerald-300 transition-colors">
          {title}
        </h3>

        {/* Region/Location Details */}
        <div className="flex items-center gap-1 text-slate-300 text-xs font-light">
          <MapPin className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
          <span>{region}</span>
        </div>

      </div>
    </div>
  )
}

export default GalleryCard