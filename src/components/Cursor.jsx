import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      gsap.to("#cursor", {
        x: clientX - 12.5,
        y: clientY - 12.5,
        duration: 1,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        id="cursor"
        className="fixed top-0 left-0 h-[25px] w-[25px] bg-white rounded-full z-50 pointer-events-none mix-blend-difference"
      />
    </>
  );
};

export default Cursor;
