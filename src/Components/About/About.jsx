import React, {useEffect} from "react";
import styles from "./About.module.scss";
import me from "../../Photos/me.JPG"
import india from "../../Photos/india.jpg"
import recommendation1 from "../../Photos/recommendation1.png"
import recommendation2 from "../../Photos/recommendation2.png"





const About = () => {

  useEffect(() => {
    return   window.scrollTo(0, 0);
  },[])
  return (
    <>
    <section className = {styles.aboutPage}>
      <article >
        <h2>Hey <span className={styles.wave}> 👋</span></h2>
          <div>
            <p>
                I'm a Software Developer and a graduate from _nology, where I completed a full-time 12-week course. 
                <br></br>
                <br></br>
                I thoroughly enjoy creating compelling designs by following modern UI and UX design principles and applying them to my projects. 
                <br></br>
                <br></br>
                I'm most productive when I'm working with others, and have experience using Agile project management methodologies such as SCRUM, which ensured that we were constantly shipping value to our clients.
                <br></br>
                <br></br>
                I'm always looking to expand my repertoire of technologies. I'm currently learning about serverless technology and the cloud.                  
                </p>
                <img src= {me} className = {styles.bioImgs} alt="" srcset=""/>
          </div>
          <div>
                <img className = {styles.bioImgs} src= {india} alt="" srcset=""/>
                <div>
                  <p>
                  I love to travel and in 2019 went exploring around India and Nepal for 6 months.
                  </p>
                  <br></br>
                  <p>I'm also a University graduate and have a 2:1 BSC from The University Of West of England in Audio and Music Technology, where I learned to develop electronic synthesisers in C and C++.</p>
                  <br></br>
                  <p>As well as coding, I'm obsessed about music and produce electronic music in Ableton Live, and DJ as a hobby on my Technics and  CDJs.</p>
                </div>
          </div>      
          <h3>Recommendations</h3>
          <div classname = {styles.recommendationsContainer} >
            <img src={recommendation1} alt="" srcset=""/>
            <img src={recommendation2} alt="" srcset=""/>

            
          </div>
      </article>    
    </section>

    </>
  );
};

export default About;
