import React from "react";

import styles from './Experience.module.css'

export const Experience =()=>{
    return(
       <section id="experience">
        <h1>Skills</h1>
        <div className={styles.container}>
             <div className={styles.imgContainer}>
                <img src="html.jpg" alt="html-icon"/>
                <h2 className={styles.title}>HTML</h2>
                <p className="description">Experienced in html</p>
             </div>
             <div className={styles.imgContainer}>
                <img src="css.png" alt="css-icon"/>
                <h2 className={styles.title}>CSS</h2>
                <p className="description">Experienced in css</p>
             </div>
             <div className={styles.imgContainer}>
                <img src="javaScript.png" alt="js-icon"/>
                <h2 className={styles.title}>JavaScript</h2>
                <p className="description">Experienced in JavaScript</p>
             </div>
             <div className={styles.imgContainer}>
                <img src="react.png" width={100} alt="react-icon"/>
                <h2 className={styles.title}>React</h2>
                <p className="description">Experienced in React</p>
             </div>
             <div className={styles.imgContainer}>
                <img src="gitHub-a.png" alt="gitHub-icon"/>
                <h2 className={styles.title}>Git Hub</h2>
                <p className="description">Experienced in Git Hub</p>
             </div>
             <div className={styles.imgContainer}>
                <img src="git.png" alt="git-icon"/>
                <h2 className={styles.title}>Git</h2>
                <p className="description">Experienced in Git </p>
             </div>
                
        </div>
        </section>
    )
}