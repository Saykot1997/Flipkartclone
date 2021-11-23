import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import Productactions from '../../../Context/Product context/Product.actions';
import { Body, FilterSec, ProductSec, ProductWraper, Reatings, WraperBox } from './ProductList.style';
import { productContext } from '../../../Context/Product context/ProductContextProvider';
import { Link } from 'react-router-dom';
import { Header } from '../../../Components/Header/Header';
import { Menu } from '../../../Components/Menu-Header/Menu';
import BottomFooter from '../../../Components/Footer/BottomFooter';
import Filter from '../../../Components/Filter/Filter';

export default function BrandProduct() {

    const { productDispatch } = useContext(productContext);
    const [filterAbleProduct, setFilterAbleProduct] = useState(null);
    const PF = "http://localhost:8000/"
    const path = useLocation().pathname.split('/')[2];
    const logo = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"

    const getProduct = async () => {
        const res = await axios.get("/products/" + path);

        if (Array.isArray(res.data)) {
            productDispatch({ type: Productactions.Feaching_success, payload: res.data });
            setFilterAbleProduct(res.data);

        } else if (Array.isArray(res.data.products)) {
            productDispatch({ type: Productactions.Feaching_success, payload: res.data.products });
            setFilterAbleProduct(res.data.products);
        }
    }

    useEffect(() => {

        getProduct()

    }, [])


    return (
        <>
            <Header />
            <Menu />
            <Body>
                <WraperBox>
                    <FilterSec>
                        <Filter setFilterAbleProduct={setFilterAbleProduct} />
                    </FilterSec>
                    <ProductSec>
                        {
                            filterAbleProduct && filterAbleProduct.length > 0 && filterAbleProduct.map((product) =>

                                <Link to={`/${product.slug}/${product._id}/p`} style={{ color: "#333", textDecoration: "none", display: "block", width: "100%" }}>
                                    <ProductWraper>
                                        <div>
                                            <img src={`${PF}${product.productPicture[0].img}`} />
                                        </div>
                                        <div>
                                            <h4>{product.name}</h4>
                                            <div style={{ display: "flex", marginTop: "10px" }}>
                                                <Reatings>4.6</Reatings>
                                                <p>345678 Reating and 34567 Reviews</p>
                                            </div>


                                        </div>
                                        <div>
                                            <h4>${product.price}<img style={{ height: "20px", width: "70px" }} src={logo} alt="" /></h4>
                                            <p>Upto <span>${product.price}</span> off on Exchange</p>
                                        </div>
                                    </ProductWraper>
                                </Link>

                            )
                        }
                    </ProductSec>
                </WraperBox>
            </Body>
            <BottomFooter />
        </>
    )
}
