import Image from 'next/image'
import SectionWrapper from '@/components/SectionWrapper'
import AnimatedHeading from '@/components/AnimatedHeading'
import SkillsGrid from '@/components/SkillsGrid'
import { skills, education, experience } from '@/data/skills'

export const metadata = {
  title: 'About Me',
  description: 'Learn more about Shibam Banerjee - Frontend Web Developer, MCA & BCA Graduate from Kolkata, India.',
}

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <SectionWrapper className="bg-cyber-bg pt-14 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div>
              <AnimatedHeading 
                text="About Me" 
                className="text-4xl md:text-6xl mb-6"
                gradient={true}
              />
              <div className="space-y-6 text-lg text-text-light/80 font-handwriting">
                <p>
                  Hi! I&apos;m <span className="text-neon-blue font-semibold">Shibam Banerjee </span>, 
                  an aspiring Frontend Developer with a passion for creating clean, responsive, 
                  and user-friendly web experiences.
                </p>
                <p>
                  With a <span className="text-neon-purple font-semibold">Master&apos;s in Computer Applications (MCA) </span> 
                  completed in 2022 and a <span className="text-neon-pink font-semibold">Bachelor&apos;s in Computer Applications (BCA) </span> 
                  from 2017, I have built a strong foundation in computer science and software development.
                </p>
                <p>
                  I specialize in <span className="text-neon-blue font-semibold">HTML5, CSS3, JavaScript</span>, 
                  and modern frameworks. My experience includes working with 
                  <span className="text-neon-purple font-semibold"> Bootstrap, WordPress, React</span>, 
                  and various development tools that help me build scalable and maintainable web applications.
                </p>
                <p>
                  I&apos;m a fast learner, highly adaptable, and love collaborating with teams to bring 
                  innovative ideas to life. When I&apos;m not coding, you&apos;ll find me exploring new 
                  technologies and staying updated with the latest web development trends.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end items-center h-full">
              <div className="relative">
                <div className="w-80 h-80 glass-card rounded-2xl overflow-hidden neon-glow-blue">
                  <Image
                    src="/profile-picture.png"
                    alt="Shibam Banerjee"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    style={{ objectPosition: '50% 30%' }}
                    priority
                  />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-6 -right-8 glass-card p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-neon-blue">5+</div>
                  <div className="text-sm text-text-light/80">Years Learning</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-neon-purple">10+</div>
                  <div className="text-sm text-text-light/80">Projects Built</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper className="bg-gradient-to-br from-cyber-bg to-cyber-bg/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedHeading 
              text="Technical Skills" 
              className="text-4xl md:text-5xl mb-4"
              gradient={true}
            />
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              Here&apos;s a comprehensive overview of my technical skills and proficiency levels 
              across different technologies and tools.
            </p>
          </div>

          <div className="space-y-12">
            <SkillsGrid skills={skills.frontend} title="Frontend Technologies" />
            <SkillsGrid skills={skills.cms} title="Content Management Systems" />
            <SkillsGrid skills={skills.tools} title="Development Tools" />
            <SkillsGrid skills={skills.concepts} title="Concepts & Best Practices" />
            <SkillsGrid skills={skills.soft} title="Soft Skills" />
          </div>
        </div>
      </SectionWrapper>

      {/* Education & Experience Section */}
      <SectionWrapper className="bg-cyber-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <AnimatedHeading 
                text="Education" 
                className="text-3xl md:text-4xl mb-8"
                gradient={true}
              />
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-neon rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-poppins font-semibold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-neon-blue font-medium mb-1">{edu.institution}</p>
                        <p className="text-text-light/60 text-sm mb-2">{edu.duration} • {edu.location}</p>
                        <p className="text-text-light/80">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <AnimatedHeading 
                text="Experience" 
                className="text-3xl md:text-4xl mb-8"
                gradient={true}
              />
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl">
                    <div className="mb-4">
                      <h3 className="text-xl font-poppins font-semibold text-white mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-neon-purple font-medium mb-1">{exp.company}</p>
                      <p className="text-text-light/60 text-sm mb-4">{exp.duration} • {exp.location}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-medium text-white mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-text-light/80">
                            <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-neon/10 border border-neon-blue/30 text-neon-blue text-sm rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Personal Interests */}
      <SectionWrapper className="bg-gradient-to-br from-neon-blue/5 via-neon-purple/5 to-neon-pink/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHeading 
            text="Beyond Coding" 
            className="text-3xl md:text-4xl mb-8"
            gradient={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">Continuous Learning</h3>
              <p className="text-text-light/80">
                Always exploring new technologies and staying updated with the latest web development trends.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-2">Problem Solving</h3>
              <p className="text-text-light/80">
                Passionate about solving complex problems and finding elegant solutions to technical challenges.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-white mb-2">Collaboration</h3>
              <p className="text-text-light/80">
                Love working with teams and contributing to open-source projects in the developer community.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
