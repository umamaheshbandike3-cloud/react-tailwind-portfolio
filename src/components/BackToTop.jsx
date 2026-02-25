import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 glass rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-300 z-50 group animate-fade-in"
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5 text-primary group-hover:translate-y-[-2px] transition-transform" />
    </button>
  );
};
