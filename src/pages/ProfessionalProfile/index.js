import React, { useEffect, useState } from 'react';
import {ContainerProfile, Header, ImgProfile, UserInfo, Buttons, Edit, History, MainText} from './styles';
import { MainContainer } from '../../styles';
import NavMenu from '../../components/NavMenu';
import {Link} from 'react-router-dom';
import { useAuth } from '../../hooks/AuthProvider';
import {api} from '../../services/api';

import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Manicure' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Massagem' },
  { startDate: '2018-11-01T13:00', endDate: '2018-11-01T13:30', title: 'Pedicure' },
  { startDate: '2018-11-01T14:00', endDate: '2018-11-01T14:30', title: 'Cabelo' },
];


const ProfessionalProfile = () =>{

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

    useEffect(()=>{
        getProfessional();
    },[])

    return(
        <MainContainer >
            <NavMenu/>
            <ContainerProfile>
                <Header>
                    <ImgProfile src={dados.profile_image}/>

                    <UserInfo>
                        <MainText>{dados.name}</MainText>
                        <p>{dados.email}</p>
                        <p>{dados.phone}</p>
                    </UserInfo>

                    
                </Header>

                <Buttons>
                    <Link to="/editProfessional">
                        <Edit>Editar Usuário</Edit>
                    </Link>
                    
                    <Link to="/servicesHistory">
                        <History>Histórico de serviços</History>
                    </Link>
                </Buttons>

                <div style={{marginTop:30}}>
                    <Paper>
                        <Scheduler
                            data={schedulerData}
                        >
                            <ViewState
                                currentDate={currentDate}
                            />
                            <DayView
                                startDayHour={9}
                                endDayHour={14}
                            />
                            <Appointments />
                        </Scheduler>
                    </Paper>
                </div>
            </ContainerProfile>
        </MainContainer>
    );
}

export default ProfessionalProfile;