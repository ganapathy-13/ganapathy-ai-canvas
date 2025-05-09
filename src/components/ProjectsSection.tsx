
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'kids Learning app',
      description: 'Developed an interactive learning app for kindergarten students using Python (Pandas, NumPy, Matplotlib, Tkinter), MySQL, and VS Code. The project focused on learning GUI concepts and database integration.',
      techStack: ['Python', 'TKinter', 'MySQL', 'VS Code'],
      githubLink: 'https://github.com/ganapathy-13/demo-kids-app-python-',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
    },
    {
      title: 'Voice-up App',
      description: 'A web app for citizens to file and track complaints, with AI-powered features for chat support and complaint categorization. It includes user authentication, complaint prioritization, status tracking, and an admin dashboard. ',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      githubLink: '',
      imageUrl: 'https://blog.ipleaders.in/wp-content/uploads/2020/10/Right-to-Information-Act-2005-1.jpg'
    },
    {
      title: 'Automated Timetable Generator',
      description: 'Designed an AI-powered timetable scheduling system for educational institutions. Implemented optimization techniques to minimize scheduling conflicts and ensure efficient resource allocation.',
      techStack: ['Python', 'Flask', 'Bcrypt', 'SQLite','HTML', 'CSS'],
      githubLink: 'https://github.com/ganapathy-13/timetable_project-',
      imageUrl: 'data:image/jpeg;base64,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'
    },
    {
      title: 'Auto - Tranlator',
      description: 'A web-based application that translates text from one language to another using machine learning models.',
      techStack: ['Python', 'Floras-200', 'Speech-to-text', 'Text-to-speech', 'Flask', 'HTML', 'CSS'],
      githubLink: '#',
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
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
