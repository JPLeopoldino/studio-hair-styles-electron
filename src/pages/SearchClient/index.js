import React from 'react';
import DataTable from 'react-data-table-component';
import NavMenu from '../../components/NavMenu';
import { MainContainer } from '../../styles';
import { Container } from './styles';

const columns = [
    {
        name: "Nome",
        selector: "name"
    },
    {
        name: "Email",
        selector: "email"
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
    }

]

const SearchClient = () => {
    return(
        <MainContainer >
            <NavMenu />
                <Container>          
                    <DataTable 
                        title = "Clientes"
                        columns = {columns}
                        data = {data}
                    />
                </Container>          
        </MainContainer>
    );
};

export default SearchClient;