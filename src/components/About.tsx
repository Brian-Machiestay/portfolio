import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { User, MapPin, Briefcase, Heart, Coffee, Zap, Globe, Award } from 'lucide-react'

const highlights = [
  {
    icon: Briefcase,
    title: 'Professional Experience',
    description: '~5 years building production software across healthcare tech, fintech, and telecom.',
    color: '#a855f7',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Worked with companies across Africa, contributing to digital transformation.',
    color: '#06b6d4',
  },
  {
    icon: Zap,
    title: 'Full Stack Skills',
    description: 'From React frontends to Node.js backends, cloud infrastructure to databases.',
    color: '#3b82f6',
  },
  {
    icon: Award,
    title: 'Continuous Learner',
    description: 'Multiple certifications and currently pursuing a BSc in Computer Science.',
    color: '#ec4899',
  },
]

const funFacts = [
  { icon: Coffee, text: 'Fueled by coffee & curiosity' },
  { icon: Heart, text: 'Passionate about open source' },
  { icon: MapPin, text: 'Based in Ghana, Africa' },
  { icon: User, text: 'Always eager to collaborate' },
]

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <User size={14} />
              <span>About Me</span>
            </div>
            <h2 className="section-title mb-4">
              The Person Behind{' '}
              <span className="gradient-text">The Code</span>
            </h2>
            <p className="section-subtitle">
              A software engineer with a unique journey — from medical science to tech.
            </p>
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Text content */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Code-style bio */}
              <div className="glass-card p-6 font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs" style={{ color: 'var(--text-faint)' }}>about.ts</span>
                </div>
                <div className="space-y-1">
                  <div><span className="text-purple-400">const</span> <span className="text-cyan-400">engineer</span> = {'{'}</div>
                  <div className="pl-4"><span className="text-blue-400">name</span>: <span className="text-green-400">"Brian Machiestay"</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">role</span>: <span className="text-green-400">"Software Engineer"</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">experience</span>: <span className="text-orange-400">5</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">location</span>: <span className="text-green-400">"Ghana, Africa"</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">education</span>: [</div>
                  <div className="pl-8"><span className="text-green-400">"BSc Med Lab Science"</span>,</div>
                  <div className="pl-8"><span className="text-green-400">"BSc Computer Science (ongoing)"</span>,</div>
                  <div className="pl-4">],</div>
                  <div className="pl-4"><span className="text-blue-400">currentCompany</span>: <span className="text-green-400">"MTN"</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">openToWork</span>: <span className="text-orange-400">true</span>,</div>
                  <div>{'}'};</div>
                </div>
              </div>

              {/* Bio paragraphs */}
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                My journey into software engineering is anything but conventional. I started with a
                <span className="font-medium" style={{ color: 'var(--accent-primary)' }}> BSc in Medical Laboratory Science</span>, which
                gave me a deep appreciation for precision, analytical thinking, and the scientific method —
                skills that translate surprisingly well to writing clean, reliable code.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Driven by curiosity and a passion for building things, I transitioned into software
                engineering and never looked back. Over the past 5 years, I've had the privilege of
                working with companies like <span className="font-medium" style={{ color: 'var(--accent-secondary)' }}>MTN</span>,{' '}
                <span className="font-medium" style={{ color: 'var(--accent-secondary)' }}>Payswitch</span>, and several others,
                delivering impactful full-stack solutions.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                I specialize in building scalable web applications with a focus on performance,
                developer experience, and clean architecture. When I'm not coding, I'm probably
                exploring new technologies or contributing to the tech community in Africa.
              </p>

              {/* Fun facts */}
              <div className="grid grid-cols-2 gap-3">
                {funFacts.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-sm" style={{ color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}
                  >
                    <Icon size={14} className="text-purple-400 flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Visual element */}
            <motion.div variants={itemVariants} className="relative">
              {/* Avatar placeholder with animated rings */}
              <div className="relative flex items-center justify-center">
                {/* Animated rings */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border border-purple-500/20"
                    style={{
                      width: `${200 + i * 60}px`,
                      height: `${200 + i * 60}px`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      rotate: { duration: 20 + i * 5, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' },
                    }}
                  />
                ))}

                {/* Orbiting dots */}
                {['#a855f7', '#06b6d4', '#3b82f6'].map((color, i) => (
                  <motion.div
                    key={color}
                    className="absolute w-4 h-4 rounded-full"
                    style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
                    animate={{
                      rotate: [0 + i * 120, 360 + i * 120],
                    }}
                    transition={{
                      duration: 8 + i * 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    // Position them in a circular orbit
                    initial={{ x: 130, y: 0 }}
                  />
                ))}

                {/* Central avatar */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600" />
                  <div className="absolute inset-2 rounded-full flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
                    <div className="text-6xl font-bold gradient-text">BM</div>
                  </div>
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.3), transparent 70%)',
                    }}
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card px-3 py-2 text-sm font-medium text-green-400 border border-green-500/20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Available
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass-card px-3 py-2 text-sm"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="text-cyan-400 font-mono font-semibold">5+ Years</div>
                <div className="text-slate-500 text-xs">Experience</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Highlights grid */}
          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map(({ icon: Icon, title, description, color }) => (
              <motion.div
                key={title}
                className="glass-card p-5 group"
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${color}20`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-faint)' }}>{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
