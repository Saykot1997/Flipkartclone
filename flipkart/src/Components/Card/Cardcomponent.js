import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import Cardsactions from '../../Context/Card/Cards.actions';
import { CardsContext } from '../../Context/Card/CardsContextProvider';
import { IsreadyContext } from '../../Context/Isready/Isready';
import { UserContext } from '../../Context/User/UserContextProvider';
import { Left, HeaderArea, Bottom, Order, CartTitle, DeliveryTo, Search, SearchInput, Dicriment, Incriment, Check, Midd, Photofield, Textfield, Name, Delevery, ControlBox, Display } from './Card-component.style';
import { Host, Locationlogo, roundLogo } from '../../data';


export default function Cardcomponent({ full, offtitle, button, small, Ordered }) {

    const { user } = useContext(UserContext);
    const { Isready, setIsready } = useContext(IsreadyContext);
    const { Cards, Cardsdispatch } = useContext(CardsContext);
    const history = useHistory();
    const [offbtn, setOffbtn] = useState(false);

    const increment = async (card) => {

        if (user) {

            try {

                await axios.post(`${Host}/api/cart/increment`, { productId: card._id }, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });

                const cartItems = await axios.get(`${Host}/api/cart/getcarts`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });

                Cardsdispatch({ type: Cardsactions.Reset, payload: cartItems.data });

            } catch (error) {

                console.log(error);
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

            try {

                if (card.quantity > 1) {

                    await axios.post(`${Host}/api/cart/dicrement`, { productId: card._id }, {
                        headers: {
                            'Authorization': `Bearer ${user.token}`
                        }
                    });

                    const cartItems = await axios.get(`${Host}/api/cart/getcarts`, {
                        headers: {
                            'Authorization': `Bearer ${user.token}`
                        }
                    });

                    Cardsdispatch({ type: Cardsactions.Reset, payload: cartItems.data });

                }

            } catch (error) {

                console.log(error);
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

            try {

                await axios.post(`${Host}/api/cart/delete`, { productId: card._id }, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });

                const cartItems = await axios.get(`${Host}/api/cart/getcarts`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });

                Cardsdispatch({ type: Cardsactions.Reset, payload: cartItems.data });

            } catch (error) {

                console.log(error);
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


    return (
        <Left full={full} small={small} offbtn={offbtn}>
            <div >
                <HeaderArea title={offtitle}>
                    <CartTitle>
                        <p>My Card ({Cards.length})</p>
                    </CartTitle>
                    <div style={{ display: "flex" }}>
                        <img style={{ marginRight: "10px" }} src={Locationlogo} alt="" />
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
                                <img src={`${Host}/${card.img}`} alt="" />
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
