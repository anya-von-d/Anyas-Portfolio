import { useEffect, useState, useRef } from 'react';

const codeLines = [
  { text: 'import ', color: 'text-[#C586C0]' },
  { text: 'express, { ', color: 'text-white' },
  { text: 'type ', color: 'text-[#569CD6]' },
  { text: 'Request, Response, NextFunction } ', color: 'text-[#4EC9B0]' },
  { text: 'from ', color: 'text-[#C586C0]' },
  { text: '"express"', color: 'text-[#CE9178]' },
  { text: ';', color: 'text-white' },
  { text: '\n', color: '' },
  { text: 'import ', color: 'text-[#C586C0]' },
  { text: '{ registerRoutes } ', color: 'text-[#4EC9B0]' },
  { text: 'from ', color: 'text-[#C586C0]' },
  { text: '"./routes"', color: 'text-[#CE9178]' },
  { text: ';', color: 'text-white' },
  { text: '\n', color: '' },
  { text: 'import ', color: 'text-[#C586C0]' },
  { text: '{ setupVite, serveStatic, log } ', color: 'text-[#4EC9B0]' },
  { text: 'from ', color: 'text-[#C586C0]' },
  { text: '"./vite"', color: 'text-[#CE9178]' },
  { text: ';', color: 'text-white' },
  { text: '\n\n', color: '' },
  { text: 'const ', color: 'text-[#569CD6]' },
  { text: 'app ', color: 'text-[#4FC1FF]' },
  { text: '= ', color: 'text-white' },
  { text: 'express', color: 'text-[#DCDCAA]' },
  { text: '();', color: 'text-white' },
  { text: '\n\n', color: '' },
  { text: 'declare ', color: 'text-[#569CD6]' },
  { text: 'module ', color: 'text-[#569CD6]' },
  { text: "'http'", color: 'text-[#CE9178]' },
  { text: ' {', color: 'text-white' },
  { text: '\n', color: '' },
  { text: '  interface ', color: 'text-[#569CD6]' },
  { text: 'IncomingMessage ', color: 'text-[#4EC9B0]' },
  { text: '{', color: 'text-white' },
  { text: '\n', color: '' },
  { text: '    rawBody: ', color: 'text-[#9CDCFE]' },
  { text: 'unknown', color: 'text-[#4EC9B0]' },
  { text: '\n', color: '' },
  { text: '  }', color: 'text-white' },
  { text: '\n', color: '' },
  { text: '}', color: 'text-white' },
  { text: '\n\n', color: '' },
  { text: 'app', color: 'text-[#4FC1FF]' },
  { text: '.', color: 'text-white' },
  { text: 'use', color: 'text-[#DCDCAA]' },
  { text: '(express.', color: 'text-white' },
  { text: 'json', color: 'text-[#DCDCAA]' },
  { text: '({', color: 'text-white' },
  { text: '\n', color: '' },
  { text: '  verify: ', color: 'text-[#9CDCFE]' },
  { text: '(req, _res, buf) ', color: 'text-[#9CDCFE]' },
  { text: '=> ', color: 'text-[#569CD6]' },
  { text: '{', color: 'text-white' },
  { text: '\n', color: '' },
  { text: '    req.rawBody = buf;', color: 'text-white' },
  { text: '\n', color: '' },
  { text: '  }', color: 'text-white' },
  { text: '\n', color: '' },
  { text: '}));', color: 'text-white' },
  { text: '\n\n', color: '' },
  { text: 'app', color: 'text-[#4FC1FF]' },
  { text: '.', color: 'text-white' },
  { text: 'use', color: 'text-[#DCDCAA]' },
  { text: '(express.', color: 'text-white' },
  { text: 'urlencoded', color: 'text-[#DCDCAA]' },
  { text: '({ extended: ', color: 'text-white' },
  { text: 'false ', color: 'text-[#569CD6]' },
  { text: '}));', color: 'text-white' },
  { text: '\n\n', color: '' },
  { text: 'app', color: 'text-[#4FC1FF]' },
  { text: '.', color: 'text-white' },
  { text: 'use', color: 'text-[#DCDCAA]' },
  { text: '((req, res, next) ', color: 'text-[#9CDCFE]' },
  { text: '=> ', color: 'text-[#569CD6]' },
  { text: '{', color: 'text-white' },
  { text: '\n', color: '' },
  { text: '  const ', color: 'text-[#569CD6]' },
  { text: 'start ', color: 'text-[#4FC1FF]' },
  { text: '= Date.', color: 'text-white' },
  { text: 'now', color: 'text-[#DCDCAA]' },
  { text: '();', color: 'text-white' },
  { text: '\n', color: '' },
  { text: '  const ', color: 'text-[#569CD6]' },
  { text: 'path ', color: 'text-[#4FC1FF]' },
  { text: '= req.path;', color: 'text-white' },
  { text: '\n', color: '' },
  { text: '  let ', color: 'text-[#569CD6]' },
  { text: 'capturedJsonResponse: ', color: 'text-[#4FC1FF]' },
  { text: 'Record', color: 'text-[#4EC9B0]' },
  { text: '<string, any> | ', color: 'text-white' },
  { text: 'undefined ', color: 'text-[#569CD6]' },
  { text: '= ', color: 'text-white' },
  { text: 'undefined', color: 'text-[#569CD6]' },
  { text: ';', color: 'text-white' },
];

export default function CodeBackground() {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const totalChars = codeLines.reduce((acc, line) => acc + line.text.length, 0);
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex <= totalChars) {
        setDisplayedChars(charIndex);
        charIndex++;
      } else {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [isVisible]);

  const renderCode = () => {
    let currentCharCount = 0;
    const elements: JSX.Element[] = [];

    for (let i = 0; i < codeLines.length; i++) {
      const line = codeLines[i];
      const lineStart = currentCharCount;
      const lineEnd = currentCharCount + line.text.length;

      if (lineStart >= displayedChars) break;

      const visibleLength = Math.min(line.text.length, displayedChars - lineStart);
      const visibleText = line.text.substring(0, visibleLength);

      if (line.text === '\n' || line.text === '\n\n') {
        elements.push(<span key={i}>{visibleText}</span>);
      } else {
        elements.push(
          <span key={i} className={line.color}>
            {visibleText}
          </span>
        );
      }

      currentCharCount = lineEnd;
    }

    return elements;
  };

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
    >
      <div className="absolute left-4 md:left-8 top-20 max-w-[45%] opacity-30">
        <pre className="font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap">
          {renderCode()}
          <span className="inline-block w-2 h-4 bg-white/50 animate-pulse ml-0.5" />
        </pre>
      </div>
    </div>
  );
}
