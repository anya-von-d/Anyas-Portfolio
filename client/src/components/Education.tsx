import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import msLogo from "@assets/vondy-4_1767893539231.png";
import bsLogo from "@assets/vondy-3_1767893482214.png";

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section
      id="education"
      ref={sectionRef}
      className="bg-[var(--bg)] py-20 md:py-28"
    >
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={headerRef}>
          <p
            className="font-mono uppercase tracking-[0.08em] text-[#888899] mb-4"
            style={{ fontSize: "11px" }}
          >
            EDUCATION
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#0A0A0A] mb-3">
            Education
          </h2>
          <motion.div
            className="h-[1px] bg-[#E0E0E8]"
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* Education cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Card 1 - MS */}
          <motion.div
            className="bg-white rounded-xl p-6 border border-[#E0E0E8]"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={msLogo}
              alt="Stanford Engineering"
              className="w-12 h-12 rounded-lg object-contain mb-4"
            />
            <h3 className="font-sans font-semibold text-lg text-[#0A0A0A]">
              Master of Science, Computer Science
            </h3>
            <p className="font-sans text-sm text-[#555566]">
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

          {/* Card 2 - BS */}
          <motion.div
            className="bg-white rounded-xl p-6 border border-[#E0E0E8]"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={bsLogo}
              alt="Stanford University"
              className="w-12 h-12 rounded-lg object-contain mb-4"
            />
            <h3 className="font-sans font-semibold text-lg text-[#0A0A0A]">
              Bachelor of Science, Mathematics
            </h3>
            <p className="font-sans text-sm text-[#888899] mt-1">
              Stanford University
            </p>
            <p className="font-mono text-xs text-[#888899] mt-2">
              2021 – 2025
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
