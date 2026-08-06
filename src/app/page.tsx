'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import WhyChooseSection from './components/WhyChooseSection';
import CertificationsSection from './components/CertificationsSection';
import ScrollRevealSection from './components/ScrollRevealSection';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import ContactModal from './components/ContactModal';
import WhatsAppButton from './components/WhatsAppButton';

// Grid background lines
function GridBackground() {
  return (
    <div className="grid-bg pointer-events-none" aria-hidden="true">
      <div className="grid-inner">
        <div className="grid-line" />
        <div className="grid-line hidden md:block" />
        <div className="grid-line hidden lg:block" />
        <div className="grid-line" />
      </div>
    </div>
  );
}

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <GridBackground />
      <Header onOpenModal={() => setModalOpen(true)} />

      <HeroSection onOpenModal={() => setModalOpen(true)} />
      <AboutSection />
      <ScrollRevealSection />
      <ProductsSection />
      <WhyChooseSection />
      <CertificationsSection />
      <ProcessSection />
      <FAQSection />
      <ContactSection onOpenModal={() => setModalOpen(true)} />

      <Footer />
      <WhatsAppButton />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}