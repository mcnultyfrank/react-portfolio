import React from "react";
import styles from "./Contact.module.scss";
import me from "../../Photos/me.JPG"
import code from "../../Photos/code.png"

import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {Github} from '@styled-icons/boxicons-logos/Github';


const Contact = () => {

  const myDetails =  {
    email: 'f-mcnulty@hotmail.com',
    availableForwork: true,
    OfficeBasedWorking: 'London and South',
    RemoteWorking: 'UK wide'
  }
  

  return (
  <div>
    <div className = {styles.container}>
      <div onClick = {myDetails}>
        <h3>I'd love to hear from you!</h3>
        <img src={code} alt="" srcset=""/>
      </div>
    </div>
    <footer>
    <a className = {styles.menuIcon}  href = "https://www.linkedin.com/in/frank-mcnulty-591785151/"   target="_blank" ><LinkedinSquare  /> </a>
    <a className = {styles.menuIcon} href = "https://github.com/mcnultyfrank"  target="_blank"><Github  /></a>
    </footer>
  </div>  
  );
};

export default Contact;
