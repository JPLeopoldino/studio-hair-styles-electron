import React from 'react';
import {ContainerProfile, Header, ImgProfile, UserInfo, Buttons, Edit, History, MainText} from './styles';

const UserProfile = () =>{
    return(
        <ContainerProfile>

            <Header>
                <ImgProfile src="https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"/>

                <UserInfo>
                    <MainText>USER NAME</MainText>
                    <p>EMAIL@EMAIL.COM</p>
                    <p>1612345678</p>
                </UserInfo>

                
            </Header>

            <Buttons>
                <Edit>Editar Usuario</Edit>
                <History>Historico de serviços</History>
            </Buttons>
        </ContainerProfile>
    );
}

export default UserProfile;