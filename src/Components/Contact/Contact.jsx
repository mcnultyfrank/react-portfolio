import React from "react";
import styles from "./Contact.module.scss";


import { FormspreeProvider } from '@formspree/react';


const Contact = () => {
  return (
    <div className = {styles.container}>
      <div>
        <p>hi</p>
      </div>
      <div>
        <form>
          <input type = 'text' placeholder = 'Name'></input>
          <input type = 'email' placeholder = 'Email'></input>

        </form>
      </div>
    </div>
  );
};

export default Contact;
