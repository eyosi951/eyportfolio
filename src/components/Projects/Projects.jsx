import React from "react";
import styles from './Projects.module.css';

export const Projects= ()=>{
    return(
        <section id="projects" className={styles.container}>
            <h1 className={styles.header}>Projects</h1>
            <div className={styles.projects}>
                <div className={styles.project}>
                    <img src="movie-application.PNG" alt="movie-application" />
                    <h3>Movie App</h3>
                    <p>Application that fetch data from API</p>
                    <a href="https://eyosi951.github.io/movie-application/" target="_blank">See Demo</a>
                </div>
                <div className={styles.project}>
                    <img src="weather-app.PNG" alt="weather-app" />
                    <h3>weather App</h3>
                    <p>Application that fetch data from API</p>
                    <a href="https://eyosi951.github.io/weather-app/" target="_blank">See Demo</a>
                </div>
                <div className={styles.project}>
                    <img src="calculator.PNG" alt="calculator" />
                    <h3>Calculator</h3>
                    <p>Calculator App</p>
                    <a href="https://eyosi951.github.io/calcultor-2/" target="_blank">See Demo</a>
                </div>
            </div>



        </section>
    )
}