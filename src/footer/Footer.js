import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <h3>Dmitry Kazakou</h3>
            <div className={style.footerContainer}>
                <div className={style.footerItem}></div>
                <div className={style.footerItem}></div>
                <div className={style.footerItem}></div>
                <div className={style.footerItem}></div>
            </div>
            <div>2023 All rights reserved</div>
        </div>
    );
};

export default Footer;