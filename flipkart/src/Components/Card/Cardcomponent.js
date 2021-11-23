import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import Cardsactions from '../../Context/Card/Cards.actions';
import { CardsContext } from '../../Context/Card/CardsContextProvider';
import { IsreadyContext } from '../../Context/Isready/Isready';
import { UserContext } from '../../Context/User/UserContextProvider';
import { Left, HeaderArea, Bottom, Order, CartTitle, DeliveryTo, Search, SearchInput, Dicriment, Incriment, Check, Midd, Photofield, Textfield, Name, Delevery, ControlBox, Display } from './Card-component.style'


export default function Cardcomponent({ full, offtitle, button, small, Ordered }) {

    const { user } = useContext(UserContext);
    const { Isready, setIsready } = useContext(IsreadyContext);
    const { Cards, Cardsdispatch } = useContext(CardsContext);
    const history = useHistory();
    const [offbtn, setOffbtn] = useState(false);

    const roundLogo = <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" class="_3GN0Y0"><g fill="none"><path d="M-1-1h16v16H-1"></path><path d="M7 0C3.136 0 0 3.136 0 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm.7 10.5H6.3V6.3h1.4v4.2zm0-5.6H6.3V3.5h1.4v1.4z" fill="#388e3c" class=""></path></g></svg>
    const logo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg=="


    const increment = async (card) => {

        if (user) {

            const increse = await axios.post("/cart/increment", { productId: card._id });

            if (increse.status == 200) {
                const cartItems = await axios.get("/cart/getcarts");
                Cardsdispatch({ type: Cardsactions.Reset, payload: cartItems.data });
            }

        } else {
            const updateAbbleCard = {
                ...card,
                quantity: parseInt(card.quantity) + 1
            }
            Cardsdispatch({ type: Cardsactions.Feaching_success, payload: updateAbbleCard })
        }
    }

    const dicripent = async (card) => {
        if (user) {

            if (card.quantity > 1) {
                const increse = await axios.post("/cart/dicrement", { productId: card._id });

                if (increse.status == 200) {
                    const cartItems = await axios.get("/cart/getcarts");
                    Cardsdispatch({ type: Cardsactions.Reset, payload: cartItems.data });
                }
            }

        } else {
            if (card.quantity > 1) {
                const updateAbbleCard = {
                    ...card,
                    quantity: parseInt(card.quantity) - 1
                }
                Cardsdispatch({ type: Cardsactions.Feaching_success, payload: updateAbbleCard })
            } else {
                window.alert("you cunt decriment less then 1 ")
            }
        }


    }

    const removeCard = async (card) => {

        if (user) {

            const res = await axios.post("/cart/delete", { productId: card._id });
            if (res.status === 200) {
                const cartItems = await axios.get("/cart/getcarts");
                Cardsdispatch({ type: Cardsactions.Reset, payload: cartItems.data });
            }

        } else {

            Cardsdispatch({ type: Cardsactions.Feaching_failur, payload: card });
        }

    }

    const checkoutPage = () => {
        history.replace("/checkout")
    }

    const offButton = () => {
        setOffbtn(!offbtn);
        !Isready && setIsready(!Isready);

    }
    console.log(Isready)


    return (
        <Left full={full} small={small} offbtn={offbtn}>
            <div >
                <HeaderArea title={offtitle}>
                    <CartTitle>
                        <p>My Card ({Cards.length})</p>
                    </CartTitle>
                    <div style={{ display: "flex" }}>
                        <img style={{ marginRight: "10px" }} src={logo} alt="" />
                        <DeliveryTo >Delivery to</DeliveryTo>
                        <Search style={{ display: "flex" }}>
                            <SearchInput type="text" placeholder="Enter Delivery Pincode" /> <Check>Check</Check>
                        </Search>
                    </div>

                </HeaderArea>
                {Cards.map((card, index) => (
                    <Midd key={index}>
                        <div style={{ display: "flex" }}>
                            <Photofield>
                                <img src={`http://localhost:8000/${card.img}`} alt="" />
                            </Photofield>
                            <Textfield>
                                <Name>{card.name}</Name>
                                <p>6 GB Ram</p>
                                <p>Seller:RECOM <img style={{ height: "15px" }} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" /> </p>
                                <p>${card.quantity * parseInt(card.price)} <span>1 Offer Applied</span>  {roundLogo}</p>
                            </Textfield>
                            <Delevery>
                                <p>Delivery by Sun Oct 24</p>
                                <p>7 Days Replacement Policy</p>
                            </Delevery>
                        </div>
                        <div style={{ display: "flex", marginTop: "10px" }}>
                            <ControlBox >
                                <Dicriment onClick={() => { dicripent(card) }}>-</Dicriment> <Display>{card.quantity}</Display><Incriment onClick={() => { increment(card) }}>+</Incriment>
                            </ControlBox>

                            <p onClick={() => { removeCard(card) }} style={{ textTransform: "uppercase", cursor: "pointer" }}>remove</p>
                        </div>
                    </Midd>
                ))}
                <Bottom>
                    <Order onClick={Ordered ? offButton : checkoutPage}>{button ? button : "Place Order"}</Order>
                </Bottom>
            </div>

            {
                offbtn ?
                    <div style={{ height: "40px", padding: "10px 20px", display: "flex", justifyContent: "space-between" }}>
                        <p >{Cards.length} Items</p>
                        <p onClick={offButton} style={{ cursor: "pointer", color: "green" }}>Edite</p>
                    </div> : null


            }

        </Left>
    )
}
