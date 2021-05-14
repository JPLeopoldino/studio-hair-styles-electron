import React from 'react';
import {ContainerProfile, Header, ImgProfile, UserInfo, Buttons, Edit, History, MainText, Text} from './styles';

const ProfessionalProfile = () =>{
    return(
        <ContainerProfile>
            <Header>
                <ImgProfile src="https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"/>

                <UserInfo>
                    <MainText>USER NAME</MainText>
                    <Text>EMAIL@EMAIL.COM</Text>
                    <Text>1612345678</Text>
                </UserInfo>

                
            </Header>

            <Buttons>
                <Edit>Editar Usuario</Edit>
                <History>Historico de serviços</History>
            </Buttons>

            <div style={{backgroundColor:'blueviolet',height:400,}}>
                <p>--agenda visualição de horários marcados--</p>
            </div>
        </ContainerProfile>
    );
}

export default ProfessionalProfile;