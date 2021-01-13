import React, {useState, useEffect} from "react";
import { Link } from "@reach/router";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {Github} from '@styled-icons/boxicons-logos/Github';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [colour, setColour] = useState(false);
  const [url, setUrl] = useState('');
 
    useEffect(() => {
      return setUrl(window.location.pathname)
    }, [url, open])
    console.log(url == '/portfolio');      


    const noDisplayContents = {
      transform: 'translateX(200%)'
    }
    const displayContents = {
      transform: 'translateY(100%)',
      transform: 'translateX(100%)'
    }
    const blackLink = {
      color: '#2C2A2C',
    }
    
    const whiteLink = {
      color: 'white'
    }
    const underline = {
      textDecoration: 'underline'
    }

  return (
    <>
      <header>
        <nav >
            <ul>

              <div  className = {styles.desktopNav}>  
                <div>
                  <li><Link to= '/'><a onClick = {() => setColour(false)} style = {colour === true ? blackLink : whiteLink}>Home</a></Link></li>                        
                </div>
                <div>
                  <li><Link to = '/skills'><a onClick = {() => setColour(false)} style = {colour === true ? blackLink : whiteLink}>Skills</a></Link></li>
                  <li><Link to = '/about'><a onClick = {() => setColour(false)} style = {colour === true  ? blackLink : whiteLink}>About</a></Link></li>                    
                  <li><Link to = '/portfolio'><a onClick = {() => setColour(true)}  style = {colour === true ? blackLink  : whiteLink}>Portfolio</a></Link></li>
                  <li><Link to = '/contact'><a onClick = {() => setColour(false)} style = {colour === true ? blackLink : whiteLink}>Contact</a></Link></li>
                </div>
              </div> 
              <div className = {styles.menuIconContainer} >
                  <FontAwesomeIcon onClick={() => setOpen(!open)} icon={open === true ?  faTimes : faBars} style = {colour === true ? blackLink : whiteLink} className={styles.menuIcon}  />
            </div>
            </ul>

            <div  style={open === true ? displayContents : noDisplayContents}  className = {styles.burgerMenuList}>
                  <div>
                  <li><Link to = '/skills'><a onClick = {() => setColour(false)}>Skills</a></Link></li> 
                  <li><Link to = '/about'><a onClick = {() => setColour(false)} style = {colour === true ? blackLink : whiteLink}>About</a></Link></li>
                  <li><Link to = '/portfolio'><a onClick = {() => setColour(true)}>Portfolio</a></Link></li>
                  <li><Link to = '/contact'><a onClick = {() => setColour(false)}>Contact</a></Link></li>

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
