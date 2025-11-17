import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import HTML from "../assets/stacks/html.png";
import CSS from "../assets/stacks/css-3.png";
import JS from "../assets/stacks/js.png";
import ReactLogo from "../assets/stacks/reactjs.png";
import ReactNative from "../assets/stacks/react native.png";
import Node from "../assets/stacks/nodejs.png";
import Express from "../assets/stacks/expressjs.png";
import Mongo from "../assets/stacks/mongodb.png";
import NextJS from "../assets/stacks/nextjs.png";
import MySQL from "../assets/stacks/mysql.png";
import Python from "../assets/stacks/python.png";
import Java from "../assets/stacks/java.png";
import CPP from "../assets/stacks/c++.png";
import CSharp from "../assets/stacks/c-sharp.png";
import Kotlin from "../assets/stacks/kotlin.png";
import Git from "../assets/stacks/git.png";
import PHP from "../assets/stacks/php.png";
import Figma from "../assets/stacks/figma.png";

const techStacks = [
  HTML, CSS, JS, ReactLogo, ReactNative, Node,
  Express, Mongo, NextJS, MySQL, Python, Java,
  CPP, CSharp, Kotlin, Git, PHP, Figma
];

const Stack = () => {
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
          EXPLORE MY <span className="text-[#3C01FF]">TECH UNIVERSE</span>
        </h1>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-6 w-full max-w-6xl justify-center">
          {techStacks.map((tech, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 bg-white rounded-xl shadow hover:scale-105 transition-transform"
            >
              <img
                src={tech}
                alt={`tech-${index}`}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Stack;
