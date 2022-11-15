import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Axios from 'axios';


export default function Home() {
 


  return (
    <div>
    
      <main className={styles.main}>
        <div>Klicka på modal för att registrera och logga</div>
        
      </main>

     
    </div>
  )
}
