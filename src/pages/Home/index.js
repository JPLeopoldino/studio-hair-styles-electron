import React from 'react';
import * as SC from './styles';
import NavMenu from '../../components/NavMenu';

const Home = () => {
    return(
        <SC.MainContainer>
            <NavMenu/>
            <SC.Container>
                <SC.Title>Teste</SC.Title>
                <p>Testando o app</p>
            </SC.Container>
        </SC.MainContainer>
    );
}

export default Home;