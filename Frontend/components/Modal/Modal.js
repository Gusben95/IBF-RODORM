import styles from "./Modal.module.css";
import { useState, useRef } from "react";
import axios from "axios";
import {useRouter} from "next/router";



const Modal = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  //gör en färdig för axios, googla baseurl

  const loginUser = async () => {
    const response = await fetch("http://localhost:4000/loginUser", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }),
    });
    if (response.status === 200){
      router.push('/profil');
      return
    }
    const data = await response.json();
    console.log(data);
     
  };

  async function loggedIn() {
    const response = await fetch("http://localhost:4000/isLoggedIn", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.status); 
    if (response.status == 200) {
    } else if (response.status == 400) {
    }
  }

  const loggOut = () => {
    fetch("http://localhost:4000/loggOut", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
  };

  const registerUser = () => {
    fetch("http://localhost:4000/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }),
    });
  }
  /* 
      const registerChef = async () => {
        e.preventDefault();
    
        const { username, password } = document.forms[0];
    
        const response = await fetch("http://127.0.0.1:4000/createUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:JSON.stringify({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            role: "Chef",
          }),
        });
    }

        const data = await response.json(); */

  /* const logoutUser = () => {
        fetch("http://127.0.0.1:4000/logoutUser", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
    } */

  /*   module.exports = {
      async redirects() {
        return [
          {
            source: '/about',
            destination: '/',
            permanent: true,
          },
        ]
      },
    } */

  return (
    <div>
      {showModal && (
        <div
          className={styles.bg}
          onClick={() => {
            setShowModal(false);
          }}
        >
          <div
            className={styles.modal}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1 className={styles.textLoggaIn}>Logga in</h1>
            <p
              className={styles.exit}
              onClick={() => {
                setShowModal(false);
              }}
            >
              X
            </p>
            <input type="email" placeholder="Email" ref={usernameRef}></input>
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
            ></input>
            <button
              className={styles.loginBtn}
              type="submit"
              onClick={loginUser}
            >
              Logga in
            </button>
            <div>
              <button
                className={styles.registerBtn}
                type="submit"
                onClick={registerUser}
              >
                Registrera
              </button>
            </div>
            <div>
              <button onClick={loggOut}>Logga ut</button>
            </div>
            <button onClick={loggedIn}>Testa</button>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Logga in
      </button>
    </div>
  );
};

export default Modal;
