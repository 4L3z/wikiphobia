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
      <ul className="navbar-list">
        <li className={`navbar-item ${activeSection === "" ? "active" : ""}`} data-name="INICIO">
          <a href="#homepage"></a>
        </li>
        <li className={`navbar-item ${activeSection === "maps" ? "active" : ""}`} data-name="MAPAS">
          <a href="#maps"></a>
        </li>
        <li className={`navbar-item ${activeSection === "ghosts" ? "active" : ""}`} data-name="FANTASMAS">
          <a href="#ghosts"></a>
        </li>
        <li className={`navbar-item ${activeSection === "objects" ? "active" : ""}`} data-name="OBJETOS">
          <a href="#objects"></a>
        </li>
        <li className={`navbar-item ${activeSection === "c-objects" ? "active" : ""}`} data-name="OBJETOS MALDITOS">
          <a href="#c-objects"></a>
        </li>
        <li className={`navbar-item ${activeSection === "tips" ? "active" : ""}`} data-name="CONSEJOS">
          <a href="#tips"></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
