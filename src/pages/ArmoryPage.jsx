import React from 'react';
import { motion } from 'framer-motion';

// Mapping suit IDs to local assets
const suitAssets = {};
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 85].forEach(num => {
  suitAssets[num] = new URL(`../assets/IromManArmory/${num}.webp`, import.meta.url).href;
});

const suitsData = [
  { mark: "Mark I", movie: "Iron Man (2008)", description: "Escaping the Ten Rings cave.", id: 1 },
  { mark: "Mark II", movie: "Iron Man (2008)", description: "First flight test in Malibu.", id: 2 },
  { mark: "Mark III", movie: "Iron Man (2008)", description: "Final battle against Iron Monger.", id: 3 },
  { mark: "Mark IV", movie: "Iron Man 2 (2010)", description: "Stark Expo entrance and the 'donut' scene.", id: 4 },
  { mark: "Mark V", movie: "Iron Man 2 (2010)", description: "The suitcase suit used on the Monaco race track.", id: 5 },
  { mark: "Mark VI", movie: "Iron Man 2 (2010)", description: "Powered by the new element; used in the final battle.", id: 6 },
  { mark: "Mark VII", movie: "The Avengers (2012)", description: "Deployed from Stark Tower to catch Tony mid-fall.", id: 7 },
  { mark: "Mark XLII", movie: "Iron Man 3 (2013)", description: "The main 'Prodigal Son' suit.", id: 42 },
  { mark: "Mark XV", movie: "Iron Man 3 (2013)", description: "Sneaky - High-altitude stealth armor.", id: 15 },
  { mark: "Mark XVI", movie: "Iron Man 3 (2013)", description: "Nightclub - Black stealth armor.", id: 16 },
  { mark: "Mark XXXIII", movie: "Iron Man 3 (2013)", description: "Silver Centurion - Enhanced energy armor.", id: 33 },
  { mark: "Mark XL", movie: "Iron Man 3 (2013)", description: "Shotgun - Hyper-velocity armor.", id: 40 },
  { mark: "Mark XLIII", movie: "Avengers: Age of Ultron (2015)", description: "Used during the Hydra base raid.", id: 43 },
  { mark: "Mark XLIV", movie: "Avengers: Age of Ultron (2015)", description: "The Hulkbuster armor.", id: 44 },
  { mark: "Mark XLV", movie: "Avengers: Age of Ultron (2015)", description: "Used during the Battle of Sokovia.", id: 45 },
  { mark: "Mark XLVI", movie: "Captain America: Civil War (2016)", description: "The 'Bleeding Edge' inspired suit.", id: 46 },
  { mark: "Mark XLVII", movie: "Spider-Man: Homecoming (2017)", description: "Used remotely and briefly worn by Tony.", id: 47 },
  { mark: "Mark L", movie: "Avengers: Infinity War (2018)", description: "The first nanotech suit.", id: 50 },
  { mark: "Mark LXXXV", movie: "Avengers: Endgame (2019)", description: "The final nanotech suit.", id: 85 },
];

const SuitCard = ({ suit }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative group p-[3px] rounded-[30px] overflow-hidden bg-zinc-800 transition-all duration-300"
    >
      {/* Dynamic neon border that lights up on hover */}
      <div className="absolute inset-0 bg-transparent border-[3px] border-[#ff0019]/30 group-hover:border-[#ff0019] rounded-[30px] transition-colors duration-500 z-20 pointer-events-none" />

      {/* Main Container with the Cut-out corner */}
      <div 
        className="relative bg-[#0a0a0a] rounded-[27px] overflow-hidden aspect-[1/1.2] flex flex-col items-center justify-center p-6"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 70% 85%, 55% 100%, 0% 100%)'
        }}
      >
        {/* Suit Image */}
        <div className="w-full h-[65%] relative flex items-center justify-center">
          <img 
            src={suitAssets[suit.id]} 
            alt={suit.mark}
            className="h-full w-auto object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(255,0,25,0.5)] transition-all duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="w-full text-left mt-4 flex flex-col justify-start pb-6">
          <h3 className="text-white text-3xl font-black uppercase italic tracking-tighter leading-none mb-1">
            {suit.mark}
          </h3>
          <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
            {suit.movie}
          </p>
          <p className="text-zinc-400 text-[11px] font-light mt-2 line-clamp-2 max-w-[80%]">
            {suit.description}
          </p>
        </div>
      </div>

      {/* Special Bottom Right Corner Label (inside the cut-out shape) */}
      <div className="absolute bottom-2 right-4 text-right z-30">
        <span className="text-[#ff0019] font-mono text-[10px] uppercase tracking-tighter block opacity-60">Status</span>
        <span className="text-white font-mono text-xs font-bold uppercase group-hover:text-[#ff0019] transition-colors leading-none">
          Active
        </span>
      </div>
    </motion.div>
  );
};

const IronManArmory = () => {
  return (
    <section className="bg-black min-h-screen py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#000_100%)] z-0" />
      
      {/* Scanning Line overlay */}
      <div className="absolute inset-0 h-full w-full pointer-events-none z-10 opacity-[0.03]">
         <div className="h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_2px,#fff_3px)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header Section */}
        <div className="mb-24 text-left border-l-2 border-[#ff0019] pl-6">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#ff0019] font-mono text-xs tracking-[0.4em] uppercase mb-4"
          >
            Tactical Suit Database // Armory v.4.0
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0019] to-white">SUIT</span> Inventory.
          </motion.h2>
        </div>

        {/* The Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {suitsData.map((suit) => (
            <SuitCard key={suit.id} suit={suit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IronManArmory;