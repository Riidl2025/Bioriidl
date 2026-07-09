{/*import {
  Briefcase,
  Wifi,
  Users,
  Presentation,
  Lock,
  Dumbbell,
  Coffee,
  Cog,
  FlaskConical,
} from "lucide-react";

const infraItems = [
  { icon: Briefcase, label: "Dedicated desk space / cabin" },
  { icon: Wifi, label: "High speed WiFi" },
  { icon: Users, label: "Meeting rooms" },
  { icon: Presentation, label: "Conference rooms" },
  { icon: Lock, label: "Lockers" },
  { icon: Dumbbell, label: "Sports" },
  { icon: Coffee, label: "Cafeteria" },
  { icon: Cog, label: "Digital fabrication facilities" },
  { icon: FlaskConical, label: "D.I.Y. Bio Lab" },
];

const communityTags = [
  "Peer learning",
  "Mentor network",
  "Industry connects",
  "Founder meetups",
  "Workshops & talks",
];

const About = () => {
  return (
    <div className="w-full">
      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <div className="rounded-3xl border border-slate-200 bg-white/80 shadow-sm px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row gap-8 md:gap-10">
            <div className="md:w-2/3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
                About Bioriidl
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                Bio incubation for research-led{" "}
                <span className="text-emerald-700">startups</span>.
              </h1>
              <p className="text-slate-600 mb-3">
                Bioriidl is a bio incubator supporting early-stage startups
                working at the intersection of biology, health, and deep tech.
                We provide founders with the space, tools, mentoring, and
                community required to transform research-driven concepts into
                scalable ventures.
              </p>
              <p className="text-slate-600">
                From access to labs and infrastructure to business support and
                peer-learning opportunities, we help startups accelerate
                innovation and move from prototype to real-world impact.
              </p>
            </div>

            <div className="md:w-1/3">
              <div className="h-full rounded-2xl border border-emerald-100 bg-linear-to-br from-slate-50 to-emerald-50/70 px-5 py-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-slate-900 mb-2">
                    What we enable
                  </h2>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    <li>• Lab and infrastructure access</li>
                    <li>• Startup-friendly workspace</li>
                    <li>• Guidance from experts</li>
                    <li>• Connection to the riidl ecosystem</li>
                  </ul>
                </div>
                <div className="mt-4 text-xs text-slate-500">
                  24/7 access for incubated startups.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
                Infrastructure
              </h2>
              <p className="text-slate-600">
                Riidl provides essential infrastructure accessible 24/7 to
                support your growth:
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {infraItems.map((item) => (
              <div
                key={item.label}
                className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-white shadow-sm hover:shadow-md px-4 py-4 flex gap-3 items-start transition-all duration-200"
              >
                <div className="mt-0.5 rounded-xl border border-emerald-100 bg-emerald-50/70 p-2 group-hover:bg-emerald-100">
                  <item.icon className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <div className="grid gap-8 md:grid-cols-[3fr,2fr] items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
                Community
              </h2>
              <p className="text-slate-600 mb-3">
                At Bioriidl, founders are part of a collaborative network of
                innovators, researchers, mentors, and industry partners. The
                environment encourages knowledge-sharing and co-creation,
                helping startups tackle both scientific and business challenges.
              </p>
              <p className="text-slate-600">
                You grow alongside teams solving meaningful problems, supported
                by riidl&apos;s broader startup ecosystem and a culture of
                openness, experimentation, and learning.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-3">
                What you become part of
              </p>
              <div className="flex flex-wrap gap-2">
                {communityTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 shadow-sm overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 flex items-stretch">
              <div className="w-full bg-slate-100 flex items-center justify-center">
                <img
                  src="src/assets/images/darwin.png"
                  alt="Darwin"
                  className="max-h-56 w-auto object-contain"
                />
              </div>
            </div>

            <div className="md:w-2/3 px-6 py-6 md:px-8 md:py-7 flex flex-col justify-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Partner platform
              </p>
              <h3 className="text-xl font-semibold text-slate-900">Darwin</h3>
              <p className="text-sm text-slate-600">
                Darwin enhances visibility and provides discovery opportunities
                for startups, enabling wider access to resources, collaborators,
                and networks connected to the Bioriidl and riidl ecosystem.
              </p>
              <div className="mt-2">
                <a
                  href="https://darwin-placeholder-link.com" // replace with real URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-800 hover:border-emerald-500 hover:text-emerald-700 transition-colors"
                >
                  Visit Darwin website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;*/}
import {
  Briefcase,
  Wifi,
  Users,
  Presentation,
  Lock,
  Dumbbell,
  Coffee,
  Cog,
  FlaskConical,
  ArrowUpRight,
} from "lucide-react";

const infraItems = [
  { icon: Briefcase, label: "Dedicated desk space / cabin" },
  { icon: Wifi, label: "High speed WiFi" },
  { icon: Users, label: "Meeting rooms" },
  { icon: Presentation, label: "Conference rooms" },
  { icon: Lock, label: "Lockers" },
  { icon: Dumbbell, label: "Sports" },
  { icon: Coffee, label: "Cafeteria" },
  { icon: Cog, label: "Digital fabrication facilities" },
  { icon: FlaskConical, label: "D.I.Y. Bio Lab" },
];

const communityTags = [
  "Peer learning",
  "Mentor network",
  "Industry connects",
  "Founder meetups",
  "Workshops & talks",
  "Research collaborations",
];

const About = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <section className="relative px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#a20202]/5 via-white to-[#a20202]/10" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
            <div>
              <div className="w-full flex justify-start mb-8">
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#2b0000] via-[#7a0000] to-[#c40000] bg-clip-text text-transparent leading-tight">
                  About Bioriidl
                </p>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-6">
                Building the future of{" "}
                <span className="text-[#a20202]">
                  bio innovation
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                Bioriidl empowers research-led startups with advanced
                infrastructure, collaborative spaces, expert mentoring, and an
                ecosystem designed to transform scientific ideas into scalable
                real-world ventures.
              </p>

              <button className="rounded-full bg-[#a20202] text-white px-6 py-3 text-sm font-medium hover:scale-[1.03] transition-all shadow-lg shadow-[#a20202]/20">
                Explore ecosystem
              </button>
            </div>

            <div className="relative rounded-[1.8rem] border border-[#A20202]/10 bg-white/90 backdrop-blur-xl shadow-xl shadow-[#A20202]/5 p-6 overflow-hidden">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#A20202]/4 blur-2xl" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.25em] text-[#A20202] font-semibold mb-2">
                  What we provide
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                  Startup ecosystem
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                  {[
                    {
                      number: "01",
                      title: "Lab Access",
                    },
                    {
                      number: "02",
                      title: "Workspace",
                    },
                    {
                      number: "03",
                      title: "Mentorship",
                    },
                    {
                      number: "04",
                      title: "Ecosystem",
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="relative flex flex-col items-center justify-center text-center h-32 w-32 rounded-full border border-slate-200 bg-white shadow-sm shadow-slate-200/40 overflow-hidden"        >
                      <div className="absolute top-0 right-0 h-14 w-14 rounded-full bg-[#A20202]/3 blur-xl" />
                      <div className="relative">
                        <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#7f1d1d] text-white text-[10px] font-bold shadow-sm shadow-[#7f1d1d]/10">
                          {item.number}
                        </div>

                        <h3 className="text-xs font-bold text-slate-900 leading-snug px-3">
                          {item.title}
                        </h3>
                      </div>

                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-12 rounded-full bg-[#A20202]/20" />         </div>
                  ))}
                </div>

                <div className="mt-8 relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-lg shadow-slate-100">  <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#fff7f7] via-white to-[#ffeaea] px-6 py-5">
                  <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-[#A20202]/10 blur-2xl" />

                  <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#A20202_1px,transparent_1px)] [background-size:16px_16px]" />

                  <div className="relative flex items-center justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#A20202] font-semibold mb-2">
                        24/7 access for incubated startups
                      </p>

                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        Innovation Hub
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                        Infrastructure, collaboration and growth opportunities.
                      </p>
                    </div>

                    <div className="hidden md:flex items-center justify-center-to-br from-[#650000] via-[#A20202] to-[#FF8A8A] shadow-lg shadow-[#A20202]/20">


                    </div>
                  </div>

                  <div className="mt-5 h-[2px] bg-gradient-to-r from-[#650000] via-[#A20202] to-[#FF8A8A]" />

                </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>


      <section className="px-6 py-16 bg-[#fafafa]">
  <div className="max-w-7xl mx-auto">
    <div className="mb-10">
      <p className="text-sm uppercase tracking-[0.25em] text-[#A20202] font-semibold mb-3">
        Infrastructure
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
        Built for ambitious founders
      </h2>

      <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
        Premium infrastructure designed to help startups build, experiment,
        collaborate and scale seamlessly.
        <br />
        <br />
        Some of the key facilities and resources available to incubated
        startups are :
      </p>
    </div>

    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {infraItems.map((item) => (
        <div
          key={item.label}
          className="relative"
        >
          <div className="relative inline-flex items-center gap-3 px-4 py-3 rounded-full bg-white border border-[#A20202]/10 shadow-sm shadow-slate-200/30">
            
            <div className="flex h-8 w-8 items-center justify-center flex-shrink-0">
              <item.icon className="h-5 w-5 text-[#7f1d1d]" />
            </div>

            <span className="text-sm font-semibold text-slate-900 whitespace-nowrap">
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      
<section className="px-6 py-14 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="mb-7 max-w-3xl">
      <p className="text-sm uppercase tracking-[0.25em] text-[#A20202] font-semibold mb-3">
        Community
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
        A collaborative ecosystem for innovators
      </h2>

      <p className="text-slate-600 leading-relaxed">
        At Bioriidl, founders are part of a collaborative network of
        innovators, researchers, mentors, and industry partners.
      </p>
    </div>

    <div className="flex justify-center">
      <div className="w-full max-w-3xl overflow-hidden rounded-[1.5rem] border border-black bg-white shadow-md shadow-slate-200/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {communityTags.map((tag, index) => (
            <div
              key={tag}
              className={`flex items-center border-b border-black px-3 py-3 ${
                index % 2 === 0
                  ? "md:border-r md:border-black"
                  : ""
              } ${
                index >= communityTags.length - 2
                  ? "md:border-b-0"
                  : ""
              }`}
            >
              <span className="mr-2 text-[11px] font-bold text-[#A20202]">
                0{index + 1}
              </span>

              <span className="text-sm font-medium text-slate-800">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-[2rem] border border-[#a20202]/10 bg-white shadow-2xl shadow-slate-100">
            <div className="grid md:grid-cols-2 items-center">
              <div className="relative h-full min-h-[320px] bg-gradient-to-br from-[#a20202]/10 to-slate-100 flex items-center justify-center p-10">
                <div className="absolute h-60 w-60 rounded-full bg-[#a20202]/10 blur-3xl" />

                <img
                  src="src/assets/images/darwin.png"
                  alt="Darwin"
                  className="relative max-h-72 object-contain drop-shadow-2xl"
                />
              </div>

              <div className="p-10 md:p-14">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a20202] mb-4">
                  Partner platform
                </p>

                <h2 className="text-4xl font-bold text-slate-900 mb-5">
                  Darwin
                </h2>

                <p className="text-slate-600 leading-relaxed mb-8">
                  Darwin expands visibility and unlocks discovery opportunities
                  for startups by connecting them to collaborators, investors,
                  and the larger Bioriidl & riidl innovation ecosystem.
                </p>

                <a
                  href="https://darwin-placeholder-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#a20202] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#a20202]/20 hover:scale-[1.03] transition-all"
                >
                  Visit Darwin
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;