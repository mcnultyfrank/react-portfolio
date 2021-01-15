import React, {useState, useEffect} from "react";
import { Link } from "@reach/router";
import styles from "./Home.module.scss";
import TechStack from "../TechStack";
import About from "../About";
import backgroundVideo from "../../video.mp4";
import { Router} from "@reach/router";
import styled from 'styled-components';
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {Javascript} from '@styled-icons/boxicons-logos/Javascript';
import {Typescript} from '@styled-icons/simple-icons/Typescript';
import {Redux} from '@styled-icons/simple-icons/Redux';
import {ReactLogo} from '@styled-icons/boxicons-logos/ReactLogo';
import {Jest} from '@styled-icons/simple-icons/Jest';
import {Cypress} from '@styled-icons/simple-icons/Cypress';
import {Git} from '@styled-icons/boxicons-logos/Git';
import {Github} from '@styled-icons/boxicons-logos/Github';
import {Css3} from '@styled-icons/boxicons-logos/Css3';
import {Html5} from '@styled-icons/boxicons-logos/Html5';
import {Sass} from '@styled-icons/fa-brands/Sass';
import {Nodejs} from '@styled-icons/boxicons-logos/Nodejs';
import {Npm} from '@styled-icons/fa-brands/Npm';
import {Yarn} from '@styled-icons/simple-icons/Yarn';
import {Firebase} from '@styled-icons/simple-icons/Firebase';
import {Mongodb} from '@styled-icons/simple-icons/Mongodb';  
import {Plus} from '@styled-icons/boxicons-regular/Plus';  
import {Minus} from '@styled-icons/boxicons-regular/Minus';  
import {Animated} from "react-animated-css";

 

// import {waving} from "../../Photos/";

 



const Home = () => {
  const [open, setOpen] = useState(0);
  const [colour, setColour] = useState(false);

  useEffect(() => {
    return   window.scrollTo(0, 0);
  },[])

  const toggle = () => {
    if (open <= 7) {
      setOpen(count => count + 1);
    }
    else {
      setOpen(0)
    } 
  }
  const toggleDown = () => {
    if (open != 0) {
      setOpen(count => count - 1);
    }
    else {
      setOpen(8)
    } 
  }
  console.log(open);
  


  const blackLink = {
    color: '#2C2A2C',
  }
    const noDisplayInfo = {
      display: 'none'
  }
 
  return (

    <div className={styles.container}>
      {/* <Header /> */}
        {/* <div className={styles.videoContainer}> */}
          {/* <video className= {styles.videoBG} autoPlay muted loop src={backgroundVideo} type=""></video> */}
          {/* <header>
            <h3>Frank McNulty</h3>
            <h3>Software Developer</h3>
          </header> */}
          <Minus onClick={toggleDown} className = {styles.next}/>
          <section className = {styles.heroTextContainer}>
            
            <div style = {open !== 0 ? noDisplayInfo : null } className = {styles.heroText}  > 
            <h3>Frank McNulty</h3>
            <h3>Software Developer</h3>
                {/* <p>Hi, i'm Frank McNulty, a software developer based in the UK</p> */}
                {/* <img src = {waving}></img> */}
                {/* <div> */}
                  {/* <button><Link to = '/portfolio'><a className = {styles.heroTextButtons} onClick = {() => setColour(true)}  style = {colour === true ? blackLink  : null}>View my work</a></Link></button> */}
                  {/* <button><a className = {styles.heroTextButtons} href = "https://github.com/mcnultyfrank" target="_blank">View my <span>GitHub</span></a></button>
                  <button><a  className = {styles.heroTextButtons} href = "https://www.linkedin.com/in/frank-mcnulty-591785151/" target="_blank">View my <span>linkedIn</span></a></button>
                </div> */}
            </div> 
          
            <div style = {open !== 1 ? noDisplayInfo : null }  >
          <Javascript className = {styles.javascript}/>
          <Typescript className = {styles.typescript}/>
          <h2 className={styles.firstTitle}>Well versed in Object oriented programming language <span>JavaScript</span> and superset <span>TypeScript</span></h2>
            </div>
            <div style = {open !== 2 ? noDisplayInfo : null }  >
          <h2 className={styles.secondTitle}>Adept in Front End Library <span>React.js</span></h2>
          <ReactLogo className = {styles.react}/>
          {/* , and state management library <span>Redux</span> */}
          {/* <Redux className = {styles.redux}/> */}
        </div>
        <div style = {open !== 3 ? noDisplayInfo : null }  >
          <Jest className = {styles.jest}/>
          <Cypress className = {styles.cypress}/>
          <h2 className = {styles.thirdTitle}>Proficient in unit testing Framework <span>Jest</span> and End to End testing Framework <span>Cypress.io</span></h2>
        </div>
        <div style = {open !== 4 ? noDisplayInfo : null }  >
          <h2 className = {styles.fourthTitle}>Competent in version control system <span>Git</span> and hosting development software <span>GitHub</span></h2>
          <Git className = {styles.git}/>
          <Github className = {styles.github}/>
        </div>
        <div style = {open !== 5 ? noDisplayInfo : null }  >
          <Html5 className = {styles.html}/>
          <Css3 className = {styles.css}/>
          <Sass className = {styles.sass}/>
          <h2 className = {styles.fifthTitle}>Skilled in web technology <span>HTML5</span>, style sheet language <span>CSS3</span> and scripting language <span>SASS</span></h2>
        </div>
        <div style = {open !== 6 ? noDisplayInfo : null }  >
          <h2 className = {styles.sixthTitle}>Skilled in back-end environment <span>Node.js</span></h2>
          <Nodejs className = {styles.nodejs}/>
        </div>
        <div style = {open !== 7 ? noDisplayInfo : null }  >
          <Npm className = {styles.npm}/>
          <Yarn className = {styles.yarn}/>
          <h2 className = {styles.seventhTitle}>knowledgeable of package managers <span>NPM</span> and <span>Yarn</span></h2>
        </div>
        <div style = {open !== 8 ? noDisplayInfo : null }  >
          <h2 className = {styles.eighthTitle}>Experienced with NoSQL, document databases <span>MongoDB</span> and <span>Firebase</span></h2>
          <Mongodb className = {styles.mongodb}/>
          <Firebase className = {styles.firebase}/>
        </div>
          </section>
          <Plus onClick={toggle} className = {styles.next}/>


        {/* </div> */}
    </div>
  );
};

export default Home;
