import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo3.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/sessions", label: "Sessions" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Book Now 🥁" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Phil the Rhythm" className="h-12 w-12 object-contain animate-float" />
          <span className="font-display text-2xl text-rhythm-700 group-hover:text-rhythm-500 transition-colors">
            Phil the Rhythm
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            const isBook = link.label.includes("Book");
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-full font-body font-700 text-sm transition-all duration-200 ${
                  isBook
                    ? "bg-rhythm-500 text-white hover:bg-rhythm-600 font-bold ml-2 shadow-md hover:scale-105"
                    : isActive
                    ? "bg-rhythm-100 text-rhythm-700 font-bold"
                    : "text-ink hover:bg-rhythm-50 hover:text-rhythm-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl text-rhythm-700 hover:bg-rhythm-100 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur border-t border-rhythm-100 px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            const isBook = link.label.includes("Book");
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-2xl font-bold text-center transition-all ${
                  isBook
                    ? "bg-rhythm-500 text-white"
                    : isActive
                    ? "bg-rhythm-100 text-rhythm-700"
                    : "text-ink hover:bg-rhythm-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}