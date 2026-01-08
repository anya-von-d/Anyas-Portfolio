import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const courses = [
  'Machine Learning',
  'Programming Methodologies',
  'Programming Abstractions',
  'Computer Organization & Systems',
  'Design and Analysis of Algorithms',
  'Natural Language Processing',
  'Integral Calculus of Several Variables',
  'Differential Equations with Linear Algebra',
  'Fourier Methods',
  'Vector Calculus',
];

const technicalSkills = [
  'Machine Learning',
  'Python',
  'C++',
  'MATLAB',
  'Microsoft Excel',
  'Microsoft Word',
  'Deep Learning',
  'Computer Vision',
  'Medical Imaging',
];

export default function Coursework() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="coursework" className="relative py-16 px-6" data-testid="section-coursework">
      <div className="relative max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="font-mono text-3xl md:text-4xl text-white" data-testid="heading-coursework">
            <span className="text-primary">&lt;</span>Background & Skills<span className="text-primary">/&gt;</span>
          </h2>
        </div>

        <div className="rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-[#2A2A2A] px-4 py-3 flex md:hidden items-center gap-3 border-b border-black/30">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1" />
            <div className="w-16" />
          </div>

          <div className="bg-[#1A1A1A] p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-display font-bold text-xl text-white">Relevant Background</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {courses.map((course, index) => (
                    <Card
                      key={course}
                      className={`p-3 hover-elevate active-elevate-2 cursor-default transition-all animate-fade-in bg-white/5 !border-[#1EDF84] ${
                        hoveredIndex === index ? 'scale-105' : ''
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      data-testid={`card-course-${index}`}
                    >
                      <p className="font-mono text-xs leading-relaxed text-[#35B276]">{course}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-display font-bold text-xl text-white">Technical Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="font-mono px-3 py-1.5 text-xs !border-white text-white hover:bg-primary hover:text-primary-foreground transition-all cursor-default animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                      data-testid={`badge-tech-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Card className="mt-6 p-4 border-primary/30 bg-white/5">
                  <p className="text-white/70 leading-relaxed text-sm">
                    <span className="font-display font-semibold text-primary block mb-2">
                      Specialized Expertise
                    </span>
                    Strong foundation in mathematics and computer science with hands-on experience in building
                    production-quality software systems, conducting cutting-edge AI research, and applying
                    advanced machine learning techniques to solve real-world problems in healthcare and beyond.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="w-24 h-8 bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A]" />
        </div>
        <div className="hidden md:flex justify-center">
          <div className="w-40 h-3 bg-[#2A2A2A] rounded-b-lg" />
        </div>
      </div>
    </section>
  );
}
