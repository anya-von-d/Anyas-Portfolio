import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const coursework = [
  "Advanced Probability Theory",
  "Stochastic Modeling",
  "Optimization",
  "Statistical Inference",
  "Partial Differential Equations",
  "Continuous Mathematical Methods",
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence",
  "Algorithms",
  "Decision Making Under Uncertainty",
];

const technicalSkills = [
  {
    group: "Languages & Frameworks",
    items: ["Python", "NumPy", "pandas", "PyTorch", "scikit-learn", "TensorFlow"],
  },
  {
    group: "Scientific Computing",
    items: ["R", "MATLAB", "C++", "SQL"],
  },
  {
    group: "Systems & Tools",
    items: ["Git", "Linux", "Bash", "High-Performance Computing"],
  },
  {
    group: "Methods",
    items: [
      "Numerical Methods",
      "Parallel Programming",
      "Monte Carlo Simulation",
      "Bayesian Inference",
      "Web Development",
    ],
  },
];

export default function Coursework() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax — title drifts up slower than the box
  const titleY = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const boxY = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="coursework"
      ref={sectionRef}
      className="bg-[#F0F0F2] py-28 md:py-36 lg:py-44 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Two-column layout: Title left, Box right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* Left — Large title */}
          <motion.div style={{ y: titleY, opacity: contentOpacity }} className="lg:sticky lg:top-32">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#888899] mb-4">
              Background
            </p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#0A0A0A] leading-[0.95]">
              Foundations
              <br />
              &amp;&nbsp;Tools
            </h2>
            <p className="font-sans text-base text-[#888899] mt-6 max-w-[360px] leading-relaxed">
              Strong foundation in mathematics and computer science with
              hands-on experience building production-quality AI systems.
            </p>
          </motion.div>

          {/* Right — Content box */}
          <motion.div
            style={{ y: boxY, opacity: contentOpacity }}
            className="bg-white rounded-2xl border border-[#E0E0E8] p-6 md:p-8 lg:p-10"
          >
            {/* Coursework */}
            <div className="mb-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#888899] mb-4">
                Selected Coursework
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                {coursework.map((course) => (
                  <div
                    key={course}
                    className="text-[14px] text-[#555566] py-2.5 border-b border-[#F0F0F2] last:border-b-0 hover:text-[#0A0A0A] transition-colors cursor-default"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#E0E0E8] mb-8" />

            {/* Technical Skills */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#888899] mb-5">
                Technical Skills
              </p>
              <div className="space-y-5">
                {technicalSkills.map((group) => (
                  <div key={group.group}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#888899] mb-2.5">
                      {group.group}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-mono px-3 py-1.5 rounded-full border border-[#E0E0E8] text-[#555566] bg-[#FAFAFA] hover:border-[#0066FF] hover:text-[#0066FF] transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
