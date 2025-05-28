
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl mb-8">
          Dave Hannes
        </h1>
      </div>
      
      <div className="fixed bottom-8 right-8">
        <div className="flex flex-col gap-4 text-right">
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
            href="mailto:mail@davehannes.com" 
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
