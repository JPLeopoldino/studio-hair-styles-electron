import React from 'react';
import { Container, FormDiv, InputStyles, Button } from './styles';

const EditClient = () =>{
    return(
        <div>
            <Container>
                <h1 style={{textAlign:'center'}}>Editar Usuario</h1>

                <FormDiv>
                    <InputStyles type="text" placeholder="Nome"/>
                    <InputStyles type="email" placeholder="Email"/>
                    <InputStyles type="text" placeholder="Senha"/>
                    <InputStyles type="number" placeholder="Telefone"/>
                    <InputStyles type="text" placeholder="Data de Nascimento"/>

                    <br/><Button>ENVIAR</Button>
                </FormDiv>
            </Container>
        </div>
    );
}

export default EditClient;
