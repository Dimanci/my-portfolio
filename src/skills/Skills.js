import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    let skills = [{title: 'React', description: '.....React is cool.....'},
        {title: 'JS/TS', description: '.....JS/TS.....'},
        {title: 'HTML/CSS', description: '.....HTML/CSS.....'}]
    return (
        <div className={style.skillsBlock}>
            <div className={`${style.skillsContainer} ${styleContainer.container}`}>
                <h1 className={style.title}>My skills</h1>
                <div className={style.skillsTable}>
                    {skills.map(s => {
                        return <Skill title={s.title} description={s.description}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;


