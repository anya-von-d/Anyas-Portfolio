const focuses = [
  {
    title: 'AI Research',
    description: 'Developing contrastive deep learning models and CNN architectures for medical applications',
  },
  {
    title: 'Software Engineering',
    description: 'Building high-performance user interfaces and scalable production-quality features',
  },
  {
    title: 'Machine Learning',
    description: 'Applying advanced ML techniques to enhance sequence-to-function predictions',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 px-6 bg-[#A6A6A6]" data-testid="section-about">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-mono text-3xl md:text-4xl mb-4" data-testid="heading-about">
            <span className="text-[#33FF33]">&lt;</span><span className="text-black">About</span><span className="text-[#33FF33]">/&gt;</span>
          </h2>
        </div>
        
        <div>
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-black">
              Graduate student at Stanford pursuing a Master's in Computer Science (AI Track). With experience at Google and Stanford research labs, I develop AI-driven solutions for medical imaging, precision healthcare, and general game playing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {focuses.map((focus, index) => (
              <div
                key={focus.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-focus-${focus.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="bg-[#D4CBA8] rounded-lg p-3 shadow-lg hover-elevate active-elevate-2 transition-all cursor-default">
                  <div className="bg-[#0A1408] rounded p-4 h-[160px] border-4 border-[#2A2A2A] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] flex flex-col">
                    <h3 className="font-mono font-bold text-sm mb-2 text-[#33FF33]">&gt; {focus.title}</h3>
                    <p className="text-[#22BB22] font-mono text-xs leading-relaxed flex-1">{focus.description}</p>
                    <span className="inline-block w-2 h-3 bg-[#33FF33] animate-pulse" />
                  </div>
                  <div className="mt-2 flex justify-end">
                    <div className="w-2 h-2 rounded-full bg-[#2A2A2A]">
                      <div className="w-1 h-1 rounded-full bg-green-500 m-[2px]" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-4 bg-[#C4BB98]" />
                </div>
                <div className="flex justify-center">
                  <div className="w-20 h-2 bg-[#B4AB88] rounded-b-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
