import { createContext, useState } from "react";


export const IsreadyContext = createContext();

const IsreadyContextProvider = ({ children }) => {

    const [Isready, setIsready] = useState(false);

    return <IsreadyContext.Provider value={{
        Isready,
        setIsready
    }}>{children}</IsreadyContext.Provider>
}

export default IsreadyContextProvider