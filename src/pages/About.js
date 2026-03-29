import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import logo from "../assets/logo2.png";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Phil the Rhythm — Percussion Workshops Northern Ireland</title>
        <meta name="description" content="Over 14 years of experience in drumming and percussion. Phil the Rhythm delivers inclusive, high-energy workshops for all ages across Northern Ireland." />
        <meta property="og:title" content="About Phil the Rhythm" />
        <meta property="og:description" content="14 years of rhythm, percussion, and bringing people together across Northern Ireland." />
      </Helmet>

      <div className="overflow-x-hidden pt-20">
        <section className="relative bg-gradient-to-br from-rhythm-600 to-sky-500 py-24 px-4 text-center overflow-hidden">
          <div className="absolute top-6 left-6 text-6xl animate-wiggle opacity-30">🥁</div>
          <div className="absolute bottom-6 right-6 text-5xl animate-float opacity-30">🎵</div>
          <div className="absolute top-1/2 left-1/4 text-4xl opacity-20 animate-bounce2">🪘</div>
          <div className="relative z-10">
            <h1 className="font-display text-6xl md:text-7xl text-white mb-4 drop-shadow">Hey, I'm Phil 👋</h1>
            <p className="text-white/80 text-xl font-body max-w-xl mx-auto">
              14 years of rhythm, percussion, and bringing people together.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg">
              <path fill="#fdfbf7" d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
            </svg>
          </div>
        </section>

        <section className="py-20 px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative flex items-center justify-center">
              <div className="bg-gradient-to-br from-rhythm-100 to-sky-100 rounded-[3rem] p-8 shadow-xl">
                <img src={logo} alt="Phil the Rhythm" className="w-full max-w-sm animate-float drop-shadow-xl" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 blob animate-float opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-rhythm-300 blob2 animate-float opacity-80" style={{ animationDelay: "1s" }} />
            </div>

            <div>
              <h2 className="font-display text-4xl text-rhythm-700 mb-6">About us</h2>
              <div className="space-y-4 font-body text-ink/70 text-lg leading-relaxed">
                <p>At Phil The Rhythm, we bring over 14 years of experience in drumming and percussion. Our journey has included performing with a variety of bands, recording in professional studios, and working closely with charities and schools to help individuals and groups discover rhythm while enhancing their wellbeing and cognitive development.</p>
                <p>Starting a family and watching our own children develop a love for music highlighted just how vital rhythm and movement are for motor skills and overall development. Additionally, working with family members with disabilities further demonstrated the powerful impact music can have in strengthening the mind and improving wellbeing. These experiences deepened our understanding of the universal benefits of music, regardless of age or ability, and inspired us to create a service that brings these benefits to people from all walks of life in a fun, engaging, and accessible way.</p>
                <p>Through years of hands-on experience, we have seen first-hand how important music can be, even in short sessions. As little as 30 minutes of music-based activity can have a meaningful and lasting impact. It is incredibly rewarding to be able to share this with others and support so many individuals through rhythm and percussion.</p>
                <p>Every session we deliver - whether 30 minutes, one hour, or longer - is carefully tailored to suit the needs of each group. Our workshops are immersive, energetic, and designed to build confidence, encourage connection, and create lasting positive experiences. Participants are introduced to a variety of percussion instruments, along with their history and demonstration, before taking part in interactive, music-based activities that support brain development, teamwork, and self-expression.</p>
                <p>Each workshop concludes with an engaging drumming and percussion play along using instruments such as congas, bongos, and timbales, where participants play together to develop rhythm, coordination, and a shared sense of achievement.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-rhythm-50 py-20 px-4 relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-5xl text-rhythm-700 text-center mb-12">What makes sessions different?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { emoji: "🌍", title: "For everyone, no experience needed", desc: "Sessions are designed to be inclusive and accessible regardless of age, ability, or background. Everyone belongs." },
                { emoji: "🧠", title: "Supports brain health & development", desc: "Rhythm-based activity supports cognitive function, motor skills, and brain development - for kids and adults alike." },
                { emoji: "🤝", title: "Builds teamwork & connection", desc: "Playing together in a group builds confidence, encourages communication, and creates a real sense of shared achievement." },
                { emoji: "🛠️", title: "All instruments provided", desc: "Phil brings everything - congas, bongos, timbales, shakers, and more. You just open the door." },
                { emoji: "⏱️", title: "Tailored to your group", desc: "Every session - whether 30 minutes or a full hour - is carefully shaped to suit the needs and energy of your group." },
                { emoji: "🎓", title: "14 years of experience", desc: "Backed by over a decade of performing, recording, and working with schools and charities across the community." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <span className="text-4xl flex-shrink-0">{item.emoji}</span>
                  <div>
                    <h3 className="font-display text-xl text-ink mb-1">{item.title}</h3>
                    <p className="font-body text-ink/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 text-center">
          <h2 className="font-display text-4xl text-ink mb-6">Want to see Phil in action?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sessions" className="bg-rhythm-500 hover:bg-rhythm-600 text-white font-display text-xl px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-200">See the Sessions 🎵</Link>
            <Link to="/contact" className="border-2 border-rhythm-500 text-rhythm-600 hover:bg-rhythm-50 font-display text-xl px-8 py-4 rounded-full hover:scale-105 transition-all duration-200">Get in Touch 📩</Link>
          </div>
        </section>
      </div>
    </>
  );
}