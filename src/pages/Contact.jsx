import { useRef, useState } from "react";
import toast from "react-hot-toast";

const inputClassName =
  "mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm transition duration-200 placeholder:text-slate-400 focus:border-[#A20202] focus:outline-none focus:ring-2 focus:ring-[#A20202]/15 hover:border-slate-300";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setSuccess(false);

  try {
    const response = await fetch(
      "http://localhost:8000/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formRef.current.name.value,
          email: formRef.current.email.value,
          subject: formRef.current.subject.value,
          message: formRef.current.message.value,
          phone: formRef.current.phone.value,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {
      setSuccess(true);
      toast.success("Email sent successfully!", {
        duration: 6000,
      });
      formRef.current.reset();
    } else {
      toast.error(data.message || "Failed to submit form");
    }
  } catch (error) {
    console.error(error);
    toast.error("Failed to submit form");
  }

  setLoading(false);
};

  return (
    <section className="w-full bg-gradient-to-br from-white via-red-50/30 to-white px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-[#A20202]/90 animate-fade-slide-up">
          Get in touch
        </p>
        <h1 className="mt-2 text-center text-3xl font-bold tracking-tight text-slate-900 animate-fade-slide-up sm:text-4xl">
          <span className="bg-gradient-to-r from-[#A20202] to-[#FF5757] bg-clip-text text-transparent">
            Contact Us
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-base leading-relaxed text-slate-600 animate-fade-slide-up">
          We’d love to hear from you
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border border-red-200 bg-white p-6 shadow-md shadow-red-100/40 sm:p-8"
          >
            <Input label="Name" name="name" required />
            <Input label="Email" name="email" type="email" required />
            <Input label="Subject" name="subject" required />
            <Input label="Phone Number" name="phone" required />

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className={inputClassName}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#A20202] py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#8B0000] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#A20202]/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="space-y-6 rounded-3xl border border-red-200 bg-gradient-to-br from-[#A20202] to-[#7a0101] p-8 text-white shadow-lg shadow-red-200/30">
            <Info icon={LocationIcon}>
              Bioriidl Somaiya Vidyavihar
              <br />
              Opposite K.J Somaiya College of Science & Commerce,
              <br />
              Somaiya Vidyavihar University Vidyavihar East, Mumbai – 400077
            </Info>

            <Info icon={PhoneIcon}>+91 9545253001</Info>
            <Info icon={MailIcon}>riidl@somaiya.edu</Info>
            <Info icon={GlobeIcon}>
              <a
                href="https://www.bioriidl.org"
                className="underline-offset-2 transition hover:text-red-50 hover:underline"
              >
                www.riidl.org
              </a>
            </Info>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input {...props} className={inputClassName} />
    </div>
  );
}

function Info({ icon: Icon, children }) {
  return (
    <div className="flex items-start gap-3">
      <Icon />
      <p className="text-sm leading-relaxed text-white/95">{children}</p>
    </div>
  );
}

const iconClassName = "h-6 w-6 shrink-0 text-red-100";

const LocationIcon = () => (
  <svg
    className={iconClassName}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className={iconClassName}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    className={iconClassName}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg
    className={iconClassName}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);
