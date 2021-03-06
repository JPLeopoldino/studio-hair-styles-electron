import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Input, Label, BgForm } from './styles';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import { Button} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/AuthProvider';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const SingupProfessional = () => {

    const [redirect, setRedirect] = useState(false);

    const [visible, setVisible] = useState(false);

    const [dados, setDados] = useState({});
    const { auth } = useAuth();

    /* const postProfessional = async () => {
         try {
             const response = await api.get(`/professionals/`, {
                 headers: {
                     'x-access-token': `${auth.token}`
                 }
             });
             setDados(response.data);
         }
         catch (error) {
             console.log(error);
         }
     } */

    const CadProfessional = async (value) => {
        try {
            const response = await api.post(`/professionals/`, {
                name: value.name,
                email: value.email,
                phone: value.phone,
                type: value.type,
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
            birthdate: '',
            type: '',
            password: '',
            passwordTwo: ''
        },

        validationSchema: Yup.object({
            name: Yup.string().required('O nome ?? obrigat??rio'),
            birthdate: Yup.string().required('A data de nascimento ?? obrigat??ria'),
            email: Yup.string().required('O e-mail ?? obrigat??rio').email('E-mail inv??lido'), // email ja tem um sistema de valida????o configurado por tr??s dele no yup
            //phone: Yup.number().test('len', 'O n??mero deve conter o DDD', val => val.toString().length === 11),
            type: Yup.string().required('A fun????o ?? obrigat??ria!'),
            password: Yup.string().required('A senha ?? obrigat??ria').min(8, 'minimo 8 caracteres'),
            passwordTwo: Yup.string().required('A confirma????o da senha ?? obrigat??ria').oneOf([Yup.ref('password')], 'As senhas n??o s??o iguais')

        }),
        onSubmit: values => {
            CadProfessional(values);
        }
    });

    return (
        <Container>
            {
                redirect
                    ? <Redirect to="/home" />
                    : (
                        <>

                            <h1 style={{ textAlign: 'center', textShadow: '5px 5px black' }}> Cadastro de Profissionais </h1>
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
                                            placeholder="Digite um e-mail v??lido"
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
                                        <Label htmlFor="birthdate"> Data de anivers??rio</Label>
                                        <Input
                                            type="date"
                                            id="birthdate"
                                            {...formik.getFieldProps('birthdate')}

                                        />
                                        {formik.errors.birthdate && formik.touched.birthdate ? <span style={{ textAlign: 'Center', fontSize: '15px', color: 'red', }}>{formik.errors.birthdate}</span> : null}
                                    </div>

                                    <div>
                                        <Label htmlFor="type"> Fun????o </Label>
                                        <Input
                                            type="text"
                                            id="type"
                                            placeholder="Ex: Cabelereira e Maquiadora"
                                            {...formik.getFieldProps('type')}

                                        />
                                        {formik.errors.type && formik.touched.type ? <span style={{ textAlign: 'Center', fontSize: '15px', color: 'red', }}>{formik.errors.type}</span> : null}
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

                                    <Button onClick={formik.handleSubmit} style={{ fontSize: '18px', }} color="primary" variant="contained"> Enviar </Button>

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

export default SingupProfessional;