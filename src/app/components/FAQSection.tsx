'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const faqs = [
  {
    q: 'What is the difference between biodegradable and compostable bags?',
    a: 'Biodegradable bags break down naturally over time, but the timeframe can vary greatly. Compostable bags (like ours) are a subset that break down within 90–180 days in industrial composting conditions, leaving no harmful residues — just organic matter.',
  },
  {
    q: 'Are your bags compliant with India\'s plastic ban?',
    a: 'Yes. All our products are CPCB-approved and comply with India\'s Plastic Waste Management Rules. They are safe substitutes under the Single-Use Plastics ban notification.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'We cater to businesses of all sizes. Minimum order quantities vary by product type. Please contact us at dexterindustries14@gmail.com or call +91-8014127214 for a customized quote.',
  },
  {
    q: 'Can you do custom printing and branding on bags?',
    a: 'Absolutely. We offer custom printing with your company logo, brand colors, and messaging. Flexographic printing is available on most bag types with a minimum order.',
  },
  {
    q: 'Do your bags hold up in humid / monsoon conditions?',
    a: 'Our bags are engineered for Indian climatic conditions. They maintain structural integrity during normal use. Degradation only begins under specific composting conditions (moisture + microbes + heat) — not in everyday storage or use.',
  },
  {
    q: 'How do I get certificates for my records?',
    a: 'We provide original CPCB, CIPET, and ISO 17088 certification documents with every bulk order. You can also request copies by emailing dexterindustries14@gmail.com.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 md:py-28 relative z-10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <div className="w-8 h-px bg-primary" />
            FAQ
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="section-title font-extrabold text-foreground mb-4">
            Common <span className="text-gradient-green">Questions</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Everything you need to know about biodegradable and compostable bags.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-subtle rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-foreground text-sm md:text-base leading-snug">{faq.q}</span>
                <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-primary text-primary-foreground rotate-45' : 'bg-secondary text-foreground'}`}>
                  <Icon name="PlusIcon" size={14} variant="outline" />
                </div>
              </button>
              <div className={`faq-content ${openIndex === i ? 'open' : ''}`}>
                <div className="overflow-hidden">
                  <p className="px-5 md:px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}