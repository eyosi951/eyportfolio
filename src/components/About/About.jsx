import react, { useEffect, useState } from "react";
import styles from './About.module.css';
import { User, Code, Info } from 'lucide-react';

export const About= ()=>{
 
  
   
    return <section className={styles.container} id="about" >
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <User size={200} color="#4F46E5" className={styles.aboutImg}/>
          
             
             <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src="cursorIcon.png" 
                    alt="image-of-cursor" 
                    className={styles.aboutIcons}/>
                    <div className={styles.aboutText}>
                         <h3>Frontend developer</h3>
                         <p>I am frontened developer experienced in buildiing responsive and optimized sites.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src="serverIcon.png" 
                    alt="image-of-server" 
                    className={styles.aboutIcons}/>
                    <div className={styles.aboutText}>
                         <h3>Adaptable & Analytical Thinker</h3>
                         <p>I am a fast learner who quickly adapts to new technologies and excels at solving complex problems.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src="uiIcon.png" 
                    alt="image-of-ui" 
                    className={styles.aboutIcons} />
                    <div className={styles.aboutText}>
                         <h3>JavaScript & React Enthusiast</h3>
                         <p> I have a strong passion for writing clean, efficient code and building scalable web applications with JavaScript and React.</p>
                    </div>
                </li>
                
             </ul>
        </div>
    </section>
}