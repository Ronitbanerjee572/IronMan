import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './pages/Hero';
import SecondPage from './pages/secondPage';
import IronManArmory from './pages/IronManArmory';
import MobileScrollLock from './component/MobileLock';
import CardNav from './component/CardNav';
import logo from "./assets/HeroImages/hero-helmet-outline.png";
import Footer from './component/Footer';

const navItems = [
  { label: 'ARMORY', link: '#armory' },
  { label: 'TECHNOLOGY', link: '#tech' },
  { label: 'STARK IND.', link: '#stark' },
  { label: 'LEGACY', link: '#legacy' },
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'Instagram', link: 'https://instagram.com' },
  { label: 'GitHub', link: 'https://github.com' },
];

function App() {
  useEffect(() => {
    // Initialize Lenis for buttery smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-black">
      {/* Updated Staggered Navigation */}
      <CardNav 
        logoUrl={logo}
        items={navItems} 
        socialItems={socialItems}
        accentColor="#ff0019"
        colors={['#1a1a1a', '#ff0019', '#000000']}
        menuButtonColor="#fff"
        openMenuButtonColor="#ff0019"
        isFixed={true}
      />
      
      <Hero />
      <SecondPage />


      {/* Fourth Page - Armory inventory */}
      <IronManArmory />

      {/* Mobile-only interaction lock */}
      <MobileScrollLock />

      <Footer />
    </main>
  );
}

export default App;
