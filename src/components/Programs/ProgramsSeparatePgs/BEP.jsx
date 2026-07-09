import { Link } from "react-router-dom";

const RED = "#A20202";
const RED_DEEP = "#6E0000";
const RED_BRIGHT = "#D81111";

const WEEK_THEMES = [
  { bg: "#E8F0FB", dot: "#3A6EA5" },
  { bg: "#E8F0FB", dot: "#3A6EA5" },
  { bg: "#E8F0FB", dot: "#3A6EA5" },
  { bg: "#E8F0FB", dot: "#3A6EA5" },
  { bg: "#E8F0FB", dot: "#3A6EA5" },
  { bg: "#E8F0FB", dot: "#3A6EA5" },
];
const WEEK_ROTATIONS = [
  "lg:rotate-[-2.5deg]",
  "lg:rotate-[2deg]",
  "lg:rotate-[-2deg]",
  "lg:rotate-[2.5deg]",
  "lg:rotate-[-2deg]",
  "lg:rotate-[2deg]",
];

export default function BEP() {
  return (
    <div className="w-full bg-[#FBF9F8]">
      {/* HERO */}
      <section
        className="relative w-full px-6 pt-14 pb-28 overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 18% 10%, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0) 40%),
            radial-gradient(circle at 88% 95%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 55%),
            linear-gradient(135deg, ${RED_DEEP} 0%, ${RED} 40%, ${RED_BRIGHT} 65%, ${RED_DEEP} 100%)
          `,
          boxShadow:
            "inset 0 70px 140px -60px rgba(255,255,255,0.28), inset 0 -90px 160px -50px rgba(0,0,0,0.55)",
        }}
      >
        <div className="pointer-events-none absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-6rem] left-[-4rem] w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -top-10 left-[-10%] w-[140%] h-32 rotate-[-6deg] bg-gradient-to-r from-white/0 via-white/20 to-white/0 blur-2xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <div className="relative max-w-5xl mx-auto animate-fade-slide-up">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/75 hover:text-white mb-10 transition-colors duration-200"
          >
            ← Back to Programs
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-12 bg-white/40" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/70 font-semibold">
              Bioriidl &middot; 7th Edition
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
            Bio Entrepreneurship Program
          </h1>

          <p className="mt-6 text-white/90 text-xl max-w-xl leading-relaxed">
            A journey from ideation to entrepreneurship.
          </p>
          <p className="mt-2 text-sm tracking-wide text-white/65 uppercase">
            September – November 2023
          </p>

          <a
            href="https://airtable.com/appmMdy8jDFih6Bl8/shr79oBkLwe5UzmYu"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 mt-10 rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ backgroundColor: "white", color: RED }}
          >
            Register Now
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>

      {/* PROGRAM DESCRIPTION */}
      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto animate-fade-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="h-1.5 w-10 rounded-full"
              style={{ backgroundColor: RED }}
            />
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Program Description
            </h2>
          </div>

          {/* Layout changed only for positioning */}
          <div className="max-w-4xl ml-0">
            <div className="space-y-7">
              <p className="text-slate-600 text-lg leading-relaxed max-w-4xl">
                Bioriidl, India's first DIY Biolab, is organizing the 7th
                edition of the Bio-Entrepreneurship Program (BEP), a nine-week
                program focused on product development and go-to-market
                strategies.
              </p>

              <p className="text-slate-600 text-lg leading-relaxed max-w-4xl">
                The program runs from the beginning of September to November
                2023 and exposes teams to mentors from technology, business, and
                design domains. Participants learn market research and business
                plan development.
              </p>

              <p className="text-slate-600 text-lg leading-relaxed max-w-4xl">
                Teams work on their ideas from ideation to prototype development
                and market research. The program concludes with a pitching
                session where teams present their prototypes to investors. The
                winners will be selected based on their performance and the
                milestones they have achieved.
              </p>

              <p className="text-slate-600 text-lg leading-relaxed max-w-4xl">
                Participants gain access to state-of-the-art infrastructure
                including molecular biology, cell culture, fermentation,
                analytical, and common instrument laboratories. Teams also
                benefit from access to Somaiya Vidyavihar and Somaiya
                Ayurvihar's medical hospital, physiotherapy college, ayurvedic
                institute, agriculture institute, and other departments. This
                access may be beneficial to teams working on global health,
                agritech, or biotechnology-related issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="w-full px-6 py-12 relative overflow-hidden bg-[#FBF9F8]">
        <div className="pointer-events-none absolute top-10 left-1/4 w-72 h-72 rounded-full opacity-20 blur-3xl bg-slate-200" />
        <div className="relative max-w-5xl mx-auto grid gap-6 md:grid-cols-3 animate-fade-slide-up">
          {[
            {
              title: "Eligibility Criteria",
              text: "Ideation / Early-stage startups",
              icon: "🎯",
            },
            {
              title: "Duration",
              text: "9 weeks (September last week – November last week)",
              icon: "⏱️",
            },
            {
              title: "Registration Fees",
              text: "INR 1500 per team (Maximum 4 members)",
              icon: "💰",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl p-7 backdrop-blur-xl bg-white/70 border border-white shadow-[0_8px_30px_-12px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = RED_BRIGHT;
                e.currentTarget.style.boxShadow = `0 24px 45px -18px ${RED}66`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "white";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px -12px rgba(15,23,42,0.10)";
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 text-3xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${RED}1a, ${RED_BRIGHT}26)`,
                }}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2 animate-fade-slide-up">
            <span
              className="h-1.5 w-10 rounded-full"
              style={{ backgroundColor: RED }}
            />
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Detailed Structure of the Program
            </h2>
          </div>
          <p className="text-slate-500 mb-12 ml-[3.25rem]">
            Nine weeks, six milestones.
          </p>

          <div className="max-w-4xl mx-auto grid gap-x-10 gap-y-14 lg:grid-cols-2 px-2 py-4">
            {[
              {
                n: "01",
                week: "Week 1",
                title: "Discover and Define",
                desc: "First selection based on idea clarity, design approach, and technical feasibility. Results announced on Saturday.",
                icon: "🔍",
              },
              {
                n: "02",
                week: "Week 2",
                title: "Prototype Initiation",
                desc: "Selected teams are paired with mentors and define their Unique Value Proposition (UVP).",
                icon: "🏗️",
              },
              {
                n: "03",
                week: "Weeks 3–6",
                title: "Product & Prototype Development",
                desc: "Prototype development, industry feedback, product refinement, business workshops, and validation.",
                icon: "⚙️",
              },
              {
                n: "04",
                week: "Week 7",
                title: "Testing & Modification",
                desc: "Prototype and product testing with modifications and customer-based partnerships.",
                icon: "🧪",
              },
              {
                n: "05",
                week: "Week 8",
                title: "Market Research",
                desc: "Data collection, market research, and business plan guidance by experts.",
                icon: "📊",
              },
              {
                n: "06",
                week: "Week 9",
                title: "Final Pitch & Presentation",
                desc: "Final business plan, mock pitches, investor presentations, and winner announcements.",
                icon: "🎤",
              },
            ].map((item, idx) => {
              const theme = WEEK_THEMES[idx];
              const lift = idx % 2 === 1 ? "lg:translate-y-12" : "";
              return (
                <div
                  key={item.week}
                  className={`group relative animate-fade-slide-up transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:scale-[1.03] ${WEEK_ROTATIONS[idx]} ${lift}`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl translate-x-2 translate-y-2"
                    style={{ background: theme.bg, filter: "brightness(0.92)" }}
                  />
                  <div
                    className="relative rounded-2xl p-6"
                    style={{
                      background: theme.bg,
                      boxShadow:
                        "0 16px 32px -14px rgba(15,23,42,0.25), 0 3px 10px -2px rgba(15,23,42,0.12)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: theme.dot }}
                        />
                        <span
                          className="text-xs font-extrabold tracking-widest"
                          style={{ color: theme.dot }}
                        >
                          {item.n}
                        </span>
                      </div>
                      <span className="text-xl opacity-80 transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </span>
                    </div>

                    <span
                      className="inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-2"
                      style={{
                        color: theme.dot,
                        backgroundColor: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {item.week}
                    </span>

                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        className="w-full px-6 py-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #FBF9F8 0%, #FFF4F4 100%)",
        }}
      >
        <div className="relative max-w-5xl mx-auto space-y-8 animate-fade-slide-up">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="h-1.5 w-10 rounded-full"
                style={{ backgroundColor: RED }}
              />
              <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Benefits for Participants
              </h3>
            </div>

            <div
              className="rounded-2xl backdrop-blur-xl bg-white/80 p-8"
              style={{
                border: `2px solid ${RED}33`,
                boxShadow: `0 20px 50px -25px ${RED}55`,
              }}
            >
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-slate-700 text-sm leading-relaxed">
                {[
                  "Certificate of participation",
                  "Cultivating business acumen",
                  "Design thinking for prototype development",
                  "Opportunity to win cash prize",
                  "Collaborate with peers and industry experts using a range of networking skills",
                  "Discover science communication with impact to diverse audiences",
                  "Gain project management skills in the context of business planning",
                  "Facilitate testing and validation of your product",
                  "Support for ethical approval for clinical trials and IP support",
                  "Learn about ethical, legal, and health and safety aspects",
                  "Streams to access Government Grants",
                  "Understand how funding is sourced and managed",
                  "Opportunity to pitch in front of eminent angel investors and VCs",
                  "Access to an astute mentors' panel from Healthcare, Medtech, Business, Finance, Regulatory Affairs, Agriculture, and beyond",
                  "Offline workshops on business plan development at your organization",
                  "Special mention of your community or organization on our websites",
                  "Access to collaborate with a global network of partners and organizations",
                ].map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                      style={{ backgroundColor: RED }}
                    >
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="h-1.5 w-10 rounded-full"
                style={{ backgroundColor: RED }}
              />
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                Benefits for Collaborators
              </h3>
            </div>

            <div
              className="rounded-2xl backdrop-blur-xl bg-white/80 border border-slate-100 p-8 max-w-3xl"
              style={{ boxShadow: "0 8px 30px -16px rgba(15,23,42,0.12)" }}
            >
              <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
                {[
                  "Offline workshops on business plan development at your organization",
                  "Special mention of your community or organization on our websites",
                  "Access to collaborate with a global network of partners and organizations",
                  "Fundraising opportunities",
                ].map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                      style={{ backgroundColor: RED }}
                    >
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATE / CONTACT */}
      <section className="w-full px-6 py-14 bg-white relative overflow-hidden">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[34rem] h-[16rem] rounded-full opacity-20 blur-3xl"
          style={{ background: RED }}
        />
        <div className="relative max-w-5xl mx-auto text-center animate-fade-slide-up">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Collaborate with Us
          </h2>
          <p className="text-slate-600 mt-4 text-lg">
            To collaborate with us, please fill in the form below.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 mt-8 rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1"
            style={{
              background: `linear-gradient(135deg, ${RED}, ${RED_BRIGHT})`,
              boxShadow: `0 12px 30px -10px ${RED}88`,
            }}
          >
            Collaborate Now
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <div className="mt-10 max-w-xs mx-auto">
            <div
              className="rounded-2xl bg-[#FFF7F7] border border-slate-100 p-6 text-left transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = RED_BRIGHT)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#f1f5f9")
              }
              style={{ boxShadow: "0 4px 20px -10px rgba(15,23,42,0.08)" }}
            >
              <p
                className="text-xs tracking-widest uppercase font-semibold mb-2"
                style={{ color: RED }}
              >
                Partnerships
              </p>
              <p className="text-slate-900 font-bold">Bhavna Pandya</p>
              <p className="text-slate-600 text-sm mt-1">+91 98215 54344</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /*
import { Link } from "react-router-dom";

import bepEligibility from "../../assets/images/bepEligibility.png";
import bepDuration from "../../assets/images/bepDuration.png";
import bepFees from "../../assets/images/bepFees.png";

import bepWeek1 from "../../assets/images/bepWeek1.png";
import bepWeek2 from "../../assets/images/bepWeek2.png";
import bepWeek3_6 from "../../assets/images/bepWeek3_6.png";
import bepWeek7 from "../../assets/images/bepWeek7.png";
import bepWeek8 from "../../assets/images/bepWeek8.png";
import bepWeek9 from "../../assets/images/bepWeek9.png";

export default function BEP() {
  return (
    <div className="w-full">
      <section className="w-full px-6 py-10 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto animate-fade-slide-up space-y-3">
          <Link
            to="/programs"
            className="inline-flex items-center text-sm font-medium text-emerald-700 hover:underline mb-4"
          >
            ← Back to Programs
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Bio Entrepreneurship Program
          </h1>
          <p className="mt-3 text-slate-600 text-lg">
            A journey from ideation to entrepreneurship
            <br />
            <span className="text-sm text-slate-500">
              September – November 2023
            </span>
          </p>

          <a
            href="https://airtable.com/appmMdy8jDFih6Bl8/shr79oBkLwe5UzmYu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-6 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-md"
          >
            Register Now
          </a>
        </div>
      </section>
      <section className="w-full px-6 py-10 bg-white">
        <div className="max-w-5xl mx-auto space-y-5 animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900">
            Program Description
          </h2>

          <p className="text-slate-600">
            Bioriidl, India&apos;s first DIY Biolab, is organizing the 7th
            edition of the Bio-Entrepreneurship Program (BEP), a nine-week
            program focused on product development and go-to-market strategies.
          </p>

          <p className="text-slate-600">
            The program runs from the beginning of September to November 2023
            and exposes teams to mentors from technology, business, and design
            domains. Participants learn market research and business plan
            development.
          </p>

          <p className="text-slate-600">
            Teams work on their ideas from ideation to prototype development and
            market research. The program concludes with a pitching session where
            teams present their prototypes to investors. The winners will be
            selected based on their performance and the milestones they have
            achieved.
          </p>

          <p className="text-slate-600">
            Participants gain access to state-of-the-art infrastructure
            including molecular biology, cell culture, fermentation, analytical,
            and common instrument laboratories. Teams also benefit from access
            to Somaiya Vidyavihar and Somaiya Ayurvihar's medical hospital,
            physiotherapy college, ayurvedic institute, agriculture institute,
            and other departments. This access may be beneficial to teams
            working on global health, agritech, or biotechnology-related issues.
          </p>
        </div>
      </section>
      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3 animate-fade-slide-up">
          {[
            {
              title: "Eligibility Criteria",
              text: "Ideation / Early-stage startups",
              img: bepEligibility,
            },
            {
              title: "Duration",
              text: "9 weeks (September last week – November last week)",
              img: bepDuration,
            },
            {
              title: "Registration Fees",
              text: "INR 1500 per team (Maximum 4 members)",
              img: bepFees,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-xl bg-white border border-slate-200 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto w-32 h-32 object-cover rounded-md mb-4 transition-transform duration-200 group-hover:scale-105"
              />
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900 mb-10 animate-fade-slide-up">
            Detailed Structure of the Program
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-center animate-fade-slide-up transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <img
                src={bepWeek1}
                alt="Week 1"
                className="mx-auto w-36 h-36 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-slate-900">Week 1</h3>
              <p className="text-sm font-medium text-emerald-700 mt-1">
                Discover and Define
              </p>
              <p className="text-sm text-slate-600 mt-3">
                First selection based on idea clarity, design approach, and
                technical feasibility. Results announced on Saturday.
              </p>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-center animate-fade-slide-up transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <img
                src={bepWeek2}
                alt="Week 2"
                className="mx-auto w-36 h-36 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-slate-900">Week 2</h3>
              <p className="text-sm font-medium text-emerald-700 mt-1">
                Prototype Initiation
              </p>
              <p className="text-sm text-slate-600 mt-3">
                Selected teams are paired with mentors and define their Unique
                Value Proposition (UVP).
              </p>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-center animate-fade-slide-up transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <img
                src={bepWeek3_6}
                alt="Weeks 3 to 6"
                className="mx-auto w-36 h-36 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-slate-900">Weeks 3–6</h3>
              <p className="text-sm font-medium text-emerald-700 mt-1">
                Product & Prototype Development
              </p>

              <ul className="mt-3 text-xs text-slate-600 text-left space-y-2">
                <li>Week 3: Prototype development and mentor evaluation</li>
                <li>Week 4: Product development with industry feedback</li>
                <li>Week 5: Product refinement and business workshops</li>
                <li>Week 6: Validation and second selection</li>
              </ul>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-center animate-fade-slide-up transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <img
                src={bepWeek7}
                alt="Week 7"
                className="mx-auto w-36 h-36 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-slate-900">Week 7</h3>
              <p className="text-sm font-medium text-emerald-700 mt-1">
                Testing & Modification
              </p>
              <p className="text-sm text-slate-600 mt-3">
                Prototype and product testing with modifications and
                customer-based partnerships.
              </p>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-center animate-fade-slide-up transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <img
                src={bepWeek8}
                alt="Week 8"
                className="mx-auto w-36 h-36 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-slate-900">Week 8</h3>
              <p className="text-sm font-medium text-emerald-700 mt-1">
                Market Research
              </p>
              <p className="text-sm text-slate-600 mt-3">
                Data collection, market research, and business plan guidance by
                experts.
              </p>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-center animate-fade-slide-up transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <img
                src={bepWeek9}
                alt="Week 9"
                className="mx-auto w-36 h-36 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-slate-900">Week 9</h3>
              <p className="text-sm font-medium text-emerald-700 mt-1">
                Final Pitch & Presentation
              </p>
              <p className="text-sm text-slate-600 mt-3">
                Final business plan, mock pitches, investor presentations, and
                winner announcements.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-slide-up">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Benefits for Participants
            </h3>

            <div className="rounded-xl bg-white border border-slate-200 p-6">
              <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
                <li>Certificate of participation</li>
                <li>Cultivating business acumen</li>
                <li>Design thinking for prototype development</li>
                <li>Opportunity to win cash prize</li>
                <li>
                  Collaborate with peers and industry experts using a range of
                  networking skills
                </li>
                <li>
                  Discover science communication with impact to diverse
                  audiences
                </li>
                <li>
                  Gain project management skills in the context of business
                  planning
                </li>
                <li>Facilitate testing and validation of your product</li>
                <li>
                  Support for ethical approval for clinical trials and IP
                  support
                </li>
                <li>
                  Learn about ethical, legal, and health and safety aspects
                </li>
                <li>Streams to access Government Grants</li>
                <li>Understand how funding is sourced and managed</li>
                <li>
                  Opportunity to pitch in front of eminent angel investors and
                  VCs
                </li>
                <li>
                  Access to an astute mentors’ panel from Healthcare, Medtech,
                  Business, Finance, Regulatory Affairs, Agriculture, and beyond
                </li>
                <li>
                  Offline workshops on business plan development at your
                  organization
                </li>
                <li>
                  Special mention of your community or organization on our
                  websites
                </li>
                <li>
                  Access to collaborate with a global network of partners and
                  organizations
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Benefits for Collaborators
            </h3>

            <div className="rounded-xl bg-white border border-slate-200 p-6 max-w-3xl">
              <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
                <li>
                  Offline workshops on business plan development at your
                  organization
                </li>
                <li>
                  Special mention of your community or organization on our
                  websites
                </li>
                <li>
                  Access to collaborate with a global network of partners and
                  organizations
                </li>
                <li>Fundraising opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-6 py-14 bg-white">
        <div className="max-w-5xl mx-auto text-center animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900">
            Collaborate with Us
          </h2>
          <p className="text-slate-600 mt-3">
            To collaborate with us, please fill in the form below.
          </p>
          <a
            href="#"
            className="inline-flex mt-5 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition"
          >
            Collaborate Now
          </a>
          <div className="mt-8 text-sm text-slate-600 space-y-2">
            <p>
              <strong>Queries:</strong> Apekshakumari Patel | +91 99672 19428 |
              apekshakumari@somaiya.edu
            </p>
            <p>
              <strong>Partnerships:</strong> Bhavna Pandya | +91 98215 54344
            </p>
          </div>
        </div>
      </section>      
    </div>
  );
}
  */
}
