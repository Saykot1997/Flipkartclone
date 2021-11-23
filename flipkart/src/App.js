import { useContext, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { categoryContext } from "./Context/Category-Conttext/CategoryContextProvider";
import Categoryactions from "./Context/Category-Conttext/Category.actions";
import { Home } from "./Pages/Home/Home";
import ProductList from "./Pages/Product/ProductList/ProductList";
import ProductDetails from "./Pages/Product/ProductDeatils/ProductDetails";
import Card from "./Pages/Card/Card";
import Checkout from "./Pages/Checkout/Checkout";
import { CardsContext } from "./Context/Card/CardsContextProvider";
import Order from "./Pages/Order/Order";
import BrandProduct from "./Pages/Product/ProductList/BrandProduct";


function App() {

  const { dispatch } = useContext(categoryContext);
  const { Cards, Cardsdispatch } = useContext(CardsContext);


  useEffect(() => {

    //category data fatch
    const getCategory = async () => {

      try {

        const res = await axios.get("/categories")
        res && dispatch({ type: Categoryactions.Feaching_success, payload: res.data });

      } catch (error) {

        dispatch({ type: Categoryactions.Feaching_failur })
      }
    }

    getCategory()

  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/card" component={Card} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/account/order" component={Order} />
        <Route exact path="/brand/:slug" component={BrandProduct} />
        <Route exact path="/:slug" component={ProductList} />
        <Route exact path="/:productSlug/:productId/p" component={ProductDetails} />
      </Switch>
    </Router >
  );
}

export default App;
