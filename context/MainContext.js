import { useState } from 'react'
import { createContext } from 'react';

const MainContext = createContext({});

export const MainContextProvider = ({ children }) => {
    const [position, setPosition] = useState({ x: 1, y: 0 })

    return <MainContext.Provider value={{
        position,
        setPosition,
    }}
    >
        {children}
    </MainContext.Provider>;
};

export default MainContext;