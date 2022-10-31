import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Axios from 'axios';

export default function Home() {
 
  const usernameRef = useRef() 
  const passwordRef = useRef()
  

  
  const registerUser = () =>  {
    
    fetch("http://127.0.0.1:4000/createUser", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
          
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify({
            username: usernameRef.current.value,
            password: passwordRef.current.value  
        })
    })
  }


  return (
    <div>
    <Navbar />
      <main className={styles.main}>
        <div>Inloggning</div>
        
        <div>
        <input placeholder='Username' type="text"ref={usernameRef} ></input>
        </div>
        
        <div>
        <input placeholder='Password' type="password" ref={passwordRef}></input>
        
        </div>
        <button onClick={registerUser}>Registrera</button>
        
        {/* <button onClick={ loginUser }>Login</button> */}
      </main>

     <Footer />
    </div>
  )
}
