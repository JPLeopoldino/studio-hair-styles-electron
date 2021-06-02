import React from 'react';
import { Container, FormDiv, InputStyles, Button, TitleStyle } from './styles';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const EditClient = () =>{

    const formik = useFormik({
        initialValues: {
            name: '', email: '',
            password: '', phone: '',
            birthDate: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('O email é obrigatorio').email('Email invalido'),
            password: Yup.string().required('A senha é obrigatoria'),
        })
    });
    
    return(
        <div>
            <Container>
                <TitleStyle>Editar Usuário</TitleStyle>

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
                        type="text" name="password" value={formik.values.password}
                        onChange={formik.handleChange} placeholder="Senha"
                    />

                    <InputStyles
                        type="number" name="phone" value={formik.values.phone}
                        onChange={formik.handleChange} placeholder="Telefone"
                    />

                    <InputStyles
                        type="text" name="birthDate" value={formik.values.birthDate}
                        onChange={formik.handleChange} placeholder="Data de Nascimento"
                    />

                    <br/><Button type="submit">ENVIAR</Button>

                    <Link to="/professionalProfile">
                        <Button>VOLTAR</Button>
                    </Link>
                    
                </FormDiv>
            </Container>
        </div>
    );
}

export default EditClient;
