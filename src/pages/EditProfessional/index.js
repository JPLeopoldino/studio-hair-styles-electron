import React, { useEffect, useState } from 'react';
import { Container, FormDiv, InputStyles, Button, TitleStyle } from './styles';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {api} from '../../services/api';

const EditProfessional = () =>{
    const [dados, setDados] = useState({});

    const getProfessional = async () =>{
       try{
            const response = await api.get('/professionals/5', {headers:{
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc2Njc2NjksImV4cCI6MzMxNDM3MTAwNjl9.Lt6XDBTtbHX15CmEi4r7R_ezgoSE0k3Q3JRvVHedH5M'
            
        }});
        if(response.data) (setDados(response.data))
        /* setDados(response.data); */ 
       }
       catch(error){
        console.log(error);
       }
    }
    

    const updateProfessional = async () =>{
       try{
        const response = await api.put('/professionals/5', {headers:{
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc2Njc2NjksImV4cCI6MzMxNDM3MTAwNjl9.Lt6XDBTtbHX15CmEi4r7R_ezgoSE0k3Q3JRvVHedH5M'
        }});
        setDados(response.data);
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
            birthDate: dados.birthDate || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('O email é obrigatorio').email('Email invalido'),
            password: Yup.string().required('A senha é obrigatoria'),
        })
    });

    return(
        <div>
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
