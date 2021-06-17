import React, {Component} from 'react';
import {observer} from "mobx-react";
import './NavBar.css';
import {makeObservable} from "mobx-react";

@inject()
class NavBar extends Component{

    constructor() {
        super();
        makeObservable(this);
    }

    render() {
        return (
            <div className=''>
            </div>
        );
    }
}

export default NavBar;