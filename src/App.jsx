import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkGrid from './components/WorkGrid'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <WorkGrid />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Your Name — All rights reserved.
      </footer>
    </div>
  )
}

export default App
