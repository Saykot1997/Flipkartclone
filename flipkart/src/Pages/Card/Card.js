import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import Cardcomponent from '../../Components/Card/Cardcomponent';
import BottomFooter from '../../Components/Footer/BottomFooter';
import { Header } from '../../Components/Header/Header'
import Cardsactions from '../../Context/Card/Cards.actions';
import { CardsContext } from '../../Context/Card/CardsContextProvider';
import { UserContext } from '../../Context/User/UserContextProvider';
import { Body, Wraper, Right, Green, Total, Saved, PriceDiv, PdetailDiv } from './Card.style'


export default function Card() {

    const { user } = useContext(UserContext);
    const { Cards, Cardsdispatch } = useContext(CardsContext);

    const SignLogo = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/shield_b33c0c.svg"


    useEffect(() => {
        const getCards = async () => {

            if (user) {
                const cards = await axios.get("/cart/getcarts");
                Cardsdispatch({ type: Cardsactions.Reset, payload: cards.data })
            }
        }

        getCards()

    }, [])

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

    return (
        <div>
            <Header />
            <Body>
                <Wraper>
                    <Cardcomponent />
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
