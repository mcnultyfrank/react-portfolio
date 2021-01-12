import React from "react";
import styles from "./Home.module.scss";
import Header from "../Header";
import TechStack from "../TechStack";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import backgroundVideo from "../../video.mp4";
import { Router} from "@reach/router";
import styled from 'styled-components';





const Home = () => {
  return (
  
    <div className={styles.container}>
      <Header />
        <div className={styles.videoContainer}>
          <video className= {styles.videoBG} autoPlay muted loop playsinline src={backgroundVideo} type=""></video>
          <article className = {styles.heroText}> 
              <p>Frank McNul<span>t</span>y</p> 
              <p>Sof<span>t</span>ware Developer<span className = {styles.blinking}>.</span></p>
          </article> 
        </div>
        <TechStack />
        <Portfolio />
        <Contact />

        
    </div>
  );
};

export default Home;
