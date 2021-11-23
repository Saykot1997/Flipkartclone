import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { logoURL, subURL } from '../../data';
import axios from "axios";
import {
    Wraper, LogoImg, LoginBox, Log, LI, Sing, Sublogo, Fast, Second, Sub, Search, Right, Left, Logo, Input, SearchIcon,
    LoginBtn, CloseBtn, Botton, More, Span, Cart, DropArrow, ShoppingCart, SigninBox, LeftBox, RightBox, SinginDiv, InputDiv,
    PolicyBox, OR, OPT, Account, SignupBox, SingupDiv, User, ItemNumber
} from './Header.style'
import { UserContext } from '../../Context/User/UserContextProvider';
import Useractions from '../../Context/User/User.actions';
import Cardsactions from '../../Context/Card/Cards.actions';
import { CardsContext } from '../../Context/Card/CardsContextProvider';
import { AddressContext } from '../../Context/Address/AddressContextProvider';
import Addressactions from '../../Context/Address/Address.actions';



export const Header = () => {
    const { user, Userdispatch } = useContext(UserContext);
    const [loginOpen, setLoginOpen] = useState(false);
    const [loginBox, setLoginBox] = useState(false);
    const [signupBox, setSignupBox] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPasword] = useState("");
    const { Cards, Cardsdispatch } = useContext(CardsContext);
    const { Address, Addressdispatch } = useContext(AddressContext);

    const openLoginBox = () => {
        setLoginOpen(false);
        setLoginBox(true);
    }

    const openSignupBox = () => {
        setLoginBox(false);
        setSignupBox(true);
    }

    const UserRegister = async () => {

        if (!firstName || !lastName || !regEmail || !regPassword) {

            window.alert("Fill all the fields");

        } else {
            const user = {
                firstName,
                lastName,
                email: regEmail,
                password: regPassword
            };
            setFirstName("");
            setLastName("");
            setRegPassword("");
            setRegEmail("");
            setSignupBox(false);
            try {
                await axios.post("/signup", user);
            } catch (error) {
                window.alert("Could not create user try diffrent information")
            }


        }

    }

    const UserLogin = async () => {

        if (!loginEmail || !loginPassword) {
            window.alert("Fill all the fields");
        } else {
            const userObj = {
                email: loginEmail,
                password: loginPassword
            }

            setLoginEmail("");
            setLoginPasword("");
            setLoginBox(false);

            try {
                const res = await axios.post("/signin", userObj);
                res && Userdispatch({ type: Useractions.Feaching_success, payload: res.data });

            } catch (error) {
                window.alert("Could not login")
            }


            try {

                const cards = await axios.get("/cart/getcarts");
                const localCards = JSON.parse(localStorage.getItem("Cards"));

                if (localCards.length > 0 && cards) {

                    const cartItems = [];

                    localCards.forEach(card => {
                        const curentCart = cards.data.find((item) => item._id == card._id);

                        if (curentCart) {
                            const updatedCart = {
                                product: curentCart._id,
                                quantity: parseInt(curentCart.quantity) + parseInt(card.quantity)
                            }

                            cartItems.push(updatedCart)
                        } else {
                            const updatedCart = {
                                product: card._id,
                                quantity: card.quantity
                            }

                            cartItems.push(updatedCart)
                        }

                    });


                    const Card = {

                        cartItems: cartItems
                    }

                    const updateCarts = await axios.post("/cart/add", Card);

                    if (updateCarts) {

                        const allCarts = await axios.get("/cart/getcarts");
                        Cardsdispatch({ type: Cardsactions.Reset, payload: allCarts.data })
                    }
                } else {

                    const allCarts = await axios.get("/cart/getcarts");
                    Cardsdispatch({ type: Cardsactions.Reset, payload: allCarts.data })

                }


            } catch (error) {

                console.log(error)
            }

        }

    }

    const Logout = () => {
        setLoginOpen(false);
        localStorage.clear();
        Userdispatch({ type: Useractions.Feaching_failur });
        Cardsdispatch({ type: Cardsactions.Reset, payload: [] })
        Addressdispatch({ type: Addressactions.Feaching_failur })

    }


    return (
        <div>
            <Wraper>
                <Left>
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                        <Logo>
                            <LogoImg src={logoURL} />
                            <Sublogo>
                                <Fast>Explore</Fast><Second>Pluse</Second><Sub src={subURL} />
                            </Sublogo>
                        </Logo>
                    </Link>

                    <Search>
                        <Input placeholder="Search for product brand and more" />
                        <SearchIcon />
                    </Search>
                </Left>
                <Right>


                    {
                        user ? (<User onClick={() => { setLoginOpen(!loginOpen) }}>{user.firstName}</User>) : (<Botton onClick={() => { setLoginOpen(!loginOpen) }}>Login</Botton>)
                    }

                    {
                        user ?

                            (<LoginBox loginOpen={loginOpen}>
                                <LI>My Profile</LI>
                                <LI>Super Coin Zone</LI>
                                <LI>Flipkart Pluse Zone</LI>
                                <LI>  <Link to={"/account/order"} style={{ textDecoration: "none", color: "#333" }}>Order</Link></LI>
                                <LI>Wishlist</LI>
                                <LI>My Card</LI>
                                <LI>Coupne</LI>
                                <LI>Gift Card</LI>
                                <LI>Notification</LI>
                                <LI last onClick={Logout}>Logout</LI>
                            </LoginBox>)

                            :

                            (
                                <LoginBox loginOpen={loginOpen}>
                                    <LI>
                                        <Log>
                                            <p>New Customer</p>
                                            <Sing onClick={openLoginBox}>Sign Up</Sing>
                                        </Log>
                                    </LI>
                                    <LI> My Profile</LI>
                                    <LI>Flipkart Pluse Zone</LI>
                                    <LI>Order</LI>
                                    <LI>Wishlist</LI>
                                    <LI>Rewards</LI>
                                    <LI last>Gift Card</LI>
                                </LoginBox>
                            )
                    }


                    <More>
                        <Span>More</Span>
                        <DropArrow />
                    </More>
                    <Cart>
                        <Link style={{ color: "#fff", textDecoration: "none", display: "block" }} to="/card">
                            {Cards.length > 0 && <ItemNumber><p>{Cards.length}</p></ItemNumber>}
                            <ShoppingCart />
                            <Span>Cart</Span>
                        </Link>
                    </Cart>
                </Right>
            </Wraper>


            {/* signup part start */}

            <SingupDiv signupBox={signupBox}>
                <SignupBox>
                    <CloseBtn onClick={() => { setSignupBox(false) }}>X</CloseBtn>
                    <LeftBox>
                        <h2>Looks like you're new here!</h2>
                        <p>Sign up with your mobile number to get started</p>
                    </LeftBox>
                    <RightBox reg>
                        <InputDiv>
                            <input type="text" value={firstName} autoFocus placeholder="First Name" onChange={(e) => { setFirstName(e.target.value) }} />
                        </InputDiv>
                        <InputDiv>
                            <input type="text" value={lastName} placeholder="Lasr Name" onChange={(e) => { setLastName(e.target.value) }} />
                        </InputDiv>
                        <InputDiv>
                            <input type="text" value={regEmail} placeholder="Email" onChange={(e) => { setRegEmail(e.target.value) }} />
                        </InputDiv>
                        <InputDiv last>
                            <input type="password" value={regPassword} placeholder="Password" onChange={(e) => { setRegPassword(e.target.value) }} />
                        </InputDiv>
                        <PolicyBox reg>
                            <p>By continuing, you agree to Flipkart's <Link>Terms of Use </Link> and <Link>Privacy Policy</Link>.</p>
                        </PolicyBox>
                        <div style={{ marginBottom: "20px" }}>
                            <LoginBtn onClick={UserRegister}>Register</LoginBtn>
                        </div>
                        <OPT onClick={openLoginBox}>Existing User? Login</OPT>
                    </RightBox>
                </SignupBox>
            </SingupDiv>

            {/* signup part End */}

            {/* signin part start */}

            <SinginDiv loginBox={loginBox}>
                <SigninBox>
                    <CloseBtn onClick={() => { setLoginBox(false) }}>X</CloseBtn>
                    <LeftBox>
                        <h2>Login</h2>
                        <p>Get access to your Orders, Wishlist and Recommendations</p>
                    </LeftBox>
                    <RightBox>
                        <InputDiv>
                            <input type="text" autoFocus value={loginEmail} placeholder="Enter your email" onChange={(e) => { setLoginEmail(e.target.value) }} />
                        </InputDiv>
                        <InputDiv>
                            <input type="password" value={loginPassword} placeholder="Enter Your password" onChange={(e) => { setLoginPasword(e.target.value) }} /> <p onClick={openSignupBox}>Forgot?</p>
                        </InputDiv>
                        <PolicyBox>
                            <p>By continuing, you agree to Flipkart's <Link>Terms of Use </Link> and <Link>Privacy Policy</Link>.</p>
                        </PolicyBox>
                        <div>
                            <LoginBtn onClick={UserLogin}>Login</LoginBtn>
                        </div>
                        <OR>OR</OR>
                        <OPT onClick={openSignupBox}>Request OPT</OPT>
                        <Account onClick={openSignupBox}>New to Flipkart? Create an account</Account>
                    </RightBox>
                </SigninBox>
            </SinginDiv>

            {/* signin part end */}
        </div>
    )
}
