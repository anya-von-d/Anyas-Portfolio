import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Machine Learning Researcher',
    organization: 'Stanford Computer Science Department',
    location: 'Stanford, CA',
    period: 'September 2024 - June 2025',
    description:
      'I developed a contrastive deep learning model to identify regulatory differences in chromatin accessibility across normal, tumor, and metastatic states. By leveraging CNN architectures like ChromBPNet, I applied advanced machine learning techniques to enhance the precision of sequence-to-function predictions, with a focus on refining computational models for disease progression, particularly in thyroid cancer.',
    tags: ['Deep Learning', 'CNN', 'Medical Imaging', 'Python'],
  },
  {
    title: 'AI Researcher',
    organization: 'Stanford Transitional AI Lab',
    location: 'Stanford, CA',
    period: 'September 2024 - January 2025',
    description:
      'At the STAI Lab, I work on interdisciplinary research that bridges AI methodologies with real-world clinical applications, focusing on advancing precision healthcare. My role involves developing AI-driven solutions, particularly in the areas of Computer Vision and Medical Imaging, to address technological gaps in clinical settings.',
    tags: ['Computer Vision', 'Medical AI', 'Precision Healthcare'],
  },
  {
    title: 'Software Engineering Intern',
    organization: 'Google',
    location: 'Mountain View, CA',
    period: 'July 2023 - September 2023',
    description:
      'Developed a high-performance user interface for a fraud detection system within Google Ads, leveraging TypeScript, HTML, and CSS to build scalable, production-quality features. Collaborated with cross-functional teams to translate complex fraud detection workflows into intuitive designs, optimizing both usability and system reliability for a platform handling billions of ad transactions.',
    tags: ['TypeScript', 'UI/UX', 'Frontend Development', 'Google Ads'],
  },
  {
    title: 'Teaching Assistant - CS227b: General Game Playing',
    organization: 'Stanford Computer Science Department',
    location: 'Stanford, CA',
    period: 'March 2024 - June 2024',
    description:
      'Assisted in teaching a graduate-level AI course on General Game Playing, focusing on the design of autonomous agents that learn and execute strategies for previously unseen games based solely on formal logic descriptions. Guided students in applying methods from automated reasoning, symbolic knowledge representation, adversarial and heuristic search, and resource-bounded planning, while refining my own expertise in algorithmic game theory and general-purpose intelligence systems.',
    tags: ['AI', 'Game Theory', 'Teaching', 'Automated Reasoning'],
  },
  {
    title: 'Math Department Tutor',
    organization: 'Stanford University',
    location: 'Stanford, CA',
    period: 'September 2024 - Present',
    description:
      "In my role as a tutor for Stanford's Math Department to support students in mastering their math courses. Through drop-in tutoring sessions, I provide personalized academic support, clarify complex concepts, and guide students through challenging coursework and problem-solving techniques. My role extends beyond simply answering questions, I'm dedicated to fostering a deeper understanding of mathematical principles, encouraging independent learning, and enhancing students' confidence in their analytical abilities.",
    tags: ['Mathematics', 'Teaching', 'Mentoring'],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="relative py-16 px-6" data-testid="section-experience">
      <div className="relative max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="font-mono text-3xl md:text-4xl text-white" data-testid="heading-experience">
            <span className="text-primary">&lt;</span>Experience<span className="text-primary">/&gt;</span>
          </h2>
        </div>

        <div className="rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-white px-4 py-3 flex items-center gap-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1" />
            <div className="w-16" />
          </div>

          <div className="bg-white p-6 md:p-8 min-h-[400px]">
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all duration-300 bg-gray-50 hover-elevate active-elevate-2 animate-fade-in border-gray-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`card-experience-${index}`}
                >
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full p-4 md:p-5 text-left transition-all"
                    data-testid={`button-expand-${index}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-mono text-base md:text-lg mb-2 text-[#1A1A1A]" data-testid={`text-title-${index}`}>
                          <span className="text-primary">&lt;</span>
                          {exp.title.toUpperCase()}
                          <span className="text-primary">/&gt;</span>
                        </h3>
                        <p className="text-gray-600 text-sm mb-1" data-testid={`text-org-${index}`}>
                          {exp.organization}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-primary font-mono">
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <div className="shrink-0">
                        {expandedIndex === index ? (
                          <ChevronUp className="w-5 h-5 text-primary" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </button>

                  {expandedIndex === index && (
                    <div className="px-4 md:px-5 pb-4 md:pb-5 animate-accordion-down" data-testid={`content-experience-${index}`}>
                      <div className="pt-3 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed mb-3 text-sm">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="font-mono text-xs bg-gray-100 text-gray-700 border-gray-300"
                              data-testid={`badge-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
