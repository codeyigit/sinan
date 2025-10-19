import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Additional sections can be added here */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Research Focus Areas
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              My research spans multiple areas of molecular biology, focusing on 
              understanding fundamental biological processes and their applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-background hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Protein Biochemistry
              </h3>
              <p className="text-text-secondary">
                Studying protein structure, function, and interactions in cellular processes.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-background hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Cell Biology
              </h3>
              <p className="text-text-secondary">
                Investigating cellular mechanisms and signaling pathways in health and disease.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-background hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Molecular Genetics
              </h3>
              <p className="text-text-secondary">
                Exploring genetic mechanisms and their role in biological processes and evolution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
