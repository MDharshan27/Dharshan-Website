import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// IMPORT YOUR IMAGES
import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project1.jpg";
import Project3 from "../assets/project1.jpg";
import Project4 from "../assets/project1.jpg";

const Project = () => {
  const cursorRef = useRef(null);

  const allProjects = [
    {
      id: 1,
      title: "SOLOFOLIO",
      category: "Web Design",
      description: "A personal portfolio website showcasing creative web designs.",
      image: Project1,
    },
    {
      id: 2,
      title: "UIbase",
      category: "Mobile App",
      description: "A mobile UI library for fast and consistent app development.",
      image: Project2,
    },
    {
      id: 3,
      title: "UIbase",
      category: "Desktop App",
      description: "Desktop application with intuitive interface for productivity.",
      image: Project3,
    },
    {
      id: 4,
      title: "SOLOFOLIO",
      category: "Mini Project",
      description: "A small creative project demonstrating frontend skills.",
      image: Project4,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  const categories = ["All", "Web Design", "Mobile App", "Desktop App", "Mini Project"];

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
      {/* Custom Cursor */}
      <div
        id="cursor"
        ref={cursorRef}
        className="fixed top-0 left-0 w-[25px] h-[25px] rounded-full pointer-events-none z-50 bg-black mix-blend-difference"
      />

      <section className="w-full min-h-screen bg-white text-black flex flex-col">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-10 sm:pt-16">
          
          {/* LEFT – HEADING */}
          <div className="flex-1">
            <h1
              onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })}
              onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4.5rem] font-semibold leading-tight sm:leading-snug md:leading-none tracking-tight"
            >
              CRAFTING <br />
              DIGITAL <span className="text-[#3C01FF] px-1">PROJECTS</span> <br />
              WITH IMPACT
            </h1>
          </div>

          {/* RIGHT – PARAGRAPH */}
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
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              onMouseEnter={() => gsap.to("#cursor", { scale: 1.5, duration: 0.3 })}
              onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              className={`px-4 py-2 rounded-full border transition-all duration-300
                ${selectedCategory === cat
                  ? "bg-[#3C01FF] text-white border-[#3C01FF]"
                  : "bg-white text-black border-gray-300 hover:bg-[#3C01FF] hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="rounded-3xl overflow-hidden bg-[#0f0f0f] shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer relative group"
            >
              {/* IMAGE */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:opacity-80"
              />

              {/* PROJECT TITLE & DESCRIPTION */}
              <div className="absolute bottom-4 left-4 text-white opacity-80">
                <div className="text-lg sm:text-xl md:text-2xl font-semibold">{p.title}</div>
                <div className="text-xs sm:text-sm md:text-base opacity-70 mt-1">{p.description}</div>
              </div>

              {/* ICON */}
              <div
                className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#3C01FF] backdrop-blur-md flex items-center justify-center"
                onMouseEnter={() => gsap.to("#cursor", { scale: 1.5, duration: 0.3 })}
                onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              >
                <span className="text-white text-lg sm:text-xl">↗</span>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
};

export default Project;
