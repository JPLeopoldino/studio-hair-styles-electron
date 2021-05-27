import React from 'react';
import { Container, FormDiv, InputStyles, Button } from './styles';
import {Link} from 'react-router-dom';

const EditClient = () =>{
    return(
        <div>
            <Container>
                <h1 style={{textAlign:'center'}}>Editar Usuário</h1>

                <FormDiv>
                    <InputStyles type="text" placeholder="Nome"/>
                    <InputStyles type="email" placeholder="Email"/>
                    <InputStyles type="text" placeholder="Senha"/>
                    <InputStyles type="number" placeholder="Telefone"/>
                    <InputStyles type="text" placeholder="Data de Nascimento"/>

                    <br/><Button>ENVIAR</Button>

                    <Link to="/professionalProfile">
                        <Button>VOLTAR</Button>
                    </Link>
                    
                </FormDiv>
            </Container>
        </div>
    );
}

export default EditClient;
