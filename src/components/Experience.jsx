import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ExperienceCard = ({ period, company, role, description }) => (
  <div className="p-6 sm:p-8 flex flex-col justify-between w-full border border-gray-200 rounded-xl bg-white shadow-sm">
    <h3 className="text-sm sm:text-base text-[#3C01FF] font-semibold mb-2">
      {period}
    </h3>
    <h4
      className="text-xl sm:text-2xl font-medium mb-2"
      onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
      onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
    >
      {company} — {role}
    </h4>
    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
      {description}
    </p>
  </div>
);

const Experience = () => {
  const cursorRef = useRef(null);

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
        className="fixed top-0 left-0 w-[25px] h-[25px] rounded-full pointer-events-none z-9999 bg-black mix-blend-difference"
      />

      {/* Main Layout */}
      <section className="w-full min-h-screen py-16 flex flex-col md:flex-row items-start justify-between gap-12 px-0 p-6 sm:p-8 md:p-10">
        {/* LEFT — Big Heading */}
        <div className="flex-1 w-full flex justify-start md:justify-start">
          <h1
            onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            className="text-[2rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.8rem] font-semibold leading-tight tracking-tight"
          >
            MY EXPERIENCE <br />
            IN <span className="text-[#3C01FF]" >SOFTWARE <br /> DEVELOPMENT</span> <br />
            & DESIGN
          </h1>
        </div>

        {/* RIGHT — Cards */}
        <div className="flex flex-col gap-6 w-full md:w-[520px] lg:w-[560px]">
          <ExperienceCard
            period="PRESENT"
            company="DevGriffins"
            role="Intern, Frontend Web & Development Team"
            description="Contributing as a volunteer and intern developer, focusing on frontend web development and team collaboration on live projects."
          />

          <ExperienceCard
            period="2025 – PRESENT"
            company="HustleMind Co."
            role="Freelance Software Developer"
            description="Co-founded a freelance team delivering custom web and mobile solutions for small businesses. Work includes full-stack projects, client communication, and source control."
          />

          <ExperienceCard
            period="DEC 2023 – FEB 2024"
            company="CosmicCommerce"
            role="Digital Marketing Assistant"
            description="Managed product listings, ensured SEO standards, updated catalog content, and maintained eCommerce databases."
          />
        </div>
      </section>
    </>
  );
};

export default Experience;
