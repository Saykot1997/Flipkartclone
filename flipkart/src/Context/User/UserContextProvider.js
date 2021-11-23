import { createContext, useReducer, useEffect } from "react"
import Reducer from "./User.reducer";


const INITIA_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null
}

export const UserContext = createContext(INITIA_STATE);

const UserContextProvider = ({ children }) => {

    const [state, Userdispatch] = useReducer(Reducer, INITIA_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return <UserContext.Provider value={{
        user: state.user,
        Userdispatch
    }}>{children}</UserContext.Provider>
}

export default UserContextProvider

