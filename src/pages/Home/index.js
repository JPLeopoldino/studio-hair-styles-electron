import React from 'react';
import * as SC from './styles';
import NavMenu from '../../components/NavMenu';
// import { InfoTile, ChatBox } from 'adminlte-reactjs';
import { Button, Calendar } from 'antd';

const Home = () => {
    return(
        <SC.MainContainer>
            <NavMenu/>
            <SC.Container>
                <Button type="primary">Primary Button</Button>
                <Calendar/>
                <SC.Title>Teste</SC.Title>
                <p>Testando o app</p>
            </SC.Container>
        </SC.MainContainer>
    );
}

export default Home;