import React from 'react';
import { Container, FormDiv, InputStyles, TitleStyle, ButtonContainer } from './styles';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const EditClient = () =>{

    const formik = useFormik({
        initialValues: {
            name: '', email: '',
            phone: '',
            birthDate: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('O email é obrigatorio').email('Email invalido'),            
        })
    });
    
    return(
        <div>
            <Container>
                <TitleStyle>Editar Cliente</TitleStyle>

                <FormDiv onSubmit={formik.handleSubmit}>
                    <InputStyles
                        type="text" name="name" value={formik.values.name}
                        onChange={formik.handleChange} placeholder="Nome"
                    />

                    <InputStyles 
                        type="email" name="email" value={formik.values.email}
                        onChange={formik.handleChange} placeholder="Email"
                    />                    

                    <InputStyles
                        type="number" name="phone" value={formik.values.phone}
                        onChange={formik.handleChange} placeholder="Telefone"
                    />

                    <InputStyles
                        type="text" name="birthDate" value={formik.values.birthDate}
                        onChange={formik.handleChange} placeholder="Data de Nascimento"
                    />

                    <br/>
                    <ButtonContainer>                    
                        <Button type="submit" color="primary" variant="contained" >ENVIAR</Button>

                        <Link to="/searchClient">
                            <Button color="primary" variant="contained" >VOLTAR</Button>
                        </Link>  
                    </ButtonContainer>                  
                    
                </FormDiv>

                
            </Container>
        </div>
    );
}

export default EditClient;
