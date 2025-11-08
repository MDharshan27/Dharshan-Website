import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import starImage from "../assets/star.png";
import topBoxImage from "../assets/man.jpg";
import arrowImage from "../assets/arrow.png";

const Chip = ({ children }) => (
  <span className="bg-black text-white text-xs py-1 px-3 rounded-full inline-block">
    {children}
  </span>
);

const StatBox = ({ value, label, dark }) => (
  <div
    className={`rounded-2xl w-[120px] h-20 flex flex-col justify-center items-center ${
      dark ? "bg-black text-white" : "bg-white text-black shadow"
    }`}
  >
    <div className="text-2xl font-semibold">{value}</div>
    <div className="text-xs opacity-70">{label}</div>
  </div>
);

const About = () => {
  const cursorRef = useRef(null);

  // Custom cursor follow effect
  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 12.5,
        y: e.clientY - 12.5,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Cursor */}
      <div
        id="cursor"
        ref={cursorRef}
        className="fixed top-0 left-0 w-[25px] h-[25px] rounded-full pointer-events-none z-9999 bg-black mix-blend-difference"
      />

      <section className="w-full min-h-screen bg-white text-black px-4 sm:px-8 md:px-16 lg:px-24 py-8 md:py-12 font-sans">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 mb-12 md:mb-30 items-start">
          {/* Left Text */}
          <div className="flex-1">
            <h1
              onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })}
              onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              className="mt-6 sm:mt-10 md:mt-12 text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.2rem] xl:text-[4.8rem] font-semibold leading-tight sm:leading-snug md:leading-none tracking-tight"
            >
              TRANSFORMING <br />
              CONCEPTS <span className="text-[#3C01FF] px-1">INTO</span> <br />
              SCALABLE <br />
              SOLUTIONS
            </h1>
          </div>

          {/* Right Card */}
          <div
            onMouseEnter={() => gsap.to("#cursor", { scale: 2.5, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            className="mt-6 sm:mt-10 md:mt-12 w-full md:w-[420px] bg-[#0b0b0b] text-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <span className="text-base sm:text-lg opacity-80">About Me</span>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#3C01FF] text-black flex items-center justify-center font-bold">
                ✶
              </div>
            </div>
            <p className="text-sm sm:text-lg text-gray-300 leading-relaxed"
              onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
              onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            >
              I’m a passionate Software Engineering undergraduate at Cardiff Metropolitan University, specializing in full-stack development. 
              I love building web, mobile, and desktop apps, writing clean code, and turning ideas into impactful real-world solutions.
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="mt-8 md:mt-16 flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-2">

          {/* Left Side */}
          <div className="flex flex-col gap-4 rounded-3xl w-full md:w-[500px]">
            {/* Top Box */}
            <div className="relative flex-1 bg-gray-200 rounded-3xl flex items-center justify-center overflow-visible h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
              {/* Circular Text + Star */}
              <div className="absolute -top-20 -left-20 w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
                <svg className="absolute w-full h-full" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path id="circlePath" d="M60,5 a55,55 0 1,1 -0.1,0" />
                  </defs>
                  <text fontSize="10" fill="#9b9b9b">
                    <textPath href="#circlePath">
                      Front-end magic • Modern web experiences • Code • Design • Collaboration • 
                    </textPath>
                  </text>
                </svg>

                <img src={starImage} alt="Star" className="w-20 h-20 sm:w-24 sm:h-24 object-contain z-10" />
              </div>

              <img src={topBoxImage} alt="Top Box" className="w-full h-full object-cover rounded-3xl" />
            </div>

            {/* Bottom Boxes */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Left Box */}
              <div className="flex-1 bg-gray-300 rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center">
                <div className="text-3xl sm:text-4xl font-semibold"
                  onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
                  onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
                >30+</div>
                <div className="text-sm sm:text-base text-gray-600 mt-1 text-center">GitHub Repositories</div>
              </div>

              {/* Right Box */}
              <div className="flex-1 bg-black rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center">
                <div className="text-3xl sm:text-4xl text-white font-semibold"
                  onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
                  onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
                >1M+</div>
                <div className="text-sm sm:text-base text-gray-600 mt-1 text-center">Code Contributions</div>
              </div>
            </div>
          </div>

          {/* Right About Card */}
          <div className="bg-[#e8ff8a] rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative w-full md:w-[800px]">

            {/* Tags / Skills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4"
                onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
                onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            >
              <span className="bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">Full-Stack</span>
              <span className="bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">Web Development</span>
              <span className="bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">React</span>
              <span className="bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">Node.js</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-[2.5rem] md:text-[3rem] font-semibold mb-3"
                onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })}
                onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            >
              Designing Meaningful <br />Experiences
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed max-w-full sm:max-w-md">
              Believes in combining creativity and technology to craft meaningful digital experiences. 
              Strives for continuous learning, collaboration, and excellence in every project.
            </p>

            <a href="/work">
              <img
                src={arrowImage}
                alt="Go to Works"
                className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
                onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })}
                onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              />
            </a>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
