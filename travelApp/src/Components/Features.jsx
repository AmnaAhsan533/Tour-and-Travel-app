import React from 'react'
import { ShieldCheck, Compass, HeartHandshake, Sparkles } from 'lucide-react'

const featureList = [
  {
    id: 1,
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    title: 'Safe & Secure Travel',
    desc: 'Your safety is our top priority. We partner with verified local guides and secure transit services across all terrains.'
  },
  {
    id: 2,
    icon: <Compass className="h-6 w-6 text-emerald-400" />,
    title: 'Expert Guided Trails',
    desc: 'Uncover hidden base camps, historic passes, and local culinary spots with our certified, bilingual travel guides.'
  },
  {
    id: 3,
    icon: <HeartHandshake className="h-6 w-6 text-emerald-400" />,
    title: '24/7 On-Trip Support',
    desc: 'Whether coordinating high-altitude plans or modifying routes, our local support lines are open for you around the clock.'
  },
  {
    id: 4,
    icon: <Sparkles className="h-6 w-6 text-emerald-400" />,
    title: 'Bespoke Itineraries',
    desc: 'Tailor-made road trips and hikes built around your personal physical endurance limits and art/nature preferences.'
  }
]

const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            Crafting Unmatched Journeys Across Pakistan
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((feat) => (
            <div key={feat.id} className="p-8 rounded-2xl bg-slate-950 border border-slate-850 hover:border-emerald-500/20 transition-all duration-300">
              
              {/* Icon Container */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
                {feat.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features