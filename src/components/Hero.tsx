
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Dave Hannes
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="#" 
            className="text-lg hover:text-gray-300 transition-colors underline decoration-2 underline-offset-4"
          >
            Portfolio
          </a>
          <a 
            href="#" 
            className="text-lg hover:text-gray-300 transition-colors underline decoration-2 underline-offset-4"
          >
            GitHub
          </a>
          <a 
            href="#" 
            className="text-lg hover:text-gray-300 transition-colors underline decoration-2 underline-offset-4"
          >
            Twitter
          </a>
          <a 
            href="mailto:your@email.com" 
            className="text-lg hover:text-gray-300 transition-colors underline decoration-2 underline-offset-4"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
