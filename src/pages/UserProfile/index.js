import React from 'react';
import {Container, ImgProfile, UserInfo, Buttons, Edit, History} from './styles'

const UserProfile = () =>{
    return(
        <div>
            <Container> 
                <ImgProfile>
                    
                </ImgProfile>

                <UserInfo>
                    <h1>USER NAME</h1>
                    <p>EMAIL@EMAIL.COM</p>
                    <p>1612345678</p>
                </UserInfo>

                
            </Container>

            <Buttons>
                <Edit>Editar Usuario</Edit>
                <History>Historico de serviços</History>
            </Buttons>
        </div>
    );
}

export default UserProfile;