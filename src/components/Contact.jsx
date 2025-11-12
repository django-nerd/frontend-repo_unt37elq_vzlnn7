import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok) setStatus({ ok: true, message: data.message || 'Thanks! I will get back to you shortly.' })
      else setStatus({ ok: false, message: data.detail || 'Something went wrong.' })
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Let’s work together</h2>
          <p className="mt-2 text-slate-600">Tell me about your project and goals.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-violet-400 focus:outline-none p-3 border" />
            <input name="email" required type="email" placeholder="Your email" className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-violet-400 focus:outline-none p-3 border" />
          </div>
          <input name="company" placeholder="Company / Brand" className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-violet-400 focus:outline-none p-3 border" />
          <textarea name="message" required rows="5" placeholder="Project details" className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-violet-400 focus:outline-none p-3 border" />
          <button className="inline-flex justify-center items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800">Send message</button>
          {status && (
            <p className={`${status.ok ? 'text-green-600' : 'text-red-600'} text-sm`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  )
}
