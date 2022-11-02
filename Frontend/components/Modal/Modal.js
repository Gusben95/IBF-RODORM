import styles from "./Modal.module.css"
import { useState , useRef} from "react";
import axios from "axios";

/*  const myAxios = axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true,
}) */

const Modal = () => { 
    const usernameRef = useRef() 
    const passwordRef = useRef()
    const [showModal, setShowModal] = useState(false); 
   
//gör en färdig för axios, googla baseurl 

    const loginUser = async () =>  {
       

      const response = await fetch("http://localhost:4000/loginUser", {
            method: "POST",
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            
            },
            body:JSON.stringify({
                username: usernameRef.current.value,
                password: passwordRef.current.value  
            })
        })
        const data =  await response.json()
        console.log(data)
    }

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

      /* const logoutUser = () => {
        fetch("http://127.0.0.1:4000/logoutUser", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
    } */
      
    
return (
    <div>
        {showModal && 
        ( 
            <div className = {styles.bg} onClick = {() => {setShowModal(false)}}>
            <div className = {styles.modal} onClick = {(e) => {e.stopPropagation()}}> 
            <h1>Logga in</h1>
            <p className = {styles.exit} onClick = {() => {setShowModal(false)}}>X</p>
            <input type = "email" placeholder="Email" ref = {usernameRef}></input>
            <input type = "password" placeholder="Password" ref = {passwordRef}></input>
            <button type = "submit" onClick = {loginUser}>Logga in</button>
            <div> 
            <button type = "submit" onClick={registerUser}>Registrera</button>
            </div>
            <div>
            <button>Logga ut</button>
            </div>
            </div>
            
            </div>
        )}
   
    <button onClick = {() => {setShowModal(true)}}>Logga in</button>
    </div>
) 




}

export default Modal;