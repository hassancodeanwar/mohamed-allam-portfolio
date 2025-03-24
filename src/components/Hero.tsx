import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { heroData } from '../data/hero';

export function Hero() {
  const scrollToContent = () => {
    const experienceSection = document.getElementById('experience');
    experienceSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="min-h-screen bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-400/5 backdrop-blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-blue-500/10 dark:via-blue-400/5 dark:to-blue-400/10"></div>
      </div>
      
      <div className="relative min-h-screen container mx-auto px-6 py-20 flex items-center justify-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 text-center md:text-left space-y-8">
            <div className="inline-block px-6 py-2 bg-blue-500/10 dark:bg-blue-400/10 rounded-full text-blue-600 dark:text-blue-400 mb-4">
              {heroData.title}
            </div>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-blue-600 to-blue-400 dark:from-white dark:via-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              {heroData.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              {heroData.tagline}
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a 
                href={heroData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-500/10 dark:bg-blue-400/10 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href={heroData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-500/10 dark:bg-blue-400/10 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${heroData.socialLinks.email}`}
                className="p-3 bg-blue-500/10 dark:bg-blue-400/10 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 rounded-full blur-3xl opacity-20"></div>
              <img 
                src={heroData.image}
                alt={heroData.name}
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500/30 dark:border-blue-400/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        {/* <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 bg-blue-500/10 dark:bg-blue-400/10 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-colors"
          aria-label="Scroll to content"
        >
          <ChevronDown size={24} className="animate-bounce" />
        </button> */}
      </div>
    </header>
  );
}