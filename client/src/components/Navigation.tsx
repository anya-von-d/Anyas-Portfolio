import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Background', href: '#coursework' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOverHero, setIsOverHero] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const heroEl = document.getElementById('hero');
    if (!heroEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsOverHero(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'education', 'coursework', 'contact'];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  const textColor = isOverHero ? 'text-[#F0F0F5]' : 'text-[#0A0A0A]';
  const textMuted = isOverHero ? 'text-[#8888A0]' : 'text-[#555566]';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${
        isOverHero
          ? 'bg-transparent'
          : 'bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E0E0E8]'
      }`}>
        <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`font-medium text-sm tracking-wide transition-colors duration-300 ${textColor}`}
          >
            Anya von Diessl
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-[#0066FF]'
                      : `${textMuted} hover:${isOverHero ? 'text-[#F0F0F5]' : 'text-[#0A0A0A]'}`
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <button
            className={`md:hidden transition-colors ${textColor}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0066FF] origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </nav>

      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-[#FAFAFA] flex flex-col items-center justify-center gap-8 pt-16"
        >
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-2xl text-[#0A0A0A] hover:text-[#0066FF] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}
