import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import ProfessionalProfile from './pages/ProfessionalProfile';
import ServicesHistory from './pages/ServicesHistory';
import EditClient from './pages/EditClient';
import Home from './pages/Home';
import SearchClient from './pages/SearchClient';
import SingupClient from './pages/SingupClient';
import SingupProfessional from './pages/SingupProfessional';

const Routes = () =>{
    return(
    <Switch>
        <Route path="/searchClient">
            <SearchClient/>
        </Route>

        <Route path="/singupClient">
            <SingupClient/>
        </Route>

        <Route path="/signupProfessional">
            <SingupProfessional/>
        </Route>

        <Route path="/servicesHistory">
            <ServicesHistory/>
        </Route>

        <Route path="/editClient">
            <EditClient/>
        </Route>

        <Route path="/professionalProfile">
            <ProfessionalProfile/>
        </Route>

        <Route path="/home">
            <Home/>
        </Route>

        <Route path="/">
            <Login/>
        </Route>
    </Switch>
    );
}

export default Routes;