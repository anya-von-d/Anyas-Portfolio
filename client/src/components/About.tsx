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
    <section id="about" className="relative py-16 px-6 bg-[#35B276]" data-testid="section-about">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-mono text-3xl md:text-4xl mb-4" data-testid="heading-about">
            <span className="text-[#006B3D]">&lt;</span><span className="text-white">About</span><span className="text-[#006B3D]">/&gt;</span>
          </h2>
        </div>
        
        <div>
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-[#1A1A1A]">
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
                <div className="bg-gradient-to-b from-[#D4C9A8] to-[#C4B998] rounded-t-xl rounded-b-lg p-4 shadow-xl hover-elevate active-elevate-2 transition-all cursor-default border-2 border-[#B8AD8C]">
                  <div className="flex gap-1 mb-1">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="flex-1 h-[2px] bg-[#A89878]" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg pointer-events-none" />
                    <div className="bg-[#0A1810] rounded-lg p-4 min-h-[150px] border-8 border-[#3A3A3A] shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
                      <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-[#00FF00] shadow-[0_0_4px_#00FF00] animate-pulse" />
                      <h3 className="font-mono font-bold text-base mb-2 text-[#00FF00] drop-shadow-[0_0_2px_#00FF00]">&gt; {focus.title}_</h3>
                      <p className="text-[#00DD00] font-mono text-xs leading-relaxed opacity-90">{focus.description}</p>
                      <span className="inline-block w-2 h-3 bg-[#00FF00] animate-pulse mt-2 shadow-[0_0_4px_#00FF00]" />
                    </div>
                  </div>
                  
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-1 bg-[#2A2A2A] rounded" />
                      <div className="text-[8px] font-mono text-[#6B6150] uppercase tracking-wider">Model {index + 1}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-sm bg-[#8B7B58] border border-[#6B5B38] shadow-inner" />
                      <div className="w-2 h-2 rounded-full bg-[#4A4A4A] border border-[#3A3A3A]" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-20 h-8 bg-gradient-to-b from-[#C4B998] to-[#B4A988] border-x-2 border-[#A89878]" />
                </div>
                <div className="flex justify-center">
                  <div className="w-32 h-3 bg-gradient-to-b from-[#B4A988] to-[#A49978] rounded-b-lg shadow-lg border-2 border-t-0 border-[#948868]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
