import React, { useEffect, useState } from 'react';
import { Container, FormDiv, InputStyles, Button, TitleStyle } from './styles';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {api} from '../../services/api';
import {useAuth} from '../../hooks/AuthProvider';

const EditProfessional = () =>{
    const [dados, setDados] = useState({});
    const {auth} = useAuth();

    const getProfessional = async () =>{
       try{
            const response = await api.get(`/professionals/${auth.id}`, {headers:{
            'x-access-token': `${auth.token}`
            
        }});
        if(response.data) (setDados(response.data))
       }
       catch(error){
        console.log(error);
       }
    }
    

    const updateProfessional = async (value) =>{
       try{
        const response = await api.put(`/professionals/${auth.id}`,{
            name:value.name,
            email:value.email,
            password:value.password,
            phone:value.phone,
        },
        {headers:{
            'x-access-token': `${auth.token}`
        }});
        if(response.data) (setDados(response.data))
       }
       catch(error){
        console.log(error);
       }
    }

    useEffect(()=>{
        getProfessional();
    }, [])

    const formik = useFormik({
        initialValues: {
            name: dados.name || '',
            email: dados.email || '',
            password: dados.password || '',
            phone: dados.phone || '',
        },
        enableReinitialize:true,
        validationSchema: Yup.object({
            email: Yup.string().required('O email é obrigatorio').email('Email invalido'),
            password: Yup.string().required('A senha é obrigatoria'),
        }),
        onSubmit: values => {
            updateProfessional(values);
        }
    });

    return(
            <Container>
                <TitleStyle>Editar Profissional</TitleStyle>
                
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
                        type="password" name="password"
                        placeholder="Senha"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.errors.password && formik.touched.password ? <span>{formik.errors.password}</span> : null}

                    <InputStyles
                        type="number" name="phone"
                        placeholder="Telefone"
                        {...formik.getFieldProps('phone')}
                    />

                    <br/><Button type="submit">ENVIAR</Button>

                    <Link to="/professionalProfile">
                        <Button>VOLTAR</Button>
                    </Link>
                    
                </FormDiv>
            
            </Container>
    );
}

export default EditProfessional;
