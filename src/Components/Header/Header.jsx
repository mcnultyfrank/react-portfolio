import React, {useState, Fragment} from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {Lock} from '@styled-icons/material'
import {Close} from '@styled-icons/evil/Close'

const Header = () => {
  const [open, setOpen] = useState(false);
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

                  <li><a className = {styles.navhome}><i class="fas fa-battery-full"><span class="tooltiptext"></span></i></a></li>
              <div className = {styles.desktopNav}>  
                  <li><a>Skills</a></li>                        
                  <li><a>Portfolio</a></li>
                  <li><a>About</a></li>
                  <li><a>Contact</a></li>
              </div>
              <div className = {styles.menuIconContainer} >
                  <FontAwesomeIcon onClick={() => setOpen(!open)} className={styles.menuIcon} icon={open === true ?  faWindowClose : faBars}/>
            </div>
            </ul>

            <div style={open === true ? displayContents : noDisplayContents} className = {styles.burgerMenuList}>
                {/* <FontAwesomeIcon onClick={() => setOpen(!open)} className={styles.menuIcon} icon={open === true ? faWindowClose : faBars}/> */}
                  <div>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                  </div>
                  <div>
                  </div>

            </div> 
  
        </nav>
      </header>   
    </>
  );
};

export default Header;
