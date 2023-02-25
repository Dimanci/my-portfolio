import style from "./Project.module.css";
import React from "react";

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.projectLogo}>
                <a href=''><img src={props.image}/></a>
            </div>
            <div className={style.projectInfo}>
                <h2>Project Name</h2>
                <p>Project Description</p>
            </div>
        </div>
    )
}