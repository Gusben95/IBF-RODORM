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
  https://thumbs2.imgbox.com/57/af/t7a2JAvS_t.png
 
  return (
    <nav>
      <div className={styles.logo}>
      {/* <img id="iconRorm" src="https://thumbs2.imgbox.com/57/af/t7a2JAvS_t.png"></img> 300px*/}
    {/* <img id="iconRorm" src="https://thumbs2.imgbox.com/aa/7a/6B7mj05k_t.png"></img> */}
        <ul className={styles.logo}>
          <li className="liNav">
          <img id="iconRorm" src="https://thumbs2.imgbox.com/aa/7a/6B7mj05k_t.png"></img>
          </li>
          
          <li className="liNav">
            <Link href="/">Home</Link>
          </li>
          <li className="liNav">
            <Link href="/laget">Laget</Link>
          </li>
          <li className="liNav">
            <Link href="/spelschema">Spelschema</Link>
          </li>
          <li className="liNav">
            <Link href="/profil">Profil</Link>
          </li>
          <li className="liNav">
            <Modal />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
