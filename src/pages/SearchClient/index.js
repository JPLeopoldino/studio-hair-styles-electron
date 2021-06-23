import React, { useState, useEffect, useCallback } from 'react';
import DataTable from 'react-data-table-component';
import { DataGrid } from '@material-ui/data-grid';
import NavMenu from '../../components/NavMenu';
import { MainContainer } from '../../styles';
import { Container, ButtonContainer } from './styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/AuthProvider';
import { Redirect } from 'react-router-dom';
import { useClient } from '../../hooks/ClientProvider';
// import Autocomplete from '@material-ui/lab/Autocomplete';

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
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nome', width: 280 },
    { field: 'email', headerName: 'E-mail', width: 180 },
    { field: 'phone', headerName: 'Celular', width: 180 },
    { field: 'birthdate', headerName: 'Data de Nascimento', width: 230 },
    // {
    //     name: "Nome",
    //     selector: "name"
    // },
    // {
    //     name: "Email",
    //     selector: "email"
    // },
    // {
    //     name: "Telefone",
    //     selector: "phone"
    // },
    // {
    //     name: "Data de Nascimento",
    //     selector: "birthdate"
    // },
    // {
    //     name: "Ações",
    //     cell: row => 
    //         <ButtonContainer> 
    //             <Link to="/EditClient">
    //                 <Button color="primary" variant="contained" >Editar</Button>
    //             </Link>
    //             <Button color="primary" variant="contained" >Desativar</Button>
    //         </ButtonContainer>
                  
    // },
]; 

const SearchClient = () => {
    const { auth } = useAuth();
    const { setClient } = useClient();
    const [dados,setDados] = useState([]);
    const [search, setSearch] = useState('');
    const [redirect, setRedirect] = useState(false);

    const selectClient = (value) => {
        try {
            setClient(value.id);
            console.log(value.id);
            setRedirect(true);
        } catch (error) {
            console.log(error);
        }
    }

    const getData = async() => {
        try {
            const response = await api.get('/clients', {
                headers:{
                    'x-access-token': auth.token
                }
            } );
            setDados(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const searchData = useCallback ( async() => {
        try {
            const response = await api.get(`/clients/search/${search}`, 
            {
                    headers:{
                        'x-access-token': auth.token
                    }
                }
            );
              setDados(response.data);  

        } catch (error) {
            console.log(error);
        }
    }, [search])

    useEffect(() => {
        if(search === '') {
            getData();
        }else{
            searchData();
        }       
    }, [search]);


    return(
        <MainContainer >
            {
                redirect
                ? <Redirect to="/editClient" />
                : (
                    <>
                        <NavMenu />
                        <div>
                        {/* <Autocomplete
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            // options={top100Films.map((option) => option.title)}
                            renderInput={(params) => ( */}
                            <TextField
                                // {...params}
                                value={search}
                                label="Search input"
                                onChange={(event) => setSearch(event.target.value)}
                                margin="normal"
                                variant="outlined"
                                InputProps={{type: 'search' }}
                            />
                        {/*  )}
                        /> */}
                            <Container>          
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid 
                                    // title = "Clientes"
                                    rows={dados}
                                    columns={columns}
                                    pageSize={5}
                                    onRowClick={(dados) => selectClient(dados)}
                                />
                            </div>
                                <Link to="/Home">
                                    <Button color="primary" variant="contained" >Agendar</Button>
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
                    </>
                )
            }
        </MainContainer>
    );
};

export default SearchClient;