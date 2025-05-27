
import React from 'react';
import { Code, Palette, Zap, Users, Lightbulb, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and applications built with modern technologies",
      icon: Code,
      features: ["React & Next.js", "Full-stack development", "Responsive design"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert and engage",
      icon: Palette,
      features: ["User research", "Prototyping", "Visual design"]
    },
    {
      title: "Performance Optimization",
      description: "Speed up your website and improve user experience",
      icon: Zap,
      features: ["Core Web Vitals", "SEO optimization", "Load time reduction"]
    },
    {
      title: "Consulting",
      description: "Strategic guidance for your digital transformation",
      icon: Users,
      features: ["Technical strategy", "Team mentoring", "Architecture review"]
    },
    {
      title: "Creative Solutions",
      description: "Innovative approaches to complex problems",
      icon: Lightbulb,
      features: ["Problem solving", "Innovation workshops", "Creative direction"]
    },
    {
      title: "Project Management",
      description: "End-to-end project delivery with clear communication",
      icon: Target,
      features: ["Agile methodology", "Timeline management", "Quality assurance"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
