import { createContext, useReducer, useEffect } from "react"
import Reducer from "./Cards.reducer";


const INITIA_STATE = {
    Cards: JSON.parse(localStorage.getItem("Cards")) || []
}

export const CardsContext = createContext(INITIA_STATE);

const CardsContextProvider = ({ children }) => {

    const [state, Cardsdispatch] = useReducer(Reducer, INITIA_STATE);

    useEffect(() => {
        localStorage.setItem("Cards", JSON.stringify(state.Cards));
    }, [state.Cards]);


    return <CardsContext.Provider value={{
        Cards: state.Cards,
        Cardsdispatch
    }}>{children}</CardsContext.Provider>
}

export default CardsContextProvider

