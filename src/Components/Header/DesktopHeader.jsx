import React, { useEffect, useRef } from "react";
import styles from "../../StyleSheets/Header/Header.module.css";
import Logo from "../../Assets/Image/logo.png";
import {changeBackground} from "./Header.ViewModel"

const DesktopHeader = () => {

  const headerRef = useRef(null)

  useEffect(() => {
    changeBackground(headerRef)
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles["nav-wrapper"]} ref={headerRef}>
        <div className={styles.brand}>
          <img src={Logo} />
        </div>

        <div className={styles["nav-center-items"]}>
          <a href="/">Home</a>
          <a href="#">Pricing</a>
          <a href="/about-us">AboutUs</a>
          <a href="/contact-us">ContactUs</a>
          <a href="/trainers">Trainers</a>
        </div>
        <div className={styles["nav-right-items"]}>
          <a href="#">Login</a>
          <a href="/sign-up" className={styles["sign-up"]}>
            SignUp
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
