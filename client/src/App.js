import React, {useContext, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {check} from "./http/userAPI";

const App = observer(() => {
    const {user} = useContext(Context);

    useEffect(() => {
        check().then(data => {
            user.setUser(true);
            user.setIsAuth(true);
        })
    }, []);


    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter/>
        </BrowserRouter>
    );
})

export default App;
