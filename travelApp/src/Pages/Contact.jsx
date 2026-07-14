import React from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  return (
    <main className="bg-slate-950 min-h-screen py-20 px-4 sm:px-6 lg:px-8 text-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">Contact Our Travel Specialists</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Have questions about regional permits, high-altitude gear, or custom road trip plans? Drop us a line below.
          </p>
        </div>

        {/* Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 p-8 rounded-2xl border border-slate-850">
            <h2 className="text-xl font-bold text-white mb-6">Send Message</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Amna"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-xl text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="amna@example.com"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-xl text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Inquiry about Hunza Valley Tour"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-xl text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Your Message</label>
                <textarea 
                  rows="5"
                  placeholder="Describe your plans, team size, and preferred departure months..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-xl text-sm resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 transition-all"
              >
                <span>Send Inquiry</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Right Info Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-850 space-y-6">
              <h2 className="text-xl font-bold text-white pb-4 border-b border-slate-800">Coordinates</h2>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 rounded-xl border border-emerald-500/20 shrink-0">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Our Base</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 rounded-xl border border-emerald-500/20 shrink-0">
                  <Phone className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Call Us</h4>
                  <p className="text-xs text-slate-400">+923312345678</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 rounded-xl border border-emerald-500/20 shrink-0">
                  <Mail className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Email</h4>
                  <p className="text-xs text-slate-400">info@explorepakistan.com</p>
                </div>
              </div>
            </div>

            {/* Quick Note Badge */}
            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-xs text-emerald-400 leading-relaxed">
              💡 <strong>Travel Tip:</strong> Permits for high-altitude passes in the Karakoram range take up to 2 weeks to clear. We recommend making bookings at least 30 days ahead of your expected travel dates.
            </div>
          </div>

        </div>

      </div>
    </main>
  )
}

export default Contact