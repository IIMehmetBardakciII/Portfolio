"use client";

import { useEffect, useState } from "react";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Scroll position window height'ı aştığında navigasyon menüsünü görünür yapın
      if (scrollPosition > windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${isVisible ? "block" : "hidden"}`}>
      <ul className="text-white bg-primary w-fit drop-shadow-custom top-[500px] right-[30px] fixed font-vt323  z-50">
        <li className="hover:bg-primaryExtraDark w-full px-8 text-2xl">
          <a href="#">Home</a>
        </li>
        <li>
          <a
            href="#MyProjects"
            className="hover:bg-primaryExtraDark w-full px-8 text-2xl"
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#About"
            className="hover:bg-primaryExtraDark w-full px-8 text-2xl"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className="hover:bg-primaryExtraDark w-full px-8 text-2xl"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
