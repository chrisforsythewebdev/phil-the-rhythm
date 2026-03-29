import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const packages = [
  {
    id: "onetoone",
    name: "One-to-One",
    emoji: "🥁",
    price: "£50",
    per: "per hour",
    highlight: false,
    features: [
      "Personalised one-to-one session",
      "Fully tailored to the individual",
      "All percussion kit included",
      "Ideal for focused development",
    ],
    cta: "Book Now",
  },
  {
    id: "group",
    name: "Group Session",
    emoji: "🏫",
    price: "£100",
    per: "per hour",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Perfect for schools & nurseries",
      "Engaging group percussion workshop",
      "All percussion kit included",
      "Supports teamwork & development",
      "Flexible session lengths",
    ],
    cta: "Book Now",
  },
  {
    id: "largegroup",
    name: "Large Group",
    emoji: "🌟",
    price: "£170",
    per: "per hour",
    highlight: false,
    features: [
      "Ideal for large events & assemblies",
      "Corporate & community sessions",
      "All percussion kit included",
      "High-energy group experience",
      "Any age or ability",
    ],
    cta: "Book Now",
  },
];

const blockOptions = [
  { sessions: "4–6", label: "Short Block", saving: "Discounted", desc: "A short run of sessions to get started. Great for nurseries and clubs trying regular percussion for the first time." },
  { sessions: "8–12", label: "Term Block", saving: "Better rate", desc: "A full term of sessions. Perfect for schools and care settings building rhythm into their regular programme." },
  { sessions: "20+", label: "Long Term", saving: "Best rate", desc: "Ongoing sessions across multiple months. The best value option for organisations that want Phil as a regular fixture." },
];

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing | Phil the Rhythm — Percussion Workshops Northern Ireland</title>
        <meta name="description" content="Transparent pricing for one-to-one, group and large group percussion workshops. Block booking discounts available. Based in County Armagh, covering all of Northern Ireland." />
        <meta property="og:title" content="Phil the Rhythm Pricing" />
        <meta property="og:description" content="One-to-one from £50/hr, group sessions from £100/hr. Block booking discounts available across Northern Ireland." />
      </Helmet>

      <div className="overflow-x-hidden pt-20">
      {/* ── HEADER ── */}
      <section className="relative bg-gradient-to-br from-sky-500 to-rhythm-700 py-24 px-4 text-center overflow-hidden">
        <div className="absolute top-4 right-8 text-6xl opacity-20 animate-float">💰</div>
        <div className="absolute bottom-4 left-8 text-5xl opacity-20 animate-wiggle">🎵</div>
        <div className="relative z-10">
          <h1 className="font-display text-6xl md:text-7xl text-white mb-4">Pricing</h1>
          <p className="text-white/80 text-xl font-body max-w-xl mx-auto">
            Transparent, straightforward rates. No hidden extras.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fdfbf7" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="font-display text-5xl text-rhythm-700 text-center mb-12">Session Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                pkg.highlight
                  ? "bg-gradient-to-b from-sky-500 to-rhythm-700 text-white shadow-2xl scale-105 ring-4 ring-rhythm-300"
                  : "bg-white shadow-lg border border-rhythm-100 text-ink"
              }`}
            >
              {pkg.badge && (
                <div className="absolute top-0 left-0 right-0 bg-rhythm-500 text-white text-xs font-bold text-center py-1.5 tracking-widest uppercase">
                  {pkg.badge}
                </div>
              )}
              <div className={`p-8 ${pkg.badge ? "pt-12" : ""}`}>
                <span className="text-5xl block mb-4">{pkg.emoji}</span>
                <h3 className={`font-display text-2xl mb-1 ${pkg.highlight ? "text-white" : "text-ink"}`}>
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <span className={`font-display text-5xl ${pkg.highlight ? "text-white" : "text-rhythm-500"}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-sm ml-2 ${pkg.highlight ? "text-white/60" : "text-ink/50"}`}>
                    {pkg.per}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm font-body">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${pkg.highlight ? "bg-white/20 text-white" : "bg-rhythm-100 text-rhythm-600"}`}>
                        ✓
                      </span>
                      <span className={pkg.highlight ? "text-white/80" : "text-ink/70"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center font-display text-lg py-3 rounded-full transition-all hover:scale-105 ${
                    pkg.highlight
                      ? "bg-white text-rhythm-700 hover:bg-rhythm-50"
                      : "bg-rhythm-500 text-white hover:bg-rhythm-600"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-ink/50 font-body text-sm mt-8">
          * Travel outside County Armagh and surrounding areas may incur a small mileage supplement. Get in touch for an exact quote.
        </p>
      </section>

      {/* ── BLOCK BOOKINGS ── */}
      <section className="bg-rhythm-50 py-20 px-4 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-rhythm-100 blob opacity-60" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl text-rhythm-700 mb-4">Block Bookings</h2>
            <p className="font-body text-ink/60 max-w-xl mx-auto">
              We are pleased to offer discounted rates for block bookings over multiple weeks or months. Please get in touch to discuss your requirements and explore the most suitable package for your organisation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blockOptions.map((block) => (
              <div
                key={block.sessions}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border-2 border-transparent hover:border-rhythm-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-5xl text-rhythm-500">{block.sessions}</span>
                  <span className="bg-rhythm-100 text-rhythm-700 font-bold text-sm px-3 py-1 rounded-full">
                    {block.saving}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-ink mb-2">{block.label}</h3>
                <p className="font-body text-ink/60 text-sm leading-relaxed mb-6">{block.desc}</p>
                <Link
                  to="/contact"
                  className="block text-center border-2 border-rhythm-500 text-rhythm-600 hover:bg-rhythm-500 hover:text-white font-display text-lg py-2 rounded-full transition-all"
                >
                  Enquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="font-display text-4xl text-ink text-center mb-10">Quick questions</h2>
        <div className="space-y-4">
          {[
            { q: "Do I need to provide any equipment?", a: "Nope! Phil brings absolutely everything. All you need is a room and an excited group of participants." },
            { q: "How far do you travel?", a: "Phil is based in County Armagh and covers all of Northern Ireland. Get in touch to discuss travel for venues further afield." },
            { q: "Can I mix session types in a block booking?", a: "Absolutely. A block booking can include a mix of nursery, school, and club sessions." },
            { q: "Is there a deposit required?", a: "Yes — a 25% deposit is required to secure your booking, with the balance due before the session." },
          ].map((item, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl px-6 py-5 shadow-sm border border-rhythm-100 open:border-rhythm-300 transition-all"
            >
              <summary className="font-display text-lg text-ink cursor-pointer list-none flex items-center justify-between">
                {item.q}
                <span className="text-rhythm-500 group-open:rotate-45 transition-transform duration-200 font-bold text-2xl">+</span>
              </summary>
              <p className="font-body text-ink/60 text-sm mt-3 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-ink/50 mb-4">Still got questions?</p>
          <Link
            to="/contact"
            className="inline-block bg-rhythm-500 hover:bg-rhythm-600 text-white font-display text-xl px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            Get in Touch 📩
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}