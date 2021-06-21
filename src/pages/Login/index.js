import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Form, Input, Miss, Label, BgForm, Img, ImgContainer} from './styles';
import { Redirect } from 'react-router-dom';
import { useNavigationBar } from '../../hooks/NavigationBarProvider';
import { Button } from '@material-ui/core';
import { useAuth } from '../../hooks/AuthProvider';
import { api } from '../../services/api';

const Login = () =>{

    const [redirect, setRedirect] = useState(false);

    const { setAuth } = useAuth();
    const { setOpen } = useNavigationBar();

    const auth = async(values)=>{
        try {
            const response = await api.post('/login', {
                email: values.login,
                password: values.senha
            });
            if(response.data.auth){
                setAuth(response.data);
                setOpen(false);
                setRedirect(true);
                console.log(response.data);
            } else{
                Alert.alert('não encontrado');
            }
            
        } catch (e) {
            console.log(e);
        }
    }
    
    const formik = useFormik({
        initialValues: {
            login:'',
            senha:'',
        },
        validationSchema: Yup.object({
            login: Yup.string().required('Esse campo é obrigatório!'),
            senha: Yup.string().required('Esse campo é obrigatória!')
            // .matches(
            //     /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            //     "A senha deve conter pelo menos 8 caracteres, uma maiúscula, um número e um caractere especial"
            // ),
        }),
        onSubmit: values => {
            auth(values);
        }
    });

    return(
        <Container>
            {
                redirect
                    ? <Redirect to="/home" />
                    : (
                        <>
                            <ImgContainer>
                                <Img src="./assets/Logo.svg" />
                                <h1>Hair Styles Studio</h1>
                            </ImgContainer>
                            <BgForm>
                                <Form>
                                    <div>
                                        <Label htmlFor="Login">Login</Label>
                                        <Input
                                            type="text"
                                            id="login"
                                            placeholder="E-mail"
                                            value={formik.values.login}
                                            {...formik.getFieldProps('login')}
                                        />
                                        {formik.errors.login && formik.touched.login ? <span style={{ color: 'red', fontSize: '16px', fontWeight: '300' }}>{formik.errors.login}</span> : null}
                                    </div>
                                    <div>
                                        <Input
                                            type="password"
                                            id="senha"
                                            placeholder="Senha"
                                            minLength="8"
                                            {...formik.getFieldProps('senha')}
                                        />
                                        {formik.errors.senha && formik.touched.senha ? <span style={{ color: 'red', fontSize: '16px', fontWeight: '300' }}>{formik.errors.senha}</span> : null}
                                    </div>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        style={{ marginTop: '20px', width: '100%' }}
                                        onClick={formik.handleSubmit}
                                    >
                                        ENVIAR
                                    </Button>
                                    <div>
                                        <Miss href="">Esqueceu sua senha?</Miss>
                                    </div>
                                </Form>
                            </BgForm>
                        </>
                    )}
        </Container>
    );
}


export default Login;