import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-accent-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              About Me
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Passionate molecular biologist dedicated to advancing cancer research 
              through innovative approaches and groundbreaking discoveries.
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary-green to-secondary-green rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  SB
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-green rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Biography Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                My Journey in Molecular Biology
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  As a distinguished graduate of Istanbul University, I have dedicated my career to 
                  advancing the frontiers of molecular biology and cancer research. My academic journey 
                  has been marked by a relentless pursuit of scientific excellence and a deep commitment 
                  to finding innovative solutions to complex biological challenges.
                </p>
                <p>
                  During my time at Istanbul University, I gained extensive laboratory experience through 
                  intensive internships and research projects. This hands-on experience provided me with 
                  a solid foundation in cutting-edge molecular techniques, from advanced microscopy to 
                  sophisticated biochemical assays.
                </p>
                <p>
                  My research has been particularly focused on exploring the remarkable anti-cancer 
                  properties of hazelnuts and their bioactive compounds. Through rigorous laboratory 
                  investigations, I have uncovered promising mechanisms by which hazelnut-derived 
                  compounds can effectively combat cancer cells, opening new avenues for therapeutic 
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Education & Experience
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              A timeline of my academic achievements and professional milestones
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-green"></div>
            
            <div className="space-y-12">
              {/* Istanbul University */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Bachelor's Degree in Molecular Biology
                    </h3>
                    <p className="text-secondary-green font-medium mb-2">Istanbul University</p>
                    <p className="text-text-secondary">
                      Graduated with distinction, specializing in cancer biology and molecular mechanisms. 
                      Completed extensive laboratory internships focusing on advanced research techniques 
                      and experimental design.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-green rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 pl-8">
                  <div className="text-text-secondary">
                    <p className="font-semibold">2018 - 2022</p>
                  </div>
                </div>
              </div>

              {/* Laboratory Internship */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="text-text-secondary">
                    <p className="font-semibold">2021 - 2022</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary-green rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Advanced Laboratory Internship
                    </h3>
                    <p className="text-secondary-green font-medium mb-2">Istanbul University Research Labs</p>
                    <p className="text-text-secondary">
                      Gained hands-on experience with cutting-edge molecular biology techniques including 
                      PCR, Western blotting, cell culture, and fluorescence microscopy. Developed expertise 
                      in experimental design and data analysis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hazelnut Research */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Hazelnut Anti-Cancer Research
                    </h3>
                    <p className="text-secondary-green font-medium mb-2">Independent Research Project</p>
                    <p className="text-text-secondary">
                      Pioneered groundbreaking research on hazelnut-derived compounds and their potential 
                      anti-cancer properties. Investigated molecular mechanisms underlying the therapeutic 
                      effects of bioactive compounds found in hazelnuts.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-green rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 pl-8">
                  <div className="text-text-secondary">
                    <p className="font-semibold">2022 - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Comprehensive expertise in molecular biology techniques and research methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="bg-background p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Laboratory Techniques</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• PCR & qPCR Analysis</li>
                <li>• Western Blotting</li>
                <li>• Cell Culture & Maintenance</li>
                <li>• Fluorescence Microscopy</li>
                <li>• Protein Purification</li>
                <li>• Enzyme Assays</li>
              </ul>
            </div>

            {/* Research Skills */}
            <div className="bg-background p-6 rounded-lg">
              <div className="w-12 h-12 bg-secondary-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Research Methodology</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Experimental Design</li>
                <li>• Data Analysis & Statistics</li>
                <li>• Literature Review</li>
                <li>• Scientific Writing</li>
                <li>• Grant Proposal Writing</li>
                <li>• Research Presentation</li>
              </ul>
            </div>

            {/* Specialized Knowledge */}
            <div className="bg-background p-6 rounded-lg">
              <div className="w-12 h-12 bg-accent-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Specialized Knowledge</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Cancer Biology</li>
                <li>• Nutraceutical Research</li>
                <li>• Molecular Mechanisms</li>
                <li>• Bioactive Compounds</li>
                <li>• Therapeutic Development</li>
                <li>• Drug Discovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="py-20 bg-gradient-to-br from-primary-green to-secondary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Current Research Focus
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Pioneering research on natural compounds and their potential in cancer therapy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Hazelnut-Derived Anti-Cancer Compounds
              </h3>
              <div className="space-y-4 opacity-90">
                <p>
                  My current research focuses on identifying and characterizing bioactive compounds 
                  in hazelnuts that demonstrate significant anti-cancer properties. Through systematic 
                  analysis, I have identified several promising compounds that show remarkable efficacy 
                  against various cancer cell lines.
                </p>
                <p>
                  The research involves comprehensive molecular characterization, including 
                  mechanism of action studies, dose-response analysis, and potential therapeutic 
                  applications. This work has the potential to revolutionize cancer treatment 
                  approaches through natural, sustainable solutions.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="opacity-90">Research Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="opacity-90">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="opacity-90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="opacity-90">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
