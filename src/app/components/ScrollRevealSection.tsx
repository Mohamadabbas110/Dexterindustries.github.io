'use client';

import React, { useEffect, useRef } from 'react';

const words = [
  'Stop', 'using', 'plastic.', 'Start', 'choosing',
  'bags', 'that', 'decompose,', 'not', 'pollute.',
  'Certified.', 'Compliant.', 'Made', 'in', 'India.',
];

export default function ScrollRevealSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const startReveal = winH * 0.9;
      const endReveal = winH * 0.2;
      let progress = (startReveal - rect.top) / (startReveal - endReveal);
      progress = Math.max(0, Math.min(1, progress));
      const activeCount = Math.floor(progress * words.length);
      wordRefs.current.forEach((w, i) => {
        if (!w) return;
        if (i < activeCount) w.classList.add('active');
        else w.classList.remove('active');
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary border-y border-subtle relative z-10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-3xl md:text-5xl font-extrabold leading-relaxed tracking-tight">
          {words.map((word, i) => {
            const isHighlighted = word === 'Certified.' || word === 'Compliant.' || word === 'India.';
            return (
              <React.Fragment key={i}>
                <span
                  ref={(el) => { wordRefs.current[i] = el; }}
                  className={`reveal-word inline-block mx-1 ${isHighlighted ? 'text-primary' : 'text-foreground'}`}
                >
                  {word}
                </span>
                {' '}
              </React.Fragment>
            );
          })}
        </p>
      </div>
    </section>
  );
}