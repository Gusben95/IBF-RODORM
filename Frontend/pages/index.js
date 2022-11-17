import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";

import Axios from "axios";

/*
https://images2.imgbox.com/e1/cb/maYrjQ3c_o.png tekning
https://images2.imgbox.com/e3/1a/F5RIaHRM_o.jpg action 
https://images2.imgbox.com/1d/b3/ojyjOczN_o.png tackar matchen
https://images2.imgbox.com/e3/8e/LlAQsP02_o.jpg glada men trötta 
 */

export default function Home() {
  //en div för bilderna, sen overflow-scroll with 100%, ligger i diven, kan bara slida

  return (
    <div>
      <main>
        <div className={styles.divEtt}>
          <h1>VÄLKOMMEN TILL GÖTEBORGS BÄSTA VIKINGALAG</h1>
          <p className={styles.pEtt}>
            IBF Rödeorm startades 2019 av ett gäng som tidigare spelat innebandy
            samt andra som följt med bara för att ha kul. Vi har alltid behov av
            nya spelare så tveka inte att höra av dig för att provträna!
          </p>
          <p className={styles.pEtt}>
            Vi spelar i division 1 Göteborgs Korpen och det spelas i
            lundbystrandshallen.
          </p>
        </div>
        <div className={styles.divTvåBakgrund}>
          <div className={styles.divTvåImg}>
            <img className={styles.tekning}
              src="https://images2.imgbox.com/e1/cb/maYrjQ3c_o.png"
              alt="Tekning"
            />

            <img className={styles.tekning}
              loading="lazy"
              src="https://images2.imgbox.com/e3/1a/F5RIaHRM_o.jpg"
              alt="Action"
            />

            <img className={styles.tekning}
              loading="lazy"
              src="https://images2.imgbox.com/1d/b3/ojyjOczN_o.png"
              alt="Tackar alltid domarna och spelare för en bra match!"
            />

            <img className={styles.tekning}
              loading="lazy"
              src="https://images2.imgbox.com/e3/8e/LlAQsP02_o.jpg"
              alt="Glada vinnare!"
            />
          </div>
        </div>
        <div className={styles.divTre}>
          <p>Några goa matchbilder från vikingarnas fälttåg</p>
        </div>
      </main>
    </div>
  );
}

{
  /* <div className={styles.divTvåImg}>
          <img
            className={styles.tekning}
            loading="lazy"
            src="https://images2.imgbox.com/e1/cb/maYrjQ3c_o.png"
          ></img>
          <img
            className={styles.tekning}
            loading="lazy"
            src="https://images2.imgbox.com/e3/1a/F5RIaHRM_o.jpg"
          ></img>
          <img
            className={styles.tekning}
            loading="lazy"
            src="https://images2.imgbox.com/1d/b3/ojyjOczN_o.png"
          ></img>
          <img
            className={styles.tekning}
            loading="lazy"
            src="https://images2.imgbox.com/e3/8e/LlAQsP02_o.jpg"
          ></img>
        </div> */
}
