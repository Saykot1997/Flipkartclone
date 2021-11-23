import { Wraper, Title, NavMenu, NavItem, NavLink } from "./Navbar.style"
import { authContext } from "../../Context/Admin Context/ContextProvider";
import { useContext } from "react";
import { actions } from "../../Context/Admin Context/actions";


export default function Navbar() {

    const { user, dispatch } = useContext(authContext);

    const logout = () => {
        dispatch({ type: actions.Log_out })
        window.location.replace("/signin")
    }

    return (

        <Wraper user={user}>
            <Title><NavLink to="/">Admin Dashboar</NavLink></Title>
            <NavMenu>
                {user ? <NavItem><NavLink onClick={logout}>Signout</NavLink></NavItem> :
                    <div style={{ display: "flex" }}>
                        <NavItem><NavLink to="/signup">Signup</NavLink></NavItem>
                        <NavItem><NavLink to="/signin">Signin</NavLink></NavItem>
                    </div>}
            </NavMenu>
        </Wraper>
    );
}
