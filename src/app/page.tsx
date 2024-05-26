'use client';

import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';
import type { Metadata } from 'next';

import AOS from 'aos';
import 'aos/dist/aos.css';
import {  useEffect } from 'react';


export const metadata: Metadata = {
  title: 'sandeep Reddy - My Smart Portfolio',
};

export default function Home() {

  
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: 'bottom-bottom',
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
