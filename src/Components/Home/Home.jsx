import React, {useState, useEffect} from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "@reach/router";
import styles from "./Home.module.scss";
import Ink from "../../Ink.mp4";
import cv from "../../CV.pdf"
import { Router} from "@reach/router";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {FilePdf} from '@styled-icons/fa-solid/FilePdf';
import {Github} from '@styled-icons/boxicons-logos/Github';



const Home = () => {

  useEffect(() => {
    return   window.scrollTo(0, 0);
  },[])
  const blackLink = {
    color: '#2C2A2C',
  }
  return (
    <div className={styles.homecontainer}>
        <div className={styles.videoContainer}>
          <video  className= {styles.videoBG} loading="lazy" autoPlay muted loop playsinline><source src={Ink}/></video>
        </div>
          <section className = {styles.heroTextContainer}>
            <article className = {styles.buttons}> 
            <ReactTooltip offset={{ left: 10 }} id='pdf' arrowColor='black' arrowColor='blue' arrow backgroundColor='#802A24' place="left" type='success' effect="solid">Download CV</ReactTooltip>
            <ReactTooltip offset={{ left: 10 }} id='git' arrowColor='black' arrowColor='blue' arrow backgroundColor='#5B6166' place="left" type='success' effect="solid">GitHub</ReactTooltip>
            <ReactTooltip offset={{ left: 10 }} id='linkedin'  arrowColor='black'  arrow backgroundColor='#2C3673' place="left" type='success' effect="solid">LinkedIn</ReactTooltip>
                {/* <p>Hi, i'm Frank McNulty, a software developer based in the UK</p> */}
                <div>
                  <div  >
                    <a data-tip="React-tooltip" data-for='pdf' href = {cv} download='Frank_McNulty_CV'><FilePdf className = {styles.heroTextButtons}  /></a>

                  </div>
                  <div>
                    <a data-tip="React-tooltip" data-for='git' href = "https://github.com/mcnultyfrank"  target="_blank"><Github className = {styles.heroTextButtons}  /></a>
                  </div>
                  <div >
                    <a data-tip="React-tooltip" data-for='linkedin' href = "https://www.linkedin.com/in/frank-mcnulty-591785151/" target="_blank"><LinkedinSquare className = {styles.heroTextButtons} /></a>
                  </div>
                </div>
            </article> 
          </section>
    </div>
  );
};


export default Home;



          {/* <section className = {styles.heroTextContainer}>
            <article className = {styles.heroText}>  */}
                {/* <p>Hi, i'm Frank McNulty, a software developer based in the UK</p> */}
                {/* <div>
                  <div>
                    <a href = {cv} download='Frank_McNulty_CV'><FilePdf className = {styles.heroTextButtons} data-tip="React-tooltip" data-for='pdf'  /></a>
                  </div>
                  <div>
                    <a href = "https://github.com/mcnultyfrank"  target="_blank"><Github className = {styles.heroTextButtons}  /></a>
                  </div>
                  <div >
                    <a href = "https://www.linkedin.com/in/frank-mcnulty-591785151/" target="_blank"><LinkedinSquare className = {styles.heroTextButtons} /></a>
                  </div>
                </div> */}
            {/* </article> 
          </section> */}