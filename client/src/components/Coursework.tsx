import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const coursework = [
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
  { group: 'Languages & Frameworks', items: ['Python', 'NumPy', 'pandas', 'PyTorch', 'scikit-learn', 'TensorFlow'] },
  { group: 'Scientific Computing', items: ['R', 'MATLAB', 'C++', 'SQL'] },
  { group: 'Systems & Tools', items: ['Git', 'Linux', 'Bash', 'High-Performance Computing'] },
  { group: 'Methods', items: ['Numerical Methods', 'Parallel Programming', 'Monte Carlo Simulation', 'Bayesian Inference', 'Web Development'] },
];

export default function Coursework() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="coursework" ref={sectionRef} className="bg-[#F0F0F2] py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#888899] mb-4"
        >
          BACKGROUND
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#0A0A0A] mb-3"
        >
          Foundations & Tools
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-[1px] bg-[#E0E0E8] origin-left mb-10"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="font-mono text-[12px] uppercase tracking-[0.06em] text-[#888899] mb-5"
            >
              Selected Coursework
            </motion.p>
            <ul className="space-y-0">
              {coursework.map((course, i) => (
                <motion.li
                  key={course}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                  className="text-[15px] text-[#555566] py-2 border-b border-[#E0E0E8] last:border-b-0 hover:text-[#0A0A0A] transition-colors cursor-default"
                >
                  {course}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="font-mono text-[12px] uppercase tracking-[0.06em] text-[#888899] mb-5"
            >
              Technical
            </motion.p>
            <div className="space-y-6">
              {technicalSkills.map((group, gi) => (
                <div key={group.group}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.04em] text-[#888899] mb-3">
                    {group.group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + gi * 0.1 + si * 0.04,
                          ease: 'easeOut'
                        }}
                        className="text-xs font-mono px-3 py-1.5 rounded-full border border-[#D4D4DD] text-[#555566] bg-white hover:border-[#0066FF] hover:text-[#0066FF] transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-sm text-[#888899] leading-relaxed max-w-[680px] mt-12"
        >
          Strong foundation in mathematics and computer science with hands-on experience in
          building production-quality software systems, conducting cutting-edge AI research, and
          applying advanced machine learning techniques to solve real-world problems in healthcare and beyond.
        </motion.p>
      </div>
    </section>
  );
}
