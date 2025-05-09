
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  const contactLinks = [
    {
      name: 'GitHub',
      icon: Github,
      link: 'https://github.com/ganapathy-13',
      color: 'bg-gray-900 hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      link: 'https://linkedin.com/in/ganapathy',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Email',
      icon: Mail,
      link: 'ganapathyk2004@gmail.com',
      color: 'bg-red-500 hover:bg-red-600'
    }
  ];

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="container-custom">
        <h2 className="section-title">Get In Touch</h2>
        <p className="mb-12 text-gray-600 max-w-2xl">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Feel free to reach out to me through any of the following channels:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contactLinks.map((contact) => (
            <Card key={contact.name} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <a 
                  href={contact.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 py-6 text-white ${contact.color} transition-all duration-300`}
                >
                  <contact.icon className="w-6 h-6" />
                  <span className="font-medium">{contact.name}</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Interested in working together? Let's talk about your project!
          </p>
          <Button asChild className="bg-ai-teal hover:bg-ai-blue text-white transition-all">
            <a href="mailto:yourname@example.com">Start a Conversation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
