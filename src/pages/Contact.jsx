import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const handleMouseMove = (event) => {
      gsap.to(cursor, {
        x: event.clientX - 12.5,
        y: event.clientY - 12.5,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendForm = (e) => {
    e.preventDefault();

    // SEND EMAIL USING EMAILJS
    emailjs.send(
      "service_ws5s2fe",
      "template_wce4i79",
      {
        name: form.name,
        email: form.email,
        service: form.service,
        message: form.message,
      },
      "uZH7pvp4JO3h20fCP"
    );

    // SEND WHATSAPP MESSAGE
    const whatsappText = `New Portfolio Contact Form:\n\nName: ${form.name}\nEmail: ${form.email}\nService Selected: ${form.service}\nMessage: ${form.message}`;

    window.open(
      `https://api.whatsapp.com/send?phone=94778597438&text=${encodeURIComponent(
        whatsappText
      )}`
    );

    alert("Your message has been sent successfully!");
  };

  return (
    <>
      {/* Custom Cursor */}
      <div
        id="cursor"
        className="fixed top-0 left-0 w-[25px] h-[25px] rounded-full pointer-events-none z-9999 bg-black mix-blend-difference"
      />

      {/* Main Layout */}
      <section className="w-full min-h-screen bg-white text-black flex flex-col md:flex-row items-start justify-between p-6 sm:p-8 md:p-10 gap-10">
       
        {/* LEFT — Heading & Info */}
        <div className="flex-1">
          <h1
            onMouseEnter={() => gsap.to("#cursor", { scale: 3, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            className="mt-6 sm:mt-10 md:mt-12 text-3xl sm:text-4xl md:text-5xl lg:text-[5vw] font-semibold leading-tight tracking-tight"
          >
            LET'S GET IN <br />
            <span className="text-[#3C01FF]">TOUCH <br /> WITH ME</span> <br />
            FOR YOUR PROJECTS
          </h1>

          <p className="text-gray-600 mt-6 leading-relaxed w-[90%]">
            Need a website, UI/UX design, mobile app, backend system or database setup?
            Send a message and I’ll get back to you.
          </p>

          {/* Email */}
          <div className="mt-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#3C01FF] text-white rounded-full flex items-center justify-center text-xl">
              <FiMail />
            </div>
            <span className="text-gray-800 text-lg">santhosmd69@gmail.com</span>
          </div>

          {/* Phone */}
          <div className="mt-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#3C01FF] text-white rounded-full flex items-center justify-center text-xl">
              <FiPhone />
            </div>
            <span className="text-gray-800 text-lg">+94 778 597 438</span>
          </div>
        </div>

        {/* RIGHT — Form */}
        <form
          onSubmit={sendForm}
          className="flex-1 rounded-3xl p-8 bg-gray-50 shadow-sm mt-6 sm:mt-10 md:mt-12 flex flex-col gap-4"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-xl mb-4"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full p-3 border border-gray-300 rounded-xl mb-4"
            required
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl mb-4"
            required
          >
            <option value="">Select Service…</option>
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>Mobile Apps</option>
            <option>Backend Development</option>
            <option>Database Management</option>
          </select>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Type your message..."
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-xl mb-6"
          />
          <button
            type="submit"
            onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            className="w-full bg-[#3C01FF] text-white p-3 rounded-xl flex items-center justify-center gap-2 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
