import React, { useState } from "react";

const sessionTypes = [
  "Nursery Session",
  "School Session",
  "Kids Club / After School",
  "Birthday Party",
  "Bar / Bat Mitzvah",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    sessionType: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // TODO: wire up to Formspree, EmailJS, or your own endpoint
    // e.g. await fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1200)); // simulate
    setSending(false);
    setSubmitted(true);
  };

  return (
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
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 shadow-lg border border-rhythm-100 space-y-6"
              >
                <h2 className="font-display text-3xl text-ink">Enquiry Form</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-sm text-ink/70 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border-2 border-rhythm-100 focus:border-rhythm-400 rounded-2xl px-4 py-3 font-body text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-sm text-ink/70 block mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full border-2 border-rhythm-100 focus:border-rhythm-400 rounded-2xl px-4 py-3 font-body text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-sm text-ink/70 block mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07700 000 000"
                      className="w-full border-2 border-rhythm-100 focus:border-rhythm-400 rounded-2xl px-4 py-3 font-body text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-sm text-ink/70 block mb-1">School / Organisation</label>
                    <input
                      type="text"
                      name="organisation"
                      value={form.organisation}
                      onChange={handleChange}
                      placeholder="Sunshine Nursery"
                      className="w-full border-2 border-rhythm-100 focus:border-rhythm-400 rounded-2xl px-4 py-3 font-body text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-sm text-ink/70 block mb-1">Session Type *</label>
                    <select
                      name="sessionType"
                      required
                      value={form.sessionType}
                      onChange={handleChange}
                      className="w-full border-2 border-rhythm-100 focus:border-rhythm-400 rounded-2xl px-4 py-3 font-body text-sm outline-none transition-colors bg-white"
                    >
                      <option value="">Select a session...</option>
                      {sessionTypes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-sm text-ink/70 block mb-1">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full border-2 border-rhythm-100 focus:border-rhythm-400 rounded-2xl px-4 py-3 font-body text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-sm text-ink/70 block mb-1">Tell Phil more...</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How many kids, any particular theme, anything else we should know..."
                    className="w-full border-2 border-rhythm-100 focus:border-rhythm-400 rounded-2xl px-4 py-3 font-body text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-rhythm-500 hover:bg-rhythm-600 text-white font-display text-xl py-4 rounded-full transition-all hover:scale-105 disabled:opacity-60 disabled:scale-100 shadow-lg"
                >
                  {sending ? "Sending... 🥁" : "Send Enquiry 🎵"}
                </button>
                <p className="text-center text-ink/40 text-xs font-body">
                  Phil aims to reply within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div className="space-y-6">
            {/* Direct contact */}
            <div className="bg-rhythm-50 rounded-3xl p-6 border-2 border-dashed border-rhythm-200">
              <h3 className="font-display text-2xl text-rhythm-700 mb-4">Or reach Phil directly</h3>
              <div className="space-y-3">
                <a
                  href="mailto:phil@philtherhythm.co.uk"
                  className="flex items-center gap-3 text-ink/70 hover:text-rhythm-600 transition-colors font-body text-sm"
                >
                  <span className="text-2xl">📧</span>
                  <span>phil@philtherhythm.co.uk</span>
                </a>
                <a
                  href="tel:+447700000000"
                  className="flex items-center gap-3 text-ink/70 hover:text-rhythm-600 transition-colors font-body text-sm"
                >
                  <span className="text-2xl">📞</span>
                  <span>07700 000 000</span>
                </a>
              </div>
            </div>

            {/* Area coverage */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-rhythm-100">
              <h3 className="font-display text-2xl text-ink mb-3">📍 Area Covered</h3>
              <p className="font-body text-ink/60 text-sm leading-relaxed">
                Phil is based in [Your Town] and covers [area / radius] — including [example areas].
                Travel beyond this may incur a small supplement.
              </p>
            </div>

            {/* Socials */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-rhythm-100">
              <h3 className="font-display text-2xl text-ink mb-4">Follow the Rhythm</h3>
              <div className="space-y-3">
                {[
                  { platform: "Instagram", handle: "@philtherhythm", emoji: "📸", href: "#" },
                  { platform: "Facebook", handle: "Phil the Rhythm", emoji: "👍", href: "#" },
                  { platform: "TikTok", handle: "@philtherhythm", emoji: "🎵", href: "#" },
                ].map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    className="flex items-center gap-3 hover:bg-rhythm-50 rounded-xl p-2 -mx-2 transition-colors group"
                  >
                    <span className="text-2xl">{s.emoji}</span>
                    <div>
                      <div className="font-bold text-sm text-ink group-hover:text-rhythm-600 transition-colors">
                        {s.platform}
                      </div>
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
  );
}