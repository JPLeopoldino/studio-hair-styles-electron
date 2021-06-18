import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import ProfessionalProfile from './pages/ProfessionalProfile';
import ServicesHistory from './pages/ServicesHistory';
import EditClient from './pages/EditClient';
import Home from './pages/Home';
import SearchClient from './pages/SearchClient';
import SingupClient from './pages/SingupClient';
import SingupProfessional from './pages/SingupProfessional';
import EditProfessional from './pages/EditProfessional';


const Routes = () =>{
    return(
    <HashRouter>
        <Switch>
            <Route path="/searchClient" component={SearchClient}/>
            <Route path="/singupClient" component={SingupClient}/>
            <Route path="/signupProfessional" component={SingupProfessional}/>
            <Route path="/servicesHistory" component={ServicesHistory}/>
            <Route path="/editClient" component={EditClient}/>
            <Route path="/editProfessional" component={EditProfessional} />
            <Route path="/professionalProfile" component={ProfessionalProfile}/>
            <Route path="/home" component={Home}/>
            <Route exact path="/" component={Login}/>
        </Switch>
    </HashRouter>
    );
}

export default Routes;