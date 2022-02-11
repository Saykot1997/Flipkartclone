import axios from 'axios';
import { Link } from "react-router-dom"
import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import Productactions from '../../../Context/Product context/Product.actions';
import { productContext } from '../../../Context/Product context/ProductContextProvider';
import { Body, FilterSec, ProductSec, WraperBox, SingleProduct, SPIMG, SPDetails, Name, Price } from './ProductList.style';
import Filter from '../../../Components/Filter/Filter';
import { Host, ProductTypePagelogo } from '../../../data';

export default function ProductType() {

    const [filterAbleProduct, setFilterAbleProduct] = useState(null);
    const PF = Host + "/"
    const { productDispatch } = useContext(productContext)
    const path = useLocation().pathname.split('/')[1];

    useEffect(() => {

        const getProduct = async () => {

            const res = await axios.get(`${Host}/api/products/${path}`);

            if (Array.isArray(res.data)) {

                productDispatch({ type: Productactions.Feaching_success, payload: res.data });
                setFilterAbleProduct(res.data);

            } else if (Array.isArray(res.data.products)) {

                productDispatch({ type: Productactions.Feaching_success, payload: res.data.products });
                setFilterAbleProduct(res.data.products);
            }
        }

        getProduct()

    }, [path]);



    return (
        <div>
            <Body>
                <WraperBox>
                    <FilterSec>
                        <Filter setFilterAbleProduct={setFilterAbleProduct} />
                    </FilterSec>
                    <ProductSec>
                        {
                            filterAbleProduct && filterAbleProduct.length > 0 && filterAbleProduct.map((product) =>
                                <Link to={`/${product.slug}/${product._id}/p`} style={{ color: "#333", textDecoration: "none" }}>
                                    <SingleProduct>
                                        <SPIMG>
                                            <img src={`${PF}${product.productPicture[0].img}`} alt="" />
                                        </SPIMG>
                                        <SPDetails>
                                            <Name>{product.name}</Name>
                                            <img src={ProductTypePagelogo} style={{ height: "20px", width: "70px" }} alt="" />
                                            <Price>${product.price} <span>82% off</span></Price>
                                        </SPDetails>
                                    </SingleProduct>
                                </Link>

                            )
                        }
                    </ProductSec>
                </WraperBox>
            </Body>
        </div>
    )
}
