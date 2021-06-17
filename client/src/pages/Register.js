import React, {useContext, useState} from 'react';
import {registration} from "../http/userAPI";
import {Context} from "../index";
import { useHistory } from "react-router-dom";

const Register = () => {

    const {user} = useContext(Context);

    const history = useHistory();

    const selectFile = e => {
        setPic(e.target.files[0])
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [band, setBand] = useState('');
    const [location, setLocation] = useState('');
    const [pic, setPic] = useState(null);
    const [name, setName] = useState(null);


    const register = async () => {
        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('band', band);
            formData.append('location', location);
            formData.append('picture', pic);
            formData.append('name', name);

            let data = await registration(formData);
            user.setUser(user);
            user.setIsAuth(true);
            history.push('/projects');
        } catch (e) {
            alert (e);
        }
    }

    return (
        <div>
            <input type={'text'} onChange={e => setEmail(e.target.value)} placeholder={'email'}></input><br></br>
            <input type={'text'} onChange={e => setName(e.target.value)} placeholder={'name'}></input><br></br>
            <input type={'password'} onChange={e => setPassword(e.target.value)} placeholder={'passwrod'}></input><br></br>
            <input type={'text'} onChange={e => setBand(e.target.value)} placeholder={'Band'}></input><br></br>
            <input type={'text'} onChange={e => setLocation(e.target.value)} placeholder={'Location'}></input><br></br>
            <input type={'file'} onChange={selectFile} placeholder={'Picture'}></input><br></br>
            <button onClick={register}>Зарегаца</button>
        </div>
    );
};

export default Register;