import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FolderOpen, Github, ExternalLink, Star, GitFork, Eye, Code2 } from 'lucide-react'

interface Project {
  title: string
  description: string
  longDescription: string
  tech: string[]
  color: string
  gradient: string
  category: string
  stars: number
  forks: number
  status: 'completed' | 'in-progress' | 'planned'
  featured: boolean
  demoUrl: string
  githubUrl: string
  image: string
}

const projects: Project[] = [
  {
    title: 'FinTrack Dashboard',
    description: 'Real-time financial analytics dashboard with interactive charts and payment tracking.',
    longDescription:
      'A comprehensive financial analytics platform built for SMEs. Features real-time data visualization, payment processing integration, multi-currency support, and automated reporting.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Chart.js', 'Stripe'],
    color: '#3b82f6',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    category: 'Fintech',
    stars: 48,
    forks: 12,
    status: 'completed',
    featured: true,
    demoUrl: '#',
    githubUrl: '#',
    image: '💰',
  },
  {
    title: 'DevCollab Platform',
    description: 'Open-source collaboration tool for developers with real-time code sharing.',
    longDescription:
      'A collaborative development environment enabling real-time code editing, project management, and team communication. Built with WebSocket technology for seamless collaboration.',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Docker', 'Redis'],
    color: '#a855f7',
    gradient: 'from-purple-600/20 to-pink-600/20',
    category: 'Dev Tools',
    stars: 124,
    forks: 31,
    status: 'completed',
    featured: true,
    demoUrl: '#',
    githubUrl: '#',
    image: '🔧',
  },
  {
    title: 'HealthSync API',
    description: 'RESTful API for healthcare data management with HIPAA-compliant security.',
    longDescription:
      'Secure healthcare data management API leveraging my medical background. Features patient records management, appointment scheduling, and laboratory result integration.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'AWS', 'Docker'],
    color: '#10b981',
    gradient: 'from-emerald-600/20 to-teal-600/20',
    category: 'Healthcare',
    stars: 67,
    forks: 18,
    status: 'completed',
    featured: true,
    demoUrl: '#',
    githubUrl: '#',
    image: '🏥',
  },
  {
    title: 'ShopEase E-Commerce',
    description: 'Full-featured e-commerce platform with multi-vendor support.',
    longDescription:
      'A modern e-commerce solution supporting multiple vendors, with product management, order tracking, payment integration, and an AI-powered recommendation engine.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'AWS S3'],
    color: '#f59e0b',
    gradient: 'from-amber-600/20 to-orange-600/20',
    category: 'E-Commerce',
    stars: 89,
    forks: 25,
    status: 'completed',
    featured: false,
    demoUrl: '#',
    githubUrl: '#',
    image: '🛍️',
  },
  {
    title: 'AfriLearn LMS',
    description: 'Learning management system designed for African educational institutions.',
    longDescription:
      'A purpose-built LMS tailored for African schools and universities, supporting low-bandwidth environments, offline learning, and local language content.',
    tech: ['React', 'Python', 'Django', 'PostgreSQL', 'AWS', 'PWA'],
    color: '#ec4899',
    gradient: 'from-pink-600/20 to-rose-600/20',
    category: 'EdTech',
    stars: 156,
    forks: 42,
    status: 'in-progress',
    featured: false,
    demoUrl: '#',
    githubUrl: '#',
    image: '📚',
  },
  {
    title: 'CloudMonitor CLI',
    description: 'Command-line tool for monitoring AWS resources and cost optimization.',
    longDescription:
      'A developer-friendly CLI tool for monitoring AWS infrastructure, analyzing costs, alerting on anomalies, and generating optimization reports.',
    tech: ['Python', 'AWS SDK', 'Click', 'Rich', 'Docker'],
    color: '#06b6d4',
    gradient: 'from-cyan-600/20 to-sky-600/20',
    category: 'DevOps',
    stars: 203,
    forks: 57,
    status: 'completed',
    featured: false,
    demoUrl: '#',
    githubUrl: '#',
    image: '☁️',
  },
]

const categories = ['All', 'Fintech', 'Dev Tools', 'Healthcare', 'E-Commerce', 'EdTech', 'DevOps']

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      className="glass-card relative overflow-hidden group cursor-default h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        }}
      />

      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
            style={{
              background: `${project.color}15`,
              border: `1px solid ${project.color}30`,
            }}
          >
            {project.image}
          </div>

          <div className="flex items-center gap-2">
            {/* Status badge */}
            {project.status === 'in-progress' && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                In Progress
              </span>
            )}
            {project.featured && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center gap-1">
                <Star size={10} />
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Category chip */}
        <span
          className="inline-flex items-center gap-1 text-xs font-mono mb-3 w-fit"
          style={{ color: `${project.color}bb` }}
        >
          <Code2 size={11} />
          {project.category}
        </span>

        {/* Title & description */}
        <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-muted)' }}>
          {isHovered ? project.longDescription : project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded-md"
              style={{
                background: `${project.color}10`,
                color: `${project.color}cc`,
                border: `1px solid ${project.color}20`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer: stats + links */}
        <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
          <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-faint)' }}>
            <span className="flex items-center gap-1">
              <Star size={12} />
              {project.stars}
            </span>
            <span className="flex items-center gap-1">
              <GitFork size={12} />
              {project.forks}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <motion.a
              href={project.githubUrl}
              aria-label="GitHub repository"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.05)' }}
              whileHover={{ scale: 1.1, background: `${project.color}20` }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={15} />
            </motion.a>
            <motion.a
              href={project.demoUrl}
              aria-label="Live demo"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.05)' }}
              whileHover={{ scale: 1.1, background: `${project.color}20`, color: project.color }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={15} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <FolderOpen size={14} />
              <span>Projects</span>
            </div>
            <h2 className="section-title mb-4">
              Things I've{' '}
              <span className="gradient-text">Built</span>
            </h2>
            <p className="section-subtitle">
              A selection of projects showcasing my skills across different domains
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 glass"
                style={{
                  background: activeCategory === cat ? 'color-mix(in srgb, var(--accent-primary) 15%, transparent)' : undefined,
                  color: activeCategory === cat ? 'var(--accent-primary)' : 'var(--text-muted)',
                  border: activeCategory === cat
                    ? '1px solid color-mix(in srgb, var(--accent-primary) 40%, transparent)'
                    : '1px solid var(--border-color)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <div className="glass-card inline-flex flex-col sm:flex-row items-center gap-6 p-6">
              <div className="flex items-center gap-3">
                <Eye size={24} style={{ color: 'var(--accent-primary)' }} />
                <div className="text-left">
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>More on GitHub</div>
                  <div className="text-xs" style={{ color: 'var(--text-faint)' }}>Explore all my open source work</div>
                </div>
              </div>
              <motion.a
                href="#"
                className="btn-primary text-sm py-2.5 px-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                <span>View All Projects</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
