"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animation/ScrollReveal";

const highlights = [
  "CBSE curriculum",
  "Boarding and day school",
  "Holistic student development",
  "Sports and co-curricular opportunities",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f4f5ef] py-20 text-slate-950 sm:py-28 lg:py-36"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full border border-slate-900/[0.04]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full border border-slate-900/[0.04]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Visual */}
          <ScrollReveal>
            <div className="relative mx-auto w-full max-w-lg">
              {/* Main card */}
              <div className="relative overflow-hidden rounded-[2rem] bg-[#081827] p-2.5 shadow-2xl shadow-slate-900/15 sm:p-3">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-emerald-200 via-cyan-100 to-slate-100 px-6 py-7 sm:px-9 sm:py-9">
                  {/* Decorative circles */}
                  <div
                    aria-hidden="true"
                    className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-slate-950/10"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full border border-slate-950/10"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute right-10 top-10 h-24 w-24 rounded-full border border-slate-950/[0.06]"
                  />

                  <div className="relative z-10 flex min-h-[370px] flex-col justify-between sm:min-h-[420px]">
                    {/* Heading */}
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-700/60 sm:text-[10px]">
                        TIS / DEHRADUN
                      </p>

                      <h3 className="mt-4 max-w-xs text-[2.25rem] font-semibold leading-[0.94] tracking-[-0.05em] text-slate-950 sm:text-5xl">
                        Learning
                        <span className="block text-slate-950/35">
                          beyond
                        </span>
                        classrooms.
                      </h3>
                    </div>

                    {/* Bottom stats */}
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-5xl font-semibold leading-none tracking-[-0.05em] text-slate-950 sm:text-6xl">
                          22
                        </p>

                        <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-700/60">
                          Acre campus
                        </p>
                      </div>

                      <motion.div
                        animate={{
                          rotate: [0, 7, -7, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-950/10 bg-white/45 backdrop-blur sm:h-20 sm:w-20"
                      >
                        <span className="text-[10px] font-semibold tracking-wide text-slate-950">
                          TIS
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -bottom-5 right-3 max-w-[190px] rounded-2xl border border-white/10 bg-slate-950 px-4 py-3.5 text-white shadow-xl sm:-bottom-6 sm:-right-7 sm:max-w-[220px] sm:px-5 sm:py-4"
              >
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">
                  School
                </p>

                <p className="mt-1 text-xs font-medium leading-5 sm:text-sm">
                  Academic + Holistic Growth
                </p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="lg:pt-2">
            <ScrollReveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-700 sm:text-xs">
                About TIS
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="mt-4 max-w-3xl text-[2.5rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:mt-5 sm:text-5xl lg:text-6xl">
                A school built around
                <span className="block text-slate-950/35">
                  the whole student.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
                Tulas International School brings together academic learning,
                residential life, sport, creativity, leadership, and personal
                development in a learning environment designed to help
                students grow with confidence.
              </p>
            </ScrollReveal>

            {/* Highlights */}
            <ScrollReveal delay={0.2}>
              <div className="mt-7 grid gap-2.5 sm:mt-9 sm:grid-cols-2 sm:gap-3">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex min-h-[58px] items-center gap-3 rounded-2xl border border-slate-900/10 bg-white/60 px-3.5 py-3.5 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white sm:px-4 sm:py-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white">
                      <Check size={13} strokeWidth={2.5} />
                    </span>

                    <span className="text-xs font-medium leading-5 text-slate-700 sm:text-sm">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Link */}
            <ScrollReveal delay={0.26}>
              <a
                href="https://tis.edu.in/"
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="group mt-8 inline-flex items-center gap-3 text-xs font-semibold text-slate-950 sm:mt-9 sm:text-sm"
              >
                Learn more about TIS

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-950/15 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-9 sm:w-9">
                  <ArrowUpRight size={15} />
                </span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}