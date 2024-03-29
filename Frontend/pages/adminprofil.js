import Image from "next/image";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import styles from "../styles/adminprofil.module.css";
import { useRouter } from "next/router";

const adminprofil = () => {
  const [users, setUsers] = useState([]);
  const Router = useRouter(); 

  useEffect(() => {
    const fetchUsers = async() => {
      const response = await fetch("http://localhost:4000/getusers", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status == 400) {
        console.log("Kunde inte hämta spelare");
      } else if (response.status == 200) {
        const users = await response.json();
        setUsers(users);
        console.log("Hämtat användare");
      } else {
        console.log("something went wrong");
      }
    }
    fetchUsers();
  }, []);

  async function removeUser(userId){
    const res = await fetch ("http://localhost:4000/removeuser", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({userId})
      })
         if (res.status == 400) {
      }
      else if(res.status == 200 ){
      }
  }

  async function loggedIn() {
    const response = await fetch("http://localhost:4000/isLoggedIn", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (response.status == 200) {

        const data = await response.json(); 
        
        if (data.role != "BIGBOSS"){}
                {Router.push('/')}
    } else if (response.status == 400) {
        Router.push('/')
    }
  }
  loggedIn();

  const listUsers = users?.map((user) => {
  return <li key={user.userId}><p>{user.username}</p> <button onClick={() => removeUser(user.userId)}>Remove user</button></li>
})

  return (
    <>
      <div>
        <p>Användare</p>
      <div>
        <ul>
        {listUsers}
        </ul>
      </div>
      </div>
    </>
  );
};

export default adminprofil;
