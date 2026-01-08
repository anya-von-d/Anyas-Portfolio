import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import NeuralNetworkBackground from './NeuralNetworkBackground';

const courses = [
  'Advanced Probability Theory',
  'Stochastic Modeling',
  'Optimization',
  'Statistical Inference',
  'Partial Differential Equations',
  'Continuous Mathematical Methods',
  'Machine Learning',
  'Deep Learning',
  'Artificial Intelligence',
  'Algorithms',
  'Decision Making Under Uncertainty',
];

const technicalSkills = [
  'Python',
  'NumPy',
  'pandas',
  'PyTorch',
  'scikit-learn',
  'TensorFlow',
  'R',
  'MATLAB',
  'C++',
  'SQL',
  'Git',
  'Linux',
  'Bash',
  'High-Performance Computing',
  'Numerical Methods',
  'Parallel Programming',
  'Monte Carlo Simulation',
  'Bayesian Inference',
  'Web Development',
];

export default function Coursework() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="coursework" className="relative py-16 px-6 bg-[#C4C4C4] overflow-hidden" data-testid="section-coursework">
      <NeuralNetworkBackground />
      <div className="relative max-w-5xl mx-auto z-10">
        <div className="mb-8 text-center">
          <h2 className="font-mono text-3xl md:text-4xl text-black" data-testid="heading-coursework">
            <span className="text-[#016742]">&lt;</span>Background & Skills<span className="text-[#016742]">/&gt;</span>
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
                      className={`p-3 hover-elevate active-elevate-2 cursor-default transition-all animate-fade-in bg-white/5 !border-[#33FF33] ${
                        hoveredIndex === index ? 'scale-105' : ''
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      data-testid={`card-course-${index}`}
                    >
                      <p className="font-mono text-xs leading-relaxed text-[#33FF33]">{course}</p>
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
                      className="font-mono px-3 py-1.5 text-xs !border-white text-white hover:!border-[#33FF33] hover:text-[#33FF33] transition-all cursor-default animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                      data-testid={`badge-tech-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Card className="mt-6 p-4 border-primary/30 bg-white/5">
                  <p className="text-white/70 leading-relaxed text-sm">
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
