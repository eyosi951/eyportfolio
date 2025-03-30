import React from "react";
import styles from './Navbar.module.css'; 
import { useState, useRef,useEffect } from "react";
import {getImageUrl} from '../../utility.js';



export const Navbar= ()=> {
   const [isOpen, setOpen]= useState(false);



   const toogleMenu =()=> {
        setOpen( i=> !i)
}

   return(
      <nav className={styles.navbar}>
        <a className={styles.title} 
        href="/"> Portfolio</a>
        <div className={styles.menu}> 
         <div onClick={toogleMenu} style={{ cursor: 'pointer', fontSize: '30px', color: 'white', outline: 'none'  }}
      className={styles.menuBtn}>
        {isOpen ? 'X' : '☰'}
      </div>
         
        
         <ul className={`${styles.menuItems} 
         ${isOpen ? '' : styles.closedMenuItems}`}
         onClick={()=> setOpen(false)} >
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li> 
            </ul>
        </div>
      </nav>
   )
}

//