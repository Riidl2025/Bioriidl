import React from 'react';
import honey1 from "../../assets/Research/ResearchImages/Bioresearchgroup/Honey/honey.jpg"
import honey2 from "../../assets/Research/ResearchImages/Bioresearchgroup/Honey/honey2.jpg"
import honey3 from "../../assets/Research/ResearchImages/Bioresearchgroup/Honey/honey3.jpg"

import silk1 from "../../assets/Research/ResearchImages/Bioresearchgroup/Silk/silk1.jpg"
import silk2 from "../../assets/Research/ResearchImages/Bioresearchgroup/Silk/silk2.jpg"

import bio1 from "../../assets/Research/ResearchImages/Bioresearchgroup/Biomaterial/bio2.png"
import bio2 from "../../assets/Research/ResearchImages/Bioresearchgroup/Biomaterial/bio3.png"
import bio3 from "../../assets/Research/ResearchImages/Bioresearchgroup/Biomaterial/bio4.png"


import drug1 from "../../assets/Research/ResearchImages/Bioresearchgroup/Drug/drug1.png"
import drug2 from "../../assets/Research/ResearchImages/Bioresearchgroup/Drug/drug2.png"
import drug3 from "../../assets/Research/ResearchImages/Bioresearchgroup/Drug/drug3.png"

import micro1 from "../../assets/Research/ResearchImages/Bioresearchgroup/Micro/micro1.jpg"
import micro2 from "../../assets/Research/ResearchImages/Bioresearchgroup/Micro/micro2.jpg"
import micro3 from "../../assets/Research/ResearchImages/Bioresearchgroup/Micro/micro3.jpg"


export default function BioResearchSection() {
  const competitions = [
    {
      title: "Honey",
      description:
        "Researching honey production from various living sources, with focus on extraction, fortification, and innovative methodologies.",
      images: [honey1, honey2,honey3],
    },
    {
      title: "Silk",
      description:
        "From Bacterial Silk to Innovative Scaffold Design: Our research explores silk production and material experimentation.",
      images: [silk1, silk2, honey3],
    },
    {
      title: "Biomaterials",
      description:
        "Innovating biomaterials, bioplastics, bio leather, etc from agar, mushrooms, organic waste, and more for sustainable solutions.",
      images: [bio1, bio2, bio3],
    },
    {
      title: "Drug Discovery",
      description:
        "Exploring and unearthing new medicines and drugs while rigorously evaluating their potential applications.",
      images: [drug1, drug2, drug3],
    },
    {
      title: "Microfluidics",
      description:
        "Innovating biomaterials, bioplastics, bio leather, etc from agar, mushrooms, organic waste, and more for sustainable solutions.",
      images: [micro1, micro2, micro3],
    },
  ];

  return (
    <section className=" lg:px-20 xl:px-44 py-12">
      <div className=' flex flex-col justify-center text-center items-center'>
      <p className="text-4xl poppins-semibold text-center mb-2">Bio Research Groups</p>
      <p className="text-[#707070] text-center py-4 md:w-2/3 poppins-regular">Research groups at our organization consist of individuals working in diverse areas, each dedicated to ongoing projects within their respective fields.</p>
      </div>
      <div className="space-y-8 p-3">
        {competitions.map((competition, index) => (
          <div key={competition.title} className="hover:shadow-xl border hover:border transition-shadow duration-300">
            <div
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row text-end"} gap-6 items-center`}
            >
              <div className="flex-1 space-y-4 p-2">
                <h2 className="text-xl poppins-semibold">{competition.title}</h2>
                <p className="text-[#707070] text-[15px] leading-relaxed poppins-regular">{competition.description}</p>
              </div>

              <div className="flex-1">
                <div className="grid grid-cols-3">
                  {competition.images.map((image, i) => (
                    <div key={i} className="aspect-square relative overflow-hidden">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${competition.title} image ${i + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
