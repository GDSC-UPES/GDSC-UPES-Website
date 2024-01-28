import React from "react";
import styles from "./Footer.module.css";
import { RiInstagramLine, RiLinkedinBoxLine, RiFacebookBoxLine } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiHashnode, SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import personLeft from "../../assets/illustrations/footer-left-1.png"
import LogoLeft from "../../assets/illustrations/footer-left-2.png"
import personRight from "../../assets/illustrations/footer-right-1.png"
import LogoRight from "../../assets/illustrations/footer-right-2.png"
import { useDarkMode } from "../../DarkModeContext";

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <>
    <div className="bg-lineColor border-solid w-full h-[1.5px]"><hr></hr></div>
    
      <div className={`flex flex-row overflow-hidden ${ isDarkMode ? " bg-zinc-800 text-white" : ""}`}>
      <div className="flex flex-col w-[20%] max-xs:w-0">
        <div className="flex flex-row mt-10">
      <img
        src={personLeft}
        className="h-60 w-25 mt-20 "
        />
        <div className="flex-leading normal h-full">
        <img
        src={LogoLeft}
        className=""
        />
        </div>
        </div>
        </div>
      <div className={`flex flex-col  w-[70%] items-center justify-center mr-20 ${ isDarkMode ? "  text-white" : ""}`}>
      <div className={styles.footer}>
        <h2 className= {styles.header} >Thank you for your love and support!</h2> 
        <p className={styles.para}> <Link className={`text-sky-600 font-semibold ${ isDarkMode ? "  text-white" : ""}`}> Connect with us at gdscupes@gmail.com</Link></p>
        <div className={styles.socialMedia}  >
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
      </div>
      <div className="flex flex-col mr-10 mt-10 w-[10%] max-xs:w-0">
      <img
        src={LogoRight}
        className="h-15 mr-2 "
        />
      <img
        src={personRight}
        className="h-15 ml-10"
        />
        </div>
      </div>
    </>
  );
};

export default Footer;

