import React from "react";
import styles from "./Home.module.scss";
import backgroundVideo from "../../video.mp4";


const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.videoContainer}>
          <video className= {styles.videoBG} autoPlay muted loop playsinline src={backgroundVideo} type=""></video>
          <article className = {styles.heroText}> 
              <p>Frank McNulty </p> <p><span class = "typing">Software Developer<span class = "blinking">.</span></span></p>
          </article>
        </div>
    </div>
  );
};

export default Home;
