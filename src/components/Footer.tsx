
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-ai-gray py-8 text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Ganapathy<span className="text-ai-teal">KA</span></h2>
            <p className="text-gray-400 text-sm mt-1">AI Enthusiast & Developer</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#certifications" className="text-gray-300 hover:text-white transition-colors">Certifications</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ganapathy KA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
