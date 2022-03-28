import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    function handleScroll() {
      const scroll = window.scrollY;
      console.log(scroll);

      setScrollPosition(scroll);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return scrollPosition;
};
