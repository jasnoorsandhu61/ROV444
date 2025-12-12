"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

type Category = "All" | "Dev" | "Design" | "Systems";

interface TeamMember {
    id: number;
    image: string;
    category: Category;
    name: string;
    role: string;
    bio: string[];
    skills: string[];
    projects: string[];
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        image: "/teammembers/basutm.JPG",
        category: "Dev",
        name: "Basu",
        role: "Full Stack Developer",
        bio: [
            "Passionate about creating seamless user experiences",
            "Specializes in modern web technologies",
            "5+ years of development experience",
            "Led multiple high-impact projects"
        ],
        skills: ["React", "Node.js", "TypeScript", "Next.js"],
        projects: ["E-commerce Platform", "Dashboard Analytics", "Mobile App"]
    },
    {
        id: 2,
        image: "/teammembers/dakshatm.jpg",
        category: "Design",
        name: "Daksha",
        role: "UI/UX Designer",
        bio: [
            "Creative designer with an eye for detail",
            "Expert in user-centered design",
            "3+ years of design experience",
            "Awards in design excellence"
        ],
        skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
        projects: ["Brand Identity", "Mobile Interface", "Design System"]
    },
    {
        id: 3,
        image: "/teammembers/jahnavitm.jpg",
        category: "Systems",
        name: "Jahnavi",
        role: "Systems Architect",
        bio: [
            "Building scalable infrastructure",
            "Cloud and DevOps specialist",
            "6+ years in systems design",
            "Optimized performance for millions of users"
        ],
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
        projects: ["Cloud Migration", "Microservices Architecture", "Performance Optimization"]
    },
    {
        id: 4,
        image: "/teammembers/suchettm.JPG",
        category: "Dev",
        name: "Suchet",
        role: "Backend Engineer",
        bio: [
            "Expert in server-side development",
            "Database optimization specialist",
            "4+ years of backend experience",
            "Built robust API systems"
        ],
        skills: ["Python", "PostgreSQL", "Redis", "GraphQL"],
        projects: ["API Gateway", "Data Pipeline", "Authentication System"]
    },
    {
        id: 5,
        image: "/teammembers/tanvitm.jpg",
        category: "Design",
        name: "Tanvi",
        role: "Product Designer",
        bio: [
            "Designing delightful user experiences",
            "Research-driven design approach",
            "3+ years in product design",
            "Improved conversion rates by 40%"
        ],
        skills: ["User Research", "Wireframing", "Visual Design", "Prototyping"],
        projects: ["Mobile App Redesign", "Onboarding Flow", "Design Tokens"]
    },
    {
        id: 6,
        image: "/teammembers/jasnoortm.jpg",
        category: "Dev",
        name: "Jasnoor",
        role: "Frontend Developer",
        bio: [
            "Creating beautiful, performant interfaces",
            "Animation and interaction specialist",
            "4+ years of frontend experience",
            "Contributed to open-source projects"
        ],
        skills: ["React", "GSAP", "Three.js", "CSS Animation"],
        projects: ["Interactive Landing Page", "3D Product Viewer", "Animation Library"]
    },
];

const categories: Category[] = ["Dev", "Design", "Systems"];

// DetailedView Component with GSAP Scroll Animation
const DetailedView: React.FC<{ member: TeamMember; onClose: () => void }> = ({ member, onClose }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const fillRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

    // Use useLayoutEffect for GSAP to prevent flash of unstyled content and ensure DOM is ready
    React.useLayoutEffect(() => {
        // Clear slides ref array to ensure fresh refs
        slidesRef.current = [];

        const timeoutId = setTimeout(() => {
            if (!containerRef.current || !sectionRef.current || !listRef.current || !fillRef.current) {
                console.error("Missing refs!");
                return;
            }
            console.log("Initializing GSAP ScrollTrigger for", member.name);

            const listItems = listRef.current.querySelectorAll("li");
            const slides = slidesRef.current.filter((el): el is HTMLDivElement => el !== null);

            // Initial Setup
            gsap.set(fillRef.current, {
                scaleY: 1 / listItems.length,
                transformOrigin: "top left"
            });

            // Clear any potential existing inline styles from previous animations if needed
            // (though a fresh mount usually handles this)

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    // scroller: containerRef.current, // TESTING: Using window scroll instead
                    start: "top top",
                    end: `+=${listItems.length * 50}%`,
                    pin: true,
                    pinType: "transform", // CRITICAL for custom scrollers/framer motion
                    scrub: true,
                    anticipatePin: 1,
                    markers: true,
                    onEnter: () => console.log("ST: entered"),
                    onUpdate: (self) => console.log("ST progress:", self.progress),
                }
            });

            listItems.forEach((item, i) => {
                const previousItem = listItems[i - 1];
                const currentSlide = slides[i];
                const previousSlide = slides[i - 1];

                if (previousItem && currentSlide) {
                    tl.set(item, { color: "#0ae448" }, 0.5 * i)
                        .to(currentSlide, { autoAlpha: 1, duration: 0.2 }, "<")
                        .set(previousItem, { color: "#fffce1" }, "<");

                    if (previousSlide) {
                        tl.to(previousSlide, { autoAlpha: 0, duration: 0.2 }, "<");
                    }
                } else if (currentSlide) {
                    // First item
                    gsap.set(item, { color: "#0ae448" });
                    gsap.set(currentSlide, { autoAlpha: 1 });
                }
            });

            tl.to(fillRef.current, {
                scaleY: 1,
                transformOrigin: "top left",
                ease: "none",
                duration: tl.duration()
            }, 0);

            console.log("Timeline created with duration:", tl.duration());
            console.log("ScrollTrigger created:", tl.scrollTrigger);
            // Don't call refresh here - it might invalidate the pin
        }, 200); // Longer timeout to ensure Framer Motion is done

        return () => {
            clearTimeout(timeoutId);
            ScrollTrigger.getAll().forEach(st => st.kill());
            console.log("Cleaned up ScrollTriggers");
        };
    }, [member]);

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                minHeight: "100vh",
                zIndex: 9999,
                backgroundColor: "#0d0d0d",
            }}
        >
            <button
                onClick={onClose}
                style={{
                    position: "fixed",
                    top: "2rem",
                    right: "2rem",
                    zIndex: 10000,
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    fontSize: "24px",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
            >
                ✕
            </button>

            {/* Pinned Section */}
            <section
                ref={sectionRef}
                className="section pin-section"
                style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTop: "dashed 2px rgba(255,255,255,0.2)",
                    borderBottom: "dashed 2px rgba(255,255,255,0.2)",
                }}
            >
                <div className="content" style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    padding: "0 10px",
                    position: "relative"
                }}>
                    {/* Left List */}
                    <ul ref={listRef} className="list" style={{
                        fontSize: "30px",
                        color: "#fffce1",
                        margin: 0,
                        padding: 0,
                        paddingRight: "40px",
                        listStyle: "none",
                        flexGrow: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px"
                    }}>
                        <li style={{ fontFamily: "Norwige Light, sans-serif" }}>{member.name}</li>
                        <li style={{ fontFamily: "Norwige Light, sans-serif" }}>{member.role}</li>
                        {member.bio.map((line, i) => (
                            <li key={i} style={{ fontFamily: "Norwige Light, sans-serif" }}>{line}</li>
                        ))}
                    </ul>

                    {/* Fill Line */}
                    <div ref={fillRef} className="fill" style={{
                        position: "absolute",
                        top: 0,
                        left: "calc(100% - 65%)", // Adjust based on layout
                        width: "3px",
                        height: "100%",
                        backgroundColor: "#0ae448",
                        transformOrigin: "top left"
                    }}></div>

                    {/* Right Slides */}
                    <div ref={rightRef} className="right" style={{
                        flexGrow: 1,
                        position: "relative",
                        marginLeft: "60px"
                    }}>
                        {/* Slide 1: Image */}
                        <div
                            className="slide"
                            ref={el => { if (el) slidesRef.current[0] = el; }}
                            style={{
                                position: "absolute",
                                width: "100%",
                                top: "50%",
                                transform: "translateY(-50%)",
                                opacity: 0,
                                visibility: "hidden"
                            }}
                        >
                            <img src={member.image} alt={member.name} style={{ width: "100%", maxWidth: "400px", borderRadius: "20px" }} />
                        </div>

                        {/* Slide 2: Skills */}
                        <div
                            className="slide"
                            ref={el => { if (el) slidesRef.current[1] = el; }}
                            style={{
                                position: "absolute",
                                width: "100%",
                                top: "50%",
                                transform: "translateY(-50%)",
                                opacity: 0,
                                visibility: "hidden",
                                backgroundColor: "rgba(10, 228, 72, 0.1)",
                                padding: "40px",
                                border: "2px solid #0ae448",
                                borderRadius: "20px"
                            }}
                        >
                            <h3 style={{ color: "#0ae448", fontFamily: "sink, sans-serif", fontSize: "32px", marginBottom: "20px" }}>Skills</h3>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                                {member.skills.map((skill, i) => (
                                    <span key={i} style={{ backgroundColor: "#0ae448", color: "#1a1a1a", padding: "8px 20px", borderRadius: "20px", fontFamily: "Norwige, sans-serif", fontWeight: "600" }}>{skill}</span>
                                ))}
                            </div>
                        </div>

                        {/* Bio Slides */}
                        {member.bio.map((bioLine, i) => (
                            <div
                                key={i}
                                className="slide"
                                ref={el => { if (el) slidesRef.current[i + 2] = el; }}
                                style={{
                                    position: "absolute",
                                    width: "100%",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    opacity: 0,
                                    visibility: "hidden",
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    padding: "30px",
                                    borderRadius: "20px",
                                    backdropFilter: "blur(10px)"
                                }}
                            >
                                <p style={{ color: "#fffce1", fontFamily: "Norwige Light, sans-serif", fontSize: "28px", margin: 0 }}>{bioLine}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ height: "10vh" }}></section>
        </motion.div>
    );
};

const TeamSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>("All");
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    const ImageCard = useCallback(({ src, alt, stationary = false, onClick }: { src: string; alt: string, stationary?: boolean, onClick?: () => void }) => (
        <motion.div
            layoutId={stationary ? `card-${src}` : undefined}
            className="image-card"
            onClick={onClick}
            style={{
                width: '600px',
                height: '338px', // 16:9 ratio
                borderRadius: '20px',
                overflow: 'hidden',
                flexShrink: 0,
                position: 'relative',
                cursor: onClick ? 'pointer' : 'default',
            }}
            initial={stationary ? { opacity: 0, scale: 0.9 } : undefined}
            animate={stationary ? { opacity: 1, scale: 1 } : undefined}
            exit={stationary ? { opacity: 0, scale: 0.9 } : undefined}
            transition={{ duration: 0.5 }}
            whileHover={onClick ? { scale: 1.05 } : undefined}
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
        <>
            <AnimatePresence>
                {selectedMember && (
                    <DetailedView
                        member={selectedMember}
                        onClose={() => setSelectedMember(null)}
                    />
                )}
            </AnimatePresence>

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
                                    onClick={() => setSelectedMember(member)}
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
        </>
    );
};

export default TeamSection;
