import React from "react";
import styles from "./Portfolio.module.scss";
import Header from "../Header";
import dadaImage from "../../Photos/dadamac.png";
import punkApiImage from "../../Photos/punkapi.png";
import weatherImage from "../../Photos/ipadiphonweatherapp.png";
import toDoImage from "../../Photos/todolist.png";
import notesImage from "../../Photos/Untitled-2.png";
import morseImage from "../../Photos/morseipad.png";






const Portfolio = () => {
    
  return (
    <div>
  <section className = {styles.portfolioPage} id = "portfolio-page">
    
        <article>
            <img src={dadaImage} srcset=""/>
            <a href = "https://github.com/mcnultyfrank/Dada" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://dada-da4d5.web.app/" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article>
            <img src={punkApiImage}/>
            <button class = "code-button">Code</button>
            <a href = "https://github.com/mcnultyfrank/Punk-Api" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://franksbrewdogapi.web.app/" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article>
            <img src={weatherImage} />
            <a href = "https://github.com/mcnultyfrank/Weather-App" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://mcnultyfrank.github.io/Weather-App/" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article>
            <img src={toDoImage} />
            <a href = "https://https://github.com/mcnultyfrank/ToDo-list" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://classbasedtodolist.web.app" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article>
            <img src={notesImage} />
            <a href = "https://github.com/mcnultyfrank/Notes.git" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://mcnultyfrank.github.io/Notes/" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        <article>
            <img src={morseImage} />
            <a href = "https://github.com/mcnultyfrank/morse-code-translator" target="_blank"><button className = {styles.codeButton}>Code</button></a>
            <a href = "https://mcnultyfrank.github.io/morse-code-translator/" target="_blank"><button class = {styles.appButton}>App</button></a>
        </article>
        
    </section>
    </div>
  );
};

export default Portfolio;
