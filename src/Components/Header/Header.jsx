import React, {useState, useEffect} from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "@reach/router";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare } from "@fortawesome/free-brands-svg-icons"
import { faBars, faTimes, faHome, faBookOpen, faFolderOpen, faAddressBook} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {Github} from '@styled-icons/boxicons-logos/Github';




const Header = () => {
  const [open, setOpen] = useState(false);
  const [colour, setColour] = useState(false);

  // useEffect(() => {
  //   setColourHeaderOnMount();
  // }, [])

    const noDisplayContents = {
      transform: 'translateX(-100%)'
    }
    const displayContents = {
      transform: 'translateY(100%)',
      transform: 'translateX(0%)'
    }
    const blackLink = {
      color: '#2C2A2C',
    }
    const whiteLink = {
      color: 'white'
    }

    const setColourToWhiteAndCloseSideMenu = () => {
      setColour(false);
      setOpen(false);
      return;
    }
    // const setColourHeaderOnMount = () => {
    //   if (window.location.pathname === '/portfolio'){
    //     return setColourToBlackAndCloseSideMenu();
    //   }else {
    //     return setColourToWhiteAndCloseSideMenu();
    //   }
    // }
    const setColourToBlackAndCloseSideMenu = () => {
      setColour(true);
      setOpen(false);
      return;
    }

  return (
    <>
      <header>
        <nav >
            <ul>
              <div  className = {styles.desktopNav}>  
                <div>
                  <li>
                    <Link to= '/'><a onClick = {() => setColourToWhiteAndCloseSideMenu()} style = {colour === true ? blackLink : whiteLink} data-tip="React-tooltip" data-for='home' ><FontAwesomeIcon icon = {faHome} size='lg' className={styles.headerIcon}/></a></Link>
                  </li>                        
                  <ReactTooltip id='home' arrowColor='black' backgroundColor='#2C2A2C' place="bottom" type="info" effect="solid">Home</ReactTooltip>
                </div>
                <div>
                  <li>
                    <Link to = '/skills'><a onClick = {() => setColourToWhiteAndCloseSideMenu()} style = {colour === true ? blackLink : whiteLink} data-tip="React-tooltip" data-for='Skills' ><FontAwesomeIcon icon = {faJsSquare} size='lg' className={styles.headerIcon}/></a></Link>
                  </li>
                    <ReactTooltip id='Skills' arrowColor='black' backgroundColor='#2C2A2C' place="bottom" type="info" effect="solid">Skills</ReactTooltip>
                  <li>
                    <Link to = '/about'><a onClick = {() => setColour(false)} style = {colour === true  ? blackLink : whiteLink} data-tip="React-tooltip" data-for='about' ><FontAwesomeIcon icon = {faBookOpen} size='lg' className={styles.headerIcon}/></a></Link>
                  </li>        
                    <ReactTooltip id='about' arrowColor='black' backgroundColor='#2C2A2C' place="bottom" type="info" effect="solid">About</ReactTooltip>            
                  <li>
                    <Link to = '/portfolio'><a onClick = {() => setColour(true)}  style = {colour === true ? blackLink  : whiteLink} data-tip="React-tooltip" data-for='portfolio' ><FontAwesomeIcon icon = {faFolderOpen} size='lg' className={styles.headerIcon}/></a></Link>
                  </li>
                    <ReactTooltip id='portfolio' arrowColor='black' backgroundColor='#2C2A2C' place="bottom" type="info" effect="solid">Portfolio</ReactTooltip>            
                  <li>
                    <Link to = '/contact'><a onClick = {() => setColour(false)} style = {colour === true ? blackLink : whiteLink} data-tip="React-tooltip" data-for='contact' ><FontAwesomeIcon icon = {faAddressBook} size='lg' className={styles.headerIcon}/></a></Link>
                  </li>
                    <ReactTooltip id='contact' arrowColor='black' backgroundColor='#2C2A2C' place="bottom" type="info" effect="solid">Contact</ReactTooltip>            
                </div>
              </div> 
              <div className = {styles.menuIconContainer} >
                  <FontAwesomeIcon size='lg' onClick={() => setOpen(!open)} icon={open === true ?  faTimes : faBars} style = {colour === true ? blackLink : whiteLink} className={styles.headerIcon} data-tip="React-tooltip" data-for='menu' />
                  <ReactTooltip id='menu' arrowColor='black' backgroundColor='#2C2A2C' place="bottom" effect="solid">Menu</ReactTooltip>
              </div>
            </ul>

            <div  style={open === true ? displayContents : noDisplayContents}  className = {styles.burgerMenuList} >
                <div>
                  <li>
                    <Link to = '/skills'><a onClick = {() => setColourToWhiteAndCloseSideMenu()} style = {whiteLink} data-tip="React-tooltip" data-for='Skills' ><FontAwesomeIcon icon = {faJsSquare} size='lg' className={styles.headerIcon}/><p>Skills</p></a></Link>
                  </li>
                  <li>
                    <Link to = '/about'><a onClick = {() => setColourToWhiteAndCloseSideMenu()}  style = {whiteLink} data-tip="React-tooltip" data-for='about' ><FontAwesomeIcon icon = {faBookOpen} size='lg' className={styles.headerIcon}/><p>About</p></a></Link>
                  </li>        
                  <li>
                    <Link to = '/portfolio'><a onClick = {() => setColourToWhiteAndCloseSideMenu()}   style = {whiteLink} data-tip="React-tooltip" data-for='portfolio' ><FontAwesomeIcon icon = {faFolderOpen} size='lg' className={styles.headerIcon}/><p>Portfolio</p></a></Link>
                  </li>
                  <li>
                    <Link to = '/contact'><a onClick = {() => setColourToWhiteAndCloseSideMenu()} style = {whiteLink} data-tip="React-tooltip" data-for='contact' ><FontAwesomeIcon icon = {faAddressBook} size='lg' className={styles.headerIcon}/><p>Contact</p></a></Link>
                  </li>
                </div>
                <section>
                  <a className = {styles.sideMenuIcon}  href = "https://www.linkedin.com/in/frank-mcnulty-591785151/"   target="_blank" ><LinkedinSquare  /> </a>
                  <a className = {styles.gitMenuIcon} href = "https://github.com/mcnultyfrank"  target="_blank"><Github  /></a>
                </section>
            </div> 
  
        </nav>
      </header>   
    </>
  );
};

export default Header;
