"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animation/ScrollReveal";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#07111f] text-white"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-12%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[110px] sm:top-[-20%] sm:h-[600px] sm:w-[600px] sm:blur-[140px]" />

        <div className="absolute bottom-[-10%] right-[-20%] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[100px] sm:bottom-[-15%] sm:right-[-10%] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />

        <div className="absolute left-[-20%] top-[35%] h-[250px] w-[250px] rounded-full bg-yellow-400/5 blur-[100px] sm:left-[-10%] sm:h-[350px] sm:w-[350px] sm:blur-[120px]" />
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:flex lg:min-h-screen lg:items-center lg:px-8 lg:pb-20 lg:pt-36">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Content */}
          <div className="max-w-3xl">
            {/* Admissions badge */}
            <ScrollReveal>
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md sm:mb-6 sm:gap-3 sm:px-4 sm:py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] sm:h-2 sm:w-2" />

                <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-[11px] sm:tracking-[0.2em]">
                  Admissions Open 2027
                </span>
              </div>
            </ScrollReveal>

            {/* School name */}
            <ScrollReveal delay={0.08}>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-300 sm:mb-5 sm:text-sm sm:tracking-[0.25em]">
                Tulas International School
              </p>
            </ScrollReveal>

            {/* Heading */}
            <ScrollReveal delay={0.14}>
              <h1 className="max-w-4xl text-[3.25rem] font-semibold leading-[0.91] tracking-[-0.055em] sm:text-6xl sm:leading-[0.95] md:text-7xl lg:text-[5.6rem]">
                Boarding and
                <span className="block text-white/45">Day School</span>
                Excellence.
              </h1>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal delay={0.2}>
              <p className="mt-6 max-w-xl text-[13px] leading-6 text-white/60 sm:mt-7 sm:text-base sm:leading-7 lg:text-lg">
                TIS combines a CBSE curriculum with academic excellence,
                holistic development, and opportunities that help students
                grow into confident global citizens.
              </p>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={0.26}>
              <div className="mt-7 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:gap-3">
                <a
                  href="https://admission.tis.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="group inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-full bg-white px-5 py-3 text-xs font-semibold text-slate-950 transition-transform duration-300 hover:scale-[1.03] sm:min-h-0 sm:px-6 sm:py-3.5 sm:text-sm"
                >
                  Explore Admissions

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-[17px] sm:w-[17px]"
                  />
                </a>

                <a
                  href="#about"
                  data-cursor-hover
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-xs font-medium text-white/80 backdrop-blur-md transition-colors duration-300 hover:border-white/30 hover:text-white sm:min-h-0 sm:px-6 sm:py-3.5 sm:text-sm"
                >
                  Discover TIS
                </a>
              </div>
            </ScrollReveal>

            {/* Supporting facts */}
            <ScrollReveal delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-5 sm:mt-12 sm:gap-x-8 sm:pt-6">
                <div>
                  <p className="text-lg font-semibold sm:text-xl">22</p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/40 sm:text-[11px]">
                    Acre Campus
                  </p>
                </div>

                <div>
                  <p className="text-lg font-semibold sm:text-xl">16+</p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/40 sm:text-[11px]">
                    Olympic Sports
                  </p>
                </div>

                <div>
                  <p className="text-lg font-semibold sm:text-xl">24×7</p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/40 sm:text-[11px]">
                    Medical Assistance
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Main image card */}
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-black/30 backdrop-blur-sm sm:rounded-[2rem] sm:p-3">
                <div className="relative min-h-[360px] overflow-hidden rounded-[1.15rem] bg-gradient-to-br from-emerald-300 via-cyan-200 to-slate-200 sm:min-h-[560px] sm:rounded-[1.5rem]">
                  <Image
                    src="/images/ladyInPink.png"
                    alt="Student at Tulas International School"
                    fill
                    priority
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 90vw, 50vw"
                    className="object-contain object-bottom"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/20 to-transparent" />
                </div>
              </div>

              {/* Floating information card */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -bottom-4 left-2 max-w-[175px] rounded-xl border border-white/10 bg-slate-950/90 p-3 shadow-2xl backdrop-blur-xl sm:-bottom-5 sm:-left-8 sm:max-w-[230px] sm:rounded-2xl sm:p-4"
              >
                <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-emerald-300 sm:text-[10px] sm:tracking-[0.2em]">
                  The TIS Experience
                </p>

                <p className="mt-1.5 text-[10px] leading-4 text-white/70 sm:mt-2 sm:text-sm sm:leading-6">
                  Academic learning, sports, creativity, leadership and
                  community.
                </p>
              </motion.div>

              {/* Decorative orbit */}
              <motion.div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-16 w-16 rounded-full border border-emerald-300/20 sm:-right-5 sm:-top-5 sm:h-24 sm:w-24"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span className="absolute right-1/2 top-[-3px] h-1.5 w-1.5 translate-x-1/2 rounded-full bg-emerald-300 sm:top-[-4px] sm:h-2 sm:w-2" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        data-cursor-hover
        aria-label="Scroll to the next section"
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white sm:flex"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown size={15} />
      </motion.a>
    </section>
  );
}