import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop"
              alt="Designer at work"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">About</h2>
            <p className="mt-4 text-slate-600">
              I'm a marketing graphic designer focused on bold visuals that perform. From brand foundations to high-impact campaign assets, I help teams communicate clearly and creatively.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <p className="font-semibold text-slate-900">8+ years</p>
                <p className="text-slate-600">Design experience</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <p className="font-semibold text-slate-900">50+ brands</p>
                <p className="text-slate-600">across tech, retail & SaaS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
