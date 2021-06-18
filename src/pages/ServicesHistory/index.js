import React from 'react';
import {HistoryContainer, Button, List, Title} from './styles';
import {Link} from 'react-router-dom';

const ServicesHistory = () =>{
    return(
        <div style={{marginTop:15}}>
            <HistoryContainer>
                <Title>Histórico de serviços</Title>

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