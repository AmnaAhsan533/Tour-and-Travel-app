import React, { useState } from 'react'
import { Calendar, Clock, MapPin, Search, Star } from 'lucide-react'
import lahore from '../assets/lahore.jfif'
import nanga from '../assets/nangaParbat.jpg'

const tourPackages = [
  {
    id: 1,
    title: 'Karakoram Highway Road Trip',
    duration: '10 Days',
    difficulty: 'Moderate',
    location: 'Hunza & Skardu',
    rating: 4.9,
    price: '$850',
    description: 'Traverse the legendary eighth wonder of the world, stopping at alpine lakes, cold deserts, and historic suspension bridges.',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Lahore Cultural & Heritage Trail',
    duration: '3 Days',
    difficulty: 'Easy',
    location: 'Lahore, Punjab',
    rating: 4.8,
    price: '$250',
    description: 'Explore ancient walled city gates, magnificent Mughal structures like the Badshahi Mosque, and indulge in historical food streets.',
    image: lahore
  },
  {
    id: 3,
    title: 'Nanga Parbat Base Camp Trek',
    duration: '7 Days',
    difficulty: 'Hard',
    location: 'Fairy Meadows',
    rating: 5.0,
    price: '$650',
    description: 'A challenging but deeply rewarding trek starting from Fairy Meadows up to the raw mountain base camp of the Killer Mountain.',
    image: nanga
  },
  {
    id: 4,
    title: 'Swat Valley Alpine Getaway',
    duration: '5 Days',
    difficulty: 'Easy',
    location: 'Malam Jabba & Kalam',
    rating: 4.7,
    price: '$450',
    description: 'Relax amidst dense pine forests, cascading waterfalls, and beautiful ski resorts in the Switzerland of the East.',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80'
  }
]

const Tours = () => {
  const [search, setSearch] = useState('')

  const filteredTours = tourPackages.filter(tour =>
    tour.title.toLowerCase().includes(search.toLowerCase()) ||
    tour.location.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="bg-slate-950 min-h-screen py-20 px-4 sm:px-6 lg:px-8 text-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Our Itineraries</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">Explore Tour Packages</h1>
          <p className="text-slate-400 text-sm md:text-base">
            Carefully structured road trips and trekking trails designed to make your journey through Pakistan smooth, safe, and deeply memorable.
          </p>

          {/* Dynamic Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search by destination or package name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-xl text-slate-100 placeholder-slate-500 text-sm transition-all"
            />
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-850 hover:border-emerald-500/20 transition-all duration-300 flex flex-col sm:flex-row h-full">
              
              {/* Tour Image */}
              <div className="relative sm:w-2/5 h-60 sm:h-auto bg-slate-800">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-emerald-500 text-slate-950 font-extrabold text-xs py-1 px-3 rounded-full">
                  {tour.price}
                </span>
              </div>

              {/* Tour Content */}
              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      tour.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      tour.difficulty === 'Moderate' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}>
                      {tour.difficulty}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span>{tour.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">{tour.title}</h3>
                  <p className="text-slate-400 text-xs mb-4 line-clamp-3 leading-relaxed">{tour.description}</p>
                </div>

                {/* Meta details */}
                <div className="border-t border-slate-800/80 pt-4 mt-auto">
                  <div className="grid grid-cols-2 gap-y-2 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="truncate">{tour.location}</span>
                    </div>
                  </div>

                  <button className="w-full mt-4 py-2.5 bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 text-xs font-bold rounded-xl transition-all">
                    Reserve Spot
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}

export default Tours