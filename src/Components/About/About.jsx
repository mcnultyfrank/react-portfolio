import React from "react";
import styles from "./About.module.scss";
import me from "../../Photos/me.JPG"
import india from "../../Photos/india.jpg"



const About = () => {
  return (
    <>
    <section className = {styles.aboutPage}>

      <article >
        <h2>Hey <span className={styles.wave}> 👋</span></h2>
        <div>
            <p>
                I'm a Software Developer and a graduate from _nology, where I completed a full time 12-week course. 
                <br></br>
                <br></br>
                I thoroughly enjoy creating compelling designs by following modern UI and UX design principles and applying them to my projects. 
                <br></br>
                <br></br>
                I'm most productive when i'm working with others, and have experience working within in a Srum using the Agile framework, where we worked together to deliver our product weekly to our client.
                <br></br>
                <br></br>
                I'm always looking to expand my repertoire of technologies. I'm currently learning about servless technology and the cloud.                  
                </p>
                <img src= {me} alt="" srcset=""/>

        </div>
          <div>
                <img src= {india} alt="" srcset=""/>
                <div>
                  <p>I love to travel and in 2019 went exploring around India and Nepal for 6 months.</p>
                  <br></br>
                  <br></br>
                  <p>I'm also university graduate and have a 2:1 BSC from The University Of West of England in Audio and Music Technology, where I learned to develop electronic synthesisers in C and C++.</p>
                  <br></br>
                  <br></br>
                  <p>As well as coding, i'm absolutely obsessed about music and produce electronic music in Ableton Live, and DJ as a hobby on my Technics and  CDJs.</p>
                </div>
          </div>
          <div>
             
              </div>
            
      </article>    
    </section>

    </>
  );
};

export default About;
