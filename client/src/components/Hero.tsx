import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import CodeWaterfall from "@/components/CodeWaterfall";
import profileImage from "@assets/Screenshot_2026-01-08_at_10.44.47_AM_1767898127121.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const letterSpacingControls = useAnimation();
  const fullText = "AI Researcher & Computer Scientist";

  useEffect(() => {
    // Typing animation
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, Math.floor(2000 / fullText.length));

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    // Letter-spacing animation on the name
    letterSpacingControls.start({
      letterSpacing: "-0.02em",
      transition: { duration: 1.2, ease: "easeInOut" },
    });

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
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
      className="min-h-screen bg-[#0A0A0F] relative overflow-hidden"
    >
      {/* Background code waterfall */}
      <CodeWaterfall intensity="light" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center w-full">
          {/* Left column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Stanford label */}
            <motion.p
              variants={childVariants}
              className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#8888A0] mb-4"
            >
              Stanford University &middot; MS Computer Science (AI) &middot;
              Palo Alto, CA
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={childVariants}
              animate={letterSpacingControls}
              initial={{ opacity: 0, y: 20, letterSpacing: "0.08em" }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#F0F0F5] mb-6"
            >
              Anya von Diessl
            </motion.h1>

            {/* Typing subtitle */}
            <motion.div variants={childVariants} className="mb-6">
              <p className="font-mono text-lg text-[#8888A0]">
                {displayedText}
                <span
                  className={`inline-block w-[2px] h-[1.1em] ml-1 bg-[#8888A0] align-middle transition-opacity duration-100 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                />
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={childVariants}
              className="font-sans text-base md:text-lg text-[#8888A0] max-w-[520px] leading-relaxed mb-8"
            >
              Researcher in probabilistic modeling, deep learning, and medical
              imaging. Building systems that bridge statistical theory and
              clinical practice.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={childVariants} className="flex gap-4">
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

          {/* Right column — profile image (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center pt-8"
          >
            <div className="animate-float">
              <img
                src={profileImage}
                alt="Anya von Diessl"
                className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
