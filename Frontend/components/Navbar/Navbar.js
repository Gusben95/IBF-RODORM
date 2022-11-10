import styles from "./Navbar.module.css";
import Modal from "../Modal/Modal.js";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
/*   useEffect(() => {
    async function loggedIn() {
      const response = await fetch("http://localhost:4000/isLoggedIn", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (response.success == false) {
        console.log("Inte inloggad");
        } else if (response.status == 200) {
        const data = await response.json();
        console.log(data)
        console.log("Inloggad med token verifierad");        
      } else {
        console.log(response)
        console.log("something went wrong")
      }
    }
    loggedIn();
  }, []); */

  return (
    <nav>
      <div className={styles.logo}>
        <ul className={styles.logo}>
          <li className="liNav">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/laget">Laget</Link>
          </li>
          <li>
            <Link href="/spelschema">Spelschema</Link>
          </li>
          <li>
            <Link href="/profil">Profil</Link>
          </li>
          <li>
            <Modal />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
