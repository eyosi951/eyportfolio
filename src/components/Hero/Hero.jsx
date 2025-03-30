import React from "react";
import styles from './Hero.module.css'

export const Hero= () =>{
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hello I'm Eyosias</h1>
                <p className={styles.description}> A frontend developer skilled in HTML, CSS, JavaScript, and React, focused on building responsive and user-friendly web applications.
                    </p>
                    <a href="mailto:eyosi1174@gmail.com"
                    className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src="portfolio.png" 
            alt="developer-image" width={400}
            className={styles.devImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
}
