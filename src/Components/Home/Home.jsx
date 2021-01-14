import React, {useState} from "react";
import { Link } from "@reach/router";
import styles from "./Home.module.scss";
import TechStack from "../TechStack";
import About from "../About";
import backgroundVideo from "../../video.mp4";
import { Router} from "@reach/router";
import styled from 'styled-components';
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {Github} from '@styled-icons/boxicons-logos/Github';
// import {waving} from "../../Photos/";





const Home = () => {
  const [open, setOpen] = useState(false);
  const [colour, setColour] = useState(false);
  const blackLink = {
    color: '#2C2A2C',
  }
  return (

    <div className={styles.container}>
      {/* <Header /> */}
        <div className={styles.videoContainer}>
          <video className= {styles.videoBG} autoPlay muted loop src={backgroundVideo} type=""></video>
          <section className = {styles.heroTextContainer}>
            <article className = {styles.heroText}> 
                <p>Hi, i'm Frank McNulty, a software developer based in the UK</p>
                {/* <img src = {waving}></img> */}
                <div>
                  {/* <button><Link to = '/portfolio'><a className = {styles.heroTextButtons} onClick = {() => setColour(true)}  style = {colour === true ? blackLink  : null}>View my work</a></Link></button> */}
                  <button><a className = {styles.heroTextButtons} href = "https://github.com/mcnultyfrank" target="_blank">View my <span>GitHub</span></a></button>
                  <button><a className = {styles.heroTextButtons} href = "https://www.linkedin.com/in/frank-mcnulty-591785151/" target="_blank">View my <span>linkedIn</span></a></button>
                </div>
            </article> 
          </section>
        </div>

    </div>
  );
};

export default Home;
