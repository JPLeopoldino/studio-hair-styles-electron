import React, { createContext, useContext, useState } from 'react';

const NavigationBarContext = createContext();

const NavigationBarProvider = ({ children }) => {

    const [open, setOpen] = useState(false);

    return(
        <NavigationBarContext.Provider
            value={{
                open,
                setOpen,
            }}
        >
            {children}
        </NavigationBarContext.Provider>
    )
}

const useNavigationBar = () => {
    const context = useContext(NavigationBarContext);
    
    return context;
};

export { useNavigationBar, NavigationBarProvider };