import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>GDSC UPES</div>
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
        <li className={styles.navLink}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button className={styles.button}></button>
    </nav>
  );
};

export default Navbar;
