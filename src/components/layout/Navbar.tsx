"use client";

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        {/* Navbar */}
        <nav className="relative z-[110] flex items-center justify-between rounded-full border border-white/15 bg-black/70 px-4 py-3 text-white shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-6">
          {/* Brand */}
          <a
            href="#top"
            onClick={closeMenu}
            className="flex items-center gap-3"
            aria-label="Tulas International School home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white text-sm font-bold tracking-tight text-slate-950">
              TIS
            </span>

            <span className="hidden text-sm font-semibold tracking-[0.16em] sm:block">
              TULAS
              <span className="block text-[10px] font-normal tracking-[0.24em] text-white/60">
                INTERNATIONAL SCHOOL
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/75 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+919837983791"
              className="flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
            >
              <Phone size={15} />
              <span>Call Us</span>
            </a>

            <a
              href="https://admission.tis.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:scale-105"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <div className="relative z-[105] mt-2 overflow-hidden rounded-3xl border border-white/10 bg-black/95 text-white shadow-2xl backdrop-blur-xl lg:hidden">
            <div className="flex flex-col px-5 py-3">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-white/10 py-4 text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="tel:+919837983791"
                onClick={closeMenu}
                className="flex items-center gap-2 py-4 text-sm text-white/80"
              >
                <Phone size={15} />
                +91 98379 83791
              </a>

              <a
                href="https://admission.tis.edu.in/"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}