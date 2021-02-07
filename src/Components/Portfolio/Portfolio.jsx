import React, {useState, useEffect} from "react";
import styles from "./Portfolio.module.scss";
import {Javascript} from '@styled-icons/boxicons-logos/Javascript';
import {ReactLogo} from '@styled-icons/boxicons-logos/ReactLogo';
import {Firebase} from '@styled-icons/simple-icons/Firebase';
import {InfoCircleFill} from '@styled-icons/bootstrap/InfoCircleFill';

const Portfolio = () => {
    useEffect(() => {
        return window.scrollTo(0, 0);
      },[])
    const [infoToggleDada, setInfoToggleDada] = useState(false)
    const [infoToggleBrew, setInfoToggleBrew] = useState(false)
    const [infoToggleTip, setInfoToggleTip] = useState(false)
    const [infoToggleWeather, setInfoToggleWeather] = useState(false)
    const [infoToggleToDo, setInfoToggleToDo] = useState(false)
    const [infoToggleNotes, setInfoToggleNotes] = useState(false)
    const [infoToggleMorse, setInfoToggleMorse] = useState(false)

    const noDisplayInfo = {
        display: 'none'
    }
    const hidePortfolio = {
        opacity: '0.07'
    }
    
  return (
    <div> 
  <section className = {styles.portfolioPage} >
    
        <article>
            <img style = {infoToggleDada === true ? hidePortfolio : null}   src='https://firebasestorage.googleapis.com/v0/b/mcnultydev.appspot.com/o/dadamac.png?alt=media&token=1d20f533-dd12-4392-9c9e-7edc1f45ab1c' srcset=""/>
            <button onClick = {() => setInfoToggleDada(!infoToggleDada)} className = {styles.appInfoButton}><InfoCircleFill className = {styles.q}/></button>
            <div style = {infoToggleDada === false ? noDisplayInfo : null}>
                <li>Dada <ReactLogo className = {styles.react}/><Javascript className = {styles.javascript}/><Firebase className = {styles.firebase}/></li>
                <p>Progressive Web App for Parental education, targeted at Dads</p>
            </div>
            <a href = "https://github.com/mcnultyfrank/Dada" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://dada-da4d5.web.app/" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article> 
            <img style = {infoToggleBrew === true ? hidePortfolio : null} src='https://firebasestorage.googleapis.com/v0/b/mcnultydev.appspot.com/o/punkapi.png?alt=media&token=83dd2656-0f6b-4609-9f52-5684bcda9e43'/>
            <button onClick = {() => setInfoToggleBrew(!infoToggleBrew)} className = {styles.appInfoButton}><InfoCircleFill className = {styles.q}/></button>
            <div style = {infoToggleBrew === false ? noDisplayInfo : null}>
                <li>Brewdog API <ReactLogo className = {styles.react}/><Javascript className = {styles.javascript}/><Firebase className = {styles.firebase}/></li>
                <p>Functional React Application built using an API to find the finest brews</p>
            </div>
            <a href = "https://github.com/mcnultyfrank/Punk-Api" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://franksbrewdogapi.web.app/" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article> 
            <img style = {infoToggleTip === true ? hidePortfolio : null} src='https://firebasestorage.googleapis.com/v0/b/mcnultydev.appspot.com/o/sharemytip.png?alt=media&token=084e442e-6c50-4d38-b6bf-4f6b7a569cd5'/>
            <button onClick = {() => setInfoToggleTip(!infoToggleTip)} className = {styles.appInfoButton}><InfoCircleFill className = {styles.q}/></button>
            <div style = {infoToggleTip === false ? noDisplayInfo : null}>
                <li>Share My Tip<ReactLogo className = {styles.react}/><Javascript className = {styles.javascript}/></li>
                <p>PWA bill and tip calculator with an interactive tip bar, currency options and more.</p>
            </div>
            <a href = "https://github.com/mcnultyfrank/share_my_tip" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://sharemytip.web.app/" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article>
            <img style = {infoToggleWeather === true ? hidePortfolio : null} src='https://firebasestorage.googleapis.com/v0/b/mcnultydev.appspot.com/o/ipadiphonweatherapp.png?alt=media&token=f91f564f-e991-4f7b-9af8-e1d8e6ceca41' />
            <button onClick = {() => setInfoToggleWeather(!infoToggleWeather)} className = {styles.appInfoButton}><InfoCircleFill className = {styles.q}/></button>
            <div style = {infoToggleWeather === false ? noDisplayInfo : null}>
                <li>liveWeather<Javascript className = {styles.javascript}/></li>
                <p>Live global weather application, built using an API in vanilla JavaScript</p>
            </div>
            <a href = "https://github.com/mcnultyfrank/Weather-App" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://mcnultyfrank.github.io/Weather-App/" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article>
            <img style = {infoToggleToDo === true ? hidePortfolio : null} src='https://firebasestorage.googleapis.com/v0/b/mcnultydev.appspot.com/o/todolist.png?alt=media&token=bee8c908-4eb0-450b-acf3-1063f5a818a3' />
            <button onClick = {() => setInfoToggleToDo(!infoToggleToDo)} className = {styles.appInfoButton}><InfoCircleFill className = {styles.q}/></button>
            <div style = {infoToggleToDo === false ? noDisplayInfo : null}>
                <li>ToDo List<ReactLogo className = {styles.react}/> <Javascript className = {styles.javascript}/></li>
                <p>To do list built with class based React. Also includes a random name API</p>
            </div>
            <a href = "https://https://github.com/mcnultyfrank/ToDo-list" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://classbasedtodolist.web.app" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article>
            <img style = {infoToggleNotes === true ? hidePortfolio : null} src='https://firebasestorage.googleapis.com/v0/b/mcnultydev.appspot.com/o/Untitled-2.png?alt=media&token=1fc40c98-fda4-4ebd-8062-c6295e13abc6' />
            <button onClick = {() => setInfoToggleNotes(!infoToggleNotes)} className = {styles.appInfoButton}><InfoCircleFill className = {styles.q}/></button>
            <div style = {infoToggleNotes === false ? noDisplayInfo : null}>
                <li>noteMaker <Javascript className = {styles.javascript}/></li>
                <p>Comprehensive note make, built using vanilla Javascript</p>
            </div>
            <a href = "https://github.com/mcnultyfrank/Notes.git" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://mcnultyfrank.github.io/Notes/" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article>
            <img style = {infoToggleMorse === true ? hidePortfolio : null} src='https://firebasestorage.googleapis.com/v0/b/mcnultydev.appspot.com/o/morseipad.png?alt=media&token=2c13b6ae-d2e7-4cec-aa90-08d3a97c6200'/>
            <button onClick = {() => setInfoToggleMorse(!infoToggleMorse)} className = {styles.appInfoButton}><InfoCircleFill className = {styles.q}/></button>
            <div style = {infoToggleMorse === false ? noDisplayInfo : null}>
                <li>MorseTranslate <Javascript className = {styles.javascript}/></li>
                <p>Morse Code translator, for those times of need</p>
            </div>
            <a href = "https://github.com/mcnultyfrank/morse-code-translator" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://mcnultyfrank.github.io/morse-code-translator/" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        
    </section>

    </div>
);
};

export default Portfolio;
