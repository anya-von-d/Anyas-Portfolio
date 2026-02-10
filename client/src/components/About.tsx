import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const paragraph =
  "Graduate student at Stanford pursuing a Master's in Computer Science on the AI Track. With experience at Google and Stanford research labs, I develop AI-driven solutions for medical imaging, precision healthcare, and general game playing. My work bridges statistical theory and clinical practice — building systems that are both rigorous and real.";

const words = paragraph.split(" ");

function ScrollWord({
  word,
  index,
  totalWords,
  progress,
}: {
  word: string;
  index: number;
  totalWords: number;
  progress: number;
}) {
  const wordStart = (index / totalWords) * 0.85;
  const wordEnd = wordStart + 0.04;

  // Clamp: once revealed, stay revealed
  const t = Math.min(1, Math.max(0, (progress - wordStart) / (wordEnd - wordStart)));

  const opacity = 0.2 + t * 0.8;
  const color = t >= 1 ? "#0A0A0A" : `rgb(${200 - t * 190}, ${200 - t * 190}, ${208 - t * 198})`;

  return (
    <span
      style={{ opacity, color }}
      className="inline-block mr-[0.3em]"
    >
      {word}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [maxProgress, setMaxProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.4"],
  });

  // Track the highest scroll progress reached — words never un-reveal
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setMaxProgress((prev) => Math.max(prev, latest));
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
              progress={maxProgress}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
