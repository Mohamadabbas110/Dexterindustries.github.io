'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onOpenModal: () => void;
}

const stats = [
{ icon: 'TruckIcon', value: '500+', label: 'Tonnes Produced' },
{ icon: 'CheckBadgeIcon', value: '6+', label: 'Certifications' },
{ icon: 'UserGroupIcon', value: '40+', label: 'Team Members' }];


export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (revealRef.current) {
        const overlay = revealRef.current.querySelector('.reveal-overlay') as HTMLElement;
        const img = revealRef.current as HTMLElement;
        if (overlay) overlay.classList.add('revealed');
        img.classList.add('revealed');
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 md:pt-36 pb-0">
      {/* Background blobs */}
      <div className="blob-bg blob-animate w-96 h-96 bg-accent/10 top-10 -right-20 opacity-60" style={{ position: 'absolute' }} />
      <div className="blob-bg blob-animate w-80 h-80 bg-primary/8 bottom-20 -left-10 opacity-40" style={{ position: 'absolute', animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left: Text */}
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1 space-y-7">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase border border-primary/20">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              CPCB Certified Manufacturer
            </div>

            <h1 className="hero-title font-extrabold text-foreground">
              Bags That<br />
              <span className="text-gradient-green">Heal</span><br />
              The Earth
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              100% biodegradable &amp; compostable alternatives to plastic. Manufactured in Bhavnagar, Gujarat — compliant with India&apos;s plastic ban regulations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenModal}
                className="group bg-primary text-primary-foreground px-8 py-4 text-sm font-bold tracking-wide uppercase rounded-md hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                
                Get A Free Quote
                <Icon name="ArrowRightIcon" size={16} variant="outline" className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#products"
                className="group border-2 border-border text-foreground px-8 py-4 text-sm font-bold tracking-wide uppercase rounded-md hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-3">
                
                View Products
                <Icon name="ChevronDownIcon" size={16} variant="outline" className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
            <div className="relative">
              {/* Big background text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
                <span className="font-extrabold text-primary/5 whitespace-nowrap" style={{ fontSize: 'clamp(5rem, 18vw, 16rem)', letterSpacing: '-0.05em', lineHeight: 1 }}>
                  ECO
                </span>
              </div>

              <div ref={revealRef} className="image-reveal relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/10]">
                <div className="reveal-overlay" />
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_120ba66dc-1773119725332.png"
                  alt="Lush green forest with tall trees and sunlight filtering through leaves — bright airy natural environment"
                  fill
                  className="object-cover"
                  priority />
                
                {/* Scrim for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent z-10" />

                {/* Floating badge */}
                <div className="absolute top-5 left-5 z-20 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-border">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Material</div>
                  <div className="font-bold text-foreground text-sm">Certified Compostable</div>
                </div>

                <div className="absolute bottom-5 right-5 z-20 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg">
                  <div className="text-[10px] uppercase tracking-wider mb-0.5 opacity-80">Standard</div>
                  <div className="font-bold text-sm">ISO 17088 Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 border border-subtle bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm">
          {stats.map((stat, i) =>
          <div
            key={stat.label}
            className={`flex items-center gap-5 p-6 hover:bg-white transition-colors ${i < stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-subtle' : ''}`}>
            
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Icon name={stat.icon as 'TruckIcon'} size={22} variant="solid" className="text-primary" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-foreground tracking-tight">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-border overflow-hidden relative">
          <div className="scroll-line-anim absolute top-0 left-0 w-full h-full bg-primary" />
        </div>
      </div>
    </section>);

}