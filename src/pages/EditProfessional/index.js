import React from 'react';
import { Container, FormDiv, InputStyles, Button, TitleStyle } from './styles';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const EditProfessional = () =>{

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
                        type="text" name="name" 
                        placeholder="Nome"
                        {...formik.getFieldProps('name')}
                    />

                    <InputStyles 
                        type="email" name="email" 
                        placeholder="Email"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span> : null}

                    <InputStyles
                        type="text" name="password"
                        placeholder="Senha"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.errors.password && formik.touched.password ? <span>{formik.errors.password}</span> : null}

                    <InputStyles
                        type="number" name="phone"
                        placeholder="Telefone"
                        {...formik.getFieldProps('phone')}
                    />

                    <InputStyles
                        type="text" name="birthDate"
                        placeholder="Data de Nascimento"
                        {...formik.getFieldProps('birthDate')}
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

export default EditProfessional;
