import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import arrowIcon from "../../assets/Research/ResearchImages/Researchpage/arrowIcon.png";
import draftIcon from "../../assets/Research/ResearchImages/Researchpage/draftIcon.png";

const papers = [
  {
    id: 1,
    title: " Potato starch based bioplastic as alternative packaging materials",
    journal: "The African Journal of Life Sciences",
    authors:
      "Prachi Sonawane, Amisha Panchal, Shreeya Naik, Bhagyashree Mundaye and Unnati Padalia",
    abstract:
      "Bioplastics, derived from agrarian sources, offer an eco-friendly alternative to traditional plastics, reducing environmental harm and promoting biodegradability. Their use can significantly curb pollution and provide a safer option.",
    url: "https://doi.org/10.33472/AFJBS.3.3.2021.111-113",
    link: "https://www.researchgate.net/publication/353782942_Potato_starch_based_bioplastic_as_alternative_packaging_materials",
    category: "The African Journal of Life Sciences",
  },
  {
    id: 2,
    title:
      "Isolation and enumeration of probiotic microorganisms from fermented idli batter",
    journal: "The African Journal of Life Sciences",
    authors:
      "Anika Shaikh, Iramzeba Siddique, Muskan Shaikh, and Soniya Shetty",
    abstract:
      "Probiotics in fermented Indian foods like idli are isolated, with lactic acid bacteria and yeasts contributing to fermentation, enhancing nutritional value and flavor.",
    url: "https://doi.org/10.33472/AFJBS.3.3.2021.59-63",
    link: "https://www.researchgate.net/publication/353787692_Isolation_and_enumeration_of_probiotic_microorganisms_from_fermented_idli_batter",
    category: "The African Journal of Life Sciences",
  },
  {
    id: 3,
    title:
      "Antimicrobial activity of spices against Gram positive and Gram negative organisms",
    journal: "The African Journal of Life Sciences",
    authors:
      "Divya Sawant, Punam Deshpande, Vrushali Shedge, Manasi Phadke, Alpana Sahani, and Chinmai Godbole",
    abstract:
      "Spices like turmeric, ginger, and chili exhibit antimicrobial properties, with potential as natural agents against bacteria, suggesting broader exploration of other spices for similar effects.",
    url: "https://doi.org/10.33472/AFJBS.3.3.2021.37-40",
    link: "https://www.researchgate.net/publication/353785569_Antimicrobial_activity_of_spices_against_Gram_positive_and_Gram_negative_organisms",
    category: "The African Journal of Life Sciences",
  },
  {
    id: 4,
    title: "Production of bio-flavored sourdough bread",
    journal: "The African Journal of Life Sciences",
    authors:
      "Kamalrookh Z. Marolia, Bushra K. Khan, Namrata Raval, and Yash Sharma",
    abstract:
      "Sourdough, an ancient leavened bread, is traditionally fermented by wild bacteria and yeast. To achieve consistent flavor and texture, a scientific approach was employed, selecting specific probiotics for their flavoring capabilities, and conducting sensory evaluations. Specialized equipment was designed for flour malting and texture analysis.",
    url: "https://doi.org/10.33472/AFJBS.4.1.2022.127-138",
    link: "https://www.researchgate.net/publication/357866787_Production_of_Bio-flavored_Sourdough_Bread",
    category: "The African Journal of Life Sciences",
  },
  {
    id: 5,
    title: "Current development of edible food packaging: A review",
    journal: "The African Journal of Life Sciences",
    authors:
      "Claudia Alarcón-López, Karla Leticia Candia Bárcenas, Jorge Eduardo Navarro Báez, Javier Alejandro Cabello Carranza, and Isaen Berenice Dzul Bautista",
    abstract:
      "Edible biopolymers offer a promising solution to reduce non-biodegradable food packaging waste. Comprised of proteins, polysaccharides, and microbial polymers, they enhance food products while providing extended shelf life, improved barriers, mechanical strength, and antibacterial qualities. This emerging field explores various applications, incorporating antioxidants and plasticizers to enhance properties.",
    url: "https://doi.org/10.33472/AFJBS.4.1.2022.1-21",
    link: "https://www.afjbs.com/issue-content/current-development-of-edible-food-packaging-a-review-7",
    category: "The African Journal of Life Sciences",
  },
  {
    id: 6,
    title:
      "A proposal of new biomarkers for Alzheimer’s Disease non-invasive diagnosis through gene expression and image processing",
    journal: "The International Journal of Life Sciences",
    authors:
      "Amalia Roscio Villena Romani, Luis Antonio Quesada Velarde, Nathaly Dongo Mendoza",
    abstract:
      "Alzheimer's diagnosis remains challenging; we proposed new biomarkers using gene expression analysis, medical history, and MRI. Identified 55 genes, with significant variables being age, other cognitive diseases, and APOE gene mutations. Patients exhibited decreased white matter in the hippocampus.",
    url: "https://ijlsci.in/ls/index.php/home/article/view/600",
    link: "https://ijlsci.in/ls/index.php/home/article/view/600",
    category: "The International Journal of Life Sciences",
  },
  {
    id: 7,
    title:
      "Removal of Orange-II dye from water by adsorption on enzyme immobilized and sodium alginate supported layered double hydroxides",
    journal: "The International Journal of Life Sciences",
    authors: "Suparna Deepak, Navami Dayal, Prashant CK",
    abstract:
      "Azo dye removal from industrial wastewater is a challenge. This study utilized immobilized peroxidase and alpha amylase enzymes on Zinc-Aluminum LDH with sodium alginate, demonstrating effective adsorption of orange-II dye. The composites outperformed enzyme-immobilized LDHs, offering a green and efficient solution.",
    url: "https://ijlsci.in/ls/index.php/home/article/view/611",
    link: "https://www.researchgate.net/publication/381375741_Removal_of_Orange-II_dye_from_water_by_adsorption_on_enzyme_immobilized_and_sodium_alginate_supported_layered_double_hydroxides",
    category: "The International Journal of Life Sciences",
  },
  {
    id: 8,
    title:
      " Evaluation of the Antibacterial activity of Ananas comosus (Pineapple) extract against selected gram-negative bacteria",
    journal: "The International Journal of Life Sciences",
    authors: "Baluku Erikan, Nathan Lubowa Musisi",
    abstract:
      "This study aimed to assess the antimicrobial properties of pineapple extract against specific gram-negative bacteria. The results indicated the effectiveness of pineapple extract, with the stem extract demonstrating higher inhibition zones and lower minimum inhibition concentrations compared to the fruit extract. This suggests the potential for pineapple as an antimicrobial agent, meriting further research.",
    url: "https://ijlsci.in/ls/index.php/home/article/view/608",
    link: "https://www.researchgate.net/publication/383131129_Evaluation_of_the_antibacterial_activity_of_pineapple_Ananas_comosus_L_Merr_industrial_waste_against_common_fish_and_shellfish_pathogens",
    category: "The International Journal of Life Sciences",
  },
  {
    id: 9,
    title:
      "Bioremediation of heavy metal pollutant Lead by Microalgae and its impact on their growth and Chlorophyll-a content : A Review",
    journal: "The International Journal of Life Sciences",
    authors: "Akshata Arun Das, Zakariya Sadaf",
    abstract:
      "Microalgae offer effective bioremediation of lead in wastewater due to their rapid growth and adaptability. However, excessive lead concentrations can disrupt their protective systems, leading to growth decline and damage to photosynthetic pigments, affecting their survival. This paper reviews lead bioremediation by microalgae and its impact on growth and chlorophyll-a content.",
    url: "https://ijlsci.in/ls/index.php/home/article/view/599",
    link: "https://www.researchgate.net/publication/375604380_Bioremediation_of_heavy_metal_pollutant_Lead_by_Microalgae_and_its_impact_on_their_growth_and_Chlorophyll-a_content_A_Review",
    category: "The International Journal of Life Sciences",
  },
  {
    id: 10,
    title: "Effects of Mites infestation on foliar galls",
    journal: "The International Journal of Life Sciences",
    authors: "M. Gopi",
    abstract:
      "This study explores mite-induced galls on plants in Kavalur Hills, Tamil Nadu, India, affecting Acacia caesia, Alangium salvifolium, and Commiphora caudata. Mites, particularly eriophid mites, create diverse galls on plant aerial organs, primarily leaves. The paper vividly describes and compares these galls with normal plant structures.",
    url: "https://ijlsci.in/ls/index.php/home/article/view/610",
    link: "https://www.researchgate.net/profile/Mohana-Krishnan-Gopi/publication/374925745_Effects_of_Mites_infestation_on_foliar_galls/links/653a37f173a2865c7ad36d7d/Effects-of-Mites-infestation-on-foliar-galls.pdf",
    category: "The International Journal of Life Sciences",
  },
  {
    id: 11,
    title: "Antimicrobial activity of phytochemicals from Ficus religiosa",
    journal: "The International Journal of Life Sciences",
    authors: "Anindita Mandal, Soniya Shetty, Esha Dabholkar, Tofiya Khan",
    abstract:
      "This study investigates the antimicrobial potential of peepal tree extracts, a traditional remedy in India. Aqueous and alcoholic extracts from different tree parts were tested against gram-positive Staphylococcus aureus and gram-negative Escherichia coli, Pseudomonas aeruginosa, and Klebsiella pneumoniae. The alcoholic bark extract exhibited significant antibacterial activity, particularly against Pseudomonas aeruginosa.",
    url: "https://ijlsci.in/ls/index.php/home/article/view/596",
    link: "https://www.ijcmas.com/vol-3-1/Varsha%20A.%20Parasharami,%20et%20al.pdf",
    category: "The International Journal of Life Sciences",
  },
  {
    id: 12,
    title:
      "Effect of pH on biosorption of Copper by marine microalgae: A Review",
    journal: "The International Journal of Life Sciences",
    authors: "Rukhsar Abdul Qayum Malik, Sadaf Zakariya",
    abstract:
      "Municipal waste releases recalcitrant heavy metals, posing environmental and food chain pollution issues. Biosorption, particularly using microalgae, offers a sustainable and cost-effective method for heavy metal removal, with low sludge generation and environmental benefits. Factors like temperature, light, and pH influence biosorption efficiency in microalgae.",
    url: "https://ijlsci.in/ls/index.php/home/article/view/598",
    link: "https://www.researchgate.net/publication/375604561_Effect_of_pH_on_biosorption_of_Copper_by_marine_microalgae_A_Review",
    category: "The International Journal of Life Sciences",
  },
  {
    id: 13,
    title:
      "A computational investigation on Rho-related GTP-binding protein RhoB through molecular modeling and molecular dynamics simulation study",
    journal: "Journal of Cellular Signalling",
    authors:
      "Shamrat Kumar Paul, Chowdhury Lutfun Nahar Metu, Sunita Kumari Sutihar, Md. Saddam, Bristi Paul, Md. Lutful Kabir, and Md. Mostofa Uddin Helal",
    abstract:
      "This study aimed to model the 3D structure of RhoB, an important member of the Rho GTPase family. The model was constructed using the Swiss model and validated through molecular dynamics simulation. The findings shed light on potential RhoB inhibitors for future research in understanding gene mutations and their impact on apoptotic events.",
    url: "https://www.scientificarchives.com/article/a-computational-investigation-on-rho-related-gtp-binding-protein-rhob-through-molecular-modeling-and-molecular-dynamics-simulation-study",
    link: "https://www.researchgate.net/publication/370239993_A_Computational_Investigation_on_Rho-related_GTP-binding_Protein_RhoB_through_Molecular_Modeling_and_Molecular_Dynamics_Simulation_Study",
    category: "Journal of Cellular Signalling",
  },
  {
    id: 14,
    title: "Understanding differential cell division patterns in Mycobacterium",
    journal: "Journal of Cellular Signalling",
    authors: "Preeti Jain",
    abstract:
      "Bacteria maintain pathogenicity through coordinated replication and cell division processes. Peptidoglycan biosynthesis in Mycobacterium involves the elongasome and divisome complexes, while chromosome replication and segregation proteins are crucial. This review highlights the unique features of Mycobacterium's division, compares these proteins with other bacteria, and suggests potential drug targets for Mycobacterium-specific research.",
    url: "https://www.scientificarchives.com/article/understanding-chromosome-replication-and-segregation-unit-of-mycobacterium-and-its-comparative-analysis-with-model-organisms",
    link: "https://www.scientificarchives.com/public/assets/articles/article-pdf-1684419200-976.pdf",
    category: "Journal of Cellular Signalling",
  },
  {
    id: 15,
    title:
      "Novel Drug Development for Treatment of COVID-19 by In Silico Analysis: Identification SARS-Cov-2 Inhibiting Saccharomyces Compounds",
    journal: "Journal of Cellular Signalling",
    authors: "Jayant Kumar, Prachiti Gholap, Thulasi G Pillai",
    abstract:
      "Amid the evolving viral mutations in the COVID-19 pandemic, in-silico analysis identified 14 streptomyces compounds with high binding energy to the SARS-CoV-2 receptor binding domain, potentially effective against the virus and its variants. Further research could validate their use in novel medications for treating infectious strains.",
    url: "https://www.scientificarchives.com/article/novel-drug-development-for-treatment-of-covid-19-by-in-silico-analysis-identification-of-sars-cov-2-inhibiting-streptomyces-compounds",
    link: "https://www.scientificarchives.com/abstract/novel-drug-development-for-treatment-of-covid-19-by-in-silico-analysis-identification-of-sars-cov-2-inhibiting-streptomyces-compounds",
    category: "Journal of Cellular Signalling",
  },
  {
    id: 16,
    title: "A study on the usage of probiotics as a safer antipyratic FC",
    journal: "Journal of Cellular Signalling",
    authors: "Shantanu Shrivastava, Nimisha Bhatu",
    abstract:
      "This review highlights the diverse benefits of probiotics, from cardiovascular health to wound healing, while also underscoring potential risks, especially for immunocompromised individuals and newborns. Caution is necessary due to the complex interactions of gut microorganisms in human health.",
    url: "https://www.scientificarchives.com/article/a-study-on-the-usage-of-probiotics-as-a-safer-antipyretic",
    link: "https://www.scientificarchives.com/article/a-study-on-the-usage-of-probiotics-as-a-safer-antipyretic",
    category: "Journal of Cellular Signalling",
  },

  // Add more paper objects here...
];

const categories = [
  { id: "all", label: "All" },
  {
    id: "The African Journal of Life Sciences",
    label: "The African Journal of Life Sciences",
  },
  {
    id: "The International Journal of Life Sciences",
    label: "The International Journal of Life Sciences",
  },
  {
    id: "Journal of Cellular Signalling",
    label: "Journal of Cellular Signalling",
  },
];

export default function ResearchPapers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const searchRef = useRef(null); // Reference for scrolling
  const filteredPapers = papers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const pageCount = Math.ceil(filteredPapers.length / itemsPerPage);
  const currentPapers = filteredPapers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, pageCount));

  // Scroll to Search Bar on Page Change
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl poppins-semibold text-center"
      >
        Research Papers
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-[#707070]  poppins-regular text-center py-6"
      >
        riidl's Darwin Conference hosts a competitive Research Symposium where
        biology papers are presented and evaluated by experts. Selected papers,
        totaling 17 so far, are published in collaboration with reputable
        journals for free.
      </motion.p>

      {/* Search section */}
      <div className=" flex justify-center " ref={searchRef}>
        <div className="relative mb-6">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search a project"
            className=" w-auto md:w-[700px] h-10 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#A20202]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      {/* Search section */}

      {/* category section */}
      <div className="flex flex-wrap gap-5 mb-8 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-5 py-2 rounded-sm text-sm border poppins-regular cursor-pointer ${
              selectedCategory === category.id
                ? "bg-[#FCFCFC] text-[#A20202] border-[#A20202]"
                : "bg-[#FCFCFC] text-[#707070] hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </div>
      {/* category section */}

      <AnimatePresence mode="wait">
        <motion.div className="space-y-6">
          {currentPapers.map((paper) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl poppins-semibold pb-4">{paper.title}</h2>
                  <p className="text-sm text-[#707070] bg-[#FCFCFC] poppins-regular flex justify-center text-center items-center border rounded-[80px] w-[280px] h-auto">
                    {paper.journal}
                  </p>
                  <p className="text-[#707070] py-4 text-justify texy-sm poppins-regular w-[95%]">
                    {paper.abstract}
                  </p>

                  <a
                    href={paper.link}
                    className=" text-[#A20202] text-base poppins-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {paper.url}
                  </a>
                  <p className="text-sm text-[#707070] py-2 flex gap-2">
                    <img
                      src={draftIcon}
                      alt="draft Icon"
                      className=" h-5 w-5"
                    />
                    {paper.authors}
                  </p>
                </div>
                <a href={paper.link}>
                  <div className="flex items-center justify-center w-[50px] h-[45px] border px-3 bg-[#E2E2E2] border-gray-300 rounded-lg ">
                    <img src={arrowIcon} className=" w-6 h-6 text-gray-400" />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {pageCount > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <motion.button
            onClick={handlePreviousPage}
            className="w-8 h-8 rounded-full bg-[#FFFFFF] text-[#A20202] hover:bg-gray-200 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronLeft />
          </motion.button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
            <motion.button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-full ${
                currentPage === page
                  ? "bg-[#FCFCFC] text-[#A20202] border-[#A20202] shadow-xl drop-shadow-md"
                  : "bg-[#FFFFFF] text-[#707070] hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {page}
            </motion.button>
          ))}
          <motion.button
            onClick={handleNextPage}
            className="w-8 h-8 rounded-full bg-[#FFFFFF] text-[#A20202] hover:bg-gray-200 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronRight />
          </motion.button>
        </div>
      )}
    </div>
  );
}
