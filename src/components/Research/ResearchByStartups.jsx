import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Bioresearch images imported Open
import demo1 from "../../assets/Research/ResearchImages/FillterImg/Bioresearch/demo1.png";
// Bioresearch images imported Close

// Herbal Product images imported Open
import herbal1 from "../../assets/Research/ResearchImages/FillterImg/HerbalProduct/herbal1.png";
// Herbal Productimages imported Close

// Herbal Product images imported Open
import Furniture from "../../assets/Research/ResearchImages/FillterImg/FurnitureProduct/Furniture.png";
// Herbal Productimages imported Close

const projects = [
  {
    id: 1,
    title: "Microorganism Identification in Sterilized Sericin",
    description: "Identification of microorganisms growing in silk component sericin after sterilization.",
    category: "Bio Research",
    image: demo1,
  },
  {
    id: 2,
    title: "Herbal Skin Care Products",
    description: "Formulation & Optimization of Herbal Skincare Products with no preservatives",
    category: "Bio Research",
    image: herbal1,
  },
  {
    id: 3,
    title: "Mycelium-Grown Furniture & Natural Dye Absorption Study",
    description: "Growing furniture material using mycelium and studying the natural dyes absorption properties of it.",
    category: "Bio Research",
    image: Furniture,
  },
  {
    id: 4,
    title: "Antibacterial Activity of Rhizoprionodon Acutus Fish Skin",
    description: "To study preparation, synthesis and find antibacterial activity of fish skin of Rhizoprionodon Acutus with the help of silver nanoparticles.",
    category: "Tech Research",
    image: demo1,
  },
  {
    id: 5,
    title: "Antibacterial Activity of Rhizoprionodon Acutus Fish Skin",
    description: "To study preparation, synthesis and find antibacterial activity of fish skin of Rhizoprionodon Acutus with the help of silver nanoparticles.",
    category: "Tech Research",
    image: demo1,
  },
];

const categories =
 [
  "All", "Bio Research", "Tech Research", "Design Research"
];

export default function ResearchByStartups() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;
  const searchRef = useRef(null); // Reference for scrolling

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };


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
    <div className=" w-full mx-auto px-4 py-8 overflow-hidden">
      {/* Search Bar */}
      <div ref={searchRef} className=" flex justify-center ">
        <div className="relative mb-6">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search a project"
            className=" w-auto md:w-[600px] h-[40px] pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#A20202]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-[4px] text-sm border poppins-regular ${
              activeCategory === category ? "bg-[#FCFCFC] text-[#A20202] border-[#A20202]" : "bg-[#FFFFFF] text-[#707070] hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <AnimatePresence mode="wait">
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                {/* <span className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-full mb-2">{project.category}</span> */}
                <h2 className="text-lg poppins-semibold mb-2">{project.title}</h2>
                <p className="text-[#707070] text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <motion.button
          onClick={handlePreviousPage}
          className="w-8 h-8 rounded-full bg-[#FFFFFF] text-[#A20202] hover:bg-gray-200 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiChevronLeft />
        </motion.button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <motion.button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 rounded-full ${
              currentPage === page ? "bg-[#FCFCFC] text-[#A20202] border-[#A20202] shadow-xl drop-shadow-md" : "bg-[#FFFFFF] text-[#707070] hover:bg-gray-200"
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
    </div>
  );
}
