import React from 'react';
import DataTable from 'react-data-table-component';

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
        <div>
            <DataTable 
                title = "Clientes"
                columns = {columns}
                data = {data}
            />
        </div>
    );
};

export default SearchClient;