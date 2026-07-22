import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

/**
 * Keyboard shortcuts:
 *   G → GitHub, L → LinkedIn, E → Email, R → Resume, C → Contact
 * Only fires when no input/textarea/contenteditable is focused.
 */
export function KeyboardShortcuts() {
  const navigate = useNavigate();
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const tag = t.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || t.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      switch (e.key.toLowerCase()) {
        case "g":
          window.open("https://github.com/rashiuwu", "_blank", "noopener,noreferrer");
          break;
        case "l":
          window.open("https://www.linkedin.com/in/rashi-sawardekar-9ab835328", "_blank", "noopener,noreferrer");
          break;
        case "e":
          window.location.href = "mailto:rashi.sawardekar@somaiya.edu";
          break;
        case "r":
          navigate({ to: "/resume" });
          break;
        case "c":
          navigate({ to: "/contact" });
          break;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);
  return null;
}
