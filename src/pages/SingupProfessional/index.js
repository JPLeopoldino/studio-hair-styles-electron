import React from 'react';
import { useFormik } from 'formik';
import { Container, Form, Input, Button, Label, BgForm, TouchableOpacity} from './styles';
import * as Yup from 'yup';
//import useAuth from '../../hooks/useAuth';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import { Alert } from 'react-native';


const SingupProfessional = () => {

    //const authentication = useAuth();

  /*  const auth = async(values)=>{
        try {
            const response = await api.post('/login', {
                email: values.email,
                password: values.password
            });
            if(response.data.auth){
                await AsyncStorage.setItem('auth', JSON.stringify(response.data));
                navigation.navigate('Home');
            } else{
                Alert.alert('não encontrado');
            }
            
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(()=>{
         if(authentication?.token){ 
            navigation.navigate('Home');
        }
    }, [authentication]);
 
 */

    const formik = useFormik ({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            birthdate: '',
            sex: '',
            job: '',
            password: '',
            passwordTwo: ''
        },

        validationSchema: Yup.object({
            name: Yup.string().required('O nome é obrigatório'),
            birthdate: Yup.string().required('A data de nascimento é obrigatória'),
            email: Yup.string().required('O e-mail é obrigatório').email('E-mail inválido'), // email ja tem um sistema de validação configurado por trás dele no yup
            phone: Yup.number().test('len', 'O número deve conter o DDD', val => val.toString().length === 11),
            job: Yup.string().required('A função é obrigatória!'),
            password: Yup.string().required('A senha é obrigatória').min(8, 'minimo 8 caracteres'),
            passwordTwo: Yup.string().required('A confirmação da senha é obrigatória').oneOf([Yup.ref('password')], 'As senhas não são iguais')

        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2)); /* o JSON é um objeto e stringify é uma função dele
            ( Ela pega um objeto no formato JSON( os valores neste caso) e constrói uma string( um texto) */
        }
    });

    return (
        <div>
            <Container>
            <h1 style={{textAlign:'center',textShadow:'5px 5px black'}}> Cadastro de Profissionais </h1>
            <BgForm>
            <Form onSubmit={formik.handleSubmit}>
                <div>
                    <Label for="name"> Nome</Label>
                    <Input 
                        type="text" 
                        id="name" 
                        placeholder="Nome completo"
                        {...formik.getFieldProps('name')}

                    />
                    {formik.errors.name && formik.touched.name ? <span style={{textAlign:'right',fontSize:'15px',color:'red',}}>{formik.errors.name}</span> : null}
                </div>
                <div>
                    <Label for="email"> E-mail</Label>
                    <Input
                        type="text" 
                        id="email" 
                        placeholder="Digite um e-mail válido"
                        {...formik.getFieldProps('email')}
 
                    />
                    {formik.errors.email && formik.touched.email ? <span style={{textAlign:'Center',fontSize:'15px',color:'red',}}>{formik.errors.email}</span> : null}
                </div>
                <div>
                    <Label for="phone"> Telefone</Label>
                    <Input 
                        type="number" 
                        id="phone" 
                        placeholder="Digite seu telefone para contato"
                        {...formik.getFieldProps('phone')}

                    />

                    {formik.errors.phone && formik.touched.phone ? <span style={{textAlign:'Center',fontSize:'15px',color:'red',}}>{formik.errors.phone}</span> : null}

                </div>
                <div>
                    <Label for="birthdate"> Data de aniversário</Label>
                    <Input 
                        type="date" 
                        id="birthdate" 
                        {...formik.getFieldProps('birthdate')}

                    />
                    {formik.errors.birthdate && formik.touched.birthdate ? <span style={{textAlign:'Center',fontSize:'15px',color:'red',}}>{formik.errors.birthdate}</span> : null}
                </div>
                <div>
                    <Label for="sex"> Sexo</Label>
                    <Input 
                        type="text" 
                        id="sex" 
                        placeholder="Ex: Masculino"

                    /> 
                </div>
                <div>
                    <Label for="job"> Função </Label>
                    <Input 
                        type="text" 
                        id="job" 
                        placeholder="Ex: Cabelereira e Maquiadora"
                        {...formik.getFieldProps('job')}

                    />
                    {formik.errors.job && formik.touched.job ? <span style={{textAlign:'Center',fontSize:'15px',color:'red',}}>{formik.errors.job}</span> : null}
                </div>
                <div>
                    <Label for="password"> Senha </Label>
                    <Input 
                        type="password" 
                        id="password" 
                        placeholder="Digite uma senha forte"
                        {...formik.getFieldProps('password')}

                    />
                    {formik.errors.password && formik.touched.password ? <span style={{textAlign:'Center',fontSize:'15px',color:'red',}}>{formik.errors.password}</span> : null}
                </div>
                <div>
                    <Label for="passwordTwo"> Confirme a senha </Label>
                    <Input 
                        type="password" 
                        id="passwordTwo" 
                        placeholder="Digite a senha novamente"
                        {...formik.getFieldProps('passwordTwo')}

                    />
                    {formik.errors.passwordTwo && formik.touched.passwordTwo ? <span style={{textAlign:'right',fontSize:'15px',color:'red',}}>{formik.errors.passwordTwo}</span> : null}

                </div>
                <Button type="submit" style={{fontSize:'18px',}}> Enviar </Button>
                

            </Form>
            </BgForm>
            </Container>
        </div>
    );
}

export default SingupProfessional;