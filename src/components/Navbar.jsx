import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm md:text-base text-slate-600 hover:text-slate-900 transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = (e) => {
    // close on click for mobile
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-500 grid place-items-center text-white shadow-md">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold tracking-tight text-slate-900">Your Name</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#contact">
              <span className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
                Let’s Talk
              </span>
            </NavLink>
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-white/60"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 animate-in">
            <div className="flex flex-col gap-4 border-t border-white/50 pt-4">
              <NavLink href="#work" onClick={handleNav}>Work</NavLink>
              <NavLink href="#about" onClick={handleNav}>About</NavLink>
              <NavLink href="#services" onClick={handleNav}>Services</NavLink>
              <a
                href="#contact"
                onClick={handleNav}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg"
              >
                Let’s Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
