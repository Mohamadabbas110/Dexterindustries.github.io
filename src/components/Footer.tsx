import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-subtle bg-background pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">
          {/* Left: Brand */}
          <div className="lg:max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2C11 2 4 6 4 12C4 15.866 7.134 19 11 19C14.866 19 18 15.866 18 12C18 6 11 2 11 2Z" fill="white" fillOpacity="0.9"/>
                  <path d="M11 5C11 5 7 8 7 12C7 14.209 8.791 16 11 16" stroke="#7AB648" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="11" cy="19" r="1.5" fill="#7AB648"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">DEXTER INDUSTRIES</div>
                <div className="text-[10px] text-muted-foreground tracking-wider uppercase">Bhavnagar, Gujarat</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Packaging that gives back to the earth. CPCB-certified biodegradable &amp; compostable bags manufactured in India.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="space-y-3">
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Navigate</div>
              <div className="flex flex-col gap-2">
                {['#about', '#products', '#certifications', '#process', '#contact']?.map((href, i) => (
                  <a key={href} href={href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {['About Us', 'Products', 'Certifications', 'Process', 'Contact']?.[i]}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Contact</div>
              <div className="flex flex-col gap-2">
                <a href="tel:+918014127214" className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Icon name="PhoneIcon" size={14} variant="solid" className="text-primary" />
                  +91-8014127214
                </a>
                <a href="mailto:dexterindustries14@gmail.com" className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Icon name="EnvelopeIcon" size={14} variant="solid" className="text-primary" />
                  dexterindustries14@gmail.com
                </a>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <Icon name="MapPinIcon" size={14} variant="solid" className="text-primary" />
                  Bhavnagar, Gujarat, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-subtle pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Dexter Industries. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/918014127214" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
                <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={18} variant="solid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}