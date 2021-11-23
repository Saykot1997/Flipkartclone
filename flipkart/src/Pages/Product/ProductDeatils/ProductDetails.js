import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
import BottomFooter from '../../../Components/Footer/BottomFooter';
import { Header } from '../../../Components/Header/Header';
import { Menu } from '../../../Components/Menu-Header/Menu';
import Cardsactions from '../../../Context/Card/Cards.actions';
import { CardsContext } from '../../../Context/Card/CardsContextProvider';
import { UserContext } from '../../../Context/User/UserContextProvider';
import img from "../../../img/bolt.svg"
import { Body, Wraper, Left, Right, Thumnail, PictureBox, ButtonBox, AddCard, Buy, Brade, ProductName, RProduct, Desc, Price, Offer, DescP } from './ProductDetails.style';

export default function ProductDetails(props) {

    const { user } = useContext(UserContext);
    const { Cards, Cardsdispatch } = useContext(CardsContext);
    const productId = props.match.params.productId;
    const [product, setProduct] = useState(null);
    const [parentCategories, setParentCatrgories] = useState(null)
    const history = useHistory();

    const iconStyle = { height: "18px", width: "18px", marginRight: "10px" };
    const iconLink = "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90";
    const AVG = <svg style={{ marginRight: "5px" }} width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path class="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>


    useEffect(() => {

        const getProduct = async () => {
            const res = await axios.get(`/product/${productId}`);
            res && setProduct(res.data.product);
            setParentCatrgories(res.data.parentCategories)
        }
        getProduct();

    }, []);

    const AddToCard = async (product) => {

        if (!user) {

            const { _id, name, price } = product;
            const img = product.productPicture[0].img
            const Card = {
                _id,
                name,
                price,
                img
            }

            if (Cards.length > 0) {
                const curentItem = Cards.find((item) => (item._id == product._id));
                if (curentItem) {
                    curentItem["quantity"] = curentItem["quantity"] + 1
                    Cardsdispatch({ type: Cardsactions.Feaching_success, payload: curentItem })
                } else {
                    Card["quantity"] = 1;
                    Cardsdispatch({ type: Cardsactions.Feaching_success, payload: Card })
                }

            } else {
                Card["quantity"] = 1;
                Cardsdispatch({ type: Cardsactions.Feaching_success, payload: Card })
            }

            history.replace("/card");

        } else {

            const Card = {
                user_id: user._id,
                cartItems: [{
                    product: product._id,
                }]
            }



            if (Cards.length > 0) {
                const curentItem = Cards.find((item) => (item._id == product._id));

                if (curentItem) {

                    Card.cartItems[0]["quantity"] = curentItem["quantity"] + 1

                } else {
                    Card.cartItems[0]["quantity"] = 1;

                }

            } else {
                Card.cartItems[0]["quantity"] = 1;
            }

            const res = await axios.post("/cart/add", Card);
            res && history.replace("/card");
        }

    }


    if (!product) {

        return null

    } else {
        return (
            <div>
                <Header />
                <Menu />
                <Body>
                    <Wraper>
                        <Left>
                            <div style={{ display: "flex" }}>
                                <Thumnail>
                                    {
                                        product.productPicture.map((pic, index) => (
                                            <div key={index}>
                                                <img src={`http://localhost:8000/${pic.img}`} alt="" />
                                            </div>
                                        ))
                                    }
                                </Thumnail>

                                <PictureBox>
                                    <div>
                                        {
                                            <img src={`http://localhost:8000/${product.productPicture[0].img}`} alt="" />
                                        }
                                    </div>
                                </PictureBox>
                            </div>

                            <div>
                                <ButtonBox>
                                    <AddCard onClick={() => { AddToCard(product) }}>{AVG}ADD TO CART</AddCard>
                                    <Buy> <img style={{ height: "16px", marginRight: "5px" }} src={img} alt="" /> BUY NOW</Buy>
                                </ButtonBox>
                            </div>
                        </Left>

                        <Right>
                            {
                                parentCategories &&
                                <Brade>
                                    <li><Link to={"/"}>Home{` >`}</Link></li>
                                    <li>{parentCategories[1].name + " >"}</li>
                                    <li>{parentCategories[0].name + " >"}</li>
                                    <li><Link to={`/${product.category.slug}/?cid=${product.category._id}&type=${product.category.type}`}>{product.category.name + " >"}</Link></li>
                                    <li>{product.name}</li>
                                </Brade>
                            }

                            <ProductName>{product.name}</ProductName>
                            <div style={{ display: "flex" }}>
                                <RProduct>Be the first to Review this product</RProduct>
                                <img style={{ height: "21px", margin: "10px 0 0 10px" }} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" />
                            </div>
                            <div>
                                <Price>${product.price}</Price>
                            </div>
                            <Offer>Available offers</Offer>
                            <div style={{ display: "flex", margin: "10px 0" }}>
                                <img style={iconStyle} src={iconLink} alt="" />
                                <p style={{ fontSize: "13px" }}> <span style={{ fontWeight: "500" }}>Bank Offer</span> 10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and aboveT&C</p>
                            </div>
                            <div style={{ display: "flex", margin: "10px 0" }}>
                                <img style={iconStyle} src={iconLink} alt="" />
                                <p style={{ fontSize: "13px" }}> <span style={{ fontWeight: "500" }}>Bank Offer</span> 10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and aboveT&C</p>
                            </div>
                            <div style={{ display: "flex", margin: "10px 0" }}>
                                <img style={iconStyle} src={iconLink} alt="" />
                                <p style={{ fontSize: "13px" }}> <span style={{ fontWeight: "500" }}>Bank Offer</span> 10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and aboveT&C</p>
                            </div>
                            <div style={{ display: "flex", margin: "10px 0" }}>
                                <img style={iconStyle} src={iconLink} alt="" />
                                <p style={{ fontSize: "13px" }}> <span style={{ fontWeight: "500" }}>Bank Offer</span> 10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and aboveT&C</p>
                            </div>
                            <div style={{ display: "flex", marginTop: "30px" }}>
                                <Desc>Description</Desc>
                                <DescP>{product.description}</DescP>
                            </div>
                        </Right>
                    </Wraper>
                </Body>
                <BottomFooter />
            </div>
        )
    }


}
