import React from 'react';
import style from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <h1>Contacts</h1>

                <form className={style.form}>
                    <input type={'text'} placeholder={'enter your fullname'}/>
                    <input type={'text'} placeholder={'enter your email address'}/>
                    <textarea placeholder={'enter your message'}/>
                    <input type='submit' style={{width: 150, alignSelf: "center"}}/>
                </form>

            </div>
        </div>
    );
};

export default Contacts;