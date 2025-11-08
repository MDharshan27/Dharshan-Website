import React, { useRef, useEffect, useState } from "react";

const CustomScrollbar = ({ children }) => {
  const containerRef = useRef(null);
  const thumbRef = useRef(null);
  const [trackHeight, setTrackHeight] = useState(120);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const thumbHeight = 30;

  useEffect(() => {
    const container = containerRef.current;

    const handleResize = () => {
      setShowScrollbar(window.innerWidth >= 1024); 
      setTrackHeight(120);
      handleScroll();
    };

    const handleScroll = () => {
      if (!container || !thumbRef.current) return;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const thumbTop = (scrollTop / scrollHeight) * (trackHeight - thumbHeight);
      thumbRef.current.style.transform = `translateY(${thumbTop}px)`;
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial check

    if (container) container.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, [trackHeight]);

  return (
    <div className="relative w-full h-screen">
      {/* Scrollable content */}
      <div
        ref={containerRef}
        className={`overflow-y-scroll h-full ${
          showScrollbar ? "pr-6" : "pr-0"
        } scrollbar-hide`} 
      >
        {children}
      </div>

      {/* Only show scrollbar on large devices */}
      {showScrollbar && (
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
      )}
    </div>
  );
};

export default CustomScrollbar;
