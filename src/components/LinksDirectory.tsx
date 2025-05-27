
import React from 'react';
import { ExternalLink, Github, Twitter, Instagram, Linkedin, Mail, Globe } from 'lucide-react';

const LinksDirectory = () => {
  const links = [
    {
      title: "Portfolio",
      description: "View my latest work and projects",
      url: "#",
      icon: Globe,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "GitHub",
      description: "Explore my code repositories",
      url: "#",
      icon: Github,
      color: "from-gray-700 to-gray-900"
    },
    {
      title: "Twitter",
      description: "Follow my thoughts and updates",
      url: "#",
      icon: Twitter,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "LinkedIn",
      description: "Connect professionally",
      url: "#",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Instagram",
      description: "See my visual journey",
      url: "#",
      icon: Instagram,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Email",
      description: "Get in touch directly",
      url: "mailto:your@email.com",
      icon: Mail,
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Connect With Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find me across the digital landscape and let's start a conversation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {links.map((link, index) => (
            <a
              key={link.title}
              href={link.url}
              className="group block p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h3>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksDirectory;
