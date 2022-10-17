import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

export default function Home() {
  return (
    <div className={styles.container}>
     
      <main className={styles.main}>
        <div>Inloggning</div>
        
        <div>
        <input type="text"></input>
        </div>
        
        <div>
        <input type="password"></input>
        </div>
      </main>

     
    </div>
  )
}
