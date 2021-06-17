import React, {useEffect, useState} from 'react';
import {getByID} from "../http/musicianAPI";
import {useParams} from 'react-router-dom';
import {getAllByUser} from "../http/equipmentAPI";

const MusicianPage = () => {
    const [musician, setMusician] = useState([]);
    const [equipment, setEquipment] = useState([]);
    const [projs, setProjs] = useState([]);
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

    const itemStyle = {
        backgroundColor: '#D4D4D4FF',
        padding: '8px',
        fontFamily: 'sans-serif',
        margin: '4px'
    }

    const imgStyle = {
        'float': 'right',
        'height': '200px',
        'width': '200px',
        'objectFit': "cover"
    };

    const imgStyleSmol = {
        'float': 'right',
        'height': '76px',
        'width': '76px',
        'objectFit': "cover"
    };


    useEffect(async () => {
        const result = await getByID(id);
        setMusician(result);
    }, []);

    useEffect(async () => {
        const result = await getAllByUser(id);
        setEquipment(result.data);
    }, []);

    useEffect(async () => {
        const result = await getAllByUser(id);
        setEquipment(result.data);
    }, []);

    return (
        <div>
            <div style={containerStyle}>
                {musician.name}
                <img src={'http://localhost:5000/' + musician.photo} style={imgStyle}></img><br></br>
                <span style={{fontSize: '10pt', color: '#282828FF'}}>{musician.band}<br></br></span><br></br>
                <span style={{fontSize: '10pt', color: '#282828FF'}}>{musician.location}<br></br></span>
            </div>
            <h2 style={{fontFamily: 'sans-serif', textAlign: 'center'}}>Оборудование</h2>
            <div  style={containerStyle}>
                {equipment.map(item => (
                    <a style={{textDecoration: 'none', color: '#000'}} href={'musicians/' + item.email}>
                        <div style={itemStyle}>
                            {item.name}
                            <img src={'http://localhost:5000/' + item.picture} style={imgStyleSmol}></img><br></br>
                            <span style={{fontSize: '10pt', color: '#282828FF'}}>{item.band}<br></br></span><br></br>
                            <span style={{fontSize: '10pt', color: '#282828FF'}}>{item.location}<br></br></span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MusicianPage;