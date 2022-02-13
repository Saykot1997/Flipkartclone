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
import { Host, AVG, iconLink } from '../../../data';

export default function ProductDetails(props) {

    const { user } = useContext(UserContext);
    const { Cards, Cardsdispatch } = useContext(CardsContext);
    const productId = props.match.params.productId;
    const [product, setProduct] = useState(null);
    const [parentCategories, setParentCatrgories] = useState(null)
    const history = useHistory();
    const [activeImgLink, setActiveImgLink] = useState("");

    const iconStyle = { height: "18px", width: "18px", marginRight: "10px" };

    useEffect(() => {

        const getProduct = async () => {

            try {

                const res = await axios.get(`${Host}/api/product/${productId}`);
                setProduct(res.data.product);
                setParentCatrgories(res.data.parentCategories);
                setActiveImgLink(`${Host}/${res.data.product.productPicture[0].img}`);

            } catch (error) {

                console.log(error)
            }
        }

        getProduct();

    }, []);

    const AddToCard = async (product) => {
        try {

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

                    const curentItem = Cards.find((item) => (item._id === product._id));

                    if (curentItem) {

                        curentItem["quantity"] = curentItem["quantity"] + 1
                        Cardsdispatch({ type: Cardsactions.Feaching_success, payload: curentItem });

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

                    const curentItem = Cards.find((item) => (item._id === product._id));

                    if (curentItem) {

                        Card.cartItems[0]["quantity"] = curentItem["quantity"] + 1

                    } else {

                        Card.cartItems[0]["quantity"] = 1;
                    }

                } else {

                    Card.cartItems[0]["quantity"] = 1;
                }

                await axios.post(`${Host}/api/cart/add`, Card, {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                });
                history.replace("/card");
            }

        } catch (error) {

            console.log(error);
        }

    };

    const setActiveImgLinkFunc = (img) => {

        setActiveImgLink(`${Host}/${img}`);
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
                                            <div key={index} onClick={() => setActiveImgLinkFunc(pic.img)}>
                                                <img src={`${Host}/${pic.img}`} alt="" />
                                            </div>
                                        ))
                                    }
                                </Thumnail>

                                <PictureBox>
                                    <div>
                                        {
                                            <img src={activeImgLink} alt="" />
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
