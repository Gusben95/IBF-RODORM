import Image from "next/image";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

import styles from "../styles/laget.module.css";

const laget = () => {
  const [players, setPlayer] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
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
        const playerData = await response.json();
        setPlayer(playerData);
        console.table(playerData);
        console.log("Hämtat spelare");
      } else {
        console.log(response);
        console.log("something went wrong");
      }
    };
    fetchPlayers();
  }, []);

  const listPlayers = players?.map((spelare) => {
    return (
      <li className={styles.liPlayers} key={spelare.playersId}>
        <p>{spelare.playername}</p>
        {parse(spelare.position)}
        {parse(spelare.playerinformation)}{" "}
        <img loading="lazy" className={styles.images} src={spelare.images} />
      </li>
    );
  });

  /* list-style: none; */
  /* const playersList = [];
  for (let i = 0; i < playerData.length; i++) {
  } */

  return (
    <>
      <div>
        <h1 id="h1Truppen">Truppen</h1>
        <div>
          <ul className={styles.ulPlayers}>
            <li>{listPlayers}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default laget;
