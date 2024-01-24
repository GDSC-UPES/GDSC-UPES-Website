import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { HiMiniMoon } from "react-icons/hi2";
import Logo from "../../assets/logos/gdsc-light.webp"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="flex flex-row">
        <img src={Logo} className="h-10 w-10 mr-2" />
        <div className={styles.logo}> <p className="mt-1 mr-3 font-semibold">GDSC UPES</p></div>
        </div>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/events">Events</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/team">Team</Link>
        </li>
      </ul>
      <button className={styles.button}><HiMiniMoon/></button>
    </nav>
  );
};

export default Navbar;
