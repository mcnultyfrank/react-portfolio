import React, {useEffect} from "react";
import Portfolio from "../Portfolio";
import Header from "../Header";
import Home from "../Home";
import styles from "./TechStack.module.scss";
import styled from 'styled-components';
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






import AOS from 'aos';




const TechStack = () => {
  useEffect(() => {
      AOS.init();
    }, [])
    

  return (
    <div>
      <div className = {styles.container}>
        <div data-aos="fade-in">
          <Javascript className = {styles.javascript}/>
          <Typescript className = {styles.typescript}/>
          <h2 className={styles.firstTitle}>Well versed in Object oriented programming language <span>JavaScript</span>, and superset <span>TypeScript</span></h2>
        </div>
        <div>
          <h2 className={styles.secondTitle}>Adept in Front End Library <span>React.js</span></h2>
          <ReactLogo className = {styles.react}/>
          {/* , and state management library <span>Redux</span> */}
          {/* <Redux className = {styles.redux}/> */}
        </div>
        <div>
          <Jest className = {styles.jest}/>
          <Cypress className = {styles.cypress}/>
          <h2 className = {styles.thirdTitle}>Proficient in unit testing Framework <span>Jest</span>, and End to End testing Framework <span>Cypress.io</span></h2>
        </div>
        <div>
          <h2 className = {styles.fourthTitle}>Competent in version control system <span>Git</span>, and hosting development software <span>Github</span></h2>
          <Git className = {styles.git}/>
          <Github className = {styles.github}/>
        </div>
        <div>
          <Html5 className = {styles.html}/>
          <Css3 className = {styles.css}/>
          <Sass className = {styles.sass}/>
          <h2 className = {styles.fifthTitle}>Skilled in web technology <span>HTML5</span>,style sheet language <span>CSS3</span> and scripting language <span>SASS</span></h2>
        </div>
        <div>
          <h2 className = {styles.sixthTitle}>Skilled in back-end environment <span>Node.js</span></h2>
          <Nodejs className = {styles.nodejs}/>
        </div>
        <div>
          <Npm className = {styles.npm}/>
          <Yarn className = {styles.yarn}/>
          <h2 className = {styles.seventhTitle}>knowledgeable of package managers <span>NPM</span> and <span>Yarn</span></h2>
        </div>
        <div>
          <h2 className = {styles.eighthTitle}>Experienced with NoSQL, document databases <span>MongoDB</span> and <span>Firebase</span></h2>
          <Mongodb className = {styles.mongodb}/>
          <Firebase className = {styles.firebase}/>
        </div>
      </div>
      <Portfolio />
    </div>
    
  );
};

export default TechStack;
