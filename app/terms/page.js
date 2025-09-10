import SectionWrapper from '@/components/SectionWrapper'
import AnimatedHeading from '@/components/AnimatedHeading'

export const metadata = {
  title: 'Terms of Service - Shibam Banerjee',
  description: 'Terms of Service for Shibam Banerjee\'s portfolio website and services.',
}

export default function Terms() {
  return (
    <div>
      <SectionWrapper className="bg-cyber-bg pt-14 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedHeading 
            text="Terms of Service" 
            className="text-4xl md:text-6xl mb-8 text-center"
            gradient={true}
          />
          
          <div className="glass-card p-8 rounded-2xl space-y-8 text-text-light/90">
            <div className="text-center mb-8">
              <p className="text-lg text-text-light/70">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-blue mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using this portfolio website (&quot;shibam.dev&quot;), you accept and agree to be bound by the terms and provision of this agreement. 
                This website is owned and operated by Shibam Banerjee, a Frontend Web Developer based in Kolkata, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-blue mb-4">2. Use License</h2>
              <p className="leading-relaxed mb-4">
                Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Viewing portfolio projects and case studies</li>
                <li>Reading blog articles and technical content</li>
                <li>Contacting for professional inquiries</li>
                <li>Downloading publicly available resources</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-blue mb-4">3. Professional Services</h2>
              <p className="leading-relaxed mb-4">
                When engaging my services for web development projects, the following terms apply:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All project requirements must be clearly defined before work begins</li>
                <li>Payment terms will be agreed upon before project commencement</li>
                <li>Source code ownership transfers upon full payment completion</li>
                <li>Revisions are limited as per project agreement</li>
                <li>Timeline estimates are approximate and subject to scope changes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-blue mb-4">4. Intellectual Property</h2>
              <p className="leading-relaxed">
                The content, design, and code on this website are protected by copyright and other intellectual property laws. 
                Portfolio projects showcase my work and may contain proprietary client information used with permission. 
                You may not reproduce, distribute, or create derivative works without explicit written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-blue mb-4">5. Contact and Communication</h2>
              <p className="leading-relaxed mb-4">
                Professional communication channels include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email: connect-with-shibam@outlook.com</li>
                <li>Phone: +91 62902-18960</li>
                <li>LinkedIn: linkedin.com/in/shibam-webdev</li>
                <li>Contact form submissions through this website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-blue mb-4">6. Disclaimer</h2>
              <p className="leading-relaxed">
                The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, 
                I exclude all representations, warranties, and conditions relating to this website and its use. 
                Portfolio examples are for demonstration purposes and results may vary for different projects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-blue mb-4">7. Limitations</h2>
              <p className="leading-relaxed">
                In no event shall Shibam Banerjee or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
                the materials on this website, even if authorized representative has been notified orally or in writing of the 
                possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-blue mb-4">8. Governing Law</h2>
              <p className="leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India, 
                and you irrevocably submit to the exclusive jurisdiction of the courts in Kolkata, West Bengal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-blue mb-4">9. Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Service, please contact me at:
              </p>
              <div className="mt-4 p-4 bg-neon-blue/10 rounded-lg border border-neon-blue/30">
                <p className="font-medium text-white">Shibam Banerjee</p>
                <p>Frontend Web Developer</p>
                <p>Kolkata, India</p>
                <p className="text-neon-blue">connect-with-shibam@outlook.com</p>
              </div>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
