import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Axios from 'axios';

export default function Home() {
 
  // const usernameRef = useRef() 
  // const passwordRef = useRef()
  
  /* const registerUser = () => {
    Axios.post('http://localhost4000/createUser', {
      username: usernameRef,
      password: passwordRef,
      body:JSON.stringify({
        USERNAME: usernameRef.current.value,
        PASSWORD: passwordRef.current.value,
    }).then((response) => {
      console.log(response);
    })
  })
  } */
  
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
    /* // console.log(usernameRef.current.value)
    // console.log(passwordRef.current.value) */
  }

  // const loginUser = () =>  {
    
  //   fetch("http://127.0.0.1:4000/loginUser", {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'application/json'
          
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body:JSON.stringify({
  //           username: usernameRef.current.value,
  //           password: passwordRef.current.value  
  //       })
  //   })
  // }

  return (
    <div>
    <Navbar />
      <main className={styles.main}>
        {/* <div>Inloggning</div>
        
        <div>
        <input placeholder='Username' type="text" ></input>
        </div>
        
        <div>
        <input placeholder='Password' type="password"></input>
        
        </div>
        <button onClick={registerUser}>Registrera</button> */}
        
        {/* <button onClick={ loginUser }>Login</button> */}
      </main>

     <Footer />
    </div>
  )
}
