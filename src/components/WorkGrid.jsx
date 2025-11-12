import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Vibrant Brand Identity',
    tag: 'Branding',
    cover: 'https://images.unsplash.com/photo-1529336953121-a0ce3d952899?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Product Launch Campaign',
    tag: 'Campaign',
    cover: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Social Media Art Direction',
    tag: 'Art Direction',
    cover: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Packaging System',
    tag: 'Packaging',
    cover: 'https://images.unsplash.com/photo-1505744386214-51dba16a26fc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Out-of-home Concepts',
    tag: 'OOH',
    cover: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Event Visuals',
    tag: 'Events',
    cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function WorkGrid() {
  return (
    <section id="work" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Selected Work</h2>
            <p className="mt-2 text-slate-600">A mix of campaigns, identities, and visuals</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Start a project</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.cover} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="inline-block text-xs tracking-wide uppercase bg-white/10 backdrop-blur px-2 py-1 rounded-full border border-white/20">{p.tag}</span>
                <h3 className="mt-2 font-semibold text-lg drop-shadow-sm">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
