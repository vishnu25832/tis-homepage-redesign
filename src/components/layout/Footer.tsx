import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { contactInfo } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-bold text-slate-950 sm:h-12 sm:w-12 sm:text-sm">
                TIS
              </span>

              <div>
                <p className="text-sm font-semibold tracking-[0.16em]">
                  TULAS
                </p>

                <p className="text-[9px] tracking-[0.2em] text-white/50 sm:text-[10px]">
                  INTERNATIONAL SCHOOL
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-[13px] leading-6 text-white/55 sm:mt-6 sm:text-sm sm:leading-7">
              A modern boarding and day school in Dehradun focused on academic
              excellence, holistic development, and opportunities for students
              to grow.
            </p>

            <a
              href="https://admission.tis.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-slate-950 transition-transform duration-200 hover:scale-105 sm:mt-7 sm:text-sm"
            >
              Explore Admissions
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 sm:text-sm">
              Explore
            </h2>

            <nav className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="w-fit text-[13px] text-white/65 transition-colors duration-200 hover:text-white sm:text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 sm:text-sm">
              Contact
            </h2>

            <div className="mt-4 space-y-4 text-[13px] text-white/65 sm:mt-5 sm:space-y-5 sm:text-sm">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Phone
                  className="mt-0.5 shrink-0"
                  size={15}
                />

                <span>{contactInfo.phone}</span>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Mail
                  className="mt-0.5 shrink-0"
                  size={15}
                />

                <span className="break-all">
                  {contactInfo.email}
                </span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 shrink-0"
                  size={15}
                />

                <span className="leading-5 sm:leading-6">
                  {contactInfo.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 text-[10px] leading-5 text-white/40 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-6 sm:text-xs">
          <p className="max-w-full sm:max-w-none">
            © {new Date().getFullYear()} Tulas International School. All
            rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href="#top"
              className="transition-colors hover:text-white"
            >
              Back to top
            </a>

            <a
              href="https://tis.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              Official Website
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}