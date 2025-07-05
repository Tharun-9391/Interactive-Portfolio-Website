'use client';

import { useState, useEffect } from 'react';
import Loader from '@/components/layout/loader';
import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Certificates from '@/components/sections/certificates';
import Experience from '@/components/sections/experience';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import PhotoGallery from '@/components/sections/photo-gallery';
import Socials from '@/components/sections/socials';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <PhotoGallery />
        <Experience />
        <Socials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
