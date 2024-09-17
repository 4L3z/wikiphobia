import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li className={activeSection === "homepage" ? "active" : ""} data-name="INICIO">
          <a href="#homepage"></a>
        </li>
        <li className={activeSection === "maps" ? "active" : ""} data-name="MAPAS">
          <a href="#maps"></a>
        </li>
        <li className={activeSection === "ghosts" ? "active" : ""} data-name="FANTASMAS">
          <a href="#ghosts"></a>
        </li>
        <li className={activeSection === "objects" ? "active" : ""} data-name="OBJETOS">
          <a href="#objects"></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
