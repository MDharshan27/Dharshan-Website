import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import arrowIcon from "../assets/arrow.png";
import certifications from "../data/certifications";
import Stack from "../components/stack";
import Service from "../components/Service";

const Skill = () => {
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

  const [activeCert, setActiveCert] = useState(null);

  const toggleCert = (id) => {
    setActiveCert(activeCert === id ? null : id);
  };

  return (
    <>
      {/* Spotlight Cursor */}
      <div
        id="cursor"
        className="fixed top-0 left-0 w-[25px] h-[25px] rounded-full pointer-events-none z-9999 bg-black mix-blend-difference"
      />

      {/* Main Layout */}
      <section className="w-full min-h-screen bg-white text-black flex flex-col md:flex-row items-start justify-between p-6 sm:p-8 md:p-10 gap-10">
        {/* LEFT — Big Heading */}
        <div className="flex-1">
          <h1
            onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            className="mt-6 sm:mt-10 md:mt-12 text-3xl sm:text-4xl md:text-5xl lg:text-[5vw] font-semibold leading-tight tracking-tight"
          >
            EXPERTISE & <br />
            <span className="text-[#3C01FF]">TECHNICAL SKILLS</span> <br />
            IN SOFTWARE & DESIGN
          </h1>
        </div>

        {/* RIGHT — Certifications Column */}
        <div className="mt-6 sm:mt-10 md:mt-12 flex-1 flex flex-col gap-6 md:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white"
            >
              {/* Certification Header */}
              <div
                className="flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition"
                onMouseEnter={() =>
                  gsap.to("#cursor", { scale: 2, duration: 0.3 })
                }
                onMouseLeave={() =>
                  gsap.to("#cursor", { scale: 1, duration: 0.3 })
                }
              >
                <span className="font-medium text-lg">{cert.name}</span>
                <img
                  src={arrowIcon}
                  alt="arrow"
                  onClick={() => toggleCert(cert.id)}
                  className={`w-6 h-6 transition-transform duration-300 cursor-pointer ${
                    activeCert === cert.id ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {/* Certification Details */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  activeCert === cert.id ? "max-h-[500px] p-4" : "max-h-0 p-0"
                }`}
              >
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-48 sm:h-40 md:h-32 md:w-42 object-cover rounded-lg shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-gray-700 mb-2">{cert.description}</p>
                    <p className="text-sm text-gray-500">
                      Certificate ID: {cert.id}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full bg-[#FDFDFD] p-0 m-0">
        <Stack />
        <Service/>
      </section>
    </>
  );
};

export default Skill;
