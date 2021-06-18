import React from 'react';
import * as SC from './styles';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return(
        <SC.MainContainer>
            <SC.HeaderContainer>
                <img src="./assets/Logo2.svg"/>
                <SC.Title>Studio Hair Style</SC.Title>
            </SC.HeaderContainer>
            <SC.DividerLine/>
            <SC.LinkContainer>
                <Link to="/searchClient">
                    <SC.Button>Buscar Cliente</SC.Button>
                </Link>
                <Link to="/singupClient">
                    <SC.Button>Cadastrar Cliente</SC.Button>
                </Link>
                <Link to="/signupProfessional">
                    <SC.Button>Cadastrar Profissional</SC.Button>
                </Link>
                <Link to="/servicesHistory">
                    <SC.Button>Histórico de Serviços</SC.Button>
                </Link>
                <Link to="/editClient">
                    <SC.Button>Editar Cliente</SC.Button>
                </Link>
                <Link to="/professionalProfile">
                    <SC.Button>Perfil</SC.Button>
                </Link>
                <Link to="/home">
                    <SC.Button>Home</SC.Button>
                </Link>
                <Link to="/">
                    <SC.Button>Login</SC.Button>
                </Link>
            </SC.LinkContainer>
            <SC.DividerLine/>
            <SC.LogoffContainer>
                <SC.Logoff>Sair</SC.Logoff>
            </SC.LogoffContainer>
        </SC.MainContainer>
    );
}

export default NavMenu;