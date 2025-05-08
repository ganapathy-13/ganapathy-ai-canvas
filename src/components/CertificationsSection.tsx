
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Statistics 101',
      issuer: 'IBM Cognitive Class',
      date: 'January 2023',
      credentialLink: '#',
      description: 'Comprehensive training in statistical methods and analysis, covering probability, hypothesis testing, and regression analysis.'},
    {
      title: 'Python for Data Science and AI',
      issuer: 'IBM Cognitive Class',
      date: 'January 2023',
      credentialLink: '#',
      description: 'Comprehensive training in statistical methods and analysis, covering probability, hypothesis testing, and regression analysis.'
    },{
      title: 'Statistics 101',
      issuer: 'IBM Cognitive Class',
      date: 'January 2023',
      credentialLink: '#',
      description: 'Comprehensive training in statistical methods and analysis, covering probability, hypothesis testing, and regression analysis.'
    }
  ];

  return (
    <section id="certifications" className="bg-white py-20">
      <div className="container-custom">
        <h2 className="section-title">Certifications</h2>
        <p className="mb-12 text-gray-600 max-w-2xl">
          Continuous learning is an important part of my professional growth. Here are some of the certifications I've earned:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={cert.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  <Award className="w-6 h-6 text-ai-teal mr-2" />
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </div>
                <CardDescription className="text-sm">
                  {cert.issuer} · {cert.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-gray-600">
                <p>{cert.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a 
                    href={cert.credentialLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
