import React from "react";
import styles from "./Home.module.scss";
import Header from "../Header";
import TechStack from "../TechStack";
import Portfolio from "../Portfolio";
import backgroundVideo from "../../video.mp4";
import { Router} from "@reach/router";



const Home = () => {
  return (
    <div className={styles.container}>
          <Header />
        <div className={styles.videoContainer}>
          <video className= {styles.videoBG} autoPlay muted loop playsinline src={backgroundVideo} type=""></video>
          <article className = {styles.heroText}> 
              <p>Frank McNulty </p> <p><span class = "typing">Software Developer<span class = "blinking">.</span></span></p>
          </article>
        </div>
        <TechStack />
        <Portfolio />

        
    </div>
  );
};

export default Home;
