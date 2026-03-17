import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <AnimatePresence>
      <div
        className="relative min-h-screen overflow-x-hidden transition-colors duration-300"
        style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
      >
        {/* Ambient background blobs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div
            className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-60"
            style={{
              background: `radial-gradient(circle, var(--blob1) 0%, transparent 70%)`,
              filter: 'blur(60px)',
            }}
          />
          <div
            className="absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full opacity-50"
            style={{
              background: `radial-gradient(circle, var(--blob2) 0%, transparent 70%)`,
              filter: 'blur(60px)',
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-40"
            style={{
              background: `radial-gradient(circle, var(--blob3) 0%, transparent 70%)`,
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute top-1/2 -right-20 w-[400px] h-[400px] rounded-full opacity-40"
            style={{
              background: `radial-gradient(circle, var(--blob4) 0%, transparent 70%)`,
              filter: 'blur(60px)',
            }}
          />
        </div>

        {/* Grid overlay */}
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />

        {/* Noise texture */}
        <div className="noise-overlay" />

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default App
