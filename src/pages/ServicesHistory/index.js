import React from 'react';
import {HistoryContainer, Button, List} from './styles';
import {Link} from 'react-router-dom';

const ServicesHistory = () =>{
    return(
        <div>
            <HistoryContainer>
                <h1>Histórico de serviços</h1>

                <ul>
                    <List>nome serviço</List>
                    <List>nome serviço</List>
                    <List>nome serviço</List>
                    <List>nome serviço</List>
                    <List>nome serviço</List>
                    <List>nome serviço</List>
                </ul>
                
                <Link to="/professionalProfile">
                    <Button>VOLTAR</Button>
                </Link>
                
            </HistoryContainer>
        </div>
    );
}

export default ServicesHistory;