import React from 'react';
import { motion } from 'framer-motion';

// Central hero figure — the "helmet/suit" focal point like in the reference design
import heroImg from '../assets/HeroImages/hero-hover-image(2).png';

// ---- Navigation and social links ----
const NAV_LINKS   = ['Home', 'Armory', 'Technology', 'Legacy'];
const SOCIAL_LINKS = ['Twitter', 'Instagram', 'YouTube', 'GitHub'];
const SPONSORS    = ['STARK INDUSTRIES', 'S.H.I.E.L.D.', 'AVENGERS', 'JARVIS OS', 'ARC TECH', 'PEPPER CO.'];

const Footer = () => {
  return (
    <footer className="relative bg-black overflow-hidden">

      {/* ---- TOP NOTCH ----
          SVG that creates the smooth "tab" curve at the top of the footer,
          exactly like the Lando Norris reference — pointed upward in the center.
      */}
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full block relative z-10"
        style={{ height: '80px', marginBottom: '-2px' }}
      >
        <path
          d="M0,75 C300,75 460,75 580,75 C630,75 670,10 720,10 C770,10 810,75 860,75 C980,75 1140,75 1440,75 L1440,100 L0,100 Z"
          fill="#0a0a0a"
        />
      </svg>

      {/* ---- MAIN DARK BODY ---- */}
      <div className="relative bg-[#0a0a0a]">

        {/* Subtle HUD grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg,   transparent, transparent 48px, #ff0019 48px, #ff0019 49px),
              repeating-linear-gradient(90deg,  transparent, transparent 48px, #ff0019 48px, #ff0019 49px)
            `,
          }}
        />

        {/* Red bloom behind the central image — removed per user request */}

        {/* ======== CONTENT ======== */}
        <div className="relative max-w-[1400px] mx-auto px-8 pt-8 pb-0">

          {/* -- Big editorial headline -- */}
          <div className="text-center mb-6 select-none">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-white font-black uppercase italic tracking-tighter leading-[0.9] text-5xl md:text-7xl xl:text-8xl"
            >
              ALWAYS{' '}
              <span className="text-[#ff0019]">DEFENDING</span>
              <br className="hidden md:block" />
              {' '}THE{' '}
              <span className="text-[#ff0019]">FUTURE.</span>
            </motion.h2>
          </div>

          {/* -- 3-column layout: nav | image | socials -- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">

            {/* LEFT: Navigation Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="pb-16 order-2 md:order-1"
            >
              <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.5em] mb-4">Pages</p>
              <ul className="flex flex-col gap-0.5">
                {NAV_LINKS.map((link) => (
                  <motion.li
                    key={link}
                    whileHover={{ x: 10 }}
                    className="cursor-pointer group"
                  >
                    <span className="text-white font-black uppercase italic text-[2rem] tracking-tight group-hover:text-[#ff0019] transition-colors duration-200">
                      {link}
                    </span>
                  </motion.li>
                ))}
              </ul>
              {/* Secondary CTA */}
              <div className="mt-6">
                <span className="text-[#ff0019] font-black italic uppercase text-xs tracking-widest cursor-pointer hover:underline hover:underline-offset-4 transition-all">
                  SUIT DATABASE //
                </span>
              </div>
            </motion.div>

            {/* CENTER: The focal image — bleeds upward from bottom like the reference */}
            <div className="flex justify-center items-end order-1 md:order-2">
              <motion.img
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                src={heroImg}
                alt="Iron Man"
                className="w-full object-contain object-bottom select-none"
                style={{
                  maxWidth: '840px',
                  maxHeight: '920px',
                  scale: 1.5,
                  translateY: '-25%',
                }}
                draggable={false}
              />
            </div>

            {/* RIGHT: Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="pb-16 flex flex-col items-start md:items-end text-left md:text-right order-3"
            >
              <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.5em] mb-4">Follow On</p>
              <ul className="flex flex-col gap-0.5">
                {SOCIAL_LINKS.map((link) => (
                  <motion.li
                    key={link}
                    whileHover={{ x: -10 }}
                    className="cursor-pointer group"
                  >
                    <span className="text-white font-black uppercase italic text-[2rem] tracking-tight group-hover:text-[#ff0019] transition-colors duration-200">
                      {link}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* -- Sponsor strip with centre CTA button -- */}
          <div className="border-t border-zinc-800/50 py-5 flex flex-wrap justify-between items-center gap-y-4 gap-x-6">
            {SPONSORS.map((s) => (
              <span
                key={s}
                className="text-zinc-700 font-black italic uppercase text-[11px] tracking-widest hover:text-zinc-300 transition-colors cursor-pointer"
              >
                {s}
              </span>
            ))}
            {/* CTA pill — sits in the stream like the reference "Business Enquiries" button */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#ff0019] text-white font-black italic uppercase text-[11px] tracking-widest px-8 py-3 rounded-full hover:bg-white hover:text-[#ff0019] transition-all duration-300 shadow-[0_0_20px_rgba(255,0,25,0.4)]"
            >
              SUIT ENQUIRIES →
            </motion.button>
          </div>
        </div>

        {/* -- Bottom bar: copyright + legal -- */}
        <div className="border-t border-zinc-800/40 px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest">
            © 2024 Stark Industries. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms'].map((item) => (
              <span
                key={item}
                className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
