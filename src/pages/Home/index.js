import React from 'react';
import * as SC from './styles';
import NavMenu from '../../components/NavMenu';
import { Button } from '@material-ui/core';


const Home = () => {

    return(
        <SC.MainContainer>
            <NavMenu/>
            <SC.Container>

                <Button
                    color="primary"
                    variant="contained"
                >
                    Botão de Teste
                </Button>
                <SC.Title>Teste</SC.Title>
                <p>Testando o app</p>
            </SC.Container>
        </SC.MainContainer>
    );
}

export default Home;