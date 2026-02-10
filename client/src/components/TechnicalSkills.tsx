import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Row 1 scrolls left, Row 2 scrolls right
const row1 = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "NumPy",
  "pandas",
  "scikit-learn",
  "C++",
  "R",
  "MATLAB",
  "SQL",
  "Git",
  "Linux",
  "Bash",
];

const row2 = [
  "Deep Learning",
  "Computer Vision",
  "Bayesian Inference",
  "Monte Carlo Simulation",
  "Numerical Methods",
  "Parallel Programming",
  "High-Performance Computing",
  "Web Development",
  "Causal Inference",
  "Medical Imaging",
];

export default function TechnicalSkills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  // Double arrays for seamless loop
  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  return (
    <section
      ref={sectionRef}
      className="bg-[#F0F0F2] pb-28 md:pb-36 lg:pb-44 overflow-hidden"
    >
      {/* Header area — title right, paragraph in the middle */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 mb-14 md:mb-20"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Title — right-aligned on desktop to mirror the Lando "Partners" layout */}
          <div className="md:order-2 md:text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#888899] mb-3">
              Technical
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#0A0A0A] leading-[0.95]">
              Technical
              <br />
              <span className="text-[#C8C8D0]">&amp;&nbsp;Skills</span>
            </h2>
          </div>

          {/* Paragraph — center/left */}
          <p className="font-sans text-base md:text-lg text-[#888899] max-w-[440px] leading-relaxed md:order-1">
            Proficient across the full stack of modern AI research and
            engineering — from low-level systems programming to high-level
            deep learning frameworks and statistical modeling.
          </p>
        </div>
      </motion.div>

      {/* Scrolling rows — full width, no max-w constraint */}
      <motion.div style={{ opacity: contentOpacity }} className="space-y-4">
        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden">
          <div className="animate-marquee flex whitespace-nowrap">
            {marqueeRow1.map((skill, i) => (
              <span
                key={`r1-${skill}-${i}`}
                className="inline-flex items-center mx-2 md:mx-3"
              >
                <span className="font-mono text-sm md:text-base px-5 py-2.5 rounded-full border border-[#D4D4DD] text-[#555566] bg-white hover:border-[#0066FF] hover:text-[#0066FF] transition-colors cursor-default whitespace-nowrap">
                  {skill}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (opposite direction) */}
        <div className="overflow-hidden">
          <div className="animate-marquee-reverse flex whitespace-nowrap">
            {marqueeRow2.map((skill, i) => (
              <span
                key={`r2-${skill}-${i}`}
                className="inline-flex items-center mx-2 md:mx-3"
              >
                <span className="font-mono text-sm md:text-base px-5 py-2.5 rounded-full border border-[#D4D4DD] text-[#555566] bg-white hover:border-[#0066FF] hover:text-[#0066FF] transition-colors cursor-default whitespace-nowrap">
                  {skill}
                </span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
