import styles from "./Navbar.module.css"
import Modal from "../Modal/Modal.js"; 
import Link from 'next/link'

const Navbar = () => {
   

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
    )
}

export default Navbar;
