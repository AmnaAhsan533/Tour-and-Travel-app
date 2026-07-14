import React from 'react'
import Header from '../Components/Header'
import Features from '../Components/Features'
import FeaturedDestination from '../Components/FeaturedDestination'

const Home = () => {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-100">
      {/* Hero Banner Section */}
      <Header />
      
      {/* Why Choose Us Feature Badges */}
      <Features />

      {/* Grid of Highlighted Packages */}
      <FeaturedDestination />
    </main>
  )
}

export default Home