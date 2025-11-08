import React, { useRef, useEffect, useState } from "react";

const CustomScrollbar = ({ children }) => {
  const containerRef = useRef(null);
  const thumbRef = useRef(null);
  const [trackHeight, setTrackHeight] = useState(100);
  const thumbHeight = 30;

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;

      // Thumb position relative to track
      const thumbTop = (scrollTop / scrollHeight) * (trackHeight - thumbHeight);
      thumbRef.current.style.transform = `translateY(${thumbTop}px)`;
    };

    container.addEventListener("scroll", handleScroll);

    // Update thumb on resize
    const handleResize = () => {
      setTrackHeight(100);
      handleScroll();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [trackHeight]);

  return (
    <div className="relative w-full h-screen">
      {/* Scrollable content */}
      <div
        ref={containerRef}
        className="overflow-y-scroll h-full pr-6 scrollbar-hide"
      >
        {children}
      </div>

      {/* Short fixed scrollbar track */}
      <div
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1.5 bg-black rounded-full flex justify-center"
        style={{ height: `${trackHeight}px` }}
      >
        <div
          ref={thumbRef}
          className="w-full bg-[#C3FE00] rounded-full"
          style={{ height: `${thumbHeight}px`, transition: "transform 0.1s linear" }}
        />
      </div>
    </div>
  );
};

export default CustomScrollbar;
