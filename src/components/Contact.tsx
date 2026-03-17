import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Send,
  MapPin,
  Clock,
  Sparkles,
  Copy,
  Check,
} from 'lucide-react'

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@yourhandle',
    href: '#',
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.05)',
    description: 'Check out my code',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'in/yourprofile',
    href: '#',
    color: '#0077b5',
    bg: 'rgba(0, 119, 181, 0.1)',
    description: 'Connect professionally',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'brianmachiestay@example.com',
    href: 'mailto:brianmachiestay@example.com',
    color: '#ea4335',
    bg: 'rgba(234, 67, 53, 0.1)',
    description: 'Send me a message',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    handle: '@yourtwitter',
    href: '#',
    color: '#1da1f2',
    bg: 'rgba(29, 161, 242, 0.1)',
    description: 'Follow my thoughts',
  },
]

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Ghana, Africa',
    color: '#a855f7',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    color: '#06b6d4',
  },
  {
    icon: MessageSquare,
    label: 'Preferred Contact',
    value: 'Email or LinkedIn',
    color: '#3b82f6',
  },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('brianmachiestay@example.com').then(() => {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-pink-500/20 text-pink-400 text-sm font-medium mb-6">
              <MessageSquare size={14} />
              <span>Get In Touch</span>
            </div>
            <h2 className="section-title mb-4">
              Let's{' '}
              <span className="gradient-text">Work Together</span>
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--text-muted)' }}>
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </motion.div>

          {/* Main contact grid */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left - Contact info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Intro card */}
              <div className="glass-card p-8 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.2) 0%, transparent 60%)',
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/20 flex items-center justify-center">
                      <Sparkles size={22} className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>Open to Opportunities</h3>
                      <div className="flex items-center gap-1.5 text-xs text-green-400">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Available for new projects
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    Whether you're looking for a full-time engineer, a contractor for a specific
                    project, or just want to connect — don't hesitate to reach out. I respond to all
                    messages within 24 hours.
                  </p>
                </div>
              </div>

              {/* Contact info items */}
              <div className="space-y-3">
                {contactInfo.map(({ icon: Icon, label, value, color }) => (
                  <motion.div
                    key={label}
                    className="glass-card p-4 flex items-center gap-4"
                    whileHover={{ x: 4 }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                    >
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div>
                      <div className="text-xs" style={{ color: 'var(--text-faint)' }}>{label}</div>
                      <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Email with copy */}
              <div className="glass-card p-5 relative overflow-hidden">
                <div className="text-xs mb-2" style={{ color: 'var(--text-faint)' }}>Direct Email</div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>brianmachiestay@example.com</span>
                  <motion.button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                    style={{
                      background: copiedEmail ? 'rgba(16, 185, 129, 0.15)' : 'rgba(168, 85, 247, 0.1)',
                      color: copiedEmail ? '#10b981' : '#a855f7',
                      border: `1px solid ${copiedEmail ? 'rgba(16, 185, 129, 0.3)' : 'rgba(168, 85, 247, 0.2)'}`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={12} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        Copy
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right - Social links grid */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="text-sm font-medium mb-4" style={{ color: 'var(--text-muted)' }}>Connect with me on</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map(({ icon: Icon, label, handle, href, color, bg, description }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="glass-card p-5 flex flex-col gap-3 relative overflow-hidden group no-underline"
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {/* BG glow on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: bg }}
                    />

                    <div className="relative z-10 flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `${color}15`,
                          border: `1px solid ${color}30`,
                        }}
                      >
                        <Icon size={20} style={{ color }} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold transition-colors" style={{ color: 'var(--text-secondary)' }}>
                          {label}
                        </div>
                        <div className="text-xs font-mono" style={{ color: `${color}99` }}>
                          {handle}
                        </div>
                      </div>
                    </div>

                    <p className="relative z-10 text-xs transition-colors" style={{ color: 'var(--text-faint)' }}>
                      {description}
                    </p>

                    {/* Arrow indicator */}
                    <motion.div
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                    >
                      <Send size={14} style={{ color }} />
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <motion.a
                  href="mailto:brianmachiestay@example.com"
                  className="btn-primary flex-1 text-center justify-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Mail size={16} />
                  <span>Send Email</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="btn-secondary flex-1 text-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Linkedin size={16} />
                  <span>Connect on LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom banner */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass-card p-8 text-center relative overflow-hidden"
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at 50% 100%, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Ready to build something{' '}
                <span className="gradient-text">amazing</span>?
              </h3>
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                Let's turn your idea into a production-grade reality.
              </p>
              <motion.a
                href="mailto:brianmachiestay@example.com"
                className="btn-primary inline-flex mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles size={18} />
                <span>Start a Conversation</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
