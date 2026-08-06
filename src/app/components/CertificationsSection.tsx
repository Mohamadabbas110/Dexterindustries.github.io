'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const certifications = [
  {
    name: 'CPCB Approved',
    fullName: 'Central Pollution Control Board',
    desc: 'Approved by India\'s apex environmental regulatory body.',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-700',
    badgeBg: 'bg-green-700',
  },
  {
    name: 'CIPET Certified',
    fullName: 'Central Institute of Petrochemicals Engg. & Technology',
    desc: 'Tested and certified by India\'s premier plastics technology institute.',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-700',
    badgeBg: 'bg-blue-700',
  },
  {
    name: 'ISO 17088',
    fullName: 'International Compostability Standard',
    desc: 'Meets the international standard for compostable plastics.',
    color: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-700',
  },
  {
    name: 'GPCB Approved',
    fullName: 'Gujarat Pollution Control Board',
    desc: 'State-level compliance with Gujarat environmental norms.',
    color: 'bg-teal-50 border-teal-200',
    iconColor: 'text-teal-700',
    badgeBg: 'bg-teal-700',
  },
  {
    name: 'BPA Free',
    fullName: 'Bisphenol-A Free Certified',
    desc: 'Zero harmful BPA chemicals — safe for food and medical use.',
    color: 'bg-lime-50 border-lime-200',
    iconColor: 'text-lime-700',
    badgeBg: 'bg-lime-700',
  },
  {
    name: 'IS/ISO 17088',
    fullName: 'Indian Standard for Compostable Plastics',
    desc: 'Bureau of Indian Standards approved compostable material.',
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-700',
    badgeBg: 'bg-orange-700',
  },
];

export default function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('in-view'), i * 90);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="py-20 md:py-28 bg-secondary relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 animate-on-scroll">
            <div className="w-8 h-px bg-primary" />
            Certifications
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="section-title font-extrabold text-foreground mb-4 animate-on-scroll stagger-1">
            Trusted &amp; <span className="text-gradient-green">Certified</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto animate-on-scroll stagger-2">
            Every Dexter Industries product is tested, certified, and compliant with India&apos;s most stringent environmental and quality standards.
          </p>
        </div>

        {/* Certifications bento grid */}
        {/* BENTO AUDIT: 6 cards, grid-cols-3 desktop, grid-cols-2 tablet */}
        {/* Row 1: [col-1: CPCB cs-1] [col-2: CIPET cs-1] [col-3: ISO 17088 cs-1] */}
        {/* Row 2: [col-1: GPCB cs-1] [col-2: BPA Free cs-1] [col-3: IS/ISO cs-1] */}
        {/* Placed 6/6 cards ✓ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {certifications?.map((cert, i) => (
            <div
              key={cert?.name}
              className={`cert-badge animate-on-scroll bg-white rounded-xl border ${cert?.color} p-6 flex flex-col gap-4`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-xl ${cert?.color} flex items-center justify-center border`}>
                  <Icon name="ShieldCheckIcon" size={24} variant="solid" className={cert?.iconColor} />
                </div>
                <span className={`${cert?.badgeBg} text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full`}>
                  Verified
                </span>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base mb-1">{cert?.name}</h3>
                <div className={`text-[11px] font-semibold uppercase tracking-wide mb-2 ${cert?.iconColor}`}>{cert?.fullName}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{cert?.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="animate-on-scroll bg-primary rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="blob-bg w-64 h-64 bg-accent/20 -top-10 right-10 opacity-40" style={{ position: 'absolute' }} />
          <div className="relative z-10 text-center md:text-left">
            <div className="text-primary-foreground font-bold text-xl md:text-2xl mb-2">
              All certificates available on request
            </div>
            <div className="text-primary-foreground/70 text-sm">
              Contact us to receive original certification documents and test reports.
            </div>
          </div>
          <a
            href="#contact"
            className="relative z-10 shrink-0 bg-white text-primary font-bold text-sm px-7 py-3.5 rounded-md hover:bg-secondary transition-colors flex items-center gap-2 shadow-md"
          >
            <Icon name="DocumentArrowDownIcon" size={16} variant="solid" />
            Request Certificates
          </a>
        </div>
      </div>
    </section>
  );
}