import React, {useEffect,useRef} from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Fillter from "../../components/Research/Fillters";
import ResearchPapers from "../../components/Research/ResearchPapers";
import ResearchByStartups from "../../components/Research/ResearchByStartups";
import BioResearchSection from "../../components/Research/BioResearchSection";
import carosule1 from "../../assets/Lab/Biolab/carosule/carosule1.jpeg"
import carosule2 from "../../assets/Lab/Biolab/carosule/carosule2.jpeg"
import carosule3 from "../../assets/Lab/Biolab/carosule/carosule3.jpeg"
import carosule4 from "../../assets/Lab/Biolab/carosule/carosule4.jpeg"
import carosule5 from "../../assets/Lab/Biolab/carosule/carosule5.jpeg"
import carosule6 from "../../assets/Lab/Biolab/carosule/carosule6.jpeg"

function Research() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  const slidesData = [
    {
      title: "Research",
      description:
        "Riidl is an incubation centre which provides nurturing environment to early based startups by providing them work space.",
      imageUrl: carosule1,
    },
    {
      title: "Innovation",
      description:
        "Riidl is an incubation centre which provides nurturing environment to early based startups by providing them work space.",
      imageUrl: carosule2,
    },
    {
      title: "Incubation",
      description:
        "Riidl is an incubation centre which provides nurturing environment to early based startups by providing them work space.",
      imageUrl: carosule3,
    },
    {
      title: "Design",
      description:
        "Riidl is an incubation centre which provides nurturing environment to early based startups by providing them work space.",
      imageUrl: carosule4,
    },
    {
      title: "Laboratory",
      description:
        "Riidl is an incubation centre which provides nurturing environment to early based startups by providing them work space.",
      imageUrl: carosule5,
    },
    {
      title: "Laboratory",
      description:
        "Riidl is an incubation centre which provides nurturing environment to early based startups by providing them work space.",
      imageUrl: carosule6,
    },
 
  ];
    const topRef = useRef(null); // Create a ref for the top of the page
    
    useEffect(() => {
      // Scroll to the top of the page whenever the component is mounted or refreshed
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, []); // Empty dependency array to trigger only on mount
  
  return (
    <section ref={topRef}>
      <div className=" flex justify-center items-center poppins-semibold px-4 md:px-0 text-xl md:text-2xl py-4 md:py-10">
        <p className="poppins-semibold">The Science of Today is the Technology of Tomorrow</p>
      </div>
      {/* carosul open */}
      <div className="carousel-container xl:px-40 lg:mx-auto rounded-3xl overflow-hidden relative m-2">
      <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <motion.div
              key={index}
              className="carousel-slide relative rounded-xl overflow-hidden"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.3 }}
            >
              <img
                src={slide.imageUrl || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                className="w-full h-[200px] md:h-[500px] object-cover rounded-3xl"
              />
            </motion.div>
          ))}
        </Slider>
      </div>
      {/* carosul close */}

      {/* random text with enquire button open */}
      <div className="px-4 text-justify md:text-nowrap xl:px-40 xl:py-16">
        <div className=" flex flex-col justify-center items-center">
          <p className="poppins-semibold text-2xl text-[#707070] py-8 text-center">
            Welcome to riidl's research hub,
            <br />
            where <span className=" text-[#0F0F0F]  ">
              innovation soars
            </span> and{" "}
            <span className=" text-[#0F0F0F]">excellence blossoms.</span>{" "}
          </p>
          <p className=" text-[#707070] poppins-regular text-base text-center">
            With cutting-edge facilities and collaborative spaces, we fuel
            ground-breaking discoveries.
            <br />
            Join us on the forefront of innovation, where every breakthrough
            begins.
          </p>
        </div>
        {/* <div className="flex items-center justify-center pt-12">
          <button className="bg-[#A20202]  text-white flex items-center justify-center poppins-bold text-sm py-3 focus:scale-95 px-6 rounded-lg">
            Enquire Here
          </button>
        </div> */}
      </div>
      {/* random text with enquire button open */}





      {/* fillter section open */}
      {/* <div className=" lg:px-20 xl:px-40 overflow-hidden">
        <div>
          <p className=" text-center poppins-semibold text-3xl pt-8">
            Research Projects
          </p>
          <p className=" text-[#707070] text-center py-4 p-2">
            Bio-riidl's membership program fuels innovation and entrepreneurship
            by guiding students from idea
            <br /> generation to impactful research publication.
          </p>
        </div>
        <Fillter />
      </div> */}
      {/* fillter section close */}

      <div className=" overflow-hidden">
      <BioResearchSection/>
      </div>

      {/* research page fillter Open */}
      <div className="lg:px-20 xl:px-40 overflow-hidden">
        <ResearchPapers />
      </div>
      {/* research page fillter Close */}

      {/* Research by Startups Filter Open */}
      <div className="lg:px-20 xl:px-40 overflow-hidden mb-20">
        <div>
          <p className=" text-center poppins-semibold text-3xl pt-8">
            Research Projects
          </p>
          <p className=" text-[#707070] py-4 p-2 text-justify">
            Bio-riidl's research projects are a core component of our membership
            program, fostering a culture of innovation and entrepreneurship.
            Students generate inventive ideas, diligently work on their
            concepts, develop projects, and meticulously document their
            progress. Moreover, we actively support them in the process of
            publishing their work, ensuring that their groundbreaking research
            reaches a wider audience.
          </p>
        </div>
        <ResearchByStartups />
      </div>
      {/* Research by Startups Filter Close */}
    </section>
  );
}

export default Research;
