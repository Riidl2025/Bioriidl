{/*}
export default function IBSC() {
  return (
    <div className="w-full">
      <section className="w-full px-6 py-16 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto animate-fade-slide-up">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Institutional Biosafety Committee (IBSC)
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl">
            Regulatory oversight for research involving genetically engineered
            organisms, hazardous microorganisms, and recombinant DNA.
          </p>
        </div>
      </section>

      <Section title="Introduction">
        <p>
          In India, the manufacture, import, research, and release of
          Genetically Engineered Organisms (GEOs), as well as products made
          using such organisms, are governed by the{" "}
          <strong>
            Rules for Manufacture, Use, Import, Export and Storage of Hazardous
            Microorganisms, Genetically Engineered Organisms or Cells, 1989
          </strong>{" "}
          (Rules 1989), notified under the Environment (Protection) Act, 1986 by
          the Ministry of Environment, Forest and Climate Change (MoEF&CC).
        </p>

        <p>
          These rules cover both research and large-scale handling of hazardous
          microorganisms and GE organisms. To ensure nationwide implementation,
          six competent authorities have been established under Rules 1989.
        </p>

        <p>
          Institutions handling microorganisms or GE organisms with inherent
          risks are required, with the assistance of the Institutional Biosafety
          Committee (IBSC), to develop an on-site emergency plan. This plan
          should be regularly updated in accordance with the manuals/guidelines
          provided by the RCGM and copies should be made available to the
          District Level Committee/State Biotechnology Coordination Committee
          and the Genetic Engineering Appraisal Committee.
        </p>

        <a
          href="https://ibkp.dbtindia.gov.in/Registration/Index"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-emerald-700 font-medium hover:underline"
        >
          Learn more about RCGM →
        </a>
      </Section>

      <Section title="IBSC Committee">
        <p>
          The Institutional Biosafety Committee (IBSC) of RIIDL Foundation is a
          registered and accredited committee under the Department of
          Biotechnology (DBT), Ministry of Science and Technology, Government of
          India. In accordance with DBT guidelines, the IBSC is primarily
          responsible for reviewing and granting clearance for project proposals
          falling under restricted categories of research involving genetically
          modified organisms (GMOs), living modified organisms (LMOs), and
          recombinant DNA (rDNA) materials while adhering to DBT guidelines.
          RCGM makes decisions based on applications approved by the IBSC.
        </p>

        <p>
          IBSC, apart from formulating biosafety programs for institutional
          research activities, conducts onsite evaluations, and assessments, and
          monitors research facilities, ensuring adherence to biosafety
          guidelines and procedures. It oversees the regulatory process at the
          institutional level, updating principal investigators on project
          approvals, and rejections, and providing assistance on biosafety
          issues related to genetic material research, ensuring the safety of
          all involved. IBSC assesses field experiments and reviews emergency
          plans to ensure adequate risk assessment and management.
        </p>

        <p>
          The Chairperson, Member Secretary, Biosafety Officer, and DBT nominee
          of IBSC have specific roles. Additionally, Principal Investigators of
          projects are pivotal in complying with the regulatory framework. The
          constitution, composition, role and functions, information for
          compliance requirements, and processes to be followed while dealing
          with hazardous microorganisms, GE organisms or cells, and products
          thereof in line with Rules 1989 is described in “Guidelines and
          Handbook for Institutional Biosafety Committee”.
        </p>

        <a
          href="https://drive.google.com/file/d/1JPZw1JD6HIGABhw90E49jnHBZYLeh86i/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-emerald-700 font-medium hover:underline"
        >
          Guidelines & Handbook for IBSC →
        </a>
      </Section>

      <Section title="Committee Members">
        <div className="grid gap-6 md:grid-cols-2">
          {MEMBERS.map((m) => (
            <div
              key={m.name}
              className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-slate-900">{m.name}</h3>
              <p className="text-sm text-emerald-700 mt-1">{m.role}</p>
              <p className="text-sm text-slate-600 mt-1">{m.domain}</p>
              <p className="text-xs text-slate-500 mt-1">{m.affiliation}</p>

              {m.link && (
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-emerald-700 hover:underline"
                >
                  View profile →
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Guidelines">
        <a
          href="https://ird.iitd.ac.in/IRD/IBSC_Protocol_Form.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 font-medium hover:underline"
        >
          How to apply for ethical clearance from IBSC →
        </a>
      </Section>

      <Section title="Steps for Application Process">
        <ol className="list-decimal list-inside space-y-2 text-slate-600">
          <li>
            Download the application form from the IBSC Protocol Form link.
          </li>
          <li>
            Submit a hard copy to the Member Secretary, RIIDL Foundation, and a
            soft copy via email to bhavna.pandya@somaiya.edu (CC:
            apekshakumari@somaiya.edu).
          </li>
          <li>
            Submit applications at least 30 days prior to scheduled IBSC
            meetings.
          </li>
          <li>
            Principal Investigators must inform IBSC of rDNA, GMO, or LMO work
            before applying for external grants.
          </li>
        </ol>

        <div className="mt-4 space-y-2">
          <a
            href="https://dbtindia.gov.in/sites/default/files/uploadfiles/Regulations_%26_Guidelines_for_Reocminant_DNA_Research_and_Biocontainment%2C2017.pdf"
            className="link"
          >
            Recombinant DNA Safety Guidelines (Experiment categories)
          </a>
          <a
            href="https://dbtindia.gov.in/sites/default/files/uploadfiles/Regulations_%26_Guidelines_for_Reocminant_DNA_Research_and_Biocontainment%2C2017.pdf"
            className="link"
          >
            Risk categories of microorganisms
          </a>
          <a
            href="https://drive.google.com/file/d/1JPZw1JD6HIGABhw90E49jnHBZYLeh86i/view?usp=sharing"
            className="link"
          >
            Responsibilities of Principal Investigators
          </a>
        </div>
      </Section>

      <Section title="Steps for Selection Process">
        <ol className="list-decimal list-inside space-y-2 text-slate-600">
          <li>
            IBSC schedules a meeting and informs the applicant at least 15 days
            in advance.
          </li>
          <li>Applicant presents the proposal during the IBSC meeting.</li>
          <li>Decision is communicated within one week after the meeting.</li>
        </ol>

        <p className="mt-4 text-sm text-slate-600">
          <strong>Note:</strong> Applicants are advised to review Indian
          Biosafety Rules & Regulations.
        </p>

        <a
          href="https://dbtindia.gov.in/sites/default/files/uploadfiles/Regulations_%26_Guidelines_for_Reocminant_DNA_Research_and_Biocontainment%2C2017.pdf"
          className="inline-block mt-2 text-emerald-700 hover:underline"
        >
          Indian Biosafety Rules & Regulations →
        </a>
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="w-full px-6 py-12 bg-white">
      <div className="max-w-5xl mx-auto space-y-4 animate-fade-slide-up">
        <h2 className="text-2xl font-semibold text-slate-900 border-l-4 border-emerald-500 pl-3">
          {title}
        </h2>
        <div className="space-y-3 text-slate-600">{children}</div>
      </div>
    </section>
  );
}

const MEMBERS = [
  {
    name: "Ms Bhavna Pandya",
    role: "Chairperson",
    domain: "Microbiology & Synthetic Biology",
    affiliation: "Bioriidl Head, RIIDL Foundation",
    link: "https://www.linkedin.com/in/bhavnapandya/",
  },
  {
    name: "Dr Vainav Patel",
    role: "DBT Nominee",
    domain: "Biochemistry & Virology",
    affiliation:
      "Scientist E & Head, ICMR-NIRRH, Department of Biochemistry & Virology",
    link: "https://www.linkedin.com/in/vainav-patel-9519389/",
  },
  {
    name: "Ms Apekshakumari Patel",
    role: "Member Secretary",
    domain: "Microbiology & Synthetic Biology",
    affiliation: "Research Assistant, RIIDL Foundation",
    link: "https://www.linkedin.com/in/apekshakumari-patel/",
  },
  {
    name: "Dr Jyotirlatha Bangera",
    role: "Biosafety Officer",
    domain: "Medicine",
    affiliation:
      "Professor & Head of Department, K. J. Somaiya Medical College",
    link: "https://uat.somaiya-ayurvihar.org/mr/doctor/303",
  },
  {
    name: "Dr Deepak Modi",
    role: "External Expert",
    domain: "Genetics",
    affiliation: "Scientist F, ICMR-NIRRH",
    link: "https://www.linkedin.com/in/deepak-modi-2894b514/",
  },
  {
    name: "Dr Maithili Athavale",
    role: "External Expert",
    domain: "Cancer Biology",
    affiliation:
      "Assistant General Manager R&D (Cancer Biology), Godavari Biorefineries",
    link: "https://www.linkedin.com/in/maithiliathavale/",
  },
  {
    name: "Dr Seema Sambrani",
    role: "Internal Expert",
    domain: "Biotechnology",
    affiliation: "Assistant Director, SK Somaiya College",
    link: "https://www.linkedin.com/in/dr-seema-sambrani-9b4b5068/",
  },
  {
    name: "Dr Lolly Jain",
    role: "Internal Expert",
    domain: "Microbiology",
    affiliation:
      "Vice Principal, K. J. Somaiya College of Science and Commerce",
    link: "https://www.linkedin.com/in/lolly-jain/",
  },
  {
    name: "Dr Kafil Ahmed",
    role: "Internal Expert",
    domain: "Biotechnology",
    affiliation: "Chief Scientific Officer, Techinvention Lifecare Pvt Ltd",
    link: "https://www.linkedin.com/in/kafil-ahmed-phd-93140bb/",
  },
];
*/}





import Hero from "./components/Hero";
import IntroductionSection from "./components/IntroductionSection";
import CommitteeSection from "./components/CommitteeSection";
import CommitteeMembers from "./components/CommitteeMembers";
import ProcessSteps from "./components/ProcessSteps";

export default function IBSC() {
  return (
    <div className="w-full overflow-hidden bg-white">
      <Hero />

      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto space-y-6">
          <IntroductionSection />
          <CommitteeSection />
          <CommitteeMembers />
          <ProcessSteps />
        </div>
      </div>
    </div>
  );
}