import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "../styles/laget.module.css";

const laget = () => {
  const [players, setPlayer] = useState({});

  useEffect(() => {
    async function fetchPlayers() {
      const response = await fetch("http://localhost:4000/players", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status == 400) {
        console.log("Kunde inte hämta spelare");
      } else if (response.status == 200) {
        const data = await response.json();
        setPlayer(data);
        console.log(data);
        console.log("Hämtat spelare");
      } else {
        console.log(response);
        console.log("something went wrong");
      }
    }
    fetchPlayers();
  }, []);

  return (
    <>
      <div>
        <p>Truppen</p>
        <div>
          {/* ta understa länken på imgbox i Html */}
          <Image
            src="https://images2.imgbox.com/ea/1c/cFfcitTj_o.jpg"
            alt="/"
            width="300"
            height="200"
            priority
          />
        </div>

        
        <div></div>
      </div>
    </>
  );
};

export default laget;
