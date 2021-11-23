import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextProvider from "./Context/Admin Context/ContextProvider";
import CategoryContextProvider from "./Context/Category-Conttext/CategoryContextProvider"
import OrdersContextProvider from './Context/Order Context/OrdersContextProvider';
import ProductContextProvider from "./Context/Product context/ProductContextProvider"


ReactDOM.render(
    <OrdersContextProvider>
        <ProductContextProvider>
            <CategoryContextProvider>
                <ContextProvider>
                    <App />
                </ContextProvider>
            </CategoryContextProvider>
        </ProductContextProvider>
    </OrdersContextProvider>
    , document.getElementById('root'));

