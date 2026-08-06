'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Certificates', href: '#certifications' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+918014127214" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Icon name="PhoneIcon" size={12} variant="solid" />
              +91-8014127214
            </a>
            <a href="mailto:dexterindustries14@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Icon name="EnvelopeIcon" size={12} variant="solid" />
              dexterindustries14@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            <span className="tracking-wider uppercase">Bhavnagar, Gujarat, India</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`fixed top-0 md:top-[33px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-subtle'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2C11 2 4 6 4 12C4 15.866 7.134 19 11 19C14.866 19 18 15.866 18 12C18 6 11 2 11 2Z" fill="white" fillOpacity="0.9"/>
                <path d="M11 5C11 5 7 8 7 12C7 14.209 8.791 16 11 16" stroke="#7AB648" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="11" cy="19" r="1.5" fill="#7AB648"/>
              </svg>
            </div>
            <div>
              <div className={`font-bold text-base tracking-tight leading-none transition-colors ${scrolled ? 'text-foreground' : 'text-foreground'}`}>
                DEXTER
              </div>
              <div className={`text-[10px] tracking-[0.25em] uppercase font-medium leading-none mt-0.5 transition-colors ${scrolled ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
                Industries
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-pill px-4 py-2 text-sm font-medium text-foreground rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenModal}
              className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={16} variant="solid" />
              Get A Quote
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <Icon name="XMarkIcon" size={24} variant="outline" />
              : <Icon name="Bars3Icon" size={24} variant="outline" />
            }
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8"
          onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-4 text-lg font-semibold text-foreground border-b border-subtle hover:text-primary transition-colors"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => { onOpenModal(); setMenuOpen(false); }}
            className="mt-8 bg-primary text-primary-foreground py-4 text-base font-semibold rounded-lg flex items-center justify-center gap-2"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={18} variant="solid" />
            Get A Quote
          </button>
          <div className="mt-auto pt-8 space-y-3 text-sm text-muted-foreground">
            <a href="tel:+918014127214" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="PhoneIcon" size={16} variant="solid" />
              +91-8014127214
            </a>
            <a href="mailto:dexterindustries14@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="EnvelopeIcon" size={16} variant="solid" />
              dexterindustries14@gmail.com
            </a>
          </div>
        </div>
      )}
    </>
  );
}