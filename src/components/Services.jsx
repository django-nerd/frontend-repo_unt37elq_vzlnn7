import { motion } from 'framer-motion'
import { PenTool, Palette, Megaphone, Grid as GridIcon } from 'lucide-react'

const services = [
  {
    icon: PenTool,
    title: 'Brand Identity',
    desc: 'Logos, brand systems, and visual guidelines that scale.',
  },
  {
    icon: Palette,
    title: 'Art Direction',
    desc: 'Look and feel, photoshoot direction, and campaign moodboards.',
  },
  {
    icon: Megaphone,
    title: 'Campaign Design',
    desc: 'OOH, social, digital ads and conversion-focused design.',
  },
  {
    icon: GridIcon,
    title: 'Content Design',
    desc: 'Carousels, motion graphics, and templates for your team.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Services</h2>
          <p className="mt-2 text-slate-600">Everything you need to launch and grow your brand.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-500 text-white grid place-items-center">
                <s.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
