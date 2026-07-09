import Section from "./Section";

export default function IntroductionSection() {
  return (
    <Section title="Introduction">
      <p>
        In India, the manufacture, import, research, and release of
        Genetically Engineered Organisms (GEOs), as well as products made
        using such organisms, are governed by the Rules for Manufacture,
        Use, Import, Export and Storage of Hazardous Microorganisms,
        Genetically Engineered Organisms or Cells, 1989 (Rules 1989),
        notified under the Environment (Protection) Act, 1986 by the
        Ministry of Environment, Forest and Climate Change (MoEF&CC).
      </p>

      <p>
        These rules cover both research and large-scale handling of
        hazardous microorganisms and GE organisms. To ensure nationwide
        implementation, six competent authorities have been established
        under Rules 1989.
      </p>

      <p>
        Institutions handling microorganisms or GE organisms with
        inherent risks are required, with the assistance of the
        Institutional Biosafety Committee (IBSC), to develop an on-site
        emergency plan. This plan should be regularly updated in
        accordance with the manuals/guidelines provided by the RCGM and
        copies should be made available to the District Level
        Committee/State Biotechnology Coordination Committee and the
        Genetic Engineering Appraisal Committee.
      </p>

      <a
        href="https://ibkp.dbtindia.gov.in/Registration/Index"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-full border border-[#A20202]/10 bg-[#fff7f7] px-5 py-2 text-sm font-medium text-[#A20202] transition hover:border-[#A20202]/20"
      >
        Learn more about RCGM
      </a>
    </Section>
  );
}