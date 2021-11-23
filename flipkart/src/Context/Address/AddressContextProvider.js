import { createContext, useReducer, useEffect } from "react"
import Reducer from "./Addres.reducer";


const INITIA_STATE = {
    Address: null
}

export const AddressContext = createContext(INITIA_STATE);

const AddressContextProvider = ({ children }) => {

    const [state, Addressdispatch] = useReducer(Reducer, INITIA_STATE);

    return <AddressContext.Provider value={{
        Address: state.Address,
        Addressdispatch
    }}>{children}</AddressContext.Provider>
}

export default AddressContextProvider

