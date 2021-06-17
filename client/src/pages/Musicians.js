import React, {useEffect, useState} from 'react';
import {getAll} from "../http/musicianAPI";

const Musicians = () => {

    const [musicians, setMusicians] = useState([]);

    useEffect(async () => {
        const result = await getAll();
        setMusicians(result.data);
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

    return (
        <div style={containerStyle}>
            {musicians.map(item => (
                <a style={{textDecoration: 'none', color: '#000'}} href={'musicians/' + item.email}>
                    <div style={itemStyle}>
                        {item.name}
                        <img src={'http://localhost:5000/' + item.photo} style={imgStyle}></img><br></br>
                        <span style={{fontSize: '10pt', color: '#282828FF'}}>{item.band}<br></br></span><br></br>
                        <span style={{fontSize: '10pt', color: '#282828FF'}}>{item.location}<br></br></span>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default Musicians;