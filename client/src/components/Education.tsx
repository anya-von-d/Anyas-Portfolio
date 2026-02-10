import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import msLogo from "@assets/vondy-4_1767893539231.png";
import bsLogo from "@assets/vondy-3_1767893482214.png";

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax — logos drift inward, text stays centered
  const leftX = useTransform(scrollYProgress, [0, 0.5, 1], [120, 0, -60]);
  const rightX = useTransform(scrollYProgress, [0, 0.5, 1], [-120, 0, 60]);
  const centerY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="bg-[var(--bg)] py-28 md:py-36 lg:py-44 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Main composition — logos on sides, text in center */}
        <div className="flex items-center justify-center gap-6 md:gap-10 lg:gap-16 min-h-[400px] md:min-h-[500px]">
          {/* Left — MS Logo (Engineering) */}
          <motion.div
            style={{ x: leftX, opacity: contentOpacity }}
            className="hidden md:block shrink-0"
          >
            <img
              src={msLogo}
              alt="Stanford Engineering"
              className="w-40 h-40 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-contain rounded-2xl"
            />
          </motion.div>

          {/* Center — Education text */}
          <motion.div
            style={{ y: centerY, opacity: contentOpacity }}
            className="flex flex-col items-center text-center max-w-lg"
          >
            {/* MS degree */}
            <div className="mb-10 md:mb-14">
              {/* Mobile-only logo */}
              <img
                src={msLogo}
                alt="Stanford Engineering"
                className="md:hidden w-16 h-16 object-contain rounded-xl mx-auto mb-4"
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#888899] mb-3">
                Master&apos;s Degree
              </p>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#0A0A0A] leading-tight">
                Computer
                <br />
                Science
              </h3>
              <p className="font-sans text-base md:text-lg text-[#555566] mt-3">
                Artificial Intelligence Track
              </p>
              <p className="font-sans text-sm text-[#888899] mt-1">
                Stanford University
              </p>
              <p className="font-mono text-xs text-[#888899] mt-2">
                Expected 2026
              </p>
              <div className="inline-flex items-center gap-1.5 bg-[#0066FF10] text-[#0066FF] text-xs font-mono px-2.5 py-1 rounded-full mt-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                In Progress
              </div>
            </div>

            {/* Divider */}
            <div className="w-12 h-[1px] bg-[#E0E0E8] mb-10 md:mb-14" />

            {/* BS degree */}
            <div>
              {/* Mobile-only logo */}
              <img
                src={bsLogo}
                alt="Stanford University"
                className="md:hidden w-16 h-16 object-contain rounded-xl mx-auto mb-4"
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#888899] mb-3">
                Bachelor&apos;s Degree
              </p>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#0A0A0A] leading-tight">
                Mathematics
              </h3>
              <p className="font-sans text-sm text-[#888899] mt-3">
                Stanford University
              </p>
              <p className="font-mono text-xs text-[#888899] mt-2">
                2021 – 2025
              </p>
            </div>
          </motion.div>

          {/* Right — BS Logo (Stanford) */}
          <motion.div
            style={{ x: rightX, opacity: contentOpacity }}
            className="hidden md:block shrink-0"
          >
            <img
              src={bsLogo}
              alt="Stanford University"
              className="w-40 h-40 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-contain rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
