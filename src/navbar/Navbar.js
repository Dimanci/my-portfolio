import React from 'react';
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <a href="/main">Main</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contacts">Contacts</a>
        </div>
    );
};

export default Navbar;