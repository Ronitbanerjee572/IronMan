import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const MobileScrollLock = () => {
  const [isLocked, setIsLocked] = useState(false);
  // Scroll logic for visibility: Precise hide after 200 pixels
  const { scrollY } = useScroll();
  const visibilityOpacity = useTransform(scrollY, [0, 100, 200], [1, 1, 0]);
  const visibilityScale = useTransform(scrollY, [0, 100, 200], [1, 1, 0.8]);
  const pointerEvents = useTransform(scrollY, (v) => v >= 200 ? 'none' : 'auto');

  // Toggle body scroll whenever isLocked changes
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLocked]);

  return (
    <motion.div 
      style={{ opacity: visibilityOpacity, scale: visibilityScale, pointerEvents }}
      className="md:hidden fixed bottom-8 right-6 z-[9999] flex items-center gap-4 transition-all"
    >
      {/* 1. TEXT BESIDE THE BUTTON */}
      <AnimatePresence mode="wait">
        <motion.span
          key={isLocked ? "back" : "tap"}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="font-black text-xs tracking-widest text-[#fff] drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
        >
          {isLocked ? "BACK TO SCROLL" : "TAP TO LOCK"}
        </motion.span>
      </AnimatePresence>

      {/* 2. CIRCULAR FLOATING BUTTON */}
      <motion.button
        onClick={() => setIsLocked(!isLocked)}
        whileTap={{ scale: 0.8 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-500 border-2 ${
          isLocked 
            ? 'bg-[#ff0019] border-white/40' 
            : 'bg-white/5 backdrop-blur-xl border-[#ff0019]/50'
        }`}
      >
        <AnimatePresence mode="wait">
          {isLocked ? (
            <motion.div
              key="cross"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            >
              {/* CROSS ICON */}
              <svg 
                width="24" height="24" viewBox="0 0 24 24" fill="none" 
                stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="finger"
              initial={{ opacity: 0, y: 10, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.5 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="#ff0019" 
                height="32px" 
                width="32px" 
                version="1.1" 
                id="Capa_1" 
                viewBox="0 0 232.395 232.395" 
                xml:space="preserve"
              >
                <path d="M177.121,83.258c-5.921,0-11.324,2.26-15.393,5.962c-4.068-3.702-9.472-5.962-15.393-5.962  c-5.925,0-11.333,2.261-15.404,5.963c-1.672-1.522-3.579-2.783-5.645-3.76c7.467-9.163,11.828-20.792,11.828-33.095  C137.115,23.491,113.627,0,84.756,0C55.878,0,32.383,23.491,32.383,52.366c0,20.105,11.649,38.4,29.469,47.085v63.871  c0,38.086,30.988,69.072,69.077,69.072c38.092,0,69.083-30.986,69.083-69.072V106.15C200.012,93.527,189.743,83.258,177.121,83.258z   M47.383,52.366C47.383,31.762,64.148,15,84.756,15c20.6,0,37.359,16.762,37.359,37.366c0,11.702-5.529,22.549-14.467,29.515V52.366  c0-12.628-10.27-22.902-22.893-22.902c-12.629,0-22.904,10.274-22.904,22.902v29.513C52.912,74.915,47.383,64.068,47.383,52.366z   M185.012,163.322c0,29.815-24.262,54.072-54.083,54.072c-29.818,0-54.077-24.257-54.077-54.072V94.887  c0.013-0.251,0.013-0.502,0-0.751v-41.77c0-4.357,3.546-7.902,7.904-7.902c4.352,0,7.893,3.545,7.893,7.902v53.784v16.451  c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5V106.15c0-4.352,3.54-7.893,7.891-7.893c4.351,0,7.89,3.541,7.89,7.893v16.451  c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5V106.15c0-4.352,3.547-7.893,7.907-7.893c4.352,0,7.893,3.541,7.893,7.893  v16.451c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5V106.15c0-4.352,3.541-7.893,7.893-7.893  c4.351,0,7.891,3.541,7.891,7.893V163.322z"/>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

export default MobileScrollLock;
