import React from 'react';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

const ResumeSection: React.FC = () => {
  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent actual download for now
    alert('The resume will be uploaded soon.');
  };

  return (
    <section id="resume" className="bg-ai-teal text-white py-20">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Know More About Me?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Download my resume to learn more about my educational background 
          and the projects I've worked on.
        </p>
        <Button 
          asChild
          variant="outline" 
          size="lg" 
          className="bg-white text-ai-teal hover:bg-white/90 border-white"
        >
          <a href="#" onClick={handleDownloadClick} className="flex items-center gap-2">
            <FileDown className="w-5 h-5" />
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ResumeSection;
