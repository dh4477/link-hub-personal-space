
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-2xl font-bold text-gray-800">
                YN
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in animation-delay-200">
            Your Name
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-200 mb-8 font-light animate-fade-in animation-delay-400">
            Creator • Developer • Innovator
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-600">
            Welcome to my digital space. I create beautiful experiences, build meaningful connections, 
            and share knowledge that matters. Explore my work and let's connect.
          </p>

          {/* Scroll indicator */}
          <div className="animate-bounce animate-fade-in animation-delay-800">
            <ArrowDown className="w-6 h-6 text-blue-300 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
