
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 md:pt-32 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ai-gray">
              Hi, I'm <span className="text-ai-teal">Ganapathy KA</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-ai-gray/80">
              AI Enthusiast
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              I'm a passionate and curious individual with a love for technology, learning, and building meaningful projects. I enjoy solving real-world problems through code and continuously exploring new ideas to grow both personally and professionally.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild className="bg-ai-teal hover:bg-ai-blue text-white transition-all">
                <a href="#projects">
                  View Projects 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-ai-teal text-ai-teal hover:bg-ai-teal/10">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-end animate-fade-left">
            <div className="relative">
              <div className="absolute inset-0 bg-ai-teal/20 rounded-full blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-ai-teal/80 to-blue-500/80 w-80 h-80 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">GA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
