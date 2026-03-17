import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, BookOpen, CheckCircle, Clock, ExternalLink, type LucideIcon } from 'lucide-react'

interface EducationItem {
  institution: string
  degree: string
  field: string
  period: string
  status: 'completed' | 'ongoing'
  description: string
  color: string
  icon: LucideIcon
}

interface CertItem {
  name: string
  issuer: string
  year: string
  color: string
  badge: string
  skills: string[]
}

const educationItems: EducationItem[] = [
  {
    institution: 'University of the People',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    period: 'Ongoing',
    status: 'ongoing',
    description:
      'Pursuing a comprehensive computer science degree covering algorithms, data structures, software engineering, databases, and advanced programming concepts.',
    color: '#3b82f6',
    icon: GraduationCap,
  },
  {
    institution: 'University of the People',
    degree: 'Associate Degree',
    field: 'Computer Science',
    period: 'Completed',
    status: 'completed',
    description:
      'Completed foundational computer science curriculum including programming fundamentals, discrete mathematics, introductory algorithms, and software development.',
    color: '#06b6d4',
    icon: GraduationCap,
  },
  {
    institution: 'University of Health and Allied Sciences, Ghana',
    degree: 'Bachelor of Science',
    field: 'Medical Laboratory Science',
    period: 'Completed',
    status: 'completed',
    description:
      'Graduated with strong analytical and scientific foundation. Specialized in medical diagnostics, laboratory management, and quality control — skills that translated directly into methodical problem-solving in software.',
    color: '#10b981',
    icon: BookOpen,
  },
]

const certifications: CertItem[] = [
  {
    name: 'Full Stack Software Engineering',
    issuer: 'ALX',
    year: '2023',
    color: '#a855f7',
    badge: 'ALX',
    skills: ['Node.js', 'Python', 'Flask', 'MySQL', 'JavaScript', 'C'],
  },
  {
    name: 'Frontend Development Certificate',
    issuer: 'EdX',
    year: '2022',
    color: '#3b82f6',
    badge: 'EdX',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Accessibility', 'Performance'],
  },
  {
    name: 'AWS Cloud Foundations',
    issuer: 'AWS Restart (Amalitech)',
    year: '2023',
    color: '#ff9900',
    badge: 'AWS',
    skills: ['EC2', 'S3', 'RDS', 'IAM', 'VPC', 'CloudFormation'],
  },
]

function EducationCard({ item, index }: { item: EducationItem; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      className="glass-card p-6 relative overflow-hidden group"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
        }}
      />

      {/* Left accent bar */}
      <div
        className="absolute left-0 top-8 bottom-8 w-0.5 rounded-full"
        style={{ background: item.color }}
      />

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
          style={{
            background: `${item.color}15`,
            border: `1px solid ${item.color}30`,
          }}
        >
          <Icon size={22} style={{ color: item.color }} />
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
            <div>
              <h3 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>{item.institution}</h3>
              <div className="text-sm" style={{ color: item.color }}>
                {item.degree} — {item.field}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {item.status === 'ongoing' ? (
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                  <Clock size={11} />
                  In Progress
                </span>
              ) : (
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                  <CheckCircle size={11} />
                  Completed
                </span>
              )}
            </div>
          </div>

          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

function CertCard({ cert, index }: { cert: CertItem; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className="glass-card p-5 relative overflow-hidden group cursor-default"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${cert.color}15 0%, transparent 70%)`,
        }}
      />

      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)`,
        }}
      />

      {/* Badge */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl"
          style={{
            background: `linear-gradient(135deg, ${cert.color}30, ${cert.color}15)`,
            border: `2px solid ${cert.color}40`,
            color: cert.color,
          }}
        >
          {cert.badge.slice(0, 2)}
        </div>
        <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-faint)' }}>
          <Award size={12} />
          <span>{cert.year}</span>
        </div>
      </div>

      {/* Name */}
      <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>{cert.name}</h3>
      <p className="text-xs font-medium mb-3" style={{ color: cert.color }}>
        {cert.issuer}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-0.5 text-xs rounded"
            style={{
              background: `${cert.color}10`,
              color: `${cert.color}bb`,
              border: `1px solid ${cert.color}20`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Hover icon */}
      <motion.div
        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ExternalLink size={14} style={{ color: cert.color }} />
      </motion.div>
    </motion.div>
  )
}

export default function Education() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="education" ref={sectionRef} className="py-24 relative">
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
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <GraduationCap size={14} />
              <span>Education & Certifications</span>
            </div>
            <h2 className="section-title mb-4">
              Academic{' '}
              <span className="gradient-text">Foundation</span>
            </h2>
            <p className="section-subtitle">
              A diverse educational background combining science and technology
            </p>
          </motion.div>

          {/* Education section */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-bold mb-6 flex items-center gap-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              <BookOpen size={20} className="text-blue-400" />
              Academic Degrees
            </motion.h3>

            <div className="space-y-4">
              {educationItems.map((item, index) => (
                <EducationCard key={item.field + item.institution} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Certifications section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl font-bold mb-6 flex items-center gap-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Award size={20} className="text-purple-400" />
              Professional Certifications
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <CertCard key={cert.name} cert={cert} index={index} />
              ))}
            </div>
          </div>

          {/* Lifelong learning banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 glass-card p-8 text-center relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'radial-gradient(circle at 50% 100%, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Committed to Lifelong Learning</h3>
              <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                From Medical Lab Science to Software Engineering — my unconventional path taught me
                that learning transcends boundaries. I'm constantly adding new skills and staying
                current with the ever-evolving tech landscape.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
