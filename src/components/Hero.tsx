'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-white to-accent-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-green to-secondary-green flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              SB
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Sinan Baykara
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-secondary-green mb-8 font-medium">
            Molecular Biologist & Research Scientist
          </h2>

          {/* Description */}
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about advancing our understanding of molecular mechanisms in biological systems. 
            Dedicated to innovative research that bridges the gap between fundamental science and 
            practical applications in biotechnology and medicine.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/about"
              className="bg-primary-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-green transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More About Me
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary-green text-primary-green px-8 py-3 rounded-lg font-semibold hover:bg-primary-green hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-green mb-2">5+</div>
              <div className="text-text-secondary">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-green mb-2">15+</div>
              <div className="text-text-secondary">Research Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-green mb-2">3</div>
              <div className="text-text-secondary">Publications</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-green"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
