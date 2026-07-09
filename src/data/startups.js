import healthEatosLogo from "../assets/images/startupHealtheatos.jpg";
import agroBeadsLogo from "../assets/images/startupAgrobeads.jpg";
import dogMyLoveLogo from "../assets/images/startupDogsmylove.png";
import indraLogo from "../assets/images/startupIndra.jpg";
import ibandLogo from "../assets/images/startupIband.png";
import questDentalLogo from "../assets/images/startupQuestDental.jpg";

export const startups = [
  {
    id: "health-eatos",
    name: "Health-Eatos",
    logo: healthEatosLogo,
    description:
      "Health-Eatos is a company making nachos from beans that are high on nutrition and protein. Starting off as a final year project from KJ Somaiya College of Science and Commerce, this company provides a healthy, fibre-rich version of Nachos at highly affordable prices.",
    links: [{ label: "Facebook", href: "FACEBOOK_LINK" }],
    funding: "Seed",
    category: "Food",
  },
  {
    id: "agrobeads",
    name: "AgroBeads",
    logo: agroBeadsLogo,
    description:
      "Agrobeads was the final year project of KJSSC students which accelerates the growth of any plant and increases the productivity with only one product. Agrobeads work on enhancing the quality of roots, shoots, fruits and also the leaf span. It has no side effects on the soil as well as the plant. It is easy to use. One has to just put a few of the beads near the roots. This has been tried with plants at lab scale and for home gardening which provides good results. Agrobeads are a great solution for solving the problem of lands which are contaminated with inorganic phosphates.",
    links: [{ label: "Website", href: "https://www.agrobeads.com/" }],
    funding: "Grant",
    category: "Agriculture",
  },
  {
    id: "dog-my-love",
    name: "Dog My Love",
    logo: dogMyLoveLogo,
    description:
      "Dog My Love is a dog care products and accessories shop located in California. It was started by students of S K Somaiya Vinaymandir Junior College during their college days and today it sells a number of products ranging from collars, leashes, dog food and toys, to doghouses, beds, brushes and bowls.",
    links: [{ label: "Website", href: "http://dogmylove.in/" }],
    funding: "Bootstrapped",
    category: "Healthcare",
  },
  {
    id: "indra",
    name: "Indra",
    logo: indraLogo,
    description:
      "Indra is an incubated startup at Bioriidl working on innovative technology-driven solutions.",
    links: [],
    funding: "Seed",
    category: "Biotech",
    featured: true,
  },
  {
    id: "i-band",
    name: "i-Band",
    logo: ibandLogo,
    description:
      "i-Band is a Bioriidl-incubated startup focused on developing impactful healthcare technology solutions.",
    links: [],
    funding: "Pre-Seed",
    category: "Healthcare",
  },
  {
    id: "quest-dental",
    name: "Quest Dental",
    logo: questDentalLogo,
    description:
          "Quest Dental is an incubated startup addressing challenges in dental healthcare through innovative solutions.",
    links: [],
    funding: "Seed",
    category: "Healthcare",
  },
  {
    id: "ufarm",
    name: "UFarm",
    logo: null,
    description:
      "UFarm is an incubated startup at Bioriidl working in the agriculture domain.",
    links: [],
    funding: "Bootstrapped",
    category: "Agriculture",
  },
];
export const getStartupById = (id) => startups.find((startup) => startup.id === id);
