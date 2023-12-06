import { useState, useEffect } from "react";

function useScroll() {
  const [page, setPage] = useState(1);

  const scrollTrigger = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollTrigger);

    return () => {
      window.removeEventListener("scroll", scrollTrigger);
    };
  }, []);

  return page;
}

export default useScroll;
