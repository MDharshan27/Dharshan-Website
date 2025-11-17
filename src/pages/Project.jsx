import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CTA from "../components/CTA";
import { allProjects } from "../data/projects"; // import from data folder

const Project = () => {
  const cursorRef = useRef(null);
  const categories = ["All", "Web Design", "Mobile App", "Desktop App", "Mini Projects"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(10);

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

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

  const handleLoadMore = () => {
    setVisibleCount(filteredProjects.length);
  };

  return (
    <>
      {/* Custom Cursor */}
      <div
        id="cursor"
        ref={cursorRef}
        className="fixed top-0 left-0 w-[25px] h-[25px] rounded-full pointer-events-none z-50 bg-black mix-blend-difference"
      />

      <section className="w-full min-h-screen bg-white text-black flex flex-col">
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-6 sm:p-8 md:p-10">
          <div className="flex-1">
            <h1
              onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })}
              onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              className="mt-6 sm:mt-10 md:mt-12 text-3xl sm:text-4xl md:text-5xl lg:text-[5vw] font-semibold leading-tight tracking-tight"
            >
              CRAFTING <br />
              DIGITAL <span className="text-[#3C01FF] px-1">PROJECTS</span> <br />
              WITH IMPACT
            </h1>
          </div>

          <div className="flex-1 md:max-w-[400px] mt-4 md:mt-0">
            <p
              onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
              onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              className="text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed"
            >
              Explore a curated selection of my latest digital creations —
              blending minimal aesthetics with high-performance development.
              Each project is crafted with precision and built for real-world impact.
            </p>
          </div>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 p-6 sm:p-8 md:p-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setVisibleCount(10); }}
              onMouseEnter={() => gsap.to("#cursor", { scale: 1.5, duration: 0.3 })}
              onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              className={`px-4 py-2 rounded-full border transition-all duration-300
                ${selectedCategory === cat
                  ? "bg-[#3C01FF] text-white border-[#3C01FF]"
                  : "bg-white text-black border-gray-300 hover:bg-[#3C01FF] hover:text-white cursor-pointer"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 sm:p-8 md:p-10">
          {filteredProjects.slice(0, visibleCount).map((p) => (
            <div
              key={p.id}
              className="rounded-3xl overflow-hidden bg-[#0f0f0f] shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer relative group"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-auto max-h-[400px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[500px] object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:opacity-80"
              />

              <div className="absolute bottom-4 left-4 text-white opacity-80">
                <div
                  className="text-lg sm:text-xl md:text-2xl font-semibold"
                  onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
                  onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
                >
                  {p.title}
                </div>
                <div className="text-xs sm:text-sm md:text-base opacity-70 mt-1">{p.description}</div>
              </div>

              <div
                className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white backdrop-blur-md flex items-center justify-center"
                onMouseEnter={() => gsap.to("#cursor", { scale: 1.5, duration: 0.3 })}
                onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              >
                <span className="text-black text-lg sm:text-xl">↗</span>
              </div>
            </div>
          ))}

          {/* EXPLORE MORE BUTTON */}
          {visibleCount < filteredProjects.length && (
            <div className="col-span-full flex justify-center mt-6 mb-0">
              <button
                onClick={handleLoadMore}
                onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
                onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
                className="px-6 py-3 rounded-full bg-[#3C01FF] cursor-pointer text-white font-semibold text-lg transition-all duration-300"
              >
                Explore More
              </button>
            </div>
          )}
        </div>

        <CTA />
      </section>
    </>
  );
};

export default Project;
