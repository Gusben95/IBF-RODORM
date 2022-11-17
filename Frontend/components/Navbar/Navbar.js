import styles from "./Navbar.module.css";
import Modal from "../Modal/Modal.js";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {

  return (
    <nav>
      <div>
        <ul className={styles.logo}>
          <li className={styles.liNav}>
          <img id="iconRorm" src="https://thumbs2.imgbox.com/aa/7a/6B7mj05k_t.png"></img>
          </li>
          <li className={styles.liNav}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.liNav}>
            <Link href="/laget">Laget</Link>
          </li>
          <li className={styles.liNav}>
            <Link href="/spelschema">Spelschema</Link>
          </li>
          <li className={styles.liNav}>
            <Link href="/profil">Profil</Link>
          </li>
          <li className={styles.liNav}>
            <Modal />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
