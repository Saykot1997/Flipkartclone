import { createContext, useReducer } from "react"
import Reducer from "./Category.reducer";


const INITIA_STATE = {
    categories: null
}

export const categoryContext = createContext(INITIA_STATE);

const CategoryContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, INITIA_STATE);

    return <categoryContext.Provider value={{
        categories: state.categories,
        dispatch
    }}>{children}</categoryContext.Provider>
}

export default CategoryContextProvider

