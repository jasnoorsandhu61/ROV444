"use client";

import { Waves, Palette } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const handleFlip = (id: string) => {
    setFlippedCard((prev) => (prev === id ? null : id));
  };

  const handleServiceClick = (service: string) => {
    switch (service) {
      case "mixing":
        router.push("/about");
        break;
      case "album-art":
        router.push("/vision");
        break;
      case "web":
        router.push("/web");
        break;
      default:
        setModalOpen(true);
    }
  };

  const services = [
    {
      id: "mixing",
      title: "Mixing & Mastering",
      description:
        "Transform your raw tracks into professional, radio-ready productions.",
      color: "bg-purple-600 hover:bg-purple-700",
      icon: <Waves className="w-8 h-8 text-purple-400" />,
    },
    {
      id: "album-art",
      title: "Album Artwork",
      description: "Make a visual impact with stunning album artwork.",
      color: "bg-teal-600 hover:bg-teal-700",
      icon: <Palette className="w-8 h-8 text-teal-400" />,
    },
    {
      id: "web",
      title: "Web Optimization",
      description:
        "Turning clicks into connections with seamless and high impact designs.",
      color: "bg-yellow-600 hover:bg-yellow-700",
      icon: <Waves className="w-8 h-8 text-yellow-400" />,
    },
  ];

  return (
    <>
      <motion.section
        ref={ref}
        id="services"
        className="py-20 px-4 md:px-8 bg-black relative"
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        {/* Title */}
        <div className="relative z-10 text-center">
          <motion.h2
            className="text-4xl font-bold mb-16 text-white"
            variants={titleVariants}
            style={{ fontFamily: "Flight Maybe Maj, sans-serif" }}
          >
            OUR SERVICES
          </motion.h2>
        </div>

        {/* Grid */}
        <motion.div
          className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 relative z-10 font-proximanova"
          variants={sectionVariants}
        >
          {services.map((service) => (
            <div key={service.id} className="flex justify-center">
              <div
                className={`flip-folder ${flippedCard === service.id ? "flipped" : ""}`}
                onClick={() => handleFlip(service.id)}
              >
                <div className="flip-folder-inner">
                  {/* FRONT SIDE */}
                  <div className="flip-folder-front group">
                    <div className="file relative w-60 h-40 origin-bottom cursor-pointer">
                      <div className="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]" />
                      <div className="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]" />
                      <div className="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]" />
                      <div className="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]" />
                      <div className="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]" />
                    </div>
                    <p className="text-lg text-gray-300 font-semibold mt-3">
                      {service.title}
                    </p>
                  </div>

                  {/* BACK SIDE */}
                  <div className="flip-folder-back bg-amber-600 text-white flex flex-col justify-center items-center rounded-2xl border border-amber-500 px-4">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-center mb-4">
                      {service.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceClick(service.id);
                      }}
                      className={`mt-2 px-6 py-2 rounded-full transition-colors ${service.color}`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
            <div className="bg-black text-white p-8 rounded-lg shadow-lg text-center w-96 relative border border-gray-700 font-proximanova">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
                onClick={() => setModalOpen(false)}
              >
                ✕
              </button>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-6">
                Reach us on our social platforms or email!
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:rangeofview@rovstudios.com"
                  className="block bg-gray-800 hover:bg-gray-700 rounded-lg py-2"
                >
                  Email Us
                </a>
                <a
                  href="https://www.instagram.com/rangeofviewstudios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-800 hover:bg-gray-700 rounded-lg py-2"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/range-of-view-studios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-800 hover:bg-gray-700 rounded-lg py-2"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </motion.section>

      {/* CSS for Folder Flip Animation */}
      <style jsx global>{`
        .font-proximanova {
          font-family: "Proxima Nova", sans-serif;
        }
        .custom-font-flight {
          font-family: "Flight Maybe", sans-serif;
        }

        .flip-folder {
          width: 240px;
          height: 200px;
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-folder-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.9s ease;
          transform-style: preserve-3d;
        }

        .flip-folder.flipped .flip-folder-inner {
          transform: rotateY(180deg);
        }

        .flip-folder-front,
        .flip-folder-back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .flip-folder-front {
          background: transparent;
        }

        .flip-folder-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </>
  );
}
