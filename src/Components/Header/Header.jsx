import React, {useState, useEffect} from "react";
import { Link } from "@reach/router";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {Github} from '@styled-icons/boxicons-logos/Github';




const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrollState, setScrollState] = useState("top")

  // useEffect(() => {
  //   listener = document.addEventListener("scroll", e => {
  //     var scrolled = document.scrollingElement
  //     console.log(scrolled);
  //     if (scrolled > 2700) {
  //     document.styleSheets.color = 'black';
  //     } else {
  //     return
  //     }
  //   })
  //   return () => {
  //     document.removeEventListener("scroll", listener)
  //   }
  // }, [scrollState])

    const noDisplayContents = {
      transform: 'translateX(200%)'
    }
    const displayContents = {
      transform: 'translateY(100%)',
      transform: 'translateX(100%)'
    }
  return (
    <>
      <header>
        <nav>
            <ul>

              <div className = {styles.desktopNav}>  
                <div>
                  <li><a><Link to= {'/'}>Home</Link></a></li>                        
                </div>
                <div>
                  <li><a>Skills</a></li>                        
                  <li><a>Portfolio</a></li>
                  <li><a>About</a></li>
                  <li><a>Contact</a></li>
                </div>
              </div>
              <div className = {styles.menuIconContainer} >
                  <FontAwesomeIcon onClick={() => setOpen(!open)} className={styles.menuIcon} icon={open === true ?  faWindowClose : faBars}/>
            </div>
            </ul>

            <div style={open === true ? displayContents : noDisplayContents} className = {styles.burgerMenuList}>
                  <div>
                    <li><a>Home</a></li>                        
                    <li><a>Skills</a></li>                        
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                  </div>
                  <div>
                  <LinkedinSquare className = {styles.sideMenuIcon} />
                  <Github className = {styles.sideMenuIcon} />
                  </div>

            </div> 
  
        </nav>
      </header>   
    </>
  );
};

export default Header;
