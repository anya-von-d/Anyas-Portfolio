import { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import CodeWaterfall from "@/components/CodeWaterfall";
import profileImage from "@assets/Screenshot_2026-01-08_at_10.44.47_AM_1767898127121.png";

const skills = [
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
  "Deep Learning",
  "Computer Vision",
  "Bayesian Inference",
  "Monte Carlo Simulation",
  "Numerical Methods",
  "Parallel Programming",
  "Web Development",
  "High-Performance Computing",
];

export default function Hero() {
  const letterSpacingControls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: content fades and shifts up as user scrolls past
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);

  useEffect(() => {
    letterSpacingControls.start({
      letterSpacing: "-0.02em",
      transition: { duration: 1.2, ease: "easeInOut" },
    });
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Double the skills array for seamless loop
  const marqueeSkills = [...skills, ...skills];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="h-screen bg-[#0A0A0F] relative overflow-hidden flex flex-col"
    >
      {/* Background code waterfall */}
      <CodeWaterfall intensity="light" />

      {/* Main content area — takes up all space above the ticker */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-12 pt-14"
      >
        {/* Name — large, above photo */}
        <motion.h1
          initial={{ opacity: 0, y: 20, letterSpacing: "0.08em" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#F0F0F5] mb-6 md:mb-8 text-center"
        >
          <motion.span animate={letterSpacingControls}>
            Anya von Diessl
          </motion.span>
        </motion.h1>

        {/* Middle row: Left label — Photo — Right label */}
        <div className="flex items-center justify-center gap-8 md:gap-14 lg:gap-20 w-full max-w-6xl">
          {/* Left — AI Researcher & Computer Scientist */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="hidden md:flex flex-col items-end text-right flex-1"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#555566] mb-2">
              Role
            </p>
            <p className="font-sans text-base lg:text-lg text-[#F0F0F5] font-medium leading-snug">
              AI Researcher
            </p>
            <p className="font-sans text-base lg:text-lg text-[#8888A0] leading-snug">
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
                className="w-52 h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover rounded-2xl"
              />
              {/* Subtle border */}
              <div className="absolute inset-0 rounded-2xl border border-[#ffffff08]" />
            </div>
          </motion.div>

          {/* Right — Stanford MS Computer Science */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="hidden md:flex flex-col items-start text-left flex-1"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#555566] mb-2">
              Education
            </p>
            <p className="font-sans text-base lg:text-lg text-[#F0F0F5] font-medium leading-snug">
              Stanford University
            </p>
            <p className="font-sans text-base lg:text-lg text-[#8888A0] leading-snug">
              MS Computer Science
            </p>
          </motion.div>
        </div>

        {/* Mobile-only: labels below photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="md:hidden flex justify-between w-full max-w-[300px] mt-6"
        >
          <div className="text-left">
            <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#555566] mb-1">Role</p>
            <p className="font-sans text-sm text-[#F0F0F5]">AI Researcher</p>
            <p className="font-sans text-xs text-[#8888A0]">&amp; Computer Scientist</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#555566] mb-1">Education</p>
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

      {/* Skills marquee ticker — pinned to bottom of hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 border-t border-[#1a1a2e] bg-[#0A0A0F]/80 backdrop-blur-sm"
      >
        <div className="overflow-hidden py-4">
          <div className="animate-marquee flex whitespace-nowrap">
            {marqueeSkills.map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="inline-flex items-center mx-4 md:mx-6"
              >
                <span className="font-mono text-xs md:text-sm text-[#8888A0] tracking-wide uppercase">
                  {skill}
                </span>
                <span className="ml-4 md:ml-6 text-[#333344]">&mdash;</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
