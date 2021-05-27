import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ProfessionalProfile from './pages/ProfessionalProfile';
import ServicesHistory from './pages/ServicesHistory';
import EditClient from './pages/EditClient';


const Routes = () =>{
    return(
    <Switch>
        <Route path="/servicesHistory">
            <ServicesHistory/>
        </Route>

        <Route path="/editClient">
            <EditClient/>
        </Route>

        <Route path="/professionalProfile">
            <ProfessionalProfile/>
        </Route>

        <Route path="/">
            <ProfessionalProfile/>
        </Route>
    </Switch>
    );
}

export default Routes;