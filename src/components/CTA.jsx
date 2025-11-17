import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full flex flex-col md:flex-row items-start md:items-stretch justify-between gap-12 p-6 sm:p-8 md:p-10">

      {/* LEFT SIDE — Heading */}
      <div className="flex-1 w-full flex justify-start md:justify-start">
        <h1
          onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          onClick={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })} // mobile tap support
          className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-[5vw] font-semibold leading-tight tracking-tight"
        >
          Let’s talk about a<br />
          a <span className="text-[#3C01FF] px-1">project, collaboration</span> or <br />
          an idea you may have.
        </h1>
      </div>

      {/* RIGHT — Button */}
      <div className="w-full md:w-auto flex justify-center md:justify-end items-end">
        <button
          onClick={() => navigate("/contact")} 
          onMouseEnter={() => gsap.to("#cursor", { scale: 1.5, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          onTouchStart={() => gsap.to("#cursor", { scale: 1.5, duration: 0.3 })} 
          className="bg-[#C3FE00] text-black font-semibold px-6 py-3 rounded-full 
                        transition text-base mt-4 md:mt-0 cursor-pointer"
        >
          Drop me a message
        </button>
      </div>

    </section>
  );
};

export default CTA;
