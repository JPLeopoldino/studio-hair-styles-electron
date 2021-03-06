import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Input, Label, BgForm} from './styles';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/AuthProvider';


const SingupClient = () => {

    const [redirect, setRedirect] = useState(false);

    const [dados, setDados] = useState({});
    const { auth } = useAuth();


    const CadClient = async (value) => {
        try {
            const response = await api.post(`/clients/`, {
                name: value.name,
                email: value.email,
                phone: value.phone,
                birthdate: value.birthdate,
                password: value.password,
            },
                {
                    headers: {
                        'x-access-token': `${auth.token}`
                    }
                });
            setDados(response.data);
            setRedirect(true);
        }
        catch (error) {
            console.log(error);
        }
    }


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            passwordTwo: ''
        },

        validationSchema: Yup.object({
            name: Yup.string().required('O nome é obrigatório'),
            email: Yup.string().required('O e-mail é obrigatório').email('E-mail inválido'), // email ja tem um sistema de validação configurado por trás dele no yup
            //phone: Yup.number().test('len', 'O número deve conter o DDD', val => val.toString().length === 11),
            birthdate: Yup.string().required('A data de nascimento é obrigatória'),
            password: Yup.string().required('A senha é obrigatória').min(6, 'minimo 6 caracteres'),
            passwordTwo: Yup.string().required('A confirmação da senha é obrigatória').oneOf([Yup.ref('password')], 'As senhas não são as mesmas')

        }),
        onSubmit: values => {
            CadClient(values);
        }
    });

    return (
        <Container>
            {
                redirect
                    ? <Redirect to="/home" />
                    : (
                        <>
                            <h1 style={{ textAlign: 'center', textShadow: '5px 5px black' }}> Cadastro de clientes</h1>
                            <BgForm>
                                <Form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <Label htmlFor="name"> Nome</Label>
                                        <Input
                                            type="text"
                                            id="name"
                                            placeholder="Nome completo"
                                            {...formik.getFieldProps('name')}

                                        />
                                        {formik.errors.name && formik.touched.name ? <span style={{ textAlign: 'right', fontSize: '15px', color: 'red', }}>{formik.errors.name}</span> : null}
                                    </div>
                                    <div>
                                        <Label htmlFor="email"> E-mail</Label>
                                        <Input
                                            type="text"
                                            id="email"
                                            placeholder="Digite um e-mail válido"
                                            {...formik.getFieldProps('email')}

                                        />
                                        {formik.errors.email && formik.touched.email ? <span style={{ textAlign: 'Center', fontSize: '15px', color: 'red', }}>{formik.errors.email}</span> : null}
                                    </div>
                                    <div>
                                        <Label htmlFor="phone"> Telefone</Label>
                                        <Input
                                            type="number"
                                            id="phone"
                                            placeholder="Digite seu telefone para contato"
                                            {...formik.getFieldProps('phone')}

                                        />

                                    </div>
                                    <div>
                                        <Label htmlFor="birthdate"> Data de aniversário</Label>
                                        <Input
                                            type="date"
                                            id="birthdate"
                                            {...formik.getFieldProps('birthdate')}

                                        />
                                        {formik.errors.birthdate && formik.touched.birthdate ? <span style={{ textAlign: 'Center', fontSize: '15px', color: 'red', }}>{formik.errors.birthdate}</span> : null}
                                    </div>
                                    <div>
                                        <Label htmlFor="password"> Senha </Label>
                                        <Input
                                            type="password"
                                            id="password"
                                            placeholder="Digite uma senha forte"
                                            {...formik.getFieldProps('password')}

                                        />
                                        {formik.errors.password && formik.touched.password ? <span style={{ textAlign: 'Center', fontSize: '15px', color: 'red', }}>{formik.errors.password}</span> : null}
                                    </div>
                                    <div>
                                        <Label htmlFor="passwordTwo"> Confirme a senha </Label>
                                        <Input
                                            type="password"
                                            id="passwordTwo"
                                            placeholder="Digite a senha novamente"
                                            {...formik.getFieldProps('passwordTwo')}

                                        />
                                        {formik.errors.passwordTwo && formik.touched.passwordTwo ? <span style={{ textAlign: 'right', fontSize: '15px', color: 'red', }}>{formik.errors.passwordTwo}</span> : null}
                                    </div>

                                    <Button type="submit" style={{ fontSize: '18px', }} color="primary" variant="contained"> Enviar </Button>

                                    <Link to="/Home">
                                        <Button color="primary" variant="contained"> Voltar</Button>
                                    </Link>

                                </Form>
                            </BgForm>
                        </>
                    )}
        </Container>
    );
}

export default SingupClient;