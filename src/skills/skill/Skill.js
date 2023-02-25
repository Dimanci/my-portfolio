import React from 'react';
import style from './Skill.module.css'

const Skill = (props) => {
    return (
        <div className={style.skill}>
            <h2>{props.title}</h2>
            <span>{props.description}</span>
        </div>
    );
};

export default Skill;