import React, {useContext, useEffect, useState} from 'react';
import {getAll} from "../http/ProjectsAPI";
import {Context} from "../index";
import {Link} from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(async () => {
        const result = await getAll();
        setProjects(result.data);
    }, []);


    const containerStyle = {
        width: '800px',
        backgroundColor: '#9f9f9f',
        fontFamily: 'sans-serif',
        margin: 'auto',
        marginTop: '8px',
        padding: '4px'
    }

    const itemStyle = {
        backgroundColor: '#D4D4D4FF',
        padding: '8px',
        margin: '4px'
    }

    const imgStyle = {
        'float': 'right',
        'height': '76px',
        'width': '76px',
        'objectFit': "cover"
    };

    const addButton = {
        backgroundColor: '#0028ec',
        fontFamily: 'sans-serif',
        position: 'absolute',
        color: 'white',
        fontSize: '60pt',
        padding: '16px',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        bottom: '48px',
        right: '48px',
        lineHeight: '48px'
    }

    const {user} = useContext(Context);

    return (
        <div>
            <div style={containerStyle}>
                {projects.map(item => (
                    <a style={{textDecoration: 'none', color: '#000'}} href={'proj/' + item.id}>
                        <div style={itemStyle}>
                            {item.title}
                            <img src={'http://localhost:5000/' + item.picture} style={imgStyle}></img><br></br>
                            <span style={{fontSize: '10pt', color: '#282828FF'}}>{item.details}<br></br></span><br></br>
                            <span style={{fontSize: '10pt', color: '#282828FF'}}>{item.location}<br></br></span>
                        </div>
                    </a>
                ))}
            </div>
            {user.isAuth ?
                <a href={'/newProject'}>
                    <div style={addButton}>
                        +
                    </div>
                </a> : ''

            }
        </div>
    );
}

export default Projects;