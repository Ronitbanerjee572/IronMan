import React from 'react';
import Hero from './pages/Hero';
import SecondPage from './pages/secondPage';
import IronManArmory from './pages/IronManArmory';
import MobileScrollLock from './component/MobileLock';
import CardNav from './component/CardNav';
import logo from "./assets/HeroImages/hero-helmet-outline.png";

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
      {/* <IronManArmory /> */}
      
      {/* Mobile-only interaction lock */}
      <MobileScrollLock />
    </main>
  );
}

export default App;
