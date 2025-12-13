"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Creative" | "Tech" | "Systems";

interface TeamMember {
    id: number;
    image: string;
    category: Category;
    name: string;
    role: string;
    skills: string[];
    location: string;
    specialties?: string;
    tools?: string[];
    keyContributions?: string[];
    secretQuote?: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        image: "/teammembers/basutm.JPG",
        category: "Creative",
        name: "Basu",
        role: "FOUNDER&CREATIVEDIRECTOR",
        skills: ["Art Direction", "Web Development", "3D Design"],
        location: "Canada",
        specialties: "Leads creative direction across all client projects and internal initiatives while overseeing company operations. Contributes hands-on to design, development, and client communications, ensuring R.O.V.'s vision stays consistent from pitch to delivery.",
        tools: ["Figma", "Adobe Creative Suite", "Next.js", "React", "TypeScript", "HTML/CSS", "Notion"],
        keyContributions: [
            "Directed creative vision and strategy for all major client engagements.",
            "Built and coded flagship web experiences from concept to deployment.",
            "Established R.O.V.'s operational framework and client communication standards."
        ],
        secretQuote: "Coffee first, code second, creativity always. ☕✨"
    },
    { id: 2, image: "/teammembers/jahnavitm.jpg", category: "Creative", name: "Jahnavi", role: "CREATIVE DESIGNER", skills: ["Art Direction", "Web Design (UX/UI)", "Brand Identity"], location: "India", secretQuote: "Design is thinking made visual. 🎨💭" },
    { id: 3, image: "/teammembers/vaishtm.jpg", category: "Creative", name: "Vaish", role: "CREATIVE STRATEGIST", skills: ["Brand Strategy", "Content Creation", "Visual Design"], location: "India", secretQuote: "Strategy without creativity is just planning. 🚀" },
    { id: 4, image: "/teammembers/tanvitm.jpg", category: "Creative", name: "Tanvi", role: "CREATIVE DESIGNER", skills: ["Graphic Design", "Illustration", "Typography"], location: "India", secretQuote: "Every pixel has a purpose. ✏️" },
    { id: 5, image: "/teammembers/dakshatm.jpg", category: "Tech", name: "Daksha", role: "TECHNICAL LEAD", skills: ["Full Stack Development", "System Architecture", "DevOps"], location: "India", secretQuote: "Code is poetry in motion. 💻🎵" },
    { id: 6, image: "/teammembers/jasnoortm.jpg", category: "Tech", name: "Jasnoor", role: "SOFTWARE ENGINEER", skills: ["Web Development", "Mobile Apps", "Cloud Solutions"], location: "Canada", secretQuote: "Debugging is like being a detective in a crime movie where you're also the murderer. 🕵️" },
    {
        id: 7,
        image: "/teammembers/basutm.JPG",
        category: "Tech",
        name: "Basu",
        role: "FOUNDER&CREATIVEDIRECTOR",
        skills: ["Art Direction", "Web Development", "3D Design"],
        location: "Canada",
        specialties: "Leads creative direction across all client projects and internal initiatives while overseeing company operations. Contributes hands-on to design, development, and client communications, ensuring R.O.V.'s vision stays consistent from pitch to delivery.",
        tools: ["Figma", "Adobe Creative Suite", "Next.js", "React", "TypeScript", "HTML/CSS", "Notion"],
        keyContributions: [
            "Directed creative vision and strategy for all major client engagements.",
            "Built and coded flagship web experiences from concept to deployment.",
            "Established R.O.V.'s operational framework and client communication standards."
        ],
        secretQuote: "Coffee first, code second, creativity always. ☕✨"
    },
    { id: 8, image: "/teammembers/suchettm.JPG", category: "Tech", name: "Suchet", role: "BACKEND ENGINEER", skills: ["API Development", "Database Design", "Server Management"], location: "India", secretQuote: "Real Job: Getting whatever the fuck needs to be done, done" },
    { id: 9, image: "/teammembers/dakshatm.jpg", category: "Systems", name: "Daksha", role: "SYSTEMS ARCHITECT", skills: ["Infrastructure Design", "Security", "Automation"], location: "India", secretQuote: "Building systems that don't break is my superpower. 🦸" },
    { id: 10, image: "/teammembers/suchettm.JPG", category: "Systems", name: "Suchet", role: "SYSTEMS ENGINEER", skills: ["Network Design", "Cloud Infrastructure", "Monitoring"], location: "India", secretQuote: "Real Job: Getting whatever the fuck needs to be done, done" },
];

const categories: Category[] = ["Creative", "Tech", "Systems"];

const TeamSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>("All");
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const [showQuote, setShowQuote] = useState(false);

    const ImageCard = useCallback(({ src, alt, stationary = false, onClick, name }: { src: string; alt: string, stationary?: boolean, onClick?: () => void, name?: string }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <motion.div
                layoutId={stationary ? `card-${src}` : undefined}
                className="image-card"
                style={{
                    width: '600px',
                    height: '338px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    position: 'relative',
                    cursor: stationary ? 'pointer' : 'default'
                }}
                initial={stationary ? { opacity: 0, scale: 0.9 } : undefined}
                animate={stationary ? { opacity: 1, scale: 1 } : undefined}
                exit={stationary ? { opacity: 0, scale: 0.9 } : undefined}
                transition={{ duration: 0.5 }}
                onClick={onClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
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
                {name && isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
                            backdropFilter: 'blur(4px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10
                        }}
                    >
                        <h3 style={{
                            fontFamily: 'sink, sans-serif',
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: '900',
                            color: 'white',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase'
                        }}>
                            {name}
                        </h3>
                    </motion.div>
                )}
            </motion.div>
        );
    }, []);

    const filteredMembers = teamMembers.filter(m => m.category === activeCategory);

    return (
        <section
            style={{
                borderRadius: "20px",
                background: `
                    radial-gradient(ellipse 800px 600px at 50% 120%, 
                        rgba(218, 165, 32, 0.4) 0%, 
                        rgba(184, 134, 11, 0.3) 30%, 
                        transparent 70%),
                    rgba(255, 255, 255, 0.05)
                `,
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
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
                        ? "bg-white shadow-lg"
                        : "hover:bg-white/10"
                        }`}
                    style={{ fontFamily: 'Norwige, sans-serif', color: activeCategory === "All" ? "black" : "white" }}
                >
                    ALL
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-lg font-bold transition-all duration-300 font-futura ${activeCategory === cat
                            ? "bg-white shadow-lg"
                            : "hover:bg-white/10"
                            }`}
                        style={{ fontFamily: 'Norwige, sans-serif', color: activeCategory === cat ? "black" : "white" }}
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
                                        <div className="text-block">
                                            <h2>MEET</h2>
                                        </div>
                                        <ImageCard src={teamMembers[0].image} alt="Team 1" name={teamMembers[0].name} />
                                        <ImageCard src={teamMembers[1].image} alt="Team 2" name={teamMembers[1].name} />
                                        <button
                                            className="category-button"
                                            onClick={() => setActiveCategory("Creative")}
                                        >
                                            CREATIVE
                                        </button>
                                        <ImageCard src={teamMembers[2].image} alt="Team 3" name={teamMembers[2].name} />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Row 2 - Moving Right */}
                        <div className="marquee-row">
                            <div className="marquee-track scroll-right">
                                {[...Array(4)].map((_, i) => (
                                    <React.Fragment key={`r2-${i}`}>
                                        <button
                                            className="category-button"
                                            onClick={() => setActiveCategory("Tech")}
                                        >
                                            TECH
                                        </button>
                                        <ImageCard src={teamMembers[4].image} alt="Team 5" name={teamMembers[4].name} />
                                        <div className="text-block">
                                            <h2>THE</h2>
                                        </div>
                                        <ImageCard src={teamMembers[5].image} alt="Team 6" name={teamMembers[5].name} />
                                        <ImageCard src={teamMembers[6].image} alt="Team 7" name={teamMembers[6].name} />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Row 3 - Moving Left */}
                        <div className="marquee-row">
                            <div className="marquee-track scroll-left">
                                {[...Array(4)].map((_, i) => (
                                    <React.Fragment key={`r3-${i}`}>
                                        <ImageCard src={teamMembers[8].image} alt="Team 9" name={teamMembers[8].name} />
                                        <ImageCard src={teamMembers[9].image} alt="Team 10" name={teamMembers[9].name} />
                                        <div className="text-block">
                                            <h2>TEAM</h2>
                                        </div>
                                        <ImageCard src={teamMembers[8].image} alt="Team 9" name={teamMembers[8].name} />
                                        <button
                                            className="category-button"
                                            onClick={() => setActiveCategory("Systems")}
                                        >
                                            SYSTEMS
                                        </button>
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
                                onClick={() => setSelectedMember(member)}
                                name={member.name}
                            />
                        ))}
                    </motion.div>
                )}
            </div>

            {/* Portfolio Detail View */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: '#F5F5F5',
                            zIndex: 100,
                            padding: '80px 60px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedMember(null)}
                            onClickCapture={() => setShowQuote(false)}
                            style={{
                                position: 'absolute',
                                top: '40px',
                                right: '40px',
                                background: 'black',
                                border: 'none',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                cursor: 'pointer',
                                fontSize: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 102,
                                fontFamily: 'sink, sans-serif',
                                color: 'white',
                            }}
                        >
                            ×
                        </button>

                        {/* Counter */}
                        <div style={{
                            position: 'absolute',
                            top: '40px',
                            left: '40px',
                            fontFamily: 'sink, sans-serif',
                            fontSize: '0.9rem',
                            color: 'black',
                            letterSpacing: '0.05em',
                        }}>
                            {filteredMembers.findIndex(m => m.id === selectedMember.id) + 1}/{filteredMembers.length}
                        </div>

                        {/* Main Content - Positioned Absolutely for Overlapping */}
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '1200px',
                            height: '900px',
                        }}>
                            {/* Large Overlapping Title */}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                style={{
                                    position: 'absolute',
                                    top: '80px',
                                    left: '0',
                                    right: '0',
                                    zIndex: 3,
                                    fontFamily: 'sink, sans-serif',
                                    fontSize: 'clamp(4rem, 12vw, 10rem)',
                                    fontWeight: '900',
                                    color: 'black',
                                    letterSpacing: '-0.03em',
                                    lineHeight: '0.9',
                                    textAlign: 'left',
                                    paddingLeft: '0',
                                }}
                            >
                                {selectedMember.role.replace(/\s+/g, '')}
                            </motion.div>

                            {/* Center Image - Overlapped by Title */}
                            <motion.div
                                layoutId={`card-${selectedMember.image}`}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '350px',
                                    height: '450px',
                                    borderRadius: '0px',
                                    overflow: 'hidden',
                                    zIndex: 2,
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                }}
                            >
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </motion.div>

                            {/* Skills - Left Side, Overlapping Bottom of Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    position: 'absolute',
                                    left: '0',
                                    bottom: '360px',
                                    zIndex: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                }}
                            >
                                {selectedMember.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            fontFamily: 'sink, sans-serif',
                                            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                                            color: 'black',
                                            fontWeight: '700',
                                            letterSpacing: '0.02em',
                                        }}
                                    >
                                        /{skill.toUpperCase()}
                                    </div>
                                ))}
                            </motion.div>

                            {/* Location - Right Side */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    position: 'absolute',
                                    right: '0',
                                    top: '20px',
                                    zIndex: 3,
                                    fontFamily: 'sink, sans-serif',
                                    fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
                                    color: 'black',
                                    fontWeight: '600',
                                    letterSpacing: '0.3em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                BASED IN {selectedMember.location.toUpperCase()}
                            </motion.div>

                            {/* Additional Portfolio Information - Only for members with extended data */}
                            {(selectedMember.specialties || selectedMember.tools || selectedMember.keyContributions) && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '0',
                                        right: '0',
                                        zIndex: 3,
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr 1fr',
                                        gap: '40px',
                                        paddingTop: '40px',
                                    }}
                                >
                                    {/* Specialties */}
                                    {selectedMember.specialties && (
                                        <div>
                                            <h3 style={{
                                                fontFamily: 'sink, sans-serif',
                                                fontSize: '1.1rem',
                                                fontWeight: '900',
                                                color: 'black',
                                                marginBottom: '12px',
                                                letterSpacing: '0.05em',
                                            }}>
                                                SPECIALTIES
                                            </h3>
                                            <p style={{
                                                fontFamily: 'Norwige, sans-serif',
                                                fontSize: '0.85rem',
                                                lineHeight: '1.6',
                                                color: '#333',
                                                margin: 0,
                                            }}>
                                                {selectedMember.specialties}
                                            </p>
                                        </div>
                                    )}

                                    {/* Tools */}
                                    {selectedMember.tools && (
                                        <div>
                                            <h3 style={{
                                                fontFamily: 'sink, sans-serif',
                                                fontSize: '1.1rem',
                                                fontWeight: '900',
                                                color: 'black',
                                                marginBottom: '12px',
                                                letterSpacing: '0.05em',
                                            }}>
                                                TOOLS
                                            </h3>
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '6px',
                                            }}>
                                                {selectedMember.tools.map((tool, index) => (
                                                    <div
                                                        key={index}
                                                        style={{
                                                            fontFamily: 'Norwige, sans-serif',
                                                            fontSize: '0.85rem',
                                                            color: '#333',
                                                        }}
                                                    >
                                                        • {tool}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Key Contributions */}
                                    {selectedMember.keyContributions && (
                                        <div>
                                            <h3 style={{
                                                fontFamily: 'sink, sans-serif',
                                                fontSize: '1.1rem',
                                                fontWeight: '900',
                                                color: 'black',
                                                marginBottom: '12px',
                                                letterSpacing: '0.05em',
                                            }}>
                                                KEY CONTRIBUTIONS
                                            </h3>
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '8px',
                                            }}>
                                                {selectedMember.keyContributions.map((contribution, index) => (
                                                    <div
                                                        key={index}
                                                        style={{
                                                            fontFamily: 'Norwige, sans-serif',
                                                            fontSize: '0.85rem',
                                                            lineHeight: '1.5',
                                                            color: '#333',
                                                        }}
                                                    >
                                                        • {contribution}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </div>

                        {/* Counter */}
                        <div style={{
                            position: 'absolute',
                            top: '40px',
                            left: '40px',
                            fontFamily: 'sink, sans-serif',
                            fontSize: '0.9rem',
                            color: 'black',
                            letterSpacing: '0.05em',
                            zIndex: 101,
                        }}>
                            {(() => {
                                const currentIndex = filteredMembers.findIndex(m => m.id === selectedMember.id);
                                return `${currentIndex + 1}/${filteredMembers.length}`;
                            })()}
                        </div>

                        {/* Vertical Team Category Navigation */}
                        <div style={{
                            position: 'absolute',
                            left: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px',
                            zIndex: 101,
                        }}>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowQuote(false);
                                    setActiveCategory("All");
                                    setSelectedMember(null);
                                }}
                                style={{
                                    writingMode: 'vertical-rl',
                                    textOrientation: 'mixed',
                                    background: activeCategory === "All" ? 'white' : 'rgba(0, 0, 0, 0.8)',
                                    color: activeCategory === "All" ? 'black' : 'white',
                                    padding: '30px 15px',
                                    borderRadius: '15px',
                                    border: 'none',
                                    fontSize: '1.2rem',
                                    fontWeight: '900',
                                    fontFamily: 'sink, sans-serif',
                                    cursor: 'pointer',
                                    letterSpacing: '0.1em',
                                    transition: 'all 0.3s ease',
                                    boxShadow: activeCategory === "All" ? '0 4px 15px rgba(255, 255, 255, 0.3)' : '0 2px 10px rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                ALL
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowQuote(false);
                                        setActiveCategory(cat);
                                        setSelectedMember(null);
                                    }}
                                    style={{
                                        writingMode: 'vertical-rl',
                                        textOrientation: 'mixed',
                                        background: activeCategory === cat ? 'white' : 'rgba(0, 0, 0, 0.8)',
                                        color: activeCategory === cat ? 'black' : 'white',
                                        padding: '30px 15px',
                                        borderRadius: '15px',
                                        border: 'none',
                                        fontSize: '1.2rem',
                                        fontWeight: '900',
                                        fontFamily: 'sink, sans-serif',
                                        cursor: 'pointer',
                                        letterSpacing: '0.1em',
                                        transition: 'all 0.3s ease',
                                        boxShadow: activeCategory === cat ? '0 4px 15px rgba(255, 255, 255, 0.3)' : '0 2px 10px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    {cat.toUpperCase()}
                                </button>
                            ))}
                        </div>


                        {/* Secret Quote Button */}
                        {selectedMember.secretQuote && (
                            <>
                                <motion.button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowQuote(!showQuote);
                                    }}
                                    whileHover={{ scale: 1.1, rotate: 15 }}
                                    whileTap={{ scale: 0.9 }}
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        y: {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    style={{
                                        position: 'absolute',
                                        right: '120px',
                                        bottom: '40px',
                                        background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '50px',
                                        height: '50px',
                                        cursor: 'pointer',
                                        fontSize: '24px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 101,
                                        boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
                                    }}
                                >
                                    💭
                                </motion.button>

                                {/* Quote Tooltip */}
                                <AnimatePresence>
                                    {showQuote && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                            transition={{ duration: 0.3 }}
                                            style={{
                                                position: 'absolute',
                                                right: '120px',
                                                bottom: '100px',
                                                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                                                padding: '20px 25px',
                                                borderRadius: '20px',
                                                maxWidth: '300px',
                                                zIndex: 102,
                                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                                            }}
                                        >
                                            <p style={{
                                                fontFamily: 'Norwige, sans-serif',
                                                fontSize: '1rem',
                                                color: '#000',
                                                margin: 0,
                                                fontWeight: '600',
                                                lineHeight: '1.5',
                                            }}>
                                                {selectedMember.secretQuote}
                                            </p>
                                            {/* Triangle pointer */}
                                            <div style={{
                                                position: 'absolute',
                                                bottom: '-10px',
                                                right: '15px',
                                                width: 0,
                                                height: 0,
                                                borderLeft: '10px solid transparent',
                                                borderRight: '10px solid transparent',
                                                borderTop: '10px solid #FFA500',
                                            }} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

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

                .text-block {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 40px;
                    flex-shrink: 0;
                }

                h2 {
                    font-family: 'sink', sans-serif;
                    font-size: clamp(3rem, 6vw, 6rem);
                    font-weight: 900;
                    color: #F7F2E4;
                    margin: 0;
                    letter-spacing: 0.05em;
                    white-space: nowrap;
                }

                button {
                    /* Default button styles */
                    cursor: pointer;
                }
                
                .category-button {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    background: white;
                    color: #3E2723;
                    padding: 40px 20px;
                    border-radius: 20px;
                    border: none;
                    font-size: clamp(1.5rem, 3vw, 2.5rem);
                    font-weight: 900;
                    font-family: 'sink', sans-serif;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    white-space: nowrap;
                    flex-shrink: 0;
                    letter-spacing: 0.1em;
                    height: 338px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                }
                
                .category-button::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(
                        to bottom,
                        transparent,
                        rgba(255, 255, 255, 0.8),
                        transparent
                    );
                    transform: translateY(-100%);
                    transition: transform 1.2s ease;
                }
                
                .category-button:hover::before {
                    transform: translateY(100%);
                }
                
                .category-button:hover {
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
        </section >
    );
};

export default TeamSection;
