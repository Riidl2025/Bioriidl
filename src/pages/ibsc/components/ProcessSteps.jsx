import ProcessBox from "./ProcessBox";

export default function ProcessSteps() {
  return (
    <div className="grid gap-6 md:grid-cols-2">

      <ProcessBox title="Steps for Application Process">
        <ol className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <li>
            1. Download the application form from the IBSC Protocol
            Form link.
          </li>

          <li>
            2. Submit a hard copy to the Member Secretary, RIIDL
            Foundation, and a soft copy via email to{" "}
            <a
              href="mailto:bhavna.pandya@somaiya.edu"
              className="text-[#A20202] underline underline-offset-2"
            >
              bhavna.pandya@somaiya.edu
            </a>{" "}
          </li>

          <li>
            3. Submit applications at least 30 days prior to scheduled
            IBSC meetings.
          </li>

          <li>
            4. Principal Investigators must inform IBSC of rDNA, GMO,
            or LMO work before applying for external grants.
          </li>
        </ol>

        <div className="flex flex-wrap gap-3 pt-5">
          <a
            href="https://ird.iitd.ac.in/IRD/IBSC_Protocol_Form.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#A20202]/10 bg-[#fff7f7] px-4 py-2 text-xs font-medium text-[#A20202]"
          >
            Recombinant DNA Safety Guidelines (Experiment categories)
          </a>

          <a
            href="https://dbtindia.gov.in/sites/default/files/uploadfiles/Regulations_%26_Guidelines_for_Reocminant_DNA_Research_and_Biocontainment%2C2017.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#A20202]/10 bg-[#fff7f7] px-4 py-2 text-xs font-medium text-[#A20202]"
          >
            Risk categories of microorganisms
          </a>

          <a
            href="https://dbtindia.gov.in/sites/default/files/uploadfiles/Regulations_%26_Guidelines_for_Reocminant_DNA_Research_and_Biocontainment%2C2017.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#A20202]/10 bg-[#fff7f7] px-4 py-2 text-xs font-medium text-[#A20202]"
          >
            Responsibilities of Principal Investigators
          </a>
        </div>
      </ProcessBox>

      <ProcessBox title="Steps for Selection Process">
        <ol className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <li>
            1. IBSC schedules a meeting and informs the applicant at
            least 15 days in advance.
          </li>

          <li>
            2. Applicant presents the proposal during the IBSC
            meeting.
          </li>

          <li>
            3. Decision is communicated within one week after the
            meeting.
          </li>
        </ol>

        <p className="pt-5 text-sm text-slate-600">
          <span className="font-semibold text-slate-900">Note: </span>
          Applicants are advised to review Indian Biosafety Rules &amp;
          Regulations.
        </p>

        <a
          href="https://dbtindia.gov.in/sites/default/files/uploadfiles/Regulations_%26_Guidelines_for_Reocminant_DNA_Research_and_Biocontainment%2C2017.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 pt-4 text-sm font-medium text-[#A20202] hover:underline"
        >
          Indian Biosafety Rules &amp; Regulations →
        </a>
      </ProcessBox>

    </div>
  );
}