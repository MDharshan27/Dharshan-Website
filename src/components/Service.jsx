import React, { useEffect, useRef, useState } from "react";
import WebDevImg from "../assets/services/webdev.jpg";
import UIUXImg from "../assets/services/uiux.jpg";
import MobileImg from "../assets/services/mobile.jpg";
import BackendImg from "../assets/services/backend.jpg";
import DatabaseImg from "../assets/services/database.jpg";
import { gsap } from "gsap";

const ServiceCard = ({ title, description, image }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative group w-full h-64 rounded-xl overflow-hidden shadow-md cursor-pointer"
      onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
      onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
      onClick={() => setActive(!active)}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className={`w-full h-full object-cover transition-transform duration-500 ${
          active ? "opacity-30 scale-105" : "group-hover:opacity-30 group-hover:scale-105"
        }`}
      />

      {/* Text Overlay */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-black leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Service = () => {
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

  const services = [
    {
      title: "Web Development",
      description: "I create responsive and dynamic websites using modern technologies.",
      image: WebDevImg,
    },
    {
      title: "UI/UX Design",
      description: "Designing clean, user-friendly interfaces to enhance user experience.",
      image: UIUXImg,
    },
    {
      title: "Mobile Apps",
      description: "Building cross-platform mobile apps with seamless performance.",
      image: MobileImg,
    },
    {
      title: "Backend Development",
      description: "Creating scalable and secure backend systems using Java, C#, and MySQL for efficient data handling.",
      image: BackendImg,
    },
    {
      title: "Database Management",
      description: "Designing and managing relational databases with MySQL for reliable and fast data storage solutions.",
      image: DatabaseImg,
    },
  ];

  return (
    <>
      {/* Custom Cursor */}
      <div
        id="cursor"
        ref={cursorRef}
        className="fixed top-0 left-0 w-[25px] h-[25px] rounded-full pointer-events-none z-9999 bg-black mix-blend-difference"
      />

      {/* Main Layout */}
      <section className="w-full min-h-screen flex flex-col md:flex-row items-start justify-between gap-12 p-6 sm:p-8 md:p-10">
        {/* LEFT — Big Heading */}
        <div className="flex-1 w-full flex justify-start md:justify-start mb-8 md:mb-0">
          <h1
            onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[5vw] font-semibold leading-tight tracking-tight"
          >
            WHAT I DO AND CREATE <br />
            INNOVATIVE SOLUTIONS <span className="text-[#3C01FF]">IN MY WORK</span> <br />
            USING MODERN TECHNOLOGIES
          </h1>
        </div>

        {/* RIGHT — Service Cards */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Service;
