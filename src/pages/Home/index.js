import React, {useState,useEffect} from 'react';
import * as SC from './styles';
import NavMenu from '../../components/NavMenu';
import { Button } from '@material-ui/core';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/AuthProvider';

const Home = () => {
  
  const [dados, setDados] = useState({});
  const { auth } = useAuth();

  const getUser = async () =>{
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

 useEffect(()=>{
   getUser();
 },[])

    return(
        <SC.MainContainer>
        <NavMenu/>
          <SC.Container>
            <SC.TitleContainer>
              <SC.ImageContainer>
                <SC.Image src={dados.profile_image} />
              </SC.ImageContainer>
              <SC.Title>Seja bem-vindo(a)</SC.Title>  
              <SC.TitleUsername>{dados.name}</SC.TitleUsername>
            </SC.TitleContainer>
          </SC.Container>
        </SC.MainContainer>
    );
}

export default Home;