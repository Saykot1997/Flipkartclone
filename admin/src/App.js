import Home from "./Pages/Home-page/Home"
import Signin from "./Pages/Signin-page/Signin";
import Signup from "./Pages/Signup-pag/Signup";
import Product from "./Pages/Products/Product";
import Order from "./Pages/Order/Order";
import Category from "./Pages/Category/Category";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { authContext } from "./Context/Admin Context/ContextProvider";
import { useContext, useEffect } from "react"
import { productContext } from "./Context/Product context/ProductContextProvider";
import { categoryContext } from "./Context/Category-Conttext/CategoryContextProvider";
import axios from "axios";
import Categoryactions from "./Context/Category-Conttext/Category.actions";
import Productactions from "./Context/Product context/Product.actions";
import PageCreate from "./Pages/Page-create/PageCreate";



function App() {

  const { productDispatch } = useContext(productContext);
  const { user } = useContext(authContext);
  const { dispatch } = useContext(categoryContext);

  useEffect(() => {

    //category data fatch
    const getCategory = async () => {

      try {
        const res = await axios.get("/categories")
        res && dispatch({ type: Categoryactions.Feaching_success, payload: res.data })
      } catch (error) {
        dispatch({ type: Categoryactions.Feaching_failur })
      }
    }

    user && getCategory()

    //products data fatch
    const getData = async () => {

      try {
        const res = await axios.get("/products")
        res && productDispatch({ type: Productactions.Feaching_success, payload: res.data })
      } catch (error) {
        productDispatch({ type: Productactions.Feaching_failur })
      }

    }

    user && getData()

  }, [user]);


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={user ? Home : Signup} />
        <Route exact path="/pagecreate" component={user ? PageCreate : Signup} />
        <Route exact path="/signin" component={user ? Home : Signin} />
        <Route exact path="/signup" component={user ? Home : Signup} />
        <Route exact path="/product" component={user ? Product : Signin} />
        <Route exact path="/order" component={user ? Order : Signin} />
        <Route exact path="/category" component={user ? Category : Signin} />
      </Switch>
    </Router >
  );
}

export default App;
