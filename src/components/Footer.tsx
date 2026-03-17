import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Code2, Heart, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub', color: '#ffffff' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0077b5' },
  { icon: Mail, href: 'mailto:brianmachiestay@example.com', label: 'Email', color: '#ea4335' },
  { icon: Twitter, href: '#', label: 'Twitter', color: '#1da1f2' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'var(--divider)' }}
      />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, var(--blob1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 mb-4 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg">
                <span className="gradient-text">BM</span>
                <span className="font-mono text-sm ml-1" style={{ color: 'var(--text-faint)' }}>.dev</span>
              </span>
            </motion.button>
            <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: 'var(--text-faint)' }}>
              Software Engineer crafting scalable digital experiences. Currently at MTN, building
              tech that powers Africa.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center transition-all duration-300"
                  style={{ color: 'var(--text-faint)', border: '1px solid var(--border-color)' }}
                  whileHover={{
                    scale: 1.15,
                    color: color,
                    borderColor: color + '50',
                    backgroundColor: color + '10',
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <motion.button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    style={{ color: 'var(--text-faint)' }}
                    whileHover={{ x: 4, color: 'var(--accent-primary)' }}
                  >
                    <span
                      className="w-1 h-1 rounded-full transition-colors"
                      style={{ background: 'var(--text-faint)' }}
                    />
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack / stats */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
              Quick Stats
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Years of Experience', value: '5+' },
                { label: 'Companies Worked', value: '6' },
                { label: 'Projects Shipped', value: '20+' },
                { label: 'Certifications', value: '3' },
                { label: 'Countries', value: '3' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between text-sm">
                  <span style={{ color: 'var(--text-faint)' }}>{label}</span>
                  <span className="font-semibold font-mono" style={{ color: 'var(--accent-primary)' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--text-faint)' }}>
            Built with{' '}
            <Heart size={12} className="text-red-500 fill-red-500" />{' '}
            using{' '}
            <span style={{ color: 'var(--accent-primary)' }}>React</span>,{' '}
            <span style={{ color: 'var(--accent-secondary)' }}>TypeScript</span> &{' '}
            <span style={{ color: 'var(--gradient-text-mid)' }}>Framer Motion</span>
          </p>

          <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
            &copy; {new Date().getFullYear()} Brian Machiestay. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg glass flex items-center justify-center transition-all duration-300"
            style={{ color: 'var(--text-faint)', border: '1px solid var(--border-color)' }}
            aria-label="Back to top"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
