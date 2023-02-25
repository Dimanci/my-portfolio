import React from 'react';
import style from './Projects.module.css'
import HP from '../common/images/HarryPotter.jpg'
import HP2 from '../common/images/HarryPotter21.png'
import HP3 from '../common/images/HarryPotter3.jpg'
import {Project} from "./project/Project";


const Projects = () => {
    return (
        <div className={style.projectBlock}>
            <div className={style.projectContainer}>
                <div><h1 className={style.title}>My Projects</h1></div>
                <div className={style.projectTable}>
                    <Project image={HP}/>
                    <Project image={HP2}/>
                    <Project image={HP3}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;


