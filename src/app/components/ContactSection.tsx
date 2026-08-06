'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactSectionProps {
  onOpenModal: () => void;
}

export default function ContactSection({ onOpenModal }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary border-t border-subtle relative z-10 overflow-hidden">
      <div className="blob-bg blob-animate w-96 h-96 bg-primary/8 top-0 -right-20 opacity-40" style={{ position: 'absolute', animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: CTA */}
          <div>
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <div className="w-8 h-px bg-primary" />
              Contact Us
            </div>
            <h2 className="section-title font-extrabold text-foreground mb-6">
              Ready to Go<br />
              <span className="text-gradient-green">Plastic-Free?</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
              Request a complimentary consultation and quote. Tell us your bag requirements and we&apos;ll respond within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              <a href="tel:+918014127214" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="PhoneIcon" size={18} variant="solid" className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Call / WhatsApp</div>
                  <div className="font-semibold text-foreground">+91-8014127214</div>
                </div>
              </a>
              <a href="mailto:dexterindustries14@gmail.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="EnvelopeIcon" size={18} variant="solid" className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Email</div>
                  <div className="font-semibold text-foreground">dexterindustries14@gmail.com</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="MapPinIcon" size={18} variant="solid" className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Location</div>
                  <div className="font-semibold text-foreground">Bhavnagar, Gujarat, India</div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wide hover:bg-primary/90 transition-all flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={18} variant="solid" />
              Send Us a Message
              <Icon name="ArrowRightIcon" size={16} variant="outline" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: Quick info card */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-subtle p-7 shadow-sm">
              <h3 className="font-bold text-foreground text-lg mb-5 flex items-center gap-2">
                <Icon name="ClockIcon" size={20} variant="solid" className="text-primary" />
                Business Hours
              </h3>
              <div className="space-y-3">
                {[
                  { day: 'Monday – Saturday', time: '9:00 AM – 6:00 PM IST' },
                  { day: 'Sunday', time: 'Closed' },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between items-center py-2 border-b border-subtle last:border-b-0">
                    <span className="text-sm font-medium text-foreground">{item.day}</span>
                    <span className="text-sm text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-7 text-primary-foreground relative overflow-hidden">
              <div className="blob-bg w-48 h-48 bg-accent/20 -top-8 -right-8 opacity-50" style={{ position: 'absolute' }} />
              <div className="relative z-10">
                <div className="text-2xl font-extrabold mb-2">Get a Quote in 24 hrs</div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed mb-5">
                  Send us your bag specifications — size, quantity, type, and any custom printing requirements.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/918014127214?text=Hi%20Dexter%20Industries%2C%20I%20need%20a%20quote%20for%20biodegradable%20bags."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary font-bold text-sm px-5 py-3 rounded-md hover:bg-secondary transition-colors flex items-center gap-2"
                  >
                    <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={16} variant="solid" />
                    WhatsApp Us
                  </a>
                  <button
                    onClick={onOpenModal}
                    className="border border-primary-foreground/30 text-primary-foreground font-semibold text-sm px-5 py-3 rounded-md hover:bg-white/10 transition-colors"
                  >
                    Email Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}