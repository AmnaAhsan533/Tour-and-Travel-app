import React from 'react'
import GalleryCard from '../Components/GalleryCard'
import shandur from '../assets/shandur.jfif'
import deosai from '../assets/deosai.jpg'

const galleryItems = [
  {
    id: 1,
    title: 'Attabad Lake',
    region: 'Hunza Valley, Gilgit-Baltistan',
    category: 'Lakes & Valleys',
    imageSrc: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Shandur Pass',
    region: 'Chitral, Khyber Pakhtunkhwa',
    category: 'Cultural Events',
    imageSrc: shandur
  },
  {
    id: 3,
    title: 'Deosai Plains',
    region: 'Skardu, Gilgit-Baltistan',
    category: 'National Parks',
    imageSrc: deosai
  },
  {
    id: 4,
    title: 'Saif-ul-Muluk Lake',
    region: 'Kaghan Valley, KPK',
    category: 'Lakes & Valleys',
    imageSrc: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Lahore Fort (Shahi Qila)',
    region: 'Lahore, Punjab',
    category: 'Historic Monuments',
    imageSrc: 'https://images.unsplash.com/photo-1561488111-5d800fd56b8a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Rakaposhi Viewpoint',
    region: 'Nagar Valley, Gilgit-Baltistan',
    category: 'Mountain Peaks',
    imageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  }
]

const Gallery = () => {
  return (
    <main className="bg-slate-950 min-h-screen py-20 px-4 sm:px-6 lg:px-8 text-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Visual Showcase</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">
            Through The Lens
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            A curated gallery highlighting the vibrant cultures, historical forts, and surreal alpine views across Pakistan.
          </p>
        </div>

        {/* Gallery Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <GalleryCard
              key={item.id}
              title={item.title}
              region={item.region}
              category={item.category}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>

      </div>
    </main>
  )
}

export default Gallery