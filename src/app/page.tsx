'use client';

import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';

import AOS from 'aos';
import 'aos/dist/aos.css';
import {  useEffect } from 'react';
// import dynamic from 'next/dynamic'

// const Skills = dynamic(() => import('@/components/Skills/Skills'), {
//   ssr: false
// });

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
