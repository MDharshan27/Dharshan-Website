import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const EducationCard = ({ period, institution, qualification, description }) => (
  <div className="p-6 sm:p-8 border border-gray-200 rounded-2xl bg-black shadow-sm flex flex-col justify-start w-full">
    <h3 className="text-sm sm:text-base text-[#3C01FF] font-semibold mb-3">
      {period}
    </h3>
    <div className="mb-2">
      <h4
        className="text-xl sm:text-2xl font-semibold text-white"
        onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
        onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
      >
        {institution}
      </h4>
      <p className="text-sm sm:text-base text-[#C3FE00] mt-1">{qualification}</p>
    </div>
    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Education = () => {
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

      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-[#FDFDFD] p-6 sm:p-8 md:p-10">
        {/* Heading */}
        <h1
          onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[5vw] font-semibold text-center leading-tight tracking-tight mb-16"
        >
          MY EDUCATION <span className="text-[#3C01FF]">JOURNEY</span>
        </h1>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <EducationCard
            period="2023 - 2025"
            institution="Cardiff Metropolitan University"
            qualification="Higher National Diploma (HND) in Software Engineering"
            description="Focused on software engineering fundamentals, system analysis, programming, databases, and web development. Developed practical and academic understanding of core computing concepts."
          />
          <EducationCard
            period="2019 - 2021"
            institution="St. John Bosco’s College, Hatton"
            qualification="GCE A/L - Bio Science Stream"
            description="Completed A/Ls in the Bio Science stream, building a strong foundation in scientific principles, analytical thinking, and technical skills."
          />
          <EducationCard
            period="2018"
            institution="Norwood Tamil Maha Vidyalayam"
            qualification="GCE O/L"
            description="Completed General Certificate of Education (Ordinary Level) at a national school in Norwood, achieving strong results across core subjects."
          />
        </div>
      </section>
    </>
  );
};

export default Education;
