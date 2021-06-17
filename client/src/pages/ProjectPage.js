import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getByID} from "../http/ProjectsAPI";

const ProjectPage = () => {
    const [proj, setProj] = useState([]);
    const {id} = useParams();

    const containerStyle = {
        width: '800px',
        backgroundColor: '#9f9f9f',
        fontFamily: 'sans-serif',
        margin: 'auto',
        marginTop: '8px',
        padding: '4px',
        height: '200px'
    }

    const imgStyle = {
        'float': 'right',
        'height': '200px',
        'width': '200px',
        'objectFit': "cover"
    };


    useEffect(async () => {
        const result = await getByID(id);
        setProj(result);
    }, []);


    return (
        <div>
            <div style={containerStyle}>
                {proj.title}
                <img src={'http://localhost:5000/' + proj.picture} style={imgStyle}></img><br></br>
                <span style={{fontSize: '10pt', color: '#282828FF'}}>{proj.details}<br></br></span><br></br>
                <span style={{fontSize: '10pt', color: '#282828FF'}}>{proj.location}<br></br></span>
            </div>
        </div>
    );
};

export default ProjectPage;