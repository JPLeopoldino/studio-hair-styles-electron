import React, { useEffect, useState } from 'react';
import { Container, FormDiv, InputStyles, TitleStyle, ButtonContainer } from './styles';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {api} from '../../services/api';
import {useAuth} from '../../hooks/AuthProvider';
import { useClient } from '../../hooks/ClientProvider';

const EditClient = () =>{
    const [dados, setDados] = useState({});
    const {auth} = useAuth();
    const { client } = useClient();

    const getClient = async () =>{
       try{
            const response = await api.get(`/clients/${client}`, {headers:{
            'x-access-token': `${auth.token}`
            
        }});
        
        if(response.data) (setDados(response.data))
       }
       catch(error){
        console.log(error);
       }
    }

    const updateClient = async (value) =>{
        try{
         const response = await api.put(`/clients/${client}`,{
             name:value.name,
             email:value.email,             
             phone:value.phone,
             birthdate:value.birthdate,
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
         getClient();
     }, [])

    const formik = useFormik({
        initialValues: {
            name: dados.name ||  '',
            email: dados.email || '',
            phone: dados.phone || '',
            birthdate: dados.birthdate || '',
        },
        enableReinitialize: true,

        validationSchema: Yup.object({
            email: Yup.string().required('O email é obrigatorio').email('Email invalido'),            
        }),

        onSubmit: values => {
            updateClient(values)
        }

    });
    
    return(
        <div>
            <Container>
                <TitleStyle>Editar Cliente</TitleStyle>

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

                    <InputStyles
                        type="text" name="phone"
                        placeholder="Telefone"
                        {...formik.getFieldProps('phone')}
                    />

                    <InputStyles
                        type="text" name="birthdate"
                        placeholder="Data de Nascimento"
                        {...formik.getFieldProps('birthdate')}
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
