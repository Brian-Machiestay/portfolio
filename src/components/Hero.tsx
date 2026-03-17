import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Twitter, Sparkles, Terminal, FileDown } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

// ── Replace these with your real links ──────────────────────────
const RESUME_URL = '/resume.pdf'   // put your resume PDF in /public/resume.pdf
const GITHUB_URL = '#'
const LINKEDIN_URL = '#'
const TWITTER_URL = '#'
const EMAIL = 'brianmachiestay@example.com'
// ────────────────────────────────────────────────────────────────

const ROLES = [
  'Software Engineer',
  'Full Stack Developer',
  'React Specialist',
  'Cloud Engineer',
  'Problem Solver',
]

interface Particle {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  color: string
}

function generateParticles(count: number): Particle[] {
  const lightColors = ['#4f46e5', '#0ea5e9', '#06b6d4', '#7c3aed', '#2563eb']
  const darkColors = ['#818cf8', '#38bdf8', '#06b6d4', '#a78bfa', '#60a5fa']
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 3 + 1.5,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
    color: lightColors[Math.floor(Math.random() * lightColors.length)],
    darkColor: darkColors[Math.floor(Math.random() * darkColors.length)],
  })) as Particle[]
}

export default function Hero() {
  const { isDark } = useTheme()
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [particles] = useState(() => generateParticles(25))
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number>(0)

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % ROLES.length)
        }
      }
    }, isDeleting ? 60 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  // Canvas constellation animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    interface Star {
      x: number; y: number; vx: number; vy: number; radius: number; opacity: number
    }

    const stars: Star[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }))

    let mouseX = width / 2
    let mouseY = height / 2

    const handleMouseMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY }
    window.addEventListener('mousemove', handleMouseMove)

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const starColor = isDark ? '129, 140, 248' : '79, 70, 229'
      const lineColor = isDark ? '129, 140, 248' : '79, 70, 229'

      stars.forEach((star) => {
        star.x += star.vx
        star.y += star.vy
        if (star.x < 0 || star.x > width) star.vx *= -1
        if (star.y < 0 || star.y > height) star.vy *= -1

        const dx = mouseX - star.x
        const dy = mouseY - star.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          star.vx += (dx / dist) * 0.01
          star.vy += (dy / dist) * 0.01
        }

        const speed = Math.sqrt(star.vx * star.vx + star.vy * star.vy)
        if (speed > 1.5) { star.vx = (star.vx / speed) * 1.5; star.vy = (star.vy / speed) * 1.5 }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${starColor}, ${star.opacity})`
        ctx.fill()
      })

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x
          const dy = stars[i].y - stars[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            const opacity = (1 - dist / 120) * (isDark ? 0.3 : 0.2)
            ctx.beginPath()
            ctx.moveTo(stars[i].x, stars[i].y)
            ctx.lineTo(stars[j].x, stars[j].y)
            ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      width = window.innerWidth; height = window.innerHeight
      canvas.width = width; canvas.height = height
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [isDark])

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas constellation */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-50" style={{ zIndex: 0 }} />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: isDark ? '#818cf8' : '#4f46e5',
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            opacity: isDark ? 0.5 : 0.3,
            boxShadow: `0 0 ${particle.size * 2}px ${isDark ? '#818cf8' : '#4f46e5'}`,
          }}
        />
      ))}

      {/* Radial center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, color-mix(in srgb, var(--accent-primary) 6%, transparent) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">

          {/* Status badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full glass"
              style={{ border: '1px solid rgba(34,197,94,0.25)', background: 'rgba(34,197,94,0.08)' }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium" style={{ color: '#22c55e' }}>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <div className="inline-flex items-center gap-2 font-mono text-sm mb-4" style={{ color: 'var(--accent-primary)' }}>
              <Terminal size={16} />
              <span>Hello, World! I'm</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants} className="section-title mb-4">
            <span className="gradient-text animate-gradient">Brian Machiestay</span>
          </motion.h1>

          {/* Role typewriter */}
          <motion.div variants={itemVariants} className="mb-6">
            <div
              className="flex items-center justify-center gap-3 text-2xl sm:text-3xl md:text-4xl font-semibold"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span style={{ color: 'var(--text-faint)' }}>&lt;</span>
              <span className="font-mono min-w-[280px] text-left" style={{ color: 'var(--accent-secondary)' }}>
                {displayText}
                <span className="typewriter-cursor" />
              </span>
              <span style={{ color: 'var(--text-faint)' }}>/&gt;</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            Crafting scalable digital experiences with{' '}
            <span className="font-medium" style={{ color: 'var(--accent-primary)' }}>~5 years</span> of expertise in
            full-stack development. Passionate about building products that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={18} />
              <span>View My Work</span>
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get in Touch</span>
            </motion.button>

            {/* Resume download button */}
            <motion.a
              href={RESUME_URL}
              download="Brian_Machiestay_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: 'color-mix(in srgb, var(--accent-primary) 10%, transparent)',
                border: '1px solid color-mix(in srgb, var(--accent-primary) 30%, transparent)',
                color: 'var(--accent-primary)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px var(--accent-glow)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FileDown size={17} />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-16">
            {[
              { icon: Github, label: 'GitHub', href: GITHUB_URL },
              { icon: Linkedin, label: 'LinkedIn', href: LINKEDIN_URL },
              { icon: Mail, label: 'Email', href: `mailto:${EMAIL}` },
              { icon: Twitter, label: 'Twitter', href: TWITTER_URL },
            ].map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center transition-all duration-300"
                style={{ color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}
                whileHover={{
                  scale: 1.15,
                  borderColor: 'var(--accent-primary)',
                  boxShadow: '0 0 20px var(--accent-glow)',
                  color: 'var(--accent-primary)',
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-16">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '20+', label: 'Projects Built' },
              { value: '6', label: 'Companies' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--text-faint)' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={handleScrollDown}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors cursor-pointer"
          style={{ color: 'var(--text-faint)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          whileHover={{ scale: 1.1, color: 'var(--accent-primary)' }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.button>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, var(--bg-primary), transparent)',
          zIndex: 2,
        }}
      />
    </section>
  )
}
