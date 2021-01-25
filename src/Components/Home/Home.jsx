import React, {useState, useEffect} from "react";
import { Link } from "@reach/router";
import styles from "./Home.module.scss";
import TechStack from "../TechStack";
import About from "../About";
import backgroundVideo from "../../video.mp4";
import Ink from "../../Ink.mp4";
import Blue from "../../Blue.mp4";
import cv from "../../CV.pdf"
import { Router} from "@reach/router";
import styled from 'styled-components';
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {Github} from '@styled-icons/boxicons-logos/Github';
import {FilePdf} from '@styled-icons/fa-solid/FilePdf';


// import {waving} from "../../Photos/";





const Home = () => {
  const [open, setOpen] = useState(false);
  const [colour, setColour] = useState(false);

  useEffect(() => {
    return   window.scrollTo(0, 1000);
  },[])
  const blackLink = {
    color: '#2C2A2C',
  }
  return (

    <div className={styles.homecontainer}>
      {/* <Header /> */}
        <div className={styles.videoContainer}>
          <div></div>
          <video className= {styles.videoBG} autoPlay muted loop playsinline><source src={Ink} type="video/mp4"/></video>
          <section className = {styles.heroTextContainer}>
            <article className = {styles.heroText}> 
                <p>Hi, i'm Frank McNulty, a software developer based in the UK</p>
                <div>
                <div>
                    {/* <h4>CV</h4> */}
                  <a href = {cv} download='Frank_McNulty_CV'><FilePdf className = {styles.heroTextButtons}  /></a>

                    {/* <button><a className = {styles.heroTextButtons} href = "https://www.linkedin.com/in/frank-mcnulty-591785151/" target="_blank">View my <span>linkedIn</span></a></button> */}
                  </div>
                  <div>
                    {/* <h4>GitHub</h4> */}
                    <a href = "https://github.com/mcnultyfrank"  target="_blank"><Github className = {styles.heroTextButtons}  /></a>

                    {/* <button><a className = {styles.heroTextButtons} href = "https://www.linkedin.com/in/frank-mcnulty-591785151/" target="_blank">View my <span>linkedIn</span></a></button> */}
                  </div>
                  <div >
                    {/* <h4>LinkedIn</h4> */}
                  <a href = "https://www.linkedin.com/in/frank-mcnulty-591785151/" target="_blank"><LinkedinSquare className = {styles.heroTextButtons} /></a>

                    {/* <button><a className = {styles.heroTextButtons} href = "https://www.linkedin.com/in/frank-mcnulty-591785151/" target="_blank">View my <span>linkedIn</span></a></button> */}
                  </div>
                </div>
            </article> 
          </section>
        </div>

    </div>
  );
};

export default Home;
