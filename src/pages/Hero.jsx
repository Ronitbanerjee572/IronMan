import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiquidMask from '../components/helmateanimation';
import Waves from '../component/Waves';
import Signature from '../component/Signature';
import ScrollingText from '../component/ScrollingText';

// Asset Imports
import background from "../assets/HeroImages/Firefly (8).png";
import hoverImage from "../assets/HeroImages/Firefly (5).png";
import outlineImage from "../assets/HeroImages/Firefly (9)-Photoroom.png";

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // TIMING PHASES:
  // Hero: shrinks and turns gray
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.35]); // Shrunken like the reference image
  const heroFilter = useTransform(scrollYProgress, [0, 0.4], ["grayscale(0%) brightness(1)", "grayscale(100%) brightness(0.7)"]);
  const heroOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  
  // Signature: stays large and draws over the shrunken hero
  const signatureProgress = useTransform(scrollYProgress, [0.35, 0.8], [0, 1]);
  const signatureScale = useTransform(scrollYProgress, [0.35, 0.5], [1.5, 1.2]); // Making it larger than the portrait

  // Scrolling Text Opacity: Starts at 0% at absolute top, fades in to 40% as we scroll
  const scrollingTextOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.4]);

  const transparentBase = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#0c0c0c]">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* 1. INFINITE SCROLLING TEXT (Background) */}
        <motion.div 
          style={{ opacity: scrollingTextOpacity }}
          className="absolute inset-0 z-0"
        >
          <ScrollingText />
        </motion.div>

        {/* 2. TOPOGRAPHIC WAVES (Subtle background layer) */}
        <div className="absolute inset-0 z-1 pointer-events-none opacity-20">
          <Waves
            lineColor="rgba(251, 109, 109, 0.3)"
            backgroundColor="transparent"
            waveSpeedX={0.005}
            waveSpeedY={0.01}
          />
        </div>

        {/* 3. CENTERED HERO (Shrinks significantly) */}
        <motion.div 
          style={{ 
            scale: heroScale, 
            filter: heroFilter, 
            opacity: heroOpacity,
          }}
          className="relative z-10 w-[80%] h-[80%] flex items-center justify-center shadow-[0_0_100px_rgba(0,0,0,0.8)]"
        >
          <div className='relative w-full h-full rounded-2xl overflow-hidden border border-white/5'>
            <div className="absolute inset-0 z-10">
              <img 
                src={background} 
                alt="Hero Background" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className='absolute inset-0 z-20 pointer-events-none'>
              <img 
                src={outlineImage} 
                alt="outline" 
                className='w-full h-full object-cover scan-outline' 
              />
            </div>

            <div className='absolute inset-0 z-30 h-[100%]'>
              <LiquidMask 
                imageBase={{ src: transparentBase }} 
                imageHover={{ src: hoverImage }}
                borderRadius={0}
                radius={240}
                blur={0.4}
                texture={0.5}
                parallax={false}
              />
            </div>
          </div>
        </motion.div>

        {/* 4. LARGE SIGNATURE (Over everything, stays large) */}
        <motion.div style={{ scale: signatureScale }} className="absolute inset-0 z-20">
          <Signature scrollProgress={signatureProgress} />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
