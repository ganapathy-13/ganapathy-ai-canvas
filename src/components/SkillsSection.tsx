
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    { name: 'Python', level: 90, icon: '🐍' },
    { name: 'Machine Learning', level: 85, icon: '🧠' },
    { name: 'Flask', level: 80, icon: '🌐' },
    { name: 'HTML', level: 85, icon: '📝' },
    { name: 'CSS', level: 80, icon: '🎨' },
    { name: 'Git', level: 75, icon: '📊' },
    { name: 'Statistics', level: 85, icon: '📈' },
  ];

  return (
    <section id="skills" className="bg-white py-20">
      <div className="container-custom">
        <h2 className="section-title">My Skills</h2>
        <p className="mb-12 text-gray-600 max-w-2xl">
          I've developed a diverse set of skills throughout my journey in technology and AI. 
          Here are some of the key technologies and concepts I work with:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="skill-item overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="text-3xl mb-2">{skill.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div 
                    className="bg-ai-teal h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
