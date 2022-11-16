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
  return (
    <div>
      <main>
        <div className={styles.divEtt}>
          <h1>VÄLKOMMEN TILL GÖTEBORGS BÄSTA LAG</h1>
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
          <div className={styles.slideshowContainer}>
            <div className={styles.divTvåImg}>
              <img
                src="https://images2.imgbox.com/e1/cb/maYrjQ3c_o.png"
                alt="Tekning"
              />
              <p className={styles.textRuta}>Image 1</p>
            </div>
            <div className={styles.divTvåImg}>
              <img
                loading="lazy"
                src="https://images2.imgbox.com/e3/1a/F5RIaHRM_o.jpg"
                alt="Action"
              />
              <p className={styles.textRuta}>Image 2</p>
            </div>
            <div className={styles.divTvåImg}>
              <img
                loading="lazy"
                src="https://images2.imgbox.com/1d/b3/ojyjOczN_o.png"
                alt="Tackar alltid domarna och spelare för en bra match!"
              />
              <p className={styles.textRuta}>Image 3</p>
            </div>
            <div className={styles.divTvåImg}>
              <img
                loading="lazy"
                src="https://images2.imgbox.com/e3/8e/LlAQsP02_o.jpg"
                alt="Glada vinnare!"
              />
              <p className={styles.textRuta}>Image 4</p>
            </div>
            <a className={styles.prev} onclick="plusSlides(-1)">
              &#10094;
            </a>
            <a className={styles.next} onclick="plusSlides(1)">
              &#10095;
            </a>
          </div>
        </div>
        <div className={styles.dotsDiv}>
          <span className={styles.dot} onclick="currentSlide(1)"></span>
          <span className={styles.dotDiv} onclick="currentSlide(2)"></span>
          <span className={styles.dotDiv} onclick="currentSlide(3)"></span>
        </div>
        <div className={styles.divTre}></div>
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
