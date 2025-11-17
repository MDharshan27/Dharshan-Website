import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skill", label: "Work Skills" },
  { path: "/project", label: "Project" },
  { path: "/contact", label: "Contact" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef();

  const toggleMenu = () => {
    if (!isMenuOpen) {
      // Ensure overlay is visible before playing
      gsap.set(".menu-overlay", { display: "flex" });
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path) => {
    tl.current.reverse();
    setTimeout(() => {
      window.location.href = path;
    }, 1250);
  };

  useGSAP(
    () => {
      tl.current = gsap.timeline({ paused: true });

      tl.current
        .fromTo(
          ".menu-overlay",
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.25, ease: "power4.inOut" }
        )
        .fromTo(
          ".menu-link-item-holder",
          { y: 75 },
          { y: 0, duration: 1, stagger: 0.1, ease: "power4.inOut", delay: -0.75 }
        );

      tl.current.eventCallback("onReverseComplete", () => {
        // Hide overlay after reverse animation
        gsap.set(".menu-overlay", { display: "none" });
      });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) tl.current.play();
    else tl.current.reverse();
  }, [isMenuOpen]);

  // Spotlight cursor effect
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, {
        x: clientX - 12.5,
        y: clientY - 12.5,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={container} className="fixed top-0 left-0 w-full z-50">
      {/* Spotlight Cursor */}
      <div
        id="cursor"
        className="fixed top-0 left-0 h-[25px] w-[25px] pointer-events-none z-9999 rounded-full"
      />

      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-60">
        <div className={`font-semibold text-2xl cursor-pointer transition-colors duration-300 ${isMenuOpen ? "text-black" : "text-white"}`}>
          {/* Logo */}
        </div>

        <div
          onClick={toggleMenu}
          onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          className="uppercase cursor-pointer text-sm tracking-wide transition-colors duration-300 text-black"
        >
          {isMenuOpen ? "x Close" : "+ Menu"}
        </div>
      </div>

      {/* Overlay */}
      <div
        className="menu-overlay fixed top-0 left-0 w-screen h-screen bg-[#C3FE00] flex flex-col md:flex-row px-8 py-6 z-55 overflow-hidden"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", display: "none" }}
      >
        {/* Left X Icon */}
        <div className="hidden md:flex flex-1 items-end cursor-pointer select-none">
          <p className="text-[120px] font-bold text-black/10 leading-none" onClick={toggleMenu}>
            ×
          </p>
        </div>

        {/* Center Links + Info */}
        <div className="flex-3 flex flex-col justify-between md:pt-10 pt-24">
          <div className="space-y-3 overflow-hidden">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item overflow-hidden" key={index}>
                <div
                  className="menu-link-item-holder inline-block transform translate-y-[75px]"
                  onClick={() => handleLinkClick(link.path)}
                  onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })}
                  onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
                >
                  <span className="text-black text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-light tracking-tight leading-[85%] hover:text-gray-700 transition cursor-pointer">
                    {link.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Socials + Contact */}
          <div className="flex flex-col md:flex-row justify-between md:space-x-8 mt-10 md:mt-0">
            <div className="flex flex-col space-y-2">
              {[
                { label: "FaceBook ↗", url: "https://www.facebook.com/share/1D76ju9FaL/" },
                { label: "Instagram ↗", url: "https://www.instagram.com/s.k.m.dharshan?igsh=NnBma3QzdnEwdGoy" },
                { label: "LinkedIn ↗", url: "https://www.linkedin.com/in/mdharshan" },
                { label: "GitHub ↗", url: "https://github.com/MDharshan27" },
                { label: "WhatsApp ↗", url: "https://wa.me/94778597438" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-700 text-sm"
                  onMouseEnter={() => gsap.to("#cursor", { scale: 1.5, duration: 0.3 })}
                  onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
                >
                  {social.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col justify-end space-y-1 mt-6 md:mt-0">
              <a
                href="mailto:santhosmd69@gmail.com"
                className="text-black text-sm hover:text-gray-700"
                onMouseEnter={() => gsap.to("#cursor", { scale: 1.5, duration: 0.3 })}
                onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              >
                santhosmd69@gmail.com
              </a>
              <a
                href="tel:+94778597438"
                className="text-black text-sm hover:text-gray-700"
                onMouseEnter={() => gsap.to("#cursor", { scale: 1.5, duration: 0.3 })}
                onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
              >
                +94 77 8597 438
              </a>
            </div>
          </div>
        </div>

        {/* Right Preview */}
        <div className="flex-1 flex justify-end items-end">
          <a
            href="https://mdharshan27.github.io/Protfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-sm cursor-pointer hover:text-gray-700 mb-4 inline-block"
            onMouseEnter={() => gsap.to("#cursor", { scale: 1.5, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          >
            Check Out Old
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
