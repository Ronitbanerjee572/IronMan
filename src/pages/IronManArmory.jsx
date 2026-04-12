import React, { useState } from 'react';
import { motion } from 'framer-motion';

const armorData = [
    // THE CLASSICS
    { id: 1, mark: "Mark I", name: "The First Suit" },
    { id: 2, mark: "Mark II", name: "The Prototype" },
    { id: 3, mark: "Mark III", name: "The Avenger" },
    { id: 4, mark: "Mark IV", name: "The Classic" },
    { id: 5, mark: "Mark V", name: "Suitcase Suit" },
    { id: 6, mark: "Mark VI", name: "Tri-Reactor" },
    { id: 7, mark: "Mark VII", name: "The Avengers" },

    // THE IRON LEGION (HOUSE PARTY PROTOCOL)
    { id: 8, mark: "Mark VIII", name: "Classified" },
    { id: 9, mark: "Mark IX", name: "Classified" },
    { id: 10, mark: "Mark X", name: "Classified" },
    { id: 11, mark: "Mark XI", name: "Classified" },
    { id: 12, mark: "Mark XII", name: "Classified" },
    { id: 13, mark: "Mark XIII", name: "Classified" },
    { id: 14, mark: "Mark XIV", name: "Classified" },
    { id: 15, mark: "Mark XV", name: "Sneaky" },
    { id: 16, mark: "Mark XVI", name: "Nightclub" },
    { id: 17, mark: "Mark XVII", name: "Heartbreaker" },
    { id: 18, mark: "Mark XVIII", name: "Casanova" },
    { id: 19, mark: "Mark XIX", name: "Tiger" },
    { id: 20, mark: "Mark XX", name: "Python" },
    { id: 21, mark: "Mark XXI", name: "Midas" },
    { id: 22, mark: "Mark XXII", name: "Hot Rod" },
    { id: 23, mark: "Mark XXIII", name: "Shades" },
    { id: 24, mark: "Mark XXIV", name: "Tank" },
    { id: 25, mark: "Mark XXV", name: "Striker" },
    { id: 26, mark: "Mark XXVI", name: "Gamma" },
    { id: 27, mark: "Mark XXVII", name: "Disco" },
    { id: 28, mark: "Mark XXVIII", name: "Jack" },
    { id: 29, mark: "Mark XXIX", name: "Fiddler" },
    { id: 30, mark: "Mark XXX", name: "Blue Steel" },
    { id: 31, mark: "Mark XXXI", name: "Piston" },
    { id: 32, mark: "Mark XXXII", name: "Romeo" },
    { id: 33, mark: "Mark XXXIII", name: "Silver Centurion" },
    { id: 34, mark: "Mark XXXIV", name: "Southpaw" },
    { id: 35, mark: "Mark XXXV", name: "Red Snapper" },
    { id: 36, mark: "Mark XXXVI", name: "Peacemaker" },
    { id: 37, mark: "Mark XXXVII", name: "Hammerhead" },
    { id: 38, mark: "Mark XXXVIII", name: "Igor" },
    { id: 39, mark: "Mark XXXIX", name: "Starboost" },
    { id: 40, mark: "Mark XL", name: "Shotgun" },
    { id: 41, mark: "Mark XLI", name: "Bones" },

    // MODERN & NANO-TECH ERA
    { id: 42, mark: "Mark XLII", name: "Prodigal Son" },
    { id: 43, mark: "Mark XLIII", name: "Sentry Mode" },
    { id: 44, mark: "Mark XLIV", name: "Hulkbuster" },
    { id: 45, mark: "Mark XLV", name: "Sokovia Suit" },
    { id: 46, mark: "Mark XLVI", name: "Civil War Suit" },
    { id: 47, mark: "Mark XLVII", name: "Homecoming" },
    { id: 48, mark: "Mark XLVIII", name: "Classified" },
    { id: 49, mark: "Mark XLIX", name: "Rescue" },
    { id: 50, mark: "Mark L", name: "Bleeding Edge (Nano)" },
    { id: 85, mark: "Mark LXXXV", name: "Ultimate / End Game" },
];

const ArmorCard = ({ armor }) => {
    const localImg = new URL(`../assets/IromManArmory/${armor.id}.webp`, import.meta.url).href;

    return (
        <motion.div
            style={styles.card}
            whileHover="hover"
            initial="initial"
            perspective={1000}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            variants={{
                initial: { rotateX: 0, scale: 1, zIndex: 1 },
                hover: { rotateX: 15, scale: 1.05, zIndex: 10 }
            }}
        >
            <div style={styles.imgContainer}>
                {/* Background Blurred Glow Image */}
                <motion.img
                    src={localImg}
                    alt={armor.mark + " Glow"}
                    style={styles.imgGlow}
                    variants={{
                        initial: {
                            opacity: 0,
                            visibility: 'hidden',
                            scale: 0.8,
                            z: -50,
                            filter: 'blur(0px)'
                        },
                        hover: {
                            opacity: 0.7,
                            visibility: 'visible',
                            scale: 0.7,
                            z: 20,
                            filter: 'blur(25px) brightness(1.4) saturate(1.8)',
                            y: -5
                        }
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />

                {/* Foreground Main Image */}
                <motion.img
                    src={localImg}
                    alt={armor.mark}
                    style={styles.img}
                    variants={{
                        initial: { z: 0, scale: 1, filter: 'drop-shadow(0 0 0px rgba(0,0,0,0))' },
                        hover: {
                            z: 50,
                            scale: 1.15,
                            y: -15,
                            rotateX: -20,
                        }
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/300x400?text=CLASSIFIED+STARK+DATA";
                    }}
                />
            </div>
            <div style={styles.content}>
                <span style={styles.markId}>{armor.mark}</span>
                <h3 style={styles.suitName}>{armor.name}</h3>
            </div>
        </motion.div>
    );
};

const HallOfArmor = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredArmors = armorData.filter(armor =>
        armor.mark.toLowerCase().includes(searchTerm.toLowerCase()) ||
        armor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={styles.wrapper}>
            <div style={styles.header}>
                <h1 style={styles.title}>STARK INDUSTRIES ARMORY</h1>
                <input
                    type="text"
                    placeholder="SEARCH MARK / NAME..."
                    style={styles.search}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div style={styles.grid}>
                {filteredArmors.map(armor => (
                    <ArmorCard key={armor.id} armor={armor} />
                ))}
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        padding: '40px 20px',
        fontFamily: "'Segoe UI', Tahoma, sans-serif",
        overflowX: 'hidden'
    },
    header: {
        textAlign: 'center',
        marginBottom: '50px'
    },
    title: {
        fontSize: '2.5rem',
        letterSpacing: '5px',
        color: '#ffcc00',
        textShadow: '0 0 10px rgba(255, 204, 0, 0.5)'
    },
    search: {
        padding: '12px 20px',
        width: '100%',
        maxWidth: '400px',
        background: '#111',
        border: '1px solid #ffcc00',
        color: '#ffcc00',
        marginTop: '20px',
        borderRadius: '4px'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        perspective: '5000px'
    },
    card: {
        background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)',
        borderRadius: '10px',
        border: '1px solid #333',
        overflow: 'visible',
        cursor: 'pointer',
        position: 'relative',
        transformStyle: 'preserve-3d'
    },
    imgContainer: {
        height: '320px',
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        transformStyle: 'preserve-3d',
        pointerEvents: 'none',
        position: 'relative'
    },
    img: {
        height: '100%',
        width: 'auto',
        objectFit: 'contain',
        zIndex: 10,
        position: 'relative'
    },
    imgGlow: {
        height: '100%',
        width: 'auto',
        objectFit: 'contain',
        zIndex: 5,
        position: 'absolute',
        pointerEvents: 'none'
    },
    content: {
        padding: '20px',
        textAlign: 'center',
        borderTop: '2px solid #e23636',
        backgroundColor: '#0a0a0a',
        borderRadius: '0 0 10px 10px',
        transformStyle: 'preserve-3d'
    },
    markId: {
        display: 'block',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#fff'
    },
    suitName: {
        fontSize: '0.9rem',
        color: '#e23636',
        margin: '5px 0 0',
        textTransform: 'uppercase'
    }
};

export default HallOfArmor;