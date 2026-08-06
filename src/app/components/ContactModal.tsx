'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Inquiry from ${form.name} — Dexter Industries`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:dexterindustries14@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div ref={modalRef} className="modal-enter bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-subtle px-6 py-4 flex items-center justify-between z-10 rounded-t-2xl">
          <div>
            <h2 id="modal-title" className="font-extrabold text-foreground text-lg">Send Us a Message</h2>
            <p className="text-xs text-muted-foreground">We reply within 24 hours on business days</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-border transition-colors"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={16} variant="outline" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircleIcon" size={36} variant="solid" className="text-primary" />
            </div>
            <h3 className="font-extrabold text-foreground text-xl mb-2">Message Ready to Send!</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Your email client should open. If it doesn&apos;t, please email us directly at{' '}
              <a href="mailto:dexterindustries14@gmail.com" className="text-primary font-medium">dexterindustries14@gmail.com</a>
            </p>
            <button
              onClick={onClose}
              className="bg-primary text-primary-foreground px-7 py-3 rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-name" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  id="modal-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-input rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-ring focus:ring-1 focus:ring-ring bg-background transition-colors"
                />
              </div>
              <div>
                <label htmlFor="modal-phone" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp
                </label>
                <input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91-XXXXXXXXXX"
                  className="w-full border border-input rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-ring focus:ring-1 focus:ring-ring bg-background transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="modal-email" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <input
                id="modal-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border border-input rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-ring focus:ring-1 focus:ring-ring bg-background transition-colors"
              />
            </div>

            <div>
              <label htmlFor="modal-subject" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Inquiry Type
              </label>
              <select
                id="modal-subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full border border-input rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-ring focus:ring-1 focus:ring-ring bg-background transition-colors"
              >
                <option value="">Select inquiry type</option>
                <option value="Product Quote — Biodegradable Bags">Product Quote</option>
                <option value="Certification Request">Certificate Request</option>
                <option value="Custom Printing / Branding">Custom Printing</option>
                <option value="Bulk Order Inquiry">Bulk Order</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="modal-message" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Your Message *
              </label>
              <textarea
                id="modal-message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your bag requirements — type, quantity, size, custom printing needs..."
                className="w-full border border-input rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-ring focus:ring-1 focus:ring-ring bg-background transition-colors resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Icon name="LockClosedIcon" size={12} variant="solid" className="text-primary" />
                Sends to dexterindustries14@gmail.com
              </div>
              <button
                type="submit"
                className="group bg-primary text-primary-foreground px-6 py-3 rounded-md font-bold text-sm hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                Send Message
                <Icon name="PaperAirplaneIcon" size={14} variant="solid" className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}