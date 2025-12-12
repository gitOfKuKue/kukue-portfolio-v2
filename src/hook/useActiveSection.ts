"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      // Check if we are at the very top of the page (offset by a small amount for safety)
      if (window.scrollY < offset) {
        setActiveSection(""); // No specific section active (or "home" if you prefer)
        return;
      }

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is currently viewing (top is visible or just above viewport but bottom is still in view)
          // We add a generous offset to catch the section early as it scrolls into view
          if (rect.top <= offset + 50 && rect.bottom >= offset + 50) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
