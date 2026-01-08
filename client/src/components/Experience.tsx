import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Briefcase, Calendar } from 'lucide-react';
import CodeBackground from './CodeBackground';

const experiences = [
  {
    title: 'Statistical Modeling & Inference Researcher',
    organization: 'Stanford University',
    location: 'Stanford, CA',
    period: 'June 2025 - September 2025',
    description:
      'Conducted research on latent-variable and probabilistic models for uncertainty quantification in high-dimensional, noisy datasets. Developed and implemented Bayesian inference frameworks and variational optimization algorithms to uncover hidden structure and mitigate estimation bias in predictive modeling. Leveraging stochastic process theory, information-theoretic measures, and causal inference techniques to enhance model identifiability, interpretability, and robustness in complex real-world systems.',
    tags: ['Bayesian Inference', 'Probabilistic Modeling', 'Causal Inference', 'Python'],
  },
  {
    title: 'Google Intern',
    organization: 'Google',
    location: 'Mountain View, CA',
    period: 'July 2023 - September 2023',
    description:
      'Developed a high-performance, production-scale interface for a real-time fraud detection platform within Google Ads, leveraging TypeScript, HTML, and CSS to engineer modular, scalable, and latency-optimized components. Collaborated with cross-functional teams to translate complex fraud analytics pipelines and anomaly detection workflows into intuitive, data-rich visual systems, enhancing usability, reliability, and decision speed across a platform processing billions of ad transactions daily.',
    tags: ['TypeScript', 'UI/UX', 'Frontend Development', 'Google Ads'],
  },
  {
    title: 'Teaching Assistant - CS227b: General Game Playing',
    organization: 'Stanford Computer Science Department',
    location: 'Stanford, CA',
    period: 'March 2025 - June 2025',
    description:
      'Assisted in teaching a graduate-level AI course on the design of autonomous agents capable of strategic reasoning in novel environments. Guided students in applying methods from automated reasoning, symbolic knowledge representation, adversarial and heuristic search, resource-bounded planning, and algorithmic game theory to develop general-purpose intelligence systems that learn and execute strategies from formal game descriptions.',
    tags: ['AI', 'Game Theory', 'Teaching', 'Automated Reasoning'],
  },
  {
    title: 'Machine Learning Researcher',
    organization: 'Stanford Computer Science Department',
    location: 'Stanford, CA',
    period: 'September 2024 - June 2025',
    description:
      'Developed a contrastive deep learning model to identify regulatory differences in chromatin accessibility across normal, tumor, and metastatic states. By leveraging CNN architectures like ChromBPNet, applied advanced machine learning techniques to enhance the precision of sequence-to-function predictions, with a focus on refining computational models for disease progression, particularly in thyroid cancer.',
    tags: ['Deep Learning', 'CNN', 'Bioinformatics', 'Python'],
  },
  {
    title: 'Computational Modeling Researcher',
    organization: 'Stanford Translational AI Lab',
    location: 'Stanford, CA',
    period: 'September 2024 - December 2024',
    description:
      'Conducted interdisciplinary research uniting artificial intelligence, probabilistic modeling, and computational medicine. Developed and deployed deep learning architectures for computer vision and medical imaging, integrating probabilistic inference to quantify uncertainty and extract high-fidelity biomarkers. Leveraged Bayesian and data-driven modeling frameworks to improve diagnostic prediction, enhance model interpretability, and advance precision healthcare through statistically robust AI systems.',
    tags: ['Computer Vision', 'Medical Imaging', 'Bayesian Modeling', 'Healthcare AI'],
  },
  {
    title: 'Mathematics Department Tutor',
    organization: 'Stanford University',
    location: 'Stanford, CA',
    period: 'September 2024 - Present',
    description:
      'Provide advanced instruction in theoretical and applied mathematics through Stanford\'s Mathematics Department. Lead students through rigorous explorations of vector space theory, multivariable analysis, and differential systems, with specialized focus on spectral and matrix theory, eigenvalue and singular value decomposition (SVD), dimensionality reduction, proof construction, and the analysis of linear operators and dynamical systems.',
    tags: ['Mathematics', 'Linear Algebra', 'Teaching', 'Mentoring'],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="relative py-16 px-6 overflow-hidden" data-testid="section-experience">
      <CodeBackground />
      <div className="relative max-w-5xl mx-auto z-10">
        <div className="mb-8 text-center">
          <h2 className="font-mono text-3xl md:text-4xl text-white" data-testid="heading-experience">
            <span className="text-primary">&lt;</span>Experience<span className="text-primary">/&gt;</span>
          </h2>
        </div>

        <div className="rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-[#E8E8E8] px-4 py-3 flex items-center gap-3 border-b border-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1" />
            <div className="w-16" />
          </div>

          <div className="bg-[#F0F0F0] p-6 md:p-8 min-h-[400px]">
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
