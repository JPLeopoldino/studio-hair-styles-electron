import React from 'react';
import {ContainerProfile, Header, ImgProfile, UserInfo, Buttons, Edit, History, MainText} from './styles';
import { MainContainer } from '../../styles';
import NavMenu from '../../components/NavMenu';
import {Link} from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];


const ProfessionalProfile = () =>{
    return(
        <MainContainer >
            <NavMenu/>
            <ContainerProfile>
                <Header>
                    <ImgProfile src="https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"/>

                    <UserInfo>
                        <MainText>USER NAME</MainText>
                        <p>EMAIL@EMAIL.COM</p>
                        <p>1612345678</p>
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