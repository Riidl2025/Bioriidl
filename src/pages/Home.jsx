/*
import state1 from "../assets/images/stat1.png"
import stat2 from "../assets/images/stat2.png"
import stat3 from "../assets/images/stat3.png"
import stat4 from "../assets/images/stat4.png"
import hero from  "../assets/images/hero.jpg"
const stats = [
  {
    title: "17+ Total Startups",
    image: state1,
  },
  {
    title: "$1 Million+ Funding Raised",
    image: stat2,
  },
  {
    title: "50+ Full Time Jobs Created",
    image: stat3,
  },
  {
    title: "10 Currently incubated",
    image: stat4,
  },
];

const Home = () => {
  return (
    <div className="w-full">
      <section className="w-full px-6 py-12 md:py-16 bg-slate-50">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="md:w-1/2 animate-fade-slide-up">
            <p className="text-4xl md:text-6xl font-semibold uppercase trackinf-[0.2em] text-emerald-700 mb-3">
              Bio Incubator
            </p>
            <h1 className="text-2xl md:text-4xl font-semibold text-slate-800 mb-4">
              Nurturing the next generation of{" "}
              <span className="text-blue-800">bio startups</span>.
            </h1>
            <p className="text-slate-600 mb-6 max-w-xl">
              From idea to impact, we support founders working on biology,
              health and deep-tech ventures with space, mentorship and
              community.
            </p>
            <a
              href="https://airtable.com/apppcc53BEKn1w6Rs/shr3cZLFhHRJk2DIP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 active:bg-emerald-900 transition-colors"
            >
              Apply for Incubation
            </a>
          </div>

          <div className="md:w-1/2 mt-4 md:mt-0">
            <img src={hero} alt="Bio Incubator" />
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-10 bg-white">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6 text-center">
          Startup Statistics
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {stats.map((item, index) => (
            <div
              key={item.title}
              className="items-center text-center flex flex-col animate-fade-slide-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="w-44 h-44 overflow-hidden shadow-md rounded-sm bg-slate-50 border border-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-semibold mt-4 text-slate-800 max-w-40">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
*/
import homePg from "../assets/images/homePg.jpeg";
import { BarChart3, Briefcase, DollarSign, Users } from "lucide-react";
import ImpactStats from "../components/ImpactStats";
import allLogos from "../assets/images/allLogos.jpg";
import fundingLogos from "../assets/images/fundingLogos.jpg";

import healthEatosLogo from "../assets/images/startupHealtheatos.jpg";
import dogMyLoveLogo from "../assets/images/startupDogsmylove.png";
import indraLogo from "../assets/images/startupIndra2.jpeg";
import ibandLogo from "../assets/images/startupIband2.jpeg";
import questDentalLogo from "../assets/images/startupQuestDental2.jpeg";
import startupAgrobeadsLogo from "../assets/images/startupAgrobeads.jpg";

const startupLogos = [
  { name: "indraLogo", logo: indraLogo },
  { name: "healthEatosLogo", logo: healthEatosLogo },
  { name: "dogMyLoveLogo", logo: dogMyLoveLogo },
  { name: "Agrobeads", logo: startupAgrobeadsLogo },
  { name: "ibandLogo", logo: ibandLogo },
  { name: "questDentalLogo", logo: questDentalLogo },
];

const supportItems = [
  {
    title: "Infrastructure",
    description:
      "riidl offers 24/7 access to essential startup infrastructure, including dedicated workspaces, high-speed WiFi, meeting rooms, lockers, and access to prototyping facilities.",
    icon: Briefcase,
  },
  {
    title: "Business Services",
    description:
      "riidl connects startups with industry leaders across sectors like manufacturing and IT through expert-led incubation support, network bridges, and collaboration opportunities.",
    icon: BarChart3,
  },
  {
    title: "Financing",
    description:
      "riidl connects startups with angel investors and VCs through strategic partnerships, offering funding opportunities throughout the incubation journey.",
    icon: DollarSign,
  },
  {
    title: "People Connectivity",
    description:
      "riidl in-house experts offer guidance in IT, electronics, microbiology, marketing, and business development with resources, mentorship, and strategic insights.",
    icon: Users,
  },
];

const Home = () => {
  return (
    <div className="w-full">
      <style>{`
        
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        @keyframes startupSlideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
       
        
      `}</style>

      <section
        className="w-full px-6 py-12 md:py-16 relative"
        style={{
          backgroundImage: `url(${homePg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#F7F4D5",
        }}
      >
        <div className="absolute inset-0 bg-white/15"></div>

        <div className="relative flex flex-col gap-8 items-start justify-center min-h-[500px] pl-2 md:pl-12 lg:pl-20">
          <div className="text-left max-w-2xl">
            <p class="text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-[#650000] via-[#A20202] to-[#FF8A8A] bg-clip-text text-transparent leading-tight">
              Bio Incubator
            </p>

            <h1 className="text-2xl md:text-4xl font-semibold mb-4 text-black">
              Nurturing the next generation of{" "}
              <span className="text-black">bio startups</span>.
            </h1>

            <p className="mb-6 text-black">
              From idea to impact, we support founders working on biology,
              health and deep-tech ventures with space, mentorship and
              community.
            </p>

            <div className="flex justify-start mt-8">
              <a
                href="https://airtable.com/apppcc53BEKn1w6Rs/shr3cZLFhHRJk2DIP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-left rounded-full px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300"
                style={{ backgroundColor: "#A20202" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#800000")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#A20202")
                }
              >
                Apply for Incubation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 class="mt-4 text-center text-3xl font-bold bg-linear-to-r from-[#550202] to-[#f30202] bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
              Startup Support and Resources
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Explore riidl’s extensive range of services supporting startups
              from incubation to Series-A funding, ensuring they have the
              backing they need at every step of the way.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {supportItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
                  style={{ borderColor: "#D3968C", backgroundColor: "#FFFFFF" }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="grid h-12 w-12 place-items-center rounded-2xl shadow-sm"
                      style={{ backgroundColor: "#A20202", color: "#F7F4D5" }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: "#0A3323" }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6" style={{ color: "#105666" }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-3xl border p-6 shadow-sm overflow-hidden"
            style={{ borderColor: "#D3968C" }}
          >
            <div className="mb-8 text-center">
              <p
                className="text-sm uppercase tracking-[0.32em] mb-3"
                style={{ color: "#839958" }}
              >
                Featured Startups
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold"
                style={{ color: "#0A3323" }}
              >
                Celebrating the successes of our incubated ventures
              </h2>
            </div>

            <div className="space-y-4">
              <div
                className="overflow-hidden rounded-3xl px-3 py-4"
                style={{ borderColor: "#A20202", borderWidth: "1px" }}
              >
                <div
                  className="flex gap-4"
                  style={{
                    animation: "startupSlideLeft 10s linear infinite",
                    minWidth: "max-content",
                  }}
                >
                  {startupLogos.concat(startupLogos).map((startup, index) => (
                    <div
                      key={`top-${index}-${startup.name}`}
                      className="relative h-24 min-w-40 overflow-hidden rounded-3xl shadow-sm"
                      style={{
                        borderColor: "#A20202",
                        borderWidth: "1px",
                        backgroundColor: "#A20202",
                      }}
                    >
                      {startup.logo ? (
                        <img
                          src={startup.logo}
                          alt={startup.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div
                          className="flex h-full items-center justify-center text-sm font-semibold"
                          style={{ color: "#0A3323" }}
                        >
                          {startup.name}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full px-6 py-8"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <h2
          className="text-base md:text-xl font-semibold mb-6 text-center uppercase tracking-widest"
          style={{ color: "#0A3323" }}
        >
          SUPPORTED BY
        </h2>

        <div className="flex items-center justify-center">
          <div className="max-w-5xl w-full">
            <img
              src={allLogos}
              alt="Supported by logos"
              className="w-full h-16 md:h-24 object-contain"
            />
          </div>
        </div>
      </section>

      <section
        className="w-full px-6 py-8"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <h2
          className="text-base md:text-xl font-semibold mb-6 text-center uppercase tracking-widest"
          style={{ color: "#0A3323" }}
        >
          FUNDING SCHEMES
        </h2>

        <div className="flex items-center justify-center">
          <div className="max-w-5xl w-full">
            <img
              src={fundingLogos}
              alt="Funding schemes logos"
              className="w-full h-16 md:h-24 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <ImpactStats />
        </div>
      </section>
    </div>
  );
};

export default Home;
