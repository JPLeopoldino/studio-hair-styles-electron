import React from 'react';
import {HistoryContainer, Button, List} from './styles';

const ServicesHistory = () =>{
    return(
        <div>
            <HistoryContainer>
                <h1>Historico de serviços</h1>

                <ul>
                    <List>nome serviço</List>
                    <List>nome serviço</List>
                    <List>nome serviço</List>
                    <List>nome serviço</List>
                    <List>nome serviço</List>
                    <List>nome serviço</List>
                </ul>
                
                <Button>VOLTAR</Button>
            </HistoryContainer>
        </div>
    );
}

export default ServicesHistory;