import styles from "./Footer.module.css";

import { ReactElement } from "react";
import {
  faFacebook,
  faInstagram,
  fa2x
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className={styles.footerDiv}>
      <p id={styles.p}>Copyright 2022 IBF RÖDEORM</p>
      <a id={styles.a} href="https://www.facebook.com/Ibfrodeorm">
        <FontAwesomeIcon icon={ faFacebook } size="3x"/>
      </a>
      <a id={styles.a} href="https://www.instagram.com/ibfrodeorm/">
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
      <p id={styles.a}>ibfrodeorm@gmail.com</p>
      
      
    </div>
  );
};

export default Footer;
