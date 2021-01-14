import React from "react";
import styles from "./Contact.module.scss";
import me from "../../Photos/me.JPG"
import code from "../../Photos/code.png"

import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {Github} from '@styled-icons/boxicons-logos/Github';



import { FormspreeProvider } from '@formspree/react';


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
        <h2>I'd love to hear from you!</h2>
        <img src={code} alt="" srcset=""/>

      </div>

      {/* <div>
  
                    
        <form>
          <input type = 'text' placeholder = 'Name...'></input>
          <input type = 'email' placeholder = 'Your Email...'></input>
          <input className = {styles.message} type="text" name="" placeholder = 'Your message...'/>
        </form>
      </div> */}
    </div>
    <footer>
      <LinkedinSquare className = {styles.sideMenuIcon} />
      <Github className = {styles.sideMenuIcon} />
    </footer>
  </div>  
  );
};

export default Contact;
