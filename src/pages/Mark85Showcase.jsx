import React from 'react';
import { motion } from 'framer-motion';
// Use the local image asset since the 3D model is removed
import mark85Img from '../assets/IromManArmory/85.webp';

// ----- The 5th page: Mark 85 hero showcase -----
// The 3D model is displayed in an interactive showcase box.
// The scroll-driven fly-in animation (from IronManArmory) lands here.
const Mark85Showcase = () => {

  return (
    <section
      id="mark85-showcase"
      className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden py-24 px-6"
    >
      {/* ---- Background: dramatic radial glow ---- */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a0000_0%,#000_70%)] z-0" />

      {/* ---- Horizontal scan-line texture overlay ---- */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.025]">
        <div className="h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_2px,#fff_3px)]" />
      </div>

      {/* ---- Arc-reactor glow bloom behind the box ---- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff0019]/5 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ---- Left: Text content ---- */}
        <div className="flex flex-col gap-6">
          {/* Overline label */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#ff0019] font-mono text-xs tracking-[0.4em] uppercase"
          >
            Final Protocol // Stark Legacy
          </motion.p>

          {/* Big headline */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none"
          >
            Mark{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0019] to-[#fbca03]">
              LXXXV
            </span>
          </motion.h2>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base font-light leading-relaxed max-w-md"
          >
            The ultimate expression of Tony Stark's genius — a fully
            nano-tech suit capable of generating any weapon or tool on demand.
            Worn during the Battle of Earth. The suit that ended the war.
          </motion.p>

          {/* Spec grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 gap-4 mt-4"
          >
            {[
              { label: 'Class', value: 'Nano-Tech' },
              { label: 'Film', value: 'Endgame (2019)' },
              { label: 'Power Source', value: 'Arc Reactor' },
              { label: 'Status', value: 'Retired' },
            ].map((spec) => (
              <div
                key={spec.label}
                className="border border-zinc-800 rounded-xl p-3 bg-zinc-900/50"
              >
                <p className="text-[#ff0019] font-mono text-[10px] uppercase tracking-widest mb-1">
                  {spec.label}
                </p>
                <p className="text-white font-bold text-sm uppercase tracking-tight">
                  {spec.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---- Right: Static Showcase Box ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full aspect-square max-w-[560px] mx-auto"
        >
          {/* Outer glowing frame */}
          <div className="absolute inset-0 rounded-[32px] border border-[#ff0019]/20 bg-[#0a0a0a]/80 backdrop-blur-sm overflow-hidden">
            {/* Corner accent marks */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#ff0019]/60 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#ff0019]/60 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#ff0019]/60 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#ff0019]/60 rounded-br-lg" />

            {/* Static Image Display */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <img 
                src={mark85Img} 
                alt="Mark LXXXV" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(255,0,25,0.3)] animate-pulse"
                style={{ animationDuration: '4s' }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ---- Bottom HUD bar ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 mt-16 w-full max-w-7xl mx-auto flex items-center gap-4"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#ff0019]/40 to-transparent" />
        <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em]">
          End of Armory Data
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#ff0019]/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Mark85Showcase;
