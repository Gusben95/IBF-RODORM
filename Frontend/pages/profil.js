import { useState, useEffect } from "react";

export default function Profil() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loggedIn() {
      const response = await fetch("http://localhost:4000/isLoggedIn", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status == 400) {
        console.log("Inte inloggad");
      } else if (response.status == 200) {
        const data = await response.json();
        setUser(data);
        console.log(data);
        console.log("Inloggad med token verifierad");
      } else {
        console.log(response);
        console.log("something went wrong");
      }
    }
    loggedIn();
  }, []);

  return (
    <div>
      <p>Information om dig själv o sånt Profil</p>
      <div>
        {user.username ? (
          <>
            <p>välkommen</p>
            <p>{user.username}</p>
          </>
        ) : (
          <>
            <p>Du är inte inloggad</p>
            <p>gå till login</p>
          </>
        )}
      </div>
    </div>
  );
}
