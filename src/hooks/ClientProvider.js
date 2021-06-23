import React, { useState, useEffect, useContext, createContext } from 'react';

const ClientContext = createContext();

const ClientProvider = ({children}) => {

    const [client, setClient] = useState({})

    return(
        <ClientContext.Provider
            value={{
                client,
                setClient
            }}
        >
            {children}
        </ClientContext.Provider>
    )
}

const useClient = () => {
    const context = useContext(ClientContext);
    return context
}

export { ClientProvider, useClient };