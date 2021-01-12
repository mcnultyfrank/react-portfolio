import React from "react";
import styles from "./Contact.module.scss";
import me from "../../Photos/me.JPG"
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {Github} from '@styled-icons/boxicons-logos/Github';



import { FormspreeProvider } from '@formspree/react';


const Contact = () => {
  return (
  <div>
    <div className = {styles.container}>
      <div>
        <h2>I'd love to hear from you</h2>
        <p>Lets work together!</p>
        <div className = {styles.imageContainer}>
          <img src= {me} alt="" srcset=""/>
        </div>
      </div>

      <div>
  
                    
        <form>
          <input type = 'text' placeholder = 'Name...'></input>
          <input type = 'email' placeholder = 'Your Email...'></input>
          <input className = {styles.message} type="text" name="" placeholder = 'Your message...'/>
        </form>
      </div>
    </div>
    <footer>
      <LinkedinSquare className = {styles.sideMenuIcon} />
      <Github className = {styles.sideMenuIcon} />
    </footer>
  </div>  
  );
};

export default Contact;
