import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython,
  SiDocker, SiGit, SiPostgresql, SiMongodb,
  SiHtml5, SiExpress, SiNextdotjs,
} from 'react-icons/si'
import { Cpu, Layers, Database, Cloud, Terminal, Network } from 'lucide-react'

type IconComponent = React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>

interface Skill {
  name: string
  icon: IconComponent
  level: number
  color: string
  category: string
}

const skills: Skill[] = [
  { name: 'JavaScript', icon: SiJavascript, level: 95, color: '#f7df1e', category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, level: 90, color: '#3178c6', category: 'Frontend' },
  { name: 'React', icon: SiReact, level: 92, color: '#61dafb', category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, level: 85, color: '#ffffff', category: 'Frontend' },
  { name: 'HTML/CSS', icon: SiHtml5, level: 95, color: '#e34f26', category: 'Frontend' },
  { name: 'Node.js', icon: SiNodedotjs, level: 88, color: '#339933', category: 'Backend' },
  { name: 'Express.js', icon: SiExpress, level: 88, color: '#ffffff', category: 'Backend' },
  { name: 'Python', icon: SiPython, level: 80, color: '#3776ab', category: 'Backend' },
  { name: 'REST APIs', icon: Network as IconComponent, level: 92, color: '#a855f7', category: 'Backend' },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 82, color: '#4169e1', category: 'Database' },
  { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47a248', category: 'Database' },
  { name: 'AWS', icon: Cloud as IconComponent, level: 75, color: '#ff9900', category: 'Cloud' },
  { name: 'Docker', icon: SiDocker, level: 80, color: '#2496ed', category: 'DevOps' },
  { name: 'Git', icon: SiGit, level: 90, color: '#f05032', category: 'DevOps' },
]

const categories: { name: string; icon: IconComponent; color: string }[] = [
  { name: 'Frontend', icon: Cpu as IconComponent, color: '#61dafb' },
  { name: 'Backend', icon: Terminal as IconComponent, color: '#339933' },
  { name: 'Database', icon: Database as IconComponent, color: '#4169e1' },
  { name: 'Cloud', icon: Cloud as IconComponent, color: '#ff9900' },
  { name: 'DevOps', icon: Layers as IconComponent, color: '#2496ed' },
]

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className="glass-card p-4 group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -3 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
          >
            <skill.icon size={16} style={{ color: skill.color }} />
          </div>
          <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{skill.name}</span>
        </div>
        <span className="text-xs font-mono" style={{ color: 'var(--text-faint)' }}>{skill.level}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'color-mix(in srgb, var(--accent-primary) 10%, var(--bg-primary))' }}>
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
            boxShadow: `0 0 8px ${skill.color}60`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.05 + 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </motion.div>
  )
}

function CategoryBadge({
  category,
  icon: Icon,
  color,
}: {
  category: string
  icon: IconComponent
  color: string
}) {
  const skills_in_cat = skills.filter((s) => s.category === category)

  return (
    <motion.div
      className="glass-card p-5 text-center group cursor-default"
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <div
        className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
      >
        <Icon size={22} style={{ color }} />
      </div>
      <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-secondary)' }}>{category}</div>
      <div className="text-xs" style={{ color: 'var(--text-faint)' }}>{skills_in_cat.length} skills</div>
    </motion.div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Group skills by category
  const skillsByCategory = categories.map((cat) => ({
    ...cat,
    skills: skills.filter((s) => s.category === cat.name),
  }))

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Cpu size={14} />
              <span>Technical Skills</span>
            </div>
            <h2 className="section-title mb-4">
              My{' '}
              <span className="gradient-text">Tech Arsenal</span>
            </h2>
            <p className="section-subtitle">
              Tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          {/* Category overview */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {categories.map(({ name, icon, color }) => (
              <CategoryBadge key={name} category={name} icon={icon} color={color} />
            ))}
          </motion.div>

          {/* Skills by category */}
          <div className="space-y-10">
            {skillsByCategory.map(({ name, color, skills: catSkills }) => (
              <motion.div key={name} variants={itemVariants}>
                {/* Category label */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="h-px flex-1"
                    style={{
                      background: `linear-gradient(90deg, ${color}50, transparent)`,
                    }}
                  />
                  <span
                    className="text-xs font-mono font-medium px-3 py-1 rounded-full"
                    style={{
                      color,
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    {name}
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{
                      background: `linear-gradient(270deg, ${color}50, transparent)`,
                    }}
                  />
                </div>

                {/* Skills grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                  {catSkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech badge cloud */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="glass-card p-8 text-center">
              <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--text-secondary)' }}>Also experienced with</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  'Redux', 'Zustand', 'TailwindCSS', 'GraphQL', 'Jest', 'Vitest',
                  'Prisma', 'Socket.io', 'Redis', 'Linux', 'CI/CD', 'GitHub Actions',
                  'Webpack', 'Babel', 'SCSS', 'Storybook', 'Figma', 'Agile/Scrum',
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg glass cursor-default"
                    style={{ color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}
                    whileHover={{
                      scale: 1.05,
                      color: 'var(--accent-primary)',
                      borderColor: 'var(--border-hover)',
                      boxShadow: '0 0 15px var(--accent-glow)',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
