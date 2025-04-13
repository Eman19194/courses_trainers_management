import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { key } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    handleScroll();

    window.addEventListener("popstate", handleScroll);

    return () => {
      window.removeEventListener("popstate", handleScroll);
    };
  }, [key]);

  return null;
};

export default ScrollToTop;
