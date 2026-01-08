import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Download } from 'lucide-react';
import BinaryBackground from './BinaryBackground';

const profileImage = '/attached_assets/Screenshot_2026-01-08_at_10.43.03_AM_1767897786990.png';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'AI Researcher & Computer Scientist';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden" data-testid="section-hero">
      <BinaryBackground />
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-white" data-testid="text-name">
              Anya Von Diessl
            </h1>

            <div className="h-12">
              <p className="font-mono text-xl md:text-2xl text-gray-400" data-testid="text-role">
                {displayedText}
                <span className={`inline-block w-0.5 h-6 ml-1 bg-gray-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-sm text-gray-500 flex-wrap">
              <span>Stanford University</span>
              <span className="text-gray-400">•</span>
              <span>MS Computer Science (AI)</span>
              <span className="text-gray-400">•</span>
              <span>Palo Alto, CA</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="gap-2 bg-white text-black hover:bg-gray-200"
                data-testid="button-contact"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="!border-white/50 text-white hover:bg-white/10"
                data-testid="button-linkedin"
              >
                <a
                  href="https://www.linkedin.com/in/anya-von-diessl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative animate-float">
              <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-white/30 shadow-2xl shadow-black/50 rounded-none">
                <AvatarImage src={profileImage} alt="Anya Von Diessl" className="object-cover" />
                <AvatarFallback className="text-6xl font-display bg-gray-800 text-white">AVD</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 bg-white/5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
