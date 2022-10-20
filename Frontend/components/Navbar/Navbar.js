import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav>
            <div className={styles.logo}>
            <h1 id={styles.txt}>IBF RÖDEORM</h1>
            <p id={styles.p}>Home</p>
            <p id={styles.p}>Information</p>
            <p id={styles.p}>Laget</p>
            <p id={styles.p}>Profile</p>
            </div>
        </nav>
    )
}

export default Navbar;
