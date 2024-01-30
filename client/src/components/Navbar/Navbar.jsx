import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { HiMiniMoon, HiMiniSun } from "react-icons/hi2";
import Logo from "../../assets/logos/gdsc-light.webp";
import { useDarkMode } from '../../DarkModeContext';
import gdscDark from "../../assets/logos/gdsc-dark.webp";
import gdscLight from '../../static/gdscLight.webp';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const gdscLogo = isDarkMode ? gdscDark : gdscLight;

  const [isNavVisible, setNavVisibility] = useState(false);


  return (
    <div className={`${isDarkMode ? 'bg-zinc-900' : ''}`}>
      <nav className={styles.navbar}>
        <div className={`flex flex-row ${isDarkMode ? 'text-white ' : ''}`}>
          <img src={gdscLogo} className="h-10 w-10 mr-2" />
          <div className={styles.logo}> <p className="mt-1 mr-3 font-semibold">GDSC UPES</p></div>
        </div>
        <ul className={`${styles.navLinks} ${isNavVisible ? styles.showNav : ''}`}>
          <li className={styles.navLink}>
            <Link to="/" style={{ color: isDarkMode ? 'white' : 'black' }} >Home</Link>
          </li>
          <li className={styles.navLink}>
            <Link to="/events" style={{ color: isDarkMode ? 'white' : 'black' }}>Events</Link>
          </li>
          <li className={styles.navLink}>
            <Link to="/team" style={{ color: isDarkMode ? 'white' : 'black', }}>Team</Link>
          </li>
        </ul>
        <button className={styles.button} onClick={toggleDarkMode}>
          {isDarkMode ? (
            <HiMiniMoon />
          ) : (
            <HiMiniSun  />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
