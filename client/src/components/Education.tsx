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

  // Parallax — text drifts inward, logos float
  const leftX = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 50]);
  const rightX = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const logoY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="bg-[var(--bg)] py-28 md:py-36 lg:py-44 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Desktop: text on outside, logos in center */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10 min-h-[400px] md:min-h-[500px]">
          {/* Left — MS Degree text */}
          <motion.div
            style={{ x: leftX, opacity: contentOpacity }}
            className="flex-1 text-right pr-4 lg:pr-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#888899] mb-3">
              Master&apos;s Degree
            </p>
            <h3 className="font-display italic text-3xl md:text-4xl lg:text-5xl text-[#0A0A0A] leading-tight">
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
          </motion.div>

          {/* Center — Logos side by side */}
          <motion.div
            style={{ y: logoY, opacity: contentOpacity }}
            className="shrink-0 flex items-center gap-4 lg:gap-8"
          >
            <img
              src={msLogo}
              alt="Stanford Engineering"
              className="w-32 h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 object-contain"
            />
            <div className="w-[1px] h-20 lg:h-28 bg-[#E0E0E8]" />
            <img
              src={bsLogo}
              alt="Stanford University"
              className="w-32 h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 object-contain"
            />
          </motion.div>

          {/* Right — BS Degree text */}
          <motion.div
            style={{ x: rightX, opacity: contentOpacity }}
            className="flex-1 text-left pl-4 lg:pl-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#888899] mb-3">
              Bachelor&apos;s Degree
            </p>
            <h3 className="font-display italic text-3xl md:text-4xl lg:text-5xl text-[#0A0A0A] leading-tight">
              Mathematics
            </h3>
            <p className="font-sans text-sm text-[#888899] mt-3">
              Stanford University
            </p>
            <p className="font-mono text-xs text-[#888899] mt-2">
              2021 – 2025
            </p>
          </motion.div>
        </div>

        {/* Mobile: stacked layout */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="md:hidden flex flex-col items-center text-center gap-10"
        >
          {/* MS degree */}
          <div>
            <img
              src={msLogo}
              alt="Stanford Engineering"
              className="w-16 h-16 object-contain mx-auto mb-4"
            />
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#888899] mb-3">
              Master&apos;s Degree
            </p>
            <h3 className="font-display italic text-3xl text-[#0A0A0A] leading-tight">
              Computer
              <br />
              Science
            </h3>
            <p className="font-sans text-base text-[#555566] mt-3">
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

          <div className="w-12 h-[1px] bg-[#E0E0E8]" />

          {/* BS degree */}
          <div>
            <img
              src={bsLogo}
              alt="Stanford University"
              className="w-16 h-16 object-contain mx-auto mb-4"
            />
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#888899] mb-3">
              Bachelor&apos;s Degree
            </p>
            <h3 className="font-display italic text-3xl text-[#0A0A0A] leading-tight">
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
      </div>
    </section>
  );
}
