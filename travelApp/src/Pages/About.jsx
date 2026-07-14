import React from 'react'
import { Calendar, Compass, Heart, Users } from 'lucide-react'

const milestones = [
  { year: '2024', title: 'Our Foundation', desc: 'Started with a simple mission to make the remote, spectacular northern regions of Pakistan accessible and safe.' },
  { year: '2025', title: 'Carbon Neutrality', desc: 'Committed to fully offset our travel footprints, running trash collection campaigns during treks.' },
  { year: '2026', title: 'DevWeekends Collaboration', desc: 'Partnering with local regional hosts to bring localized tech workflows and eco-lodges into digital booking.' }
]

const About = () => {
  return (
    <main className="bg-slate-950 min-h-screen py-20 px-4 sm:px-6 lg:px-8 text-slate-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Intro */}
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Who We Are</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-6">Our Mission &amp; Journey</h1>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We are passionate travelers, mountaineers, and guides dedicated to presenting the rich history, hospitality, and unmatched landscapes of Pakistan to the world.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Promoting Sustainable, Respectful Tourism</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pakistan is home to three of the world’s most magnificent mountain ranges—the Karakoram, the Hindu Kush, and the Himalayas. Our goal is to let travelers experience this visual splendor without disrupting local wildlife or vulnerable high-altitude ecosystems.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              We reinvest a portion of all tour proceeds directly into localized community projects, clean drinking water systems, and support schools in remote villages.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 h-80">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
              alt="Rakaposhi Peak" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Milestones / Timeline Grid */}
        <div className="border-t border-slate-900 pt-20">
          <h2 className="text-2xl font-bold text-center text-white mb-12">Key Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((ms, index) => (
              <div key={index} className="p-6 rounded-2xl bg-slate-900 border border-slate-850 relative">
                <span className="text-3xl font-extrabold text-emerald-500/20 absolute right-6 top-4">{ms.year}</span>
                <h3 className="text-lg font-bold text-white mb-2">{ms.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{ms.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}

export default About