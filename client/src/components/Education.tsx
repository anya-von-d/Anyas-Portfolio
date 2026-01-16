import { Card } from '@/components/ui/card';
import stanfordLogo from '@assets/vondy-3_1767893482214.png';
import stanfordEngineeringLogo from '@assets/vondy-4_1767893539231.png';

const education = [
  {
    abbreviation: 'MS',
    degree: 'Master of Science, Computer Science (Artificial Intelligence Track)',
    school: 'Stanford University, Stanford, CA',
    date: 'Expected 2026',
    current: true,
  },
  {
    abbreviation: 'BS',
    degree: 'Bachelor of Science, Mathematics',
    school: 'Stanford University, Stanford, CA',
    date: '2021 - 2025',
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 bg-[#F5F5F5]" data-testid="section-education">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-mono text-3xl md:text-4xl mb-4 text-black" data-testid="heading-education">
            <span className="text-primary">&lt;</span>Education<span className="text-primary">/&gt;</span>
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover-elevate active-elevate-2 transition-all animate-fade-in bg-white border-gray-200"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`card-education-${index}`}
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
                    {edu.abbreviation === 'BS' ? (
                      <img 
                        src={stanfordLogo} 
                        alt="Stanford University" 
                        className="w-full h-full object-cover"
                      />
                    ) : edu.abbreviation === 'MS' ? (
                      <img 
                        src={stanfordEngineeringLogo} 
                        alt="Stanford Engineering" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="font-display font-bold text-2xl md:text-3xl text-primary">
                        {edu.abbreviation}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-2" data-testid={`text-degree-${index}`}>
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 mb-1" data-testid={`text-school-${index}`}>
                    {edu.school} | {edu.date}
                  </p>
                  {edu.current && (
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono">
                        <span className="w-2 h-2 rounded-full bg-primary animate-glow" />
                        In Progress
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
