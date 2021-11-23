import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CardsContextProvider from './Context/Card/CardsContextProvider';
import CategoryContextProvider from './Context/Category-Conttext/CategoryContextProvider';
import PageContextProvider from './Context/Page/PageContextProvider';
import ProductContextProvider from "./Context/Product context/ProductContextProvider";
import UserContextProvider from './Context/User/UserContextProvider';
import AddressContextProvider from './Context/Address/AddressContextProvider';
import IsreadyContextProvider from './Context/Isready/Isready';


ReactDOM.render(
  <IsreadyContextProvider>
    <AddressContextProvider>
      <CardsContextProvider>
        <UserContextProvider>
          <PageContextProvider>
            < ProductContextProvider>
              <CategoryContextProvider>
                <App />
              </CategoryContextProvider>
            </ProductContextProvider>
          </PageContextProvider>
        </UserContextProvider>
      </CardsContextProvider>
    </AddressContextProvider>
  </IsreadyContextProvider>
  , document.getElementById('root'));
