"use client";

import {
  ArrowUpRight,
  Brain,
  Lightbulb,
  Monitor,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animation/ScrollReveal";

const academicFeatures = [
  {
    number: "01",
    icon: Brain,
    title: "Reasoning & Critical Thinking",
    description:
      "The curriculum prioritises reasoning and analytical thinking over rote memorisation.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Innovative Learning",
    description:
      "Project-based and art-integrated learning encourages creativity, curiosity, and critical thinking.",
  },
  {
    number: "03",
    icon: Monitor,
    title: "Technology-Enhanced Learning",
    description:
      "Digital classrooms and technology-supported learning help make classroom experiences more engaging.",
  },
  {
    number: "04",
    icon: Users,
    title: "Experiential Learning",
    description:
      "Educational activities, seminars, quests, and practical experiences connect learning with the world beyond the classroom.",
  },
];

export default function AcademicsSection() {
  return (
    <section
      id="academics"
      className="relative overflow-hidden bg-[#07111f] py-20 text-white sm:py-28 lg:py-36"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-white/10" />

        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 top-20 h-96 w-96 rounded-full border border-emerald-400/10"
        />

        <div className="absolute left-0 top-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <ScrollReveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-400 sm:text-xs">
                Academics
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/45 sm:mt-6">
                A CBSE-based learning environment designed to develop
                knowledge, reasoning, creativity, and practical skills.
              </p>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="max-w-4xl text-[2.5rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Academic excellence
                <span className="block text-white/30">
                  with a wider perspective.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
                TIS follows the CBSE course structure while incorporating
                approaches that encourage analytical thinking, creativity,
                technology-supported learning, and meaningful experiences
                beyond traditional classroom instruction.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid border-l border-t border-white/10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {academicFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <ScrollReveal
                key={feature.number}
                delay={index * 0.08}
              >
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group relative min-h-[270px] border-b border-r border-white/10 p-5 sm:min-h-[300px] sm:p-8"
                >
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium tracking-[0.18em] text-white/25 sm:text-xs">
                      {feature.number}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-emerald-400 transition-colors duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10 sm:h-10 sm:w-10">
                      <Icon size={17} strokeWidth={1.6} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-12 sm:mt-20">
                    <h3 className="max-w-[220px] text-lg font-medium leading-6 tracking-[-0.02em] sm:text-xl">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-white/45 sm:mt-4 sm:text-sm">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover line */}
                  <div className="absolute bottom-5 left-5 h-px w-0 bg-emerald-400 transition-all duration-500 group-hover:w-16 sm:bottom-7 sm:left-7" />
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:mt-12 sm:gap-6 sm:pt-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-white/80">
                Explore the TIS academic approach
              </p>

              <p className="mt-1 text-xs leading-5 text-white/35 sm:text-sm">
                Discover curriculum, pedagogy, and learning opportunities.
              </p>
            </div>

            <a
              href="https://tis.edu.in/academics/affilation/"
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition-colors duration-300 hover:border-emerald-400/40 hover:bg-white/5"
            >
              Explore Academics

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-950 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}