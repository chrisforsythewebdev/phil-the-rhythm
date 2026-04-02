import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const sessionTypes = [
  "Nursery Session",
  "School Session",
  "Children's Club / After School",
  "Care Facility",
  "Disability Support Group",
  "Corporate",
  "Birthday Party",
  "Other",
];

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", organisation: "", sessionType: "", date: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/mkopjkew", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try emailing Phil directly at philtherhythmdrums@outlook.com");
      }
    } catch {
      alert("Something went wrong. Please try emailing Phil directly at philtherhythmdrums@outlook.com");
    }
    setSending(false);
  };

  const socials = [
    {
      platform: "Instagram",
      handle: "@phil.the.rhythm",
      href: "https://www.instagram.com/phil.the.rhythm?igsh=MTdseHJuajZkczlwMw==",
      icon: <InstagramIcon />,
      colour: "text-pink-500",
      bg: "bg-pink-50 hover:bg-pink-100",
    },
    {
      platform: "Facebook",
      handle: "Phil the Rhythm",
      href: "https://www.facebook.com/share/14fwgeGEmFw",
      icon: <FacebookIcon />,
      colour: "text-blue-600",
      bg: "bg-blue-50 hover:bg-blue-100",
    },
    {
      platform: "TikTok",
      handle: "@philtherhythm",
      href: "#",
      icon: <TikTokIcon />,
      colour: "text-ink",
      bg: "bg-gray-50 hover:bg-gray-100",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Book a Session | Phil the Rhythm — Northern Ireland</title>
        <meta name="description" content="Get in touch to book a drumming or percussion workshop with Phil the Rhythm. Based in County Armagh, covering all of Northern Ireland. Quick response guaranteed." />
        <meta property="og:title" content="Book Phil the Rhythm" />
        <meta property="og:description" content="Book a percussion workshop for your school, nursery, care facility or event. Based in County Armagh, covering all of Northern Ireland." />
      </Helmet>

      <div className="overflow-x-hidden pt-20">
      {/* ── HEADER ── */}
      <section className="relative bg-gradient-to-br from-sky-400 to-rhythm-600 py-24 px-4 text-center overflow-hidden">
        <div className="absolute top-4 left-8 text-5xl opacity-20 animate-float">📩</div>
        <div className="absolute bottom-4 right-8 text-6xl opacity-20 animate-bounce2">🥁</div>
        <div className="relative z-10">
          <h1 className="font-display text-6xl md:text-7xl text-white mb-4">Let's Talk!</h1>
          <p className="text-white/80 text-xl font-body max-w-xl mx-auto">
            Fill in the form below and Phil will get back to you within 24 hours.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fdfbf7" d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ── FORM ── */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-3xl p-12 shadow-lg text-center border-2 border-rhythm-200">
                <span className="text-8xl block mb-6 animate-bounce2">🥁</span>
                <h2 className="font-display text-4xl text-rhythm-700 mb-4">Boom! Message sent.</h2>
                <p className="font-body text-ink/60 text-lg">
                  Phil will be in touch within 24 hours. Get ready to make some noise!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg border border-rhythm-100 space-y-6">
                <h2 className="font-display text-3xl text-ink">Enquiry Form</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-sm text-ink/70 block mb-1">Your Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith"
                      className="w-full border-2 border-rhythm-100 focus:border-rhythm-400 rounded-2xl px-4 py-3 font-body text-sm outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="font-bold text-sm text-ink/70 block mb-1">Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@example.com"
                      className="w-full border-2 border-rhythm-100 focus:border-rhythm-400 rounded-2xl px-4 py-3 font-body text-sm outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-sm text-ink/70 block mb-1">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="07834 767124"
                      className="w-full border-2 border-rhythm-100 focus:border-rhythm-400 rounded-2xl px-4 py-3 font-body text-sm outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="font-bold text-sm text-ink/70 block mb-1">School / Organisation</label>
                    <input type="text" name="organisation" value={form.organisation} onChange={handleChange} placeholder="Sunshine Nursery"
                      className="w-full border-2 border-rhythm-100 focus:border-rhythm-400 rounded-2xl px-4 py-3 font-body text-sm outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-sm text-ink/70 block mb-1">Session Type *</label>
                    <select name="sessionType" required value={form.sessionType} onChange={handleChange}
                      className="w-full border-2 border-rhythm-100 focus:border-rhythm-400 rounded-2xl px-4 py-3 font-body text-sm outline-none transition-colors bg-white">
                      <option value="">Select a session...</option>
                      {sessionTypes.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-sm text-ink/70 block mb-1">Preferred Date</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange}
                      className="w-full border-2 border-rhythm-100 focus:border-rhythm-400 rounded-2xl px-4 py-3 font-body text-sm outline-none transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-sm text-ink/70 block mb-1">Tell Phil more...</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                    placeholder="How many participants, any particular requirements, anything else we should know..."
                    className="w-full border-2 border-rhythm-100 focus:border-rhythm-400 rounded-2xl px-4 py-3 font-body text-sm outline-none transition-colors resize-none" />
                </div>

                <button type="submit" disabled={sending}
                  className="w-full bg-rhythm-500 hover:bg-rhythm-600 text-white font-display text-xl py-4 rounded-full transition-all hover:scale-105 disabled:opacity-60 disabled:scale-100 shadow-lg">
                  {sending ? "Sending... 🥁" : "Send Enquiry 🎵"}
                </button>
                <p className="text-center text-ink/40 text-xs font-body">Phil aims to reply within 24 hours. No spam, ever.</p>
              </form>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div className="space-y-6">
            <div className="bg-rhythm-50 rounded-3xl p-6 border-2 border-dashed border-rhythm-200">
              <h3 className="font-display text-2xl text-rhythm-700 mb-4">Or reach Phil directly</h3>
              <div className="space-y-3">
                <a href="mailto:philtherhythm@outlook.com" className="flex items-center gap-3 text-ink/70 hover:text-rhythm-600 transition-colors font-body text-sm">
                  <span className="text-2xl">📧</span><span>philtherhythm@outlook.com</span>
                </a>
                <a href="tel:+447834767124" className="flex items-center gap-3 text-ink/70 hover:text-rhythm-600 transition-colors font-body text-sm">
                  <span className="text-2xl">📞</span><span>07834 767124</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-rhythm-100">
              <h3 className="font-display text-2xl text-ink mb-3">📍 Area Covered</h3>
              <p className="font-body text-ink/60 text-sm leading-relaxed">
                Phil is based in County Armagh and covers all of Northern Ireland. Travel beyond this may incur a small supplement.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-rhythm-100">
              <h3 className="font-display text-2xl text-ink mb-4">Follow the Rhythm</h3>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors ${s.bg}`}
                  >
                    <span className={s.colour}>{s.icon}</span>
                    <div>
                      <div className="font-bold text-sm text-ink">{s.platform}</div>
                      <div className="text-xs text-ink/40">{s.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}