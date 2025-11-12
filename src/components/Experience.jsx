import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ExperienceCard = ({ period, company, role, description }) => (
  <div className="p-6 sm:p-8 flex flex-col justify-between w-full border bg-[#e8ff8a] border-gray-200 rounded-xl">
    <h3 className="text-sm sm:text-base text-[#3C01FF] font-semibold mb-2">
      {period}
    </h3>
    <h4
      className="text-xl sm:text-2xl font-medium mb-1"
      onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
      onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
    >
      {company} — {role}
    </h4>
    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{description}</p>
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
        className="fixed top-0 left-0 w-[25px] h-[25px] rounded-full pointer-events-none z-50 bg-black mix-blend-difference"
      />

      <section className="w-full min-h-screen py-12 flex flex-col md:flex-row items-start gap-8 md:gap-12">
        
        {/* Left - Experience Cards */}
        <div className="flex flex-col gap-6 w-full md:w-[550px]">
          <ExperienceCard
            period="NOW"
            company="DevGriffins"
            role="Intern, Frontend Web & Development Team (Volunteer/Intern)"
            description="Currently contributing as a volunteer and intern developer, focusing on frontend web development and team collaboration on live projects."
          />
          <ExperienceCard
            period="2025 – PRESENT"
            company="HustleMind Co."
            role="Freelance Software Developer"
            description="Co-founded and operate a freelance team delivering custom web/mobile software for small businesses. Collaborate on full-stack projects using HTML, SQL, Java, and C#. Handle project roles, client communication, and source control."
          />
          <ExperienceCard
            period="DEC 2023 – FEB 2024"
            company="CosmicCommerce"
            role="Digital Marketing Assistant (Intern)"
            description="Managed product listings and catalog updates for eCommerce platforms. Ensured SEO standards, handled digital content, and maintained accurate databases."
          />
        </div>

        {/* Right - Big Text */}
        <div className="flex-1 flex justify-end items-start w-full">
          <h1
            onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            className="text-right text-[1.8rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4.5rem] font-semibold leading-snug md:leading-tight tracking-tight mt-0"
          >
            MY EXPERIENCE IN <span className="text-[#3C01FF]">SOFTWARE DEVELOPMENT</span> & DESIGN
          </h1>
        </div>
      </section>
    </>
  );
};

export default Experience;
