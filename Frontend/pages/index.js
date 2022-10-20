import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useRef } from 'react';



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
            USERNAME: usernameRef.current.value,
            PASSWORD: passwordRef.current.value  
        })
    })
    // console.log(usernameRef.current.value)
    // console.log(passwordRef.current.value)
  }
  return (
    <div className={styles.container}>
     
      <main className={styles.main}>
        <div>Inloggning</div>
        
        <div>
        <input placeholder='Username' type="text" ref = {usernameRef}></input>
        </div>
        
        <div>
        <input placeholder='Password' type="password" ref = {passwordRef}></input>
        
        </div>
        <button onClick={registerUser}>Registrera</button>
      </main>

     
    </div>
  )
}
