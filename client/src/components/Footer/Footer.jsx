import React from "react";
import styles from "./Footer.module.css";
import { RiInstagramLine, RiLinkedinBoxLine, RiFacebookBoxLine } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiHashnode, SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <h2 className={styles.header}>Thank you for your love and support!</h2>
        <p className={styles.para}>Connect with us</p>

        <div className={styles.socialMedia}>
          <Link
            to="https://twitter.com"
            className={`${styles.socialMediaIcon} ${styles.twitter}`}
          >
            <FaSquareXTwitter />
          </Link>
          <Link
            to="https://instagram.com/"
            className={`${styles.socialMediaIcon} ${styles.instagram}`}
          >
            <RiInstagramLine />
          </Link>
          <Link
            to="https://linkedin.com/"
            className={`${styles.socialMediaIcon} ${styles.linkedin}`}
          >
            <RiLinkedinBoxLine />
          </Link>
          <Link
            to="https://facebook.com/"
            className={`${styles.socialMediaIcon} ${styles.facebook}`}
          >
            <RiFacebookBoxLine />
          </Link>
          <Link
            to="https://hashnode.com/"
            className={`${styles.socialMediaIcon} ${styles.hashnode}`}
          >
            <SiHashnode />
          </Link>
          <Link
            to="https://github.com/"
            className={`${styles.socialMediaIcon} ${styles.github}`}>
            <SiGithub />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
