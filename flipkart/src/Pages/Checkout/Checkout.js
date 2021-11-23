import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../../Components/Header/Header';
import { Menu } from '../../Components/Menu-Header/Menu';
import Addressactions from '../../Context/Address/Address.actions';
import { AddressContext } from '../../Context/Address/AddressContextProvider';
import { UserContext } from '../../Context/User/UserContextProvider';
import {
    Body, Wraper, Left, Right, User, DelAddress, AdBody, OrderSum, PamentOp, Title, FirstName, AddAddress, EdditeAddress,
    Number, LoginBox, Advantage, Type, Green, PdetailDiv, PriceDiv, Total, Saved, AdrADD, ComonBTN, ShowAddress,
} from './Checkout.style';
import { GrDeliver } from "react-icons/gr";
import { BsFillBellFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Useractions from '../../Context/User/User.actions';
import { CardsContext } from '../../Context/Card/CardsContextProvider';
import Cardsactions from '../../Context/Card/Cards.actions';
import Cardcomponent from '../../Components/Card/Cardcomponent';
import { IsreadyContext } from '../../Context/Isready/Isready';

export default function Checkout() {

    const { Address, Addressdispatch } = useContext(AddressContext);
    const { Cards, Cardsdispatch } = useContext(CardsContext);
    const { user, Userdispatch } = useContext(UserContext);
    const { Isready } = useContext(IsreadyContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [clickedForAdd, setClickedForAdd] = useState(false);
    const [name, setName] = useState("");
    const [mobileNum, setMobileNum] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [locality, setLocality] = useState("");
    const [areaStreat, setAreaStreat] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [landmark, setlandmark] = useState("");
    const [altMobile, setAltmobile] = useState("");
    const [addressType, setAddressType] = useState("");
    const [edit, setEdit] = useState(false);
    const [order, setOrder] = useState("");
    const [confirmOrder, setConfirmOrder] = useState(false);

    const SignLogo = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/shield_b33c0c.svg"

    const login = async () => {

        if (!email || !password) {

            window.alert("you hove to fill all the fields to login");

        } else {

            try {
                const userObj = {
                    email,
                    password
                }

                setEmail("")
                setPassword("");
                const res = await axios.post("/signin", userObj);
                Userdispatch({ type: Useractions.Feaching_success, payload: res.data })

            } catch (error) {
                console.log(error)
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


    const totalItems = () => {
        let total = 0
        Cards.map((card) => total = card.quantity + total)
        return total
    }

    const totalPrice = () => {
        let total = 0
        Cards.map((card) => total = (card.quantity * parseInt(card.price)) + total)
        return total
    }
    const totalItem = totalItems()
    const total = totalPrice();

    const openAddAdress = () => {
        setClickedForAdd(!clickedForAdd);
    }

    const editeMode = () => {
        setEdit(!edit)
    }

    const AddAddressFunc = async () => {

        if (!name || !mobileNum || !pinCode || !locality || !areaStreat || !city || !state || !landmark || !altMobile || !addressType) {

            window.alert("you have to fill all the fields");

        } else {

            setClickedForAdd(!clickedForAdd);

            const address = {
                name,
                mobileNumber: mobileNum,
                pinCode,
                locality,
                address: areaStreat,
                city,
                state,
                landmark: landmark,
                alterMobileNumber: altMobile,
                addressType
            };

            const Address = await axios.post("/user/address/create", { address });
            Addressdispatch({ type: Addressactions.Feaching_success, payload: Address.data.address });

            setName(Address.data.address.name);
            setPinCode(Address.data.address.pinCode);
            setMobileNum(Address.data.address.mobileNumber);
            setLocality(Address.data.address.locality);
            setAreaStreat(Address.data.address.address);
            setCity(Address.data.address.city);
            setState(Address.data.address.state);
            setlandmark(Address.data.address.landmark);
            setAltmobile(Address.data.address.alterMobileNumber);
            setAddressType(Address.data.address.addressType);
        }
    }

    const editeAddress = async () => {
        const address = {
            name,
            mobileNumber: mobileNum,
            pinCode,
            locality,
            address: areaStreat,
            city,
            state,
            landmark: landmark,
            alterMobileNumber: altMobile,
            addressType
        };

        setEdit(!edit)

        const Address = await axios.put("/user/address/update", { address });
        Addressdispatch({ type: Addressactions.Feaching_success, payload: Address.data.address });

        setName(Address.data.address.name);
        setPinCode(Address.data.address.pinCode);
        setMobileNum(Address.data.address.mobileNumber);
        setLocality(Address.data.address.locality);
        setAreaStreat(Address.data.address.address);
        setCity(Address.data.address.city);
        setState(Address.data.address.state);
        setlandmark(Address.data.address.landmark);
        setAltmobile(Address.data.address.alterMobileNumber);
        setAddressType(Address.data.address.addressType);
    }

    useEffect(() => {
        const getAddress = async () => {
            try {
                if (user) {
                    const Address = await axios.get("/user/address");
                    Addressdispatch({ type: Addressactions.Feaching_success, payload: Address.data.address });

                    setName(Address.data.address.name);
                    setPinCode(Address.data.address.pinCode);
                    setMobileNum(Address.data.address.mobileNumber);
                    setLocality(Address.data.address.locality);
                    setAreaStreat(Address.data.address.address);
                    setCity(Address.data.address.city);
                    setState(Address.data.address.state);
                    setlandmark(Address.data.address.landmark);
                    setAltmobile(Address.data.address.alterMobileNumber);
                    setAddressType(Address.data.address.addressType);
                }

            } catch (error) {

                console.log(error)
            }
        }

        getAddress()

    }, [user])

    const submiteOrder = async () => {

        setConfirmOrder(true);

        const items = Cards.map((item) => ({
            productId: item._id,
            payablePrice: item.price * item.quantity,
            purchasedQty: item.quantity
        }))

        const orderObj = {
            totalAmount: total,
            items,
            paymentStatus: "pending",
            paymentType: "cod",
            orderStatus: [
                {
                    type: "ordered",
                    date: new Date(),
                    isComplete: false
                }
            ]

        }
        const res = await axios.get("/user/address");
        orderObj.addressId = res.data._id

        if (res) {
            const res = await axios.post("/order/add", orderObj);
            res && Cardsdispatch({ type: Cardsactions.Reset, payload: [] })
        }
    }

    if (confirmOrder) {
        return (
            <div>
                <Header />
                <Menu />
                <Body>
                    <h1 style={{ textAlign: "center" }}>Thank you</h1>
                </Body>
            </div>
        )
    }

    return (
        <div>
            <Header />
            <Menu />
            <Body>
                <Wraper>
                    <Left>
                        <User>
                            {
                                user ?
                                    (
                                        <div>
                                            <Title Logedin>
                                                <Number Logedin>1</Number>
                                                <p>Logedin</p>
                                            </Title>
                                            <div style={{ padding: "0 0 20px 20px" }}>
                                                {
                                                    Address ? <FirstName>{Address.name} <span>{Address.mobileNumber}</span></FirstName> : <FirstName>{user.firstName} {user.lastName}</FirstName>
                                                }

                                            </div>
                                        </div>


                                    ) :
                                    (
                                        <div>
                                            <Title>
                                                <Number>1</Number>
                                                <p>login or signup</p>
                                            </Title>
                                            <div style={{ display: "flex", justifyContent: "space-between", padding: "15px 30px" }}>
                                                <LoginBox>
                                                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                                                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                                                    <button onClick={login}>Login</button>
                                                </LoginBox>
                                                <Advantage>
                                                    <p>Advantagae of our secure login</p>
                                                    <p><GrDeliver style={{ marginRight: "10px", fontSize: "16px" }} />Easy Track Order,Hassle free Return</p>
                                                    <p><BsFillBellFill style={{ marginRight: "10px", color: "#2874f0", fontSize: "16px" }} />Get Relavent Notification and Recomendetion</p>
                                                    <p><AiFillStar style={{ marginRight: "10px", color: "#2874f0", fontSize: "16px" }} />Wishlist,Review,Rating and More</p>
                                                </Advantage>
                                            </div>
                                        </div>
                                    )
                            }
                        </User>
                        <DelAddress>
                            {
                                Address ?
                                    (
                                        <div>
                                            <Title Logedin>
                                                <Number Logedin>2</Number>
                                                <p>Delivery Address</p>
                                            </Title>
                                            <AdBody>
                                                <EdditeAddress edit={edit} >
                                                    <input type="text" placeholder={Address.name} onChange={(e) => { setName(e.target.value) }} />
                                                    <input type="text" placeholder={Address.mobileNumber} onChange={(e) => { setMobileNum(e.target.value) }} />
                                                    <input type="text" placeholder={Address.pinCode} onChange={(e) => { setPinCode(e.target.value) }} />
                                                    <input type="text" placeholder={Address.locality} onChange={(e) => { setLocality(e.target.value) }} />
                                                    <textarea placeholder={Address.address} onChange={(e) => { setAreaStreat(e.target.value) }}></textarea>
                                                    <input type="text" placeholder={Address.city} onChange={(e) => { setCity(e.target.value) }} />
                                                    <select onChange={(e) => { setState(e.target.value) }}>
                                                        <option value="">State</option>
                                                        <option value="Dhaka">Dhaka</option>
                                                        <option value="Rajshahi">Rajshahi</option>
                                                        <option value="Chumilla">Chumilla</option>
                                                        <option value="Sylet">Sylet</option>
                                                        <option value="Rongpur">Rongpur</option>
                                                    </select>
                                                    <input type="text" placeholder={Address.landmark} onChange={(e) => { setlandmark(e.target.value) }} />
                                                    <input type="text" placeholder={Address.alterMobileNumber} onChange={(e) => { setAltmobile(e.target.value) }} />
                                                    <select onChange={(e) => { setAddressType(e.target.value) }}>
                                                        <option value="">Address Type</option>
                                                        <option value="work">Work</option>
                                                        <option value="home">Home</option>
                                                    </select>
                                                    <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }} >
                                                        <ComonBTN onClick={editeAddress}>Save Changed Address</ComonBTN>
                                                        <ComonBTN onClick={editeMode}>Cencel</ComonBTN>

                                                    </div>
                                                </EdditeAddress>
                                                <ShowAddress edit={edit}>
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <div>
                                                            <p>{Address.name} <Type> {Address.addressType}</Type></p>
                                                            <p>{Address.landmark}-{Address.address},{Address.locality},{Address.city},{Address.state}</p>
                                                        </div>
                                                        <div>
                                                            <p onClick={editeMode} style={{ color: "green", cursor: "pointer" }}>Edite</p>
                                                        </div>
                                                    </div>
                                                </ShowAddress>

                                            </AdBody>

                                        </div>
                                    ) :

                                    (
                                        <div>
                                            <Title Logedin >
                                                <Number>2</Number>
                                                <p>Delivery Address</p>
                                            </Title>
                                            <AddAddress clickedForAdd={clickedForAdd}>
                                                <input type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                                                <input type="text" placeholder="11 Digit Mobile Number" onChange={(e) => { setMobileNum(e.target.value) }} />
                                                <input type="text" placeholder="Pincode" onChange={(e) => { setPinCode(e.target.value) }} />
                                                <input type="text" placeholder="Locality" onChange={(e) => { setLocality(e.target.value) }} />
                                                <textarea placeholder="Area and Street" onChange={(e) => { setAreaStreat(e.target.value) }}></textarea>
                                                <input type="text" placeholder="City" onChange={(e) => { setCity(e.target.value) }} />
                                                <select onChange={(e) => { setState(e.target.value) }}>
                                                    <option value="">State</option>
                                                    <option value="Dhaka">Dhaka</option>
                                                    <option value="Rajshahi">Rajshahi</option>
                                                    <option value="Chumilla">Chumilla</option>
                                                    <option value="Sylet">Sylet</option>
                                                    <option value="Rongpur">Rongpur</option>
                                                </select>
                                                <input type="text" placeholder="Landmark" onChange={(e) => { setlandmark(e.target.value) }} />
                                                <input type="text" placeholder="Alter Mobile Number" onChange={(e) => { setAltmobile(e.target.value) }} />
                                                <select onChange={(e) => { setAddressType(e.target.value) }}>
                                                    <option value="">Address Type</option>
                                                    <option value="work">Work</option>
                                                    <option value="home">Home</option>
                                                </select>
                                            </AddAddress>
                                            {
                                                user ?

                                                    (<AdrADD >
                                                        {clickedForAdd ?
                                                            <div> <ComonBTN onClick={AddAddressFunc}>Save Address</ComonBTN>  <ComonBTN onClick={openAddAdress}>Cancel</ComonBTN>
                                                            </div> : <ComonBTN onClick={openAddAdress}>Add A New Address</ComonBTN>
                                                        }
                                                    </AdrADD>)

                                                    : null
                                            }

                                        </div>
                                    )
                            }
                        </DelAddress>
                        <OrderSum>

                            {
                                Cards && user && Address ?
                                    (
                                        <div>
                                            <Title Logedin>
                                                <Number Logedin>3</Number>
                                                <p>Order Summery</p>
                                            </Title>
                                            <Cardcomponent full={true} Ordered={true} offtitle={true} button="CONTINUE" small={true} />
                                        </div>
                                    )
                                    :
                                    (
                                        <div>
                                            <Title Logedin>
                                                <Number >3</Number>
                                                <p>Delivery Address</p>
                                            </Title>
                                        </div>
                                    )
                            }

                        </OrderSum>
                        <PamentOp>
                            <div>
                                <Title Logedin>
                                    <Number Logedin>4</Number>
                                    <p>Order</p>
                                </Title>
                                {
                                    Isready ?
                                        (
                                            <div style={{ padding: "0 20px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <form>
                                                    <input onChange={(e) => { setOrder(e.target.value) }} type="radio" id="delevery" value="Cash on delevery" />
                                                    <label htmlFor="delevery" style={{ marginLeft: "10px" }}>Cash on delevery</label>
                                                </form>
                                                <ComonBTN onClick={submiteOrder}>Confirm Order</ComonBTN>
                                            </div>

                                        ) : null
                                }
                            </div>
                        </PamentOp>
                    </Left>
                    <div style={{ width: "33%" }}>
                        <Right>
                            <PdetailDiv>
                                <p>PRICE DETAILS</p>
                            </PdetailDiv>
                            <PriceDiv>
                                <p>Price ({totalItem} items)</p>
                                <p>${total}</p>
                            </PriceDiv>
                            <PriceDiv>
                                <p>Discount</p>
                                <Green>$4000</Green>
                            </PriceDiv>
                            <PriceDiv>
                                <p>Buy More Save More</p>
                                <Green>$2000</Green>
                            </PriceDiv>
                            <PriceDiv>
                                <p>Delivery Charges</p>
                                <Green>Free</Green>
                            </PriceDiv>
                            <Total>
                                <h4>Total Amount</h4>
                                <h4>${total}</h4>
                            </Total>
                            <Saved>
                                <p>You have saved $4100</p>
                            </Saved>
                        </Right>
                        <div style={{ display: "flex", marginTop: "20px" }}>
                            <img style={{ width: "26px", marginRight: "10px" }} src={SignLogo} alt="" />  <p style={{ fontSize: "14px", fontWeight: "500", color: "#666" }}> Safe and Secure Payments.Easy returns.100% <br /> Authentic products.</p>
                        </div>
                    </div>
                </Wraper>
            </Body>
        </div>
    )
}
