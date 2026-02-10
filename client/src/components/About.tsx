import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Code, LineChart } from "lucide-react";

const focuses = [
  {
    icon: Brain,
    title: "AI Research",
    description:
      "Developing contrastive deep learning models and CNN architectures for medical applications",
  },
  {
    icon: Code,
    title: "Software Engineering",
    description:
      "Building high-performance user interfaces and scalable production-quality features",
  },
  {
    icon: LineChart,
    title: "Machine Learning",
    description:
      "Applying advanced ML techniques to enhance sequence-to-function predictions",
  },
];

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="bg-[#F0F0F2] py-20 md:py-28"
      data-testid="section-about"
    >
      <div ref={sectionRef} className="max-w-[900px] mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#888899] mb-4"
        >
          ABOUT
        </motion.p>

        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#0A0A0A] mb-3"
          data-testid="heading-about"
        >
          About
        </motion.h2>

        {/* Animated horizontal rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="h-[1px] bg-[#E0E0E8] origin-left"
        />

        {/* Bio paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="font-sans text-base md:text-lg leading-relaxed text-[#555566] max-w-[680px] mb-12 mt-8"
        >
          Graduate student at Stanford pursuing a Master&apos;s in Computer
          Science (AI Track). With experience at Google and Stanford research
          labs, I develop AI-driven solutions for medical imaging, precision
          healthcare, and general game playing.
        </motion.p>

        {/* Focus cards */}
        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {focuses.map((focus) => {
            const Icon = focus.icon;
            return (
              <motion.div
                key={focus.title}
                variants={cardVariants}
                className="bg-white rounded-xl p-6 border border-[#E0E0E8] border-l-2 border-l-[#0066FF]"
                data-testid={`card-focus-${focus.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Icon size={20} className="text-[#0066FF] mb-3" />
                <h3 className="font-sans font-semibold text-base text-[#0A0A0A] mb-2">
                  {focus.title}
                </h3>
                <p className="font-sans text-sm text-[#555566] leading-relaxed">
                  {focus.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
