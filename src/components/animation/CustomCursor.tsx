"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  const cursorY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    const updateDevice = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateDevice();

    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true);
      }
    };

    const handlePointerOut = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("pointerout", handlePointerOut);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
    };
  }, [isDesktop, mouseX, mouseY]);

  if (!isDesktop) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[110] rounded-full border border-emerald-400"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovering ? 48 : 24,
        height: isHovering ? 48 : 24,
        opacity: isHovering ? 0.7 : 0.45,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    />
  );
}