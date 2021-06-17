import React, {useContext, useState} from 'react';
import {registration} from "../http/userAPI";
import {Context} from "../index";

const Register = () => {

    const {user} = useContext(Context);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        try {
            let data = await registration(email, password);
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
            <button onClick={register}>Зарегаца</button>
        </div>
    );
};

export default Register;