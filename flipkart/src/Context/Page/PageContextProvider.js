import { createContext, useReducer } from "react"
import Reducer from "./Page.reducer";


const INITIA_STATE = {
    pages: null
}

export const PageContext = createContext(INITIA_STATE);

const PageContextProvider = ({ children }) => {

    const [state, Pagedispatch] = useReducer(Reducer, INITIA_STATE);

    return <PageContext.Provider value={{
        pages: state.pages,
        Pagedispatch
    }}>{children}</PageContext.Provider>
}

export default PageContextProvider

