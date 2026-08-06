'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const highlights = [
{ icon: 'GlobeAltIcon', text: 'Serving businesses across Gujarat & India' },
{ icon: 'ShieldCheckIcon', text: 'CPCB & GPCB approved manufacturer' },
{ icon: 'SparklesIcon', text: 'Zero-plastic, 100% earth-safe materials' }];


export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
              el.classList.add('in-view');
            });
            const imageReveal = entry.target.querySelector('.image-reveal') as HTMLElement;
            if (imageReveal) {
              const overlay = imageReveal.querySelector('.reveal-overlay') as HTMLElement;
              setTimeout(() => {
                if (overlay) overlay.classList.add('revealed');
                imageReveal.classList.add('revealed');
              }, 200);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative animate-on-scroll">
            <div className="image-reveal rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
              <div className="reveal-overlay" />
              <AppImage
                src="https://images.unsplash.com/photo-1595755973454-6f57c3ece624"
                alt="Green plant growing from compost soil in bright sunlit outdoor setting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" />
              
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl p-5 border border-subtle z-20 animate-on-scroll stagger-2">
              <div className="text-3xl font-extrabold text-primary tracking-tight">15+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1 font-medium">Years of Excellence</div>
            </div>
            <div className="absolute -top-6 -left-4 md:-left-8 bg-primary text-primary-foreground rounded-2xl shadow-xl p-5 z-20 animate-on-scroll stagger-1">
              <Icon name="LeafIcon" size={28} variant="solid" />
              <div className="text-xs uppercase tracking-wider mt-2 opacity-80 font-medium">100% Eco-Safe</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-7">
            <div className="animate-on-scroll stagger-1">
              <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
                <div className="w-8 h-px bg-primary" />
                About Dexter Industries
              </div>
              <h2 className="section-title font-extrabold text-foreground">
                Packaging That<br />
                <span className="text-gradient-green">Gives Back</span><br />
                to the Earth
              </h2>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed animate-on-scroll stagger-2">
              At Dexter Industries, we are passionate about making a positive impact on the environment. Based in Bhavnagar, Gujarat, we manufacture 100% biodegradable and compostable bags — providing eco-friendly, sustainable alternatives to everyday plastic products.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed animate-on-scroll stagger-3">
              Our mission is to help Indian businesses comply with plastic ban regulations while reducing our collective environmental footprint — one bag at a time. Every product we make is certified, tested, and proven to decompose naturally.
            </p>

            <div className="space-y-3 animate-on-scroll stagger-4">
              {highlights.map((item) =>
              <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name={item.icon as 'GlobeAltIcon'} size={16} variant="outline" className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              )}
            </div>

            <div className="animate-on-scroll stagger-5">
              <a
                href="#products"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
                
                Explore Our Products
                <Icon name="ArrowRightIcon" size={16} variant="outline" className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}