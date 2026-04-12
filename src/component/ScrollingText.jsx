import React from 'react';
import { motion } from 'framer-motion';

const ScrollingText = () => {
  const words = ["STARK INDUSTRIES", "IRON MAN", "MARK LXXXV", "GENIUS", "BILLIONAIRE", "PHILANTHROPIST"];
  
  // Create a long enough track for seamless looping
  const track = [...words, ...words, ...words];

  return (
    <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
      {/* Background layer for the text */}
      <div className="relative w-full select-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex whitespace-nowrap text-[25vh] font-black italic tracking-tighter"
        >
          {track.map((word, i) => (
            <span key={i} className="mr-32 text-white">
              {word}
            </span>
          ))}
        </motion.div>
        
        {/* Second row moving opposite for added depth */}
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="flex whitespace-nowrap text-[20vh] font-black italic tracking-tighter opacity-50"
        >
          {track.map((word, i) => (
            <span key={i} className="mr-32 text-iron-red">
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingText;
