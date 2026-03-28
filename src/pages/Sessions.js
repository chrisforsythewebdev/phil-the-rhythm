import React, { useState } from "react";
import { Link } from "react-router-dom";

const sessions = [
  {
    id: "nursery",
    emoji: "🧸",
    title: "Nurseries",
    age: "Ages 1–4",
    tagline: "Tiny hands, big beats",
    colour: "from-sky-400 to-rhythm-500",
    desc: "Gentle, sensory-led percussion sessions for the very littlest music lovers. Lots of call-and-response, shakers, and simple rhythms that build listening skills while being completely joyful.",
    highlights: ["20–30 min sessions", "Up to 20 children", "Sensory instruments included", "Carer participation encouraged"],
  },
  {
    id: "schools",
    emoji: "🏫",
    title: "Primary & Secondary Schools",
    age: "Ages 4–18",
    tagline: "The whole class, banging together",
    colour: "from-rhythm-600 to-sky-500",
    desc: "Tailored percussion workshops for primary and secondary school classes. Phil works with teachers to build on what students are already learning - or delivers a high-energy enrichment session.",
    highlights: ["Flexible session lengths", "Full class sizes", "Curriculum links available", "Assembly sessions too"],
  },
  {
    id: "clubs",
    emoji: "🎒",
    title: "Children's Clubs",
    age: "Ages 4–12",
    tagline: "End the day on a high",
    colour: "from-sky-500 to-rhythm-500",
    desc: "Perfect for after-school clubs, holiday clubs, and breakfast clubs. High-energy and structured to work even with mixed age groups - everyone finds their level.",
    highlights: ["Flexible timings", "Mixed age groups welcome", "Works in small or large spaces", "Regular slots available"],
  },
  {
    id: "care",
    emoji: "🏥",
    title: "Care Facilities & Charities",
    age: "All ages",
    tagline: "Rhythm for health & wellbeing",
    colour: "from-rhythm-500 to-sky-400",
    desc: "Specialist sessions for care facilities, disability support groups, and charities. Music-based activity supports cognitive function, brain health, and emotional wellbeing in a safe, inclusive environment.",
    highlights: ["Adapted for all abilities", "Supports brain health", "Disability groups welcome", "Charity partnerships available"],
  },
  {
    id: "corporate",
    emoji: "💼",
    title: "Corporate",
    age: "Adults",
    tagline: "Team building with a beat",
    colour: "from-sky-600 to-rhythm-600",
    desc: "Unique team-building workshops for corporate organisations. Drumming together builds communication, breaks down barriers, and leaves teams energised - an unforgettable alternative to the usual away-day activity.",
    highlights: ["Half & full day options", "Any group size", "No experience needed", "Memorable & energising"],
  },
  {
    id: "birthday",
    emoji: "🎂",
    title: "Birthday Parties",
    age: "Any age!",
    tagline: "The party they'll never forget",
    colour: "from-yellow-400 to-rhythm-500",
    desc: "Make it a birthday bash they'll still be talking about at their next one. Phil runs a full percussion party experience - games, group rhythms, and a proper finale moment.",
    highlights: ["1–1.5 hour sessions", "Up to 25 kids", "Party games built in", "Home or venue"],
  },
];

export default function Sessions() {
  const [active, setActive] = useState("nursery");
  const session = sessions.find((s) => s.id === active);

  return (
    <div className="overflow-x-hidden pt-20">
      {/* ── HEADER ── */}
      <section className="relative bg-gradient-to-br from-sky-500 to-rhythm-700 py-24 px-4 text-center overflow-hidden">
        <div className="absolute top-4 left-8 text-5xl opacity-20 animate-float">🪘</div>
        <div className="absolute top-8 right-12 text-6xl opacity-20 animate-bounce2">🎵</div>
        <div className="absolute bottom-8 left-1/3 text-4xl opacity-20 animate-wiggle">🎉</div>
        <div className="relative z-10">
          <h1 className="font-display text-6xl md:text-7xl text-white mb-4">Our Sessions</h1>
          <p className="text-white/80 text-xl font-body max-w-2xl mx-auto">
            Unique, tailored drumming and percussion workshops designed to engage participants of all ages and abilities.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fdfbf7" d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── INTRO COPY ── */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <div className="space-y-4 font-body text-ink/70 text-lg leading-relaxed">
          <p>
            At Phil The Rhythm, we deliver unique, tailored drumming and percussion workshops designed to engage participants of all ages and abilities. Our sessions are available to a wide range of settings, including nurseries, primary and secondary schools, children's clubs, care facilities, charities, disability support groups, and corporate organisations.
          </p>
          <p>
            We offer flexible booking options to suit your needs, from large group workshops to personalised one-to-one sessions. Each session is thoughtfully designed to support cognitive development, encourage self-expression, and foster teamwork and confidence. Our workshops also promote brain health and overall wellbeing, creating a positive and inclusive experience for every participant.
          </p>
        </div>
      </section>

      {/* ── SESSION PICKER ── */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        {/* Tab pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {sessions.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`font-display text-lg px-5 py-2 rounded-full transition-all duration-200 ${
                active === s.id
                  ? "bg-rhythm-500 text-white shadow-lg scale-105"
                  : "bg-white text-ink/60 border-2 border-rhythm-100 hover:border-rhythm-300"
              }`}
            >
              {s.emoji} {s.title}
            </button>
          ))}
        </div>

        {/* Active session detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div
            className={`rounded-[3rem] p-10 bg-gradient-to-br ${session.colour} text-white shadow-xl`}
          >
            <span className="text-7xl block mb-4">{session.emoji}</span>
            <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm font-bold mb-4">
              {session.age}
            </div>
            <h2 className="font-display text-4xl mb-2">{session.title}</h2>
            <p className="text-white/80 text-xl italic mb-6">{session.tagline}</p>
            <p className="font-body text-white/90 leading-relaxed">{session.desc}</p>
          </div>

          <div>
            <h3 className="font-display text-3xl text-ink mb-6">What's included:</h3>
            <div className="space-y-4">
              {session.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-sm border border-rhythm-100"
                >
                  <span className="w-8 h-8 bg-rhythm-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    ✓
                  </span>
                  <span className="font-body text-ink/80">{h}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-rhythm-50 rounded-3xl p-6 border-2 border-dashed border-rhythm-200">
              <p className="font-display text-rhythm-700 text-xl mb-2">Interested in this session?</p>
              <p className="font-body text-ink/60 text-sm mb-4">
                Get in touch and Phil will get back to you within 24 hours.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-rhythm-500 hover:bg-rhythm-600 text-white font-display text-lg px-6 py-3 rounded-full transition-all hover:scale-105"
              >
                Book {session.title} 🥁
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT A SESSION LOOKS LIKE ── */}
      <section className="bg-ink py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl text-white mb-4">
            What does a session look like?
          </h2>
          <p className="text-white/60 font-body mb-12">From arrival to finale - here's the shape of every Phil the Rhythm workshop.</p>

          <div className="flex flex-col gap-0">
            {[
              { step: "01", emoji: "🚐", title: "Arrival & Setup", desc: "Phil arrives early, sets up all the kit, and gets the space ready. No fuss, no stress for you." },
              { step: "02", emoji: "🪘", title: "Instrument Introduction", desc: "Participants are introduced to a variety of percussion instruments, along with their history and a live demonstration." },
              { step: "03", emoji: "🎵", title: "Interactive Activities", desc: "Immersive, music-based activities that support brain development, teamwork, and self-expression. Energetic, engaging, and inclusive." },
              { step: "04", emoji: "🥁", title: "The Play-Along Finale", desc: "Every workshop concludes with a group drumming and percussion play-along using congas, bongos, and timbales - participants play together to develop rhythm, coordination, and a shared sense of achievement." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-rhythm-500 rounded-full flex items-center justify-center text-white font-display text-lg flex-shrink-0 group-hover:bg-rhythm-400 transition-colors">
                    {item.step}
                  </div>
                  {i < 3 && <div className="w-0.5 h-12 bg-rhythm-700" />}
                </div>
                <div className="pb-8 text-left">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl">{item.emoji}</span>
                    <h3 className="font-display text-xl text-white">{item.title}</h3>
                  </div>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}