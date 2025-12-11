"use client";

import React from "react";

const TeamSection: React.FC = () => {
    // Placeholder team members - images can be added later
    const teamMembers = [
        { id: 1, name: "Team Member 1", role: "Role" },
        { id: 2, name: "Team Member 2", role: "Role" },
        { id: 3, name: "Team Member 3", role: "Role" },
        { id: 4, name: "Team Member 4", role: "Role" },
        { id: 5, name: "Team Member 5", role: "Role" },
        { id: 6, name: "Team Member 6", role: "Role" },
        { id: 7, name: "Team Member 7", role: "Role" },
        { id: 8, name: "Team Member 8", role: "Role" },
    ];

    return (
        <section
            style={{
                backgroundColor: "#8B5A3C",
                minHeight: "100vh",
                padding: "80px 40px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    position: "relative",
                }}
            >
                {/* Main Title - Split across the layout */}
                <div
                    style={{
                        position: "relative",
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "20px",
                        marginBottom: "40px",
                    }}
                >
                    {/* Row 1 */}
                    <div style={{ gridColumn: "1 / 2" }}>
                        {/* Placeholder 1 */}
                        <div
                            style={{
                                backgroundColor: "#D3D3D3",
                                borderRadius: "20px",
                                aspectRatio: "16/9",
                                width: "100%",
                            }}
                        />
                    </div>
                    <div style={{ gridColumn: "2 / 3" }}>
                        {/* Placeholder 2 */}
                        <div
                            style={{
                                backgroundColor: "#D3D3D3",
                                borderRadius: "20px",
                                aspectRatio: "16/9",
                                width: "100%",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            gridColumn: "3 / 4",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/* MEET text */}
                        <h2
                            style={{
                                fontSize: "clamp(3rem, 8vw, 6rem)",
                                fontWeight: "900",
                                color: "white",
                                margin: 0,
                                fontFamily: "Futura, sans-serif",
                                letterSpacing: "0.05em",
                            }}
                        >
                            MEET
                        </h2>
                    </div>
                </div>

                {/* Row 2 */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "auto 1fr 1fr 1fr",
                        gap: "20px",
                        marginBottom: "40px",
                        alignItems: "center",
                    }}
                >
                    {/* THE text */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "clamp(3rem, 8vw, 6rem)",
                                fontWeight: "900",
                                color: "white",
                                margin: 0,
                                fontFamily: "Futura, sans-serif",
                                letterSpacing: "0.05em",
                            }}
                        >
                            THE
                        </h2>
                    </div>
                    {/* Placeholder 3 */}
                    <div
                        style={{
                            backgroundColor: "#D3D3D3",
                            borderRadius: "20px",
                            aspectRatio: "16/9",
                            width: "100%",
                        }}
                    />
                    {/* Placeholder 4 */}
                    <div
                        style={{
                            backgroundColor: "#D3D3D3",
                            borderRadius: "20px",
                            aspectRatio: "16/9",
                            width: "100%",
                        }}
                    />
                    {/* Placeholder 5 */}
                    <div
                        style={{
                            backgroundColor: "#D3D3D3",
                            borderRadius: "20px",
                            aspectRatio: "16/9",
                            width: "100%",
                        }}
                    />
                </div>

                {/* Row 3 */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr auto 1fr",
                        gap: "20px",
                        alignItems: "center",
                    }}
                >
                    {/* Placeholder 6 */}
                    <div
                        style={{
                            backgroundColor: "#D3D3D3",
                            borderRadius: "20px",
                            aspectRatio: "16/9",
                            width: "100%",
                        }}
                    />
                    {/* Placeholder 7 */}
                    <div
                        style={{
                            backgroundColor: "#D3D3D3",
                            borderRadius: "20px",
                            aspectRatio: "16/9",
                            width: "100%",
                        }}
                    />
                    {/* TEAM text and button */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "20px",
                            padding: "0 20px",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "clamp(3rem, 8vw, 6rem)",
                                fontWeight: "900",
                                color: "white",
                                margin: 0,
                                fontFamily: "Futura, sans-serif",
                                letterSpacing: "0.05em",
                            }}
                        >
                            TEAM
                        </h2>
                        <button
                            style={{
                                backgroundColor: "white",
                                color: "#8B5A3C",
                                padding: "16px 40px",
                                borderRadius: "50px",
                                border: "none",
                                fontSize: "18px",
                                fontWeight: "600",
                                cursor: "pointer",
                                fontFamily: "Futura, sans-serif",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow =
                                    "0 6px 20px rgba(0, 0, 0, 0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow =
                                    "0 4px 12px rgba(0, 0, 0, 0.2)";
                            }}
                        >
                            Who We Are
                        </button>
                    </div>
                    {/* Placeholder 8 */}
                    <div
                        style={{
                            backgroundColor: "#D3D3D3",
                            borderRadius: "20px",
                            aspectRatio: "16/9",
                            width: "100%",
                        }}
                    />
                </div>

                {/* Responsive styles */}
                <style jsx>{`
          @media (max-width: 1024px) {
            section {
              padding: 60px 30px !important;
            }
          }

          @media (max-width: 768px) {
            section {
              padding: 40px 20px !important;
            }
          }
        `}</style>
            </div>
        </section>
    );
};

export default TeamSection;
