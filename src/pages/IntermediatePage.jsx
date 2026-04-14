import React from 'react';
import { motion } from 'framer-motion';

const IntermediatePage = () => {
  return (
    <section className="relative h-[80vh] w-full bg-black flex flex-col items-center justify-center overflow-hidden border-y border-[#ff0019]/10">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a0000_0%,#000_70%)] z-0 opacity-50" />
      
      {/* Scanning Line overlay */}
      <div className="absolute inset-0 h-full w-full pointer-events-none z-10 opacity-[0.02]">
        <div className="h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_2px,#fff_3px)]" />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-16 h-16 border-t-2 border-r-2 border-[#ff0019] rounded-full animate-spin flex items-center justify-center"
          style={{ animationDuration: '3s' }}
        >
          <div className="w-8 h-8 border-b-2 border-l-2 border-white rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <p className="text-[#ff0019] font-mono text-[10px] uppercase tracking-[0.5em] mb-2 animate-pulse">
            Establishing Connection
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
            Accessing Final Protocol
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#ff0019] to-transparent mt-6 opacity-60" />
        </motion.div>
      </div>
    </section>
  );
};

export default IntermediatePage;
