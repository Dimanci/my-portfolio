import React from 'react';
import style from './MainBlock.module.css'
import styleContainer from '../common/styles/Container.module.css'

const MainBlock = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h3>Hello</h3>
                    <h1>I am Dmitry Kazakou</h1>
                    <h2>a Frontend Developer</h2>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default MainBlock;