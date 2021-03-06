import React, { useContext, useEffect, useState } from 'react'
import { Wraper, Heading, Title, Button, Card, CardItem, Photo, Price, Reating, Img, Deatails, Name } from "./ProductList.style"
import { useLocation } from 'react-router'
import axios from 'axios';
import { productContext } from '../../../Context/Product context/ProductContextProvider';
import Productactions from '../../../Context/Product context/Product.actions';
import { Link } from 'react-router-dom';
import { Host } from '../../../data';

export default function Productstore() {

    const PF = Host + "/"
    const { products, productDispatch } = useContext(productContext)
    const path = useLocation().pathname;
    const category = path.split("/")[1];
    const [parentCategory, setParentCategory] = useState("");

    useEffect(() => {

        const getProduct = async () => {

            try {

                const res = await axios.get(`${Host}/api/products${path}`);
                productDispatch({ type: Productactions.Feaching_success, payload: res.data })

            } catch (error) {

                console.log(error)
            }
        }

        getProduct()

        const getParentCategory = async () => {

            const res = await axios.post(`${Host}/api/categories/parent`, { slug: category });

            setParentCategory(res.data)
        }

        getParentCategory()
    }, [path]);



    return (
        <>
            {
                products && products.productByPrice && Object.keys(products.productByPrice).map((key) => {
                    return (
                        <Wraper>
                            <Heading>
                                <Title>{category + " " + parentCategory + " " + key}</Title>
                                <Link to={`/brand/${category}`}><Button>View all</Button></Link>
                            </Heading>

                            {

                                products.productByPrice[key].length > 0 ? (products.productByPrice[key].length > 6 ?

                                    <Card>
                                        {
                                            products.productByPrice[key].slice(0, 6).map((product) =>

                                                <Link to={`/${product.slug}/${product._id}/p`} style={{ color: "#333", textDecoration: "none" }}>
                                                    <CardItem>
                                                        <Photo>
                                                            <Img src={PF + product.productPicture[0].img} alt="" />
                                                        </Photo>
                                                        <Deatails>
                                                            <Name>{product.name}</Name>
                                                            <Reating>
                                                                <span>4.5</span> <span>({product.quantity})</span>
                                                            </Reating>
                                                            <Price>
                                                                <span>${product.price}</span>
                                                            </Price>
                                                        </Deatails>
                                                    </CardItem>
                                                </Link>

                                            )
                                        }

                                    </Card>

                                    :

                                    <Card>
                                        {
                                            products.productByPrice[key].map((product) =>

                                                <Link to={`/${product.slug}/${product._id}/p`} style={{ color: "#333", textDecoration: "none" }}>
                                                    <CardItem>
                                                        <Photo>
                                                            <Img src={PF + product.productPicture[0].img} alt="" />
                                                        </Photo>
                                                        <Deatails>
                                                            <Name>{product.name}</Name>
                                                            <Reating>
                                                                <span>4.5</span> <span>({product.quantity})</span>
                                                            </Reating>
                                                            <Price>
                                                                <span>${product.price}</span>
                                                            </Price>
                                                        </Deatails>
                                                    </CardItem>
                                                </Link>

                                            )
                                        }

                                    </Card>) : null
                            }

                        </Wraper>
                    )
                })
            }

        </>
    )
}
