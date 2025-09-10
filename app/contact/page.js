import SectionWrapper from '@/components/SectionWrapper'
import AnimatedHeading from '@/components/AnimatedHeading'
import ContactForm from '@/components/ContactForm'
import Accordion from '@/components/Accordion'

export const metadata = {
  title: 'Contact Me',
  description: 'Get in touch with Shibam Banerjee for web development projects, collaborations, or any inquiries.',
}

export default function Contact() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'Connect-With-Shibam@outlook.com',
      href: 'mailto:Connect-With-Shibam@outlook.com',
      color: 'neon-blue'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '+91 62902-18960',
      href: 'tel:+916290218960',
      color: 'neon-purple'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      value: 'linkedin.com/in/shibam-webdev',
      href: 'https://linkedin.com/in/shibam-webdev',
      color: 'neon-pink'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      value: 'github.com/Shibam-Code-Pro',
      href: 'https://github.com/Shibam-Code-Pro',
      color: 'neon-blue'
    }
  ]

  return (
    <div>
      {/* Header Section */}
      <SectionWrapper className="bg-cyber-bg pt-14 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedHeading 
              text="Get In Touch" 
              className="text-4xl md:text-6xl mb-6"
              gradient={true}
            />
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              Ready to start your next project? I&apos;d love to hear from you. 
              Send me a message and I&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-poppins font-semibold text-white mb-6">
                Send me a message
              </h2>
              <div className="flex-1">
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-poppins font-semibold text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6 flex-1">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 glass-card p-6 rounded-xl hover:neon-glow-blue transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-${method.color}/20 rounded-lg flex items-center justify-center text-${method.color} group-hover:neon-glow-${method.color} transition-all duration-300`}>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-white group-hover:text-neon-blue transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-text-light/80">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className="glass-card p-6 rounded-xl mt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center text-neon-purple">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Location</h3>
                    <p className="text-text-light/80">Kolkata, India</p>
                  </div>
                </div>
                <p className="text-text-light/60 text-sm">
                  Available for remote work and local collaborations. 
                  Open to discussing project requirements and timelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="bg-gradient-to-br from-cyber-bg to-cyber-bg/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedHeading 
              text="Frequently Asked Questions" 
              className="text-3xl md:text-4xl mb-4"
              gradient={true}
            />
          </div>

          <Accordion 
            items={[
              {
                question: "What services do you offer?",
                answer: "I specialize in frontend web development, including responsive website design, HTML/CSS/JavaScript development, React applications, WordPress customization, and UI/UX implementation."
              },
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity and requirements. Simple websites typically take 1-2 weeks, while more complex applications can take 4-8 weeks. I'll provide a detailed timeline after discussing your specific needs."
              },
              {
                question: "Do you work with existing teams?",
                answer: "Absolutely! I enjoy collaborating with teams and can adapt to existing workflows, tools, and methodologies. I'm experienced with Git, Agile development, and various project management tools."
              },
              {
                question: "What's your preferred way to communicate?",
                answer: "I'm flexible with communication methods. Email works great for detailed discussions, while video calls are perfect for project kickoffs and regular check-ins. I'm also available via LinkedIn and phone for urgent matters."
              }
            ]}
          />
        </div>
      </SectionWrapper>
    </div>
  )
}
