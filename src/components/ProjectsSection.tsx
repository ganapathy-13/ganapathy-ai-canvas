
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'kids Learning app',
      description: 'A deep learning model that generates unique images based on text prompts using GAN architecture.',
      techStack: ['Python', 'TensorFlow', 'Flask', 'React'],
      githubLink: '#',
      demoLink: '#',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
    },
    {
      title: 'Sentiment Analysis Tool',
      description: 'An NLP-based tool that analyzes text to determine sentiment and emotional tone in customer feedback.',
      techStack: ['Python', 'NLTK', 'Scikit-learn', 'Flask'],
      githubLink: '#',
      demoLink: '#',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80'
    },
    {
      title: 'Personal Finance Dashboard',
      description: 'A dashboard to track expenses, income, and financial goals with data visualization and insights.',
      techStack: ['JavaScript', 'React', 'D3.js', 'Firebase'],
      githubLink: '#',
      demoLink: '#',
      imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80'
    },
    {
      title: 'Smart Home Controller',
      description: 'IoT application that integrates with smart home devices for centralized control and automation.',
      techStack: ['Python', 'Node.js', 'MQTT', 'React Native'],
      githubLink: '#',
      demoLink: '#',
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="container-custom">
        <h2 className="section-title">My Projects</h2>
        <p className="mb-12 text-gray-600 max-w-2xl">
          Here are some of the projects I've worked on that showcase my skills and interests in AI and technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="project-card overflow-hidden border border-gray-200">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-700"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map(tech => (
                    <Badge key={tech} variant="outline" className="bg-blue-50 text-ai-blue border-blue-200">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Github size={16} />
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Code</a>
                </Button>
                <Button variant="default" size="sm" className="bg-ai-teal hover:bg-ai-teal/90 flex items-center gap-1">
                  <ExternalLink size={16} />
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
