"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Dev" | "Design" | "Systems";

interface TeamMember {
    id: number;
    image: string;
    category: Category;
    name: string;
}

const teamMembers: TeamMember[] = [
    { id: 1, image: "/teammembers/basutm.JPG", category: "Dev", name: "Basu" },
    { id: 2, image: "/teammembers/dakshatm.jpg", category: "Design", name: "Daksha" },
    { id: 3, image: "/teammembers/jahnavitm.jpg", category: "Systems", name: "Jahnavi" },
    { id: 4, image: "/teammembers/suchettm.JPG", category: "Dev", name: "Suchet" },
    { id: 5, image: "/teammembers/tanvitm.jpg", category: "Design", name: "Tanvi" },
    { id: 6, image: "/teammembers/jasnoortm.jpg", category: "Dev", name: "Jasnoor" },
];

const categories: Category[] = ["Dev", "Design", "Systems"];

const TeamSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>("All");

    const ImageCard = useCallback(({ src, alt, stationary = false }: { src: string; alt: string, stationary?: boolean }) => (
        <motion.div
            layoutId={stationary ? `card-${src}` : undefined}
            className="image-card"
            style={{
                width: '600px',
                height: '338px', // 16:9 ratio
                borderRadius: '20px',
                overflow: 'hidden',
                flexShrink: 0,
                position: 'relative'
            }}
            initial={stationary ? { opacity: 0, scale: 0.9 } : undefined}
            animate={stationary ? { opacity: 1, scale: 1 } : undefined}
            exit={stationary ? { opacity: 0, scale: 0.9 } : undefined}
            transition={{ duration: 0.5 }}
        >
            <img
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                }}
            />
        </motion.div>
    ), []);

    const filteredMembers = teamMembers.filter(m => m.category === activeCategory);

    return (
        <section
            style={{
                borderRadius: "20px",
                background: "linear-gradient(180deg, #B16937 0%, #A64D2B 36.4%, #341D17 100%)",
                minHeight: "100vh",
                padding: "80px 0",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Filter UI - Top Middle */}
            <div className="z-50 mb-12 flex gap-4 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 relative">
                <button
                    onClick={() => setActiveCategory("All")}
                    className={`px-6 py-2 rounded-full text-lg font-bold transition-all duration-300 font-futura ${activeCategory === "All"
                        ? "bg-white text-[#8B5A3C] shadow-lg"
                        : "text-white hover:bg-white/10"
                        }`}
                    style={{ fontFamily: 'Norwige, sans-serif' }}
                >
                    ALL
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-lg font-bold transition-all duration-300 font-futura ${activeCategory === cat
                            ? "bg-white text-[#8B5A3C] shadow-lg"
                            : "text-white hover:bg-white/10"
                            }`}
                        style={{ fontFamily: 'Norwige, sans-serif' }}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>

            <div style={{ width: "100%", flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {activeCategory === "All" && (
                    <motion.div
                        key="marquee"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full"
                    >
                        {/* Row 1 - Moving Left */}
                        <div className="marquee-row">
                            <div className="marquee-track scroll-left">
                                {[...Array(4)].map((_, i) => (
                                    <React.Fragment key={`r1-${i}`}>
                                        <ImageCard src={teamMembers[0].image} alt="Team 1" />
                                        <ImageCard src={teamMembers[1].image} alt="Team 2" />
                                        <ImageCard src={teamMembers[2].image} alt="Team 3" />
                                        <div className="text-block">
                                            <h2>MEET</h2>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Row 2 - Moving Right */}
                        <div className="marquee-row">
                            <div className="marquee-track scroll-right">
                                {[...Array(4)].map((_, i) => (
                                    <React.Fragment key={`r2-${i}`}>
                                        <div className="text-block">
                                            <h2>THE</h2>
                                        </div>
                                        <ImageCard src={teamMembers[3].image} alt="Team 4" />
                                        <ImageCard src={teamMembers[4].image} alt="Team 5" />
                                        <ImageCard src={teamMembers[5].image} alt="Team 6" />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Row 3 - Moving Left */}
                        <div className="marquee-row">
                            <div className="marquee-track scroll-left">
                                {[...Array(4)].map((_, i) => (
                                    <React.Fragment key={`r3-${i}`}>
                                        <ImageCard src={teamMembers[1].image} alt="Team 2" />
                                        <ImageCard src={teamMembers[5].image} alt="Team 6" />
                                        <ImageCard src={teamMembers[3].image} alt="Team 4" />
                                        <div className="team-block">
                                            <h2>TEAM</h2>
                                            <button>Who We Are</button>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeCategory !== "All" && (
                    <motion.div
                        key="stationary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-wrap justify-center gap-8 max-w-[1400px] p-8"
                    >
                        {filteredMembers.map((member) => (
                            <ImageCard
                                key={member.id}
                                src={member.image}
                                alt={member.name}
                                stationary={true}
                            />
                        ))}
                    </motion.div>
                )}
            </div>

            <style jsx>{`
                .marquee-row {
                    display: flex;
                    overflow: hidden;
                    width: 100%;
                    margin-bottom: 60px;
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
                .marquee-track {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    width: max-content;
                    padding-right: 20px;
                }
                .scroll-left {
                    animation: scrollLeft 40s linear infinite;
                }
                .scroll-right {
                    animation: scrollRight 40s linear infinite;
                }

                .image-card {
                    /* Base styles handled inline for reliability */
                }

                .image-card img {
                    /* Handled inline */
                }

                .text-block, .team-block {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 40px;
                    flex-shrink: 0;
                }
                
                .team-block {
                    flex-direction: column;
                    gap: 20px;
                }

                h2 {
                    font-family: 'sink', sans-serif;
                    font-size: clamp(3rem, 6vw, 6rem);
                    font-weight: 900;
                    color: white;
                    margin: 0;
                    letter-spacing: 0.05em;
                    white-space: nowrap;
                }

                button {
                    /* Default button styles */
                    cursor: pointer;
                }
                
                .team-block button {
                    background-color: white;
                    color: #8B5A3C;
                    padding: 16px 40px;
                    border-radius: 50px;
                    border: none;
                    font-size: 18px;
                    font-weight: 600;
                    font-family: 'Norwige', sans-serif;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    white-space: nowrap;
                }
                .team-block button:hover {
                    transform: scale(1.05);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
                }

                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }

                @media (max-width: 1024px) {
                    .image-card {
                        width: 400px !important;
                        height: 225px !important;
                    }
                }

                @media (max-width: 768px) {
                    .image-card {
                        width: 300px !important;
                        height: 169px !important;
                    }
                    .text-block, .team-block {
                       padding: 0 20px;
                    }
                }
            `}</style>
        </section>
    );
};

export default TeamSection;
