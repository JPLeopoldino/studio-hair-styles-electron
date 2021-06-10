import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Form, Input, Button, Miss, Label, BgForm, Img, ImgContainer} from './styles';
import {Link, Redirect} from 'react-router-dom';


const Login = () =>{
    const formik = useFormik({
        initialValues: {
            login:'',
            senha:'',
        },
        validationSchema: Yup.object({
            login: Yup.string().required('Esse campo é obrigatório!'),
            senha: Yup.string().required('Esse campo é obrigatória!').matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "A senha deve conter pelo menos 8 caracteres, uma maiúscula, um número e um caractere especial"
            ),

        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return(
            <Container>
                <ImgContainer>
                    <Img src="./assets/Logo.svg"/>
                </ImgContainer>
                <BgForm>   
                    <Form>
                        <div>
                            <Label for="Login">Login</Label>
                            <Input 
                                type="text" 
                                id="login"
                                placeholder="Login"
                                value={formik.values.login}
                                {...formik.getFieldProps('login')}
                            />
                          {formik.errors.login && formik.touched.login ? <span style={{color:'red',fontSize:'12px',}}>{formik.errors.login}</span> : null}
                        </div>
                        <div>
                            <Label for="Senha">Senha </Label>
                            <Input 
                                type="password"
                                id="senha"
                                placeholder="Senha"
                                minLength="8"
                                {...formik.getFieldProps('senha')}
                            />
                            {formik.errors.senha && formik.touched.senha ? <span style={{color:'red',fontSize:'12px',}}>{formik.errors.senha}</span> : null}
                        </div>
                        <Link to="/home">
                            <Button>ENTRAR</Button>
                        </Link>
                        <div>
                            <Miss href="#">Esqueceu sua senha?</Miss>
                        </div>
                    </Form>
                </BgForm>                    
            </Container>
    );
}


export default Login;