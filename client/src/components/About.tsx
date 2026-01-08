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

          <div className="grid md:grid-cols-3 gap-10">
            {focuses.map((focus, index) => (
              <div
                key={focus.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-focus-${focus.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="bg-gradient-to-b from-[#E8DFC4] via-[#D8CFA4] to-[#C8BF94] rounded-[20px] p-5 shadow-2xl hover-elevate active-elevate-2 transition-all cursor-default border-4 border-[#B8A874]">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex gap-[3px]">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-[3px] h-3 bg-[#8B7B48] rounded-sm" />
                      ))}
                    </div>
                    <div className="text-[7px] font-mono text-[#6B5B38] font-bold tracking-widest">RETROCOMP</div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -inset-1 bg-[#2A2A2A] rounded-xl" />
                    <div className="relative bg-[#0A1408] rounded-lg p-4 min-h-[160px] border-[12px] border-[#1A1A1A] shadow-[inset_0_0_40px_rgba(0,0,0,0.9),inset_0_0_80px_rgba(0,50,0,0.3)]">
                      <div 
                        className="absolute inset-0 pointer-events-none opacity-30 rounded"
                        style={{
                          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 rounded pointer-events-none" />
                      <div className="relative z-10">
                        <div className="text-[#33FF33] font-mono text-[10px] mb-1 opacity-70">C:\FOCUS\</div>
                        <h3 className="font-mono font-bold text-sm mb-2 text-[#33FF33] drop-shadow-[0_0_8px_#00FF00]">&gt; {focus.title.toUpperCase()}</h3>
                        <p className="text-[#22CC22] font-mono text-[11px] leading-relaxed drop-shadow-[0_0_2px_#00FF00]">{focus.description}</p>
                        <div className="mt-3 flex items-center">
                          <span className="text-[#33FF33] font-mono text-xs">_</span>
                          <span className="inline-block w-2 h-4 bg-[#33FF33] animate-pulse ml-1 shadow-[0_0_8px_#00FF00]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-[3px] bg-[#5A4A28] rounded" />
                      <div className="w-6 h-[3px] bg-[#5A4A28] rounded" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-gradient-to-b from-[#7A6A48] to-[#5A4A28] border-2 border-[#4A3A18] shadow-inner flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#3A2A08]" />
                      </div>
                      <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#4A4A4A] to-[#2A2A2A] border border-[#1A1A1A]">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 m-[2px] shadow-[0_0_4px_red] animate-pulse" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 h-4 bg-[#3A3A3A] rounded-sm flex items-center px-2 gap-1">
                    <div className="flex-1 h-[2px] bg-[#2A2A2A]" />
                    <div className="text-[6px] text-[#6A6A6A] font-mono">5.25" FLOPPY</div>
                    <div className="flex-1 h-[2px] bg-[#2A2A2A]" />
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-24 h-10 bg-gradient-to-b from-[#C8BF94] to-[#A8A074] border-x-4 border-[#989064]" />
                </div>
                <div className="flex justify-center">
                  <div className="w-40 h-4 bg-gradient-to-b from-[#A8A074] to-[#888054] rounded-b-xl shadow-xl border-4 border-t-0 border-[#787044]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
