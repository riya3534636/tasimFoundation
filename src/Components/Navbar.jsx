import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // using react-icons
import logo from "../assets/logo1.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center pt-6">
      <nav className="w-[95%] bg-white rounded-full flex items-center justify-between shadow-sm border border-gray-100 px-6 py-3">
        {/* Logo */}
        <div className="flex flex-col ml-2 items-center justify-center bg-white rounded-full p-2">
          <img src={logo} alt="Logo" className="h-12 mb-1" />
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-[#BF4408] focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={24} />
        </button>

        {/* Center Menu (desktop) */}
        <ul className="hidden md:flex items-center gap-9 text-[15px] font-medium text-black">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/projects", label: "Our Projects" },
            { to: "/videos", label: "Event Videos" },
            { to: "/gallery", label: "Gallery" },
            { to: "/volunteer", label: "Volunteer" },
            { to: "/blogs", label: "Blogs" },
          ].map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#c85b18] relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[2px] after:bg-[#c85b18]"
                    : "hover:text-[#c85b18]"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contact Button (desktop) */}
        <div className="hidden md:block ml-6">
          <NavLink to="/contact">
            <button className="bg-[#a9440f] text-white h-[48px] px-8 rounded-full font-medium text-[15px] hover:bg-[#a9440f]">
              Contact
            </button>
          </NavLink>
        </div>
      </nav>

      {/* Mobile half-page overlay menu (left side) */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-1/2 h-full bg-white shadow-lg p-6 z-50 flex flex-col">
          {/* Close button inside panel */}
          <button
            className="self-end text-[#BF4408] mb-6"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={24} />
          </button>

          {/* Menu links */}
          <ul className="flex flex-col gap-6 text-[15px] font-medium text-black">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/projects", label: "Our Projects" },
              { to: "/videos", label: "Event Videos" },
              { to: "/gallery", label: "Gallery" },
              { to: "/volunteer", label: "Volunteer" },
              { to: "/blogs", label: "Blogs" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#c85b18] relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[#c85b18]"
                      : "hover:text-[#c85b18]"
                  }
                  onClick={() => setIsOpen(false)} // close menu after click
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
