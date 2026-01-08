import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  'Machine Learning',
  'Python',
  'C++',
  'MATLAB',
  'Deep Learning',
  'Computer Vision',
  'NLP',
  'Medical Imaging',
  'TypeScript',
  'HTML/CSS',
];

const focuses = [
  {
    title: 'AI Research',
    description: 'Developing contrastive deep learning models and CNN architectures for medical applications',
  },
  {
    title: 'Software Engineering',
    description: 'Building high-performance user interfaces and scalable production-quality features',
  },
  {
    title: 'Machine Learning',
    description: 'Applying advanced ML techniques to enhance sequence-to-function predictions',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 px-6 bg-[#35B276]" data-testid="section-about">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-mono text-3xl md:text-4xl mb-4" data-testid="heading-about">
            <span className="text-[#006B3D]">&lt;</span><span className="text-white">About</span><span className="text-[#006B3D]">/&gt;</span>
          </h2>
        </div>
        
        <div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg leading-relaxed text-[#1A1A1A]">
                Graduate student at Stanford pursuing a Master's in Computer Science (AI Track). With experience at Google and Stanford research labs, I develop AI-driven solutions for medical imaging, precision healthcare, and general game playing.
              </p>
            </div>

            <div className="space-y-4 animate-slide-in-right">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="font-mono text-sm px-3 py-1 !border-white text-[#1A1A1A] hover:bg-white hover:text-primary transition-colors cursor-default"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {focuses.map((focus, index) => (
              <div
                key={focus.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-focus-${focus.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="bg-[#C9C2B5] rounded-lg p-3 shadow-lg hover-elevate active-elevate-2 transition-all cursor-default">
                  <div className="bg-[#1A1A1A] rounded p-4 min-h-[140px] border-4 border-[#2A2A2A] shadow-inner">
                    <h3 className="font-mono font-bold text-lg mb-2 text-primary">&gt; {focus.title}</h3>
                    <p className="text-[#98C379] font-mono text-sm leading-relaxed">{focus.description}</p>
                    <span className="inline-block w-2 h-4 bg-primary animate-pulse mt-2" />
                  </div>
                  <div className="flex justify-center mt-3">
                    <div className="w-8 h-1 bg-[#A8A095] rounded-full" />
                  </div>
                  <div className="flex justify-center mt-2">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#8B8578]" />
                      <div className="w-2 h-2 rounded-full bg-[#8B8578]" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-16 h-6 bg-gradient-to-b from-[#C9C2B5] to-[#B8B1A4] rounded-b-sm" />
                </div>
                <div className="flex justify-center">
                  <div className="w-24 h-2 bg-[#A8A095] rounded-b-lg shadow-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
