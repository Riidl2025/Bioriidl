import { Link } from "react-router-dom";
import bioriidlLogo from "../assets/images/bioriidlLogo.png";

export const Footer = () => {
  const goHome = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#7a0000] text-white w-full overflow-x-hidden">
      
      {/* Main Footer */}
      <div className="w-full px-6 md:px-16 py-14 flex flex-col md:flex-row justify-between gap-14">

        {/* Logo */}
      <div className="flex items-center justify-center md:justify-start min-w-[180px]">
        
        <Link
          to="/"
          onClick={goHome}
          className="flex items-center justify-center cursor-pointer"
          aria-label="Go to home"
        >
          <img
            src={bioriidlLogo}
            alt="Bioriidl Logo"
            draggable={false}
            className="w-[150px] h-auto pointer-events-none"
          />
        </Link>

      </div>

        {/* riidl */}
        <div className="flex flex-col gap-5">
          <h2 className="text-[18px] font-light text-[#d8a8a8]">
            Bioriidl
          </h2>

          <a href="/about">About</a>
          <a href="/programs">Programs</a>
          <a href="/events">Events</a>
          <a href="/startups">Startups</a>
          <a href="/diy-biolab">DIY Biolab</a>
          <a href="/ibsc">IBSC</a>
          <a href="https://riidl.org/">Riidl</a>
          <a href="/contact">Contact Us</a>
        
        </div>

        {/* Staff */}
        <div className="flex flex-col gap-5">
          <h2 className="text-[18px] font-light text-[#d8a8a8]">
            Staff
          </h2>

          <a href="https://ess.somaiya.edu/">ESS Login</a>
        </div>

        {/* Startups */}
        <div className="flex flex-col gap-5">
          <h2 className="text-[18px] font-light text-[#d8a8a8]">
            Startups
          </h2>

          <a href="https://riidl.org/contact">Enquiry/Permission Mail</a>
        </div>

        {/* Campus */}
        <div className="flex flex-col gap-5">
          <h2 className="text-[18px] font-light text-[#d8a8a8]">
            Somaiya Vidyavihar Campus
          </h2>

          <a href="https://riidl.org/">riidl Offices</a>
          <a href="https://www.somaiya.edu/en/">Somaiya Vidyavihar University</a>
          <a href="https://sportsacademy.somaiya.edu/en">Somaiya Sports Academy</a>
          <a href="https://alumni.somaiya.edu/">Alumni Portal</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black w-full py-4 px-6 text-sm">
        Copyright 2017 Bioriidl. All rights reserved
      </div>

    </footer>
  );
};