import { createContext, useReducer } from "react"
import Reducer from "./Orders.reducer";


const INITIA_STATE = {
    Orders: null
}

export const OrdersContext = createContext(INITIA_STATE);

const OrdersContextProvider = ({ children }) => {

    const [state, OrdersDispatch] = useReducer(Reducer, INITIA_STATE);

    return <OrdersContext.Provider value={{
        Orders: state.Orders,
        OrdersDispatch
    }}>{children}</OrdersContext.Provider>
}

export default OrdersContextProvider

