'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const products = [
{
  name: 'Grocery Carry Bags',
  desc: 'Lightweight, durable biodegradable bags for kirana stores and supermarkets.',
  tag: 'Most Popular',
  image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800&q=80',
  alt: 'Bright white grocery shopping bags on clean light background well-lit studio'
},
{
  name: 'Garbage & Waste Bags',
  desc: 'Heavy-duty compostable bags for household and commercial waste management.',
  tag: 'CPCB Approved',
  image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
  alt: 'Green waste bins in bright clean outdoor environment natural daylight'
},
{
  name: 'D-Cut Bags',
  desc: 'Die-cut handle bags — perfect for retail, garments, and food packaging.',
  tag: 'Retail Grade',
  image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
  alt: 'Retail shopping bags with handles in bright clean commercial setting'
},
{
  name: 'W-Cut Bags',
  desc: 'Wide-gusset W-cut bags for bulk grocery and agricultural produce.',
  tag: 'Bulk Available',
  image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
  alt: 'Fresh vegetables and produce in biodegradable bags bright outdoor market'
},
{
  name: 'T-Shirt / Loop Bags',
  desc: 'Classic T-shirt style bags — the eco-friendly replacement for plastic carry bags.',
  tag: 'Best Seller',
  image: 'https://images.unsplash.com/photo-1604719312566-8912e9c8a213?w=800&q=80',
  alt: 'Eco-friendly tote bags hanging in bright airy minimalist store setting'
},
{
  name: 'Medical & Nursery Bags',
  desc: 'Certified safe bags for medical facilities, clinics, and plant nurseries.',
  tag: 'Hospital Safe',
  image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
  alt: 'Clean medical facility with plants in bright well-lit healthcare environment'
}];


export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('in-view'), i * 80);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-20 md:py-28 bg-secondary relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <div className="w-8 h-px bg-primary" />
              Our Products
            </div>
            <h2 className="section-title font-extrabold text-foreground">
              Every Kind of<br />
              <span className="text-gradient-green">Eco Bag</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-sm animate-on-scroll stagger-2 pb-2">
            We produce a comprehensive range of biodegradable carry bags for every industry and application.
          </p>
        </div>

        {/* Products grid — BENTO AUDIT: 6 cards, grid-cols-3 desktop, grid-cols-2 tablet */}
        {/* Row 1: [col-1: Grocery cs-1] [col-2: Garbage cs-1] [col-3: D-Cut cs-1] */}
        {/* Row 2: [col-1: W-Cut cs-1] [col-2: T-Shirt cs-1] [col-3: Medical cs-1] */}
        {/* Placed 6/6 cards ✓ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products?.map((product, i) =>
          <div
            key={product?.name}
            className={`product-card animate-on-scroll rounded-xl overflow-hidden bg-white border border-subtle shadow-sm hover:shadow-lg transition-shadow`}
            style={{ transitionDelay: `${i * 80}ms` }}>
            
              <div className="aspect-[4/3] relative overflow-hidden">
                <AppImage
                src={product?.image}
                alt={product?.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              
                <div className="card-overlay" />
                <div className="absolute top-3 left-3 z-20">
                  <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                    {product?.tag}
                  </span>
                </div>
                <div className="card-info z-20">
                  <div className="text-white text-xs uppercase tracking-wider font-medium opacity-80">Biodegradable</div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-foreground mb-2">{product?.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product?.desc}</p>
                <div className="flex items-center gap-2 text-primary text-xs font-semibold hover:gap-3 transition-all cursor-pointer">
                  <span>Request Sample</span>
                  <Icon name="ArrowRightIcon" size={14} variant="outline" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}