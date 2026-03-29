import logo from "../assets/logo.png";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="Phil the Rhythm" className="h-10 w-10 object-contain" />
              <span className="font-display text-2xl text-ocean-300">Phil the Rhythm</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Bringing the beat to nurseries, schools, and celebrations across the area.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg text-ocean-300 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Phil" },
                { to: "/sessions", label: "Sessions" },
                { to: "/pricing", label: "Pricing" },
                { to: "/contact", label: "Book Now" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-white/60 hover:text-ocean-300 transition-colors text-sm"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials / contact */}
          <div>
            <h4 className="font-display text-lg text-ocean-300 mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <a href="mailto:phil@philtherhythm.co.uk" className="hover:text-ocean-300 transition-colors">
                📧 phil@philtherhythm.co.uk
              </a>
              <a href="tel:+447700000000" className="hover:text-ocean-300 transition-colors">
                📞 07700 000 000
              </a>
            </div>
            <div className="flex gap-3 mt-4">
              {["Instagram", "Facebook", "TikTok"].map((s) => (
                <a
                  key={s}
                  href="https://instagram.com" target="_blank" rel="noreferrer"
                  className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/60 hover:border-ocean-400 hover:text-ocean-300 transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Phil the Rhythm. All rights reserved.</span>
          <span>Made with 🥁 and lots of energy</span>
        </div>
      </div>
    </footer>
  );
}