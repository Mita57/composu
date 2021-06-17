import React, {useContext} from 'react';

import {Link} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const navBarStyle = {
        backgroundColor: '#4b60ff',
        height: '40px',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'row',
    }

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    const {user} = useContext(Context);

        return (
            <div className={'navBar'} style={navBarStyle}>
                <Link style={{textDecoration: 'none', padding: '10px', color: 'white'}} to={'/projects'}>Проекты</Link>
                <Link style={{textDecoration: 'none', padding: '10px', color: 'white'}}
                      to={'/musicians'}>Музыканты</Link>
                {!user.isAuth ?
                    <div style={{marginLeft: 'auto', padding: '10px'}}>
                        <Link style={{textDecoration: 'none', color: 'white'}}
                              to={'/login'}>Войти</Link>
                        <Link style={{textDecoration: 'none', padding: '10px', color: 'white'}}
                              to={'/register'}>Зарегаца</Link></div>:
                    <div style={{marginLeft: 'auto', padding: '10px'}}>
                        <Link style={{textDecoration: 'none', padding: '10px', color: 'white'}}
                              to={'/'}>{'asdasd'}</Link>
                        <div onClick={logOut} style={{    'display': 'contents', 'cursor': 'pointer', 'color': 'white'}}>Выйти</div>
                    </div>
                }
            </div>
        );

});

export default NavBar;