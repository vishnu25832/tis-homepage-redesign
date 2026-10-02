"use client";

import {
  ArrowUpRight,
  Dumbbell,
  Home,
  Library,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animation/ScrollReveal";

const experiences = [
  {
    number: "01",
    icon: Home,
    title: "Boarding Life",
    description:
      "A residential environment where learning, relationships, independence, and daily life come together.",
  },
  {
    number: "02",
    icon: Dumbbell,
    title: "16+ Sports",
    description:
      "Students can explore a wide range of sports and develop discipline, teamwork, and confidence.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Clubs & Societies",
    description:
      "Activities beyond academics give students opportunities to discover interests and develop new skills.",
  },
  {
    number: "04",
    icon: Library,
    title: "Learning Spaces",
    description:
      "Libraries, laboratories, digital workstations, and dedicated learning spaces support everyday study.",
  },
];

export default function CampusLifeSection() {
  return (
    <section
      id="campus-life"
      className="relative overflow-hidden bg-[#f4f5ef] py-20 text-slate-950 sm:py-28 lg:py-36"
    >
      {/* Decorative elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full border border-slate-950/5" />

        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full border border-slate-950/5" />

        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <ScrollReveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-700 sm:text-xs">
                Campus Life
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500 sm:mt-6">
                At TIS, school life extends beyond the classroom through
                residential life, sport, activities, and shared experiences.
              </p>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="max-w-4xl text-[2.5rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Where everyday life
                <span className="block text-slate-950/30">
                  becomes part of learning.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
                From academic spaces to sports and residential life, the TIS
                campus gives students opportunities to learn, participate,
                collaborate, and build confidence beyond traditional lessons.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Main visual */}
        <ScrollReveal delay={0.12}>
          <div className="relative mt-14 overflow-hidden rounded-[1.75rem] bg-[#07111f] p-2.5 shadow-2xl shadow-slate-950/10 sm:mt-20 sm:rounded-[2rem] sm:p-3">
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-[#173247] via-[#0d2431] to-[#07111f] p-6 text-white sm:min-h-[420px] sm:rounded-[1.5rem] sm:p-10 lg:min-h-[500px] lg:p-12">
              {/* Grid */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                  }}
                />
              </div>

              {/* Animated circles */}
              <motion.div
                aria-hidden="true"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-emerald-300/30"
              />

              <motion.div
                aria-hidden="true"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-10 right-1/4 h-32 w-32 rounded-full border border-white/10"
              />

              <div className="relative z-10 flex min-h-[330px] flex-col justify-between sm:min-h-[390px] lg:min-h-[440px]">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-emerald-300 sm:text-[10px]">
                      TIS / STUDENT EXPERIENCE
                    </p>

                    <h3 className="mt-4 max-w-2xl text-[2.5rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:mt-5 sm:text-5xl lg:text-6xl">
                      Learn.
                      <span className="text-white/30"> Live.</span>
                      <br />
                      Explore.
                    </h3>
                  </div>

                  <div className="hidden rounded-full border border-white/10 px-4 py-2 text-xs text-white/50 sm:block">
                    Dehradun
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-3 sm:items-end sm:gap-8">
                  <div>
                    <p className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                      22
                    </p>

                    <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/40 sm:text-[10px]">
                      Acre campus
                    </p>
                  </div>

                  <div>
                    <p className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                      16+
                    </p>

                    <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/40 sm:text-[10px]">
                      Sports
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-xs leading-6 text-white/50 sm:text-sm">
                      Academic spaces
                      <br />
                      Residential life
                      <br />
                      Sports & activities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Experience cards */}
        <div className="mt-10 grid border-l border-t border-slate-950/10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <ScrollReveal
                key={experience.number}
                delay={index * 0.08}
              >
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="group relative min-h-[250px] border-b border-r border-slate-950/10 p-5 sm:min-h-[280px] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium tracking-[0.18em] text-slate-950/25 sm:text-xs">
                      {experience.number}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-950/10 text-emerald-700 transition-all duration-300 group-hover:border-emerald-700/30 group-hover:bg-emerald-700 group-hover:text-white sm:h-10 sm:w-10">
                      <Icon size={17} strokeWidth={1.6} />
                    </div>
                  </div>

                  <div className="mt-12 sm:mt-20">
                    <h3 className="text-lg font-medium leading-6 tracking-[-0.02em] sm:text-xl">
                      {experience.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-slate-500 sm:mt-4 sm:text-sm">
                      {experience.description}
                    </p>
                  </div>

                  <div className="absolute bottom-5 left-5 h-px w-0 bg-emerald-700 transition-all duration-500 group-hover:w-16 sm:bottom-7 sm:left-7" />
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col gap-5 border-t border-slate-950/10 pt-7 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-8">
            <div>
              <p className="text-sm font-medium text-slate-900">
                Discover life beyond academics
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                Explore the facilities and activities available at TIS.
              </p>
            </div>

            <a
              href="https://tis.edu.in/boarding-life/facilities/"
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-slate-950/15 px-5 py-3 text-sm font-medium transition-colors duration-300 hover:border-slate-950/30 hover:bg-white"
            >
              Explore Campus Life

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}