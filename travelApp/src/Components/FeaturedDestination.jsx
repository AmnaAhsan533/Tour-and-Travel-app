import React from 'react'
import { MapPin, ArrowRight } from 'lucide-react' 
import fairy from '../assets/fairy_meadows.jpg'
import mosque from '../assets/mosque.jfif'
import hunza from '../assets/hunza.avif'

const destinations = [
  {
    id: 1,
    title: 'Hunza Valley',
    location: 'Gilgit-Baltistan',
    description: 'Breathtaking turquoise waters of Attabad Lake framed by majestic Karakoram peaks.',
    image: hunza,
    price: '$450'
  },
  {
    id: 2,
    title: 'Badshahi Mosque',
    location: 'Lahore, Punjab',
    description: 'Immerse yourself in the grandeur of Mughal-era red sandstone architecture.',
    image: mosque,
    price: '$180'
  },
  {
    id: 3,
    title: 'Fairy Meadows',
    location: 'Nanga Parbat Base',
    description: 'Lush alpine meadows offering unmatched, killer views of Nanga Parbat.',
    image: fairy,
    price: '$520'
  }
]

const FeaturedDestination = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Top Destinations</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Popular Tour Packages</h2>
          </div>
          <p className="text-slate-400 max-w-md mt-4 md:mt-0">
            Handpicked travel packages curated for the ultimate exploration of Pakistan's historic sites and northern wonders.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-850 hover:border-emerald-500/30 transition-all duration-300 flex flex-col h-full shadow-xl">
              
              {/* Card Image with Placeholder Fallback */}
              <div className="relative h-64 w-full bg-slate-800 overflow-hidden">
                {dest.image ? (
                  <img 
                    src={dest.image} 
                    alt={dest.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if the external link fails
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                
                {/* CSS/Tailwind Placeholder UI */}
                <div className={`absolute inset-0 hidden flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-slate-500 p-4 text-center ${!dest.image && '!flex'}`}>
                  <span className="text-4xl mb-2">🏔️</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">{dest.title} Photo</span>
                  <span className="text-[10px] text-slate-500 mt-1">Placeholder</span>
                </div>

                <span className="absolute top-4 right-4 bg-emerald-500 text-slate-950 font-bold text-sm py-1 px-3 rounded-full shadow-md z-10">
                  {dest.price}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold mb-2">
                  <MapPin className="h-3 w-3" />
                  <span>{dest.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {dest.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {dest.description}
                </p>

                <button className="flex items-center justify-between w-full py-3 px-4 bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-medium rounded-xl transition-all duration-200 text-sm group/btn">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturedDestination