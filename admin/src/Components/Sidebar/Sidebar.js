import { Wraper, Ul } from "./Sidebar.style"
import { NavLink } from "react-router-dom";


function Sidebar() {

    return (
        <Wraper>
            <Ul>
                <NavLink activeClassName="selected" exact to="/"><li>Home</li></NavLink>
                <NavLink activeClassName="selected" exact to="/pagecreate"><li>Page</li></NavLink>
                <NavLink activeClassName="selected" to="/category"><li>Category</li></NavLink>
                <NavLink activeClassName="selected" to="/product"><li>Product</li></NavLink>
                <NavLink activeClassName="selected" to="/order"><li>Order</li></NavLink>
            </Ul>
        </Wraper>
    )
}

export default Sidebar
