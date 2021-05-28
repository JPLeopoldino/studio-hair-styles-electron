import React from 'react';
import { useFormik } from 'formik';
import { Container, Form, Input, Button, Miss, Label, BgForm, Img, ImgContainer} from './styles';
import {Link} from 'react-router-dom';


const Login = () =>{
    const validate = values => {
        const errors = {};

        // VALIDAÇÃO DE LOGIN
        if (!values.login){
            errors.login = 'O Login é obrigatório!';
        };
        
        // VALIDAÇÃO DE SENHA
        if (!values.senha){
            errors.senha = 'A senha é obrigatória!';
        } else if (values.senha.length !== 14){
            errors.senha = 'Senha Inválida.';
        };
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            login:'',
            senha:'',
        },
        validate,
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
                                onChange={formik.handleChange}
                            />
                          {formik.errors.login ? <span style={{color:'red',fontSize:'12px'}}>{formik.errors.login}</span> : null}
                        </div>
                        <div>
                            <Label for="Senha">Senha </Label>
                            <Input 
                                type="password"
                                id="senha"
                                placeholder="Senha"
                                minLength="8"
                                value={formik.values.senha}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.senha ? <span style={{color:'red',fontSize:'12px',}}>{formik.errors.senha}</span> : null}
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