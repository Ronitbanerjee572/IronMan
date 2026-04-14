import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Importing images
import ironMan1 from '../assets/memoryGallery/iron-man-1.jpg';
import gulmira from '../assets/memoryGallery/gulmira.webp';
import genius from '../assets/memoryGallery/genius.jpg';
import attack from '../assets/memoryGallery/attack.jpg';
import nuclear from '../assets/memoryGallery/nuclear.jpg';
import hulk from '../assets/memoryGallery/hulk.webp';
import captain from '../assets/memoryGallery/captain.webp';
import love3000 from '../assets/memoryGallery/3000.jpg';
import finalSnap from '../assets/memoryGallery/finalsnap-2.webp';

// Custom hook to detect mobile viewport (< 768px)
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
};

const galleryData = [
  {
    id: 1,
    title: "(Iron Man, 2008)",
    description: <p><span className="text-white font-medium tracking-wide mr-2">Tony Stark:</span><span className="text-red-500 text-lg font-medium tracking-wide">I am Iron Man</span></p>,
    img: ironMan1,
  },
  {
    id: 2,
    title: <p>The Gulmira Flight<br />(Iron Man, 2008)</p>,
    description: <p>The first fully realized <span className="text-red-500 font-medium tracking-wide"> Mark III </span> in combat. Coolly walks away from an exploding tank after firing a single "wrist rocket" </p>,
    img: gulmira,
  },
  {
    id: 3,
    title: "(The Avengers, 2012)",
    description: (
      <div className="space-y-3">
        <p><span className="text-blue-500 font-medium tracking-wide mr-2">Captain America:</span><span className="text-gray-300 font-light">Big man in a suit of armour, take that off! What are you?</span></p>
        <p><span className="text-red-500 font-medium tracking-wide mr-2">Tony Stark:</span><span className="text-white text-lg font-light">Genius, Billionaire, Playboy, Philanthropist.</span></p>
        <p className="text-sm text-gray-500 mt-4 leading-relaxed">Image before he had his first functional suit</p>
      </div>
    ),
    img: genius,
  },
  {
    id: 4,
    title: "(The Avengers, 2012)",
    description: (
      <div className="mb-2">
        <p><span className="text-blue-500 font-medium tracking-wide mr-2">Captain America:</span><span className="text-gray-300 font-light">We need a plan of attack.</span></p>
        <p><span className="text-red-500 font-medium tracking-wide mr-2">Tony Stark:</span><span className="text-white text-lg font-light tracking-wide italic">I have a plan. Attack.</span></p>
      </div>
    ),
    img: attack,
  },
  {
    id: 5,
    title: <p>Catching the Nuclear Missile<br />(The Avengers, 2012)</p>,
    description: "Tony's first true \"sacrifice\" play.",
    img: nuclear,
  },
  {
    id: 6,
    title: <p>The Hulkbuster vs. Hulk<br />(Age of Ultron, 2015)</p>,
    description: "",
    img: hulk,
  },
  {
    id: 7,
    title: <p>The Fight Against <br /> <span className="text-blue-500">Captain America</span><br />(Civil War, 2016)</p>,
    description: (
      <div className="space-y-3">
        <p><span className="text-blue-500 font-medium tracking-wide mr-2">Captain America:</span><span className="text-gray-300 font-light">He is my friend.</span></p>
        <p><span className="text-red-500 font-medium tracking-wide mr-2">Tony Stark:</span><span className="text-white text-lg font-light tracking-wide italic">So was I.</span></p>
        <p className="text-sm text-gray-500 mt-4 leading-relaxed">After learning Bucky killed his parents, Tony engages in a brutal, claustrophobic 2-on-1 fight against Cap and Bucky.</p>
      </div>
    ),
    img: captain,
  },
  {
    id: 8,
    title: <p>I love you 3000<br />(Avengers: Endgame, 2019)</p>,
    description: "The quiet bedtime moment with his daughter, Morgan. Which later became a cult classic line.",
    img: love3000,
  },
  {
    id: 9,
    title: <p>And I... am... Iron Man<br />(The Final Snap)</p>,
    description: <p>Saying <span className="text-red-500 font-medium tracking-wide">"And I... am... Iron Man"</span> one last time before the final snap. It’s the ultimate heroic sacrifice that ended an era.</p>,
    img: finalSnap,
  }
];

// 1. Updated Layout Styles: Using offsets to create the "scattered" look
const getLayoutStyles = (index) => {
  const layouts = [
    { imgWrapper: "top-[20%] left-[10%] w-[25vw]", textWrapper: "top-[47%] left-[12%]" },
    { imgWrapper: "top-[50%] left-[5%] w-[30vw]", textWrapper: "top-[35%] left-[7%]" },
    { imgWrapper: "top-[20%] left-[10%] w-[22vw]", textWrapper: "top-[45%] left-[12%]" },
    { imgWrapper: "top-[55%] left-[0%] w-[28vw]", textWrapper: "top-[85%] left-[2%]" },
    { imgWrapper: "top-[25%] left-[0%] w-[24vw]", textWrapper: "top-[15%] left-[2%]" },
    { imgWrapper: "top-[50%] left-[0%] w-[30vw]", textWrapper: "top-[45%] left-[2%]" },
    { imgWrapper: "top-[10%] left-[5%] w-[20vw]", textWrapper: "top-[35%] left-[7%]" },
    { imgWrapper: "top-[60%] left-[0%] w-[26vw]", textWrapper: "top-[45%] left-[2%]" },
    { imgWrapper: "top-[25%] left-[0%] w-[22vw]", textWrapper: "top-[80%] left-[2%]" },
  ];
  return layouts[index % layouts.length];
};

// --- Mobile: Vertical card stack with scroll-driven fade-in per card ---
const MobileMemoryCard = ({ item, index }) => {
  const cardRef = useRef(null);

  // Each card fades + slides up as it enters the viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0.1 1", "0.4 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      className="w-full mb-16 px-4"
    >
      {/* Full-width image */}
      <div className="w-full overflow-hidden rounded-sm shadow-2xl mb-4">
        <img
          src={item.img}
          alt=""
          className="w-full h-auto object-cover opacity-90"
        />
      </div>

      {/* Red label / title */}
      <div className="text-[10px] text-red-500 uppercase tracking-[0.3em] font-mono font-bold mb-2">
        {item.title}
      </div>

      {/* Description text */}
      <div className="text-sm text-zinc-300 font-light leading-relaxed font-sans">
        {item.description}
      </div>

      {/* Decorative separator line */}
      <div className="mt-6 w-12 h-px bg-red-600 opacity-40" />
    </motion.div>
  );
};

// Mobile gallery: simple vertical scroll stack, no horizontal magic
const MobileGallery = () => (
  <section className="bg-[#050505] pt-8 pb-16">
    {/* Section heading */}
    <div className="px-4 mb-10">
      <p className="text-[10px] text-red-500 uppercase tracking-[0.4em] font-mono font-bold mb-1">
        Memory Archive
      </p>
      <div className="w-16 h-px bg-red-600 opacity-40" />
    </div>

    {galleryData.map((item, index) => (
      <MobileMemoryCard key={item.id} item={item} index={index} />
    ))}
  </section>
);

// --- Desktop: Original horizontal parallax gallery (unchanged) ---
const DesktopGallery = () => {
  const targetRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const measureScroll = () => {
      // Calculate total width based on 35vw per item
      const itemWidth = window.innerWidth * 0.35;
      const totalWidth = itemWidth * galleryData.length;
      setScrollRange(totalWidth - window.innerWidth);
    };
    measureScroll();
    window.addEventListener("resize", measureScroll);
    return () => window.removeEventListener("resize", measureScroll);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section ref={targetRef} className="relative bg-[#050505]" style={{ height: "600vh" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div ref={scrollRef} style={{ x }} className="flex h-full items-center">
          {galleryData.map((item, index) => {
            const layout = getLayoutStyles(index);

            return (
              <div
                key={item.id}
                className="relative w-[35vw] h-full shrink-0 group"
              >
                {/* Image Wrapper */}
                <div className={`absolute ${layout.imgWrapper} transition-transform duration-500 group-hover:scale-105`}>
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-auto object-cover opacity-80 hover:opacity-100 rounded-sm shadow-2xl transition-opacity"
                  />
                </div>

                {/* Text Wrapper */}
                <div className={`absolute ${layout.textWrapper} max-w-xs z-20`}>
                  <div className="text-[10px] md:text-xs text-red-500 uppercase tracking-[0.3em] font-mono font-bold mb-2">
                    {item.title}
                  </div>
                  <div className="text-sm md:text-base text-zinc-300 font-light leading-relaxed font-sans">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Wrapper: picks mobile or desktop gallery based on viewport width
const HorizontalGallery = () => {
  const isMobile = useIsMobile();
  // Render mobile vertical stack on small screens, desktop parallax on large screens
  return isMobile ? <MobileGallery /> : <DesktopGallery />;
};

const SecondPage = () => {
  const introRef = useRef(null);
  
  // Track scroll progress specifically for the intro section
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "end start"]
  });

  // Tightened ranges: text peaks later and leaves earlier to stay centered
  const opacity = useTransform(scrollYProgress, [0.15, 0.4, 0.6, 0.85], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.15, 0.4, 0.6, 0.85], [0.85, 1, 1, 0.85]);
  const y = useTransform(scrollYProgress, [0.15, 0.4, 0.6, 0.85], [100, 0, 0, -100]);

  return (
    <div className="relative z-50 bg-[#050505] min-h-screen">
      {/* Cinematic Intro Section with Scroll-Linked Animation */}
      <section 
        ref={introRef}
        className="bg-[#050505] min-h-[110vh] flex items-center justify-center relative overflow-hidden px-4 md:px-8"
      >
        
        {/* Background Schematic Pattern */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 pointer-events-none"
        >
          <img 
            src="arc_reactor_schematic_tile.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          style={{ opacity, scale, y }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-[75px] font-extrabold uppercase leading-tight tracking-tight font-sans"
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="inline-block"><span className="text-[#bf9b30]">Redefining</span> <span className="text-zinc-200">The Genius.</span></motion.span><br />

            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="inline-block"><span className="text-zinc-200">Engineering</span> <span className="text-[#bf9b30]">The Impossible.</span></motion.span><br />

            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="inline-block"><span className="text-zinc-200">Building</span> <span className="text-zinc-200">Better Worlds</span> <span className="text-zinc-200">For</span></motion.span><br />

            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="inline-block"><span className="text-zinc-200">Future Worlds.</span> <span className="text-zinc-200">Protecting</span> <span className="text-zinc-200">A</span></motion.span><br />

            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="inline-block"><span className="text-[#bf9b30]">Legacy</span> <span className="text-zinc-200">In Earth's</span> <span className="text-zinc-200">Best Defender</span></motion.span><br />

            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="inline-block"><span className="text-zinc-200">On The Field. And In</span></motion.span><br />

            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="inline-block"><span className="text-zinc-200">The Final Snap.</span></motion.span>
          </motion.p>
        </motion.div>
      </section>

      {/* The Horizontal Scrolling Gallery Component */}
      <HorizontalGallery />

      {/* ADDITIONAL SECTION SPACE TO TRANSITION TO FOOTER OR NEXT AREA */}
      <div className="h-[20vh] bg-[#050505] flex items-center justify-center">
        <div className="w-px h-32 bg-gradient-to-b from-red-600 to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default SecondPage;
