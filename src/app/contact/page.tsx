import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-accent-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              I'm always interested in discussing research collaborations, 
              scientific opportunities, and innovative projects in molecular biology.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-background p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-text-primary mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                      <p className="text-text-secondary">sinan.baykara@email.com</p>
                      <p className="text-text-secondary">research.collaboration@email.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Location</h4>
                      <p className="text-text-secondary">Istanbul, Turkey</p>
                      <p className="text-text-secondary">Available for remote collaboration</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Response Time</h4>
                      <p className="text-text-secondary">Usually within 24 hours</p>
                      <p className="text-text-secondary">Monday - Friday</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-background p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-text-primary mb-6">Connect With Me</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <span className="text-text-primary font-medium">LinkedIn</span>
                  </a>

                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 3.461-2.1 4.667-1.204 1.204-2.809 1.931-4.667 2.1-1.858.169-3.716.169-5.574 0-1.858-.169-3.463-.896-4.667-2.1-1.204-1.204-1.931-2.809-2.1-4.667-.169-1.858-.169-3.716 0-5.574.169-1.858.896-3.463 2.1-4.667 1.204-1.204 2.809-1.931 4.667-2.1 1.858-.169 3.716-.169 5.574 0 1.858.169 3.463.896 4.667 2.1 1.204 1.204 1.931 2.809 2.1 4.667.169 1.858.169 3.716 0 5.574z"/>
                      </svg>
                    </div>
                    <span className="text-text-primary font-medium">ResearchGate</span>
                  </a>

                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 3.461-2.1 4.667-1.204 1.204-2.809 1.931-4.667 2.1-1.858.169-3.716.169-5.574 0-1.858-.169-3.463-.896-4.667-2.1-1.204-1.204-1.931-2.809-2.1-4.667-.169-1.858-.169-3.716 0-5.574.169-1.858.896-3.463 2.1-4.667 1.204-1.204 2.809-1.931 4.667-2.1 1.858-.169 3.716-.169 5.574 0 1.858.169 3.463.896 4.667 2.1 1.204 1.204 1.931 2.809 2.1 4.667.169 1.858.169 3.716 0 5.574z"/>
                      </svg>
                    </div>
                    <span className="text-text-primary font-medium">Google Scholar</span>
                  </a>

                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 3.461-2.1 4.667-1.204 1.204-2.809 1.931-4.667 2.1-1.858.169-3.716.169-5.574 0-1.858-.169-3.463-.896-4.667-2.1-1.204-1.204-1.931-2.809-2.1-4.667-.169-1.858-.169-3.716 0-5.574.169-1.858.896-3.463 2.1-4.667 1.204-1.204 2.809-1.931 4.667-2.1 1.858-.169 3.716-.169 5.574 0 1.858.169 3.463.896 4.667 2.1 1.204 1.204 1.931 2.809 2.1 4.667.169 1.858.169 3.716 0 5.574z"/>
                      </svg>
                    </div>
                    <span className="text-text-primary font-medium">GitHub</span>
                  </a>
                </div>
              </div>

              {/* Collaboration Interests */}
              <div className="bg-gradient-to-br from-primary-green to-secondary-green text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Collaboration Interests</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="opacity-90">Cancer research and therapeutic development</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="opacity-90">Nutraceutical and bioactive compound studies</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="opacity-90">Molecular biology technique development</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="opacity-90">Academic and industry partnerships</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="opacity-90">International research collaborations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Common questions about collaboration and research opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                What types of collaborations are you interested in?
              </h3>
              <p className="text-text-secondary">
                I'm open to various types of collaborations including joint research projects, 
                academic partnerships, industry collaborations, and international research initiatives 
                focused on molecular biology and cancer research.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                How quickly do you typically respond to inquiries?
              </h3>
              <p className="text-text-secondary">
                I aim to respond to all inquiries within 24 hours during weekdays. For urgent 
                matters or time-sensitive opportunities, please mention this in your message.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Do you offer consulting services?
              </h3>
              <p className="text-text-secondary">
                Yes, I provide consulting services in molecular biology, research methodology, 
                and experimental design. Please contact me to discuss your specific needs and requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Are you available for speaking engagements?
              </h3>
              <p className="text-text-secondary">
                I'm available for speaking engagements, workshops, and presentations on molecular 
                biology, cancer research, and hazelnut-derived compounds. Please reach out to discuss details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
