import { createContext, useReducer } from "react"
import Reducer from "./Product.reducer";


const INITIA_STATE = {
    products: null
}

export const productContext = createContext(INITIA_STATE);

const ProductContextProvider = ({ children }) => {

    const [state, productDispatch] = useReducer(Reducer, INITIA_STATE);

    return <productContext.Provider value={{
        products: state.products,
        productDispatch
    }}>{children}</productContext.Provider>
}

export default ProductContextProvider

