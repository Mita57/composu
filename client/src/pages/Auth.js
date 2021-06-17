import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {login} from "../http/userAPI";

const Auth = () => {
    const {user} = useContext(Context);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logInn = async () => {
        try {
            let data = await login(email, password);
            user.setUser(user);
            user.setIsAuth(true);
        } catch (e) {
            alert (e);
        }
    }

    return (
        <div>
            <input type={'text'} onChange={e => setEmail(e.target.value)} placeholder={'email'}></input><br></br>
            <input type={'text'} onChange={e => setPassword(e.target.value)} placeholder={'passwrod'}></input><br></br>
            <button onClick={logInn}>Войти</button>
        </div>
    );
};

export default Auth;