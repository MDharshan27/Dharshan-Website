import React, { useEffect } from "react";
import { gsap } from "gsap";
import heroImage from "../assets/man.jpg";

const Home = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, {
        x: clientX - 25 / 2, 
        y: clientY - 25 / 2,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Spotlight Cursor (works on all sections) */}
      <div
        id="cursor"
        className="fixed top-0 left-0 h-[25px] w-[25px] pointer-events-none z-9999 rounded-full"
      />

      <div className="w-full min-h-screen bg-white text-black flex flex-col">

        {/* ===== Section 1: Name ===== */}
        <div className="relative w-full h-[350px] flex flex-col justify-start items-start p-6 sm:p-8 md:p-10">
          <div>
            <h1
              onMouseEnter={() => gsap.to("#cursor", { scale: 5, duration: 0.3 })}
              onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[5vw] mt-5 sm:mt-10 font-semibold leading-snug tracking-tight"
            >
              MOHANADHARSHAN <br /> SANDRANKUMARAN
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl text-[#5285eb] mt-2"
              onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
              onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            >
              Innovating Web & Mobile Applications
            </p>

            <p className="text-xs sm:text-sm md:text-base text-gray-800 mt-2">
              (Hatton, Sri Lanka)
            </p>
          </div>

          <div className="absolute bottom-6 right-6 sm:right-8 md:right-10 flex items-center gap-2 text-gray-800 text-sm">
            <span className="animate-bounce">↓</span> Scroll Down
          </div>
        </div>

        {/* ===== Section 2: Hero Image ===== */}
        <div className="w-full h-screen relative">
          <img
            src={heroImage}
            alt="Designer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full flex flex-col md:flex-row">
          {/* Left Box - Text Content (70%) */}
          <div
            className="bg-white p-6 sm:p-10 md:p-16 border-b md:border-b-0 md:border-r border-gray-200"
            style={{ flexBasis: "70%" }}
          >
            <h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug"
              onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })}
              onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            >
              Hi, I'm <span className="text-[#5285eb] font-semibold">Sandran Kumaran Mohana Dharshan</span> — a graduate of <span className="text-[#5285eb] font-semibold">Cardiff Metropolitan University</span> with an HND in Computing and Software Engineering. I specialize in web and mobile app development, with a growing interest in desktop applications, continuously expanding my skills across platforms.
            </h1>
          </div>

          {/* Right Box - About Me (30%) */}
          <div
            className="bg-white p-6 sm:p-10 md:p-16 flex flex-col justify-between"
            style={{ flexBasis: "30%" }}
          >
            <div className="flex justify-end mb-4"
              onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
              onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            >
              <p className="text-base sm:text-lg md:text-lg text-gray-600 font-medium cursor-pointer">About Me ↗</p>
            </div>

            <div className="flex justify-end gap-2 mt-8">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
