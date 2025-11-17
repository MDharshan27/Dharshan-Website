import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import backgroundImage from "../assets/cta-bg.jpg";
import smallImage from "../assets/small-img.jpg";

const CTA = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 12.5,
        y: e.clientY - 12.5,
        duration: 0.3, // faster on mobile
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        id="cursor"
        ref={cursorRef}
        className="fixed top-0 left-0 w-[25px] h-[25px] rounded-full pointer-events-none z-9999 bg-black mix-blend-difference"
      />

      <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
        <div
          className="relative w-full max-w-7xl min-h-[70vh] md:min-h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex items-center justify-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/80"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-10">
            {/* TEXT */}
            <h1
              onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })}
              onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              className="text-white font-semibold leading-snug text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <span className="text-[#C3FE00]">CREATIVITY</span>{" "}
              <span className="text-[#C3FE00]">BUSINESS</span>
              <br />

              <span className="text-white">is the</span>{" "}
              <span className="inline-block mx-1 align-middle">
                <img
                  src={smallImage}
                  alt="inline icon"
                  className="w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 rounded-xl object-cover"
                />
              </span>{" "}
              <span className="text-[#C3FE00]">ENGINE</span>
              <span className="text-white"> of every</span>
              <br />

              <span className="text-[#C3FE00]">POWERFUL BRAND</span>
            </h1>

            {/* CTA BUTTON */}
            <button
              onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
              onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              className="mt-8 sm:mt-10 px-8 sm:px-10 py-3 sm:py-3 rounded-full bg-[#3C01FF] text-white font-semibold text-base sm:text-lg transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
