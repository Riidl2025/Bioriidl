{/*import { NavLink } from "react-router-dom";
import { useState } from "react";

const MENU = {
  About: "/about",
  Programs: "/programs",
  Events: "/about", // /events
  Startups: "/startups",
  "DIY Biolab": "/diy-biolab",
  IBSC: "/ibsc",
  Riidl: "https://riidl.org/",
  "Contact us": "/contact",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200 w-full">
      <nav className="w-full px-6">
        <div className="flex items-center justify-between h-16">
          <NavLink
            to="/"
            className="text-2xl font-bold text-slate-900 hover:text-emerald-700 transition-colors"
          >
            Bioriidl
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            {Object.entries(MENU).map(([label, path]) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  [
                    "nav-link text-sm font-medium tracking-wide transition-colors",
                    isActive
                      ? "text-emerald-700"
                      : "text-slate-600 hover:text-slate-900",
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-[5px]">
              <span className="block h-0.5 w-5 bg-slate-800 rounded" />
              <span className="block h-0.5 w-5 bg-slate-800 rounded" />
              <span className="block h-0.5 w-5 bg-slate-800 rounded" />
            </div>
          </button>
        </div>

        {open && (
          <div className="md:hidden flex flex-col gap-3 pb-4">
            {Object.entries(MENU).map(([label, path]) => (
              <NavLink
                key={label}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "nav-link text-sm font-medium px-2 transition-colors",
                    isActive
                      ? "text-emerald-700"
                      : "text-slate-600 hover:text-slate-900",
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;*/}


import { NavLink } from "react-router-dom";
import { useState } from "react";

const MENU = {
  About: "/about",
  Research:"/research",
  Programs: "/programs",
  // Events: "/about",
  Startups: "/startups",
  "DIY Biolab": "/diy-biolab",
  IBSC: "/ibsc",
  riidl: "https://riidl.org/",
  "Contact us": "/contact",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClasses = (isActive) =>
    [
      "relative text-sm font-medium tracking-wide transition-all duration-300",
      "after:absolute after:left-0 after:-bottom-2",
      "after:h-[3px] after:w-0",
      "after:bg-[#A20202]",
      "after:transition-all after:duration-300",
      "hover:after:w-full",
      isActive
        ? "text-[#A20202] after:w-full"
        : "text-slate-600 hover:text-[#A20202]",
    ].join(" ");

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-200 w-full">
      <nav className="w-full px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            Bior
            <span className="text-[#A20202]">ii</span>
            dl
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {Object.entries(MENU).map(([label, path]) =>
              path.startsWith("http") ? (
                <a
                  key={label}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses(false)}
                >
                  {label}
                </a>
              ) : (
                <NavLink
                  key={label}
                  to={path}
                  className={({ isActive }) => linkClasses(isActive)}
                >
                  {label}
                </NavLink>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-[#A20202]/10 transition-colors"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-[5px]">
              <span className="block h-0.5 w-6 bg-slate-800 rounded" />
              <span className="block h-0.5 w-6 bg-slate-800 rounded" />
              <span className="block h-0.5 w-6 bg-slate-800 rounded" />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col gap-5 py-5 border-t border-gray-200">
            {Object.entries(MENU).map(([label, path]) =>
              path.startsWith("http") ? (
                <a
                  key={label}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={linkClasses(false)}
                >
                  {label}
                </a>
              ) : (
                <NavLink
                  key={label}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => linkClasses(isActive)}
                >
                  {label}
                </NavLink>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;