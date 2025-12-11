"use client";

import React, { useState } from "react";
import { User, Video, Headphones, Cpu, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  isExpanded: boolean;
  expandedCard: string | null;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  position,
  isExpanded,
  expandedCard,
  onHover,
  onLeave,
  onClick,
}) => {
  const isAnyExpanded = expandedCard !== null;
  const isCollapsed = isAnyExpanded && !isExpanded;

  return (
    <div
      className={`relative group transition-all duration-1200 ease-in-out ${isExpanded ? "expanded-card" : isCollapsed ? "collapsed-card" : "normal-card"
        }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Glass container */}
      <div
        className={`relative bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden transition-all duration-1200 h-full ${isExpanded ? "p-8" : "p-6"
          } hover:bg-black/40 hover:border-white/20 cursor-pointer`}
        onClick={onClick}
      >
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
          <div className="shimmer-effect"></div>
        </div>

        {isExpanded ? (
          /* Expanded content */
          <div className="relative z-10 flex flex-col md:flex-row gap-6 h-full opacity-0 animate-fadeIn">
            {/* Left side - Text content */}
            <div className="flex-1 flex flex-col justify-between transform transition-all duration-1200 delay-200">
              <div>
                <h3
                  className="text-white/90 text-3xl md:text-4xl lg:text-5xl font-medium uppercase tracking-wider mb-4 transform transition-all duration-1200"
                  style={{ fontFamily: "Futura, sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-white/70 text-base md:text-lg mb-4 transform transition-all duration-1200 delay-300">
                  {description}
                </p>
                <p className="text-white/50 text-sm md:text-base uppercase tracking-wide transform transition-all duration-1200 delay-350">
                  Projects starting $1000
                </p>
              </div>

              <button className="bg-white/90 text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300 w-fit transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Right side - Image/Icon placeholder */}
            <div className="w-full md:w-96 h-full min-h-[250px] bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center transform transition-all duration-1200 delay-400">
              <div className="text-white/30 transform transition-all duration-1200">{icon}</div>
            </div>
          </div>
        ) : (
          /* Collapsed content */
          <div className="relative z-10 flex flex-col justify-between h-full transition-all duration-1200">
            {!isAnyExpanded && (
              <>
                {/* Main content with folder and text side by side */}
                <div className="flex items-center gap-6 mb-6 opacity-0 animate-fadeIn">
                  {/* 3D Flip Container */}
                  <div className="flip-container w-48 h-36 flex-shrink-0 group-folder transform transition-all duration-1200">
                    <div className="flip-card w-full h-full">
                      {/* Front Side - Folder */}
                      <div className="flip-card-front">
                        <div className="relative w-full h-full">
                          {/* Folder tab */}
                          <div className="absolute -top-3 left-0 w-32 h-10 bg-[#a9a495] rounded-t-2xl transition-all duration-1200"></div>
                          {/* Main folder body */}
                          <div className="relative w-full h-full bg-[#a9a495] rounded-3xl shadow-2xl flex items-center justify-center transition-all duration-1200">
                            <div className="text-white/90 transition-all duration-1200">{icon}</div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl"></div>
                          </div>
                        </div>
                      </div>

                      {/* Back Side - Redirect Icon */}
                      <div className="flip-card-back">
                        <div className="relative w-full h-full">
                          <div className="absolute -top-3 left-0 w-32 h-10 bg-[#a9a495] rounded-t-2xl"></div>
                          <div className="relative w-full h-full bg-[#a9a495] rounded-3xl shadow-2xl flex items-center justify-center">
                            <div className="text-white/90">
                              <ExternalLink className="w-20 h-20" strokeWidth={1.5} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text to the right of folder */}
                  <p
                    className="text-white/60 text-sm uppercase tracking-wider transition-all duration-1200"
                    style={{ fontFamily: "Futura, sans-serif" }}
                  >
                    Projects starting from
                  </p>
                </div>
              </>
            )}

            {/* Service title - always visible */}
            <h3
              className={`text-white/90 font-medium uppercase tracking-wider transition-all duration-1200 ${isCollapsed ? "text-center text-lg md:text-xl" : "text-center text-lg md:text-2xl"
                }`}
              style={{ fontFamily: "Futura, sans-serif" }}
            >
              {title}
            </h3>
          </div>
        )}
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-150%) rotate(15deg);
          }
          100% {
            transform: translateX(250%) rotate(15deg);
          }
        }

        .shimmer-effect {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 60%;
          height: 200%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.25) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          filter: blur(10px);
          animation: shimmer 2.5s ease-in-out infinite;
        }

        /* 3D Flip Animation Styles */
        .flip-container {
          perspective: 1000px;
        }

        .flip-card {
          position: relative;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .group-folder:hover .flip-card {
          transform: rotateX(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          top: 0;
          left: 0;
        }

        .flip-card-back {
          transform: rotateX(180deg);
        }
      `}</style>
    </div>
  );
};

export default function Services() {
  const router = useRouter();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setTimeout(() => {
      switch (id) {
        case "web":
          router.push("/web");
          break;
        case "video":
          router.push("/vision");
          break;
        case "sound":
          router.push("/sound");
          break;
        case "ai":
          router.push("/ctrla");
          break;
      }
    }, 400);
  };

  const services = [
    {
      id: "web",
      title: "Web Optimization",
      icon: <User className="w-16 h-16 text-white/80" />,
      description: "Turning clicks into connections with seamless and high impact designs.",
      position: "top-left" as const,
    },
    {
      id: "sound",
      title: "Sound Engineering",
      icon: <Headphones className="w-16 h-16 text-white/80" />,
      description: "Audio production & mixing that brings your content to life with crystal-clear quality.",
      position: "top-right" as const,
    },
    {
      id: "video",
      title: "Video Production",
      icon: <Video className="w-16 h-16 text-white/80" />,
      description: "Cinematic content & aerial media that captures attention and delivers your message.",
      position: "bottom-left" as const,
    },
    {
      id: "ai",
      title: "AI Integration",
      icon: <Cpu className="w-16 h-16 text-white/80" />,
      description: "Custom automation solutions powered by AI to streamline your business processes.",
      position: "bottom-right" as const,
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-6 relative flex items-center">
      {/* Decorative stars */}
      <img
        src="/star.svg"
        alt="Star"
        className="absolute top-16 right-20 w-32 h-32 opacity-90 z-50 pointer-events-none"
        style={{
          animation: "float 6s ease-in-out infinite",
        }}
      />

      <img
        src="/star2.svg"
        alt="Star"
        className={`absolute top-[40%] left-1/2 -translate-x-1/2 w-28 h-28 z-50 pointer-events-none transition-opacity duration-500 ${expandedCard ? "opacity-0" : "opacity-85"
          }`}
        style={{
          animation: "float 7s ease-in-out infinite",
        }}
      />

      <img
        src="/ques.svg"
        alt="Question"
        className="absolute bottom-28 left-16 w-28 h-28 opacity-90 z-50 pointer-events-none"
        style={{
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <img
        src="/star3.svg"
        alt="Star"
        className="absolute bottom-20 right-16 w-32 h-32 opacity-85 z-50 pointer-events-none"
        style={{
          animation: "float 6.5s ease-in-out infinite",
        }}
      />

      <div className="max-w-7xl mx-auto relative w-full">
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translate(-50%, 0px);
            }
            50% {
              transform: translate(-50%, -20px);
            }
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 1.5rem;
            height: 650px;
            max-height: 80vh;
          }

          .services-grid.has-expanded {
            grid-template-columns: 2fr 1fr;
            grid-template-rows: repeat(3, 1fr);
          }

          .expanded-card {
            grid-column: 1 / 2;
            grid-row: 1 / 4;
          }

          .collapsed-card {
            grid-column: 2 / 3;
          }

          .normal-card {
            /* Default positioning in 2x2 grid */
          }

          @font-face {
            font-family: "Flight Maybe Maj";
            src: url("/fonts/Flight Maybe Maj.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: "ZRTW Bokerough";
            src: url("/fonts/ZRTW-BokeRoughPersonalUse.otf") format("opentype");
            font-weight: normal;
            font-style: normal;
          }
        `}</style>

        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-6xl lg:text-7xl text-white/90 uppercase tracking-wider mb-4"
            style={{ fontFamily: "Sink, sans-serif" }}
          >
            SERVICES
          </h2>
        </div>

        {/* Dynamic grid */}
        <div className={`services-grid ${expandedCard ? "has-expanded" : ""}`}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              position={service.position}
              isExpanded={expandedCard === service.id}
              expandedCard={expandedCard}
              onHover={() => setExpandedCard(service.id)}
              onLeave={() => setExpandedCard(null)}
              onClick={() => handleCardClick(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
