'use client';

import React from 'react';
import ProfileSection from '@/components/landing/ProfileSection';
import ActionButtons from '@/components/landing/ActionButtons';
import ContactInfo from '@/components/landing/ContactInfo';
import ServicesSection from '@/components/landing/ServicesSection';
import CtaSection from '@/components/landing/CtaSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-amber-950 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/80 via-slate-900/60 to-amber-900/80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(180,83,9,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <main className="relative z-10 max-w-md mx-auto px-6 py-16">
        <ProfileSection />
        <ActionButtons />
        <ContactInfo />
        <ServicesSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}