'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const features = [
  {
    icon: 'ShieldCheckIcon',
    title: '100% Certified',
    desc: 'CPCB, CIPET, GPCB, and ISO 17088 certified. Every product meets India\'s strictest standards for biodegradability.',
  },
  {
    icon: 'LeafIcon',
    title: 'Truly Compostable',
    desc: 'Our bags decompose in 90–180 days in industrial compost conditions, leaving zero microplastics behind.',
  },
  {
    icon: 'CurrencyRupeeIcon',
    title: 'Competitive Pricing',
    desc: 'Eco-friendly doesn\'t mean expensive. We offer volume pricing for businesses of all sizes across India.',
  },
  {
    icon: 'TruckIcon',
    title: 'Pan-India Supply',
    desc: 'Reliable logistics from our Bhavnagar facility to businesses across Gujarat and all Indian states.',
  },
];

const stats = [
  { target: 500, suffix: '+', label: 'Tonnes Produced', prefix: '' },
  { target: 15, suffix: '+', label: 'Production Machines', prefix: '' },
  { target: 40, suffix: '+', label: 'Skilled Workforce', prefix: '' },
  { target: 100, suffix: '%', label: 'Plastic-Free Products', prefix: '' },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [countersStarted, setCountersStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('in-view'), i * 100);
            });
            if (!countersStarted) {
              setCountersStarted(true);
              startCounters();
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [countersStarted]);

  function startCounters() {
    const duration = 1800;
    const startTime = performance.now();

    function update(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);

      setCounts(stats.map((s) => Math.floor(s.target * ease)));

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative z-10 overflow-hidden">
      {/* Decorative blob */}
      <div className="blob-bg blob-animate w-[500px] h-[500px] bg-accent/8 -top-20 -right-40 opacity-50" style={{ position: 'absolute', animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Features */}
          <div>
            <div className="animate-on-scroll">
              <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
                <div className="w-8 h-px bg-primary" />
                Why Choose Us
              </div>
              <h2 className="section-title font-extrabold text-foreground mb-10">
                Built on<br />
                <span className="text-gradient-green">Trust &amp; Science</span>
              </h2>
            </div>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`animate-on-scroll flex gap-5 p-5 bg-white rounded-xl border border-subtle hover:border-primary/30 hover:shadow-md transition-all`}
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name={feature.icon as 'ShieldCheckIcon'} size={22} variant="solid" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1.5">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats counters */}
          <div className="space-y-6 animate-on-scroll stagger-2">
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground relative overflow-hidden">
              <div className="blob-bg w-64 h-64 bg-accent/20 -top-10 -right-10 opacity-60" style={{ position: 'absolute' }} />
              <div className="relative z-10">
                <div className="text-sm font-semibold uppercase tracking-wider opacity-70 mb-6">Our Numbers</div>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, i) => (
                    <div key={stat.label} className="space-y-1">
                      <div className="text-4xl font-extrabold tracking-tight counter-value">
                        {stat.prefix}{counts[i]}{stat.suffix}
                      </div>
                      <div className="text-xs uppercase tracking-wider opacity-60 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-6 border border-subtle">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                  <Icon name="MapPinIcon" size={20} variant="solid" className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground mb-1">Made in Gujarat, India</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    Proudly designed, manufactured, and quality-tested at our Bhavnagar facility. Supporting local employment and sustainable manufacturing.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-6 border border-subtle">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                  <Icon name="DocumentCheckIcon" size={20} variant="solid" className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground mb-1">Plastic Ban Compliant</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    All products comply with India&apos;s Single-Use Plastic ban regulations. Help your business stay compliant and eco-responsible.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}