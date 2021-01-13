import React, {useState} from "react";
import styles from "./Portfolio.module.scss";
import Header from "../Header";
import dadaImage from "../../Photos/dadamac.png";
import punkApiImage from "../../Photos/punkapi.png";
import weatherImage from "../../Photos/ipadiphonweatherapp.png";
import toDoImage from "../../Photos/todolist.png";
import notesImage from "../../Photos/Untitled-2.png";
import morseImage from "../../Photos/morseipad.png";
import {Javascript} from '@styled-icons/boxicons-logos/Javascript';
import {ReactLogo} from '@styled-icons/boxicons-logos/ReactLogo';
import {InfoCircleFill} from '@styled-icons/bootstrap/InfoCircleFill';




 


const Portfolio = () => {
    const [infoToggle, setInfoToggle] = useState(false)
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
            <img style = {infoToggle === true ? hidePortfolio : null}  src={dadaImage} srcset=""/>
            <button onClick = {() => setInfoToggle(!infoToggle)} className = {styles.appInfoButton}><InfoCircleFill className = {styles.q}/></button>
            <div style = {infoToggle === false ? noDisplayInfo : null}>
                <li>Dada <ReactLogo className = {styles.react}/><Javascript className = {styles.javascript}/></li>
                <p>Progressive Web App for Parental education, targeted at Dads</p>
            </div>
            <a href = "https://github.com/mcnultyfrank/Dada" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://dada-da4d5.web.app/" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article>
            <img style = {infoToggle === true ? hidePortfolio : null} src={punkApiImage}/>
            <button onClick = {() => setInfoToggle(!infoToggle)} className = {styles.appInfoButton}><InfoCircleFill className = {styles.q}/></button>
            <div style = {infoToggle === false ? noDisplayInfo : null}>
                <li>Brewdog API <ReactLogo className = {styles.react}/><Javascript className = {styles.javascript}/></li>
                <p>Functional React Application built using an API to find the finest brews</p>
            </div>
            <a href = "https://github.com/mcnultyfrank/Punk-Api" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://franksbrewdogapi.web.app/" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article>
            <img style = {infoToggle === true ? hidePortfolio : null} src={weatherImage} />
            <button onClick = {() => setInfoToggle(!infoToggle)} className = {styles.appInfoButton}><InfoCircleFill className = {styles.q}/></button>
            <div style = {infoToggle === false ? noDisplayInfo : null}>
                <li>liveWeather<Javascript className = {styles.javascript}/></li>
                <p>Live global weather application, built using an API in vanilla JavaScript</p>
            </div>
            <a href = "https://github.com/mcnultyfrank/Weather-App" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://mcnultyfrank.github.io/Weather-App/" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article>
            <img style = {infoToggle === true ? hidePortfolio : null} src={toDoImage} />
            <button onClick = {() => setInfoToggle(!infoToggle)} className = {styles.appInfoButton}><InfoCircleFill className = {styles.q}/></button>
            <div style = {infoToggle === false ? noDisplayInfo : null}>
                <li>ToDo List<ReactLogo className = {styles.react}/> <Javascript className = {styles.javascript}/></li>
                <p>To do list built with class based React. Also includes a random name API</p>
            </div>
            <a href = "https://https://github.com/mcnultyfrank/ToDo-list" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://classbasedtodolist.web.app" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article>
            <img style = {infoToggle === true ? hidePortfolio : null} src={notesImage} />
            <button onClick = {() => setInfoToggle(!infoToggle)} className = {styles.appInfoButton}><InfoCircleFill className = {styles.q}/></button>
            <div style = {infoToggle === false ? noDisplayInfo : null}>
                <li>noteMaker <Javascript className = {styles.javascript}/></li>
                <p>Comprehensive note make, built using vanilla Javascript</p>
            </div>
            <a href = "https://github.com/mcnultyfrank/Notes.git" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://mcnultyfrank.github.io/Notes/" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article>
            <img style = {infoToggle === true ? hidePortfolio : null} src={morseImage} />
            <button onClick = {() => setInfoToggle(!infoToggle)} className = {styles.appInfoButton}><InfoCircleFill className = {styles.q}/></button>
            <div style = {infoToggle === false ? noDisplayInfo : null}>
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
