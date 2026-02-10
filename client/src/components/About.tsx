import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const paragraph =
  "Graduate student at Stanford pursuing a Master's in Computer Science on the AI Track. With experience at Google and Stanford research labs, I develop AI-driven solutions for medical imaging, precision healthcare, and general game playing. My work bridges statistical theory and clinical practice — building systems that are both rigorous and real.";

const words = paragraph.split(" ");

function ScrollWord({
  word,
  index,
  totalWords,
  scrollYProgress,
}: {
  word: string;
  index: number;
  totalWords: number;
  scrollYProgress: any;
}) {
  // Each word activates at a different point in the scroll
  // Spread words across 0.0 → 0.85 of scroll progress so they all reveal before end
  const wordStart = (index / totalWords) * 0.85;
  const wordEnd = wordStart + 0.04;

  const opacity = useTransform(
    scrollYProgress,
    [wordStart, wordEnd],
    [0.2, 1]
  );

  const color = useTransform(
    scrollYProgress,
    [wordStart, wordEnd],
    ["#C8C8D0", "#0A0A0A"]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.3em] transition-none"
    >
      {word}
    </motion.span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.4"],
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#F0F0F2] py-32 md:py-44 lg:py-52"
      data-testid="section-about"
    >
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 lg:px-16">
        <p className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] leading-snug md:leading-snug lg:leading-snug font-normal">
          {words.map((word, i) => (
            <ScrollWord
              key={`${word}-${i}`}
              word={word}
              index={i}
              totalWords={words.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
