import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, MapPin, Calendar, ChevronRight, Star } from 'lucide-react'

interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  type: string
  description: string
  highlights: string[]
  tech: string[]
  color: string
  isCurrent?: boolean
}

const experiences: ExperienceItem[] = [
  {
    company: 'MTN',
    role: 'Software Engineer',
    period: 'Present',
    location: 'Ghana',
    type: 'Full-time',
    description:
      'Working on large-scale telecom software systems serving millions of customers across Africa. Building and maintaining internal tools and customer-facing platforms.',
    highlights: [
      'Developed microservices architecture handling 1M+ daily transactions',
      'Led frontend modernization initiative using React and TypeScript',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Collaborated with cross-functional teams to deliver high-impact features',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    color: '#ffcc00',
    isCurrent: true,
  },
  {
    company: 'Revelo',
    role: 'Data Annotator',
    period: '2023 – Present',
    location: 'Remote',
    type: 'Contract',
    description:
      'Annotating and labeling training data for machine learning models, ensuring high-quality datasets for AI applications.',
    highlights: [
      'Annotated 10,000+ data samples with high accuracy metrics',
      'Developed annotation guidelines improving team consistency by 25%',
      'Collaborated with ML engineers to refine labeling criteria',
    ],
    tech: ['Python', 'Data Annotation Tools', 'ML Labeling Platforms'],
    color: '#06b6d4',
  },
  {
    company: 'Invisible',
    role: 'Data Annotator',
    period: '2022 – 2023',
    location: 'Remote',
    type: 'Contract',
    description:
      'Provided high-quality data annotation and AI training support for enterprise clients, contributing to NLP and computer vision model training.',
    highlights: [
      'Annotated complex NLP datasets for large language model training',
      'Maintained 98%+ accuracy across all annotation tasks',
      'Mentored new annotators on quality standards and best practices',
    ],
    tech: ['NLP Annotation', 'Computer Vision Labeling', 'Quality Assurance'],
    color: '#ec4899',
  },
  {
    company: 'Devatop Centre for Africa Development',
    role: 'Software Engineer',
    period: '2021 – 2022',
    location: 'Nigeria (Remote)',
    type: 'Full-time',
    description:
      'Built technology solutions supporting African development initiatives, youth empowerment programs, and digital literacy campaigns.',
    highlights: [
      'Developed web platform supporting 5,000+ youth program participants',
      'Built RESTful APIs for mobile application integration',
      'Implemented analytics dashboard for program monitoring and evaluation',
      'Optimized database queries improving platform performance by 40%',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    color: '#10b981',
  },
  {
    company: 'Payswitch',
    role: 'Software Engineer',
    period: '2020 – 2021',
    location: 'Ghana',
    type: 'Full-time',
    description:
      'Worked on fintech payment solutions, developing secure and scalable payment processing systems used by businesses across Africa.',
    highlights: [
      'Built payment integration modules for multiple African mobile money platforms',
      'Developed secure transaction APIs handling sensitive financial data',
      'Implemented fraud detection logic reducing fraudulent transactions by 30%',
      'Maintained 99.9% uptime for critical payment processing services',
    ],
    tech: ['Node.js', 'PostgreSQL', 'REST APIs', 'Security', 'Docker'],
    color: '#3b82f6',
  },
  {
    company: 'Arama Technicals',
    role: 'Software Engineer',
    period: '2019 – 2020',
    location: 'Ghana',
    type: 'Full-time',
    description:
      'Started my professional software engineering career, working on web applications and digital solutions for clients across various industries.',
    highlights: [
      'Developed client websites and web applications from concept to deployment',
      'Built CMS-powered platforms for content management',
      'Collaborated with design team to implement pixel-perfect UIs',
      'Gained foundational experience in full-stack development',
    ],
    tech: ['JavaScript', 'React', 'PHP', 'MySQL', 'HTML/CSS'],
    color: '#a855f7',
  },
]

function MobileExperienceCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className="relative pl-8 border-l-2"
      style={{ borderColor: `${exp.color}40` }}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        className="absolute -left-2 top-6 w-4 h-4 rounded-full"
        style={{ background: exp.color, boxShadow: `0 0 10px ${exp.color}80` }}
      />

      <div className="glass-card p-5 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
        />

        <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{exp.company}</h3>
              {exp.isCurrent && (
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Current
                </span>
              )}
            </div>
            <div className="text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>{exp.role}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-xs mb-3" style={{ color: 'var(--text-faint)' }}>
          <span className="flex items-center gap-1"><Calendar size={12} />{exp.period}</span>
          <span className="flex items-center gap-1"><MapPin size={12} />{exp.location}</span>
        </div>

        <p className="text-sm mb-3 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{exp.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {exp.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded-md"
              style={{ background: `${exp.color}10`, color: `${exp.color}cc`, border: `1px solid ${exp.color}25` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function TimelineCard({
  experience,
  index,
  isLeft,
}: {
  experience: ExperienceItem
  index: number
  isLeft: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-start gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-12`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className={`w-[calc(50%-2rem)] ${isLeft ? '' : 'text-left'}`}>
        <motion.div className="glass-card p-6 relative overflow-hidden group" whileHover={{ y: -4 }}>
          <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: `linear-gradient(90deg, transparent, ${experience.color}, transparent)` }}
          />

          <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{experience.company}</h3>
                {experience.isCurrent && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Current
                  </span>
                )}
              </div>
              <div className="font-medium text-sm" style={{ color: 'var(--accent-primary)' }}>{experience.role}</div>
            </div>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${experience.color}15`, border: `1px solid ${experience.color}30` }}
            >
              <Briefcase size={18} style={{ color: experience.color }} />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-4 text-xs" style={{ color: 'var(--text-faint)' }}>
            <span className="flex items-center gap-1"><Calendar size={12} />{experience.period}</span>
            <span className="flex items-center gap-1"><MapPin size={12} />{experience.location}</span>
            <span
              className="px-2 py-0.5 rounded-full"
              style={{ background: `${experience.color}15`, color: experience.color, border: `1px solid ${experience.color}30` }}
            >
              {experience.type}
            </span>
          </div>

          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{experience.description}</p>

          <ul className="space-y-1.5 mb-4">
            {experience.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                <ChevronRight size={14} className="flex-shrink-0 mt-0.5" style={{ color: experience.color }} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {experience.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs rounded-md"
                style={{ background: `${experience.color}10`, color: `${experience.color}cc`, border: `1px solid ${experience.color}25` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative flex-shrink-0 flex flex-col items-center" style={{ width: '4rem' }}>
        <motion.div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white z-10 relative"
          style={{
            background: `linear-gradient(135deg, ${experience.color}80, ${experience.color})`,
            boxShadow: `0 0 20px ${experience.color}50`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ scale: 1.2 }}
        >
          {index + 1}
        </motion.div>
      </div>

      <div className="w-[calc(50%-2rem)]" />
    </motion.div>
  )
}

export default function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Briefcase size={14} />
              <span>Work Experience</span>
            </div>
            <h2 className="section-title mb-4">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--text-muted)' }}>
              Companies and roles that shaped my engineering career
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            {[
              { icon: Briefcase, value: '6', label: 'Companies' },
              { icon: Star, value: '5+', label: 'Years' },
              { icon: MapPin, value: '3', label: 'Countries' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 glass-card px-6 py-3">
                <Icon size={20} style={{ color: 'var(--accent-primary)' }} />
                <div>
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-xs" style={{ color: 'var(--text-faint)' }}>{label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Desktop Timeline */}
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
              <div className="h-full w-full" style={{ background: 'var(--timeline-line)' }} />
            </div>
            {experiences.map((exp, index) => (
              <TimelineCard key={exp.company} experience={exp} index={index} isLeft={index % 2 === 0} />
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {experiences.map((exp, index) => (
              <MobileExperienceCard key={exp.company} exp={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
