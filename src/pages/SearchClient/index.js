import React from 'react';
import DataTable from 'react-data-table-component';
import NavMenu from '../../components/NavMenu';
import { MainContainer } from '../../styles';
import { Container, Button } from './styles';
import { Link } from 'react-router-dom';

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

const columns = [
    {
        name: "Nome",
        selector: "name"
    },
    {
        name: "Email",
        selector: "email"
    },
    {
        name: "Telefone",
        selector: "phone"
    },
    {
        name: "Ações",
        cell: row => <Link to="/EditClient">
            <Button>Editar</Button>
        </Link>      
    },
]; 
const data = [
    {
        "id": 2,
        "name": "Maria Souza",
        "email": "maria@gmail.com",       
        "phone": "16 99999-3333",
        "profile_image": null,
        "birthdate": null        
    },
    {
        "id": 4,
        "name": "Gabriel Silva",
        "email": "gabriel@gmail.com",        
        "phone": "16 94444-2222",
        "profile_image": null,
        "birthdate": null     
    },
    {
        "id": 5,
        "name": "Gabriel Silva",
        "email": "gabriel@gmail.com",        
        "phone": "16 94444-2222",
        "profile_image": null,
        "birthdate": null 
    },
]

const SearchClient = () => {
    return(
        <MainContainer >
            <NavMenu />
            <div>
                <Container>          
                    <DataTable 
                        title = "Clientes"
                        columns = {columns}
                        data = {data}                                                                   
                    />
                    <Link to="/Home">
                        <Button>Agendar</Button>
                    </Link>
                </Container> 
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
                </div>        
        </MainContainer>
    );
};

export default SearchClient;