import React from 'react';
import { motion } from 'framer-motion';

const SecondPage = () => {
  return (
    <div className="relative z-50 bg-[#050505] min-h-screen py-20 px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8">
            {/* <h2 className="text-6xl font-black text-white leading-tight">
              GENIUS. BILLIONAIRE. <br />
              <span className="text-iron-red">PLAYBOY.</span> PHILANTHROPIST.
            </h2> */}
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
              Tony Stark is more than just a man in a suit. He's a visionary who redefined 
              global security and paved the way for a new era of technological advancement. 
              From the Mark I in a cave to the Nano-tech Mark LXXXV, the evolution is absolute.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-10">
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h3 className="text-iron-gold text-3xl font-bold">85+</h3>
                <p className="text-zinc-500 uppercase text-xs tracking-widest mt-1">Armors Built</p>
              </div>
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h3 className="text-arc-blue text-3xl font-bold">∞</h3>
                <p className="text-zinc-500 uppercase text-xs tracking-widest mt-1">Clean Energy</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-iron-red to-iron-gold rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
               {/* This would be an ideal spot for a 3D model or a high-end armor preview */}
               <div className="text-center p-10">
                 <div className="w-24 h-24 border-4 border-iron-red border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                 <p className="text-zinc-500 text-sm tracking-widest uppercase">Initializing Armory Stream...</p>
               </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ADDITIONAL SECTION SPACE */}
      <div className="h-[50vh]" />
    </div>
  );
};

export default SecondPage;
