'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import PlanSection from '@/components/PlanSection';
import FeaturedWork from '@/components/FeaturedWork';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingCat from '@/components/LoadingCat';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadedBefore, setHasLoadedBefore] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = sessionStorage.getItem('hasVisitedHome');
    
    if (hasVisited) {
      // Skip loading screen on subsequent visits in same session
      setIsLoading(false);
      setHasLoadedBefore(true);
    } else {
      // First visit - show loading screen
      sessionStorage.setItem('hasVisitedHome', 'true');
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading && !hasLoadedBefore) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-neutral dark:bg-gray-900">
        <LoadingCat size="lg" message="Welcome to The Tech Writer..." />
      </div>
    );
  }
  return (
    <>
      <Navigation />
      <main className="dark:bg-gray-900 bg-gray-50">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PlanSection />
        <FeaturedWork />
        <AboutSection />
        <BlogSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
