import React, { useEffect, useRef } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { gsap } from "gsap";

const footerLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skill", label: "Work Skills" },
  { path: "/project", label: "Project" },
  { path: "/contact", label: "Contact" },
];

export default function Footer() {
  const cursorRef = useRef(null);

  // GSAP cursor movement
  useEffect(() => {
    const cursor = cursorRef.current;
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 12.5,
        y: e.clientY - 12.5,
        duration: 0.6,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const handleCursorEnter = (scale = 2) => {
    if (cursorRef.current) gsap.to(cursorRef.current, { scale, duration: 0.3 });
  };
  const handleCursorLeave = () => {
    if (cursorRef.current) gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
  };

  const handleLinkClick = (path) => {
    window.location.href = path;
  };

  return (
    <>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[25px] h-[25px] rounded-full pointer-events-none z-9999 bg-black mix-blend-difference"
      />

      <footer className="bg-black text-gray-300 px-6 lg:px-20 py-12 rounded-t-2xl mx-5 relative z-10">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 border-b border-gray-700 pb-8">
          
          {/* About Me */}
          <div>
            <h3
            className="text-white font-semibold mb-2 text-base md:text-lg sm:text-xl"
            onMouseEnter={() => handleCursorEnter(1.5)}
            onMouseLeave={handleCursorLeave}
            >
            About Me
            </h3>
            <p
              className="text-sm md:text-xs text-gray-300 leading-relaxed"
              onMouseEnter={() => handleCursorEnter(1.5)}
              onMouseLeave={handleCursorLeave}
            >
              I am a passionate <span className="text-[#C3FE00] font-semibold">Full-Stack Developer</span> specializing in web and mobile applications. Continuously learning and building innovative solutions.
            </p>
          </div>

          {/* Projects */}
          <div>
            <h3
              className="text-white font-semibold mb-2 text-base md:text-lg sm:text-xl"
              onMouseEnter={() => handleCursorEnter(1.5)}
              onMouseLeave={handleCursorLeave}
            >
              Projects
            </h3>
            <ul className="space-y-2 text-sm md:text-xs">
              {["Web Development", "App Development", "Desktop App Development", "Mini Projects"].map(
                (item, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer hover:text-white"
                    onMouseEnter={() => handleCursorEnter()}
                    onMouseLeave={handleCursorLeave}
                    onClick={() => handleLinkClick("/project")}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3
              className="text-white font-semibold mb-2 text-base md:text-lg sm:text-xl"
              onMouseEnter={() => handleCursorEnter(1.5)}
              onMouseLeave={handleCursorLeave}
            >
              Explore
            </h3>
            <ul className="space-y-2 text-sm md:text-xs">
              {footerLinks.map((link, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer hover:text-white"
                  onMouseEnter={() => handleCursorEnter()}
                  onMouseLeave={handleCursorLeave}
                  onClick={() => handleLinkClick(link.path)}
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-white font-semibold mb-2 text-base md:text-lg sm:text-xl"
              onMouseEnter={() => handleCursorEnter(1.5)}
              onMouseLeave={handleCursorLeave}
            >
              Contact
            </h3>
            {[
              { text: "Email: santhosmd69@gmail.com", href: "mailto:santhosmd69@gmail.com" },
              { text: "Phone: +94 77 8597 438", href: "tel:+94778597438" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm md:text-xs cursor-pointer hover:text-white"
                onMouseEnter={() => handleCursorEnter()}
                onMouseLeave={handleCursorLeave}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto mt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 space-y-4 sm:space-y-0">
          <p>© 2025 Mohana Dharshan</p>

          <div className="flex space-x-4 text-[#C3FE00] text-base">
            {[
              { icon: <FaWhatsapp />, href: "https://wa.me/94778597438" },
              { icon: <FaGithub />, href: "https://github.com/MDharshan27" },
              { icon: <FaInstagram />, href: "https://instagram.com/s.k.m.dharshan" },
              { icon: <FaLinkedin />, href: "https://linkedin.com/in/mdharshan" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white cursor-pointer"
                onMouseEnter={() => handleCursorEnter(2)}
                onMouseLeave={handleCursorLeave}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
