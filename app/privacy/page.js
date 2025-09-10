import SectionWrapper from '@/components/SectionWrapper'
import AnimatedHeading from '@/components/AnimatedHeading'

export const metadata = {
  title: 'Privacy Policy - Shibam Banerjee',
  description: 'Privacy Policy for Shibam Banerjee\'s portfolio website and data handling practices.',
}

export default function Privacy() {
  return (
    <div>
      <SectionWrapper className="bg-cyber-bg pt-14 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedHeading 
            text="Privacy Policy" 
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
              <h2 className="text-2xl font-poppins font-semibold text-neon-purple mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                When you visit this portfolio website or contact me for professional services, I may collect the following information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Contact Information:</strong> Name, email address, phone number when you reach out</li>
                <li><strong>Project Details:</strong> Information about your project requirements and business needs</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information for website analytics</li>
                <li><strong>Communication Records:</strong> Messages sent through contact forms or email correspondence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-purple mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                Your information is used solely for professional purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responding to your inquiries and project requests</li>
                <li>Providing web development services and support</li>
                <li>Improving website functionality and user experience</li>
                <li>Sending project updates and professional communications</li>
                <li>Maintaining records for business and legal purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-purple mb-4">3. Data Protection</h2>
              <p className="leading-relaxed mb-4">
                I am committed to protecting your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All data is stored securely using industry-standard practices</li>
                <li>Access to personal information is limited to necessary business purposes</li>
                <li>No personal data is sold, rented, or shared with third parties</li>
                <li>SSL encryption protects data transmission on this website</li>
                <li>Regular security updates and monitoring are maintained</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-purple mb-4">4. Cookies and Analytics</h2>
              <p className="leading-relaxed mb-4">
                This website uses minimal tracking for improvement purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Essential cookies for website functionality</li>
                <li>Anonymous analytics to understand visitor behavior</li>
                <li>No personal identification through cookies</li>
                <li>You can disable cookies through your browser settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-purple mb-4">5. Third-Party Services</h2>
              <p className="leading-relaxed mb-4">
                This website may integrate with professional services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Email Services:</strong> For contact form submissions and communication</li>
                <li><strong>Hosting Providers:</strong> For website hosting and performance</li>
                <li><strong>Analytics Tools:</strong> For website usage insights (anonymized)</li>
                <li><strong>Social Media:</strong> Links to professional profiles (LinkedIn, GitHub)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                These services have their own privacy policies and data handling practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-purple mb-4">6. Your Rights</h2>
              <p className="leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request information about data I hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Request transfer of your data in a readable format</li>
                <li><strong>Objection:</strong> Object to processing of your personal data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-purple mb-4">7. Data Retention</h2>
              <p className="leading-relaxed">
                Personal data is retained only as long as necessary for the purposes outlined in this policy. 
                Project-related communications are typically kept for 3 years for business records. 
                You may request earlier deletion of your data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-purple mb-4">8. International Transfers</h2>
              <p className="leading-relaxed">
                As an India-based freelancer, your data is primarily processed within India. 
                Some third-party services (hosting, email) may process data internationally, 
                but only with appropriate safeguards and privacy protections in place.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-purple mb-4">9. Children&apos;s Privacy</h2>
              <p className="leading-relaxed">
                This website and services are intended for professional use and are not directed at children under 13. 
                I do not knowingly collect personal information from children under 13 years of age.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-purple mb-4">10. Updates to This Policy</h2>
              <p className="leading-relaxed">
                This Privacy Policy may be updated periodically to reflect changes in practices or legal requirements. 
                The &quot;Last updated&quot; date at the top indicates when changes were last made. 
                Continued use of this website constitutes acceptance of any updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-neon-purple mb-4">11. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                For any questions about this Privacy Policy or to exercise your data rights, please contact:
              </p>
              <div className="mt-4 p-4 bg-neon-purple/10 rounded-lg border border-neon-purple/30">
                <p className="font-medium text-white">Shibam Banerjee</p>
                <p>Frontend Web Developer</p>
                <p>Kolkata, West Bengal, India</p>
                <p className="text-neon-purple">connect-with-shibam@outlook.com</p>
                <p>Phone: +91 62902-18960</p>
              </div>
              <p className="leading-relaxed mt-4 text-sm text-text-light/70">
                I will respond to your privacy-related inquiries within 30 days of receipt.
              </p>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
