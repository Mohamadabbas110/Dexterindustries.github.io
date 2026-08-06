'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
{
  num: '01',
  title: 'Raw Material Sourcing',
  desc: 'We source certified compostable resins (PLA, PBAT, Starch blends) from verified suppliers meeting IS/ISO 17088 standards.',
  icon: 'BeakerIcon'
},
{
  num: '02',
  title: 'Precision Manufacturing',
  desc: 'State-of-the-art extrusion and bag-making machinery at our Bhavnagar plant ensures consistent thickness and strength in every batch.',
  icon: 'CogIcon'
},
{
  num: '03',
  title: 'Quality Testing',
  desc: 'Every production batch undergoes tensile strength, elongation, and biodegradability testing at CIPET-certified labs.',
  icon: 'MagnifyingGlassIcon'
},
{
  num: '04',
  title: 'Finishing & Dispatch',
  desc: 'Custom printing, branding, and eco-packaging before dispatch. Pan-India delivery within 5–7 business days.',
  icon: 'TruckIcon'
}];


const workflowImages = [
{
  src: "https://images.unsplash.com/photo-1630959302878-a30de73cdbb5",
  alt: 'Laboratory scientist examining materials in bright well-lit research facility'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1715f7cdd-1768822494793.png",
  alt: 'Modern manufacturing machinery in bright clean industrial facility'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_11787a919-1775382996929.png",
  alt: 'Quality control inspector examining products in bright clean lab environment'
},
{
  src: "https://images.unsplash.com/photo-1645768142762-8f13eeed3138",
  alt: 'Packaged boxes ready for delivery in bright organized warehouse'
}];


export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step'));
            setActiveStep(index);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('in-view'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) scrollObserver.observe(sectionRef.current);
    return () => scrollObserver.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative z-10 border-y border-subtle">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse">
          {/* Sticky right panel */}
          <div className="lg:w-1/2 lg:sticky lg:top-20 lg:h-screen flex flex-col justify-center py-12 lg:py-20 lg:pl-16 border-l-0 lg:border-l border-subtle">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
                <div className="w-8 h-px bg-primary" />
                How We Work
              </div>
              <h2 className="section-title font-extrabold text-foreground mb-8">
                Our<br />
                <span className="text-gradient-green">Process</span>
              </h2>
            </div>

            {/* Step indicators */}
            <div className="space-y-5 mb-10 hidden lg:block">
              {steps.map((step, i) =>
              <div key={step.num} className="flex items-center gap-5">
                  <div className="h-10 w-0.5 relative overflow-hidden shrink-0">
                    <div className={`step-line absolute top-0 left-0 w-full h-full ${activeStep === i ? 'active' : ''}`} />
                  </div>
                  <div>
                    <div className={`font-bold text-sm step-label ${activeStep === i ? 'active' : ''}`}>
                      {step.num} / {step.title}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Workflow image */}
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-subtle relative hidden lg:block">
              {workflowImages.map((img, i) =>
              <div
                key={i}
                className={`workflow-img absolute inset-0 ${activeStep === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                
                  <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover" />
                
                </div>
              )}
            </div>
          </div>

          {/* Left scrolling steps */}
          <div className="lg:w-1/2 lg:pr-16">
            <div className="h-0 lg:h-[15vh]" />
            {steps.map((step, i) =>
            <div
              key={step.num}
              ref={(el) => {stepRefs.current[i] = el;}}
              data-step={i}
              className="min-h-[50vh] lg:min-h-[70vh] flex flex-col justify-center py-12 lg:py-16 border-b border-subtle last:border-b-0">
              
                <div className="text-7xl font-extrabold text-foreground/5 mb-4 leading-none">
                  {step.num}
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={step.icon as 'BeakerIcon'} size={20} variant="solid" className="text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-foreground">{step.title}</h3>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed max-w-md">{step.desc}</p>

                {/* Mobile image */}
                <div className="mt-6 rounded-xl overflow-hidden aspect-video lg:hidden">
                  <img
                  src={workflowImages[i].src}
                  alt={workflowImages[i].alt}
                  className="w-full h-full object-cover" />
                
                </div>
              </div>
            )}
            <div className="h-0 lg:h-[15vh]" />
          </div>
        </div>
      </div>
    </section>);

}