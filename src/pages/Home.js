import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const floatingEmojis = ["🥁", "🎵", "🎶", "🪘", "✨", "🎉", "🎊", "🪗"];

function FloatingEmoji({ emoji, style }) {
  return (
    <span
      className="absolute text-4xl select-none pointer-events-none animate-float opacity-60"
      style={style}
    >
      {emoji}
    </span>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 via-rhythm-500 to-rhythm-700 overflow-hidden pt-20">
        {/* Background blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 blob animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 blob2 animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-sky-300/20 blob" style={{ animationDelay: "0.7s" }} />

        {/* Floating emojis */}
        {floatingEmojis.map((e, i) => (
          <FloatingEmoji
            key={i}
            emoji={e}
            style={{
              top: `${10 + (i * 11) % 80}%`,
              left: `${5 + (i * 13) % 90}%`,
              animationDelay: `${i * 0.4}s`,
              fontSize: `${1.5 + (i % 3) * 0.8}rem`,
            }}
          />
        ))}

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Logo */}
          <div className="flex-shrink-0 animate-float">
            <img
              src={logo}
              alt="Phil the Rhythm"
              className="w-64 md:w-80 lg:w-96 drop-shadow-2xl"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <div className="inline-block bg-white/20 backdrop-blur rounded-full px-5 py-2 text-white font-bold text-sm mb-6 animate-bounce2">
              🎵 Percussion workshops for all ages & abilities
            </div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-4 drop-shadow-lg">
              Phil the
              <span className="block text-yellow-300 animate-wiggle inline-block md:ml-0">
                Rhythm
              </span>
            </h1>

            <p className="text-white text-2xl md:text-3xl font-display mb-4 leading-snug">
              Bringing people together through rhythm & movement
            </p>
            <p className="text-white/80 text-base md:text-lg font-body mb-10 leading-relaxed max-w-lg">
              Discover the power of rhythm with engaging, inclusive percussion workshops designed for all age groups. Our personalised programmes support wellbeing, teamwork, self-expression, cognitive function and brain health — no experience needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="bg-yellow-400 hover:bg-yellow-300 text-ink font-display text-xl px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-200"
              >
                Book a Session 🥁
              </Link>
              <Link
                to="/sessions"
                className="bg-white/20 hover:bg-white/30 text-white font-display text-xl px-8 py-4 rounded-full backdrop-blur border border-white/30 hover:scale-105 transition-all duration-200"
              >
                See What's On
              </Link>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fdfbf7" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ── WHAT IS IT ── */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-5xl mb-4 block">🪘</span>
          <h2 className="font-display text-5xl text-rhythm-700 mb-4">What's Phil the Rhythm?</h2>
          <p className="text-ink/70 max-w-2xl mx-auto text-lg font-body">
            High-energy, hands-on percussion sessions designed for kids of all ages.
            Think banging drums, shaking maracas, and big smiles — all with a musical purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              emoji: "🎵",
              title: "Live, Interactive Fun",
              desc: "No backing tracks, no screens. Just Phil, some drums, and a room full of excited kids.",
              color: "from-sky-400 to-rhythm-500",
            },
            {
              emoji: "🧒",
              title: "Built for Little Ones",
              desc: "Sessions are tailored to age groups — from toddlers to primary school kids. Even the shy ones end up joining in.",
              color: "from-rhythm-500 to-rhythm-700",
            },
            {
              emoji: "🏫",
              title: "We Come to You",
              desc: "No need to travel anywhere. Phil brings everything needed and sets up in your space.",
              color: "from-sky-500 to-sky-400",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-3xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color}`} />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blob2" />
              <div className="relative z-10">
                <span className="text-5xl block mb-4">{card.emoji}</span>
                <h3 className="font-display text-2xl mb-2">{card.title}</h3>
                <p className="text-white/80 font-body text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="bg-rhythm-50 py-20 px-4 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-rhythm-100 blob opacity-50" />
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-sky-100 blob2 opacity-50" />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="font-display text-5xl text-rhythm-700 text-center mb-12">
            Perfect for...
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🧸", label: "Nurseries" },
              { icon: "🏫", label: "Schools" },
              { icon: "🎒", label: "Children's Clubs" },
              { icon: "🏥", label: "Care Facilities" },
              { icon: "💼", label: "Corporate" },
              { icon: "🎉", label: "Birthday Parties" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border-2 border-transparent hover:border-rhythm-200"
              >
                <span className="text-4xl block mb-2">{item.icon}</span>
                <span className="font-display text-xl text-ink">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-6xl block mb-6 animate-bounce2">🥁</span>
          <h2 className="font-display text-5xl text-ink mb-4">
            Ready to bring the{" "}
            <span className="text-rhythm-500 squiggle">beat?</span>
          </h2>
          <p className="text-ink/60 text-lg mb-8 font-body">
            Spaces fill up fast — especially around school term time and party season.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-rhythm-500 hover:bg-rhythm-600 text-white font-display text-2xl px-10 py-5 rounded-full shadow-xl hover:scale-105 transition-all duration-200"
          >
            Get in Touch 🎵
          </Link>
        </div>
      </section>
    </div>
  );
}