import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import CodeWaterfall from "@/components/CodeWaterfall";
import profileImage from "@assets/Screenshot_2026-01-08_at_10.44.47_AM_1767898127121.png";

export default function Hero() {
  const [showCursor, setShowCursor] = useState(true);
  const letterSpacingControls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: content fades and shifts up as you scroll past
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    letterSpacingControls.start({
      letterSpacing: "-0.02em",
      transition: { duration: 1.2, ease: "easeInOut" },
    });

    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen bg-[#0A0A0F] relative overflow-hidden"
    >
      {/* Background code waterfall */}
      <CodeWaterfall intensity="light" />

      {/* Content — centered layout */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-14"
      >
        {/* Name — above photo */}
        <motion.h1
          initial={{ opacity: 0, y: 20, letterSpacing: "0.08em" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#F0F0F5] mb-8 md:mb-10 text-center"
        >
          <motion.span animate={letterSpacingControls}>
            Anya von Diessl
          </motion.span>
        </motion.h1>

        {/* Middle row: Left label — Photo — Right label */}
        <div className="flex items-center justify-center gap-6 md:gap-12 lg:gap-16 w-full max-w-5xl">
          {/* Left text — AI Researcher & Computer Scientist */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="hidden md:flex flex-col items-end text-right flex-1"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8888A0] mb-1">
              01
            </p>
            <p className="font-sans text-sm md:text-base text-[#F0F0F5] leading-relaxed">
              AI Researcher
            </p>
            <p className="font-sans text-sm md:text-base text-[#8888A0]">
              &amp; Computer Scientist
            </p>
          </motion.div>

          {/* Center — Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="shrink-0"
          >
            <div className="relative">
              <img
                src={profileImage}
                alt="Anya von Diessl"
                className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-2xl"
              />
              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-2xl border border-[#ffffff10]" />
            </div>
          </motion.div>

          {/* Right text — Stanford MS Computer Science */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="hidden md:flex flex-col items-start text-left flex-1"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8888A0] mb-1">
              02
            </p>
            <p className="font-sans text-sm md:text-base text-[#F0F0F5] leading-relaxed">
              Stanford University
            </p>
            <p className="font-sans text-sm md:text-base text-[#8888A0]">
              MS Computer Science
            </p>
          </motion.div>
        </div>

        {/* Mobile-only: labels below photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="md:hidden flex justify-between w-full max-w-[280px] mt-6"
        >
          <div className="text-left">
            <p className="font-sans text-sm text-[#F0F0F5]">AI Researcher</p>
            <p className="font-sans text-xs text-[#8888A0]">&amp; Computer Scientist</p>
          </div>
          <div className="text-right">
            <p className="font-sans text-sm text-[#F0F0F5]">Stanford</p>
            <p className="font-sans text-xs text-[#8888A0]">MS Computer Science</p>
          </div>
        </motion.div>

        {/* CTA buttons — below photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="flex items-center gap-5 mt-8 md:mt-10"
        >
          <button
            onClick={scrollToContact}
            className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-6 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors"
          >
            <Mail size={16} />
            Contact Me
          </button>
          <a
            href="https://www.linkedin.com/in/anya-von-diessl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8888A0] hover:text-[#F0F0F5] transition-colors font-mono text-sm flex items-center gap-1"
          >
            LinkedIn
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
