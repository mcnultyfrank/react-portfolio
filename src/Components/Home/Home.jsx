import React from "react";
import styles from "./Home.module.scss";
import Header from "../Header";
import TechStack from "../TechStack";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import backgroundVideo from "../../video.mp4";
import { Router} from "@reach/router";
import styled from 'styled-components';
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {Github} from '@styled-icons/boxicons-logos/Github';





const Home = () => {
  return (

    <div className={styles.container}>
      {/* <Header /> */}
        <div className={styles.videoContainer}>
          <video className= {styles.videoBG} autoPlay muted loop playsinline src={backgroundVideo} type=""></video>
          <section className = {styles.heroTextContainer}>
            <article className = {styles.heroText}> 
                <p>Hi, i'm Frank McNulty, a software developer based in the UK</p>
                <div>
                  <button>View my work</button>
                  <button>View my <span>Github</span></button>
                  <button>View my <span>linkedIn</span></button>

                </div>
            </article> 
          </section>
        </div>
        <TechStack />


        
    </div>
  );
};

export default Home;
