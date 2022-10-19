import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function Home() {
  
  const router = useRouter();

  return (
    <div>
    <Navbar />
      <main className={styles.main}>
        <div>Inloggning</div>
        
        <div>
        <input placeholder="Username" type="text"></input>
        </div>
        
        <div>
        <input placeholder="Password" type="password"></input>
        </div>
      </main>

     <Footer />
    </div>
  )
}
