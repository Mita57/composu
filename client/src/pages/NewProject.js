import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {registration} from "../http/userAPI";
import { useHistory } from "react-router-dom";
import {addProject} from "../http/ProjectsAPI";

const NewProject = () => {

    const selectFile = e => {
        setPic(e.target.files[0])
    }

    const history = useHistory();

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [pic, setPic] = useState(null);

    const createProject = async () => {
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('details', details);
            formData.append('picture', pic);

            let data = await addProject(formData);
            history.push('/projects');
        } catch (e) {
            alert (e);
        }
    }

    return (
        <div>
            <input type={'text'} onChange={e => setTitle(e.target.value)} placeholder={'Title'}></input><br></br>
            <input type={'text'} onChange={e => setDetails(e.target.value)} placeholder={'Details'}></input><br></br>
            <input type={'file'} onChange={selectFile} placeholder={'Picture'}></input><br></br>
            <button onClick={createProject}>Создать проект</button>
        </div>
    );
};

export default NewProject;