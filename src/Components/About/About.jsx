import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <>
    <section className = {styles.aboutPage}>

      <article >
        <h2>Hey <span className={styles.wave}> 👋</span></h2>
        <p>
            I'm a Software Developer graduate from _nology, where I completed a full time 12-week course. I have learned to build comprehensive, responsive and mobile first applications with vanilla JavaScript and React.js.
        </p>
        <p>
        I have experience working within a team and have built various mobile-first Applications in React and vanilla Javascript, with excellent UX and UI design being a huge focus on every project.
        </p>
        <p>
            I have a huge desire to learn, I love to problem solve and love to work in a team environment. 
        </p>
        <p>
        I also have a 2:1 BSC degree in Audio and Music Technology and I am hugely passionate about digital music and I produce music and DJ in my spare time.
        </p>
      </article>    
    </section>

    </>
  );
};

export default About;
